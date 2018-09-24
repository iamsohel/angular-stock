import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../globals/script-loader.service';
import { Helpers } from '../globals/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _script: ScriptLoaderService,
  ) { }

  ngOnInit() {
    this._script.loadScripts('body', ['assets/js/home/custom.js']).then(result => {
      });
  }

}
