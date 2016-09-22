'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Dropdown = require('./Dropdown.css');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  propTypes: {
    open: _react2.default.PropTypes.bool.isRequired,
    values: _react2.default.PropTypes.array.isRequired,
    containerStyle: _react2.default.PropTypes.object,
    itemStyle: _react2.default.PropTypes.object,
    selectValue: _react2.default.PropTypes.func,
    meta: _react2.default.PropTypes.object
  },

  render: function render() {
    var _props = this.props;
    var open = _props.open;
    var values = _props.values;
    var containerStyle = _props.containerStyle;
    var itemStyle = _props.itemStyle;
    var selectValue = _props.selectValue;
    var meta = _props.meta;


    return _react2.default.createElement(
      'div',
      { styleName: 'container ' + (open ? '' : 'hidden'), style: containerStyle },
      values.map(function (value) {
        return _react2.default.createElement(
          'div',
          { styleName: 'item', key: value, style: itemStyle, onClick: function onClick(e) {
              return selectValue(e, meta);
            } },
          value
        );
      })
    );
  }
});

exports.default = (0, _reactCssModules2.default)(Dropdown, _Dropdown2.default, { allowMultiple: true });