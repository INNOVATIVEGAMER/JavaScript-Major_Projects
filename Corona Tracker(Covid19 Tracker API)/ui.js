class UI {
  constructor() {
    this.content = document.getElementById("content");
  }

  ShowIndiasData(data, countryName) {
    this.ClearAlert();
    this.content.innerHTML = `
      <div class="card border-primary mt-5">
        <div class="card-header text-center">
          <h4 class="font-weight-bold text-uppercase">${countryName}</h4>
        </div>
        <div class="row mt-3">
          <div class="col-md-3 p-3">
            <div class="text-danger text-center display-4"><h2 class="font-weight-bold">CONFIRMED</h2>${data.confirmed}</div>
          </div>
          <div class="col-md-3 p-3">
            <div class="text-warning text-center display-4"><h2 class="font-weight-bold">ACTIVE</h2>${data.active}</div>
          </div>
          <div class="col-md-3 p-3">
            <div class="text-success text-center display-4"><h2 class="font-weight-bold">RECOVERED</h2>${data.recovered}</div>
          </div>
          <div class="col-md-3 p-3">
            <div class="text-secondary text-center display-4"><h2 class="font-weight-bold">DEATHS</h2>${data.deaths}</div>
          </div>
        </div>
      </div>
      `;
  }

  ShowStatesData(fulldata, stateName) {
    let data;
    let check = false;
    fulldata.forEach(function (obj) {
      if (obj.state === stateName) {
        data = obj;
        check = true;
      }
    });

    if (check) {
      this.ClearAlert();
      this.content.innerHTML = `
    <div class="card border-primary mt-5">
      <div class="card-header text-center">
        <h4 class="font-weight-bold text-uppercase">${stateName}</h4>
      </div>
      <div class="row mt-3">
        <div class="col-md-3 p-3">
          <div class="text-danger text-center display-4"><h2 class="font-weight-bold">CONFIRMED</h2>${data.confirmed}</div>
        </div>
        <div class="col-md-3 p-3">
          <div class="text-warning text-center display-4"><h2 class="font-weight-bold">ACTIVE</h2>${data.active}</div>
        </div>
        <div class="col-md-3 p-3">
          <div class="text-success text-center display-4"><h2 class="font-weight-bold">RECOVERED</h2>${data.recovered}</div>
        </div>
        <div class="col-md-3 p-3">
          <div class="text-secondary text-center display-4"><h2 class="font-weight-bold">DEATHS</h2>${data.deaths}</div>
        </div>
      </div>
    </div>
    `;
    } else {
      this.ClearContent();
      this.ShowAlert(
        "State Not Found!!! Check For Capitalization (Sample name :- Bihar)"
      );
    }
  }

  ShowDistrictsData(fulldata, stateName, districtName) {
    let state;
    let stateCheck = false;
    fulldata.forEach(function (obj) {
      if (obj.state === stateName) {
        state = obj;
        stateCheck = true;
      }
    });
    if (stateCheck) {
      let data;
      let districtCheck = false;
      state.districtData.forEach(function (obj) {
        if (obj.name === districtName) {
          data = obj;
          districtCheck = true;
        }
      });
      if (districtCheck) {
        this.ClearAlert();
        this.content.innerHTML = `
          <div class="card border-primary mt-5">
            <div class="card-header text-center">
              <h2 class="font-weight-bold text-uppercase">${stateName} <i class="fas fa-arrow-alt-circle-right"></i> ${districtName}</h2>
            </div>
            <div class="row mt-3">
              <div class="col-md-6 p-3">
                <div class="text-danger text-center display-4"><h2 class="font-weight-bold">CONFIRMED</h2>${data.confirmed}</div>
              </div>
              <div class="col-md-6 p-3">
                <div class="text-secondary text-center display-4"><h2 class="font-weight-bold">ZONE</h2>${data.zone}</div>
              </div>
            </div>
          </div>
          `;
      } else {
        this.ClearContent();
        this.ShowAlert(
          "District Not Found!!! Check For Capitalization (Sample name :- Mumbai)"
        );
      }
    } else {
      this.ClearContent();
      this.ShowAlert(
        "State Not Found!!! Check For Capitalization (Sample name :- Bihar)"
      );
    }
  }

  ShowAlert(message) {
    this.ClearAlert();

    const alert = document.createElement("div");
    alert.className = "alert alert-danger";
    alert.innerHTML = message;

    const inputContainer = document.querySelector(".inputContainer");
    const inputBox = document.querySelector(".inputBox");

    inputContainer.insertBefore(alert, inputBox);
  }

  ClearContent() {
    this.content.innerHTML = "";
  }

  ClearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
