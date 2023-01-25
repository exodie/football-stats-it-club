import { FC, ReactNode } from "react";
import { Skeleton, Row, Col, Image } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  subTitle: string;
  avatarUrl: string;
  description: ReactNode;
  children: ReactNode;
};

const DescriptionPage: FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <PageHeader
      ghost={false}
      onBack={() => navigate(-1)}
      title={props.title}
      subTitle={props.subTitle}
      avatar={{ src: props.avatarUrl }}
    >
      <Row justify="space-between">
        <Col flex="1" xs={24} md={24} lg={18} xl={20}>
          {props.description}
        </Col>
        <Col xs={24} md={6} lg={6} xl={4}>
          <Image src={props.avatarUrl} width={100} preview={false} />
        </Col>
      </Row>
      {props.children}
    </PageHeader>
  );
};

export default DescriptionPage;
