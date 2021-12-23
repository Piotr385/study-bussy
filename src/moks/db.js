import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';
import { groups } from './data/groups';

faker.seed(123);

const getRandomGroup = (index) => groups[index];
const getRandomAverage = () =>
  faker.datatype.number({ min: 1, max: 6, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: getRandomAverage,
    group: () => getRandomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
      {
        subject: 'Trade and Logistics',
        average: getRandomAverage(),
      },
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
    ],
  },
});
