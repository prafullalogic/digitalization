
//angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/mainlayout/mainlayout.component';
import { PerformanceComponent } from './component/dashboard/performance/performance.component';
import { DealerListComponent } from './component/dealer/dealerlist/dealerlist.component';
import { AdAccountListComponent } from './component/adaccount/adaccountlist/adaccountlist.component';
import { ManageAccountComponent } from './component/adaccount/manage-account/manage-account.component';
import { CreatecampaignComponent } from './component/campaign/createcampaign/createcampaign.component';
import { ManagedealerComponent } from './component/dealer/managedealer/managedealer.component';
import { CreatedealerComponent } from './component/dealer/createdealer/createdealer.component';
import { ManagecampaignComponent } from './component/campaign/managecampaign/managecampaign.component';
import { CreateadaccountComponent } from './component/adaccount/createadaccount/createadaccount.component'


//authgaurd
import { AuthGuard } from './authguard/authguard.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
      // {
      //   path: 'manageAccount',
      //   component: MainLayoutComponent,
      //   children: [
      //     {
      //       path: '',
      //       component: ManageAccountComponent,
      //       canActivate: [AuthGuard]
      //     }]
      // },
  {
    path: 'DealerDigitisation',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PerformanceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'DealerList',
        component: DealerListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'AdAccountList',
        component: AdAccountListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manageAccount',
        component: ManageAccountComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'createCampaign',
        component: CreatecampaignComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manageDealer',
        component: ManagedealerComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'createDealer',
        component: CreatedealerComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manageCampaign',
        component: ManagecampaignComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manageCampaign',
        component: ManagecampaignComponent,
        canActivate: [AuthGuard]
      }
 
]
},
{
  path: 'AdAccount',
  component: MainLayoutComponent,
  children: [    
    {
      path: 'createAccount',
      component: CreateadaccountComponent,
      canActivate: [AuthGuard]
    }

]
}

]
;
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
