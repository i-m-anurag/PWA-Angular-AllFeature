import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-api-caching',
  templateUrl: './api-caching.component.html',
  styleUrls: ['./api-caching.component.css']
})
export class ApiCachingComponent implements OnInit {
   Postdata:any[]=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllPost().subscribe((res:any) =>{
      console.log(res);
      this.Postdata=res;
    })

     // * after getting data from api and showing it on ui for caching api data you need to
  // * add datasource object in ngsw-config.json file for caching api data that make work it in offline mode

  // ! note : there is multiple caching strategy for datasource please read all of them i am using freshness strategy here !!

    
  }

}
