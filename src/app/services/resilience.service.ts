import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResilienceService {

    // ------------------------------------------------------------------
    // SERVICE PROPERTIES
    // ------------------------------------------------------------------
    private URL = `${environment.API}/communities`;

    // ------------------------------------------------------------------

    constructor(private httpClient: HttpClient) {
    }

    // ------------------------------------------------------------------
    // GET -> GET THE RESILIENCE OBJECT FROM AN COMMUNITY
    // ------------------------------------------------------------------
    getCommunityResilience(province: string, city: string, town: string): Observable<any> {
        return this.httpClient.get(`${this.URL}/${province}/${city}/${town}`).pipe(
            map((res: any) => res)
        );
    } // GET ENDS


} // SERVICE ENDS
