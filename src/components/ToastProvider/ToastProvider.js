import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    const toast = {
      id: Math.random(),
      message,
      variant,
    };
    setToasts((currentToasts) => [...currentToasts, toast]);
  }, []);

  const removeToast = React.useCallback((toast) => {
    setToasts((currentToasts) => currentToasts.filter((t) => t !== toast));
  }, []);

  const value = React.useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts, addToast, removeToast]
  );

  console.log({ value });

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
