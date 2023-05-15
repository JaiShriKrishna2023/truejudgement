export function* rightPanelTransformer(apiResponse){
    const data={};
    const error={};
    let isSuccess=false;

    if(apiResponse?.statusCode===200){
        isSuccess=true;
        data=apiResponse?.data
    }else{
        isSuccess=false;
        error=apiResponse?.error
    }
    return {data, error, isSuccess};
}