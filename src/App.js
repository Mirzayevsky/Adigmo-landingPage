import { AppWrapper } from "./App.styles";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Success from "./pages/success";

function App() {
  return (
        <AppWrapper>
            <Provider store={store}>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path="/success" element={<Success/>} />
                </Routes>
            </Provider>
        </AppWrapper>
  )
}

export default App;
