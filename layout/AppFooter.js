import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/layout/images/lpse1.png`} alt="Logo" width="60" className="mr-2" />
            {/* by
            <span className="font-medium ml-2">PrimeReact</span> */}
        </div>
    );
};

export default AppFooter;
