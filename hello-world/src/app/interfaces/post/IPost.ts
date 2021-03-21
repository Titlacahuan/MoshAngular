import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface IPost {
	id: number;
	userId: number;
	title: string;
	body: string;
}