// https://observablehq.com/@abisheklaxmanan/opentox-toxicology-projects-and-programs@115
import define1 from "./a2e58f97fd5e8d7c@620.js";
import define2 from "./7764a40fe6b83ca1@427.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# OpenTox: Toxicology Projects and Programs`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Select from the categories below. Press Ctrl to select multiple choices.`
)});
  main.variable(observer("viewof selected_countries")).define("viewof selected_countries", ["Select","unique_countries","default_countries"], function(Select,unique_countries,default_countries){return(
Select(unique_countries, {label: "Select a country/continent", multiple: true, value: default_countries})
)});
  main.variable(observer("selected_countries")).define("selected_countries", ["Generators", "viewof selected_countries"], (G, _) => G.input(_));
  main.variable(observer("viewof selected_data_types")).define("viewof selected_data_types", ["Select","unique_data_types","default_data_type"], function(Select,unique_data_types,default_data_type){return(
Select(unique_data_types, {label: "Select data type", multiple: true, value: default_data_type})
)});
  main.variable(observer("selected_data_types")).define("selected_data_types", ["Generators", "viewof selected_data_types"], (G, _) => G.input(_));
  main.variable(observer("viewof selected_fundings")).define("viewof selected_fundings", ["Select","unique_fundings","default_fundings"], function(Select,unique_fundings,default_fundings){return(
Select(unique_fundings, {label: "Select funding", multiple: true, value: default_fundings})
)});
  main.variable(observer("selected_fundings")).define("selected_fundings", ["Generators", "viewof selected_fundings"], (G, _) => G.input(_));
  main.variable(observer()).define(["Table","filtered_datasets"], function(Table,filtered_datasets){return(
Table(filtered_datasets)
)});
  main.variable(observer()).define(["vl","filtered_datasets"], function(vl,filtered_datasets){return(
vl.markBar()   
  .data(filtered_datasets)
  .encode(
    vl.y().count(),
    vl.x().fieldN("Species / samples"),
    //vl.tooltip(["Toxicology Projects and Programs", "Number of citations", "Country/ continent", "Type of data produced", "Species / samples", "Type of Fundings"])
  )
  .width(600).height(400).render()
)});
  main.variable(observer()).define(["filtered_datasets"], function(filtered_datasets){return(
filtered_datasets
)});
  main.variable(observer("chart")).define("chart", ["vl","filtered_datasets"], function(vl,filtered_datasets)
{
 const svg =  vl.markBar()   
  .data(filtered_datasets)
  .encode(
    vl.y().count(),
    vl.x().fieldN("Species / samples"),
    //vl.tooltip(["Toxicology Projects and Programs", "Number of citations", "Country/ continent", "Type of data produced", "Species / samples", "Type of Fundings"])
  )
  .width(600).height(400).render()
 return svg.encode
}
);
  main.variable(observer()).define(["vl","filtered_datasets"], function(vl,filtered_datasets){return(
vl.markBar()   
  .data(filtered_datasets)
  .encode(
    vl.y().count(),
    vl.x().fieldN("Type of data produced"),
    //vl.tooltip(["Toxicology Projects and Programs", "Number of citations", "Country/ continent", "Type of data produced", "Species / samples", "Type of Fundings"])
  )
  .width(600).height(400).render()
)});
  main.variable(observer()).define(["vl","filtered_datasets"], function(vl,filtered_datasets){return(
vl.markArc({outerRadius: 150})   
  .data(filtered_datasets)
  .encode(
    vl.theta().count(),
    vl.color().fieldN("Type of data produced"),
    //vl.tooltip(["Toxicology Projects and Programs", "Number of citations", "Country/ continent", "Type of data produced", "Species / samples", "Type of Fundings"])
  )
  .width(600).height(400).render()
)});
  main.variable(observer()).define(["vl","filtered_datasets"], function(vl,filtered_datasets){return(
vl.markBar()   
  .data(filtered_datasets)
  .encode(
    vl.y().fieldQ("Number of citations"),
    vl.x().fieldN("Project/Program Name"),
    vl.tooltip(["Toxicology Projects and Programs", "Number of citations", "Country/ continent", "Type of data produced", "Species / samples", "Type of Fundings"])
  )
  .width(600).height(400).render()
)});
  main.variable(observer("filtered_datasets")).define("filtered_datasets", ["dataset","selected_countries","selected_data_types","selected_fundings"], function(dataset,selected_countries,selected_data_types,selected_fundings){return(
dataset
  .filter(item => selected_countries.includes(item["Country/ continent"]))
  .filter(item => selected_data_types.includes(item["Type of data produced"]))
  //.filter(item => selected_species.includes(item["Species / samples"]))
  .filter(item => selected_fundings.includes(item["Type of Fundings"]))
)});
  main.variable(observer("default_countries")).define("default_countries", ["unique_countries"], function(unique_countries){return(
[unique_countries[0]]
)});
  main.variable(observer("unique_countries")).define("unique_countries", ["get_unique_elements","dataset"], function(get_unique_elements,dataset){return(
get_unique_elements(dataset, "Country/ continent")
)});
  main.variable(observer("default_fundings")).define("default_fundings", ["unique_fundings"], function(unique_fundings){return(
[unique_fundings[0]]
)});
  main.variable(observer("unique_fundings")).define("unique_fundings", ["get_unique_elements","dataset"], function(get_unique_elements,dataset){return(
get_unique_elements(dataset, "Type of Fundings")
)});
  main.variable(observer("default_species")).define("default_species", ["unique_species"], function(unique_species){return(
unique_species
)});
  main.variable(observer("unique_species")).define("unique_species", ["get_unique_elements","dataset"], function(get_unique_elements,dataset){return(
get_unique_elements(dataset, "Species / samples")
)});
  main.variable(observer("default_data_type")).define("default_data_type", ["unique_data_types"], function(unique_data_types){return(
unique_data_types
)});
  main.variable(observer("unique_data_types")).define("unique_data_types", ["get_unique_elements","dataset"], function(get_unique_elements,dataset){return(
get_unique_elements(dataset, "Type of data produced")
)});
  main.variable(observer("get_unique_elements")).define("get_unique_elements", function(){return(
function get_unique_elements(array, property_name) {
  var set = new Set(array.map(x => x[property_name]));
  return Array.from(set).filter(function(item) {return item != null;}).sort()
}
)});
  main.variable(observer("dataset")).define("dataset", ["fetch_dataset_to_array","dataset_url"], function(fetch_dataset_to_array,dataset_url){return(
fetch_dataset_to_array(dataset_url, {})
)});
  main.variable(observer("fetch_dataset_to_array")).define("fetch_dataset_to_array", function(){return(
function fetch_dataset_to_array(dataset_url, query_options) {
  return fetch(dataset_url, query_options).then(response_dataset =>  {
    if (!response_dataset.ok) throw new Error(response_dataset.status);
    return response_dataset.json();}).then(json => json.results.map(x => x.data));
}
)});
  main.variable(observer("dataset_url")).define("dataset_url", ["base_url_edelweiss","dataset_id"], function(base_url_edelweiss,dataset_id){return(
base_url_edelweiss + dataset_id + "/versions/latest/data"
)});
  main.variable(observer("base_url_edelweiss")).define("base_url_edelweiss", function(){return(
'https://api.edelweissdata.com/datasets/'
)});
  main.variable(observer("dataset_id")).define("dataset_id", function(){return(
"b8b9cf03-b3d5-4927-89cd-6e33f6f75623"
)});
  const child1 = runtime.module(define1);
  main.import("Select", child1);
  main.import("Range", child1);
  main.import("Toggle", child1);
  main.import("Table", child1);
  const child2 = runtime.module(define2);
  main.import("vl", child2);
  return main;
}
