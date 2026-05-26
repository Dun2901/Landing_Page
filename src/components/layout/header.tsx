import { useState } from 'react';
import { Layout, Button, Drawer, Space, Grid } from 'antd';
import {
  MenuOutlined,
  PhoneOutlined,
  CloseOutlined,
  CarOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { SITE_SEO } from '@/constants/seo.constant';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Lợi ích', href: '#benefits' },
  { label: 'Quy trình', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Liên hệ', href: '#contact' },
];

const HOTLINE = SITE_SEO.hotline;

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      <AntHeader
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#fff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('#hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #1a3a6b, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CarOutlined style={{ color: '#fff', fontSize: 20 }} />
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{ fontWeight: 800, fontSize: 15, color: '#1a3a6b', letterSpacing: '-0.3px' }}
            >
              XE TIỆN CHUYẾN
            </div>
            <div
              style={{ fontSize: 10, color: '#f97316', fontWeight: 600, letterSpacing: '0.5px' }}
            >
              SÀI GÒN ⇄ VŨNG TÀU
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 4 }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = '#1a3a6b';
                  (e.target as HTMLButtonElement).style.background = '#eff6ff';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = '#374151';
                  (e.target as HTMLButtonElement).style.background = 'none';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* CTA */}
        <Space size={8}>
          <Button
            type="primary"
            icon={<PhoneOutlined />}
            href={`tel:${HOTLINE.replace(/\s/g, '')}`}
            style={{
              background: '#1a3a6b',
              borderColor: '#1a3a6b',
              fontWeight: 600,
              borderRadius: 8,
            }}
          >
            {!isMobile && 'Gọi ngay'}
          </Button>
          <Button
            icon={<MessageOutlined />}
            style={{
              background: '#f97316',
              borderColor: '#f97316',
              color: '#fff',
              fontWeight: 600,
              borderRadius: 8,
            }}
            onClick={() => window.open(`https://zalo.me/${HOTLINE}`, '_blank')}
          >
            {!isMobile && 'Đặt xe Zalo'}
          </Button>

          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              style={{ fontSize: 18 }}
            />
          )}
        </Space>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title={<span style={{ color: '#1a3a6b', fontWeight: 700 }}>Menu</span>}
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        size={260}
        closeIcon={<CloseOutlined />}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                scrollTo(item.href);
                setDrawerOpen(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 500,
                color: '#1a3a6b',
                textAlign: 'left',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Button
            block
            type="primary"
            icon={<PhoneOutlined />}
            href={`tel:${HOTLINE}`}
            style={{ background: '#1a3a6b', borderColor: '#1a3a6b', fontWeight: 600, height: 44 }}
          >
            Gọi ngay {HOTLINE}
          </Button>
          <Button
            block
            icon={<MessageOutlined />}
            style={{
              background: '#f97316',
              borderColor: '#f97316',
              color: '#fff',
              fontWeight: 600,
              height: 44,
            }}
            onClick={() => window.open(`https://zalo.me/${HOTLINE}`, '_blank')}
          >
            Đặt xe qua Zalo
          </Button>
        </div>
      </Drawer>
    </>
  );
}
