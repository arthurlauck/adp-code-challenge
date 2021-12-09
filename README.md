# ADP CODE CHALLENGE

## How to run

### With docker
To run this project, you can use docker, by typing to build the image: 

```
docker-compose build
``` 

and then, to run the server, that will automatically run `npm install` and `npm start`

```
docker-compose up
```

### Without docker
Without docker, you can run `npm install` and then `npm start`.

It will be available, in the web, with the url as `localhost:8000`

## Testing
For testing you can run `npm test`

## Linting
For linting `npm run lint` or trying automatically fix lint errors `npm run lint:fix`

## How to run script inside container
Running tests and lint in the containers, should be done acessing it, with `docker-compose exec adp-challenge /bin/sh` and then runing the desired npm script.