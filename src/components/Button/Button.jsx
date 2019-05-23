import React from 'react';

export class Button extends React.Component {
  render() {
    const { ...rest } = this.props;
    // Props
    // * color (default: ‘default’, or ‘primary’)
    // * disabled (boolean, default: false)
    // * style (default {}, and must only accept object of strings)
    // * value (string and must be required)
    // * onClick (function and must be required)
    console.log(...rest);
    const buttonResult = [
      <>
        <input {...rest} />
      </>,
    ];
    return buttonResult;
  }
}
