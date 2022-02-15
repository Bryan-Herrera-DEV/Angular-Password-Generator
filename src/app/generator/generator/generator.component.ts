import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
	selector: "app-generator",
	templateUrl: "./generator.component.html",
	styleUrls: ["./generator.component.scss"],
})
export class GeneratorComponent implements OnInit {
	@ViewChild("clickToCopy") clickToCopy!: ElementRef;
	@ViewChild("copiado") copiado!: ElementRef;
	semilla_1: string = environment.semilla_1;
	lengthValue: number = 0;
	mayusculas: string[] = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"Ñ",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	minusculas: string[] = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	numeros: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "1"];
	simbolos: string[] = [
		"!",
		"@",
		"#",
		"$",
		"%",
		"&",
		"*",
		"?",
		".",
		",",
		";",
		":",
		"¿",
		"¡",
		"|",
		"=",
		"-",
		"_",
		"+",
		"~",
		"^",
		"¨",
		"·",
	];
	options: string[] = ["mayusculas", "minusculas", "numeros"];
	optionsGenerate(typo: string) {
		if (!!this.options.find((option) => option === typo)) {
			this.options = this.options.filter((option) => option !== typo);
		} else {
			this.options.push(typo);
		}
	}
	value(e: any) {
		console.log(e);
		this.lengthValue = e;
	}
	functions: any = {
		mayus: () => {
			let rand = Math.floor(Math.random() * this.mayusculas.length);
			let nv: any = this.semilla_1.split("");
			if (rand < nv.length) {
				let res = (nv[rand] + this.mayusculas.length) % this.mayusculas.length;
				return this.mayusculas[res];
			} else {
				return this.mayusculas[rand];
			}
		},
		minus: () => {
			let rand = Math.floor(Math.random() * this.minusculas.length);
			let nv: any = this.semilla_1.split("");
			if (rand < nv.length) {
				let res = (nv[rand] + this.minusculas.length) % this.minusculas.length;
				return this.minusculas[res];
			} else {
				return this.minusculas[rand];
			}
		},
		nums: () => {
			let rand = Math.floor(Math.random() * this.numeros.length);
			let nv: any = this.semilla_1.split("");
			if (rand < nv.length) {
				let res = (nv[rand] + this.numeros.length) % this.numeros.length;
				return this.numeros[res];
			} else {
				return this.numeros[rand];
			}
		},
		simb: () => {
			let rand = Math.floor(Math.random() * this.simbolos.length);
			let nv: any = this.semilla_1.split("");
			if (rand < nv.length) {
				let res = (nv[rand] + this.simbolos.length) % this.simbolos.length;
				return this.simbolos[res];
			} else {
				return this.simbolos[rand];
			}
		},
	};
	copyToClipboard(item: any) {
		document.addEventListener("copy", (e: ClipboardEvent) => {
			this.clickToCopy.nativeElement.style =
				"transform: translateY(200%); opacity: 0;";
			this.copiado.nativeElement.style =
				"transform: translateY(0%); opacity: 0.5;";
			if (e.clipboardData) {
				e.clipboardData.setData("text/plain", this.password_generada);
				e.preventDefault();
			}
		});
		document.execCommand("copy");
	}
	nvClass = "";
	password_generada: string = "";
	generatePassword(): void {
		this.nvClass = "actt";
		this.copiado.nativeElement.style = "transform: translateY(200%); opacity: 0;";
		this.clickToCopy.nativeElement.style =
			"transform: translateY(0%); opacity: 0.5;";
		this.password_generada = "";
		let find_mayusculas = !!this.options.find(
			(option) => option === "mayusculas"
		);
		let find_minusculas = !!this.options.find(
			(option) => option === "minusculas"
		);
		let find_numeros = !!this.options.find((option) => option === "numeros");
		let find_simbolos = !!this.options.find((option) => option === "simbolos");
		if (!find_numeros && !find_simbolos && !find_mayusculas && !find_minusculas) {
			alert("Select at least one setting option");
			throw new Error("No seleccionaste ninguna opcion");
		}
		let j = 0;
		for (let i = 0; i < this.lengthValue; i++) {
			let rand = Math.floor(Math.random() * 4);
			if (rand == 0 && find_mayusculas) {
				this.password_generada += this.functions.mayus();
				j = 0;
			} else if (rand == 1 && find_minusculas) {
				this.password_generada += this.functions.minus();
				j = 1;
			} else if (rand == 2 && find_numeros) {
				this.password_generada += this.functions.nums();
				j = 2;
			} else if (rand == 3 && find_simbolos) {
				this.password_generada += this.functions.simb();
				j = 3;
			} else {
				i--;
			}
		}
		console.log(this.password_generada.length);
	}
	ngOnInit(): void {
		this.lengthValue = 16;
	}
}
