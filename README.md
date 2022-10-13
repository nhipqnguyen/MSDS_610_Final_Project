# MSDS 610 Final Project
# Topic: EDA - Common Data Visualization Tools
#### *By Joy Huang and Nhi Nguyen*
Data visualization is an important part of EDA. In this project, we would like to introduce two common data visualization tools: Plotly.js library and Tableau.
1. Plotly.js

  Plotly.js is a charting library that comes with over 40 chart types, 3D charts, statistical graphs, and SVG maps. For demonstration, we use Plotly.js to build a dashboard with interactive charts with a dataset obtained from our classmates' survey responses (survey.json). Upon selection of an ID number in a pull down list, a dashboard with the following visualizations will be displayed:
- A general information panel with the selected survey participant's information:
  - Name
  - Hometown
  - Whether or not they have a pet
  - They are a morning or night person?
  - Favorite color
- A horizontal bar chart displaying the participant's top 5 favorite dishes in descending order. The bars' color is the participant's favorite color.
- A gauge chart displaying the selected participant's weekly exercise frequency's value as a measure from 0-7 on the progress bar.
- The dashboard can be accessed via this link: [MSDS 610 Interactive Dashboard](https://nhipqnguyen.github.io/MSDS_610_Final_Project/). Below is a screenshot of the dashboard after getting deployed to Git Pages.

![MSDS 610 Interactive Dashboard](https://github.com/nhipqnguyen/MSDS_610_Final_Project/blob/main/images/plotly_dashboard.png)

2. Tableau

  Tableau is a visual analytics platform and is one of the most popular data visualization tools today. This analytics platform makes it easier for people to explore and manage data, and faster to discover and share insights. One of Tableau's strengths is that users don't need any prior programming experience to create visualizations. In this project, we have a simple example of how Tableau can help build engaging deliveries to any audience.

  The data set we use is from Citi Bike NYC, which contains information on the bike renting service this company provides in New York City. In Tableau, we create worksheets with a variety of graphs from the data, then combine them into a story which provides insights into customers demographic information, service performance, etc. The result story can be accessed via this link: [CitiBikeNYC Story](https://public.tableau.com/app/profile/nhi.nguyen1546/viz/citibike_challenge_16283211732780/NYCCitiBikeStory).
