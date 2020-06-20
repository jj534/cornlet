import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import Select from 'src/components/inputs/Select';
import useRouter from 'src/util/hooks/useRouter';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 .5rem;

  & > * {
    margin-right: 1rem;
  }
`;

const SortBy = () => {
  const router = useRouter();
  const { query, updateQuery } = router;

  const opts = [
    {
      value: 'recent',
      label: 'Newest',
    },
    {
      value: 'price-asc',
      label: 'Price (ascending)',
    },
    {
      value: 'price-dec',
      label: 'Price (decending)',
    },
    {
      value: 'to-campus',
      label: 'Distance to Campus',
    },
  ];

  const handleChange = (e) => {
    updateQuery({ sort: e.target.value });
  }

  return (
    <Container>
      <Body nowrap>Sort by: </Body>
      <Select
        opts={opts}
        value={query.sort || 'recent'}
        onChange={handleChange}
      />
    </Container>
  )
};

export default SortBy;
