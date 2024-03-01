import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instance from '../../../../apis/instance';
import {
  OwnerTokenSaveRequestData,
  OwnerTokenSaveResponseData,
} from '../../../../store/Type/Auth/auth';
import {
  OwnerTokenLoginResponseData,
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
const OwnerLoginOauth: React.FC<Props> = ({}: Props) => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const setUserId = useStore((state) => state.setUserId);
  const navigate = useNavigate();
  const saveTokenMutation = useMutation({
    mutationFn: (newData: OwnerTokenSaveRequestData) => {
      return instance.post('/api/auth/register/owner-push-token', newData);
    },
    onSuccess: (res) => {
      const data: OwnerTokenSaveResponseData = res.data;
      if (data) {
        navigate('/owner');
      }
      console.log(data);
    },
  });
  const loginMutation = useMutation({
    mutationFn: (newData: TokenLoginRequestData) => {
      return instance.post('/api/auth/kakao/owner', newData);
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
            const data: OwnerTokenLoginResponseData = res.data;
            console.log(data.userId);
            setUserId(`${data.userId}`);
            const deviceId = localStorage.getItem('deviceId');
            const deviceToken = localStorage.getItem('deviceToken');
            alert(deviceId + '다음' + deviceToken);
            if (data && deviceId && deviceToken) {
              saveTokenMutation.mutate({
                ownerId: data.userId,
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

export { OwnerLoginOauth as Component };
