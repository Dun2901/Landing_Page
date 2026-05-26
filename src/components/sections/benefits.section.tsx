import { Card, Col, Row, Space, Tag, Typography } from 'antd';
import {
  CarFilled,
  CheckCircleFilled,
  ClockCircleFilled,
  DollarCircleFilled,
  HomeFilled,
  MedicineBoxFilled,
  SafetyCertificateFilled,
  TeamOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

type BenefitItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const benefits: BenefitItem[] = [
  {
    title: 'Đưa đón tận nhà',
    description: 'Tài xế đón và trả khách đúng địa chỉ, không cần ra bến xe hay điểm trung chuyển.',
    icon: <HomeFilled />,
    highlight: true,
  },
  {
    title: 'Không bắt khách dọc đường',
    description: 'Di chuyển riêng tư, đúng lịch trình, không ghé đón khách lẻ làm mất thời gian.',
    icon: <TeamOutlined />,
  },
  {
    title: 'Xe đời mới 2024+',
    description:
      'Xe sạch sẽ, máy lạnh tốt, không gian thoải mái cho gia đình, người lớn tuổi và trẻ nhỏ.',
    icon: <CarFilled />,
  },
  {
    title: 'Tài xế chuyên tuyến',
    description: 'Am hiểu tuyến Sài Gòn - Vũng Tàu, lái xe an toàn, lịch sự, không hút thuốc.',
    icon: <SafetyCertificateFilled />,
  },
  {
    title: 'Không phát sinh phí ẩn',
    description: 'Giá rõ ràng trước khi đi, hạn chế tối đa các khoản phụ thu không báo trước.',
    icon: <DollarCircleFilled />,
  },
  {
    title: 'Hoàn tiền nếu trễ quá 15 phút',
    description:
      'Cam kết đúng giờ. Nếu tài xế đón trễ quá 15 phút, hỗ trợ hoàn tiền theo chính sách.',
    icon: <ClockCircleFilled />,
    highlight: true,
  },
  {
    title: 'Hỗ trợ đưa đón bệnh viện',
    description:
      'Phù hợp cho khách đi khám, tái khám hoặc đưa người thân đến Chợ Rẫy, Từ Dũ, Nhi Đồng, 115.',
    icon: <MedicineBoxFilled />,
    highlight: true,
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      style={{
        padding: '72px 24px',
        background: '#f8fafc',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Tag
            icon={<CheckCircleFilled />}
            color="blue"
            style={{
              borderRadius: 999,
              padding: '6px 14px',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Vì sao nên chọn chúng tôi?
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
            Lợi ích khi đặt xe tiện chuyến
          </Title>

          <Paragraph
            style={{
              color: '#64748b',
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 720,
              margin: '14px auto 0',
            }}
          >
            Dịch vụ hướng đến sự đúng giờ, minh bạch chi phí và trải nghiệm di chuyển riêng tư cho
            khách đi Sài Gòn ⇄ Vũng Tàu.
          </Paragraph>
        </div>

        <Row gutter={[20, 20]}>
          {benefits.map((benefit) => (
            <Col xs={24} sm={12} lg={8} key={benefit.title}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: 22,
                  border: benefit.highlight ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                  background: benefit.highlight ? '#fff7ed' : '#ffffff',
                  boxShadow: benefit.highlight
                    ? '0 18px 38px rgba(249,115,22,0.14)'
                    : '0 14px 32px rgba(15,31,61,0.08)',
                }}
                styles={{
                  body: {
                    padding: 22,
                  },
                }}
              >
                <Space align="start" size={16}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      borderRadius: 16,
                      background: benefit.highlight ? '#f97316' : '#eff6ff',
                      color: benefit.highlight ? '#ffffff' : '#1a3a6b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: 'block',
                        color: '#0f1f3d',
                        fontSize: 17,
                        marginBottom: 8,
                      }}
                    >
                      {benefit.title}
                    </Text>

                    <Paragraph
                      style={{
                        margin: 0,
                        color: '#64748b',
                        lineHeight: 1.65,
                      }}
                    >
                      {benefit.description}
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
