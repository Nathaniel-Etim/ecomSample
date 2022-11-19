import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import LoginForm from "./loginForm/LoginForm";
import NavBar from "./nav/NavBar";
import { userSliceAction } from "./store/userInfo";
import Registration from "./Registration/Registration";
import Body from "./Body/Body";
import UserNav from "./Body/UserNav";
import Product from "./propduct/Product";
import AvalableItems from "./propduct/avalableItems";
import AvalableIMentems from "./propduct/menItem";
import ElectronicItem from "./propduct/ElectronicItem";
import WomenItems from "./propduct/womenItem";
import JeweleryItems from "./propduct/jeweleryItems";
import Fotter from "./fotter/fotter";
import Loader from "./loader/loader";

function App() {
  const dispatch = useDispatch();
  const registered = useSelector((state) => state.login.register);
  const registeredUser = useSelector((store) => store.userInfo.allUsers);
  const logUserIn = useSelector((store) => store.userInfo.logUserIn);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const SendRegistrationDateFn = async () => {
      setIsLoading(true);
      await fetch(
        `https://react-http-f3ac8-default-rtdb.firebaseio.com/slayLex.json`,
        {
          method: `POST`,
          body: JSON.stringify(registeredUser),
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsLoading(false);
    };

    const GetUserDataFn = async () => {
      setIsLoading(true);
      const getResponse = await fetch(
        `https://react-http-f3ac8-default-rtdb.firebaseio.com/slayLex.json`
      );

      if (!getResponse.ok) {
        console.log(`error in get section`);
      }

      const data = await getResponse.json();

      dispatch(userSliceAction.logInAsUser(data));
    };

    SendRegistrationDateFn();
    try {
      GetUserDataFn();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [registeredUser, dispatch]);

  const fadeEffect = logUserIn ? `` : `fadeEffect`;

  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
      </div>
      {isLoading && <Loader />}
      {!logUserIn && !registered && !isLoading && <LoginForm />}
      {registered && !isLoading && <Registration />}
      {logUserIn && !isLoading && (
        <div className={fadeEffect}>
          <div>
            <UserNav />
          </div>
          <div className="body">
            <div className="sideBar">
              <Body />
            </div>
            <div className="product">
              <Product />
              <AvalableItems />
              <AvalableIMentems />
              <ElectronicItem />
              <WomenItems />
              <JeweleryItems />
            </div>
          </div>
        </div>
      )}
      <div>
        <Fotter />
      </div>
    </React.Fragment>
  );
}

export default App;
