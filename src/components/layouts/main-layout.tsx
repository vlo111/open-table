import { Col, Flex, Layout, Row, Space } from 'antd';
import { FC } from 'react';
import { COLORS } from 'helpers/constants';
import { IMainLayout } from 'types/layout';
import { Button } from 'components/button';
import { Text, SecondaryText } from 'components/typhography/text';

import { Logo } from '../logo';

const { Header } = Layout;
const { BG } = COLORS;

const fullHeight = { height: '100%' };

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <Layout style={{ background: BG, padding: '0 3rem' }}>
      <Header style={{ height: '7.5rem', margin: '24px 0 8px' }}>
        <Row style={{ ...fullHeight }}>
          <Col span={4}>
            <Flex vertical justify='space-between' style={{ ...fullHeight }}>
              <Logo />
              <SecondaryText style={{ fontSize: '16px' }}>Home</SecondaryText>
            </Flex>
          </Col>
          <Col offset={14} span={6}>
            <Flex justify='space-between' style={{ ...fullHeight }}>
              <Button type='primary' text={'Login'} />
              <Button type='default' text={'Register'} />
              <SecondaryText style={{ fontSize: '16px' }}>Home</SecondaryText>
            </Flex>
          </Col>
        </Row>
      </Header>
      <Space style={{ height: 'calc(100vh - 12.5rem)' }}>{children}</Space>
      <Flex justify='space-between' style={{ padding: '16px 0px' }}>
        <Text style={{ fontSize: 10 }}>My Table. All Rights Reserved. 2024©</Text>
        <Text style={{ fontSize: 10, color: `${COLORS.GRAY_100}` }}>
          If you need assistance or have any questions, feel free to reach out to our support team at
          <Text style={{ fontSize: 10, color: `${COLORS.GRAY_300}` }}>help@.mytable.info</Text>
        </Text>
      </Flex>
    </Layout>
  );
};
