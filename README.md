# TR1-EC021
## Topics
+ [General info](#summary)
+ [Dependencies/Libraries](#Dependencies/Libraries)
+ [Setup](#setup)
+ [Contact](#contact)
+ [License](#license)

## Summary
Core server for communicating with the auth server in another local, validate the token and send in the header of request.
This project implements the routes:
- /auth/login
- Insert, update, delete, search a meme in database MongoDB.
	
## Dependencies/Libraries
Project is created with:
* [Node.js]: 10.16.0
As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

* [Restify]: 8.4.0
A Node.js web service framework optimized for building semantically correct RESTful web services.

* [Restify-router]: 0.5.1
This module allows you to define your routes using a Router interface that is identical to how routes are registered on a restify server. You can then apply the routes to a server instance.

* [Moongose]: 5.7.7
 It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

* [Axios]: 0.19.0
Promise based HTTP client. 
Do a request in another API.

* [JWT]: 8.5.1
JWTs are credentials, which can grant access to resources. 
Validate the token sent in the request.

## Setup
To run this project, unpacking the ZIP file and acess the folder of project.
Inside the folder, run in terminal or gitbash the commands below.

```
$ npm install
$ npm start
```

### Contact
- [Filipe Firmino Lemos](mailto:filipefirmino@gec.inatel.br)
- [Gustavo Henrique Rosa de Castro](mailto:gustavohenrique@gec.inatel.br)

### License

[MIT](https://github.com/firminofl/TR1-ec-021/blob/master/LICENSE)
