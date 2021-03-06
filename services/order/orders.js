const e = require("express")


const getTable = async (data,type = 'normal',) =>{
    try {
        if(type === "normal"){
            return normalTableModel(data)
        }
        if(type === 'pivot'){
            console.log('pivot')
            return pivotTableModel(data)
        }
    } catch (error) {
        throw error
    }
}

const getHeader = async (data=[]) => {
    if (data.length === 0){
        throw new Error("We have no data for this transaction")
    }

    let output = []
    for (const key in data[0]) {
        output.push(key)
    }

    return output
}

const normalTableModel = (data) => {
    let output = []
    let idx = 0
    data.forEach(e => {
        idx++
        output.push({
            id:`${idx}`,
            fullname: `${e.firstname} ${e.lastname}`,
            email:`${e.email}`,
            item:`${e.item}`,
            quantity:e.quantity,
            total_price:e.total_price
        })
    });
    // console.log(output)
    return output
}

const pivotTableModel = (data) => {

    try {
        let newProperty = {
            id:'',
            fullname:'',
            email:''
        }

        let output = []
    
        data.forEach(e => {
            if(!(e.item in newProperty)){
                newProperty[e.item] = 0
            }
        })

        let cache = {}
        let idx = 0
        data.forEach(e => {
            var obj = {...newProperty}
            obj.email = e.email
            if(!(e.email in cache)){
                cache[e.email] = idx
                obj.id = idx+1
                obj.fullname = e.firstname +" " + e.lastname
                obj[e.item] = e.quantity

                output.push({
                    ...obj
                 })
            }else{
                output[cache[e.email]][e.item] = e.quantity
            }
            idx++;
        })

        return output

    } catch (error) { 
        console.log(error)
    }
}

module.exports = {
    getTable : getTable,
    getHeader: getHeader
}