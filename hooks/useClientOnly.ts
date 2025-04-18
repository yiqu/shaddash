export const useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined")
  }, []);

  return isClient;
}