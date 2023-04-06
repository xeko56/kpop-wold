import React from "react";
import { Menubar } from 'primereact/menubar';

function PrimeMenuBar() {
    //TODO: import group name dynamically
    const items = [
        {
            label: 'Home',
            url: '/dashboard'
        },         
        {
            label: 'Boygroups',
            items: [
                {
                    label: 'ATEEZ',
                },
                {
                    label: 'BTS'
                },
                {
                    label: 'NCT127'
                }
            ]
        },
        {
            label: 'Girlgroups',
            items: [
                {
                    label: 'BLACKPINK',
                },
                {
                    label: 'NMIXX',
                },
                {
                    label: 'Red Velvet',
                }
            ]
        }
    ];

    return (
        <div className="">
            <Menubar model={items} />
        </div>
    );
}
export default PrimeMenuBar;