import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"

// Custom utils
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const EducationCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => {
	return (
		<motion.div
			className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
			variants={fadeIn("", "spring", index * 0.5, 0.75)}>
			<p className="text-5xl font-black text-white">"</p>
			<div className="mt-1">
				<p className="text-lg tracking-wider text-white">
					{testimonial}
				</p>
				<div className="flex items-center justify-between gap-1 mt-7">
					<div className="flex flex-col flex-1">
						<p className="mt-1 text-xs text-secondary">
							{company}
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const Education = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<h2 className={`${styles.sectionHeadText}`}>
						Education.
					</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<EducationCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	)
}

export default SectionWrapper(Education, "education")
