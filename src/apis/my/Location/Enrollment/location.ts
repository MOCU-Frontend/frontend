import axios from 'axios';
import { AddressSearchWholeData } from '../../../../store/Type/AddressSearch/AddressSearch';

export const fetchLocData = async (locText: string) => {
  const response = await axios.get<AddressSearchWholeData>(
    `https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=${locText}`,
    {
      method: 'GET',
      headers: { Authorization: process.env.REACT_APP_KAKAO_AK || '' },
    }
  );
  console.log(response);
  return response.data;
};
