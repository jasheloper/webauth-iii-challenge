// NOTES WORKFLOW /SETUP

// P A R T 1 : Setting up Essentials for server /dependencies

// run: npm init -y ...to generate a package.json
// install the express module: yarn add express
// create server.js
// create index.js
// add scripts to package json -
            //  "server": "nodemon index.js",
            // "start": "node index.js"
// test that server runs , terminal + postman



// ************************************************************* //
// ************************************************************* //




// P A R T 2 : Setting up Database Schema

// DEPENDENCIES : npm add knex sqlite3
      // to install globally: npm install -g knex
      // you can also run npx knex

// run : knex init ...creates knex file
      // modify knex file with appropriate file paths ...
      // + migrations + seeds + pool - 
         // more info : https://github.com/jasheloper/node-db-challenge/blob/jashele-tillman/knexfile.js (sample)

// MIGRATIONS 
// knex migrate:make create-users-table 
      // add tables 
// knex migrate:latest ...to run migration files



// ************************************************************* //
// ************************************************************* //


// P A R T 3
// create users folder ::
      // users > create Users router which will have /api/register 
      // users > create Users model 


// ************************************************************* //
// ************************************************************* //




// P A R T 4
// Authentication  ::
// dependency:  yarn add bcryptjs
// create an auth folder
      // auth router ::  
         // /api/register  :: hash password 
         //  /api/login :: verify password 

// more info - https://learn.lambdaschool.com/web4node/module/recQD9lnhqWEFh6g4



// more dependencies 

   //  secure express , set various HTTP headers : npm install helmet --save

   // npm install cors : https://www.npmjs.com/package/cors


// add to server.js 
// declare authrouter & usersrouter 
// add endpoints to server + .uses 

      



// ************************************************************* //
// ************************************************************* //




// P A R T 5


// ************************************************************* //
// ************************************************************* //




// P A R T 6
