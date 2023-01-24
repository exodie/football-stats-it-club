import { FC } from "react";
import { Typography } from "antd";

type Props = {
  title: string;
};

export const Heading: FC<Props> = (props) => (
  <Typography.Title style={{ marginLeft: 16 }}>{props.title}</Typography.Title>
);
