import React from 'react'
import DropdownMenu from 'share/components/molecules/dropdown-menu'
import ProfileIcon from "./assets/ProfileIcon";
import LogoutIcon from "./assets/LogoutIcon";
import FaqIcon from "./assets/FaqIcon";
import { useHistory } from "react-router-dom";

const DropdownMenuExamples = () => {
    let history = useHistory();

    const handleLogout=()=>{
        let confirm=window.confirm("Are you sure you want to log out?")
        if(confirm){
            localStorage.removeItem("token");
            history.push({ pathname: "/dropdown-menu" });
        }
      } 
      let profileData = [
        {
          id:1,
          label: "Accordion",
          icon: ProfileIcon,
          route: "/accordion",
        },
        {
          id:2,
          label: "Table",
          icon: FaqIcon,
          route: "/table",
        },
        {
          id:3,
          label: "Function Call",
          icon: LogoutIcon,
          fn:handleLogout
        },
      ];
    return (
        <div style={{marginLeft:"200px"}}>
            <br/><br/>
            <DropdownMenu data={profileData} name={"Umesh Kumar"} history={history} />

        </div>
    )
}

export default DropdownMenuExamples
