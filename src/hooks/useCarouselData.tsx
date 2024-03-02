import { useEffect, useState } from 'react';

export const useCarouselData = <T,>(
  dataArr: ({ isChecked: boolean } & T)[]
) => {
  const [carouselItemArr, setCarouselItemArr] = useState(
    dataArr.map((data) => {
      return { ...data };
    })
  );

  const handleCheckedDataIndex = (prevIndex: number, newIndex: number) => {
    if (prevIndex === -1) throw new Error('invalid prevIndex!!');
    if (newIndex === -1) throw new Error('invalid newIndex!!');
    if (!carouselItemArr) throw new Error('no reviewArr!!');
    if (!carouselItemArr[prevIndex]) throw new Error('invalid prevIndex!!');
    if (!carouselItemArr[newIndex]) throw new Error('invalid newIndex!!');
    setCarouselItemArr((prevArr) => {
      if (!prevArr) throw new Error('no prevArr!!');
      const copiedArr = [...prevArr];
      copiedArr[prevIndex].isChecked = false;
      copiedArr[newIndex].isChecked = true;
      return copiedArr;
    });
  };

  useEffect(() => {
    setCarouselItemArr(
      dataArr.map((data) => {
        return { ...data };
      })
    );
  }, [dataArr, setCarouselItemArr]);
  return { carouselItemArr, handleCheckedDataIndex };
};
