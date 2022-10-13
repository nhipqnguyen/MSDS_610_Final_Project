function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("survey.json").then((data) => {
    var sampleIds = data.ids;

    sampleIds.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleIds[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("survey.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the survey.json file 
  d3.json("survey.json").then((data) => {
    console.log(data);
    // 3. Create a variable that holds the food array. 
    var food = data.food;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultFoodArray = food.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var resultFood = resultFoodArray[0];
    // 6. Create variables that hold the ids and dishes.
    var dishes = resultFood.fav_dishes;


    // 1. Create a variable that filters exercise for the object with the desired id number.
    var colors = data.colors;
    var resultColorArray = colors.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the exercise array.
    var resultColor = resultColorArray[0];

    // 3. Create a variable that holds the exercising frequency.
    var color = resultColor.color;


    // 8. Create the trace for the bar chart. 
    var trace = {
      x: [1 ,2, 3, 4, 5],
      y: dishes.reverse(),
      type: "bar",
      orientation: "h",
      marker: {color: color}
    };
    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 5 Favorite Dishes"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData, barLayout);


    // 1. Create a variable that filters exercise for the object with the desired id number.
    var exercises = data.exercise;
    var resultExerciseArray = exercises.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the exercise array.
    var resultExercise = resultExerciseArray[0];

    // 3. Create a variable that holds the exercising frequency.
    var wfreq = parseFloat(resultExercise.freq);
 
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {x: [0, 1], y: [0, 1]},
      value: wfreq,
      title: {text: "Exercise Frequency per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {range: [null, 7]},
        bar: {color: "#e2e620"},
        steps: [
          {range: [0, 1], color: "#afbac4", opacity: 0.95},
          {range: [1, 2], color: "#8aa6bf", opacity: 0.95},
          {range: [2, 3], color: "#688dad", opacity: 0.95},
          {range: [3, 4], color: "#456c8f", opacity: 0.95},
          {range: [4, 5], color: "#214d75", opacity: 0.95},
          {range: [5, 6], color: "#093863", opacity: 0.95},
          {range: [6, 7], color: "#051c30", opacity: 0.95}
        ]        
      }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 500, 
      height: 350, 
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
