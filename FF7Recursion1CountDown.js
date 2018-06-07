const countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num-1)
};  // countDownFrom(10);
const categories = [  //  make a tree of this array
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihaha', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
];
const makeTree = (cats, par) => {
  const node = {}
  cats
// filter out elements that have the same parent
    .filter(c => c.parent === par)
    .forEach(c =>
      //  assign a property on the node with the same id of each category
      node[c.id] = makeTree(categories, c.id))
  return node;
}
console.log(
  JSON.stringify(
    //  call makeTree and pass in categories
    //  null is the root
    makeTree(categories, null),
    null, 2)
);
