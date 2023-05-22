export function* appInitializeTransformer(apiResponse){
    let data={};
    let error={};
    let isSuccess=false;
    // console.log('transformer::', apiResponse);

    if(apiResponse?.status===200){
        isSuccess=true;
        data=apiResponse?.data
    }else{
        isSuccess=false;
        error=apiResponse?.error
    }
    // console.log('data::', data);
    return {data, error, isSuccess};
}