import "./App.css";
import TableComponent from "./stories/tableComponent";

function App() {
  const data = [
    {
      Operator: "*Celcom Axiata (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "yes",
    },
    {
      Operator: "*DiGi Telecom (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "yes",
    },
    {
      Operator: "*Maxis (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "yes",
    },
    {
      Operator: "UMobile (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "yes",
    },
  ];
  return (
    <div className="App">
      <TableComponent data={data}></TableComponent>
    </div>
  );
}

export default App;
