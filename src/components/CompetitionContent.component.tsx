import { Descriptions } from "antd";
import { FC } from "react";

type Props = {
  area: {
    name: string;
  };

  currentSeason: {
    startDate: string;
    endDate: string;
    currentMatchDay: number;
  };
};

const CompetitionContent: FC<Props> = (props) => {
  return (
    <Descriptions column={1}>
      <Descriptions.Item label="Area">{props.area.name}</Descriptions.Item>
      <Descriptions.Item label="Current Season">
        {props.currentSeason.startDate} {"-"} {props.currentSeason.endDate}
      </Descriptions.Item>
      <Descriptions.Item label="Current Match Day">
        {props.currentSeason.currentMatchDay}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default CompetitionContent;
