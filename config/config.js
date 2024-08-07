require("dotenv").config(); // Ensure this line is at the top

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
