<template>
<div class="hello" ref="chartdiv">
</div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import test from './test.json'
// am4core.useTheme(am4themes_animated);

export default {
    name: 'HelloWorld',
    data() {
        return {
            checked: false,
            chart: null
        };
    },
    mounted() {

        // AmCharts.makeChart("chartdiv", {
        //         "type": "map",
        //         "theme": "dark",
        //         "dataProvider" : {
        //           "mapURL": "https://www.amcharts.com/lib/3/maps/svg/europeHigh.svg",
        //           "getAreasFromMap": true
        //         },
        //         "areasSettings": {
        //           "autoZoom": true,
        //           "selectedColor": "#CC0000"
        //         }
        //       });
        var chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
        chart.geodata = test;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{COUNTY}";
        polygonTemplate.fill = am4core.color("#74B266");
        let selectedPolygon;
        polygonTemplate.events.on("hit", function (ev) {
          this.$store.state.lake = ev.target.tooltipDataItem._dataContext.LAKE ?? null
            let polygon = ev.target;
            if (selectedPolygon && selectedPolygon !== polygon) {
                selectedPolygon.isActive = false;
            }
            selectedPolygon = polygon;
            selectedPolygon.isActive = true;
        }, this);

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");
        var as = polygonTemplate.states.create("active");
        as.properties.fill = am4core.color("#FF0000");
        polygonSeries.exclude = ["AQ"];
        polygonSeries.data = [{
          "id": "14043",
          "fill": am4core.color("#367B25")
        }, {
          "id": "14067",
          "fill": am4core.color("#367B25")
        }];

        // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = "fill";
       

        // // Set map definition
        // chart.geodata = am4geodata_region_mexico_jalLow;

        // // Set projection
        // chart.projection = new am4maps.projections.Miller();

        // // Create map polygon series
        // var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // // Make map load polygon (like country names) data from GeoJSON
        // polygonSeries.useGeodata = true;

        // // Configure series
        // var polygonTemplate = polygonSeries.mapPolygons.template;
        // polygonTemplate.tooltipText = "{name}";
        // polygonTemplate.fill = am4core.color("#74B266");

        // // Create hover state and set alternative fill color
        // var hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#367B25");
        // let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        // chart.paddingRight = 20;

        // let data = [];
        // let visits = 10;
        // for (let i = 1; i < 366; i++) {
        //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        // }

        // chart.data = data;

        // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        // dateAxis.renderer.grid.template.location = 0;

        // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // valueAxis.tooltip.disabled = true;
        // valueAxis.renderer.minWidth = 35;

        // let series = chart.series.push(new am4charts.LineSeries());
        // series.dataFields.dateX = "date";
        // series.dataFields.valueY = "value";

        // series.tooltipText = "{valueY.value}";
        // chart.cursor = new am4charts.XYCursor();

        // let scrollbarX = new am4charts.XYChartScrollbar();
        // scrollbarX.series.push(series);
        // chart.scrollbarX = scrollbarX;

        this.chart = chart;
    },

    beforeDestroy() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    width: 100%;
    height: 500px;
}
</style>
