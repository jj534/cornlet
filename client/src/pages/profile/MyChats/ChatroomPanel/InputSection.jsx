import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Btn from 'src/components/buttons/Btn';
import Body from 'src/components/fonts/Body';
import RenderOn from 'src/containers/RenderOn';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    margin-left: 1rem;
    margin-top: .5rem;
  }

  @media (min-width: ${props => props.theme.md}px) {
    position: static;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const HelpText = styled(Body)`
  position: absolute;
  bottom: .8rem;
  left: 1rem;
`;

const InputSection = () => {
  const [msg, setMsg] = useState('');
  const minRows = 1;
  const maxRows = 6;
  const lineHeight = 24;
  const [rows, setRows] = useState(minRows);

  const handleChange = (event) => {
    // reset number of rows in textarea 
    const previousRows = rows;
  	setRows(minRows);
		
		// calculate number of rows
    const currentRows = Math.floor(event.target.scrollHeight / lineHeight);
    
		// if rows didn't change
    if (currentRows === previousRows) {
      setRows(currentRows);
    }
    
    // if rows increased
		if (currentRows >= maxRows) {
      // increase rows
      setRows(maxRows);
			event.target.scrollTop = event.target.scrollHeight;
    }
    
    setMsg(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.altKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMsg();
    }
  }

  const handleSendMsg = () => {
    setMsg('');
    setRows(minRows);

    // TODO: handle send message
  }

  return (
    <Container>
    <InputContainer>
      <Input
        value={msg}
        onChange={handleChange}
        multiline
        rows={rows}
        onKeyDown={handleKeyDown}
        lineHeight={lineHeight}
      />
    </InputContainer>
      <Btn
        color='primary'
        inverted
        onClick={handleSendMsg}
      >
        Send
      </Btn>
    </Container>
  )
};

export default InputSection;
