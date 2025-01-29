// Nav Button

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

$(document).ready(function () {
  $(".js-scroll-trigger").click(function () {
    $("#nav-icon").toggleClass("open");
  });
});

//Scroll To Sections

function toAbout() {
  var element = document.getElementById("about");
  var headerOffset = 85;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function toProjects() {
  var element = document.getElementById("projects");
  var headerOffset = 85;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function toSkills() {
  var element = document.getElementById("skills");
  var headerOffset = 85;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function toMilestones() {
  var element = document.getElementById("milestones");
  var headerOffset = 85;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function toContact() {
  var element = document.getElementById("contact");
  var headerOffset = 85;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

//Scrolling Progress Bar

window.onscroll = function () {
  progressIndicator();
};

function progressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

// Typing effect

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Typewriter", [], t)
    : "object" == typeof exports
    ? (exports.Typewriter = t())
    : (e.Typewriter = t());
})("undefined" != typeof self ? self : this, function () {
  return (() => {
    var e = {
        75: function (e) {
          (function () {
            var t, n, r, o, a, s;
            "undefined" != typeof performance &&
            null !== performance &&
            performance.now
              ? (e.exports = function () {
                  return performance.now();
                })
              : "undefined" != typeof process &&
                null !== process &&
                process.hrtime
              ? ((e.exports = function () {
                  return (t() - a) / 1e6;
                }),
                (n = process.hrtime),
                (o = (t = function () {
                  var e;
                  return 1e9 * (e = n())[0] + e[1];
                })()),
                (s = 1e9 * process.uptime()),
                (a = o - s))
              : Date.now
              ? ((e.exports = function () {
                  return Date.now() - r;
                }),
                (r = Date.now()))
              : ((e.exports = function () {
                  return new Date().getTime() - r;
                }),
                (r = new Date().getTime()));
          }).call(this);
        },
        4087: (e, t, n) => {
          for (
            var r = n(75),
              o = "undefined" == typeof window ? n.g : window,
              a = ["moz", "webkit"],
              s = "AnimationFrame",
              i = o["request" + s],
              u = o["cancel" + s] || o["cancelRequest" + s],
              l = 0;
            !i && l < a.length;
            l++
          )
            (i = o[a[l] + "Request" + s]),
              (u = o[a[l] + "Cancel" + s] || o[a[l] + "CancelRequest" + s]);
          if (!i || !u) {
            var c = 0,
              p = 0,
              d = [];
            (i = function (e) {
              if (0 === d.length) {
                var t = r(),
                  n = Math.max(0, 16.666666666666668 - (t - c));
                (c = n + t),
                  setTimeout(function () {
                    var e = d.slice(0);
                    d.length = 0;
                    for (var t = 0; t < e.length; t++)
                      if (!e[t].cancelled)
                        try {
                          e[t].callback(c);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                  }, Math.round(n));
              }
              return d.push({ handle: ++p, callback: e, cancelled: !1 }), p;
            }),
              (u = function (e) {
                for (var t = 0; t < d.length; t++)
                  d[t].handle === e && (d[t].cancelled = !0);
              });
          }
          (e.exports = function (e) {
            return i.call(o, e);
          }),
            (e.exports.cancel = function () {
              u.apply(o, arguments);
            }),
            (e.exports.polyfill = function (e) {
              e || (e = o),
                (e.requestAnimationFrame = i),
                (e.cancelAnimationFrame = u);
            });
        },
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var a = (t[r] = { exports: {} });
      return e[r].call(a.exports, a, a.exports, n), a.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var r = {};
    return (
      (() => {
        "use strict";
        n.d(r, { default: () => S });
        var e = n(4087),
          t = n.n(e);
        const o = function (e) {
            return new RegExp(/<[a-z][\s\S]*>/i).test(e);
          },
          a = function (e) {
            var t = document.createElement("div");
            return (t.innerHTML = e), t.childNodes;
          },
          s = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
          };
        var i = "TYPE_CHARACTER",
          u = "REMOVE_CHARACTER",
          l = "REMOVE_ALL",
          c = "REMOVE_LAST_VISIBLE_NODE",
          p = "PAUSE_FOR",
          d = "CALL_FUNCTION",
          f = "ADD_HTML_TAG_ELEMENT",
          v = "CHANGE_DELETE_SPEED",
          h = "CHANGE_DELAY",
          m = "CHANGE_CURSOR",
          y = "PASTE_STRING",
          g = "HTML_TAG";
        function E(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function w(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? E(Object(n), !0).forEach(function (t) {
                  N(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function T(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return b(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? b(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function A(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function N(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const S = (function () {
          function n(r, E) {
            var b = this;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              N(this, "state", {
                cursorAnimation: null,
                lastFrameTime: null,
                pauseUntil: null,
                eventQueue: [],
                eventLoop: null,
                eventLoopPaused: !1,
                reverseCalledEvents: [],
                calledEvents: [],
                visibleNodes: [],
                initialOptions: null,
                elements: {
                  container: null,
                  wrapper: document.createElement("span"),
                  cursor: document.createElement("span"),
                },
              }),
              N(this, "options", {
                strings: null,
                cursor: "|",
                delay: "natural",
                pauseFor: 1500,
                deleteSpeed: "natural",
                loop: !1,
                autoStart: !1,
                devMode: !1,
                skipAddStyles: !1,
                wrapperClassName: "Typewriter__wrapper",
                cursorClassName: "Typewriter__cursor",
                stringSplitter: null,
                onCreateTextNode: null,
                onRemoveNode: null,
              }),
              N(this, "setupWrapperElement", function () {
                b.state.elements.container &&
                  ((b.state.elements.wrapper.className =
                    b.options.wrapperClassName),
                  (b.state.elements.cursor.className =
                    b.options.cursorClassName),
                  (b.state.elements.cursor.innerHTML = b.options.cursor),
                  (b.state.elements.container.innerHTML = ""),
                  b.state.elements.container.appendChild(
                    b.state.elements.wrapper
                  ),
                  b.state.elements.container.appendChild(
                    b.state.elements.cursor
                  ));
              }),
              N(this, "start", function () {
                return (b.state.eventLoopPaused = !1), b.runEventLoop(), b;
              }),
              N(this, "pause", function () {
                return (b.state.eventLoopPaused = !0), b;
              }),
              N(this, "stop", function () {
                return (
                  b.state.eventLoop &&
                    ((0, e.cancel)(b.state.eventLoop),
                    (b.state.eventLoop = null)),
                  b
                );
              }),
              N(this, "pauseFor", function (e) {
                return b.addEventToQueue(p, { ms: e }), b;
              }),
              N(this, "typeOutAllStrings", function () {
                return "string" == typeof b.options.strings
                  ? (b
                      .typeString(b.options.strings)
                      .pauseFor(b.options.pauseFor),
                    b)
                  : (b.options.strings.forEach(function (e) {
                      b.typeString(e)
                        .pauseFor(b.options.pauseFor)
                        .deleteAll(b.options.deleteSpeed);
                    }),
                    b);
              }),
              N(this, "typeString", function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if (o(e)) return b.typeOutHTMLString(e, t);
                if (e) {
                  var n = b.options || {},
                    r = n.stringSplitter,
                    a = "function" == typeof r ? r(e) : e.split("");
                  b.typeCharacters(a, t);
                }
                return b;
              }),
              N(this, "pasteString", function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                return o(e)
                  ? b.typeOutHTMLString(e, t, !0)
                  : (e && b.addEventToQueue(y, { character: e, node: t }), b);
              }),
              N(this, "typeOutHTMLString", function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = a(e);
                if (r.length > 0)
                  for (var o = 0; o < r.length; o++) {
                    var s = r[o],
                      i = s.innerHTML;
                    s && 3 !== s.nodeType
                      ? ((s.innerHTML = ""),
                        b.addEventToQueue(f, { node: s, parentNode: t }),
                        n ? b.pasteString(i, s) : b.typeString(i, s))
                      : s.textContent &&
                        (n
                          ? b.pasteString(s.textContent, t)
                          : b.typeString(s.textContent, t));
                  }
                return b;
              }),
              N(this, "deleteAll", function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "natural";
                return b.addEventToQueue(l, { speed: e }), b;
              }),
              N(this, "changeDeleteSpeed", function (e) {
                if (!e) throw new Error("Must provide new delete speed");
                return b.addEventToQueue(v, { speed: e }), b;
              }),
              N(this, "changeDelay", function (e) {
                if (!e) throw new Error("Must provide new delay");
                return b.addEventToQueue(h, { delay: e }), b;
              }),
              N(this, "changeCursor", function (e) {
                if (!e) throw new Error("Must provide new cursor");
                return b.addEventToQueue(m, { cursor: e }), b;
              }),
              N(this, "deleteChars", function (e) {
                if (!e)
                  throw new Error(
                    "Must provide amount of characters to delete"
                  );
                for (var t = 0; t < e; t++) b.addEventToQueue(u);
                return b;
              }),
              N(this, "callFunction", function (e, t) {
                if (!e || "function" != typeof e)
                  throw new Error("Callbak must be a function");
                return b.addEventToQueue(d, { cb: e, thisArg: t }), b;
              }),
              N(this, "typeCharacters", function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if (!e || !Array.isArray(e))
                  throw new Error("Characters must be an array");
                return (
                  e.forEach(function (e) {
                    b.addEventToQueue(i, { character: e, node: t });
                  }),
                  b
                );
              }),
              N(this, "removeCharacters", function (e) {
                if (!e || !Array.isArray(e))
                  throw new Error("Characters must be an array");
                return (
                  e.forEach(function () {
                    b.addEventToQueue(u);
                  }),
                  b
                );
              }),
              N(this, "addEventToQueue", function (e, t) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return b.addEventToStateProperty(e, t, n, "eventQueue");
              }),
              N(this, "addReverseCalledEvent", function (e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = b.options.loop;
                return r
                  ? b.addEventToStateProperty(e, t, n, "reverseCalledEvents")
                  : b;
              }),
              N(this, "addEventToStateProperty", function (e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  o = { eventName: e, eventArgs: t || {} };
                return (
                  (b.state[r] = n
                    ? [o].concat(T(b.state[r]))
                    : [].concat(T(b.state[r]), [o])),
                  b
                );
              }),
              N(this, "runEventLoop", function () {
                b.state.lastFrameTime || (b.state.lastFrameTime = Date.now());
                var e = Date.now(),
                  n = e - b.state.lastFrameTime;
                if (!b.state.eventQueue.length) {
                  if (!b.options.loop) return;
                  (b.state.eventQueue = T(b.state.calledEvents)),
                    (b.state.calledEvents = []),
                    (b.options = w({}, b.state.initialOptions));
                }
                if (
                  ((b.state.eventLoop = t()(b.runEventLoop)),
                  !b.state.eventLoopPaused)
                ) {
                  if (b.state.pauseUntil) {
                    if (e < b.state.pauseUntil) return;
                    b.state.pauseUntil = null;
                  }
                  var r,
                    o = T(b.state.eventQueue),
                    a = o.shift();
                  if (
                    !(
                      n <=
                      (r =
                        a.eventName === c || a.eventName === u
                          ? "natural" === b.options.deleteSpeed
                            ? s(40, 80)
                            : b.options.deleteSpeed
                          : "natural" === b.options.delay
                          ? s(120, 160)
                          : b.options.delay)
                    )
                  ) {
                    var E = a.eventName,
                      A = a.eventArgs;
                    switch (
                      (b.logInDevMode({
                        currentEvent: a,
                        state: b.state,
                        delay: r,
                      }),
                      E)
                    ) {
                      case y:
                      case i:
                        var N = A.character,
                          S = A.node,
                          C = document.createTextNode(N),
                          _ = C;
                        b.options.onCreateTextNode &&
                          "function" == typeof b.options.onCreateTextNode &&
                          (_ = b.options.onCreateTextNode(N, C)),
                          _ &&
                            (S
                              ? S.appendChild(_)
                              : b.state.elements.wrapper.appendChild(_)),
                          (b.state.visibleNodes = [].concat(
                            T(b.state.visibleNodes),
                            [{ type: "TEXT_NODE", character: N, node: _ }]
                          ));
                        break;
                      case u:
                        o.unshift({
                          eventName: c,
                          eventArgs: { removingCharacterNode: !0 },
                        });
                        break;
                      case p:
                        var O = a.eventArgs.ms;
                        b.state.pauseUntil = Date.now() + parseInt(O);
                        break;
                      case d:
                        var L = a.eventArgs,
                          D = L.cb,
                          M = L.thisArg;
                        D.call(M, { elements: b.state.elements });
                        break;
                      case f:
                        var x = a.eventArgs,
                          P = x.node,
                          R = x.parentNode;
                        R
                          ? R.appendChild(P)
                          : b.state.elements.wrapper.appendChild(P),
                          (b.state.visibleNodes = [].concat(
                            T(b.state.visibleNodes),
                            [
                              {
                                type: g,
                                node: P,
                                parentNode: R || b.state.elements.wrapper,
                              },
                            ]
                          ));
                        break;
                      case l:
                        var j = b.state.visibleNodes,
                          k = A.speed,
                          Q = [];
                        k &&
                          Q.push({
                            eventName: v,
                            eventArgs: { speed: k, temp: !0 },
                          });
                        for (var F = 0, H = j.length; F < H; F++)
                          Q.push({
                            eventName: c,
                            eventArgs: { removingCharacterNode: !1 },
                          });
                        k &&
                          Q.push({
                            eventName: v,
                            eventArgs: {
                              speed: b.options.deleteSpeed,
                              temp: !0,
                            },
                          }),
                          o.unshift.apply(o, Q);
                        break;
                      case c:
                        var I = a.eventArgs.removingCharacterNode;
                        if (b.state.visibleNodes.length) {
                          var U = b.state.visibleNodes.pop(),
                            q = U.type,
                            G = U.node,
                            Y = U.character;
                          b.options.onRemoveNode &&
                            "function" == typeof b.options.onRemoveNode &&
                            b.options.onRemoveNode({ node: G, character: Y }),
                            G && G.parentNode.removeChild(G),
                            q === g &&
                              I &&
                              o.unshift({ eventName: c, eventArgs: {} });
                        }
                        break;
                      case v:
                        b.options.deleteSpeed = a.eventArgs.speed;
                        break;
                      case h:
                        b.options.delay = a.eventArgs.delay;
                        break;
                      case m:
                        (b.options.cursor = a.eventArgs.cursor),
                          (b.state.elements.cursor.innerHTML =
                            a.eventArgs.cursor);
                    }
                    b.options.loop &&
                      (a.eventName === c ||
                        (a.eventArgs && a.eventArgs.temp) ||
                        (b.state.calledEvents = [].concat(
                          T(b.state.calledEvents),
                          [a]
                        ))),
                      (b.state.eventQueue = o),
                      (b.state.lastFrameTime = e);
                  }
                }
              }),
              r)
            )
              if ("string" == typeof r) {
                var A = document.querySelector(r);
                if (!A) throw new Error("Could not find container element");
                this.state.elements.container = A;
              } else this.state.elements.container = r;
            E && (this.options = w(w({}, this.options), E)),
              (this.state.initialOptions = w({}, this.options)),
              this.init();
          }
          var r, E;
          return (
            (r = n),
            (E = [
              {
                key: "init",
                value: function () {
                  var e, t;
                  this.setupWrapperElement(),
                    this.addEventToQueue(
                      m,
                      { cursor: this.options.cursor },
                      !0
                    ),
                    this.addEventToQueue(l, null, !0),
                    !window ||
                      window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                      this.options.skipAddStyles ||
                      ((e =
                        ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                      (t = document.createElement("style")).appendChild(
                        document.createTextNode(e)
                      ),
                      document.head.appendChild(t),
                      (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                    !0 === this.options.autoStart &&
                      this.options.strings &&
                      this.typeOutAllStrings().start();
                },
              },
              {
                key: "logInDevMode",
                value: function (e) {
                  this.options.devMode && console.log(e);
                },
              },
            ]) && A(r.prototype, E),
            n
          );
        })();
      })(),
      r.default
    );
  })();
});

// Intro typing text
//Intro text handling

setTimeout(() => {
  new Typewriter(".typing-text", {
    strings: [
      "Web Developer",
      "AI Enthusiast",
      "Android Programmer",
      "College Student",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    delay: 100,
  });
}, 1400);

// Preloader text handling

new Typewriter(".loading-text", {
  strings: ["Naufal Is Thinking..."],
  autoStart: true,
  delay: 50,
  cursor: "|",
  deleteSpeed: 10,
});
setTimeout(() => {
  let loadingText = document.querySelector(".loader");
  loadingText.style.display = "none";
}, 4000);

// Scroll to top button

const scrollUp = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 880) {
    scrollUp.classList.add("active-top");
  } else {
    scrollUp.classList.remove("active-top");
  }
});

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// Image hover effect

VanillaTilt.init(document.querySelector(".img"), {
  max: 5,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  "max-glare": 0,
  startX: 0,
  startY: 0,
  glare: true,
});

VanillaTilt.init(document.querySelector(".bio-img"), {
  max: 5,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  "max-glare": 0.4,
  startX: 0,
  startY: 0,
  glare: true,
});

// Contact form status handling

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      swal({
        title: "Thank You!",
        text: "Your message sent successfully. I'll get back to you soon!",
        icon: "success",
      });
      form.reset();
    })
    .catch((error) => {
      swal({
        title: "Oops!",
        text: "There was a problem with sending the message. Please refresh the page and try again later.",
        icon: "error",
      });
      form.reset();
    });
}
form.addEventListener("submit", handleSubmit);

// projects section

const projectData = [
  {
    title: "TAFSIL.ID",
    subTitle: "TAFSIR SAINS DIGITAL",
    thumbnail: "../img/thumbnails/tafsilthumbs.png",
    description:
      "Tafsil.id is a digital platform that provides Qur'anic verses along with scientific interpretations, helping lecturers and students find and understand verses relevant to science. With theme-based classification, Tafsil.id supports the integration of religion and science in higher education in a practical and accessible way.",
    techStack: ["Laravel", "TailwindCSS"],
    srcURL: "https://tafsil.id",
  },
  {
    title: "OSPEK RAASEKH 2024",
    subTitle: "Unida Gontor 2024 Ospek Committee",
    thumbnail: "../img/thumbnails/ospek.png",
    description:
      "Ospek RASSEKH is a new student orientation also known as Study Orientation and Campus introduction or OSPEK. This activity aims to recognize and understand the campus environment as an academic environment and understand the mechanisms that apply in it.",
    techStack: ["Laravel"],
    srcURL: "https://github.com/naufalharitsprasetia/ospekRaasekh",
  },
  {
    title: "SIBETA",
    subTitle: "Situs Pembelajaran Tajwid",
    thumbnail: "../img/thumbnails/sibeta.jpg",
    description:
      "SIBETA is a Website-Based Tajweed Learning Platform, SIBETA is designed to increase the level of Islamic interest in learning tajweed, and make it easier for each of us to learn tajweed without having to buy books or go to a place of learning or majlis.",
    techStack: ["Laravel"],
    srcURL: "https://github.com/naufalharitsprasetia/uasPbo",
  },
  {
    title: "Bengkel TI",
    subTitle: "One of the business units of the informatics engineering",
    thumbnail: "../img/thumbnails/bengkel.jpg",
    description:
      "Bengkel TI one of the business units of the informatics engineering study program at Darussalam Gontor University that overcomes damage or obstacles to user devices (laptops, cellphones) LCDs, software installations etc., and also IT Workshops sell several accessories such as (mice, keyboards, headsets, etc.).",
    techStack: ["Laravel"],
    srcURL: "https://github.com/naufalharitsprasetia/bengkel_ti",
  },
  {
    title: "TAFSIL Semantic Search",
    subTitle: "Inovasi Fitur Pencarian pada Website Tafsil",
    thumbnail: "../img/thumbnails/semantictafsil.png",
    description:
      "Semantic search is an advanced search technique that goes beyond keyword matching by understanding the meaning and context of a query. It leverages natural language processing (NLP) and machine learning to interpret user intent, relationships between words, and the overall semantics of a search request. Unlike traditional search, which relies on exact word matches, semantic search can recognize synonyms, contextual meanings, and even infer relevant results based on past data. This approach enhances search accuracy and relevance, making it widely used in AI-driven applications like Google Search, chatbots, and recommendation systems.",
    techStack: ["Python", "Sentence BERT"],
    srcURL: "https://github.com/naufalharitsprasetia/tafsil-semantic-search",
  },
  {
    title: "TOEFL Simulation",
    subTitle: "Web For Simulation, TOEFL Examination",
    thumbnail: "../img/thumbnails/toefl.png",
    description:
      "A TOEFL simulation web is an online platform designed to mimic the real TOEFL exam experience, allowing users to practice under realistic test conditions. It typically includes all four sections of the TOEFL test—Listening, Reading, Speaking, and Writing—along with timers, automated scoring, and interactive question formats. The platform helps users improve their test-taking skills by providing instant feedback, tracking progress, and simulating the pressure of the actual exam. This tool is especially useful for students preparing for TOEFL, enabling them to assess their proficiency and identify areas for improvement before taking the official test.",
    techStack: ["Python", "Sentence BERT"],
    srcURL: "https://github.com/naufalharitsprasetia/simulasiITOEFL",
  },
  {
    title: "Project Name",
    subTitle: "Subtitle",
    thumbnail: "../img/projects-default.jpg",
    description:
      "deskripsi, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    techStack: ["Programming", "Languange"],
    srcURL: "https://github.com/naufalharitsprasetia",
  },
  {
    title: "Project Name",
    subTitle: "Subtitle",
    thumbnail: "../img/projects-default.jpg",
    description:
      "deskripsi, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    techStack: ["Programming", "Languange"],
    srcURL: "https://github.com/naufalharitsprasetia",
  },
  {
    title: "Project Name",
    subTitle: "Subtitle",
    thumbnail: "../img/projects-default.jpg",
    description:
      "deskripsi, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    techStack: ["Programming", "Languange"],
    srcURL: "https://github.com/naufalharitsprasetia",
  },
  // Add more objects for additional projectData here
];

loadContent(projectData);

function loadContent(projectData) {
  const buildTemplate = (template, data) => {
    for (const key in data) {
      const reg = new RegExp(`{${key}}`, "ig");
      template = template.replace(reg, data[key]);
    }
    return template;
  };
  const ProjectCard = function (data) {
    const techStackData = data.techStack
      .map((tech) => `<span class="stack-badge">${tech}</span>`)
      .join(" ");
    const elem = document.createElement("div");
    elem.classList.add("project-card");
    elem.style.setProperty("--rotation", data.rotation + "deg");
    elem.innerHTML = buildTemplate(
      `<div class='projects-header'>
          <img class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" src={thumbnail} alt="Card image cap">
       </div>
       <h5 class="card-title mt-3">{title}</h5>
       <div class='content'>{description}</div>
       <div class='technologies'>Tech Stack: ${techStackData}</div>
       <div class="card-buttons">
          <a href="https://github.com/naufalharitsprasetia" target="_blank" class="card-btn" style="float: right; height: 2.35rem; color: #fff; background-color: #68d372; padding: .375rem .75rem; border-radius: .25rem;"><i class="fa-regular fa-file-code"></i>Source Code</a>
          <a href="{srcURL}" target="_blank" class="card-btn" style="float: right; color: #fff; background-color: #68d372; padding: .375rem .75rem; border-radius: .25rem;"><i class="fa-solid fa-display"></i>View Demo</a>
      </div>`,
      data
    );
    setTimeout(() => {
      if (elem.children[2].scrollHeight > elem.children[2].clientHeight) {
        elem.classList.add("truncated");
      }
    }, 100);
    return elem;
  };

  const rotationAmt = 360 / projectData.length;
  let focused = 0;
  const projectsElem = document.querySelector(".project-data");
  const navElem = document.querySelector(".navigation");

  let paused = false;
  projectsElem.addEventListener("mouseenter", () => {
    paused = true;
  });

  projectsElem.addEventListener("mouseleave", () => (paused = false));

  window.onblur = () => {
    paused = true;
  };
  window.onfocus = () => {
    paused = false;
  };

  function getFocusedIndex() {
    return mod(focused, projectData.length);
  }

  const radius = 400 / (2 * Math.sin(Math.PI / projectData.length));
  const distToEdge = Math.round(Math.sqrt(radius ** 2 - 200 ** 2) + 30);
  projectsElem.style.setProperty("--distance", distToEdge + "px");

  projectData.forEach((project, i) => {
    projectsElem.appendChild(
      ProjectCard({
        ...project,
        rotation: i * rotationAmt,
      })
    );

    const navBtn = document.createElement("div");
    navBtn.classList.add("nav-dot");
    navBtn.addEventListener("click", () => {
      select(i);
    });
    navElem.appendChild(navBtn);
  });

  let timeout;
  function update() {
    gsap.to(projectsElem, {
      rotationY: -focused * rotationAmt,
      duration: 1,
    });
    const { children } = projectsElem;
    for (var i = 0; i < children.length; i++) {
      if (getFocusedIndex() === i) {
        children[i].classList.add("focused");
        navElem.children[i].classList.add("focused");
      } else {
        children[i].classList.remove("focused");
        navElem.children[i].classList.remove("focused");
      }
    }
    if (timeout) clearTimeout(timeout);
    const nextTimeout = (cb) => {
      timeout = setTimeout(() => {
        cb();
      }, 5000);
    };
    nextTimeout(() => {
      if (paused) {
        update();
      } else {
        focused++;
        update();
      }
    });
  }
  function mod(a, b) {
    return ((a % b) + b) % b;
  }
  function diff(a, b, c, d) {
    return d === -1 ? mod(b - a, c) : mod(a - b, c);
  }
  function select(index, dir) {
    index = mod(index, projectData.length);
    // dir = null

    if (dir) {
      focused += diff(index, getFocusedIndex(), projectData.length, dir) * dir;
    } else {
      focused += index - getFocusedIndex();
    }
    update();
  }
  update();

  document.querySelector(".arrow-right").addEventListener("click", () => {
    focused++;
    update();
  });

  document.querySelector(".arrow-left").addEventListener("click", () => {
    focused--;
    update();
  });
}

// Github data display

async function getRepoList() {
  try {
    const response = await fetch(
      "https://api.github.com/users/naufalharitsprasetia/repos"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// (async function() {
//   const repoList = await getRepoList();
//  for (let i = 1; i < repoList.length; i++) {
// console.log(repoList[i].name);
// }
// })();
