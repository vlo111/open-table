import { Layout } from 'antd';
import { IMainLayout } from 'types/layout';

import { Logo } from '../logo';
const { Header, Content } = Layout;

export const AuthLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Layout>
      <Header style={{ padding: '24px 0 0 49px', height: '70px' }}>
        <Logo />
      </Header>
      <Content
        style={{
          height: 'calc(100vh - 70px)',
          backgroundImage: 'url(./background-logo.png)',
          overflow: 'auto',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          //   alignItems: "center",
          justifyContent: 'center',
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
