import { useState } from 'react';
import { FilterListWithId } from '../store/data/searchResult';

export const useOptionMenu = (dataArr: FilterListWithId[]) => {
  const [optionDataArr, setOptionDataArr] =
    useState<FilterListWithId[]>(dataArr);
  const handleOptionClick = (id: number) => {
    setOptionDataArr((prev) => {
      const copiedArr = [...prev];
      const itemIdx = optionDataArr.findIndex((x) => x.id === id);
      if (itemIdx === -1) throw new Error('invalid option id');
      copiedArr[itemIdx].isChecked = !copiedArr[itemIdx].isChecked;
      return copiedArr;
    });
  };
  const checkedOptionDataArr = optionDataArr.reduce(
    (accumArr, curVal) =>
      curVal.isChecked ? [...accumArr, curVal] : [...accumArr],
    []
  );
  const uncheckedOptionDataArr = optionDataArr.reduce(
    (accumArr, curVal) =>
      !curVal.isChecked ? [...accumArr, curVal] : [...accumArr],
    []
  );
  const sortedOptionDataArr = [
    ...checkedOptionDataArr,
    ...uncheckedOptionDataArr,
  ];
  return { optionDataArr, sortedOptionDataArr, handleOptionClick };
};
