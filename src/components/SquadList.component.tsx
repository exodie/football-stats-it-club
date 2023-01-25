import { FC } from "react";
import { List, Descriptions } from "antd";

type Props = {
    data: Array<any>,
}

const SquadList: FC<Props> = (props) => {
    return (
        <List dataSource={props.data} renderItem={(item: any) => (
            <List.Item>
                <Descriptions column={2}>
                    <Descriptions.Item label="Name Player">{item.name}</Descriptions.Item>
                    <Descriptions.Item label="Position Player">{item.position}</Descriptions.Item>
                    <Descriptions.Item label="Country Birth Player">{item.countryOfBirth}</Descriptions.Item>
                    <Descriptions.Item label="Date Birth Player">{item.dateOfBirth}</Descriptions.Item>
                    <Descriptions.Item label="National Player">{item.national}</Descriptions.Item>
                    <Descriptions.Item label="Number Player">{item.shortNumber}</Descriptions.Item>
                    <Descriptions.Item label="Role Player">{item.role}</Descriptions.Item>
                </Descriptions>
            </List.Item>
        )} />
    )
}

export default SquadList;