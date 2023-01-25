import { FC } from "react";
import { Descriptions, Row, Col } from "antd";

type Props = {
  item: {
    shortName: string;
    area: {
      name: string;
    };
    address: string;
    founded: number;
    venue: string;
    website: string;
    phone: string;
    email: string;
  };
};

const TeamContent: FC<Props> = (props) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <Descriptions column={1} title="Information">
          <Descriptions.Item label="Short Name">
            {props.item.shortName}
          </Descriptions.Item>
          <Descriptions.Item label="Area">
            {props.item.area.name}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {props.item.address}
          </Descriptions.Item>
          <Descriptions.Item label="Was founded">
            {props.item.founded}
          </Descriptions.Item>
          <Descriptions.Item label="Venue">{props.item.venue}</Descriptions.Item>
        </Descriptions>
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <Descriptions column={1} title="Contacts Information">
          <Descriptions.Item label="Website">
            {props.item.website}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{props.item.phone}</Descriptions.Item>
          <Descriptions.Item label="Email">{props.item.email}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default TeamContent;
