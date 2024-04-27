import { ReactElement } from "react";
import "./styles/InfoListItem.styles.sass";
import { EnterOutlined } from "@ant-design/icons";

interface Props {
	title: string;
	children: ReactElement | ReactElement[];
}

export default function InfoListItem({ title, children }: Props) {
	return (
		<div className="info-list-item">
			<hr />
			<div className="content">
				<h4>
					<EnterOutlined />
					{title}
				</h4>
				<div>{children}</div>
			</div>
		</div>
	);
}
