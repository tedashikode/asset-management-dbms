const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "theodore",
      password: "pg6PG8b#T469axh",
      database: "asset_mgmnt_db",
      connectTimeout: 60000,
      multipleStatements: true
    },
    listPerPage: 10,
  };
  module.exports = config;