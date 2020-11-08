class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success p-2">Followers: ${user.followers}</span>
            <span class="badge badge-info p-2">Following: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group bg-light">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Member Since: ${(user.created_at).slice(0,10)}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary p-2 mr-1">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary p-2 mr-1">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success p-2 mr-1">Forks: ${repo.forms_count || 0}</span>
          </div>
        </div>
      </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
  
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  clearAlert() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }
}