import { Link, Route, Router, Switch } from "wouter";
import Home from "./components/Home";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/404">Not found</Link>
      </div>
      <Router base="/react-wouter">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route>
            <h1>404 Not Found</h1>
            <p>This is default page for not found route</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
