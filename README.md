# PERN STACK Simple APP

## Description:

Simple PERN stack app where user signs in and add text and send it to POSTGRES database.

## Frontend:

Technologies and librarires used:

- React with TypeScript
- MUI for designing components

## Backend"

Technologies and librarires used:

- NodeJS
- Express js
- POSTGRES
- cors
- body-parser
- nodemon
- pg for POSTGRES database

## Quick Start:

### POSTGRES SETUP:

Note: These setups donot include docker configuration.


* Download postgres from "https://www.postgresql.org/".
* Choose operating system.
* Download latest version of postgres.
* Install postgres using setup, select destination of installation, components, directory for data storage.
* Provide passwords and port otherwise leave  default port.
* Select locale or leave it default.
* Press install button.

After installation, go to firewall settings. Head over to inbound rules and create new rule.Select rule type port , specify specific port 5432. Make sure TCP is selected. Click Next and make sure Allow connection is selected.Click next and check Domain,Public,Private are selected. Click next, enter connection name and click finish button.

**Make Sure the postgresql-x64-16-postgres service is running if not start the service.** 

#### Database and Table creation:
For database and table creation, there are two ways:
* using pgAdmin4
* using psql-shell

when using **pgAdmin4 interface**:

* Enter password of installation.
* Go to servers and then to postgres16.
* Verify Hostname/address and port.
* rightclick on Database and select create to create database.
* Enter name for database and press save button.
* now find newly created database name and head over  to schemas, then to Tables and right click on the option and select create option, enter name and press save.


when when using **SQL Shell psql**:
* Press enter three times.
* Enter username and password of installation.
* Enter \l to see all databases.
* To create database and table, write sql in server/postgres/postgres sql/database.sql.
* Enter \c database name.
* Enter \dt to see usertables.



To run the code, first clone the repo and then run following command to start frontend application:

- **cd client**
- run **npm install**
- run **npm start**

Split the terminal in vscode.

Now to run the backend/server, follow the following steps:

- **cd server**
- run **npm run serve**, install the package first time on prompt.


Note: Keep the server and application running.
