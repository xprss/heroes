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
	heroes: Hero[] = HEROES;
}
