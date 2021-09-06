import { Box } from '@components/design/box';
import { IconProps } from './_icon.types';

export const IconClose = (props: IconProps) => {
  const { width, fill } = props;
  return (
    <>
      <Box css={{ width: width || `24px`, backgroundColor: `inherit` }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill={fill}
            d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          />
        </svg>
      </Box>
    </>
  );
};
