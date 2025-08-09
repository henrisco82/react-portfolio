import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import profileImage from '../assets/profile.jpg';
import { useDownloadResume } from '../hooks/useDownloadResume';

const Resume = () => {
    const { mutate: downloadResume, isPending } = useDownloadResume();

    const experiences = [
        {
            title: "Data Engineer",
            company: "Dell Technologies",
            period: "Jun 2024 - Present",
            description: "Modernized a legacy application by migrating from jQuery to a scalable React frontend using Material UI. Refactored the backend from Node.js to FastAPI with a modular architecture. Integrated PostgreSQL and Greenplum via SQLAlchemy. Improved maintainability, performance, and cross-team collaboration."
        },
        {
            title: "Software Engineer",
            company: "Deutsche Telekom Cloud Services",
            period: "Jan 2023 - May 2024",
            description: "Built a full-stack cloud portal using React, Node.js, and MongoDB. Implemented authentication with Keycloak and authorization via Open Policy Agent. Containerized applications with Docker and deployed via Kubernetes. Focused on security, scalability, and smooth user experience."
        },
        {
            title: "Software Engineer (Data Engineering Focus)",
            company: "Thermo Fisher Scientific",
            period: "Aug 2022 - Dec 2022",
            description: "Designed and deployed data pipelines using Apache NiFi, Kubernetes, and Helm. Integrated big data workflows into the LUNA microservices platform. Collaborated cross-functionally to deliver reliable and scalable data systems."
        },
        {
            title: "Full Stack Developer",
            company: "IBM",
            period: "May 2021 - Jul 2022",
            description: "Migrated a legacy Java-based Eclipse system to a modern cloud-native web application using Angular, Spring Boot, and MongoDB. Built microservices and automated deployments with Docker and IBM’s Cirrus platform."
        },
        {
            title: "Software Developer",
            company: "ExxonMobil",
            period: "Mar 2019 - Apr 2021",
            description: "Developed enterprise apps using .NET and MS SQL Server. Automated CI/CD using Azure DevOps and managed deployments to IIS. Designed B2B integration systems with Mulesoft (Anypoint Studio) and supported Linux-based automation systems."
        },
        {
            title: "Junior Software Developer",
            company: "FrontEndART Software Ltd.",
            period: "Jul 2018 - Jan 2019",
            description: "Assisted in development, testing, and maintenance of internal applications. Focused on improving code quality, performance, and delivery pipelines."
        }
    ];


    const education = [
        {
            degree: "Master of Science in Computer Science",
            school: "University of Szeged",
            period: "2016 - 2018",
            description: "Stipendium Hungaricum scholarship recipient. Specialized in software engineering. Completed thesis on A FHIR based fullstack questionnaire management system for telemedicine."
        },
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            period: "2009 - 2013",
            description: "Specialized in software engineering and web development. Completed thesis on a result processing management system."
        }
    ];

    const skills = {
        frontend: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
        backend: ["Node.js", "Python", "Fast API", "Java", "Spring Boot", "REST APIs", "GraphQL"],
        database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        tools: ["Git", "Docker", "AWS", "GCP", "Azure", "Kubernetes", "CI/CD", "Agile/Scrum"]
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Resume Header */}
            <section className="bg-primary text-primary-foreground py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img
                            src={profileImage}
                            alt="Henry Unah"
                            className="w-32 h-32 rounded-lg object-cover"
                        />

                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">Henry Unah</h1>
                            <p className="text-xl mb-4">Software Engineer | Data Engineer | Cloud Enthusiast</p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} />
                                    <span>henry.unah@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={16} />
                                    <span>+421911372223</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    <span>Bratislava, Slovakia</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            variant="secondary"
                            size="lg" className="font-semibold"
                            onClick={() => downloadResume()}
                            disabled={isPending}
                        >
                            <Download className="mr-2" size={16} />
                            {isPending ? 'Downloading...' : 'Download Resume'}
                        </Button>
                    </div>
                </div>
            </section>

            <main className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Professional Summary */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h2>
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    I’m a product-minded engineer with a Computer Science background and diverse experience across the full stack — from frontend interfaces to backend APIs, data engineering, and analytics pipelines.
                                    Over the last several years, I’ve built software at scale at companies like ExxonMobil, IBM, Telekom, Thermo Fisher, and Dell — often working across the stack in fast-moving teams.
                                    My career journey has taken me through frontend development (React, TypeScript), backend engineering (Java, Spring Boot, Node, REST APIs), and most recently, data engineering (Airflow, Python, SQL, cloud pipelines).
                                    I don’t fit neatly in one box — and that’s my edge. I specialize in making systems work end-to-end: understanding business needs, designing user-facing products, building resilient APIs, and powering them with clean, actionable data.
                                    I’m passionate about building systems that matter — and I bring the curiosity and versatility to work across layers and learn what the product needs.
                                    Let's connect and explore how we can leverage technology to transform business operations and deliver exceptional value.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Work Experience */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Work Experience</h2>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                            </div>
                                            <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                                                {exp.period}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground">{exp.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                                <p className="text-primary font-medium">{edu.school}</p>
                                            </div>
                                            <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                                                {edu.period}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground">{edu.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Frontend Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frontend.map((skill, index) => (
                                            <Badge key={index} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Backend Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.backend.map((skill, index) => (
                                            <Badge key={index} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Databases</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.database.map((skill, index) => (
                                            <Badge key={index} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map((skill, index) => (
                                            <Badge key={index} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Resume;