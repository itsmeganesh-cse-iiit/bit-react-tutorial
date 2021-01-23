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
    { to: "/input", label: "Input Fields" },
    { to: "/table", label: "Tables" },
    { to: "/bread-crumb", label: "Bread Crumbs" },
    { to: "/tabs", label: "Tabs" },
    { to: "/rank-card", label: "Rank Card" },
    
];
 const subItems={
  "/bread-crumb":[
    { to: "/bread-crumbs-view", label: "Final View" },
  ]
}
  const Home=()=><>
      <RankCardExamples/>
  </>
  const BreadCrumsComp=()=><><BreadCrumbItemExamples/><br/>
  <Link to={'/bread-crumbs-view'} >Full Bread Crumb view</Link><br/></>
  const BreadCrumbsMore=()=><> <BreadCrumbsExample routesList={items} subRoutesList={subItems} /></>
  return (
    <>

  
    <BrowserRouter>
    <hr/>
    <BreadCrumbsExample routesList={items} subRoutesList={subItems} />
    <hr/>

    <br/>
    {items.map(({ to, label }) => (
      <>
      <button style={{margin:"2px"}}>
        <Link to={to} key={to} style={{textDecoration:"none"}}>
          {label}
        </Link>
        </button>
        
      </>
    ))}
    <center>
    <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/input" component={InputExamples}/>
    <Route exact path="/bread-crumb" component={BreadCrumsComp}/>
    <Route exact path="/bread-crumbs-view" component={BreadCrumbsMore}/>
    <Route exact path="/table" component={TableExamples}/>
    <Route exact path="/tabs" component={TabItemExamples} />
    <Route exact path="/rank-card" component={RankCardExamples}/>
    </div>
    </center>
    </BrowserRouter>
    </>
  );
}

export default App;
