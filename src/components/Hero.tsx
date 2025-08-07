import { Button } from '../components/ui/button';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={profileImage}
                        alt="Henry Unah"
                        className="w-60 h-60 rounded-lg object-cover"
                    />

                    <div className="text-center md:text-left flex-1">
                        <p className="text-lg mb-2">Hello, my name is</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Henry Unah</h1>
                        <p className="text-lg mb-6 leading-relaxed">
                            Product-minded engineer with full-stack and data expertise.
                            I build scalable systems—from frontend interfaces and backend APIs to data pipelines and cloud platforms. With experience at Dell, IBM, Telekom, and ExxonMobil, I specialize in end-to-end solutions that deliver real business value. Want to know how I may help your project?
                            Check out my <a href="/resume" className="underline hover:text-white transition-colors">resume</a>.
                        </p>
                        <a href="/react-portfolio/contact">
                            <Button variant="secondary" size="lg" className="font-semibold">
                                Get In Touch
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;