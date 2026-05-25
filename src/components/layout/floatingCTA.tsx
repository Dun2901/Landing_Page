import { FloatButton } from 'antd';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';

const HOTLINE = '09091234';
const ZALO_URL = 'https://zalo.me/09091234';

export default function FloatingCTA() {
  return (
    <FloatButton.Group style={{ right: 24, bottom: 80 }} trigger={undefined}>
      {/* Zalo */}
      <FloatButton
        icon={
          <span style={{ fontSize: 16 }}>
            <MessageOutlined />
          </span>
        }
        tooltip="Đặt xe qua Zalo"
        style={{ background: '#0068ff' }}
        onClick={() => window.open(ZALO_URL, '_blank')}
      />
      {/* Gọi ngay */}
      <FloatButton
        icon={<PhoneOutlined style={{ color: '#fff' }} />}
        tooltip={`Gọi ngay: ${HOTLINE}`}
        type="primary"
        style={{ background: '#f97316', borderColor: '#f97316' }}
        onClick={() => {
          window.location.href = `tel:${HOTLINE}`;
        }}
      />
    </FloatButton.Group>
  );
}
