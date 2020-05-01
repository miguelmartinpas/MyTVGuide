const fs = require('fs');
const request = require('request');

const HTTP_BASE_PATH = 'https://www.movistarplus.es/';
const HTTP_PATH = 'recorte/m-NEO/guiapc/';
const LOCAL_PATH = './assets/';

const getLogoUrl = (code) => {
    return `${HTTP_BASE_PATH}${HTTP_PATH}${code}.png`;
};

const download = (uri, filename, callback) => {
    request.head(uri, (err, res, body) => {
        if (err) {
            console.log(err.stack);
        }
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

const downloadLogo = (code) => {
    console.log(`Try to download ${getLogoUrl(code)}...`);
    download(getLogoUrl(code), `${LOCAL_PATH}${code}.png`, () => {
        console.log(`      -> ${getLogoUrl(code)} done!!`);
    });
};

const getCurrentDate = () => {
    const date = new Date().toISOString().match(/(.*)T.*/);
    return date[1];
};

const data = require(`../src/mocks/${getCurrentDate()}.json`);

Object.keys(data.data).forEach((index) => {
    const code = data.data[index].DATOS_CADENA.CODIGO;
    downloadLogo(code);
});
