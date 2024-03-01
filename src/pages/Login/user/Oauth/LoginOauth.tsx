import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instance from '../../../../apis/instance';
import {
  UserTokenSaveRequestData,
  UserTokenSaveResponseData,
} from '../../../../store/Type/Auth/auth';
import {
  TokenLoginRequestData,
  TokenLoginResponseData,
} from '../../../../store/Type/Login/login';
import useStore from '../../../../store/useStore';
import styles from './LoginOauth.module.css';

interface Props {}
declare global {
  interface Window {
    deviceId: string | undefined;
    deviceToken: string | undefined;
  }
}
const UserLoginOauth: React.FC<Props> = ({}: Props) => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const setUserId = useStore((state) => state.setUserId);
  const navigate = useNavigate();
  const saveTokenMutation = useMutation({
    mutationFn: (newData: UserTokenSaveRequestData) => {
      return instance.post('/api/auth/register/user-push-token', newData);
    },
    onSuccess: (res) => {
      const data: UserTokenSaveResponseData = res.data;
      if (data) {
        navigate('/');
      }
      alert(data);
      console.log(data);
    },
  });
  const loginMutation = useMutation({
    mutationFn: (newData: TokenLoginRequestData) => {
      return instance.post('/api/auth/kakao/user', newData);
    },
  });
  if (error) {
    console.log(error);
    navigate(-1);
  }
  useEffect(() => {
    if (code) {
      loginMutation.mutate(
        {
          authorizationCode: code,
        },
        {
          onSuccess: (res) => {
            const data: TokenLoginResponseData = res.data;
            console.log(data.userId);
            setUserId(`${data.userId}`);
            const deviceId = localStorage.getItem('deviceId');
            const deviceToken = localStorage.getItem('deviceToken');
            alert(deviceId + '다음' + deviceToken);
            if (data && deviceId && deviceToken) {
              saveTokenMutation.mutate({
                userId: data.userId,
                deviceId: deviceId,
                deviceToken: deviceToken,
              });
            }
            console.log(data);
          },
        }
      );
    }
  }, [code]);

  return <div className={styles.wholeWrapper}>redirect..</div>;
};

export { UserLoginOauth as Component };
