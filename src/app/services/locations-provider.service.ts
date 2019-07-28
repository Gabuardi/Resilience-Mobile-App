import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LocationsProviderService {

    // ---------------------------------------------------
    // SERVICE PROPERTIES
    // ---------------------------------------------------
    private provinces: object;
    private cities: object;
    private towns: object;

    // ---------------------------------------------------

    constructor(private http: HttpClient) {
    }

    // ---------------------------------------------------
    // GET -> RETURN THE PROVINCES PROPERTY
    // ---------------------------------------------------
    public getProvinces(): object {
        return this.provinces;
    } // ENDS


    // ---------------------------------------------------
    // GET -> RETURN CITIES PROPERTY
    // ---------------------------------------------------
    public getCities(): object {
        return this.cities;
    } // ENDS


    // ---------------------------------------------------
    // GET -> RETURN TOWNS PROPERTY
    // ---------------------------------------------------
    public getTowns(): object {
        return this.towns;
    } // ENDS

    // ---------------------------------------------------
    // METHOD -> RETURN TOWNS PROPERTY
    // ---------------------------------------------------
    loadProvinces() {
        return new Promise((resolve) => {
            this.http
                .get('https://resilapp.mybluemix.net/api/towns/provinces')
                .subscribe(response => {
                    this.provinces = response;
                    resolve(true);
                });
        });
    }

} // SERVICE ENDS
