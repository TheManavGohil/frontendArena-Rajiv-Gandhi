import { Link } from "react-router-dom";
import { categories } from "../data";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100 min-h-screen">
      {categories.map(category => (
        <Link key={category.id} to={`/collection/${category.id}`} className="w-64 h-64 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all">
          <img src={category.image} alt={category.name} className="w-full h-2/3 object-cover" />
          <div className="p-4 text-center font-semibold text-lg">{category.name}</div>
        </Link>
      ))}
    </div>
  );
}