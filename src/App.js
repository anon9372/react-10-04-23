import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CounterFunctional from "./components/CounterFunctional";
import LinkList from "./components/linklist";
import FetchEffect from "./components/useEffect/02-fetch-data";
import UseState from "./components/useState";
import UseStateArray from "./components/useStateArray";
import { products } from './data/products'
import UseEffectBasic from "./components/useEffect/01-useEffect-basic";
import UseRefs from './components/useRef/useRefs'
import UseRefBasics from "./components/useRef/useRef-2";
import Cleanup1 from "./components/useEffect/cleanup1";
import Cleanup0 from './components/useEffect/cleanup0'
// import UsersCleanup from "./components/useEffect/cleanup4";
import UseMemo from "./components/performance/useMemeo";
// import UseCallback from './components/performance/useCallback'
import Navbar from "./components/contextapi/context/Navbar";

function App() {
  let marks = [5, 6, 7, 10, 12]
  return (
    <div className="App">
      {/* <LinkList products={products} />
      <Jewelelist /> */}
      {/* <Counter /> */}
      {/* <CounterFunctional />  */}
      {/* <UseState /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffectBasic /> */}
      {/* <FetchEffect /> */}
      {/* <UseRefs /> */}
      {/* <UseRefBasics /> */}
      {/* <Cleanup1 /> N */}
      {/* <UsersCleanup /> */}
      {/* <Cleanup0 /> */}
      {/* <UseMemo marks={marks} /> */}
      {/* <UseCallback /> */}
      <Navbar />

    </div>
  );
}

export default App;
