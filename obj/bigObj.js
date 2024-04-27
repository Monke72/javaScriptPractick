const logAdress = ({ city, street, houseNumber, apatmentNumber }) => {
  console.log(
    `Адресс : Г.${city} , yl ${street} , 
    h.${houseNumber}, kv.${apatmentNumber}`
  );
};

logAdress({
  city: "moskow",
  street: "Push",
  houseNumber: 212,
  apatmentNumber: 12,
});

const user = {
  name: "aleks",
};
const admin = {
  name: "boss",
};

const { name: userName } = user;
const { name: adminName } = admin;
console.log(userName);


