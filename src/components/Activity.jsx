const Activity = ({ activity }) => {
  return (
    <div className="wrapper">
      <ul className="ActivityList">
        <li>Activity: {activity.activity}</li>
        <li>Type: {activity.type}</li>
        <li>Participants: {activity.participants}</li>
      </ul>
    </div>
  );
};

export default Activity;
