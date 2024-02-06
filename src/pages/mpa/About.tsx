import "./About.styles.sass";
import somtoImage from "../../assets/somto.png";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { motion } from "framer-motion";

export default function About() {
	return (
		<AnimatedPage id="about">
			<h1>Who is Francis Somtochukwu?</h1>
			<p>
				Lorem ipsum dolors sit amet, cons ectetur adipisci elit, sed do eiusmod
				tempor inc ididunt ut labores et dolore ercit ati on ull amco laboris
				nisi ut aliqui. Dui aute irur tu dolo end erit in volup tate velit ese
				cilu ei dolore eu fugiat. Eam et lucilius delicat. At fabulas inimicus
				cum, per quise an. Id per ferri rum mediocrem, mea ne graeci dolorem
				vituperata, habeo ullum disputando an sit. Veritus um no qui, at usu
				quod at inimicuse psum dolor si dicam labore. Meas iusto oporter and.
				Ius vitae parte repudi andae, sed an harum simul interpretaris. Cu vix
				bore euis modus dolorum. Has nore ame dolor, pro reque.
			</p>
			<div id="social-links">
				<a
					href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
					target="_blank"
				>
					LINKEDIN
				</a>
				<a href="https://twitter.com/somtofrancis3" target="_blank">
					X/TWITTER
				</a>
				<a href="https://github.com/SomtoJF" target="_blank">
					GITHUB
				</a>
			</div>
			<motion.figure
				initial={{ height: 0 }}
				animate={{
					height: "50vh",
					transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
				}}
			>
				<img src={somtoImage} alt="picture of somtochukwu francis" />
			</motion.figure>
		</AnimatedPage>
	);
}
