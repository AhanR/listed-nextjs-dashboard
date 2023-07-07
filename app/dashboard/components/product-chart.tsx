'use client'
import React, { PureComponent } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default class ActivityChart extends PureComponent<{className : string, data : any, colours : Array<string>}>{


  render() { return (
    <div
      className={`w-full min-h-[120px] ${this.props.className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={this.props.data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="amt"
          >
            {this.props.data.map((_: any, index: number) => (
              <Cell key={`cell-${index}`} fill={this.props.colours[index % this.props.colours.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )}
}
