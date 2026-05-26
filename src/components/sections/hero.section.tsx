import { Button, Card, Col, Row, Space, Typography } from 'antd';
import {
  CheckCircleFilled,
  PhoneOutlined,
  SafetyCertificateFilled,
  ThunderboltFilled,
} from '@ant-design/icons';
import BookingForm from '@/components/sections/booking.form';
import heroImage from '@/assets/hero.png';
import { SITE_SEO } from '@/constants/seo.constant';
import { trackEvent } from '@/utils/tracking';

const { Title, Paragraph, Text } = Typography;

export default function HeroSection() {
  const handleScrollToBooking = () => {
    trackEvent('click_hero_booking', { section: 'hero' });

    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 24px 56px',
        background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 48%, #fff7ed 100%)',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
        }}
      >
        <Row gutter={[40, 32]} align="middle">
          <Col xs={24} lg={13}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px',
                  borderRadius: 999,
                  background: '#fff7ed',
                  color: '#f97316',
                  fontWeight: 700,
                  marginBottom: 18,
                  border: '1px solid #fed7aa',
                }}
              >
                <ThunderboltFilled />
                Xe tiện chuyến Sài Gòn ⇄ Vũng Tàu
              </div>

              <Title
                level={1}
                style={{
                  margin: 0,
                  color: '#0f1f3d',
                  fontSize: 'clamp(34px, 5vw, 58px)',
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: -1.6,
                }}
              >
                {SITE_SEO.h1}
              </Title>

              <Paragraph
                style={{
                  marginTop: 22,
                  color: '#475569',
                  fontSize: 18,
                  lineHeight: 1.7,
                  maxWidth: 620,
                }}
              >
                Dịch vụ xe tiện chuyến Sài Gòn ⇄ Vũng Tàu đưa đón tận nơi, xe riêng đời mới, không
                bắt khách dọc đường.
              </Paragraph>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 16px',
                  borderRadius: 14,
                  background: '#ffffff',
                  color: '#1a3a6b',
                  fontWeight: 700,
                  boxShadow: '0 10px 26px rgba(15,31,61,0.08)',
                }}
              >
                <CheckCircleFilled style={{ color: '#16a34a' }} />
                <span>1,321+ chuyến Sài Gòn - Vũng Tàu đã hoàn thành trong tháng</span>
              </div>

              <Space size={12} wrap style={{ marginTop: 28, display: 'flex' }}>
                <Button
                  type="primary"
                  size="large"
                  onClick={handleScrollToBooking}
                  style={{
                    height: 48,
                    paddingInline: 28,
                    borderRadius: 999,
                    background: '#f97316',
                    borderColor: '#f97316',
                    fontWeight: 800,
                  }}
                >
                  Đặt xe ngay
                </Button>

                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  href={`tel:${SITE_SEO.hotline}`}
                  onClick={() => trackEvent('click_call', { section: 'hero' })}
                  style={{
                    height: 48,
                    paddingInline: 24,
                    borderRadius: 999,
                    color: '#1a3a6b',
                    borderColor: '#1a3a6b',
                    fontWeight: 800,
                  }}
                >
                  Gọi tư vấn
                </Button>
              </Space>
            </div>
          </Col>

          <Col xs={24} lg={11}>
            <div
              style={{
                position: 'relative',
                minHeight: 420,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 380,
                  height: 380,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.16), rgba(249,115,22,0.18))',
                  filter: 'blur(2px)',
                }}
              />

              <img
                src={heroImage}
                alt="Xe tiện chuyến Sài Gòn Vũng Tàu đưa đón tận nơi"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: 520,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 28px 36px rgba(15,31,61,0.24))',
                }}
              />

              <Card
                style={{
                  position: 'absolute',
                  left: 8,
                  bottom: 42,
                  zIndex: 2,
                  width: 210,
                  borderRadius: 18,
                  boxShadow: '0 18px 40px rgba(15,31,61,0.16)',
                }}
                styles={{
                  body: {
                    padding: 16,
                  },
                }}
              >
                <Space align="start">
                  <SafetyCertificateFilled
                    style={{
                      color: '#16a34a',
                      fontSize: 24,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <Text strong style={{ color: '#0f1f3d', display: 'block' }}>
                      Xe đời mới, sạch sẽ
                    </Text>
                    <Text style={{ color: '#64748b', fontSize: 13 }}>
                      Không bắt khách dọc đường
                    </Text>
                  </div>
                </Space>
              </Card>

              <Card
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 46,
                  zIndex: 2,
                  width: 170,
                  borderRadius: 18,
                  boxShadow: '0 18px 40px rgba(15,31,61,0.16)',
                }}
                styles={{
                  body: {
                    padding: 16,
                    textAlign: 'center',
                  },
                }}
              >
                <Text
                  strong
                  style={{
                    display: 'block',
                    color: '#f97316',
                    fontSize: 28,
                    lineHeight: 1,
                  }}
                >
                  100%
                </Text>
                <Text style={{ color: '#1a3a6b', fontWeight: 700 }}>Đúng giờ</Text>
              </Card>
            </div>
          </Col>

          <Col xs={24}>
            <Card
              style={{
                borderRadius: 24,
                boxShadow: '0 24px 60px rgba(15,31,61,0.12)',
                border: '1px solid #e2e8f0',
              }}
              styles={{
                body: {
                  padding: 26,
                },
              }}
            >
              <BookingForm />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
