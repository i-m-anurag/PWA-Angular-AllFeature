import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
  sub: any;

  // * this keys public private are generate with the help of web push npm package https://www.npmjs.com/package/web-push
  // ! Note for your laptop you need to generate this keys newly and paste in below variable
  // *TODO: For generating new VAPID key
  /*
  * Step 1 : install web-push package globally in your laptop by using command: npm install web-push -g
  * Step 2: then run command  web-push generate-vapid-keys --json
  * Step 3: After that you get your new public private keys keep that keys in any notepad file. and paste public key here and public and private both in server file
  * Step 4: Also paste your keys in server.js file inside server folder
  */

  // ! Web push feature need one backend server for that we i created a server inside server folder. for starting it you need to run  "npm run server" and it start at port 9000
  
  // *TODO: Need to change this before run
  readonly VAPID_PUBLIC_KEY =
  'BBOEkq6GqakZMYt7VsKrnyxXAA58ZiJCWTj5xu1jBdq52lAcYYwW1pRU-WFAYu1PT4sMeu0wbNcoBeeifPjLr68';

  constructor(
    private swPush: SwPush,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    // ? If you get any kind of message like "you already have a subcription" after pressing subscribe 
    // ? then you need to once uncomment this code and build it and run once it will close all existing subscription
  //  this.swPush.unsubscribe();
  }
  subscribe()
  {

    // ! Please read all the method carefully and go through angular website blog for know more about these method
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY,
        })
        .then((sub) => {
          this.sub = sub;
          console.log("Notification sub", sub);
          this.api.addPushSubscriber(sub).subscribe(
            (res) => {
              console.log("Sent push subscription object to server");
            },
            (err) => {
              console.log("Could not send to server");
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  sendNotification()
  {
this.api.send().subscribe(res =>{
  console.log(res);
})
  }
}
