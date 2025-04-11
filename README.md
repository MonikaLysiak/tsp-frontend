# TspFrontend
This repository is part of the [GeneticTSP](https://github.com/MonikaLysiak?tab=projects#:~:text=Sort-,GeneticTSP,-%232%20updated%203) project. The project uses genetic programing to find solution to Travelling salesman problem. Due to organizational reasons it was divaded into 3 parts: frontend (this repo), backend and genetic service. This part is responsible for allowing user to enter data then to send it to server, receive real-time results and present them to the user.

## Input
Program accepts data in form od csv file with set of cities and distances beetween each of them in a form of the matrix.
There is also possibility to change parameters for genetic program which allows user to better adapt parameters to the provided data and to manipulate the quality of the results as well as time of getting the solution.
Below is implemented view of data input.
![image](https://github.com/user-attachments/assets/69733cdc-96d2-4309-9489-b075c5177582)

## Results
The results are provided to the user in real-time in a form of a diagram displaing the sequence of cities that forms actual shortest route. There is also displayed actual best distance and an chart with best distances received so far. The chart is updated every new best distance and allowes user to see the progress in finding the best route.
Below is implemented view of the results given by the genetic algoritm.
![image](https://github.com/user-attachments/assets/a9ba24d8-6ff7-4929-a2ef-105748207a31)
Below is presented final view that user sees after genetic program finishes its work.
![image](https://github.com/user-attachments/assets/53a1b58f-9af6-4eb0-99dd-1f6f4dd7a0d2)

## Work flow
Program allows user to: 
- Enter csv file with cities and distances beetween them.
- Change parameters used by genetic algoritm.
- Change parameters back to defult.
- Click solve and start genetic algoritm on the provided file with the entered parameters.
- Click stop at any time of work of the program to stop algoritm and receive actual best result.
- Watch as the results change and the best route is getting shorter on the provided results tab.

## Technology
This part of the genetic program was created using technologies:
- Angular
- Material Angular
- TS
- HTML
- SignalR
- ng2Charts
- chartJs
- bootstrap
- streamChart

- CsvHelper
- Microsoft.AspNetCore.Cors

## Installation & Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
