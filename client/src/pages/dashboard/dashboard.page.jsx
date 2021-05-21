import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../components/postCard/postCard.component";

function Dashboard() {
  return (
    <div>
      Dashboard
      <PostCard />
      <Link to="daily-observation-report">
        <button>Daily Observation Report</button>
      </Link>
      <Link to="performance-report">
        <button>Performance Report</button>
      </Link>
    </div>
  );
}

export default Dashboard;
