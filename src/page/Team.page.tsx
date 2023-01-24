// lib
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// design
import { Button, Menu } from "antd";

// api
import { useTeamAPI } from "../api";
import { Heading } from "../modules/Heading.module";

type DataItemProps = {
  name: string;
  shortName: string;
  crestUrl: string;
  tla: string;
  address: string;
  phone: string;
  email?: string;
  founded: number;
  venue: string;
};

type ActiveCompetitions = {
  length: number;
  name: string;
  code: string;
};

type SquadProps = {
  length: number;
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  national: string;
  shortNumber: null | number;
  role: string;
};

type TabProps = "competitions" | "squad";

const TeamProfile: FC = () => {
  const { id } = useParams();

  const [status, setStatus] = useState<{
    competitions: boolean;
    squad: boolean;
  }>({
    competitions: false,
    squad: false,
  });
  const [data, setData] = useState<DataItemProps>();
  const [competitions, setCompetitions] = useState<ActiveCompetitions>();
  const [squad, setSquad] = useState<Array<SquadProps>>([]);
  const [currentTab, setCurrentTab] = useState<TabProps>("competitions");

  useEffect(() => {
    if (status.competitions === false) {
      useTeamAPI.get(id!).then((res) => {
        setData({
          ...data,
          name: res.data.name,
          shortName: res.data.shortName,
          crestUrl: res.data.crestUrl,
          tla: res.data.tla,
          address: res.data.address,
          phone: res.data.phone,
          email: res.data.email || "None email",
          founded: res.data.founded,
          venue: res.data.venue,
        });

        const activeComp = res.data.activeCompetitions;

        setCompetitions({
          ...competitions,
          length: activeComp.length,
          name: activeComp.name,
          code: activeComp.code,
        });
      });
    }

    if (data?.name !== undefined) {
      setStatus({ ...status, competitions: true });
    }
  }, [status.competitions, data, id, competitions]);

  useEffect(() => {
    if (status.squad === false) {
      useTeamAPI.get(id!).then((res) => {
        res.data.squad.map((item: any) => {
          setSquad((cur) => [...cur, {
            ...squad,
            length: res.data.squad.length,
            id: item.id,
            name: item.name,
            position: item.position,
            dateOfBirth: item.dateOfBirth,
            countryOfBirth: item.countryOfBirth,
            national: item.nationality,
            shortNumber: item.shortNumber,
            role: item.role,
          }]);
        });

        setStatus({ ...status, squad: true });
      });
    }
  }, [status.squad, squad, id]);

  const handleChangeTabs = ({ key }: any): void => {
    switch (key) {
      case "competitions":
        setCurrentTab("competitions");
        break;

      case "squad":
        setCurrentTab("squad");
        break;

      default:
        break;
    }
  };

  return (
    <>
      {data?.name === undefined ? "" : <Heading title={data.name} />}
      <Menu
        mode="horizontal"
        selectedKeys={[currentTab]}
        items={[
          {
            key: "competitions",
            label: `Active competitions: ${
              competitions?.length === undefined ? 0 : competitions.length
            }`,
          },
          {
            key: "squad",
            label: `Squad: `,
          },
        ]}
        onClick={handleChangeTabs}
      />
      tab: {currentTab}
    </>
  );
};

export default TeamProfile;
