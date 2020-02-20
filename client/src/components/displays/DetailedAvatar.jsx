import React from 'react';
import styled from 'styled-components';
import Avatar from 'src/components/displays/Avatar';

const Container = styled.div`
  display: flex;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

const Name = styled.div`
  margin-bottom: .2rem;
`;

const Email = styled.div`
  opacity: .8;
`;

const UserData = ({ name, email, src}) => {
  return (
    <Container>
      <Avatar
        src={src}
      />
      <Data>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Data>
    </Container>
  );
};

export default UserData;
