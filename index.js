const logger = require('./logger');

const devolverError = value => {
 if (typeof value === 'string') return "String correcto => " + value;

 throw new Error("El valor ingresado no es un string");
}

try {
 console.log(devolverError("8"));
} catch (e) {
 console.error("ERROR!!!, más información en carpeta logs/");
 logger.error(`${e}`);
}