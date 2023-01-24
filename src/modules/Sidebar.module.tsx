import { FC } from "react";
import { Menu } from "antd";
import { TeamOutlined, AppstoreOutlined } from "@ant-design/icons";

type Props = {
  cb: (e: any) => void;
  selectedTab: string;
};

const Sidebar: FC<Props> = (props) => {
  const dataItems = [
    { key: "competitions", label: "COMPETITIONS", icon: <AppstoreOutlined /> },
    { key: "teams", label: "TEAMS", icon: <TeamOutlined /> },
  ];

  return (
    <Menu
      style={{ textAlign: 'end' }}
      onClick={props.cb}
      selectedKeys={[props.selectedTab]}
      mode="horizontal"
      items={dataItems}
    />
  );
};

export default Sidebar;
