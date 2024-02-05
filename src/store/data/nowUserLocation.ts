export type UserLocation = {
  name: string;
  address: string;
  id: number;
  isChecked: boolean;
};
export const userLocationArr: UserLocation[] = [
  { name: '학교', address: '서울 광진구 능동로 120', id: 1, isChecked: true },
  { name: '집', address: '서울 광진구 아차산로 225', id: 2, isChecked: false },
];
