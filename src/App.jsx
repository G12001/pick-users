import React, { useState, useEffect } from "react";

function App() {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      imageUrl: "https://example.com/john_doe.jpg",
      key: "jd001",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      imageUrl: "https://example.com/jane_smith.jpg",
      key: "js002",
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      imageUrl: "https://example.com/alex_johnson.jpg",
      key: "aj003",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      imageUrl: "https://example.com/emily_davis.jpg",
      key: "ed004",
    },
    {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      imageUrl: "https://example.com/michael_wilson.jpg",
      key: "mw005",
    },
    {
      name: "Sara Brown",
      email: "sara.brown@example.com",
      imageUrl: "https://example.com/sara_brown.jpg",
      key: "sb006",
    },
    {
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      imageUrl: "https://example.com/daniel_lee.jpg",
      key: "dl007",
    },
    {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      imageUrl: "https://example.com/olivia_taylor.jpg",
      key: "ot008",
    },
    {
      name: "William Miller",
      email: "william.miller@example.com",
      imageUrl: "https://example.com/william_miller.jpg",
      key: "wm009",
    },
    {
      name: "Grace Anderson",
      email: "grace.anderson@example.com",
      ImageUrl: "https://example.com/grace_anderson.jpg",
      key: "ga010",
    },
    {
      name: "Jacob Martinez",
      email: "jacob.martinez@example.com",
      imageUrl: "https://example.com/jacob_martinez.jpg",
      key: "jm011",
    },
    {
      name: "Sophia White",
      email: "sophia.white@example.com",
      imageUrl: "https://example.com/sophia_white.jpg",
      key: "sw012",
    },
    {
      name: "Ethan Moore",
      email: "ethan.moore@example.com",
      imageUrl: "https://example.com/ethan_moore.jpg",
      key: "em013",
    },
    {
      name: "Ava Hall",
      email: "ava.hall@example.com",
      imageUrl: "https://example.com/ava_hall.jpg",
      key: "ah014",
    },
    {
      name: "Liam Turner",
      email: "liam.turner@example.com",
      imageUrl: "https://example.com/liam_turner.jpg",
      key: "lt015",
    },
    {
      name: "Isabella Brooks",
      email: "isabella.brooks@example.com",
      imageUrl: "https://example.com/isabella_brooks.jpg",
      key: "ib016",
    },
    {
      name: "Mason Evans",
      email: "mason.evans@example.com",
      imageUrl: "https://example.com/mason_evans.jpg",
      key: "me017",
    },
    {
      name: "Abigail Reed",
      email: "abigail.reed@example.com",
      imageUrl: "https://example.com/abigail_reed.jpg",
      key: "ar018",
    },
    {
      name: "Logan Harris",
      email: "logan.harris@example.com",
      imageUrl: "https://example.com/logan_harris.jpg",
      key: "lh019",
    },
    {
      name: "Avery Clark",
      email: "avery.clark@example.com",
      imageUrl: "https://example.com/avery_clark.jpg",
      key: "ac020",
    },
  ];

  const [searchVal, setSearchVal] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [addedUsers, setAddedUsers] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const filteredUsers = users.filter(
      (user) =>
        !addedUsers.some((addedUser) => addedUser.key === user.key) &&
        (user.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          user.email.toLowerCase().includes(searchVal.toLowerCase()))
    );
    setFilterUsers(filteredUsers);
  }, [searchVal, users, addedUsers]);

  const addUser = (userToAdd) => {
    setAddedUsers((prevUsers) => [...prevUsers, userToAdd]);
    setSearchVal("");
    setShowSuggestions(false);
  };

  const removeUser = (userIdToRemove) => {
    const updatedUsers = addedUsers.filter(
      (user) => user.key !== userIdToRemove
    );
    setAddedUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>Pick Users</h1>

      <div className="chip-container">
        {addedUsers.map((user) => (
          <div key={user.key} className="chip">
            {user.name}
            <button onClick={() => removeUser(user.key)}>X</button>
          </div>
        ))}
        <input
          name="search"
          value={searchVal}
          placeholder="Type to search..."
          onChange={(e) => {
            setSearchVal(e.target.value);
            setShowSuggestions(true);
          }}
          className="search-box"
        />
      </div>

      {showSuggestions && filterUsers.length > 0 && (
        <div className="suggestion-container">
          {filterUsers.map((user) => (
            <div
              key={user.key}
              className="search-user"
              onClick={() => addUser(user)}
            >
              <p>{user.name}</p>
              <p className="email">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
