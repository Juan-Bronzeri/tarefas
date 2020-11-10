import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    constructor() {
    }
    canActivate() {
        return true;
    }
}