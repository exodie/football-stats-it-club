import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import PrevButton from "../modules/PrevButton.module";

const CompetitionProfile: FC = () => {
    const [data, setData] = useState();
    const { id, tab } = useParams();

    return (
        <><PrevButton />id: {id}, tab: {tab}</>
    )
}

export default CompetitionProfile;