import { Input } from "./ui/input";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="max-w-6xl">
        <Input placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
