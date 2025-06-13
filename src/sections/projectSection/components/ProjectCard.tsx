import { useInView } from "../../../hooks/useInView";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  image?: string;
  languages?: { [key: string]: number };
}

export default function ProjectCard({
  id,
  name,
  description,
  htmlUrl,
  image,
  languages = {},
}: ProjectCardProps) {
  const languageList = Object.keys(languages);
  const { ref, isVisible } = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      key={id}
      className={`w-[26rem] h-auto bg-black/75 rounded-md shadow-lg border-[0.6px]
         border-neutral-800/55 transition-all duration-900 ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
         } hover:border-indigo-700 hover:scale-105`}
    >
      {image && (
        <img
          src={image}
          alt={`Imagem de ${name}`}
          className="w-full h-56 object-fill rounded-lg mb-4"
        />
      )}

      <div className="p-4">
        <h3 className="text-indigo-400 text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-3">
          {description ? description : "Sem descrição disponível."}
        </p>

        <h3 className="mt-8 text-sm text-indigo-400">Tecnologias utilizadas</h3>
        {languageList.length > 0 && (
          <div className="mt-2 text-sm text-gray-400 flex flex-wrap gap-2">
            {languageList.map((language) => (
              <span
                key={language}
                className="px-2 py-1 border-[0.6px] border-neutral-700 rounded-full text-indigo-400 text-xs"
              >
                {language}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-16 mb-8">
          <Link
            to={`/project/${name}`}
            className="text-indigo-500 px-4 py-2 border-[0.6px] rounded-md border-indigo-600
            hover:text-indigo-600 text-sm"
          >
            Ver detalhes
          </Link>

          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 px-4 py-2 border-[0.6px] rounded-md border-indigo-600
            hover:text-indigo-600 text-sm"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
