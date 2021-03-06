import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './page/layout';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
