interface BlogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        {<Avatar size="small" name={authorname} />}
        <div className="font-thin pl-2 text-sm flex justify-center flex-col">{authorname + "."}</div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          {publishedDate.slice(0, 15)}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>

      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};

export default BlogCard;

export function Avatar({ name, size }: { name: string, size:"small" | "big" }) {
  return (
    <div className={`relative inline-flex items-center justify-center w-${size === 'small'  ? 6 : 10} h-${size === 'small'  ? 6 : 10} overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600`}>
      <span className="font-xs text-gray-200 dark:text-gray-700">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}