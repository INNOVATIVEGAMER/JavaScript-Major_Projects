const Submit = document.getElementById("submit");
const Corona = new CoronaVirus();
const ui = new UI();

document.addEventListener("DOMContentLoaded", ShowIndiasContent);
Submit.addEventListener("click", ShowContent);

function ShowContent(e) {
  const state = document.getElementById("State").value;
  const district = document.getElementById("District").value;

  if (district === "" && state === "") {
    Corona.GetIndiasData()
      .then((data) => {
        ui.ShowIndiasData(data, "India");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (district === "") {
    Corona.GetStateandDistrictWiseData()
      .then((data) => {
        ui.ShowStatesData(data, state);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Corona.GetStateandDistrictWiseData()
      .then((data) => {
        ui.ShowDistrictsData(data, state, district);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  e.preventDefault();
}

function ShowIndiasContent() {
  Corona.GetIndiasData()
    .then((data) => {
      ui.ShowIndiasData(data, "India");
    })
    .catch((err) => {
      console.log(err);
    });
}
