import dotenv from 'dotenv';
dotenv.config();

class EnvEnvironment {
    static PORT = process.env.PORT
    static NODE_ENV = process.env.NODE_ENV
    static DB_NAME=process.env.DB_NAME;
    static DB_HOST=process.env.DB_HOST;
    static DB_USERNAME=process.env.DB_USERNAME;
    static DB_PASSWORD=process.env.DB_PASSWORD;
    static DB_TYPE=process.env.DB_TYPE;
    static DB_PORT=process.env.DB_PORT || 6000;
}

export default EnvEnvironment;
