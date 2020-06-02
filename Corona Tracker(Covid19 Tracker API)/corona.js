class CoronaVirus {
  async GetIndiasData() {
    const response = await fetch(
      "https://api.covidindiatracker.com/total.json"
    );

    const data = await response.json();

    return data;
  }

  async GetStateandDistrictWiseData() {
    const response = await fetch(
      "https://api.covidindiatracker.com/state_data.json"
    );

    const data = await response.json();

    return data;
  }
}
