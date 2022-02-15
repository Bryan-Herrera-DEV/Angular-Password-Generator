import { Component } from "@angular/core";

@Component({
	selector: "app-popup",
	templateUrl: "./popup.component.html",
	styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
	constructor() {}
	clase: string = "";
	close() {
		this.clase = "slide-out-left";
		setTimeout(() => {
			this.clase = "displayed";
		}, 800);
	}
}
