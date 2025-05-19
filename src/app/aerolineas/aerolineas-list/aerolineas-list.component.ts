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
  
  selectedSerie: Aerolineas | null = null;

  onSelect(serie: Aerolineas): void {
    this.selectedSerie = serie;
  }
  ngOnInit(): void {
    this.AerolineasService.getSeries().subscribe(data => {
      this.aerolineas = data;
    });
  }
}
