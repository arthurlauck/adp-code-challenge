# ADP CODE CHALLENGE

To run this project, you can use docker, simple typing `docker-compose build` for the first time and then, `docker-compose up`, this will automatically run `npm install` and `npm start`

Without docker, you can run `npm install` and then `npm start`.

For testing you can run `npm test`

For linting `npm run lint` or trying automatically fix lint errors `npm run lint:fix`

Running tests and lint in the containers, should be done acessing it, with `docker-compose exec adp-challenge /bin/sh` and then runing the desired npm script.