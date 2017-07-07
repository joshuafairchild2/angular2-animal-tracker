import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent} from './animal-list.component';
import { AnimalNewComponent} from './animal-new.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  AnimalNewComponent
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
