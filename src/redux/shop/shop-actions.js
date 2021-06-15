import SHOPTYPE from './shop-type'

export const updateData=items=>({
    type:SHOPTYPE.UPDATE_DATA,
    payload:items
})

export const fetchStart=()=>({
    type:SHOPTYPE.FETCH_COLLECTION_START
})

export const fetchSuccess=items=>({
    type:SHOPTYPE.FETCH_COLLECTION_SUCCSESS,
    payload:items
})

export const fetchFailur=errorMessage=>({
    type:SHOPTYPE.FEATCH_COLLECTION_FAILUR,
    payload:errorMessage
})