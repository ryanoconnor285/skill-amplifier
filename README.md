# skill-amplifier

## Starter Node application for authenticating a user

### Getting Started

#### Requirements

- Database URI, visit https://www.mongodb.com/ to create a free username and set up a cluster. Once your cluster is set up then create a database. The default name for the users collection should be users. Don't forget to set at least one user for your database with admin access. This should be different from your mongoDB Atlas username. Next, get the URI for your new database by clicking "Connect" > "Connect your Application". Copy the URI and paste it into your application in the .env as the DATABASE_URI variable. The URI provided by mongoDB Atlas will look like this; mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority. Make sure to replace username and password with the username and password you created for the database and make sure to replace database name. Note this is not your login for mongoDB atlas, you need to create a user under the "Database Access" tab. Make sure to give the user read and write permissions.
