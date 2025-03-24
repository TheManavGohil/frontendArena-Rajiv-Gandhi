import { Link, useParams } from "react-router-dom";
import { categories, stories } from "../data";

export default function Collection() {
  const { categoryId } = useParams();
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">{categories.find(cat => cat.id === categoryId)?.name}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {stories[categoryId]?.map(story => (
          <Link key={story.id} to={`/story/${categoryId}/${story.id}`} className="w-80 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold text-lg">{story.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}