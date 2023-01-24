import { Avatar, Card } from "antd";
import { FC } from "react";

type Props = {
  item: any;
  callback: (code: any) => void;
};

const CompetitionCard: FC<Props> = (props) => {
  return (
    <Card
      onClick={() => props.callback(props.item.code)}
      hoverable
      bordered={false}
    >
      <Card.Meta
        avatar={<Avatar src={props.item.emblemUrl} size={64} />}
        title={props.item.name?.toUpperCase()}
        description={props.item.area?.name}
      />
    </Card>
  );
};

export default CompetitionCard;
