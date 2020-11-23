import React from 'react';

interface IBlindProp {
  children: React.ReactElement<HTMLElement>;
}

function BlindText(props: IBlindProp) {
  const children = props.children;

  return <>{children}</>;
}

export default BlindText;
