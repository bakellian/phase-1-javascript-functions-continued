
function saturdayFun(text) {
    if (text === undefined) { 
      text = 'roller-skate';
    }
    return `This Saturday, I want to ${text}!`
  }

saturdayFun("bathe my dog");

function mondayWork(text) {
    if (text === undefined) {
        text = "go to the office";
    }
    return `This Monday, I will ${text}.`
}

mondayWork("work from home");

function wrapAdjective(string) {
    if (string === undefined) {
        string = "*";
    }
    return function(text) {
        if (text === undefined) {
            text = "special"
        }
        return `You are ${string}${text}${string}!`
    }
}
