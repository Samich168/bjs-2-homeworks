function parseCount(number){
    let result = Number.parseFloat(number);
    try {
        if (isNaN(result)){
            throw new Error("Невалидное значение");
        } 
    }
    catch (error){
        console.log(error);
    }
    finally{
        return result
    }
}
function validateCount(count){
    try{
        return parseCount(count)
    }
    catch(error){
        return error;
    }
}
parseCount("dgdf5hdfgh")