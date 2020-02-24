import React from 'react';
import { useSelector } from 'react-redux';
import { signIn } from 'src/services/firebase';
import { useHistory } from 'react-router-dom';
import New from './New';

const NewIndex = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  if (!user) {
    signIn();
    history.push('/')
    return <div />;
  }
  return (
    <New
      user={user}
    />
  )
};

export default NewIndex;
