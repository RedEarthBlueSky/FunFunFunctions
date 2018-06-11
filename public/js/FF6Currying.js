import _ from 'lodash';

const dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
];

const hasElement =
  (element, obj) => obj.element === element

const lightningDragons =
  dragons.filter(x => hasElement('lightning', x))

console.log(lightningDragons)

const LhasElement =
  _.curry((element, obj) => obj.element === element)
