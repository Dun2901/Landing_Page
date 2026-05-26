import { Button, Card, Col, Grid, Row, Space, Table, Tag, Typography, type TableProps } from 'antd';
import {
  CarOutlined,
  CheckCircleFilled,
  CrownOutlined,
  SafetyCertificateFilled,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

type PriceItem = {
  key: string;
  carType: string;
  carModels: string;
  oneWayPrice: string;
  roundTripPrice: string;
  highlight: boolean;
};

const priceData: PriceItem[] = [
  {
    key: 'sedan',
    carType: 'Xe 4 chỗ',
    carModels: 'Vios, City, Accent',
    oneWayPrice: '700.000đ',
    roundTripPrice: '1.500.000đ',
    highlight: false,
  },
  {
    key: 'suv',
    carType: 'Xe 7 chỗ',
    carModels: 'Xpander, Fortuner',
    oneWayPrice: '900.000đ',
    roundTripPrice: '1.700.000đ',
    highlight: true,
  },
  {
    key: 'van',
    carType: 'Xe 16 chỗ',
    carModels: 'Ford Transit, Solati',
    oneWayPrice: '2.000.000đ',
    roundTripPrice: '2.900.000đ',
    highlight: false,
  },
  {
    key: 'limousine',
    carType: 'Limousine',
    carModels: 'Dcar 9 - 12 chỗ',
    oneWayPrice: '2.400.000đ',
    roundTripPrice: '4.000.000đ',
    highlight: false,
  },
];

export default function PriceTable() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const handleScrollToBooking = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const columns: TableProps<PriceItem>['columns'] = [
    {
      title: 'Loại xe',
      dataIndex: 'carType',
      key: 'carType',
      render: (_, record) => (
        <Space size={10}>
          <CarOutlined style={{ color: '#f97316', fontSize: 20 }} />

          <div>
            <Text strong style={{ color: '#0f1f3d', fontSize: 16 }}>
              {record.carType}
            </Text>

            {record.highlight && (
              <Tag color="orange" style={{ marginLeft: 8, borderRadius: 999 }}>
                Phổ biến
              </Tag>
            )}
          </div>
        </Space>
      ),
    },
    {
      title: 'Dòng xe',
      dataIndex: 'carModels',
      key: 'carModels',
      render: (value: string) => <Text style={{ color: '#64748b' }}>{value}</Text>,
    },
    {
      title: 'Giá 1 chiều',
      dataIndex: 'oneWayPrice',
      key: 'oneWayPrice',
      align: 'right',
      render: (value: string) => (
        <Text strong style={{ color: '#1a3a6b', fontSize: 17 }}>
          {value}
        </Text>
      ),
    },
    {
      title: 'Giá khứ hồi',
      dataIndex: 'roundTripPrice',
      key: 'roundTripPrice',
      align: 'right',
      render: (value: string) => (
        <Text strong style={{ color: '#f97316', fontSize: 17 }}>
          {value}
        </Text>
      ),
    },
    {
      title: 'Đặt xe',
      key: 'action',
      align: 'center',
      render: () => (
        <Button
          type="primary"
          onClick={handleScrollToBooking}
          style={{
            borderRadius: 999,
            background: '#f97316',
            borderColor: '#f97316',
            fontWeight: 700,
          }}
        >
          Đặt xe loại này
        </Button>
      ),
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        padding: '72px 24px',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Tag
            icon={<CrownOutlined />}
            color="blue"
            style={{
              borderRadius: 999,
              padding: '6px 14px',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Bảng giá minh bạch
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
            Bảng giá xe tiện chuyến
          </Title>

          <Paragraph
            style={{
              color: '#64748b',
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 680,
              margin: '14px auto 0',
            }}
          >
            Chọn loại xe phù hợp với nhu cầu di chuyển của bạn. Giá rõ ràng, dễ so sánh và hỗ trợ
            đặt xe nhanh.
          </Paragraph>
        </div>

        {isMobile ? (
          <Row gutter={[16, 16]}>
            {priceData.map((item) => (
              <Col xs={24} key={item.key}>
                <Card
                  hoverable
                  style={{
                    borderRadius: 20,
                    border: item.highlight ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                    boxShadow: item.highlight
                      ? '0 18px 38px rgba(249,115,22,0.16)'
                      : '0 14px 32px rgba(15,31,61,0.08)',
                  }}
                  styles={{
                    body: {
                      padding: 20,
                    },
                  }}
                >
                  <Space orientation="vertical" size={16} style={{ width: '100%' }}>
                    <div>
                      <Space align="center" size={10}>
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: 14,
                            background: '#fff7ed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <CarOutlined style={{ color: '#f97316', fontSize: 22 }} />
                        </div>

                        <div>
                          <Text strong style={{ color: '#0f1f3d', fontSize: 18 }}>
                            {item.carType}
                          </Text>

                          {item.highlight && (
                            <Tag color="orange" style={{ marginLeft: 8, borderRadius: 999 }}>
                              Phổ biến
                            </Tag>
                          )}

                          <div>
                            <Text style={{ color: '#64748b' }}>{item.carModels}</Text>
                          </div>
                        </div>
                      </Space>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          padding: 14,
                          borderRadius: 14,
                          background: '#f8fafc',
                        }}
                      >
                        <Text style={{ color: '#64748b', fontSize: 13 }}>Giá 1 chiều</Text>

                        <div>
                          <Text strong style={{ color: '#1a3a6b', fontSize: 20 }}>
                            {item.oneWayPrice}
                          </Text>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: 14,
                          borderRadius: 14,
                          background: '#fff7ed',
                        }}
                      >
                        <Text style={{ color: '#64748b', fontSize: 13 }}>Giá khứ hồi</Text>

                        <div>
                          <Text strong style={{ color: '#f97316', fontSize: 20 }}>
                            {item.roundTripPrice}
                          </Text>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="primary"
                      block
                      size="large"
                      onClick={handleScrollToBooking}
                      style={{
                        borderRadius: 999,
                        background: '#f97316',
                        borderColor: '#f97316',
                        fontWeight: 800,
                      }}
                    >
                      Đặt xe loại này
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card
            style={{
              borderRadius: 24,
              border: '1px solid #e2e8f0',
              boxShadow: '0 22px 50px rgba(15,31,61,0.1)',
              overflow: 'hidden',
            }}
            styles={{
              body: {
                padding: 0,
              },
            }}
          >
            <Table<PriceItem>
              columns={columns}
              dataSource={priceData}
              pagination={false}
              rowKey="key"
              scroll={{ x: 900 }}
            />
          </Card>
        )}

        <Row gutter={[16, 16]} style={{ marginTop: 28 }}>
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                borderRadius: 18,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
              styles={{
                body: {
                  padding: 18,
                },
              }}
            >
              <Space align="start">
                <CheckCircleFilled style={{ color: '#16a34a', fontSize: 20, marginTop: 2 }} />

                <Text strong style={{ color: '#0f1f3d' }}>
                  Giá trọn gói, đã bao gồm phí cầu đường
                </Text>
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                borderRadius: 18,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
              styles={{
                body: {
                  padding: 18,
                },
              }}
            >
              <Space align="start">
                <SafetyCertificateFilled style={{ color: '#2563eb', fontSize: 20, marginTop: 2 }} />

                <Text strong style={{ color: '#0f1f3d' }}>
                  Xe sạch sẽ, tài xế đúng giờ, không bắt khách dọc đường
                </Text>
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                borderRadius: 18,
                background: '#fff7ed',
                border: '1px solid #fed7aa',
              }}
              styles={{
                body: {
                  padding: 18,
                },
              }}
            >
              <Space align="start">
                <CrownOutlined style={{ color: '#f97316', fontSize: 20, marginTop: 2 }} />

                <Text strong style={{ color: '#0f1f3d' }}>
                  Có hỗ trợ tư vấn chọn xe theo số lượng khách và hành lý
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
