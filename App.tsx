import { useState } from "react";
import { Search } from "lucide-react";
import { SearchBar } from "./components/SearchBar";
import { StudySitesList } from "./components/StudySitesList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="mb-4 text-slate-800">
            Bem-vindo, você está na plataforma de estudos
          </h1>
          <h2 className="text-4xl font-bold text-indigo-600 mb-2">
            Pandiá Calógeras
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Encontre os melhores recursos educacionais para seus estudos
          </p>
        </header>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Study Sites List */}
        <StudySitesList searchQuery={searchQuery} />
      </div>
    </div>
  );
}
