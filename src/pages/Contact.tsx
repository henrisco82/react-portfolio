import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { supabase } from '../lib/superbaseClient';
import { useToast } from '../hooks/use-toast';
import profileImage from '../assets/profile.jpg';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill in all required fields.",
            });
            return;
        }

        // Insert into Supabase table
        const { error } = await supabase.from('contacts').insert([formData]);

        if (error) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "Something went wrong saving your message. Please try again later.",
            });
        } else {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const socialLinks = [
        {
            icon: FaTwitter,
            href: "https://twitter.com/unahhenry",
            label: "Twitter",
            color: "text-blue-400"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/henry-unah-b70934ab/",
            label: "LinkedIn",
            color: "text-blue-600"
        },
        {
            icon: FaGithub,
            href: "https://github.com/henrisco82",
            label: "GitHub",
            color: "text-gray-700"
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Contact Header */}
            <section className="bg-primary text-primary-foreground py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Let's discuss your next project. I'm always excited to work on new challenges.
                    </p>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Contact Introduction */}
                    <section className="text-center mb-12">
                        <img
                            src={profileImage}
                            alt="Henry Unah"
                            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                        />
                        <div className="max-w-3xl mx-auto">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                I'm always open to meaningful conversations, collaboration ideas, or simply connecting with like-minded professionals.
                                Feel free to reach out via email at{' '}
                                <a href="mailto:henry.unah@gmail.com" className="underline hover:text-primary transition-colors">
                                    henry.unah@gmail.com
                                </a>{' '}
                            </p>
                            <p className="text-lg font-medium mb-8">
                                You can also find me on the following channels
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-4 mb-12">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center bg-primary text-primary-foreground hover:opacity-80 transition-opacity`}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="name">Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="mt-2"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="mt-2"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="mt-2"
                                                placeholder="Project Discussion"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-2 min-h-32"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full">
                                            Send Message
                                        </Button>

                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Mail className="text-primary mt-1" size={20} />
                                            <div>
                                                <p className="font-medium">Email</p>
                                                <a
                                                    href="mailto:henry.unah@gmail.com"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    henry.unah@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Phone className="text-primary mt-1" size={20} />
                                            <div>
                                                <p className="font-medium">Phone</p>
                                                <a
                                                    href="tel:+421911372223"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    +421 911 372 223
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-primary mt-1" size={20} />
                                            <div>
                                                <p className="font-medium">Location</p>
                                                <p className="text-muted-foreground">Bratislava, Slovakia</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Availability</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Response Time:</span>
                                            <span className="font-medium">24-48 hours</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Time Zone:</span>
                                            <span className="font-medium">EST (UTC-5)</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;