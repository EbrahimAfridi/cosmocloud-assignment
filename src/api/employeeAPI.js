import {
  DELETE_BY_ID_URL,
  HEADERS,
  PATCH_URL,
  POST_URL,
} from "../constants/constant";

// GET METHOD
export async function getEmployeeData(url) {
  const options = {
    method: "GET",
    headers: HEADERS,
  };

  try {
    const res = await fetch(url, options);
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

// GET BY ID
export async function getEmployeeDataById(id, url) {
  const URL_WITH_DYNM_ID = url.replace("{id}", id);
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
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
