# TspFrontend

This repository is part of the [GeneticTSP](https://github.com/users/MonikaLysiak/projects/2) project. The project uses **genetic programming** to find solutions to the **Travelling Salesman Problem (TSP)**. Due to organizational reasons, the solution has been divided into three parts: **frontend** (this repository), **backend**, and **genetic service**. This part is responsible for:

- Accepting user input  
- Sending data to the server  
- Receiving real-time results  
- Displaying results to the user  

---

## Input

The program accepts data in the form of a CSV file containing a set of cities and the distances between them, structured as a distance matrix.

Users can also configure parameters of the genetic algorithm. This allows fine-tuning of the results to suit specific data characteristics, optimizing either the quality of the solution or the computation time.

Example input interface:  
![image](https://github.com/user-attachments/assets/69733cdc-96d2-4309-9489-b075c5177582)

---

## Results

Results are provided in real time. The interface displays:

- A diagram showing the current best route (sequence of cities)  
- The shortest distance found so far  
- A live-updating chart visualizing progress  

The chart is updated whenever a new shortest path is discovered, allowing users to observe the algorithm's optimization process.

Examples of result views:

- In-progress result view:  
  ![image](https://github.com/user-attachments/assets/a9ba24d8-6ff7-4929-a2ef-105748207a31)

- Final result view after computation completes:  
  ![image](https://github.com/user-attachments/assets/53a1b58f-9af6-4eb0-99dd-1f6f4dd7a0d2)

---

## Workflow

Users can:

- Upload a CSV file containing cities and distances  
- Adjust genetic algorithm parameters  
- Reset parameters to defaults  
- Click **Solve** to start computation  
- Click **Stop** to end computation early and get the best current result  
- Watch live updates as the algorithm refines the best route  

---

## Technologies Used

This frontend was developed using the following technologies:

### Frontend Stack

- [Angular](https://angular.io/) v16.2.0  
- [Angular CLI](https://github.com/angular/angular-cli) v16.2.14  
- [Angular Material](https://material.angular.io/) v16.2.14  
- [TypeScript](https://www.typescriptlang.org/) v5.1.3  
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
- [RxJS](https://rxjs.dev/) v7.8.0  
- [Zone.js](https://angular.io/guide/zone) v0.13.0  

### Real-time Communication

- [SignalR (Microsoft)](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-8.0) v8.0.7  

### Charts & Visualization

- [Chart.js](https://www.chartjs.org/) v4.4.8  
- [ng2-charts](https://valor-software.com/ng2-charts/) v5.0.4  

### Styling

- [Bootstrap](https://getbootstrap.com/) v5.2.3
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home) v15.1.2
- [Popper.js](https://popper.js.org/) v2.11.6

---
