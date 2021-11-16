//const { Pool, Client } = require('pg')
import { Pool } from 'pg';

/*
//Configurar as variaveis de ambiente na vercel e utilizar os secrets 
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})



*/
const pool = new Pool({
    user: 'postgres',
    host: 'db.nwgnpmwitfqxeenmrvdd.supabase.co',
    database: 'postgres',
    password: 'plmnko@3991',
    port: 6543,
})
export default pool;