import React from 'react';
import { colors } from '../../../../styles/colors';
import MyLocationListFilterBodyText from '../Text/ListFilter/Body/MyLocationListFilterBodyText';
import MyLocationListFilterTitleText from '../Text/ListFilter/Title/MyLocationListFilterTitleText';
import styles from './MyLocationListFilter.module.css';
import { ReactComponent as CheckIcon } from '../../../../assets/icon/checkDefault.svg';
interface Props {
  titleText: string;
  bodyText: string;
  isChecked: boolean;
  onClick: () => void;
}

const MyLocationListFilter: React.FC<Props> = ({
  titleText,
  bodyText,
  isChecked,
  onClick,
}: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <div className={styles.header}>
        <MyLocationListFilterTitleText
          text={titleText}
          color={isChecked ? colors.navy : colors.greyLight02}
          fontWeight={isChecked ? '500' : '400'}
        />
        {isChecked && (
          <CheckIcon width={24} height={24} stroke={colors.mainPurple} />
        )}
      </div>

      <MyLocationListFilterBodyText
        text={bodyText}
        color={isChecked ? colors.greyDark01 : colors.greyLight02}
      />
    </button>
  );
};

export default MyLocationListFilter;
