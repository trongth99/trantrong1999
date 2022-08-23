import {Injectable} from '@angular/core';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  formReg(inputData: any) {
    let thoihancutru: any = $('#thoihancutru').val()?.toString();
    let thoigianodiachihientai: any = $('#thoigianodiachihientai').val()?.toString();

    let cutru = false;
    if ($('#cutru_co').is(":checked")) cutru = true;
    if ($('#cutru_khong').is(":checked")) cutru = false;

    let maCVu = '';
    let tenCVu = '';
    let cvkhac: any = $('#text_cvkhac').val()?.toString();
    if ($('#CVu1').is(":checked")) {
      maCVu = 'CVu1';
      tenCVu = 'Nhân viên ';
    }

    if ($('#CVu2').is(":checked")) {
      maCVu = 'CVu2';
      tenCVu = 'Trưởng phòng, giám sát ';
    }

    if ($('#CVu3').is(":checked")) {
      maCVu = 'CVu3';
      tenCVu = 'Giám đốc, quản lý cấp cao';
    }

    if ($('#cvkhac').is(":checked")) {
      maCVu = 'cvkhac';
      tenCVu = cvkhac;
    }

    let maNNghiep = '';
    let tenNNghiep = '';
    let nghenghiepkhac: any = $('#text_nghenghiepkhac').val()?.toString();
    if ($('#nghenghiep1').is(":checked")) {
      maNNghiep = 'nghenghiep1';
      tenNNghiep = 'Nhân viên văn phòng';
    }
    if ($('#nghenghiep2').is(":checked")) {
      maNNghiep = 'nghenghiep2';
      tenNNghiep = 'Bác sĩ, dược sĩ, y tá';
    }
    if ($('#nghenghiep3').is(":checked")) {
      maNNghiep = 'nghenghiep3';
      tenNNghiep = 'Công nhân viên chức';
    }
    if ($('#nghenghiep4').is(":checked")) {
      maNNghiep = 'nghenghiep4';
      tenNNghiep = 'Kỹ sư, công nhân xây dựng';
    }
    if ($('#nghenghiep5').is(":checked")) {
      maNNghiep = 'nghenghiep5';
      tenNNghiep = 'Lực lượng vũ trang';
    }
    if ($('#nghenghiep6').is(":checked")) {
      maNNghiep = 'nghenghiep6';
      tenNNghiep = 'Học sinh, sinh viên';
    }
    if ($('#nghenghiepkhac').is(":checked")) {
      maNNghiep = 'nghenghiepkhac';
      tenNNghiep = nghenghiepkhac;
    }

    let khongquoctich = false;
    if ($('#khongquoctich_co').is(":checked")) khongquoctich = true;
    if ($('#khongquoctich_khong').is(":checked")) khongquoctich = false;

    let daquoctich = false;
    if ($('#daquoctich_co').is(":checked")) daquoctich = true;
    if ($('#daquoctich_khong').is(":checked")) daquoctich = false;

    let congdanhoaky = false;
    if ($('#congdanhoaky_co').is(":checked")) congdanhoaky = true;
    if ($('#congdanhoaky_khong').is(":checked")) congdanhoaky = true;

    let loaiTien = '';
    let loaitien_khac: any = $('#text_loaitien_khac').val()?.toString();
    if ($('#vnd').is(":checked")) loaiTien = 'VNĐ';
    if ($('#usd').is(":checked")) loaiTien = 'USD';
    if ($('#loaitien_khac').is(":checked")) loaiTien = loaitien_khac;

    let maLoaiTKhoan = '';
    let tenLoaiTKhoan = '';
    let loaitk_khac: any = $('#text_loaitk_khac').val()?.toString();
    if ($('#loaitk_thanhtoan').is(":checked")) {
      maLoaiTKhoan = 'loaitk_thanhtoan';
      tenLoaiTKhoan = 'Thanh toán';
    }
    if ($('#loaitk_thanhtoanchung').is(":checked")) {
      maLoaiTKhoan = 'loaitk_thanhtoanchung';
      tenLoaiTKhoan = 'Thanh toán chung';
    }
    if ($('#loaitk_khac').is(":checked")) {
      maLoaiTKhoan = 'loaitk_khac';
      tenLoaiTKhoan = loaitk_khac;
    }

    let maDVu = '';
    let tenDVu = '';
    if ($('#dv_vcb_sms_banking').is(":checked")) {
      maDVu = 'dv_vcb_sms_banking';
      tenDVu = 'SMS Banking (Tin nhắn)';
    }

    let data = {
      customerUser: {
        "fis.onboarding.process.banking.model.CustomerUser": {
          cif: "",
          dvuNHang: {
            maDVu: "",
            tenDVu: "",
          },
          tkhoanTToan: [
            {
              loaiTKhoan: [
                {
                  maLoaiTKhoan: maLoaiTKhoan,
                  tenLoaiTKhoan: tenLoaiTKhoan,
                }
              ],
              soTKhoan: "",
              hmucGDich: 1,
              loaiTien: loaiTien,
            }
          ],
          customerProfile: {
            maSoThue: $('#masothuecanhan').val()?.toString(),
            cuTru: cutru,
            thanCTru: parseInt(thoihancutru),
            thiThuc: false,
            gtoMienTThuc: "",
            ngheNghiep: {
              maNNghiep: maNNghiep,
              tenNNghiep: tenNNghiep
            },
            chucVu: {
              maCVu: maCVu,
              tenCVu: tenCVu
            },
            dchiNNgoai: $('#diachinuocngoai').val()?.toString(),
            dchiHTai: $('#diachiohientai').val()?.toString(),
            tgianODChiHTai: parseInt(thoigianodiachihientai),
            ckyMau1: inputData.sign1.toDataURL(),
            ckyMau2: inputData.sign2.toDataURL(),
            ttinTThu: {
              khongQTich: khongquoctich,
              daQTich: daquoctich,
              qtichMy: congdanhoaky,
              mdichGDich: [
                {
                  maMDich: "",
                  tenMDich: "",
                }
              ]
            }
          }
        }
      }
    };

    // let data = {
    //   TTinDKyMoTKhoan: {
    //     "fis.onboarding.process.banking.model.TTinDKyMoTKhoan": {
    //       dvuNHang: {
    //         maDVu: "",
    //         tenDVu: "",
    //       },
    //       tkhoanTToan: [
    //         {
    //           loaiTKhoan: [
    //             {
    //               maLoaiTKhoan: maLoaiTKhoan,
    //               tenLoaiTKhoan: tenLoaiTKhoan,
    //             }
    //           ],
    //           soTKhoan: "",
    //           hmucGDich: 1,
    //           loaiTien: loaiTien,
    //         }
    //       ],
    //       goiTKhoan: [
    //         {
    //           maGoi: "",
    //           tenGoi: "",
    //           phi: "",
    //           gchu: ""
    //         }
    //       ],
    //       dvuTheGNo: [
    //         {
    //           maLoaiThe: "",
    //           tenLoaiThe: "",
    //           pthucPHanh: 0,
    //           ttoanPhiPHanh: 0,
    //           phanhThePhu: false,
    //         }
    //       ],
    //       pthucXThuc: 0,
    //       dkhoanDKien: {
    //         dkdkTKhoan: false,
    //         dkdkNHangDTu: false,
    //         dkdkTheGNo: false,
    //         dkdkPThucXThuc: false
    //       },
    //       ttinTThu: {
    //         khongQTich: khongquoctich,
    //         daQTich: daquoctich,
    //         qtichMy: congdanhoaky,
    //         mdichGDich: [
    //           {
    //             maMDich: "",
    //             tenMDich: "",
    //           }
    //         ]
    //       },
    //       donDKyDVu: "",
    //     }
    //   }
    // };

    return data;
  }
}
