import { useState } from 'react';

type LocSetData = {
  name: '집' | '회사' | '학교' | '기타';
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
  etcName?: string;
};
export const useLocSetSelect = (dataArr: LocSetData[]) => {
  const [locSetDataArr, setLocSetDataArr] = useState<LocSetData[]>(dataArr);
  const checkedLocSetData = locSetDataArr.find((x) => x.isChecked);
  const handleClickLocSetBtn = (index: number) => {
    if (!locSetDataArr[index]) throw new Error('invalid index!');
    setLocSetDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      const checkedIndex = copiedArr.findIndex((x) => x.isChecked);
      if (checkedIndex === -1) throw new Error('there is no checked data!!');
      copiedArr[checkedIndex].isChecked = false;
      copiedArr[index].isChecked = true;
      return copiedArr;
    });
  };
  const handleChangeCheckedDataEtcName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkedData = locSetDataArr.find((x) => x.isChecked);
    if (!checkedData) throw new Error('no checked loc set data!');
    if (checkedData.name !== '기타') throw new Error('no etc name data!');
    setLocSetDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[3].etcName = e.target.value;
      return copiedArr;
    });
  };
  return {
    locSetDataArr,
    checkedLocSetData,
    handleClickLocSetBtn,
    handleChangeCheckedDataEtcName,
  };
};
