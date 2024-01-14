import React from 'react';
import MyLocationEditDetailInput from '../../Input/Detail/MyLocationEditDetailInput';
import MyLocationEditDetailContentTitleText from '../../Texts/ContentTitle/MyLocationEditDetailContentTitleText';
import styles from './MyLocationEditDetailContent.module.css';

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyLocationEditDetailContent: React.FC<Props> = ({
  value,
  handleChange,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <MyLocationEditDetailContentTitleText text='상세 주소 입력' />
      <MyLocationEditDetailInput value={value} handleChange={handleChange} />
    </div>
  );
};

export default MyLocationEditDetailContent;
