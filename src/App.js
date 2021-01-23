import React from 'react';


// examples 
// eslint-disable-next-line 
import InputExamples from 'examples/input-ex/'
// eslint-disable-next-line 
import TabItemExamples from 'examples/tab-item-ex'

// eslint-disable-next-line 
import TableExamples from 'examples/table-ex'

// eslint-disable-next-line 
import BreadCrumbItemExamples from 'examples/bread-crumb-item-ex'

// eslint-disable-next-line 
import BreadCrumbsExample from 'examples/bread-crumbs-ex'
// eslint-disable-next-line 
import RankCardExamples from 'examples/rank-card-ex'


import { Link, BrowserRouter, Route } from "react-router-dom";

function App() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/contact", label: "Contact" },
    // { to: "/contact/:username", label: "User Details"},
    // { to: "/contact/query=?", label: "User Details" },
    // { to: "/contact/users", label: "User Details" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
];
 const subItems={
  "/dashboard":[
    { to: "/instrutions", label: "Instructions" },
  ]
}
  const Home=()=><h2>Home Page</h2>
  const Contact=()=><h2>Contact Page</h2>
  const Dashboard=()=><h2>Dashboard Page<br/>
  <Link to={'/instrutions'} >Instructions</Link></h2>
  const About=()=><h2>About Page</h2>
  const Blog=()=><h2>Blog Page</h2>
  const Instructions=()=><h2>Instructions </h2>
  return (
    <>
    {/* <InputExamples/> */}
    {/* <TabItemExamples/> */}
    {/* <TableExamples/> */}
    {/* <BreadCrumbItemExamples/> */}
    {/* <RankCardExamples/> */}
  
    <BrowserRouter>
    <BreadCrumbsExample routesList={items} subRoutesList={subItems} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/contact/:username" component={Contact}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/instrutions" component={Instructions}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/blog" component={Blog}/>
    <br/>
        {items.map(({ to, label }) => (
          <>
          <button>
            <Link to={to} key={to}>
              {label}
            </Link>
            </button>
            
          </>
        ))}
     
    </BrowserRouter>
    </>
  );
}

export default App;
