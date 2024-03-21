
    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'dpg-cntubn0l6cac73c8a4f0-a.oregon-postgres.render.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'doctors_vgh4'),
          user: env('DATABASE_USERNAME', 'doctors_vgh4_user'),
          password: env('DATABASE_PASSWORD', 'cnLGuPw5eyOuV1wTTC3gTh3xgAQO18Iv'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: env.bool('DATABASE_SSL', true),
        },
        debug: false,
        
      },
    });
