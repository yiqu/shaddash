const isProduction = process.env.NODE_ENV === 'production';

export const appName = isProduction ? process.env.APP_NAME : 'Todo';
