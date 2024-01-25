import React from 'react';
import CheckFilter from '../../../../../../CheckFilter/CheckFilter';
import OwnerInformSecTitleText from '../../../../atoms/Texts/SecTitle/OwnerInformSecTitleText';
import styles from './OwnerInformEditFilterContent.module.css';

type Filter = {
  isChecked: boolean;
  name: string;
};

interface Props {
  title: string;
  filterArr: Filter[];
}

const OwnerInformEditFilterContent: React.FC<Props> = ({
  title,
  filterArr,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      <div className={styles.overflowWrapper}>
        <div className={styles.filtersWrapper}>
          {filterArr.map((data, index) => (
            <CheckFilter
              key={data.name + index}
              label={data.name}
              isChecked={data.isChecked}
              backgroundColor={'bg-purple-light'}
              border={1}
              borderColor={'sub-purple-light'}
              textColor={'sub-purple-light'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerInformEditFilterContent;
