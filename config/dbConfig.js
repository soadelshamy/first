module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'soad_2023',
    DB: 'third',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}