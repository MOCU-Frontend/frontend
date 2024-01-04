import React from 'react';
import BubbleTooltipBasic from './atoms/Basic/BubbleTooltipBasic';
import BubbleTooltipXBtn from './atoms/Btn/BubbleTooltipXBtn';
import BubbleTooltipText from './atoms/Text/BubbleTooltipText';
import styles from './BubbleTooltip.module.css';
interface Props {
  tailDirection: 'top' | 'right' | 'bottom' | 'left';
  isClickBtn: boolean;
  onClickXBtn?: () => void;
  bodyText: string;
}

const BubbleTooltip: React.FC<Props> = ({
  tailDirection,
  isClickBtn = false,
  onClickXBtn,
  bodyText,
}: Props) => {
  return (
    <BubbleTooltipBasic tailDirection={tailDirection}>
      {isClickBtn && onClickXBtn ? (
        <div className={styles.wrapperWithXBtn}>
          <BubbleTooltipText text={bodyText} />
          <BubbleTooltipXBtn onClickXBtn={onClickXBtn} />
        </div>
      ) : (
        <div className={styles.wrapperWithoutXBtn}>
          <BubbleTooltipText text={bodyText} />
        </div>
      )}
    </BubbleTooltipBasic>
  );
};

export default BubbleTooltip;
