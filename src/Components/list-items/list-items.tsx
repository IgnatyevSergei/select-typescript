import React, {FC} from "react";
import "./list-items.css";
import { useDispatch, useSelector } from "react-redux";
import { addCarInCollectionAC } from "../../actions/actions";
import {InitialStateType} from "../../reducer/reducer";

const ListItems:FC = () :JSX.Element => {
  const { listItem}  = useSelector((state:InitialStateType) => state);
  const dispatch = useDispatch();

  const handleAddItem = (e:any) => {
     dispatch(addCarInCollectionAC(e));
    
  };

  return <>{
    listItem.map(({carBrand, id}: { carBrand: string, id: string | number }) => {
      return (
          <li onClick={handleAddItem} id={id.toString()} key={id} className="item">
            {carBrand}
          </li>
      );
    })
  }</>;
};

export default ListItems;
