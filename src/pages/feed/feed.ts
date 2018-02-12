import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {


  public objeto_feed ={
    titulo:"wallace araujo",
    data:"Agosto ,15 1991",
    descricao:"estou fazendo meu primeiro app teste...",
    qntd_likes:25,
    qntd_comentario:5,
    time_comentario:"11th Jan"

  }

  public lista_filmes = new Array<any>();

  //public nome_usuario:string = "";
  public nome_usuario:string = " wallace araujo cod";



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  //number - void - string - 
  public somaDoisNumeros(num1:number,num2:number):void{
    //alert(num1+num2);

  }



  ionViewDidLoad() {
   // this.somaDoisNumeros(10,99);
    //console.log('ionViewDidLoad FeedPage');

    this.movieProvider.getLatestMovies().subscribe(
      
      data=>{
        //console.log(data.results);

       // const objeto_retorno =JSON.parse(Response);
      const response = (data as any);
      this.lista_filmes = response.results;

      },error=>{
        console.log(error);
      }
  )


  }

}
