import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => {
    setToasts([]);
  });
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

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
