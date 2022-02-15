import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScreenComponent } from "./screen/screen.component";
import { LogoComponent } from "./logo/logo.component";
import { PopupComponent } from "./popup/popup.component";
import { GeneratorComponent } from "./generator/generator.component";

@NgModule({
	declarations: [
		ScreenComponent,
		LogoComponent,
		PopupComponent,
		GeneratorComponent,
	],
	imports: [CommonModule],
	exports: [ScreenComponent],
})
export class GeneratorModule {}
