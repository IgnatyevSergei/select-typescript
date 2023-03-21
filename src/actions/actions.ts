export const ADD_CAR_IN_COLLECTION = "ADD_CAR_IN_COLLECTION";
export const REMOVE_CAR_IN_COLLECTION = "REMOVE_CAR_IN_COLLECTION";

type AddCarInCollectionACType = {
  type: typeof ADD_CAR_IN_COLLECTION;
  payload: React.MouseEvent<HTMLLIElement, MouseEvent>;
};
type RemoveCarInCollectionACType = {
  type: typeof REMOVE_CAR_IN_COLLECTION;
  payload: React.MouseEvent<HTMLLIElement, MouseEvent>;
};

export const addCarInCollectionAC = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>
): AddCarInCollectionACType => ({ type: ADD_CAR_IN_COLLECTION, payload: e });
export const removeCarInCollectionAC = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>
): RemoveCarInCollectionACType => ({
  type: REMOVE_CAR_IN_COLLECTION,
  payload: e,
});
