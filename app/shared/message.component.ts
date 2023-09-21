import { Component,Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MessageService{
    message ="Explore the world with us"
    getMessage(){
        return this.message
    }
    

}