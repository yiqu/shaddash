import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';

import { User } from '@/models/auth/user.model';
import { API_TIMEOUT } from '@/constants/constants';
import { FIREBASE_API_BASE_URL } from '@/constants/endpoints';

const userAxiosInstance = axios.create({
  baseURL: `${FIREBASE_API_BASE_URL}/user`,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function GET(): Promise<NextResponse<User>> {
  const res: AxiosResponse<User, any> = await userAxiosInstance.get<User>('.json');
  return NextResponse.json({ ...res.data });
}
