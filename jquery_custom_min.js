

!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return oe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ge.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        X.removeEventListener("DOMContentLoaded", a),
        e.removeEventListener("load", a),
        oe.ready()
    }
    function s() {
        this.expando = oe.expando + s.uid++
    }
    function c(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Oe, "-$&").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                Ee.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function u(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return oe.css(e, t, "")
        }
        , c = s(), u = n && n[3] || (oe.cssNumber[t] ? "" : "px"), d = (oe.cssNumber[t] || "px" !== u && +c) && ke.exec(oe.css(e, t));
        if (d && d[3] !== u) {
            u = u || d[3],
            n = n || [],
            d = +c || 1;
            do
                o = o || ".5",
                d /= o,
                oe.style(e, t, d + u);
            while (o !== (o = s() / c) && 1 !== o && --a)
        }
        return n && (d = +d || +c || 0,
        i = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = d,
        r.end = i)),
        i
    }
    function d(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }
    function l(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
    }
    function f(e, t, n, r, i) {
        for (var o, a, s, c, u, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
            if (o = e[g],
            o || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(h, o.nodeType ? [o] : o);
                else if (Ue.test(o)) {
                    for (a = a || p.appendChild(t.createElement("div")),
                    s = (Ne.exec(o) || ["", ""])[1].toLowerCase(),
                    c = Be[s] || Be._default,
                    a.innerHTML = c[1] + oe.htmlPrefilter(o) + c[2],
                    f = c[0]; f--; )
                        a = a.lastChild;
                    oe.merge(h, a.childNodes),
                    a = p.firstChild,
                    a.textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (p.textContent = "",
        g = 0; o = h[g++]; )
            if (r && oe.inArray(o, r) > -1)
                i && i.push(o);
            else if (u = oe.contains(o.ownerDocument, o),
            a = d(p.appendChild(o), "script"),
            u && l(a),
            n)
                for (f = 0; o = a[f++]; )
                    Re.test(o.type || "") && n.push(o);
        return p
    }
    function p() {
        return !0
    }
    function h() {
        return !1
    }
    function g() {
        try {
            return X.activeElement
        } catch (e) {}
    }
    function m(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                m(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        i === !1)
            i = h;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        i = function(e) {
            return oe().off(e),
            a.apply(this, arguments)
        },
        i.guid = a.guid || (a.guid = oe.guid++)),
        e.each(function() {
            oe.event.add(this, t, i, r, n)
        })
    }
    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function b(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function S(e, t) {
        var n, r, i, o, a, s, c, u;
        if (1 === t.nodeType) {
            if (Ae.hasData(e) && (o = Ae.access(e),
            a = Ae.set(t, o),
            u = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in u)
                    for (n = 0,
                    r = u[i].length; r > n; n++)
                        oe.event.add(t, i, u[i][n])
            }
            Ee.hasData(e) && (s = Ee.access(e),
            c = oe.extend({}, s),
            Ee.set(t, c))
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function x(e, t, n, r) {
        t = K.apply([], t);
        var i, o, a, s, c, u, l = 0, p = e.length, h = p - 1, g = t[0], m = oe.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !re.checkClone && Fe.test(g))
            return e.each(function(i) {
                var o = e.eq(i);
                m && (t[0] = g.call(this, i, o.html())),
                x(o, t, n, r)
            });
        if (p && (i = f(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (a = oe.map(d(i, "script"), y),
            s = a.length; p > l; l++)
                c = i,
                l !== h && (c = oe.clone(c, !0, !0),
                s && oe.merge(a, d(c, "script"))),
                n.call(e[l], c, l);
            if (s)
                for (u = a[a.length - 1].ownerDocument,
                oe.map(a, b),
                l = 0; s > l; l++)
                    c = a[l],
                    Re.test(c.type || "") && !Ae.access(c, "globalEval") && oe.contains(u, c) && (c.src ? oe._evalUrl && oe._evalUrl(c.src) : oe.globalEval(c.textContent.replace(He, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || oe.cleanData(d(r)),
            r.parentNode && (n && oe.contains(r.ownerDocument, r) && l(d(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function T(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body)
          , r = oe.css(n[0], "display");
        return n.detach(),
        r
    }
    function A(e) {
        var t = X
          , n = Ve[e];
        return n || (n = T(e, t),
        "none" !== n && n || (Ge = (Ge || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Ge[0].contentDocument,
        t.write(),
        t.close(),
        n = T(e, t),
        Ge.detach()),
        Ve[e] = n),
        n
    }
    function E(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || Ye(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
        n && !re.pixelMarginRight() && Xe.test(a) && Je.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o),
        void 0 !== a ? a + "" : a
    }
    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        if (e in rt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
            if (e = nt[n] + t,
            e in rt)
                return e
    }
    function j(e, t, n) {
        var r = ke.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += oe.css(e, n + _e[o], !0, i)),
            r ? ("content" === n && (a -= oe.css(e, "padding" + _e[o], !0, i)),
            "margin" !== n && (a -= oe.css(e, "border" + _e[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + _e[o], !0, i),
            "padding" !== n && (a += oe.css(e, "border" + _e[o] + "Width", !0, i)));
        return a
    }
    function _(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Ye(e)
          , a = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = E(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Xe.test(i))
                return i;
            r = a && (re.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function D(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
            r.style && (o[a] = Ae.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && De(r) && (o[a] = Ae.access(r, "olddisplay", A(r.nodeName)))) : (i = De(r),
            "none" === n && i || Ae.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function P(e, t, n, r, i) {
        return new P.prototype.init(e,t,n,r,i)
    }
    function N() {
        return e.setTimeout(function() {
            it = void 0
        }),
        it = oe.now()
    }
    function R(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = _e[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function B(e, t, n) {
        for (var r, i = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function U(e, t, n) {
        var r, i, o, a, s, c, u, d, l = this, f = {}, p = e.style, h = e.nodeType && De(e), g = Ae.get(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        c = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || c()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--,
                oe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        u = oe.css(e, "display"),
        d = "none" === u ? Ae.get(e, "olddisplay") || A(e.nodeName) : u,
        "inline" === d && "none" === oe.css(e, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        l.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            at.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                f[r] = g && g[r] || oe.style(e, r)
            } else
                u = void 0;
        if (oe.isEmptyObject(f))
            "inline" === ("none" === u ? A(e.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = Ae.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? oe(e).show() : l.done(function() {
                oe(e).hide()
            }),
            l.done(function() {
                var t;
                Ae.remove(e, "fxshow");
                for (t in f)
                    oe.style(e, t, f[t])
            });
            for (r in f)
                a = B(h ? g[r] : 0, r, l),
                r in g || (g[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = oe.camelCase(n),
            i = t[r],
            o = e[n],
            oe.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = oe.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function q(e, t, n) {
        var r, i, o = 0, a = q.prefilters.length, s = oe.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (i)
                return !1;
            for (var t = it || N(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; c > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && c ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {
                specialEasing: {},
                easing: oe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || N(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), d = u.props;
        for (M(d, u.opts.specialEasing); a > o; o++)
            if (r = q.prefilters[o].call(u, e, d, u.opts))
                return oe.isFunction(r.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(r.stop, r)),
                r;
        return oe.map(d, B, u),
        oe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        oe.fx.timer(oe.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, t, n, r) {
        function i(s) {
            var c;
            return o[s] = !0,
            oe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                i(u),
                !1)
            }),
            c
        }
        var o = {}
          , a = e === Et;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function F(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r),
        e
    }
    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    c.unshift(i);
                    break
                }
        if (c[0]in n)
            o = c[0];
        else {
            for (i in n) {
                if (!c[0] || e.converters[i + " " + c[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o),
        n[o]) : void 0
    }
    function H(e, t, n, r) {
        var i, o, a, s, c, u = {}, d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = d.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = o,
            o = d.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
                    if (a = u[c + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                d.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + c + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(e, t, n, r) {
        var i;
        if (oe.isArray(t))
            oe.each(t, function(t, i) {
                n || kt.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== oe.type(t))
            r(e, t);
        else
            for (i in t)
                G(e + "[" + i + "]", t[i], n, r)
    }
    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = []
      , X = e.document
      , Y = J.slice
      , K = J.concat
      , Q = J.push
      , Z = J.indexOf
      , ee = {}
      , te = ee.toString
      , ne = ee.hasOwnProperty
      , re = {}
      , ie = "2.2.4"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , se = /^-ms-/
      , ce = /-([\da-z])/gi
      , ue = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Q,
        sort: J.sort,
        splice: J.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || oe.isFunction(a) || (a = {}),
        s === c && (a = this,
        s--); c > s; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    r = e[t],
                    a !== r && (u && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1,
                    o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {},
                    a[t] = oe.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    },
    oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = oe.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"),
            t.text = e,
            X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ce, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o),
                r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e))
                for (i = e.length; i > a; a++)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            else
                for (a in e)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            return K.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            oe.isFunction(e) ? (r = Y.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(Y.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || oe.guid++,
            i) : void 0
        },
        now: Date.now,
        support: re
    }),
    "function" == typeof Symbol && (oe.fn[Symbol.iterator] = J[Symbol.iterator]),
    oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var de = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, c, u, l, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!r && ((t ? t.ownerDocument || t : z) !== D && _(t),
            t = t || D,
            N)) {
                if (11 !== g && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(i)) && M(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return Q.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (w.qsa && !H[e + " "] && (!R || !R.test(e))) {
                    if (1 !== g)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = q),
                        l = A(e),
                        o = l.length,
                        c = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            l[o] = c + " " + f(l[o]);
                        p = l.join(","),
                        h = ye.test(e) && d(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Q.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === q && t.removeAttribute("id")
                        }
                }
            }
            return I(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[q] = !0,
            e
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function l() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = L++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, c, u, d = [$, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[q] || (t[q] = {}),
                            c = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = c[r]) && s[0] === $ && s[1] === o)
                                return d[2] = s[2];
                            if (c[r] = d,
                            d[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; c > s; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[q] && (i = v(i)),
            o && !o[q] && (o = v(o, a)),
            r(function(r, a, s, c) {
                var u, d, l, f = [], p = [], h = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : m(v, f, e, s, c), b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, c),
                i)
                    for (u = m(b, p),
                    i(u, [], s, c),
                    d = u.length; d--; )
                        (l = u[d]) && (b[p[d]] = !(y[p[d]] = l));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            d = b.length; d--; )
                                (l = b[d]) && u.push(y[d] = l);
                            o(null, b = [], u, c)
                        }
                        for (d = b.length; d--; )
                            (l = b[d]) && (u = o ? ee(r, l) : f[d]) > -1 && (r[u] = !(a[u] = l))
                    }
                } else
                    b = m(b === a ? b.splice(h, b.length) : b),
                    o ? o(null, a, b, c) : Q.apply(a, b)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = p(function(e) {
                return e === t
            }, a, !0), u = p(function(e) {
                return ee(t, e) > -1
            }, a, !0), d = [function(e, n, r) {
                var i = !o && (r || n !== O) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; i > s; s++)
                if (n = x.relative[e[s].type])
                    d = [p(h(d), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches),
                    n[q]) {
                        for (r = ++s; i > r && !x.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(d), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    d.push(n)
                }
            return h(d)
        }
        function b(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, c, u) {
                var d, l, f, p = 0, h = "0", g = r && [], v = [], y = O, b = r || o && x.find.TAG("*", u), S = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (O = a === D || a || u); h !== w && null != (d = b[h]); h++) {
                    if (o && d) {
                        for (l = 0,
                        a || d.ownerDocument === D || (_(d),
                        s = !N); f = e[l++]; )
                            if (f(d, a || D, s)) {
                                c.push(d);
                                break
                            }
                        u && ($ = S)
                    }
                    i && ((d = !f && d) && p--,
                    r && g.push(d))
                }
                if (p += h,
                i && h !== p) {
                    for (l = 0; f = n[l++]; )
                        f(g, v, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = Y.call(c));
                        v = m(v)
                    }
                    Q.apply(c, v),
                    u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                }
                return u && ($ = S,
                O = y),
                g
            };
            return i ? r(a) : a
        }
        var S, w, x, C, T, A, E, I, O, j, k, _, D, P, N, R, B, U, M, q = "sizzle" + 1 * new Date, z = e.document, $ = 0, L = 0, F = n(), W = n(), H = n(), G = function(e, t) {
            return e === t && (k = !0),
            0
        }, V = 1 << 31, J = {}.hasOwnProperty, X = [], Y = X.pop, K = X.push, Q = X.push, Z = X.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), le = new RegExp(oe), fe = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, Se = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, xe = function() {
            _()
        };
        try {
            Q.apply(X = Z.call(z.childNodes), z.childNodes),
            X[z.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: X.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        },
        _ = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : z;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r,
            P = D.documentElement,
            N = !T(D),
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(D.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = me.test(D.getElementsByClassName),
            w.getById = i(function(e) {
                return P.appendChild(e).id = q,
                !D.getElementsByName || !D.getElementsByName(q).length
            }),
            w.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(Se, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(Se, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            x.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }
            ,
            B = [],
            R = [],
            (w.qsa = me.test(D.querySelectorAll)) && (i(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || R.push("~="),
                e.querySelectorAll(":checked").length || R.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || R.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                R.push(",.*:")
            })),
            (w.matchesSelector = me.test(U = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = U.call(e, "div"),
                U.call(e, "[s!='']:x"),
                B.push("!=", oe)
            }),
            R = R.length && new RegExp(R.join("|")),
            B = B.length && new RegExp(B.join("|")),
            t = me.test(P.compareDocumentPosition),
            M = t || me.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            G = t ? function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === z && M(z, e) ? -1 : t === D || t.ownerDocument === z && M(z, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return k = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], c = [t];
                if (!i || !o)
                    return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    c.unshift(n);
                for (; s[r] === c[r]; )
                    r++;
                return r ? a(s[r], c[r]) : s[r] === z ? -1 : c[r] === z ? 1 : 0
            }
            ,
            D) : D
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && _(e),
            n = n.replace(de, "='$1']"),
            w.matchesSelector && N && !H[n + " "] && (!B || !B.test(n)) && (!R || !R.test(n)))
                try {
                    var r = U.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, D, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && _(e),
            M(e, t)
        },
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && _(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && J.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : w.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (k = !w.detectDuplicates,
            j = !w.sortStable && e.slice(0),
            e.sort(G),
            k) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return j = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        },
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Se, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Se, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Se, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, c) {
                        var u, d, l, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (f = m,
                                l = f[q] || (f[q] = {}),
                                d = l[f.uniqueID] || (l[f.uniqueID] = {}),
                                u = d[e] || [],
                                p = u[0] === $ && u[1],
                                b = p && u[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        d[e] = [$, p, b];
                                        break
                                    }
                            } else if (y && (f = t,
                            l = f[q] || (f[q] = {}),
                            d = l[f.uniqueID] || (l[f.uniqueID] = {}),
                            u = d[e] || [],
                            p = u[0] === $ && u[1],
                            b = p),
                            b === !1)
                                for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (l = f[q] || (f[q] = {}),
                                d = l[f.uniqueID] || (l[f.uniqueID] = {}),
                                d[e] = [$, b]),
                                f !== t)); )
                                    ;
                            return b -= i,
                            b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = ee(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(se, "$1"));
                    return i[q] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(Se, we),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(Se, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[S] = s(S);
        for (S in {
            submit: !0,
            reset: !0
        })
            x.pseudos[S] = c(S);
        return l.prototype = x.filters = x.pseudos,
        x.setFilters = new l,
        A = t.tokenize = function(e, n) {
            var r, i, o, a, s, c, u, d = W[e + " "];
            if (d)
                return n ? 0 : d.slice(0);
            for (s = e,
            c = [],
            u = x.preFilter; s; ) {
                r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                c.push(o = [])),
                r = !1,
                (i = ue.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length));
                for (a in x.filter)
                    !(i = pe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, c).slice(0)
        },
        E = t.compile = function(e, t) {
            var n, r = [], i = [], o = H[e + " "];
            if (!o) {
                for (t || (t = A(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[q] ? r.push(o) : i.push(o);
                o = H(e, b(i, r)),
                o.selector = e
            }
            return o
        },
        I = t.select = function(e, t, n, r) {
            var i, o, a, s, c, u = "function" == typeof e && e, l = !r && A(e = u.selector || e);
            if (n = n || [],
            1 === l.length) {
                if (o = l[0] = l[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && N && x.relative[o[1].type]) {
                    if (t = (x.find.ID(a.matches[0].replace(Se, we), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !x.relative[s = a.type]); )
                    if ((c = x.find[s]) && (r = c(a.matches[0].replace(Se, we), ye.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && f(o),
                        !e)
                            return Q.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || E(e, l))(r, t, !N, n, !t || ye.test(e) && d(t.parentNode) || t),
            n
        },
        w.sortStable = q.split("").sort(G).join("") === q,
        w.detectDuplicates = !!k,
        _(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    oe.find = de,
    oe.expr = de.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.uniqueSort = oe.unique = de.uniqueSort,
    oe.text = de.getText,
    oe.isXMLDoc = de.isXML,
    oe.contains = de.contains;
    var le = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && oe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , fe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , pe = oe.expr.match.needsContext
      , he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , ge = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    oe.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (oe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = oe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || me,
        "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof oe ? t[0] : t,
                oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : X, !0)),
                he.test(r[1]) && oe.isPlainObject(t))
                    for (r in t)
                        oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = X.getElementById(r[2]),
            i && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = X,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        oe.makeArray(e, this))
    }
    ;
    ye.prototype = oe.fn,
    me = oe(X);
    var be = /^(?:parents|prev(?:Until|All))/
      , Se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return le(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return le(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return le(e, "nextSibling")
        },
        prevAll: function(e) {
            return le(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return le(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return le(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = oe.filter(r, i)),
            this.length > 1 && (Se[e] || oe.uniqueSort(i),
            be.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, r, i, a = [], s = [], c = -1, u = function() {
            for (i = e.once,
            r = t = !0; s.length; c = -1)
                for (n = s.shift(); ++c < a.length; )
                    a[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (a = n ? [] : "")
        }, d = {
            add: function() {
                return a && (n && !t && (c = a.length - 1,
                s.push(n)),
                function t(n) {
                    oe.each(n, function(n, r) {
                        oe.isFunction(r) ? e.unique && d.has(r) || a.push(r) : r && r.length && "string" !== oe.type(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return oe.each(arguments, function(e, t) {
                    for (var n; (n = oe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        c >= n && c--
                }),
                this
            },
            has: function(e) {
                return e ? oe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return i = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return i = s = [],
                n || (a = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return d
    },
    oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return oe.Deferred(function(n) {
                        oe.each(t, function(t, o) {
                            var a = oe.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            oe.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0, c = 1 === s ? e : oe.Deferred(), u = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? Y.call(arguments) : i,
                    r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); a > i; i++)
                    o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, t)).done(u(i, r, o)).fail(c.reject) : --s;
            return s || c.resolveWith(r, o),
            c.promise()
        }
    });
    var xe;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    },
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0,
            e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(X, [oe]),
            oe.fn.triggerHandler && (oe(X).triggerHandler("ready"),
            oe(X).off("ready"))))
        }
    }),
    oe.ready.promise = function(t) {
        return xe || (xe = oe.Deferred(),
        "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(oe.ready) : (X.addEventListener("DOMContentLoaded", a),
        e.addEventListener("load", a))),
        xe.promise(t)
    },
    oe.ready.promise();
    var Ce = function(e, t, n, r, i, o, a) {
        var s = 0
          , c = e.length
          , u = null == n;
        if ("object" === oe.type(n)) {
            i = !0;
            for (s in n)
                Ce(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        oe.isFunction(r) || (a = !0),
        u && (a ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(oe(e), n)
        }
        )),
        t))
            for (; c > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
    }
      , Te = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    s.uid = 1,
    s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!Te(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[t] = n;
            else
                for (r in t)
                    i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
            void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t),
                    t in o ? r = [t, i] : (r = i,
                    r = r in o ? [r] : r.match(we) || [])),
                    n = r.length;
                    for (; n--; )
                        delete o[r[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ae = new s
      , Ee = new s
      , Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Oe = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ee.hasData(e) || Ae.hasData(e)
        },
        data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function(e, t) {
            Ee.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ae.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ae.remove(e, t)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Ee.get(o),
                1 === o.nodeType && !Ae.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name,
                        0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)),
                        c(o, r, i[r])));
                    Ae.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Ee.set(this, e)
            }) : Ce(this, function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = Ee.get(o, e) || Ee.get(o, e.replace(Oe, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (r = oe.camelCase(e),
                    n = Ee.get(o, r),
                    void 0 !== n)
                        return n;
                    if (n = c(o, r, void 0),
                    void 0 !== n)
                        return n
                } else
                    r = oe.camelCase(e),
                    this.each(function() {
                        var n = Ee.get(this, r);
                        Ee.set(this, r, t),
                        e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ee.remove(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = Ae.get(e, t),
            n && (!r || oe.isArray(n) ? r = Ae.access(e, t, oe.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = oe._queueHooks(e, t)
              , a = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ae.get(e, n) || Ae.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Ae.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = oe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = Ae.get(o[a], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ke = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$","i")
      , _e = ["Top", "Right", "Bottom", "Left"]
      , De = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , Pe = /^(?:checkbox|radio)$/i
      , Ne = /<([\w:-]+)/
      , Re = /^$|\/(?:java|ecma)script/i
      , Be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Be.optgroup = Be.option,
    Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead,
    Be.th = Be.td;
    var Ue = /<|&#?\w+;/;
    !function() {
        var e = X.createDocumentFragment()
          , t = e.appendChild(X.createElement("div"))
          , n = X.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/
      , qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ze = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, c, u, d, l, f, p, h, g, m = Ae.get(e);
            if (m)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = oe.guid++),
                (c = m.events) || (c = m.events = {}),
                (a = m.handle) || (a = m.handle = function(t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(we) || [""],
                u = t.length; u--; )
                    s = ze.exec(t[u]) || [],
                    p = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (l = oe.event.special[p] || {},
                    p = (i ? l.delegateType : l.bindType) || p,
                    l = oe.event.special[p] || {},
                    d = oe.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && oe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (f = c[p]) || (f = c[p] = [],
                    f.delegateCount = 0,
                    l.setup && l.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)),
                    l.add && (l.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    oe.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, u, d, l, f, p, h, g, m = Ae.hasData(e) && Ae.get(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(we) || [""],
                u = t.length; u--; )
                    if (s = ze.exec(t[u]) || [],
                    p = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (l = oe.event.special[p] || {},
                        p = (r ? l.delegateType : l.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            d = f[o],
                            !i && g !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (f.splice(o, 1),
                            d.selector && f.delegateCount--,
                            l.remove && l.remove.call(e, d));
                        a && !f.length && (l.teardown && l.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, p, m.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            oe.event.remove(e, p + t[u], n, r, !0);
                oe.isEmptyObject(c) && Ae.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, a = [], s = Y.call(arguments), c = (Ae.get(this, "events") || {})[e.type] || [], u = oe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, c),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        n = 0; s > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(c) > -1 : oe.find(i, this, null, [c]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new oe.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = X),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    },
    oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || oe.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Le = /<script|<style|<link/i
      , Fe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , We = /^true\/(.*)/
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace($e, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), c = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = d(s),
                o = d(e),
                r = 0,
                i = o.length; i > r; r++)
                    w(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || d(e),
                    a = a || d(s),
                    r = 0,
                    i = o.length; i > r; r++)
                        S(o[r], a[r]);
                else
                    S(e, s);
            return a = d(s, "script"),
            a.length > 0 && l(a, !c && d(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Te(n)) {
                    if (t = n[Ae.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Ae.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }),
    oe.fn.extend({
        domManip: x,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return x(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return x(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return x(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return x(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(d(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !Be[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (oe.cleanData(d(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return x(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(d(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, a = 0; o >= a; a++)
                n = a === o ? this : this.clone(!0),
                oe(i[a])[t](n),
                Q.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ge, Ve = {
        HTML: "block",
        BODY: "block"
    }, Je = /^margin/, Xe = new RegExp("^(" + je + ")(?!px)[a-z%]+$","i"), Ye = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Ke = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }, Qe = X.documentElement;
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            s.innerHTML = "",
            Qe.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            r = "4px" === t.width,
            s.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Qe.removeChild(a)
        }
        var n, r, i, o, a = X.createElement("div"), s = X.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        re.clearCloneStyle = "content-box" === s.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(s),
        oe.extend(re, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(X.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                Qe.appendChild(a),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Qe.removeChild(a),
                s.removeChild(n),
                t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/
      , et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , nt = ["Webkit", "O", "Moz", "ms"]
      , rt = X.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = oe.camelCase(t), c = e.style;
                return t = oe.cssProps[s] || (oe.cssProps[s] = O(s) || s),
                a = oe.cssHooks[t] || oe.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : (o = typeof n,
                "string" === o && (i = ke.exec(n)) && i[1] && (n = u(e, t, i),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[s] ? "" : "px")),
                re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = O(s) || s),
            a = oe.cssHooks[t] || oe.cssHooks[s],
            a && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = E(e, t, r)),
            "normal" === i && t in tt && (i = tt[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
    oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, et, function() {
                    return _(e, t, r)
                }) : _(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && Ye(e), a = r && k(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return a && (i = ke.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = oe.css(e, t)),
                j(e, n, a)
            }
        }
    }),
    oe.cssHooks.marginLeft = I(re.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    oe.cssHooks.marginRight = I(re.reliableMarginRight, function(e, t) {
        return t ? Ke(e, {
            display: "inline-block"
        }, E, [e, "marginRight"]) : void 0
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Je.test(e) || (oe.cssHooks[e + t].set = j)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (oe.isArray(t)) {
                    for (r = Ye(e),
                    i = t.length; i > a; a++)
                        o[t[a]] = oe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }),
    oe.Tween = P,
    P.prototype = {
        constructor: P,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || oe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
        }
    },
    P.prototype.init.prototype = P.prototype,
    P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    oe.fx = P.prototype.init,
    oe.fx.step = {};
    var it, ot, at = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
    oe.Animation = oe.extend(q, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, ke.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(we);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                q.tweeners[n] = q.tweeners[n] || [],
                q.tweeners[n].unshift(t)
        },
        prefilters: [U],
        prefilter: function(e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default,
        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue)
        },
        r
    },
    oe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(De).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = oe.isEmptyObject(e)
              , o = oe.speed(t, n, r)
              , a = function() {
                var t = q(this, oe.extend({}, e), o);
                (i || Ae.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = oe.timers
                  , a = Ae.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && st.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || oe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Ae.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = oe.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                oe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i)
        }
    }),
    oe.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        oe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = 0, n = oe.timers;
        for (it = oe.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(),
        it = void 0
    },
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    },
    oe.fx.interval = 13,
    oe.fx.start = function() {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    },
    oe.fx.stop = function() {
        e.clearInterval(ot),
        ot = null
    },
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e = X.createElement("input")
          , t = X.createElement("select")
          , n = t.appendChild(X.createElement("option"));
        e.type = "checkbox",
        re.checkOn = "" !== e.value,
        re.optSelected = n.selected,
        t.disabled = !0,
        re.optDisabled = !n.disabled,
        e = X.createElement("input"),
        e.value = "t",
        e.type = "radio",
        re.radioValue = "t" === e.value
    }();
    var ct, ut = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || oe.find.attr;
        ut[t] = function(e, t, r) {
            var i, o;
            return r || (o = ut[t],
            ut[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            ut[t] = o),
            i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i
      , lt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }),
    oe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t,
                i = oe.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    re.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[c++]; )
                    if (i = z(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = oe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[c++]; )
                    if (i = z(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = oe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = oe(this),
                    o = e.match(we) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = z(this),
                    t && Ae.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ae.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + z(n) + " ").replace(ft, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var pt = /\r/g
      , ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = oe.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e,
                null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
            "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)) : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, c = 0 > i ? s : o ? i : 0; s > c; c++)
                        if (n = r[c],
                        (n.selected || c === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--; )
                        r = i[a],
                        (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        },
        re.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, c, u, d, l, f = [r || X], p = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || X,
            3 !== r.nodeType && 8 !== r.nodeType && !gt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            t = t[oe.expando] ? t : new oe.Event(p,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : oe.makeArray(n, [t]),
            l = oe.event.special[p] || {},
            i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !oe.isWindow(r)) {
                    for (c = l.delegateType || p,
                    gt.test(c + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                        s = a;
                    s === (r.ownerDocument || X) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? c : l.bindType || p,
                    d = (Ae.get(a, "events") || {})[t.type] && Ae.get(a, "handle"),
                    d && d.apply(a, n),
                    d = u && a[u],
                    d && d.apply && Te(a) && (t.result = d.apply(a, n),
                    t.result === !1 && t.preventDefault());
                return t.type = p,
                i || t.isDefaultPrevented() || l._default && l._default.apply(f.pop(), n) !== !1 || !Te(r) || u && oe.isFunction(r[p]) && !oe.isWindow(r) && (s = r[u],
                s && (r[u] = null),
                oe.event.triggered = p,
                r[p](),
                oe.event.triggered = void 0,
                s && (r[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t)
        }
    }),
    oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    re.focusin = "onfocusin"in e,
    re.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Ae.access(r, t);
                i || r.addEventListener(e, n, !0),
                Ae.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Ae.access(r, t) - 1;
                i ? Ae.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Ae.remove(r, t))
            }
        }
    });
    var mt = e.location
      , vt = oe.now()
      , yt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t),
        n
    }
    ;
    var bt = /#.*$/
      , St = /([?&])_=[^&]*/
      , wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ct = /^(?:GET|HEAD)$/
      , Tt = /^\/\//
      , At = {}
      , Et = {}
      , It = "*/".concat("*")
      , Ot = X.createElement("a");
    Ot.href = mt.href,
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: xt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? F(F(e, oe.ajaxSettings), t) : F(oe.ajaxSettings, e)
        },
        ajaxPrefilter: $(At),
        ajaxTransport: $(Et),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, l, y, b, w, C = n;
                2 !== S && (S = 2,
                c && e.clearTimeout(c),
                i = void 0,
                a = s || "",
                x.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && 300 > t || 304 === t,
                r && (b = W(f, x, r)),
                b = H(f, b, x, u),
                u ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (oe.lastModified[o] = w),
                w = x.getResponseHeader("etag"),
                w && (oe.etag[o] = w)),
                204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                l = b.data,
                y = b.error,
                u = !y)) : (y = C,
                !t && C || (C = "error",
                0 > t && (t = 0))),
                x.status = t,
                x.statusText = (n || C) + "",
                u ? g.resolveWith(p, [l, C, x]) : g.rejectWith(p, [x, C, y]),
                x.statusCode(v),
                v = void 0,
                d && h.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? l : y]),
                m.fireWith(p, [x, C]),
                d && (h.trigger("ajaxComplete", [x, f]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, c, u, d, l, f = oe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? oe(p) : oe.event, g = oe.Deferred(), m = oe.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, S = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === S) {
                        if (!s)
                            for (s = {}; t = wt.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === S ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return S || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return S || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > S)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(x).complete = m.add,
            x.success = x.done,
            x.error = x.fail,
            f.url = ((t || f.url || mt.href) + "").replace(bt, "").replace(Tt, mt.protocol + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(we) || [""],
            null == f.crossDomain) {
                u = X.createElement("a");
                try {
                    u.href = f.url,
                    u.href = u.href,
                    f.crossDomain = Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional)),
            L(At, f, n, x),
            2 === S)
                return x;
            d = oe.event && f.global,
            d && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Ct.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (yt.test(o) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = St.test(o) ? o.replace(St, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)),
            f.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", f.contentType),
            x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + It + "; q=0.01" : "") : f.accepts["*"]);
            for (l in f.headers)
                x.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (f.beforeSend.call(p, x, f) === !1 || 2 === S))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](f[l]);
            if (i = L(Et, f, n, x)) {
                if (x.readyState = 1,
                d && h.trigger("ajaxSend", [x, f]),
                2 === S)
                    return x;
                f.async && f.timeout > 0 && (c = e.setTimeout(function() {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    S = 1,
                    i.send(y, r)
                } catch (e) {
                    if (!(2 > S))
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, i) {
            return oe.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, oe.isPlainObject(e) && e))
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    },
    oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    },
    oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var jt = /%20/g
      , kt = /\[\]$/
      , _t = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , Pt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, i);
        return r.join("&").replace(jt, "+")
    },
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Pt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            }).get()
        }
    }),
    oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Nt = {
        0: 200,
        1223: 204
    }
      , Rt = oe.ajaxSettings.xhr();
    re.cors = !!Rt && "withCredentials"in Rt,
    re.ajax = Rt = !!Rt,
    oe.ajaxTransport(function(t) {
        var n, r;
        return re.cors || Rt && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (a in t.xhrFields)
                        s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i)
                    s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Nt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }
                ,
                s.onload = n(),
                r = s.onerror = n("error"),
                void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }
                ,
                n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n)
                        throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    X.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = []
      , Ut = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || oe.expando + "_" + vt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(Ut, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return a || oe.error(i + " was not called"),
            a[0]
        },
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            a = arguments
        },
        r.always(function() {
            void 0 === o ? oe(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            Bt.push(i)),
            a && oe.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || X;
        var r = he.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = f([e], t, i),
        i && i.length && oe(i).remove(),
        oe.merge([], r.childNodes))
    }
    ;
    var Mt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Mt)
            return Mt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = oe.trim(e.slice(s)),
        e = e.slice(0, s)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    },
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    },
    oe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, u, d = oe.css(e, "position"), l = oe(e), f = {};
            "static" === d && (e.style.position = "relative"),
            s = l.offset(),
            o = oe.css(e, "top"),
            c = oe.css(e, "left"),
            u = ("absolute" === d || "fixed" === d) && (o + c).indexOf("auto") > -1,
            u ? (r = l.position(),
            a = r.top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(c) || 0),
            oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : l.css(f)
        }
    },
    oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            oe.contains(t, r) ? (i = r.getBoundingClientRect(),
            n = V(o),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (r = e.offset()),
                r.top += oe.css(e[0], "borderTopWidth", !0),
                r.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Qe
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(r) {
            return Ce(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = I(re.pixelPosition, function(e, n) {
            return n ? (n = E(e, t),
            Xe.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ce(this, function(t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var qt = e.jQuery
      , zt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = zt),
        t && e.jQuery === oe && (e.jQuery = qt),
        oe
    },
    t || (e.jQuery = e.$ = oe),
    oe
}),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
        e(n),
        n
    }
    : e(jQuery)
}(function(e) {
    "use strict";
    function t(e, n) {
        if (!(this instanceof t)) {
            var r = new t(e,n);
            return r.open(),
            r
        }
        this.id = t.id++,
        this.setup(e, n),
        this.chainCallbacks(t._callbackChain)
    }
    function n(e, t) {
        var n = {};
        for (var r in e)
            r in t && (n[r] = e[r],
            delete e[r]);
        return n
    }
    function r(e, t) {
        var n = {}
          , r = new RegExp("^" + t + "([A-Z])(.*)");
        for (var i in e) {
            var o = i.match(r);
            if (o) {
                var a = (o[1] + o[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                n[a] = e[i]
            }
        }
        return n
    }
    if ("undefined" == typeof e)
        return void ("console"in window && void 0);
    if (e.fn.jquery.match(/-ajax/))
        return void ("console"in window && void 0);
    var i = []
      , o = function(t) {
        return i = e.grep(i, function(e) {
            return e !== t && e.$instance.closest("body").length > 0
        })
    }
      , a = {
        allow: 1,
        allowfullscreen: 1,
        frameborder: 1,
        height: 1,
        longdesc: 1,
        marginheight: 1,
        marginwidth: 1,
        mozallowfullscreen: 1,
        name: 1,
        referrerpolicy: 1,
        sandbox: 1,
        scrolling: 1,
        src: 1,
        srcdoc: 1,
        style: 1,
        webkitallowfullscreen: 1,
        width: 1
    }
      , s = {
        keyup: "onKeyUp",
        resize: "onResize"
    }
      , c = function(n) {
        e.each(t.opened().reverse(), function() {
            return n.isDefaultPrevented() || !1 !== this[s[n.type]](n) ? void 0 : (n.preventDefault(),
            n.stopPropagation(),
            !1)
        })
    }
      , u = function(n) {
        if (n !== t._globalHandlerInstalled) {
            t._globalHandlerInstalled = n;
            var r = e.map(s, function(e, n) {
                return n + "." + t.prototype.namespace
            }).join(" ");
            e(window)[n ? "on" : "off"](r, c)
        }
    };
    t.prototype = {
        constructor: t,
        namespace: "featherlight",
        targetAttr: "data-featherlight",
        variant: null,
        resetCss: !1,
        background: null,
        openTrigger: "click",
        closeTrigger: "click",
        filter: null,
        root: "body",
        openSpeed: 250,
        closeSpeed: 250,
        closeOnClick: "background",
        closeOnEsc: !0,
        closeIcon: "&#10005;",
        loading: "",
        persist: !1,
        otherClose: null,
        beforeOpen: e.noop,
        beforeContent: e.noop,
        beforeClose: e.noop,
        afterOpen: e.noop,
        afterContent: e.noop,
        afterClose: e.noop,
        onKeyUp: e.noop,
        onResize: e.noop,
        type: null,
        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
        setup: function(t, n) {
            "object" != typeof t || t instanceof e != 0 || n || (n = t,
            t = void 0);
            var r = e.extend(this, n, {
                target: t
            })
              , i = r.resetCss ? r.namespace + "-reset" : r.namespace
              , o = e(r.background || ['<div class="' + i + "-loading " + i + '">', '<div class="' + i + '-content">', '<button class="' + i + "-close-icon " + r.namespace + '-close" aria-label="Close">', r.closeIcon, "</button>", '<div class="' + r.namespace + '-inner">' + r.loading + "</div>", "</div>", "</div>"].join(""))
              , a = "." + r.namespace + "-close" + (r.otherClose ? "," + r.otherClose : "");
            return r.$instance = o.clone().addClass(r.variant),
            r.$instance.on(r.closeTrigger + "." + r.namespace, function(t) {
                if (!t.isDefaultPrevented()) {
                    var n = e(t.target);
                    ("background" === r.closeOnClick && n.is("." + r.namespace) || "anywhere" === r.closeOnClick || n.closest(a).length) && (r.close(t),
                    t.preventDefault())
                }
            }),
            this
        },
        getContent: function() {
            if (this.persist !== !1 && this.$content)
                return this.$content;
            var t = this
              , n = this.constructor.contentFilters
              , r = function(e) {
                return t.$currentTarget && t.$currentTarget.attr(e)
            }
              , i = r(t.targetAttr)
              , o = t.target || i || ""
              , a = n[t.type];
            if (!a && o in n && (a = n[o],
            o = t.target && i),
            o = o || r("href") || "",
            !a)
                for (var s in n)
                    t[s] && (a = n[s],
                    o = t[s]);
            if (!a) {
                var c = o;
                if (o = null,
                e.each(t.contentFilters, function() {
                    return a = n[this],
                    a.test && (o = a.test(c)),
                    !o && a.regex && c.match && c.match(a.regex) && (o = c),
                    !o
                }),
                !o)
                    return "console"in window && void 0,
                    !1
            }
            return a.process.call(t, o)
        },
        setContent: function(t) {
            return this.$instance.removeClass(this.namespace + "-loading"),
            this.$instance.toggleClass(this.namespace + "-iframe", t.is("iframe")),
            this.$instance.find("." + this.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(e.contains(this.$instance[0], t[0]) ? "" : t),
            this.$content = t.addClass(this.namespace + "-inner"),
            this
        },
        open: function(t) {
            var n = this;
            if (n.$instance.hide().appendTo(n.root),
            !(t && t.isDefaultPrevented() || n.beforeOpen(t) === !1)) {
                t && t.preventDefault();
                var r = n.getContent();
                if (r)
                    return i.push(n),
                    u(!0),
                    n.$instance.fadeIn(n.openSpeed),
                    n.beforeContent(t),
                    e.when(r).always(function(e) {
                        e && (n.setContent(e),
                        n.afterContent(t))
                    }).then(n.$instance.promise()).done(function() {
                        n.afterOpen(t)
                    })
            }
            return n.$instance.detach(),
            e.Deferred().reject().promise()
        },
        close: function(t) {
            var n = this
              , r = e.Deferred();
            return n.beforeClose(t) === !1 ? r.reject() : (0 === o(n).length && u(!1),
            n.$instance.fadeOut(n.closeSpeed, function() {
                n.$instance.detach(),
                n.afterClose(t),
                r.resolve()
            })),
            r.promise()
        },
        resize: function(e, t) {
            if (e && t) {
                this.$content.css("width", "").css("height", "");
                var n = Math.max(e / (this.$content.parent().width() - 1), t / (this.$content.parent().height() - 1));
                n > 1 && (n = t / Math.floor(t / n),
                this.$content.css("width", "" + e / n + "px").css("height", "" + t / n + "px"))
            }
        },
        chainCallbacks: function(t) {
            for (var n in t)
                this[n] = e.proxy(t[n], this, e.proxy(this[n], this))
        }
    },
    e.extend(t, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: t.prototype,
        contentFilters: {
            jquery: {
                regex: /^[#.]\w/,
                test: function(t) {
                    return t instanceof e && t
                },
                process: function(t) {
                    return this.persist !== !1 ? e(t) : e(t).clone(!0)
                }
            },
            image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function(t) {
                    var n = this
                      , r = e.Deferred()
                      , i = new Image
                      , o = e('<img src="' + t + '" alt="" class="' + n.namespace + '-image" />');
                    return i.onload = function() {
                        o.naturalWidth = i.width,
                        o.naturalHeight = i.height,
                        r.resolve(o)
                    }
                    ,
                    i.onerror = function() {
                        r.reject(o)
                    }
                    ,
                    i.src = t,
                    r.promise()
                }
            },
            html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function(t) {
                    return e(t)
                }
            },
            ajax: {
                regex: /./,
                process: function(t) {
                    var n = e.Deferred()
                      , r = e("<div></div>").load(t, function(e, t) {
                        "error" !== t && n.resolve(r.contents()),
                        n.reject()
                    });
                    return n.promise()
                }
            },
            iframe: {
                process: function(t) {
                    var i = new e.Deferred
                      , o = e("<iframe/>")
                      , s = r(this, "iframe")
                      , c = n(s, a);
                    return o.hide().attr("src", t).attr(c).css(s).on("load", function() {
                        i.resolve(o.show())
                    }).appendTo(this.$instance.find("." + this.namespace + "-content")),
                    i.promise()
                }
            },
            text: {
                process: function(t) {
                    return e("<div>", {
                        text: t
                    })
                }
            }
        },
        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
        readElementConfig: function(t, n) {
            var r = this
              , i = new RegExp("^data-" + n + "-(.*)")
              , o = {};
            return t && t.attributes && e.each(t.attributes, function() {
                var t = this.name.match(i);
                if (t) {
                    var n = this.value
                      , a = e.camelCase(t[1]);
                    if (e.inArray(a, r.functionAttributes) >= 0)
                        n = new Function(n);
                    else
                        try {
                            n = JSON.parse(n)
                        } catch (e) {}
                    o[a] = n
                }
            }),
            o
        },
        extend: function(t, n) {
            var r = function() {
                this.constructor = t
            };
            return r.prototype = this.prototype,
            t.prototype = new r,
            t.__super__ = this.prototype,
            e.extend(t, this, n),
            t.defaults = t.prototype,
            t
        },
        attach: function(t, n, r) {
            var i = this;
            "object" != typeof n || n instanceof e != 0 || r || (r = n,
            n = void 0),
            r = e.extend({}, r);
            var o, a = r.namespace || i.defaults.namespace, s = e.extend({}, i.defaults, i.readElementConfig(t[0], a), r), c = function(a) {
                var c = e(a.currentTarget)
                  , u = e.extend({
                    $source: t,
                    $currentTarget: c
                }, i.readElementConfig(t[0], s.namespace), i.readElementConfig(a.currentTarget, s.namespace), r)
                  , d = o || c.data("featherlight-persisted") || new i(n,u);
                "shared" === d.persist ? o = d : d.persist !== !1 && c.data("featherlight-persisted", d),
                u.$currentTarget.blur && u.$currentTarget.blur(),
                d.open(a)
            };
            return t.on(s.openTrigger + "." + s.namespace, s.filter, c),
            {
                filter: s.filter,
                handler: c
            }
        },
        current: function() {
            var e = this.opened();
            return e[e.length - 1] || null
        },
        opened: function() {
            var t = this;
            return o(),
            e.grep(i, function(e) {
                return e instanceof t
            })
        },
        close: function(e) {
            var t = this.current();
            return t ? t.close(e) : void 0
        },
        _onReady: function() {
            var t = this;
            if (t.autoBind) {
                var n = e(t.autoBind);
                n.each(function() {
                    t.attach(e(this))
                }),
                e(document).on("click", t.autoBind, function(r) {
                    if (!r.isDefaultPrevented()) {
                        var i = e(r.currentTarget)
                          , o = n.length;
                        if (n = n.add(i),
                        o !== n.length) {
                            var a = t.attach(i);
                            (!a.filter || e(r.target).parentsUntil(i, a.filter).length > 0) && a.handler(r)
                        }
                    }
                })
            }
        },
        _callbackChain: {
            onKeyUp: function(t, n) {
                return 27 === n.keyCode ? (this.closeOnEsc && e.featherlight.close(n),
                !1) : t(n)
            },
            beforeOpen: function(t, n) {
                return e(document.documentElement).addClass("with-featherlight"),
                this._previouslyActive = document.activeElement,
                this._$previouslyTabbable = e("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),
                this._$previouslyWithTabIndex = e("[tabindex]").not('[tabindex="-1"]'),
                this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(t, n) {
                    return e(n).attr("tabindex")
                }),
                this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1),
                document.activeElement.blur && document.activeElement.blur(),
                t(n)
            },
            afterClose: function(n, r) {
                var i = n(r)
                  , o = this;
                return this._$previouslyTabbable.removeAttr("tabindex"),
                this._$previouslyWithTabIndex.each(function(t, n) {
                    e(n).attr("tabindex", o._previousWithTabIndices[t])
                }),
                this._previouslyActive.focus(),
                0 === t.opened().length && e(document.documentElement).removeClass("with-featherlight"),
                i
            },
            onResize: function(e, t) {
                return this.resize(this.$content.naturalWidth, this.$content.naturalHeight),
                e(t)
            },
            afterContent: function(e, t) {
                var n = e(t);
                return this.$instance.find("[autofocus]:not([disabled])").focus(),
                this.onResize(t),
                n
            }
        }
    }),
    e.featherlight = t,
    e.fn.featherlight = function(e, n) {
        return t.attach(this, e, n),
        this
    },
    e(document).ready(function() {
        t._onReady()
    })
});

