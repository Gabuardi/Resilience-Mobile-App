import {Component, EventEmitter, Output} from '@angular/core';
import {PickerController} from '@ionic/angular';
import {LocationsProviderService} from '../../../services/locations-provider.service';

@Component({
    selector: 'app-community-selector',
    templateUrl: './community-selector.component.html',
    styleUrls: ['./community-selector.component.scss'],
})
export class CommunitySelectorComponent {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    communityName = '';
    buttons = [{text: 'Cancel', role: 'cancel'}, {text: 'Done'}];
    // OUTPUTS
    @Output() communitySelected: EventEmitter<object> = new EventEmitter();

    // ------------------------------------------------------------------

    constructor(private pickerCtrl: PickerController, private locationsProvider: LocationsProviderService) {
    }

    // ------------------------------------------------------------------
    // METHOD -> BUILD PICKER COLUMN OPTIONS OBJECT AND RETURN IT
    // ------------------------------------------------------------------
    static buildColumnOptions(columnName: string, optionsObject) {
        const optionsList = [];

        // BUILD OPTION OBJECT
        for (const option of optionsObject) {
            optionsList.push({text: option, value: option});
        } // for ENDS

        return {name: columnName, options: optionsList};
    } // ENDS

    // ------------------------------------------------------------------
    // METHOD -> EMMIT AND EVENT WITH PROVINCE, CITY AND TOWN SELECTED
    // ------------------------------------------------------------------
    emmitEventCommunitySelected(province: string, city: string, town: string): void {
        this.communitySelected.emit({province, city, town});
    } // METHOD ENDS

    // ------------------------------------------------------------------
    // METHOD -> SHOW A PICKER WITH TOWNS OF A CITY OPTIONS
    // ------------------------------------------------------------------
    async showTownsPicker(province, city) {
        // SET PICKER OPTIONS
        const opts = {
            buttons: this.buttons,
            columns: [CommunitySelectorComponent.buildColumnOptions('towns', this.locationsProvider.getCityTown(province, city))]
        };

        // CREATE PICKER
        const picker = await this.pickerCtrl.create(opts);
        picker.present();

        // DISMISS PICKER EVENT
        picker.onDidDismiss().then(async data => {

            // GET SELECTED OPTION AND ASSIGN TO COMPONENT VARIABLE
            const townsColumns = await picker.getColumn('towns');
            this.communityName = townsColumns.options[townsColumns.selectedIndex].value;
        });
    } // ENDS

    // ------------------------------------------------------------------
    // METHOD -> SHOW A PICKER WITH CITIES OF A PROVINCE OPTIONS
    // ------------------------------------------------------------------
    async showCitiesPicker(province) {
        // SET PICKER OPTIONS
        const opts = {
            buttons: this.buttons,
            columns: [CommunitySelectorComponent.buildColumnOptions('cities', this.locationsProvider.getProvinceCities(province))]
        };

        // CREATE PICKER
        const picker = await this.pickerCtrl.create(opts);
        picker.present();

        // DISMISS PICKER EVENT
        picker.onDidDismiss().then(async data => {

            // GET SELECTED OPTION
            const citiesColumn = await picker.getColumn('cities');
            const selectedCity = citiesColumn.options[citiesColumn.selectedIndex].value;

            // CALL NEXT PICKER
            this.showTownsPicker(province, selectedCity);
        });
    } // ENDS

    // ------------------------------------------------------------------
    // METHOD -> SHOW A PICKER WITH PROVINCES OPTIONS
    // ------------------------------------------------------------------
    async showProvincesPicker() {
        // SET PICKER OPTIONS
        const opts = {
            buttons: this.buttons,
            columns: [CommunitySelectorComponent.buildColumnOptions('provinces', this.locationsProvider.getProvinces())]
        };

        // CREATE PICKER
        const picker = await this.pickerCtrl.create(opts);
        picker.present();

        // DISMISS PICKER EVENT
        picker.onDidDismiss().then(async data => {

            // GET SELECTED OPTION
            const provinceColumn = await picker.getColumn('provinces');
            const selectedProvince = provinceColumn.options[provinceColumn.selectedIndex].value;

            // CALL NEXT PICKER
            this.showCitiesPicker(selectedProvince);
        });
    } // ENDS

} // COMPONENT ENDS
