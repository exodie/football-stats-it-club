import { FC } from "react";
import { Tabs } from "antd";

type Props = {
    activeTab: string,
    
}

const TabView: FC<Props> = (props) => {
    return (
        <Tabs activeKey={props.activeTab} >
            {}
        </Tabs>
    )
}

export default TabView;