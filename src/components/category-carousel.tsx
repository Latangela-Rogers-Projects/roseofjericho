'use client';


interface Category {
  id: string;
  label: string;
  color: string;
}

interface CategoryCarouselProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function CategoryCarousel({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryCarouselProps | any) {
  return (
    <div className="w-full mb-6">
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 -mx-4 scrollbar-hide">
        {/* All Categories Button */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0',
            selectedCategory === null
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300`}
        >
          All
        </button>

        {/* Category Pills */}
        {categories&& categories.map((category:any) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`
              'px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0',
              selectedCategory === category.id
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            `}
          >
            {category.label}
          </button> 
        ))}
      </div>
    </div>
  );
}
