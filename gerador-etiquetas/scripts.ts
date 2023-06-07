const tagGenerator = (info: { 
    product: string, 
    batch: number, 
    age: number, 
    quantity: number
}): string[] => {

    const result: string[] = [];

    for (let i = 1; i <= info.quantity; i++) {
        result.push(`${info.batch}-${info.age}-${i.toString().padStart(3, '0')}`);
        
    }

    return result;

}

console.log(tagGenerator({
    product: 'CPU Dual Core 3.0GHZ',
    batch: 321,
    age: 2022,
    quantity: 11
}));