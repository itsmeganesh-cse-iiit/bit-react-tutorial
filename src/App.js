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
// eslint-disable-next-line 
import TabsExamples from 'examples/tabs-ex'

// eslint-disable-next-line 
import AccordionExamples from 'examples/accordion-ex'


// eslint-disable-next-line 
import DropdownMenuExamples from 'examples/dropdown-menu-ex'

import { Link, BrowserRouter, Route } from "react-router-dom";

function App() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/input", label: "Input Fields" },
    { to: "/table", label: "Tables" },
    { to: "/bread-crumb", label: "Bread Crumbs" },
    { to: "/tabs", label: "Tabs" },
    { to: "/rank-card", label: "Rank Card" },
    { to: "/accordion", label:"Accordion"},
    { to: "/dropdown-menu", label:"DropDown"},
    
];
 const subItems={
  "/bread-crumb":[
    { to: "/bread-crumbs-view", label: "Final View" },
  ],
  "/tabs":[
    { to: "/tabview", label: "Tab view" },
  ]
}
  const Home=()=><>
    <h2>Home</h2>
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
    {/* <center> */}
    <div>
    <Route exact path="/" component={DropdownMenuExamples}/>
    <Route exact path="/input" component={InputExamples}/>
    <Route exact path="/bread-crumb" component={BreadCrumsComp}/>
    <Route exact path="/bread-crumbs-view" component={BreadCrumbsMore}/>
    <Route exact path="/table" component={TableExamples}/>
    <Route exact path="/tabs" component={TabItemExamples} />
    <Route exact path="/tabview" component={TabsExamples} />
    <Route exact path="/rank-card" component={RankCardExamples}/>
    <Route exact path="/accordion" component={AccordionExamples}/>
    <Route exact path="/dropdown-menu" component={DropdownMenuExamples}/>
    </div>
    {/* </center> */}
    </BrowserRouter>
    </>
  );
}

export default App;
