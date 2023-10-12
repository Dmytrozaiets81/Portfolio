import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"

// Custom utils
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{
				borderRight: "7px solid #1d1836",
			}}
			date={experience.date}
			iconStyle={{
				background: experience.iconBg,
			}}
			icon={
				<div className="flex items-center justify-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="object-contain w-3/5 h-3/5"
					/>
				</div>
			}>
			<div>
				<h3 className="text-2xl font-bold text-white">
					{experience.title}
				</h3>
				<p
					className="text-6xl font-semibold text-secondary"
					style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 ml-5 space-y-2 list-disc">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-[14px] text-white-100 pl-1 tracking-wider">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>
			<div className="flex flex-col mt-20">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}></ExperienceCard>
					))}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default SectionWrapper(Experience, "experience")
