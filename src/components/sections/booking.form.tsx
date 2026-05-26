import { Form, Input, Select, DatePicker, TimePicker, Button, message } from 'antd';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  CarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { trackEvent } from '@/utils/tracking';

interface BookingFormValues {
  pickup: string;
  dropoff: string;
  date: unknown;
  time: unknown;
  serviceType: string;
  phone: string;
}

const SERVICE_OPTIONS = [
  {
    value: 'private',
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <CarOutlined style={{ color: '#f97316' }} />
        Bao xe riêng
        <span style={{ color: '#64748b' }}>(Ưu tiên pháp lý)</span>
      </span>
    ),
  },
  {
    value: 'shared',
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <TeamOutlined style={{ color: '#2563eb' }} />
        Xe tiện chuyến
        <span style={{ color: '#64748b' }}>(Chia sẻ chi phí)</span>
      </span>
    ),
  },
];

export default function BookingForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: BookingFormValues) => {
    setIsSubmitting(true);

    try {
      console.log('Booking submitted:', values);

      trackEvent('submit_booking_success', {
        section: 'booking_form',
        serviceType: values.serviceType,
      });

      messageApi.success('Đặt xe thành công! Chúng tôi sẽ liên hệ bạn trong vài phút.');
      form.resetFields();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        style={{ width: '100%' }}
      >
        <Form.Item
          name="pickup"
          label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Điểm đón</span>}
          rules={[{ required: true, message: 'Vui lòng nhập điểm đón' }]}
        >
          <Input
            prefix={<EnvironmentOutlined style={{ color: '#2563eb' }} />}
            placeholder="Nhập địa chỉ đón (quận, bệnh viện, sân bay...)"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="dropoff"
          label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Điểm trả</span>}
          rules={[{ required: true, message: 'Vui lòng nhập điểm trả' }]}
        >
          <Input
            prefix={<EnvironmentOutlined style={{ color: '#f97316' }} />}
            placeholder="Nhập địa chỉ trả (Vũng Tàu, Long Hải, Hồ Tràm...)"
            size="large"
          />
        </Form.Item>

        <div style={{ display: 'flex', gap: 12 }}>
          <Form.Item
            name="date"
            label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Ngày đi</span>}
            rules={[{ required: true, message: 'Chọn ngày' }]}
            style={{ flex: 1 }}
          >
            <DatePicker
              size="large"
              style={{ width: '100%' }}
              placeholder="Chọn ngày"
              prefix={<CalendarOutlined />}
              format="DD/MM/YYYY"
              disabledDate={(d) => d.isBefore(new Date(), 'day')}
            />
          </Form.Item>

          <Form.Item
            name="time"
            label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Giờ đi</span>}
            rules={[{ required: true, message: 'Chọn giờ' }]}
            style={{ flex: 1 }}
          >
            <TimePicker
              size="large"
              style={{ width: '100%' }}
              placeholder="Chọn giờ"
              format="HH:mm"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="serviceType"
          label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Loại dịch vụ</span>}
          rules={[{ required: true, message: 'Vui lòng chọn loại dịch vụ' }]}
        >
          <Select size="large" placeholder="Chọn loại dịch vụ" options={SERVICE_OPTIONS} />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<span style={{ fontWeight: 600, color: '#1a3a6b' }}>Số điện thoại</span>}
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại' },
            {
              pattern: /^(0[3|5|7|8|9])+([0-9]{8})$/,
              message: 'Số điện thoại không hợp lệ',
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined style={{ color: '#2563eb' }} />}
            placeholder="0909 123 456"
            size="large"
            maxLength={10}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isSubmitting}
            size="large"
            icon={<CarOutlined />}
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              borderColor: 'transparent',
              fontWeight: 700,
              fontSize: 16,
              height: 50,
              borderRadius: 10,
              boxShadow: '0 4px 16px rgba(249,115,22,0.4)',
            }}
          >
            Đặt xe ngay
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
