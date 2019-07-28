import {Component, OnInit} from '@angular/core';
import {PickerController} from '@ionic/angular';
import {LocationsProviderService} from '../../services/locations-provider.service';

@Component({
    selector: 'app-community-selector',
    templateUrl: './community-selector.component.html',
    styleUrls: ['./community-selector.component.scss'],
})
export class CommunitySelectorComponent implements OnInit {

    constructor(private pickerCtrl: PickerController, private locationsProvider: LocationsProviderService) {
        console.log(locationsProvider.getProvinces());
    }

    ngOnInit() {
    }

    async showPicker() {
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
                    name: 'framework',
                    options: [
                        {text: 'Angular', value: 'A'},
                        {text: 'Vue', value: 'B'},
                        {text: 'React', value: 'C'}
                    ]
                }
            ]
        };
        let picker = await this.pickerCtrl.create(opts);
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
