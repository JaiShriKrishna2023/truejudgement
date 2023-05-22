import React, { useEffect, useState } from 'react';
import RightPanelView from '../components/rightPanelView';
import { useSelector } from 'react-redux';
import { selectRightPanelProps } from '../middleware/rightPanel/rightPanelSelector';

const RightPanelConnect=(props)=>{

    const {selectedProduct} =useSelector(selectRightPanelProps);

    return (<RightPanelView selectedProduct={selectedProduct}>{props?.children}</RightPanelView>)
}

export default RightPanelConnect;