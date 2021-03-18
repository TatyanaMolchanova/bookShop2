import {Component, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../shared/services/local-storage.service';
import {ConstantService} from '../shared/services/constant.service';
import {GeneratorService} from '../shared/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() private appVersion: ConstantService,
              @Optional() private localStorage: LocalStorageService,
              @Optional() private generator: GeneratorService) {
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Tatyana M');
    this.appVersion.getInfo();
    this.generator.generatorFactory(7);

    // console.log('1 about this.localStorage', this.localStorage);
    // console.log('this.appVersion', this.appVersion.getInfo());
    // console.log('this.generator.generatorFactory(5)', this.generator.generatorFactory(7));
  }
}
