import { Link } from "react-router-dom"
import { Card, CardBody, Col, Container, FormGroup, Input, Label, Row } from "reactstrap"
import { getProfiles, promoteUser } from "../../managers/userProfileManager"
import { useEffect, useState } from "react"
import { demoteUser } from "../../managers/userProfileManager"

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

    const handleDemote = (user) => {
        if (user.identityUserId == "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f") {
            alert("Main Admin cannot be demoted")
            return
        }
        if (!user.roles.includes("Admin")) {
            alert("User is already a non-Admin")
            return
        }
        demoteUser(user).then(() => {
        }).then(() => {
            getProfiles().then(setUsers)
        })
    }
    const handlePromote = (user) => {
        if (user.roles.includes("Admin")) {
            alert("User is already an Admin")
            return
        }
        promoteUser(user).then(() => {
        }).then(() => {
            getProfiles().then(setUsers)
        })
    }

    return (
        <Container>
        <Row>
          <Col className="d-flex justify-content-center" style={{marginTop: "4rem"}}>
            <Card className="granite-background p-4 d-flex align-items-center" style={{width: "100%", maxWidth: "400px", minHeight: "400px", border: "10px ridge grey"}}>
                <h2 style={{border: "6px outset grey", padding: "0.5rem"}}>Admin Panel</h2>
                <span className="d-flex my-4">
                    <FormGroup>
                        {/* <Input style={{minWidth: "180px"}} type="select" value={selectedUser?.firstName} onChange={handleUserSelect}>
                        <option>Select a user</option>
                        {users?.map(user => {
                            return <option key={user.id}>{user.firstName}</option>
                        })}
                        </Input> */}
                        <ul style={{padding: 0, maxHeight: "100%", overflow: "hidden", overflowY: "auto", minWidth: "220px"}}>
                        {users?.map(user => {
                            return (
                                <>  
                                    <span className="d-flex justify-content-between">
                                        <button style={{padding: "2px",fontSize: "14px"}} onClick={() => {handleDemote(user)}}>Demote</button>
                                        {user.roles.includes("Admin") && <li style={{color: "gold", listStyleType: "none", fontWeight: "bold", fontSize: "20px", margin: "0 0.5rem 0 0.5rem"}} key={user.id}>{user.firstName}</li>}
                                        {!user.roles.includes("Admin") && <li style={{color: "white", listStyleType: "none", fontSize: "20px"}} key={user.id}>{user.firstName}</li>}
                                        <button style={{padding: "2px",fontSize: "14px"}} onClick={() => {handlePromote(user)}}>Promote</button>
                                    </span>
                                </>
                            )
                        })}

                        </ul>
                    </FormGroup>
                </span>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}