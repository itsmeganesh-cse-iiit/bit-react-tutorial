

export const getRouteDetails=(routeList,path)=>{
    let filteredItem=routeList.filter(each=>each.to===path)
    return filteredItem ? filteredItem[0] : false
}