import {
	backend,
	hoobank,
	podRequest,
	artGallery,
	rockPaperScissors,
	urlShorteningApi,
	endavaMarketplace,
	creator,
	css,
	docker,
	figma,
	git,
	html,
	javascript,
	mobile,
	mongodb,
	nodejs,
	reactjs,
	redux,
	teleperformance,
	endava,
	tailwind,
	blancLabs,
	threejs,
	typescript,
	web,
} from "../assets"

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

const services = [
	{
		title: "Software Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Mobile Developer",
		icon: creator,
	},
]

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
]

const experiences = [
	{
		title: "Developer Intern",
		company_name: "Endava",
		icon: endava,
		iconBg: "#383E56",
		date: "July 2023 - January 2024",
		points: [
			"Contributed to the design and development of responsive web applications, ensuring a seamless user experience across various devices and screen sizes.",
			"Collaborated closely with other developers to implement both front-end (UI) and back-end (API) functionalities, ensuring seamless integration.",
			"Engaged in concurrent coding challenges in study groups and delivered presentations, fostering collaborative problem-solving skills in a team environment.",
			"Maintained an iterative approach to development, regularly incorporating feedback and updates into ongoing projects.",
			"Took ownership of assigned tasks and delivered solutions independently, showcasing problem-solving abilities.",
		],
	},
	{
		title: "Associate",
		company_name: "Blanc Labs",
		icon: blancLabs,
		iconBg: "#E6DEDD",
		date: "May 2023 - Present",
		points: [
			"Collaborated with cross-functional teams in the financial and healthcare sectors to accelerate digital transformation initiatives for companies in the United States and Canada.",
			"Participated in multidisciplinary knowledge-sharing sessions and learning groups to address the challenges of digital transformation.",
			"Explored practical technology solutions to resolve digital transformation challenges.",
			"Gained insights into the intersection of technology and practical problem-solving in the business context.",
		],
	},
	{
		title: "Customer Service Associate",
		company_name: "Teleperformance",
		icon: teleperformance,
		iconBg: "#383E56",
		date: "September 2022 - December 2023",
		points: [
			"Developed multitasking skills by efficiently managing multiple tasks concurrently to address customer inquiries and concerns.",
			"Utilized effective interrogation strategies to identify and understand customer situations, ensuring personalized support.",
			"Leveraged tools and systems to identify and implement appropriate solutions to customer issues.",
			"Demonstrated independence and problem-solving skills by autonomously resolving customer problems.",
			"Prioritized quick and effective actions to deliver high-quality solutions and maintain excellent customer service.",
		],
	},
]

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Juan proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Juan does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Juan optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
]

const projects = [
	{
		name: "HooBank",
		description:
			"Online banking hub for secure, easy financial management. Join us now!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: hoobank,
		source_code_link: "https://github.com/Juanescacha/Bank-Modern-UI",
		deploy_link: "https://juanes-bank-modern.vercel.app/",
	},
	{
		name: "Pod Request Access",
		description:
			"Unlock your podcast potential with our easy sign-up landing page. Get started today!",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: podRequest,
		source_code_link:
			"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Pod%20request%20access%20landing%20page",
		deploy_link:
			"https://fem-pod-request-access-landing-page-juanescacha.vercel.app/",
	},
	{
		name: "Art Gallery",
		description:
			"Discover art's beauty at our exclusive gallery event. RSVP now!",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: artGallery,
		source_code_link:
			"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Art%20Gallery%20Website",
		deploy_link: "https://fem-art-gallery-website-juanescacha.vercel.app/",
	},
	{
		name: "Rock Paper Scissors",
		description:
			"Ready for a classic game? Play Rock, Paper, Scissors online now!",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: rockPaperScissors,
		source_code_link:
			"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Rock%20Paper%20Scissors%20Game",
		deploy_link:
			"https://fem-rock-paper-scissors-game-juanescacha.vercel.app/",
	},
	{
		name: "Url Shortening Api",
		description:
			"Shorten your links and track how many times they've been clicked.",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: urlShorteningApi,
		source_code_link:
			"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Url%20Shortening%20Api%20Landing%20Page",
		deploy_link: "https://fem-url-shortening-api-landing-page.netlify.app/",
	},
	{
		name: "Endava Marketplace",
		description: "Endavan's internal marketplace to share and trade items.",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "Spring",
				color: "green-text-gradient",
			},
			{
				name: "postgreSQL",
				color: "blue-text-gradient",
			},
		],
		image: endavaMarketplace,
		source_code_link: "https://github.com/Juanescacha/endava-marketplace",
		deploy_link: "https://endava-marketplace.vercel.app/",
	},
]

export { services, technologies, experiences, testimonials, projects }
