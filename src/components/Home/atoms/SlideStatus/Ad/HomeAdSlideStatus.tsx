import React from 'react';
import { colors } from '../../../../../styles/colors';
import styles from './HomeAdSlideStatus.module.css';

interface Props {
  dataArr: ItemData[];
  handleCheckedDataIndex: (prevIndex: number, newIndex: number) => void;
}
type ItemData = {
  isChecked: boolean;
};
const HomeAdSlideStatus: React.FC<Props> = ({
  dataArr,
  handleCheckedDataIndex,
}: Props) => {
  const checkedIndex = dataArr.findIndex((x) => x.isChecked);
  if (checkedIndex === -1) throw new Error('there is no checked data!!');
  return (
    <div className={styles.wholeWrapper}>
      {dataArr.map((data, index) => (
        <button
          onClick={() => handleCheckedDataIndex(checkedIndex, index)}
          key={'statusCircle' + index}
          className={styles.status}
          style={{
            backgroundColor: data.isChecked ? colors.white : colors.greyDark00,
          }}
        ></button>
      ))}
      <div></div>
    </div>
  );
};

export default HomeAdSlideStatus;
