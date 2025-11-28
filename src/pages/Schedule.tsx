import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, Clock, Users } from "lucide-react";

const Schedule = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book a time that works best for you within my available slots.",
    },
    {
      icon: Clock,
      title: "30-Minute Sessions",
      description: "Focused, productive meetings to discuss your project or questions.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get advice from someone with real-world development experience.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Book a Meeting</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
                Let's discuss your project, get technical guidance, or explore collaboration opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're looking for project consultation, mentorship, technical guidance, or just want to discuss
                  collaboration opportunities, I'm here to help. Book a 30-minute meeting and let's make something great together.
                </p>
                <p className="text-lg text-gray-600">
                  I typically respond within 24 hours and offer flexible scheduling to accommodate different time zones.
                </p>
              </motion.div>

              {/* Benefits Grid */}
                <motion.div
                 variants={itemVariants}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="grid md:grid-cols-3 gap-8 mb-12"
               >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Calendly Widget Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-center">Select a Time</h3>
                  <p className="text-gray-600 text-center mt-2">
                    Choose from available time slots below
                  </p>
                </div>
                <div className="min-h-[600px]">
                  <InlineWidget
                    url="https://calendly.com/henry-unah"
                    styles={{
                      height: '600px',
                      width: '100%',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">Prefer to Reach Out Directly?</h3>
              <p className="text-gray-600 mb-6">
                If scheduling doesn't work for you, feel free to send me an email and we'll find another way to connect.
              </p>
              <a
                href="mailto:henryunah@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Email Instead
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
