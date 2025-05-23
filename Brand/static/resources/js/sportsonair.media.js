!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 87));
})([
    function (t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(55),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = {},
            i = {},
            o = [],
            a = window.Webflow || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            f = u.isFunction,
            l = (r._ = n(89)),
            d = (r.tram = n(47) && u.tram),
            p = !1,
            v = !1;
        function h(t) {
            r.env() && (f(t.design) && c.on("design", t.design), f(t.preview) && c.on("preview", t.preview)),
                f(t.destroy) && c.on("destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function (t) {
                        if (p) return void t.ready();
                        if (l.contains(o, t.ready)) return;
                        o.push(t.ready);
                    })(t);
        }
        function y(t) {
            f(t.design) && c.off("design", t.design),
                f(t.preview) && c.off("preview", t.preview),
                f(t.destroy) && c.off("destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function (t) {
                        o = l.filter(o, function (e) {
                            return e !== t.ready;
                        });
                    })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function (t, e, n) {
                i[t] && y(i[t]);
                var r = (i[t] = e(u, l, n) || {});
                return h(r), r;
            }),
            (r.require = function (t) {
                return i[t];
            }),
            (r.push = function (t) {
                p ? f(t) && t() : a.push(t);
            }),
            (r.env = function (t) {
                var e = window.design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                        ? n && !e
                        : "slug" === t
                        ? n && window.__wf_slug
                        : "editor" === t
                        ? window.WebflowEditor
                        : "test" === t
                        ? window.__wf_test
                        : "frame" === t
                        ? window !== window.top
                        : void 0
                    : n;
            });
        var g,
            m = navigator.userAgent.toLowerCase(),
            b = (r.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            w = (r.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
            _ = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
        (r.env.safari = /safari/.test(m) && !w && !_),
            b &&
                s.on("touchstart mousedown", function (t) {
                    g = t.target;
                }),
            (r.validClick = b
                ? function (t) {
                      return t === g || u.contains(t, g);
                  }
                : function () {
                      return !0;
                  });
        var x,
            O = "resize.flow orientationchange.flow load.flow";
        function I(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = l.throttle(function (t) {
                    l.each(n, function (e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function (t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t));
                }),
                (r.off = function (t) {
                    n = arguments.length
                        ? l.filter(n, function (e) {
                              return e !== t;
                          })
                        : [];
                }),
                r
            );
        }
        function j(t) {
            f(t) && t();
        }
        function E() {
            x && (x.reject(), c.off("load", x.resolve)), (x = new u.Deferred()), c.on("load", x.resolve);
        }
        (r.resize = I(c, O)),
            (r.scroll = I(c, "scroll.flow resize.flow orientationchange.flow load.flow")),
            (r.redraw = I()),
            (r.location = function (t) {
                window.location = t;
            }),
            r.env() && (r.location = function () {}),
            (r.ready = function () {
                (p = !0), v ? ((v = !1), l.each(i, h)) : l.each(o, j), l.each(a, j), r.resize.up();
            }),
            (r.load = function (t) {
                x.then(t);
            }),
            (r.destroy = function (t) {
                (t = t || {}), (v = !0), c.triggerHandler("destroy"), null != t.domready && (p = t.domready), l.each(i, y), r.resize.off(), r.scroll.off(), r.redraw.off(), (o = []), (a = []), "pending" === x.state() && E();
            }),
            u(r.ready),
            E(),
            (t.exports = window.Webflow = r);
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "m", function () {
            return r;
        }),
            n.d(e, "n", function () {
                return i;
            }),
            n.d(e, "o", function () {
                return o;
            }),
            n.d(e, "p", function () {
                return a;
            }),
            n.d(e, "l", function () {
                return u;
            }),
            n.d(e, "k", function () {
                return c;
            }),
            n.d(e, "q", function () {
                return s;
            }),
            n.d(e, "c", function () {
                return f;
            }),
            n.d(e, "e", function () {
                return l;
            }),
            n.d(e, "f", function () {
                return d;
            }),
            n.d(e, "b", function () {
                return p;
            }),
            n.d(e, "j", function () {
                return v;
            }),
            n.d(e, "g", function () {
                return h;
            }),
            n.d(e, "i", function () {
                return y;
            }),
            n.d(e, "h", function () {
                return g;
            }),
            n.d(e, "d", function () {
                return m;
            }),
            n.d(e, "a", function () {
                return b;
            }),
            n.d(e, "r", function () {
                return w;
            });
        var r = "IX2_RAW_DATA_IMPORTED",
            i = "IX2_SESSION_INITIALIZED",
            o = "IX2_SESSION_STARTED",
            a = "IX2_SESSION_STOPPED",
            u = "IX2_PREVIEW_REQUESTED",
            c = "IX2_PLAYBACK_REQUESTED",
            s = "IX2_STOP_REQUESTED",
            f = "IX2_CLEAR_REQUESTED",
            l = "IX2_EVENT_LISTENER_ADDED",
            d = "IX2_EVENT_STATE_CHANGED",
            p = "IX2_ANIMATION_FRAME_CHANGED",
            v = "IX2_PARAMETER_CHANGED",
            h = "IX2_INSTANCE_ADDED",
            y = "IX2_INSTANCE_STARTED",
            g = "IX2_INSTANCE_REMOVED",
            m = "IX2_ELEMENT_STATE_CHANGED",
            b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
            w = "IX2_VIEWPORT_WIDTH_CHANGED";
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(123),
            i = n(126);
        t.exports = function (t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function (t, e, n) {
        var r = n(154),
            i = n(178),
            o = n(38),
            a = n(0),
            u = n(182);
        t.exports = function (t) {
            return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? (a(t) ? i(t[0], t[1]) : r(t)) : u(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "y", function () {
            return r;
        }),
            n.d(e, "N", function () {
                return i;
            }),
            n.d(e, "f", function () {
                return o;
            }),
            n.d(e, "n", function () {
                return a;
            }),
            n.d(e, "p", function () {
                return u;
            }),
            n.d(e, "r", function () {
                return c;
            }),
            n.d(e, "l", function () {
                return s;
            }),
            n.d(e, "m", function () {
                return f;
            }),
            n.d(e, "o", function () {
                return l;
            }),
            n.d(e, "q", function () {
                return d;
            }),
            n.d(e, "k", function () {
                return p;
            }),
            n.d(e, "L", function () {
                return v;
            }),
            n.d(e, "M", function () {
                return h;
            }),
            n.d(e, "I", function () {
                return y;
            }),
            n.d(e, "F", function () {
                return g;
            }),
            n.d(e, "G", function () {
                return m;
            }),
            n.d(e, "H", function () {
                return b;
            }),
            n.d(e, "K", function () {
                return w;
            }),
            n.d(e, "z", function () {
                return _;
            }),
            n.d(e, "t", function () {
                return x;
            }),
            n.d(e, "O", function () {
                return O;
            }),
            n.d(e, "v", function () {
                return I;
            }),
            n.d(e, "c", function () {
                return j;
            }),
            n.d(e, "b", function () {
                return E;
            }),
            n.d(e, "e", function () {
                return S;
            }),
            n.d(e, "i", function () {
                return T;
            }),
            n.d(e, "s", function () {
                return A;
            }),
            n.d(e, "u", function () {
                return k;
            }),
            n.d(e, "P", function () {
                return M;
            }),
            n.d(e, "a", function () {
                return C;
            }),
            n.d(e, "j", function () {
                return L;
            }),
            n.d(e, "h", function () {
                return P;
            }),
            n.d(e, "d", function () {
                return R;
            }),
            n.d(e, "g", function () {
                return N;
            }),
            n.d(e, "x", function () {
                return D;
            }),
            n.d(e, "J", function () {
                return z;
            }),
            n.d(e, "B", function () {
                return V;
            }),
            n.d(e, "w", function () {
                return F;
            }),
            n.d(e, "A", function () {
                return G;
            }),
            n.d(e, "E", function () {
                return B;
            }),
            n.d(e, "C", function () {
                return q;
            }),
            n.d(e, "D", function () {
                return W;
            });
        var r = "|",
            i = "data-page",
            o = ".w-dyn-item",
            a = "xValue",
            u = "yValue",
            c = "zValue",
            s = "value",
            f = "xUnit",
            l = "yUnit",
            d = "zUnit",
            p = "unit",
            v = "transform",
            h = "translate3d",
            y = "scale3d",
            g = "rotateX",
            m = "rotateY",
            b = "rotateZ",
            w = "skew",
            _ = "opacity",
            x = "filter",
            O = "width",
            I = "height",
            j = "backgroundColor",
            E = "background",
            S = "borderColor",
            T = "color",
            A = "display",
            k = "flex",
            M = "willChange",
            C = "AUTO",
            L = ",",
            P = ":",
            R = "|",
            N = "CHILDREN",
            D = "IMMEDIATE_CHILDREN",
            z = "SIBLINGS",
            V = "preserve-3d",
            F = "HTML_ELEMENT",
            G = "PLAIN_OBJECT",
            B = "RENDER_TRANSFORM",
            q = "RENDER_GENERAL",
            W = "RENDER_STYLE";
    },
    function (t, e, n) {
        var r = n(12),
            i = n(115),
            o = n(116),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? i(t) : o(t);
        };
    },
    function (t, e, n) {
        var r = n(56),
            i = n(33);
        t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  };
        (e.clone = c),
            (e.addLast = l),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = h),
            (e.removeAt = y),
            (e.replaceAt = g),
            (e.getIn = m),
            (e.set = b),
            (e.setIn = w),
            (e.update = _),
            (e.updateIn = x),
            (e.merge = O),
            (e.mergeDeep = I),
            (e.mergeIn = j),
            (e.omit = E),
            (e.addDefaults = S);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t);
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var y = a(h);
                    if (y.length)
                        for (var g = 0; g <= y.length; g++) {
                            var m = y[g];
                            if (!t || void 0 === r[m]) {
                                var b = h[m];
                                e && f(r[m]) && f(b) && (b = s(t, e, r[m], b)), void 0 !== b && b !== r[m] && (u || ((u = !0), (r = c(r))), (r[m] = b));
                            }
                        }
                }
            }
            return r;
        }
        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }
        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }
        function v(t) {
            return t.length ? t.slice(1) : t;
        }
        function h(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }
        function y(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }
        function g(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }
        function m(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }
        function b(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }
        function w(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                      var o = void 0,
                          a = n[i];
                      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
                      return b(e, a, o);
                  })(t, e, n, 0)
                : n;
        }
        function _(t, e, n) {
            return b(t, e, n(null == t ? void 0 : t[e]));
        }
        function x(t, e, n) {
            return w(t, e, n(m(t, e)));
        }
        function O(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o);
        }
        function I(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o);
        }
        function j(t, e, n, r, i, o, a) {
            var u = m(t, e);
            null == u && (u = {});
            for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
            return w(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a));
        }
        function E(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f]);
            }
            return o;
        }
        function S(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o);
        }
        var T = { clone: c, addLast: l, addFirst: d, removeLast: p, removeFirst: v, insert: h, removeAt: y, replaceAt: g, getIn: m, set: b, setIn: w, update: _, updateIn: x, merge: O, mergeDeep: I, mergeIn: j, omit: E, addDefaults: S };
        e.default = T;
    },
    function (t, e, n) {
        var r = n(1).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(17),
            i = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function (t, e, n) {
        "use strict";
        (e.g = function () {
            return "i" + j++;
        }),
            (e.f = function (t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + E++;
            }),
            (e.p = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = l()(
                        e,
                        function (t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function (t) {
                          return t.key;
                      }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return { ixData: { events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a } };
            }),
            (e.n = function (t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? S : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function () {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.c = A),
            (e.d = function (t) {
                var e = t.element,
                    n = t.actionItem;
                if (!m.c) return {};
                switch (n.actionTypeId) {
                    case h.i:
                    case h.e:
                    case h.f:
                    case h.j:
                    case h.b:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.h = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments[3],
                    i = arguments[4].getStyle,
                    o = r.actionTypeId,
                    a = r.config;
                switch (o) {
                    case h.k:
                    case h.m:
                    case h.l:
                    case h.n:
                        return e[o] || R[o];
                    case h.g:
                        return M(e[o], r.config.filters);
                    case h.h:
                        return { value: s()(parseFloat(i(t, g.z)), 1) };
                    case h.i:
                        var u = i(t, g.O),
                            c = i(t, g.v),
                            f = void 0,
                            l = void 0;
                        return (
                            (f = a.widthUnit === g.a ? (k.test(u) ? parseFloat(u) : parseFloat(n.width)) : s()(parseFloat(u), parseFloat(n.width))),
                            (l = a.heightUnit === g.a ? (k.test(c) ? parseFloat(c) : parseFloat(n.height)) : s()(parseFloat(c), parseFloat(n.height))),
                            { widthValue: f, heightValue: l }
                        );
                    case h.e:
                    case h.f:
                    case h.j:
                        return (function (t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = x[n],
                                a = i(e, o),
                                u = V.test(a) ? a : r[o],
                                c = (function (t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(F, u).split(g.j);
                            return { rValue: s()(parseInt(c[0], 10), 255), gValue: s()(parseInt(c[1], 10), 255), bValue: s()(parseInt(c[2], 10), 255), aValue: s()(parseFloat(c[3]), 1) };
                        })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
                    case h.b:
                        return { value: s()(i(t, g.s), n.display) };
                    case h.d:
                        return e[o] || { value: 0 };
                    default:
                        return;
                }
            }),
            n.d(e, "i", function () {
                return L;
            }),
            (e.e = function (t) {
                var e = t.element,
                    n = t.actionItem,
                    r = t.elementApi;
                switch (n.actionTypeId) {
                    case h.k:
                    case h.m:
                    case h.l:
                    case h.n:
                        var i = n.config,
                            o = i.xValue,
                            a = i.yValue,
                            u = i.zValue;
                        return { xValue: o, yValue: a, zValue: u };
                    case h.i:
                        var c = r.getStyle,
                            s = r.setStyle,
                            f = r.getProperty,
                            l = n.config,
                            d = l.widthUnit,
                            p = l.heightUnit,
                            v = n.config,
                            y = v.widthValue,
                            b = v.heightValue;
                        if (!m.c) return { widthValue: y, heightValue: b };
                        if (d === g.a) {
                            var w = c(e, g.O);
                            s(e, g.O, ""), (y = f(e, "offsetWidth")), s(e, g.O, w);
                        }
                        if (p === g.a) {
                            var _ = c(e, g.v);
                            s(e, g.v, ""), (b = f(e, "offsetHeight")), s(e, g.v, _);
                        }
                        return { widthValue: y, heightValue: b };
                    case h.e:
                    case h.f:
                    case h.j:
                        var x = n.config,
                            O = x.rValue,
                            I = x.gValue,
                            j = x.bValue,
                            E = x.aValue;
                        return { rValue: O, gValue: I, bValue: j, aValue: E };
                    case h.g:
                        return n.config.filters.reduce(C, {});
                    default:
                        var S = n.config.value;
                        return { value: S };
                }
            }),
            (e.l = P),
            (e.m = function (t, e) {
                return t === g.D ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.q = function (t, e, n, r, i, o, a, u) {
                switch (u) {
                    case g.E:
                        return (function (t, e, n, r, i) {
                            var o = z
                                    .map(function (t) {
                                        var n = R[t],
                                            r = e[t] || {},
                                            i = r.xValue,
                                            o = void 0 === i ? n.xValue : i,
                                            a = r.yValue,
                                            u = void 0 === a ? n.yValue : a,
                                            c = r.zValue,
                                            s = void 0 === c ? n.zValue : c,
                                            f = r.xUnit,
                                            l = void 0 === f ? "" : f,
                                            d = r.yUnit,
                                            p = void 0 === d ? "" : d,
                                            v = r.zUnit,
                                            y = void 0 === v ? "" : v;
                                        switch (t) {
                                            case h.k:
                                                return g.M + "(" + o + l + ", " + u + p + ", " + s + y + ")";
                                            case h.m:
                                                return g.I + "(" + o + l + ", " + u + p + ", " + s + y + ")";
                                            case h.l:
                                                return g.F + "(" + o + l + ") " + g.G + "(" + u + p + ") " + g.H + "(" + s + y + ")";
                                            case h.n:
                                                return g.K + "(" + o + l + ", " + u + p + ")";
                                            default:
                                                return "";
                                        }
                                    })
                                    .join(" "),
                                a = i.setStyle;
                            G(t, m.d, i),
                                a(t, m.d, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (f = c.xValue),
                                (l = c.yValue),
                                (d = c.zValue),
                                ((s === h.k && void 0 !== d) || (s === h.m && void 0 !== d) || (s === h.l && (void 0 !== f || void 0 !== l))) && a(t, m.e, g.B);
                            var u, c, s, f, l, d;
                        })(t, e, n, i, a);
                    case g.D:
                        return (function (t, e, n, r, i, o) {
                            var a = o.setStyle,
                                u = r.actionTypeId,
                                c = r.config;
                            switch (u) {
                                case h.i:
                                    var s = r.config,
                                        f = s.widthUnit,
                                        d = void 0 === f ? "" : f,
                                        p = s.heightUnit,
                                        v = void 0 === p ? "" : p,
                                        y = n.widthValue,
                                        m = n.heightValue;
                                    void 0 !== y && (d === g.a && (d = "px"), G(t, g.O, o), a(t, g.O, y + d)), void 0 !== m && (v === g.a && (v = "px"), G(t, g.v, o), a(t, g.v, m + v));
                                    break;
                                case h.g:
                                    !(function (t, e, n, r) {
                                        var i = l()(
                                                e,
                                                function (t, e, r) {
                                                    return t + " " + r + "(" + e + D(r, n) + ")";
                                                },
                                                ""
                                            ),
                                            o = r.setStyle;
                                        G(t, g.t, r), o(t, g.t, i);
                                    })(t, n, c, o);
                                    break;
                                case h.e:
                                case h.f:
                                case h.j:
                                    var b = x[u],
                                        w = n.rValue,
                                        _ = n.gValue,
                                        O = n.bValue,
                                        I = n.aValue;
                                    G(t, b, o), a(t, b, I >= 1 ? "rgb(" + Math.round(w) + "," + Math.round(_) + "," + Math.round(O) + ")" : "rgba(" + Math.round(w) + "," + Math.round(_) + "," + Math.round(O) + "," + I + ")");
                                    break;
                                default:
                                    var j = c.unit,
                                        E = void 0 === j ? "" : j;
                                    G(t, i, o), a(t, i, n.value + E);
                            }
                        })(t, 0, n, i, o, a);
                    case g.C:
                        return (function (t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case h.b:
                                    var i = e.config.value;
                                    return void (i === g.u && m.c ? r(t, g.s, m.b) : r(t, g.s, i));
                            }
                        })(t, i, a);
                }
            }),
            (e.b = function (t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function (t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a && q({ actionList: a, event: e, elementApi: n });
                }),
                    Object.keys(u).forEach(function (t) {
                        q({ actionList: u[t], elementApi: n });
                    });
            }),
            (e.a = function (t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if (o === h.i) {
                    var a = e.config;
                    a.widthUnit === g.a && r(t, g.O, ""), a.heightUnit === g.a && r(t, g.v, "");
                }
                i(t, g.P) && U({ effect: B, actionTypeId: o, elementApi: n })(t);
            }),
            (e.j = X),
            (e.o = function (t) {
                var e = t.actionListId,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = r.actionLists[e],
                    o = i.actionItemGroups,
                    a = i.continuousParameterGroups,
                    u = [],
                    c = function (t) {
                        return u.push(Object(v.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === n;
                    };
                return (
                    o &&
                        o.some(function (t) {
                            return t.actionItems.some(c);
                        }),
                    a &&
                        a.some(function (t) {
                            return t.continuousActionGroups.some(function (t) {
                                return t.actionItems.some(c);
                            });
                        }),
                    Object(v.setIn)(r, ["actionLists"], w({}, e, { id: e, actionItemGroups: [{ actionItems: u }] }))
                );
            }),
            (e.s = function (t, e) {
                var n = e.basedOn;
                return (t === y.w && (n === y.g || null == n)) || (t === y.j && n === y.g);
            }),
            (e.k = function (t, e) {
                return t + g.h + e;
            }),
            (e.r = function (t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.t = function (t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget,
                    a = void 0 === o ? "" : o;
                return n + g.d + i + g.d + a;
            });
        var r,
            i,
            o,
            a = n(15),
            u = n.n(a),
            c = n(141),
            s = n.n(c),
            f = n(142),
            l = n.n(f),
            d = n(185),
            p = n.n(d),
            v = n(11),
            h = (n.n(v), n(54), n(41)),
            y = n(42),
            g = n(8),
            m = n(78),
            b =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      };
        function w(t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }
        var _ = function (t) {
                return t.trim();
            },
            x = Object.freeze((w((r = {}), h.e, g.c), w(r, h.f, g.e), w(r, h.j, g.i), r)),
            O = Object.freeze((w((i = {}), m.d, g.L), w(i, g.c, g.b), w(i, g.z, g.z), w(i, g.t, g.t), w(i, g.O, g.O), w(i, g.v, g.v), i)),
            I = {},
            j = 1;
        var E = 1;
        var S = function (t, e) {
            return t === e;
        };
        function T(t) {
            var e = void 0 === t ? "undefined" : b(t);
            return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {};
        }
        function A(t) {
            var e = t.config,
                n = t.event,
                r = t.eventTarget,
                i = t.elementRoot,
                o = t.elementApi;
            if (!o) throw new Error("IX2 missing elementApi");
            var a = o.getValidDocument,
                c = o.getQuerySelector,
                s = o.queryDocument,
                f = o.getChildElements,
                l = o.getSiblingElements,
                d = o.matchSelector,
                p = o.elementContains,
                v = o.isSiblingNode,
                h = e.target;
            if (!h) return [];
            var b = T(h),
                w = b.id,
                _ = b.objectId,
                x = b.selector,
                O = b.selectorGuids,
                j = b.appliesTo,
                E = b.useEventTarget;
            if (_) return [I[_] || (I[_] = {})];
            if (j === y.q) {
                var S = a(w);
                return S ? [S] : [];
            }
            var A = u()(n, "action.config.affectedElements", {})[w || x] || {},
                k = Boolean(A.id || A.selector),
                M = void 0,
                C = void 0,
                L = void 0,
                P = n && c(T(n.target));
            if ((k ? ((M = A.limitAffectedElements), (C = P), (L = c(A))) : (C = L = c({ id: w, selector: x, selectorGuids: O })), n && E)) {
                var R = r && (L || !0 === E) ? [r] : s(P);
                if (L) {
                    if (E === g.g)
                        return s(L).filter(function (t) {
                            return R.some(function (e) {
                                return p(e, t);
                            });
                        });
                    if (E === g.J)
                        return s(L).filter(function (t) {
                            return R.some(function (e) {
                                return v(e, t);
                            });
                        });
                }
                return R;
            }
            return null == C || null == L
                ? []
                : m.c && i
                ? s(L).filter(function (t) {
                      return i.contains(t);
                  })
                : M === g.g
                ? s(C, L)
                : M === g.x
                ? f(s(C)).filter(d(L))
                : M === g.J
                ? l(s(C)).filter(d(L))
                : s(L);
        }
        var k = /px/,
            M = function (t, e) {
                return e.reduce(function (t, e) {
                    return null == t[e.type] && (t[e.type] = N[e.type]), t;
                }, t || {});
            };
        var C = function (t, e) {
                return e && (t[e.type] = e.value || 0), t;
            },
            L = function (t, e, n) {
                if (t === h.g) {
                    var r = p()(n.filters, function (t) {
                        return t.type === e;
                    });
                    return r ? r.value : 0;
                }
                return n[e];
            };
        function P(t) {
            return /^TRANSFORM_/.test(t) ? g.E : /^STYLE_/.test(t) ? g.D : /^GENERAL_/.test(t) ? g.C : void 0;
        }
        var R =
                (w((o = {}), h.k, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                w(o, h.m, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })),
                w(o, h.l, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                w(o, h.n, Object.freeze({ xValue: 0, yValue: 0 })),
                o),
            N = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
            D = function (t, e) {
                var n = p()(e.filters, function (e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            z = Object.keys(R);
        var V = /^rgb/,
            F = RegExp("rgba?\\(([^)]+)\\)");
        function G(t, e, n) {
            if (m.c) {
                var r = O[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, g.P);
                    if (a) {
                        var u = a.split(g.j).map(_);
                        -1 === u.indexOf(r) && o(t, g.P, u.concat(r).join(g.j));
                    } else o(t, g.P, r);
                }
            }
        }
        function B(t, e, n) {
            if (m.c) {
                var r = O[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, g.P);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            g.P,
                            a
                                .split(g.j)
                                .map(_)
                                .filter(function (t) {
                                    return t !== r;
                                })
                                .join(g.j)
                        );
                }
            }
        }
        function q(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function (t) {
                    W({ actionGroup: t, event: r, elementApi: i });
                }),
                a &&
                    a.forEach(function (t) {
                        t.continuousActionGroups.forEach(function (t) {
                            W({ actionGroup: t, event: r, elementApi: i });
                        });
                    });
        }
        function W(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function (t) {
                var e = t.actionTypeId,
                    i = t.config,
                    o = U({ effect: H, actionTypeId: e, elementApi: r });
                A({ config: i, event: n, elementApi: r }).forEach(o);
            });
        }
        var U = function (t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function (t) {
                switch (n) {
                    case h.k:
                    case h.m:
                    case h.l:
                    case h.n:
                        e(t, m.d, r);
                        break;
                    case h.g:
                        e(t, g.t, r);
                        break;
                    case h.h:
                        e(t, g.z, r);
                        break;
                    case h.i:
                        e(t, g.O, r), e(t, g.v, r);
                        break;
                    case h.e:
                    case h.f:
                    case h.j:
                        e(t, x[n], r);
                        break;
                    case h.b:
                        e(t, g.s, r);
                }
            };
        };
        function H(t, e, n) {
            var r = n.setStyle;
            B(t, e, n), r(t, e, ""), e === m.d && r(t, m.e, "");
        }
        function X(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function (t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function (t, e, n) {
        var r = n(25);
        t.exports = function (t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(26),
            o = n(117),
            a = n(58);
        t.exports = function (t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(5),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e, n) {
        var r = n(6)(Object, "create");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(131),
            i = n(132),
            o = n(133),
            a = n(134),
            u = n(135);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(28);
        t.exports = function (t, e) {
            for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(137);
        t.exports = function (t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function (t, e, n) {
        var r = n(63),
            i = n(34),
            o = n(10);
        t.exports = function (t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(147),
            i = n(5),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (t) {
                      return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                  };
        t.exports = c;
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(16),
            i = n(13);
        t.exports = function (t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; ) t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(17),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || (null != e && t in Object(e));
        };
    },
    function (t, e, n) {
        var r = n(120),
            i = n(136),
            o = n(138),
            a = n(139),
            u = n(140);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function (t, e, n) {
        var r = n(6)(n(1), "Map");
        t.exports = r;
    },
    function (t, e, n) {
        (function (t) {
            var r = n(1),
                i = n(148),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }.call(e, n(64)(t)));
    },
    function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = typeof t;
            return !!(e = null == e ? n : e) && ("number" == i || ("symbol" != i && r.test(t))) && t > -1 && t % 1 == 0 && t < e;
        };
    },
    function (t, e, n) {
        var r = n(149),
            i = n(150),
            o = n(151),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(152),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
            return t;
        };
    },
    function (t, e, n) {
        var r = n(174),
            i = n(29),
            o = n(175),
            a = n(176),
            u = n(72),
            c = n(9),
            s = n(57),
            f = s(r),
            l = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            h = c;
        ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) || (i && "[object Map]" != h(new i())) || (o && "[object Promise]" != h(o.resolve())) || (a && "[object Set]" != h(new a())) || (u && "[object WeakMap]" != h(new u()))) &&
            (h = function (t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = h);
    },
    function (t, e) {
        t.exports = function (t) {
            return t;
        };
    },
    function (t, e, n) {
        var r = n(187);
        t.exports = function (t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(17),
            o = NaN,
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            f = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
        };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "k", function () {
            return r;
        }),
            n.d(e, "m", function () {
                return i;
            }),
            n.d(e, "l", function () {
                return o;
            }),
            n.d(e, "n", function () {
                return a;
            }),
            n.d(e, "h", function () {
                return u;
            }),
            n.d(e, "i", function () {
                return c;
            }),
            n.d(e, "g", function () {
                return s;
            }),
            n.d(e, "e", function () {
                return f;
            }),
            n.d(e, "f", function () {
                return l;
            }),
            n.d(e, "j", function () {
                return d;
            }),
            n.d(e, "b", function () {
                return p;
            }),
            n.d(e, "a", function () {
                return v;
            }),
            n.d(e, "c", function () {
                return h;
            }),
            n.d(e, "d", function () {
                return y;
            });
        var r = "TRANSFORM_MOVE",
            i = "TRANSFORM_SCALE",
            o = "TRANSFORM_ROTATE",
            a = "TRANSFORM_SKEW",
            u = "STYLE_OPACITY",
            c = "STYLE_SIZE",
            s = "STYLE_FILTER",
            f = "STYLE_BACKGROUND_COLOR",
            l = "STYLE_BORDER",
            d = "STYLE_TEXT_COLOR",
            p = "GENERAL_DISPLAY",
            v = "GENERAL_CONTINUOUS_ACTION",
            h = "GENERAL_START_ACTION",
            y = "OBJECT_VALUE";
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "h", function () {
            return r;
        }),
            n.d(e, "m", function () {
                return i;
            }),
            n.d(e, "i", function () {
                return o;
            }),
            n.d(e, "n", function () {
                return a;
            }),
            n.d(e, "l", function () {
                return u;
            }),
            n.d(e, "k", function () {
                return c;
            }),
            n.d(e, "j", function () {
                return s;
            }),
            n.d(e, "x", function () {
                return f;
            }),
            n.d(e, "y", function () {
                return l;
            }),
            n.d(e, "w", function () {
                return d;
            }),
            n.d(e, "B", function () {
                return p;
            }),
            n.d(e, "C", function () {
                return v;
            }),
            n.d(e, "p", function () {
                return h;
            }),
            n.d(e, "o", function () {
                return y;
            }),
            n.d(e, "z", function () {
                return g;
            }),
            n.d(e, "A", function () {
                return m;
            }),
            n.d(e, "d", function () {
                return b;
            }),
            n.d(e, "c", function () {
                return w;
            }),
            n.d(e, "a", function () {
                return _;
            }),
            n.d(e, "b", function () {
                return x;
            }),
            n.d(e, "v", function () {
                return O;
            }),
            n.d(e, "r", function () {
                return I;
            }),
            n.d(e, "u", function () {
                return j;
            }),
            n.d(e, "t", function () {
                return E;
            }),
            n.d(e, "s", function () {
                return S;
            }),
            n.d(e, "g", function () {
                return T;
            }),
            n.d(e, "D", function () {
                return A;
            }),
            n.d(e, "q", function () {
                return k;
            }),
            n.d(e, "f", function () {
                return M;
            }),
            n.d(e, "e", function () {
                return C;
            });
        var r = "MOUSE_CLICK",
            i = "MOUSE_SECOND_CLICK",
            o = "MOUSE_DOWN",
            a = "MOUSE_UP",
            u = "MOUSE_OVER",
            c = "MOUSE_OUT",
            s = "MOUSE_MOVE",
            f = "SCROLL_INTO_VIEW",
            l = "SCROLL_OUT_OF_VIEW",
            d = "SCROLLING_IN_VIEW",
            p = "TAB_ACTIVE",
            v = "TAB_INACTIVE",
            h = "NAVBAR_OPEN",
            y = "NAVBAR_CLOSE",
            g = "SLIDER_ACTIVE",
            m = "SLIDER_INACTIVE",
            b = "DROPDOWN_OPEN",
            w = "DROPDOWN_CLOSE",
            _ = "COMPONENT_ACTIVE",
            x = "COMPONENT_INACTIVE",
            O = "PAGE_START",
            I = "PAGE_FINISH",
            j = "PAGE_SCROLL_UP",
            E = "PAGE_SCROLL_DOWN",
            S = "PAGE_SCROLL",
            T = "ELEMENT",
            A = "VIEWPORT",
            k = "PAGE",
            M = "ECOMMERCE_CART_OPEN",
            C = "ECOMMERCE_CART_CLOSE";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            n.d(e, "rawDataImported", function () {
                return u;
            }),
            n.d(e, "sessionInitialized", function () {
                return c;
            }),
            n.d(e, "sessionStarted", function () {
                return s;
            }),
            n.d(e, "sessionStopped", function () {
                return f;
            }),
            n.d(e, "previewRequested", function () {
                return l;
            }),
            n.d(e, "playbackRequested", function () {
                return d;
            }),
            n.d(e, "stopRequested", function () {
                return p;
            }),
            n.d(e, "clearRequested", function () {
                return v;
            }),
            n.d(e, "eventListenerAdded", function () {
                return h;
            }),
            n.d(e, "eventStateChanged", function () {
                return y;
            }),
            n.d(e, "animationFrameChanged", function () {
                return g;
            }),
            n.d(e, "parameterChanged", function () {
                return m;
            }),
            n.d(e, "instanceAdded", function () {
                return b;
            }),
            n.d(e, "instanceStarted", function () {
                return w;
            }),
            n.d(e, "instanceRemoved", function () {
                return _;
            }),
            n.d(e, "elementStateChanged", function () {
                return x;
            }),
            n.d(e, "actionListPlaybackChanged", function () {
                return O;
            }),
            n.d(e, "viewportWidthChanged", function () {
                return I;
            });
        var r = n(4),
            i = n(41),
            o = n(14),
            a =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
            u = function (t) {
                return { type: r.m, payload: a({}, Object(o.p)(t)) };
            },
            c = function (t) {
                var e = t.hasBoundaryNodes;
                return { type: r.n, payload: { hasBoundaryNodes: e } };
            },
            s = function () {
                return { type: r.o, payload: {} };
            },
            f = function () {
                return { type: r.p, payload: {} };
            },
            l = function (t) {
                var e = t.rawData;
                return { type: r.l, payload: { rawData: e } };
            },
            d = function (t) {
                var e = t.actionTypeId,
                    n = void 0 === e ? i.c : e,
                    o = t.actionListId,
                    a = t.actionItemId,
                    u = t.eventId,
                    c = t.allowEvents,
                    s = t.immediate,
                    f = t.verbose,
                    l = t.rawData;
                return { type: r.k, payload: { actionTypeId: n, actionListId: o, actionItemId: a, eventId: u, allowEvents: c, immediate: s, verbose: f, rawData: l } };
            },
            p = function (t) {
                return { type: r.q, payload: { actionListId: t } };
            },
            v = function () {
                return { type: r.c, payload: {} };
            },
            h = function (t, e) {
                return { type: r.e, payload: { target: t, listenerParams: e } };
            },
            y = function (t, e) {
                return { type: r.f, payload: { stateKey: t, newState: e } };
            },
            g = function (t, e) {
                return { type: r.b, payload: { now: t, parameters: e } };
            },
            m = function (t, e) {
                return { type: r.j, payload: { key: t, value: e } };
            },
            b = function (t) {
                return { type: r.g, payload: a({}, t) };
            },
            w = function (t) {
                return { type: r.i, payload: { instanceId: t } };
            },
            _ = function (t) {
                return { type: r.h, payload: { instanceId: t } };
            },
            x = function (t, e, n, i) {
                return { type: r.d, payload: { elementId: t, actionTypeId: e, current: n, actionItem: i } };
            },
            O = function (t) {
                var e = t.actionListId,
                    n = t.isPlaying;
                return { type: r.a, payload: { actionListId: e, isPlaying: n } };
            },
            I = function (t) {
                var e = t.width,
                    n = t.mediaQueries;
                return { type: r.r, payload: { width: e, mediaQueries: n } };
            };
    },
    function (t, e, n) {
        var r = n(84),
            i = n(45);
        function o(t, e) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!e), (this.__index__ = 0), (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)), (o.prototype.constructor = o), (t.exports = o);
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e, n) {
        var r = n(84),
            i = n(45),
            o = 4294967295;
        function a(t) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = o), (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)), (a.prototype.constructor = a), (t.exports = a);
    },
    function (t, e) {
        var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  };
        window.tram = (function (t) {
            function e(t, e) {
                return new D.Bare().init(t, e);
            }
            function r(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }
            function o(t, e, n) {
                return "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
            }
            function a() {}
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }
            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return Y.test(t) || !Z.test(t) ? (r = parseInt(t, 10)) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n;
            }
            function s(t) {
                U.debug && window && window.console.warn(t);
            }
            var f = (function (t, e, r) {
                    function i(t) {
                        return "object" == (void 0 === t ? "undefined" : n(t));
                    }
                    function o(t) {
                        return "function" == typeof t;
                    }
                    function a() {}
                    return function n(u, c) {
                        function s() {
                            var t = new f();
                            return o(t.init) && t.init.apply(t, arguments), t;
                        }
                        function f() {}
                        c === r && ((c = u), (u = Object)), (s.Bare = f);
                        var l,
                            d = (a[t] = u[t]),
                            p = (f[t] = s[t] = new a());
                        return (
                            (p.constructor = s),
                            (s.mixin = function (e) {
                                return (f[t] = s[t] = n(s, e)[t]), s;
                            }),
                            (s.open = function (t) {
                                if (((l = {}), o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t), i(l))) for (var n in l) e.call(l, n) && (p[n] = l[n]);
                                return o(p.init) || (p.init = u), s;
                            }),
                            s.open(c)
                        );
                    };
                })("prototype", {}.hasOwnProperty),
                l = {
                    ease: [
                        "ease",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t);
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        },
                    ],
                    linear: [
                        "linear",
                        function (t, e, n, r) {
                            return (n * t) / r + e;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t + e;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t + e : (-n / 2) * (--t * (t - 2) - 1) + e;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t + e : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t + e : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t * t + e : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, r) {
                            return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e : (n / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
                        },
                    ],
                },
                d = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
                p = document,
                v = window,
                h = "bkwld-tram",
                y = /[\-\.0-9]/g,
                g = /[A-Z]/,
                m = "number",
                b = /^(rgb|#)/,
                w = /(em|cm|mm|in|pt|pc|px)$/,
                _ = /(em|cm|mm|in|pt|pc|px|%)$/,
                x = /(deg|rad|turn)$/,
                O = "unitless",
                I = /(all|none) 0s ease 0s/,
                j = /^(width|height)$/,
                E = " ",
                S = p.createElement("a"),
                T = ["Webkit", "Moz", "O", "ms"],
                A = ["-webkit-", "-moz-", "-o-", "-ms-"],
                k = function (t) {
                    if (t in S.style) return { dom: t, css: t };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < T.length; e++) if ((n = T[e] + r) in S.style) return { dom: n, css: A[e] + t };
                },
                M = (e.support = { bind: Function.prototype.bind, transform: k("transform"), transition: k("transition"), backface: k("backface-visibility"), timing: k("transition-timing-function") });
            if (M.transition) {
                var C = M.timing.dom;
                if (((S.style[C] = l["ease-in-back"][0]), !S.style[C])) for (var L in d) l[L][0] = d[L];
            }
            var P = (e.frame = (function () {
                    var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                    return t && M.bind
                        ? t.bind(v)
                        : function (t) {
                              v.setTimeout(t, 16);
                          };
                })()),
                R = (e.now = (function () {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && M.bind
                        ? e.bind(t)
                        : Date.now ||
                              function () {
                                  return +new Date();
                              };
                })()),
                N = f(function (e) {
                    function i(t, e) {
                        var n = (function (t) {
                                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                                    var i = t[e];
                                    i && r.push(i);
                                }
                                return r;
                            })(("" + t).split(E)),
                            r = n[0];
                        e = e || {};
                        var i = K[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
                        }
                    }
                    function o(t, e, r) {
                        if (t) {
                            var o = void 0 === t ? "undefined" : n(t);
                            if ((e || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), "number" == o && e)) return (this.timer = new q({ duration: t, context: this, complete: a })), void (this.active = !0);
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        l.call(this);
                                        break;
                                    default:
                                        i.call(this, t, r && r[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == o) return void t.call(this, this);
                            if ("object" == o) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function (t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function (t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 && ((this.timer = new q({ duration: s, context: this })), (this.active = !0), e && (this.timer.complete = a));
                                var v = this,
                                    h = !1,
                                    y = {};
                                P(function () {
                                    p.call(v, t, function (t) {
                                        t.active && ((h = !0), (y[t.name] = t.nextStyle));
                                    }),
                                        h && v.$el.css(y);
                                });
                            }
                        }
                    }
                    function a() {
                        if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                            var t = this.queue.shift();
                            o.call(this, t.options, !0, t.args);
                        }
                    }
                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t ? ((e = {})[t] = 1) : (e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }
                    function f() {
                        u.call(this), (this.el.style.display = "none");
                    }
                    function l() {
                        this.el.offsetHeight;
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props)) (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")), this.style !== n && ((this.style = n), (this.el.style[M.transition.dom] = n));
                    }
                    function p(t, e, n) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            f = {};
                        for (o in t) (u = t[o]), o in Q ? (f.transform || (f.transform = {}), (f.transform[o] = u)) : (g.test(o) && (o = r(o)), o in K ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in f) {
                            if (((u = f[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = i.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        n && c && n.call(this, c);
                    }
                    function v(t) {
                        t.stop();
                    }
                    function y(t, e) {
                        t.set(e);
                    }
                    function m(t) {
                        this.$el.css(t);
                    }
                    function b(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                      var n,
                                          r = this.children.length;
                                      for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                      return this;
                                  }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function (e) {
                        if (((this.$el = t(e)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), U.keepInherited && !U.fallback)) {
                            var n = X(this.el, "transition");
                            n && !I.test(n) && (this.upstream = n);
                        }
                        M.backface && U.hideBackface && H(this.el, M.backface.css, "hidden");
                    }),
                        b("add", i),
                        b("start", o),
                        b("wait", function (t) {
                            (t = c(t, 0)), this.active ? this.queue.push({ options: t }) : ((this.timer = new q({ duration: t, context: this, complete: a })), (this.active = !0));
                        }),
                        b("then", function (t) {
                            return this.active ? (this.queue.push({ options: t, args: arguments }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().");
                        }),
                        b("next", a),
                        b("stop", u),
                        b("set", function (t) {
                            u.call(this, t), p.call(this, t, y, m);
                        }),
                        b("show", function (t) {
                            "string" != typeof t && (t = "block"), (this.el.style.display = t);
                        }),
                        b("hide", f),
                        b("redraw", l),
                        b("destroy", function () {
                            u.call(this), t.removeData(this.el, h), (this.$el = this.el = null);
                        });
                }),
                D = f(N, function (e) {
                    function n(e, n) {
                        var r = t.data(e, h) || t.data(e, h, new N.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function (e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function (t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                z = f(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }
                    function r(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    var i = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function (t, e, n, r) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            $[o] && (o = $[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, i)),
                            (this.ease = (function (t, e, n) {
                                return void 0 !== e && (n = e), t in l ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = j.test(this.name)),
                            (this.unit = r.unit || this.unit || U.defaultUnit),
                            (this.angle = r.angle || this.angle || U.defaultAngle),
                            U.fallback || r.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition), (this.string = this.name + E + this.duration + "ms" + ("ease" != this.ease ? E + l[this.ease][0] : "") + (this.delay ? E + this.delay + "ms" : "")));
                    }),
                        (t.set = function (t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function (t) {
                            (this.active = !0), (t = this.convert(t, this.type)), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), (this.nextStyle = t);
                        }),
                        (t.fallback = function (t) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))),
                                (this.tween = new B({ from: n, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
                        }),
                        (t.get = function () {
                            return X(this.el, this.name);
                        }),
                        (t.update = function (t) {
                            H(this.el, this.name, t);
                        }),
                        (t.stop = function () {
                            (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), H(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function (t, e) {
                            if ("auto" == t && this.auto) return t;
                            var i,
                                o = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case m:
                                    if (o) return t;
                                    if (a && "" === t.replace(y, "")) return +t;
                                    i = "number(unitless)";
                                    break;
                                case b:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t);
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case w:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit)";
                                    break;
                                case _:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case x:
                                    if (o) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case O:
                                    if (o) return t;
                                    if (a && _.test(t)) return t;
                                    i = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function (t, e) {
                                    s("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e);
                                })(i, t),
                                t
                            );
                        }),
                        (t.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                V = f(z, function (t, e) {
                    t.init = function () {
                        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b));
                    };
                }),
                F = f(z, function (t, e) {
                    (t.init = function () {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function () {
                            return this.$el[this.name]();
                        }),
                        (t.update = function (t) {
                            this.$el[this.name](t);
                        });
                }),
                G = f(z, function (t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t) (i = (o = Q[n])[0]), (r = o[1] || n), (a = this.convert(t[n], i)), e.call(this, r, a, i);
                    }
                    (t.init = function () {
                        e.init.apply(this, arguments), this.current || ((this.current = {}), Q.perspective && U.perspective && ((this.current.perspective = U.perspective), H(this.el, this.name, this.style(this.current)), this.redraw()));
                    }),
                        (t.set = function (t) {
                            n.call(this, t, function (t, e) {
                                this.current[t] = e;
                            }),
                                H(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function (t) {
                            var e = this.values(t);
                            this.tween = new W({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function (t) {
                            var e = this.values(t);
                            this.tween = new W({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
                        }),
                        (t.update = function () {
                            H(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function (t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function (t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function (t, n, i) {
                                    (r[t] = n), void 0 === this.current[t] && ((e = 0), ~t.indexOf("scale") && (e = 1), (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                B = f(function (e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = R(), t = i; t--; ) (r = c[t]) && r.render(e);
                    }
                    var r = { ease: l.ease[1], from: 0, to: 1 };
                    (e.init = function (t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || r.ease;
                        l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), (this.ease = e), (this.update = t.update || a), (this.complete = t.complete || a), (this.context = t.context || this), (this.name = t.name);
                        var n = t.from,
                            i = t.to;
                        void 0 === n && (n = r.from),
                            void 0 === i && (i = r.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof i ? ((this.begin = n), (this.change = i - n)) : this.format(i, n),
                            (this.value = this.begin + this.unit),
                            (this.start = R()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function () {
                            var t;
                            this.active || (this.start || (this.start = R()), (this.active = !0), (t = this), 1 === c.push(t) && P(n));
                        }),
                        (e.stop = function () {
                            var e, n, r;
                            this.active && ((this.active = !1), (e = this), (r = t.inArray(e, c)) >= 0 && ((n = c.slice(r + 1)), (c.length = r), n.length && (c = c.concat(n))));
                        }),
                        (e.render = function (t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function (t, e, n) {
                                              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
                                          })(this.startRGB, this.endRGB, r)
                                        : (function (t) {
                                              return Math.round(t * s) / s;
                                          })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change), (this.value = e + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
                        }),
                        (e.format = function (t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0))) return (this.startRGB = i(e)), (this.endRGB = i(t)), (this.endHex = t), (this.begin = 0), void (this.change = 1);
                            if (!this.unit) {
                                var n = e.replace(y, "");
                                n !== t.replace(y, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)), (t = parseFloat(t)), (this.begin = this.value = e), (this.change = t - e);
                        }),
                        (e.destroy = function () {
                            this.stop(), (this.context = null), (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                q = f(B, function (t) {
                    (t.init = function (t) {
                        (this.duration = t.duration || 0), (this.complete = t.complete || a), (this.context = t.context), this.play();
                    }),
                        (t.render = function (t) {
                            t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
                        });
                }),
                W = f(B, function (t, e) {
                    (t.init = function (t) {
                        var e, n;
                        for (e in ((this.context = t.context), (this.update = t.update), (this.tweens = []), (this.current = t.current), t.values))
                            (n = t.values[e]), this.current[e] !== n && this.tweens.push(new B({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                        this.play();
                    }),
                        (t.render = function (t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--; ) (n = this.tweens[e]).context && (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r ? void (this.update && this.update.call(this.context)) : this.destroy();
                        }),
                        (t.destroy = function () {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                U = (e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !M.transition, agentTests: [] });
            (e.fallback = function (t) {
                if (!M.transition) return (U.fallback = !0);
                U.agentTests.push("(" + t + ")");
                var e = new RegExp(U.agentTests.join("|"), "i");
                U.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function (t) {
                    return new B(t);
                }),
                (e.delay = function (t, e, n) {
                    return new q({ complete: e, duration: t, context: n });
                }),
                (t.fn.tram = function (t) {
                    return e.call(null, this, t);
                });
            var H = t.style,
                X = t.css,
                $ = { transform: M.transform && M.transform.css },
                K = {
                    color: [V, b],
                    background: [V, b, "background-color"],
                    "outline-color": [V, b],
                    "border-color": [V, b],
                    "border-top-color": [V, b],
                    "border-right-color": [V, b],
                    "border-bottom-color": [V, b],
                    "border-left-color": [V, b],
                    "border-width": [z, w],
                    "border-top-width": [z, w],
                    "border-right-width": [z, w],
                    "border-bottom-width": [z, w],
                    "border-left-width": [z, w],
                    "border-spacing": [z, w],
                    "letter-spacing": [z, w],
                    margin: [z, w],
                    "margin-top": [z, w],
                    "margin-right": [z, w],
                    "margin-bottom": [z, w],
                    "margin-left": [z, w],
                    padding: [z, w],
                    "padding-top": [z, w],
                    "padding-right": [z, w],
                    "padding-bottom": [z, w],
                    "padding-left": [z, w],
                    "outline-width": [z, w],
                    opacity: [z, m],
                    top: [z, _],
                    right: [z, _],
                    bottom: [z, _],
                    left: [z, _],
                    "font-size": [z, _],
                    "text-indent": [z, _],
                    "word-spacing": [z, _],
                    width: [z, _],
                    "min-width": [z, _],
                    "max-width": [z, _],
                    height: [z, _],
                    "min-height": [z, _],
                    "max-height": [z, _],
                    "line-height": [z, O],
                    "scroll-top": [F, m, "scrollTop"],
                    "scroll-left": [F, m, "scrollLeft"],
                },
                Q = {};
            M.transform && ((K.transform = [G]), (Q = { x: [_, "translateX"], y: [_, "translateY"], rotate: [x], rotateX: [x], rotateY: [x], scale: [m], scaleX: [m], scaleY: [m], skew: [x], skewX: [x], skewY: [x] })),
                M.transform && M.backface && ((Q.z = [_, "translateZ"]), (Q.rotateZ = [x]), (Q.scaleZ = [m]), (Q.perspective = [w]));
            var Y = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function (t, e, n) {
        "use strict";
        var r = n(49),
            i = n(104);
        n(105), n(106), n(53), n(52);
        n.d(e, "b", function () {
            return r.b;
        }),
            n.d(e, "a", function () {
                return i.a;
            });
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o;
        }),
            (e.b = function t(e, n, a) {
                var u;
                "function" == typeof n && void 0 === a && ((a = n), (n = void 0));
                if (void 0 !== a) {
                    if ("function" != typeof a) throw new Error("Expected the enhancer to be a function.");
                    return a(t)(e, n);
                }
                if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
                var c = e;
                var s = n;
                var f = [];
                var l = f;
                var d = !1;
                function p() {
                    l === f && (l = f.slice());
                }
                function v() {
                    return s;
                }
                function h(t) {
                    if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                    var e = !0;
                    return (
                        p(),
                        l.push(t),
                        function () {
                            if (e) {
                                (e = !1), p();
                                var n = l.indexOf(t);
                                l.splice(n, 1);
                            }
                        }
                    );
                }
                function y(t) {
                    if (!Object(r.a)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (d) throw new Error("Reducers may not dispatch actions.");
                    try {
                        (d = !0), (s = c(s, t));
                    } finally {
                        d = !1;
                    }
                    for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
                    return t;
                }
                y({ type: o.INIT });
                return (
                    (u = {
                        dispatch: y,
                        subscribe: h,
                        getState: v,
                        replaceReducer: function (t) {
                            if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                            (c = t), y({ type: o.INIT });
                        },
                    }),
                    (u[i.a] = function () {
                        var t,
                            e = h;
                        return (
                            ((t = {
                                subscribe: function (t) {
                                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                                    function n() {
                                        t.next && t.next(v());
                                    }
                                    n();
                                    var r = e(n);
                                    return { unsubscribe: r };
                                },
                            })[i.a] = function () {
                                return this;
                            }),
                            t
                        );
                    }),
                    u
                );
            });
        var r = n(50),
            i = n(101),
            o = { INIT: "@@redux/INIT" };
    },
    function (t, e, n) {
        "use strict";
        var r = n(93),
            i = n(98),
            o = n(100),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            f = c.hasOwnProperty,
            l = s.call(Object);
        e.a = function (t) {
            if (!Object(o.a)(t) || Object(r.a)(t) != a) return !1;
            var e = Object(i.a)(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(94).a.Symbol;
        e.a = r;
    },
    function (t, e, n) {
        "use strict";
    },
    function (t, e, n) {
        "use strict";
        e.a = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (0 === e.length)
                return function (t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function () {
                return i.reduceRight(function (t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        };
    },
    function (t, e, n) {
        "use strict";
        (e.b = i),
            (e.a = function (t, e) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                return i(e > 0 && t && r[t] ? r[t](e) : e);
            });
        var r = n(113);
        function i(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(e, n(24)));
    },
    function (t, e, n) {
        var r = n(9),
            i = n(2),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function (t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        };
    },
    function (t, e, n) {
        var r = n(59);
        t.exports = function (t) {
            return null == t ? "" : r(t);
        };
    },
    function (t, e, n) {
        var r = n(12),
            i = n(60),
            o = n(0),
            a = n(17),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
            return i;
        };
    },
    function (t, e, n) {
        var r = n(62),
            i = n(153)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(144),
            i = n(22);
        t.exports = function (t, e) {
            return t && r(t, e, i);
        };
    },
    function (t, e, n) {
        var r = n(146),
            i = n(23),
            o = n(0),
            a = n(30),
            u = n(31),
            c = n(32),
            s = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = o(t),
                f = !n && i(t),
                l = !n && !f && a(t),
                d = !n && !f && !l && c(t),
                p = n || f || l || d,
                v = p ? r(t.length, String) : [],
                h = v.length;
            for (var y in t) (!e && !s.call(t, y)) || (p && ("length" == y || (l && ("offset" == y || "parent" == y)) || (d && ("buffer" == y || "byteLength" == y || "byteOffset" == y)) || u(y, h))) || v.push(y);
            return v;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(156),
            o = n(157),
            a = n(158),
            u = n(159),
            c = n(160);
        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = c), (t.exports = s);
    },
    function (t, e, n) {
        var r = n(161),
            i = n(5);
        t.exports = function t(e, n, o, a, u) {
            return e === n || (null == e || null == n || (!i(e) && !i(n)) ? e != e && n != n : r(e, n, o, a, t, u));
        };
    },
    function (t, e, n) {
        var r = n(162),
            i = n(165),
            o = n(166),
            a = 1,
            u = 2;
        t.exports = function (t, e, n, c, s, f) {
            var l = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d)) return !1;
            var v = f.get(t);
            if (v && f.get(e)) return v == e;
            var h = -1,
                y = !0,
                g = n & u ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++h < d; ) {
                var m = t[h],
                    b = e[h];
                if (c) var w = l ? c(b, m, h, e, t, f) : c(m, b, h, t, e, f);
                if (void 0 !== w) {
                    if (w) continue;
                    y = !1;
                    break;
                }
                if (g) {
                    if (
                        !i(e, function (t, e) {
                            if (!o(g, e) && (m === t || s(m, t, n, c, f))) return g.push(e);
                        })
                    ) {
                        y = !1;
                        break;
                    }
                } else if (m !== b && !s(m, b, n, c, f)) {
                    y = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), y;
        };
    },
    function (t, e, n) {
        var r = n(36),
            i = n(0);
        t.exports = function (t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function (t, e, n) {
        var r = n(173),
            i = n(71),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function (t) {
                      return null == t
                          ? []
                          : ((t = Object(t)),
                            r(a(t), function (e) {
                                return o.call(t, e);
                            }));
                  }
                : i;
        t.exports = u;
    },
    function (t, e) {
        t.exports = function () {
            return [];
        };
    },
    function (t, e, n) {
        var r = n(6)(n(1), "WeakMap");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(2);
        t.exports = function (t) {
            return t == t && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function (t, e, n) {
        var r = n(7),
            i = n(10),
            o = n(22);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function (t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "c", function () {
            return o;
        }),
            n.d(e, "a", function () {
                return u;
            }),
            n.d(e, "b", function () {
                return c;
            }),
            n.d(e, "d", function () {
                return s;
            }),
            n.d(e, "e", function () {
                return l;
            });
        var r = n(79),
            i = n.n(r),
            o = "undefined" != typeof window,
            a = function (t, e) {
                return o ? t() : e;
            },
            u = a(function () {
                return i()(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                    return t in Element.prototype;
                });
            }),
            c = a(function () {
                var t = document.createElement("i"),
                    e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                try {
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = e[r];
                        if (((t.style.display = i), t.style.display === i)) return i;
                    }
                    return "";
                } catch (t) {
                    return "";
                }
            }, "flex"),
            s = a(function () {
                var t = document.createElement("i");
                if (null == t.style.transform)
                    for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                        var i = e[r] + "Transform";
                        if (void 0 !== t.style[i]) return i;
                    }
                return "transform";
            }, "transform"),
            f = s.split("transform")[0],
            l = f ? f + "TransformStyle" : "transformStyle";
    },
    function (t, e, n) {
        var r = n(76)(n(188));
        t.exports = r;
    },
    function (t, e, n) {
        "use strict";
        (e.a = function (t) {
            Object(O.n)({
                store: t,
                select: function (t) {
                    var e = t.ixRequest;
                    return e.preview;
                },
                onChange: P,
            }),
                Object(O.n)({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.playback;
                    },
                    onChange: N,
                }),
                Object(O.n)({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.stop;
                    },
                    onChange: D,
                }),
                Object(O.n)({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.clear;
                    },
                    onChange: z,
                });
        }),
            (e.c = V),
            (e.e = F),
            (e.d = X),
            (e.b = $);
        var r = n(79),
            i = n.n(r),
            o = n(15),
            a = n.n(o),
            u = n(190),
            c = n.n(u),
            s = n(196),
            f = n.n(s),
            l = n(208),
            d = n.n(l),
            p = n(209),
            v = n.n(p),
            h = n(210),
            y = n.n(h),
            g = n(213),
            m = n.n(g),
            b = n(214),
            w = n.n(b),
            _ = n(217),
            x = n.n(_),
            O = n(14),
            I = n(42),
            j = n(43),
            E = n(219),
            S = n(8),
            T = n(41),
            A = n(220),
            k =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
        var M = navigator.userAgent,
            C = M.match(/iPad/i) || M.match(/iPhone/),
            L = 12;
        function P(t, e) {
            V({ store: e, rawData: t.rawData, allowEvents: !0 }), document.dispatchEvent(new CustomEvent("PREVIEW_LOAD"));
        }
        function R(t) {
            return t && m()(t, "_EFFECT");
        }
        function N(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.verbose,
                s = void 0 === c || c,
                f = t.rawData;
            if ((r && i && f && u && (f = Object(O.o)({ actionListId: r, actionItemId: i, rawData: f })), V({ store: e, rawData: f, allowEvents: a }), (r && n === T.c) || R(n))) {
                X({ store: e, actionListId: r }), H({ store: e, actionListId: r, eventId: o });
                var l = $({ store: e, eventId: o, actionListId: r, immediate: u, verbose: s });
                s && l && e.dispatch(Object(j.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u }));
            }
        }
        function D(t, e) {
            var n = t.actionListId;
            n
                ? X({ store: e, actionListId: n })
                : (function (t) {
                      var e = t.store,
                          n = e.getState().ixInstances;
                      y()(n, function (t) {
                          if (!t.continuous) {
                              var n = t.actionListId,
                                  r = t.verbose;
                              Q(t, e), r && e.dispatch(Object(j.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }));
                          }
                      });
                  })({ store: e }),
                F(e);
        }
        function z(t, e) {
            F(e), Object(O.b)({ store: e, elementApi: E });
        }
        function V(t) {
            var e = t.store,
                n = t.rawData,
                r = t.allowEvents,
                o = e.getState().ixSession;
            n && e.dispatch(Object(j.rawDataImported)(n)),
                o.active ||
                    (e.dispatch(Object(j.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(S.f)) })),
                    r &&
                        (function (t) {
                            var e = t.getState().ixData.eventTypeMap;
                            y()(e, function (e, n) {
                                var r = A.a[n];
                                r
                                    ? (function (t) {
                                          var e = t.logic,
                                              n = t.store,
                                              r = t.events;
                                          !(function (t) {
                                              if (C) {
                                                  var e = {},
                                                      n = "";
                                                  for (var r in t) {
                                                      var i = t[r],
                                                          o = i.eventTypeId,
                                                          a = i.target,
                                                          u = E.getQuerySelector(a);
                                                      e[u] || (o !== I.h && o !== I.m) || ((e[u] = !0), (n += u + "{cursor: pointer;touch-action: manipulation;}"));
                                                  }
                                                  if (n) {
                                                      var c = document.createElement("style");
                                                      (c.textContent = n), document.body.appendChild(c);
                                                  }
                                              }
                                          })(r);
                                          var o = e.types,
                                              u = e.handler,
                                              s = n.getState().ixData,
                                              f = s.actionLists,
                                              l = q(r, U);
                                          if (c()(l)) {
                                              y()(l, function (t, e) {
                                                  var o = r[e],
                                                      u = o.action,
                                                      c = o.id,
                                                      s = u.config.actionListId;
                                                  if (u.actionTypeId === T.a) {
                                                      var l = Array.isArray(o.config) ? o.config : [o.config];
                                                      l.forEach(function (e) {
                                                          var r = e.continuousParameterGroupId,
                                                              o = a()(f, s + ".continuousParameterGroups", []),
                                                              u = i()(o, function (t) {
                                                                  var e = t.id;
                                                                  return e === r;
                                                              }),
                                                              l = (e.smoothing || 0) / 100,
                                                              d = (e.restingState || 0) / 100;
                                                          u &&
                                                              t.forEach(function (t, r) {
                                                                  var i = c + S.h + r;
                                                                  !(function (t) {
                                                                      var e = t.store,
                                                                          n = t.eventStateKey,
                                                                          r = t.eventTarget,
                                                                          i = t.eventId,
                                                                          o = t.eventConfig,
                                                                          u = t.actionListId,
                                                                          c = t.parameterGroup,
                                                                          s = t.smoothing,
                                                                          f = t.restingValue,
                                                                          l = e.getState(),
                                                                          d = l.ixData,
                                                                          p = l.ixSession,
                                                                          v = d.events[i],
                                                                          h = v.eventTypeId,
                                                                          y = {},
                                                                          g = {},
                                                                          m = [],
                                                                          b = c.continuousActionGroups,
                                                                          w = c.id;
                                                                      Object(O.s)(h, o) && (w = Object(O.k)(n, w));
                                                                      var _ = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
                                                                      b.forEach(function (t) {
                                                                          var e = t.keyframe,
                                                                              n = t.actionItems;
                                                                          n.forEach(function (t) {
                                                                              var n = t.actionTypeId,
                                                                                  i = t.config.target;
                                                                              if (i) {
                                                                                  var o = i.boundaryMode ? _ : null,
                                                                                      a = Object(O.t)(i) + S.h + n;
                                                                                  if (
                                                                                      ((g[a] = (function () {
                                                                                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                                              e = arguments[1],
                                                                                              n = arguments[2],
                                                                                              r = [].concat(
                                                                                                  (function (t) {
                                                                                                      if (Array.isArray(t)) {
                                                                                                          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                                                                                          return n;
                                                                                                      }
                                                                                                      return Array.from(t);
                                                                                                  })(t)
                                                                                              ),
                                                                                              i = void 0;
                                                                                          return (
                                                                                              r.some(function (t, n) {
                                                                                                  return t.keyframe === e && ((i = n), !0);
                                                                                              }),
                                                                                              null == i && ((i = r.length), r.push({ keyframe: e, actionItems: [] })),
                                                                                              r[i].actionItems.push(n),
                                                                                              r
                                                                                          );
                                                                                      })(g[a], e, t)),
                                                                                      !y[a])
                                                                                  ) {
                                                                                      y[a] = !0;
                                                                                      var u = t.config;
                                                                                      Object(O.c)({ config: u, event: v, eventTarget: r, elementRoot: o, elementApi: E }).forEach(function (t) {
                                                                                          m.push({ element: t, key: a });
                                                                                      });
                                                                                  }
                                                                              }
                                                                          });
                                                                      }),
                                                                          m.forEach(function (t) {
                                                                              var n = t.element,
                                                                                  r = t.key,
                                                                                  o = g[r],
                                                                                  c = a()(o, "[0].actionItems[0]", {}),
                                                                                  l = Object(O.e)({ element: n, actionItem: c, elementApi: E });
                                                                              K({
                                                                                  store: e,
                                                                                  element: n,
                                                                                  eventId: i,
                                                                                  actionListId: u,
                                                                                  actionItem: c,
                                                                                  destination: l,
                                                                                  continuous: !0,
                                                                                  parameterId: w,
                                                                                  actionGroups: o,
                                                                                  smoothing: s,
                                                                                  restingValue: f,
                                                                              });
                                                                          });
                                                                  })({ store: n, eventStateKey: i, eventTarget: t, eventId: c, eventConfig: e, actionListId: s, parameterGroup: u, smoothing: l, restingValue: d });
                                                              });
                                                      });
                                                  }
                                                  (u.actionTypeId === T.c || R(u.actionTypeId)) && H({ store: n, actionListId: s, eventId: c });
                                              });
                                              var d = function (t) {
                                                      var e = n.getState(),
                                                          i = e.ixSession;
                                                      W(l, function (e, o, a) {
                                                          var c = r[o],
                                                              f = i.eventState[a],
                                                              l = c.action,
                                                              d = c.mediaQueries,
                                                              p = void 0 === d ? s.mediaQueryKeys : d;
                                                          if (Object(O.r)(p, i.mediaQueryKey)) {
                                                              var v = function () {
                                                                  var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                      i = u({ store: n, element: e, event: c, eventConfig: r, nativeEvent: t, eventStateKey: a }, f);
                                                                  x()(i, f) || n.dispatch(Object(j.eventStateChanged)(a, i));
                                                              };
                                                              if (l.actionTypeId === T.a) {
                                                                  var h = Array.isArray(c.config) ? c.config : [c.config];
                                                                  h.forEach(v);
                                                              } else v();
                                                          }
                                                      });
                                                  },
                                                  p = w()(d, L),
                                                  v = function (t) {
                                                      var e = t.target,
                                                          r = void 0 === e ? document : e,
                                                          i = t.types,
                                                          o = t.throttle;
                                                      i.split(" ")
                                                          .filter(Boolean)
                                                          .forEach(function (t) {
                                                              var e = o ? p : d;
                                                              r.addEventListener(t, e), n.dispatch(Object(j.eventListenerAdded)(r, [t, e]));
                                                          });
                                                  };
                                              Array.isArray(o) ? o.forEach(v) : "string" == typeof o && v(e);
                                          }
                                      })({ logic: r, store: t, events: e })
                                    : console.warn("event type not configured: " + n);
                            }),
                                t.getState().ixSession.eventListeners.length &&
                                    (function (t) {
                                        function e() {
                                            var e = t.getState(),
                                                n = e.ixSession,
                                                r = e.ixData,
                                                i = window.innerWidth;
                                            if (i !== n.viewportWidth) {
                                                var o = r.mediaQueries;
                                                t.dispatch(Object(j.viewportWidthChanged)({ width: i, mediaQueries: o }));
                                            }
                                        }
                                        B.forEach(function (n) {
                                            window.addEventListener(n, e), t.dispatch(Object(j.eventListenerAdded)(window, [n, e]));
                                        }),
                                            e();
                                    })(t);
                        })(e),
                    e.dispatch(Object(j.sessionStarted)()),
                    (function (t) {
                        !(function e(n) {
                            var r = t.getState(),
                                i = r.ixSession,
                                o = r.ixParameters;
                            i.active && (t.dispatch(Object(j.animationFrameChanged)(n, o)), requestAnimationFrame(e));
                        })(window.performance.now());
                    })(e));
        }
        function F(t) {
            var e = t.getState().ixSession;
            e.active && (e.eventListeners.forEach(G), t.dispatch(Object(j.sessionStopped)()));
        }
        function G(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var B = ["resize", "orientationchange"];
        var q = function (t, e) {
                return f()(v()(t, e), d.a);
            },
            W = function (t, e) {
                y()(t, function (t, n) {
                    t.forEach(function (t, r) {
                        var i = n + S.h + r;
                        e(t, n, i);
                    });
                });
            },
            U = function (t) {
                var e = { target: t.target };
                return Object(O.c)({ config: e, elementApi: E });
            };
        function H(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState().ixData,
                o = i.actionLists,
                u = i.events[r],
                c = o[n];
            c &&
                c.useFirstGroupAsInitialState &&
                a()(c, "actionItemGroups[0].actionItems", []).forEach(function (t) {
                    var i = t.config;
                    Object(O.c)({ config: i, event: u, elementApi: E }).forEach(function (i) {
                        K({ destination: Object(O.e)({ element: i, actionItem: t, elementApi: E }), immediate: !0, store: e, element: i, eventId: r, actionItem: t, actionListId: n });
                    });
                });
        }
        function X(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                u = e.getState(),
                c = u.ixInstances,
                s = u.ixSession.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
            y()(c, function (t) {
                var r = a()(t, "actionItem.config.target.boundaryMode"),
                    u = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && u) {
                    if (s && r && !E.elementContains(s, t.element)) return;
                    Q(t, e), t.verbose && e.dispatch(Object(j.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }));
                }
            });
        }
        function $(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                u = t.groupIndex,
                c = void 0 === u ? 0 : u,
                s = t.immediate,
                f = t.verbose,
                l = e.getState(),
                d = l.ixData,
                p = l.ixSession,
                v = d.events[n] || {},
                h = v.mediaQueries,
                y = void 0 === h ? d.mediaQueryKeys : h,
                g = a()(d, "actionLists." + o, {}),
                m = g.actionItemGroups;
            c >= m.length && a()(v, "config.loop") && (c = 0), 0 === c && g.useFirstGroupAsInitialState && c++;
            var b = a()(m, [c, "actionItems"], []);
            if (!b.length) return !1;
            if (!Object(O.r)(y, p.mediaQueryKey)) return !1;
            var w = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null,
                _ = Object(O.j)(b),
                x = !1;
            return (
                b.forEach(function (t, a) {
                    var u = t.config,
                        l = u.target;
                    if (l) {
                        var d = l.boundaryMode ? w : null;
                        Object(O.c)({ config: u, event: v, eventTarget: r, elementRoot: d, elementApi: E }).forEach(function (u, l) {
                            x = !0;
                            var d = _ === a && 0 === l,
                                p = Object(O.d)({ element: u, actionItem: t }),
                                v = Object(O.e)({ element: u, actionItem: t, elementApi: E });
                            K({ store: e, element: u, actionItem: t, eventId: n, eventTarget: r, eventStateKey: i, actionListId: o, groupIndex: c, isCarrier: d, computedStyle: p, destination: v, immediate: s, verbose: f });
                        });
                    }
                }),
                x
            );
        }
        function K(t) {
            var e = t.store,
                n = t.computedStyle,
                r = (function (t, e) {
                    var n = {};
                    for (var r in t) e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                    return n;
                })(t, ["store", "computedStyle"]),
                i = !r.continuous,
                o = r.element,
                a = r.actionItem,
                u = r.immediate,
                c = Object(O.g)(),
                s = e.getState().ixElements,
                f = Object(O.f)(s, o),
                l = (s[f] || {}).refState,
                d = E.getRefType(o),
                p = Object(O.h)(o, l, n, a, E);
            e.dispatch(Object(j.instanceAdded)(k({ instanceId: c, elementId: f, origin: p, refType: d }, r))),
                Y(document.body, "animation-started", c),
                u
                    ? (function (t, e) {
                          t.dispatch(Object(j.instanceStarted)(e));
                          var n = t.getState().ixParameters;
                          t.dispatch(Object(j.animationFrameChanged)(Number.POSITIVE_INFINITY, n)), Z(t.getState().ixInstances[e], t);
                      })(e, c)
                    : (Object(O.n)({
                          store: e,
                          select: function (t) {
                              return t.ixInstances[c];
                          },
                          onChange: Z,
                      }),
                      i && e.dispatch(Object(j.instanceStarted)(c)));
        }
        function Q(t, e) {
            Y(document.body, "animation-stopping", { instanceId: t.id, state: e.getState() });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === S.w && Object(O.a)(o, r, E), e.dispatch(Object(j.instanceRemoved)(t.id));
        }
        function Y(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }
        function Z(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                f = t.groupIndex,
                l = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                h = t.isCarrier,
                y = t.styleProp,
                g = t.verbose,
                m = e.getState(),
                b = m.ixData,
                w = m.ixSession,
                _ = (b.events[l] || {}).mediaQueries,
                x = void 0 === _ ? b.mediaQueryKeys : _;
            if (Object(O.r)(x, w.mediaQueryKey) && (r || n || i)) {
                if (s || (c === S.C && i)) {
                    e.dispatch(Object(j.elementStateChanged)(o, u, s, a));
                    var I = e.getState().ixElements[o] || {},
                        T = I.ref,
                        A = I.refType,
                        k = I.refState,
                        M = k && k[u];
                    switch (A) {
                        case S.w:
                            Object(O.q)(T, k, M, l, a, y, E, c);
                    }
                }
                if (i) {
                    if (h) {
                        var C = $({ store: e, eventId: l, eventTarget: d, eventStateKey: p, actionListId: v, groupIndex: f + 1, verbose: g });
                        g && !C && e.dispatch(Object(j.actionListPlaybackChanged)({ actionListId: v, isPlaying: !1 }));
                    }
                    Q(t, e);
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(82);
        t.exports = function (t, e, n) {
            "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = (function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            })();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = Object.create,
            o = (function () {
                function t() {}
                return function (e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(233),
            i = n(234),
            o = r
                ? function (t) {
                      return r.get(t);
                  }
                : i;
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(235),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--; ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function (t, e, n) {
        n(88), n(90), n(91), n(241), n(242), n(243), (t.exports = n(246));
    },
    function (t, e, n) {
        var r = n(3);
        r.define(
            "brand",
            (t.exports = function (t) {
                var e,
                    n = {},
                    i = document,
                    o = t("html"),
                    a = t("body"),
                    u = ".w-webflow-badge",
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function l() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }
                function d() {
                    var t = a.children(u),
                        n = t.length && t.get(0) === e,
                        i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
                }
                return (
                    (n.ready = function () {
                        var n,
                            r,
                            a,
                            u = o.attr("data-wf-status"),
                            p = o.attr("data-wf-domain") || "";
                        /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
                            u && !s && ((e = e || ((n = t("").attr("", "")), (r = t("").attr("", "").css()), (a = t("").attr("", "")), n.append(r, a), n[0])), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l));
                    }),
                    n
                );
            })
        );
    },
    function (t, e, n) {
        var r = window.$,
            i = n(47) && r.tram;
        /*!
         * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (webflow)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function () {
            var t = { VERSION: "1.6.0-Webflow" },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                f = (n.reduce, n.reduceRight, n.filter),
                l = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                    (t.each = t.forEach = function (n, r, i) {
                        if (null == n) return n;
                        if (c && n.forEach === c) n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return;
                        } else {
                            var u = t.keys(n);
                            for (o = 0, a = u.length; o < a; o++) if (r.call(i, n[u[o]], u[o], n) === e) return;
                        }
                        return n;
                    }));
            (t.map = t.collect = function (t, e, n) {
                var r = [];
                return null == t
                    ? r
                    : s && t.map === s
                    ? t.map(e, n)
                    : (v(t, function (t, i, o) {
                          r.push(e.call(n, t, i, o));
                      }),
                      r);
            }),
                (t.find = t.detect = function (t, e, n) {
                    var r;
                    return (
                        h(t, function (t, i, o) {
                            if (e.call(n, t, i, o)) return (r = t), !0;
                        }),
                        r
                    );
                }),
                (t.filter = t.select = function (t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : f && t.filter === f
                        ? t.filter(e, n)
                        : (v(t, function (t, i, o) {
                              e.call(n, t, i, o) && r.push(t);
                          }),
                          r);
                });
            var h = (t.some = t.any = function (n, r, i) {
                r || (r = t.identity);
                var o = !1;
                return null == n
                    ? o
                    : l && n.some === l
                    ? n.some(r, i)
                    : (v(n, function (t, n, a) {
                          if (o || (o = r.call(i, t, n, a))) return e;
                      }),
                      !!o);
            });
            (t.contains = t.include = function (t, e) {
                return (
                    null != t &&
                    (d && t.indexOf === d
                        ? -1 != t.indexOf(e)
                        : h(t, function (t) {
                              return t === e;
                          }))
                );
            }),
                (t.delay = function (t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function (e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function (t) {
                    var e, n, r;
                    return function () {
                        e ||
                            ((e = !0),
                            (n = arguments),
                            (r = this),
                            i.frame(function () {
                                (e = !1), t.apply(r, n);
                            }));
                    };
                }),
                (t.debounce = function (e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var f = t.now() - u;
                            f < n ? (i = setTimeout(s, n - f)) : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function () {
                        (a = this), (o = arguments), (u = t.now());
                        var f = r && !i;
                        return i || (i = setTimeout(s, n)), f && ((c = e.apply(a, o)), (a = o = null)), c;
                    };
                }),
                (t.defaults = function (e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function (e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function (t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function (t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var y = /(.)^/,
                g = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                m = /\\|'|\r|\n|\u2028|\u2029/g,
                b = function (t) {
                    return "\\" + g[t];
                };
            return (
                (t.template = function (e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp([(n.escape || y).source, (n.interpolate || y).source, (n.evaluate || y).source].join("|") + "|$", "g"),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function (t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(m, b)),
                            (o = u + t.length),
                            n ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : r ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function (e) {
                            return u.call(this, e, t);
                        },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function (t, e, n) {
        var r = n(3);
        r.define(
            "edit",
            (t.exports = function (t, e, n) {
                if (((n = n || {}), (r.env("test") || r.env("frame")) && !n.fixture)) return { exit: 1 };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function () {
                            (i = !0),
                                (window.WebflowEditor = !0),
                                o.off(c, l),
                                (function (t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src = "https://webflow.com/site/third-party-cookie-check.html"), (e.style.display = "none"), (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data ? (v(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (v(e, n), t(!0));
                                    };
                                    (e.onerror = function () {
                                        v(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function (e) {
                                    t.ajax({
                                        url: p("https://editor-api.webflow.com/api/editor/view"),
                                        data: { siteId: a.attr("data-wf-site") },
                                        xhrFields: { withCredentials: !0 },
                                        dataType: "json",
                                        crossDomain: !0,
                                        success: (function (e) {
                                            return function (n) {
                                                var r;
                                                n
                                                    ? ((n.thirdPartyCookiesSupported = e),
                                                      (function (e, n) {
                                                          t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(n, d);
                                                      })((r = n.scriptPath).indexOf("//") >= 0 ? r : p("https://editor-api.webflow.com" + r), function () {
                                                          window.WebflowEditor(n);
                                                      }))
                                                    : console.error("Could not load editor data");
                                            };
                                        })(e),
                                    });
                                });
                        },
                    f = !1;
                try {
                    f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
                } catch (t) {}
                function l() {
                    i || (/\?edit/.test(u.hash) && s());
                }
                function d(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }
                function p(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }
                function v(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {};
            })
        );
    },
    function (t, e, n) {
        var r = n(3),
            i = n(92);
        r.define(
            "ix2",
            (t.exports = function () {
                return i;
            })
        );
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            n.d(e, "init", function () {
                return f;
            }),
            n.d(e, "destroy", function () {
                return l;
            }),
            n.d(e, "store", function () {
                return s;
            });
        var r = n(48),
            i = n(107),
            o = n(80),
            a = n(3),
            u = n.n(a),
            c = n(43);
        n.d(e, "actions", function () {
            return c;
        });
        var s = Object(r.b)(i.a);
        function f(t) {
            l(), Object(o.c)({ store: s, rawData: t, allowEvents: !0 });
        }
        function l() {
            Object(o.e)(s);
        }
        u.a.env() && Object(o.a)(s);
    },
    function (t, e, n) {
        "use strict";
        var r = n(51),
            i = n(96),
            o = n(97),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.a ? r.a.toStringTag : void 0;
        e.a = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? Object(i.a)(t) : Object(o.a)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(95),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.a || i || Function("return this")();
        e.a = o;
    },
    function (t, e, n) {
        "use strict";
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n;
        }.call(e, n(24)));
    },
    function (t, e, n) {
        "use strict";
        var r = n(51),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.a ? r.a.toStringTag : void 0;
        e.a = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.a = function (t) {
            return r.call(t);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(99),
            i = Object(r.a)(Object.getPrototypeOf, Object);
        e.a = i;
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        "use strict";
        (function (t, r) {
            var i,
                o = n(103);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.a)(i);
            e.a = a;
        }.call(e, n(24), n(102)(t)));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t) {
            var e,
                n = t.Symbol;
            "function" == typeof n ? (n.observable ? (e = n.observable) : ((e = n("observable")), (n.observable = e))) : (e = "@@observable");
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        e.a = function (t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e],
                            i = n(void 0, { type: r.a.INIT });
                        if (void 0 === i)
                            throw new Error(
                                'Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                        if (void 0 === n(void 0, { type: o }))
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    "\" returned undefined when probed with a random type. Don't try to handle " +
                                    r.a.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function () {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== l);
                }
                return r ? o : t;
            };
        };
        var r = n(49);
        n(50), n(52);
        function i(t, e) {
            var n = e && e.type;
            return "Given action " + ((n && '"' + n.toString() + '"') || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
    },
    function (t, e, n) {
        "use strict";
    },
    function (t, e, n) {
        "use strict";
        n(53), Object.assign;
    },
    function (t, e, n) {
        "use strict";
        var r = n(48),
            i = n(108),
            o = n(109),
            a = n(110),
            u = n(111),
            c = n(112),
            s = n(189);
        e.a = Object(r.a)({ ixData: i.a, ixRequest: o.a, ixSession: a.a, ixElements: u.a, ixInstances: c.a, ixParameters: s.a });
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i;
        });
        var r = n(4),
            i = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                    e = arguments[1];
                switch (e.type) {
                    case r.m:
                        return e.payload.ixData || Object.freeze({});
                    default:
                        return t;
                }
            };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return f;
        });
        var r,
            i = n(4),
            o = n(11),
            a =
                (n.n(o),
                Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    });
        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }
        var c = { preview: {}, playback: {}, stop: {}, clear: {} },
            s = Object.create(null, (u((r = {}), i.l, { value: "preview" }), u(r, i.k, { value: "playback" }), u(r, i.q, { value: "stop" }), u(r, i.c, { value: "clear" }), r)),
            f = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    e = arguments[1];
                if (e.type in s) {
                    var n = [s[e.type]];
                    return Object(o.setIn)(t, [n], a({}, e.payload));
                }
                return t;
            };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a;
        });
        var r = n(4),
            i = n(11),
            o = (n.n(i), { active: !1, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1 }),
            a = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    e = arguments[1];
                switch (e.type) {
                    case r.n:
                        var n = e.payload.hasBoundaryNodes;
                        return Object(i.set)(t, "hasBoundaryNodes", n);
                    case r.o:
                        return Object(i.set)(t, "active", !0);
                    case r.p:
                        return o;
                    case r.e:
                        var a = Object(i.addLast)(t.eventListeners, e.payload);
                        return Object(i.set)(t, "eventListeners", a);
                    case r.f:
                        var u = e.payload,
                            c = u.stateKey,
                            s = u.newState;
                        return Object(i.setIn)(t, ["eventState", c], s);
                    case r.a:
                        var f = e.payload,
                            l = f.actionListId,
                            d = f.isPlaying;
                        return Object(i.setIn)(t, ["playbackState", l], d);
                    case r.r:
                        for (var p = e.payload, v = p.width, h = p.mediaQueries, y = h.length, g = null, m = 0; m < y; m++) {
                            var b = h[m],
                                w = b.key,
                                _ = b.min,
                                x = b.max;
                            if (v >= _ && v <= x) {
                                g = w;
                                break;
                            }
                        }
                        return Object(i.merge)(t, { viewportWidth: v, mediaQueryKey: g });
                    default:
                        return t;
                }
            };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c;
        });
        var r = n(11),
            i = (n.n(r), n(8)),
            o = n(4),
            a = {},
            u = "refState",
            c = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (e.type) {
                    case o.p:
                        return a;
                    case o.g:
                        var n = e.payload,
                            u = n.elementId,
                            c = n.element,
                            f = n.origin,
                            l = n.actionItem,
                            d = n.refType,
                            p = l.actionTypeId,
                            v = t;
                        return (
                            Object(r.getIn)(v, [u, c]) !== c &&
                                (v = (function (t, e, n, o, a) {
                                    var u = n === i.A ? Object(r.getIn)(a, ["config", "target", "objectId"]) : null;
                                    return Object(r.mergeIn)(t, [o], { id: o, ref: e, refId: u, refType: n });
                                })(v, c, d, u, l)),
                            s(v, u, p, f, l)
                        );
                    case o.d:
                        var h = e.payload;
                        return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
                    default:
                        return t;
                }
            };
        function s(t, e, n, i, o) {
            var a = (function (t) {
                    var e = t.config;
                    return f.reduce(function (t, n) {
                        var r = n[0],
                            i = n[1],
                            o = e[r],
                            a = e[i];
                        return null != o && null != a && (t[i] = a), t;
                    }, {});
                })(o),
                c = [e, u, n];
            return Object(r.mergeIn)(t, c, i, a);
        }
        var f = [
            [i.n, i.m],
            [i.p, i.o],
            [i.r, i.q],
            [i.l, i.k],
        ];
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return f;
        });
        var r = n(8),
            i = n(4),
            o = n(11),
            a = (n.n(o), n(54)),
            u = n(14),
            c = function (t, e) {
                var n = t.position,
                    r = t.parameterId,
                    i = t.actionGroups,
                    c = t.destinationKeys,
                    s = t.smoothing,
                    f = t.restingValue,
                    l = t.actionTypeId,
                    d = e.payload.parameters,
                    p = Math.max(1 - s, 0.01),
                    v = d[r];
                null == v && ((p = 1), (v = f));
                var h = Math.max(v, 0) || 0,
                    y = Object(a.b)(h - n),
                    g = Object(a.b)(n + y * p),
                    m = 100 * g;
                if (g === n && t.current) return t;
                for (var b = void 0, w = void 0, _ = void 0, x = void 0, O = 0, I = i.length; O < I; O++) {
                    var j = i[O],
                        E = j.keyframe,
                        S = j.actionItems;
                    if ((0 === O && (b = S[0]), m >= E)) {
                        b = S[0];
                        var T = i[O + 1],
                            A = T && m !== E;
                        (w = A ? T.actionItems[0] : null), A && ((_ = E / 100), (x = (T.keyframe - E) / 100));
                    }
                }
                var k = {};
                if (b && !w)
                    for (var M = 0, C = c.length; M < C; M++) {
                        var L = c[M];
                        k[L] = Object(u.i)(l, L, b.config);
                    }
                else if (b && w)
                    for (var P = (g - _) / x, R = b.config.easing, N = Object(a.a)(R, P), D = 0, z = c.length; D < z; D++) {
                        var V = c[D],
                            F = Object(u.i)(l, V, b.config),
                            G = (Object(u.i)(l, V, w.config) - F) * N + F;
                        k[V] = G;
                    }
                return Object(o.merge)(t, { position: g, current: k });
            },
            s = function (t, e) {
                var n = t,
                    i = n.active,
                    u = n.origin,
                    c = n.start,
                    s = n.immediate,
                    f = n.renderType,
                    l = n.verbose,
                    d = n.actionItem,
                    p = n.destination,
                    v = n.destinationKeys,
                    h = d.config.easing,
                    y = d.config,
                    g = y.duration,
                    m = y.delay;
                f === r.C ? (g = 0) : s && (g = m = 0);
                var b = e.payload.now;
                if (i && u) {
                    var w = b - (c + m);
                    if (l) {
                        var _ = b - c,
                            x = g + m,
                            O = Object(a.b)(Math.min(Math.max(0, _ / x), 1));
                        t = Object(o.set)(t, "verboseTimeElapsed", x * O);
                    }
                    if (w < 0) return t;
                    var I = Object(a.b)(Math.min(Math.max(0, w / g), 1)),
                        j = Object(a.a)(h, I),
                        E = {},
                        S = v.length
                            ? v.reduce(function (t, e) {
                                  var n = p[e],
                                      r = parseFloat(u[e]) || 0,
                                      i = (parseFloat(n) - r) * j + r;
                                  return (t[e] = i), t;
                              }, {})
                            : null;
                    return (E.current = S), (E.position = I), 1 === I && ((E.active = !1), (E.complete = !0)), Object(o.merge)(t, E);
                }
                return t;
            },
            f = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                    e = arguments[1];
                switch (e.type) {
                    case i.m:
                        return e.payload.ixInstances || Object.freeze({});
                    case i.p:
                        return Object.freeze({});
                    case i.g:
                        var n = e.payload,
                            r = n.instanceId,
                            a = n.elementId,
                            f = n.actionItem,
                            l = n.eventId,
                            d = n.eventTarget,
                            p = n.eventStateKey,
                            v = n.actionListId,
                            h = n.groupIndex,
                            y = n.isCarrier,
                            g = n.origin,
                            m = n.destination,
                            b = n.immediate,
                            w = n.verbose,
                            _ = n.continuous,
                            x = n.parameterId,
                            O = n.actionGroups,
                            I = n.smoothing,
                            j = n.restingValue,
                            E = f.actionTypeId,
                            S = Object(u.l)(E),
                            T = Object(u.m)(S, E),
                            A = Object.keys(m).filter(function (t) {
                                return null != m[t];
                            });
                        return Object(o.set)(t, r, {
                            id: r,
                            elementId: a,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: g,
                            destination: m,
                            destinationKeys: A,
                            immediate: b,
                            verbose: w,
                            current: null,
                            actionItem: f,
                            actionTypeId: E,
                            eventId: l,
                            eventTarget: d,
                            eventStateKey: p,
                            actionListId: v,
                            groupIndex: h,
                            renderType: S,
                            isCarrier: y,
                            styleProp: T,
                            continuous: _,
                            parameterId: x,
                            actionGroups: O,
                            smoothing: I,
                            restingValue: j,
                        });
                    case i.i:
                        var k = e.payload.instanceId;
                        return Object(o.mergeIn)(t, [k], { active: !0, complete: !1, start: window.performance.now() });
                    case i.h:
                        var M = e.payload.instanceId;
                        if (!t[M]) return t;
                        for (var C = {}, L = Object.keys(t), P = L.length, R = 0; R < P; R++) {
                            var N = L[R];
                            N !== M && (C[N] = t[N]);
                        }
                        return C;
                    case i.b:
                        for (var D = t, z = Object.keys(t), V = z.length, F = 0; F < V; F++) {
                            var G = z[F],
                                B = t[G],
                                q = B.continuous ? c : s;
                            D = Object(o.set)(D, G, q(B, e));
                        }
                        return D;
                    default:
                        return t;
                }
            };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            n.d(e, "ease", function () {
                return a;
            }),
            n.d(e, "easeIn", function () {
                return u;
            }),
            n.d(e, "easeOut", function () {
                return c;
            }),
            n.d(e, "easeInOut", function () {
                return s;
            }),
            (e.inQuad = function (t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function (t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function (t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function (t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function (t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function (t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function (t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function (t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function (t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function (t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function (t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function (t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.outBack = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.inOutBack = function (t) {
                var e = o;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n);
            }),
            (e.outElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1;
            }),
            (e.inOutElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5;
                return r * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * 0.5 + 1;
            }),
            (e.swingFromTo = function (t) {
                var e = o;
                return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.swingTo = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.bounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            });
        var r = n(114),
            i = n.n(r),
            o = 1.70158,
            a = i()(0.25, 0.1, 0.25, 1),
            u = i()(0.42, 0, 1, 1),
            c = i()(0, 0, 0.58, 1),
            s = i()(0.42, 0, 0.58, 1);
    },
    function (t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function f(t, e) {
            return 3 * e - 6 * t;
        }
        function l(t) {
            return 3 * t;
        }
        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
        }
        t.exports = function (t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
            function h(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
                var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
                    y = p(h, t, s);
                return y >= r
                    ? (function (t, e, r, i) {
                          for (var o = 0; o < n; ++o) {
                              var a = p(e, r, i);
                              if (0 === a) return e;
                              e -= (d(e, r, i) - t) / a;
                          }
                          return e;
                      })(e, h, t, s)
                    : 0 === y
                    ? h
                    : (function (t, e, n, r, a) {
                          var u,
                              c,
                              s = 0;
                          do {
                              (u = d((c = e + (n - e) / 2), r, a) - t) > 0 ? (n = c) : (e = c);
                          } while (Math.abs(u) > i && ++s < o);
                          return c;
                      })(e, c, c + u, t, s);
            }
            return function (n) {
                return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f);
            };
        };
    },
    function (t, e, n) {
        var r = n(12),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e, n) {
        var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g,
            o = n(118)(function (t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(r, function (t, n, r, o) {
                        e.push(r ? o.replace(i, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(119),
            i = 500;
        t.exports = function (t) {
            var e = r(t, function (t) {
                    return n.size === i && n.clear(), t;
                }),
                n = e.cache;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(27),
            i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
        var r = n(121),
            i = n(19),
            o = n(29);
        t.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() });
        };
    },
    function (t, e, n) {
        var r = n(122),
            i = n(127),
            o = n(128),
            a = n(129),
            u = n(130);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(56),
            i = n(124),
            o = n(2),
            a = n(57),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            f = c.toString,
            l = s.hasOwnProperty,
            d = RegExp(
                "^" +
                    f
                        .call(l)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function (t, e, n) {
        var r,
            i = n(125),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function (t) {
            return !!o && o in t;
        };
    },
    function (t, e, n) {
        var r = n(1)["__core-js_shared__"];
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e, n) {
        var r = n(18),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function (t, e, n) {
        var r = n(18),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function (t, e, n) {
        var r = n(18),
            i = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var n = this.__data__;
            return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this;
        };
    },
    function (t, e) {
        t.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(20),
            i = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            return r(this.__data__, t) > -1;
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function (t, e, n) {
        var r = n(21);
        t.exports = function (t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        };
    },
    function (t, e, n) {
        var r = n(21);
        t.exports = function (t) {
            return r(this, t).get(t);
        };
    },
    function (t, e, n) {
        var r = n(21);
        t.exports = function (t) {
            return r(this, t).has(t);
        };
    },
    function (t, e, n) {
        var r = n(21);
        t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function (t, e, n) {
        var r = n(143),
            i = n(61),
            o = n(7),
            a = n(184),
            u = n(0);
        t.exports = function (t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
            return n;
        };
    },
    function (t, e, n) {
        var r = n(145)();
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(5),
            o = "[object Arguments]";
        t.exports = function (t) {
            return i(t) && r(t) == o;
        };
    },
    function (t, e) {
        t.exports = function () {
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(33),
            o = n(5),
            a = {};
        (a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
            "[object Uint32Array]"
        ] = !0),
            (a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a[
                "[object Number]"
            ] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1),
            (t.exports = function (t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e);
            };
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(55),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function () {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) {}
                })();
            t.exports = u;
        }.call(e, n(64)(t)));
    },
    function (t, e, n) {
        var r = n(65)(Object.keys, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e) {
            return function (n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u); );
                return n;
            };
        };
    },
    function (t, e, n) {
        var r = n(155),
            i = n(177),
            o = n(74);
        t.exports = function (t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function (n) {
                      return n === t || r(n, t, e);
                  };
        };
    },
    function (t, e, n) {
        var r = n(66),
            i = n(67),
            o = 1,
            a = 2;
        t.exports = function (t, e, n, u) {
            var c = n.length,
                s = c,
                f = !u;
            if (null == t) return !s;
            for (t = Object(t); c--; ) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++c < s; ) {
                var d = (l = n[c])[0],
                    p = t[d],
                    v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var h = new r();
                    if (u) var y = u(p, v, d, t, e, h);
                    if (!(void 0 === y ? i(v, p, o | a, u, h) : y)) return !1;
                }
            }
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(19);
        t.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(29),
            o = n(27),
            a = 200;
        t.exports = function (t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1) return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function (t, e, n) {
        var r = n(66),
            i = n(68),
            o = n(167),
            a = n(171),
            u = n(37),
            c = n(0),
            s = n(30),
            f = n(32),
            l = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, y, g, m) {
            var b = c(t),
                w = c(e),
                _ = b ? p : u(t),
                x = w ? p : u(e),
                O = (_ = _ == d ? v : _) == v,
                I = (x = x == d ? v : x) == v,
                j = _ == x;
            if (j && s(t)) {
                if (!s(e)) return !1;
                (b = !0), (O = !1);
            }
            if (j && !O) return m || (m = new r()), b || f(t) ? i(t, e, n, y, g, m) : o(t, e, _, n, y, g, m);
            if (!(n & l)) {
                var E = O && h.call(t, "__wrapped__"),
                    S = I && h.call(e, "__wrapped__");
                if (E || S) {
                    var T = E ? t.value() : t,
                        A = S ? e.value() : e;
                    return m || (m = new r()), g(T, A, n, y, m);
                }
            }
            return !!j && (m || (m = new r()), a(t, e, n, y, g, m));
        };
    },
    function (t, e, n) {
        var r = n(27),
            i = n(163),
            o = n(164);
        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (t.exports = a);
    },
    function (t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, n), this;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t.has(e);
        };
    },
    function (t, e, n) {
        var r = n(12),
            i = n(168),
            o = n(28),
            a = n(68),
            u = n(169),
            c = n(170),
            s = 1,
            f = 2,
            l = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            h = "[object Number]",
            y = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            b = "[object Symbol]",
            w = "[object ArrayBuffer]",
            _ = "[object DataView]",
            x = r ? r.prototype : void 0,
            O = x ? x.valueOf : void 0;
        t.exports = function (t, e, n, r, x, I, j) {
            switch (n) {
                case _:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    (t = t.buffer), (e = e.buffer);
                case w:
                    return !(t.byteLength != e.byteLength || !I(new i(t), new i(e)));
                case l:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case y:
                case m:
                    return t == e + "";
                case v:
                    var E = u;
                case g:
                    var S = r & s;
                    if ((E || (E = c), t.size != e.size && !S)) return !1;
                    var T = j.get(t);
                    if (T) return T == e;
                    (r |= f), j.set(t, e);
                    var A = a(E(t), E(e), r, x, I, j);
                    return j.delete(t), A;
                case b:
                    if (O) return O.call(t) == O.call(e);
            }
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(1).Uint8Array;
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(172),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, a, u, c) {
            var s = n & i,
                f = r(t),
                l = f.length;
            if (l != r(e).length && !s) return !1;
            for (var d = l; d--; ) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t);
            if (v && c.get(e)) return v == e;
            var h = !0;
            c.set(t, e), c.set(e, t);
            for (var y = s; ++d < l; ) {
                var g = t[(p = f[d])],
                    m = e[p];
                if (a) var b = s ? a(m, g, p, e, t, c) : a(g, m, p, t, e, c);
                if (!(void 0 === b ? g === m || u(g, m, n, a, c) : b)) {
                    h = !1;
                    break;
                }
                y || (y = "constructor" == p);
            }
            if (h && !y) {
                var w = t.constructor,
                    _ = e.constructor;
                w != _ && "constructor" in t && "constructor" in e && !("function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _) && (h = !1);
            }
            return c.delete(t), c.delete(e), h;
        };
    },
    function (t, e, n) {
        var r = n(69),
            i = n(70),
            o = n(22);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function (t, e, n) {
        var r = n(6)(n(1), "DataView");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6)(n(1), "Promise");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6)(n(1), "Set");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(73),
            i = n(22);
        t.exports = function (t) {
            for (var e = i(t), n = e.length; n--; ) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(67),
            i = n(15),
            o = n(179),
            a = n(26),
            u = n(73),
            c = n(74),
            s = n(13),
            f = 1,
            l = 2;
        t.exports = function (t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function (n) {
                      var a = i(n, t);
                      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
                  };
        };
    },
    function (t, e, n) {
        var r = n(180),
            i = n(181);
        t.exports = function (t, e) {
            return null != t && i(t, e, r);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t);
        };
    },
    function (t, e, n) {
        var r = n(16),
            i = n(23),
            o = n(0),
            a = n(31),
            u = n(33),
            c = n(13);
        t.exports = function (t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d))) break;
                t = t[d];
            }
            return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
        };
    },
    function (t, e, n) {
        var r = n(75),
            i = n(183),
            o = n(26),
            a = n(13);
        t.exports = function (t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(25);
        t.exports = function (t) {
            return function (e) {
                return r(e, t);
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r, i) {
            return (
                i(t, function (t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(76)(n(186));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(77),
            i = n(7),
            o = n(39),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))), r(t, i(e, 3), s, !0);
        };
    },
    function (t, e, n) {
        var r = n(40),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function (t) {
            return t ? ((t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0) : 0 === t ? t : 0;
        };
    },
    function (t, e, n) {
        var r = n(77),
            i = n(7),
            o = n(39),
            a = Math.max;
        t.exports = function (t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i;
        });
        var r = n(4),
            i = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case r.m:
                        return e.payload.ixParameters || {};
                    case r.p:
                        return {};
                    case r.j:
                        var n = e.payload,
                            i = n.key,
                            o = n.value;
                        return (t[i] = o), t;
                    default:
                        return t;
                }
            };
    },
    function (t, e, n) {
        var r = n(34),
            i = n(37),
            o = n(10),
            a = n(191),
            u = n(192),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function (t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(0),
            o = n(5),
            a = "[object String]";
        t.exports = function (t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function (t, e, n) {
        var r = n(193),
            i = n(194),
            o = n(195);
        t.exports = function (t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function (t, e, n) {
        var r = n(75)("length");
        t.exports = r;
    },
    function (t, e) {
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function (t) {
            return n.test(t);
        };
    },
    function (t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
            f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function (t) {
            for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(7),
            i = n(197),
            o = n(198);
        t.exports = function (t, e) {
            return o(t, i(r(e)));
        };
    },
    function (t, e) {
        var n = "Expected a function";
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function (t, e, n) {
        var r = n(60),
            i = n(7),
            o = n(199),
            a = n(202);
        t.exports = function (t, e) {
            if (null == t) return {};
            var n = r(a(t), function (t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function (t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(25),
            i = n(200),
            o = n(16);
        t.exports = function (t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u; ) {
                var s = e[a],
                    f = r(t, s);
                n(f, s) && i(c, o(s, t), f);
            }
            return c;
        };
    },
    function (t, e, n) {
        var r = n(201),
            i = n(16),
            o = n(31),
            a = n(2),
            u = n(13);
        t.exports = function (t, e, n, c) {
            if (!a(t)) return t;
            for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f; ) {
                var p = u(e[s]),
                    v = n;
                if (s != l) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function (t, e, n) {
        var r = n(81),
            i = n(28),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(69),
            i = n(203),
            o = n(205);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e, n) {
        var r = n(36),
            i = n(204),
            o = n(70),
            a = n(71),
            u = Object.getOwnPropertySymbols
                ? function (t) {
                      for (var e = []; t; ) r(e, o(t)), (t = i(t));
                      return e;
                  }
                : a;
        t.exports = u;
    },
    function (t, e, n) {
        var r = n(65)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(63),
            i = n(206),
            o = n(10);
        t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(35),
            o = n(207),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t) ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = n(37),
            o = n(23),
            a = n(0),
            u = n(10),
            c = n(30),
            s = n(35),
            f = n(32),
            l = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (null == t) return !0;
            if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
            var e = i(t);
            if (e == l || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(81),
            i = n(62),
            o = n(7);
        t.exports = function (t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function (t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(211),
            i = n(61),
            o = n(212),
            a = n(0);
        t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(38);
        t.exports = function (t) {
            return "function" == typeof t ? t : r;
        };
    },
    function (t, e, n) {
        var r = n(83),
            i = n(59),
            o = n(39),
            a = n(58);
        t.exports = function (t, e, n) {
            (t = a(t)), (e = i(e));
            var u = t.length,
                c = (n = void 0 === n ? u : r(o(n), 0, u));
            return (n -= e.length) >= 0 && t.slice(n, c) == e;
        };
    },
    function (t, e, n) {
        var r = n(215),
            i = n(2),
            o = "Expected a function";
        t.exports = function (t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return i(n) && ((a = "leading" in n ? !!n.leading : a), (u = "trailing" in n ? !!n.trailing : u)), r(t, e, { leading: a, maxWait: e, trailing: u });
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(216),
            o = n(40),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function (t, e, n) {
            var s,
                f,
                l,
                d,
                p,
                v,
                h = 0,
                y = !1,
                g = !1,
                m = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function b(e) {
                var n = s,
                    r = f;
                return (s = f = void 0), (h = e), (d = t.apply(r, n));
            }
            function w(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (g && t - h >= l);
            }
            function _() {
                var t = i();
                if (w(t)) return x(t);
                p = setTimeout(
                    _,
                    (function (t) {
                        var n = e - (t - v);
                        return g ? c(n, l - (t - h)) : n;
                    })(t)
                );
            }
            function x(t) {
                return (p = void 0), m && s ? b(t) : ((s = f = void 0), d);
            }
            function O() {
                var t = i(),
                    n = w(t);
                if (((s = arguments), (f = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (h = t), (p = setTimeout(_, e)), y ? b(t) : d;
                        })(v);
                    if (g) return (p = setTimeout(_, e)), b(v);
                }
                return void 0 === p && (p = setTimeout(_, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) && ((y = !!n.leading), (l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l), (m = "trailing" in n ? !!n.trailing : m)),
                (O.cancel = function () {
                    void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
                }),
                (O.flush = function () {
                    return void 0 === p ? d : x(i());
                }),
                O
            );
        };
    },
    function (t, e, n) {
        var r = n(1);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(218),
            o = (r = i) && r.__esModule ? r : { default: r };
        e.default = o.default;
    },
    function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        t.exports = function (t, e) {
            if (i(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++) if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setStyle = function (t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function (t, e) {
                return t.style[e];
            }),
            (e.getProperty = function (t, e) {
                return t[e];
            }),
            (e.matchSelector = function (t) {
                return function (e) {
                    return e[i.a](t);
                };
            }),
            (e.getQuerySelector = function (t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var i = e;
                    if (-1 !== e.indexOf(r.y)) {
                        var o = e.split(r.y),
                            a = o[0];
                        if (((i = o[1]), a !== document.documentElement.getAttribute(r.N))) return null;
                    }
                    return '[data-id^="' + i + '"]';
                }
                return n;
            }),
            (e.getValidDocument = function (t) {
                if (null == t || t === document.documentElement.getAttribute(r.N)) return document;
                return null;
            }),
            (e.queryDocument = function (t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
            }),
            (e.elementContains = function (t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function (t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a; ) -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            n.d(e, "getClosestElement", function () {
                return a;
            }),
            (e.getRefType = function (t) {
                if (null != t && "object" == (void 0 === t ? "undefined" : o(t))) return t instanceof Element ? r.w : r.A;
                return null;
            });
        var r = n(8),
            i = n(78),
            o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      };
        var a = Element.prototype.closest
            ? function (t, e) {
                  return document.documentElement.contains(t) ? t.closest(e) : null;
              }
            : function (t, e) {
                  if (!document.documentElement.contains(t)) return null;
                  var n = t;
                  do {
                      if (n[i.a] && n[i.a](e)) return n;
                      n = n.parentNode;
                  } while (null != n);
                  return null;
              };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(221),
            o = n.n(i),
            a = n(15),
            u = n.n(a),
            c = n(240),
            s = n.n(c),
            f = n(80),
            l = n(14),
            d = n(43),
            p = n(42),
            v = n(8),
            h =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
            y =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      };
        function g(t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }
        var m,
            b,
            w,
            _ = function (t) {
                return function (e) {
                    return !("object" !== (void 0 === e ? "undefined" : y(e)) || !t(e)) || e;
                };
            },
            x = _(function (t) {
                return t.element === t.nativeEvent.target;
            }),
            O = _(function (t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            I = o()([x, O]),
            j = function (t, e) {
                return e ? t.getState().ixData.events[e] : null;
            },
            E = function (t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    c = r.id,
                    s = a.config,
                    l = s.actionListId,
                    d = s.autoStopEventId,
                    p = j(n, d);
                return (
                    p && Object(f.d)({ store: n, eventId: d, eventTarget: i, eventStateKey: d + v.h + o.split(v.h)[1], actionListId: u()(p, "action.config.actionListId") }),
                    Object(f.d)({ store: n, eventId: c, eventTarget: i, eventStateKey: o, actionListId: l }),
                    Object(f.b)({ store: n, eventId: c, eventTarget: i, eventStateKey: o, actionListId: l }),
                    e
                );
            },
            S = function (t, e) {
                return function (n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            T = { handler: S(I, E) },
            A = h({}, T, { types: [p.a, p.b].join(" ") }),
            k = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                { target: document, types: "scroll wheel readystatechange IX2_PREVIEW_LOAD", throttle: !0 },
            ],
            M = { types: [{ target: document, types: "scroll wheel", throttle: !0 }] },
            C =
                ((m = void 0 !== window.pageXOffset),
                (b = "CSS1Compat" === document.compatMode ? document.documentElement : document.body),
                function () {
                    return {
                        scrollLeft: m ? window.pageXOffset : b.scrollLeft,
                        scrollTop: m ? window.pageYOffset : b.scrollTop,
                        stiffScrollTop: s()(m ? window.pageYOffset : b.scrollTop, 0, b.scrollHeight - window.innerHeight),
                        scrollWidth: b.scrollWidth,
                        scrollHeight: b.scrollHeight,
                        clientWidth: b.clientWidth,
                        clientHeight: b.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    };
                }),
            L = function (t) {
                return function (e, n) {
                    var r = -1 !== [p.a, p.b].indexOf(e.nativeEvent.type) ? e.nativeEvent.type === p.a : n.isActive,
                        i = h({}, n, { isActive: r });
                    return n && i.isActive === n.isActive ? i : t(e, i) || i;
                };
            },
            P = function (t) {
                return function (e, n) {
                    var r = {
                        elementHovered: (function (t) {
                            var e = t.element,
                                n = t.nativeEvent,
                                r = n.type,
                                i = n.target,
                                o = n.relatedTarget,
                                a = e.contains(i);
                            if ("mouseover" === r && a) return !0;
                            var u = e.contains(o);
                            return !("mouseout" !== r || !a || !u);
                        })(e),
                    };
                    return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r)) || r;
                };
            },
            R = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = C(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        u = e.event,
                        c = u.config,
                        s = u.eventTypeId,
                        f = c.scrollOffsetValue,
                        l = "PX" === c.scrollOffsetUnit,
                        d = o - a,
                        v = Number((i / d).toFixed(2));
                    if (n && n.percentTop === v) return n;
                    var y = (l ? f : (a * (f || 0)) / 100) / d,
                        g = void 0,
                        m = void 0,
                        b = 0;
                    n && ((g = v > n.percentTop), (b = (m = n.scrollingDown !== g) ? v : n.anchorTop));
                    var w = s === p.t ? v >= b + y : v <= b - y,
                        _ = h({}, n, { percentTop: v, inBounds: w, anchorTop: b, scrollingDown: g });
                    return (n && w && (m || _.inBounds !== n.inBounds) && t(e, _)) || _;
                };
            },
            N = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                        r = { clickCount: (n.clickCount % 2) + 1 };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            D = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return h({}, A, {
                    handler: S(
                        t ? I : x,
                        L(function (t, e) {
                            return e.isActive ? T.handler(t, e) : e;
                        })
                    ),
                });
            },
            z = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return h({}, A, {
                    handler: S(
                        t ? I : x,
                        L(function (t, e) {
                            return e.isActive ? e : T.handler(t, e);
                        })
                    ),
                });
            },
            V = h({}, M, {
                handler:
                    ((w = function (t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : (r.eventTypeId === p.x) === n ? (E(t), h({}, e, { triggered: !0 })) : e;
                    }),
                    function (t, e) {
                        var n = h({}, e, {
                            elementVisible: (function (t) {
                                var e,
                                    n,
                                    r = t.element,
                                    i = t.event.config,
                                    o = C(),
                                    a = o.clientWidth,
                                    u = o.clientHeight,
                                    c = i.scrollOffsetValue,
                                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                                return (e = r.getBoundingClientRect()), (n = { left: 0, top: s, right: a, bottom: u - s }), !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top);
                            })(t),
                        });
                        return ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) && w(t, n)) || n;
                    }),
            });
        e.a =
            (g((r = {}), p.z, D()),
            g(r, p.A, z()),
            g(r, p.d, D()),
            g(r, p.c, z()),
            g(r, p.p, D(!1)),
            g(r, p.o, z(!1)),
            g(r, p.B, D()),
            g(r, p.C, z()),
            g(r, p.f, { types: "ecommerce-cart-open", handler: S(I, E) }),
            g(r, p.e, { types: "ecommerce-cart-close", handler: S(I, E) }),
            g(r, p.h, {
                types: "click",
                handler: S(
                    I,
                    N(function (t, e) {
                        var n,
                            r,
                            i,
                            o = e.clickCount;
                        (r = (n = t).store), (i = n.event.action.config.autoStopEventId), Boolean(j(r, i)) ? 1 === o && E(t) : E(t);
                    })
                ),
            }),
            g(r, p.m, {
                types: "click",
                handler: S(
                    I,
                    N(function (t, e) {
                        2 === e.clickCount && E(t);
                    })
                ),
            }),
            g(r, p.i, h({}, T, { types: "mousedown" })),
            g(r, p.n, h({}, T, { types: "mouseup" })),
            g(r, p.l, {
                types: "mouseover mouseout",
                handler: S(
                    I,
                    P(function (t, e) {
                        e.elementHovered && E(t);
                    })
                ),
            }),
            g(r, p.k, {
                types: "mouseover mouseout",
                handler: S(
                    I,
                    P(function (t, e) {
                        e.elementHovered || E(t);
                    })
                ),
            }),
            g(r, p.j, {
                types: "mousemove mouseout scroll",
                handler: function (t) {
                    var e = t.store,
                        n = t.element,
                        r = t.eventConfig,
                        i = t.nativeEvent,
                        o = t.eventStateKey,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                        u = r.basedOn,
                        c = r.selectedAxis,
                        s = r.continuousParameterGroupId,
                        f = r.reverse,
                        v = r.restingState,
                        h = void 0 === v ? 0 : v,
                        y = i.clientX,
                        g = void 0 === y ? a.clientX : y,
                        m = i.clientY,
                        b = void 0 === m ? a.clientY : m,
                        w = i.pageX,
                        _ = void 0 === w ? a.pageX : w,
                        x = i.pageY,
                        O = void 0 === x ? a.pageY : x,
                        j = "X_AXIS" === c,
                        E = "mouseout" === i.type,
                        S = h / 100,
                        T = s,
                        A = !1;
                    switch (u) {
                        case p.D:
                            S = j ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(b, window.innerHeight) / window.innerHeight;
                            break;
                        case p.q:
                            var k = C(),
                                M = k.scrollLeft,
                                L = k.scrollTop,
                                P = k.scrollWidth,
                                R = k.scrollHeight;
                            S = j ? Math.min(M + _, P) / P : Math.min(L + O, R) / R;
                            break;
                        case p.g:
                        default:
                            T = Object(l.k)(o, s);
                            var N = 0 === i.type.indexOf("mouse");
                            if (N && !0 !== I({ element: n, nativeEvent: i })) break;
                            var D = n.getBoundingClientRect(),
                                z = D.left,
                                V = D.top,
                                F = D.width,
                                G = D.height;
                            if (
                                !N &&
                                !(function (t, e) {
                                    return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
                                })({ left: g, top: b }, D)
                            )
                                break;
                            (A = !0), (S = j ? (g - z) / F : (b - V) / G);
                    }
                    return (
                        E && (S > 0.95 || S < 0.05) && (S = Math.round(S)),
                        (u !== p.g || A || A !== a.elementHovered) && ((S = f ? 1 - S : S), e.dispatch(Object(d.parameterChanged)(T, S))),
                        { elementHovered: A, clientX: g, clientY: b, pageX: _, pageY: O }
                    );
                },
            }),
            g(r, p.s, {
                types: k,
                handler: function (t) {
                    var e = t.store,
                        n = t.eventConfig,
                        r = n.continuousParameterGroupId,
                        i = n.reverse,
                        o = C(),
                        a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                    (a = i ? 1 - a : a), e.dispatch(Object(d.parameterChanged)(r, a));
                },
            }),
            g(r, p.w, {
                types: k,
                handler: function (t) {
                    var e = t.element,
                        n = t.store,
                        r = t.eventConfig,
                        i = t.eventStateKey,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                        a = C(),
                        u = a.scrollLeft,
                        c = a.scrollTop,
                        s = a.scrollWidth,
                        f = a.scrollHeight,
                        v = a.clientHeight,
                        h = r.basedOn,
                        y = r.selectedAxis,
                        g = r.continuousParameterGroupId,
                        m = r.startsEntering,
                        b = r.startsExiting,
                        w = r.addEndOffset,
                        _ = r.addStartOffset,
                        x = r.addOffsetValue,
                        O = void 0 === x ? 0 : x,
                        I = r.endOffsetValue,
                        j = void 0 === I ? 0 : I,
                        E = "X_AXIS" === y;
                    if (h === p.D) {
                        var S = E ? u / s : c / f;
                        return S !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(g, S)), { scrollPercent: S };
                    }
                    var T = Object(l.k)(i, g),
                        A = e.getBoundingClientRect(),
                        k = (_ ? O : 0) / 100,
                        M = (w ? j : 0) / 100;
                    (k = m ? k : 1 - k), (M = b ? M : 1 - M);
                    var L = A.top + Math.min(A.height * k, v),
                        P = A.top + A.height * M - L,
                        R = Math.min(v + P, f),
                        N = Math.min(Math.max(0, v - L), R) / R;
                    return N !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(T, N)), { scrollPercent: N };
                },
            }),
            g(r, p.x, V),
            g(r, p.y, V),
            g(
                r,
                p.t,
                h({}, M, {
                    handler: R(function (t, e) {
                        e.scrollingDown && E(t);
                    }),
                })
            ),
            g(
                r,
                p.u,
                h({}, M, {
                    handler: R(function (t, e) {
                        e.scrollingDown || E(t);
                    }),
                })
            ),
            g(r, p.r, {
                types: "readystatechange PREVIEW_LOAD",
                handler: S(
                    x,
                    (function (t) {
                        return function (e, n) {
                            var r = { finished: "complete" === document.readyState };
                            return !r.finished || (n && n.finshed) || t(e), r;
                        };
                    })(E)
                ),
            }),
            g(r, p.v, {
                types: "readystatechange PREVIEW_LOAD",
                handler: S(
                    x,
                    (function (t) {
                        return function (e, n) {
                            return n || t(e), { started: !0 };
                        };
                    })(E)
                ),
            }),
            r);
    },
    function (t, e, n) {
        var r = n(222)();
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(44),
            i = n(223),
            o = n(85),
            a = n(86),
            u = n(0),
            c = n(236),
            s = "Expected a function",
            f = 8,
            l = 32,
            d = 128,
            p = 256;
        t.exports = function (t) {
            return i(function (e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--; ) {
                    var h = e[i];
                    if ("function" != typeof h) throw new TypeError(s);
                    if (v && !y && "wrapper" == a(h)) var y = new r([], !0);
                }
                for (i = y ? i : n; ++i < n; ) {
                    h = e[i];
                    var g = a(h),
                        m = "wrapper" == g ? o(h) : void 0;
                    y = m && c(m[0]) && m[1] == (d | f | l | p) && !m[4].length && 1 == m[9] ? y[a(m[0])].apply(y, m[3]) : 1 == h.length && c(h) ? y[g]() : y.thru(h);
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (y && 1 == t.length && u(r)) return y.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; ) o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function (t, e, n) {
        var r = n(224),
            i = n(227),
            o = n(229);
        t.exports = function (t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function (t, e, n) {
        var r = n(225);
        t.exports = function (t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function (t, e, n) {
        var r = n(36),
            i = n(226);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s; ) {
                var f = e[c];
                n > 0 && o(f) ? (n > 1 ? t(f, n - 1, o, a, u) : r(u, f)) : a || (u[u.length] = f);
            }
            return u;
        };
    },
    function (t, e, n) {
        var r = n(12),
            i = n(23),
            o = n(0),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function (t, e, n) {
        var r = n(228),
            i = Math.max;
        t.exports = function (t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u; ) c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function (t, e, n) {
        var r = n(230),
            i = n(232)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(231),
            i = n(82),
            o = n(38),
            a = i
                ? function (t, e) {
                      return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
                  }
                : o;
        t.exports = a;
    },
    function (t, e) {
        t.exports = function (t) {
            return function () {
                return t;
            };
        };
    },
    function (t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function (t) {
            var e = 0,
                o = 0;
            return function () {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(72),
            i = r && new r();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(46),
            i = n(85),
            o = n(86),
            a = n(237);
        t.exports = function (t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function (t, e, n) {
        var r = n(46),
            i = n(44),
            o = n(45),
            a = n(0),
            u = n(5),
            c = n(238),
            s = Object.prototype.hasOwnProperty;
        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
    },
    function (t, e, n) {
        var r = n(46),
            i = n(44),
            o = n(239);
        t.exports = function (t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (e.__actions__ = o(t.__actions__)), (e.__index__ = t.__index__), (e.__values__ = t.__values__), e;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
        };
    },
    function (t, e, n) {
        var r = n(83),
            i = n(40);
        t.exports = function (t, e, n) {
            return void 0 === n && ((n = e), (e = void 0)), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n);
        };
    },
    function (t, e, n) {
        var r = n(3);
        r.define(
            "links",
            (t.exports = function (t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    f = document.createElement("a"),
                    l = "w--current",
                    d = /^#[\w:.-]+$/,
                    p = /index\.(html|php)$/,
                    v = /\/$/;
                function h(e) {
                    var r = (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((f.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (0 === r.indexOf("#") && d.test(r)) {
                            var u = t(r);
                            u.length && i.push({ link: a, sec: u, active: !1 });
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || (p.test(r) && v.test(o));
                            g(a, l, c);
                        }
                    }
                }
                function y() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function (e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), g(r, l, c));
                    });
                }
                function g(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready = a.design = a.preview = function () {
                        (n = c && r.env("design")), (o = r.env("slug") || s.pathname || ""), r.scroll.off(y), (i = []);
                        for (var t = document.links, e = 0; e < t.length; ++e) h(t[e]);
                        i.length && (r.scroll.on(y), y());
                    }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        var r = n(3);
        r.define(
            "scroll",
            (t.exports = function (t) {
                var e = t(document),
                    n = window,
                    i = n.location,
                    o = (function () {
                        try {
                            return Boolean(n.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : n.history,
                    a = /^[a-zA-Z0-9][\w:.-]*$/;
                return {
                    ready: function () {
                        var u = i.href.split("#")[0];
                        e.on("click", "a", function (e) {
                            if (!(r.env("design") || (window.$.mobile && t(e.currentTarget).hasClass("ui-link"))))
                                if ("#" !== this.getAttribute("href")) {
                                    var c = this.href.split("#"),
                                        s = c[0] === u ? c[1] : null;
                                    s &&
                                        (function (e, u) {
                                            if (a.test(e)) {
                                                var c = t("#" + e);
                                                if (c.length) {
                                                    if ((u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol))) {
                                                        var s = o.state && o.state.hash;
                                                        s !== e && o.pushState({ hash: e }, "", "#" + e);
                                                    }
                                                    var f = r.env("editor") ? ".w-editor-body" : "body",
                                                        l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                                                        d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                                                    n.setTimeout(
                                                        function () {
                                                            !(function (e, r) {
                                                                var i = t(n).scrollTop(),
                                                                    o = e.offset().top - r;
                                                                if ("mid" === e.data("scroll")) {
                                                                    var a = t(n).height() - r,
                                                                        u = e.outerHeight();
                                                                    u < a && (o -= Math.round((a - u) / 2));
                                                                }
                                                                var c = 1;
                                                                t("body")
                                                                    .add(e)
                                                                    .each(function () {
                                                                        var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                                        !isNaN(e) && (0 === e || e > 0) && (c = e);
                                                                    }),
                                                                    Date.now ||
                                                                        (Date.now = function () {
                                                                            return new Date().getTime();
                                                                        });
                                                                var s = Date.now(),
                                                                    f =
                                                                        n.requestAnimationFrame ||
                                                                        n.mozRequestAnimationFrame ||
                                                                        n.webkitRequestAnimationFrame ||
                                                                        function (t) {
                                                                            n.setTimeout(t, 15);
                                                                        },
                                                                    l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
                                                                !(function t() {
                                                                    var e = Date.now() - s;
                                                                    n.scroll(
                                                                        0,
                                                                        (function (t, e, n, r) {
                                                                            return n > r ? e : t + (e - t) * ((i = n / r) < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                                                            var i;
                                                                        })(i, o, e, l)
                                                                    ),
                                                                        e <= l && f(t);
                                                                })();
                                                            })(c, d);
                                                        },
                                                        u ? 0 : 300
                                                    );
                                                }
                                            }
                                        })(s, e);
                                } else e.preventDefault();
                        });
                    },
                };
            })
        );
    },
    function (t, e, n) {
        var r = n(3),
            i = n(244);
        r.define(
            "tabs",
            (t.exports = function (t) {
                var e,
                    n,
                    o = {},
                    a = t.tram,
                    u = t(document),
                    c = r.env,
                    s = c.safari,
                    f = c(),
                    l = "data-w-tab",
                    d = ".w-tabs",
                    p = "w--current",
                    v = "w--tab-active",
                    h = i.triggers,
                    y = !1;
                function g() {
                    (n = f && r.env("design")), (e = u.find(d)).length && (e.each(w), r.env("preview") && !y && e.each(b), m(), r.redraw.on(o.redraw));
                }
                function m() {
                    r.redraw.off(o.redraw);
                }
                function b(e, n) {
                    var r = t.data(n, d);
                    r && (r.links && r.links.each(h.reset), r.panes && r.panes.each(h.reset));
                }
                function w(e, r) {
                    var i = t(r),
                        o = t.data(r, d);
                    if (
                        (o || (o = t.data(r, d, { el: i, config: {} })),
                        (o.current = null),
                        (o.menu = i.children(".w-tab-menu")),
                        (o.links = o.menu.children(".w-tab-link")),
                        (o.content = i.children(".w-tab-content")),
                        (o.panes = o.content.children(".w-tab-pane")),
                        o.el.off(d),
                        o.links.off(d),
                        (function (t) {
                            var e = {};
                            e.easing = t.el.attr("data-easing") || "ease";
                            var n = parseInt(t.el.attr("data-duration-in"), 10);
                            n = e.intro = n == n ? n : 0;
                            var r = parseInt(t.el.attr("data-duration-out"), 10);
                            (r = e.outro = r == r ? r : 0), (e.immediate = !n && !r), (t.config = e);
                        })(o),
                        !n)
                    ) {
                        o.links.on(
                            "click" + d,
                            (function (t) {
                                return function (e) {
                                    var n = e.currentTarget.getAttribute(l);
                                    n && _(t, { tab: n });
                                };
                            })(o)
                        );
                        var a = o.links.filter("." + p).attr(l);
                        a && _(o, { tab: a, immediate: !0 });
                    }
                }
                function _(e, n) {
                    n = n || {};
                    var i = e.config,
                        o = i.easing,
                        u = n.tab;
                    if (u !== e.current) {
                        (e.current = u),
                            e.links.each(function (e, n) {
                                var r = t(n);
                                n.getAttribute(l) === u ? r.addClass(p).each(h.intro) : r.hasClass(p) && r.removeClass(p).each(h.outro);
                            });
                        var c = [],
                            f = [];
                        e.panes.each(function (e, n) {
                            var r = t(n);
                            n.getAttribute(l) === u ? c.push(n) : r.hasClass(v) && f.push(n);
                        });
                        var d = t(c),
                            g = t(f);
                        if (n.immediate || i.immediate) return d.addClass(v).each(h.intro), g.removeClass(v), void (y || r.redraw.up());
                        g.length && i.outro
                            ? (g.each(h.outro),
                              a(g)
                                  .add("opacity " + i.outro + "ms " + o, { fallback: s })
                                  .start({ opacity: 0 })
                                  .then(m))
                            : m();
                    }
                    function m() {
                        if ((g.removeClass(v).css({ opacity: "", transition: "", transform: "", width: "", height: "" }), d.addClass(v).each(h.intro), r.redraw.up(), !i.intro)) return a(d).set({ opacity: 1 });
                        a(d)
                            .set({ opacity: 0 })
                            .redraw()
                            .add("opacity " + i.intro + "ms " + o, { fallback: s })
                            .start({ opacity: 1 });
                    }
                }
                return (
                    (o.ready = o.design = o.preview = g),
                    (o.redraw = function () {
                        (y = !0), g(), (y = !1);
                    }),
                    (o.destroy = function () {
                        (e = u.find(d)).length && (e.each(b), m());
                    }),
                    o
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(245);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function (t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function (t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function (t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                },
            };
        (a.triggers = {}), (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }), o.extend(a.triggers, u), (t.exports = a);
    },
    function (t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function (t, e) {
                    e.__wf_intro = null;
                },
                intro: function (t, e) {
                    e.__wf_intro || ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function (t, e) {
                    e.__wf_intro && ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                },
            };
        (i.triggers = {}),
            (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            (i.init = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function () {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function (t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function (t, e, n) {
        n(3).define(
            "touch",
            (t.exports = function (t) {
                var e = {},
                    n = !document.addEventListener,
                    r = window.getSelection;
                function i(e, n, r) {
                    var i = t.Event(e, { originalEvent: n });
                    t(n.target).trigger(i, r);
                }
                return (
                    n && (t.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (e.init = function (e) {
                        return n
                            ? null
                            : (e = "string" == typeof e ? t(e).get(0) : e)
                            ? new (function (t) {
                                  var e,
                                      n,
                                      o,
                                      a = !1,
                                      u = !1,
                                      c = !1,
                                      s = Math.min(Math.round(0.04 * window.innerWidth), 40);
                                  function f(t) {
                                      var r = t.touches;
                                      (r && r.length > 1) || ((a = !0), (u = !1), r ? ((c = !0), (e = r[0].clientX), (n = r[0].clientY)) : ((e = t.clientX), (n = t.clientY)), (o = e));
                                  }
                                  function l(t) {
                                      if (a) {
                                          if (c && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                                          var f = t.touches,
                                              l = f ? f[0].clientX : t.clientX,
                                              d = f ? f[0].clientY : t.clientY,
                                              v = l - o;
                                          (o = l), Math.abs(v) > s && r && "" === String(r()) && (i("swipe", t, { direction: v > 0 ? "right" : "left" }), p()), (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0);
                                      }
                                  }
                                  function d(t) {
                                      if (a) {
                                          if (((a = !1), c && "mouseup" === t.type)) return t.preventDefault(), t.stopPropagation(), void (c = !1);
                                          u || i("tap", t);
                                      }
                                  }
                                  function p() {
                                      a = !1;
                                  }
                                  t.addEventListener("touchstart", f, !1),
                                      t.addEventListener("touchmove", l, !1),
                                      t.addEventListener("touchend", d, !1),
                                      t.addEventListener("touchcancel", p, !1),
                                      t.addEventListener("mousedown", f, !1),
                                      t.addEventListener("mousemove", l, !1),
                                      t.addEventListener("mouseup", d, !1),
                                      t.addEventListener("mouseout", p, !1),
                                      (this.destroy = function () {
                                          t.removeEventListener("touchstart", f, !1),
                                              t.removeEventListener("touchmove", l, !1),
                                              t.removeEventListener("touchend", d, !1),
                                              t.removeEventListener("touchcancel", p, !1),
                                              t.removeEventListener("mousedown", f, !1),
                                              t.removeEventListener("mousemove", l, !1),
                                              t.removeEventListener("mouseup", d, !1),
                                              t.removeEventListener("mouseout", p, !1),
                                              (t = null);
                                      });
                              })(e)
                            : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-79" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534044255811,
        },
        "e-2": {
            id: "e-2",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e-78" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534044255813,
        },
        "e-5": {
            id: "e-5",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-75" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|566087ad-a504-bd1c-b331-c34b8858bbc2" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534084872989,
        },
        "e-6": {
            id: "e-6",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-74" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|566087ad-a504-bd1c-b331-c34b8858bbc2" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534084872989,
        },
        "e-7": {
            id: "e-7",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-5", affectedElements: {}, playInReverse: false, autoStopEventId: "e-8" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".tabs", originalId: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e27", appliesTo: "CLASS" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088152195,
        },
        "e-8": {
            id: "e-8",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-6", affectedElements: {}, playInReverse: false, autoStopEventId: "e-7" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".tabs", originalId: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e27", appliesTo: "CLASS" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088152196,
        },
        "e-9": {
            id: "e-9",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-10" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088435295,
        },
        "e-10": {
            id: "e-10",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-9" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088435295,
        },
        "e-11": {
            id: "e-11",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-9", affectedElements: {}, playInReverse: false, autoStopEventId: "e-12" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e27" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088906542,
        },
        "e-12": {
            id: "e-12",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-11" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e27" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088906543,
        },
        "e-13": {
            id: "e-13",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-14" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089177367,
        },
        "e-15": {
            id: "e-15",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-16" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e2a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089575560,
        },
        "e-16": {
            id: "e-16",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-15" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb1d9f22-7f68-c693-457b-2880656b3e2a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089575560,
        },
        "e-17": {
            id: "e-17",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-13", affectedElements: {}, playInReverse: false, autoStopEventId: "e-18" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|5175a094-f1bf-e5cd-738c-8ebb1f0eb2b5" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091584108,
        },
        "e-18": {
            id: "e-18",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-17" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|5175a094-f1bf-e5cd-738c-8ebb1f0eb2b5" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091584108,
        },
        "e-19": {
            id: "e-19",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-20" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|b86a86fa-1164-775a-8db7-078e03cdb995" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091826760,
        },
        "e-20": {
            id: "e-20",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: false, autoStopEventId: "e-19" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|b86a86fa-1164-775a-8db7-078e03cdb995" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091826760,
        },
        "e-21": {
            id: "e-21",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-22" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ccaa2d7c-00f7-5651-33e8-f1ac052f0dd8" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534092564502,
        },
        "e-22": {
            id: "e-22",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-18", affectedElements: {}, playInReverse: false, autoStopEventId: "e-21" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ccaa2d7c-00f7-5651-33e8-f1ac052f0dd8" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534092564502,
        },
        "e-23": {
            id: "e-23",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-21", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|module-hero-1" },
            config: [{ continuousParameterGroupId: "a-21-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534095115428,
        },
        "e-24": {
            id: "e-24",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-22", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|24ac6438-acfb-0746-43b3-4cd2d0fd689f" },
            config: [{ continuousParameterGroupId: "a-22-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534095362358,
        },
        "e-25": {
            id: "e-25",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-23", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|eaf60bd2-f14c-9a3e-df5f-c739f68e4a67" },
            config: [{ continuousParameterGroupId: "a-23-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534095609870,
        },
        "e-26": {
            id: "e-26",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-24", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|4921c091-e1f5-8d6f-a7ec-d84f70d7a902" },
            config: [{ continuousParameterGroupId: "a-24-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534095653085,
        },
        "e-27": {
            id: "e-27",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-28" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|2d3ffd0e-984c-f770-4e7c-096e80af0f45" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096212788,
        },
        "e-28": {
            id: "e-28",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-27" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|2d3ffd0e-984c-f770-4e7c-096e80af0f45" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096212788,
        },
        "e-29": {
            id: "e-29",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-30" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|927a6449-437f-4359-a2ba-ad9374c57da2" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096264762,
        },
        "e-30": {
            id: "e-30",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-29" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|927a6449-437f-4359-a2ba-ad9374c57da2" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096264762,
        },
        "e-31": {
            id: "e-31",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-32" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|26af2df1-ee2f-c8df-94a3-57523db78e70" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096266575,
        },
        "e-32": {
            id: "e-32",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-31" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|26af2df1-ee2f-c8df-94a3-57523db78e70" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534096266575,
        },
        "e-33": {
            id: "e-33",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-22", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|0a73fde8-f703-9e3a-e9e2-fbfb3a57424e" },
            config: [{ continuousParameterGroupId: "a-22-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534097900475,
        },
        "e-50": {
            id: "e-50",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-51" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|92a865f9-e4cd-96a8-e9b8-98d89d991a34" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098151097,
        },
        "e-51": {
            id: "e-51",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-50" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|92a865f9-e4cd-96a8-e9b8-98d89d991a34" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098151097,
        },
        "e-52": {
            id: "e-52",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-31", affectedElements: {}, playInReverse: false, autoStopEventId: "e-53" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100dc" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098187226,
        },
        "e-53": {
            id: "e-53",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-32", affectedElements: {}, playInReverse: false, autoStopEventId: "e-52" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100dc" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098187226,
        },
        "e-54": {
            id: "e-54",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-26", affectedElements: {}, playInReverse: false, autoStopEventId: "e-55" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a94e6ebb-78da-8e9c-c601-d995d2cff111" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098306647,
        },
        "e-55": {
            id: "e-55",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-54" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a94e6ebb-78da-8e9c-c601-d995d2cff111" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098306647,
        },
        "e-56": {
            id: "e-56",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-26", affectedElements: {}, playInReverse: false, autoStopEventId: "e-57" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|6ad6d24a-2e99-44a4-0846-c5827141b1d7" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098400333,
        },
        "e-57": {
            id: "e-57",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-56" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|6ad6d24a-2e99-44a4-0846-c5827141b1d7" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098400333,
        },
        "e-58": {
            id: "e-58",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-26", affectedElements: {}, playInReverse: false, autoStopEventId: "e-59" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|26526cf6-9cfb-2677-bd3d-a3c09df982d6" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098425787,
        },
        "e-59": {
            id: "e-59",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-58" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|26526cf6-9cfb-2677-bd3d-a3c09df982d6" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534098425787,
        },
        "e-60": {
            id: "e-60",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-27", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|dd6f9761-ad55-7c0f-5af1-032f57f5797a" },
            config: [{ continuousParameterGroupId: "a-27-p", smoothing: 75, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534099360836,
        },
        "e-61": {
            id: "e-61",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-28", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|8f6c555b-ba25-0aa2-6d94-aa1e3b4f7303" },
            config: [{ continuousParameterGroupId: "a-28-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534099930362,
        },
        "e-63": {
            id: "e-63",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-29", affectedElements: {}, playInReverse: false, autoStopEventId: "e-62" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "sportsonair-media" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534100311059,
        },
        "e-68": {
            id: "e-68",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-33", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|5340b3c5-7297-a3e7-6a74-9ddf780476be" },
            config: [{ continuousParameterGroupId: "a-33-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534360234707,
        },
        "e-69": {
            id: "e-69",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-34", affectedElements: {}, duration: 0 } },
            mediaQueries: ["tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|7730191f-a8a1-3d47-d31d-e58421e0eea4" },
            config: [{ continuousParameterGroupId: "a-34-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534360344846,
        },
        "e-70": {
            id: "e-70",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-25", affectedElements: {}, playInReverse: false, autoStopEventId: "e-71" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb5c4f9b-14e8-9940-92fa-63a1b66a8f4a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534385179475,
        },
        "e-71": {
            id: "e-71",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-36", affectedElements: {}, playInReverse: false, autoStopEventId: "e-70" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb5c4f9b-14e8-9940-92fa-63a1b66a8f4a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534385179476,
        },
        "e-72": {
            id: "e-72",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-37", affectedElements: {}, playInReverse: false, autoStopEventId: "e-73" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df3" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1518391253949,
        },
        "e-74": {
            id: "e-74",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-37",
                    affectedElements: {
                        "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4": { selector: null, selectorGuids: ["3a69b61e-6b57-3a3f-a422-2f4bc2517dd4"], limitAffectedElements: null },
                        "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2": { selector: null, selectorGuids: ["45a89489-d8f9-ea2c-77df-f8bf13597ac6"], limitAffectedElements: null },
                    },
                    playInReverse: false,
                    autoStopEventId: "e-75",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7dfa" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1518391313035,
        },
        "e-78": {
            id: "e-78",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-38", affectedElements: {}, playInReverse: false, autoStopEventId: "e-4" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|social-icon-1" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1532997262614,
        },
        "e-80": {
            id: "e-80",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-38", affectedElements: {}, playInReverse: false, autoStopEventId: "e-81" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|566087ad-a504-bd1c-b331-c34b8858bbc2" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534386603619,
        },
        "e-82": {
            id: "e-82",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-38", affectedElements: {}, playInReverse: false, autoStopEventId: "e-83" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|fb5c4f9b-14e8-9940-92fa-63a1b66a8f4a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534386620756,
        },
        "e-84": {
            id: "e-84",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-38", affectedElements: {}, playInReverse: false, autoStopEventId: "e-85" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|92a865f9-e4cd-96a8-e9b8-98d89d991a34" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534386854959,
        },
        "e-86": {
            id: "e-86",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-39", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|25a8e409-38e4-2899-311c-18f167b12e52" },
            config: [{ continuousParameterGroupId: "a-39-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534794661191,
        },
        "e-87": {
            id: "e-87",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-40", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|3ac66a79-758e-0166-d1fe-ead52e78587f" },
            config: [{ continuousParameterGroupId: "a-40-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534794786354,
        },
        "e-88": {
            id: "e-88",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-41", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ce0466de-e7b2-1808-242d-e5df157e8fd3" },
            config: [{ continuousParameterGroupId: "a-41-p", smoothing: 50, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534794881313,
        },
        "e-107": {
            id: "e-107",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-105", affectedElements: {}, playInReverse: false, autoStopEventId: "e-108" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".tabs", originalId: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e27", appliesTo: "CLASS" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088152195,
        },
        "e-108": {
            id: "e-108",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-106", affectedElements: {}, playInReverse: false, autoStopEventId: "e-107" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".tabs", originalId: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e27", appliesTo: "CLASS" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088152196,
        },
        "e-109": {
            id: "e-109",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-107", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1010" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088435295,
        },
        "e-1010": {
            id: "e-1010",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-108", affectedElements: {}, playInReverse: false, autoStopEventId: "e-109" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088435295,
        },
        "e-1011": {
            id: "e-1011",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-109", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1012" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e27" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088906542,
        },
        "e-1012": {
            id: "e-1012",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1019", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1011" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e27" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534088906543,
        },
        "e-1013": {
            id: "e-1013",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1010", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1014" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e24" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089177367,
        },
        "e-1015": {
            id: "e-1015",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1011", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1016" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e2a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089575560,
        },
        "e-1016": {
            id: "e-1016",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1012", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1015" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|ab1d9f22-7f68-c693-457b-2880656b3e2a" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534089575560,
        },
        "e-1017": {
            id: "e-1017",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1013", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1018" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a175a094-f1bf-e5cd-738c-8ebb1f0eb2b5" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091584108,
        },
        "e-1018": {
            id: "e-1018",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1020", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1017" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a175a094-f1bf-e5cd-738c-8ebb1f0eb2b5" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091584108,
        },
        "e-1019": {
            id: "e-1019",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1015", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1020" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a86a86fa-1164-775a-8db7-078e03cdb995" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091826760,
        },
        "e-1020": {
            id: "e-1020",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1016", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1019" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|a86a86fa-1164-775a-8db7-078e03cdb995" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534091826760,
        },
        "e-1021": {
            id: "e-1021",
            eventTypeId: "TAB_ACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1017", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1022" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|acaa2d7c-00f7-5651-33e8-f1ac052f0dd8" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534092564502,
        },
        "e-1022": {
            id: "e-1022",
            eventTypeId: "TAB_INACTIVE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-1018", affectedElements: {}, playInReverse: false, autoStopEventId: "e-1021" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "sportsonair-media|acaa2d7c-00f7-5651-33e8-f1ac052f0dd8" },
            config: { loop: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1534092564502,
        },
    },
    actionLists: {
        a: {
            id: "a",
            title: "Get Ticket Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|2e8b38f7-d565-5501-bf0e-66bbdd95eede" }, yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|dec207ba-d0c3-a695-5d15-0d7a2b8b4976" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2e8b38f7-d565-5501-bf0e-66bbdd95eede" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 250, target: { id: "sportsonair-media|dec207ba-d0c3-a695-5d15-0d7a2b8b4976" }, xValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|e80811be-5d99-954c-9b08-a2eafc168511" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|e80811be-5d99-954c-9b08-a2eafc168511" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534044260374,
            useFirstGroupAsInitialState: true,
        },
        "a-31": {
            id: "a-31",
            title: "Get Ticket Hover 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-31-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100e1" }, yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-31-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100df" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-31-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100e1" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-31-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 250, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100df" }, xValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-31-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100dd" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-31-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|e80811be-5d99-954c-9b08-a2eafc168511" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534044260374,
            useFirstGroupAsInitialState: true,
        },
        "a-2": {
            id: "a-2",
            title: "Get Ticket Hover out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2e8b38f7-d565-5501-bf0e-66bbdd95eede" }, yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-2-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 250, target: { id: "sportsonair-media|dec207ba-d0c3-a695-5d15-0d7a2b8b4976" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-2-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|e80811be-5d99-954c-9b08-a2eafc168511" }, xValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-2-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|e80811be-5d99-954c-9b08-a2eafc168511" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534044260374,
            useFirstGroupAsInitialState: false,
        },
        "a-32": {
            id: "a-32",
            title: "Get Ticket Hover out 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-32-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100e1" }, yValue: 110, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-32-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 250, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100df" }, xValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-32-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100dd" }, xValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-32-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d09653ad-89a5-d9b2-9bb7-936a9b1100df" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534044260374,
            useFirstGroupAsInitialState: false,
        },
        "a-3": {
            id: "a-3",
            title: "Hover Link Underline",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-3-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] }, xValue: 1, locked: false },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: -110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1534084375682,
            useFirstGroupAsInitialState: false,
        },
        "a-35": {
            id: "a-35",
            title: "Hover Link Underline 3",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-35-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] }, xValue: 1, locked: false },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-35-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-35-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: -110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-35-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1534084375682,
            useFirstGroupAsInitialState: false,
        },
        "a-26": {
            id: "a-26",
            title: "Hover Link Underline Footer",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-26-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] }, xValue: 0, locked: false },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-26-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] }, xValue: 1, locked: false },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-26-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-26-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: -110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-26-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1534084375682,
            useFirstGroupAsInitialState: true,
        },
        "a-25": {
            id: "a-25",
            title: "Hover Link Underline section 2",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-25-n-4", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 1, locked: false } },
                        {
                            id: "a-25-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-25-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 110, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-25-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "inOutBack", duration: 500, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534084375682,
            useFirstGroupAsInitialState: true,
        },
        "a-36": {
            id: "a-36",
            title: "hover our link line",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-36-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 0, locked: false } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-36-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 1, locked: false },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-36-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 110, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-36-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|fd664d8f-0611-96f8-f20d-ad10ca122e75" }, xValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534084375682,
            useFirstGroupAsInitialState: true,
        },
        "a-4": {
            id: "a-4",
            title: "Set line to 0 scale on x",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-4-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-4-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutBack",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".link-line", selectorGuids: ["9247d764-9cb8-149f-0c56-0cc473a9de00"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1534084712156,
            useFirstGroupAsInitialState: false,
        },
        "a-5": {
            id: "a-5",
            title: "Tab animation",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".tab-text", selectorGuids: ["89c07913-1328-7e18-079c-6446c19c8f1b"] },
                                rValue: 67,
                                gValue: 245,
                                bValue: 242,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-5-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".activity-icon", selectorGuids: ["24fbafaa-cb67-0d6f-13ca-fb1445ed97e2"] }, value: 1, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1534088157973,
            useFirstGroupAsInitialState: false,
        },
        "a-6": {
            id: "a-6",
            title: "Tab not active",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-6-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".tab-text", selectorGuids: ["89c07913-1328-7e18-079c-6446c19c8f1b"] },
                                rValue: 67,
                                gValue: 245,
                                bValue: 242,
                                aValue: 0.42,
                            },
                        },
                        {
                            id: "a-6-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".activity-icon", selectorGuids: ["24fbafaa-cb67-0d6f-13ca-fb1445ed97e2"] }, value: 0.42, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1534088157973,
            useFirstGroupAsInitialState: false,
        },
        "a-7": {
            id: "a-7",
            title: "Tab Pane Animation",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-7-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-7-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 0, unit: "" } },
                        { id: "a-7-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, value: 0, unit: "" } },
                        {
                            id: "a-7-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 30, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-7-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-7-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-7-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, value: 1, unit: "" } },
                        {
                            id: "a-7-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534088439801,
            useFirstGroupAsInitialState: true,
        },
        "a-8": {
            id: "a-8",
            title: "Tab pane close",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-8-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, value: 0, unit: "" } },
                        {
                            id: "a-8-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8a5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 30, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-8-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 0, unit: "" } },
                        {
                            id: "a-8-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|992b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534088439801,
            useFirstGroupAsInitialState: false,
        },
        "a-9": {
            id: "a-9",
            title: "Rock Climbing Tab",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-9-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-9-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 0, unit: "" } },
                        {
                            id: "a-9-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-9-n-13", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-9-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415d" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-9-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415d" }, xValue: -6, yValue: -4, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-9-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415e" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-9-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415e" }, xValue: 3, yValue: -4, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-9-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415f" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-9-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415f" }, xValue: -1, yValue: 3, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-9-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d4160" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-9-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-9-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-9-n-14",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-9-n-15", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: true,
        },
        "a-19": {
            id: "a-19",
            title: "Rock Climbing",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-19-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 0, unit: "" } },
                        {
                            id: "a-19-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-19-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|52df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: false,
        },
        "a-10": {
            id: "a-10",
            title: "Hiking Tab",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415d" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-10-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415d" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-10-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415e" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-10-n-8",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415e" }, zValue: 45, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-10-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415e" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-10-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415f" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-10-n-9",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415f" }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-10-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415f" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-10-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d4160" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-10-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d4160" }, zValue: 135, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-10-n-11",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: false,
        },
        "a-11": {
            id: "a-11",
            title: "Mountain Biking",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-11-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 0, unit: "" } },
                        {
                            id: "a-11-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-11-n-13", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|72915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                        {
                            id: "a-11-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|72915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 6, yValue: -11, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-11-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|1ece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-11-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-11-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-11-n-9", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: true,
        },
        "a-12": {
            id: "a-12",
            title: "Mountain Biking close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-12-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|72915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 5, yValue: -7, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-12-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|72915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-12-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 0, unit: "" } },
                        {
                            id: "a-12-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-12-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-12-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: false,
        },
        "a-14": {
            id: "a-14",
            title: "Treasure hunting close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-14-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-14-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: false,
        },
        "a-13": {
            id: "a-13",
            title: "Treasure hunting",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-13-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true } },
                        { id: "a-13-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 0, unit: "" } },
                        {
                            id: "a-13-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-13-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-13-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-13-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 1, yValue: 1, locked: true },
                        },
                        { id: "a-13-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, value: 1, unit: "" } },
                        {
                            id: "a-13-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-13-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-13-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-13-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 1, unit: "" } },
                        {
                            id: "a-13-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534091588165,
            useFirstGroupAsInitialState: true,
        },
        "a-20": {
            id: "a-20",
            title: "Treasure hunting 2",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-20-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true } },
                        { id: "a-20-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 0, unit: "" } },
                        {
                            id: "a-20-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-20-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-20-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|823af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-20-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 1, yValue: 1, locked: true },
                        },
                        { id: "a-20-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, value: 1, unit: "" } },
                        {
                            id: "a-20-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534091588165,
            useFirstGroupAsInitialState: false,
        },
        "a-15": {
            id: "a-15",
            title: "Fishing",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-15-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|1ece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true } },
                        {
                            id: "a-15-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-15-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, value: 0, unit: "" } },
                        { id: "a-15-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, value: 0, unit: "" } },
                        {
                            id: "a-15-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-15-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|1ece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-15-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-15-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-15-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-15-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-15-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-15-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534091831381,
            useFirstGroupAsInitialState: true,
        },
        "a-16": {
            id: "a-16",
            title: "hide-fishing",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-16-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|1ece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-16-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-16-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|2c7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-16-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-16-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501b" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-16-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-16-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|67fba847-a459-6250-3520-7be17691501d" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534091831381,
            useFirstGroupAsInitialState: false,
        },
        "a-17": {
            id: "a-17",
            title: "Show kayaking",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-17-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|9e67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 0, yValue: 0, locked: true } },
                        {
                            id: "a-17-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-17-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 0, unit: "" } },
                        {
                            id: "a-17-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-17-n-12", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|9e67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-17-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|248dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-17-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-17-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-13",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|1ece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534092570128,
            useFirstGroupAsInitialState: true,
        },
        "a-18": {
            id: "a-18",
            title: "Hide Kayaking",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-18-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|9e67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-18-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-18-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-18-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-18-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|c870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534092570128,
            useFirstGroupAsInitialState: false,
        },
        "a-21": {
            id: "a-21",
            title: "Hero section scroll",
            continuousParameterGroups: [
                {
                    id: "a-21-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-21-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: { selector: ".background-image.large", selectorGuids: ["4d9be0ba-6763-c3c6-c39f-cc919ccd277c", "db8c9a5f-c36b-50f2-f3a3-1782758cb01d"] },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-21-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: { selector: ".background-image.large", selectorGuids: ["4d9be0ba-6763-c3c6-c39f-cc919ccd277c", "db8c9a5f-c36b-50f2-f3a3-1782758cb01d"] },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-21-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { selector: ".hold-logo", selectorGuids: ["27f9f7db-8baa-e9b8-263e-bfe28e63ccf0"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|7730191f-a8a1-3d47-d31d-e58421e0eea4" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|80541922-3e49-ab57-2f4a-7c71d4bb5520" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-21-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: { selector: ".background-image.large", selectorGuids: ["4d9be0ba-6763-c3c6-c39f-cc919ccd277c", "db8c9a5f-c36b-50f2-f3a3-1782758cb01d"] },
                                        xValue: 2,
                                        yValue: 2,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-21-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { selector: ".hold-logo", selectorGuids: ["27f9f7db-8baa-e9b8-263e-bfe28e63ccf0"] }, yValue: 15, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, yValue: -50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|7730191f-a8a1-3d47-d31d-e58421e0eea4" }, yValue: 15, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-21-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: { selector: ".background-image.large", selectorGuids: ["4d9be0ba-6763-c3c6-c39f-cc919ccd277c", "db8c9a5f-c36b-50f2-f3a3-1782758cb01d"] },
                                        yValue: 15,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-21-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|80541922-3e49-ab57-2f4a-7c71d4bb5520" }, yValue: 20, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534095120372,
        },
        "a-22": {
            id: "a-22",
            title: "Rotate image",
            continuousParameterGroups: [
                {
                    id: "a-22-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-22-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".image-3", selectorGuids: ["955fd45f-3b98-0ed6-84e6-fb6e39f29aac"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-22-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".image-3", selectorGuids: ["955fd45f-3b98-0ed6-84e6-fb6e39f29aac"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-22-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".image-3", selectorGuids: ["955fd45f-3b98-0ed6-84e6-fb6e39f29aac"] }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-22-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".image-3", selectorGuids: ["955fd45f-3b98-0ed6-84e6-fb6e39f29aac"] }, yValue: 20, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534095365571,
        },
        "a-23": {
            id: "a-23",
            title: "rotate-image",
            continuousParameterGroups: [
                {
                    id: "a-23-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-23-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|eaf60bd2-f14c-9a3e-df5f-c739f68e4a67" }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-23-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|eaf60bd2-f14c-9a3e-df5f-c739f68e4a67" }, zValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534095613845,
        },
        "a-24": {
            id: "a-24",
            title: "Move clouds",
            continuousParameterGroups: [
                {
                    id: "a-24-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-24-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|4921c091-e1f5-8d6f-a7ec-d84f70d7a902" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-24-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|4921c091-e1f5-8d6f-a7ec-d84f70d7a902" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534095656785,
        },
        "a-27": {
            id: "a-27",
            title: "Scroll Past image",
            continuousParameterGroups: [
                {
                    id: "a-27-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-27-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|dd6f9761-ad55-7c0f-5af1-032f57f5797a" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-27-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|dd6f9761-ad55-7c0f-5af1-032f57f5797a" }, yValue: 35, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534099364785,
        },
        "a-28": {
            id: "a-28",
            title: "Move peeps",
            continuousParameterGroups: [
                {
                    id: "a-28-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-28-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8f6c555b-ba25-0aa2-6d94-aa1e3b4f7303" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-28-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|8f6c555b-ba25-0aa2-6d94-aa1e3b4f7303" }, yValue: -10, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534099933657,
        },
        "a-29": {
            id: "a-29",
            title: "Page load animation",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-29-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "flex", target: { id: "sportsonair-media|module-loading-1" } } },
                        { id: "a-29-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|module-loading-header-1" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|module-loading-header-1" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d2a92664-d461-f246-a09b-3cfa7c9c043f" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d2a92664-d461-f246-a09b-3cfa7c9c043f" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-14",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d64f" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-15", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d64f" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-20",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|6db6b525-a715-be36-0487-d6aeee974289" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-21", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|6db6b525-a715-be36-0487-d6aeee974289" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-24",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|b3bbcaca-3037-c215-5949-2b55f16730b7" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-25", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|b3bbcaca-3037-c215-5949-2b55f16730b7" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-28",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|dac6d156-af9e-b1a2-24a2-bfb82221cceb" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|dac6d156-af9e-b1a2-24a2-bfb82221cceb" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-32",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fa079933-42f6-cfd1-9e07-e0b67b6f45e2" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-33", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fa079933-42f6-cfd1-9e07-e0b67b6f45e2" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-34",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|044dc31d-1cab-062f-88f9-93a6236c5030" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-35", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|044dc31d-1cab-062f-88f9-93a6236c5030" }, value: 0, unit: "" } },
                        { id: "a-29-n-38", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d78e5e54-e71e-0c52-ca33-b49f266b78e3" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-39",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|d78e5e54-e71e-0c52-ca33-b49f266b78e3" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-42",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-43", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-48",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|9bbb9d1f-f7cf-8e12-e15e-cb32e4091a01" }, yValue: 100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-49", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|9bbb9d1f-f7cf-8e12-e15e-cb32e4091a01" }, value: 0, unit: "" } },
                        { id: "a-29-n-51", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d653" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-52",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|639584b8-91d3-c323-0b4b-bec816eb8d93" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-53", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|639584b8-91d3-c323-0b4b-bec816eb8d93" }, value: 0, unit: "" } },
                        { id: "a-29-n-56", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-59",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, yValue: 25, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-60",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|b6180e6e-9867-7aae-1fb3-6c70bbd60209" }, yValue: 25, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-61", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|b6180e6e-9867-7aae-1fb3-6c70bbd60209" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-29-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 1500, target: { id: "sportsonair-media|module-loading-header-1" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 1500, target: { id: "sportsonair-media|module-loading-header-1" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-29-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 1000, target: { id: "sportsonair-media|module-loading-header-1" }, yValue: -50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 1000, target: { id: "sportsonair-media|module-loading-header-1" }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 1750, target: { id: "sportsonair-media|module-loading-1" }, yValue: -130, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 150, easing: "ease", duration: 500, target: { id: "sportsonair-media|d2a92664-d461-f246-a09b-3cfa7c9c043f" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-13", actionTypeId: "STYLE_OPACITY", config: { delay: 150, easing: "", duration: 500, target: { id: "sportsonair-media|d2a92664-d461-f246-a09b-3cfa7c9c043f" }, value: 1, unit: "" } },
                        { id: "a-29-n-37", actionTypeId: "STYLE_OPACITY", config: { delay: 150, easing: "", duration: 500, target: { id: "sportsonair-media|044dc31d-1cab-062f-88f9-93a6236c5030" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-36",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 150, easing: "ease", duration: 500, target: { id: "sportsonair-media|044dc31d-1cab-062f-88f9-93a6236c5030" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 300, easing: "ease", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d64f" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-17", actionTypeId: "STYLE_OPACITY", config: { delay: 300, easing: "", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d64f" }, value: 1, unit: "" } },
                        { id: "a-29-n-41", actionTypeId: "STYLE_OPACITY", config: { delay: 300, easing: "", duration: 500, target: { id: "sportsonair-media|d78e5e54-e71e-0c52-ca33-b49f266b78e3" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-40",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 300, easing: "", duration: 500, target: { id: "sportsonair-media|d78e5e54-e71e-0c52-ca33-b49f266b78e3" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-18",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 450, easing: "ease", duration: 500, target: { id: "sportsonair-media|6db6b525-a715-be36-0487-d6aeee974289" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-19", actionTypeId: "STYLE_OPACITY", config: { delay: 450, easing: "", duration: 500, target: { id: "sportsonair-media|6db6b525-a715-be36-0487-d6aeee974289" }, value: 1, unit: "" } },
                        { id: "a-29-n-45", actionTypeId: "STYLE_OPACITY", config: { delay: 450, easing: "", duration: 500, target: { id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-44",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 450, easing: "", duration: 500, target: { id: "sportsonair-media|e64a0eb4-fc31-02cb-2357-88ac4ff0b154" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 600, easing: "ease", duration: 500, target: { id: "sportsonair-media|b3bbcaca-3037-c215-5949-2b55f16730b7" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-23", actionTypeId: "STYLE_OPACITY", config: { delay: 600, easing: "", duration: 500, target: { id: "sportsonair-media|b3bbcaca-3037-c215-5949-2b55f16730b7" }, value: 1, unit: "" } },
                        { id: "a-29-n-47", actionTypeId: "STYLE_OPACITY", config: { delay: 600, easing: "", duration: 500, target: { id: "sportsonair-media|9bbb9d1f-f7cf-8e12-e15e-cb32e4091a01" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-46",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 600, easing: "", duration: 500, target: { id: "sportsonair-media|9bbb9d1f-f7cf-8e12-e15e-cb32e4091a01" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-50", actionTypeId: "STYLE_OPACITY", config: { delay: 600, easing: "", duration: 500, target: { id: "sportsonair-media|fba2ca2e-8f54-c3ba-74ed-29b0c680d653" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-30",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 750, easing: "ease", duration: 500, target: { id: "sportsonair-media|fa079933-42f6-cfd1-9e07-e0b67b6f45e2" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 750, easing: "", duration: 500, target: { id: "sportsonair-media|fa079933-42f6-cfd1-9e07-e0b67b6f45e2" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-54",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 750, easing: "ease", duration: 250, target: { id: "sportsonair-media|639584b8-91d3-c323-0b4b-bec816eb8d93" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-55", actionTypeId: "STYLE_OPACITY", config: { delay: 750, easing: "", duration: 500, target: { id: "sportsonair-media|639584b8-91d3-c323-0b4b-bec816eb8d93" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-57",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 750, easing: "", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-58", actionTypeId: "STYLE_OPACITY", config: { delay: 750, easing: "", duration: 500, target: { id: "sportsonair-media|01f27ee3-1567-16cd-8c48-dbf4dfa9f175" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-26",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 900, easing: "ease", duration: 500, target: { id: "sportsonair-media|dac6d156-af9e-b1a2-24a2-bfb82221cceb" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 900, easing: "", duration: 500, target: { id: "sportsonair-media|dac6d156-af9e-b1a2-24a2-bfb82221cceb" }, value: 1, unit: "" } },
                        {
                            id: "a-29-n-62",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 900, easing: "ease", duration: 500, target: { id: "sportsonair-media|b6180e6e-9867-7aae-1fb3-6c70bbd60209" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-63", actionTypeId: "STYLE_OPACITY", config: { delay: 900, easing: "", duration: 500, target: { id: "sportsonair-media|b6180e6e-9867-7aae-1fb3-6c70bbd60209" }, value: 1, unit: "" } },
                    ],
                },
                { actionItems: [{ id: "a-29-n-64", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { id: "sportsonair-media|module-loading-1" } } }] },
            ],
            createdOn: 1534100321083,
            useFirstGroupAsInitialState: true,
        },
        "a-30": {
            id: "a-30",
            title: "Page done loading",
            actionItemGroups: [
                { actionItems: [{ id: "a-30-n-4", actionTypeId: "TRANSFORM_SCALE", config: { delay: 2000, easing: "", duration: 500, target: { id: "sportsonair-media|module-loading-1" }, yValue: 0, locked: false } }] },
            ],
            createdOn: 1534100321083,
            useFirstGroupAsInitialState: false,
        },
        "a-33": {
            id: "a-33",
            title: "Move Yewww",
            continuousParameterGroups: [
                {
                    id: "a-33-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-33-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|5340b3c5-7297-a3e7-6a74-9ddf780476be" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-33-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|5340b3c5-7297-a3e7-6a74-9ddf780476be" }, yValue: -25, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534360237970,
        },
        "a-34": {
            id: "a-34",
            title: "Move-bottom-piece",
            continuousParameterGroups: [
                {
                    id: "a-34-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-34-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|7730191f-a8a1-3d47-d31d-e58421e0eea4" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-34-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|967c2e63-59ed-eabe-3ad4-5ca72580f628" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-34-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|7730191f-a8a1-3d47-d31d-e58421e0eea4" }, yValue: 10, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-34-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|967c2e63-59ed-eabe-3ad4-5ca72580f628" }, yValue: -15, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534360353285,
        },
        "a-37": {
            id: "a-37",
            title: "hide modal",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-37-n", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" }, value: 0, unit: "" } },
                        {
                            id: "a-37-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-37-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 0, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4" }, yValue: -50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                { actionItems: [{ id: "a-37-n-4", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" } } }] },
            ],
            createdOn: 1518391116028,
            useFirstGroupAsInitialState: false,
        },
        "a-38": {
            id: "a-38",
            title: "Show modal",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-38-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" } } },
                        { id: "a-38-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" }, value: 1, unit: "" } },
                        {
                            id: "a-38-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4" }, xValue: 0.5, yValue: 0.5, locked: true },
                        },
                        {
                            id: "a-38-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "5b6f1240e5d6e25743ea5a63|22a61b36-4a26-3c61-1b14-e8861db13f58" }, yValue: -50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-38-n-5", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" } } },
                        {
                            id: "a-38-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-38-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df4" }, yValue: -50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-38-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|da42005d-6369-46bb-b6b1-401f0cef7df2" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1532997266330,
            useFirstGroupAsInitialState: true,
        },
        "a-39": {
            id: "a-39",
            title: "Move Deer Section",
            continuousParameterGroups: [
                {
                    id: "a-39-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-39-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|25a8e409-38e4-2899-311c-18f167b12e52" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-39-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|25a8e409-38e4-2899-311c-18f167b12e52" }, yValue: -10, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534794665768,
        },
        "a-40": {
            id: "a-40",
            title: "Move container",
            continuousParameterGroups: [
                {
                    id: "a-40-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-40-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|3ac66a79-758e-0166-d1fe-ead52e78587f" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-40-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|3ac66a79-758e-0166-d1fe-ead52e78587f" }, yValue: -5, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534794789842,
        },
        "a-41": {
            id: "a-41",
            title: "Move creative challenge",
            continuousParameterGroups: [
                {
                    id: "a-41-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-41-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|405b7178-b771-9a7c-920b-8def1d57783e" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-41-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|405b7178-b771-9a7c-920b-8def1d57783e" }, xValue: 1, yValue: 1, locked: true },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-41-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|405b7178-b771-9a7c-920b-8def1d57783e" }, yValue: -10, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-41-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|405b7178-b771-9a7c-920b-8def1d57783e" }, xValue: 1.25, yValue: 1.25, locked: true },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1534794884956,
        },
        "a-105": {
            id: "a-105",
            title: "Tab animation",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-105-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".tab-text", selectorGuids: ["a9c07913-1328-7e18-079c-6446c19c8f1b"] },
                                rValue: 67,
                                gValue: 245,
                                bValue: 242,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-105-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".activity-icon", selectorGuids: ["a4fbafaa-cb67-0d6f-13ca-fb1445ed97e2"] }, value: 1, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1534088157973,
            useFirstGroupAsInitialState: false,
        },
        "a-106": {
            id: "a-106",
            title: "Tab not active",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-106-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { useEventTarget: "CHILDREN", selector: ".tab-text", selectorGuids: ["a9c07913-1328-7e18-079c-6446c19c8f1b"] },
                                rValue: 67,
                                gValue: 245,
                                bValue: 242,
                                aValue: 0.42,
                            },
                        },
                        {
                            id: "a-106-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".activity-icon", selectorGuids: ["a4fbafaa-cb67-0d6f-13ca-fb1445ed97e2"] }, value: 0.42, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1534088157973,
            useFirstGroupAsInitialState: false,
        },
        "a-107": {
            id: "a-107",
            title: "Tab Pane Animation",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-107-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-107-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 0, unit: "" } },
                        { id: "a-107-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, value: 0, unit: "" } },
                        {
                            id: "a-107-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 30, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-107-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-107-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-107-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, value: 1, unit: "" } },
                        {
                            id: "a-107-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534088439801,
            useFirstGroupAsInitialState: true,
        },
        "a-108": {
            id: "a-108",
            title: "Tab pane close",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-108-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, value: 0, unit: "" } },
                        {
                            id: "a-108-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aa5b4391-640a-59d5-4791-7a54d221fa86" }, yValue: 30, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-108-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, value: 0, unit: "" } },
                        {
                            id: "a-108-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a92b764d-60da-33d0-e75a-88d7a86b7f83" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534088439801,
            useFirstGroupAsInitialState: false,
        },
        "a-109": {
            id: "a-109",
            title: "Image Generation Tab",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-109-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-109-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 0, unit: "" } },
                        {
                            id: "a-109-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-109-n-13", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-109-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415d" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-109-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415d" }, xValue: -6, yValue: -4, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-109-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415e" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-109-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415e" }, xValue: 3, yValue: -4, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-109-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415f" },
                                widthValue: 5,
                                heightValue: 5,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-109-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415f" }, xValue: -1, yValue: 3, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-109-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d4160" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-109-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-109-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-109-n-14",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-109-n-15", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: true,
        },
        "a-1019": {
            id: "a-1019",
            title: "Image Generation",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1019-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1019-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c78" }, value: 0, unit: "" } },
                        {
                            id: "a-1019-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1019-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a2df5361-a41e-5a1f-d9f7-62f7a7cf9c7a" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: false,
        },
        "a-1010": {
            id: "a-1010",
            title: "Content Classification Tab",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1010-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415d" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-1010-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415d" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-1010-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415e" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-1010-n-8",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415e" }, zValue: 45, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-1010-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415e" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-1010-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                locked: false,
                                target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415f" },
                                widthValue: 15,
                                heightValue: 3,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-1010-n-9",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415f" }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-1010-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415f" }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-1010-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d4160" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-1010-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d4160" }, zValue: 135, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-1010-n-11",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534088915898,
            useFirstGroupAsInitialState: false,
        },
        "a-1011": {
            id: "a-1011",
            title: "Mountain Biking",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1011-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1011-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 0, unit: "" } },
                        {
                            id: "a-1011-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1011-n-13", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1011-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1011-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|a2915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                        {
                            id: "a-1011-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a2915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 6, yValue: -11, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-1011-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|aece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-1011-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1011-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1011-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1011-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1011-n-9", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: true,
        },
        "a-1012": {
            id: "a-1012",
            title: "Mountain Biking close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1012-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1012-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a2915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 5, yValue: -7, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-1012-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|a2915fd4-af08-53fc-1418-f0324e56a688" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-1012-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, value: 0, unit: "" } },
                        {
                            id: "a-1012-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76c" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1012-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1012-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a5f2fa10-6a10-eca6-c3a9-50b9a460e76e" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: false,
        },
        "a-1014": {
            id: "a-1014",
            title: "Treasure hunting close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1014-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 1.5, yValue: 1.5, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1014-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534089579952,
            useFirstGroupAsInitialState: false,
        },
        "a-1013": {
            id: "a-1013",
            title: "Treasure hunting",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-1013-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true } },
                        { id: "a-1013-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 0, unit: "" } },
                        {
                            id: "a-1013-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-1013-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1013-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1013-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 1, yValue: 1, locked: true },
                        },
                        { id: "a-1013-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, value: 1, unit: "" } },
                        {
                            id: "a-1013-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1013-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1013-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        { id: "a-1013-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 1, unit: "" } },
                        {
                            id: "a-1013-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1534091588165,
            useFirstGroupAsInitialState: true,
        },
        "a-1020": {
            id: "a-1020",
            title: "Treasure hunting 2",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-1020-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true } },
                        { id: "a-1020-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, value: 0, unit: "" } },
                        {
                            id: "a-1020-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d6" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-1020-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1020-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a23af2c2-08e2-03dd-07d6-774efb34c3d8" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1020-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 1, yValue: 1, locked: true },
                        },
                        { id: "a-1020-n-7", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, value: 1, unit: "" } },
                        {
                            id: "a-1020-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534091588165,
            useFirstGroupAsInitialState: false,
        },
        "a-1015": {
            id: "a-1015",
            title: "Fishing",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-1015-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true } },
                        {
                            id: "a-1015-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1015-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, value: 0, unit: "" } },
                        { id: "a-1015-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, value: 0, unit: "" } },
                        {
                            id: "a-1015-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1015-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|aece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-1015-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-1015-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1015-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1015-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1015-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1015-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534091831381,
            useFirstGroupAsInitialState: true,
        },
        "a-1016": {
            id: "a-1016",
            title: "hide-fishing",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-1016-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1016-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                        {
                            id: "a-1016-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|ac7871cf-3e73-81a9-0b9a-fab201e1e66e" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1016-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1016-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501b" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1016-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1016-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a7fba847-a459-6250-3520-7be17691501d" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534091831381,
            useFirstGroupAsInitialState: false,
        },
        "a-1017": {
            id: "a-1017",
            title: "Show kayaking",
            actionItemGroups: [
                {
                    actionItems: [
                        { id: "a-1017-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|ae67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 0, yValue: 0, locked: true } },
                        {
                            id: "a-1017-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1017-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 0, unit: "" } },
                        {
                            id: "a-1017-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1017-n-12", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1017-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|ae67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-1017-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a48dc501-904e-e45f-8c94-50fa470d415c" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1017-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1017-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1017-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1017-n-10", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 1, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1017-n-13",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|aece5bda-2a5e-a4d5-9c22-6c602c7674d6" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1534092570128,
            useFirstGroupAsInitialState: true,
        },
        "a-1018": {
            id: "a-1018",
            title: "Hide Kayaking",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-1018-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "inOutBack", duration: 250, target: { id: "sportsonair-media|ae67fe02-30b2-3a7f-d3cf-c32083ff3040" }, xValue: 0, yValue: 0, locked: true },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1018-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1018-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e8488919f" }, value: 0, unit: "" } },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-1018-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "ease", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, yValue: 50, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-1018-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "sportsonair-media|a870dab1-1fdc-76a4-b86c-8c6e848891a1" }, value: 0, unit: "" } },
                    ],
                },
            ],
            createdOn: 1534092570128,
            useFirstGroupAsInitialState: false,
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});
