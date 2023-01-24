import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

const PrevButton: FC = () => {
    const navigate = useNavigate();

    return <Button onClick={() => navigate('/')} icon={<ArrowLeftOutlined />} size="large" shape="circle" title="Back" />
}

export default PrevButton;