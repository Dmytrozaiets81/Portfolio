import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import Tilt from "react-tilt"

// Custom utils
import { github } from "../assets"
import { projects } from "../constants"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			className="">
			<Tilt
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
				options={{ max: 45, scale: 1, speed: 450 }}>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="object-cover w-full h-full cursor-pointer rounded-2xl"
						onClick={() => {
							window.open(deploy_link, "_blank")
						}}
					/>
					<div className="absolute top-0 right-0 flex justify-end m-3 card-img_hover">
						<div
							className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
							onClick={() => {
								window.open(source_code_link, "_blank")
							}}>
							<img
								src={github}
								alt={github}
								className="object-contain w-1/2 h-1/2"
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-2xl font-bold">{name}</h3>
					<p className="mt-2 text-sm leading-normal text-secondary">
						{description}
					</p>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{tags.map(tag => (
						<p
							className={`text-sm ${tag.color} capitalize`}
							key={tag.name}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	)
}

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<div className="flex w-full">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage
					projects effectively.
				</motion.p>
			</div>

			<div className="flex flex-wrap mt-20 gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Works, "projects")
