import React from "react";

const UserList = ({ data }) => {
  return (
    <div>
      <ol>
        {data.data.map((emp) => (
          <li key={emp._id}>
            {emp.name}
            <br />
            {emp.email}
            <br />
            {emp.address_line_1}
            <br />
            {emp.city}
            <br />
            {emp.country}
            <br />
            {emp.zip_code}
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
