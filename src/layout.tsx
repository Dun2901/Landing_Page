import { Layout } from 'antd';
import { Outlet } from 'react-router';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingCTA from '@/components/layout/floatingCTA';

function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footer />
      <FloatingCTA />
    </Layout>
  );
}

export default AppLayout;
