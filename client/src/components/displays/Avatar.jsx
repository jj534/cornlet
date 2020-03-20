import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {ReactComponent as AvatarIconRaw} from 'src/assets/svgs/avatar.svg';

const SAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const AvatarIcon = styled(AvatarIconRaw)`
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border-radius: 50%;
  padding: 5px;
  opacity: .8;
`

const ProfileIcon = ({ src, path }) => {
  return (
  <div>
    {src
      ? (
        <Link to={path}>
          <SAvatar
            src={src}
          />
        </Link>
        )
      : (
        <AvatarIcon />
        )
    }
  </div>
  )
};

export default ProfileIcon;
