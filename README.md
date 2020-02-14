# CRUD-ES6-nodejs-express-api
a simple blog api

- [Setup Instructions](#instructions)
- [RESTful URLs](#restful-urls)

## Setup Instructions


Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm run start
```


## RESTful URLs

- List all blog posts:
  - GET http://localhost:5000/api/v1/posts
- Query one blog post by id:
  - GET http://localhost:5000/api/v1/posts/:postId
- Create a blog post:
  - POST http://localhost:5000/api/v1/posts
- Update a blog post:
  - PUT http://localhost:5000/api/v1/posts/:postId
- Delete a blog post:
  - DELETE http://localhost:5000/api/v1/posts/:postId
