import { Component } from '@angular/core';
import { FlavorsService } from '../../services/flavors-service.service';
import { Flavor } from '../../entities/Flavor';

@Component({
  selector: 'app-select-flavor',
  templateUrl: './select-flavor.component.html',
  styleUrls: ['./select-flavor.component.css']
})
export class SelectFlavorComponent {

  flavors: Array<Flavor>;

  constructor(public fs: FlavorsService) {
    fs.readAll().subscribe(res => {
      this.flavors = res.map(result => {
        return new Flavor(result.id, result.name, result.price);
      });
    });
  }

}
