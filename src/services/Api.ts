import firebase from './Firebase';
import config from '../config';

const PROXY_BASE_URL = 'https://my-tv-guide-proxy.herokuapp.com';
// const PROXY_BASE_URL = 'http://localhost:3000';
const PROXY_PATH = 'tv-programmes';
const DATE_FORMAT = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const MOCK_DATA = !!process.env.REACT_APP_MOCK_DATA || false;

class Api {
    private cache: any;
    private lastDayLoaded: null | string;
    private mock: boolean;
    private token: string;

    public constructor(mock = false) {
        this.cache = {};
        this.lastDayLoaded = null;
        this.mock = mock;
        this.token = null;
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
        // if (!this.token) {
        //     console.log('call to get token...');
        //     this.token = await firebase.getEmailAndPasswordToken('--', '--');
        //     console.log('this.token', this.token);
        // }
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

    private prepareUrlWithToken = (day: string) => {
        return `${PROXY_BASE_URL}/${PROXY_PATH}/${day}`
    }

    private getOptions = () => ({
        method: 'GET',
        headers: { user: config.userConfig.user, pass: config.userConfig.pass }
    })

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
            fetch(this.prepareUrlWithToken(day), this.getOptions())
                .then((response) => {
                    // console.log('response', response);
                    if (response.status === 200) {
                        return response.json();
                    }
                    throw new Error(`Error: ${response.status}: ${response.statusText} ${response.url}`);
                })
                .then((data) => {
                    // console.log('data', data);
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
