import Header from '../components/Header';
import { Button } from '../components/ui/button';
import Footer from '../components/Footer';
import profileImage from '../assets/profile.jpg';

const Index = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Landing Hero Section */}
                <section className="bg-primary text-primary-foreground py-20 min-h-[80vh] flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <img
                                src={profileImage}
                                alt="Henry Unah"
                                className="w-80 h-80 rounded-lg object-cover shadow-2xl"
                            />

                            <div className="text-center md:text-left flex-1">
                                <p className="text-xl mb-4 opacity-90">Hello, I'm</p>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    Henry Unah
                                </h1>
                                <h2 className="text-2xl md:text-3xl mb-8 opacity-90">
                                    Software Engineer | Data Engineer | Cloud Enthusiast
                                </h2>
                                <p className="text-xl mb-10 leading-relaxed max-w-2xl opacity-90">
                                    Product-minded engineer with full-stack and data expertise. I build scalable systems—from frontend interfaces and backend APIs to data pipelines and cloud platforms.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <a href="/react-portfolio/about">
                                        <Button variant="secondary" size="lg" className="font-semibold w-full sm:w-auto">
                                            About Me
                                        </Button>
                                    </a>
                                    <a href="/react-portfolio/contact">
                                        <Button variant="outline" size="lg" className="font-semibold w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                                            Get In Touch
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats Section */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                <p className="text-muted-foreground">Years Experience</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                                <p className="text-muted-foreground">Projects Completed</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                                <p className="text-muted-foreground">Technologies</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Index;
