/* eslint-disable no-shadow */
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    primaryColor: string;
    secondaryColor: string;

    backgroundColor: string;

    colors: {
      themeColor: string;
      textBlack: string;
      disabledColor: string;
      orange: string;
      textGrey: string;
      borderColor: string;
    };

    flexCenter: {
      display: string;
      'justify-content': string;
      'align-items': string;
    };

    flexRowCenter: {
      display: string;
      'justify-content': string;
    };

    flexColumn: {
      display: string;
      'flex-direction': string;
    };

    flexColumnCenter: {
      display: string;
      'flex-direction': string;
      'align-items': string;
    };
  }
}

const theme: DefaultTheme = {
  // Border Width
  borderRadius: '5px',

  // Theme Color
  primaryColor: 'red',
  secondaryColor: 'blue',

  // Background Color
  backgroundColor: 'white',

  colors: {
    themeColor: '#19ce60;',
    disabledColor: '#ededed',
    orange: '#ffb300',
    textGrey: '#adadad',
    textBlack: '#1f1f1f',
    borderColor: '#adadad',
  },

  flexCenter: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },

  flexRowCenter: {
    display: 'flex',
    'justify-content': 'center',
  },

  flexColumn: {
    display: 'flex',
    'flex-direction': 'center',
  },

  flexColumnCenter: {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
};

export default theme;
