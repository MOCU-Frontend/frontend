import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface Props {
  width: number;
  height: number;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const StarGageBarBtn: React.FC<Props> = ({
  width,
  height,
  score,
  setScore,
}: Props) => {
  if (score > 5 || score < 0) throw new Error('invalid score!');
  const star1Id = uuidv4();
  const star2Id = uuidv4();
  const star3Id = uuidv4();
  const star4Id = uuidv4();
  const star5Id = uuidv4();
  const star1Ref = useRef<SVGStopElement>(null);
  const star2Ref = useRef<SVGStopElement>(null);
  const star3Ref = useRef<SVGStopElement>(null);
  const star4Ref = useRef<SVGStopElement>(null);
  const star5Ref = useRef<SVGStopElement>(null);
  useEffect(() => {
    if (
      star1Ref.current &&
      star2Ref.current &&
      star3Ref.current &&
      star4Ref.current &&
      star5Ref.current
    ) {
      const starArr = [
        star1Ref.current,
        star2Ref.current,
        star3Ref.current,
        star4Ref.current,
        star5Ref.current,
      ];
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
  }, [score]);
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 85 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient y2='0%' x2='100%' y1='0%' x1='0%' id={star1Id}>
          <stop stopColor='#f6b552' offset='0%' id='star1' ref={star1Ref} />
          <stop stopColor='#cacaca' offset='0%' id='F1gst2' />
        </linearGradient>
        <linearGradient y2='0%' x2='100%' y1='0%' x1='0%' id={star2Id}>
          <stop stopColor='#f6b552' offset='0%' id='star2' ref={star2Ref} />
          <stop stopColor='#cacaca' offset='0%' id='F1gst2' />
        </linearGradient>
        <linearGradient y2='0%' x2='100%' y1='0%' x1='0%' id={star3Id}>
          <stop stopColor='#f6b552' offset='0%' id='star3' ref={star3Ref} />
          <stop stopColor='#cacaca' offset='0%' id='F1gst2' />
        </linearGradient>
        <linearGradient y2='0%' x2='100%' y1='0%' x1='0%' id={star4Id}>
          <stop stopColor='#f6b552' offset='0%' id='star4' ref={star4Ref} />
          <stop stopColor='#cacaca' offset='0%' id='F1gst2' />
        </linearGradient>
        <linearGradient y2='0%' x2='100%' y1='0%' x1='0%' id={star5Id}>
          <stop stopColor='#f6b552' offset='0%' id='star5' ref={star5Ref} />
          <stop stopColor='#cacaca' offset='0%' id='F1gst2' />
        </linearGradient>
      </defs>
      <path
        d='M8.23255 13.6996C8.55982 13.4917 8.97778 13.4917 9.30505 13.6996L11.6788 15.2078C12.4303 15.6852 13.384 15.0165 13.1914 14.1473L12.5261 11.1452C12.4486 10.7956 12.564 10.4312 12.8286 10.1899L15.0881 8.12946C15.7312 7.54304 15.3701 6.47193 14.5032 6.39452L11.6268 6.13763C11.2524 6.1042 10.9284 5.86372 10.7881 5.51509L9.69643 2.80387C9.36009 1.96854 8.17751 1.96854 7.84117 2.80387L6.74952 5.5151C6.60915 5.86372 6.28517 6.1042 5.91084 6.13763L3.03435 6.39452C2.16749 6.47193 1.80642 7.54304 2.44949 8.12946L4.70903 10.1899C4.97364 10.4312 5.08902 10.7956 5.01154 11.1452L4.3462 14.1473C4.15357 15.0165 5.10732 15.6852 5.85876 15.2078L8.23255 13.6996Z'
        fill={`url(#${star1Id})`}
        onClick={() => setScore(1)}
      />
      <path
        d='M25.2325 13.6996C25.5598 13.4917 25.9778 13.4917 26.3051 13.6996L28.6788 15.2078C29.4303 15.6852 30.384 15.0165 30.1914 14.1473L29.5261 11.1452C29.4486 10.7956 29.564 10.4312 29.8286 10.1899L32.0881 8.12946C32.7312 7.54304 32.3701 6.47193 31.5032 6.39452L28.6268 6.13763C28.2524 6.1042 27.9284 5.86372 27.7881 5.51509L26.6964 2.80387C26.3601 1.96854 25.1775 1.96854 24.8412 2.80387L23.7495 5.5151C23.6092 5.86372 23.2852 6.1042 22.9108 6.13763L20.0344 6.39452C19.1675 6.47193 18.8064 7.54304 19.4495 8.12946L21.709 10.1899C21.9736 10.4312 22.089 10.7956 22.0115 11.1452L21.3462 14.1473C21.1536 15.0165 22.1073 15.6852 22.8588 15.2078L25.2325 13.6996Z'
        fill={`url(#${star2Id})`}
        onClick={() => setScore(2)}
      />
      <path
        d='M42.2325 13.6996C42.5598 13.4917 42.9778 13.4917 43.3051 13.6996L45.6788 15.2078C46.4303 15.6852 47.384 15.0165 47.1914 14.1473L46.5261 11.1452C46.4486 10.7956 46.564 10.4312 46.8286 10.1899L49.0881 8.12946C49.7312 7.54304 49.3701 6.47193 48.5032 6.39452L45.6268 6.13763C45.2524 6.1042 44.9284 5.86372 44.7881 5.51509L43.6964 2.80387C43.3601 1.96854 42.1775 1.96854 41.8412 2.80387L40.7495 5.5151C40.6092 5.86372 40.2852 6.1042 39.9108 6.13763L37.0344 6.39452C36.1675 6.47193 35.8064 7.54304 36.4495 8.12946L38.709 10.1899C38.9736 10.4312 39.089 10.7956 39.0115 11.1452L38.3462 14.1473C38.1536 15.0165 39.1073 15.6852 39.8588 15.2078L42.2325 13.6996Z'
        fill={`url(#${star3Id})`}
        onClick={() => setScore(3)}
      />
      <path
        d='M59.2325 13.6996C59.5598 13.4917 59.9778 13.4917 60.3051 13.6996L62.6788 15.2078C63.4303 15.6852 64.384 15.0165 64.1914 14.1473L63.5261 11.1452C63.4486 10.7956 63.564 10.4312 63.8286 10.1899L66.0881 8.12946C66.7312 7.54304 66.3701 6.47193 65.5032 6.39452L62.6268 6.13763C62.2524 6.1042 61.9284 5.86372 61.7881 5.51509L60.6964 2.80387C60.3601 1.96854 59.1775 1.96854 58.8412 2.80387L57.7495 5.5151C57.6092 5.86372 57.2852 6.1042 56.9108 6.13763L54.0344 6.39452C53.1675 6.47193 52.8064 7.54304 53.4495 8.12946L55.709 10.1899C55.9736 10.4312 56.089 10.7956 56.0115 11.1452L55.3462 14.1473C55.1536 15.0165 56.1073 15.6852 56.8588 15.2078L59.2325 13.6996Z'
        fill={`url(#${star4Id})`}
        onClick={() => setScore(4)}
      />
      <path
        d='M76.2325 13.6996C76.5598 13.4917 76.9778 13.4917 77.3051 13.6996L79.6788 15.2078C80.4303 15.6852 81.384 15.0165 81.1914 14.1473L80.5261 11.1452C80.4486 10.7956 80.564 10.4312 80.8286 10.1899L83.0881 8.12946C83.7312 7.54304 83.3701 6.47193 82.5032 6.39452L79.6268 6.13763C79.2524 6.1042 78.9284 5.86372 78.7881 5.51509L77.6964 2.80387C77.3601 1.96854 76.1775 1.96854 75.8412 2.80387L74.7495 5.5151C74.6092 5.86372 74.2852 6.1042 73.9108 6.13763L71.0344 6.39452C70.1675 6.47193 69.8064 7.54304 70.4495 8.12946L72.709 10.1899C72.9736 10.4312 73.089 10.7956 73.0115 11.1452L72.3462 14.1473C72.1536 15.0165 73.1073 15.6852 73.8588 15.2078L76.2325 13.6996Z'
        fill={`url(#${star5Id})`}
        onClick={() => setScore(5)}
      />
    </svg>
  );
};

export default StarGageBarBtn;
