import React from "react";
import { Link } from "react-router-dom";


function NavBar({ volunteer, setVolunteer }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setVolunteer(null);
      }
    });
  }

  return (
      <Nav>
          <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "rgb(224, 187, 4)"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "rgb(224, 187, 4)"
            }}
                exact
                style={style}
                to="/appointments/new"
            >Volunteer to Read</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "rgb(224, 187, 4)"
            }}
                exact
                style={style}
                to="/schedule"
            >Schedule</NavLink>
      </Nav>
    
  );
}

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "rgb(135, 184, 72)",
    fontWeight: "bold",
    verticleAlign: "center"
}

export default NavBar;