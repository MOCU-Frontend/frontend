import React, { ReactNode } from 'react';
import styles from './HeaderXBtn.module.css';
import { ReactComponent as UndoIcon } from '../../../assets/icon/undoCenterRegular.svg';
import { colors } from '../../../styles/colors';
interface Props {
  children?: ReactNode;
  headerPaddingSize?: 'small' | 'medium' | 'large' | 'search' | 'checkFilter';
  headerTitle?: string;
  backBtnSize?: number;
  backBtnColor?: string;
  backBtnGap?: number;
  headerTitleColor?: string;
  onClickXBtn?: () => void;
}

const HeaderXBtn: React.FC<Props> = ({
  children = <></>,
  headerPaddingSize = 'large',
  headerTitle,
  backBtnColor = colors.greyDark01,
  backBtnGap = 22.5,
  backBtnSize = 24,
  headerTitleColor = colors.greyDark01,
  onClickXBtn = () => {},
}: Props) => {
  let headerClassNames = `${styles.header}`;
  switch (headerPaddingSize) {
    case 'large':
      headerClassNames += ` ${styles.headerPaddingLarge}`;
      break;
    case 'medium':
      headerClassNames += ` ${styles.headerPaddingMedium}`;
      break;
    case 'small':
      headerClassNames += ` ${styles.headerPaddingSmall}`;
      break;
    case 'search':
      headerClassNames += ` ${styles.headerPaddingSearch}`;
      break;
    case 'checkFilter':
      headerClassNames += ` ${styles.headerPaddingCheckFilter}`;
      break;
    default:
      throw new Error('not valid header padding size!');
  }
  return (
    <header style={{ gap: `${backBtnGap}px` }} className={headerClassNames}>
      <button
        style={{
          width: `${backBtnSize}px`,
          height: `${backBtnSize}px`,
        }}
        className={styles.backBtn}
        onClick={onClickXBtn}
      >
        <UndoIcon
          width={backBtnSize}
          height={backBtnSize}
          stroke={backBtnColor}
        />
      </button>
      {headerTitle && (
        <div className={styles.centerDiv}>
          <h1
            style={{ color: headerTitleColor }}
            className={styles.headerTitle}
          >
            {headerTitle}
          </h1>
        </div>
      )}
      {children}
    </header>
  );
};

export default HeaderXBtn;
