import { useState } from "react";
import { register } from "../../managers/authManager";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Container, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";

export default function Register({ setLoggedInUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [passwordMismatch, setPasswordMismatch] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      const newUser = {
        firstName,
        lastName,
        userName,
        email,
        password,
        imageLocation: imageLocation || null,
      };
      for (const prop in newUser) {
        if (newUser[prop]?.length < 1 || !newUser[prop]?.trim() || newUser[prop] == null) {
          alert("All fields must be filled out")
          console.log("MUST BE VALID")
          return
        }
      }
      register(newUser).then((user) => {
        if (user.errors) {
          setErrors(user.errors);
        } else {
          setLoggedInUser(user);
          navigate("/");
        }
      });
    }
  };

  return (
    <Container style={{ maxWidth: "500px" }}>
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{marginTop: "4rem"}}>
          <Card className="welcome p-4 d-flex justify-content-center align-items-center" style={{maxWidth: "800px", minHeight: "400px", border: "6px ridge grey"}}>
          <h3>Sign Up</h3>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Image URL</Label>
              <Input
                type="text"
                value={imageLocation}
                onChange={(e) => {
                  setImageLocation(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                invalid={passwordMismatch}
                type="password"
                value={password}
                onChange={(e) => {
                  setPasswordMismatch(false);
                  setPassword(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                invalid={passwordMismatch}
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setPasswordMismatch(false);
                  setConfirmPassword(e.target.value);
                }}
              />
              <FormFeedback>Passwords do not match!</FormFeedback>
            </FormGroup>
            {errors.map((e, i) => (
              <p key={i} style={{ color: "red" }}>
                {e}
              </p>
            ))}
            <button
              style={{marginTop: "1rem", marginBottom: "4px"}}
              onClick={handleSubmit}
              disabled={passwordMismatch}
            >
              Register
            </button>
            <p>
              Already signed up? Log in <Link to="/login">here</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
