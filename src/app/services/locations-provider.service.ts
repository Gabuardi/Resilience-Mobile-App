import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class LocationsProviderService {

    // ---------------------------------------------------
    // SERVICE PROPERTIES
    // ---------------------------------------------------
    private URL = `${environment.API}/towns`;
    private provinces;
    private cities = {};
    private towns = {};

    // ---------------------------------------------------

    constructor(private http: HttpClient) {
    }

    // ---------------------------------------------------
    // GET -> RETURN THE PROVINCES PROPERTY
    // ---------------------------------------------------
    public getProvinces() {
        return this.provinces;
    } // ENDS


    // ---------------------------------------------------
    // GET -> RETURN PROVINCE CITIES PROPERTY
    // ---------------------------------------------------
    public getProvinceCities(province: string) {
        return this.cities[province];
    } // ENDS


    // ---------------------------------------------------
    // GET -> RETURN TOWNS PROPERTY
    // ---------------------------------------------------
    public getTowns() {
        return this.towns;
    } // ENDS

    // ---------------------------------------------------
    // METHOD -> LOAD TOWNS OF SPECIFIC CITY AND PROVINCE AND SAVE IT
    // ---------------------------------------------------
    loadTowns(province: string, city: string) {
        return new Promise((resolve) => {
            this.http
                .get(`${this.URL}/${province}/${city}`)
                .subscribe(response => {
                    this.cities[province][city] = response;
                    resolve(true);
                });
        });
    } // ENDS

    // ---------------------------------------------------
    // METHOD -> LOAD CITIES OF SPECIFIC PROVINCE AND SAVE IT
    // ---------------------------------------------------
    loadCities(province: string) {
        return new Promise((resolve) => {
            this.http
                .get(`${this.URL}/${province}`)
                .subscribe(response => {
                    this.cities[province] = response;

                    // LOAD TOWNS
                    for (const city of this.cities[province]) {
                        console.warn(city);
                        this.loadTowns(province, city);
                    } // FOR ENDS

                    resolve(true);
                });
        });
    } // ENDS

    // ---------------------------------------------------
    // METHOD -> LOAD PROVINCES AND SAVE IT
    // ---------------------------------------------------
    load() {
        return new Promise((resolve) => {
            this.http
                .get(`${this.URL}/provinces`)
                .subscribe(response => {
                    this.provinces = response;

                    // LOAD CITIES
                    for (const province of this.provinces) {
                        this.loadCities(province);
                    } // FOR ENDS

                    resolve(true);
                });
        });
    } // ENDS

} // SERVICE ENDS
