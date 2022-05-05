import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AppointmentList from "../pages/AppointmentList";
import NewReadingAppointment from "../pages/NewReadingAppointemnt";



function App() {
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((volunteer) => setVolunteer(volunteer));
      }
    });
  }, []);

  if (!volunteer) return <Login onLogin={setVolunteer} />;

  return (
    <>
      <NavBar volunteer={volunteer} setVolunteer={setVolunteer} />
      <main>
        <Switch>
          <Route path="/new">
            <NewReadingAppointment volunteer={volunteer} />
          </Route>
          <Route path="/schedule">
            <AppointmentList />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;