import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { GeneratorModule } from "./generator/generator.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, GeneratorModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
