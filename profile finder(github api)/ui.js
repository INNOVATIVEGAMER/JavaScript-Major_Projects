class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  ShowProfile(user) {
    this.ClearAlert();

    this.profile.innerHTML = `
    <div class="card border-success">
    <div class="card-header text-center text-white display-3 font-italic">${user.name}</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <img
            src="${user.avatar_url}"
            alt="profile image"
            class="img-fluid w-100 mb-3 border border-white rounded"
          />
          <a href="${user.html_url}" target="_blank" class="btn btn-block btn-outline-success mb-3"
            >View Profile</a
          >
        </div>
        <div class="col-md-9">
          <div class="mb-4">
            <span class="badge badge-primary mr-3">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mr-3">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-danger mr-3">Followers: ${user.followers}</span>
            <span class="badge badge-warning mr-3">Following: ${user.following}</span>
          </div>
          <div class="mt-3 border border-success rounded align-self-center">
            <ul class="list-group">
              <li class="list-group-item text-white text-capitalize">
                Company: ${user.company}
              </li>
              <li class="list-group-item bg-success text-light">
                Email: ${user.email}
              </li>
              <li class="list-group-item text-white text-capitalize">Location: ${user.location}</li>
              <li class="list-group-item bg-success text-light">
                Member Since: ${user.created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        `;
  }

  ShowRepos(repos) {
    let output = ``;
    repos.forEach(function (repo) {
      output += `
      <div class="card card-body">
      <div class="row">
        <div class="col-md-6 mt-2">
          <a href="${repo.html_url}" target="_blank" class="text-decoration-none">${repo.name}</a>
        </div>
        <div class="col-md-6 mt-2">
        <span class="badge badge-secondary mr-3">Forks: ${repo.forks}</span>
        <span class="badge badge-danger mr-3">Watchers: ${repo.watchers}</span>
        <span class="badge badge-warning mr-3">Stars: ${repo.startgazers_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    const div = document.getElementById("repos");
    div.innerHTML = output;
  }

  ClearProfile() {
    this.profile.innerHTML = "";
  }

  ClearRepos() {
    document.getElementById("repos").innerHTML = "";
  }

  ShowAlert(message) {
    this.ClearAlert();

    const div = document.createElement("div");

    div.className = "alert alert-danger";

    div.innerHTML = message;

    const container = document.querySelector(".searchContainer");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    this.ClearProfile();
    this.ClearRepos();
  }

  ClearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert != null) {
      currentAlert.remove();
    }
  }
}
