import SHOPTYPE from './shop-type'
import Data from '../../data'
const INITIAL_STATE={
    shopdata:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer=(state=INITIAL_STATE,action)=>{
     switch(action.type){
        //  case SHOPTYPE.UPDATE_DATA:
        //      return{
        //          ...state,
        //          shopdata:action.payload
        //      }
         case SHOPTYPE.FETCH_COLLECTION_START:
             return{
                 ...state,
                 isFetching:true

             } 
         case SHOPTYPE.FETCH_COLLECTION_SUCCSESS:
             return{
                 ...state,
                 isFetching:false,
                 shopdata:action.payload
             }
         case SHOPTYPE.FEATCH_COLLECTION_FAILUR:
                return{
                    ...state,
                    isFetching:false,
                    errorMessage:action.payload
                }            
         default:return state
               
     }


}

export default shopReducer
