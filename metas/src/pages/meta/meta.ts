import { Meta } from './../../data/metas.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage implements OnInit{

  metaSelecionada: Meta;

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
     
  }

  ngOnInit() {
    this.metaSelecionada = this.navParams.data;
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }

} 
