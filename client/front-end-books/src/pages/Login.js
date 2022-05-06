import { useState } from "react";
import LoginForm from "../components/LoginForm";
import NewVolunteerForm from "../components/NewVolunteerForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
        <p>
        Already have an account?
        </p>
        <LoginForm onLogin={onLogin} />
        <Button onClick={() => setShowLogin(true)}>
        Log In
        </Button>
        
        <p>
        Interested in being a volunteer reader?
        </p>
        <NewVolunteerForm onLogin={onLogin} />
        <Button onClick={() => setShowLogin(false)}>
        Create my account!
        </Button>
    </Wrapper>
  );
}

export default Login;
