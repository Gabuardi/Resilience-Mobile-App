import {Component, OnInit} from '@angular/core';
import {PickerController} from '@ionic/angular';
import {LocationsProviderService} from '../../services/locations-provider.service';

@Component({
    selector: 'app-community-selector',
    templateUrl: './community-selector.component.html',
    styleUrls: ['./community-selector.component.scss'],
})
export class CommunitySelectorComponent {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    buttons = [{text: 'Cancel', role: 'cancel'}, {text: 'Done'}];

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

    async showProvincesPicker() {
        const opts = {
            buttons: this.buttons,
            columns: [CommunitySelectorComponent.buildColumnOptions('Provinces', this.locationsProvider.getProvinces())]
        };
        const picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            this.showAnotherPicker();
        });
    }


    async showAnotherPicker() {
        let opts = {
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done'
                }
            ],
            columns: [
                {
                    name: 'Team',
                    options: [
                        {text: 'Fnatic', value: 'A'},
                        {text: 'G2 Esports', value: 'B'},
                        {text: 'Origen', value: 'C'}
                    ]
                }
            ]
        };
        let picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            console.log(data);
        });
    }

} // COMPONENT ENDS
