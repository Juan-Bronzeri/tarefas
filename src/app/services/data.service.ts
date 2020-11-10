import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = 'http://localhost:3000/v1';
    constructor(private http: HttpClient) { }
    
    authenticate(data) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    create(data) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`);
    }

    updateProfile(data) {
        return this.http.put(`${this.url}/accounts`, data);
    }
}