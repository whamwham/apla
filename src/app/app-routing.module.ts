import { NgModule } 				from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

import { HomeComponent } 			from './home/home.component';
import { AboutComponent } 			from './about/about.component';
import { CasesComponent } 			from './cases/main/cases.component';
import { LandRegistryComponent } 	from './cases/land-registry/land-registry.component';
import { SupplyChainComponent } 	from './cases/supply-chain/supply-chain.component';
import { VehicleRegistryComponent } from './cases/vehicle-registry/vehicle-registry.component';
import { GovernmentComponent } 		from './government/government.component';
import { BusinessComponent } 		from './business/business.component';
import { CareerComponent } 		from './career/career.component';

import {MusicCopyrightComponent} from './cases/music-copyright/music-copyright.component';
import {SurveyPollComponent} from './cases/survey-poll/survey-poll.component';
import {FinancialSectorComponent} from './cases/financial-sector/financial-sector.component';
import {BusinessLicensingComponent} from './cases/business-licensing/business-licensing.component';

const routes: Routes = [
    {path: 'government', component: GovernmentComponent},
    {path: 'business', component: BusinessComponent},
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {
        path: 'cases',
        children: [
            {path: '', component: CasesComponent},
            {path: 'land-registry', component: LandRegistryComponent},
            {path: 'supply-chain', component: SupplyChainComponent},
            {path: 'vehicle-registry', component: VehicleRegistryComponent},
            {path: 'music-copyright', component: MusicCopyrightComponent},
            {path: 'survey-poll', component: SurveyPollComponent},
            {path: 'financial-sector', component: FinancialSectorComponent},
            {path: 'business-licensing', component: BusinessLicensingComponent}
        ]
    },
    { path: 'career', component: CareerComponent },
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }