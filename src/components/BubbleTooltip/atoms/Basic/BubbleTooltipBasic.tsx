import React, { ReactNode } from 'react';
import styles from './BubbleTooltipBasic.module.css';
interface Props {
  children: ReactNode;
  tailDirection: 'top' | 'right' | 'bottom' | 'left';
}

const BubbleTooltipBasic: React.FC<Props> = ({
  children,
  tailDirection,
}: Props) => {
  let bubbleClassNames = `${styles.bubble}`;
  switch (tailDirection) {
    case 'top':
      bubbleClassNames += ` ${styles.bubbleTop}`;
      break;
    case 'right':
      bubbleClassNames += ` ${styles.bubbleRight}`;
      break;
    case 'bottom':
      bubbleClassNames += ` ${styles.bubbleBottom}`;
      break;
    case 'left':
      bubbleClassNames += ` ${styles.bubbleLeft}`;
      break;
    default:
      throw new Error('not valid direction!!');
  }
  return <div className={bubbleClassNames}>{children}</div>;
};

export default BubbleTooltipBasic;
