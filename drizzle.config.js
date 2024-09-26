/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://car-marketplace_owner:rBVTO3f6ynUw@ep-shiny-moon-a588qkoo.us-east-2.aws.neon.tech/car-marketplace?sslmode=require",
  },
};
