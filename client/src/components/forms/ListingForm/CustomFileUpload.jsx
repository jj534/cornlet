import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FileUpload from 'src/components/inputs/FileUpload';

const Container = styled.div`
  margin: 1rem 0;
`;

const ImgContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`

const ImgWrapper = styled.div`
  position: relative;
`

const Cross = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  background: ${props => props.theme.danger};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding: 6px;
`

const Img = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  margin: .5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`

const CustomFileUpload = ({ formik, name, label, user }) => {
  const [src, setSrc] = useState();
  useEffect(() => {
    if (src) {
      const newFiles = [...formik.values[name]]
      if (!newFiles.includes(src)) {
        newFiles.push(src);
      }
      formik.setFieldValue(name, newFiles);
    }
  }, [src])
  
  const handleDelete = (src) => {
    const newFiles = [...formik.values[name]];
    if (newFiles.includes(src)) {
      newFiles.splice(newFiles.indexOf(src), 1)
    }
    formik.setFieldValue(name, newFiles);
  }
  
  return (
    <Container>
      <FileUpload
        path={`/user/${user.uid}`}
        setSrc={setSrc}
      />
      <ImgContainer>
        {formik.values[name].map((src) => (
        <ImgWrapper key={src}>
          <Img
            key={src}
            src={src}
          />
          <Cross 
            type='button'
            onClick={() => handleDelete(src)}
          />
        </ImgWrapper>
        ))}
      </ImgContainer>
    </Container>
  )
};

export default CustomFileUpload;
