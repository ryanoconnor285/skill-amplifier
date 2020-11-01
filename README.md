# skill-amplifier

### Getting Started

#### Prerequisites

- Download and install the latest version of NodeJS https://nodejs.org/en/
- JWT Secret, set this to a memorable passphrase
- Port, set the port for the server to run on
- Database URI
  - visit https://www.mongodb.com/ to create a free username and set up a cluster.
  - Once your cluster is set up then create a database.
  - The default name for the users collection should be users.
  - Don't forget to set at least one user for your database with admin access under "Database Access". This should be different from your mongoDB Atlas username.
  - Next, get the URI for your new database by clicking "Connect" > "Connect your Application". Copy the URI and paste it into your application in the .env as the DATABASE_URI variable. The URI provided by mongoDB Atlas will look like this; mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority.
  - Make sure to replace username and password with the username and password you created for the database and make sure to replace database name.
  - Note this is not your login for mongoDB atlas, you need to create a user under the "Database Access" tab. Make sure to give the user read and write permissions.

#### Installation

Install all dependencies by running the following command

```javascript
$ npm install
```
