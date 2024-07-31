export async function getData(url) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      projectId: "66a9f27b39e2fdc09bbba036",
      environmentId: "66a9f27c39e2fdc09bbba037",
    },
  };

  try {
    const res = await fetch(url, options);
    console.log(res);

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

