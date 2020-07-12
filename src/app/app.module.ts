import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { RandColorDirective } from './directives/rand-color.directive';
import { ChosenColorDirective } from './directives/chosen-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirComponent,
    RandColorDirective,
    ChosenColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
