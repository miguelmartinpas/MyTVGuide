const BASE_URL = 'http://www.movistarplus.es';
const PATH = 'programacion-tv';
const VERSION = 'json';
const DATE_FORMAT = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const MOCK_DATA = !!process.env.REACT_APP_MOCK_DATA || false;

class Api {
    private cache: any;
    private lastDayLoaded: null | string;
    private mock: boolean;

    public constructor(mock = false) {
        this.cache = {};
        this.lastDayLoaded = null;
        this.mock = mock;
    }

    public loadCurrentDate = async (): Promise<any> => {
        return await this.load(this.getCurrentDate());
    };

    public loadDate = async (date: string): Promise<any> => {
        const dateParsed: any = date.match(DATE_FORMAT);
        if (dateParsed) {
            return await this.load(dateParsed[1]);
        } else {
            throw new Error(`Error Incorrect format of date '${date}'. the correct forma is ${DATE_FORMAT}`);
        }
    };

    private load = async (day: string): Promise<any> => {
        return await new Promise((resolve, reject) => {
            const cachedData = this.getCache(day);
            if (cachedData) {
                resolve(cachedData);
            } else {
                this.fetchData(
                    day,
                    (selectedDay, data) => {
                        this.setCache(selectedDay, data);
                        resolve(data);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        });
    };

    private preload = (day: string): void => {
        const data = this.getCache(day);
        if (!data) {
            this.fetchData(day, this.setCache, () => {});
        }
    };

    private fetchData = (
        day: string,
        successCallback: (day: string, data: any) => void,
        errorCallback: (error: any) => void
    ): void => {
        if (this.mock) {
            let data = null;
            // try {
            // console.log(`try to read ${`../mocks/${this.getCurrentDate()}.json`}`);
            // data = require(`../mocks/${this.getCurrentDate()}.json`);
            // } catch (error) {
            console.log(`try to read ${'../mocks/default.json'}`);
            data = require('../mocks/default.json');
            data.default = true;
            // }
            data.mock = true;
            successCallback(day, data);
        } else {
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
        }
    };

    private getCurrentDate = () => {
        const date: any = new Date().toISOString().match(/(.*)T.*/);
        return date[1];
    };

    private setCache = (date: string, data: any): void => {
        this.cache[date] = data;
    };

    private getCache = (date: string): any => {
        return this.cache[date];
    };
}

export default new Api(MOCK_DATA);
