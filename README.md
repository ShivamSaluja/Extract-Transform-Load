#plankLabs

1: This repository code can be used to extract data from website weather.com and store it into a mySQL database.

2: Extract data from mySQL in JSON format using PHP and draw Graphs.A sample graph in the repository (GraphofPinCodeVsTemp.png) is between pin code of cities of New York and temperature

Step 1: Generate an API key for weather.com

Step 2: Clone the git repository wu and obtain its source code.

To get the source code for wu use command: git clone git://github.com/sramsay/wu.git

or if you are behind a firewall type:

git clone https://github.com/sramsay/wu.git

Step 3: Install wu by reading the instruction in README.md of the above repository. (web address:https://github.com/sramsay/wu/blob/master/README.md)

Step 4: Obtain Pin Codes of the Cities you want weather data for from website federalgovernmentzipcodes.us.

Step 5: Clone this repository using git clone.

Command to clone this repository: git clone https://github.com/ShivamSaluja/plankLabs.git

Step 6: Run bash script extractData.

bash ./extractData

Step 7: Install mySql (from https://www.mysql.com/).

Step 8: In MySQL create a database WeatherData.

mysql> create database WeatherData;

Step 9: Use database WeatherData.

mysql> use WeatherData

Step 10: Create Table in that database wRecord.

mysql> CREATE TABLE wRecord(pin INT,temprature INT, sky conditions VARCHAR(255),wind VARCHAR(255) ,relative humidity VARCHAR(255) ,dewpoint VARCHAR(255), visibility DECIMAL(8,4));

Step 11: Load the file weatherdatatr.txt obtained after execution the bash script extractData(Step 5) in the above table.

mysql> LOAD DATA LOCAL INFILE '/Users/shivamsaluja/Documents/weatherDataProject/weatherdataTr.txt' INTO TABLE wRecord COLUMNS TERMINATED BY '\t';
