import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useRouter from 'src/util/hooks/useRouter';
import formatDate from 'src/util/helpers/formatDate';

const Container = styled.div`

`;

const StyledPicker = styled(DatePicker)`
  padding: .5rem .8rem;
  font-size: .8rem;
  background-color: white;
  display: inline;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  width: 80px;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
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

  return (
    <Container>
      <StyledPicker
        readOnly={true}
        value={date ? undefined : placeholder}
        selected={date}
        onChange={(newDate) => setDate(newDate)}
      />
    </Container>
  );
};

export default DateFilter;
