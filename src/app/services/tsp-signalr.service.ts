import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})

export class TspSignalrService {
  private hubConnection!: signalR.HubConnection;

  constructor() {
    this.startConnection();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5001/tspHub')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connected'))
      .catch((err) => console.log('Error while starting SignalR:', err));
  }

  public onTspUpdate(callback: (bestRoute: number[], bestDistance: number) => void) {
    this.hubConnection.on('ReceiveTspUpdate', (bestRoute, bestDistance) => {
      callback(bestRoute, bestDistance);
    });
  }
}
