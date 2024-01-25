import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerRequestItem from '../../../components/Owner/Request/atoms/Item/OwnerRequestItem';
import styles from './OwnerRequest.module.css';
type RequestCategory = '수락 완료 요청' | '미수락 요청';
type RequestData = {
  category: RequestCategory;
  userName: string;
  dateText: string;
};
interface Props {}

const OwnerRequest: React.FC<Props> = ({}: Props) => {
  const [requestArr, setRequestArr] = useState<RequestData[]>([
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
    {
      category: '미수락 요청',
      userName: '모쿠',
      dateText: '11월 24일 17:24',
    },
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
    {
      category: '수락 완료 요청',
      userName: '송희',
      dateText: '11월 24일 17:24',
    },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderBackBtn
        headerTitle='고객 요청 관리'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.filtersWrapper}>
        <CheckFilter
          label='수락 안 한 요청만'
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => {}}
        />
        <CheckFilterSelect
          label='보상 • 적립 전체'
          backgroundColor='grey-light-00'
          textColor='grey-dark-01'
          isChecked={false}
          border={1}
          borderColor='grey-light-02'
          onClick={() => {}}
        />
      </div>
      <div className={styles.itemsWrapper}>
        {requestArr.map((data, index) => (
          <OwnerRequestItem
            key={data.userName + index}
            category={data.category}
            userName={data.userName}
            dateText={data.dateText}
          />
        ))}
      </div>
    </div>
  );
};

export default OwnerRequest;
