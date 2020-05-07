import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from 'src/services/firebase';
import New from './New';
import useRouter from 'src/util/hooks/useRouter';

const NewIndex = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  if (!user) {
    router.history.push('/?redirect=new');
    dispatch({
      type: 'AUTHING_SET',
      payload: true,
    })
    signIn();
    return <div />;
  }
  return (
    <New
      user={user}
    />
  );
};

export default NewIndex;
