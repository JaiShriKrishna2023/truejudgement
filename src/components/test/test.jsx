import React from 'react';

const CustomListView = ({ data, renderItem, itemStyle }) => {
  return (
    <div>
      {data.map((item, index) => (
 
        <div key={index} style={Object.assign(itemStyle, item.s)}>
          {renderItem(item, )}
        </div>
      ))}
    </div>
  );
};
const MyComponent = () => {
  const data = [
    { s:'color:red;font-weight:bold ', child:'text1'},
    
    { s:'color:green;font-weight:bold', child: 'text2'},
    
    { s:'color:blue;font-weight:bold', child: 'text3'}
    
    ];

    let itemStyle={
      color:'red'
    };

  const renderItem = (item, itemStyle) => (
    
    <div>
      <span>{item.s}</span>
      <span style={Object.assign(item.s, itemStyle)}>{item.child}</span>
    </div>
  );

  return (
    <div>
      <h1>Custom List View</h1>
      <CustomListView data={data} renderItem={renderItem} itemStyle={itemStyle}/>
    </div>
  );
};

export default MyComponent;
