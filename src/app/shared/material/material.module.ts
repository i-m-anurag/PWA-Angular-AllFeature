import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule}from '@angular/material/toolbar';
import {MatListModule}from '@angular/material/list';
import {MatIconModule}from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
const MATERIAL_COMPONENT : any[]=[
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_COMPONENT
  ],
  exports:[MATERIAL_COMPONENT]
})
export class MaterialModule { }
