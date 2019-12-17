# Taxi Booking App

A web app for booking taxis arround us.

## Technology Used

```
React
Node
Express
Postgres
```

## Getting Started

### Install

```
git clone
cp taxi-booking-app
yarn install
cp .env.examle .env
```
update configuration in .env file

## Database Initalize

```
yarn migrate
yarn seed
```

## Frontend

### To Run
```
yarn start
```
Then open http://localhost:3000/ to see the app.

## Backend

### To Run
```
yarn start:server
```
Then open http://localhost:7000/ to see the backend.


## TODO

- Show only nearBy Taxi to the user calculating the distance between user and taxi
- update driver location and availablity from driver home
- Use socket to get real time location data of driver

