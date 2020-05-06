const fs = require('fs');
const sizeOf = require('image-size');
const LOCAL_PATH = './public/assets/';

const getCurrentDate = () => {
    const date = new Date().toISOString().match(/(.*)T.*/);
    return date[1];
};

const data = require(`../src/services/${getCurrentDate()}.json`);

const stations = Object.keys(data.data).reduce((acc, index) => {
    const code = data.data[index].DATOS_CADENA.CODIGO;
    const dimensions = sizeOf(`${LOCAL_PATH}${code}.png`);
    acc.push({
        file: `${code}.png`,
        code,
        name: data.data[index].DATOS_CADENA.NOMBRE,
        station: data.data[index].DATOS_CADENA.DIAL_PRINCIPAL[0],
        width: dimensions.width,
        height: dimensions.height,
    });

    return acc;
}, []);

fs.writeFileSync('./src/services/stations.json', JSON.stringify(stations, null, 2));
console.log('Stations info:', stations);
