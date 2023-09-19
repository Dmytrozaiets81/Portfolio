import { motion } from "framer-motion"
import Tilt from "react-tilt"

// Custom utils
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full p-px rounded-[20px] shadow-card green-pink-gradient">
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img
						src={icon}
						alt={title}
						className="object-contain w-16 h-16 "
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I'm a skilled software engineer with experience in Typescript
				and Javascript, and expertise in React, Vue, Node. I'm a quick
				learner and I'm always looking for new challenges. Let's work
				together to bring your ideas to life!
			</motion.p>

			<div className="flex flex-wrap gap-10 mt-20">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, "about")
