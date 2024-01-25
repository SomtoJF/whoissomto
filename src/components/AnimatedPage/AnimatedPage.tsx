import { motion } from "framer-motion";
import { ReactElement } from "react";
import "./AnimatedPage.styles.sass";

interface Props {
	children: ReactElement[] | ReactElement;
	className?: string;
	id: string;
}

export default function AnimatedPage({ className, id, children }: Props) {
	return (
		<div className="inner">
			<motion.div
				className="slide"
				initial={{ top: "100vh" }}
				exit={{ top: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
				animate={{ top: "100vh" }}
			/>
			<motion.div
				initial={{ y: 0, scale: 1, opacity: 1 }}
				exit={{
					y: -100,
					scale: 0.9,
					opacity: 0.5,
					transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
				}}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				className="perspective"
			>
				<motion.div
					initial={{ opacity: 0 }}
					exit={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					className={className}
					id={id}
				>
					{children}
				</motion.div>
			</motion.div>
		</div>
	);
}
