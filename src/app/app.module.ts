import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OnChangeComponent } from './test-component/onChange.component';
import { NgGridItemComponent } from './component/NgGridItem.component';
import { NgGridLayoutComponent } from './component/NgGridLayout.component';
import { NgGridLayoutDirective } from './directives/layout';
import { EventService } from './service/event.service';
@NgModule({
  declarations: [
    AppComponent,
    OnChangeComponent,
    NgGridItemComponent,
    NgGridLayoutComponent,
    NgGridLayoutDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
