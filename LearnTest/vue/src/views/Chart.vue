<template>
  <div>
    <h3 style="text-align: center">数据统计</h3>
    <br>
    <br>
    <br>
    <el-row>
      <el-col :span="12">
        <div id="main" style="width: 500px;height: 400px"></div>
      </el-col>
      <el-col :span="12">
        <div id="pie" style="width: 500px;height: 500px"></div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import *as echarts from 'echarts'

export default {
  name: "Chart",
  data(){
    return{
    }
  },
  mounted() {
    //页面元素渲染之后触发
    //Line chart
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['稻纵卷叶螟', '稻飞虱', '纹枯病', '兼治螟虫', '稻瘟病']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '稻纵卷叶螟',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '稻飞虱',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '纹枯病',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '兼治螟虫',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '稻瘟病',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 805, 820, 905]
        }
      ]
    };
    myChart.setOption(option);

    //pie chart
    var myChartP = document.getElementById('pie');
    var myChartPie = echarts.init(myChartP);
    var option2;

    option2 = {
      title: {
        text: '',
        subtext: '',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 145, name: '稻纵卷叶螟' },
            { value: 251, name: '稻飞虱' },
            { value: 238, name: '纹枯病' },
            { value: 332, name: '兼治螟虫' },
            { value: 756, name: '稻瘟病' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChartPie.setOption(option2);
  }

}
</script>

<style scoped>

</style>