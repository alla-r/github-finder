class Github {
  constructor() {
    this.client_id = '6caed9b485b5e0c6421d';
    this.client_secret = `b189abcc6a9abe0233101809507722e4ed94a2e5 
    `;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}