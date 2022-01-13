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

  const runMicros = async () => {
    try {
      const micros = await pingServiceMicros();
      if (micros.data.status === 'OK') {
        useStatusStore.setState((state) => state.setMicrosStatus('green'));
      }
    } catch (error) {
      useStatusStore.setState((state) => state.setMicrosStatus('red'));
    }
  };

  const runFilaments = async () => {
    try {
      const filaments = await pingServiceFilaments();
      if (filaments.data.status === 'OK') {
        useStatusStore.setState((state) => state.setFilamentsStatus('green'));
      }
    } catch (error) {
      useStatusStore.setState((state) => state.setFilamentsStatus('red'));
    }
  };

  useEffect(() => {
    runMicros();
    runFilaments();
  }, [isMicrosUp, isFilamentsUp]);
  return (
    <Box css={{ display: `flex`, flexDirection: `row` }}>
      <Paragraph css={{ color: isMicrosUp }}>Micros</Paragraph>
      <Paragraph css={{ marginLeft: `$sm`, color: isFilamentsUp }}>
        Filaments
      </Paragraph>
    </Box>
  );
};
