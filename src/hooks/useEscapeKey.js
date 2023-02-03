export function useEscapeKey(callback) {
  function handleKeyDown(event) {
    if (event.code === "Escape") {
      callback();
    }
  }
  window.addEventListener("keydown", handleKeyDown, { passive: true });
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}
