import { api } from '@/shared/libs/api/api';
import { RegisterForm, ResponseData } from './types';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<ResponseData, RegisterForm>({
      query: reqData => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: reqData,
      }),
    }),
    login: builder.mutation<ResponseData, { email: string; password: string }>({
      query: reqData => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: reqData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export const {
  endpoints: { register, login },
} = authApi;
