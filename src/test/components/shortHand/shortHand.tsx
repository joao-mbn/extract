import React from 'react';

function Child(props: any) {
  return <div>{props}</div>;
}

function Component(props: any) {
  const shortHand = 'shortHand';
  function shortHandFunction() {
    return 'test';
  }
  const shortHandAnonymousFunction = () => 'test';
  const objectWithShortHand = { shortHand, shortHandFunction, shortHandAnonymousFunction };

  return (
    <Child
      model={{ shortHand, shortHandFunction, shortHandAnonymousFunction }}
      objectWithShortHand={objectWithShortHand}
      onClick={() => {
        const shortHandToIgnore = 'propShortHand';
        const shortHandObject = { shortHandToIgnore };
        console.log(JSON.stringify(shortHandObject));
      }}
    />
  );
}
