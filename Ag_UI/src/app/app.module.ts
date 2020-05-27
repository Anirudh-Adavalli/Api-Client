import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule } from '@ngx-translate/core';
import { InputModule, NavbarModule } from '@agilent/ui-element';
import{ ButtonModule } from '@agilent/ui-element';
import { AnalysisMethodsComponent } from './analysis-methods/analysis-methods.component';
import { SequenceTemplateComponent } from './sequence-template/sequence-template.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiModule} from 'src/app/api.module';
import { PositionsService } from './api/positions.service';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisMethodsComponent,
    SequenceTemplateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    InputModule,
    ButtonModule,
    NavbarModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [PositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
