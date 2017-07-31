'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMaterialize = require('react-materialize');

var _parrafoJsx = require('./parrafo.jsx');

var _parrafoJsx2 = _interopRequireDefault(_parrafoJsx);

var SegundoElemento = (function (_Component) {
   _inherits(SegundoElemento, _Component);

   function SegundoElemento() {
      _classCallCheck(this, SegundoElemento);

      _get(Object.getPrototypeOf(SegundoElemento.prototype), 'constructor', this).apply(this, arguments);
   }

   _createClass(SegundoElemento, [{
      key: 'render',
      value: function render() {

         return _react2['default'].createElement(
            _reactMaterialize.Col,
            { s: 9, m: 9, className: 'Gran-card' },
            _react2['default'].createElement(
               _reactMaterialize.CardPanel,
               { style: this.props.style1 },
               _react2['default'].createElement(
                  _reactMaterialize.Row,
                  { className: 'gris-fondo' },
                  _react2['default'].createElement(_parrafoJsx2['default'], { subtituloCard: '15080', textoParrafo: 'Shot Views' }),
                  _react2['default'].createElement(_parrafoJsx2['default'], { subtituloCard: '12000', textoParrafo: 'Likes' }),
                  _react2['default'].createElement(_parrafoJsx2['default'], { subtituloCard: '5100', textoParrafo: 'Comments' })
               )
            )
         );
      }
   }]);

   return SegundoElemento;
})(_react.Component);

exports['default'] = SegundoElemento;
module.exports = exports['default'];