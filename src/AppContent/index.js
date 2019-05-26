import React from "react";
import { Route } from "react-router-dom";
import MemberData from './MemberData';

export default function AppRouter() {
  return (
    <div>
      <Route path="/memberData" component={MemberData} />
      {/* <Route path="/users/" component={Users} /> */}
    </div>
  );
}