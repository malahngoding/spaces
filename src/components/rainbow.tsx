/* 3rd Party Modules Import */
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
  lightTheme,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { useTheme } from 'next-themes';
/* Internal Modules Import */
import { Button } from '@components/design/button';
import { Box } from '@components/design/box';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Component Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const Rainbow = (): ReactElement => {
  const { theme } = useTheme();
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={theme === `light` ? lightTheme() : darkTheme()}
      >
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            return (
              <div
                {...(!mounted && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!mounted || !account || !chain) {
                    return (
                      <Button onClick={openConnectModal} type="button">
                        Connect Wallet
                      </Button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <Button onClick={openChainModal} type="button">
                        Wrong network
                      </Button>
                    );
                  }

                  return (
                    <div style={{ display: `flex`, gap: 12 }}>
                      <Button
                        onClick={openChainModal}
                        css={{
                          display: `flex`,
                          alignItems: `center`,
                          backgroundColor: chain.iconBackground,
                        }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <Box
                            css={{
                              background: chain.iconBackground,
                              width: `21px`,
                              height: `21px`,
                              overflow: 'hidden',
                              marginRight: 4,
                              display: `flex`,
                              flexDirection: `row`,
                              alignItems: `center`,
                              justifyContent: `center`,
                            }}
                          >
                            {chain.iconUrl && (
                              <Box
                                as="img"
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: `18px`, height: `18px` }}
                              />
                            )}
                          </Box>
                        )}
                        {chain.name}
                      </Button>

                      <Button onClick={openAccountModal} type="button">
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ''}
                      </Button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const { chains, provider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [alchemyProvider({ alchemyId })],
);
const { connectors } = getDefaultWallets({
  appName: 'Malah Ngoding',
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
