import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from 'src/services/firebase';
import New from './New';
import useRouter from 'src/util/hooks/useRouter';

const NewIndex = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <New
      user={user}
    />
  );
};

export default NewIndex;
