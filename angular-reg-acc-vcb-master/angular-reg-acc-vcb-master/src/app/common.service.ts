import {Injectable} from '@angular/core';
import * as $ from "jquery";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public appService: AppService,) {
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

    let loaiTKhoan = [];
    let maLoaiTKhoan = '';
    let tenLoaiTKhoan = '';
    let text_loaitk_khac: any = $('#text_loaitk_khac').val()?.toString();
    if ($('#loaitk_thanhtoan').is(":checked")) {
      maLoaiTKhoan = 'loaitk_thanhtoan';
      tenLoaiTKhoan = 'Thanh toán';
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }
    if ($('#loaitk_thanhtoanchung').is(":checked")) {
      maLoaiTKhoan = 'loaitk_thanhtoanchung';
      tenLoaiTKhoan = 'Thanh toán chung';
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }
    if ($('#loaitk_khac').is(":checked")) {
      maLoaiTKhoan = 'loaitk_khac';
      tenLoaiTKhoan = text_loaitk_khac;
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }

    let maDVu = '';
    let tenDVu = '';
    if ($('#dv_vcb_sms_banking').is(":checked")) {
      maDVu = 'dv_vcb_sms_banking';
      tenDVu = 'SMS Banking (Tin nhắn)';

    }
    if ($('#dv_vcb_digibank').is(":checked")) {
      maDVu = 'dv_vcb_digibank';
      tenDVu = 'Digibank (Ngân hàng số)';
    }
    if ($('#dv_vcb_phone_banking').is(":checked")) {
      maDVu = 'dv_vcb_phone_banking';
      tenDVu = 'Phone Banking (Tổng đài 24/7)';
    }

    let goiTKhoan = [];
    let maGoi = '';
    let tenGoi = '';
    let goitk_khac: any = $('#goitk_khac').val()?.toString();
    if ($('#goitk_vcb_eco').is(":checked")) {
      maGoi = 'goitk_vcb_eco';
      tenGoi = 'Gói tài khoản Eco';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: "",
        gchu: ""
      });
    }

    if ($('#goitk_vcb_plus').is(":checked")) {
      maGoi = 'goitk_vcb_plus';
      tenGoi = 'Gói tài khoản Plus';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: "",
        gchu: ""
      });
    }

    if ($('#goitk_vcb_pro').is(":checked")) {
      maGoi = 'goitk_vcb_pro';
      tenGoi = 'Gói tài khoản Pro';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: "",
        gchu: ""
      });
    }

    if ($('#goitk_vcb_advanced').is(":checked")) {
      maGoi = 'goitk_vcb_advanced';
      tenGoi = 'Gói tài khoản Advanced';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: "",
        gchu: ""
      });
    }

    if ($('#goitk_khac').is(":checked")) {
      maGoi = 'goitk_khac';
      tenGoi = 'Khác (ghi rõ)';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: goitk_khac,
        phi: "",
        gchu: ""
      });
    }


    let dvuTheGNo = [];
    let maLoaiThe = '';
    let tenLoaiThe = '';
    let pthucPHanh = 0;
    let ttoanPhiHanh = 0;
    let phanhThePhu = false
    let text_vcb_ghinokhac: any = $('#text_vcb_ghinokhac').val()?.toString();

    if ($('#phat_hanh_the_phu_yes').is(":checked")) {
      phanhThePhu = true;
    }
    if ($('#phat_hanh_the_phu_no').is(":checked")) {
      phanhThePhu = false;
    }

    if ($('#vcb_connect24_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_connect24_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_connect24_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_connect24_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }
    if ($('#vcb_connect24_yes').is(":checked")) {
      maLoaiThe = 'vcb_connect24_yes';
      tenLoaiThe = 'Thẻ ghi nợ nội địa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: false,
      });
    }

    if ($('#vcb_connect24_no').is(":checked")) {
      maLoaiThe = 'vcb_connect24_yes';
      tenLoaiThe = 'Thẻ ghi nợ nội địa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: false,
      });
    }


    if ($('#vcb_connect24_visa_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_connect24_visa_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_connect24_visa_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_connect24_visa_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_connect24_visa_yes').is(":checked")) {
      maLoaiThe = 'vcb_connect24_visa_yes';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Visa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_connect24_visa_no').is(":checked")) {
      maLoaiThe = 'vcb_connect24_visa_no';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Visa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }

    ////////////
    if ($('#vcb_visa_debit_platinum_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_visa_debit_platinum_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_visa_debit_platinum_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_visa_debit_platinum_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_visa_debit_platinum_yes').is(":checked")) {
      maLoaiThe = 'vcb_visa_debit_platinum_yes';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Platinum';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_visa_debit_platinum_no').is(":checked")) {
      maLoaiThe = 'vcb_visa_debit_platinum_no';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Platinum';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
////////////////////////
    if ($('#vcb_mastercard_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_mastercard_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_mastercard_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_mastercard_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_mastercard_yes').is(":checked")) {
      maLoaiThe = 'vcb_mastercard_yes';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Mastercard';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_mastercard_no').is(":checked")) {
      maLoaiThe = 'vcb_mastercard_no';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Mastercard';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
//////////////////////

    if ($('#vcb_unionpay_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_unionpay_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_unionpay_fast').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_unionpay_auto').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_unionpay_yes').is(":checked")) {
      maLoaiThe = 'vcb_unionpay_yes';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Unionpay';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_unionpay_no').is(":checked")) {
      maLoaiThe = 'vcb_unionpay_no';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Unionpay';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    ///////

    if ($('#vcb_cashback_plus_american_express_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_cashback_plus_american_express_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_cashback_plus_american_express_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_cashback_plus_american_express_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_cashback_plus_american_express_yes').is(":checked")) {
      maLoaiThe = 'vcb_cashback_plus_american_express_yes';
      tenLoaiThe = 'Thẻ Cashback Plus American Express';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_cashback_plus_american_express_no').is(":checked")) {
      maLoaiThe = 'vcb_cashback_plus_american_express_no';
      tenLoaiThe = 'Thẻ Cashback Plus American Express';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /////
    if ($('#vcb_ghinokhac_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_ghinokhac_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_ghinokhac_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_ghinokhac_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_ghinokhac_no').is(":checked")) {
      maLoaiThe = 'vcb_ghinokhac_no';
      tenLoaiThe = text_vcb_ghinokhac;
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    if ($('#vcb_ghinokhac_yes').is(":checked")) {
      maLoaiThe = 'vcb_ghinokhac_yes';
      tenLoaiThe = text_vcb_ghinokhac;
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }


    let cam_ket_cua_kh_1 = false;
    if ($('#cam_ket_cua_kh_1_yes').is(":checked")) cam_ket_cua_kh_1 = true;
    if ($('#cam_ket_cua_kh_1_no').is(":checked")) cam_ket_cua_kh_1 = false;


    let cam_ket_cua_kh_2 = false;
    if ($('#cam_ket_cua_kh_2_yes').is(":checked")) cam_ket_cua_kh_2 = true;
    if ($('#cam_ket_cua_kh_2_no').is(":checked")) cam_ket_cua_kh_2 = true;


    let cam_ket_cua_kh_3 = false;
    if ($('#cam_ket_cua_kh_3_yes').is(":checked")) cam_ket_cua_kh_3 = true;
    if ($('#cam_ket_cua_kh_3_no').is(":checked")) cam_ket_cua_kh_3 = true;


    let cam_ket_cua_kh_4 = false;
    if ($('#cam_ket_cua_kh_4_yes').is(":checked")) cam_ket_cua_kh_4 = true;
    if ($('#cam_ket_cua_kh_4_no').is(":checked")) cam_ket_cua_kh_4 = false;

    /*let data = {
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
    };*/
    //TTinDKyMoTKhoan

    let data = {
      ycTaoDonDKy: {
        "fis.onboarding.process.banking.model.TTinDKyMoTKhoan": {
          cif: "",
          mobile: "",
          email: "",
          "gtoTThan": {
            "loaiGToTThan": 4,
            "soGTo": $(this.appService.datatGToTThan.soCmt).val()?.toString(),
            "noiCap": $('#noicapgttt').val()?.toString(),
            "hoTen": $('#hoTen').val()?.toString(),
            "gioiTinh": $('#ngaySinh').val()?.toString(),
            "quocTich": $('#quocTich').val()?.toString(),
            "soCmt": $('#soCmt').val()?.toString(),
            "hoVaTen": $(this.appService.datatGToTThan.hoVaTen).val()?.toString(),
            "namSinh": $('#soCmt').val()?.toString(),
            "queQuan": $('#soCmt').val()?.toString(),
            "noiTru": $('#soCmt').val()?.toString(),
            "dacDiemNhanDang": $('#soCmt').val()?.toString(),
            "ngayCap2": $(this.appService.datatGToTThan.ngayCap2).val()?.toString(),
            "loaiCmt": $('#soCmt').val()?.toString(),
            "loaiCmtMatTruoc": $('#soCmt').val()?.toString(),
            "loaiCmtKhacMatTruoc": $('#soCmt').val()?.toString(),
            "ngayHetHan": $('#soCmt').val()?.toString(),
            "gioiTinh2": $(this.appService.datatGToTThan.gioiTinh2).val()?.toString(),
            "diaChi2": $('#soCmt').val()?.toString()
          },
          dvuNHang: {
            maDVu: maDVu,
            tenDVu: tenDVu,
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
            goiTKhoan: goiTKhoan,
            dvuTheGNo: dvuTheGNo,
            pthucXThuc: 1,
            dkhoanDKien: {
              dkdkTKhoan: cam_ket_cua_kh_1,
              dkdkNHangDTu: cam_ket_cua_kh_2,
              dkdkTheGNo: cam_ket_cua_kh_3,
              dkdkPThucXThuc: cam_ket_cua_kh_4
            },
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
            },
          }
        }
      }
    };

    return data;
  }
}
