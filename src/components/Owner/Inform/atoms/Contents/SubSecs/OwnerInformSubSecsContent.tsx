import React from 'react';
import OwnerInformSecBodyText from '../../Texts/SecBody/OwnerInformSecBodyText';
import OwnerInformSecSubTitleText from '../../Texts/SecSubTitle/OwnerInformSecSubTitleText';
import OwnerInformSecTitleText from '../../Texts/SecTitle/OwnerInformSecTitleText';
import styles from './OwnerInformSubSecsContent.module.css';
type SubInform = {
  title: string;
  bodyText: string;
};
interface Props {
  title: string;
  subInform: SubInform[];
}

const OwnerInformSubSecsContent: React.FC<Props> = ({
  title,
  subInform,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerInformSecTitleText text={title} />
      {subInform.map((data, index) => (
        <div className={styles.subSecWrapper} key={data.title + index}>
          <OwnerInformSecSubTitleText text={data.title} />
          <div className={styles.bodyWrapper}>
            <OwnerInformSecBodyText text={data.bodyText} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnerInformSubSecsContent;
