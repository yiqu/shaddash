const isProduction = process.env.NODE_ENV === 'production';

export const appName = isProduction ? process.env.NEXT_PUBLIC_APP_NAME : process.env.NEXT_PUBLIC_APP_NAME;
