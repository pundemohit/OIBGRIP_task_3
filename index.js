
const calculateTemp = () =>{
    const notemp = document.getElementById('temp').value;
    const TempSelect = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[TempSelect.selectedIndex].value;

    const celToFah = (cel)=> {
        let f = Math.round((cel * 9/5) + 32);
        return f;
    }

    const fToC = (feh)=> {
        let c = Math.round((feh - 32)* 5/9);
        return c;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(notemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
        
    }
    else{
        result = fToC(notemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celsius`;
    }
}