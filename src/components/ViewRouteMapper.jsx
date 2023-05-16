import React from 'react';
import ProcessingScreenConnect from '../connected-components/ProcessingScreen/processingScreenConnect';
import {VIEW_ROUTE_SCREENS, RIGHT_PANEL_VIEW_SCREENS} from '../constants/constants';
import RightPanelConnect from '../connected-components/rightpanelconnect';
import ProductsCategoryConnect from '../connected-components/productsCategoryConnect';

export const ViewRouteMapper=[
    {
        id:VIEW_ROUTE_SCREENS.PROCESSING,
        component:(<ProcessingScreenConnect/>)
    },
    {
        id:VIEW_ROUTE_SCREENS.RIGHT_PANEL_VIEW,
        component:(<RightPanelConnect/>)
    },
    {
        id:RIGHT_PANEL_VIEW_SCREENS.PRODUCT_CATEGORY_VIEW,
        component:(<ProductsCategoryConnect/>)
    },

    
]