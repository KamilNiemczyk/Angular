const tab = [
    {   
        id: 1,
        amount : 123,
        status : "pending"
    },
    {   
        id: 2,
        amount : 124,
        status : "completed"
    },
    {   
        id: 3,
        amount : 123,
        status : "canceled"
    },
    {   
        id: 4,
        amount : 123,
        status : "pending"
    }
]




const transformData = (data, func) => {
    const fil = data.filter((elem) => elem.status === "completed")
    const applyFun = fil.map((elem) => func(elem))
    const result = applyFun.reduce((acc,curr)=> {
        return acc + curr.amount
    },0)
    return result
}

const f = (el) => {
    el.amount = el.amount + 1
    return el 
}

const res = transformData(tab, f)
console.log(res);
