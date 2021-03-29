import React from 'react'
import styled from 'styled-components'
import Text from '../fonts/Text'

const Container = styled.div`
  padding: .1rem .4rem;
  border-radius: 4px;
  display: inline-block;

  // background
  background-color: ${(props) => props.background && props.background};
`

const BadgeV2 = ({ label, color, background }) => {
  return (
    <Container background={background}>
      <Text
        variant='h7'
        color={color}
        maxLines={1}
      >{label}</Text>
    </Container>
  )
}

export default BadgeV2
