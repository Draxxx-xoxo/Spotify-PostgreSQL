# Spotify PostgreSQL

Takes personal song data and inserts it into PostgreSQL

## How to get personal data
1. Go to https://www.spotify.com/account/overview/
2. Under Security and Privacy --> Privacy Settings
3. Select Extended Streaming History
4. Request Data

## Setting up the database 
1. Ensure that you have a database running
2. Use the `songs.sql` file and execute that code in Pgadmin or a terminal

## How to use the Code
1. Download the Github Project onto your local desktop
2. Add the JSON Files from the Extended Streaming History into the Github Project
3. In the index file the `const json = require("")` update that to have your file name
4. Change the `example.env` file to `.env` and the information inside
5. Once done run the code `node index.js`
