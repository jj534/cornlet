import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BMIconRaw } from 'src/assets/svgs/bookmark-filled.svg';
import BmDropdown from './BmDropdown';
import { useSelector, useDispatch } from 'react-redux';
import CornerRedDot from 'src/components/displays/CornerRedDot';

const Container = styled.div`
  position: relative;
`;

const BMIcon = styled(BMIconRaw)`
  height: 1.6rem;
  width: 1.6rem;
  opacity: .7;
  cursor: pointer;
`

const Bookmarks = () => {
  const bm = useSelector((state) => state.bm);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = (e) => {
    setDropdown(true);
    dispatch({
      type: 'BM_NOTIF_FALSE',
      payload: null,
    })
  }
  
  return (
    <Container>
      {bm.notif && <CornerRedDot />}
      <BMIcon onClick={toggleDropdown}/>
      {dropdown && <BmDropdown listings={bm.listings} dropdown={dropdown} setDropdown={setDropdown} />}
    </Container>
  )
};

export default Bookmarks;
