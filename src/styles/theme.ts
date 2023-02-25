const dark = {
  name: 'dark',
  textColors: {
    primary: '#FFFFFF',
    secondary: '#DBEDF3',
  },
  backgroundColors: {
    main: '#283149',
    menu: '#404B69',
    item: '#00818A',
    delete: '#3C6562',
  },
  utils: {
    itemSelectedOrBorderOrButton: '#2D6E7E',
    todoListBorder: '#153B44',
  },
  status: {
    todo: '#BF2782',
    doing: '#22AFFF',
    done: '#A4FFA3',
  },
  fontSizes: {
    lg: '3.2rem',
    md: '1.6rem',
    sm: '1.3rem',
  },
};

const light = {
  name: 'light',
  textColors: {
    primary: '#20262E',
    secondary: '#86A3B8',
  },
  backgroundColors: {
    main: '#FFF1DC',
    menu: '#F7EFE5',
    item: '#EEEEEE',
    delete: '#E8D5C4',
  },
  utils: {
    itemSelectedOrBorderOrButton: '#E8D5C4',
    todoListBorder: '#E8D2A6',
  },
  status: {
    todo: '#BF2782',
    doing: '#22AFFF',
    done: '#A4FFA3',
  },
  fontSizes: {
    lg: '3.2rem',
    md: '1.6rem',
    sm: '1.3rem',
  },
};

export interface IThemeProps {
  theme: typeof dark | typeof light;
}

export { dark, light };
