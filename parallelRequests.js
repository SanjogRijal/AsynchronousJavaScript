// Parallel Requests Async/Await
let url = 'http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0';
import fetch from "node-fetch";

(async () => {
    
    console.log('......loading');
    const weatherRequest = fetch("https://archive.org/metadata/principleofrelat00eins");
    
    const predictAgeRequest = fetch("https://api.agify.io/?name=michael");

    let weatherResponse = await weatherRequest;
    let predicAgeResponse = await predictAgeRequest;

    let weather = await weatherResponse.json();
    let prediction = await predicAgeResponse.json();

    console.log(weather, prediction);
    
})();

export default () => {};
