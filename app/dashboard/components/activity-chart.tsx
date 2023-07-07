'use client'
import React, {PureComponent} from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';

export default class ActivityChart extends PureComponent<{className : String, data : any}>{

  render() { return (
    <div
        className='w-full h-[35vh]'
    >
        <ResponsiveContainer width="100%" height="100%">
            <LineChart 
                className={` col-span-4 ${this.props.className}`}
                data={this.props.data}>
                <XAxis dataKey={"date"}/>
                <YAxis axisLine={false}/>
                <CartesianGrid vertical = {false}/>
                <Line type="monotone" dataKey="min_f" stroke="#E9A0A0" strokeWidth={2} />
                <Line type="monotone" dataKey="avg_f" stroke="#9BDD7C" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )}
}
