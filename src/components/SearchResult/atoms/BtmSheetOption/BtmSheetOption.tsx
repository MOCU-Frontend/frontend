import React from 'react';
import styles from './BtmSheetOption.module.css';
import CheckFilter from '../../../CheckFilter/CheckFilter';
import { ReactComponent as ResetImage } from '../../../../assets/icon/reset.svg';
import SearchResultResetBtn from '../Button/Reset/SearchResultResetBtn';

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
  /**
   * 리셋 버튼 클릭할 때
   */
  onClickResetBtn: () => void;
}

const BtmSheetOption: React.FC<Props> = ({
  OptionDataArray,
  onClick,
  onClickResetBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.optionsWrapper}>
        {OptionDataArray.map((data, index) => (
          <CheckFilter
            key={index}
            label={data.title}
            isChecked={data.isChecked}
            border={1}
            size='small'
            borderColor='sub-purple-light'
            borderRadius='large'
            onClick={() => onClick(index)}
          />
        ))}
      </div>
      <div className={styles.resetBtnWrapper}>
        <SearchResultResetBtn onClick={onClickResetBtn} />
      </div>
    </div>
  );
};

export default BtmSheetOption;
