"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this.data = data;
    this.next = null;
  }

  _createClass(Node, [{
    key: "print",
    value: function print() {
      console.log(this.data);
    }
  }]);

  return Node;
}();

var LinkedList = exports.LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // (insert value at back)


  _createClass(LinkedList, [{
    key: "push",
    value: function push(num) {
      var node = new Node(num);
      if (this.head == null) {
        // first item
        this.head = node;
        this.tail = node;
      } else {
        // 2+ items
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }

    // delete item with value 'num'

  }, {
    key: "delete",
    value: function _delete(num) {
      var current = this.head;

      if (current !== null) {
        // check start and end of list
        if (this.head.data === num) this.shift();else if (this.tail.data === num) this.pop();

        while (current.next !== null) {
          if (current.next.data === num) {
            // remove it
            current.next = current.next.next;
            this.size--;
          } else {
            // continue searching
            current = current.next;
          }
        }
      } // end != null
    }

    // (remove value at back)

  }, {
    key: "pop",
    value: function pop() {
      var current = this.head;
      var output = -1;

      if (current == null) return output;

      // only one item on list
      if (current === this.tail) {
        output = this.tail.data;

        // reset head/tail
        this.head = null;
        this.tail = null;
        this.size = 0;
      } else {
        // more than one
        while (current !== this.tail) {
          if (current.next === this.tail) {
            // pop
            current.next = null;
            output = this.tail.data;
            this.tail = current;
            this.size--;
          } else {
            current = current.next;
          }
        }
      }

      // console.log(`found value: ${output}`);
      return output;
    }

    // (remove value at front)

  }, {
    key: "shift",
    value: function shift() {
      var output = -1;

      if (this.head === null) {
        // empty
      } else if (this.head.next == null) {
        // one item, same as pop
        return this.pop();
      } else {
        // more than one item on list
        output = this.head.data;
        this.head = this.head.next;
        this.size--;
      }

      // console.log(`found value: ${output}`);
      return output;
    }

    // (insert value at front)

  }, {
    key: "unshift",
    value: function unshift(num) {
      if (this.head == null) {
        // insert first item, same as push
        this.push(num);
      } else {
        var node = new Node(num);
        node.next = this.head;
        this.head = node;
        this.size++;
      }
    }
  }, {
    key: "count",
    value: function count() {
      return this.size;
    }
  }]);

  return LinkedList;
}();

// const n = new Node('hello world');
// n.print();
// console.log('-----');
// const list = new LinkedList();
// list.push(10);
// list.push(20);
// list.push(30);
// console.log(`Size: ${list.count()}`);
//
// console.log(list.shift()); // removes 10
// list.unshift(10); // adds 10
// console.log(`Size: ${list.count()}`);
//
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
//
// console.log(`Size: ${list.count()}`);
