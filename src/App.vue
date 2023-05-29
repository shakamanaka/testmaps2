<template>
<div id="app">
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav> -->

    <div class="flex">
        <router-view />
        <Divider layout="vertical" />
        <Card style="width: 50%;">
            <template #header v-if="lake && lake.type== 'content'">
                Content header
            </template>
            <template #title v-if="lake && lake.type== 'content'">
                Content title
            </template>
            <template #content v-if="lake && lake.type== 'content'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
                <Chart v-if="lake && lake.type == 'chart'" type="bar" :data="lake.data.basicData" :options="options" />
                <div class="content-container" v-if="lake && lake.type== 'content'">
                    <label for="">Links</label>
                    <div class="counter"> {{ lake.data.general }} </div>
                    <a :href="item" v-for="(item,index) in lake.data.links" :key="index"> {{ item }}</a>
                </div>
            </template>
        </Card>
    </div>
    <DataTable v-if="lake" :value="lake.datatable" responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <Column field="content" header="Content"></Column>
        <Column field="demo" header="Demo"></Column>
        <Column field="trueId" header="TrueId"></Column>
    </DataTable>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            checked: false,
            basicData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                scales: {
                    yAxes: [{
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                        },
                        {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: {
                                drawOnChartArea: false
                            }
                        }
                    ]
                }
            }
        };
    },
    computed: mapState([
      'lake'
    ])
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

.flex {
    display: flex;
}
.counter {
    margin: 0px;
    background-color: #E9E9E9;
    padding: 5px;
    text-align: center;
    font-size: 18px;
    font-family: Tahoma, Geneva, sans-serif;
    color: #006600;
    border: 1px #CCCCCC solid;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    width: 100%;
}
.content-container {
    display: flex;
    flex-flow: column;
    align-items: baseline;
}
</style>
