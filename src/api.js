///////////////////
//////Register/////
///////////////////

export const registerUser = async (user) => {
  const res = await fetch("http://localhost:8000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });

  const register = res.json();

  return register;
};

///////////////////
///////Login///////
///////////////////

export const loginUser = async (user) => {
  const res = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  const login = await res.json();
  return login;
};

///////////////////////////////////////////
/////////get user token////////////////////
///////////////////////////////////////////

export const getToken = () => {
  try {
    let user;
    user = JSON.parse(localStorage.getItem("user"));
    let token = user.authorization.token;
    return token;
  } catch (err) {
    console.log("no token");
    return null;
  }
};
