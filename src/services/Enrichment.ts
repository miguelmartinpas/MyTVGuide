import assets from './Assets';

class Enrichment {
    public stations = (stations: any[] = []) => {
        return stations.map((station: any) => {
            return {
                ...station,
                image: assets.getLogo(station.code),
                width: station.width,
                height: station.height,
            };
        });
    };
}

export default new Enrichment();
