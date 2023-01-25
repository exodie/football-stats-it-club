import { FC } from "react";
import { List, Typography } from "antd";

type Props = {
    data: Array<any>,
    cb: (item: { plan: string, code: any }) => void;
}

const CompetitionList: FC<Props> = (props) => {
    return <List dataSource={props.data} renderItem={(item: any) => (
        <List.Item>
            <List.Item.Meta title={<a href={`../competitions/${item.code}`} onClick={(e) => {
                e.preventDefault();
                props.cb(item);
            }}>{item.name}</a>} description={item.code} />
            <Typography.Text strong>{item.area?.name}</Typography.Text>
        </List.Item>
    )} />
}

export default CompetitionList;