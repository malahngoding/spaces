/* 3rd Party Modules Import */
import Script from 'next/script';
/* Internal Modules Import */
import { Box } from '@components/design/box';
/* Internal Modules Import */
/* Types Import */
/**
 * Component Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
const TView = () => {
  return (
    <Box>
      <Script
        src="https://s3.tradingview.com/tv.js"
        onLoad={() => {
          new window.TradingView.widget({
            width: '100%',
            height: 620,
            symbol: 'BINANCE:HBARUSDT',
            interval: 'D',
            timezone: 'Asia/Jakarta',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: `$cyan`,
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview_hedera',
          });
        }}
      />
      <div className="tradingview-widget-container">
        <Box css={{ margin: `$sm` }}>
          <div id="tradingview_hedera"></div>
        </Box>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </Box>
  );
};

export default TView;
/**
 * Internal Component Declaration
 * @private
 */
