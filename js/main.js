// function botao() {
//     document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";

// }

// function redireciona() {
//     window.open("https://www.google.com.br/")
// }

/* Callbacks e Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Test 1');
    }, 1000);
});

const doOutherThingPromise = () => new Promise((resolve, reject) => {
    // throw new Error("something went wrong");
    setTimeout(function () {
        resolve('Test 2');
    }, 1000);
});

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOutherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

*/

/* Fetch

fetch('/data.json')
    .then(responseStream =>
        responseStream.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err)
    })
*/

/* Async e Await

const simpleFunc = async () => {
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
})
*/

// EventTarget




