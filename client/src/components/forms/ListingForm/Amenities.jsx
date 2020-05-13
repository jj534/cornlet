import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import amenities from 'src/constants/amenities';

const Container = styled.div`

`;

const AmenitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const AmenityGrpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4rem;
  margin: 1rem 1rem 0 0;
  opacity: .5;
  cursor: pointer;

  & > svg {
    height: 2.5rem;
    width: 2.5rem;
    margin-bottom: .5rem;
  }

  // active
  opacity: ${props => props.active ? '1' : ''};
`

const AmenityGrp = ({ amenity, active, onClick }) => (
  <AmenityGrpContainer active={active} onClick={onClick}>
    {amenity.icon}
    <Body>{amenity.label}</Body>
  </AmenityGrpContainer>
)

const Amenities = ({ formik }) => {
  const toggle = (value) => {
    if (formik.values.amenities.includes(value)) {
      const newAmenities = [...formik.values.amenities];
      newAmenities.splice(formik.values.amenities.indexOf(value), 1);
      formik.setFieldValue('amenities', newAmenities);
    }
    else {
      formik.setFieldValue('amenities', [...formik.values.amenities, value])
    }
  }

  return (
    <Container>
      <Body muted>Click on amenity icons to activate them</Body>
      <AmenitiesList>
        {amenities.map(amenity => (
          <AmenityGrp 
            key={amenity.value} 
            amenity={amenity} 
            active={formik.values.amenities.includes(amenity.value)} 
            onClick={() => toggle(amenity.value)}
          />
        ))}
      </AmenitiesList>
    </Container>
  )
};

export default Amenities;
