const NewsCard = ({ title, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="block h-full">
      <div className="w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:-translate-y-1">

        <div className="h-40 bg-gray-100 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-400">
              No Image Available
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col justify-between flex-1">
          <p className="text-sm md:text-base font-semibold leading-snug text-gray-800 hover:text-blue-600 transition duration-300">
            {title}
          </p>

          <span className="mt-4 text-xs font-semibold text-blue-600 tracking-wide">
            READ MORE →
          </span>
        </div>

      </div>
    </a>
  );
};

export default NewsCard;
