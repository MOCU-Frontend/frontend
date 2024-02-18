import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import instance from '../../../apis/instance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckFilter from '../../../components/CheckFilter/CheckFilter';
import CheckFilterSelect from '../../../components/CheckFilter/Select/CheckFilterSelect';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import OwnerRequestItem from '../../../components/Owner/Request/atoms/Item/OwnerRequestItem';
import { OwnerRequestDataResponse } from '../../../store/Type/Owner/Request/ownerRequest';
import styles from './OwnerRequest.module.css';
import { fetchOwnerRequestData } from '../../../apis/owner/request';
interface Props {}

const OwnerRequest: React.FC<Props> = ({}: Props) => {
  const {
    data: ownerRequestData,
    isLoading: isOwnerRequestDataLoading,
    isError: isOwnerRequestDataError,
  } = useQuery({
    queryKey: ['OwnerRequest'],
    queryFn: () => fetchOwnerRequestData(5, true, true, true, true, 0),
  });

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
        {ownerRequestData &&
          ownerRequestData.map((data, index) => {
            const date = new Date(data.modifiedDate);
            return (
              <OwnerRequestItem
                key={data.name + index}
                category={
                  data.acceptOption === 'accept'
                    ? '수락 완료 요청'
                    : '미수락 요청'
                }
                userName={data.name}
                dateText={`${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OwnerRequest;
