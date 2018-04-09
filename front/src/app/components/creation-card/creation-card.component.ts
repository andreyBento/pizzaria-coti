import { Component, OnInit } from '@angular/core';
import { SelectFlavorComponent } from '../select-flavor/select-flavor.component';
import { AddToDom } from '../../services/add-to-dom.service';

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.css']
})
export class CreationCardComponent implements OnInit {

  flavors: number;
  canAddFlavor: boolean;
  canRemoveFlavor: boolean;

  constructor(private addToDom: AddToDom) {
    this.flavors = 1;
    this.canAddFlavor = true;
    this.canRemoveFlavor = false;
  }

  ngOnInit() {
    this.addToDom.appendComponent(SelectFlavorComponent, 'form-flavors');
  }

  addSelect() {
    event.preventDefault();

    this.flavors++;
    this.addToDom.appendComponent(SelectFlavorComponent, 'form-flavors');

    this.canRemoveFlavor = true;

    if (this.flavors === 4) {
      this.canAddFlavor = false;
    }

  }

  removeSelect(id: number) {
    event.preventDefault();

    this.canAddFlavor = true;

    this.flavors--;
    this.addToDom.removeComponent();

    if (this.flavors === 1) {
      this.canRemoveFlavor = false;
    }

  }

}
