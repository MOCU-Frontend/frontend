export type AddressSearchWholeData = {
  documents: AddressSearchData[];
  meta: AddressSearchMetaData;
};
export type AddressSearchData = {
  address_name: string;
  address_type: string;
  x: string;
  y: string;
  address?: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_3depth_h_name: string;
    h_code: string;
    b_code: string;
    mountain_yn: string;
    main_address_no: string;
    sub_address_no: string;
    x: string;
    y: string;
  };
  road_address?: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    underground_yn: string;
    main_building_no: string;
    sub_building_no: string;
    building_name?: string;
    zone_no: string;
    x: string;
    y: string;
  };
};

type AddressSearchMetaData = {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
};
