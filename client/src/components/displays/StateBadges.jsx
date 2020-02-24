import React from 'react';
import styled from 'styled-components';
import Badge from 'src/components/displays/Badge';

const Container = styled.div`
  & > * {
    margin-right: .5rem;
  }
`;

const StageBadges = ({ listing }) => {
  return (
    <Container>
      <Badge color='primary' size='sm'>{listing.term}</Badge>
      {listing.sold && <Badge color='primary' size='sm' inverted>Sold</Badge>}
    </Container>
  )
};

export default StageBadges;
