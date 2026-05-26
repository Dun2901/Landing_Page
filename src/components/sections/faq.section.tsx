import { useEffect } from 'react';
import { Button, Card, Col, Collapse, Row, Space, Tag, Typography, type CollapseProps } from 'antd';
import {
  CarOutlined,
  DownOutlined,
  EnvironmentOutlined,
  FileProtectOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SafetyCertificateFilled,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const faqItems = [
  {
    question: 'Xe hợp đồng có được gom khách lẻ không?',
    answer:
      'Theo định hướng dịch vụ, chúng tôi ưu tiên mô hình thuê xe riêng/bao xe và xe tiện chuyến hợp đồng trọn gói để đảm bảo an toàn pháp lý, hạn chế tình trạng gom khách lẻ trái quy định.',
  },
  {
    question: 'Tôi có phải trả thêm phí cao tốc không?',
    answer:
      'Không. Giá tư vấn cho khách là giá trọn gói, đã bao gồm xăng dầu, tài xế và phí cầu đường cao tốc. Nếu có phụ thu đặc biệt như lễ Tết hoặc điểm đón quá xa, nhân viên sẽ báo trước khi xác nhận chuyến.',
  },
  {
    question: 'Có đưa đón tận sân bay hoặc bệnh viện không?',
    answer:
      'Có. Dịch vụ hỗ trợ đưa đón tại sân bay Tân Sơn Nhất, bệnh viện Chợ Rẫy, Từ Dũ, Nhi Đồng, 115 và nhiều khu vực trung tâm TP.HCM.',
  },
  {
    question: 'Tôi đặt xe đi Vũng Tàu lúc sáng sớm hoặc đêm khuya được không?',
    answer:
      'Có. Bạn có thể đặt lịch theo giờ mong muốn. Với các khung giờ quá sớm hoặc quá khuya, nên đặt trước để đội xe sắp xếp tài xế phù hợp.',
  },
  {
    question: 'Nếu tài xế đến trễ thì xử lý thế nào?',
    answer:
      'Dịch vụ có chính sách hỗ trợ nếu tài xế đón trễ quá thời gian cam kết. Nhân viên sẽ kiểm tra tình trạng chuyến đi và hỗ trợ đổi xe hoặc xử lý theo chính sách hoàn phí.',
  },
  {
    question: 'Tôi có thể đặt xe khứ hồi Sài Gòn - Vũng Tàu không?',
    answer:
      'Có. Bạn có thể đặt xe 1 chiều hoặc khứ hồi. Khi đặt khứ hồi, nhân viên sẽ xác nhận thời gian chờ, điểm đón chiều về và báo giá trọn gói trước chuyến đi.',
  },
];

const collapseItems: CollapseProps['items'] = faqItems.map((item, index) => ({
  key: String(index + 1),
  label: (
    <Text
      strong
      style={{
        color: '#0f1f3d',
        fontSize: 16,
      }}
    >
      {item.question}
    </Text>
  ),
  children: (
    <Paragraph
      style={{
        color: '#64748b',
        lineHeight: 1.75,
        margin: 0,
      }}
    >
      {item.answer}
    </Paragraph>
  ),
}));

export default function FAQSection() {
  useEffect(() => {
    const scriptId = 'faq-schema-json-ld';

    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });

    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  const handleScrollToBooking = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="faq"
      style={{
        padding: '72px 24px',
        background: '#f8fafc',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Tag
            icon={<QuestionCircleOutlined />}
            color="orange"
            style={{
              borderRadius: 999,
              padding: '6px 14px',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Câu hỏi thường gặp
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
            Giải đáp trước khi đặt xe
          </Title>

          <Paragraph
            style={{
              color: '#64748b',
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 760,
              margin: '14px auto 0',
            }}
          >
            Những thông tin quan trọng giúp khách yên tâm hơn về giá trọn gói, điểm đón/trả và tính
            pháp lý của dịch vụ xe tiện chuyến.
          </Paragraph>
        </div>

        <Card
          style={{
            borderRadius: 28,
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 48px rgba(15,31,61,0.08)',
            overflow: 'hidden',
          }}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIconPlacement="end"
            expandIcon={({ isActive }) => (
              <DownOutlined
                rotate={isActive ? 180 : 0}
                style={{
                  color: '#f97316',
                  fontSize: 14,
                }}
              />
            )}
            items={collapseItems}
            style={{
              background: '#ffffff',
            }}
          />
        </Card>

        <Card
          style={{
            marginTop: 24,
            borderRadius: 24,
            border: '1px solid #fed7aa',
            background: 'linear-gradient(135deg, #fff7ed, #ffffff)',
          }}
          styles={{
            body: {
              padding: 24,
            },
          }}
        >
          <Row gutter={[20, 20]} align="middle">
            <Col xs={24} lg={18}>
              <Space align="start" size={16}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    minWidth: 52,
                    borderRadius: 18,
                    background: '#f97316',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  <SafetyCertificateFilled />
                </div>

                <div style={{ flex: 1 }}>
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                      color: '#0f1f3d',
                      fontSize: 22,
                      fontWeight: 850,
                    }}
                  >
                    Cần tư vấn lộ trình cụ thể?
                  </Title>

                  <Paragraph
                    style={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      margin: '8px 0 18px',
                    }}
                  >
                    Gửi điểm đón, điểm trả và thời gian đi. Nhân viên sẽ kiểm tra loại xe phù hợp và
                    báo giá trọn gói trước khi xác nhận.
                  </Paragraph>

                  <Space size={[12, 12]} wrap>
                    <Tag
                      icon={<CarOutlined />}
                      color="blue"
                      style={{
                        borderRadius: 999,
                        padding: '6px 12px',
                        fontWeight: 650,
                      }}
                    >
                      Xe 4 - 16 chỗ
                    </Tag>

                    <Tag
                      icon={<EnvironmentOutlined />}
                      color="green"
                      style={{
                        borderRadius: 999,
                        padding: '6px 12px',
                        fontWeight: 650,
                      }}
                    >
                      Đón tận nơi
                    </Tag>

                    <Tag
                      icon={<FileProtectOutlined />}
                      color="orange"
                      style={{
                        borderRadius: 999,
                        padding: '6px 12px',
                        fontWeight: 650,
                      }}
                    >
                      Hợp đồng trọn gói
                    </Tag>
                  </Space>
                </div>
              </Space>
            </Col>

            <Col
              xs={24}
              lg={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
                  paddingInline: 28,
                  boxShadow: '0 12px 24px rgba(249,115,22,0.22)',
                }}
              >
                Nhận tư vấn
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
}
