
export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgress',
    database: 'usersdb',
    define: {
        timestamp: true, 
        underscored: true,
        undescoredAll: true,
    }
}