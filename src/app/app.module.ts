import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
/* components */
import { AppComponent } from './app.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { ProjectComponent } from './components/project/project.component';

import { PaintDirective } from './directives/paint.directive';
import { AgePipe } from './pipes/age.pipe';

/* services */
import { ContentService } from './services/content.service';
import { InformationService } from './services/information.service';

/* shared */
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { DeveloperModalComponent } from './components/developer/developer-modal/developer-modal.component';
import { ProjectModalComponent } from './components/project/project-modal/project-modal.component';
import { FinishedDirective } from './directives/finished.directive';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    ProjectComponent,
    PaintDirective,
    AgePipe,
    FooterComponent,
    ToolbarComponent,
    DeveloperModalComponent,
    ProjectModalComponent,
    FinishedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    ContentService,
    InformationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeveloperModalComponent,
    ProjectModalComponent
  ]
})
export class AppModule { }
