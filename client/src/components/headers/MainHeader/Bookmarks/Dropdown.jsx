import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40px;
  
  background: grey;
  
  max-height: 300px;
  overflow: auto;
`;

const Dropdown = ({ listings }) => {
  
  if (!listings) return <div />;
  
  return (
    <Container>
      {!listings.length && 'No bookmarks'}
    </Container>
  )
};

export default Dropdown;
