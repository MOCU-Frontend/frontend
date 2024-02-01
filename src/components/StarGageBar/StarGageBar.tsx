import React, { useEffect } from 'react';
import { ReactComponent as StarGageBarIcon } from '../../assets/icon/starGageBarRegular.svg';

interface Props {
  width: number;
  height: number;
  score: number;
}

const StarGageBar: React.FC<Props> = ({ width, height, score }: Props) => {
  if (score > 5 || score < 0) throw new Error('invalid score!');
  useEffect(() => {
    const star1 = document.getElementById('star1');
    const star2 = document.getElementById('star2');
    const star3 = document.getElementById('star3');
    const star4 = document.getElementById('star4');
    const star5 = document.getElementById('star5');
    if (star1 && star2 && star3 && star4 && star5) {
      const starArr = [star1, star2, star3, star4, star5];
      let num = score;
      for (let i = 0; i < 5; i++) {
        if (num > 1) {
          starArr[i].setAttribute('offset', '100%');
          num--;
        } else if (num === 0) {
          starArr[i].setAttribute('offset', '0%');
        } else {
          starArr[i].setAttribute('offset', `${num * 100}%`);
          num = 0;
        }
      }
    }
  }, []);
  return <StarGageBarIcon width={width} height={height} />;
};

export default StarGageBar;
