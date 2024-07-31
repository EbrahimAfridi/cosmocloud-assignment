import { HEADERS, POST_URL } from "../constants/constant";

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
