// lib
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// design
import { Button, Menu } from "antd";

// api
import { useTeamAPI } from "../api";
import PrevButton from "../modules/PrevButton.module";
import DescriptionPage from "../components/DescriptionPage.component";
import CompetitionContent from "../components/CompetitionContent.component";
import TeamContent from "../components/TeamContent.component";
import CompetitionList from "../components/CompetitionList.component";
import SquadList from "../components/SquadList.component";

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

type InformationClub = {
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
  const navigate = useNavigate();

  const [status, setStatus] = useState<{
    competitions: boolean;
    squad: boolean;
    data: boolean;
    team: boolean;
  }>({
    competitions: false,
    squad: false,
    data: false,
    team: false,
  });
  const [data, setData] = useState<DataItemProps>();
  const [teamInfo, setTeamInfo] = useState<InformationClub>();
  const [competitions, setCompetitions] = useState<Array<ActiveCompetitions>>(
    []
  );
  const [squad, setSquad] = useState<Array<SquadProps>>([]);
  const [currentTab, setCurrentTab] = useState<TabProps>("competitions");

  useEffect(() => {
    if (status.data === false && status.team === false) {
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

        setTeamInfo({
          ...teamInfo,
          shortName: res.data.shortName,
          area: {
            name: res.data.area?.name,
          },
          address: res.data.address,
          founded: res.data.founded,
          venue: res.data.venue,
          website: res.data.website,
          phone: res.data.phone,
          email: res.data.email,
        });
      });
    }

    if (data?.name !== undefined && teamInfo?.shortName !== undefined) {
      return setStatus({ ...status, data: true, team: true });
    }
  }, [status.data, status.team, data, teamInfo, id]);

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

  const renderSquad = () => {
    if (status.squad === false) {
      useTeamAPI.get(id!).then((res) => {
        res.data.squad.map((item: any) => {
          return setSquad((cur) => [
            ...cur,
            {
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
            },
          ]);
        });

        res.data.activeCompetitions.map((item: any) => {
          return setCompetitions((cur) => [
            ...cur,
            {
              ...competitions,
              length: item.length,
              name: item.name,
              code: item.code,
            },
          ]);
        });
      });
    }

    if (squad.length && competitions.length) {
      setStatus({ ...status, squad: true, competitions: true });
    }
  };

  const showItem = (item: { plan: string; code: any }) => {
    if (currentTab !== "competitions") return;
    navigate(`../competitions/${item.code}`);
  };

  return (
    <>
      <Button
        type="primary"
        shape="round"
        style={{ marginLeft: 15 }}
        onClick={renderSquad}
      >
        Render Data
      </Button>
      <DescriptionPage
        title={data?.name === undefined ? "" : data.name}
        subTitle={data?.shortName === undefined ? "" : data.shortName}
        avatarUrl={data?.crestUrl === undefined ? "" : data.crestUrl}
        description={
          <TeamContent
            item={{
              shortName: teamInfo?.shortName || "",
              area: {
                name: teamInfo?.area.name || "",
              },
              address: teamInfo?.address || "",
              founded: teamInfo?.founded || 0,
              venue: teamInfo?.venue || "",
              website: teamInfo?.website || "",
              phone: teamInfo?.phone || "",
              email: teamInfo?.email || "",
            }}
          />
        }
      >
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
              label: `Squad: ${squad.length}`,
            },
          ]}
          onClick={handleChangeTabs}
        />
        {currentTab === "competitions" ? (
          <>
            {competitions.map((item, index) => (
              <CompetitionList key={index} data={[item]} cb={showItem} />
            ))}
          </>
        ) : (
          <>
            {squad.map((item, index) => (
              <SquadList key={index} data={[item]} />
            ))}
          </>
        )}
      </DescriptionPage>
    </>
  );
};

export default TeamProfile;
