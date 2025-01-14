require("dotenv").config();

// Constants
module.exports = {
  database: {
    MONGODB_URL: process.env.MONGODB_URL,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    //   host: process.env.DATABASE_HOST || "localhost",
    //   port: process.env.DATABASE_PORT,
    //   database: process.env.DATABASE_DB,
    //   user: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD
    //     ? readFileSync(process.env.DATABASE_PASSWORD)
    //     : null
  },
  port: process.env.PORT || 3000,
  secret: process.env.SECRET,
  // if you're not using docker compose for local development, this will default to 8080
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :)
};
