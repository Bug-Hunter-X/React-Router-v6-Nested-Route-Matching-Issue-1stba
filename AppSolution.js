```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nested/:id" element={<NestedRoute />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function NestedRoute(){
  let location = useLocation();
  return (
    <div>
      <h1>Nested Route</h1>
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}

function NoMatch() { return <h1>No Match</h1>; }
export default App;
```