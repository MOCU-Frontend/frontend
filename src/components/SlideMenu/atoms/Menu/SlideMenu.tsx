import React from 'react';
import { colors } from '../../../../styles/colors';
import SlideMenuText from '../Text/MenuText/SlideMenuText';
import styles from './SlideMenu.module.css';

interface Props {
  text: string;
  isChecked: boolean;
  onClickMenu: () => void;
}

const SlideMenu: React.FC<Props> = ({
  text,
  isChecked,
  onClickMenu,
}: Props) => {
  let wrapperStyles = '';
  if (isChecked) {
    wrapperStyles = `${styles.wrapper} ${styles.checked}`;
  } else {
    wrapperStyles = `${styles.wrapper} ${styles.unChecked}`;
  }
  return (
    <button className={wrapperStyles} onClick={onClickMenu}>
      <SlideMenuText
        text={text}
        color={isChecked ? colors.navy : colors.greyLight02}
      />
    </button>
  );
};

export default SlideMenu;
