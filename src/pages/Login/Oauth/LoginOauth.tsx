import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instance from '../../../apis/instance';
import {
  TokenLoginRequestData,
  TokenLoginResponseData,
} from '../../../store/Type/Login/login';
import useStore from '../../../store/useStore';
import styles from './LoginOauth.module.css';

interface Props {}

const LoginOauth: React.FC<Props> = ({}: Props) => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const setUserId = useStore((state) => state.setUserId);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (newData: TokenLoginRequestData) => {
      return instance.post('/api/auth/kakao/user', newData);
    },
    onSuccess: (res) => {
      const data: TokenLoginResponseData = res.data;
      if (data) {
        setUserId(`${data.userId}`);
        navigate('/');
      }
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
