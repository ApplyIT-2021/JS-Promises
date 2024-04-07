const getWeather = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => resolve("Weather is windy today"), 3000);
        }
    );
}

const getStocks = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => resolve("Stocks are neutral today!"), 4000);
        }
    );
}

const getNews = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => resolve("Stay inside home!"), 5000);
        }
    );
}

async function getAllDashboardData() {
    console.time("getAllDashboardData");    
    try {
        const allData = await Promise.all([
            getWeather(),
            getStocks(),
            getNews()
        ]); 
        for(apiData of allData){
            console.log("apiData = ", apiData);        
        }
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getAllDashboardData");
}


getAllDashboardData();

============================================================


const getStocks = () => {
    return new Promise(
        function (resolve, reject){
            setTimeout(() => reject("Stock market is closed today!"), 4000);
        }
    );
}


getAllDashboardData();

============================================================
	
async function getDashboardData() {
    console.time("getDashboardData");    
    try {
        const allData = await Promise.allSettled([
            getWeather(),
            getStocks(),
            getNews()
        ]); 
        for(apiData of allData){
            console.log("apiData = ", apiData);        
        }
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getDashboardData");
}

getDashboardData();

============================================================

async function getDashboardData() {
    console.time("getDashboardData2");    
    try {
        const allData = await Promise.allSettled([
            getWeather(),
            getStocks(),
            getNews()
        ]); 
        for(apiData of allData){
            if(apiData.status === "fulfilled")	
	            console.log("apiData = ", apiData.value);        
    		else if(apiData.status === "rejected")
    	            console.log("apiError = ", apiData.reason);        

        }
    } catch (error) {
        console.log("Error = "+error);
    }    
    console.timeEnd("getDashboardData2");
}

getDashboardData();

============================================================

