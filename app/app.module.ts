import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
	imports: [ BroswerModule ],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
exports class AppModule { }
