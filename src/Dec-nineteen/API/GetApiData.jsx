import React, { useEffect } from "react";

const GetApiData = () => {
  const [items, setItems] = React.useState([]);
  const [dataIsLoaded, setDataIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        console.log("Fetched data:", result);
        setItems(result);
        setDataIsLoaded(true);
      } catch (error) {
        setError(error);
        // setDataIsLoaded(true);
      }
    };
    fetchData();
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time..</h1>
      </div>
    );
  }

  return (
    <div>
      <h3>Fetch data from API in react</h3>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username},
              </div>
              <div>Full_name: {item.name}</div>
              <div>User_Email: {item.email}</div>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetApiData;
//usage of key in list to avoid react unique key warning
