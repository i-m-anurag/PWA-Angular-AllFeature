import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-features',
  templateUrl: './native-features.component.html',
  styleUrls: ['./native-features.component.css']
})
export class NativeFeaturesComponent implements OnInit {
lat:any;
lng:any;
  constructor() { }

  ngOnInit(): void {
  }

 async OpenCamera()
  {
    // * below google api for access camera of a phone or laptop this api only work on localhost or a server with https 
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
      const videoTracks = stream.getVideoTracks()
      const track = videoTracks[0]
      alert(`Getting video from: ${track.label}`)
      // ! video tag is available on ui and setting value under it with this line
      let video = document.querySelector('video')
      //@ts-ignore
      video.srcObject = stream
     
  //The video stream is stopped by track.stop() after 3 second of playback.
      
    } catch (error:any) {
      alert(`${error.name}`)
      console.error(error)
    }
  }

   getLocation() {
    // * google api for get geo location
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res:any) =>{
        console.log('GeoLocation',res)
        // ! setting value in some variable so that we can see it in html ui
        this.lat=res.coords.latitude;
        this.lng=res.coords.longitude;
      })
    } else {
      console.log("Geo Location not supported by browser");
    }
  }

}
