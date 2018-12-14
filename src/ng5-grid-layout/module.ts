import { NgModule } from '@angular/core';
import { NgGridItemComponent } from './component/NgGridItem.component';
import { NgGridLayoutComponent } from './component/NgGridLayout.component';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [ NgGridItemComponent, NgGridLayoutComponent],
  // entryComponents:  [ NgGridPlaceholder ],
  providers: [EventService],
  exports: [ NgGridItemComponent, NgGridLayoutComponent, EventService]
})
export class Ng5GridLayoutModule {}
