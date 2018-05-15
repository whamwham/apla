import { Component, Inject } 				from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } 	from '@angular/material';

@Component({
	selector: 'app-vacancies',
	templateUrl: '../vacancies/vacancies.component.html'
})
export class VacanciesComponent {
	constructor(
		public dialogRef: MatDialogRef<VacanciesComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	onNoClick(): void {
		this.dialogRef.close();
	}
}