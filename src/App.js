import "./App.css";
import Activity from "./components/Activity";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");

  const fetchActivityByNum = async (num) => {
    const response = await fetch(
      `http://www.boredapi.com/api/activity?participants=${num}`
    );
    const activity = await response.json();
    console.log(activity);
    setActivity(activity);
  };
  const fetchActivity = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const activity = await response.json();
    console.log(activity);
    setActivity(activity);
  };
  const handleClick = () => {
    let options = document.querySelectorAll("#activityByNum option");
    let activityByNum = document.querySelector("#activityByNum").value;
    console.log(activityByNum);

    if (activityByNum === "") {
      fetchActivity();
    } else {
      fetchActivityByNum(activityByNum);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Activity Application</h1>
        <div className="dropListContainer">
          <label htmlFor="activityByNum">Number of participants:</label>

          <select name="activityByNum" id="activityByNum">
            <option value="" selected>
              Any
            </option>
            <option className="dropdown-content" value="1">
              1
            </option>
            <option className="dropdown-content" value="2">
              2
            </option>
            <option className="dropdown-content" value="4">
              4
            </option>
          </select>
        </div>
        <button
          onClick={() => {
            {
              handleClick();
            }
          }}
        >
          Find Activity
        </button>
      </header>
      {activity && <Activity activity={activity} />}
    </div>
  );
}

export default App;
