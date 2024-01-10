import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HeroComponent } from './heore/hero/hero.component';
import { ListComponent } from './heore/list/list.component';
import { DbzModuleModule } from './dbz.module/dbz.module.module';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, CounterAppComponent, HeroComponent, ListComponent, DbzModuleModule]
})
export class AppComponent {

public title : string = 'Mi Primera App De Angular'


}
