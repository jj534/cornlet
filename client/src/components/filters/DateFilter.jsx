import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useRouter from 'src/util/hooks/useRouter';
import formatDate from 'src/util/helpers/formatDate';

const Container = styled.div`

`;

const StyledPicker = styled(DatePicker)`
  padding: .4rem;
  font-size: .8rem;
  background-color: white;
  display: inline;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  }
  
  // default
  width: 3.5rem;
  background-color: inherit;
  color: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .2);
  
  // value set
  width: ${(props) => (!props.value ? '6rem' : '')};
  background-color: ${(props) => (!props.value ? props.theme.primary : '')};
  color: ${(props) => (!props.value ? 'white' : '')};
  border: ${(props) => (!props.value ? 'none' : '')};
`;

const DateFilter = ({ name, placeholder }) => {
  const router = useRouter();
  const [date, setDate] = useState();

  useEffect(() => {
    if (router.query[name]) {
      const newDate = new Date(router.query[name].replace(/-/g, '/'));
      setDate(newDate);
    } else {
      setDate(null);
    }
  }, [router.query[name]]);

  useEffect(() => {
    if (!date) return;

    const newQuery = {};
    newQuery[name] = formatDate(date);
    router.updateQuery(newQuery);
  }, [date]);

  const handleDateChangeRaw = (e) => e.preventDefault();

  return (
    <Container>
      <StyledPicker
        onChangeRaw={handleDateChangeRaw}
        value={date ? undefined : placeholder}
        selected={date}
        onChange={(newDate) => setDate(newDate)}
      />
    </Container>
  );
};

export default DateFilter;
