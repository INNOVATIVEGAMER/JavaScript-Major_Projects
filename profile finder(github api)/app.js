const UserName = document.getElementById("UserName");
const github = new Github();
const ui = new UI();

UserName.addEventListener("keyup", ShowContent);

function ShowContent(e) {
  const username = e.target.value;

  if (username !== "") {
    github
      .GetUser(username)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          ui.ShowAlert("USER NOT FOUND!!!");
        } else {
          ui.ShowProfile(data.profile);
          ui.ShowRepos(data.repos);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    ui.ClearProfile();
    ui.ClearAlert();
    ui.ClearRepos();
  }
}
