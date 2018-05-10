import React, {Component} from 'react'
import {SparklinesReferenceLine, Sparklines, SparklinesLine } from 'react-sparklines'
import _ from 'lodash'

function avg (data) {

    return _.round(_.sum(data)/ data.length)
}

export default (props) => {
    return (
        <div>
             <Sparklines width={40} height={20} data={props.data}>
                        <SparklinesLine color={props.color} />
                        <SparklinesReferenceLine type="mean" />
             </Sparklines>
             <div className="row">
                <div className="col-md-6 col-xs-offset-1">
                    {avg(props.data)} {props.units}

                </div>
             </div>
        </div>
    )
}
