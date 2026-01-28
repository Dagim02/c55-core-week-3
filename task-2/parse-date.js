function parseDateString(dateString) {

    const parts = dateString.split(" ");
    const format = parts[0];     
    const dateValues = parts[1]; 
    const values = dateValues.split("-");
    
    let d, m, y;

    if (format === "MDY") {
        m = Number(values[0]); 
        d = Number(values[1]); 
        y = Number(values[2]); 
    } else {
        d = Number(values[0]); 
        m = Number(values[1]); 
        y = Number(values[2]); 
    }

    return {
        day: d,
        month: m,
        year: y
    };
}

console.log(parseDateString("MDY 10-21-1983")); 
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-03-2024"));