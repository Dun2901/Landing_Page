import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import './floatingCTA.scss';

const HOTLINE = '0909123456';
const ZALO_URL = 'https://zalo.me/0909123456';

type TrackingEventName = 'click_call' | 'click_zalo';

const trackingEvent = (eventName: TrackingEventName) => {
  const win = window as Window & {
    gtag?: (type: string, eventName: string, params?: Record<string, string>) => void;
  };

  win.gtag?.('event', eventName, {
    section: 'floating_cta',
  });
};

export default function FloatingCTA() {
  return (
    <div className="floating-cta" aria-label="Liên hệ nhanh">
      <Tooltip title="Chat Zalo" placement="left">
        <a
          className="floating-cta__item floating-cta__item--zalo"
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo đặt xe"
          onClick={() => trackingEvent('click_zalo')}
        >
          <span className="floating-cta__icon">
            <MessageOutlined />
          </span>
          <span className="floating-cta__text">Zalo</span>
        </a>
      </Tooltip>

      <Tooltip title="Gọi ngay" placement="left">
        <a
          className="floating-cta__item floating-cta__item--phone"
          href={`tel:${HOTLINE}`}
          aria-label={`Gọi hotline ${HOTLINE}`}
          onClick={() => trackingEvent('click_call')}
        >
          <span className="floating-cta__icon">
            <PhoneOutlined />
          </span>
          <span className="floating-cta__text">Gọi ngay</span>
        </a>
      </Tooltip>
    </div>
  );
}
