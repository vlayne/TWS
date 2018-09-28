import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CriterePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-critere',
  templateUrl: 'critere.html',
})
export class CriterePage {
  
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Travel With Symbiosis Critera</b> calculate your affiliations with places depending on what <b>you</b> like.",
      image: "../../assets/imgs/interrogatif.jpg",
    },
    {
      title: "Steps",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/imgs/plane.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/imgs/plane.jpg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
