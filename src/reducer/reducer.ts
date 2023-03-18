import {
  ADD_CAR_IN_COLLECTION,
  REMOVE_CAR_IN_COLLECTION,
} from "../actions/actions";

export type ItemStateType = {
  carBrand: string,
  id: number
}

export type InitialStateType = {
  listItem: Array<ItemStateType>,
  selectedItem: Array<ItemStateType>
}

const initialState: InitialStateType = {
  listItem: [
    { carBrand: "BMW", id: 1 },
    { carBrand: "Audi", id: 2 },
    { carBrand: "Ford", id: 3 },
    { carBrand: "Mazda", id: 4 },
    { carBrand: "Toyota", id: 5 },
    { carBrand: "Nissan", id: 6 },
    { carBrand: "Buick", id: 7 },
    { carBrand: "Cadillac", id: 8 },
    { carBrand: "Dodge", id: 9 },
    { carBrand: "Lexus", id: 10 },
  ],
  selectedItem: [],
};

const addItem = (state:InitialStateType, e:any): InitialStateType => {
  const { listItem, selectedItem } = state;
  const itemId = Number(e.target.id);
  const index = listItem.findIndex(({ id }) => id === itemId);
  const newCar = selectedItem.includes(listItem[index]);
  if (!newCar) {
    return {
      ...state,
      selectedItem: [...state.selectedItem, listItem[index]],
    };
  } else {
    return {
      ...state,
    };
  }
};

const removeCar = (state:InitialStateType, e:any): InitialStateType => {
  const { selectedItem } = state;
  const itemId = Number(e.target.id);
  const newCollection = selectedItem.filter((item) => item.id !== itemId);
  return {
    ...state,
    selectedItem: newCollection,
  };
};

type ActionType = {
  type: string,
  payload: any
}

export const reducer = (state:InitialStateType = initialState, action:ActionType) : InitialStateType => {
  switch (action.type) {
    case ADD_CAR_IN_COLLECTION:
      return addItem(state, action.payload);

    case REMOVE_CAR_IN_COLLECTION:
      return removeCar(state, action.payload);

    default:
      return state;
  }
};
