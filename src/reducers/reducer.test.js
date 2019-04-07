import * as TYPE from './../constands/index'
 
const inityble = {
    data:'day la state ban dau'
}
export default (state=inityble,action)=>{
    switch(action.type){
        case TYPE.TEST:
        return{
            ...state,
            data:'data da vao toi reducer'
        }
        default: break;
    }
    return state;
}