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

    let giotinh = this.appService.datatGToTThan.gioiTinh;
    let cutru = false;
    if ($('#cutru_co').is(":checked")) cutru = true;
    if ($('#cutru_khong').is(":checked")) cutru = false;

    let maCVu = '';
    let tenCVu = '';
    let cvkhac: any = $('#text_cvkhac').val()?.toString();
    if ($('#CVu1').is(":checked")) {
      maCVu = '01';
      tenCVu = 'Nhân viên ';
    }

    if ($('#CVu2').is(":checked")) {
      maCVu = '02';
      tenCVu = 'Trưởng phòng, giám sát ';
    }

    if ($('#CVu3').is(":checked")) {
      maCVu = '03';
      tenCVu = 'Giám đốc, quản lý cấp cao';
    }
    if ($('#CVu4').is(":checked")) {
      maCVu = '04';
      tenCVu = 'Chủ doanh nghiệp';
    }
    if ($('#cvkhac').is(":checked")) {
      maCVu = '99';
      tenCVu = cvkhac;
    }

    let maNNghiep = '';
    let tenNNghiep = '';
    let nghenghiepkhac: any = $('#text_nghenghiepkhac').val()?.toString();
    if ($('#nghenghiep1').is(":checked")) {
      maNNghiep = '01';
      tenNNghiep = 'Nhân viên văn phòng';
    }
    if ($('#nghenghiep2').is(":checked")) {
      maNNghiep = '02';
      tenNNghiep = 'Bác sĩ, dược sĩ, y tá';
    }
    if ($('#nghenghiep3').is(":checked")) {
      maNNghiep = '03';
      tenNNghiep = 'Công nhân viên chức';
    }
    if ($('#nghenghiep4').is(":checked")) {
      maNNghiep = '04';
      tenNNghiep = 'Kỹ sư, công nhân xây dựng';
    }
    if ($('#nghenghiep5').is(":checked")) {
      maNNghiep = '05';
      tenNNghiep = 'Lực lượng vũ trang';
    }
    if ($('#nghenghiep6').is(":checked")) {
      maNNghiep = '07';
      tenNNghiep = 'Học sinh, sinh viên';
    }
    if ($('#7').is(":checked")) {
      maNNghiep = '06';
      tenNNghiep = 'Làm việc tự do';
    }
    if ($('#nghenghiepkhac').is(":checked")) {
      maNNghiep = '99';
      tenNNghiep = nghenghiepkhac;
    }

    let khongquoctich = false;
    if ($('#khongquoctich').is(":checked")) khongquoctich = true;
    if ($('#khongquoctich_khong').is(":checked")) khongquoctich = false;

    let daquoctich = false;
    if ($('#daquoctich').is(":checked")) daquoctich = true;
    if ($('#daquoctich_khong').is(":checked")) daquoctich = false;

    let congdanhoaky = false;
    if ($('#congdanhoaky').is(":checked")) congdanhoaky = true;
    if ($('#congdanhoaky_khong').is(":checked")) congdanhoaky = false;

    let loaiTien = '';
    let loaitien_khac: any = $('#text_loaitien_khac').val()?.toString();
    if ($('#vnd').is(":checked")) loaiTien = 'VND';
    if ($('#usd').is(":checked")) loaiTien = 'USD';
    if ($('#loaitien_khac').is(":checked")) loaiTien = loaitien_khac;

    let loaiTKhoan = [];
    let maLoaiTKhoan = '';
    let tenLoaiTKhoan = '';
    let text_loaitk_khac: any = $('#text_loaitk_khac').val()?.toString();
    let text_loaitk_thanhtoansochon: any = $('#text_loaitk_thanhtoansochon').val()?.toString();
    if ($('#loaitk_thanhtoan').is(":checked")) {
      maLoaiTKhoan = '01';
      tenLoaiTKhoan = 'Thanh toán';
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }
    if ($('#loaitk_thanhtoanchung').is(":checked")) {
      maLoaiTKhoan = '02';
      tenLoaiTKhoan = 'Thanh toán chung';
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }
    if ($('#loaitk_thanhtoansochon').is(":checked")) {
      maLoaiTKhoan = '03';
      tenLoaiTKhoan = text_loaitk_thanhtoansochon;
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }
    if ($('#loaitk_khac').is(":checked")) {
      maLoaiTKhoan = '99';
      tenLoaiTKhoan = text_loaitk_khac;
      loaiTKhoan.push({
        maLoaiTKhoan: maLoaiTKhoan,
        tenLoaiTKhoan: tenLoaiTKhoan,
      });
    }

    let maDVu = '';
    let tenDVu = '';
    if ($('#dv_vcb_sms_banking').is(":checked")) {
      maDVu = '01';
      tenDVu = 'SMS Banking (Tin nhắn)';

    }
    if ($('#dv_vcb_digibank').is(":checked")) {
      maDVu = '02';
      tenDVu = 'Digibank (Ngân hàng số)';
    }
    if ($('#dv_vcb_phone_banking').is(":checked")) {
      maDVu = '03';
      tenDVu = 'Phone Banking (Tổng đài 24/7)';
    }

    let goiTKhoan = [];
    let maGoi = '';
    let tenGoi = '';
    let goitk_khac: any = $('#goitk_khac').val()?.toString();
    if ($('#goitk_vcb_eco').is(":checked")) {
      maGoi = '01';
      tenGoi = 'Gói tài khoản Eco';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: 1,
        gchu: ""
      });
    }

    if ($('#goitk_vcb_plus').is(":checked")) {
      maGoi = '02';
      tenGoi = 'Gói tài khoản Plus';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: 1,
        gchu: ""
      });
    }

    if ($('#goitk_vcb_pro').is(":checked")) {
      maGoi = '03';
      tenGoi = 'Gói tài khoản Pro';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: 1,
        gchu: ""
      });
    }

    if ($('#goitk_vcb_advanced').is(":checked")) {
      maGoi = '04';
      tenGoi = 'Gói tài khoản Advanced';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: tenGoi,
        phi: 1,
        gchu: ""
      });
    }

    if ($('#goitk_khac').is(":checked")) {
      maGoi = '99';
      tenGoi = 'Khác (ghi rõ)';
      goiTKhoan.push({
        maGoi: maGoi,
        tenGoi: goitk_khac,
        phi: 1,
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
      maLoaiThe = '01';
      tenLoaiThe = 'Thẻ ghi nợ nội địa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
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
      maLoaiThe = '02';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Visa';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /*  if ($('#vcb_connect24_visa_no').is(":checked")) {
        maLoaiThe = 'vcb_connect24_visa_no';
        tenLoaiThe = 'Thẻ ghi nợ quốc tế Visa';
        dvuTheGNo.push({
          maLoaiThe: maLoaiThe,
          tenLoaiThe: tenLoaiThe,
          pthucPHanh: pthucPHanh,
          ttoanPhiPHanh: ttoanPhiHanh,
          phanhThePhu: phanhThePhu,
        });
      }*/

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
      maLoaiThe = '03';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Platinum';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /*    if ($('#vcb_visa_debit_platinum_no').is(":checked")) {
          maLoaiThe = 'vcb_visa_debit_platinum_no';
          tenLoaiThe = 'Thẻ ghi nợ quốc tế Platinum';
          dvuTheGNo.push({
            maLoaiThe: maLoaiThe,
            tenLoaiThe: tenLoaiThe,
            pthucPHanh: pthucPHanh,
            ttoanPhiPHanh: ttoanPhiHanh,
            phanhThePhu: phanhThePhu,
          });
        }*/
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
      maLoaiThe = '04';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Mastercard';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /* if ($('#vcb_mastercard_no').is(":checked")) {
       maLoaiThe = 'vcb_mastercard_no';
       tenLoaiThe = 'Thẻ ghi nợ quốc tế Mastercard';
       dvuTheGNo.push({
         maLoaiThe: maLoaiThe,
         tenLoaiThe: tenLoaiThe,
         pthucPHanh: pthucPHanh,
         ttoanPhiPHanh: ttoanPhiHanh,
         phanhThePhu: phanhThePhu,
       });
     }*/
//////////////////////

    if ($('#vcb_unionpay_nomal').is(":checked")) {
      pthucPHanh = 0;
    } else if ($('#vcb_unionpay_fast').is(":checked")) {
      pthucPHanh = 1;
    }
    if ($('#vcb_unionpay_auto').is(":checked")) {
      ttoanPhiHanh = 0;
    } else if ($('#vcb_unionpay_money').is(":checked")) {
      ttoanPhiHanh = 1;
    }

    if ($('#vcb_unionpay_yes').is(":checked")) {
      maLoaiThe = '05';
      tenLoaiThe = 'Thẻ ghi nợ quốc tế Unionpay';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /*    if ($('#vcb_unionpay_no').is(":checked")) {
          maLoaiThe = 'vcb_unionpay_no';
          tenLoaiThe = 'Thẻ ghi nợ quốc tế Unionpay';
          dvuTheGNo.push({
            maLoaiThe: maLoaiThe,
            tenLoaiThe: tenLoaiThe,
            pthucPHanh: pthucPHanh,
            ttoanPhiPHanh: ttoanPhiHanh,
            phanhThePhu: phanhThePhu,
          });
        }*/
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
      maLoaiThe = '06';
      tenLoaiThe = 'Thẻ Cashback Plus American Express';
      dvuTheGNo.push({
        maLoaiThe: maLoaiThe,
        tenLoaiThe: tenLoaiThe,
        pthucPHanh: pthucPHanh,
        ttoanPhiPHanh: ttoanPhiHanh,
        phanhThePhu: phanhThePhu,
      });
    }
    /*  if ($('#vcb_cashback_plus_american_express_no').is(":checked")) {
        maLoaiThe = 'vcb_cashback_plus_american_express_no';
        tenLoaiThe = 'Thẻ Cashback Plus American Express';
        dvuTheGNo.push({
          maLoaiThe: maLoaiThe,
          tenLoaiThe: tenLoaiThe,
          pthucPHanh: pthucPHanh,
          ttoanPhiPHanh: ttoanPhiHanh,
          phanhThePhu: phanhThePhu,
        });
      }*/
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

    /*   if ($('#vcb_ghinokhac_no').is(":checked")) {
         maLoaiThe = 'vcb_ghinokhac_no';
         tenLoaiThe = text_vcb_ghinokhac;
         dvuTheGNo.push({
           maLoaiThe: maLoaiThe,
           tenLoaiThe: tenLoaiThe,
           pthucPHanh: pthucPHanh,
           ttoanPhiPHanh: ttoanPhiHanh,
           phanhThePhu: phanhThePhu,
         });
       }*/
    if ($('#vcb_ghinokhac_yes').is(":checked")) {
      maLoaiThe = '99';
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

    let quequan = this.appService.datatGToTThan.queQuan;

    let noitru = this.appService.datatGToTThan.noiTru;

    let dacDiemNhanDang = this.appService.datatGToTThan.dacDiemNhanDang;

    let ngayCap2 = this.appService.datatGToTThan.ngayCap2;

    let gioiTinh2 = this.appService.datatGToTThan.gioiTinh2;

    let mdichGDich = [];
    let maMDich = '';
    let tenMDich = '';
    let text_ctienkhac: any = $('#text_ctienkhac').val()?.toString();
    if ($('#thanhtoan').is(":checked")) {
      maMDich = '01';
      tenMDich = 'Thanh toán';
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }
    if ($('#tietkiem').is(":checked")) {
      maMDich = '02';
      tenMDich = 'Tiết kiệm';
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }
    if ($('#vayvon').is(":checked")) {
      maMDich = '03';
      tenMDich = 'Vay vốn';
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }
    if ($('#ctientrongnuoc').is(":checked")) {
      maMDich = '04';
      tenMDich = 'Chuyển tiền trong nước';
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }
    if ($('#ctiennuocnoai').is(":checked")) {
      maMDich = '05';
      tenMDich = 'Chuyển tiền nước ngoài';
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }

    if ($('#ctienkhac').is(":checked")) {
      maMDich = '99';
      tenMDich = text_ctienkhac;
      mdichGDich.push({
        maMDich: maMDich,
        tenMDich: tenMDich
      });
    }


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

    let
      data = {
        ycTaoDonKDy: {
          "fis.onboarding.process.banking.model.TTinDKyMoTKhoan": {

            cif: "",
            mobile: $('#dienthoai').val()?.toString(),
            email: $('#email').val()?.toString(),
            "gtoTThan": {
              "loaiGToTThan": 4,
              "soGTo": $('#soCmt').val()?.toString(),
              "noiCap": $('#noicapgttt').val()?.toString(),
              "hoTen": $('#hoTen').val()?.toString(),
              "gioiTinh": giotinh,
              "quocTich": $('#quocTich').val()?.toString(),
              "soCmt": $('#soCmt').val()?.toString(),
              "hoVaTen": $('#hoTen').val()?.toString(),
              "namSinh": $('#ngaySinh').val()?.toString(),
              "queQuan": quequan,
              "noiTru": noitru,
              "dacDiemNhanDang": dacDiemNhanDang,
              "ngayCap2": ngayCap2,
              "loaiCmt": $('#soCmt').val()?.toString(),
              "loaiCmtMatTruoc": "",
              "loaiCmtKhacMatTruoc": "",
              "ngayHetHan": $('#ngayHetHan').val()?.toString(),
              "gioiTinh2": gioiTinh2,
              "diaChi2": $('#diachiohientai').val()?.toString()
            },
            "customerProfile": {
              maSoThue: $('#masothuecanhan').val()?.toString(),
              cuTru: true,
              thanCTru: parseInt(thoihancutru),
              thiThuc: 0,
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
            },
            ttinTThu: {
              khongQTich: khongquoctich,
              daQTich: daquoctich,
              qtichMy: congdanhoaky,
              mdichGDich: mdichGDich
            },
            dkhoanDKien: {
              dkdkTKhoan: cam_ket_cua_kh_1,
              dkdkNHangDTu: cam_ket_cua_kh_2,
              dkdkTheGNo: cam_ket_cua_kh_3,
              dkdkPThucXThuc: cam_ket_cua_kh_4
            },
            "pthucXThuc": 1,
            dvuNHang: {
              maDVu: maDVu,
              tenDVu: tenDVu,
            },
            tkhoanTToan: [
              {
                loaiTKhoan: loaiTKhoan,
                soTKhoan: "",
                hmucGDich: 1,
                loaiTien: loaiTien,
                "tenTKhoan": $('#tentk').val()?.toString()
              }
            ],
            goiTKhoan: goiTKhoan,
            dvuTheGNo: dvuTheGNo,


            /* cif: "",
             mobile: $('#dienthoai').val()?.toString(),
             email: $('#email').val()?.toString(),
             "gtoTThan": {
               "loaiGToTThan": 4,
               "soGTo": $(this.appService.datatGToTThan.soCmt).val()?.toString(),
               "noiCap": $('#noicapgttt').val()?.toString(),
               "hoTen": $('#hoTen').val()?.toString(),
               "gioiTinh": 0,
               "quocTich": $('#quocTich').val()?.toString(),
               "soCmt": $('#soCmt').val()?.toString(),
               "hoVaTen": $(this.appService.datatGToTThan.hoVaTen).val()?.toString(),
               "namSinh": "",
               "queQuan": $(this.appService.datatGToTThan.queQuan).val()?.toString(),
               "noiTru": $(this.appService.customerUser.noiTru).val()?.toString(),
               "dacDiemNhanDang": $(this.appService.datatGToTThan.dacDiemNhanDang).val()?.toString(),
               "ngayCap2": "",
               "loaiCmt": $('#soCmt').val()?.toString(),
               "loaiCmtMatTruoc": "",
               "loaiCmtKhacMatTruoc": "",
               "ngayHetHan": "",
               "gioiTinh2": "",
               "diaChi2": $('#diachiohientai').val()?.toString()
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
               thiThuc: 1,
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
             }*/
          }
        }
      };

    return data;
  }
}
