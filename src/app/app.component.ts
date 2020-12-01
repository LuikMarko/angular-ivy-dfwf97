import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(http: HttpClient) {
    http
      .get<any>(
        "https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi_County"
      )
      .subscribe(data => {
        console.log(data);
        this.title = data.titles.display;
        this.pageSummary = data.extract;
        this.imageThumbnail = data.thumbnail.source;
      });
  }
  name = "Angular " + VERSION.major;

  pageSummary: string;
  imageThumbnail: string;
  title: string;
}
