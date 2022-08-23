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

  facingMode: string = 'user';  //Set front camera

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
    this.setCssCamera();
  }

  device() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();

    this.width = this.width*(80/100);
    $(".webcam-wrapper").css({"width": "100%"});
    $(".webcam-image").css({"width": "100%"});
  }


  setCssCamera() {
    $(".webcam-wrapper video.mirrored").css(
      {
        "width": "100%",
        "height": "100%",
        "border-radius": "20px",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "overflow": "hidden"
      }
    );

    if (this.isDesktopDevice) {
      $(".webcam-wrapper").css({"width": "800px"});
      $(".webcam-image").css({"width": "800px"});
    } else if (this.isTablet) {
      $(".webcam-wrapper").css({"width": "700px"});
      $(".webcam-image").css({"width": "700px"});
    }
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

  get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }
    return result;
  }

}
