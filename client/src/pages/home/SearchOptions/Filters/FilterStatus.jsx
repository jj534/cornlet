import React from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import useRouter from 'src/util/hooks/useRouter';
import { ReactComponent as CloseRaw } from 'src/assets/svgs/close.svg';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;
    flex-shrink: 0;
    white-space: nowrap;
  }
`;

const StatusBadge = styled(Btn)`
  cursor: initial;
`

export const CloseSVG = styled(CloseRaw)`
  height: .7rem;
  width: .7rem;
  fill: ${props => props.theme.primary};
  margin-left: .5rem;
  cursor: pointer;
`;

const FilterStatus = () => {
  const router = useRouter();
  const { query, updateQuery } = router;
  const filters = [];
  const { minToCampus, maxToCampus, minPrice, maxPrice, start, end } = query;

  const removeFilters = (filters) => {
    const data = {};
    filters.forEach((filter) => {
      data[filter] = undefined
    })
    updateQuery(data);
  }

  if (start) {
    const filter = {
      text: `Start: ${start}`,
      cb: () => removeFilters(['start']),
    }
    filters.push(filter);
  }

  if (end) {
    const filter = {
      text: `End: ${end}`,
      cb: () => removeFilters(['end']),
    }
    filters.push(filter);
  }
  
  if (minToCampus && maxToCampus) {
    const filter = {
      text: `Distance: ${minToCampus} km - ${maxToCampus} km`,
      cb: () => removeFilters(['minToCampus', 'maxToCampus']),
    }
    filters.push(filter);
  }

  if (minPrice && maxPrice) {
    const filter = {
      text: `Price: $${minPrice} - $${maxPrice}`,
      cb: () => removeFilters(['minPrice', 'maxPrice']),
    }
    filters.push(filter);
  }

  return (
    <Container>
      {filters.map(({ text, cb }) => (
        <StatusBadge
          color='primary'
        >
          {text}
          <CloseSVG onClick={() => cb()} />
        </StatusBadge>
      ))}
    </Container>
  )
};

export default FilterStatus;
