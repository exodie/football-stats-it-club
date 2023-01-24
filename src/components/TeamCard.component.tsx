import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, Card } from "antd";
import { useTeamAPI } from "../api";

type Props = {
  id: number;
  area: {
    name: string;
  };
  name: string;
  crestUrl: string;
};

const TeamCard: FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Array<Props>>([]);

  useEffect(() => {
    useTeamAPI.getList().then((res) => {
      res.data.teams.map((item: any) => {
        const data = [
          {
            id: item.id,
            area: {
              name: item.area?.name,
            },
            name: item.name,
            crestUrl: item.crestUrl,
          },
        ];

        return setData((cur) => [...cur, ...data]);
      });
    });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          onClick={() => navigate(`/teams/${item.id}`)}
          hoverable
          bordered={false}
        >
          <Card.Meta
            key={index}
            avatar={<Avatar src={item.crestUrl} size={64} />}
            title={item.name?.toUpperCase()}
            description={item.area?.name}
          />
          ID: {item.id}
        </Card>
      ))}
    </>
  );
};

export default TeamCard;
