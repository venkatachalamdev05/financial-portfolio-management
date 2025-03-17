# FinancialPortfolioManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Setup Instructions

1. Clone or unzip the project folder.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Once installed, run `ng serve` to start the development server.


## Install the required dependencies:

Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Folder Structure

* Component folder contains the main components like DashboardComponent, InvestmentFormComponent, and ConfirmationPopupComponent,

* Services folder contains services like FacadeService that handle data fetching and transformation,

* State folder contains contains NgRx Store to add and fetch the data.

## Validations

* Added form validations to ensure correct input for asset type, quantity, purchase price, and date

* Included validation checks to make sure all required fields are filled and the values are correct before submission

* Incorporated error messages to guide users in case of invalid input


## Note on Task Description

Please note that due to some ambiguity in the description of the task, I have built the application based on how I understood the requirements. If there are any specific expectations or changes, I would be happy to revise the implementation accordingly.


## Facade Service Usage

The application implements a FacadeService to simplify data flow between components and state management. This service acts as an intermediary layer, promoting cleaner and more maintainable code by reducing direct dependencies between components and NgRx store.






