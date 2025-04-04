import {
	backend,
	hoobank,
	podRequest,
	artGallery,
	urlShorteningApi,
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
		link : "https://drive.google.com/file/d/1um317dYBUHDcEfO_DFunYjAT-ZVlntNq/view?usp=sharing",
		id: "resume",
		title: "Resume",

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
		title: "Senior Full Stack Developer",
		company_name: "Luxoft",
		icon: teleperformance,
		iconBg: "#383E56",
		date: "May 2024 - November 2024",
		points: [
			"Developed and maintained full-stack applications using modern technologies such as React, Node.js, and PostgreSQL.",
			"Implemented RESTful APIs to improve communication between frontend and backend systems.",
			"Optimized application performance, reducing response times by 40% through efficient database queries and caching strategies.",
			"Integrated third-party services and APIs, enhancing the functionality and scalability of web applications.",
			"Worked closely with UI/UX designers to create seamless and visually appealing user experiences."
		],
	},
	{
		title: "Junior Full Stack Developer",
		company_name: "Tashkent",
		icon: endava,
		iconBg: "#383E56",
		date: "February 2024 - April 2024",
		points: [
			"Led a team of developers in designing and implementing robust web applications for high-profile clients.",
			"Architected scalable software solutions, improving performance and reducing technical debt across projects.",
			"Reviewed and optimized code through rigorous testing, achieving a 30% improvement in efficiency.",
			"Mentored junior developers, fostering skill development and knowledge-sharing within the team.",
			"Collaborated with stakeholders to define project requirements and deliver innovative technology solutions."
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Dnipro",
		icon: blancLabs,
		iconBg: "#E6DEDD",
		date: "July 2023 - December 2023",
		points: [
			"Developed and maintained web applications, ensuring functionality and efficiency for internal and external clients.",
			"Wrote clean, scalable, and maintainable code in JavaScript and Python, improving software performance.",
			"Collaborated with backend developers to integrate APIs and optimize system architecture for better data flow.",
			"Performed debugging and troubleshooting to resolve technical issues, reducing system downtime by 25%.",
			"Contributed to software documentation and user guides, enhancing knowledge transfer and onboarding efficiency."
		],
	}
]

const testimonials = [
	{
		testimonial:
			"Kyiv National University of Technologies and Design",

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
		source_code_link: "https://github.com/Dmytrozaiets81/Mentor-Frontend/tree/main/Pod_request_access_landing_page",
		deploy_link: "https://mentor-frontend-pod-request.vercel.app/",
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
		source_code_link:	"https://github.com/Dmytrozaiets81/Mentor-Frontend/tree/main/Art_Gallery_Website",
		deploy_link: "https://mentor-frontend-art.vercel.app/",
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
		source_code_link: "https://github.com/Dmytrozaiets81/bank-web",
		deploy_link: "https://bank-web-ten.vercel.app/",
		//git push origin main
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
		source_code_link: "https://github.com/Dmytrozaiets81/Mentor-Frontend/tree/main/Url_Shortening_Api_Landing_Page",
		deploy_link: "https://mentor-frontend-url.vercel.app/",
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
		source_code_link:"https://github.com/Dmytrozaiets81/Mentor-Frontend/tree/main/Multi_Step_Form",
		deploy_link: "https://mentor-frontend-multi-step.vercel.app/",
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
		source_code_link: "https://github.com/Dmytrozaiets81/Mentor-Frontend/tree/main/Social_Media_Dashboard_with_Theme_Switcher",
		deploy_link: "https://mentor-frontend-social-media.vercel.app/",
	},
]

export { services, technologies, experiences, testimonials, projects }
