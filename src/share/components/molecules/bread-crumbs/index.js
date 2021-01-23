import React,{useEffect,useState} from 'react'
import {Wrap} from './styles'
import styled from 'styled-components';
import BreadCrumbItem from 'share/components/atoms/bread-crumb-item'
import {getRouteDetails} from './helpers'
/**
 * Place breadcrumbs component on top of routes
 */


const BreadCrumbs = ({routesList,subroutesList,history}) => {
      const [breadcrumbsList, setBreadcrumbsList] = useState([])
      const homeRoute=[getRouteDetails(routesList,"/")]

      useEffect(() => {
        let pathName=history.location.pathname
        console.log("pathname",pathName)
        if(pathName!=="/"){
            let nextList=homeRoute
            let currentRoute=getRouteDetails(routesList,pathName)
            if(currentRoute){
                nextList.push(currentRoute)
                setBreadcrumbsList(nextList)
            }else{
                let currentSubRoute=false
                for(let key in subroutesList){
                    currentSubRoute=getRouteDetails(subroutesList[key],pathName)
                    if(currentSubRoute){
                        let nextRouteList=homeRoute
                        let getParentRoute=getRouteDetails(routesList,key)
                        nextRouteList.push(getParentRoute)
                        nextRouteList.push(currentSubRoute)
                        setBreadcrumbsList(nextRouteList)
                        break;
                    }
                }
            }
        }else{
            setBreadcrumbsList([])
        }
      }, [history.location])

    const onBreadCrumClick=(path)=>{
        history.push({pathname:path})
    }
    return (
        <Wrap>
            {breadcrumbsList.map(({ to, label },index) => (
                <BreadCrumbItem 
                key={to} 
                to={to} 
                label={label}
                position={index}
                totalCount={breadcrumbsList.length}
                history={history}
                onClick={onBreadCrumClick}
                 />
            ))}
        <br/>
        </Wrap>     
    )
}

BreadCrumbs.defaultProps={
    routesList:[
        { to: '/', label: 'Home' },
      ]
}
export default BreadCrumbs
