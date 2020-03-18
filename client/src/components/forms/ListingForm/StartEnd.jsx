import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ErrMsg from 'src/components/fonts/ErrMsg';

const Container = styled.div`
  display: flex;
  align-items: center;
  
  & > * {
    margin-right: 1rem;
  }
`;

const StyledPicker = styled(DatePicker)`
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border-radius: 5px;
  
  cursor: pointer;
  text-align: center;
  line-height: 1.2;
  
  width: 100px;
`;

const Col = styled.div`

`;

const StartEnd = ({ formik }) => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  useEffect(() => {
    formik.setFieldValue('start', new Date(start));
  }, [start]);

  useEffect(() => {
    formik.setFieldValue('end', new Date(end));
  }, [end]);

  return (
    <Container>
      <Col>
        <StyledPicker
          selected={start}
          onChange={(date) => setStart(date)}
        />
        <ErrMsg
          formik={formik}
          name="end"
        />
      </Col>
      <p>to</p>
      <Col>
        <StyledPicker
          selected={end}
          onChange={(date) => setEnd(date)}
        />
        <ErrMsg
          formik={formik}
          name="end"
        />
      </Col>
    </Container>
  );
};

export default StartEnd;
