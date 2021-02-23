
//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//third-party
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

//routing
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SpinnerComponent } from './app.spinner';
import { MainLayoutComponent } from './component/mainlayout/mainlayout.component';
import { FooterComponent } from './component/mainlayout/footer/footer.component';
import { SidebarComponent } from './component/mainlayout/sidebar/sidebar.component';
import { HeaderComponent } from './component/mainlayout/header/header.component';
import { PerformanceComponent } from './component/dashboard/performance/performance.component';
import { DealerListComponent } from './component/dealer/dealerlist/dealerlist.component';
import { AdAccountListComponent } from './component/adaccount/adaccountlist/adaccountlist.component';
import { ManageAccountComponent } from './component/adaccount/manage-account/manage-account.component';
import { ManagecampaignComponent } from './component/campaign/managecampaign/managecampaign.component';
import { CreatecampaignComponent } from './component/campaign/createcampaign/createcampaign.component';
import { ManagedealerComponent } from './component/dealer/managedealer/managedealer.component';
import { CreateadaccountComponent } from './component/adaccount/createadaccount/createadaccount.component';
// import { UploadComponent } from './component/adaccount/createadaccount/upload.component';
import { ChangebudgetComponent } from './component/campaign/managecampaign/changebudget/changebudget.component';
import { ViewonplatformComponent } from './component/campaign/managecampaign/viewonplatform/viewonplatform.component';
import { EditkeywordComponent } from './component/campaign/managecampaign/editkeyword/editkeyword.component';


//service
import { AuthService } from './service/auth.service';
// import { NodeService } from './component/manage-account/nodeservice';

//Localstorage
import { LocalStorageModule } from 'angular-2-local-storage';

//Interceptor
import { TokenInterceptorService } from './interceptor/httpconfig.interceptor';
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    MainLayoutComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    PerformanceComponent,
    DealerListComponent,
    AdAccountListComponent,
    ManageAccountComponent,
    CreatecampaignComponent,
    ManagedealerComponent,
    ManagecampaignComponent,
    CreateadaccountComponent,
    ChangebudgetComponent,
    ViewonplatformComponent,
    EditkeywordComponent,
    // UploadComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    StepsModule,
    FileUploadModule,
    DialogModule,
    // UploadComponent,
    NgHttpLoaderModule.forRoot(),
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    AuthService,
    MessageService,
    // NodeService,
    CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
