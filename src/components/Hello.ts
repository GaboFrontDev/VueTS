import { Vue, Component, Prop } from "vue-property-decorator";
import TemplateComponent from "./Template.vue";

@Component({
	components: {
		TemplateComponent
	},
	template: `
		<template-component  :str="onUpdate"/>
	`
})
export default class HelloComponent extends Vue {
	@Prop() name!: string;
	@Prop() initialEnthusiasm!: number;

	enthusiasm = this.initialEnthusiasm;

	increment() {
		this.enthusiasm++;
	}
	decrement() {
		if (this.enthusiasm > 1) {
			this.enthusiasm--;
		}
	}

	get onUpdate(): string {
		return Array(this.enthusiasm + 1).join("!");
	}
}
