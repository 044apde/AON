"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editUser = exports.user = exports.login = exports.postJoin = exports.getJoin = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getJoin = function getJoin(req, res) {
  return res.render("join", {
    pageTitle: "JOIN"
  });
};

exports.getJoin = getJoin;

var postJoin = function postJoin(req, res) {
  var _req$body, name, email, password, password2, pageTitle, exists;

  return regeneratorRuntime.async(function postJoin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, password2 = _req$body.password2;
          pageTitle = "Join";

          if (!(password !== password2)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).render("join", {
            pageTitle: pageTitle,
            errorMessage: "비빌번호가 서로 맞지 않습니다."
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(_User["default"].exists({
            $or: [{
              username: username
            }, {
              email: email
            }]
          }));

        case 6:
          exists = _context.sent;

          if (!exists) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).render("join", {
            pageTitle: pageTitle,
            errorMessage: "This email/username is already taken."
          }));

        case 9:
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(_User["default"].create({
            name: name,
            email: email,
            password: password
          }));

        case 12:
          return _context.abrupt("return", res.redirect("/login"));

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](9);
          return _context.abrupt("return", res.status(400).render("Join", {
            pageTitle: pageTitle,
            errorMessage: error._mesage
          }));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 15]]);
};

exports.postJoin = postJoin;

var login = function login(req, res) {
  return res.render("login", {
    pageTitle: "LOGIN"
  });
};

exports.login = login;

var user = function user(req, res) {
  return res.render("user", {
    pageTitle: "USER PAGE"
  });
};

exports.user = user;

var editUser = function editUser(req, res) {
  return res.render("editUser", {
    pageTitle: "Edit user"
  });
};

exports.editUser = editUser;