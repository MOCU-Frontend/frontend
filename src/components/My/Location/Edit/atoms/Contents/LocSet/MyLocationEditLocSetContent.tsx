import React from 'react';
import MyLocationEditLocSetBtn from '../../Buttons/LocSet/MyLocationEditLocSetBtn';
import MyLocationEditDetailInput from '../../Input/Detail/MyLocationEditDetailInput';
import MyLocationEditDetailContentTitleText from '../../Texts/ContentTitle/MyLocationEditDetailContentTitleText';
import styles from './MyLocationEditLocSetContent.module.css';

type LocSetData = {
  name: '집' | '회사' | '학교' | '기타';
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
  etcName?: string;
};

interface Props {
  locSetDataArr: LocSetData[];
  handleClickBtn: (index: number) => void;
  handleChangeCheckedDataEtcName: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const MyLocationEditLocSetContent: React.FC<Props> = ({
  locSetDataArr,
  handleClickBtn,
  handleChangeCheckedDataEtcName,
}: Props) => {
  const checkedData = locSetDataArr.find((x) => x.isChecked);
  if (!checkedData) throw new Error('no checked loc set data!');
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
      {checkedData.name === '기타' && (
        <MyLocationEditDetailInput
          value={checkedData.etcName || ''}
          handleChange={handleChangeCheckedDataEtcName}
        />
      )}
    </div>
  );
};

export default MyLocationEditLocSetContent;
