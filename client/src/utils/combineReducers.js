// Link to author of below function
// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export default combineReducers;
