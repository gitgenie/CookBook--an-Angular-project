import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
  	firebase.initializeApp({
		apiKey: "AIzaSyCckSW-KDXDq8k_F0vk4JG_1mFIpEOUK7I",
    	authDomain: "ng-recipe-book-7d766.firebaseapp.com"
	});
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
