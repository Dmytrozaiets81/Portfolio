import {
	backend,
	hoobank,
	podRequest,
	artGallery,
	rockPaperScissors,
	urlShorteningApi,
	endavaMarketplace,
	multiStepForm,
	socialMediaDashboard,
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
		id: "experience",
		title: "Experience",
	},
	{
		id: "education",
		title: "Education",
	},
	{
		id: "projects",
		title: "Projects",
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
		title: "Front-End Developer",
		company_name: "ECiklum",
		icon: endava,
		iconBg: "#383E56",
		date: "September 2022 - December 2023",
		points: [
			"Designed and implemented interactive and user-friendly web interfaces for various clients, enhancing user engagement and satisfaction.",
			"Collaborated with UI/UX designers to translate wireframes and prototypes into functional code, ensuring a consistent visual and experiential output.",
			"Optimized applications for maximum speed and scalability, leading to a 30% reduction in load times.",
			"Conducted thorough testing and debugging of applications, effectively identifying and resolving issues to improve overall performance and reliability.",
			"Contributed to code reviews and team meetings, fostering an environment of knowledge exchange and continuous improvement.",
		],
	},
	{
		title: "Data Analyst",
		company_name: "Data Insights Corp",
		icon: blancLabs,
		iconBg: "#E6DEDD",
		date: "July 2023 - January 2024",
		points: [
			"Analyzed large datasets to identify trends, patterns, and actionable insights, informing business strategies for diverse clients in the retail sector.",
			"Created interactive dashboards and visualizations using Tableau to present findings to stakeholders, enhancing data-driven decision-making processes.",
			"Collaborated with cross-functional teams to define project goals and deliverables while ensuring alignment with overall business objectives.",
			"Documented analytical processes and findings, contributing to the knowledge base for future projects and team members.",
		],
	},
	{
		title: "Campaign Coordinator",
		company_name: "Creative Media Agency",
		icon: teleperformance,
		iconBg: "#383E56",
		date: "May 2023 - Present",
		points: [
			"Coordinated and executed multi-channel marketing campaigns for clients, implementing strategies across social media, email, and content marketing to enhance brand visibility.",
			"Conducted market research and competitive analysis to inform campaign strategies, resulting in a 40% increase in client engagement metrics.",
			"Supported the development of marketing materials, such as blog posts, advertisements, and newsletters, to effectively communicate brand messaging.",
			"Monitored and reported on campaign performance metrics, providing insights and recommendations for ongoing optimization and improvement.",
			"Collaborated with the creative team to ensure brand consistency and effective messaging across all marketing platforms.",
		],
	},
]

const testimonials = [
	{
		testimonial:
			"Kyiv National University of Technologies and Design",
		// designation: "CFO",
		company: "Bachelor of Computer Science (BCompSc), Computer science",
		// image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"Udemy - IT & Software Courses",
		name: "Chris Brown",
		// designation: "COO",
		company: "Computer engineering",
		// image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Sigmund Freud University",
		name: "Lisa Wang",
		// designation: "CTO",
		company: "Science & Technology",
		// image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
]

const projects = [
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
		// source_code_link:
		// deploy_link: "https://fem-pod-request-access.netlify.app/",
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
		// source_code_link:
		// 	"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Art%20Gallery%20Website",
		// deploy_link: "https://fem-art-gallery-website.netlify.app/",
	},
	{
		name: "HooBank",
		description:
			"Online banking hub for secure, easy financial management.",
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
		// source_code_link: "https://github.com/Juanescacha/Bank-Modern-UI",
		// deploy_link: "https://juanes-bank-modern.vercel.app/",
	},
	// {
	// 	name: "Rock Paper Scissors",
	// 	description:
	// 		"Ready for a classic game? Play Rock, Paper, Scissors online now!",
	// 	tags: [
	// 		{
	// 			name: "vue",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: rockPaperScissors,
	// 	// source_code_link:
	// 		// "https://github.com/Juanescacha/Frontend-Mentor/tree/main/Rock%20Paper%20Scissors%20Game",
	// 	// deploy_link: "https://fem-rock-paper-scissors-game.netlify.app/",
	// },
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
		// source_code_link:
		// 	"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Url%20Shortening%20Api%20Landing%20Page",
		// deploy_link: "https://fem-url-shortening-api-landing-page.netlify.app/",
	},
	{
		name: "Multi Step Form",
		description:
			"A bill payment multi-step form with validation and progress bar.",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "sass",
				color: "pink-text-gradient",
			},
			{
				name: "pinia",
				color: "orange-text-gradient",
			},
			{
				name: "bem",
				color: "blue-text-gradient",
			},
		],
		image: multiStepForm,
		// source_code_link:
		// 	"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Multi%20Step%20Form",
		// deploy_link: "https://fem-multistep-form-juanes.netlify.app/",
	},
	{
		name: "Social Media Dashboard",
		description:
			"A dashboard to track your social media stats and performance.",
		tags: [
			{
				name: "vue",
				color: "green-text-gradient",
			},
			{
				name: "sass",
				color: "pink-text-gradient",
			},
			{
				name: "bem",
				color: "blue-text-gradient",
			},
		],
		image: socialMediaDashboard,
		// source_code_link:
		// 	"https://github.com/Juanescacha/Frontend-Mentor/tree/main/Social%20Media%20Dashboard%20with%20Theme%20Switcher",
		// deploy_link: "https://fem-socialmedia-dashboard.netlify.app/",
	},
]

export { services, technologies, experiences, testimonials, projects }
