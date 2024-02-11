import { useState } from "react";
import "./style.css";
import Sidebar from "./components/Sidebar";
import PersomalInfo from "./components/PersonalInfo";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const [age, setAge] = useState(25);
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState([
    {
      title: "title one",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title two",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
  ]);

  const handleAge = (min) => {
    setAge(age - min);
    age <= 0 ? setAge(26) : setAge(age - min);
  };

  const handleAddAge = () => {
    setAge(age + 1);
  };

  const handleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {/* <h1> Hai, Selamat Pagi</h1>
      <p>umur saya adalah {age}</p>
      <button onClick={() => handleAge(2)}>Kurangi umur</button>
      <button onClick={handleAddAge}>Tambah Umur</button> */}

      {/* <button onClick={handleSideBar}>{sidebar ? "  X  " : ">>"}</button> */}

      <Button handleSideBar={handleSideBar}>|||</Button>
      {sidebar && <Sidebar />}
      <PersomalInfo age={age} />
      <div className="card-container">
        {data.map((data, index) => (
          <Card key={index} title={data.title} description={data.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
