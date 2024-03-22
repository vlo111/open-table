import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, SCREEN_SIZE } from 'helpers/constants';

const { Text: TextComponent } = Typography;

export const textSizeMedia = css`
  @media (max-width: ${SCREEN_SIZE.xxl}) {
    font-size: 15px;
    line-height: 1.3;
  }
`;

export const textStyles = css`
  font-weight: 400;
  ${textSizeMedia}
`;

type TextStyleProps = TextProps & {
  color?: string;
};

export const Text = styled(
  forwardRef<HTMLSpanElement, TextStyleProps>(({ color, ...props }, ref) => <TextComponent {...props} ref={ref} />),
)`
  && {
    ${textStyles};
    color: ${(props) => props.color || COLORS.GRAY};
  }
`;

export const SecondaryText = styled(({ color, ...props }) => <Text type='secondary' {...props} />)`
  && {
    font-size: 13px;
    line-height: 20px;
    color: ${(props) => props.color || COLORS.GRAY_200};

    @media (max-width: ${SCREEN_SIZE.xxl}) {
      font-size: 12px;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`;
