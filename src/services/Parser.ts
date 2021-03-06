import assets from './Assets';

class Parser {
    public parseStations = (stations: any[] = []) => {
        return stations.map((station: any) => {
            return {
                ref: station.code,
                title: station.name,
                station: station.station,
                image: assets.getLogo(station.code),
                width: station.width,
                height: station.height,
            };
        });
    };
}

export default new Parser();
