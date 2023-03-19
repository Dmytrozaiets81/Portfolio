import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
	return (
		<section className="relative h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-end items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 h-40 sm:h-80 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#915EFF]">Juanes</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 max-w-xl text-white`}>
						I develop modern, responsive
						<br className="sm:block hidden" /> and accessible web
						applications
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute bottom-32 xs:bottom-10 w-full flex justify-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	)
}

export default Hero
