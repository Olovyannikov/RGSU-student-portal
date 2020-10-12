// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
les/social.js"));

var _fullPageScroll = _interopRequireDefault(require("./modules/full-page-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modules
// init modules
(0, _mobileHeightAdjust["default"])();
(0, _slider["default"])();
(0, _menu["default"])();
(0, _footer["default"])();
(0, _chat["default"])();
(0, _result["default"])();
(0, _form["default"])();
(0, _social["default"])();
var fullPageScroll = new _fullPageScroll["default"]();
fullPageScroll.init();