const user = {
  name: "Максим",
  age: 20,
  hasMuchMoney: false,
  hasGoodJob: false,
  hasMotivation: true,
  hasFtreeTime: true,
};

if (user.name !== "Максим") {
  console.log("Вы не максим , позовите Максима");
} else if (user.age < 16) {
  console.log("Еще рано думать о взрослой жизни");
} else if (
  !user.hasMuchMoney ||
  !user.hasGoodJob ||
  (user.hasMotivation && user.hasFtreeTime)
) {
  console.log("Максиму нужно учить фронтенд");
} else {
  console.log("Тебе это не нужно");
}
