import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import {
  EnvironmentFilled,
  HomeFilled,
  MedicineBoxFilled,
  PhoneOutlined,
  PushpinFilled,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

type LocationGroup = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  locations: {
    label: string;
    type?: 'hospital' | 'airport' | 'area';
  }[];
};

const locationGroups: LocationGroup[] = [
  {
    title: 'Điểm đón/trả Sài Gòn',
    subtitle: 'Hỗ trợ đón tận nơi tại trung tâm, sân bay và các bệnh viện lớn.',
    icon: <HomeFilled />,
    locations: [
      { label: 'Quận 1', type: 'area' },
      { label: 'Quận 5', type: 'area' },
      { label: 'Quận 10', type: 'area' },
      { label: 'Sân bay Tân Sơn Nhất', type: 'airport' },
      { label: 'Chợ Rẫy', type: 'hospital' },
      { label: 'Bệnh viện 115', type: 'hospital' },
      { label: 'Từ Dũ', type: 'hospital' },
      { label: 'Nhi Đồng 1 & 2', type: 'hospital' },
    ],
  },
  {
    title: 'Điểm đón/trả Vũng Tàu',
    subtitle: 'Phục vụ các khu du lịch, trung tâm thành phố và khu vực lân cận.',
    icon: <EnvironmentFilled />,
    locations: [
      { label: 'Bãi Sau', type: 'area' },
      { label: 'Bãi Trước', type: 'area' },
      { label: 'Long Hải', type: 'area' },
      { label: 'Hồ Tràm', type: 'area' },
      { label: 'Châu Đức', type: 'area' },
      { label: 'Bà Rịa', type: 'area' },
    ],
  },
];

const getTagColor = (type?: string) => {
  switch (type) {
    case 'hospital':
      return 'red';
    case 'airport':
      return 'blue';
    default:
      return 'orange';
  }
};

const getTagIcon = (type?: string) => {
  switch (type) {
    case 'hospital':
      return <MedicineBoxFilled />;
    case 'airport':
      return <EnvironmentFilled />;
    default:
      return <PushpinFilled />;
  }
};

export default function LocationsSection() {
  const handleScrollToBooking = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      style={{
        padding: '72px 24px',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Tag
            icon={<EnvironmentFilled />}
            color="orange"
            style={{
              borderRadius: 999,
              padding: '6px 14px',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Khu vực phục vụ
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
            Điểm đón/trả phổ biến
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
            Hỗ trợ đưa đón tận nơi tại các khu vực thường có nhu cầu đi lại cao giữa Sài Gòn và Vũng
            Tàu.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} align="stretch">
          {locationGroups.map((group) => (
            <Col xs={24} lg={12} key={group.title}>
              <Card
                style={{
                  height: '100%',
                  borderRadius: 24,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 18px 42px rgba(15,31,61,0.08)',
                  overflow: 'hidden',
                }}
                styles={{
                  body: {
                    padding: 26,
                  },
                }}
              >
                <Space align="start" size={16} style={{ marginBottom: 22 }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      minWidth: 54,
                      borderRadius: 18,
                      background: 'linear-gradient(135deg, #1a3a6b, #2563eb)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                    }}
                  >
                    {group.icon}
                  </div>

                  <div>
                    <Title
                      level={3}
                      style={{
                        margin: 0,
                        color: '#0f1f3d',
                        fontSize: 22,
                        fontWeight: 850,
                      }}
                    >
                      {group.title}
                    </Title>

                    <Paragraph
                      style={{
                        margin: '8px 0 0',
                        color: '#64748b',
                        lineHeight: 1.6,
                      }}
                    >
                      {group.subtitle}
                    </Paragraph>
                  </div>
                </Space>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                >
                  {group.locations.map((location) => (
                    <Tag
                      key={location.label}
                      color={getTagColor(location.type)}
                      icon={getTagIcon(location.type)}
                      style={{
                        margin: 0,
                        borderRadius: 999,
                        padding: '7px 13px',
                        fontSize: 14,
                        fontWeight: 650,
                      }}
                    >
                      {location.label}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Card
          style={{
            marginTop: 28,
            borderRadius: 24,
            border: '1px solid #fed7aa',
            background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)',
            boxShadow: '0 18px 42px rgba(249,115,22,0.12)',
          }}
          styles={{
            body: {
              padding: 26,
            },
          }}
        >
          <Row gutter={[20, 20]} align="middle" justify="space-between">
            <Col xs={24} md={15}>
              <Space align="start" size={14}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    minWidth: 46,
                    borderRadius: 16,
                    background: '#f97316',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                  }}
                >
                  <PhoneOutlined />
                </div>

                <div>
                  <Text
                    strong
                    style={{
                      color: '#0f1f3d',
                      fontSize: 18,
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    Không thấy điểm đón của bạn?
                  </Text>

                  <Text style={{ color: '#64748b', lineHeight: 1.6 }}>
                    Gửi thông tin điểm đón/trả, chúng tôi sẽ kiểm tra tuyến và báo giá trọn gói
                    nhanh chóng.
                  </Text>
                </div>
              </Space>
            </Col>

            <Col xs={24} md={9}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  type="primary"
                  size="large"
                  onClick={handleScrollToBooking}
                  style={{
                    width: '100%',
                    maxWidth: 260,
                    height: 48,
                    borderRadius: 999,
                    background: '#f97316',
                    borderColor: '#f97316',
                    fontWeight: 800,
                  }}
                >
                  Kiểm tra điểm đón của tôi
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
}
