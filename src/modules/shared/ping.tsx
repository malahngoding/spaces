import type { ReactElement } from 'react';
import { pingFilamentsService } from '@services/ping-service';

/**
 */
const Ping = (): ReactElement => {
  const handlePing = async () => {
    console.error('Err');
    const data = await pingFilamentsService();
    console.error(data);
  };
  return <p onClick={handlePing}>Ping</p>;
};
export default Ping;
