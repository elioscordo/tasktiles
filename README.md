# How to run the backend

In the backend directory run:

`pip install -r requirements.txt`

`python manage.py runserver localhost:8081`

# How to run backend tests

`python manage.py test tile`

# How to run the frontend

In the frontend directory run:

`npm install`

`npm start`


# What has been done in the backend

The endpoints are declared and implemented in the tile app using DRF generic views 

# What has been done in the frontend

The tutorial project `phonecatApp` has been taken as the starting point 
The router exposes the component architecture
The service and other constants are developed in the core.tile module
The controller is developed in the main component "tile-list"


# What is missing

The code has not been incapsulated in more components i.e. `<task></task>` and `<tile></tile>`
The test suite is configured but tests need more dev time.


