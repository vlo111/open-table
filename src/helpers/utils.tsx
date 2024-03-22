import { Modal } from 'antd';
import { AxiosError } from 'axios';
import { CustomError } from 'types';

export const errorMessage = (er: unknown) => {
  Modal.error({
    title: 'Error',
    content: (er as AxiosError<CustomError>).response?.data.errors.message || 'Something happened, please try later',
    footer: false,
    closable: true,
  });
};

export const getAvatarPath = (avatar: string | undefined) =>
  avatar ? (avatar?.includes('gravatar') ? avatar : `${process.env.REACT_APP_AWS_URL}${avatar}`) : undefined;
