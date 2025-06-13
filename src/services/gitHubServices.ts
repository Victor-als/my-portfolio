import { github } from "./api";

export interface RepoDetails {
  id: number;
  name: string;
  description: string;
  html_url: string;
  default_branch?: string;
}

export async function getRepoDetails(username: string, repoName: string) {
  const { data } = await github.get<RepoDetails>(`/repos/${username}/${repoName}`);
  return data;
}

export async function getRepoLanguages(username: string, repoName: string) {
  const { data } = await github.get(`/repos/${username}/${repoName}/languages`);
  return data;
}

export async function getRepoReadme(username: string, repoName: string, branch = "main") {
  const readmeUrl = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/README.md`;
  const response = await fetch(readmeUrl);
  if (!response.ok) return null;
  return response.text();
}

export function extractImageFromMarkdown(content: string) {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match ? match[1] : null;
}
