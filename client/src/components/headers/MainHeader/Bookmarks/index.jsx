import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BMIconRaw } from 'src/assets/svgs/bookmark-filled.svg';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';

const Container = styled.div`
  position: relative;
`;

const BMIcon = styled(BMIconRaw)`
  height: 1.6rem;
  width: 1.6rem;
  opacity: .8;
  cursor: pointer;
`

const Bookmarks = () => {
  const bm = useSelector((state) => state.bm);
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = (e) => {
    setDropdown(true);
  }
  
  return (
    <Container>
      <BMIcon onClick={toggleDropdown}/>
      {dropdown && <Dropdown listings={bm.listings} setDropdown={setDropdown} />}
    </Container>
  )
};

export default Bookmarks;
