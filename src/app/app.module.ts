import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './core/api.service';
import { AppComponent } from './app.component';
import { LoadingComponent } from './core/loading.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CallbackComponent,
      HeaderComponent,
      FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      AppRoutingModule
  ],
  providers: [ApiService,
      Title,
      AuthService,
      ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
