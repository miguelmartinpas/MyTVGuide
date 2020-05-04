const BASE_URL = 'http://www.movistarplus.es';
const PATH = 'programacion-tv';
const VERSION = 'json';
const BASE_HTTP = 'https://www.movistarplus.es/';
const HTTP_PATH = 'recorte/m-NEO/guiapc/';
const DEVIDE_PATH = `${BASE_HTTP}${HTTP_PATH}`;
//const DEVIDE_PATH = '../../../public/assets/';
const WEB_PATH = './assets/';
const EXT = '.png';

const IS_WEB = !!process.env.REACT_APP_IS_WEB || false;

class Assets {
    public constructor(isWeb = false) {
        this.isWeb = isWeb;
    }

    public getLogoUri = (code) => {
        return `${this.getPath()}${code}${EXT}`;
    };

    private getPath = () => {
        return this.isWeb ? WEB_PATH : DEVIDE_PATH;
    };
}

export default new Assets(IS_WEB);
