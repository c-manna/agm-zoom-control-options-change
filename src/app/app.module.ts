import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  imports: [
    BrowserModule,
   AgmCoreModule.forRoot({
		  apiKey: 'AIzaSyCDhjF3LNn2qqYUivCkiyYD8lQMAzihz7I',
		  language: "en",
		  libraries: ['places','geometry']
		})
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
