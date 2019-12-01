const INITIAL_STATE = [
  {
    id: 1,
    name: "Spider-man",
    description: "Spider-man, does whatever a spider can",
    favorite: false
  },
  {
    id: 2,
    name: "Ant-man",
    description: "He is the ant man",
    favorite: false
  }
];

function heroReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default heroReducer;
