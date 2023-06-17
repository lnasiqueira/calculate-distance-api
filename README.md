# calculate-distance-api

My API was created aiming two principal objectives:
- Calculate distance between two address;
- To display the historic of previous queries.

Structure of files 
--------------------------
- `Dockerfile` : file to run the project using Docker;
- `index.html` : Main frontend code of website application call functions in javaScript repository;
- `historicQueries.html` : Frontend code of the page to display historic of queries;
- js/`calculator.js` : Group all js functions needed to requests of the application.

  

Running commands to run the project using docker 
--------------------------

Build the image - important docker must be running:
```
$ docker build -t calculate-distance-api-image:v1 .
```

Verify if the docker image: calculate-distance-api-image was created
```
$ docker images
```

Run the docker chosing the port
```
$ docker run -d -p 80:80 calculate-distance-api-image:v1
$ curl localhost:80
```

Try to see the website in your browser using `localhost:81`

