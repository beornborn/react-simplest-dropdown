# react-simplest-dropdown

This is simple dropdown component for react.
It's responsible only for view representation.

Your responsibility is to set positioning, callbacks, handle open/close events.
You can determine position by passing styles in containerStyle property - the most important to pass `top` and `left` style attributes.

## How it looks like

![](http://image.prntscr.com/image/b53cee2d50e04abfa46f27424eac26d6.png)

## Installation

```
npm install --save react-simplest-dropdown
```

## Example

this is an example of usage (redux container)

```ruby
import { connect } from 'react-redux'
import Dropdown from 'react-simplest-dropdown'
import { createAction } from 'redux-actions'
import { SET_ATTRIBUTE_VALUE } from '~/app/reducers/Design'

const dropdownAlignment = (el) => {
  let top = 0, left = 0, width = 0
  if (el.getBoundingClientRect) {
    const rect = el.getBoundingClientRect()
    const offset = document.getElementById('design') ? document.getElementById('design').parentNode.scrollTop : 0
    top = offset + rect.top - 45 + (document.body.scrollTop || 0)
    left = rect.left
    width = rect.width
  }
  return {top, left, width}
}

const mapStateToProps = (state) => {
  const d = state.autocomplete.attr_dropdown

  return {
    open: d.open,
    containerStyle: dropdownAlignment(d.el),
    values: d.values,
    meta: {attribute_id: d.attribute.id}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectValue: (e, meta) => {
      dispatch(createAction(SET_ATTRIBUTE_VALUE)({attribute_id: meta.attribute_id, value: e.currentTarget.textContent}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)

```

## Properties

| property       | type     | default | description                                                          |
|----------------|----------|---------|----------------------------------------------------------------------|
| open           | bool     |         | makes dropdown visible or hidden                                     |
| values         | array    |         | these values are dropdown items                                      |
| containerStyle | object   |         | inline styles for container element                                  |
| itemStyle      | object   |         | inline styles for item elements                                      |
| selectValue    | function |         | onclick item callback: onClick={(event) => selectValue(event, meta)} |
| meta           | object   |         | any object that passed to selectValue callback                       |

## The best documentation

[https://github.com/beornborn/react-simplest-dropdown/blob/master/src/index.js](https://github.com/beornborn/react-simplest-dropdown/blob/master/src/index.js)
