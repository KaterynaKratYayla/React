import React, {Component} from 'react';
import Chart from 'chart.js';

export default class ChartDemo extends Component{
 
    canvas = React.createRef();

    componentDidMount = () => {

        console.log('Canvas', this.canvas);

        let ctx = this.canvas.current.getContext('2d')

        this.chart = new Chart (ctx, {
            type: 'line',
            data: {
                labels: ['One','Two','Three','Four','Five','Six'],
                datasets: [
                {label: 'One',
                 data: [5, 30, 20, 15, 10,27] ,
                 backgroundColor: 'rgba(255,99,132, 0.2)',
                 borderColor: 'rgba(255,99,132,1)',
               },
                {label: 'Two',
                 data: [20, 10, 5, 10, 20,5] ,
                 backgroundColor: 'rgba(133,244,244, 0.2)',
                 borderColor: 'rgba(133,244,244,1)',
              }
              ]
            }  
          })
       }

       changer = () =>{
           console.log('before:' , this.chart.data.datasets)

           this.chart.data.datasets.forEach(function(item){
               console.log('[before:]', item)
            let newItem = item.data.map(function(innerItem){
                console.log('before:' , innerItem)
                let min = Math.ceil(5);
                let max = Math.floor(30);
                innerItem = Math.floor(Math.random() * (max - min)) + min; 
                console.log('after :' , innerItem)
                return innerItem
               })
               
               console.log('[after:]', newItem)
               return item.data = newItem;
            // console.log('[after:]', item)
               
           }) 
           console.log('after:', this.chart.data.datasets)
           this.chart.update();
               
       }

       render(){

           return(
               <div>
                   <h1>Chart</h1>
                   <button onClick={this.changer}>Randomize</button>
                   <canvas
                       ref={this.canvas}
                       width='200'
                       height='200'
                       />
                </div>
           )
       }

} 
