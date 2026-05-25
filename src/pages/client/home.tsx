const HomePage = () => {
  return (
    <>
      <div
        id="hero"
        style={{
          minHeight: '100vh',
          background: '#f0f5ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700, fontSize: 24 }}>
          Hero Section (Task 04)
        </span>
      </div>
      <div
        id="pricing"
        style={{
          minHeight: '60vh',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>Bảng Giá (Task 05)</span>
      </div>
      <div
        id="benefits"
        style={{
          minHeight: '60vh',
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>Lợi Ích (Task 06)</span>
      </div>
      <div
        id="process"
        style={{
          minHeight: '60vh',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>Quy Trình (Task 07)</span>
      </div>
      <div
        id="faq"
        style={{
          minHeight: '60vh',
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>FAQ (Task 08)</span>
      </div>
      <div
        id="contact"
        style={{
          minHeight: '40vh',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#1a3a6b', fontWeight: 700 }}>Liên Hệ (Task 09)</span>
      </div>
    </>
  );
};

export default HomePage;
