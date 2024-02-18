import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  TokenLoginRequestData,
  TokenLoginResponseData,
} from '../../../store/Type/Login/login';
import styles from './LoginOauth.module.css';

interface Props {}

const LoginOauth: React.FC<Props> = ({}: Props) => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (newData: TokenLoginRequestData) => {
      return axios.post('/api/auth/kakao', newData);
    },
    onSuccess: (res) => {
      const data: TokenLoginResponseData = res.data;
      console.log(data);
    },
  });
  if (error) {
    console.log(error);
    navigate(-1);
  }
  useEffect(() => {
    if (code) {
      loginMutation.mutate({
        authorizationCode: code,
      });
    }
  }, [code]);

  return <div className={styles.wholeWrapper}>redirect..</div>;
};

export default LoginOauth;
//
