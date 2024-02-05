<a name="custom_anchor_name"></a>

# job API :briefcase:

## Concepts applied but not limited too

- ### node js
- ### express router
- ### routes and controllers
- ### rest API
- ### mongodb atlas
- ### nosql
- ### mongoose
- ### schema & model
- ### heroku hosting
- ### jwt auth
- ### swagger ui

---

### _goals_

- combine auth knowledge with crud functionality and as a result, we'll have an api where users can log in manage there job search
- deploy app to heroku, host apps on the cloud
- setup documentation with swagger ui

---

### _notes_

- setup controllers, the functions for our routes
- setup routers, for jobs and auth with correct http methods
- connect to mongo db database
- create a user model
  - name, email, password
  - match: RegExp, creates a validator that checks if the value matches the given RegExp
  - unique: true. creates a unique index
    - if you try to save a user, but there is already a email in use, duplicate error message will be shown

[Back to Top](#custom_anchor_name)
