# Coding-Exercise-1
Priyanka_Karnam Exercise_1

Dataset: agricultural_land.csv

About this dataset: This dataset contains information about countries and their agricultural land usage percentages from 1960 to 2023.

Data Analysis: 
1) I chose to identify the countries with the highest and lowest percentage of agricultural land in 2022. Since the most recent year (2023) contains null values, I chose 2022 for analysis.
2) Excluded null values from the 2022 column, which contains the percentage of agricultural land.
3) Excluded entities that are not countries, such as regions, income groups, or aggregates, for a fair comparison of agricultural land percentages across actual countries. This includes entities like:
"Arab World", "Asia", "Europe & Central Asia", "World", etc.
4) To measure the proportion of agricultural land in individual countriees as a percentage of their total land area, providing a clear understanding of agricultural land use.

visualization explination:
1) I used simple horizontal barchart to represnet the results. 
2) x-axis represnt 2022 agricultural land percentage, y axis represent the countries.
3) Countries are sorted in descending order based on their 2022 agricultural land percentage values for better clarity and comparison.

Bar chart:
1) Each rectangle represents a country, with the bar's height remaining constant and the width varying according to the 2022 agricultural land percentage.
2) X axis is drawn using <line> with scale linear and using drsign elements like stroke color.
3) similarly y axis is drawn usng <line> with scale band using stroke color 
4) Ticks on x axis to point to the values
5) x and y axis labels
6) Padding between bars for each countries.

Testing: Randomly cross-checked countries and their percentage values against the CSV file to ensure accuracy.

Result: To my surprise, Turkmenistan, despite having vast desert areas, has the highest percentage of agricultural land use relative to its total land area.

please find the attached layout design illustration and explination.
