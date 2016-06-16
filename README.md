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

Step 12: For drawing graphs install  following:

12 .1: Apache web server

12.2: PHP

Step 13: Establish the connection with MySQL Database using the hostname, username, password and database name.

Step 14: Execute the query to get the list of Pin Codes from DB and store them in a variable.

Step 15: Iterate over the result set to build an array of maps where each map consists of two keys namely: label and value. The label stores the Pin Code and value contains the temperature of the city.

Step 16: Encode the array of maps into JSON and then output the encoded JSON. (If JSON is something new for you, then we would recommend you to read about it here.)

The integrated code of steps 12 to 16 is stored in a file named: chart_data.php at DocumentRoot.

Step 17: Download FusionCharts from (http://www.fusioncharts.com/download/) and copy the required JavaScript files under js folder in DocumentRoot.

Step 18: Download jQuery 2.x  from (http://jquery.com/download/) and copy it under the above-created js folder.

Step 19: A chat with name chat_sample.html is created (refer to the file chat_sample.html in repository).

Step 20: Fetch the required data from the server via an Ajax call using jQuery.

Step 21: After retrieving the data from the server, initialize the FusionCharts object with the chart properties and chart data.

The code for steps 20 and 21 in in file app.js

Now load the HTML in the browser using the URL: http://localhost/chart_sample.html and you will get the chart GraphofPinCodeVsTemp.png.

