import React from 'react';
import More from './More';

const Other = ({counter}) => {
    return (
        <div>
            Other: {counter}
            <More/>
        </div>
    );

}

export default Other;