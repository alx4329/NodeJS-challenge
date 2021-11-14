# Development Challenge for Node.js

## Descripción

The API has the next enpoints:

* Endpoints for authentication using JWT.
Also an endpoint for refreshing the JWT access token.


```js
  /login 
  //it receives username and password and returns the user and token , also creates a "refreshToken" which is used on
  
  
  /login/RefreshToken  
  // receives RefreshToken, checks it, and returns a new token
```

* Endpoint for retrieving movies.
It should be allowed to filter and sort by some field.
```js
get --> /movies/

// receives: 
    const {name} = req.query; //opcional
    const {sortAZ} = req.query;

// name is an optional parameter, if it's null, the endpoint will return all the movies, including actors and Director related.
//if its different than null, it will return the movies matching a portion of their name with the receiving parameter
//in both cases, the results ar ordered by the receiving sortAZ 'A-Z' or 'Z-A'
```
* Endpoint for retrieving the information (director included) of a specific episode of a TV Show
```js
get --> /tvshow/:id

// it receives the id of the show and returns the episode with the Directors and actors included.

```
* Endpoint for adding a new object (it could be for any entity you like).

```js
post --> /movies/add

// it receives 
const {
name, 
released_date,
language, 
actors, //array with the ids of the actors related
directorId,//id of the director
country, 
genre,
description
} = req.body;

//then creates the movie and sets the actors and director
//it returns the movie created
```




```bash
  loaders added to test the endpoints =)

  Made by Alexis Martinez
```