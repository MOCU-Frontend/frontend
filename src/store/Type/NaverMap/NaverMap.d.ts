export namespace NaverMapTypeEdited {
  interface ResultItem {
    name: string;
    code: {
      id: string;
      type: 'L' | 'A' | 'S' | string;
      mappingId: string;
    };
    region: Region;
    land: Land;
  }
  interface Region {
    area0: Area;
    area1: Area;
    area2: Area;
    area3: Area;
    area4: Area;
    addition0: Addition;
    addition1: Addition;
    addition2: Addition;
    addition3: Addition;
    addition4: Addition;
  }
  interface Addition {
    type: string;
    value: string;
  }
  interface Land {
    type: string;
    name: string;
    number1: string;
    number2: string;
    coords: Coords;
    addition0: Addition;
    addition1: Addition;
    addition2: Addition;
    addition3: Addition;
    addition4: Addition;
  }
  interface Coords {
    center: {
      crs: string;
      x: string;
      y: string;
    };
  }
  interface Area {
    name: string;
    coords: Coords;
  }
}
