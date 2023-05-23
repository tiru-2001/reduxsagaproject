import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdata } from "./reduxsagafolder/slice";
import "./App.css";
const App = () => {
  const cats = useSelector((state) => state.catreducer.mycat);
  console.log(cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Cat species</h1>
      <p>Images of different species</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              {/* <img
                alt={cat.name}
                src={cat.image.url}

                width="200"
                height="200"
              /> */}
            </div>
            <div className="column column-right">
              <h1>{cat.name}</h1>
              <h5>Temperament:{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>View more cats</button>
    </div>
  );
};

export default App;
