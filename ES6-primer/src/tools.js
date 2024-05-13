var logger = (output) => {
    console.log(output)
}

export var appName = "ES6 Review";
/* export var dummyfunction = function () {
    return " i am a dummy function" 
}*/
export const dummyfunction = () => {
    let feedback = "i am a dummy function"
    feedback = " i am still a dummy function"
    return feedback;
}


export default logger;