import {NgModule} from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
    import { MatButtonToggleModule} from '@angular/material/button-toggle'
    import { MatCardModule} from '@angular/material/card'
    import { MatCheckboxModule} from '@angular/material/checkbox'
    import { MatChipsModule} from '@angular/material/chips'
    import { MatDatepickerModule} from '@angular/material/datepicker'
    import { MatDialogModule} from '@angular/material/dialog'
    import { MatExpansionModule} from '@angular/material/expansion'
    import { MatGridListModule} from '@angular/material/grid-list'
    import { MatIconModule} from '@angular/material/icon'
    import { MatInputModule} from '@angular/material/input'
    import { MatListModule} from '@angular/material/list'
    import { MatMenuModule} from '@angular/material/menu'
    import { MatProgressBarModule} from '@angular/material/progress-bar'
    import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
    import { MatRadioModule} from '@angular/material/radio'
    import { MatSelectModule} from '@angular/material/select'
    import { MatSidenavModule} from '@angular/material/sidenav'
    import { MatSlideToggleModule} from '@angular/material/slide-toggle'
    import { MatSliderModule} from '@angular/material/slider'
    import { MatSnackBarModule} from '@angular/material/snack-bar'
    import { MatStepperModule} from '@angular/material/stepper'
    import { MatTableModule} from '@angular/material/table'
    import { MatTabsModule} from '@angular/material/tabs'
    import { MatToolbarModule} from '@angular/material/toolbar'
    import { MatTooltipModule} from '@angular/material/tooltip'

/**
 * NgModule that includes all import { Material modules that are required to serve
 * the Plunker.
 */
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}
