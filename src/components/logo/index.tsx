import { PATHS } from 'helpers/constants';
import { useNavigate } from 'react-router-dom';
import MyTable from 'assets/logo.svg';
import { Space } from 'antd';

type Props = {
  margin?: string;
};

export const Logo = ({ margin }: Props) => {
  const navigate = useNavigate();

  return (
    <Space style={{ cursor: 'pointer', ...(margin ? { margin } : {}) }} onClick={() => navigate(PATHS.ROOT)}>
      <MyTable />
    </Space>
  );
};
