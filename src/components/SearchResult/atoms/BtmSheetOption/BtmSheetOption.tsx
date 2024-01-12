import React, { useState } from 'react';
import styles from './BtmSheetOption.module.css';
import CheckFilter from '../../../CheckFilter/CheckFilter';

interface Props {
  closeBottomSheet: () => void;
}

type OptionData = {
  title: string;
  isChecked: boolean;
};

export const OptionDataArr = [
  {
    title: '이벤트 중',
    isChecked: true,
  },
  {
    title: '쿠폰 사용 임박',
    isChecked: true,
  },
  {
    title: '적립 진행 중만',
    isChecked: true,
  },
  {
    title: '안 가본 곳만',
    isChecked: true,
  },
  {
    title: '기타 옵션',
    isChecked: true,
  },
];

const BtmSheetOption: React.FC<Props> = ({ closeBottomSheet }: Props) => {
  let initialOptionData = OptionDataArr;

  const [OptionData, setOptionData] = useState(initialOptionData);

  const handleOptionClick = (index: number) => {
    const newOptionData = OptionData.map((item, i) => {
      if (i === index) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setOptionData(newOptionData);
    closeBottomSheet();
  };

  return (
    <div className={styles.wrapOption}>
      {OptionDataArr.map((data, index) => (
        <CheckFilter
          key={index}
          label={data.title}
          isChecked={data.isChecked}
          border={1}
          size="small"
          borderColor="sub-purple-light"
          borderRadius="large"
          onClick={() => handleOptionClick(index)}
        />
      ))}
    </div>
  );
};

export default BtmSheetOption;
