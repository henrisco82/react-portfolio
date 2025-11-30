export interface Testimonial {
  id: string;
  name: string;
  title: string;
  relationship: string; // e.g., "Worked together at IBM", "Colleague at XYZ Corp"
  avatar?: string; // Optional profile photo URL
  content: string;
  linkedinUrl?: string; // Optional link to their LinkedIn profile
  rating?: number; // Optional star rating (1-5)
  date?: string; // Optional date of the recommendation
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    relationship: "Worked together at IBM",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Henry is an exceptional software engineer with deep expertise in full-stack development and cloud technologies. His ability to architect scalable systems and mentor junior developers is outstanding. He consistently delivers high-quality code and innovative solutions.",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
    rating: 5,
    date: "2024-01-15"
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    title: "Data Engineering Lead",
    relationship: "Collaborated on AWS projects",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Henry on complex data engineering projects was a pleasure. His technical knowledge spans from data pipelines to machine learning infrastructure. He communicates complex concepts clearly and always delivers on time.",
    linkedinUrl: "https://linkedin.com/in/michael-chen",
    rating: 5,
    date: "2024-02-20"
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    title: "Product Manager",
    relationship: "Cross-functional team collaboration",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Henry bridges the gap between technical implementation and business requirements beautifully. His product-minded approach to engineering problems and his ability to work collaboratively across teams makes him invaluable.",
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez",
    rating: 5,
    date: "2024-03-10"
  },
  {
    id: "testimonial-4",
    name: "David Park",
    title: "Engineering Manager",
    relationship: "Managed Henry at TechCorp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Henry is one of the most reliable and skilled engineers I've worked with. His code quality, problem-solving skills, and dedication to continuous learning set him apart. He's a natural leader who helps elevate the entire team.",
    linkedinUrl: "https://linkedin.com/in/david-park",
    rating: 5,
    date: "2024-04-05"
  },
  {
    id: "testimonial-5",
    name: "Lisa Thompson",
    title: "DevOps Engineer",
    relationship: "Infrastructure collaboration",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Henry's understanding of cloud infrastructure and DevOps practices is impressive. He designed and implemented robust CI/CD pipelines and monitoring solutions that significantly improved our system's reliability and deployment speed.",
    linkedinUrl: "https://linkedin.com/in/lisa-thompson",
    rating: 5,
    date: "2024-05-12"
  }
];

// Helper function to get initials for fallback avatar
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
