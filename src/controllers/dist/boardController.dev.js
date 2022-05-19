"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writingPost = exports.watchContent = exports.watcthBoard = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var watcthBoard = function watcthBoard(req, res) {
  return res.render("watcthBoard", {
    pageTitle: "전체 게시판"
  });
};

exports.watcthBoard = watcthBoard;

var watchContent = function watchContent(req, res) {
  return res.render("watch", {
    pageTitle: "Watch"
  });
};

exports.watchContent = watchContent;

var writingPost = function writingPost(req, res) {
  return res.render("writing", {
    pageTitle: "writing post"
  });
};

exports.writingPost = writingPost;