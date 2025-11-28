import { motion } from "framer-motion";
import { talks } from "../data/talks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { ExternalLink, Play, Youtube } from "lucide-react";

const Talks = () => {

  const getThumbnailUrl = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  };

  const getYoutubeUrl = (youtubeId: string) => {
    return `https://www.youtube.com/watch?v=${youtubeId}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Talks & Videos</h1>
            <p className="text-xl max-w-2xl">
              Technical talks, tutorials, and deep dives into modern web development technologies.
            </p>
          </div>
        </section>

        {/* Talks Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {talks.map((talk, index) => (
                <motion.div
                  key={talk.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={getThumbnailUrl(talk.youtubeId)}
                        alt={talk.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="lg"
                              className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 p-0"
                            >
                              <Play className="w-6 h-6 ml-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0">
                            <div className="relative aspect-video">
                              <iframe
                                src={getEmbedUrl(talk.youtubeId)}
                                title={talk.title}
                                className="w-full h-full"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      {/* YouTube Logo */}
                      <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                        <Youtube className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                        {talk.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {talk.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {talk.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="default"
                              size="sm"
                              className="flex-1"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Watch Here
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0">
                            <div className="relative aspect-video">
                              <iframe
                                src={getEmbedUrl(talk.youtubeId)}
                                title={talk.title}
                                className="w-full h-full"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(getYoutubeUrl(talk.youtubeId), '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">More Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to my YouTube channel for the latest tutorials and deep dives.
              </p>
              <Button
                onClick={() => window.open('https://www.youtube.com/@codingwithhenry', '_blank')}
                className="bg-red-600 hover:bg-red-700"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Subscribe on YouTube
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Talks;
