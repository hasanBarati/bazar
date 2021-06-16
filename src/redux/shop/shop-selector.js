import {createSelector} from 'reselect'

const selectShop=state=>state.shop
export const selectShopItems=createSelector(
    [selectShop],
    shop=>shop.data
)

export const selectCollectionForOverview=createSelector(
    [selectShopItems],
    data=>data? Object.keys(data).map(key=>data[key]):[]
)

export const selectCollection=collectionUrlParams=>createSelector(
    [selectShopItems],
    data=>(data? data[collectionUrlParams]:null)
    //collection[hats]  یا  collection[sneakres]
)

export const selectIsCollectionFetching=createSelector(
    [selectShop],
    shop=>shop.isFetching
    
)

export const selectIsdataLoaded=createSelector(
    [selectShop],
    shop=>!!shop.data
)