# demo-weather-forecast

## About <a name = "about"></a>

Demo for graphql API to retrieve weather information.
Option to running it locally as an express server or deploy it to AWS as lambda function.

### Tech

- Typescript
- NodeJS
- Jest
- GraphQL
- Apollo Server
- Serverless

## How to access it

Running tests:

```
yarn test:watch
```

Run server locally:
(note: you need a .env.local file with the API_KEY env variable)

```
yarn dev
```

You can also access the public url with the latest version:

```
https://5b463fnr15.execute-api.eu-west-1.amazonaws.com/dev/graphql
```

Query example:

```
{
  forecast(name: "Madrid") {city, date, minTemp, maxTemp, day, evening}
}
```

### Limitations:

- only retrieves forecast for the current day
- only support 50 cities (examples, Amsterdam, London, Madrid)
- does not have search option, so you should right the city name fully
- connected with accuweather api with trial license with the limit of 50 daily requests.

### Known issues

- serverless offline not working properly
- module aliases not working properly
- automated testing coverage very limited
