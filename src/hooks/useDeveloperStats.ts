import { useEffect, useState } from "react";

export interface PlatformStat {
  platform: "GitHub" | "GitLab";
  account: string;
  context: "Personal" | "Work" | "Public";
  profileUrl: string;
  repositories: number;
  stars: number;
  forks: number;
  followers: number;
  pullRequests: number;
  recentCommits: number;
}

type State = { data: PlatformStat[]; loading: boolean; error: boolean };

export function useDeveloperStats(github: string[], gitlab: string): State {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const getJson = async <T>(url: string): Promise<T> => {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return response.json() as Promise<T>;
    };

    const loadGithub = async (
      username: string,
      context: "Personal" | "Work",
    ): Promise<PlatformStat> => {
      const [user, repos, events, prs] = await Promise.all([
        getJson<{ public_repos: number; followers: number }>(
          `https://api.github.com/users/${username}`,
        ),
        getJson<Array<{ stargazers_count: number; forks_count: number }>>(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        ),
        getJson<Array<{ type: string; payload?: { commits?: unknown[] } }>>(
          `https://api.github.com/users/${username}/events/public?per_page=100`,
        ),
        getJson<{ total_count: number }>(
          `https://api.github.com/search/issues?q=author:${username}+type:pr`,
        ),
      ]);
      return {
        platform: "GitHub",
        account: username,
        context,
        profileUrl: `https://github.com/${username}`,
        repositories: user.public_repos,
        followers: user.followers,
        stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
        pullRequests: prs.total_count,
        recentCommits: events.reduce(
          (sum, event) =>
            sum +
            (event.type === "PushEvent"
              ? (event.payload?.commits?.length ?? 0)
              : 0),
          0,
        ),
      };
    };

    const loadGitlab = async (): Promise<PlatformStat> => {
      const users = await getJson<Array<{ id: number; followers?: number }>>(
        `https://gitlab.com/api/v4/users?username=${gitlab}`,
      );
      if (!users[0]) throw new Error("GitLab user not found");
      const [projects, events] = await Promise.all([
        getJson<Array<{ star_count: number; forks_count: number }>>(
          `https://gitlab.com/api/v4/users/${users[0].id}/projects?per_page=100&order_by=last_activity_at`,
        ),
        getJson<
          Array<{ target_type?: string; push_data?: { commit_count?: number } }>
        >(`https://gitlab.com/api/v4/users/${users[0].id}/events?per_page=100`),
      ]);
      return {
        platform: "GitLab",
        account: gitlab,
        context: "Public",
        profileUrl: `https://gitlab.com/${gitlab}`,
        repositories: projects.length,
        followers: users[0].followers ?? 0,
        stars: projects.reduce((sum, project) => sum + project.star_count, 0),
        forks: projects.reduce((sum, project) => sum + project.forks_count, 0),
        pullRequests: events.filter(
          (event) => event.target_type === "MergeRequest",
        ).length,
        recentCommits: events.reduce(
          (sum, event) => sum + (event.push_data?.commit_count ?? 0),
          0,
        ),
      };
    };

    const githubRequests = github.map((username, index) =>
      loadGithub(username, index === 0 ? "Personal" : "Work"),
    );
    Promise.allSettled([...githubRequests, loadGitlab()]).then((results) => {
      if (controller.signal.aborted) return;
      const data = results
        .filter(
          (result): result is PromiseFulfilledResult<PlatformStat> =>
            result.status === "fulfilled",
        )
        .map((result) => result.value);
      setState({ data, loading: false, error: data.length === 0 });
    });
    return () => controller.abort();
  }, [github, gitlab]);

  return state;
}
