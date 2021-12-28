import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";


let alert초기값 = true;

function reducer2(state = alert초기값, action){

    if(action.type == 'click'){
        let copy = state;
        copy = false;
        return copy;
    }

    return state;
}

let 기본state = [{id : 0, name : '멋진신발', quan : 2},{id : 1, name : '멋진가방', quan : 3}];

function reducer(state = 기본state, 액션){
    if(액션.type === '항목추가'){
        let copy = [...state];
        const bool = copy.some(el=>el.id == 액션.payload.id);
        if(bool){
            const idx = copy.findIndex(el=>
                el.id == 액션.payload.id
            )
            copy[idx].quan++;
        }else{
            copy.push(액션.payload);
        }
        return copy;
    }

    if(액션.type === '수량증가'){
        let copy = [...state];
        copy[액션.payload.idx].quan++;
        return copy;
    }

    if(액션.type === '수량감소'){
        const copy = [...state];
        copy[액션.payload.idx].quan--;
        return copy;
    }

    return state;
}

const store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
