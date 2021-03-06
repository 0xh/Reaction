'use strict';

var arrayUtilities = require('../../utilities/array');

var first = arrayUtilities.first;


function spliceChildren(start, removeCount, addedChildren) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
}

function addChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.addChild(child, childContext);
}

function removeChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.removeChild(child, childContext);
}

function setAttribute(name, value) {
  var firstChild = first(this.children);

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  var firstChild = first(this.children);

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  var firstChild = first(this.children);

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) {
  var firstChild = first(this.children);

  firstChild.setClassaddAttribute(name, value);
}

function removeAttribute(name) {
  var firstChild = first(this.children);

  firstChild.removeAttribute(name);
}

function setClass(className) {
  var firstChild = first(this.children);

  firstChild.setClass(className);
}

function addClass(className) {
  var firstChild = first(this.children);

  firstChild.addClass(className);
}

function removeClass(className) {
  var firstChild = first(this.children);

  firstChild.removeClass(className);
}

function toggleClass(className) {
  var firstChild = first(this.children);

  firstChild.toggleClass(className);
}

function hasClass(className) {
  var firstChild = first(this.children);

  return firstChild.hasClass(className);
}

function clearClasses() {
  var firstChild = first(this.children);

  firstChild.clearClasses();
}

function getTagName() {
  return null;
}

var inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9taXhpbi9yZWFjdC9pbmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmlyc3QiLCJzcGxpY2VDaGlsZHJlbiIsInN0YXJ0IiwicmVtb3ZlQ291bnQiLCJhZGRlZENoaWxkcmVuIiwiY29udGV4dCIsImZpcnN0Q2hpbGQiLCJjaGlsZHJlbiIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImFkZENoaWxkIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJ2YWx1ZSIsImdldEF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwic2V0Q2xhc3NhZGRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRDbGFzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiY2xlYXJDbGFzc2VzIiwiZ2V0VGFnTmFtZSIsImluZmVyZW5jZU1peGluIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCOztJQUVRQyxLLEdBQVVGLGMsQ0FBVkUsSzs7O0FBRVIsU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0JDLFdBQS9CLEVBQTRDQyxhQUE1QyxFQUFtRjtBQUFBLE1BQXhCQyxPQUF3Qix1RUFBZCxLQUFLQSxPQUFTOztBQUNqRixNQUFNQyxhQUFhTixNQUFNLEtBQUtPLFFBQVgsQ0FBbkI7QUFBQSxNQUNNQyxlQUFlLEtBQUtDLGVBQUwsQ0FBcUJKLE9BQXJCLEtBQWlDQSxPQUR0RDs7QUFHQUMsYUFBV0wsY0FBWCxDQUEwQkMsS0FBMUIsRUFBaUNDLFdBQWpDLEVBQThDQyxhQUE5QyxFQUE2REksWUFBN0Q7QUFDRDs7QUFFRCxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUFp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QkUsZUFBYUEsV0FIUTtBQUlyQkMsZ0JBQWNBLFlBSk87QUFLckJHLGdCQUFjQSxZQUxPO0FBTXJCQyxrQkFBZ0JBLGNBTks7QUFPckJDLGdCQUFjQSxZQVBPO0FBUXJCRSxtQkFBaUJBLGVBUkk7QUFTckJDLFlBQVVBLFFBVFc7QUFVckJFLFlBQVVBLFFBVlc7QUFXckJDLGVBQWFBLFdBWFE7QUFZckJDLGVBQWFBLFdBWlE7QUFhckJDLFlBQVVBLFFBYlc7QUFjckJDLGdCQUFjQSxZQWRPO0FBZXJCQyxjQUFZQTtBQWZTLENBQXZCOztBQWtCQUUsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiaW5mZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICBmaXJzdENoaWxkLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY2hpbGRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyBcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQuc2V0Q2xhc3NhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyBcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBpbmZlcmVuY2VNaXhpbiA9IHtcbiAgc3BsaWNlQ2hpbGRyZW46IHNwbGljZUNoaWxkcmVuLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgc2V0QXR0cmlidXRlOiBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZTogZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZTogY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgc2V0Q2xhc3M6IHNldENsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIGNsZWFyQ2xhc3NlczogY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lOiBnZXRUYWdOYW1lXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZmVyZW5jZU1peGluO1xuIl19