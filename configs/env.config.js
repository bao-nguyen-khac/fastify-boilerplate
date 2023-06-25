function loadEnvironmentVariable(keyname) {
    const envVar = process.env[keyname];

    if (!envVar) {
        throw new Error(`Configuration must include ${keyname}`);
    }

    return envVar;
}

module.exports = {
    type: loadEnvironmentVariable('DB_TYPE'),
    host: loadEnvironmentVariable('DB_HOST'),
    port: loadEnvironmentVariable('DB_PORT'),
    username: loadEnvironmentVariable('DB_USER'),
    password: loadEnvironmentVariable('DB_PASSWD'),
    database: loadEnvironmentVariable('DB_DATABASE'),
};
