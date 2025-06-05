import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#6442d6',
      },
      secondary: {
        main: '#dc004e',
      },
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1d1d1d',
        },
      }),
    },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', 
        },
      },
    },
    },
});

export default getTheme;