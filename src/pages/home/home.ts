import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageProvider } from '../../providers/message/message';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public messageService : MessageProvider, public storage: Storage) {
  	this.showSpinner = true;

  }


    	public data : any;
		public errorMessage: any;
		public index: number  = 11; 
		public myDate = new Date();
		public showSpinner:boolean = false;
        public message: string= '';
        public url: string= '';
        public today:any;
        public random : number = 11;
        public clicked = false;
  public day = '';
  public imageIndex : number = 0;
  public imageArr: string[] = ['guru', 'abhaya28', 'abhaya4', 'bala239' , 'close134', 'feet12' , 'feet35' , 'feet43' , 'close135 - Copy'];


	ngOnInit() {
		this.storage.set('imgIndx' , this.imageIndex);  

            this.loadAll();
    }

    refresh() {
    	
   		alert("You have already generated the message for today");
    }
   

   loadAll() {  
     let rand = 0;
   this.storage.set('number',rand);
   	      rand 	 = (Math.floor(Math.random()*108));
            this.imageIndex = (Math.floor(Math.random()*(this.imageArr.length)));
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth()+1; //January is 0!
    let y = today.getFullYear();

    let todayString = m+'/'+d+'/'+y;

    
    this.storage.get('day').then((val) => {
      if(val!=todayString){
        this.messageService.getData().subscribe(result => {
          this.storage.set('day',todayString);
  		    this.message=result[rand][""];
          this.url = 'assets/imgs/' + this.imageArr[this.imageIndex]  + '.jpg';
          this.storage.set('imgIndx' , this.imageIndex);
          this.storage.set('number',rand);
        });
      }
      else{
        this.messageService.getData().subscribe(result => {
          this.storage.get('number').then((num) =>{
            this.message=result[num][""];
          });
           this.storage.get('imgIndx').then((indx) =>{
            this.url = 'assets/imgs/' + this.imageArr[indx]  + '.jpg';
          });
        });
      }
    });

   	this.showSpinner = false;
  }

}
