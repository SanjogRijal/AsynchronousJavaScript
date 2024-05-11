// Parallel Requests Async/Await
//promise.all([]); It takes collection of promises and represent a completion of all the promises specified
import fetch from "node-fetch";

(async () => {
    console.log('......loading');
    const weatherRequest = fetch("https://archive.org/metadata/principleofrelat00eins").then(r => r.json());
    const predictAgeRequest = fetch("https://api.agify.io/?name=michael").then(r => r.json());
    let [weather, predict] = await Promise.all([weatherRequest, predictAgeRequest]);
    console.log(weather, predict);

})();



export default () => {};
