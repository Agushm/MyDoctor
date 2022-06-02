const mainColor = {
  green: '#0BCAD4',
  dark: '#112340',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
};

export const colors = {
  primary: mainColor.green,
  secondary: mainColor.dark,
  white: 'white',
  black: 'black',
  border: mainColor.grey2,
  input: {
    border: mainColor.grey2,
  },
  text: {
    default: mainColor.dark,
    secondary: mainColor.grey1,
  },
  button: {
    primary: {
      background: mainColor.green,
      text: 'white',
    },
    secondary: {
      background: 'white',
      colors: mainColor.dark,
    },
  },
};
