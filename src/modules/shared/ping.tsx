/**
 */
import {
  pingFilamentsService,
  pingMicrosService,
} from '@services/ping-adapter';
import type { ReactElement } from 'react';
/**
 */
const Ping = (): ReactElement => {
  const handlePing = async () => {
    const dataFromFilaments = await pingFilamentsService();
    const dataFromMicros = await pingMicrosService();
    console.log(dataFromFilaments, dataFromMicros);
  };
  return <p onClick={handlePing}>Ping</p>;
};

export default Ping;
