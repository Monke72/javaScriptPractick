const name = "bob";

//Дефолтный экспорт
export default name;

const age = 28;
const gender = "male";

//Экспорт именованных значений
export { age, gender };
//Также можно переименовывать сразу во время экспорта
export { age as a, gender as g };

//Для переменных которые мы экспортируем можно записывать иначе

// export default name = "bob"

// export const age = 28
