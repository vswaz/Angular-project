import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    HomepageComponent,
    FrameworkComponent,
         AdminComponent,
         AboutComponent,
         DetailsPageComponent,
         CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
       {
        path: 'biographys/:biographyid',
        component: DetailsPageComponent
       }
      
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
