import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials, getInitials, formatDate, type Testimonial } from '../data/testimonials';

// Import Swiper styles
import 'swiper/swiper.css';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="flex justify-start mb-6">
        <Quote className="w-8 h-8 text-primary opacity-20" aria-hidden="true" />
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
        "{testimonial.content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold text-lg border-2 border-primary/10">
              {getInitials(testimonial.name)}
            </div>
          )}
        </div>

        {/* Author Details */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
            {testimonial.rating && (
              <StarRating rating={testimonial.rating} />
            )}
          </div>
          <p className="text-primary font-medium text-sm">{testimonial.title}</p>
          <p className="text-gray-600 text-sm">{testimonial.relationship}</p>
          {testimonial.date && (
            <p className="text-gray-500 text-xs mt-1">{formatDate(testimonial.date)}</p>
          )}
        </div>

        {/* LinkedIn Link */}
        {testimonial.linkedinUrl && (
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 text-gray-400 hover:text-primary transition-colors"
            aria-label={`View ${testimonial.name}'s LinkedIn profile`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure Swiper only renders on client side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading testimonials...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional recommendations and feedback from colleagues and collaborators
            I've worked with throughout my career.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            a11y={{
              prevSlideMessage: 'Previous testimonial',
              nextSlideMessage: 'Next testimonial',
              firstSlideMessage: 'This is the first testimonial',
              lastSlideMessage: 'This is the last testimonial',
              paginationBulletMessage: 'Go to testimonial {{index}}',
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Pagination */}
          <div className="testimonial-pagination flex justify-center mt-6" />
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.linkedin.com/in/henry-unah-b70934ab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all recommendations on LinkedIn
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
