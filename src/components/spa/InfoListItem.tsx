import { ReactElement } from "react";
import { EnterOutlined } from "@ant-design/icons";

interface Props {
	title: string;
	children: ReactElement | ReactElement[];
}

export default function InfoListItem({ title, children }: Props) {
	return (
		<div className="font-light [&_p]:m-0 [&_p]:leading-[30px]">
			<hr className="my-[5%]" />
			<div className="grid grid-cols-[1fr_2fr] max-[1000px]:flex max-[1000px]:flex-col">
				<h4 className="font-light text-charcoal [&_svg]:mr-1.5 [&_svg]:-scale-x-100">
					<EnterOutlined />
					{title}
				</h4>
				<div>{children}</div>
			</div>
		</div>
	);
}
