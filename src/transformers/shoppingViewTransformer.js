export function* shoppingViewTransformer(apiResponse){
    let data={};
    let error={};
    let isSuccess=false;

    if(apiResponse?.status===200){
        isSuccess=true;
        data=apiResponse?.data?.products
    }else{
        isSuccess=false;
        error=apiResponse?.error
    }
    return {data, error, isSuccess};
}