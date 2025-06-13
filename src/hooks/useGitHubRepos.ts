/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getRepoLanguages, getRepoReadme, extractImageFromMarkdown } from "../services/gitHubServices";
import { github } from "../services/api";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  image?: string;
  languages: { [key: string]: number };
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      try {
        const { data } = await github.get(`/users/${username}/repos`, {
          params: { per_page: 15, sort: "created", direction: "desc" },
        });

        const reposWithDetails = await Promise.all(
          data.map(async (repo: any) => {
            try {
              const languages = await getRepoLanguages(username, repo.name);
              const readmeContent = await getRepoReadme(username, repo.name, repo.default_branch);
              const imageUrl = readmeContent ? extractImageFromMarkdown(readmeContent) : undefined;

              return {
                id: repo.id,
                name: repo.name,
                html_url: repo.html_url,
                description: repo.description,
                image: imageUrl,
                languages,
              };
            } catch (error) {
              console.warn(`Erro ao processar ${repo.name}:`, error);
              return {
                id: repo.id,
                name: repo.name,
                html_url: repo.html_url,
                description: repo.description,
                image: undefined,
                languages: {},
              };
            }
          })
        );

        setRepos(reposWithDetails);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading };
}
