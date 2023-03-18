import React, {FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./selected-items.css";
import { removeCarInCollectionAC } from "../../actions/actions";
import {InitialStateType} from "../../reducer/reducer";

const SelectedItems:FC = ():JSX.Element => {
  const { selectedItem } = useSelector((state:InitialStateType) => state);
  const dispatch = useDispatch();

  const removeItem = (e:any) => {
    dispatch(removeCarInCollectionAC(e));
  };

  return <>{
    selectedItem.map((car) => {
      return (
          <li
              onClick={removeItem}
              className="selectedItems"
              id={car.id.toString()}
              key={car.id}
          >
            {car.carBrand}
          </li>
      );
    })
  }</>;
};

export default SelectedItems;
