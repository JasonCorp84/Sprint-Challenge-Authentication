<!-- Answers to the Short Answer Essay Questions go here -->
1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    #Middleware: Middleware used between the server and the client to help communication and solve common problems.
    The developer does not have to use his/her resources to solve these common everyday problems.
    For example: We used mongoose middleware to translate JSON objects to BSON and to define server behavior during 
    authentication. By using middleware during authentication, we described common tasks like error handling then we applied
    those to the route handlers. Using middleware are not restricted to one. Oftentimes we use more than one. 

    #Session(express): Session is a middleware in express, and stores user information on the server side. The client sides
     contains the session ID though. Each user that is connected to a website has a unique session. This session has many
     information stored like session expiration time, life time and so on. With the session we can also determine what to
     and what not to show for the user. So, each user can have different page displayed on his/her machine. From this point
     it is unequivocal that each session has state. Session can store state information in many ways: cookies, app memory, 
     database etc.

     #bcrypt: Is basically an irreversible hash function, which takes a string and 'salt' as parameters then turns is to an
      encrypted string.  From this point the server stores the hashed passwords only, so every time when the user logs in 
      runs the hash function and matches to the hashed password. If (match) => auth.

      


1. What does bcrypt do in order to prevent attacks?
1. What are the three parts of the JSON Web Token?