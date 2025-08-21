import { Input } from "./ui/input";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="max-w-2"></div>
      <div className="">
        <Input placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
