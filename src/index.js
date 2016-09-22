import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Dropdown.css'

let Dropdown = React.createClass({
  propTypes: {
    open: React.PropTypes.bool.isRequired,
    values: React.PropTypes.array.isRequired,
    containerStyle: React.PropTypes.object,
    itemStyle: React.PropTypes.object,
    selectValue: React.PropTypes.func,
    meta: React.PropTypes.object
  },

  render() {
    const { open, values, containerStyle, itemStyle, selectValue, meta } = this.props

    return <div styleName={'container ' + (open ? '' : 'hidden')} style={containerStyle}>
      {values.map(value =>
        <div styleName='item' key={value} style={itemStyle} onClick={(e) => selectValue(e, meta)} >
          {value}
        </div>
      )}
    </div>
  }
})

export default CSSModules(Dropdown, styles, {allowMultiple: true})
