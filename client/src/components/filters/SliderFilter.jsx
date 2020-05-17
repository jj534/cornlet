import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useRouter from 'src/util/hooks/useRouter';
import Slider from '@material-ui/core/Slider';

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  & > .MuiSlider-colorPrimary {
    color: ${props => props.theme.primary};
  }
`;

const SliderFilter = ({ startName, endName }) => {
  const router = useRouter();
  const [value, setValue] = React.useState([0, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = (event, newValue) => {
    const query = {};
    query[startName] = newValue[0];
    query[endName] = newValue[1];
    router.updateQuery(query);
  }

  function valuetext(val) {
    return '$' + val;
  }

  useEffect(() => {
    if (router.query[startName] && router.query[endName]) {
      setValue([Number(router.query[startName]), Number(router.query[endName])]);
    } else {
      setValue([0, 2000]);
    }
  }, [router.query[startName], router.query[endName]]);

  return (
    <Container>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={2000}
        step={50}
      />
    </Container>
  );
};

export default SliderFilter;
