import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserregformComponent } from './userregform/userregform.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CharacteronlyDirective } from './characteronly.directive';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { AddrechargeComponent } from './addrecharge/addrecharge.component';
import { NewdataComponent } from './newdata/newdata.component';
import { PayrechargeComponent } from './payrecharge/payrecharge.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserpannelComponent } from './userpannel/userpannel.component';
import { UserviewComponent } from './userview/userview.component';
import { HistoryComponent } from './history/history.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';


const approute:Routes=[
{path:'home', component:HomeComponent},
{path:'gallary' ,component:GallaryComponent},
{path:'addr' ,component:AddrechargeComponent},
{path:'view' ,component:ViewdataComponent},
{path:'data',component:NewdataComponent},
{path:'recharge' ,component:RechargeComponent,
children:[
{path:'addr',component:AddrechargeComponent},
{path:'view',component:ViewdataComponent},
{path:'user',component:UserinfoComponent},
{path:'logout',component:LoginComponent}
]
},
{path:'about',component:AboutusComponent},
{path:'login',component:LoginComponent},
{path:'user',component:UserregformComponent},
{path:'usrpanel',component:UserpannelComponent,
children:[
  {path: 'usrview',component:UserviewComponent},
  {path: 'history',component:HistoryComponent},
  
  {path: 'logout',component:LogoutComponent}
]},
{path:'newuser',component:UserComponent},
{path:'update/:i',component:UpdatedataComponent},
{path:'contact',component:ContactusComponent},
{path:'view',component:ViewdataComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserregformComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    PagenotfoundComponent,
    CharacteronlyDirective,
    GallaryComponent,
    AboutusComponent,
    RechargeComponent,
    PaymentComponent,
    UserComponent,
    ViewdataComponent,
    AddrechargeComponent,
    NewdataComponent,
    PayrechargeComponent,
    UserinfoComponent,
    UserpannelComponent,
    UserviewComponent,
    HistoryComponent,
    LogoutComponent,
    UpdatedataComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approute),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
