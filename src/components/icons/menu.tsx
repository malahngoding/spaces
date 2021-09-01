import { Box } from '@components/design/box';

interface IconProps {
  width?: number;
  fill?: string;
}

export const IconMenu = (props: IconProps) => {
  const { width, fill } = props;
  return (
    <>
      <Box css={{ width: width || `24px` }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill={fill || `$mauve12`}
            d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
          />
        </svg>
      </Box>
    </>
  );
};
