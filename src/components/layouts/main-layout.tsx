import { Layout, Flex, Typography, Menu as MenuComponent } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FC } from 'react';
import { COLORS, leftMenuItems } from 'helpers/constants';
import { IMainLayout } from 'types/layout';

import { Logo } from '../logo';

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { BG, GRAY_100, GRAY_300, GRAY_200 } = COLORS;

const Menu = styled(MenuComponent)`
  &.head_menu {
    .ant-menu-item {
      border-radius: 32px;
      margin-right: 8px;
      font-weight: 500;
    }
    &.ant-menu-horizontal {
      line-height: 32px;
      width: 268px;
    }
    &.ant-menu-light.ant-menu-horizontal > .ant-menu-item::after {
      border-bottom: 0px;
    }
  }

  &.left_menu {
    height: 95%;

    .ant-menu-item:last-child {
      position: absolute;
      bottom: 20px;
    }
  }
`;

const Sider = styled(Layout.Sider)`
  &.ant-layout-sider {
    background: ${GRAY_200};
    margin-right: 8px;
    padding: 32px 16px;
    border-radius: 8px;
  }
  .ant-layout-sider-children {
    position: relative;
  }
`;

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTopMenuChange = (info: { key: string }): void => {
    const { key } = info;
    navigate(key);
  };

  return (
    <Layout style={{ height: '100%', background: BG, minHeight: '100vh' }}>
      <Header style={{ margin: '16px 0px' }}>
        <Flex align='center' justify='space-between'>
          <Flex align='center' gap={24}>
            <Logo />
            <Title level={3} style={{ marginBottom: 0, textAlign: 'center' }}>
              User Name
            </Title>
          </Flex>
          <Flex align='center' gap={24}>
            Profile
          </Flex>
        </Flex>
      </Header>
      <Layout style={{ height: '100%' }} hasSider>
        <Sider width={'30%'} breakpoint='lg'>
          <Paragraph style={{ fontSize: 16, fontWeight: 500 }}>Profile menu</Paragraph>
          <Menu
            items={leftMenuItems}
            className='left_menu'
            onSelect={(info): void => handleTopMenuChange(info)}
            selectedKeys={[pathname]}
          />
        </Sider>
        <Content
          style={{
            background: `${GRAY_100}`,
            borderRadius: 8,
            padding: '32px 16px',
            position: 'relative',
          }}
        >
          {children}
        </Content>
      </Layout>
      <Flex justify='space-between' style={{ padding: '16px 0px' }}>
        <Text style={{ fontSize: 10 }}>My Table. All Rights Reserved. 2024©</Text>
        <Text style={{ fontSize: 10, color: `${GRAY_100}` }}>
          If you need assistance or have any questions, feel free to reach out to our support team at
          <Text style={{ fontSize: 10, color: `${GRAY_300}` }}>help@.mytable.info</Text>
        </Text>
      </Flex>
    </Layout>
  );
};
