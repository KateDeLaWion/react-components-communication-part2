import React from 'react';
import Child from './Child';

export default function Parent(props) {
    return (
        <div>
            {/* first scenario */}
            {/* <Child {...props} /> */}


            {/* second scenario */}
            <Child {...props} xyz='xyz' />
        </div>
    )
}
