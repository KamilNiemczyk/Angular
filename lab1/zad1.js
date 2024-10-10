const tab = [
    {
        id : 1,
        name : "AB",
        value : 123,
        active : true
    },
    {
        id : 2,
        name : "BC",
        value : 123,
        active : true
    },
    {
        id : 3,
        name : "CDax",
        value : 123,
        active : false
    },
    {
        id : 4,
        name : "DEee",
        value : 123,
        active : true
    }
]


const processData = (data) => {
    const sum = data.reduce((acc,curr)=> {
        if(curr.active === true){
            acc += 1
        }
        return acc
    }, 0)

    const revName = data.reduce((acc,curr)=> {
        const tab = curr.name.split("").reverse().join("")
        acc.push(tab)
        return acc
    }, [])

    const maxId = data.reduce((acc,curr)=> {
        if(curr.id> acc){
            acc = curr.id
        }
        return acc
    }, 0)

    const sum2 = data.reduce((acc,curr)=> {
        if(curr.name.length > 3){
            acc +=1
        }
        return acc
    }, 0)
    const obj = {
        sum: sum,
        revName : revName,
        maxId : maxId,
        sum2 : sum2
    }
    return obj
}
const wynik = processData(tab)
console.log(wynik);

