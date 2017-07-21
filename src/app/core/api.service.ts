// src/app/core/api.service.ts
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {AuthService} from './../auth/auth.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {ENV} from './env.config';
import {EventModel} from './models/event.model';
import {RsvpModel} from './models/rsvp.model';

@Injectable()
export class ApiService {

    constructor(private http: Http,
                private auth: AuthService) {
    }

    private get _authHeader(): string {
        return `Bearer ${localStorage.getItem('access_token')}`;
    }

    // GET list of public, future events
    getEvents$(): Observable<EventModel[]> {
        return this.http
            .get(`${ENV.BASE_API}events`)
            .catch(this._handleError);
    }

    // GET all events - private and public (admin only)
    getAdminEvents$(): Observable<EventModel[]> {
        return this.http
            .get(`${ENV.BASE_API}events/admin`, {
                headers: new Headers({'Authorization': this._authHeader})
            })
            .catch(this._handleError);
    }

    // GET an event by ID (login required)
    getEventById$(id: string): Observable<EventModel> {
        return this.http
            .get(`${ENV.BASE_API}event/${id}`, {
                headers: new Headers({'Authorization': this._authHeader})
            })
            .catch(this._handleError);
    }

    // GET RSVPs by event ID (login required)
    getRsvpsByEventId$(eventId: string): Observable<RsvpModel[]> {
        return this.http
            .get(`${ENV.BASE_API}event/${eventId}/rsvps`, {
                headers: new Headers({'Authorization': this._authHeader})
            })
            .catch(this._handleError);
    }

    private _handleError(err: Response | any) {
        const errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
            this.auth.login();
        }
        return Observable.throw(errorMsg);
    }

}