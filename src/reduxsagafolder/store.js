import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Catdata from "./slice";
import catsaga from "./sagafile";
const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    catreducer: Catdata,
  },
  middleware: [saga],
});

saga.run(catsaga);
export default store;
