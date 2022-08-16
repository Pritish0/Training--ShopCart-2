import React from 'react';
import Accordion from '../Accordion/Accordion';
import Sort from './Sort';
import Filter from './Filter';

export default function Sidebar(){
    return(
        <div>
            <Accordion title="Sort" content={<Sort/>} />
            <Accordion title="Filter" content={<Filter/>} />
        </div>
    );
}