import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="w-[400px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="search"
          className="w-full p-3 rounded-full bg-white"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 svg-gray">
          <Search />
        </button>
      </div>
    </form>
  );
}
