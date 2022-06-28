import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "./NavBar";

const App = () => {
  const [contests, setContests] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/contests")
      .then((res) => res.json())
      .then((contestsData) => setContests(contestsData));
  }, []);

  function handleNewContest(formData) {
    setContests([formData, ...contests]);
  }

  function handleSearchChange(searchTerm) {
    const searchOutput = contests.filter((contest) =>
      contest.site.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setContests(searchOutput)
  }

  return (
    <div>
      <NavBar
        contests={contests}
        onAddNewContest={handleNewContest}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default App;
