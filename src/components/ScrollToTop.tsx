import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LocationState } from '@/types/Types';

const ScrollToTop = () => {
  
  const pathname = useLocation();
  const state = pathname.state as LocationState

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return null;
}

export default ScrollToTop