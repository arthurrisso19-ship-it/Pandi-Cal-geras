import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        <Search className="w-5 h-5" />
      </div>
      <Input
        type="text"
        placeholder="Pesquise por sites de estudo..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400 shadow-lg"
      />
    </div>
  );
}
