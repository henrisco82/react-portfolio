import { Link } from "react-router-dom";

interface Props {
    id: string;
    company: string;
    title: string;
    category: string[];
    image: string;
}

export default function ProjectCard({ id, company, title, category, image }: Props) {
    return (
        <Link to={`/projects/${id}`} className="block group">
            <div className="relative overflow-hidden rounded-md shadow hover:shadow-lg transition">
                <img src={image} alt={title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-xl font-bold">{company}</h3>
                    <p className="text-sm">{title}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                {category.map((cat) => (
                    <span
                        key={cat}
                        className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300"
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </Link>
    );
}
