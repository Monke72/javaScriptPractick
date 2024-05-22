const url = `
https://api.open-meteo.com/v1/forecast?latitude=55.751244&longitude=37.618423&current=temperature_2m,is_day,wind_speed_10m`;

axios.post("https://jsonplaceholder.typicode.com/posts" , {
  title:"Im artem"
}).then((response) => {
  console.log(response.data);
});
