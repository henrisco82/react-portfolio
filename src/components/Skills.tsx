import { Card, CardContent } from '../components/ui/card';
import { Check, Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            icon: Code,
            skills: [
                "React/Redux/Angular/NgRx",
                "Javascript/TypeScript",
                "Webpack/Gulp/Grunt",
                "HTML/CSS/SASS/LESS"
            ]
        },
        {
            category: "Backend",
            icon: Database,
            skills: [
                "Java/Spring",
                "Python/FastAPI",
                "PostgresSQL/MySQL",
                "MongoDB"
            ]
        },
        {
            category: "Others",
            icon: Wrench,
            skills: [
                "DevOps",
                "Unit Testing",
                "Data Engineering",
                "Cloud Platforms (AWS, GCP, Azure)",
            ]
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Skills Overview</h2>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        I have more than 5 years' experience building rich web applications for clients all over the world.
                        Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?
                        <a href="/resume" className="text-primary hover:underline"> Check out my online resume</a>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillsData.map((skillBlock, index) => (
                        <Card key={index} className="relative pt-12 pb-8 px-6 shadow-lg">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                                    <skillBlock.icon className="text-primary-foreground" size={28} />
                                </div>
                            </div>

                            <CardContent className="pt-8">
                                <h3 className="text-xl font-semibold text-center mb-6">{skillBlock.category}</h3>
                                <ul className="space-y-3">
                                    {skillBlock.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="flex items-center text-muted-foreground">
                                            <Check className="text-primary mr-3 flex-shrink-0" size={16} />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;