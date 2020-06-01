class Github {
  constructor() {
    this.client_id = "9df188b7d59bbb573db3";
    this.client_secret = "dc2bc7e6f8b42bbc6a3b99f356c75661366ab6e0";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async GetUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}
