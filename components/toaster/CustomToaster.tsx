'use client';

import Stack from '@mui/material/Stack';

import { Toaster, ToastBar } from 'react-hot-toast';

import CustomToasterCloseButton from './CustomToasterCloseButton';
function CustomToaster() {
  return (
    <Toaster
      position="top-center"
      containerClassName="app-toast-container"
      toastOptions={ {
        className: 'app-toast',
        duration: 8_000,
        success: {
          duration: 10_000,
        },
        error: {
          duration: 11_000,
        },
        style: {
          maxWidth: '28rem',
        },
      } }
    >
      { (t) => (
        <ToastBar toast={ t }>
          { ({ icon, message }) => (
            <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
              <Stack direction="row" justifyContent="start" alignItems="center">
                { icon }
                <div>{ message }</div>
              </Stack>
              { t.type !== 'loading' && <CustomToasterCloseButton t={ t } /> }
            </Stack>
          ) }
        </ToastBar>
      ) }
    </Toaster>
  );
}

export default CustomToaster;
