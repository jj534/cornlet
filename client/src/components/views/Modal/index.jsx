import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import { ReactComponent as CloseRaw } from 'src/assets/svgs/close.svg';
import Heading from 'src/components/fonts/Heading';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Container = styled.div`
  background: white;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  padding: 1rem;
  width: 90vw;
  min-height: 150px;

  @media (min-width: ${props => props.theme.md}px) {
    width: 500px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`;

export const CloseSVG = styled(CloseRaw)`
  height: 1rem;
  width: 1rem;
  opacity: .7;
  cursor: pointer;
`;

const Modal = ({ heading, open, handleClose, children, ...rest }) => {
  const classes = useStyles();
  
  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...rest}
    >
      <Fade in={open}>
        <Container>
          <TopRow>
            <Heading>{heading}</Heading>
            <CloseSVG onClick={handleClose}/>
          </TopRow>
          {children}
        </Container>
      </Fade>
    </MaterialModal>
  )
};

export default Modal;