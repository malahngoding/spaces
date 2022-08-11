import {
  pingFilamentsService,
  pingMicrosService,
} from '@services/ping-service';
import type { ReactElement } from 'react';

/**
 */
const Ping = (): ReactElement => {
  const handlePing = async () => {
    const data = await pingFilamentsService();
    const data2 = await pingMicrosService();
    console.log(data, data2);
  };
  return <p onClick={handlePing}>Ping</p>;
};

export default Ping;
