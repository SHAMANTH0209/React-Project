import "./App.css";
import Payment from "./dec5/Payment";

function App() {
  const name = "David";
  const number = "12345678";

  const mobile = [
    {
      name: "iPhone 17, 256 GB",
      url: "https://m.media-amazon.com/images/I/71657TiFeHL._SX466_.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "iPhone 17, 256 GB",
      url: "https://m.media-amazon.com/images/I/71657TiFeHL._SX466_.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div>
      <Payment name={name} number={number} mobile={mobile} />
    </div>
  );
}

export default App;
