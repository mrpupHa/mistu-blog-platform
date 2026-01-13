function BlogCard(props) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.image}
          alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {props.title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 grow line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={props.authorImage}
            alt={props.author}
          />
          <span>{props.author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
