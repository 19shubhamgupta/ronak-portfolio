import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AlmaLink",
    description:
      "Designed and developed a full-stack alumni management platform to strengthen connections between alumni, students, and institutions. Integrated modules such as job portal, networking hub, donation management, event coordination, and discussion forums to support community engagement.",
    tags: ["Full Stack", "Alumni Platform", "Community"],
    images: ["/alum1.jpeg", "/alum2.jpeg", "/alum3.jpeg", "/alum4.jpeg"],
    viewProject: "https://alma-link-demoo.vercel.app/",
    viewRepo: "https://alma-link-demoo.vercel.app/",
  },
  {
    title: "TriumTrack",
    description:
      "Developed a full-stack web-based appointment booking system for barber shops to digitize queue management and reduce customer waiting time. Implemented core modules including customer booking portal, barber dashboard, live queue tracking, and authentication system.",
    tags: ["Full Stack", "Booking System", "Queue Management"],
    images: ["/trim1.jpeg", "/trim2.jpeg", "/trim3.jpeg", "/trim4.jpeg"],
    viewProject: "https://trim-track-app.vercel.app/",
    viewRepo: "https://trim-track-app.vercel.app/",
  },

  {
    title: "Event Booking System",
    description:
      "Comprehensive event management platform with booking functionality, seat selection, and payment processing. Enables event organizers to manage venues and attendees to discover and book events seamlessly.",
    tags: ["React", "Payment Gateway", "Node.js"],
    images: [
      "/event-booking-1.png",
      "/event-booking-2.png",
      "/event-booking-3.png",
      "/event-booking-6.png",
      "/event-booking-5.png",
    ],
    viewProject: "",
    viewRepo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen pt-10 md:pt-0 flex items-center justify-center px-8 pb-32"
    >
      <div className="flex flex-col items-start w-full gap-8">
        <h2 className="text-4xl font-bold my-text-2">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
