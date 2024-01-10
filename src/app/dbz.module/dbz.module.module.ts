import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameComponent } from './pages/name/name.component';
import { ListComponent } from './components/list/list.component';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NameComponent,
    ListComponent,

  ],
  exports:[NameComponent]
})
export class DbzModuleModule { }
