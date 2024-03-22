import { Flex } from 'antd';
import styled from 'styled-components';
import { COLORS } from 'helpers/constants';

const { WHITE } = COLORS;

export const AuthContainer = styled(Flex)`
  margin-top: 10px;
  width: 55%;
  height: 88vh;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 4px 22px 0px #7c7c7c40;
  background-color: ${WHITE};
`;
