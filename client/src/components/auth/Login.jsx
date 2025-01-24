import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../managers/authManager";
import { Card, Col, Container, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { UserContext } from "../ApplicationViews";

export default function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const { selectedCharacter, setSelectedCharacter } = useContext(UserContext)
  
  useEffect(() => {
    setSelectedCharacter({})
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((user) => {
      if (!user) {
        setFailedLogin(true);
      } else {
        setLoggedInUser(user);
        navigate("/");
      }
    });
  };

  return (
    <Container style={{ maxWidth: "500px" }}>
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{marginTop: "4rem"}}>
          <Card className="welcome p-4 d-flex justify-content-center align-items-center" style={{maxWidth: "800px", minHeight: "400px", border: "6px ridge grey"}}>
            <h3>Login</h3>
            <FormGroup>
              <Label>Email</Label>
              <Input
                invalid={failedLogin}
                type="text"
                value={email}
                onChange={(e) => {
                  setFailedLogin(false);
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                invalid={failedLogin}
                type="password"
                value={password}
                onChange={(e) => {
                  setFailedLogin(false);
                  setPassword(e.target.value);
                }}
              />
              <FormFeedback style={{textAlign: "center"}}>Login failed</FormFeedback>
            </FormGroup>

            <button style={{marginTop: "1rem", marginBottom: "4px", width: "100px"}} onClick={handleSubmit}>
              Login
            </button>
            <p>
              Not signed up? Register <Link to="/register">here</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
