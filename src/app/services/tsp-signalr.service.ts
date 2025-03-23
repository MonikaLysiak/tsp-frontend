import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TspSignalrService {

  private hubConnection!: signalR.HubConnection;
  public dataStream = new BehaviorSubject<number>(0);

  constructor() {
    this.startConnection();
    this.addDataListener();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://your-server-url/signalr-hub')
      .build();

    this.hubConnection
      .start()
      .catch(err => console.error('Error while starting connection: ' + err));
  }

  private addDataListener() {
    this.hubConnection.on('ReceiveScore', (score: number) => {
      this.dataStream.next(score);
    });
  }
}
