import React from 'react';
import CircleCross from 'src/components/buttons/CircleCross';
import useRouter from 'src/util/hooks/useRouter';

const ClearFilters = () => {
  const router = useRouter();
  
  const handleClick = () => {
    router.updateQuery({}, true);
  }
  
  return (
    <CircleCross
      onClick={handleClick}
    />
  )
};

export default ClearFilters;
