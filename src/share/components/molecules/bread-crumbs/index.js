import React,{useEffect,useState} from 'react'
import {Wrap} from './styles'
import styled from 'styled-components';
import BreadCrumbItem from 'share/components/atoms/bread-crumb-item'

/**
 * Place breadcrumbs component on top of routes
 */


const BreadCrumbs = ({routesList,history}) => {
      const [breadcrumbsList, setBreadcrumbsList] = useState([])
      console.log("routesList",routesList)

      useEffect(() => {
        let pathName=history.location.pathname
        console.log("pathname",pathName)
        if(pathName!=="/"){
            let nextList=[{ to: '/', label: 'Home' }]
            let currentRoute=routesList.filter(each=>each.to===pathName)[0]
            nextList.push(currentRoute)
            setBreadcrumbsList(nextList)
        }else{
            setBreadcrumbsList([])
        }
      }, [history.location])
      console.log("breadcrumbsList",breadcrumbsList)
    return (
        <Wrap>
            {breadcrumbsList.map(({ to, label },index) => (
                <BreadCrumbItem 
                key={to} 
                to={to} 
                label={label}
                position={index}
                totalCount={breadcrumbsList.length}
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
