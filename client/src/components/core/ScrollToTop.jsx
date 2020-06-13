import React, { useEffect } from 'react';
import useRouter from 'src/util/hooks/useRouter';

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.location]);
  return <div />;
};

export default ScrollToTop;
