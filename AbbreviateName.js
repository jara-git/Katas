function abbrevName(name){
    let upper = name.toUpperCase();
    let splitted = upper.split(" ");
    let firstInitial= splitted[0];
    let secondInitial = splitted[1];
    
    return `${firstInitial[0]}.${secondInitial[0]}`;
    }
    abbrevName('Harry Sanders');