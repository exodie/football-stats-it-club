import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCompetitionAPI, useTeamAPI } from "../api";
import { Heading } from "../modules/Heading.module";
import Sidebar from "../modules/Sidebar.module";
import CardListView from "./CardListView.component";

type TabProps = "competitions" | "teams";

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

const CardList: FC = () => {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<TabProps>("competitions");
  const [heading, setHeading] = useState<string>("Competitions");
  const [data, setData] = useState<Array<any>>([]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (status === false) {
      switch (currentTab) {
        case "competitions":
          useCompetitionAPI.getList().then((res) => {
            res.data.competitions.map((item: any) => {
              const data = [
                {
                  code: item.code,
                  emblemUrl: item.emblemUrl,
                  id: item.id,
                  name: item.name,
                  area: {
                    id: item.area?.id,
                    countryCode: item.area?.countryCode,
                    ensignUrl: item.area?.ensignUrl,
                    name: item.area?.name,
                  },
                },
              ];

              setData((cur) => [...cur, ...data]);
              setStatus(true);
            });
          });
          break;

        default:
          break;
      }
    }
  }, [currentTab, status]);

  const handleChangeTabs = ({ key }: any): void => {
    switch (key) {
      case "competitions":
        navigate("/");
        setCurrentTab("competitions");
        setHeading("Competitions");
        break;

      case "teams":
        navigate("/teams");
        setCurrentTab("teams");
        setHeading("Teams");
        break;

      default:
        break;
    }
  };

  const handleClick = (code: any) => {
    navigate(`/${currentTab}/${code}`);
    console.log(`/${currentTab.slice(0, -1)}/${code}`);
  };

  return (
    <>
      <Heading title={heading} />
      <Sidebar cb={handleChangeTabs} selectedTab={currentTab} />
      <CardListView data={data} tab={currentTab} cb={handleClick} />
    </>
  );
};

export default CardList;
