import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useRouter from 'src/util/hooks/useRouter';
import formatDate from 'src/util/helpers/formatDate';
import { ReactComponent as CalendarRaw } from 'src/assets/svgs/calendar.svg';

const Container = styled.div`
  position: relative;
`;

const StyledPicker = styled(DatePicker)`
  padding: .4rem 1.5rem .4rem .4rem;
  font-size: .8rem;
  background-color: white;

  display: inline;

  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  
  // default
  width: 8.5rem;
  background-color: inherit;
  color: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .2);
`;

const CalendarSVG = styled(CalendarRaw)`
  height: 1.4rem;
  width: 1.4rem;
  position: absolute;
  right: .5rem;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: .8;
`

const DateFilter = ({ name }) => {
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
        selected={date}
        onChange={(newDate) => setDate(newDate)}
      />
      <CalendarSVG />
    </Container>
  );
};

export default DateFilter;
