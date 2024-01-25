import React from 'react';
import { colors } from '../../../../../styles/colors';
import Button from '../../../../Button/Button';
import OwnerRequestItemSubText from '../Texts/ItemSub/OwnerRequestItemSubText';
import OwnerRequestItemTitleText from '../Texts/ItemTitle/OwnerRequestItemTitleText';
import styles from './OwnerRequestItem.module.css';
type RequestCategory = '수락 완료 요청' | '미수락 요청';
interface Props {
  category: RequestCategory;
  userName: string;
  dateText: string;
}

const OwnerRequestItem: React.FC<Props> = ({
  category,
  userName,
  dateText,
}: Props) => {
  const isHighlight = category === '미수락 요청';
  return (
    <div
      className={styles.wholeWrapper}
      style={{ background: isHighlight ? colors.subGradation : colors.white }}
    >
      <OwnerRequestItemSubText
        text={category}
        color={isHighlight ? colors.white : colors.grey}
      />
      <OwnerRequestItemTitleText
        text={userName + '님의 보상 요청'}
        color={isHighlight ? colors.white : colors.black}
      />
      <div className={styles.dateTextWrapper}>
        <OwnerRequestItemSubText
          text={dateText}
          color={isHighlight ? colors.white : colors.subPurpleLight}
        />
      </div>
      {isHighlight && (
        <div className={styles.acceptBtnWrapper}>
          <Button
            label='요청 수락하기'
            backgroundColor='white'
            textColor='sub-purple-light'
            size='small'
          />
        </div>
      )}
    </div>
  );
};

export default OwnerRequestItem;
