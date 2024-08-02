import {
  DELETE_BY_ID_URL,
  GET_URL,
  HEADERS,
  PATCH_URL,
  POST_URL,
} from "../constants/constant";

// GET METHOD
export async function getEmployeeData() {
  const options = {
    method: "GET",
    headers: HEADERS,
  };

  try {
    // const res = await fetch(
    //   "https://jsonplaceholder.typicode.com/users",
    //   options
    // );
    const res = await fetch(GET_URL, options);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log("DATA: ", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// GET BY ID
export async function getEmployeeDataById(id) {
  const URL_WITH_DYNM_ID =
    "https://free-ap-south-1.cosmocloud.io/development/api/employeedb/{id}".replace(
      "{id}",
      id
    );
  const options = {
    method: "GET",
    headers: HEADERS,
  };

  try {
    const res = await fetch(URL_WITH_DYNM_ID, options);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// POST METHOD
export async function postEmployeeData(employeeData) {
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(employeeData),
  };

  try {
    const response = await fetch(POST_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// PATCH METHOD
export async function updateEmployeeData(id, employeeData) {
  const options = {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify(employeeData),
  };

  const UPDATE_URL = PATCH_URL.replace("{id}", id);
  try {
    const response = await fetch(UPDATE_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// DELETE METHOD
export async function deleteEmployeeData(id) {
  const DELETE_URL = DELETE_BY_ID_URL.replace("{id}", id);
  // const DELETE_URL = "https://jsonplaceholder.typicode.com/users/{id}".replace(
  //   "{id}",
  //   id
  // );
  console.log(DELETE_URL);
  const options = {
    method: "DELETE",
    headers: HEADERS,
    body: JSON.stringify({}),
  };

  try {
    const response = await fetch(DELETE_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("DELETED");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
