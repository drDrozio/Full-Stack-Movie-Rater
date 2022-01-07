import React, { Component } from 'react';
import { CtxConsumer } from '../index'

class Content extends Component {

    render(){

        return(
            <CtxConsumer>
                {
                    (context) => (
                        <div>
                        {
                            context.names.map( names =>{
                                    return (
                                        <div key={names}>
                                            <h6>{names}</h6>
                                        </div>
                                        );
                                })
                        }
                        </div>
                    )
                }
            </CtxConsumer>
        )
    }
}

export default Content;