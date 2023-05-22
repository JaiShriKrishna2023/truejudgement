export function* detailViewTransformer(apiResponse){
    let data={};
    let error={};
    let isSuccess=false;

    if(apiResponse?.status===200){
        isSuccess=true;
        data=apiResponse?.data?.itemDetails
    }else{
        isSuccess=false;
        error=apiResponse?.error
    }
    return {data, error, isSuccess};
}