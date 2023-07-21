import SelectorButton from "./SelectorButton";
import { useState } from 'react';
import React from 'react';

const SnippetSelector = ({films, chooseSnippet}) => {

    const selections = [
        {id: 1, title: 'Film Title'},
        {id: 1, title: 'Description'},
        {id: 1, title: 'Director'}
    ];

    const [whatToType, setWhatToType] = useState(null);

    const chooseWhatToType = (selection) => setWhatToType(selection);

    return (
        <div>
                {!whatToType ?
            <div>
                <h4>"What would you like to type?"</h4>
                <SelectorButton buttonNames={selections} onSelection={chooseWhatToType} />
            </div>
            : null}
            {whatToType && films ?
            <div>
                <h4>Choose One</h4>
                <SelectorButton buttonNames={films} onSelection={chooseSnippet} selectionType={whatToType} />
                </div>
            : null}
        </div>
    );

};

export default SnippetSelector;