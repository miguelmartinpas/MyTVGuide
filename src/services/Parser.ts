import assets from './Assets';

class Parser {
    public parseStations = (stations: any[] = []) => {
        return stations.map((station: any) => {
            return {
                ref: station.code,
                title: station.station,
                image: assets.getLogo(station.code),
                width: station.width,
                height: station.height,
            };
        });
    };

    public parsePrograms = (programs: any[] = []) => {
        return programs.map((program: any) => {
            return {
                ref: program.ELEMENTO,
                title: program.TITULO,
                from: program.HORA_INICIO,
                to: program.HORA_FIN,
            };
        });
    };
}

export default new Parser();
