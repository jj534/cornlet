const palette = {
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

const theme = {
  ...palette,
  
  success: '#66c088',
  primary: '#B31B1B',
  primaryLight: '#d17676',
  blue: '#0275d8',
  warning: '#f0ad4e',
  danger: '#de6362',

  // text
  text: '#3B454E',
  textLight: '#575859',
  textMuted: '#737576',
  textPlaceholder: '#D3D7DB',

  // brand
  brand: '#B31B1B',
  brandLight: '#D98D8D',
  brandDark: '#5A0E0E',
  brandBg: '#F4DFDF',

  brand500: '#B31B1B',
  brand300: '#C65454',
  brand100: '#D98D8D',
  brand50: '#F9ECEC',

  // border
  border: {
    default: palette.grey[200],
    light: '#E2E2E3',
    dark: '#C6C6C7',
  },
};

export default theme
