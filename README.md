# Travel Dreams

# Heroku link: https://travel-dreams.herokuapp.com/

# Purpose: 
Users can add, edit and delete their desired travel locations, as well as view desired travel locations of other users

# Future goals
* Adding authentication so add/edit/delete functionality is restricted by user 
* Adding full CRUD to locations model (currently only users model has full crud, locations has index/add only)
* Moving the add new location form to a more easily accessible position in the app.

# Technologies used: 
Ruby, Ruby on Rails, React, HTML/CSS, Heroku for hosting.

# Approach taken: 
* Set up API with Ruby on Rails, creating a users model, and locations that belong to users.
* Created front end with React. Set up index to map through users and their locations.
* Added full CRUD functionality to the users model - a location can also be created on initial user add
* Created another form component to handle adding locations to already exisiting users

# User stories:
* User can view existing users and their desired travel locations
* User can add a new user profile and a location that user would like to visit by filling out the form at the top
* User can click the more information button to see more user information, and to access the edit, delete and add new location functionalities.
* User can click the close button on the user record to remove user show from displaying
* User can click edit button to edit their user record
* User can click delete button to delete the user record
* User can click Add New Location and fill out the form to add a new location belonging to the user that they clicked the button from.