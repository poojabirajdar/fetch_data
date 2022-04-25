import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [values, setValue] = useState([]);
  // const [link, setLink] = useEffect();
  // const getData = async () => {
  //   const respose = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  //   setValue(await respose.json());
  // };
  const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    setValue(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {values.map((e) => {
              return (
                <tr>
                  <td>id={e.id}</td>
                  <td> title={e.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
}
