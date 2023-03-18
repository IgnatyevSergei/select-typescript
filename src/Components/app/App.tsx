import React, {FC, useState} from 'react';
import SelectedItems from "../selected-items";
import ListItems from "../list-items";
import './App.css'

const App:FC = () => {
  const [hide, setHide] = useState<Boolean>(false);


  const openSelect = ():void => {
    setHide(!hide);
  };

  return (
      <div className="app-container">
        <div className="select">
          <ul className="selected-items-list">
            <SelectedItems />
          </ul>
          <div onClick={openSelect} className="window-for-enter">
            Выберите авто
          </div>
          {hide && (
              <ul className="list-items-block">
                <ListItems  />
              </ul>
          )}
        </div>
      </div>
  );
}

export default App;
