import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiibosContainerComponent } from './amiibos-container/amiibos-container.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

@NgModule({
  declarations: [AmiibosContainerComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class FeatureAmiibosModule { }
