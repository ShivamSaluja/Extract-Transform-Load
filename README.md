# plankLabs

This reository code can be used to extract data from website weather.com and store it into mySQL database.

Step 1: Generate a API key for weather.com

Step 2: Clone the git reposity wu and obtain its source code.
To obtain the source code for wu use command:
git clone git://github.com/sramsay/wu.git
or if you are behind a firewall type:
git clone https://github.com/sramsay/wu.git

Step 3:Install wu. Reading the instruction in README.md of the above repository.
(web address:https://github.com/sramsay/wu/blob/master/README.md)

Step 4:Obtain Pin Codes of the Cities you want weather data for from website federalgovernmentzipcodes.us.

Step 5:Clone this repository using git clone. 

Step 5:Run bash script extractData.
bash ./extractData

Step 6: Install mySql.

Step 7: In mysql create a database WeatherData.
mysql> create database WeatherData;

Step 8:Use database WeatherData.
mysql> use WeatherData

Step 9:Create Table in that database wRecord.
mysql> CREATE TABLE wRecord(pin INT,temprature INT, sky conditions VARCHAR(255),wind VARCHAR(255) ,relative humidity VARCHAR(255) ,dewpoint VARCHAR(255), visibility DECIMAL(8,4));

Load the file weatherdatatr.txt obtained after execution the bash script extractData(Step 5) in the above tabele. 
mysql> LOAD DATA LOCAL INFILE '/Users/shivamsaluja/Documents/weatherDataProject/weatherdataTr.txt'  INTO TABLE wRecord COLUMNS TERMINATED BY '\t';
