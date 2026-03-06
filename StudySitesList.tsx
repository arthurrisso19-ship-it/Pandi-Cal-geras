import { ExternalLink, BookOpen, GraduationCap, Library, Globe } from "lucide-react";
import { Card } from "./ui/card";

interface StudySite {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  icon: string;
}

const studySites: StudySite[] = [
  {
    id: "1",
    name: "Khan Academy",
    description: "Plataforma de educação gratuita com cursos de matemática, ciências e muito mais",
    url: "https://pt.khanacademy.org",
    category: "Geral",
    icon: "book"
  },
  {
    id: "2",
    name: "Coursera",
    description: "Cursos universitários online de instituições renomadas",
    url: "https://www.coursera.org",
    category: "Universitário",
    icon: "graduation"
  },
  {
    id: "3",
    name: "edX",
    description: "Educação online de qualidade com cursos de universidades de prestígio",
    url: "https://www.edx.org",
    category: "Universitário",
    icon: "library"
  },
  {
    id: "4",
    name: "Descomplica",
    description: "Preparação para ENEM e vestibulares com videoaulas e exercícios",
    url: "https://descomplica.com.br",
    category: "Vestibular",
    icon: "book"
  },
  {
    id: "5",
    name: "Brasil Escola",
    description: "Conteúdo educacional brasileiro para todos os níveis escolares",
    url: "https://brasilescola.uol.com.br",
    category: "Ensino Médio",
    icon: "globe"
  },
  {
    id: "6",
    name: "Mundo Educação",
    description: "Portal de educação com conteúdo para estudantes do ensino fundamental ao superior",
    url: "https://mundoeducacao.uol.com.br",
    category: "Geral",
    icon: "globe"
  },
  {
    id: "7",
    name: "Stoodi",
    description: "Plataforma de estudos para o ENEM com videoaulas e exercícios",
    url: "https://www.stoodi.com.br",
    category: "Vestibular",
    icon: "graduation"
  },
  {
    id: "8",
    name: "Me Salva!",
    description: "Videoaulas de diversas disciplinas para ensino médio e superior",
    url: "https://www.mesalva.com",
    category: "Ensino Médio",
    icon: "book"
  }
];

interface StudySitesListProps {
  searchQuery: string;
}

export function StudySitesList({ searchQuery }: StudySitesListProps) {
  const filteredSites = studySites.filter(site => {
    const query = searchQuery.toLowerCase();
    return (
      site.name.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query) ||
      site.category.toLowerCase().includes(query)
    );
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "book":
        return <BookOpen className="w-6 h-6" />;
      case "graduation":
        return <GraduationCap className="w-6 h-6" />;
      case "library":
        return <Library className="w-6 h-6" />;
      case "globe":
        return <Globe className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {searchQuery && (
        <p className="text-slate-600 mb-6">
          {filteredSites.length} {filteredSites.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSites.map((site) => (
          <Card 
            key={site.id}
            className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-300 cursor-pointer group"
            onClick={() => window.open(site.url, '_blank')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {getIcon(site.icon)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-slate-800">
                    {site.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {site.description}
                </p>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  {site.category}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredSites.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            Nenhum site encontrado
          </h3>
          <p className="text-slate-500">
            Tente buscar com outros termos
          </p>
        </div>
      )}
    </div>
  );
}
