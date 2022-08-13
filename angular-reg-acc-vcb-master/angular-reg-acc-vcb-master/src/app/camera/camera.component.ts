import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Output() getPicture = new EventEmitter<WebcamImage>();
  @Output() btnGTTTEvent = new EventEmitter<string>();
  @Input() typecam = 'gttt';
  @Input() showWebcam = true;
  @Input() reShowBtnFront = false;
  @Input() reShowBtnBack = false;
  @Input() reShowBtnFace = false;

  deviceInfo!: any;
  isMobile = false;
  isTablet = false;
  isDesktopDevice = false;

  isCameraExist = true;
  isCheckingFace = false;

  btnWebcamFront = 'Chụp Ảnh';
  btnWebcamBack = 'Chụp Ảnh';
  btnWebcamFace = 'Bắt Đầu';

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  width!: number;
  height!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
  }

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });

    this.device();
    this.btnWebcam();
  }

  ngAfterContentChecked() {
    this.btnWebcam();
  }

  device() {
    // this.deviceInfo = this.deviceService.getDeviceInfo();
    // this.isMobile = this.deviceService.isMobile();
    // this.isTablet = this.deviceService.isTablet();
    // this.isDesktopDevice = this.deviceService.isDesktop();

    // if (this.isMobile) {
    //   this.width = this.width*(90/100);
    // }

    this.width = this.width*(90/100);
  }

  swalAlert(title: any, text: any, type: any) {
    Swal.fire(
        title,
        text,
        type
    );
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  takeSnapshots(): void {
    if (this.reShowBtnFace) return;
    this.isCheckingFace = true;

    setTimeout(() => {
        this.takeSnapshot();
    }, 1000);

    setTimeout(() => {
        this.takeSnapshot();
    }, 2000);

    setTimeout(() => {
      this.takeSnapshot();
      this.isCheckingFace = false;
      this.swalAlert('Thông báo', 'Hệ thống đã thực hiện ghi hình khuôn mặt của bạn!', 'success');
    }, 3000);
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
  }

  btnGTTTItem(value: string) {
    this.btnGTTTEvent.emit(value);
  }

  btnWebcam() {
    if (!this.reShowBtnFront) {
      this.btnWebcamFront = 'Chụp Ảnh';
    } else {
      this.btnWebcamFront = 'Chụp Lại';
    }

    if (!this.reShowBtnBack) {
      this.btnWebcamBack = 'Chụp Ảnh';
    } else {
      this.btnWebcamBack = 'Chụp Lại';
    }

    if (!this.reShowBtnFace) {
      this.btnWebcamFace = 'Bắt Đầu';
    } else {
      this.btnWebcamFace = 'Làm Lại';
    }
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

}
