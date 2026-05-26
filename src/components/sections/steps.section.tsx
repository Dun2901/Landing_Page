import { Button, Card, Col, Grid, Row, Space, Steps, Tag, Typography } from 'antd';
import {
  CarOutlined,
  CheckCircleFilled,
  DollarCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  SafetyCertificateFilled,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const bookingSteps = [
  {
    title: 'Nhập điểm đón/trả',
    description:
      'Điền địa chỉ đón và trả cụ thể tại Sài Gòn, Vũng Tàu, sân bay, bệnh viện hoặc khách sạn.',
    icon: <EnvironmentOutlined />,
  },
  {
    title: 'Chọn loại xe',
    description: 'Chọn xe 4 chỗ, 7 chỗ, 16 chỗ hoặc Limousine phù hợp với số người và hành lý.',
    icon: <CarOutlined />,
  },
  {
    title: 'Xác nhận giá trọn gói',
    description:
      'Nhân viên xác nhận giá rõ ràng trước chuyến đi, hạn chế phát sinh chi phí ngoài dự kiến.',
    icon: <DollarCircleOutlined />,
  },
  {
    title: 'Tài xế đón tận nơi',
    description: 'Tài xế liên hệ trước giờ đi, đón đúng địa chỉ và hỗ trợ hành lý cho khách.',
    icon: <CheckCircleFilled />,
  },
];

export default function StepsSection() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const handleScrollToBooking = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="process"
      style={{
        padding: '72px 24px',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={9}>
            <Tag
              icon={<SafetyCertificateFilled />}
              color="blue"
              style={{
                borderRadius: 999,
                padding: '6px 14px',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Quy trình đặt xe
            </Tag>

            <Title
              level={2}
              style={{
                margin: 0,
                color: '#0f1f3d',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                letterSpacing: -0.8,
              }}
            >
              Đặt xe Sài Gòn ⇄ Vũng Tàu chỉ trong 4 bước
            </Title>

            <Paragraph
              style={{
                color: '#64748b',
                fontSize: 17,
                lineHeight: 1.7,
                margin: '16px 0 24px',
              }}
            >
              Quy trình được tối giản để khách dễ đặt xe trên điện thoại, đồng thời vẫn đảm bảo rõ
              thông tin chuyến đi, loại xe và giá trước khi xác nhận.
            </Paragraph>

            <Space orientation="vertical" size={14} style={{ width: '100%' }}>
              <Card
                style={{
                  borderRadius: 20,
                  border: '1px solid #fed7aa',
                  background: '#fff7ed',
                }}
                styles={{
                  body: {
                    padding: 18,
                  },
                }}
              >
                <Text
                  strong
                  style={{
                    display: 'block',
                    color: '#9a3412',
                    marginBottom: 6,
                  }}
                >
                  Cam kết minh bạch
                </Text>

                <Paragraph
                  style={{
                    margin: 0,
                    color: '#9a3412',
                    lineHeight: 1.6,
                  }}
                >
                  Khách được báo giá trọn gói trước chuyến đi, đã bao gồm xăng dầu, tài xế và phí
                  cầu đường cao tốc.
                </Paragraph>
              </Card>

              <Button
                type="primary"
                size="large"
                icon={<PhoneOutlined />}
                onClick={handleScrollToBooking}
                style={{
                  height: 48,
                  borderRadius: 999,
                  background: '#f97316',
                  borderColor: '#f97316',
                  fontWeight: 800,
                  boxShadow: '0 14px 28px rgba(249,115,22,0.24)',
                }}
              >
                Đặt xe ngay
              </Button>
            </Space>
          </Col>

          <Col xs={24} lg={15}>
            <Card
              style={{
                borderRadius: 28,
                border: '1px solid #e2e8f0',
                boxShadow: '0 20px 48px rgba(15,31,61,0.1)',
              }}
              styles={{
                body: {
                  padding: isMobile ? 22 : 32,
                },
              }}
            >
              <Steps
                orientation={isMobile ? 'vertical' : 'horizontal'}
                current={3}
                responsive={false}
                items={bookingSteps.map((step) => ({
                  title: (
                    <Text
                      strong
                      style={{
                        color: '#0f1f3d',
                        fontSize: 16,
                      }}
                    >
                      {step.title}
                    </Text>
                  ),
                  content: (
                    <Paragraph
                      style={{
                        color: '#64748b',
                        lineHeight: 1.6,
                        marginTop: 8,
                        marginBottom: 0,
                      }}
                    >
                      {step.description}
                    </Paragraph>
                  ),
                  icon: (
                    <span
                      style={{
                        color: '#f97316',
                        fontSize: 22,
                      }}
                    >
                      {step.icon}
                    </span>
                  ),
                }))}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
