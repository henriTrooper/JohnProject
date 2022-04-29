import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { AssainissementComponent } from './assainissement/assainissement.component';
import { TerrassementComponent } from './terrassement/terrassement.component';
import { TerrassementPiscineComponent } from './terrassementPiscine/terrassementPiscine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmenagementExtComponent } from './amenagement-ext/amenagement-ext.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    ContactComponent,
    AssainissementComponent,
    TerrassementComponent,
    TerrassementPiscineComponent,
    AmenagementExtComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ]
})
export class ProfileModule { }