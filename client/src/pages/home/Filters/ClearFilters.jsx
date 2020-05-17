import React from 'react';
import styled from 'styled-components';
import useRouter from 'src/util/hooks/useRouter';

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ClearBtn = styled.button`
  text-decoration: underline;
  color: ${props => props.theme.primary};
  background: inherit;
`

const ClearFilters = () => {
  const router = useRouter();

  const handleClick = () => {
    router.updateQuery({}, true);
  };

  return (
    <Container>
      <ClearBtn type='button' onClick={handleClick}>Clear</ClearBtn>
    </Container>
  )
};

export default ClearFilters;
