import { bluePrint } from './index.css';
import { createTheme } from '@vanilla-extract/css';

export const darkTheme = createTheme(bluePrint, {
  color: {
    slate1: '#151718',
    slate2: '#1a1d1e',
    slate3: '#202425',
    slate4: '#26292b',
    slate5: '#2b2f31',
    slate6: '#313538',
    slate7: '#3a3f42',
    slate8: '#4c5155',
    slate9: '#697177',
    slate10: '#787f85',
    slate11: '#9ba1a6',
    slate12: '#ecedee',
  },
  transparent: {
    left: `rgba(0,0,0,0.5)`,
    right: `rgba(0,0,0,0.1)`,
  },
});
