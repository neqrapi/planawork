const initState={
    projects:[
        {id:'1',title:'help me find', content:'hello '},
        {id:'2',title:'collect ble ble', content:'hello 1231313'},
        {id:'3',title:'colect saalaalala', content:'hello 31231 '}
    ]
}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log('created project',action.project)
            
    }
return state
}
export default projectReducer;