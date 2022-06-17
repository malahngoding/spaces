import { useEffect } from 'react';
import useSWR from 'swr';

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

  const filamentsData = useSWR('/ping/filaments', () => pingServiceFilaments());
  const microsData = useSWR('/ping/micros', () => pingServiceMicros());

  useEffect(() => {
    if (filamentsData.data?.data.status === 'OK') {
      setFilamentsStatusFunction(`green`);
    }
    if (filamentsData.data?.data.status === undefined) {
      setFilamentsStatusFunction(`red`);
    }
    if (microsData.data?.data.status === 'OK') {
      setMicrosStatusFunction(`green`);
    }
    if (microsData.data?.data.status === undefined) {
      setMicrosStatusFunction(`red`);
    }
  }, [
    filamentsData.data?.data.status,
    microsData.data?.data.status,
    setFilamentsStatusFunction,
    setMicrosStatusFunction,
  ]);

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
