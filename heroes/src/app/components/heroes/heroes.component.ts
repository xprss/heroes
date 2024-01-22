import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero/hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'app-heroes',
	standalone: true,
	imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
	templateUrl: './heroes.component.html',
	styleUrl: './heroes.component.css'
})
export class HeroesComponent {
	onClickCallback = (id: number) => {
		console.log(id)
		for (let index = 0; index < this.heroes.length; index++) {
			const element = this.heroes[index];
			if(element.id !== id) {
				continue;
			}
			element.isVisible = !element.isVisible;
		}
	}

	heroes: Hero[] = HEROES;
}
