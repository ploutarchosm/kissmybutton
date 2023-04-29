import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { BodyComponent } from '@app/components/body/body.component';
import { PaginatorComponent } from '@app/components/paginator/paginator.component';
import { SearchComponent } from '@app/components/search/search.component';

// Pipes
import { FormatNumberPipe } from '@app/pipes/format-number.pipe';

// Globals
import { HTTP_CONFIG } from "@app/constants/global";
import { environment } from "@env/environment";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PaginatorComponent,
    SearchComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_CONFIG,
      useValue: {
        production: environment.production,
        apiKey: environment.apiKey,
        endPoint: environment.endPoint,
        domains: environment.domains
      },
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
