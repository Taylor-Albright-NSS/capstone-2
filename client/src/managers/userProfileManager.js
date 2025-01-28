const _apiUrl = "/api/userprofile";

export const getProfiles = () => {
  return fetch(_apiUrl + "/withroles").then((res) => res.json());
};

export const getProfile = (id) => {
  return fetch(_apiUrl + `/${id}`).then((res) => res.json());
};

export const demoteUser = async (user) => {
  console.log(user)
  const response = await fetch(`${_apiUrl}/demote/${user.identityUserId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  const data = await response.json()
  console.log(data.message)
  return data
}

export const promoteUser = async (user) => {
  console.log(user)
  const response = await fetch(`${_apiUrl}/promote/${user.identityUserId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  const data = await response.json()
  console.log(data.message)
  return data
} 
