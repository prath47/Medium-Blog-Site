import { Avatar } from "./BlogCard";

const Appbar = () => {
    
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">Medium</div>
      <div className="">
        <Avatar name="prath" size={"big"} />
      </div>
    </div>
  );
};

export default Appbar;
