import React,{Component} from "react"
import style from "./style.mcss"
import echarts from "echarts"
export default class Echart extends Component{
	render(){
		return(
          <div className={style['echart']}>
              <div id={style['mainOne']} ref="mainOne"></div>
              <div id={style['mainTwo']} ref="mainTwo"></div>
          </div>
		)
	}
	componentDidMount(){
		this.echart();
		this.echartTwo();
	}
	echart(){
		 echarts.init(this.refs.mainOne).setOption({
            series: {
                type: 'pie',
                data: [
                    {name: '北科1712', value: 50},
                    {name: '北科1713', value: 68},
                    {name: '北科1714', value: 74},
                    {name: '北科1715', value: 78},
                    {name: '北科1719', value: 42}

                ]
            }
        });
    }
    echartTwo(){
        var myChart = echarts.init(this.refs.mainTwo);

      
        var option = {
            title: {
                text: '北京科技职业学院'
            },
            tooltip: {},
            legend: {
                data:['班级']
            },
            xAxis: {
                data: ["北科1712","北科1713","北科1714","北科1715","北科1719"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [50, 68, 74, 78, 42]
            }]
        };

     
        myChart.setOption(option);
    }
}
