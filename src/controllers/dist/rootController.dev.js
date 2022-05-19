"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.home = void 0;

var home = function home(req, res) {
  return regeneratorRuntime.async(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("home", {
            pageTitle: "Home"
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.home = home;

var login = function login(req, res) {
  return res.render("login", {
    pageTitle: "Login"
  });
};

exports.login = login;