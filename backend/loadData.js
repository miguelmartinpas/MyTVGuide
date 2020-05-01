const fetch = require('node-fetch');
const fs = require('fs');

const FILE_PATH = './src/mocks/';

const BASE_URL = 'http://www.movistarplus.es';
const PATH = 'programacion-tv';
const VERSION = 'json';

const getCurrentDate = () => {
    const date = new Date().toISOString().match(/(.*)T.*/);
    return date[1];
};

const fileExists = (day) => {
    return fs.existsSync(`${FILE_PATH}${day}.json`);
};

const getSize = (day) => {
    const fileSizeInBytes = fs.statSync(`${FILE_PATH}${selectedDay}.json`).size;
    return Math.round(fileSizeInBytes * 0.000001 * 100) / 100;
};

const fetchData = (day, successCallback, errorCallback) => {
    fetch(`${BASE_URL}/${PATH}/${day}?v=${VERSION}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            successCallback(day, data);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

const successCB = (day, data) => {
    try {
        fs.writeFileSync(`${FILE_PATH}${day}.json`, JSON.stringify(data, null, 2));
        console.log(`Data for day '${selectedDay}' saved in the system (${getSize(day)} Megabytes)`);
    } catch (err) {
        // An error occurred
        console.error(err);
    }
};

//------------------------------------------------------------------------------
// MAIN
//------------------------------------------------------------------------------
const selectedDay = process.env.LOAD_DATE || getCurrentDate();

if (!fileExists(selectedDay)) {
    fetchData(selectedDay, successCB);
} else {
    console.log(`Data for day '${selectedDay}' exists in the system (${getSize(selectedDay)} Megabytes)`);
}
