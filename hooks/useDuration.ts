export default useDuration() {

  const [passed, setPassed] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      const currentEpoch = Date.now();
      setPassed(currentEpoch - from);
    }, 1000);

    return (() => {
      clearInterval(timer);
    });
  }, [from]);

  const hide = passed === 0 || from === 0 || passed > ONE_YEAR_SECONDS;

  return {
    duration: hide === true ? null : passed < ONE_MINUTE_MILL ? '< a minute' : humanizeDuration(passed, {largest: 2, units: ['d', 'h', 'm'], round: true})
  }

}