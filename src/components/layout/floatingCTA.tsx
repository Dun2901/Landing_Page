import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import './floatingCTA.scss';
import { SITE_SEO } from '@/constants/seo.constant';
import { trackEvent } from '@/utils/tracking';

const HOTLINE = SITE_SEO.hotline;
const ZALO_URL = SITE_SEO.zaloUrl;

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
          onClick={() => trackEvent('click_zalo', { section: 'floating_cta' })}
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
          onClick={() => trackEvent('click_call', { section: 'floating_cta' })}
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
