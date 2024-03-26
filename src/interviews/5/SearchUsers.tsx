import React, { useEffect, useState } from "react";

// Создать приложение где можно искать по списку людей
// Одно поле для ввода поискового запроса, запрашивать данные по вводу текста
// https://swapi.dev/api/people?search=skywaler&page=1

const fetchUsers = (user) => {
  return fetch(`https://swapi.dev/api/people?search=${user}&page=1`)
    .then((res) => res.json())
    .then((data) => data);
};

const debounce = (callback, delay) => {
  let time;

  return (...args) => {
    clearTimeout(time);

    time = setTimeout(() => {
      time = null;
      callback(...args);
    }, delay);
  };
};

const SearchUsers = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  console.log("value", value);

  useEffect(() => {
    if (value) {
      fetchUsers(value).then((data) => {
        setUsers(data);
      });
    }
  }, [value]);

  const handleSearchUsers = debounce((e) => {
    console.log("e.target.value", e);
    setValue(e.target.value);
  }, 1000);

  return (
    <div>
      <input type="text" onChange={handleSearchUsers} />
      Список пользователей:
      {users.results &&
        users?.results.map((user, index) => (
          <ul key={index}>
            <ol>{user.name}</ol>
          </ul>
        ))}
    </div>
  );
};

export default SearchUsers;
