import React from 'react';
import { ReactComponent as WifiSVG } from 'src/assets/svgs/wifi.svg';
import { ReactComponent as CarSVG } from 'src/assets/svgs/car.svg';
import { ReactComponent as GymSVG } from 'src/assets/svgs/gym.svg';
import { ReactComponent as HeaterSVG } from 'src/assets/svgs/heater.svg';
import { ReactComponent as AirconSVG } from 'src/assets/svgs/aircon.svg';

const amenities = [
	{
		icon: <WifiSVG />,
		label: 'Wifi',
		value: 'wifi'
	},
	{
		icon: <CarSVG />,
		label: 'Parking',
		value: 'parking'
	},
	{
		icon: <GymSVG />,
		label: 'Gym',
		value: 'gym'
	},
	{
		icon: <HeaterSVG />,
		label: 'Heater',
		value: 'heater'
	},
	{
		icon: <AirconSVG />,
		label: 'Aircon',
		value: 'aircon'
	},
]

export default amenities;
