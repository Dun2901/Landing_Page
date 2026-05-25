import { Layout, Row, Col, Space, Divider } from 'antd';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const QUICK_LINKS = [
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Lợi ích', href: '#benefits' },
  { label: 'Quy trình', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Liên hệ', href: '#contact' },
];

const AREAS = [
  'TP.HCM (Q1, Q5, Q10, Tân Bình)',
  'Sân bay Tân Sơn Nhất',
  'BV Chợ Rẫy, Từ Dũ, Nhi Đồng',
  'Vũng Tàu – Bãi Sau, Bãi Trước',
  'Long Hải, Hồ Tràm, Bà Rịa',
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <AntFooter
      style={{
        background: '#0f1f3d',
        color: '#cbd5e1',
        padding: '48px 24px 24px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Row gutter={[40, 32]}>
          <Col xs={24} md={8}>
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#fff',
                  letterSpacing: '-0.3px',
                }}
              >
                XE TIỆN CHUYẾN
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: '#f97316',
                  fontWeight: 600,
                  letterSpacing: '1px',
                }}
              >
                SÀI GÒN ⇄ VŨNG TÀU
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: '#94a3b8',
                margin: 0,
              }}
            >
              Dịch vụ xe tiện chuyến đưa đón tận nơi. Giá trọn gói, không phát sinh. Cam kết đúng
              giờ 100%.
            </p>

            <Space style={{ marginTop: 20 }} size={12} wrap>
              <a
                href="tel:0909123456"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#1a3a6b',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <PhoneOutlined />
                0909 123 456
              </a>

              <a
                href="https://zalo.me/0909123456"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#0068ff',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageOutlined />
                Zalo
              </a>
            </Space>
          </Col>

          <Col xs={12} md={6}>
            <div
              style={{
                fontWeight: 700,
                color: '#fff',
                marginBottom: 16,
                fontSize: 14,
              }}
            >
              Liên kết nhanh
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94a3b8',
                      fontSize: 13,
                      padding: 0,
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#f97316';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    <ArrowRightOutlined style={{ fontSize: 11 }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} md={10}>
            <div
              style={{
                fontWeight: 700,
                color: '#fff',
                marginBottom: 16,
                fontSize: 14,
              }}
            >
              <EnvironmentOutlined style={{ marginRight: 6, color: '#f97316' }} />
              Khu vực phục vụ
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {AREAS.map((area) => (
                <li
                  key={area}
                  style={{
                    fontSize: 13,
                    color: '#94a3b8',
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                  }}
                >
                  <CheckCircleFilled
                    style={{
                      color: '#2563eb',
                      flexShrink: 0,
                      fontSize: 11,
                      marginTop: 4,
                    }}
                  />
                  {area}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Divider
          style={{
            borderColor: '#1e3a5f',
            margin: '32px 0 20px',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 8,
            fontSize: 12,
            color: '#475569',
          }}
        >
          <span>
            © {new Date().getFullYear()} Xe Tiện Chuyến Sài Gòn – Vũng Tàu. All rights reserved.
          </span>
          <span>Tuân thủ Nghị định 158/2024/NĐ-CP</span>
        </div>
      </div>
    </AntFooter>
  );
}
