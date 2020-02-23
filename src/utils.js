const lookup = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};
const exp = new RegExp("^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");

export function toRoman(input) {
    let total = "";
    let number = input;
    const results = [];
    for (let key in lookup) {
      while (number >= lookup[key]) {
        total += key;
        number -= lookup[key];
        results.push({ symbol: lookup[key], value: key });
      }
    }
    return {total, results};
}

export function fromRoman(input) {
    let romanNumArray = input.split('');
    let total = 0;    
    const results = [];
    for(let i=0; i < romanNumArray.length; i++) {
			let key = `${romanNumArray[i]}${romanNumArray[i+1]}`;
			let currentValue = lookup[key] || 0;
			if (currentValue > 0) {
				i++;
			} else {
				key = romanNumArray[i];
				currentValue = lookup[romanNumArray[i]];
			}
      total += currentValue;
      results.push({ symbol: key, value: currentValue});    
    }
    return {total, results};
}

export function isInputValid(input) {
	return exp.test(input);
}