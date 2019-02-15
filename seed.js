import { random } from 'faker';

const randomAmount = Math.floor(Math.random() * 100);
const items = { items: [] };

for (let i = 1; i <= randomAmount; i++) {
  items.items.push({
    id: i,
    name: `item ${i}`,
    description: `${random.words()}`
  });
}

console.log(JSON.stringify(items));
