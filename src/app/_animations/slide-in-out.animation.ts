import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
		state('*', style({
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
			zIndex: 11
		})),
		transition(':enter', [
			style({
				right: '-110%',
				backgroundColor: 'rgba(0, 0, 0, 0)'
			}),
			animate('0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', style({
				right: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.2)'
			}))
		]),
		transition(':leave', [
			animate('0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', style({
				right: '-110%',
				backgroundColor: 'rgba(0, 0, 0, 0)'
			}))
		])
    ]);