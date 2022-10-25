/**
 */
import { Button } from '../../components/button/base';
import type { ReactElement } from 'react';
import { pingMicrosService } from '../../services/ping-adapter';
/**
 */
const Ping = (): ReactElement => {
  const handlePing = async () => {
    const dataFromMicros = await pingMicrosService();
    console.log(dataFromMicros.messages);
  };
  return (
    <div>
      <Button onClick={handlePing}>Ping</Button>
    </div>
  );
};

export default Ping;
