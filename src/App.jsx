import { Link } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

// Custom utils
import {
	About,
	Contact,
	Education,
	Experience,
	Resume,
	// Feedbacks,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from "./components"
// import Resume from "./components/Resume"

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Resume />
				<Tech />
				<Education />
				<Works />
				{/* <Feedbacks /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
