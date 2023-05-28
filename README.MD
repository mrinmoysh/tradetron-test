# Company Summary Card App

This is a React Native application that displays summary information and a list of companies with their details. The summary card shows overall information, including the heading, type, capital, value, and PNL. The company list displays individual company details, including the name, type, value, and PNL.

## Features

- Summary card displaying overall information
- Company list with individual company details
- Automatic refreshing of PNL values every 500ms with random numbers for performance testing

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Navigate to the project directory.
4. Install the dependencies by running the following command: `npm install`
5. Start the application android with the following command: `npx react-native run-android`
6. Start the application ios with the following command: `npx react-native run-ios`
7. Follow the instructions in the terminal to launch the app on your desired device or simulator.

## Project Structure

The project follows the standard React Native project structure:

- `App.js`: The entry point of the application.
- `components/`: Contains the reusable components used in the app.
 - `summery.js`: Component for the summary card.
 - `companylist.js`: Component for the company card.
- `images/`: Contains static assets such as images or fonts.
