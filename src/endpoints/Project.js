import axios from 'axios';

const getToken = () => {
    let user;
    user = JSON.parse(localStorage.getItem("user"));
    let token = user.authorization.token;
  return token; // Stored Token from Local Storage
};

export const update = (id, data) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .post(`http://backend.hope4africa.alresia.com/api/project/${id}`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
        if (response.data.success) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const store = (data) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .post(`http://backend.hope4africa.alresia.com/api/project`, data, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
        if (response.data.success) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const show = (id) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .get(`http://backend.hope4africa.alresia.com/api/project/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data);
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const remove = (id) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .delete(`http://backend.hope4africa.alresia.com/api/project/${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const index = () => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .get(`http://backend.hope4africa.alresia.com/api/project`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data);
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
