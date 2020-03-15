import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const SAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const ProfileIcon = ({ src, path }) => (
  <Link to={path}>
    <SAvatar
      src={src}
    />
  </Link>
);

export default ProfileIcon;
