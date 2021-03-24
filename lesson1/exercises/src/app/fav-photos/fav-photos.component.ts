import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Random Images";

  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 =
    "https://th.bing.com/th/id/R69e63c39d9fd4666908868d6cdb433a2?rik=m6MP34G1AnoNlw&riu=http%3a%2f%2fwww.mmfilmes.tv%2fwp-content%2fuploads%2f2017%2f01%2fBen-Hur-1959-movie-poster-683x1024.jpg&ehk=064vWv7q6GxX4djWOKNpbfisf7fUXgTGmd66brosdbw%3d&risl=&pid=ImgRaw";
  image3 =
    "https://fanart.tv/fanart/movies/947/movieposter/lawrence-of-arabia-561951834f4bc.jpg";

  constructor() {}

  ngOnInit() {}
}
