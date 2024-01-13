import React from 'react';
import MyLocationEditLocSetBtn from '../../Buttons/LocSet/MyLocationEditLocSetBtn';
import MyLocationEditDetailContentTitleText from '../../Texts/ContentTitle/MyLocationEditDetailContentTitleText';
import styles from './MyLocationEditLocSetContent.module.css';

type LocSetData = {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
};

interface Props {
  locSetDataArr: LocSetData[];
  handleClickBtn: (index: number) => void;
}

const MyLocationEditLocSetContent: React.FC<Props> = ({
  locSetDataArr,
  handleClickBtn,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <MyLocationEditDetailContentTitleText text='주소 별칭' />
      <div className={styles.locSetBtnsWrapper}>
        {locSetDataArr.map((data, index) => (
          <MyLocationEditLocSetBtn
            key={data.name + index}
            locSetData={data}
            onClick={() => handleClickBtn(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyLocationEditLocSetContent;
