import { ENV } from '../../../config/envschema';

export const fetcher = async (endpoint: string) => {
  const response = await fetch(`${ENV.BASE_URL}${endpoint}`);
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(data);
};

export const sendRequest = async <T>(
  endpoint: string,
  {
    arg,
  }: {
    arg: T;
  },
) => {
  console.log('data', JSON.stringify(arg));
  return fetch(`${ENV.BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(arg),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
