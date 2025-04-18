export default function useAutoFocus(delayTimer = 200) {
  const elementRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      elementRef.current?.focus();
    }, delayTimer);

    return () => {
      clearTimeout(timer);
    };
  });

  return {
    elementRef,
  };
}
