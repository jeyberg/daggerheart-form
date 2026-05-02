import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-sheet-overview',
  imports: [ButtonModule, RouterLink, PanelModule],
  templateUrl: './sheet-overview.component.html',
  styleUrl: './sheet-overview.component.sass'
})
export class SheetOverviewComponent {

}
