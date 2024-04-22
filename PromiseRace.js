const getWeatherFast = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => resolve("getWeatherFast: Weather is windy today"), 3000);
        }
    );
}

const getWeatherSlow = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => resolve("getWeatherSlow: Weather is windy today"), 4000);
        }
    );
}



async function getWeatherData() {
    console.time("getWeatherData");    
    try {
        const apiData = await Promise.any([
            getWeatherFast(),
            getWeatherSlow(),
        ]); 
        console.log("apiData = ", apiData);        
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getWeatherData");
}

getWeatherData();

async function getWeatherData() {
    console.time("getWeatherData");    
    try {
        const apiData = await Promise.race([
            getWeatherFast(),
            getWeatherSlow(),
        ]); 
        console.log("apiData = ", apiData);        
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getWeatherData");
}

getWeatherData();
=================================================
const getWeatherFast = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => reject("getWeatherFast: Weather data not available today"), 3000);
        }
    );
}
async function getWeatherData() {
    console.time("getWeatherData");    
    try {
        const apiData = await Promise.any([
            getWeatherFast(),
            getWeatherSlow(),
        ]); 
        console.log("apiData = ", apiData);        
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getWeatherData");
}

getWeatherData();

async function getWeatherData() {
    console.time("getWeatherData");    
    try {
        const apiData = await Promise.race([
            getWeatherFast(),
            getWeatherSlow(),
        ]); 
        console.log("apiData = ", apiData);        
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getWeatherData");
}
getWeatherData();
==========================
const getTimeOut = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => reject("Timer expired"), 3000);
        }
    );
}


async function getWeatherData() {
    console.time("getWeatherData");    
    try {
        const apiData = await Promise.race([
            getWeatherSlow(),
            getTimeOut()
        ]); 
        console.log("apiData = ", apiData);        
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getWeatherData");
}

getWeatherData();
