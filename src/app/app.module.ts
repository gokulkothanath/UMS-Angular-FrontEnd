import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { CommonModule } from '@angular/common';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { signUpReducer, userReducer } from './states/user/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './states/user/user.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomInterceptor } from './interceptor/custom.interceptor';
import { NewPipe } from './pipes/new.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    UserlistComponent,
    CreateuserComponent,
    NavbarComponent,
    NewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([UserEffects])    
  ],
  providers: [provideHttpClient(),provideClientHydration(),provideState('User',userReducer),provideStore(),provideState('SignUp',signUpReducer),{provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
