'use client';

export default function AgGridRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ModuleRegistry.registerModules([AllCommunityModule]);
      console.log("AGGrid Registered")
    }
  }, [])
  return null;
}