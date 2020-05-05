const BASE_URL = 'http://www.movistarplus.es';
const PATH = 'programacion-tv';
const VERSION = 'json';
const BASE_HTTP = 'https://www.movistarplus.es/';
const HTTP_PATH = 'recorte/m-NEO/guiapc/';
const DEVIDE_PATH = `${BASE_HTTP}${HTTP_PATH}`;
//const DEVIDE_PATH = '../../public/assets/';
const WEB_PATH = './assets/';
const EXT = '.png';

const IS_WEB = !!process.env.REACT_APP_IS_WEB || false;

class Assets {
    private isWeb: boolean;

    public constructor(isWeb = false) {
        this.isWeb = isWeb;
    }

    public getLogo = (code: string): any => {
        return { uri: `${this.getPath()}${code}${EXT}` };
    };

    private getPath = (): string => {
        return this.isWeb ? WEB_PATH : DEVIDE_PATH;
    };
}

export default new Assets(IS_WEB);
