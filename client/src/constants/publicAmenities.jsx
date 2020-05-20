import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BedroomSVG } from 'src/assets/svgs/bedroom.svg';
import { ReactComponent as BathroomSVG } from 'src/assets/svgs/bathroom.svg';

export const BedroomIcon = styled(BedroomSVG)`
	height: 24px !important;
`;

const publicAmenities = [
	{
		icon: <BedroomIcon />,
		label: 'Bedroom',
		value: 'bedroom'
	},
	{
		icon: <BathroomSVG />,
		label: 'Bathroom',
		value: 'bathroom'
	},
]

export default publicAmenities;
