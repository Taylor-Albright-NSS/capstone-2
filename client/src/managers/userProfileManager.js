const _apiUrl = "/api/userprofile";

export const getProfiles = () => {
  return fetch(_apiUrl + "/withroles").then((res) => res.json());
};

export const getProfile = (id) => {
  return fetch(_apiUrl + `/${id}`).then((res) => res.json());
};

export const updateUser = async (user) => {
  console.log(user)
  const response = await fetch(`${_apiUrl}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  const data = await response.json()
  console.log(data.message)
  return data
} 

// export const getAllUsers = async () => {
//   try {
//     const response = await fetch(`${_apiUrl}`)
//     if (!response.ok) {
//       throw new Error(`Fetch failed`)
//     }
//     const data = await response.json()
//     return data
//   } catch(error) {
//     console.error(error)
//   }
// }