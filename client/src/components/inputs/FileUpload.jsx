import React, { useState } from 'react';
import styled from 'styled-components';
import uploadFile from 'src/services/firebase/uploadFile';
import log from 'src/util/log';
import Loading from 'src/components/displays/Loading';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const FileUpload = ({ path, setSrc }) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    uploadFile(file, path)
      .then((url) => {
        setLoading(false);
        setSrc(url);
      })
      .catch((error) => {
        setLoading(false);
        log('FileUpload', error);
      });
  };

  return (
    <Container>
      <input
        type="file"
        onChange={handleUpload}
      />
      {loading
        ? <Loading />
        : <div />}
    </Container>
  );
};

export default FileUpload;
