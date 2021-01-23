

export const getRouteDetails=(routeList,path)=>{
    return routeList.filter(each=>each.to===path)[0]
}