import React from 'react';
import styled from 'styled-components';
import useRouter from 'src/util/hooks/useRouter';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Page = styled.button`
  margin: 0 .2rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: inherit;

  // selected
  background: ${props => props.selected ? 'rgba(0, 0, 0, .7)' : ''};
  color: ${props => props.selected ? 'white' : ''};

`

const PaginationBtns = ({ totalPages, page }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const router = useRouter();
  const handleClick = (p) => {
    router.updateQuery({ page: p });
  }

  return (
    <Container>
      {pages.map((p) => (
        <Page key={p} selected={p === page} onClick={() => handleClick(p)}>{p}</Page>
      ))}
    </Container>
  )
};

export default PaginationBtns;
