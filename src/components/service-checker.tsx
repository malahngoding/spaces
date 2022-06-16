import { useEffect } from 'react';

import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
import { useStatusStore } from '@store/status-store';
import {
  pingServiceFilaments,
  pingServiceMicros,
} from '@services/ping-service';

export const ServiceChecker = () => {
  const isFilamentsUp = useStatusStore((state) => state.isFilamentsUp);
  const isMicrosUp = useStatusStore((state) => state.isMicrosUp);
  const setFilamentsStatusFunction = useStatusStore(
    (state) => state.setFilamentsStatus,
  );
  const setMicrosStatusFunction = useStatusStore(
    (state) => state.setMicrosStatus,
  );

  useEffect(() => {
    console.warn(`run,micc`);
    const runMicros = async () => {
      try {
        const micros = await pingServiceMicros();
        if (micros.data.status === 'OK') {
          setMicrosStatusFunction(`green`);
        }
      } catch (error) {
        setMicrosStatusFunction(`red`);
      }
    };

    const runFilaments = async () => {
      try {
        const filaments = await pingServiceFilaments();
        if (filaments.data.status === 'OK') {
          setFilamentsStatusFunction(`green`);
        }
      } catch (error) {
        setFilamentsStatusFunction(`red`);
      }
    };
    runMicros();
    runFilaments();
  }, [setFilamentsStatusFunction, setMicrosStatusFunction]);
  return (
    <Box css={{ display: `flex`, flexDirection: `row` }}>
      <Paragraph
        css={{ color: isMicrosUp, fontFamily: `$brand`, fontWeight: `$bold` }}
      >
        Micros
      </Paragraph>
      <Paragraph
        css={{
          marginLeft: `$xs`,
          color: isFilamentsUp,
          fontFamily: `$brand`,
          fontWeight: `$bold`,
        }}
      >
        Filaments
      </Paragraph>
    </Box>
  );
};
