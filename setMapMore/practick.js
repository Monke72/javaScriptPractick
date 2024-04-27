const users = [{ name: "elens" }, { name: "aleks" }, { name: "irina" }];

const visits = new Map();

visits.set(users[0], new Date());
visits.set(users[1], new Date(new Date().getTime() + 5000 * 60));
visits.set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}
console.log(lastVisit(users[1]));
