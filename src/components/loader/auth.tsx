import { useTranslations } from 'next-intl';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@components/design/alert';
import { Box } from '@components/design/box';

export const AuthLoader = (): JSX.Element => {
  const t = useTranslations(`MetamaskConnectLoader`);

  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent>
        <Box css={{ textAlign: `center` }}>
          <AlertDialogTitle css={{ fontSize: `$md` }}>
            {t(`title`)}
          </AlertDialogTitle>
          <br />
          <AlertDialogDescription>{t(`subTitle`)}</AlertDialogDescription>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="hsl(190 95.0% 39.0%)"
              strokeWidth="2"
              r="10"
              strokeDasharray="47.12388980384689 17.707963267948966"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1.923076923076923s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </Box>
      </AlertDialogContent>
    </AlertDialog>
  );
};
