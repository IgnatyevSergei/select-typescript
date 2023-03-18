export const ADD_CAR_IN_COLLECTION = 'ADD_CAR_IN_COLLECTION'
export const REMOVE_CAR_IN_COLLECTION = 'REMOVE_CAR_IN_COLLECTION'

type AddCarInCollectionACType = {
    type: typeof ADD_CAR_IN_COLLECTION,
    payload: any
}
type RemoveCarInCollectionACType = {
    type: typeof REMOVE_CAR_IN_COLLECTION,
    payload: any
}


export const addCarInCollectionAC = (car:any) : AddCarInCollectionACType => ({type:ADD_CAR_IN_COLLECTION, payload:car})
export const removeCarInCollectionAC = (car:any) : RemoveCarInCollectionACType => ({type:REMOVE_CAR_IN_COLLECTION, payload:car})
