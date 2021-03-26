import React from 'react';
import { ReactComponent as CloseRaw } from 'src/assets/svgs/close.svg';
import Btn from 'src/components/buttons/Btn';
import IconContainer from 'src/components/displays/IconContainer';
import Space from 'src/components/layouts/Space';
import useFilters from 'src/util/hooks/useFilters';
import useIsDesktop from 'src/util/hooks/useIsDesktop';
import styled from 'styled-components';

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
  border: 2px solid ${props => props.theme.brand300};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .2rem .2rem .2rem .5rem;
`

export const CloseSVG = styled(CloseRaw)`
  height: .7rem;
  width: .7rem;
  fill: ${props => props.theme.primary};
  cursor: pointer;
`;

const FilterStatus = () => {
  const filters = useFilters()
  
  const isDesktop = useIsDesktop()
  if (!isDesktop) return null;

  return (
    <Container>
      {filters.map(({ text, cb }) => (
        <StatusBadge
          color='primary'
        >
          {text}
          <Space margin='0 .2rem' />
          <IconContainer padding='.5rem'>
            <CloseSVG onClick={() => cb()} />
          </IconContainer>
        </StatusBadge>
      ))}
    </Container>
  )
};

export default FilterStatus;
