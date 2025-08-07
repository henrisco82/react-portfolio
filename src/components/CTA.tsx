import { Button } from '../components/ui/button';
import profileImage from '../assets/profile.jpg';

const CTA = () => {
    return (
        <section className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4 text-center">
                <img
                    src={profileImage}
                    alt="Henry Unah"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <h2 className="text-3xl font-bold mb-4">
                    Let's Connect
                </h2>

                <div className="max-w-4xl mx-auto mb-8">
                    <p className="text-lg leading-relaxed">
                        I'm always open to meaningful conversations, collaboration ideas, or simply connecting with like-minded professionals.
                        Feel free to reach out via email at{' '}
                        <a href="mailto:henry.unah@gmail.com" className="underline hover:text-white transition-colors">
                            henry.unah@gmail.com
                        </a>{' '}
                        or use the{' '}
                        <a href="/react-portfolio/contact" className="underline hover:text-white transition-colors">
                            form on the contact page
                        </a>.
                    </p>
                </div>


                <a href="/react-portfolio/contact">
                    <Button variant="secondary" size="lg" className="font-semibold">
                        Let's Talk
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default CTA;