import { Button } from '@components/design/button';
import Image from 'next/image';

export const MetamaskAuth = (): JSX.Element => {
  const handleWallet = async (): Promise<void> => {
    console.log('ok');
  };
  return (
    <>
      <Button
        alternative="secondary"
        onClick={handleWallet}
        className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
      >
        MM
      </Button>
    </>
  );
};
