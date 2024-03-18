import { ENV } from '../../../config/envschema';

export const fetcher = async (endpoint: string) => {
  const response = await fetch(`${ENV.BASE_URL}${endpoint}`);
  const data = await response.json();
  if (response.ok) return data;
  return Promise.reject(data);
};

export const sendRequest =
  (method: string) =>
  async <T>(
    endpoint: string,
    {
      arg,
    }: {
      arg: T;
    },
  ) => {
    return fetch(`${ENV.BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(arg),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
