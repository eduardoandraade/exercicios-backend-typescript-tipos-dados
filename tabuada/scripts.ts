const tabuada = (numbers: number[]): string => {
    let result: string = '';
    
    for (const n of numbers) {
        for (let i = 0; i <= 10; i++) {
            result += `${n} x ${i} = ${n*i} \n`;
            
            if (i === 10) {
                result += '------------------------ \n'
            }
    }

}

    return result;
}

console.log(tabuada([3, 44, 5, 0]));