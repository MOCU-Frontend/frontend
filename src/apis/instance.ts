import axios from 'axios';

// Axios 인스턴스 생성
const instance = axios.create({
  // 더미 데이터
  baseURL: 'http://localhost:3000',

  // 실제 연결
  // baseURL: 'http://192.168.105.112:9000',
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 어떤 처리를 할 수 있습니다.
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 응답 에러 처리
    console.log(error);

    throw new Error(error);
  }
);

export default instance;
