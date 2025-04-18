import { Toaster, ToastBar } from 'react-hot-toast'

const TOAST_OPTIONS: ToastProps = {
  positon: 'top-center',
  containerStyle: {},
  toastOptions: {
    duration: 5000,
    style: {
      maxWidth: '90rem',
    },
    error: {
      duration: 8000
    },
    success: {
      duration: 6000
    }
  }
}

function HotToaster() {
  return (
    <Toaster {...TOAST_OPTIONS}>
      {
        (t) => {
          return (
            <ToastBar toast={t}>
              {
                ({icon, message}) => {
                  return (
                    <>
                      {icon}
                      {message}
                      {t.type !== loading && (
                        <IconButton onClick={() => toast.remove(t.id)}>
                          <Close />
                        </IconButton>
                      )}
                    </>
                  )
                }
              }
            </ToastBar>
          )
        }
      }

    </Toaster>
  )
}