/**
 * Retourne si la value correspond à un email valide
 */
 function emailValidation(value) {
    const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    return regexMail.test(value)
}
  
/**
 * Retourne si la value correspond à une date valide
 */
function dateValidation(input) {
    return input > 0
}

/**
 * Retourne si la value correspond à un nom valide
 */
function nameValidation(input) {
    return input.length >= 2
}

/**
 * Retourne si la value correspond à un nombre valide
 */
function numberValidation(input) {
    return input.length > 0
}

test('email', () => {
    expect(emailValidation("bababa")).toBe(false);
    expect(emailValidation("bababa.ba")).toBe(false);
    expect(emailValidation("bababa.ba@d")).toBe(false);
    expect(emailValidation("bababa@baki.com")).toBe(true);
})

test('date', () => {
    expect(dateValidation("")).toBe(false);
    expect(dateValidation("02022020")).toBe(true);
})

test('name', () => {
    expect(nameValidation("")).toBe(false);
    expect(nameValidation("a")).toBe(false);
    expect(nameValidation("bob")).toBe(true);
})

test('number', () => {
    expect(numberValidation("")).toBe(false);
    expect(numberValidation("1")).toBe(true);
})