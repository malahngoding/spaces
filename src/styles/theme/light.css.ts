import { bluePrint } from './index.css';
import { createTheme } from '@vanilla-extract/css';

export const lightTheme = createTheme(bluePrint, {
  color: {
    slate1: '#fbfcfd',
    slate2: '#f8f9fa',
    slate3: '#f1f3f5',
    slate4: '#eceef0',
    slate5: '#e6e8eb',
    slate6: '#dfe3e6',
    slate7: '#d7dbdf',
    slate8: '#c1c8cd',
    slate9: '#889096',
    slate10: '#7e868c',
    slate11: '#687076',
    slate12: '#11181c',
  },
  transparent: {
    left: `rgba(255,255,255,0.9)`,
    right: `rgba(0,0,0,0.5)`,
  },
});
