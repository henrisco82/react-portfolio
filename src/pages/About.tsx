import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Skills />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default About;