import { Button as ButtonComponent, Flex } from 'antd';
import { FC } from 'react';
import { IButton } from 'types';

export const Button: FC<IButton> = ({ text, leftIcon, rightIcon, shape, ...props }) => {
  return (
    <ButtonComponent shape={shape} {...props}>
      {!shape && (
        <Flex gap={8} align='center' justify='center'>
          {leftIcon} {text} {rightIcon}
        </Flex>
      )}
    </ButtonComponent>
  );
};
