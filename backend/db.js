const { Pool } = require('pg');

const pool = new Pool({
    // Ponemos el enlace directamente aquí
    connectionString: "postgresql://neondb_owner:npg_ymWDLjq4nK8J@ep-mute-paper-za1234bu-pooler.c-2.eu-west-2.aws.neon.tech/neondb?sslmode=require",
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;