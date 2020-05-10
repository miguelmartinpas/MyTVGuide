import { stations, Station } from './Stations';

const IS_WEB = !!process.env.REACT_APP_IS_WEB || false;

class Assets {
    private isWeb: boolean;

    public constructor(isWeb = false) {
        this.isWeb = isWeb;
    }

    public getLogo = (code: string): any => {
        return this.isWeb ? this.getWebLogo(code) : this.getDeviceLogo(code);
    };

    public getDeviceLogo = (code: string): any => {
        const selectedStation = stations.find((station: Station): boolean => station.code === code);
        return selectedStation && selectedStation.file;
    };

    public getWebLogo = (code: string): any => {
        const selectedStation = stations.find((station: Station): boolean => station.code === code);
        return { uri: selectedStation && selectedStation.file };
    };
}

export default new Assets(IS_WEB);
