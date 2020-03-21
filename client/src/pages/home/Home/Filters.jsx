import React from 'react';
import styled from 'styled-components';
import DateFilter from 'src/components/filters/DateFilter';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  width: 300px;
  
  & > div {
    margin-right: .8rem;
  }
  
  @media (min-width: ${(props) => props.theme.md}px) {
    width: 1250px;
  }
`;


const Filters = () => (
  <Wrapper>
    <Container>
      <DateFilter
        name="start"
        placeholder="Start"
      />
      <div>
        ~
      </div>
      <DateFilter
        name="end"
        placeholder="End"
      />
    </Container>
  </Wrapper>
);

export default Filters;
