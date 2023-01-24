import { FC } from "react";

import { List, Skeleton } from "antd";
import CompetitionCard from "./CompetitionCard.component";
import TeamCard from "./TeamCard.component";

type DataProps = {
  area: {
    id: number;
    countryCode: string;
    ensignUrl: string;
    name: string;
  };
  code: string;
  emblemUrl: string;
  id: number;
  name: string;
};

type Props = {
  data: Array<DataProps>;
  tab: "competitions" | "teams";
  cb: (code: any) => void;
};

const CardListView: FC<Props> = (props) => {
  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 3, xxl: 4 }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item style={{ minWidth: 300 }}>
          <Skeleton
            active
            title
            round
            paragraph={{ rows: 1, style: { marginTop: 24 } }}
            loading={false}
          >
            {props.tab === "competitions" && (
              <CompetitionCard item={item} callback={props.cb} />
            )}
            {props.tab === "teams" && <TeamCard />}
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default CardListView;
