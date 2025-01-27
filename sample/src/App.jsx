import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fData = await fetch("https://reqres.in/api/users?page=2");
    const json = await fData.json();
    setData(json.data);
    
    json.data.map((user) => {
      console.log(`Email : ${user.email}, First Name: ${user.first_name}`)
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <ul key={d.id}>
          <li>Email: {d.email}</li>
          <li>Name: {`${d.first_name} ${d.last_name}`}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
