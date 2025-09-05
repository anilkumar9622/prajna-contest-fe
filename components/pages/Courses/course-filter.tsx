
import { ChevronDown } from "lucide-react";

export default function CourseFilter() {
  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      <button className="flex items-center justify-between px-4 py-2 border-1 border-black rounded-lg custom-shadow hover:bg-gray-50 ">
        By Skill Level <ChevronDown size={16} className="ml-2" />
      </button>

      <button className="flex items-center justify-between px-4 py-2 border-1 border-black rounded-lg custom-shadow hover:bg-gray-50 ">
        By Course Type <ChevronDown size={16} className="ml-2" />
      </button>

      <button className="flex items-center justify-between px-4 py-2 border-1 border-black rounded-lg custom-shadow hover:bg-gray-50 ">
        By Popularity <ChevronDown size={16} className="ml-2" />
      </button>

      <button className="flex items-center justify-between px-4 py-2 border-1 border-black rounded-lg custom-shadow hover:bg-gray-50 ">
        By Price <ChevronDown size={16} className="ml-2" />
      </button>
    </div>
  );
}
