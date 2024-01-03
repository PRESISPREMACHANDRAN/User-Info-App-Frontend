import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddData from "./Components/AddData";
import ViewAll from "./Components/ViewAll";
import NotFound from "./Components/NotFound.JSX";
import Search from "./Components/Search";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<AddData/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/viewAll" exact element={<ViewAll/>}/>
      <Route path="*" exact element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
