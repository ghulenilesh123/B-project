import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, HostListener } from '@angular/core';
import { LoginServiceService } from 'src/app/all_service/service/login-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-practice-1',
  templateUrl: './practice-1.component.html',
  styleUrls: ['./practice-1.component.css']
})
export class Practice1Component {
  public facebookImg: string = "../../../../assets/claimsModuleImages/fb-ico.svg"
  public linkedinImg: string = "../../../../assets/claimsModuleImages/lin-ico.svg"
  public twtImg: string = "../../../../assets/claimsModuleImages/tw-ico.svg"
  public youtubeImg: string = "../../../../assets/claimsModuleImages/yt-ico.svg"
  public instagramImg: string = "../../../../assets/claimsModuleImages/inst-ico.svg"

  public entrustImg: string = "../../../../assets/claimsModuleImages/entrust.png"
  public digicertImg: string = "../../../../assets/claimsModuleImages/digicert.png"
 
   public mail: any = "customersupport@icicilombard.com";

    public companies = [
    'ICICI Group',
    'ICICI Bank',
    'ICICI Prudential Life Insurance',
    'ICICI Prudential Mutual Fund',
    'ICICI Direct',
    'ICICI Lombard General Insurance',
    'ICICI Securities'
  ];
  selectedCompany = '';
  }




   




  



