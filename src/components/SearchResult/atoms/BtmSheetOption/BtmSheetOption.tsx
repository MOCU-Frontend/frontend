import React from 'react';
import styles from './BtmSheetOption.module.css';
import CheckFilter from '../../../CheckFilter/CheckFilter';

type OptionData = {
  title: string;
  isChecked: boolean;
};

interface Props {
  /**
   * 전달된 배열
   */
  OptionDataArray: OptionData[];

  /**
   * 버튼 클릭할 때
   */
  onClick: (index: number) => void;
}

const BtmSheetOption: React.FC<Props> = ({
  OptionDataArray,
  onClick,
}: Props) => {
  return (
    <div className={styles.wrapOption}>
      {OptionDataArray.map((data, index) => (
        <CheckFilter
          key={index}
          label={data.title}
          isChecked={data.isChecked}
          border={1}
          size="small"
          borderColor="sub-purple-light"
          borderRadius="large"
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default BtmSheetOption;
