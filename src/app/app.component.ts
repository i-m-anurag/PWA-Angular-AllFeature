import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*
   * For Enable the feature whenever you change any thing in any file and after 
  * build and restart the server . in a browser when you reload 
  * the existing open page and just wait for 5-6 second you will 
  * a pop up the said new version of this site is available and after
  *  clicking ok you see your change
  */

  // ! feature 2 codes
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    // ! feature 2 codes
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((res) => {
        if (confirm("New Version available Load new Version")) {
          window.location.reload();
        }
      });
    }
  }
}
