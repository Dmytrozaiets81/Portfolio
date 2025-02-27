import { motion } from "framer-motion"
import Tilt from "react-tilt"

// Custom utils
import { styles } from "../styles"

import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { resume } from "../constants"

const Resume = ({ source_code_link }) => {
	return (
		<>
			<div className="resume" id = "resume" onClick={
                () => {
                    window.open(source_code_link, "_blank")
                }
            }></div>
		</>
	)
}

export default SectionWrapper(Resume, "resume")
