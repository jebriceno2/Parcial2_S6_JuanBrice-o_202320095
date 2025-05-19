import { Component, OnInit } from '@angular/core';
import { Aerolineas } from '../aerolineas';
import { AerolineasService } from '../aerolineas.service';

@Component({
  selector: 'app-aerolineas-list',
  templateUrl: './aerolineas-list.component.html',
  styleUrls: ['./aerolineas-list.component.css']
})
export class AerolineasListComponent implements OnInit {
  aerolineas: Aerolineas[] = [];

  constructor(private AerolineasService: AerolineasService) {}
  
  selectedAerolinea: Aerolineas | null = null;

  onSelect(aerolinea: Aerolineas): void {
    this.selectedAerolinea = aerolinea;
  }
  ngOnInit(): void {
    this.AerolineasService.getAerolineas().subscribe(data => {
      this.aerolineas = data;
    });
  }
}
