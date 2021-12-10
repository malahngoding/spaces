import { AdvancedChart } from 'react-tradingview-embed';

import { Box } from '@components/design/box';

const TradingView = () => {
  return (
    <Box>
      <AdvancedChart
        widgetProps={{
          theme: `dark`,
          symbol: `BINANCE:HBARUSDT`,
        }}
      />
    </Box>
  );
};

export default TradingView;
