# Method Toolkit Frontend

## Set up
In order to run the app you will need to first install the dependencies for the application.
```
yarn install
```

Second, you will need to specify the url for your CMS or API where you'll get the data from in a .env file. See the .env.example for an example.

Now you can run the application with
```
yarn run
```

## Set up docker for development
In order to run the docker compose config for development run:
```
docker compose up
```

## Set up docker for production
In order to run the docker compose config for production run:
```
docker compose -f docker-prod.yml up
```