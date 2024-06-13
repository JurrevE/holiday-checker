import Header from "./Header";
import Card from "./Card";
import "./App.css";

import data from "./data";

function App() {
  const mappedData = data.map((item) => {
    return (
      <Card
        key={item.title}
        title={item.title}
        location={item.location}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="maincontent">
      <Header />
      {mappedData}
    </div>
  );
}

export default App;
