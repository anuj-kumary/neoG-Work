function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

//Question :-1

// const printMsg = async (msg) => {
//   const getData = await fakeFetch(msg);
//   console.log(getData);
// };
// printMsg("Hello");

//Question :-2
// const printMsg = async(msg,status) => {
//   const getData = await fakeFetch(msg,status)
//   console.log(getData)
//   }

//   printMsg("Hello" , true)

//Question :-3
// const getServerResponseLength = async (msg) => {
//   const getData = await fakeFetch(msg);
//   console.log(getData.length);
// };
// getServerResponseLength("Anuj");

//Question :-3

const syncCallsToServers = async (msg1, msg2) => {
  const getData = await fakeFetch(msg1);
  console.log(await fakeFetch(`msg1:${getData} msg2:${msg2}`));
};
syncCallsToServers("Hello", "Anuj");
