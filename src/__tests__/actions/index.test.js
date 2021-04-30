import * as actions from '../../actions';

describe('keg shop actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      names: "Budweiser",
      brewer: "Anheuser",
      price: 5,
      abv: 5,
      ibu: 3,
      pintsLeft: 124,
      id: 1
    })).toEqual({
      type: "ADD_KEG",
      names: "Budweiser",
      brewer: "Anheuser",
      price: 5,
      abv: 5,
      ibu: 3,
      pintsLeft: 124,
      id: 1
    })
  })
  it('decrementPint should decrement pintsLeft by 1', () => {
    expect(actions.decrementPint({
      names: "Buddles",
      brewer: "Bathroom Sink",
      price: 4,
      abv: 3,
      ibu: 3,
      pintsLeft: 124,
      id: 3
    })).toEqual({
      type: "ADD_KEG",
      names: "Buddles",
      brewer: "Bathroom Sink",
      price: 4,
      abv: 3,
      ibu: 3,
      pintsLeft: 123,
      id: 3
    })
  })
})