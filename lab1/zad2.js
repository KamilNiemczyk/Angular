const { after } = require("node:test")

const tab = [
    { product: 'A', region: 'North', sales: 100 },
    { product: 'A', region: 'South', sales: 150 },
    { product: 'B', region: 'North', sales: 200 },
    { product: 'B', region: 'South', sales: 250 },
    { product: 'C', region: 'North', sales: 300 },
    { product: 'A', region: 'East', sales: 120 }
]

const func = (data) => {
    const wynik = data.reduce((acc,curr)=> {
        if(acc[curr.product]){
            acc[curr.product] = acc[curr.product] + curr.sales
        }else{
            acc[curr.product] = curr.sales
        }
        return acc
    }, {})

    const beforeSorted= Object.entries(wynik)
    const afterSorted = beforeSorted.sort((a,b) => b[1]-a[1])
    const tab = []
    for (const [key, value] of afterSorted){
        const o = {[key] : value}
        tab.push(o)
    }
    return tab
}

const result = func(tab)
console.log(result);
