import { Link } from "react-router-dom"
import { Card, CardBody, Col, Container, FormGroup, Input, Label, Row } from "reactstrap"
import { getProfiles } from "../../managers/userProfileManager"
import { useEffect, useState } from "react"
import { updateUser } from "../../managers/userProfileManager"

export const Admin = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    useEffect(() => {
        getProfiles().then(userArray => {
            setUsers(userArray)
            console.log(userArray)
        })
    }, [selectedUser])
    useEffect(() => {
        console.log(selectedUser)
    }, [selectedUser])

    const handleUserSelect = (e) => {
        const optionValue = e.target.value
        const chosenUser = users.find(user => user.firstName == optionValue)
        const baseUser = {
            id: chosenUser.id,
            firstName: chosenUser.firstName,
            lastName: chosenUser.lastName,
            userName: chosenUser.userName,
            email: chosenUser.email,
            roles: chosenUser.roles,
            imageLocation: "none",
            identityUserId: chosenUser.identityUserId
        }
        setSelectedUser(baseUser)
    }

    const handleCheckbox = (e) => {
        if (!selectedUser.roles.includes("Admin")) {
            setSelectedUser({ 
                ...selectedUser, 
                roles: [...selectedUser.roles, "Admin"]
            });
        } else {
            const updatedUserRoles = selectedUser.roles.filter(role => role != "Admin")
            setSelectedUser({
                ...selectedUser,
                roles: updatedUserRoles
            })
        }
    };

    const handleSaveChanges = () => {
        updateUser(selectedUser).then(data => {
            console.log(data)
        }).then(() => {
            getProfiles().then(setUsers)
        })
    }

    return (
        <Container style={{ maxWidth: "500px" }}>
            <button onClick={() => console.log(selectedUser)}>Test</button>
        <Row>
          <Col className="d-flex justify-content-center" style={{marginTop: "4rem"}}>
            <Card className="welcome p-4 d-flex align-items-center" style={{maxWidth: "800px", minHeight: "400px", border: "6px ridge grey"}}>
                <h3>Admin Panel</h3>
                <span className="d-flex my-4">
                    <FormGroup>
                        <Input style={{minWidth: "180px"}} type="select" value={selectedUser?.firstName} onChange={handleUserSelect}>
                        <option>Select a user</option>
                        {users?.map(user => {
                            return <option key={user.id}>{user.firstName}</option>
                        })}
                        </Input>
                    </FormGroup>

                    <FormGroup style={{marginLeft: "0.5rem"}} className="d-flex align-items-center">
                        <Label>Admin</Label>
                        <Input style={{margin: 0, marginLeft: "6px"}} type="checkbox" onChange={handleCheckbox} checked={selectedUser?.roles?.includes("Admin") || false} />
                    </FormGroup> 
                </span>
                <button onClick={handleSaveChanges}>Save Changes</button>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}