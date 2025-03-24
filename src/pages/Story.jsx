import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { stories } from "../data";

export default function Story() {
  const { categoryId, storyId } = useParams();
  const story = stories[categoryId]?.find(story => story.id === storyId);
  if (!story) return <div className="text-center text-red-500 text-2xl">Story not found</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">{story.title}</h1>
      <img src={story.image} alt={story.title} className="block mx-auto rounded-lg shadow-lg w-1/2" />
      <p className="mt-6 text-center text-xl max-w-2xl mx-auto">{story.content}</p>
    </motion.div>
  );
}
