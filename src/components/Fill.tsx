import { Type } from "../core-types";
import * as React from "react";
import { Space } from "./Space";
import { commonProps, IReactSpaceProps } from "../core-react";

export const Fill: React.FC<IReactSpaceProps> = (props) => (
	<Space {...props} type={Type.Fill} position={{ left: 0, top: 0, right: 0, bottom: 0 }}>
		{props.children}
	</Space>
);

Fill.propTypes = commonProps;
