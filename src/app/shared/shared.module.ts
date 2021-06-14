import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialModules
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
