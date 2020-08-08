import React from 'react';
import styled from 'styled-components';
import useRouter from 'src/util/hooks/useRouter';
import Pagination from '@material-ui/lab/Pagination';

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

  display: flex;
  justify-content: center;
  align-items: center;

  // selected
  background: ${props => props.selected ? 'rgba(0, 0, 0, .7)' : ''};
  color: ${props => props.selected ? 'white' : ''};
`;

const Dots = styled.div`
  transform: translateY(0.15em);
  margin: 0 .2rem;
`

const PaginationBtns = ({ totalPages, page }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const router = useRouter();
  const handleChange = (e, v) => {
    console.log('v', v);
    console.log('e', e);
    router.updateQuery({ page: v });
  };
  // const page = router.query.page || 1;

  return (
    <Container>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Container>
  )
};

export default PaginationBtns;
