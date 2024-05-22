const url = `
https://api.open-meteo.com/v1/forecast?latitude=55.751244&longitude=37.618423&current=temperature_2m,is_day,wind_speed_10m`;

const any = fetch(url)
  .then((data) => {
    if (data.status === 200) {
      return data.json();
    } else {
      console.log("err");
    }
  })
  .then((info) => {
    renderWeather(info.current);
  });

function renderWeather(data) {
  const div = document.createElement("div");
  div.textContent = `
  temp - ${data.temperature_2m}
  weather - ${data.wind_speed_10m} m
  Now ${data.is_day === 0 ? `day` : "night"}
  `;

  document.body.append(div);
}
