import "whatwg-fetch";

export const GET_USERS = "GET_USERS"
export const EDIT_USER = "EDIT_USER"

const DATA = "/api/users";

export const getUsers = () => {
  return dispatch => {
    return fetch(DATA)
      .then(result => {
        console.log('GET USERS ACTION');
        return result.json();
      })
      .then(users => {
        dispatch({
          type: GET_USERS,
          users: users
        });
      })
      .catch(err => {
        return console.log({ err: err.message });
      })
  }
}

// export const editUser = (user) => {
//   return dispatch => {
//     let data = {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     }

//     return fetch(`${DATA}/${user.id}`,{
//       method: `PUT`,
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(result => {
//         dispatch({
//           type: EDIT_USER,
//           user: result
//         })
//       })
//       .catch(err => {
//         return console.log({ err: err.message });
//       })
//   }
// }