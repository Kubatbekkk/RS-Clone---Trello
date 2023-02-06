import { useEffect } from 'react';

function useTitle(title: string): void {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
export default useTitle;
