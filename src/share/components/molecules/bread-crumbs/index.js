import React,{useEffect,useState} from 'react'
import {Wrap,ActiveRoute} from './styles'
import BreadCrumbItem from 'share/components/atoms/bread-crumb-item'
import {getRouteDetails} from './helpers'
/**
 * Place breadcrumbs component within the browser router
 */

const BreadCrumbs = ({routesList,subroutesList,history}) => {
      const [breadcrumbsList, setBreadcrumbsList] = useState([])
      const homeRoute=[getRouteDetails(routesList,"/")]

      useEffect(() => {
        let pathName=history.location.pathname
        if(pathName!=="/"){
            let nextList=homeRoute
            let currentRoute=getRouteDetails(routesList,pathName)
            if(currentRoute){
                nextList.push(currentRoute)
                setBreadcrumbsList(nextList)
            }else{
                let currentSubRoute=false
                for(let key in subroutesList){
                    let correctedPath=pathName
                    if((pathName.split("/")>1)){
                        correctedPath=`/${pathName.split("/")[0]}`
                    }
                    currentSubRoute=getRouteDetails(subroutesList[key],correctedPath)
                    if(currentSubRoute){
                        let nextRouteList=homeRoute
                        let getParentRoute=getRouteDetails(routesList,key)
                        nextRouteList.push(getParentRoute)
                        nextRouteList.push(currentSubRoute)
                        setBreadcrumbsList(nextRouteList)
                        break;
                    }else{
                        setBreadcrumbsList([])
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
        <ActiveRoute>{breadcrumbsList.length>0 && breadcrumbsList.slice(-1)[0].label}</ActiveRoute>
        </Wrap>     
    )
}

BreadCrumbs.defaultProps={
    routesList:[
        { to: '/', label: 'Home' },
      ]
}
export default BreadCrumbs
