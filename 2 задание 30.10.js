


const phonebook = new Map();

phonebook.set('Ivanov', '+7-900-111-22-33')
phonebook.set('Petrova', '+7-900-444-55-66')
phonebook.set('Sidorov', '+7-900-777-88-99')

console.log("Петрова:",phonebook.get('Petrova'))

phonebook.delete('Sidorov');

console.log("Размер:",phonebook.size);
console.log("Есть ли сидоров:",phonebook.has('Sidorov'))

const keys = [...phonebook.keys()]
console.log("Сотрудники:",keys)

phonebook.forEach((phone, name) => {
  console.log(`${name}: ${phone}`);
});
