import React from "react";
import { useEffect, useState } from "react";

const ENDPOINT = "https://picsum.photos/v2/list";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

export const useGetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const pullData = async () => {
      const response = await fetchJSON(ENDPOINT);
      console.log({ response });
      setData(response);
    };

    pullData();
  }, [setData]);

  return data;
};

const App = () => {
  const [amount, setAmount] = useState(0);
  const less = () => setAmount(amount - 1);
  const more = () => setAmount(amount + 1);

  const [index, setIndex] = useState(null);
  const data = useGetData();
  if (!data) return <div>loading</div>;
  return (
    <div>
      {data.map((x, i) => (
        <button onClick={() => setIndex(i)}>{x.author}</button>
      ))}
      <br />
      <br />
      {index && (
        <img
          src={data[index].download_url}
          alt="image"
          width="500"
          height="500"
        />
      )}

      <div data-test="main">
        <p>How Many pieces do you want?</p>
        <button onClick={less} data-test="lessbtn">
          -
        </button>
        <pre id="currentAmount">{amount}</pre>
        <button onClick={more} data-test="morebtn">
          +
        </button>
      </div>
    </div>
  );
};

export default App;
