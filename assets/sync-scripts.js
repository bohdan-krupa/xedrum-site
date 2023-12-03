function initAttachment() {
    $("#attachment").fileinput({
        uploadUrl: "/upload",
        autoReplace: !0,
        showCaption: !1,
        initialPreview: [],
        uploadAsync: !0,
        maxFileCount: 1,
        showUpload: !1,
        maxFileSize: 5e3,
        overwriteInitial: !1,
        allowedFileExtensions: ["doc", "docx", "pdf", "png", "jpg", "jpeg"],
        browseLabel: "\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b",
        dropZoneEnabled: !1,
        browseIcon: ""
    })
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = re.type(e);
            return "function" === n || re.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ge.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return K.call(t, e) > -1 !== n
            })
        }

        function o(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function r(e) {
            var t = {};
            return re.each(e.match(xe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            V.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), re.ready()
        }

        function s() {
            this.expando = re.expando + s.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace($e, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _e.test(n) ? re.parseJSON(n) : n
                    } catch (o) {}
                    De.set(e, t, n)
                } else n = void 0;
            return n
        }

        function d(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return re.css(e, t, "")
                },
                l = s(),
                d = n && n[3] || (re.cssNumber[t] ? "" : "px"),
                c = (re.cssNumber[t] || "px" !== d && +l) && Ae.exec(re.css(e, t));
            if (c && c[3] !== d) {
                d = d || c[3], n = n || [], c = +l || 1;
                do r = r || ".5", c /= r, re.style(e, t, c + d); while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = o)), o
        }

        function c(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
        }

        function u(e, t) {
            for (var n = 0, i = e.length; i > n; n++) Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
        }

        function f(e, t, n, i, o) {
            for (var r, a, s, l, d, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
                if (r = e[g], r || 0 === r)
                    if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                    else if (Me.test(r)) {
                for (a = a || p.appendChild(t.createElement("div")), s = (Pe.exec(r) || ["", ""])[1].toLowerCase(), l = Ne[s] || Ne._default, a.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], f = l[0]; f--;) a = a.lastChild;
                re.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
            } else h.push(t.createTextNode(r));
            for (p.textContent = "", g = 0; r = h[g++];)
                if (i && re.inArray(r, i) > -1) o && o.push(r);
                else if (d = re.contains(r.ownerDocument, r), a = c(p.appendChild(r), "script"), d && u(a), n)
                for (f = 0; r = a[f++];) je.test(r.type || "") && n.push(r);
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
                return V.activeElement
            } catch (e) {}
        }

        function m(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) m(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = h;
            else if (!o) return e;
            return 1 === r && (a = o, o = function(e) {
                return re().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = re.guid++)), e.each(function() {
                re.event.add(this, t, o, i, n)
            })
        }

        function v(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function y(e) {
            var t = Be.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            var n, i, o, r, a, s, l, d;
            if (1 === t.nodeType) {
                if (Se.hasData(e) && (r = Se.access(e), a = Se.set(t, r), d = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in d)
                        for (n = 0, i = d[o].length; i > n; n++) re.event.add(t, o, d[o][n])
                }
                De.hasData(e) && (s = De.access(e), l = re.extend({}, s), De.set(t, l))
            }
        }

        function x(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Fe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function T(e, t, n, i) {
            t = X.apply([], t);
            var o, r, a, s, l, d, u = 0,
                p = e.length,
                h = p - 1,
                g = t[0],
                m = re.isFunction(g);
            if (m || p > 1 && "string" == typeof g && !ie.checkClone && Ue.test(g)) return e.each(function(o) {
                var r = e.eq(o);
                m && (t[0] = g.call(this, o, r.html())), T(r, t, n, i)
            });
            if (p && (o = f(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = re.map(c(o, "script"), b), s = a.length; p > u; u++) l = o, u !== h && (l = re.clone(l, !0, !0), s && re.merge(a, c(l, "script"))), n.call(e[u], l, u);
                if (s)
                    for (d = a[a.length - 1].ownerDocument, re.map(a, y), u = 0; s > u; u++) l = a[u], je.test(l.type || "") && !Se.access(l, "globalEval") && re.contains(d, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(qe, "")))
            }
            return e
        }

        function C(e, t, n) {
            for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || re.cleanData(c(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && u(c(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function k(e, t) {
            var n = re(t.createElement(e)).appendTo(t.body),
                i = re.css(n[0], "display");
            return n.detach(), i
        }

        function S(e) {
            var t = V,
                n = Je[e];
            return n || (n = k(e, t), "none" !== n && n || (Ye = (Ye || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ye[0].contentDocument, t.write(), t.close(), n = k(e, t), Ye.detach()), Je[e] = n), n
        }

        function D(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || Qe(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), n && !ie.pixelMarginRight() && Ve.test(a) && Ze.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), void 0 !== a ? a + "" : a
        }

        function _(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function $(e) {
            if (e in it) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                if (e = nt[n] + t, e in it) return e
        }

        function E(e, t, n) {
            var i = Ae.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function A(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(e, n + Oe[r], !0, o)), i ? ("content" === n && (a -= re.css(e, "padding" + Oe[r], !0, o)), "margin" !== n && (a -= re.css(e, "border" + Oe[r] + "Width", !0, o))) : (a += re.css(e, "padding" + Oe[r], !0, o), "padding" !== n && (a += re.css(e, "border" + Oe[r] + "Width", !0, o)));
            return a
        }

        function O(t, n, i) {
            var o = !0,
                r = "width" === n ? t.offsetWidth : t.offsetHeight,
                a = Qe(t),
                s = "border-box" === re.css(t, "boxSizing", !1, a);
            if (V.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r) {
                if (r = D(t, n, a), (0 > r || null == r) && (r = t.style[n]), Ve.test(r)) return r;
                o = s && (ie.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0
            }
            return r + A(t, n, i || (s ? "border" : "content"), o, a) + "px"
        }

        function I(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = Se.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ie(i) && (r[a] = Se.access(i, "olddisplay", S(i.nodeName)))) : (o = Ie(i), "none" === n && o || Se.set(i, "olddisplay", o ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function F(e, t, n, i, o) {
            return new F.prototype.init(e, t, n, i, o)
        }

        function P() {
            return e.setTimeout(function() {
                ot = void 0
            }), ot = re.now()
        }

        function j(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Oe[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function N(e, t, n) {
            for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function M(e, t, n) {
            var i, o, r, a, s, l, d, c, u = this,
                f = {},
                p = e.style,
                h = e.nodeType && Ie(e),
                g = Se.get(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = re.css(e, "display"), c = "none" === d ? Se.get(e, "olddisplay") || S(e.nodeName) : d, "inline" === c && "none" === re.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], at.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    f[i] = g && g[i] || re.style(e, i)
                } else d = void 0;
            if (re.isEmptyObject(f)) "inline" === ("none" === d ? S(e.nodeName) : d) && (p.display = d);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = Se.access(e, "fxshow", {}), r && (g.hidden = !h), h ? re(e).show() : u.done(function() {
                    re(e).hide()
                }), u.done(function() {
                    var t;
                    Se.remove(e, "fxshow");
                    for (t in f) re.style(e, t, f[t])
                });
                for (i in f) a = N(h ? g[i] : 0, i, u), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function R(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function z(e, t, n) {
            var i, o, r = 0,
                a = z.prefilters.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = ot || P(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, a = 0, l = d.tweens.length; l > a; a++) d.tweens[a].run(r);
                    return s.notifyWith(e, [d, r, n]), 1 > r && l ? n : (s.resolveWith(e, [d]), !1)
                },
                d = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {},
                        easing: re.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? d.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) d.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t])) : s.rejectWith(e, [d, t]), this
                    }
                }),
                c = d.props;
            for (R(c, d.opts.specialEasing); a > r; r++)
                if (i = z.prefilters[r].call(d, e, c, d.opts)) return re.isFunction(i.stop) && (re._queueHooks(d.elem, d.opts.queue).stop = re.proxy(i.stop, i)), i;
            return re.map(c, N, d), re.isFunction(d.opts.start) && d.opts.start.call(e, d), re.fx.timer(re.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function L(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function W(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(xe) || [];
                if (re.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function H(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, re.each(e[s] || [], function(e, s) {
                    var d = s(t, n, i);
                    return "string" != typeof d || a || r[d] ? a ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
                }), l
            }
            var r = {},
                a = e === Dt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function U(e, t) {
            var n, i, o = re.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && re.extend(!0, e, i), e
        }

        function B(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    } if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function q(e, t, n, i) {
            var o, r, a, s, l, d = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = d[l + " " + r] || d["* " + r], !a)
                    for (o in d)
                        if (s = o.split(" "), s[1] === r && (a = d[l + " " + s[0]] || d["* " + s[0]])) {
                            a === !0 ? a = d[o] : d[o] !== !0 && (r = s[0], c.unshift(s[1]));
                            break
                        } if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: a ? u : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function Y(e, t, n, i) {
            var o;
            if (re.isArray(t)) re.each(t, function(t, o) {
                n || At.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (o in t) Y(e + "[" + o + "]", t[o], n, i)
        }

        function J(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var Z = [],
            V = e.document,
            Q = Z.slice,
            X = Z.concat,
            G = Z.push,
            K = Z.indexOf,
            ee = {},
            te = ee.toString,
            ne = ee.hasOwnProperty,
            ie = {},
            oe = "2.2.2",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            le = /-([\da-z])/gi,
            de = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: oe,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return re.each(this, e)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: G,
            sort: Z.sort,
            splice: Z.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof a && (d = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (d && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, a[t] = re.extend(d, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, re.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                var t;
                if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in e);
                return void 0 === t || ne.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = V.createElement("script"), t.text = e, V.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(le, de)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, o = 0;
                if (n(e))
                    for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
                else
                    for (o in e)
                        if (t.call(e[o], o, e[o]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : K.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
            },
            map: function(e, t, i) {
                var o, r, a = 0,
                    s = [];
                if (n(e))
                    for (o = e.length; o > a; a++) r = t(e[a], a, i), null != r && s.push(r);
                else
                    for (a in e) r = t(e[a], a, i), null != r && s.push(r);
                return X.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = Q.call(arguments, 2), o = function() {
                    return e.apply(t || this, i.concat(Q.call(arguments)))
                }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
            },
            now: Date.now,
            support: ie
        }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = Z[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, d, u, p, h = t && t.ownerDocument,
                    g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((t ? t.ownerDocument || t : L) !== I && O(t), t = t || I, P)) {
                    if (11 !== g && (d = ve.exec(e)))
                        if (o = d[1]) {
                            if (9 === g) {
                                if (!(a = t.getElementById(o))) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (h && (a = h.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (d[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n
                        } if (x.qsa && !q[e + " "] && (!j || !j.test(e))) {
                        if (1 !== g) h = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = z), u = S(e), r = u.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) u[r] = l + " " + f(u[r]);
                            p = u.join(","), h = be.test(e) && c(t.parentNode) || t
                        }
                        if (p) try {
                            return G.apply(n, h.querySelectorAll(p)), n
                        } catch (m) {} finally {
                            s === z && t.removeAttribute("id")
                        }
                    }
                }
                return _(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[z] = !0, e
            }

            function o(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function d(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function u() {}

            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = H++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, l, d, c = [W, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (d = t[z] || (t[z] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), (s = l[i]) && s[0] === W && s[1] === r) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, d = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), d && t.push(s));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[z] && (o = v(o)), r && !r[z] && (r = v(r, a)), i(function(i, a, s, l) {
                    var d, c, u, f = [],
                        p = [],
                        h = a.length,
                        v = i || g(t || "*", s.nodeType ? [s] : s, []),
                        b = !e || !i && t ? v : m(v, f, e, s, l),
                        y = n ? r || (i ? e : h || o) ? [] : a : b;
                    if (n && n(b, y, s, l), o)
                        for (d = m(y, p), o(d, [], s, l), c = d.length; c--;)(u = d[c]) && (y[p[c]] = !(b[p[c]] = u));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (d = [], c = y.length; c--;)(u = y[c]) && d.push(b[c] = u);
                                r(null, y = [], d, l)
                            }
                            for (c = y.length; c--;)(u = y[c]) && (d = r ? ee(i, u) : f[c]) > -1 && (i[d] = !(a[d] = u))
                        }
                    } else y = m(y === a ? y.splice(h, y.length) : y), r ? r(null, a, y, l) : G.apply(a, y)
                })
            }

            function b(e) {
                for (var t, n, i, o = e.length, r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, a, !0), d = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, i) {
                        var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                        return t = null, o
                    }]; o > s; s++)
                    if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                            for (i = ++s; o > i && !T.relative[e[i].type]; i++);
                            return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, i > s && b(e.slice(s, i)), o > i && b(e = e.slice(i)), o > i && f(e))
                        }
                        c.push(n)
                    } return h(c)
            }

            function y(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, d) {
                        var c, u, f, p = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            b = $,
                            y = i || r && T.find.TAG("*", d),
                            w = W += null == b ? 1 : Math.random() || .1,
                            x = y.length;
                        for (d && ($ = a === I || a || d); h !== x && null != (c = y[h]); h++) {
                            if (r && c) {
                                for (u = 0, a || c.ownerDocument === I || (O(c), s = !P); f = e[u++];)
                                    if (f(c, a || I, s)) {
                                        l.push(c);
                                        break
                                    } d && (W = w)
                            }
                            o && ((c = !f && c) && p--, i && g.push(c))
                        }
                        if (p += h, o && h !== p) {
                            for (u = 0; f = n[u++];) f(g, v, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = Q.call(l));
                                v = m(v)
                            }
                            G.apply(l, v), d && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return d && (W = w, $ = b), g
                    };
                return o ? i(a) : a
            }
            var w, x, T, C, k, S, D, _, $, E, A, O, I, F, P, j, N, M, R, z = "sizzle" + 1 * new Date,
                L = e.document,
                W = 0,
                H = 0,
                U = n(),
                B = n(),
                q = n(),
                Y = function(e, t) {
                    return e === t && (A = !0), 0
                },
                J = 1 << 31,
                Z = {}.hasOwnProperty,
                V = [],
                Q = V.pop,
                X = V.push,
                G = V.push,
                K = V.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                ue = new RegExp(re),
                fe = new RegExp("^" + ie + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                ye = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    O()
                };
            try {
                G.apply(V = K.call(L.childNodes), L.childNodes), V[L.childNodes.length].nodeType
            } catch (Ce) {
                G = {
                    apply: V.length ? function(e, t) {
                        X.apply(e, K.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, O = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : L;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, F = I.documentElement, P = !k(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = me.test(I.getElementsByClassName), x.getById = o(function(e) {
                    return F.appendChild(e).id = z, !I.getElementsByName || !I.getElementsByName(z).length
                }), x.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
                }, N = [], j = [], (x.qsa = me.test(I.querySelectorAll)) && (o(function(e) {
                    F.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || j.push(".#.+[+~]")
                }), o(function(e) {
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                })), (x.matchesSelector = me.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), N.push("!=", re)
                }), j = j.length && new RegExp(j.join("|")), N = N.length && new RegExp(N.join("|")), t = me.test(F.compareDocumentPosition), R = t || me.test(F.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = t ? function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === L && R(L, e) ? -1 : t === I || t.ownerDocument === L && R(L, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                    if (o === r) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === L ? -1 : l[i] === L ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && O(e), n = n.replace(ce, "='$1']"), x.matchesSelector && P && !q[n + " "] && (!N || !N.test(n)) && (!j || !j.test(n))) try {
                    var i = M.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && O(e), R(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && O(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : x.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (A = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(Y), A) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return E = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
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
                        return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var d, c, u, f, p, h, g = r !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s,
                                y = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                    for (f = m, u = f[z] || (f[z] = {}), c = u[f.uniqueID] || (u[f.uniqueID] = {}), d = c[e] || [], p = d[0] === W && d[1], y = p && d[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (y = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            c[e] = [W, p, y];
                                            break
                                        }
                                } else if (b && (f = t, u = f[z] || (f[z] = {}), c = u[f.uniqueID] || (u[f.uniqueID] = {}), d = c[e] || [], p = d[0] === W && d[1], y = p), y === !1)
                                    for (;
                                        (f = ++p && f && f[g] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && (u = f[z] || (f[z] = {}), c = u[f.uniqueID] || (u[f.uniqueID] = {}), c[e] = [W, y]), f !== t)););
                                return y -= o, y === i || y % i === 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[z] ? r(n) : r.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = D(e.replace(se, "$1"));
                        return o[z] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, xe),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === F
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
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
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(e, t) {
                        return [t - 1]
                    }),
                    eq: d(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: d(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: d(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return u.prototype = T.filters = T.pseudos, T.setFilters = new u, S = t.tokenize = function(e, n) {
                var i, o, r, a, s, l, d, c = B[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], d = T.preFilter; s;) {
                    (!i || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = de.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) !(o = pe[a].exec(s)) || d[a] && !(o = d[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
            }, D = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = q[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;) r = b(t[n]), r[z] ? i.push(r) : o.push(r);
                    r = q(e, y(o, i)), r.selector = e
                }
                return r
            }, _ = t.select = function(e, t, n, i) {
                var o, r, a, s, l, d = "function" == typeof e && e,
                    u = !i && S(e = d.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && P && T.relative[r[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                        d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, xe), be.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && f(r), !e) return G.apply(n, i), n;
                            break
                        }
                }
                return (d || D(e, u))(i, t, !P, n, !t || be.test(e) && c(t.parentNode) || t), n
            }, x.sortStable = z.split("").sort(Y).join("") === z, x.detectDuplicates = !!A, O(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var ue = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && re(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            fe = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            pe = re.expr.match.needsContext,
            he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ge = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (re.contains(o[t], this)) return !0
                }));
                for (t = 0; n > t; t++) re.find(e, o[t], i);
                return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && pe.test(e) ? re(e) : e || [], !1).length
            }
        });
        var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            be = re.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || me, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), he.test(i[1]) && re.isPlainObject(t))
                            for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return o = V.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = V, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        be.prototype = re.fn, me = re(V);
        var ye = /^(?:parents|prev(?:Until|All))/,
            we = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.fn.extend({
            has: function(e) {
                var t = re(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (re.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = pe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? K.call(re(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ue(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ue(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return ue(e, "nextSibling")
            },
            prevAll: function(e) {
                return ue(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ue(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ue(e, "previousSibling", n)
            },
            siblings: function(e) {
                return fe((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return fe(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var o = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (we[e] || re.uniqueSort(o), ye.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var xe = /\S+/g;
        re.Callbacks = function(e) {
            e = "string" == typeof e ? r(e) : re.extend({}, e);
            var t, n, i, o, a = [],
                s = [],
                l = -1,
                d = function() {
                    for (o = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
                },
                c = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                            re.each(t, function(t, n) {
                                re.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== re.type(n) && i(n)
                            })
                        }(arguments), n && !t && d()), this
                    },
                    remove: function() {
                        return re.each(arguments, function(e, t) {
                            for (var n;
                                (n = re.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = s = [], n || (a = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || d()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, r) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, re.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = Q.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    d = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(d(o, n, t)).done(d(o, i, r)).fail(l.reject) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var Te;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (Te.resolveWith(V, [re]), re.fn.triggerHandler && (re(V).triggerHandler("ready"), re(V).off("ready"))))
            }
        }), re.ready.promise = function(t) {
            return Te || (Te = re.Deferred(), "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll ? e.setTimeout(re.ready) : (V.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), Te.promise(t)
        }, re.ready.promise();
        var Ce = function(e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    d = null == n;
                if ("object" === re.type(n)) {
                    o = !0;
                    for (s in n) Ce(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, re.isFunction(i) || (a = !0), d && (a ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                        return d.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
            },
            ke = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        s.uid = 1, s.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!ke(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[t] = n;
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, o, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 === t) this.register(e);
                    else {
                        re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(xe) || [])), n = i.length;
                        for (; n--;) delete r[i[n]]
                    }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !re.isEmptyObject(t)
            }
        };
        var Se = new s,
            De = new s,
            _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $e = /[A-Z]/g;
        re.extend({
            hasData: function(e) {
                return De.hasData(e) || Se.hasData(e)
            },
            data: function(e, t, n) {
                return De.access(e, t, n)
            },
            removeData: function(e, t) {
                De.remove(e, t)
            },
            _data: function(e, t, n) {
                return Se.access(e, t, n)
            },
            _removeData: function(e, t) {
                Se.remove(e, t)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = De.get(r), 1 === r.nodeType && !Se.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                        Se.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    De.set(this, e)
                }) : Ce(this, function(t) {
                    var n, i;
                    if (r && void 0 === t) {
                        if (n = De.get(r, e) || De.get(r, e.replace($e, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = re.camelCase(e), n = De.get(r, i), void 0 !== n) return n;
                        if (n = l(r, i, void 0), void 0 !== n) return n
                    } else i = re.camelCase(e), this.each(function() {
                        var n = De.get(this, i);
                        De.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && De.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    De.remove(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = Se.get(e, t), n && (!i || re.isArray(n) ? i = Se.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Se.get(e, n) || Se.access(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        Se.remove(e, [t + "queue", n])
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = re.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Se.get(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ae = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
            Oe = ["Top", "Right", "Bottom", "Left"],
            Ie = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            Fe = /^(?:checkbox|radio)$/i,
            Pe = /<([\w:-]+)/,
            je = /^$|\/(?:java|ecma)script/i,
            Ne = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ne.optgroup = Ne.option, Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td;
        var Me = /<|&#?\w+;/;
        ! function() {
            var e = V.createDocumentFragment(),
                t = e.appendChild(V.createElement("div")),
                n = V.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Re = /^key/,
            ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Le = /^([^.]*)(?:\.(.+)|)/;
        re.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, l, d, c, u, f, p, h, g, m = Se.get(e);
                if (m)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(xe) || [""], d = t.length; d--;) s = Le.exec(t[d]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, c = re.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), re.event.global[p] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, d, c, u, f, p, h, g, m = Se.hasData(e) && Se.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(xe) || [""], d = t.length; d--;)
                        if (s = Le.exec(t[d]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (u = re.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) c = f[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, u.remove && u.remove.call(e, c));
                            a && !f.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || re.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) re.event.remove(e, p + t[d], n, i, !0);
                    re.isEmptyObject(l) && Se.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = Q.call(arguments),
                    l = (Se.get(this, "events") || {})[e.type] || [],
                    d = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; s > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = ze.test(o) ? this.mouseHooks : Re.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = V), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, re.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            constructor: re.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return (!o || o !== i && !re.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i) {
                return m(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return m(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            }
        });
        var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            He = /<script|<style|<link/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Be = /^true\/(.*)/,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        re.extend({
            htmlPrefilter: function(e) {
                return e.replace(We, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                    l = re.contains(e.ownerDocument, e);
                if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (a = c(s), r = c(e), i = 0, o = r.length; o > i; i++) x(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || c(e), a = a || c(s), i = 0, o = r.length; o > i; i++) w(r[i], a[i]);
                    else w(e, s);
                return a = c(s, "script"), a.length > 0 && u(a, !l && c(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (ke(n)) {
                        if (t = n[Se.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
                            n[Se.expando] = void 0
                        }
                        n[De.expando] && (n[De.expando] = void 0)
                    }
            }
        }), re.fn.extend({
            domManip: T,
            detach: function(e) {
                return C(this, e, !0)
            },
            remove: function(e) {
                return C(this, e)
            },
            text: function(e) {
                return Ce(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(c(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ce(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !He.test(e) && !Ne[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = re.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(c(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return T(this, arguments, function(t) {
                    var n = this.parentNode;
                    re.inArray(this, e) < 0 && (re.cleanData(c(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = [], o = re(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), re(o[a])[t](n), G.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ye, Je = {
                HTML: "block",
                BODY: "block"
            },
            Ze = /^margin/,
            Ve = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
            Qe = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            Xe = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            Ge = V.documentElement;
        ! function() {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ge.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ge.removeChild(a)
            }
            var n, i, o, r, a = V.createElement("div"),
                s = V.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), re.extend(ie, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), o
                },
                reliableMarginLeft: function() {
                    return null == i && t(), r
                },
                reliableMarginRight: function() {
                    var t, n = s.appendChild(V.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ge.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ge.removeChild(a), s.removeChild(n), t
                }
            }))
        }();
        var Ke = /^(none|table(?!-c[ea]).+)/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            nt = ["Webkit", "O", "Moz", "ms"],
            it = V.createElement("div").style;
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = D(e, "opacity");
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
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = re.camelCase(t),
                        l = e.style;
                    return t = re.cssProps[s] || (re.cssProps[s] = $(s) || s), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Ae.exec(n)) && o[1] && (n = d(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = $(s) || s), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = D(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Ke.test(re.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, et, function() {
                        return O(e, t, i)
                    }) : O(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o, r = i && Qe(e),
                        a = i && A(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
                    return a && (o = Ae.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), E(e, n, a)
                }
            }
        }), re.cssHooks.marginLeft = _(ie.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), re.cssHooks.marginRight = _(ie.reliableMarginRight, function(e, t) {
            return t ? Xe(e, {
                display: "inline-block"
            }, D, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Oe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Ze.test(e) || (re.cssHooks[e + t].set = E)
        }), re.fn.extend({
            css: function(e, t) {
                return Ce(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = Qe(e), o = t.length; o > a; a++) r[t[a]] = re.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return I(this, !0)
            },
            hide: function() {
                return I(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ie(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, re.fx = F.prototype.init, re.fx.step = {};
        var ot, rt, at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
        re.Animation = re.extend(z, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return d(n.elem, e, Ae.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
                },
                prefilters: [M],
                prefilter: function(e, t) {
                    t ? z.prefilters.unshift(e) : z.prefilters.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ie).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = re.isEmptyObject(e),
                        r = re.speed(t, n, i),
                        a = function() {
                            var t = z(this, re.extend({}, e), r);
                            (o || Se.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = re.timers,
                            a = Se.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && st.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = Se.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, o)
                }
            }), re.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
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
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = 0,
                    n = re.timers;
                for (ot = re.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || re.fx.stop(), ot = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                e.clearInterval(rt), rt = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(t, n) {
                return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = V.createElement("input"),
                    t = V.createElement("select"),
                    n = t.appendChild(V.createElement("option"));
                e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = V.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
            }();
        var lt, dt = re.expr.attrHandle;
        re.fn.extend({
            attr: function(e, t) {
                return Ce(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(),
                    o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(xe);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), lt = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || re.find.attr;
            dt[t] = function(e, t, i) {
                var o, r;
                return i || (r = dt[t], dt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, dt[t] = r), o
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i,
            ut = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return Ce(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[re.propFix[e] || e]
                })
            }
        }), re.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ie.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        });
        var ft = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, L(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(xe) || []; n = this[l++];)
                        if (o = L(n), i = 1 === n.nodeType && (" " + o + " ").replace(ft, " ")) {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = re.trim(i), o !== s && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, L(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(xe) || []; n = this[l++];)
                        if (o = L(n), i = 1 === n.nodeType && (" " + o + " ").replace(ft, " ")) {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = re.trim(i), o !== s && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                    re(this).toggleClass(e.call(this, n, L(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = re(this), r = e.match(xe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(void 0 === e || "boolean" === n) && (t = L(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Se.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + L(n) + " ").replace(ft, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var pt = /\r/g,
            ht = /[\x20\t\r\n\f]+/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                {
                    if (arguments.length) return i = re.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), r) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = re.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
                }
            }, ie.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var gt = /^(?:focusinfocus|focusoutblur)$/;
        re.extend(re.event, {
            trigger: function(t, n, i, o) {
                var r, a, s, l, d, c, u, f = [i || V],
                    p = ne.call(t, "type") ? t.type : t,
                    h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(p + re.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), d = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[p] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!o && !u.noBubble && !re.isWindow(i)) {
                        for (l = u.delegateType || p, gt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || V) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (r = 0;
                        (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || p, c = (Se.get(a, "events") || {})[t.type] && Se.get(a, "handle"), c && c.apply(a, n), c = d && a[d], c && c.apply && ke(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || u._default && u._default.apply(f.pop(), n) !== !1 || !ke(i) || d && re.isFunction(i[p]) && !re.isWindow(i) && (s = i[d], s && (i[d] = null), re.event.triggered = p, i[p](), re.event.triggered = void 0, s && (i[d] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                re.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), re.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e))
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Se.access(i, t);
                    o || i.addEventListener(e, n, !0), Se.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Se.access(i, t) - 1;
                    o ? Se.access(i, t, o) : (i.removeEventListener(e, n, !0), Se.remove(i, t))
                }
            }
        });
        var mt = e.location,
            vt = re.now(),
            bt = /\?/;
        re.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, re.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return (!n || n.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + t), n
        };
        var yt = /#.*$/,
            wt = /([?&])_=[^&]*/,
            xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ct = /^(?:GET|HEAD)$/,
            kt = /^\/\//,
            St = {},
            Dt = {},
            _t = "*/".concat("*"),
            $t = V.createElement("a");
        $t.href = mt.href, re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mt.href,
                type: "GET",
                isLocal: Tt.test(mt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _t,
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
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? U(U(e, re.ajaxSettings), t) : U(re.ajaxSettings, e)
            },
            ajaxPrefilter: W(St),
            ajaxTransport: W(Dt),
            ajax: function(t, n) {
                function i(t, n, i, s) {
                    var d, u, b, y, x, C = n;
                    2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, i && (y = B(f, T, i)), y = q(f, y, T, d), d ? (f.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = T.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, b = y.error, d = !b)) : (b = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", d ? g.resolveWith(p, [u, C, T]) : g.rejectWith(p, [T, C, b]), T.statusCode(v), v = void 0, c && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? u : b]), m.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, f]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, a, s, l, d, c, u, f = re.ajaxSetup({}, n),
                    p = f.context || f,
                    h = f.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                    g = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    v = f.statusCode || {},
                    b = {},
                    y = {},
                    w = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; t = xt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = y[n] = y[n] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > w)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return o && o.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || mt.href) + "").replace(yt, "").replace(kt, mt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = re.trim(f.dataType || "*").toLowerCase().match(xe) || [""], null == f.crossDomain) {
                    d = V.createElement("a");
                    try {
                        d.href = f.url, d.href = d.href, f.crossDomain = $t.protocol + "//" + $t.host != d.protocol + "//" + d.host
                    } catch (C) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = re.param(f.data, f.traditional)), H(St, f, n, T), 2 === w) return T;
                c = re.event && f.global, c && 0 === re.active++ && re.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ct.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (bt.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = wt.test(r) ? r.replace(wt, "$1_=" + vt++) : r + (bt.test(r) ? "&" : "?") + "_=" + vt++)), f.ifModified && (re.lastModified[r] && T.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && T.setRequestHeader("If-None-Match", re.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : f.accepts["*"]);
                for (u in f.headers) T.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[u](f[u]);
                if (o = H(Dt, f, n, T)) {
                    if (T.readyState = 1, c && h.trigger("ajaxSend", [T, f]), 2 === w) return T;
                    f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        w = 1, o.send(b, i)
                    } catch (C) {
                        if (!(2 > w)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, o) {
                return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, re.isPlainObject(e) && e))
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                var t;
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return !re.expr.filters.visible(e)
        }, re.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var Et = /%20/g,
            At = /\[\]$/,
            Ot = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            Ft = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Y(n, e[n], t, o);
            return i.join("&").replace(Et, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Ft.test(this.nodeName) && !It.test(e) && (this.checked || !Fe.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
        var Pt = {
                0: 200,
                1223: 204
            },
            jt = re.ajaxSettings.xhr();
        ie.cors = !!jt && "withCredentials" in jt, ie.ajax = jt = !!jt, re.ajaxTransport(function(t) {
            var n, i;
            return ie.cors || jt && !t.crossDomain ? {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Pt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = re("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), V.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Nt = [],
            Mt = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Nt.pop() || re.expando + "_" + vt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, s = t.jsonp !== !1 && (Mt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Mt, "$1" + o) : t.jsonp !== !1 && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || re.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Nt.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || V;
            var i = he.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = f([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
        };
        var Rt = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(a, r || [e.responseText, t, e])
                })
            }), this
        }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        }, re.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, l, d, c = re.css(e, "position"),
                    u = re(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), s = u.offset(), r = re.css(e, "top"), l = re.css(e, "left"), d = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, d ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : u.css(f)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                if (r) return t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = J(r), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - re.css(n, "marginTop", !0),
                        left: t.left - i.left - re.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || Ge
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            re.fn[e] = function(i) {
                return Ce(this, function(e, i, o) {
                    var r = J(e);
                    return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                }, e, i, arguments.length)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = _(ie.pixelPosition, function(e, n) {
                return n ? (n = D(e, t), Ve.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ce(this, function(t, n, i) {
                        var o;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), re.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var zt = e.jQuery,
            Lt = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = Lt), t && e.jQuery === re && (e.jQuery = zt), re
        }, t || (e.jQuery = e.$ = re), re
    }), function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var o = e.Event(n);
                return t.trigger(o, i), o.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && e.data("remote") !== !1
            },
            handleRemote: function(i) {
                var o, r, a, s, l, d;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), a = e(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (a.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                    return d = {
                        type: o || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, o) {
                            return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(r)
                    }, s && (d.xhrFields = {
                        withCredentials: s
                    }), r && (d.url = r), n.ajax(d)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var o = n.href(i),
                    r = i.data("method"),
                    a = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    d = e('<form method="post" action="' + o + '"></form>'),
                    c = '<input name="_method" value="' + r + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && d.attr("target", a), d.hide().append(c).appendTo("body"), d.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    o = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        o = n.confirm(i)
                    } catch (r) {
                        (console.error || console.log).call(console, r.stack || r)
                    }
                    t = n.fire(e, "confirm:complete", [o])
                }
                return o && t
            },
            blankInputs: function(t, n, i) {
                var o, r, a, s, l = e(),
                    d = n || "input,textarea",
                    c = t.find(d),
                    u = {};
                return c.each(function() {
                    o = e(this), o.is("input[type=radio]") ? (s = o.attr("name"), u[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (a = t.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), u[s] = s)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val(), r === i && (l = l.add(o)))
                }), l.length ? l : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(t) {
            var i = e(this),
                o = i.data("method"),
                r = i.data("params"),
                a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (a && (!o || "GET" === o) && !r) return !0;
                var s = n.handleRemote(i);
                return s === !1 ? n.enableElement(i) : s.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return o ? (n.handleMethod(i), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return o === !1 ? n.enableFormElement(i) : o.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var o, r, a = e(this),
                s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") === t)
                if (a.data("ujs:formnovalidate-button") === t) {
                    if (o = n.blankInputs(a, n.requiredInputSelector, !1), o && n.fire(a, "ajax:aborted:required", [o])) return n.stopEverything(i)
                } else a.data("ujs:formnovalidate-button", t);
            if (s) {
                if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [r]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var o = i.attr("name"),
                r = o ? {
                    name: o,
                    value: i.val()
                } : null,
                a = i.closest("form");
            0 === a.length && (a = e("#" + i.attr("form"))), a.data("ujs:submit-button", r), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        var t = "ui-effects-",
            n = e;
        return e.effects = {
                effect: {}
            },
            function(e, t) {
                function n(e, t, n) {
                    var i = u[t.type] || {};
                    return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : i.max < e ? i.max : e)
                }

                function i(t) {
                    var n = d(),
                        i = n._rgba = [];
                    return t = t.toLowerCase(), h(l, function(e, o) {
                        var r, a = o.re.exec(t),
                            s = a && o.parse(a),
                            l = o.space || "rgba";
                        return s ? (r = n[l](s), n[c[l].cache] = r[c[l].cache], i = n._rgba = r._rgba, !1) : void 0
                    }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, r.transparent), n) : r[t]
                }

                function o(e, t, n) {
                    return n = (n + 1) % 1, 1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                var r, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    s = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(e) {
                            return [e[1], e[2], e[3], e[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(e) {
                            return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(e) {
                            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(e) {
                            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(e) {
                            return [e[1], e[2] / 100, e[3] / 100, e[4]]
                        }
                    }],
                    d = e.Color = function(t, n, i, o) {
                        return new e.Color.fn.parse(t, n, i, o)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    u = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    f = d.support = {},
                    p = e("<p>")[0],
                    h = e.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = p.style.backgroundColor.indexOf("rgba") > -1, h(c, function(e, t) {
                    t.cache = "_" + e, t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), d.fn = e.extend(d.prototype, {
                    parse: function(o, a, s, l) {
                        if (o === t) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = e(o).css(a), a = t);
                        var u = this,
                            f = e.type(o),
                            p = this._rgba = [];
                        return a !== t && (o = [o, a, s, l], f = "array"), "string" === f ? this.parse(i(o) || r._default) : "array" === f ? (h(c.rgba.props, function(e, t) {
                            p[t.idx] = n(o[t.idx], t)
                        }), this) : "object" === f ? (o instanceof d ? h(c, function(e, t) {
                            o[t.cache] && (u[t.cache] = o[t.cache].slice())
                        }) : h(c, function(t, i) {
                            var r = i.cache;
                            h(i.props, function(e, t) {
                                if (!u[r] && i.to) {
                                    if ("alpha" === e || null == o[e]) return;
                                    u[r] = i.to(u._rgba)
                                }
                                u[r][t.idx] = n(o[e], t, !0)
                            }), u[r] && e.inArray(null, u[r].slice(0, 3)) < 0 && (u[r][3] = 1, i.from && (u._rgba = i.from(u[r])))
                        }), this) : void 0
                    },
                    is: function(e) {
                        var t = d(e),
                            n = !0,
                            i = this;
                        return h(c, function(e, o) {
                            var r, a = t[o.cache];
                            return a && (r = i[o.cache] || o.to && o.to(i._rgba) || [], h(o.props, function(e, t) {
                                    return null != a[t.idx] ? n = a[t.idx] === r[t.idx] : void 0
                                })),
                                n
                        }), n
                    },
                    _space: function() {
                        var e = [],
                            t = this;
                        return h(c, function(n, i) {
                            t[i.cache] && e.push(n)
                        }), e.pop()
                    },
                    transition: function(e, t) {
                        var i = d(e),
                            o = i._space(),
                            r = c[o],
                            a = 0 === this.alpha() ? d("transparent") : this,
                            s = a[r.cache] || r.to(a._rgba),
                            l = s.slice();
                        return i = i[r.cache], h(r.props, function(e, o) {
                            var r = o.idx,
                                a = s[r],
                                d = i[r],
                                c = u[o.type] || {};
                            null !== d && (null === a ? l[r] = d : (c.mod && (d - a > c.mod / 2 ? a += c.mod : a - d > c.mod / 2 && (a -= c.mod)), l[r] = n((d - a) * t + a, o)))
                        }), this[o](l)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                            i = n.pop(),
                            o = d(t)._rgba;
                        return d(e.map(n, function(e, t) {
                            return (1 - i) * o[t] + i * e
                        }))
                    },
                    toRgbaString: function() {
                        var t = "rgba(",
                            n = e.map(this._rgba, function(e, t) {
                                return null == e ? t > 2 ? 1 : 0 : e
                            });
                        return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                    },
                    toHslaString: function() {
                        var t = "hsla(",
                            n = e.map(this.hsla(), function(e, t) {
                                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                            });
                        return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                    },
                    toHexString: function(t) {
                        var n = this._rgba.slice(),
                            i = n.pop();
                        return t && n.push(~~(255 * i)), "#" + e.map(n, function(e) {
                            return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), d.fn.parse.prototype = d.fn, c.hsla.to = function(e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t, n, i = e[0] / 255,
                        o = e[1] / 255,
                        r = e[2] / 255,
                        a = e[3],
                        s = Math.max(i, o, r),
                        l = Math.min(i, o, r),
                        d = s - l,
                        c = s + l,
                        u = .5 * c;
                    return t = l === s ? 0 : i === s ? 60 * (o - r) / d + 360 : o === s ? 60 * (r - i) / d + 120 : 60 * (i - o) / d + 240, n = 0 === d ? 0 : .5 >= u ? d / c : d / (2 - c), [Math.round(t) % 360, n, u, null == a ? 1 : a]
                }, c.hsla.from = function(e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t = e[0] / 360,
                        n = e[1],
                        i = e[2],
                        r = e[3],
                        a = .5 >= i ? i * (1 + n) : i + n - i * n,
                        s = 2 * i - a;
                    return [Math.round(255 * o(s, a, t + 1 / 3)), Math.round(255 * o(s, a, t)), Math.round(255 * o(s, a, t - 1 / 3)), r]
                }, h(c, function(i, o) {
                    var r = o.props,
                        a = o.cache,
                        l = o.to,
                        c = o.from;
                    d.fn[i] = function(i) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), i === t) return this[a].slice();
                        var o, s = e.type(i),
                            u = "array" === s || "object" === s ? i : arguments,
                            f = this[a].slice();
                        return h(r, function(e, t) {
                            var i = u["object" === s ? e : t.idx];
                            null == i && (i = f[t.idx]), f[t.idx] = n(i, t)
                        }), c ? (o = d(c(f)), o[a] = f, o) : d(f)
                    }, h(r, function(t, n) {
                        d.fn[t] || (d.fn[t] = function(o) {
                            var r, a = e.type(o),
                                l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i,
                                d = this[l](),
                                c = d[n.idx];
                            return "undefined" === a ? c : ("function" === a && (o = o.call(this, c), a = e.type(o)), null == o && n.empty ? this : ("string" === a && (r = s.exec(o), r && (o = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), d[n.idx] = o, this[l](d)))
                        })
                    })
                }), d.hook = function(t) {
                    var n = t.split(" ");
                    h(n, function(t, n) {
                        e.cssHooks[n] = {
                            set: function(t, o) {
                                var r, a, s = "";
                                if ("transparent" !== o && ("string" !== e.type(o) || (r = i(o)))) {
                                    if (o = d(r || o), !f.rgba && 1 !== o._rgba[3]) {
                                        for (a = "backgroundColor" === n ? t.parentNode : t;
                                            ("" === s || "transparent" === s) && a && a.style;) try {
                                            s = e.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (l) {}
                                        o = o.blend(s && "transparent" !== s ? s : "_default")
                                    }
                                    o = o.toRgbaString()
                                }
                                try {
                                    t.style[n] = o
                                } catch (l) {}
                            }
                        }, e.fx.step[n] = function(t) {
                            t.colorInit || (t.start = d(t.elem, n), t.end = d(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, d.hook(a), e.cssHooks.borderColor = {
                    expand: function(e) {
                        var t = {};
                        return h(["Top", "Right", "Bottom", "Left"], function(n, i) {
                            t["border" + i + "Color"] = e
                        }), t
                    }
                }, r = e.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(n),
            function() {
                function t(t) {
                    var n, i, o = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        r = {};
                    if (o && o.length && o[0] && o[o[0]])
                        for (i = o.length; i--;) n = o[i], "string" == typeof o[n] && (r[e.camelCase(n)] = o[n]);
                    else
                        for (n in o) "string" == typeof o[n] && (r[n] = o[n]);
                    return r
                }

                function i(t, n) {
                    var i, o, a = {};
                    for (i in n) o = n[i], t[i] !== o && (r[i] || (e.fx.step[i] || !isNaN(parseFloat(o))) && (a[i] = o));
                    return a
                }
                var o = ["add", "remove", "toggle"],
                    r = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                    e.fx.step[i] = function(e) {
                        ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (n.style(e.elem, i, e.end), e.setAttr = !0)
                    }
                }), e.fn.addBack || (e.fn.addBack = function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }), e.effects.animateClass = function(n, r, a, s) {
                    var l = e.speed(r, a, s);
                    return this.queue(function() {
                        var r, a = e(this),
                            s = a.attr("class") || "",
                            d = l.children ? a.find("*").addBack() : a;
                        d = d.map(function() {
                            var n = e(this);
                            return {
                                el: n,
                                start: t(this)
                            }
                        }), r = function() {
                            e.each(o, function(e, t) {
                                n[t] && a[t + "Class"](n[t])
                            })
                        }, r(), d = d.map(function() {
                            return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", s), d = d.map(function() {
                            var t = this,
                                n = e.Deferred(),
                                i = e.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        n.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, i), n.promise()
                        }), e.when.apply(e, d.get()).done(function() {
                            r(), e.each(arguments, function() {
                                var t = this.el;
                                e.each(this.diff, function(e) {
                                    t.css(e, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, e.fn.extend({
                    addClass: function(t) {
                        return function(n, i, o, r) {
                            return i ? e.effects.animateClass.call(this, {
                                add: n
                            }, i, o, r) : t.apply(this, arguments)
                        }
                    }(e.fn.addClass),
                    removeClass: function(t) {
                        return function(n, i, o, r) {
                            return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                remove: n
                            }, i, o, r) : t.apply(this, arguments)
                        }
                    }(e.fn.removeClass),
                    toggleClass: function(t) {
                        return function(n, i, o, r, a) {
                            return "boolean" == typeof i || void 0 === i ? o ? e.effects.animateClass.call(this, i ? {
                                add: n
                            } : {
                                remove: n
                            }, o, r, a) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                toggle: n
                            }, i, o, r)
                        }
                    }(e.fn.toggleClass),
                    switchClass: function(t, n, i, o, r) {
                        return e.effects.animateClass.call(this, {
                            add: n,
                            remove: t
                        }, i, o, r)
                    }
                })
            }(),
            function() {
                function n(t, n, i, o) {
                    return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                        effect: t
                    }, null == n && (n = {}), e.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (o = i, i = n, n = {}), e.isFunction(i) && (o = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, t.complete = o || n.complete, t
                }

                function i(t) {
                    return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                e.extend(e.effects, {
                    version: "1.11.4",
                    save: function(e, n) {
                        for (var i = 0; i < n.length; i++) null !== n[i] && e.data(t + n[i], e[0].style[n[i]])
                    },
                    restore: function(e, n) {
                        var i, o;
                        for (o = 0; o < n.length; o++) null !== n[o] && (i = e.data(t + n[o]), void 0 === i && (i = ""), e.css(n[o], i))
                    },
                    setMode: function(e, t) {
                        return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                    },
                    getBaseline: function(e, t) {
                        var n, i;
                        switch (e[0]) {
                            case "top":
                                n = 0;
                                break;
                            case "middle":
                                n = .5;
                                break;
                            case "bottom":
                                n = 1;
                                break;
                            default:
                                n = e[0] / t.height
                        }
                        switch (e[1]) {
                            case "left":
                                i = 0;
                                break;
                            case "center":
                                i = .5;
                                break;
                            case "right":
                                i = 1;
                                break;
                            default:
                                i = e[1] / t.width
                        }
                        return {
                            x: i,
                            y: n
                        }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var n = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                "float": t.css("float")
                            },
                            i = e("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            o = {
                                width: t.width(),
                                height: t.height()
                            },
                            r = document.activeElement;
                        try {
                            r.id
                        } catch (a) {
                            r = document.body
                        }
                        return t.wrap(i), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (e.extend(n, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), e.each(["top", "left", "bottom", "right"], function(e, i) {
                            n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(o), i.css(n).show()
                    },
                    removeWrapper: function(t) {
                        var n = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                    },
                    setTransition: function(t, n, i, o) {
                        return o = o || {}, e.each(n, function(e, n) {
                            var r = t.cssUnit(n);
                            r[0] > 0 && (o[n] = r[0] * i + r[1])
                        }), o
                    }
                }), e.fn.extend({
                    effect: function() {
                        function t(t) {
                            function n() {
                                e.isFunction(r) && r.call(o[0]), e.isFunction(t) && t()
                            }
                            var o = e(this),
                                r = i.complete,
                                s = i.mode;
                            (o.is(":hidden") ? "hide" === s : "show" === s) ? (o[s](), n()) : a.call(o[0], i, n)
                        }
                        var i = n.apply(this, arguments),
                            o = i.mode,
                            r = i.queue,
                            a = e.effects.effect[i.effect];
                        return e.fx.off || !a ? o ? this[o](i.duration, i.complete) : this.each(function() {
                            i.complete && i.complete.call(this)
                        }) : r === !1 ? this.each(t) : this.queue(r || "fx", t)
                    },
                    show: function(e) {
                        return function(t) {
                            if (i(t)) return e.apply(this, arguments);
                            var o = n.apply(this, arguments);
                            return o.mode = "show", this.effect.call(this, o)
                        }
                    }(e.fn.show),
                    hide: function(e) {
                        return function(t) {
                            if (i(t)) return e.apply(this, arguments);
                            var o = n.apply(this, arguments);
                            return o.mode = "hide", this.effect.call(this, o)
                        }
                    }(e.fn.hide),
                    toggle: function(e) {
                        return function(t) {
                            if (i(t) || "boolean" == typeof t) return e.apply(this, arguments);
                            var o = n.apply(this, arguments);
                            return o.mode = "toggle", this.effect.call(this, o)
                        }
                    }(e.fn.toggle),
                    cssUnit: function(t) {
                        var n = this.css(t),
                            i = [];
                        return e.each(["em", "px", "%", "pt"], function(e, t) {
                            n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                        }), i
                    }
                })
            }(),
            function() {
                var t = {};
                e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                    t[n] = function(t) {
                        return Math.pow(t, e + 2)
                    }
                }), e.extend(t, {
                    Sine: function(e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Circ: function(e) {
                        return 1 - Math.sqrt(1 - e * e)
                    },
                    Elastic: function(e) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(e) {
                        return e * e * (3 * e - 2)
                    },
                    Bounce: function(e) {
                        for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    }
                }), e.each(t, function(t, n) {
                    e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                        return 1 - n(1 - e)
                    }, e.easing["easeInOut" + t] = function(e) {
                        return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                    }
                })
            }(), e.effects
    }), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof t && t;
                o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
            })
        }
        var n = function(t, i) {
            this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(e, t, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                a = this.$target.height();
            if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
            if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : e - i >= o + a ? !1 : "bottom";
            var s = null == this.affixed,
                l = s ? o : r.top,
                d = s ? a : t;
            return null != n && n >= o ? "top" : null != i && l + d >= e - i ? "bottom" : !1
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    i = this.options.offset,
                    o = i.top,
                    r = i.bottom,
                    a = Math.max(e(document).height(), e(document.body).height());
                "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
                var s = this.getState(a, t, o, r);
                if (this.affixed != s) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (s ? "-" + s : ""),
                        d = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == s && this.$element.offset({
                    top: a - t - r
                })
            }
        };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
            return e.fn.affix = i, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(t) {
                e(t).on("click", n, this.close)
            };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
            function n() {
                a.detach().trigger("closed.bs.alert").remove()
            }
            var o = e(this),
                r = o.attr("data-target");
            r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var a = e(r);
            t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var o = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
            return e.fn.alert = o, this
        }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof t && t;
                o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
            })
        }
        var n = function(t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.6", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(t) {
            var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val" : "html",
                r = i.data();
            t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
                i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
            return e.fn.button = i, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = e(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.carousel"),
                    r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    a = "string" == typeof t ? t : r.slide;
                o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t),
                i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
            if (i && !this.options.wrap) return t;
            var o = "prev" == e ? -1 : 1,
                r = (n + o) % this.$items.length;
            return this.$items.eq(r)
        }, n.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function(t, i) {
            var o = this.$element.find(".item.active"),
                r = i || this.getItemForDirection(t, o),
                a = this.interval,
                s = "next" == t ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var d = r[0],
                c = e.Event("slide.bs.carousel", {
                    relatedTarget: d,
                    direction: s
                });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = e(this.$indicators.children()[this.getItemIndex(r)]);
                    u && u.addClass("active")
                }
                var f = e.Event("slid.bs.carousel", {
                    relatedTarget: d,
                    direction: s
                });
                return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
                    r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(f)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this
        };
        var o = function(n) {
            var i, o = e(this),
                r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var a = e.extend({}, r.data(), o.data()),
                    s = o.attr("data-slide-to");
                s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }

        function n(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("bs.collapse"),
                    r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                    var r = e.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return s.call(this);
                        var l = e.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var o = e(i);
                this.addAriaAndCollapsedClass(t(o), o)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var o = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = o, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var o = e(this);
            o.attr("data-target") || i.preventDefault();
            var r = t(o),
                a = r.data("bs.collapse"),
                s = a ? "toggle" : o.data();
            n.call(r, s)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }

        function n(n) {
            n && 3 === n.which || (e(o).remove(), e(r).each(function() {
                var i = e(this),
                    o = t(i),
                    r = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
            }))
        }

        function i(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
            })
        }
        var o = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            a = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        a.VERSION = "3.3.6", a.prototype.toggle = function(i) {
            var o = e(this);
            if (!o.is(".disabled, :disabled")) {
                var r = t(o),
                    a = r.hasClass("open");
                if (n(), !a) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                    var s = {
                        relatedTarget: this
                    };
                    if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
                }
                return !1
            }
        }, a.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = e(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = t(i),
                        a = o.hasClass("open");
                    if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                    var s = " li:not(.disabled):visible a",
                        l = o.find(".dropdown-menu" + s);
                    if (l.length) {
                        var d = l.index(n.target);
                        38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                    }
                }
            }
        };
        var s = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = s, this
        }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
    }(jQuery), + function(e) {
        "use strict";

        function t(t, i) {
            return this.each(function() {
                var o = e(this),
                    r = o.data("bs.modal"),
                    a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
                r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
            })
        }
        var n = function(t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function(t) {
            var i = this,
                o = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var o = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                o ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
        }, n.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(t) {
            var i = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && o;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
            } else t && t()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this),
                o = i.attr("href"),
                r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(r, a, this)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(n, i) {
            this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
            })
        }
        t.VERSION = "3.3.6", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var t = e(this),
                    o = t.data("target") || t.attr("href"),
                    r = /^#./.test(o) && e(o);
                return r && r.length && r.is(":visible") && [
                    [r[n]().top + i, o]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                a = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
            if (a && t < o[0]) return this.activeTarget = null, this.clear();
            for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
                i.trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function() {
            e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = i, this
        }, e(window).on("load.bs.scrollspy.data-api", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
            })
        }
        var n = function(t) {
            this.element = e(t)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"),
                    r = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    a = e.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var s = e(i);
                    this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(t, i, o) {
            function r() {
                a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            var a = i.find("> .active"),
                s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
            a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, this
        };
        var o = function(n) {
            n.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var o = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(o, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof t && t;
                (o || !/destroy|hide/.test(t)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
            })
        }
        var n = function(e, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(t, n, i) {
            if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var a = o[r];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var s = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, n.prototype.getDelegateOptions = function() {
            var t = {},
                n = this.getDefaults();
            return this._options && e.each(this._options, function(e, i) {
                n[e] != i && (t[e] = i)
            }), t
        }, n.prototype.enter = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function() {
            for (var e in this.inState)
                if (this.inState[e]) return !0;
            return !1
        }, n.prototype.leave = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, n.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !i) return;
                var o = this,
                    r = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(s);
                d && (s = s.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    u = r[0].offsetWidth,
                    f = r[0].offsetHeight;
                if (d) {
                    var p = s,
                        h = this.getPosition(this.$viewport);
                    s = "bottom" == s && c.bottom + f > h.bottom ? "top" : "top" == s && c.top - f < h.top ? "bottom" : "right" == s && c.right + u > h.width ? "left" : "left" == s && c.left - u < h.left ? "right" : s, r.removeClass(p).addClass(s)
                }
                var g = this.getCalculatedOffset(s, c, u, f);
                this.applyPlacement(g, s);
                var m = function() {
                    var e = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
                };
                e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
            }
        }, n.prototype.applyPlacement = function(t, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
                using: function(e) {
                    i.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                d = i[0].offsetHeight;
            "top" == n && d != r && (t.top = t.top + r - d);
            var c = this.getViewportAdjustedDelta(n, t, l, d);
            c.left ? t.left += c.left : t.top += c.top;
            var u = /top|bottom/.test(n),
                f = u ? 2 * c.left - o + l : 2 * c.top - r + d,
                p = u ? "offsetWidth" : "offsetHeight";
            i.offset(t), this.replaceArrow(f, i[0][p], u)
        }, n.prototype.replaceArrow = function(e, t, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(t) {
            function i() {
                "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
            }
            var o = this,
                r = e(this.$tip),
                a = e.Event("hide.bs." + this.type);
            return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, n.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(t) {
            t = t || this.$element;
            var n = t[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = e.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var r = i ? {
                    top: 0,
                    left: 0
                } : t.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                s = i ? {
                    width: e(window).width(),
                    height: e(window).height()
                } : null;
            return e.extend({}, o, a, s, r)
        }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : "top" == e ? {
                top: t.top - i,
                left: t.left + t.width / 2 - n / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - i / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - i / 2,
                left: t.left + t.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var s = t.top - r - a.scroll,
                    l = t.top + r - a.scroll + i;
                s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
            } else {
                var d = t.left - r,
                    c = t.left + r + n;
                d < a.left ? o.left = a.left - d : c > a.right && (o.left = a.left + a.width - c)
            }
            return o
        }, n.prototype.getTitle = function() {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        }, n.prototype.getUID = function(e) {
            do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
            return e
        }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function(t) {
            var n = this;
            t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
            })
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = i, this
        }
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof t && t;
                (o || !/destroy|hide/.test(t)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
            })
        }
        var n = function(e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.6", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
            return e.fn.popover = i, this
        }
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e(r);
        t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var o = "prev" == e ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var d = r[0],
            c = e.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = e(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var f = e.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
                r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = e.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(r).each(function() {
            var i = e(this),
                o = t(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.6", a.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o),
                a = r.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i),
                    a = o.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var d = l.index(n.target);
                    38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                r = o.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, a, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(s);
            d && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                u = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (d) {
                var p = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + f > h.bottom ? "top" : "top" == s && c.top - f < h.top ? "bottom" : "right" == s && c.right + u > h.width ? "left" : "left" == s && c.left - u < h.left ? "right" : s, r.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, u, f);
            this.applyPlacement(g, s);
            var m = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            d = i[0].offsetHeight;
        "top" == n && d != r && (t.top = t.top + r - d);
        var c = this.getViewportAdjustedDelta(n, t, l, d);
        c.left ? t.left += c.left : t.top += c.top;
        var u = /top|bottom/.test(n),
            f = u ? 2 * c.left - o + l : 2 * c.top - r + d,
            p = u ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(f, i[0][p], u)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            r = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, a, s, r)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - a.scroll,
                l = t.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var d = t.left - r,
                c = t.left + r + n;
            d < a.left ? o.left = a.left - d : c > a.right && (o.left = a.left + a.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.6", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
        if (a && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function r() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var a = i.find("> .active"),
            s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : e - i >= o + a ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            d = s ? a : t;
        return null != n && n >= o ? "top" : null != i && l + d >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, t, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    d = e.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
}(function(e) {
    "use strict";
    e.fn.fileinputLocales = {}, e.fn.fileinputThemes = {};
    var t, n, i, o, r, a, s, l, d, c, u, f, p, h, g, m, v, b, y, w, x, T, C, k, S, D, _, $, E, A, O, I, F, P, j, N, M, R, z, L, W, H, U, B, q, Y, J, Z, V, Q, X, G, K, ee, te, ne, ie, oe, re, ae, se, le, de, ce, ue, fe, pe, he;
    t = ".fileinput", n = "kvFileinputModal", i = 'style="width:{width};height:{height};"', o = '<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n', r = '<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>', a = window.URL || window.webkitURL, s = function(e, t, n) {
        return void 0 !== e && (n ? e === t : e.match(t))
    }, l = function(e) {
        if ("Microsoft Internet Explorer" !== navigator.appName) return !1;
        if (10 === e) return new RegExp("msie\\s" + e, "i").test(navigator.userAgent);
        var t, n = document.createElement("div");
        return n.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", t = n.getElementsByTagName("i").length, document.body.appendChild(n), n.parentNode.removeChild(n), t
    }, d = function(e, n, i, o) {
        var r = o ? n : n.split(" ").join(t + " ") + t;
        e.off(r).on(r, i)
    }, c = {
        data: {},
        init: function(e) {
            var t = e.initialPreview,
                n = e.id;
            t.length > 0 && !oe(t) && (t = t.split(e.initialPreviewDelimiter)), c.data[n] = {
                content: t,
                config: e.initialPreviewConfig,
                tags: e.initialPreviewThumbTags,
                delimiter: e.initialPreviewDelimiter,
                previewFileType: e.initialPreviewFileType,
                previewAsData: e.initialPreviewAsData,
                template: e.previewGenericTemplate,
                showZoom: e.fileActionSettings.showZoom,
                showDrag: e.fileActionSettings.showDrag,
                getSize: function(t) {
                    return e._getSize(t)
                },
                parseTemplate: function(t, n, i, o, r, a, s) {
                    var l = " file-preview-initial";
                    return e._generatePreviewTemplate(t, n, i, o, r, !1, null, l, a, s)
                },
                msg: function(t) {
                    return e._getMsgSelected(t)
                },
                initId: e.previewInitId,
                footer: e._getLayoutTemplate("footer").replace(/\{progress}/g, e._renderThumbProgress()),
                isDelete: e.initialPreviewShowDelete,
                caption: e.initialCaption,
                actions: function(t, n, i, o, r, a, s) {
                    return e._renderFileActions(t, n, i, o, r, a, s, !0)
                }
            }
        },
        fetch: function(e) {
            return c.data[e].content.filter(function(e) {
                return null !== e
            })
        },
        count: function(e, t) {
            return c.data[e] && c.data[e].content ? t ? c.data[e].content.length : c.fetch(e).length : 0
        },
        get: function(t, n, i) {
            var o, r, a, s, l, d, u = "init_" + n,
                f = c.data[t],
                p = f.config[n],
                h = f.content[n],
                g = f.initId + "-" + u,
                m = " file-preview-initial",
                v = re("previewAsData", p, f.previewAsData);
            return i = void 0 === i || i, h ? (p && p.frameClass && (m += " " + p.frameClass), v ? (a = f.previewAsData ? re("type", p, f.previewFileType || "generic") : "generic", s = re("caption", p), l = c.footer(t, n, i, p && p.size || null), d = re("filetype", p, a), o = f.parseTemplate(a, h, s, d, g, l, u, null)) : o = f.template.replace(/\{previewId}/g, g).replace(/\{frameClass}/g, m).replace(/\{fileindex}/g, u).replace(/\{content}/g, f.content[n]).replace(/\{template}/g, re("type", p, f.previewFileType)).replace(/\{footer}/g, c.footer(t, n, i, p && p.size || null)), f.tags.length && f.tags[n] && (o = le(o, f.tags[n])), ie(p) || ie(p.frameAttr) || (r = e(document.createElement("div")).html(o), r.find(".file-preview-initial").attr(p.frameAttr), o = r.html(), r.remove()), o) : ""
        },
        add: function(t, n, i, o, r) {
            var a, s = e.extend(!0, {}, c.data[t]);
            return oe(n) || (n = n.split(s.delimiter)), r ? (a = s.content.push(n) - 1, s.config[a] = i, s.tags[a] = o) : (a = n.length - 1, s.content = n, s.config = i, s.tags = o), c.data[t] = s, a
        },
        set: function(t, n, i, o, r) {
            var a, s, l = e.extend(!0, {}, c.data[t]);
            if (n && n.length && (oe(n) || (n = n.split(l.delimiter)), s = n.filter(function(e) {
                    return null !== e
                }), s.length)) {
                if (void 0 === l.content && (l.content = []), void 0 === l.config && (l.config = []), void 0 === l.tags && (l.tags = []), r) {
                    for (a = 0; a < n.length; a++) n[a] && l.content.push(n[a]);
                    for (a = 0; a < i.length; a++) i[a] && l.config.push(i[a]);
                    for (a = 0; a < o.length; a++) o[a] && l.tags.push(o[a])
                } else l.content = n, l.config = i, l.tags = o;
                c.data[t] = l
            }
        },
        unset: function(e, t) {
            var n = c.count(e);
            if (n) {
                if (1 === n) return c.data[e].content = [], c.data[e].config = [], void(c.data[e].tags = []);
                c.data[e].content[t] = null, c.data[e].config[t] = null, c.data[e].tags[t] = null
            }
        },
        out: function(e) {
            var t, n = "",
                i = c.data[e],
                o = c.count(e, !0);
            if (0 === o) return {
                content: "",
                caption: ""
            };
            for (var r = 0; o > r; r++) n += c.get(e, r);
            return t = i.msg(c.count(e)), {
                content: '<div class="file-initial-thumbs">' + n + "</div>",
                caption: t
            }
        },
        footer: function(e, t, n, i) {
            var o = c.data[e];
            if (n = void 0 === n || n, 0 === o.config.length || ie(o.config[t])) return "";
            var r = o.config[t],
                a = re("caption", r),
                s = re("width", r, "auto"),
                l = re("url", r, !1),
                d = re("key", r, null),
                u = re("showDelete", r, !0),
                f = re("showZoom", r, o.showZoom),
                p = re("showDrag", r, o.showDrag),
                h = l === !1 && n,
                g = o.isDelete ? o.actions(!1, u, f, p, h, l, d) : "",
                m = o.footer.replace(/\{actions}/g, g);
            return m.replace(/\{caption}/g, a).replace(/\{size}/g, o.getSize(i)).replace(/\{width}/g, s).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "")
        }
    }, u = function(e, t) {
        return t = t || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? t : e)
    }, f = function() {
        return !(!window.File || !window.FileReader)
    }, p = function() {
        var e = document.createElement("div");
        return !l(9) && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop)
    }, h = function() {
        return f() && window.FormData
    }, g = function(e, t) {
        e.removeClass(t).addClass(t)
    }, V = {
        showRemove: !0,
        showUpload: !0,
        showZoom: !0,
        showDrag: !0,
        removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>',
        removeClass: "btn btn-xs btn-default",
        removeTitle: "Remove file",
        uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>',
        uploadClass: "btn btn-xs btn-default",
        uploadTitle: "Upload file",
        zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>',
        zoomClass: "btn btn-xs btn-default",
        zoomTitle: "View Details",
        dragIcon: '<i class="glyphicon glyphicon-menu-hamburger"></i>',
        dragClass: "text-info",
        dragTitle: "Move / Rearrange",
        dragSettings: {},
        indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>',
        indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
        indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
        indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>',
        indicatorNewTitle: "Not uploaded yet",
        indicatorSuccessTitle: "Uploaded",
        indicatorErrorTitle: "Upload Error",
        indicatorLoadingTitle: "Uploading ..."
    }, m = '{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>', v = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', b = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', w = '<div class="close fileinput-remove">&times;</div>\n', y = '<i class="glyphicon glyphicon-file kv-caption-icon"></i>', x = '<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n', T = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>', C = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>', k = '<div tabindex="500" class="{css}" {status}>{icon} {label}</div>', S = '<div id="' + n + '" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="' + n + 'Label"></div>', D = '<div class="modal-dialog modal-lg" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="kv-zoom-actions pull-right">{toggleheader}{fullscreen}{borderless}{close}</div>\n      <h3 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h3>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n', _ = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>', $ = " <br><samp>({sizeText})</samp>", E = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}{size}</div>\n    {progress} {actions}\n</div>', A = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload} {delete} {zoom} {other}    </div>\n    {drag}\n    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>', O = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', I = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>', F = '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>', P = '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>', j = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"', N = j + '><div class="kv-file-content">\n', M = j + ' title="{caption}" ' + i + '><div class="kv-file-content">\n', R = "</div>{footer}\n</div>\n", z = "{content}\n", L = '<div class="kv-preview-data file-preview-html" title="{caption}" ' + i + ">{data}</div>\n", W = '<img src="{data}" class="kv-preview-data file-preview-image" title="{caption}" alt="{caption}" ' + i + ">\n", H = '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly ' + i + ">{data}</textarea>\n", U = '<video class="kv-preview-data" width="{width}" height="{height}" controls>\n<source src="{data}" type="{type}">\n' + r + "\n</video>\n", B = '<audio class="kv-preview-data" controls>\n<source src="{data}" type="{type}">\n' + r + "\n</audio>\n", q = '<object class="kv-preview-data file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + o + " " + r + "\n</object>\n", Y = '<object class="kv-preview-data file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n<param name="movie" value="{caption}" />\n' + o + " " + r + "\n</object>\n", J = '<embed class="kv-preview-data" src="{data}" width="{width}" height="{height}" type="application/pdf">\n', Z = '<div class="kv-preview-data file-preview-other-frame">\n' + r + "\n</div>\n", Q = {
        main1: m,
        main2: v,
        preview: b,
        close: w,
        fileIcon: y,
        caption: x,
        modalMain: S,
        modal: D,
        progress: _,
        size: $,
        footer: E,
        actions: A,
        actionDelete: O,
        actionUpload: I,
        actionZoom: F,
        actionDrag: P,
        btnDefault: T,
        btnLink: C,
        btnBrowse: k
    }, X = {
        generic: N + z + R,
        html: N + L + R,
        image: N + W + R,
        text: N + H + R,
        video: M + U + R,
        audio: M + B + R,
        flash: M + q + R,
        object: M + Y + R,
        pdf: M + J + R,
        other: M + Z + R
    }, K = ["image", "html", "text", "video", "audio", "flash", "pdf", "object"], te = {
        image: {
            width: "auto",
            height: "160px"
        },
        html: {
            width: "213px",
            height: "160px"
        },
        text: {
            width: "213px",
            height: "160px"
        },
        video: {
            width: "213px",
            height: "160px"
        },
        audio: {
            width: "213px",
            height: "80px"
        },
        flash: {
            width: "213px",
            height: "160px"
        },
        object: {
            width: "160px",
            height: "160px"
        },
        pdf: {
            width: "160px",
            height: "160px"
        },
        other: {
            width: "160px",
            height: "160px"
        }
    }, G = {
        image: {
            width: "100%",
            height: "100%"
        },
        html: {
            width: "100%",
            height: "100%",
            "min-height": "480px"
        },
        text: {
            width: "100%",
            height: "100%",
            "min-height": "480px"
        },
        video: {
            width: "auto",
            height: "100%",
            "max-width": "100%"
        },
        audio: {
            width: "100%",
            height: "30px"
        },
        flash: {
            width: "auto",
            height: "480px"
        },
        object: {
            width: "auto",
            height: "100%",
            "min-height": "480px"
        },
        pdf: {
            width: "100%",
            height: "100%",
            "min-height": "480px"
        },
        other: {
            width: "auto",
            height: "100%",
            "min-height": "480px"
        }
    }, ne = {
        image: function(e, t) {
            return s(e, "image.*") || s(t, /\.(gif|png|jpe?g)$/i)
        },
        html: function(e, t) {
            return s(e, "text/html") || s(t, /\.(htm|html)$/i)
        },
        text: function(e, t) {
            return s(e, "text.*") || s(t, /\.(xml|javascript)$/i) || s(t, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)
        },
        video: function(e, t) {
            return s(e, "video.*") && (s(e, /(ogg|mp4|mp?g|webm|3gp)$/i) || s(t, /\.(og?|mp4|webm|mp?g|3gp)$/i))
        },
        audio: function(e, t) {
            return s(e, "audio.*") && (s(t, /(ogg|mp3|mp?g|wav)$/i) || s(t, /\.(og?|mp3|mp?g|wav)$/i))
        },
        flash: function(e, t) {
            return s(e, "application/x-shockwave-flash", !0) || s(t, /\.(swf)$/i)
        },
        pdf: function(e, t) {
            return s(e, "application/pdf", !0) || s(t, /\.(pdf)$/i)
        },
        object: function() {
            return !0
        },
        other: function() {
            return !0
        }
    }, ie = function(t, n) {
        return void 0 === t || null === t || 0 === t.length || n && "" === e.trim(t)
    }, oe = function(e) {
        return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e)
    }, re = function(e, t, n) {
        return n = n || "", t && "object" == typeof t && e in t ? t[e] : n
    }, ee = function(t, n, i) {
        return ie(t) || ie(t[n]) ? i : e(t[n])
    }, ae = function() {
        return Math.round((new Date).getTime() + 100 * Math.random())
    }, se = function(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }, le = function(t, n) {
        var i = t;
        return n ? (e.each(n, function(e, t) {
            "function" == typeof t && (t = t()), i = i.split(e).join(t)
        }), i) : i
    }, de = function(e) {
        var t = e.is("img") ? e.attr("src") : e.find("source").attr("src");
        a.revokeObjectURL(t)
    }, ce = function(e) {
        var t = e.lastIndexOf("/");
        return -1 === t && (t = e.lastIndexOf("\\")), e.split(e.substring(t, t + 1)).pop()
    }, ue = function() {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
    }, fe = function(e) {
        e && !ue() ? document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }, pe = function(e, t, n) {
        if (n >= e.length)
            for (var i = n - e.length; i-- + 1;) e.push(void 0);
        return e.splice(n, 0, e.splice(t, 1)[0]), e
    }, he = function(t, n) {
        var i = this;
        i.$element = e(t), i._validate() && (i.isPreviewable = f(), i.isIE9 = l(9), i.isIE10 = l(10), i.isPreviewable || i.isIE9 ? (i._init(n), i._listen()) : i.$element.removeClass("file-loading"))
    }, he.prototype = {
        constructor: he,
        _init: function(t) {
            var n, i = this,
                o = i.$element;
            e.each(t, function(e, t) {
                    switch (e) {
                        case "minFileCount":
                        case "maxFileCount":
                        case "maxFileSize":
                            i[e] = u(t);
                            break;
                        default:
                            i[e] = t
                    }
                }), i.fileInputCleared = !1, i.fileBatchCompleted = !0, i.isPreviewable || (i.showPreview = !1), i.uploadFileAttr = ie(o.attr("name")) ? "file_data" : o.attr("name"), i.reader = null, i.formdata = {}, i.clearStack(), i.uploadCount = 0, i.uploadStatus = {}, i.uploadLog = [], i.uploadAsyncCount = 0, i.loadedImages = [], i.totalImagesCount = 0, i.ajaxRequests = [], i.isError = !1, i.ajaxAborted = !1, i.cancelling = !1, n = i._getLayoutTemplate("progress"), i.progressTemplate = n.replace("{class}", i.progressClass), i.progressCompleteTemplate = n.replace("{class}", i.progressCompleteClass), i.progressErrorTemplate = n.replace("{class}", i.progressErrorClass), i.dropZoneEnabled = p() && i.dropZoneEnabled, i.isDisabled = i.$element.attr("disabled") || i.$element.attr("readonly"), i.isUploadable = h() && !ie(i.uploadUrl), i.isClickable = i.browseOnZoneClick && i.showPreview && (i.isUploadable && i.dropZoneEnabled || !ie(i.defaultPreviewContent)), i.slug = "function" == typeof t.slugCallback ? t.slugCallback : i._slugDefault, i.mainTemplate = i.showCaption ? i._getLayoutTemplate("main1") : i._getLayoutTemplate("main2"),
                i.captionTemplate = i._getLayoutTemplate("caption"), i.previewGenericTemplate = i._getPreviewTemplate("generic"), i.resizeImage && (i.maxImageWidth || i.maxImageHeight) && (i.imageCanvas = document.createElement("canvas"), i.imageCanvasContext = i.imageCanvas.getContext("2d")), ie(i.$element.attr("id")) && i.$element.attr("id", ae()), void 0 === i.$container ? i.$container = i._createContainer() : i._refreshContainer(), i.$dropZone = i.$container.find(".file-drop-zone"), i.$progress = i.$container.find(".kv-upload-progress"), i.$btnUpload = i.$container.find(".fileinput-upload"), i.$captionContainer = ee(t, "elCaptionContainer", i.$container.find(".file-caption")), i.$caption = ee(t, "elCaptionText", i.$container.find(".file-caption-name")), i.$previewContainer = ee(t, "elPreviewContainer", i.$container.find(".file-preview")), i.$preview = ee(t, "elPreviewImage", i.$container.find(".file-preview-thumbnails")), i.$previewStatus = ee(t, "elPreviewStatus", i.$container.find(".file-preview-status")), i.$errorContainer = ee(t, "elErrorContainer", i.$previewContainer.find(".kv-fileinput-error")), ie(i.msgErrorClass) || g(i.$errorContainer, i.msgErrorClass), i.$errorContainer.hide(), i.fileActionSettings = e.extend(!0, V, t.fileActionSettings), i.previewInitId = "preview-" + ae(), i.id = i.$element.attr("id"), c.init(i), i._initPreview(!0), i._initPreviewActions(), i.options = t, i._setFileDropZoneTitle(), i.$element.removeClass("file-loading"), i.$element.attr("disabled") && i.disable(), i._initZoom()
        },
        _validate: function() {
            var e, t = this;
            return "file" === t.$element.attr("type") || (e = '<div class="help-block alert alert-warning"><h4>Invalid Input Type</h4>You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.</div>', t.$element.after(e), !1)
        },
        _errorsExist: function() {
            var t, n = this;
            return !!n.$errorContainer.find("li").length || (t = e(document.createElement("div")).html(n.$errorContainer.html()), t.find("span.kv-error-close").remove(), t.find("ul").remove(), !!e.trim(t.text()).length)
        },
        _errorHandler: function(e, t) {
            var n = this,
                i = e.target.error;
            i.code === i.NOT_FOUND_ERR ? n._showError(n.msgFileNotFound.replace("{name}", t)) : i.code === i.SECURITY_ERR ? n._showError(n.msgFileSecured.replace("{name}", t)) : i.code === i.NOT_READABLE_ERR ? n._showError(n.msgFileNotReadable.replace("{name}", t)) : i.code === i.ABORT_ERR ? n._showError(n.msgFilePreviewAborted.replace("{name}", t)) : n._showError(n.msgFilePreviewError.replace("{name}", t))
        },
        _addError: function(e) {
            var t = this,
                n = t.$errorContainer;
            e && n.length && (n.html(t.errorCloseButton + e), d(n.find(".kv-error-close"), "click", function() {
                n.fadeOut("slow")
            }))
        },
        _resetErrors: function(e) {
            var t = this,
                n = t.$errorContainer;
            t.isError = !1, t.$container.removeClass("has-error"), n.html(""), e ? n.fadeOut("slow") : n.hide()
        },
        _showFolderError: function(e) {
            var t, n = this,
                i = n.$errorContainer;
            e && (t = n.msgFoldersNotAllowed.replace(/\{n}/g, e), n._addError(t), g(n.$container, "has-error"), i.fadeIn(800), n._raise("filefoldererror", [e, t]))
        },
        _showUploadError: function(e, t, n) {
            var i = this,
                o = i.$errorContainer,
                r = n || "fileuploaderror",
                a = t && t.id ? '<li data-file-id="' + t.id + '">' + e + "</li>" : "<li>" + e + "</li>";
            return 0 === o.find("ul").length ? i._addError("<ul>" + a + "</ul>") : o.find("ul").append(a), o.fadeIn(800), i._raise(r, [t, e]), i.$container.removeClass("file-input-new"), g(i.$container, "has-error"), !0
        },
        _showError: function(e, t, n) {
            var i = this,
                o = i.$errorContainer,
                r = n || "fileerror";
            return t = t || {}, t.reader = i.reader, i._addError(e), o.fadeIn(800), i._raise(r, [t, e]), i.isUploadable || i._clearFileInput(), i.$container.removeClass("file-input-new"), g(i.$container, "has-error"), i.$btnUpload.attr("disabled", !0), !0
        },
        _noFilesError: function(e) {
            var t = this,
                n = t.minFileCount > 1 ? t.filePlural : t.fileSingle,
                i = t.msgFilesTooLess.replace("{n}", t.minFileCount).replace("{files}", n),
                o = t.$errorContainer;
            t._addError(i), t.isError = !0, t._updateFileDetails(0), o.fadeIn(800), t._raise("fileerror", [e, i]), t._clearFileInput(), g(t.$container, "has-error")
        },
        _parseError: function(t, n, i) {
            var o = this,
                r = e.trim(n + ""),
                a = "." === r.slice(-1) ? "" : ".",
                s = void 0 !== t.responseJSON && void 0 !== t.responseJSON.error ? t.responseJSON.error : t.responseText;
            return o.cancelling && o.msgUploadAborted && (r = o.msgUploadAborted), o.showAjaxErrorDetails && s ? (s = e.trim(s.replace(/\n\s*\n/g, "\n")), s = s.length > 0 ? "<pre>" + s + "</pre>" : "", r += a + s) : r += a, o.cancelling = !1, i ? "<b>" + i + ": </b>" + r : r
        },
        _parseFileType: function(e) {
            var t, n, i, o, r = this;
            for (o = 0; o < K.length; o += 1)
                if (i = K[o], t = re(i, r.fileTypeSettings, ne[i]), n = t(e.type, e.name) ? i : "", !ie(n)) return n;
            return "other"
        },
        _parseFilePreviewIcon: function(t, n) {
            var i, o, r = this,
                a = r.previewFileIcon;
            return n && n.indexOf(".") > -1 && (o = n.split(".").pop(), r.previewFileIconSettings && r.previewFileIconSettings[o] && (a = r.previewFileIconSettings[o]), r.previewFileExtSettings && e.each(r.previewFileExtSettings, function(e, t) {
                return r.previewFileIconSettings[e] && t(o) ? void(a = r.previewFileIconSettings[e]) : void(i = !0)
            })), t.indexOf("{previewFileIcon}") > -1 ? t.replace(/\{previewFileIconClass}/g, r.previewFileIconClass).replace(/\{previewFileIcon}/g, a) : t
        },
        _raise: function(t, n) {
            var i = this,
                o = e.Event(t);
            if (void 0 !== n ? i.$element.trigger(o, n) : i.$element.trigger(o), o.isDefaultPrevented()) return !1;
            if (!o.result) return o.result;
            switch (t) {
                case "filebatchuploadcomplete":
                case "filebatchuploadsuccess":
                case "fileuploaded":
                case "fileclear":
                case "filecleared":
                case "filereset":
                case "fileerror":
                case "filefoldererror":
                case "fileuploaderror":
                case "filebatchuploaderror":
                case "filedeleteerror":
                case "filecustomerror":
                case "filesuccessremove":
                    break;
                default:
                    i.ajaxAborted = o.result
            }
            return !0
        },
        _listenFullScreen: function(e) {
            var t, n, i = this,
                o = i.$modal;
            o && o.length && (t = o && o.find(".btn-fullscreen"), n = o && o.find(".btn-borderless"), t.length && n.length && (t.removeClass("active").attr("aria-pressed", "false"), n.removeClass("active").attr("aria-pressed", "false"), e ? t.addClass("active").attr("aria-pressed", "true") : n.addClass("active").attr("aria-pressed", "true"), o.hasClass("file-zoom-fullscreen") ? i._maximizeZoomDialog() : e ? i._maximizeZoomDialog() : n.removeClass("active").attr("aria-pressed", "false")))
        },
        _listen: function() {
            var t = this,
                n = t.$element,
                i = n.closest("form"),
                o = t.$container;
            d(n, "change", e.proxy(t._change, t)), t.showBrowse && d(t.$btnFile, "click", e.proxy(t._browse, t)), d(i, "reset", e.proxy(t.reset, t)), d(o.find(".fileinput-remove:not([disabled])"), "click", e.proxy(t.clear, t)), d(o.find(".fileinput-cancel"), "click", e.proxy(t.cancel, t)), t._initDragDrop(), t.isUploadable || d(i, "submit", e.proxy(t._submitForm, t)), d(t.$container.find(".fileinput-upload"), "click", e.proxy(t._uploadClick, t)), d(e(window), "resize", function() {
                t._listenFullScreen(screen.width === window.innerWidth && screen.height === window.innerHeight)
            }), d(e(document), "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function() {
                t._listenFullScreen(ue())
            }), t._initClickable()
        },
        _initClickable: function() {
            var t, n = this;
            n.isClickable && (t = n.isUploadable ? n.$dropZone : n.$preview.find(".file-default-preview"), g(t, "clickable"), t.attr("tabindex", -1), d(t, "click", function(i) {
                var o = e(i.target);
                o.parents(".file-preview-thumbnails").length && !o.parents(".file-default-preview").length || (n.$element.trigger("click"), t.blur())
            }))
        },
        _initDragDrop: function() {
            var t = this,
                n = t.$dropZone;
            t.isUploadable && t.dropZoneEnabled && t.showPreview && (d(n, "dragenter dragover", e.proxy(t._zoneDragEnter, t)), d(n, "dragleave", e.proxy(t._zoneDragLeave, t)), d(n, "drop", e.proxy(t._zoneDrop, t)), d(e(document), "dragenter dragover drop", t._zoneDragDropInit))
        },
        _zoneDragDropInit: function(e) {
            e.stopPropagation(), e.preventDefault()
        },
        _zoneDragEnter: function(t) {
            var n = this,
                i = e.inArray("Files", t.originalEvent.dataTransfer.types) > -1;
            return n._zoneDragDropInit(t), n.isDisabled || !i ? (t.originalEvent.dataTransfer.effectAllowed = "none", void(t.originalEvent.dataTransfer.dropEffect = "none")) : void g(n.$dropZone, "file-highlighted")
        },
        _zoneDragLeave: function(e) {
            var t = this;
            t._zoneDragDropInit(e), t.isDisabled || t.$dropZone.removeClass("file-highlighted")
        },
        _zoneDrop: function(e) {
            var t = this;
            e.preventDefault(), t.isDisabled || ie(e.originalEvent.dataTransfer.files) || (t._change(e, "dragdrop"), t.$dropZone.removeClass("file-highlighted"))
        },
        _uploadClick: function(e) {
            var t, n = this,
                i = n.$container.find(".fileinput-upload"),
                o = !i.hasClass("disabled") && ie(i.attr("disabled"));
            if (!e || !e.isDefaultPrevented()) {
                if (!n.isUploadable) return void(o && "submit" !== i.attr("type") && (t = i.closest("form"), t.length && t.trigger("submit"), e.preventDefault()));
                e.preventDefault(), o && n.upload()
            }
        },
        _submitForm: function() {
            var e = this,
                t = e.$element,
                n = t.get(0).files;
            return n && e.minFileCount > 0 && e._getFileCount(n.length) < e.minFileCount ? (e._noFilesError({}), !1) : !e._abort({})
        },
        _clearPreview: function() {
            var e = this,
                t = e.showUploadedThumbs ? e.$preview.find(".file-preview-frame:not(.file-preview-success)") : e.$preview.find(".file-preview-frame");
            t.remove(), e.$preview.find(".file-preview-frame").length && e.showPreview || e._resetUpload(), e._validateDefaultPreview()
        },
        _initSortable: function() {
            var t, n, i = this,
                o = i.$preview;
            window.KvSortable && (t = o.find(".file-initial-thumbs"), n = {
                handle: ".drag-handle-init",
                dataIdAttr: "data-preview-id",
                draggable: ".file-preview-initial",
                onSort: function(t) {
                    var n = t.oldIndex,
                        o = t.newIndex;
                    i.initialPreview = pe(i.initialPreview, n, o), i.initialPreviewConfig = pe(i.initialPreviewConfig, n, o), c.init(i), i._raise("filesorted", {
                        previewId: e(t.item).attr("id"),
                        oldIndex: n,
                        newIndex: o,
                        stack: i.initialPreviewConfig
                    })
                }
            }, t.data("kvsortable") && t.kvsortable("destroy"), e.extend(!0, n, i.fileActionSettings.dragSettings), t.kvsortable(n))
        },
        _initPreview: function(e) {
            var t, n = this,
                i = n.initialCaption || "";
            return c.count(n.id) ? (t = c.out(n.id), i = e && n.initialCaption ? n.initialCaption : t.caption, n.$preview.html(t.content), n._setCaption(i), n._initSortable(), void(ie(t.content) || n.$container.removeClass("file-input-new"))) : (n._clearPreview(), void(e ? n._setCaption(i) : n._initCaption()))
        },
        _getZoomButton: function(e) {
            var t = this,
                n = t.previewZoomButtonIcons[e],
                i = t.previewZoomButtonClasses[e],
                o = ' title="' + (t.previewZoomButtonTitles[e] || "") + '" ',
                r = o + ("close" === e ? ' data-dismiss="modal" aria-hidden="true"' : "");
            return "fullscreen" !== e && "borderless" !== e && "toggleheader" !== e || (r += ' data-toggle="button" aria-pressed="false" autocomplete="off"'), '<button type="button" class="' + i + " btn-" + e + '"' + r + ">" + n + "</button>"
        },
        _getModalContent: function() {
            var e = this;
            return e._getLayoutTemplate("modal").replace(/\{heading}/g, e.msgZoomModalHeading).replace(/\{prev}/g, e._getZoomButton("prev")).replace(/\{next}/g, e._getZoomButton("next")).replace(/\{toggleheader}/g, e._getZoomButton("toggleheader")).replace(/\{fullscreen}/g, e._getZoomButton("fullscreen")).replace(/\{borderless}/g, e._getZoomButton("borderless")).replace(/\{close}/g, e._getZoomButton("close"))
        },
        _listenModalEvent: function(e) {
            var t = this,
                n = t.$modal,
                i = function(e) {
                    return {
                        sourceEvent: e,
                        previewId: n.data("previewId"),
                        modal: n
                    }
                };
            n.on(e + ".bs.modal", function(o) {
                var r = n.find(".btn-fullscreen"),
                    a = n.find(".btn-borderless");
                t._raise("filezoom" + e, i(o)), "shown" === e && (a.removeClass("active").attr("aria-pressed", "false"), r.removeClass("active").attr("aria-pressed", "false"), n.hasClass("file-zoom-fullscreen") && (t._maximizeZoomDialog(), ue() ? r.addClass("active").attr("aria-pressed", "true") : a.addClass("active").attr("aria-pressed", "true")))
            })
        },
        _initZoom: function() {
            var t, i = this,
                o = i._getLayoutTemplate("modalMain"),
                r = "#" + n;
            i.$modal = e(r), i.$modal && i.$modal.length || (t = e(document.createElement("div")).html(o).insertAfter(i.$container), i.$modal = e("#" + n).insertBefore(t), t.remove()), i.$modal.html(i._getModalContent()), i._listenModalEvent("show"), i._listenModalEvent("shown"), i._listenModalEvent("hide"), i._listenModalEvent("hidden"), i._listenModalEvent("loaded")
        },
        _initZoomButtons: function() {
            var t, n, i = this,
                o = i.$modal.data("previewId") || "",
                r = i.$preview.find(".file-preview-frame").toArray(),
                a = r.length,
                s = i.$modal.find(".btn-prev"),
                l = i.$modal.find(".btn-next");
            a && (t = e(r[0]), n = e(r[a - 1]), s.removeAttr("disabled"), l.removeAttr("disabled"), t.length && t.attr("id") === o && s.attr("disabled", !0), n.length && n.attr("id") === o && l.attr("disabled", !0))
        },
        _maximizeZoomDialog: function() {
            var t = this,
                n = t.$modal,
                i = n.find(".modal-header:visible"),
                o = n.find(".modal-footer:visible"),
                r = n.find(".modal-body"),
                a = e(window).height(),
                s = 0;
            n.addClass("file-zoom-fullscreen"), i && i.length && (a -= i.outerHeight(!0)), o && o.length && (a -= o.outerHeight(!0)), r && r.length && (s = r.outerHeight(!0) - r.height(), a -= s), n.find(".kv-zoom-body").height(a)
        },
        _resizeZoomDialog: function(e) {
            var t = this,
                n = t.$modal,
                i = n.find(".btn-fullscreen"),
                o = n.find(".btn-borderless");
            if (n.hasClass("file-zoom-fullscreen")) fe(!1), e ? i.hasClass("active") || (n.removeClass("file-zoom-fullscreen"), t._resizeZoomDialog(!0), o.hasClass("active") && o.removeClass("active").attr("aria-pressed", "false")) : i.hasClass("active") ? i.removeClass("active").attr("aria-pressed", "false") : (n.removeClass("file-zoom-fullscreen"), t.$modal.find(".kv-zoom-body").css("height", t.zoomModalHeight));
            else {
                if (!e) return void t._maximizeZoomDialog();
                fe(!0)
            }
            n.focus()
        },
        _setZoomContent: function(t, n) {
            var i, o, r, a, s, l, c, u, f = this,
                p = t.attr("id"),
                h = f.$modal,
                m = h.find(".btn-prev"),
                v = h.find(".btn-next"),
                b = h.find(".btn-fullscreen"),
                y = h.find(".btn-borderless"),
                w = h.find(".btn-toggleheader");
            o = t.data("template") || "generic", i = t.find(".kv-file-content"), r = i.length ? i.html() : "", a = t.find(".file-footer-caption").text() || "", h.find(".kv-zoom-title").html(a), s = h.find(".kv-zoom-body"), n ? (u = s.clone().insertAfter(s), s.html(r).hide(), u.fadeOut("fast", function() {
                s.fadeIn("fast"), u.remove()
            })) : s.html(r), c = f.previewZoomSettings[o], c && (l = s.find(".kv-preview-data"), g(l, "file-zoom-detail"), e.each(c, function(e, t) {
                l.css(e, t), (l.attr("width") && "width" === e || l.attr("height") && "height" === e) && l.removeAttr(e)
            })), h.data("previewId", p), d(m, "click", function() {
                f._zoomSlideShow("prev", p)
            }), d(v, "click", function() {
                f._zoomSlideShow("next", p)
            }), d(b, "click", function() {
                f._resizeZoomDialog(!0)
            }), d(y, "click", function() {
                f._resizeZoomDialog(!1)
            }), d(w, "click", function() {
                var e, t = h.find(".modal-header"),
                    n = h.find(".modal-body .floating-buttons"),
                    i = t.find(".kv-zoom-actions"),
                    o = function(e) {
                        var n = f.$modal.find(".kv-zoom-body"),
                            i = f.zoomModalHeight;
                        h.hasClass("file-zoom-fullscreen") && (i = n.outerHeight(!0), e || (i -= t.outerHeight(!0))), n.css("height", e ? i + e : i)
                    };
                t.is(":visible") ? (e = t.outerHeight(!0), t.slideUp("slow", function() {
                    i.find(".btn").appendTo(n), o(e)
                })) : (n.find(".btn").appendTo(i), t.slideDown("slow", function() {
                    o()
                })), h.focus()
            }), d(h, "keydown", function(e) {
                var t = e.which || e.keyCode;
                37 !== t || m.attr("disabled") || f._zoomSlideShow("prev", p), 39 !== t || v.attr("disabled") || f._zoomSlideShow("next", p)
            })
        },
        _zoomPreview: function(e) {
            var t, n = this;
            if (!e.length) throw "Cannot zoom to detailed preview!";
            n.$modal.html(n._getModalContent()), t = e.closest(".file-preview-frame"), n._setZoomContent(t), n.$modal.modal("show"), n._initZoomButtons()
        },
        _zoomSlideShow: function(t, n) {
            var i, o, r, a = this,
                s = a.$modal.find(".kv-zoom-actions .btn-" + t),
                l = a.$preview.find(".file-preview-frame").toArray(),
                d = l.length;
            if (!s.attr("disabled")) {
                for (o = 0; d > o; o++)
                    if (e(l[o]).attr("id") === n) {
                        r = "prev" === t ? o - 1 : o + 1;
                        break
                    } 0 > r || r >= d || !l[r] || (i = e(l[r]), i.length && a._setZoomContent(i, !0), a._initZoomButtons(), a._raise("filezoom" + t, {
                    previewId: n,
                    modal: a.$modal
                }))
            }
        },
        _initZoomButton: function() {
            var t = this;
            t.$preview.find(".kv-file-zoom").each(function() {
                var n = e(this);
                d(n, "click", function() {
                    t._zoomPreview(n)
                })
            })
        },
        _initPreviewActions: function() {
            var t = this,
                n = t.deleteExtraData || {},
                i = function() {
                    var e = t.isUploadable ? c.count(t.id) : t.$element.get(0).files.length;
                    0 !== t.$preview.find(".kv-file-remove").length || e || (t.reset(), t.initialCaption = "")
                };
            t._initZoomButton(), t.$preview.find(".kv-file-remove").each(function() {
                var o = e(this),
                    r = o.data("url") || t.deleteUrl,
                    a = o.data("key");
                if (!ie(r) && void 0 !== a) {
                    var s, l, u, f, p = o.closest(".file-preview-frame"),
                        h = c.data[t.id],
                        m = p.data("fileindex");
                    m = parseInt(m.replace("init_", "")), u = ie(h.config) && ie(h.config[m]) ? null : h.config[m], f = ie(u) || ie(u.extra) ? n : u.extra, "function" == typeof f && (f = f()), l = {
                        id: o.attr("id"),
                        key: a,
                        extra: f
                    }, s = e.extend(!0, {}, {
                        url: r,
                        type: "POST",
                        dataType: "json",
                        data: e.extend(!0, {}, {
                            key: a
                        }, f),
                        beforeSend: function(e) {
                            t.ajaxAborted = !1, t._raise("filepredelete", [a, e, f]), t.ajaxAborted ? e.abort() : (g(p, "file-uploading"), g(o, "disabled"))
                        },
                        success: function(e, n, r) {
                            var s, d;
                            return ie(e) || ie(e.error) ? (c.unset(t.id, m), s = c.count(t.id), d = s > 0 ? t._getMsgSelected(s) : "", t._raise("filedeleted", [a, r, f]), t._setCaption(d), p.removeClass("file-uploading").addClass("file-deleted"), void p.fadeOut("slow", function() {
                                t._clearObjects(p), p.remove(), i(), s || 0 !== t.getFileStack().length || (t._setCaption(""), t.reset())
                            })) : (l.jqXHR = r, l.response = e, t._showError(e.error, l, "filedeleteerror"), p.removeClass("file-uploading"), o.removeClass("disabled"), void i())
                        },
                        error: function(e, n, o) {
                            var r = t._parseError(e, o);
                            l.jqXHR = e, l.response = {}, t._showError(r, l, "filedeleteerror"), p.removeClass("file-uploading"), i()
                        }
                    }, t.ajaxDeleteSettings), d(o, "click", function() {
                        return !!t._validateMinCount() && void e.ajax(s)
                    })
                }
            })
        },
        _clearObjects: function(t) {
            t.find("video audio").each(function() {
                this.pause(), e(this).remove()
            }), t.find("img object div").each(function() {
                e(this).remove()
            })
        },
        _clearFileInput: function() {
            var t, n, i, o = this,
                r = o.$element;
            o.fileInputCleared = !0, ie(r.val()) || (o.isIE9 || o.isIE10 ? (t = r.closest("form"), n = e(document.createElement("form")), i = e(document.createElement("div")), r.before(i), t.length ? t.after(n) : i.after(n), n.append(r).trigger("reset"), i.before(r).remove(), n.remove()) : r.val(""))
        },
        _resetUpload: function() {
            var e = this;
            e.uploadCache = {
                content: [],
                config: [],
                tags: [],
                append: !0
            }, e.uploadCount = 0, e.uploadStatus = {}, e.uploadLog = [], e.uploadAsyncCount = 0, e.loadedImages = [], e.totalImagesCount = 0, e.$btnUpload.removeAttr("disabled"), e._setProgress(0), g(e.$progress, "hide"), e._resetErrors(!1), e.ajaxAborted = !1, e.ajaxRequests = [], e._resetCanvas()
        },
        _resetCanvas: function() {
            var e = this;
            e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height)
        },
        _hasInitialPreview: function() {
            var e = this;
            return !e.overwriteInitial && c.count(e.id)
        },
        _resetPreview: function() {
            var e, t, n = this;
            c.count(n.id) ? (e = c.out(n.id), n.$preview.html(e.content), t = n.initialCaption ? n.initialCaption : e.caption, n._setCaption(t)) : (n._clearPreview(), n._initCaption()), n.showPreview && (n._initZoom(), n._initSortable())
        },
        _clearDefaultPreview: function() {
            var e = this;
            e.$preview.find(".file-default-preview").remove()
        },
        _validateDefaultPreview: function() {
            var e = this;
            e.showPreview && !ie(e.defaultPreviewContent) && (e.$preview.html('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"), e._initClickable())
        },
        _resetPreviewThumbs: function(e) {
            var t, n = this;
            return e ? (n._clearPreview(), void n.clearStack()) : void(n._hasInitialPreview() ? (t = c.out(n.id), n.$preview.html(t.content), n._setCaption(t.caption), n._initPreviewActions()) : n._clearPreview())
        },
        _getLayoutTemplate: function(e) {
            var t = this,
                n = re(e, t.layoutTemplates, Q[e]);
            return ie(t.customLayoutTags) ? n : le(n, t.customLayoutTags)
        },
        _getPreviewTemplate: function(e) {
            var t = this,
                n = re(e, t.previewTemplates, X[e]);
            return ie(t.customPreviewTags) ? n : le(n, t.customPreviewTags)
        },
        _getOutData: function(e, t, n) {
            var i = this;
            return e = e || {}, t = t || {}, n = n || i.filestack.slice(0) || {}, {
                form: i.formdata,
                files: n,
                filenames: i.filenames,
                filescount: i.getFilesCount(),
                extra: i._getExtraData(),
                response: t,
                reader: i.reader,
                jqXHR: e
            }
        },
        _getMsgSelected: function(e) {
            var t = this,
                n = 1 === e ? t.fileSingle : t.filePlural;
            return e > 0 ? t.msgSelected.replace("{n}", e).replace("{files}", n) : t.msgNoFilesSelected
        },
        _getThumbs: function(e) {
            return e = e || "", this.$preview.find(".file-preview-frame:not(.file-preview-initial)" + e)
        },
        _getExtraData: function(e, t) {
            var n = this,
                i = n.uploadExtraData;
            return "function" == typeof n.uploadExtraData && (i = n.uploadExtraData(e, t)), i
        },
        _initXhr: function(e, t, n) {
            var i = this;
            return e.upload && e.upload.addEventListener("progress", function(e) {
                var o = 0,
                    r = e.total,
                    a = e.loaded || e.position;
                e.lengthComputable && (o = Math.floor(a / r * 100)), t ? i._setAsyncUploadStatus(t, o, n) : i._setProgress(o)
            }, !1), e
        },
        _ajaxSubmit: function(t, n, i, o, r, a) {
            var s, l = this;
            l._raise("filepreajax", [r, a]), l._uploadExtra(r, a), s = e.extend(!0, {}, {
                xhr: function() {
                    var t = e.ajaxSettings.xhr();
                    return l._initXhr(t, r, l.getFileStack().length)
                },
                url: l.uploadUrl,
                type: "POST",
                dataType: "json",
                data: l.formdata,
                cache: !1,
                processData: !1,
                contentType: !1,
                beforeSend: t,
                success: n,
                complete: i,
                error: o
            }, l.ajaxSettings), l.ajaxRequests.push(e.ajax(s))
        },
        _initUploadSuccess: function(t, n, i) {
            var o, r, a, s, l, d, u, f, p = this,
                h = function(e, t) {
                    p[e] instanceof Array || (p[e] = []), t && t.length && (p[e] = p[e].concat(t))
                };
            p.showPreview && "object" == typeof t && !e.isEmptyObject(t) && void 0 !== t.initialPreview && t.initialPreview.length > 0 && (p.hasInitData = !0, l = t.initialPreview || [], d = t.initialPreviewConfig || [], u = t.initialPreviewThumbTags || [], o = !(void 0 !== t.append && !t.append), l.length > 0 && !oe(l) && (l = l.split(p.initialPreviewDelimiter)), p.overwriteInitial = !1, h("initialPreview", l), h("initialPreviewConfig", d), h("initialPreviewThumbTags", u), void 0 !== n ? i ? (f = n.attr("data-fileindex"), p.uploadCache.content[f] = l[0], p.uploadCache.config[f] = d[0] || [], p.uploadCache.tags[f] = u[0] || [], p.uploadCache.append = o) : (a = c.add(p.id, l, d[0], u[0], o), r = c.get(p.id, a, !1), s = e(r).hide(), n.after(s).fadeOut("slow", function() {
                s.fadeIn("slow").css("display:inline-block"), p._initPreviewActions(), p._clearFileInput(), n.remove()
            })) : (c.set(p.id, l, d, u, o), p._initPreview(), p._initPreviewActions()))
        },
        _initSuccessThumbs: function() {
            var t = this;
            t.showPreview && t._getThumbs(".file-preview-success").each(function() {
                var n = e(this),
                    i = n.find(".kv-file-remove");
                i.removeAttr("disabled"), d(i, "click", function() {
                    var e = t._raise("filesuccessremove", [n.attr("id"), n.data("fileindex")]);
                    de(n), e !== !1 && n.fadeOut("slow", function() {
                        n.remove(), t.$preview.find(".file-preview-frame").length || t.reset()
                    })
                })
            })
        },
        _checkAsyncComplete: function() {
            var t, n, i = this;
            for (n = 0; n < i.filestack.length; n++)
                if (i.filestack[n] && (t = i.previewInitId + "-" + n, -1 === e.inArray(t, i.uploadLog))) return !1;
            return i.uploadAsyncCount === i.uploadLog.length
        },
        _uploadExtra: function(t, n) {
            var i = this,
                o = i._getExtraData(t, n);
            0 !== o.length && e.each(o, function(e, t) {
                i.formdata.append(e, t)
            })
        },
        _uploadSingle: function(t, n, i) {
            var o, r, a, s, l, d, u, f, p, h, m = this,
                v = m.getFileStack().length,
                b = new FormData,
                y = m.previewInitId + "-" + t,
                w = m.filestack.length > 0 || !e.isEmptyObject(m.uploadExtraData),
                x = {
                    id: y,
                    index: t
                };
            m.formdata = b, m.showPreview && (r = e("#" + y + ":not(.file-preview-initial)"), s = r.find(".kv-file-upload"), l = r.find(".kv-file-remove"), e("#" + y).find(".file-thumb-progress").removeClass("hide")), 0 === v || !w || s && s.hasClass("disabled") || m._abort(x) || (h = function(e, t) {
                m.updateStack(e, void 0), m.uploadLog.push(t), m._checkAsyncComplete() && (m.fileBatchCompleted = !0)
            }, a = function() {
                var e = m.uploadCache;
                m.fileBatchCompleted && setTimeout(function() {
                    m.showPreview && (c.set(m.id, e.content, e.config, e.tags, e.append), m.hasInitData && (m._initPreview(), m._initPreviewActions())), m.unlock(), m._clearFileInput(), m._raise("filebatchuploadcomplete", [m.filestack, m._getExtraData()]), m.uploadCount = 0, m.uploadStatus = {}, m.uploadLog = [], m._setProgress(101)
                }, 100)
            }, d = function(n) {
                o = m._getOutData(n), m.fileBatchCompleted = !1, m.showPreview && (r.hasClass("file-preview-success") || (m._setThumbStatus(r, "Loading"), g(r, "file-uploading")), s.attr("disabled", !0), l.attr("disabled", !0)), i || m.lock(), m._raise("filepreupload", [o, y, t]), e.extend(!0, x, o), m._abort(x) && (n.abort(), m._setProgressCancelled())
            }, u = function(n, a, l) {
                var d = m.showPreview && r.attr("id") ? r.attr("id") : y;
                o = m._getOutData(l, n), e.extend(!0, x, o), setTimeout(function() {
                    ie(n) || ie(n.error) ? (m.showPreview && (m._setThumbStatus(r, "Success"), s.hide(), m._initUploadSuccess(n, r, i)), m._raise("fileuploaded", [o, d, t]), i ? h(t, d) : m.updateStack(t, void 0)) : (m._showUploadError(n.error, x), m._setPreviewError(r, t), i && h(t, d))
                }, 100)
            }, f = function() {
                setTimeout(function() {
                    m.showPreview && (s.removeAttr("disabled"), l.removeAttr("disabled"), r.removeClass("file-uploading"), m._setProgress(101, e("#" + y).find(".file-thumb-progress"))), i ? a() : (m.unlock(!1), m._clearFileInput()), m._initSuccessThumbs()
                }, 100)
            }, p = function(o, a, s) {
                var l = m._parseError(o, s, i ? n[t].name : null);
                setTimeout(function() {
                    i && h(t, y), m.uploadStatus[y] = 100, m._setPreviewError(r, t), e.extend(!0, x, m._getOutData(o)), m._showUploadError(l, x)
                }, 100)
            }, b.append(m.uploadFileAttr, n[t], m.filenames[t]), b.append("file_id", t), m._ajaxSubmit(d, u, f, p, y, t))
        },
        _uploadBatch: function() {
            var t, n, i, o, r, a = this,
                s = a.filestack,
                l = s.length,
                d = {},
                c = a.filestack.length > 0 || !e.isEmptyObject(a.uploadExtraData);
            a.formdata = new FormData, 0 !== l && c && !a._abort(d) && (r = function() {
                e.each(s, function(e) {
                    a.updateStack(e, void 0)
                }), a._clearFileInput()
            }, t = function(t) {
                a.lock();
                var n = a._getOutData(t);
                a.showPreview && a._getThumbs().each(function() {
                    var t = e(this),
                        n = t.find(".kv-file-upload"),
                        i = t.find(".kv-file-remove");
                    t.hasClass("file-preview-success") || (a._setThumbStatus(t, "Loading"), g(t, "file-uploading")), n.attr("disabled", !0), i.attr("disabled", !0)
                }), a._raise("filebatchpreupload", [n]), a._abort(n) && (t.abort(), a._setProgressCancelled())
            }, n = function(t, n, i) {
                var o = a._getOutData(i, t),
                    s = a._getThumbs(":not(.file-preview-error)"),
                    l = 0,
                    d = ie(t) || ie(t.errorkeys) ? [] : t.errorkeys;
                ie(t) || ie(t.error) ? (a._raise("filebatchuploadsuccess", [o]), r(), a.showPreview ? (s.each(function() {
                    var t = e(this),
                        n = t.find(".kv-file-upload");
                    t.find(".kv-file-upload").hide(), a._setThumbStatus(t, "Success"), t.removeClass("file-uploading"), n.removeAttr("disabled")
                }), a._initUploadSuccess(t)) : a.reset()) : (a.showPreview && (s.each(function() {
                    var t = e(this),
                        n = t.find(".kv-file-remove"),
                        i = t.find(".kv-file-upload");
                    return t.removeClass("file-uploading"), i.removeAttr("disabled"), n.removeAttr("disabled"), 0 === d.length ? void a._setPreviewError(t) : (-1 !== e.inArray(l, d) ? a._setPreviewError(t) : (t.find(".kv-file-upload").hide(), a._setThumbStatus(t, "Success"), a.updateStack(l, void 0)), void l++)
                }), a._initUploadSuccess(t)), a._showUploadError(t.error, o, "filebatchuploaderror"))
            }, o = function() {
                a._setProgress(101), a.unlock(), a._initSuccessThumbs(), a._clearFileInput(), a._raise("filebatchuploadcomplete", [a.filestack, a._getExtraData()])
            }, i = function(t, n, i) {
                var o = a._getOutData(t),
                    r = a._parseError(t, i);
                a._showUploadError(r, o, "filebatchuploaderror"), a.uploadFileCount = l - 1, a.showPreview && (a._getThumbs().each(function() {
                    var t = e(this),
                        n = t.attr("data-fileindex");
                    t.removeClass("file-uploading"), void 0 !== a.filestack[n] && a._setPreviewError(t)
                }), a._getThumbs().removeClass("file-uploading"), a._getThumbs(" .kv-file-upload").removeAttr("disabled"), a._getThumbs(" .kv-file-delete").removeAttr("disabled"))
            }, e.each(s, function(e, t) {
                ie(s[e]) || a.formdata.append(a.uploadFileAttr, t, a.filenames[e])
            }), a._ajaxSubmit(t, n, o, i))
        },
        _uploadExtraOnly: function() {
            var e, t, n, i, o = this,
                r = {};
            o.formdata = new FormData, o._abort(r) || (e = function(e) {
                o.lock();
                var t = o._getOutData(e);
                o._raise("filebatchpreupload", [t]), o._setProgress(50), r.data = t, r.xhr = e, o._abort(r) && (e.abort(), o._setProgressCancelled())
            }, t = function(e, t, n) {
                var i = o._getOutData(n, e);
                ie(e) || ie(e.error) ? (o._raise("filebatchuploadsuccess", [i]), o._clearFileInput(), o._initUploadSuccess(e)) : o._showUploadError(e.error, i, "filebatchuploaderror")
            }, n = function() {
                o._setProgress(101), o.unlock(), o._clearFileInput(), o._raise("filebatchuploadcomplete", [o.filestack, o._getExtraData()])
            }, i = function(e, t, n) {
                var i = o._getOutData(e),
                    a = o._parseError(e, n);
                r.data = i, o._showUploadError(a, i, "filebatchuploaderror")
            }, o._ajaxSubmit(e, t, n, i))
        },
        _initFileActions: function() {
            var t = this;
            t.showPreview && (t._initZoomButton(), t.$preview.find(".kv-file-remove").each(function() {
                var n, i, o, r, a = e(this),
                    s = a.closest(".file-preview-frame"),
                    l = s.attr("id"),
                    u = s.attr("data-fileindex");
                d(a, "click", function() {
                    return r = t._raise("filepreremove", [l, u]), !(r === !1 || !t._validateMinCount()) && (n = s.hasClass("file-preview-error"), de(s), void s.fadeOut("slow", function() {
                        t.updateStack(u, void 0), t._clearObjects(s), s.remove(), l && n && t.$errorContainer.find('li[data-file-id="' + l + '"]').fadeOut("fast", function() {
                            e(this).remove(), t._errorsExist() || t._resetErrors()
                        }), t._clearFileInput();
                        var r = t.getFileStack(!0),
                            a = c.count(t.id),
                            d = r.length,
                            f = t.showPreview && t.$preview.find(".file-preview-frame").length;
                        0 !== d || 0 !== a || f ? (i = a + d, o = i > 1 ? t._getMsgSelected(i) : r[0] ? t._getFileNames()[0] : "", t._setCaption(o)) : t.reset(), t._raise("fileremoved", [l, u])
                    }))
                })
            }), t.$preview.find(".kv-file-upload").each(function() {
                var n = e(this);
                d(n, "click", function() {
                    var e = n.closest(".file-preview-frame"),
                        i = e.attr("data-fileindex");
                    e.hasClass("file-preview-error") || t._uploadSingle(i, t.filestack, !1)
                })
            }))
        },
        _hideFileIcon: function() {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide()
        },
        _showFileIcon: function() {
            this.$captionContainer.find(".kv-caption-icon").show()
        },
        _getSize: function(e) {
            var t = parseFloat(e);
            if (null === e || isNaN(t)) return "";
            var n, i, o, r = this,
                a = r.fileSizeGetter;
            return "function" == typeof a ? o = a(e) : (n = Math.floor(Math.log(t) / Math.log(1024)), i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o = 1 * (t / Math.pow(1024, n)).toFixed(2) + " " + i[n]), r._getLayoutTemplate("size").replace("{sizeText}", o)
        },
        _generatePreviewTemplate: function(e, t, n, i, o, r, a, s, l, d) {
            var c, u, f = this,
                p = f._getPreviewTemplate(e),
                h = s || "",
                g = re(e, f.previewSettings, te[e]),
                m = f.slug(n),
                v = l || f._renderFileFooter(m, a, g.width, r);
            return d = d || o.slice(o.lastIndexOf("-") + 1), p = f._parseFilePreviewIcon(p, n), "text" === e || "html" === e ? (u = "text" === e ? se(t) : t, c = p.replace(/\{previewId}/g, o).replace(/\{caption}/g, m).replace(/\{width}/g, g.width).replace(/\{height}/g, g.height).replace(/\{frameClass}/g, h).replace(/\{cat}/g, i).replace(/\{footer}/g, v).replace(/\{fileindex}/g, d).replace(/\{data}/g, u).replace(/\{template}/g, e)) : c = p.replace(/\{previewId}/g, o).replace(/\{caption}/g, m).replace(/\{frameClass}/g, h).replace(/\{type}/g, i).replace(/\{fileindex}/g, d).replace(/\{width}/g, g.width).replace(/\{height}/g, g.height).replace(/\{footer}/g, v).replace(/\{data}/g, t).replace(/\{template}/g, e), c
        },
        _previewDefault: function(t, n, i) {
            var o = this,
                r = o.$preview,
                s = r.find(".file-live-thumbs");
            if (o.showPreview) {
                var l, d = t ? t.name : "",
                    c = t ? t.type : "",
                    u = i === !0 && !o.isUploadable,
                    f = a.createObjectURL(t);
                o._clearDefaultPreview(), l = o._generatePreviewTemplate("other", f, d, c, n, u, t.size), s.length || (s = e(document.createElement("div")).addClass("file-live-thumbs").appendTo(r)), s.append("\n" + l), i === !0 && o.isUploadable && o._setThumbStatus(e("#" + n), "Error")
            }
        },
        _previewFile: function(t, n, i, o, r) {
            if (this.showPreview) {
                var a, s = this,
                    l = s._parseFileType(n),
                    d = n ? n.name : "",
                    c = s.slug(d),
                    u = s.allowedPreviewTypes,
                    f = s.allowedPreviewMimeTypes,
                    p = s.$preview,
                    h = u && u.indexOf(l) >= 0,
                    g = p.find(".file-live-thumbs"),
                    m = "text" === l || "html" === l || "image" === l ? i.target.result : r,
                    v = f && -1 !== f.indexOf(n.type);
                g.length || (g = e(document.createElement("div")).addClass("file-live-thumbs").appendTo(p)), "html" === l && s.purifyHtml && window.DOMPurify && (m = window.DOMPurify.sanitize(m)), h || v ? (a = s._generatePreviewTemplate(l, m, d, n.type, o, !1, n.size), s._clearDefaultPreview(), g.append("\n" + a), s._validateImage(t, o, c, n.type)) : s._previewDefault(n, o), s._initSortable()
            }
        },
        _slugDefault: function(e) {
            return ie(e) ? "" : String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_")
        },
        _readFiles: function(t) {
            this.reader = new FileReader;
            var n, i = this,
                o = i.$element,
                r = i.$preview,
                l = i.reader,
                d = i.$previewContainer,
                c = i.$previewStatus,
                u = i.msgLoading,
                f = i.msgProgress,
                p = i.previewInitId,
                h = t.length,
                g = i.fileTypeSettings,
                m = i.filestack.length,
                v = i.maxFilePreviewSize && parseFloat(i.maxFilePreviewSize),
                b = r.length && (!v || isNaN(v)),
                y = function(o, r, a, s) {
                    var l = e.extend(!0, {}, i._getOutData({}, {}, t), {
                            id: a,
                            index: s
                        }),
                        d = {
                            id: a,
                            index: s,
                            file: r,
                            files: t
                        };
                    return i._previewDefault(r, a, !0), i.isUploadable && i.addToStack(void 0), setTimeout(function() {
                        n(s + 1)
                    }, 100), i._initFileActions(), i.removeFromPreviewOnError && e("#" + a).remove(), i.isUploadable ? i._showUploadError(o, l) : i._showError(o, d)
                };
            i.loadedImages = [], i.totalImagesCount = 0, e.each(t, function(e, t) {
                var n = i.fileTypeSettings.image || ne.image;
                n && n(t.type) && i.totalImagesCount++
            }), n = function(e) {
                if (ie(o.attr("multiple")) && (h = 1), e >= h) return i.isUploadable && i.filestack.length > 0 ? i._raise("filebatchselected", [i.getFileStack()]) : i._raise("filebatchselected", [t]), d.removeClass("file-thumb-loading"), void c.html("");
                var w, x, T, C, k, S, D, _ = m + e,
                    $ = p + "-" + _,
                    E = t[e],
                    A = E.name ? i.slug(E.name) : "",
                    O = (E.size || 0) / 1e3,
                    I = "",
                    F = a.createObjectURL(E),
                    P = 0,
                    j = i.allowedFileTypes,
                    N = ie(j) ? "" : j.join(", "),
                    M = i.allowedFileExtensions,
                    R = ie(M) ? "" : M.join(", ");
                if (ie(M) || (I = new RegExp("\\.(" + M.join("|") + ")$", "i")), O = O.toFixed(2), i.maxFileSize > 0 && O > i.maxFileSize) return k = i.msgSizeTooLarge.replace("{name}", A).replace("{size}", O).replace("{maxSize}", i.maxFileSize), void(i.isError = y(k, E, $, e));
                if (!ie(j) && oe(j)) {
                    for (C = 0; C < j.length; C += 1) S = j[C], T = g[S], D = void 0 !== T && T(E.type, A), P += ie(D) ? 0 : D.length;
                    if (0 === P) return k = i.msgInvalidFileType.replace("{name}", A).replace("{types}", N), void(i.isError = y(k, E, $, e))
                }
                return 0 !== P || ie(M) || !oe(M) || ie(I) || (D = s(A, I), P += ie(D) ? 0 : D.length, 0 !== P) ? i.showPreview ? !b && O > v ? (i.addToStack(E), d.addClass("file-thumb-loading"), i._previewDefault(E, $), i._initFileActions(), i._updateFileDetails(h), void n(e + 1)) : (r.length && void 0 !== FileReader ? (c.html(u.replace("{index}", e + 1).replace("{files}", h)), d.addClass("file-thumb-loading"), l.onerror = function(e) {
                    i._errorHandler(e, A)
                }, l.onload = function(t) {
                    i._previewFile(e, E, t, $, F),
                        i._initFileActions()
                }, l.onloadend = function() {
                    k = f.replace("{index}", e + 1).replace("{files}", h).replace("{percent}", 50).replace("{name}", A), setTimeout(function() {
                        c.html(k), i._updateFileDetails(h), n(e + 1)
                    }, 100), i._raise("fileloaded", [E, $, e, l])
                }, l.onprogress = function(t) {
                    if (t.lengthComputable) {
                        var n = t.loaded / t.total * 100,
                            i = Math.ceil(n);
                        k = f.replace("{index}", e + 1).replace("{files}", h).replace("{percent}", i).replace("{name}", A), setTimeout(function() {
                            c.html(k)
                        }, 100)
                    }
                }, w = re("text", g, ne.text), x = re("image", g, ne.image), w(E.type, A) ? l.readAsText(E, i.textEncoding) : x(E.type, A) ? l.readAsDataURL(E) : l.readAsArrayBuffer(E)) : (i._previewDefault(E, $), setTimeout(function() {
                    n(e + 1), i._updateFileDetails(h)
                }, 100), i._raise("fileloaded", [E, $, e, l])), void i.addToStack(E)) : (i.addToStack(E), setTimeout(function() {
                    n(e + 1)
                }, 100), void i._raise("fileloaded", [E, $, e, l])) : (k = i.msgInvalidFileExtension.replace("{name}", A).replace("{extensions}", R), void(i.isError = y(k, E, $, e)))
            }, n(0), i._updateFileDetails(h, !1)
        },
        _updateFileDetails: function(e) {
            var t = this,
                n = t.$element,
                i = t.getFileStack(),
                o = l(9) && ce(n.val()) || n[0].files[0] && n[0].files[0].name || i.length && i[0].name || "",
                r = t.slug(o),
                a = t.isUploadable ? i.length : e,
                s = c.count(t.id) + a,
                d = a > 1 ? t._getMsgSelected(s) : r;
            t.isError ? (t.$previewContainer.removeClass("file-thumb-loading"), t.$previewStatus.html(""), t.$captionContainer.find(".kv-caption-icon").hide()) : t._showFileIcon(), t._setCaption(d, t.isError), t.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && t._raise("fileselect", [e, r]), c.count(t.id) && t._initPreviewActions()
        },
        _setThumbStatus: function(e, t) {
            var n = this;
            if (n.showPreview) {
                var i = "indicator" + t,
                    o = i + "Title",
                    r = "file-preview-" + t.toLowerCase(),
                    a = e.find(".file-upload-indicator"),
                    s = n.fileActionSettings;
                e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Error" === t && e.find(".kv-file-upload").attr("disabled", !0), "Success" === t && (e.find(".file-drag-handle").remove(), a.css("margin-left", 0)), a.html(s[i]), a.attr("title", s[o]), e.addClass(r)
            }
        },
        _setProgressCancelled: function() {
            var e = this;
            e._setProgress(101, e.$progress, e.msgCancelled)
        },
        _setProgress: function(e, t, n) {
            var i = this,
                o = Math.min(e, 100),
                r = 100 > o ? i.progressTemplate : n ? i.progressErrorTemplate : 100 >= e ? i.progressTemplate : i.progressCompleteTemplate,
                a = i.progressUploadThreshold;
            if (t = t || i.$progress, !ie(r)) {
                if (a && o > a && 100 >= e) {
                    var s = r.replace("{percent}", a).replace("{percent}", a).replace("{percent}%", i.msgUploadThreshold);
                    t.html(s)
                } else t.html(r.replace(/\{percent}/g, o));
                n && t.find('[role="progressbar"]').html(n)
            }
        },
        _setFileDropZoneTitle: function() {
            var e, t = this,
                n = t.$container.find(".file-drop-zone"),
                i = t.dropZoneTitle;
            t.isClickable && (e = ie(t.$element.attr("multiple")) ? t.fileSingle : t.filePlural, i += t.dropZoneClickTitle.replace("{files}", e)), n.find("." + t.dropZoneTitleClass).remove(), t.isUploadable && t.showPreview && 0 !== n.length && !(t.getFileStack().length > 0) && t.dropZoneEnabled && (0 === n.find(".file-preview-frame").length && ie(t.defaultPreviewContent) && n.prepend('<div class="' + t.dropZoneTitleClass + '">' + i + "</div>"), t.$container.removeClass("file-input-new"), g(t.$container, "file-input-ajax-new"))
        },
        _setAsyncUploadStatus: function(t, n, i) {
            var o = this,
                r = 0;
            o._setProgress(n, e("#" + t).find(".file-thumb-progress")), o.uploadStatus[t] = n, e.each(o.uploadStatus, function(e, t) {
                r += t
            }), o._setProgress(Math.floor(r / i))
        },
        _validateMinCount: function() {
            var e = this,
                t = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;
            return !(e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(t - 1) < e.minFileCount && (e._noFilesError({}), 1))
        },
        _getFileCount: function(e) {
            var t = this,
                n = 0;
            return t.validateInitialCount && !t.overwriteInitial && (n = c.count(t.id), e += n), e
        },
        _getFileName: function(e) {
            return e && e.name ? this.slug(e.name) : void 0
        },
        _getFileNames: function(e) {
            var t = this;
            return t.filenames.filter(function(t) {
                return e ? void 0 !== t : void 0 !== t && null !== t
            })
        },
        _setPreviewError: function(e, t, n) {
            var i = this;
            void 0 !== t && i.updateStack(t, n), i.removeFromPreviewOnError ? e.remove() : i._setThumbStatus(e, "Error")
        },
        _checkDimensions: function(e, t, n, i, o, r, a) {
            var s, l, d, c, u = this,
                f = "Small" === t ? "min" : "max",
                p = u[f + "Image" + r];
            !ie(p) && n.length && (d = n[0], l = "Width" === r ? d.naturalWidth || d.width : d.naturalHeight || d.height, c = "Small" === t ? l >= p : p >= l, c || (s = u["msgImage" + r + t].replace("{name}", o).replace("{size}", p), u._showUploadError(s, a), u._setPreviewError(i, e, null)))
        },
        _validateImage: function(e, t, n, i) {
            var o, r, s, l = this,
                c = l.$preview,
                u = c.find("#" + t),
                f = u.find("img");
            n = n || "Untitled", f.length && d(f, "load", function() {
                r = u.width(), s = c.width(), r > s && (f.css("width", "100%"), u.css("width", "97%")), o = {
                    ind: e,
                    id: t
                }, l._checkDimensions(e, "Small", f, u, n, "Width", o), l._checkDimensions(e, "Small", f, u, n, "Height", o), l.resizeImage || (l._checkDimensions(e, "Large", f, u, n, "Width", o), l._checkDimensions(e, "Large", f, u, n, "Height", o)), l._raise("fileimageloaded", [t]), l.loadedImages.push({
                    ind: e,
                    img: f,
                    thumb: u,
                    pid: t,
                    typ: i
                }), l._validateAllImages(), a.revokeObjectURL(f.attr("src"))
            })
        },
        _validateAllImages: function() {
            var e, t, n, i, o, r, a, s = this,
                l = {};
            if (s.loadedImages.length === s.totalImagesCount && (s._raise("fileimagesloaded"), s.resizeImage)) {
                for (a = s.isUploadable ? s._showUploadError : s._showError, e = 0; e < s.loadedImages.length; e++) t = s.loadedImages[e], n = t.img, i = t.thumb, o = t.pid, r = t.ind, l = {
                    id: o,
                    index: r
                }, s._getResizedImage(n[0], t.typ, o, r) || (a(s.msgImageResizeError, l, "fileimageresizeerror"), s._setPreviewError(i, r));
                s._raise("fileimagesresized")
            }
        },
        _getResizedImage: function(e, t, n, i) {
            var o, r, a = this,
                s = e.naturalWidth,
                l = e.naturalHeight,
                d = 1,
                c = a.maxImageWidth || s,
                u = a.maxImageHeight || l,
                f = s && l,
                p = a.imageCanvas,
                h = a.imageCanvasContext;
            if (!f) return !1;
            if (s === c && l === u) return !0;
            t = t || a.resizeDefaultImageType, o = s > c, r = l > u, d = "width" === a.resizePreference ? o ? c / s : r ? u / l : 1 : r ? u / l : o ? c / s : 1, a._resetCanvas(), s *= d, l *= d, p.width = s, p.height = l;
            try {
                return h.drawImage(e, 0, 0, s, l), p.toBlob(function(e) {
                    a._raise("fileimageresized", [n, i]), a.filestack[i] = e
                }, t, a.resizeQuality), !0
            } catch (e) {
                return !1
            }
        },
        _initBrowse: function(e) {
            var t = this;
            t.showBrowse ? (t.$btnFile = e.find(".btn-file"), t.$btnFile.append(t.$element)) : t.$element.hide()
        },
        _initCaption: function() {
            var e = this,
                t = e.initialCaption || "";
            return e.overwriteInitial || ie(t) ? (e.$caption.html(""), !1) : (e._setCaption(t), !0)
        },
        _setCaption: function(t, n) {
            var i, o, r, a, s = this,
                l = s.getFileStack();
            if (s.$caption.length) {
                if (n) i = e("<div>" + s.msgValidationError + "</div>").text(), r = l.length, a = r ? 1 === r && l[0] ? s._getFileNames()[0] : s._getMsgSelected(r) : s._getMsgSelected(s.msgNo), o = '<span class="' + s.msgValidationErrorClass + '">' + s.msgValidationErrorIcon + (ie(t) ? a : t) + "</span>";
                else {
                    if (ie(t)) return;
                    i = e("<div>" + t + "</div>").text(), o = s._getLayoutTemplate("fileIcon") + i
                }
                s.$caption.html(o), s.$caption.attr("title", i), s.$captionContainer.find(".file-caption-ellipsis").attr("title", i)
            }
        },
        _createContainer: function() {
            var t = this,
                n = e(document.createElement("div")).attr({
                    "class": "file-input file-input-new"
                }).html(t._renderMain());
            return t.$element.before(n), t._initBrowse(n), t.theme && n.addClass("theme-" + t.theme), n
        },
        _refreshContainer: function() {
            var e = this,
                t = e.$container;
            t.before(e.$element), t.html(e._renderMain()), e._initBrowse(t)
        },
        _renderMain: function() {
            var e = this,
                t = e.isUploadable && e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
                n = e.showClose ? e._getLayoutTemplate("close") : "",
                i = e.showPreview ? e._getLayoutTemplate("preview").replace(/\{class}/g, e.previewClass).replace(/\{dropClass}/g, t) : "",
                o = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
                r = e.captionTemplate.replace(/\{class}/g, o + " kv-fileinput-caption");
            return e.mainTemplate.replace(/\{class}/g, e.mainClass + (!e.showBrowse && e.showCaption ? " no-browse" : "")).replace(/\{preview}/g, i).replace(/\{close}/g, n).replace(/\{caption}/g, r).replace(/\{upload}/g, e._renderButton("upload")).replace(/\{remove}/g, e._renderButton("remove")).replace(/\{cancel}/g, e._renderButton("cancel")).replace(/\{browse}/g, e._renderButton("browse"))
        },
        _renderButton: function(e) {
            var t = this,
                n = t._getLayoutTemplate("btnDefault"),
                i = t[e + "Class"],
                o = t[e + "Title"],
                r = t[e + "Icon"],
                a = t[e + "Label"],
                s = t.isDisabled ? " disabled" : "",
                l = "button";
            switch (e) {
                case "remove":
                    if (!t.showRemove) return "";
                    break;
                case "cancel":
                    if (!t.showCancel) return "";
                    i += " hide";
                    break;
                case "upload":
                    if (!t.showUpload) return "";
                    t.isUploadable && !t.isDisabled ? n = t._getLayoutTemplate("btnLink").replace("{href}", t.uploadUrl) : l = "submit";
                    break;
                case "browse":
                    if (!t.showBrowse) return "";
                    n = t._getLayoutTemplate("btnBrowse");
                    break;
                default:
                    return ""
            }
            return i += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", ie(a) || (a = ' <span class="' + t.buttonLabelClass + '">' + a + "</span>"), n.replace("{type}", l).replace("{css}", i).replace("{title}", o).replace("{status}", s).replace("{icon}", r).replace("{label}", a)
        },
        _renderThumbProgress: function() {
            return '<div class="file-thumb-progress hide">' + this.progressTemplate.replace(/\{percent}/g, "0") + "</div>"
        },
        _renderFileFooter: function(e, t, n, i) {
            var o, r = this,
                a = r.fileActionSettings,
                s = a.showRemove,
                l = a.showDrag,
                d = a.showUpload,
                c = a.showZoom,
                u = r._getLayoutTemplate("footer"),
                f = i ? a.indicatorError : a.indicatorNew,
                p = i ? a.indicatorErrorTitle : a.indicatorNewTitle;
            return t = r._getSize(t), o = r.isUploadable ? u.replace(/\{actions}/g, r._renderFileActions(d, s, c, l, !1, !1, !1)).replace(/\{caption}/g, e).replace(/\{size}/g, t).replace(/\{width}/g, n).replace(/\{progress}/g, r._renderThumbProgress()).replace(/\{indicator}/g, f).replace(/\{indicatorTitle}/g, p) : u.replace(/\{actions}/g, r._renderFileActions(!1, !1, c, l, !1, !1, !1)).replace(/\{caption}/g, e).replace(/\{size}/g, t).replace(/\{width}/g, n).replace(/\{progress}/g, "").replace(/\{indicator}/g, f).replace(/\{indicatorTitle}/g, p), o = le(o, r.previewThumbTags)
        },
        _renderFileActions: function(e, t, n, i, o, r, a, s) {
            if (!(e || t || n || i)) return "";
            var l, d = this,
                c = r === !1 ? "" : ' data-url="' + r + '"',
                u = a === !1 ? "" : ' data-key="' + a + '"',
                f = "",
                p = "",
                h = "",
                g = "",
                m = d._getLayoutTemplate("actions"),
                v = d.fileActionSettings,
                b = d.otherActionButtons.replace(/\{dataKey}/g, u),
                y = o ? v.removeClass + " disabled" : v.removeClass;
            return t && (f = d._getLayoutTemplate("actionDelete").replace(/\{removeClass}/g, y).replace(/\{removeIcon}/g, v.removeIcon).replace(/\{removeTitle}/g, v.removeTitle).replace(/\{dataUrl}/g, c).replace(/\{dataKey}/g, u)), e && (p = d._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, v.uploadClass).replace(/\{uploadIcon}/g, v.uploadIcon).replace(/\{uploadTitle}/g, v.uploadTitle)), n && (h = d._getLayoutTemplate("actionZoom").replace(/\{zoomClass}/g, v.zoomClass).replace(/\{zoomIcon}/g, v.zoomIcon).replace(/\{zoomTitle}/g, v.zoomTitle)), i && s && (l = "drag-handle-init " + v.dragClass, g = d._getLayoutTemplate("actionDrag").replace(/\{dragClass}/g, l).replace(/\{dragTitle}/g, v.dragTitle).replace(/\{dragIcon}/g, v.dragIcon)), m.replace(/\{delete}/g, f).replace(/\{upload}/g, p).replace(/\{zoom}/g, h).replace(/\{drag}/g, g).replace(/\{other}/g, b)
        },
        _browse: function(e) {
            var t = this;
            t._raise("filebrowse"), e && e.isDefaultPrevented() || (t.isError && !t.isUploadable && t.clear(), t.$captionContainer.focus())
        },
        _change: function(t) {
            var n = this,
                i = n.$element;
            if (!n.isUploadable && ie(i.val()) && n.fileInputCleared) return void(n.fileInputCleared = !1);
            n.fileInputCleared = !1;
            var o, r, a, s, l, d, u = arguments.length > 1,
                f = n.isUploadable,
                p = 0,
                h = u ? t.originalEvent.dataTransfer.files : i.get(0).files,
                g = n.filestack.length,
                m = ie(i.attr("multiple")),
                v = m && g > 0,
                b = 0,
                y = function(t, i, o, r) {
                    var a = e.extend(!0, {}, n._getOutData({}, {}, h), {
                            id: o,
                            index: r
                        }),
                        s = {
                            id: o,
                            index: r,
                            file: i,
                            files: h
                        };
                    return n.isUploadable ? n._showUploadError(t, a) : n._showError(t, s)
                };
            if (n.reader = null, n._resetUpload(), n._hideFileIcon(), n.isUploadable && n.$container.find(".file-drop-zone ." + n.dropZoneTitleClass).remove(), u)
                for (o = []; h[p];) s = h[p], s.type || s.size % 4096 !== 0 ? o.push(s) : b++, p++;
            else o = void 0 === t.target.files ? t.target && t.target.value ? [{
                name: t.target.value.replace(/^.+\\/, "")
            }] : [] : t.target.files;
            if (ie(o) || 0 === o.length) return f || n.clear(), n._showFolderError(b), void n._raise("fileselectnone");
            if (n._resetErrors(), d = o.length, a = n._getFileCount(n.isUploadable ? n.getFileStack().length + d : d), n.maxFileCount > 0 && a > n.maxFileCount) {
                if (!n.autoReplace || d > n.maxFileCount) return l = n.autoReplace && d > n.maxFileCount ? d : a, r = n.msgFilesTooMany.replace("{m}", n.maxFileCount).replace("{n}", l), n.isError = y(r, null, null, null), n.$captionContainer.find(".kv-caption-icon").hide(), n._setCaption("", !0), void n.$container.removeClass("file-input-new file-input-ajax-new");
                a > n.maxFileCount && n._resetPreviewThumbs(f)
            } else !f || v ? (n._resetPreviewThumbs(!1), v && n.clearStack()) : !f || 0 !== g || c.count(n.id) && !n.overwriteInitial || n._resetPreviewThumbs(!0);
            n.isPreviewable ? n._readFiles(o) : n._updateFileDetails(1), n._showFolderError(b)
        },
        _abort: function(t) {
            var n, i = this;
            return !(!i.ajaxAborted || "object" != typeof i.ajaxAborted || void 0 === i.ajaxAborted.message || (n = e.extend(!0, {}, i._getOutData(), t), n.abortData = i.ajaxAborted.data || {}, n.abortMessage = i.ajaxAborted.message, i.cancel(), i._setProgress(101, i.$progress, i.msgCancelled), i._showUploadError(i.ajaxAborted.message, n, "filecustomerror"), 0))
        },
        _resetFileStack: function() {
            var t = this,
                n = 0,
                i = [],
                o = [];
            t._getThumbs().each(function() {
                var r = e(this),
                    a = r.attr("data-fileindex"),
                    s = t.filestack[a]; - 1 !== a && (void 0 !== s ? (i[n] = s, o[n] = t._getFileName(s), r.attr({
                    id: t.previewInitId + "-" + n,
                    "data-fileindex": n
                }), n++) : r.attr({
                    id: "uploaded-" + ae(),
                    "data-fileindex": "-1"
                }))
            }), t.filestack = i, t.filenames = o
        },
        clearStack: function() {
            var e = this;
            return e.filestack = [], e.filenames = [], e.$element
        },
        updateStack: function(e, t) {
            var n = this;
            return n.filestack[e] = t, n.filenames[e] = n._getFileName(t), n.$element
        },
        addToStack: function(e) {
            var t = this;
            return t.filestack.push(e), t.filenames.push(t._getFileName(e)), t.$element
        },
        getFileStack: function(e) {
            var t = this;
            return t.filestack.filter(function(t) {
                return e ? void 0 !== t : void 0 !== t && null !== t
            })
        },
        getFilesCount: function() {
            var e = this,
                t = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;
            return e._getFileCount(t)
        },
        lock: function() {
            var e = this;
            return e._resetErrors(), e.disable(), e.showRemove && g(e.$container.find(".fileinput-remove"), "hide"), e.showCancel && e.$container.find(".fileinput-cancel").removeClass("hide"), e._raise("filelock", [e.filestack, e._getExtraData()]), e.$element
        },
        unlock: function(e) {
            var t = this;
            return void 0 === e && (e = !0), t.enable(), t.showCancel && g(t.$container.find(".fileinput-cancel"), "hide"), t.showRemove && t.$container.find(".fileinput-remove").removeClass("hide"), e && t._resetFileStack(), t._raise("fileunlock", [t.filestack, t._getExtraData()]), t.$element
        },
        cancel: function() {
            var t, n = this,
                i = n.ajaxRequests,
                o = i.length;
            if (o > 0)
                for (t = 0; o > t; t += 1) n.cancelling = !0, i[t].abort();
            return n._setProgressCancelled(), n._getThumbs().each(function() {
                var t = e(this),
                    i = t.attr("data-fileindex");
                t.removeClass("file-uploading"), void 0 !== n.filestack[i] && (t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), n.unlock()
            }), n.$element
        },
        clear: function() {
            var t, n = this;
            return n.$btnUpload.removeAttr("disabled"), n._getThumbs().find("video,audio,img").each(function() {
                de(e(this))
            }), n._resetUpload(), n.clearStack(), n._clearFileInput(), n._resetErrors(!0), n._raise("fileclear"), n._hasInitialPreview() ? (n._showFileIcon(), n._resetPreview(), n._initPreviewActions(), n.$container.removeClass("file-input-new")) : (n._getThumbs().each(function() {
                n._clearObjects(e(this))
            }), n.isUploadable && (c.data[n.id] = {}), n.$preview.html(""), t = !n.overwriteInitial && n.initialCaption.length > 0 ? n.initialCaption : "", n.$caption.html(t), n.$caption.attr("title", ""), g(n.$container, "file-input-new"), n._validateDefaultPreview()), 0 === n.$container.find(".file-preview-frame").length && (n._initCaption() || n.$captionContainer.find(".kv-caption-icon").hide()), n._hideFileIcon(), n._raise("filecleared"), n.$captionContainer.focus(), n._setFileDropZoneTitle(), n.$element
        },
        reset: function() {
            var e = this;
            return e._resetPreview(), e.$container.find(".fileinput-filename").text(""), e._raise("filereset"), g(e.$container, "file-input-new"), (e.$preview.find(".file-preview-frame").length || e.isUploadable && e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), e._setFileDropZoneTitle(), e.clearStack(), e.formdata = {}, e.$element
        },
        disable: function() {
            var e = this;
            return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), e._initDragDrop(), e.$element
        },
        enable: function() {
            var e = this;
            return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), e._initDragDrop(), e.$element
        },
        upload: function() {
            var t, n, i, o = this,
                r = o.getFileStack().length,
                a = {},
                s = !e.isEmptyObject(o._getExtraData());
            if (o.minFileCount > 0 && o._getFileCount(r) < o.minFileCount) return void o._noFilesError(a);
            if (o.isUploadable && !o.isDisabled && (0 !== r || s)) {
                if (o._resetUpload(), o.$progress.removeClass("hide"), o.uploadCount = 0, o.uploadStatus = {}, o.uploadLog = [], o.lock(), o._setProgress(2), 0 === r && s) return void o._uploadExtraOnly();
                if (i = o.filestack.length, o.hasInitData = !1, !o.uploadAsync) return o._uploadBatch(), o.$element;
                for (n = o._getOutData(), o._raise("filebatchpreupload", [n]), o.fileBatchCompleted = !1, o.uploadCache = {
                        content: [],
                        config: [],
                        tags: [],
                        append: !0
                    }, o.uploadAsyncCount = o.getFileStack().length, t = 0; i > t; t++) o.uploadCache.content[t] = null, o.uploadCache.config[t] = null, o.uploadCache.tags[t] = null;
                for (t = 0; i > t; t++) void 0 !== o.filestack[t] && o._uploadSingle(t, o.filestack, !0)
            }
        },
        destroy: function() {
            var e = this,
                n = e.$container;
            return n.find(".file-drop-zone").off(), e.$element.insertBefore(n).off(t).removeData(), n.off().remove(), e.$element
        },
        refresh: function(t) {
            var n = this,
                i = n.$element;
            return t = t ? e.extend(!0, {}, n.options, t) : n.options, n.destroy(), i.fileinput(t), i.val() && i.trigger("change.fileinput"), i
        }
    }, e.fn.fileinput = function(t) {
        if (f() || l(9)) {
            var n = Array.apply(null, arguments),
                i = [];
            switch (n.shift(), this.each(function() {
                    var o, r = e(this),
                        a = r.data("fileinput"),
                        s = "object" == typeof t && t,
                        l = s.theme || r.data("theme"),
                        d = {},
                        c = {},
                        u = s.language || r.data("language") || "en";
                    a || (l && (c = e.fn.fileinputThemes[l] || {}), "en" === u || ie(e.fn.fileinputLocales[u]) || (d = e.fn.fileinputLocales[u] || {}), o = e.extend(!0, {}, e.fn.fileinput.defaults, c, e.fn.fileinputLocales.en, d, s, r.data()), a = new he(this, o), r.data("fileinput", a)), "string" == typeof t && i.push(a[t].apply(a, n))
                }), i.length) {
                case 0:
                    return this;
                case 1:
                    return i[0];
                default:
                    return i
            }
        }
    }, e.fn.fileinput.defaults = {
        language: "en",
        showCaption: !0,
        showBrowse: !0,
        showPreview: !0,
        showRemove: !0,
        showUpload: !0,
        showCancel: !0,
        showClose: !0,
        showUploadedThumbs: !0,
        browseOnZoneClick: !1,
        autoReplace: !1,
        previewClass: "",
        captionClass: "",
        mainClass: "file-caption-main",
        mainTemplate: null,
        purifyHtml: !0,
        fileSizeGetter: null,
        initialCaption: "",
        initialPreview: [],
        initialPreviewDelimiter: "*$$*",
        initialPreviewAsData: !1,
        initialPreviewFileType: "image",
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: !0,
        removeFromPreviewOnError: !1,
        deleteUrl: "",
        deleteExtraData: {},
        overwriteInitial: !0,
        layoutTemplates: Q,
        previewTemplates: X,
        previewZoomSettings: G,
        previewZoomButtonIcons: {
            prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
            next: '<i class="glyphicon glyphicon-triangle-right"></i>',
            toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
            fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
            borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
            close: '<i class="glyphicon glyphicon-remove"></i>'
        },
        previewZoomButtonClasses: {
            prev: "btn btn-navigate",
            next: "btn btn-navigate",
            toggleheader: "btn btn-default btn-header-toggle",
            fullscreen: "btn btn-default",
            borderless: "btn btn-default",
            close: "btn btn-default"
        },
        allowedPreviewTypes: K,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewSettings: te,
        fileTypeSettings: ne,
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: "file-other-icon",
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: "hidden-xs",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
        browseClass: "btn btn-primary",
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: "btn btn-default",
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: "btn btn-default",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        uploadAsync: !0,
        uploadExtraData: {},
        zoomModalHeight: 480,
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: !1,
        resizePreference: "width",
        resizeQuality: .92,
        resizeDefaultImageType: "image/jpeg",
        maxFileSize: 0,
        maxFilePreviewSize: 25600,
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: !1,
        msgValidationErrorClass: "text-danger",
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: "file-error-message",
        progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar progress-bar-success",
        progressErrorClass: "progress-bar progress-bar-danger",
        progressUploadThreshold: 99,
        previewFileType: "image",
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: '<span class="close kv-error-close">&times;</span>',
        slugCallback: null,
        dropZoneEnabled: !0,
        dropZoneTitleClass: "file-drop-zone-title",
        fileActionSettings: {},
        otherActionButtons: "",
        textEncoding: "UTF-8",
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: !0
    }, e.fn.fileinputLocales.en = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgNo: "No",
        msgNoFilesSelected: "No files selected",
        msgCancelled: "Cancelled",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgUploadThreshold: "Processing...",
        msgValidationError: "Validation Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;",
        dropZoneClickTitle: "<br>(or click to select {files})",
        previewZoomButtonTitles: {
            prev: "View previous file",
            next: "View next file",
            toggleheader: "Toggle header",
            fullscreen: "Toggle full screen",
            borderless: "Toggle borderless mode",
            close: "Close detailed preview"
        }
    }, e.fn.fileinput.Constructor = he, e(document).ready(function() {
        var t = e("input.file[type=file]");
        t.length && t.fileinput()
    })
});
var DateFormatter;
! function() {
    "use strict";
    var e, t, n, i, o, r;
    o = 864e5, r = 3600, e = function(e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function(e, n, i) {
        var o = i || "0",
            r = e.toString();
        return r.length < n ? t(o + r, n) : r
    }, n = function(e) {
        var t, i;
        for (e = e || {}, t = 1; t < arguments.length; t++)
            if (i = arguments[t])
                for (var o in i) i.hasOwnProperty(o) && ("object" == typeof i[o] ? n(e[o], i[o]) : e[o] = i[o]);
        return e
    }, i = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function(e) {
                var t = e % 10,
                    n = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                return 1 !== Math.floor(e % 100 / 10) && n[t] ? n[t] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, DateFormatter = function(e) {
        var t = this,
            o = n(i, e);
        t.dateSettings = o.dateSettings, t.separators = o.separators, t.validParts = o.validParts, t.intParts = o.intParts, t.tzParts = o.tzParts, t.tzClip = o.tzClip
    }, DateFormatter.prototype = {
        constructor: DateFormatter,
        parseDate: function(t, n) {
            var i, o, r, a, s, l, d, c, u, f, p = this,
                h = !1,
                g = !1,
                m = p.dateSettings,
                v = {
                    date: null,
                    year: null,
                    month: null,
                    day: null,
                    hour: 0,
                    min: 0,
                    sec: 0
                };
            if (!t) return void 0;
            if (t instanceof Date) return t;
            if ("number" == typeof t) return new Date(t);
            if ("U" === n) return r = parseInt(t), r ? new Date(1e3 * r) : t;
            if ("string" != typeof t) return "";
            if (i = n.match(p.validParts), !i || 0 === i.length) throw new Error("Invalid date format definition.");
            for (o = t.replace(p.separators, "\x00").split("\x00"), r = 0; r < o.length; r++) switch (a = o[r], s = parseInt(a), i[r]) {
                case "y":
                case "Y":
                    u = a.length, 2 === u ? v.year = parseInt((70 > s ? "20" : "19") + a) : 4 === u && (v.year = s), h = !0;
                    break;
                case "m":
                case "n":
                case "M":
                case "F":
                    isNaN(a) ? (l = m.monthsShort.indexOf(a), l > -1 && (v.month = l + 1), l = m.months.indexOf(a), l > -1 && (v.month = l + 1)) : s >= 1 && 12 >= s && (v.month = s), h = !0;
                    break;
                case "d":
                case "j":
                    s >= 1 && 31 >= s && (v.day = s), h = !0;
                    break;
                case "g":
                case "h":
                    d = i.indexOf("a") > -1 ? i.indexOf("a") : i.indexOf("A") > -1 ? i.indexOf("A") : -1, f = o[d], d > -1 ? (c = e(f, m.meridiem[0]) ? 0 : e(f, m.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && c > -1 ? v.hour = s + c - 1 : s >= 0 && 23 >= s && (v.hour = s)) : s >= 0 && 23 >= s && (v.hour = s), g = !0;
                    break;
                case "G":
                case "H":
                    s >= 0 && 23 >= s && (v.hour = s), g = !0;
                    break;
                case "i":
                    s >= 0 && 59 >= s && (v.min = s), g = !0;
                    break;
                case "s":
                    s >= 0 && 59 >= s && (v.sec = s), g = !0
            }
            if (h === !0 && v.year && v.month && v.day) v.date = new Date(v.year, v.month - 1, v.day, v.hour, v.min, v.sec, 0);
            else {
                if (g !== !0) return !1;
                v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0)
            }
            return v.date
        },
        guessDate: function(e, t) {
            if ("string" != typeof e) return e;
            var n, i, o, r, a = this,
                s = e.replace(a.separators, "\x00").split("\x00"),
                l = /^[djmn]/g,
                d = t.match(a.validParts),
                c = new Date,
                u = 0;
            if (!l.test(d[0])) return e;
            for (i = 0; i < s.length; i++) {
                switch (u = 2, o = s[i], r = parseInt(o.substr(0, 2)), i) {
                    case 0:
                        "m" === d[0] || "n" === d[0] ? c.setMonth(r - 1) : c.setDate(r);
                        break;
                    case 1:
                        "m" === d[0] || "n" === d[0] ? c.setDate(r) : c.setMonth(r - 1);
                        break;
                    case 2:
                        n = c.getFullYear(), o.length < 4 ? (c.setFullYear(parseInt(n.toString().substr(0, 4 - o.length) + o)), u = o.length) : (c.setFullYear = parseInt(o.substr(0, 4)), u = 4);
                        break;
                    case 3:
                        c.setHours(r);
                        break;
                    case 4:
                        c.setMinutes(r);
                        break;
                    case 5:
                        c.setSeconds(r)
                }
                o.substr(u).length > 0 && s.splice(i + 1, 0, o.substr(u))
            }
            return c
        },
        parseFormat: function(e, n) {
            var i, a = this,
                s = a.dateSettings,
                l = /\\?(.?)/gi,
                d = function(e, t) {
                    return i[e] ? i[e]() : t
                };
            return i = {
                d: function() {
                    return t(i.j(), 2)
                },
                D: function() {
                    return s.daysShort[i.w()]
                },
                j: function() {
                    return n.getDate()
                },
                l: function() {
                    return s.days[i.w()]
                },
                N: function() {
                    return i.w() || 7
                },
                w: function() {
                    return n.getDay()
                },
                z: function() {
                    var e = new Date(i.Y(), i.n() - 1, i.j()),
                        t = new Date(i.Y(), 0, 1);
                    return Math.round((e - t) / o)
                },
                W: function() {
                    var e = new Date(i.Y(), i.n() - 1, i.j() - i.N() + 3),
                        n = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - n) / o / 7), 2)
                },
                F: function() {
                    return s.months[n.getMonth()]
                },
                m: function() {
                    return t(i.n(), 2)
                },
                M: function() {
                    return s.monthsShort[n.getMonth()]
                },
                n: function() {
                    return n.getMonth() + 1
                },
                t: function() {
                    return new Date(i.Y(), i.n(), 0).getDate()
                },
                L: function() {
                    var e = i.Y();
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 1 : 0
                },
                o: function() {
                    var e = i.n(),
                        t = i.W(),
                        n = i.Y();
                    return n + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                },
                Y: function() {
                    return n.getFullYear()
                },
                y: function() {
                    return i.Y().toString().slice(-2)
                },
                a: function() {
                    return i.A().toLowerCase()
                },
                A: function() {
                    var e = i.G() < 12 ? 0 : 1;
                    return s.meridiem[e]
                },
                B: function() {
                    var e = n.getUTCHours() * r,
                        i = 60 * n.getUTCMinutes(),
                        o = n.getUTCSeconds();
                    return t(Math.floor((e + i + o + r) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return i.G() % 12 || 12
                },
                G: function() {
                    return n.getHours()
                },
                h: function() {
                    return t(i.g(), 2)
                },
                H: function() {
                    return t(i.G(), 2)
                },
                i: function() {
                    return t(n.getMinutes(), 2)
                },
                s: function() {
                    return t(n.getSeconds(), 2)
                },
                u: function() {
                    return t(1e3 * n.getMilliseconds(), 6)
                },
                e: function() {
                    var e = /\((.*)\)/.exec(String(n))[1];
                    return e || "Coordinated Universal Time"
                },
                T: function() {
                    var e = (String(n).match(a.tzParts) || [""]).pop().replace(a.tzClip, "");
                    return e || "UTC"
                },
                I: function() {
                    var e = new Date(i.Y(), 0),
                        t = Date.UTC(i.Y(), 0),
                        n = new Date(i.Y(), 6),
                        o = Date.UTC(i.Y(), 6);
                    return e - t !== n - o ? 1 : 0
                },
                O: function() {
                    var e = n.getTimezoneOffset(),
                        i = Math.abs(e);
                    return (e > 0 ? "-" : "+") + t(100 * Math.floor(i / 60) + i % 60, 4)
                },
                P: function() {
                    var e = i.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                },
                Z: function() {
                    return 60 * -n.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(l, d)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(l, d)
                },
                U: function() {
                    return n.getTime() / 1e3 || 0
                }
            }, d(e, e)
        },
        formatDate: function(e, t) {
            var n, i, o, r, a, s = this,
                l = "";
            if ("string" == typeof e && (e = s.parseDate(e, t), e === !1)) return !1;
            if (e instanceof Date) {
                for (o = t.length, n = 0; o > n; n++) a = t.charAt(n), "S" !== a && (r = s.parseFormat(a, e), n !== o - 1 && s.intParts.test(a) && "S" === t.charAt(n + 1) && (i = parseInt(r), r += s.dateSettings.ordinal(i)), l += r);
                return l
            }
            return ""
        }
    }
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    "use strict";

    function t(e, t, n) {
        this.date = e, this.desc = t, this.style = n
    }
    var n = {
            i18n: {
                ar: {
                    months: ["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0634\u0628\u0627\u0637", "\u0622\u0630\u0627\u0631", "\u0646\u064a\u0633\u0627\u0646", "\u0645\u0627\u064a\u0648", "\u062d\u0632\u064a\u0631\u0627\u0646", "\u062a\u0645\u0648\u0632", "\u0622\u0628", "\u0623\u064a\u0644\u0648\u0644", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"],
                    dayOfWeekShort: ["\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"],
                    dayOfWeek: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"]
                },
                ro: {
                    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                    dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"],
                    dayOfWeek: ["Duminic\u0103", "Luni", "Mar\u0163i", "Miercuri", "Joi", "Vineri", "S\xe2mb\u0103t\u0103"]
                },
                id: {
                    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                    dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                },
                is: {
                    months: ["Jan\xfaar", "Febr\xfaar", "Mars", "Apr\xedl", "Ma\xed", "J\xfan\xed", "J\xfal\xed", "\xc1g\xfast", "September", "Okt\xf3ber", "N\xf3vember", "Desember"],
                    dayOfWeekShort: ["Sun", "M\xe1n", "\xderi\xf0", "Mi\xf0", "Fim", "F\xf6s", "Lau"],
                    dayOfWeek: ["Sunnudagur", "M\xe1nudagur", "\xderi\xf0judagur", "Mi\xf0vikudagur", "Fimmtudagur", "F\xf6studagur", "Laugardagur"]
                },
                bg: {
                    months: ["\u042f\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
                    dayOfWeekShort: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u044f\u0434\u0430", "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a", "\u041f\u0435\u0442\u044a\u043a", "\u0421\u044a\u0431\u043e\u0442\u0430"]
                },
                fa: {
                    months: ["\u0641\u0631\u0648\u0631\u062f\u06cc\u0646", "\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a", "\u062e\u0631\u062f\u0627\u062f", "\u062a\u06cc\u0631", "\u0645\u0631\u062f\u0627\u062f", "\u0634\u0647\u0631\u06cc\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631", "\u062f\u06cc", "\u0628\u0647\u0645\u0646", "\u0627\u0633\u0641\u0646\u062f"],
                    dayOfWeekShort: ["\u06cc\u06a9\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647 \u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
                    dayOfWeek: ["\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200c\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647"]
                },
                ru: {
                    months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],
                    dayOfWeekShort: ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
                    dayOfWeek: ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"]
                },
                uk: {
                    months: ["\u0421\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],
                    dayOfWeekShort: ["\u041d\u0434\u043b", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0431\u0442"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f", "\u0421\u0443\u0431\u043e\u0442\u0430"]
                },
                en: {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                el: {
                    months: ["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"],
                    dayOfWeekShort: ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"],
                    dayOfWeek: ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"]
                },
                de: {
                    months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                    dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                    dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                nl: {
                    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                },
                tr: {
                    months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"],
                    dayOfWeekShort: ["Paz", "Pts", "Sal", "\xc7ar", "Per", "Cum", "Cts"],
                    dayOfWeek: ["Pazar", "Pazartesi", "Sal\u0131", "\xc7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"]
                },
                fr: {
                    months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"],
                    dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                es: {
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"],
                    dayOfWeek: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"]
                },
                th: {
                    months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"],
                    dayOfWeekShort: ["\u0e2d\u0e32.", "\u0e08.", "\u0e2d.", "\u0e1e.", "\u0e1e\u0e24.", "\u0e28.", "\u0e2a."],
                    dayOfWeek: ["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e1e\u0e38\u0e18", "\u0e1e\u0e24\u0e2b\u0e31\u0e2a", "\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e40\u0e2a\u0e32\u0e23\u0e4c", "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"]
                },
                pl: {
                    months: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"],
                    dayOfWeekShort: ["nd", "pn", "wt", "\u015br", "cz", "pt", "sb"],
                    dayOfWeek: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"]
                },
                pt: {
                    months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                    dayOfWeek: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"]
                },
                ch: {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"]
                },
                se: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"]
                },
                kr: {
                    months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
                    dayOfWeekShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
                    dayOfWeek: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"]
                },
                it: {
                    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                    dayOfWeek: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"]
                },
                da: {
                    months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
                    dayOfWeek: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"]
                },
                no: {
                    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                    dayOfWeekShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
                    dayOfWeek: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"]
                },
                ja: {
                    months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
                    dayOfWeek: ["\u65e5\u66dc", "\u6708\u66dc", "\u706b\u66dc", "\u6c34\u66dc", "\u6728\u66dc", "\u91d1\u66dc", "\u571f\u66dc"]
                },
                vi: {
                    months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"],
                    dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    dayOfWeek: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\xe1u", "Th\u1ee9 b\u1ea3y"]
                },
                sl: {
                    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"],
                    dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"]
                },
                cs: {
                    months: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011bten", "\u010cerven", "\u010cervenec", "Srpen", "Z\xe1\u0159\xed", "\u0158\xedjen", "Listopad", "Prosinec"],
                    dayOfWeekShort: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"]
                },
                hu: {
                    months: ["Janu\xe1r", "Febru\xe1r", "M\xe1rcius", "\xc1prilis", "M\xe1jus", "J\xfanius", "J\xfalius", "Augusztus", "Szeptember", "Okt\xf3ber", "November", "December"],
                    dayOfWeekShort: ["Va", "H\xe9", "Ke", "Sze", "Cs", "P\xe9", "Szo"],
                    dayOfWeek: ["vas\xe1rnap", "h\xe9tf\u0151", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"]
                },
                az: {
                    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                    dayOfWeekShort: ["B", "Be", "\xc7a", "\xc7", "Ca", "C", "\u015e"],
                    dayOfWeek: ["Bazar", "Bazar ert\u0259si", "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\xc7\u0259r\u015f\u0259nb\u0259", "C\xfcm\u0259 ax\u015fam\u0131", "C\xfcm\u0259", "\u015e\u0259nb\u0259"]
                },
                bs: {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"]
                },
                ca: {
                    months: ["Gener", "Febrer", "Mar\xe7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                    dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                    dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
                },
                "en-GB": {
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                et: {
                    months: ["Jaanuar", "Veebruar", "M\xe4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                    dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                    dayOfWeek: ["P\xfchap\xe4ev", "Esmasp\xe4ev", "Teisip\xe4ev", "Kolmap\xe4ev", "Neljap\xe4ev", "Reede", "Laup\xe4ev"]
                },
                eu: {
                    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                    dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                    dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
                },
                fi: {
                    months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes\xe4kuu", "Hein\xe4kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                    dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                    dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
                },
                gl: {
                    months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                    dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                    dayOfWeek: ["Domingo", "Luns", "Martes", "M\xe9rcores", "Xoves", "Venres", "S\xe1bado"]
                },
                hr: {
                    months: ["Sije\u010danj", "Velja\u010da", "O\u017eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
                    dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"]
                },
                ko: {
                    months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
                    dayOfWeekShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"],
                    dayOfWeek: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"]
                },
                lt: {
                    months: ["Sausio", "Vasario", "Kovo", "Baland\u017eio", "Gegu\u017e\u0117s", "Bir\u017eelio", "Liepos", "Rugpj\u016b\u010dio", "Rugs\u0117jo", "Spalio", "Lapkri\u010dio", "Gruod\u017eio"],
                    dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "\u0160e\u0161"],
                    dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"]
                },
                lv: {
                    months: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012blis ", "Maijs", "J\u016bnijs", "J\u016blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                    dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                    dayOfWeek: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
                },
                mk: {
                    months: ["\u0458\u0430\u043d\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0438\u043b", "\u043c\u0430\u0458", "\u0458\u0443\u043d\u0438", "\u0458\u0443\u043b\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u043d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"],
                    dayOfWeekShort: ["\u043d\u0435\u0434", "\u043f\u043e\u043d", "\u0432\u0442\u043e", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043f\u0435\u0442", "\u0441\u0430\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u043b\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a", "\u041f\u0435\u0442\u043e\u043a", "\u0421\u0430\u0431\u043e\u0442\u0430"]
                },
                mn: {
                    months: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"],
                    dayOfWeekShort: ["\u0414\u0430\u0432", "\u041c\u044f\u0433", "\u041b\u0445\u0430", "\u041f\u04af\u0440", "\u0411\u0441\u043d", "\u0411\u044f\u043c", "\u041d\u044f\u043c"],
                    dayOfWeek: ["\u0414\u0430\u0432\u0430\u0430", "\u041c\u044f\u0433\u043c\u0430\u0440", "\u041b\u0445\u0430\u0433\u0432\u0430", "\u041f\u04af\u0440\u044d\u0432", "\u0411\u0430\u0430\u0441\u0430\u043d", "\u0411\u044f\u043c\u0431\u0430", "\u041d\u044f\u043c"]
                },
                "pt-BR": {
                    months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
                    dayOfWeek: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"]
                },
                sk: {
                    months: ["Janu\xe1r", "Febru\xe1r", "Marec", "Apr\xedl", "M\xe1j", "J\xfan", "J\xfal", "August", "September", "Okt\xf3ber", "November", "December"],
                    dayOfWeekShort: ["Ne", "Po", "Ut", "St", "\u0160t", "Pi", "So"],
                    dayOfWeek: ["Nede\u013ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"]
                },
                sq: {
                    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xebntor", "Dhjetor"],
                    dayOfWeekShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"],
                    dayOfWeek: ["E Diel", "E H\xebn\xeb", "E Mart\u0113", "E M\xebrkur\xeb", "E Enjte", "E Premte", "E Shtun\xeb"]
                },
                "sr-YU": {
                    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                    dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "\u010det", "Pet", "Sub"],
                    dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"]
                },
                sr: {
                    months: ["\u0458\u0430\u043d\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0438\u043b", "\u043c\u0430\u0458", "\u0458\u0443\u043d", "\u0458\u0443\u043b", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u043e\u043a\u0442\u043e\u0431\u0430\u0440", "\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
                    dayOfWeekShort: ["\u043d\u0435\u0434", "\u043f\u043e\u043d", "\u0443\u0442\u043e", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043f\u0435\u0442", "\u0441\u0443\u0431"],
                    dayOfWeek: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"]
                },
                sv: {
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    dayOfWeekShort: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"],
                    dayOfWeek: ["S\xf6ndag", "M\xe5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xf6rdag"]
                },
                "zh-TW": {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                    dayOfWeek: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
                },
                zh: {
                    months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                    dayOfWeekShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                    dayOfWeek: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
                },
                he: {
                    months: ["\u05d9\u05e0\u05d5\u05d0\u05e8", "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8\u05d9\u05dc", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0\u05d9", "\u05d9\u05d5\u05dc\u05d9", "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8", "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8", "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8", "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8", "\u05d3\u05e6\u05de\u05d1\u05e8"],
                    dayOfWeekShort: ["\u05d0'", "\u05d1'", "\u05d2'", "\u05d3'", "\u05d4'", "\u05d5'", "\u05e9\u05d1\u05ea"],
                    dayOfWeek: ["\u05e8\u05d0\u05e9\u05d5\u05df", "\u05e9\u05e0\u05d9", "\u05e9\u05dc\u05d9\u05e9\u05d9", "\u05e8\u05d1\u05d9\u05e2\u05d9", "\u05d7\u05de\u05d9\u05e9\u05d9", "\u05e9\u05d9\u05e9\u05d9", "\u05e9\u05d1\u05ea", "\u05e8\u05d0\u05e9\u05d5\u05df"]
                },
                hy: {
                    months: ["\u0540\u0578\u0582\u0576\u057e\u0561\u0580", "\u0553\u0565\u057f\u0580\u057e\u0561\u0580", "\u0544\u0561\u0580\u057f", "\u0531\u057a\u0580\u056b\u056c", "\u0544\u0561\u0575\u056b\u057d", "\u0540\u0578\u0582\u0576\u056b\u057d", "\u0540\u0578\u0582\u056c\u056b\u057d", "\u0555\u0563\u0578\u057d\u057f\u0578\u057d", "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"],
                    dayOfWeekShort: ["\u053f\u056b", "\u0535\u0580\u056f", "\u0535\u0580\u0584", "\u0549\u0578\u0580", "\u0540\u0576\u0563", "\u0548\u0582\u0580\u0562", "\u0547\u0562\u0569"],
                    dayOfWeek: ["\u053f\u056b\u0580\u0561\u056f\u056b", "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"]
                },
                kg: {
                    months: ["\u04ae\u0447\u0442\u04af\u043d \u0430\u0439\u044b", "\u0411\u0438\u0440\u0434\u0438\u043d \u0430\u0439\u044b", "\u0416\u0430\u043b\u0433\u0430\u043d \u041a\u0443\u0440\u0430\u043d", "\u0427\u044b\u043d \u041a\u0443\u0440\u0430\u043d", "\u0411\u0443\u0433\u0443", "\u041a\u0443\u043b\u0436\u0430", "\u0422\u0435\u043a\u0435", "\u0411\u0430\u0448 \u041e\u043e\u043d\u0430", "\u0410\u044f\u043a \u041e\u043e\u043d\u0430", "\u0422\u043e\u0433\u0443\u0437\u0434\u0443\u043d \u0430\u0439\u044b", "\u0416\u0435\u0442\u0438\u043d\u0438\u043d \u0430\u0439\u044b", "\u0411\u0435\u0448\u0442\u0438\u043d \u0430\u0439\u044b"],
                    dayOfWeekShort: ["\u0416\u0435\u043a", "\u0414\u04af\u0439", "\u0428\u0435\u0439", "\u0428\u0430\u0440", "\u0411\u0435\u0439", "\u0416\u0443\u043c", "\u0418\u0448\u0435"],
                    dayOfWeek: ["\u0416\u0435\u043a\u0448\u0435\u043c\u0431", "\u0414\u04af\u0439\u0448\u04e9\u043c\u0431", "\u0428\u0435\u0439\u0448\u0435\u043c\u0431", "\u0428\u0430\u0440\u0448\u0435\u043c\u0431", "\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438", "\u0416\u0443\u043c\u0430", "\u0418\u0448\u0435\u043d\u0431"]
                },
                rm: {
                    months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                    dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                    dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
                }
            },
            value: "",
            rtl: !1,
            format: "Y/m/d H:i",
            formatTime: "H:i",
            formatDate: "Y/m/d",
            startDate: !1,
            step: 60,
            monthChangeSpinner: !0,
            closeOnDateSelect: !1,
            closeOnTimeSelect: !0,
            closeOnWithoutClick: !0,
            closeOnInputClick: !0,
            timepicker: !0,
            datepicker: !0,
            weeks: !1,
            defaultTime: !1,
            defaultDate: !1,
            minDate: !1,
            maxDate: !1,
            minTime: !1,
            maxTime: !1,
            disabledMinTime: !1,
            disabledMaxTime: !1,
            allowTimes: [],
            opened: !1,
            initTime: !0,
            inline: !1,
            theme: "",
            onSelectDate: function() {},
            onSelectTime: function() {},
            onChangeMonth: function() {},
            onGetWeekOfYear: function() {},
            onChangeYear: function() {},
            onChangeDateTime: function() {},
            onShow: function() {},
            onClose: function() {},
            onGenerate: function() {},
            withoutCopyright: !0,
            inverseButton: !1,
            hours12: !1,
            next: "xdsoft_next",
            prev: "xdsoft_prev",
            dayOfWeekStart: 0,
            parentID: "body",
            timeHeightInTimePicker: 25,
            timepickerScrollbar: !0,
            todayButton: !0,
            prevButton: !0,
            nextButton: !0,
            defaultSelect: !0,
            scrollMonth: !0,
            scrollTime: !0,
            scrollInput: !0,
            lazyInit: !1,
            mask: !1,
            validateOnBlur: !0,
            allowBlank: !0,
            yearStart: 1950,
            yearEnd: 2050,
            monthStart: 0,
            monthEnd: 11,
            style: "",
            id: "",
            fixed: !1,
            roundTime: "round",
            className: "",
            weekends: [],
            highlightedDates: [],
            highlightedPeriods: [],
            allowDates: [],
            allowDateRe: null,
            disabledDates: [],
            disabledWeekDays: [],
            yearOffset: 0,
            beforeShowDay: null,
            enterLikeTab: !0,
            showApplyButton: !1
        },
        i = null,
        o = "en",
        r = "en",
        a = {
            meridiem: ["AM", "PM"]
        },
        s = function() {
            var t = n.i18n[r],
                o = {
                    days: t.dayOfWeek,
                    daysShort: t.dayOfWeekShort,
                    months: t.months,
                    monthsShort: e.map(t.months, function(e) {
                        return e.substring(0, 3)
                    })
                };
            i = new DateFormatter({
                dateSettings: e.extend({}, a, o)
            })
        };
    e.datetimepicker = {
        setLocale: function(e) {
            var t = n.i18n[e] ? e : o;
            r != t && (r = t, s())
        },
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
    }, s(), window.getComputedStyle || (window.getComputedStyle = function(e) {
        return this.el = e, this.getPropertyValue = function(t) {
            var n = /(\-([a-z]){1})/g;
            return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function(e, t, n) {
                return n.toUpperCase()
            })), e.currentStyle[t] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var n, i;
        for (n = t || 0, i = this.length; i > n; n += 1)
            if (this[n] === e) return n;
        return -1
    }), Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, e.fn.xdsoftScroller = function(t) {
        return this.each(function() {
            var n, i, o, r, a, s = e(this),
                l = function(e) {
                    var t, n = {
                        x: 0,
                        y: 0
                    };
                    return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], n.x = t.clientX, n.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (n.x = e.clientX, n.y = e.clientY), n
                },
                d = 100,
                c = !1,
                u = 0,
                f = 0,
                p = 0,
                h = !1,
                g = 0,
                m = function() {};
            return "hide" === t ? void s.find(".xdsoft_scrollbar").hide() : (e(this).hasClass("xdsoft_scroller_box") || (n = s.children().eq(0), i = s[0].clientHeight, o = n[0].offsetHeight, r = e('<div class="xdsoft_scrollbar"></div>'), a = e('<div class="xdsoft_scroller"></div>'), r.append(a), s.addClass("xdsoft_scroller_box").append(r), m = function(e) {
                var t = l(e).y - u + g;
                0 > t && (t = 0), t + a[0].offsetHeight > p && (t = p - a[0].offsetHeight), s.trigger("scroll_element.xdsoft_scroller", [d ? t / d : 0])
            }, a.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(n) {
                i || s.trigger("resize_scroll.xdsoft_scroller", [t]), u = l(n).y, g = parseInt(a.css("margin-top"), 10), p = r[0].offsetHeight, "mousedown" === n.type || "touchstart" === n.type ? (document && e(document.body).addClass("xdsoft_noselect"), e([document.body, window]).on("touchend mouseup.xdsoft_scroller", function o() {
                    e([document.body, window]).off("touchend mouseup.xdsoft_scroller", o).off("mousemove.xdsoft_scroller", m).removeClass("xdsoft_noselect")
                }), e(document.body).on("mousemove.xdsoft_scroller", m)) : (h = !0, n.stopPropagation(), n.preventDefault())
            }).on("touchmove", function(e) {
                h && (e.preventDefault(), m(e))
            }).on("touchend touchcancel", function() {
                h = !1, g = 0
            }), s.on("scroll_element.xdsoft_scroller", function(e, t) {
                i || s.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t, a.css("margin-top", d * t), setTimeout(function() {
                    n.css("marginTop", -parseInt((n[0].offsetHeight - i) * t, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function(e, t, l) {
                var c, u;
                i = s[0].clientHeight, o = n[0].offsetHeight, c = i / o, u = c * r[0].offsetHeight, c > 1 ? a.hide() : (a.show(), a.css("height", parseInt(u > 10 ? u : 10, 10)), d = r[0].offsetHeight - a[0].offsetHeight, l !== !0 && s.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (o - i)]))
            }), s.on("mousewheel", function(e) {
                var t = Math.abs(parseInt(n.css("marginTop"), 10));
                return t -= 20 * e.deltaY, 0 > t && (t = 0), s.trigger("scroll_element.xdsoft_scroller", [t / (o - i)]), e.stopPropagation(), !1
            }), s.on("touchstart", function(e) {
                c = l(e), f = Math.abs(parseInt(n.css("marginTop"), 10))
            }), s.on("touchmove", function(e) {
                if (c) {
                    e.preventDefault();
                    var t = l(e);
                    s.trigger("scroll_element.xdsoft_scroller", [(f - (t.y - c.y)) / (o - i)])
                }
            }), s.on("touchend touchcancel", function() {
                c = !1, f = 0
            })), void s.trigger("resize_scroll.xdsoft_scroller", [t]))
        })
    }, e.fn.datetimepicker = function(o, a) {
        var s, l, d = this,
            c = 48,
            u = 57,
            f = 96,
            p = 105,
            h = 17,
            g = 46,
            m = 13,
            v = 27,
            b = 8,
            y = 37,
            w = 38,
            x = 39,
            T = 40,
            C = 9,
            k = 116,
            S = 65,
            D = 67,
            _ = 86,
            $ = 90,
            E = 89,
            A = !1,
            O = e.isPlainObject(o) || !o ? e.extend(!0, {}, n, o) : e.extend(!0, {}, n),
            I = 0,
            F = function(e) {
                e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
                    e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(I), I = setTimeout(function() {
                        e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
                    }, 100))
                })
            };
        return s = function(n) {
            function a() {
                var e, t = !1;
                return O.startDate ? t = P.strToDate(O.startDate) : (t = O.value || (n && n.val && n.val() ? n.val() : ""), t ? t = P.strToDateTime(t) : O.defaultDate && (t = P.strToDateTime(O.defaultDate), O.defaultTime && (e = P.strtotime(O.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes())))), t && P.isValidDate(t) ? j.data("changed", !0) : t = "", t || 0
            }
            var s, l, d, I, F, P, j = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                N = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                M = e('<div class="xdsoft_datepicker active"></div>'),
                R = e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
                z = e('<div class="xdsoft_calendar"></div>'),
                L = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                W = L.find(".xdsoft_time_box").eq(0),
                H = e('<div class="xdsoft_time_variant"></div>'),
                U = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                B = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                q = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                Y = !1,
                J = 0,
                Z = 0;
            O.id && j.attr("id", O.id), O.style && j.attr("style", O.style), O.weeks && j.addClass("xdsoft_showweeks"), O.rtl && j.addClass("xdsoft_rtl"), j.addClass("xdsoft_" + O.theme), j.addClass(O.className), R.find(".xdsoft_month span").after(B), R.find(".xdsoft_year span").after(q), R.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(t) {
                var n, i, o = e(this).find(".xdsoft_select").eq(0),
                    r = 0,
                    a = 0,
                    s = o.is(":visible");
                for (R.find(".xdsoft_select").hide(), P.currentTime && (r = P.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), o[s ? "hide" : "show"](), n = o.find("div.xdsoft_option"), i = 0; i < n.length && n.eq(i).data("value") !== r; i += 1) a += n[0].offsetHeight;
                return o.xdsoftScroller(a / (o.children()[0].offsetHeight - o[0].clientHeight)), t.stopPropagation(), !1
            }), R.find(".xdsoft_select").xdsoftScroller().on("touchstart mousedown.xdsoft", function(e) {
                e.stopPropagation(), e.preventDefault()
            }).on("touchstart mousedown.xdsoft", ".xdsoft_option", function() {
                (void 0 === P.currentTime || null === P.currentTime) && (P.currentTime = P.now());
                var t = P.currentTime.getFullYear();
                P && P.currentTime && P.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), j.trigger("xchange.xdsoft"), O.onChangeMonth && e.isFunction(O.onChangeMonth) && O.onChangeMonth.call(j, P.currentTime, j.data("input")), t !== P.currentTime.getFullYear() && e.isFunction(O.onChangeYear) && O.onChangeYear.call(j, P.currentTime, j.data("input"))
            }), j.getValue = function() {
                return P.getCurrentTime()
            }, j.setOptions = function(o) {
                var r = {},
                    a = function(e) {
                        try {
                            if (document.selection && document.selection.createRange) {
                                var t = document.selection.createRange();
                                return t.getBookmark().charCodeAt(2) - 2
                            }
                            if (e.setSelectionRange) return e.selectionStart
                        } catch (n) {
                            return 0
                        }
                    },
                    s = function(e, t) {
                        if (e = "string" == typeof e || e instanceof String ? document.getElementById(e) : e, !e) return !1;
                        if (e.createTextRange) {
                            var n = e.createTextRange();
                            return n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select(), !0
                        }
                        return e.setSelectionRange ? (e.setSelectionRange(t, t), !0) : !1
                    },
                    l = function(e, t) {
                        var n = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return new RegExp(n).test(t)
                    };
                O = e.extend(!0, {}, O, o), o.allowTimes && e.isArray(o.allowTimes) && o.allowTimes.length && (O.allowTimes = e.extend(!0, [], o.allowTimes)), o.weekends && e.isArray(o.weekends) && o.weekends.length && (O.weekends = e.extend(!0, [], o.weekends)), o.allowDates && e.isArray(o.allowDates) && o.allowDates.length && (O.allowDates = e.extend(!0, [], o.allowDates)), o.allowDateRe && "[object String]" === Object.prototype.toString.call(o.allowDateRe) && (O.allowDateRe = new RegExp(o.allowDateRe)), o.highlightedDates && e.isArray(o.highlightedDates) && o.highlightedDates.length && (e.each(o.highlightedDates, function(n, o) {
                    var a, s = e.map(o.split(","), e.trim),
                        l = new t(i.parseDate(s[0], O.formatDate), s[1], s[2]),
                        d = i.formatDate(l.date, O.formatDate);
                    void 0 !== r[d] ? (a = r[d].desc, a && a.length && l.desc && l.desc.length && (r[d].desc = a + "\n" + l.desc)) : r[d] = l
                }), O.highlightedDates = e.extend(!0, [], r)), o.highlightedPeriods && e.isArray(o.highlightedPeriods) && o.highlightedPeriods.length && (r = e.extend(!0, [], O.highlightedDates),
                    e.each(o.highlightedPeriods, function(n, o) {
                        var a, s, l, d, c, u, f;
                        if (e.isArray(o)) a = o[0], s = o[1], l = o[2], f = o[3];
                        else {
                            var p = e.map(o.split(","), e.trim);
                            a = i.parseDate(p[0], O.formatDate), s = i.parseDate(p[1], O.formatDate), l = p[2], f = p[3]
                        }
                        for (; s >= a;) d = new t(a, l, f), c = i.formatDate(a, O.formatDate), a.setDate(a.getDate() + 1), void 0 !== r[c] ? (u = r[c].desc, u && u.length && d.desc && d.desc.length && (r[c].desc = u + "\n" + d.desc)) : r[c] = d
                    }), O.highlightedDates = e.extend(!0, [], r)), o.disabledDates && e.isArray(o.disabledDates) && o.disabledDates.length && (O.disabledDates = e.extend(!0, [], o.disabledDates)), o.disabledWeekDays && e.isArray(o.disabledWeekDays) && o.disabledWeekDays.length && (O.disabledWeekDays = e.extend(!0, [], o.disabledWeekDays)), !O.open && !O.opened || O.inline || n.trigger("open.xdsoft"), O.inline && (Y = !0, j.addClass("xdsoft_inline"), n.after(j).hide()), O.inverseButton && (O.next = "xdsoft_prev", O.prev = "xdsoft_next"), O.datepicker ? M.addClass("active") : M.removeClass("active"), O.timepicker ? L.addClass("active") : L.removeClass("active"), O.value && (P.setCurrentTime(O.value), n && n.val && n.val(P.str)), O.dayOfWeekStart = isNaN(O.dayOfWeekStart) ? 0 : parseInt(O.dayOfWeekStart, 10) % 7, O.timepickerScrollbar || W.xdsoftScroller("hide"), O.minDate && /^[\+\-](.*)$/.test(O.minDate) && (O.minDate = i.formatDate(P.strToDateTime(O.minDate), O.formatDate)), O.maxDate && /^[\+\-](.*)$/.test(O.maxDate) && (O.maxDate = i.formatDate(P.strToDateTime(O.maxDate), O.formatDate)), U.toggle(O.showApplyButton), R.find(".xdsoft_today_button").css("visibility", O.todayButton ? "visible" : "hidden"), R.find("." + O.prev).css("visibility", O.prevButton ? "visible" : "hidden"), R.find("." + O.next).css("visibility", O.nextButton ? "visible" : "hidden"), O.mask && (n.off("keydown.xdsoft"), O.mask === !0 && (O.mask = O.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(O.mask) && (l(O.mask, n.val()) || (n.val(O.mask.replace(/[0-9]/g, "_")), s(n[0], 0)), n.on("keydown.xdsoft", function(t) {
                    var i, o, r = this.value,
                        d = t.which;
                    if (d >= c && u >= d || d >= f && p >= d || d === b || d === g) {
                        for (i = a(this), o = d !== b && d !== g ? String.fromCharCode(d >= f && p >= d ? d - c : d) : "_", d !== b && d !== g || !i || (i -= 1, o = "_");
                            /[^0-9_]/.test(O.mask.substr(i, 1)) && i < O.mask.length && i > 0;) i += d === b || d === g ? -1 : 1;
                        if (r = r.substr(0, i) + o + r.substr(i + 1), "" === e.trim(r)) r = O.mask.replace(/[0-9]/g, "_");
                        else if (i === O.mask.length) return t.preventDefault(), !1;
                        for (i += d === b || d === g ? 0 : 1;
                            /[^0-9_]/.test(O.mask.substr(i, 1)) && i < O.mask.length && i > 0;) i += d === b || d === g ? -1 : 1;
                        l(O.mask, r) ? (this.value = r, s(this, i)) : "" === e.trim(r) ? this.value = O.mask.replace(/[0-9]/g, "_") : n.trigger("error_input.xdsoft")
                    } else if (-1 !== [S, D, _, $, E].indexOf(d) && A || -1 !== [v, w, T, y, x, k, h, C, m].indexOf(d)) return !0;
                    return t.preventDefault(), !1
                }))), O.validateOnBlur && n.off("blur.xdsoft").on("blur.xdsoft", function() {
                    if (O.allowBlank && !e.trim(e(this).val()).length) e(this).val(null), j.data("xdsoft_datetime").empty();
                    else if (i.parseDate(e(this).val(), O.format)) j.data("xdsoft_datetime").setCurrentTime(e(this).val());
                    else {
                        var t = +[e(this).val()[0], e(this).val()[1]].join(""),
                            n = +[e(this).val()[2], e(this).val()[3]].join("");
                        e(this).val(!O.datepicker && O.timepicker && t >= 0 && 24 > t && n >= 0 && 60 > n ? [t, n].map(function(e) {
                            return e > 9 ? e : "0" + e
                        }).join(":") : i.formatDate(P.now(), O.format)), j.data("xdsoft_datetime").setCurrentTime(e(this).val())
                    }
                    j.trigger("changedatetime.xdsoft")
                }), O.dayOfWeekStartPrev = 0 === O.dayOfWeekStart ? 6 : O.dayOfWeekStart - 1, j.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, j.data("options", O).on("touchstart mousedown.xdsoft", function(e) {
                return e.stopPropagation(), e.preventDefault(), q.hide(), B.hide(), !1
            }), W.append(H), W.xdsoftScroller(), j.on("afterOpen.xdsoft", function() {
                W.xdsoftScroller()
            }), j.append(M).append(L), O.withoutCopyright !== !0 && j.append(N), M.append(R).append(z).append(U), e(O.parentID).append(j), s = function() {
                var t = this;
                t.now = function(e) {
                    var n, i, o = new Date;
                    return !e && O.defaultDate && (n = t.strToDateTime(O.defaultDate), o.setFullYear(n.getFullYear()), o.setMonth(n.getMonth()), o.setDate(n.getDate())), O.yearOffset && o.setFullYear(o.getFullYear() + O.yearOffset), !e && O.defaultTime && (i = t.strtotime(O.defaultTime), o.setHours(i.getHours()), o.setMinutes(i.getMinutes())), o
                }, t.isValidDate = function(e) {
                    return "[object Date]" !== Object.prototype.toString.call(e) ? !1 : !isNaN(e.getTime())
                }, t.setCurrentTime = function(e) {
                    t.currentTime = "string" == typeof e ? t.strToDateTime(e) : t.isValidDate(e) ? e : t.now(), j.trigger("xchange.xdsoft")
                }, t.empty = function() {
                    t.currentTime = null
                }, t.getCurrentTime = function() {
                    return t.currentTime
                }, t.nextMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var n, i = t.currentTime.getMonth() + 1;
                    return 12 === i && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), i = 0), n = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), i + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(i), O.onChangeMonth && e.isFunction(O.onChangeMonth) && O.onChangeMonth.call(j, P.currentTime, j.data("input")), n !== t.currentTime.getFullYear() && e.isFunction(O.onChangeYear) && O.onChangeYear.call(j, P.currentTime, j.data("input")), j.trigger("xchange.xdsoft"), i
                }, t.prevMonth = function() {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var n = t.currentTime.getMonth() - 1;
                    return -1 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), n = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), O.onChangeMonth && e.isFunction(O.onChangeMonth) && O.onChangeMonth.call(j, P.currentTime, j.data("input")), j.trigger("xchange.xdsoft"), n
                }, t.getWeekOfYear = function(t) {
                    if (O.onGetWeekOfYear && e.isFunction(O.onGetWeekOfYear)) {
                        var n = O.onGetWeekOfYear.call(j, t);
                        if ("undefined" != typeof n) return n
                    }
                    var i = new Date(t.getFullYear(), 0, 1);
                    return 4 != i.getDay() && i.setMonth(0, 1 + (4 - i.getDay() + 7) % 7), Math.ceil(((t - i) / 864e5 + i.getDay() + 1) / 7)
                }, t.strToDateTime = function(e) {
                    var n, o, r = [];
                    return e && e instanceof Date && t.isValidDate(e) ? e : (r = /^(\+|\-)(.*)$/.exec(e), r && (r[2] = i.parseDate(r[2], O.formatDate)), r && r[2] ? (n = r[2].getTime() - 6e4 * r[2].getTimezoneOffset(), o = new Date(t.now(!0).getTime() + parseInt(r[1] + "1", 10) * n)) : o = e ? i.parseDate(e, O.format) : t.now(), t.isValidDate(o) || (o = t.now()), o)
                }, t.strToDate = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var n = e ? i.parseDate(e, O.formatDate) : t.now(!0);
                    return t.isValidDate(n) || (n = t.now(!0)), n
                }, t.strtotime = function(e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var n = e ? i.parseDate(e, O.formatTime) : t.now(!0);
                    return t.isValidDate(n) || (n = t.now(!0)), n
                }, t.str = function() {
                    return i.formatDate(t.currentTime, O.format)
                }, t.currentTime = this.now()
            }, P = new s, U.on("touchend click", function(e) {
                e.preventDefault(), j.data("changed", !0), P.setCurrentTime(a()), n.val(P.str()), j.trigger("close.xdsoft")
            }), R.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
                j.data("changed", !0), P.setCurrentTime(0), j.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function() {
                var e, t, i = P.getCurrentTime();
                i = new Date(i.getFullYear(), i.getMonth(), i.getDate()), e = P.strToDate(O.minDate), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), e > i || (t = P.strToDate(O.maxDate), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), i > t || (n.val(P.str()), n.trigger("change"), j.trigger("close.xdsoft")))
            }), R.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    n = 0,
                    i = !1;
                ! function o(e) {
                    t.hasClass(O.next) ? P.nextMonth() : t.hasClass(O.prev) && P.prevMonth(), O.monthChangeSpinner && (i || (n = setTimeout(o, e || 100)))
                }(500), e([document.body, window]).on("touchend mouseup.xdsoft", function r() {
                    clearTimeout(n), i = !0, e([document.body, window]).off("touchend mouseup.xdsoft", r)
                })
            }), L.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
                var t = e(this),
                    n = 0,
                    i = !1,
                    o = 110;
                ! function r(e) {
                    var a = W[0].clientHeight,
                        s = H[0].offsetHeight,
                        l = Math.abs(parseInt(H.css("marginTop"), 10));
                    t.hasClass(O.next) && s - a - O.timeHeightInTimePicker >= l ? H.css("marginTop", "-" + (l + O.timeHeightInTimePicker) + "px") : t.hasClass(O.prev) && l - O.timeHeightInTimePicker >= 0 && H.css("marginTop", "-" + (l - O.timeHeightInTimePicker) + "px"), W.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(H.css("marginTop"), 10) / (s - a))]), o = o > 10 ? 10 : o - 10, i || (n = setTimeout(r, e || o))
                }(500), e([document.body, window]).on("touchend mouseup.xdsoft", function a() {
                    clearTimeout(n), i = !0, e([document.body, window]).off("touchend mouseup.xdsoft", a)
                })
            }), l = 0, j.on("xchange.xdsoft", function(t) {
                clearTimeout(l), l = setTimeout(function() {
                    (void 0 === P.currentTime || null === P.currentTime) && (P.currentTime = P.now());
                    for (var t, n, a, s, l, d, c, u, f, p, h = "", g = new Date(P.currentTime.getFullYear(), P.currentTime.getMonth(), 1, 12, 0, 0), m = 0, v = P.now(), b = !1, y = !1, w = [], x = !0, T = "", C = ""; g.getDay() !== O.dayOfWeekStart;) g.setDate(g.getDate() - 1);
                    for (h += "<table><thead><tr>", O.weeks && (h += "<th></th>"), t = 0; 7 > t; t += 1) h += "<th>" + O.i18n[r].dayOfWeekShort[(t + O.dayOfWeekStart) % 7] + "</th>";
                    for (h += "</tr></thead>", h += "<tbody>", O.maxDate !== !1 && (b = P.strToDate(O.maxDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 23, 59, 59, 999)), O.minDate !== !1 && (y = P.strToDate(O.minDate), y = new Date(y.getFullYear(), y.getMonth(), y.getDate())); m < P.currentTime.countDaysInMonth() || g.getDay() !== O.dayOfWeekStart || P.currentTime.getMonth() === g.getMonth();) w = [], m += 1, a = g.getDay(), s = g.getDate(), l = g.getFullYear(), d = g.getMonth(), c = P.getWeekOfYear(g), p = "", w.push("xdsoft_date"), u = O.beforeShowDay && e.isFunction(O.beforeShowDay.call) ? O.beforeShowDay.call(j, g) : null, O.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(O.allowDateRe) ? O.allowDateRe.test(g.dateFormat(O.formatDate)) || w.push("xdsoft_disabled") : O.allowDates && O.allowDates.length > 0 ? -1 === O.allowDates.indexOf(g.dateFormat(O.formatDate)) && w.push("xdsoft_disabled") : b !== !1 && g > b || y !== !1 && y > g || u && u[0] === !1 ? w.push("xdsoft_disabled") : -1 !== O.disabledDates.indexOf(i.formatDate(g, O.formatDate)) ? w.push("xdsoft_disabled") : -1 !== O.disabledWeekDays.indexOf(a) && w.push("xdsoft_disabled"), u && "" !== u[1] && w.push(u[1]), P.currentTime.getMonth() !== d && w.push("xdsoft_other_month"), (O.defaultSelect || j.data("changed")) && i.formatDate(P.currentTime, O.formatDate) === i.formatDate(g, O.formatDate) && w.push("xdsoft_current"), i.formatDate(v, O.formatDate) === i.formatDate(g, O.formatDate) && w.push("xdsoft_today"), (0 === g.getDay() || 6 === g.getDay() || -1 !== O.weekends.indexOf(i.formatDate(g, O.formatDate))) && w.push("xdsoft_weekend"), void 0 !== O.highlightedDates[i.formatDate(g, O.formatDate)] && (n = O.highlightedDates[i.formatDate(g, O.formatDate)], w.push(void 0 === n.style ? "xdsoft_highlighted_default" : n.style), p = void 0 === n.desc ? "" : n.desc), O.beforeShowDay && e.isFunction(O.beforeShowDay) && w.push(O.beforeShowDay(g)), x && (h += "<tr>", x = !1, O.weeks && (h += "<th>" + c + "</th>")), h += '<td data-date="' + s + '" data-month="' + d + '" data-year="' + l + '" class="xdsoft_date xdsoft_day_of_week' + g.getDay() + " " + w.join(" ") + '" title="' + p + '"><div>' + s + "</div></td>", g.getDay() === O.dayOfWeekStartPrev && (h += "</tr>", x = !0), g.setDate(s + 1);
                    if (h += "</tbody></table>", z.html(h), R.find(".xdsoft_label span").eq(0).text(O.i18n[r].months[P.currentTime.getMonth()]), R.find(".xdsoft_label span").eq(1).text(P.currentTime.getFullYear()), T = "", C = "", d = "", f = function(t, n) {
                            var o, r, a = P.now(),
                                s = O.allowTimes && e.isArray(O.allowTimes) && O.allowTimes.length;
                            a.setHours(t), t = parseInt(a.getHours(), 10), a.setMinutes(n), n = parseInt(a.getMinutes(), 10), o = new Date(P.currentTime), o.setHours(t), o.setMinutes(n), w = [], (O.minDateTime !== !1 && O.minDateTime > o || O.maxTime !== !1 && P.strtotime(O.maxTime).getTime() < a.getTime() || O.minTime !== !1 && P.strtotime(O.minTime).getTime() > a.getTime()) && w.push("xdsoft_disabled"), (O.minDateTime !== !1 && O.minDateTime > o || O.disabledMinTime !== !1 && a.getTime() > P.strtotime(O.disabledMinTime).getTime() && O.disabledMaxTime !== !1 && a.getTime() < P.strtotime(O.disabledMaxTime).getTime()) && w.push("xdsoft_disabled"), r = new Date(P.currentTime), r.setHours(parseInt(P.currentTime.getHours(), 10)), s || r.setMinutes(Math[O.roundTime](P.currentTime.getMinutes() / O.step) * O.step), (O.initTime || O.defaultSelect || j.data("changed")) && r.getHours() === parseInt(t, 10) && (!s && O.step > 59 || r.getMinutes() === parseInt(n, 10)) && (O.defaultSelect || j.data("changed") ? w.push("xdsoft_current") : O.initTime && w.push("xdsoft_init_time")), parseInt(v.getHours(), 10) === parseInt(t, 10) && parseInt(v.getMinutes(), 10) === parseInt(n, 10) && w.push("xdsoft_today"), T += '<div class="xdsoft_time ' + w.join(" ") + '" data-hour="' + t + '" data-minute="' + n + '">' + i.formatDate(a, O.formatTime) + "</div>"
                        }, O.allowTimes && e.isArray(O.allowTimes) && O.allowTimes.length)
                        for (m = 0; m < O.allowTimes.length; m += 1) C = P.strtotime(O.allowTimes[m]).getHours(), d = P.strtotime(O.allowTimes[m]).getMinutes(), f(C, d);
                    else
                        for (m = 0, t = 0; m < (O.hours12 ? 12 : 24); m += 1)
                            for (t = 0; 60 > t; t += O.step) C = (10 > m ? "0" : "") + m, d = (10 > t ? "0" : "") + t, f(C, d);
                    for (H.html(T), o = "", m = 0, m = parseInt(O.yearStart, 10) + O.yearOffset; m <= parseInt(O.yearEnd, 10) + O.yearOffset; m += 1) o += '<div class="xdsoft_option ' + (P.currentTime.getFullYear() === m ? "xdsoft_current" : "") + '" data-value="' + m + '">' + m + "</div>";
                    for (q.children().eq(0).html(o), m = parseInt(O.monthStart, 10), o = ""; m <= parseInt(O.monthEnd, 10); m += 1) o += '<div class="xdsoft_option ' + (P.currentTime.getMonth() === m ? "xdsoft_current" : "") + '" data-value="' + m + '">' + O.i18n[r].months[m] + "</div>";
                    B.children().eq(0).html(o), e(j).trigger("generate.xdsoft")
                }, 10), t.stopPropagation()
            }).on("afterOpen.xdsoft", function() {
                if (O.timepicker) {
                    var e, t, n, i;
                    H.find(".xdsoft_current").length ? e = ".xdsoft_current" : H.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = W[0].clientHeight, n = H[0].offsetHeight, i = H.find(e).index() * O.timeHeightInTimePicker + 1, i > n - t && (i = n - t), W.trigger("scroll_element.xdsoft_scroller", [parseInt(i, 10) / (n - t)])) : W.trigger("scroll_element.xdsoft_scroller", [0])
                }
            }), d = 0, z.on("touchend click.xdsoft", "td", function(t) {
                t.stopPropagation(), d += 1;
                var i = e(this),
                    o = P.currentTime;
                return (void 0 === o || null === o) && (P.currentTime = P.now(), o = P.currentTime), i.hasClass("xdsoft_disabled") ? !1 : (o.setDate(1), o.setFullYear(i.data("year")), o.setMonth(i.data("month")), o.setDate(i.data("date")), j.trigger("select.xdsoft", [o]), n.val(P.str()), O.onSelectDate && e.isFunction(O.onSelectDate) && O.onSelectDate.call(j, P.currentTime, j.data("input"), t), j.data("changed", !0), j.trigger("xchange.xdsoft"), j.trigger("changedatetime.xdsoft"), (d > 1 || O.closeOnDateSelect === !0 || O.closeOnDateSelect === !1 && !O.timepicker) && !O.inline && j.trigger("close.xdsoft"), void setTimeout(function() {
                    d = 0
                }, 200))
            }), H.on("touchend click.xdsoft", "div", function(t) {
                t.stopPropagation();
                var n = e(this),
                    i = P.currentTime;
                return (void 0 === i || null === i) && (P.currentTime = P.now(), i = P.currentTime), n.hasClass("xdsoft_disabled") ? !1 : (i.setHours(n.data("hour")), i.setMinutes(n.data("minute")), j.trigger("select.xdsoft", [i]), j.data("input").val(P.str()), O.onSelectTime && e.isFunction(O.onSelectTime) && O.onSelectTime.call(j, P.currentTime, j.data("input"), t), j.data("changed", !0), j.trigger("xchange.xdsoft"), j.trigger("changedatetime.xdsoft"), void(O.inline !== !0 && O.closeOnTimeSelect === !0 && j.trigger("close.xdsoft")))
            }), M.on("mousewheel.xdsoft", function(e) {
                return O.scrollMonth ? (e.deltaY < 0 ? P.nextMonth() : P.prevMonth(), !1) : !0
            }), n.on("mousewheel.xdsoft", function(e) {
                return O.scrollInput ? !O.datepicker && O.timepicker ? (I = H.find(".xdsoft_current").length ? H.find(".xdsoft_current").eq(0).index() : 0, I + e.deltaY >= 0 && I + e.deltaY < H.children().length && (I += e.deltaY), H.children().eq(I).length && H.children().eq(I).trigger("mousedown"), !1) : O.datepicker && !O.timepicker ? (M.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), n.val && n.val(P.str()), j.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            }), j.on("changedatetime.xdsoft", function(t) {
                if (O.onChangeDateTime && e.isFunction(O.onChangeDateTime)) {
                    var n = j.data("input");
                    O.onChangeDateTime.call(j, P.currentTime, n, t), delete O.value, n.trigger("change")
                }
            }).on("generate.xdsoft", function() {
                O.onGenerate && e.isFunction(O.onGenerate) && O.onGenerate.call(j, P.currentTime, j.data("input")), Y && (j.trigger("afterOpen.xdsoft"), Y = !1)
            }).on("click.xdsoft", function(e) {
                e.stopPropagation()
            }), I = 0, F = function() {
                var t, n = j.data("input").offset(),
                    i = j.data("input")[0],
                    o = n.top + i.offsetHeight - 1,
                    r = n.left,
                    a = "absolute";
                if (document.documentElement.clientWidth - n.left < M.parent().outerWidth(!0)) {
                    var s = M.parent().outerWidth(!0) - i.offsetWidth;
                    r -= s
                }
                "rtl" == j.data("input").parent().css("direction") && (r -= j.outerWidth() - j.data("input").outerWidth()), O.fixed ? (o -= e(window).scrollTop(), r -= e(window).scrollLeft(), a = "fixed") : (o + i.offsetHeight > e(window).height() + e(window).scrollTop() && (o = n.top - i.offsetHeight + 1), 0 > o && (o = 0), r + i.offsetWidth > e(window).width() && (r = e(window).width() - i.offsetWidth)), t = j[0];
                do
                    if (t = t.parentNode, "relative" === window.getComputedStyle(t).getPropertyValue("position") && e(window).width() >= t.offsetWidth) {
                        r -= (e(window).width() - t.offsetWidth) / 2;
                        break
                    } while ("HTML" !== t.nodeName);
                j.css({
                    left: r,
                    top: o,
                    position: a
                })
            }, j.on("open.xdsoft", function(t) {
                var n = !0;
                O.onShow && e.isFunction(O.onShow) && (n = O.onShow.call(j, P.currentTime, j.data("input"), t)), n !== !1 && (j.show(), F(), e(window).off("resize.xdsoft", F).on("resize.xdsoft", F), O.closeOnWithoutClick && e([document.body, window]).on("touchstart mousedown.xdsoft", function i() {
                    j.trigger("close.xdsoft"), e([document.body, window]).off("touchstart mousedown.xdsoft", i)
                }))
            }).on("close.xdsoft", function(t) {
                var n = !0;
                R.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), O.onClose && e.isFunction(O.onClose) && (n = O.onClose.call(j, P.currentTime, j.data("input"), t)), n === !1 || O.opened || O.inline || j.hide(), t.stopPropagation()
            }).on("toggle.xdsoft", function() {
                j.trigger(j.is(":visible") ? "close.xdsoft" : "open.xdsoft")
            }).data("input", n), J = 0, Z = 0, j.data("xdsoft_datetime", P), j.setOptions(O), P.setCurrentTime(a()), n.data("xdsoft_datetimepicker", j).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
                n.is(":disabled") || n.data("xdsoft_datetimepicker").is(":visible") && O.closeOnInputClick || (clearTimeout(J), J = setTimeout(function() {
                    n.is(":disabled") || (Y = !0, P.setCurrentTime(a()), j.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function(t) {
                var n, i = (this.value, t.which);
                return -1 !== [m].indexOf(i) && O.enterLikeTab ? (n = e("input:visible,textarea:visible,button:visible,a:visible"), j.trigger("close.xdsoft"), n.eq(n.index(this) + 1).focus(), !1) : -1 !== [C].indexOf(i) ? (j.trigger("close.xdsoft"), !0) : void 0
            })
        }, l = function(t) {
            var n = t.data("xdsoft_datetimepicker");
            n && (n.data("xdsoft_datetime", null), n.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(window).off("resize.xdsoft"), e([window, document.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
        }, e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(e) {
            e.keyCode === h && (A = !0)
        }).on("keyup.xdsoftctrl", function(e) {
            e.keyCode === h && (A = !1)
        }), this.each(function() {
            var t, n = e(this).data("xdsoft_datetimepicker");
            if (n) {
                if ("string" === e.type(o)) switch (o) {
                    case "show":
                        e(this).select().focus(), n.trigger("open.xdsoft");
                        break;
                    case "hide":
                        n.trigger("close.xdsoft");
                        break;
                    case "toggle":
                        n.trigger("toggle.xdsoft");
                        break;
                    case "destroy":
                        l(e(this));
                        break;
                    case "reset":
                        this.value = this.defaultValue, this.value && n.data("xdsoft_datetime").isValidDate(i.parseDate(this.value, O.format)) || n.data("changed", !1), n.data("xdsoft_datetime").setCurrentTime(this.value);
                        break;
                    case "validate":
                        t = n.data("input"), t.trigger("blur.xdsoft");
                        break;
                    default:
                        n[o] && e.isFunction(n[o]) && (d = n[o](a))
                } else n.setOptions(o);
                return 0
            }
            "string" !== e.type(o) && (!O.lazyInit || O.open || O.inline ? s(e(this)) : F(e(this)))
        }), d
    }, e.fn.datetimepicker.defaults = n
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var a = t || window.event,
            s = l.call(arguments, 1),
            d = 0,
            u = 0,
            f = 0,
            p = 0,
            h = 0,
            g = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * f, f = 0), d = 0 === f ? u : f, "deltaY" in a && (f = -1 * a.deltaY, d = f), "deltaX" in a && (u = a.deltaX, 0 === f && (d = -1 * u)), 0 !== f || 0 !== u) {
            if (1 === a.deltaMode) {
                var m = e.data(this, "mousewheel-line-height");
                d *= m, f *= m, u *= m
            } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                d *= v, f *= v, u *= v
            }
            if (p = Math.max(Math.abs(f), Math.abs(u)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (d /= 40, u /= 40, f /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var b = this.getBoundingClientRect();
                h = t.clientX - b.left, g = t.clientY - b.top
            }
            return t.deltaX = u, t.deltaY = f, t.deltaFactor = r, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, d, u, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var d = a.length; d;) e.event.fixHooks[a[--d]] = e.event.mouseHooks;
    var c = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}), ! function(e, t, n, i) {
    var o = e(t);
    e.fn.lazyload = function(r) {
        function a() {
            var t = 0;
            l.each(function() {
                var n = e(this);
                if (!d.skip_invisible || n.is(":visible"))
                    if (e.abovethetop(this, d) || e.leftofbegin(this, d));
                    else if (e.belowthefold(this, d) || e.rightoffold(this, d)) {
                    if (++t > d.failure_limit) return !1
                } else n.trigger("appear"), t = 0
            })
        }
        var s, l = this,
            d = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), i !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(d, r)), s = d.container === i || d.container === t ? o : e(d.container), 0 === d.event.indexOf("scroll") && s.bind(d.event, function() {
            return a()
        }), this.each(function() {
            var t = this,
                n = e(t);
            t.loaded = !1, (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", d.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (d.appear) {
                        var i = l.length;
                        d.appear.call(t, i, d)
                    }
                    e("<img />").bind("load", function() {
                        var i = n.attr("data-" + d.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[d.effect](d.effect_speed), t.loaded = !0;
                        var o = e.grep(l, function(e) {
                            return !e.loaded
                        });
                        if (l = e(o), d.load) {
                            var r = l.length;
                            d.load.call(t, r, d)
                        }
                    }).attr("src", n.attr("data-" + d.data_attribute))
                }
            }), 0 !== d.event.indexOf("scroll") && n.bind(d.event, function() {
                t.loaded || n.trigger("appear")
            })
        }), o.bind("resize", function() {
            a()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            })
        }), e(n).ready(function() {
            a()
        }), this
    }, e.belowthefold = function(n, r) {
        var a;
        return a = r.container === i || r.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(r.container).offset().top + e(r.container).height(), a <= e(n).offset().top - r.threshold
    }, e.rightoffold = function(n, r) {
        var a;
        return a = r.container === i || r.container === t ? o.width() + o.scrollLeft() : e(r.container).offset().left + e(r.container).width(), a <= e(n).offset().left - r.threshold
    }, e.abovethetop = function(n, r) {
        var a;
        return a = r.container === i || r.container === t ? o.scrollTop() : e(r.container).offset().top, a >= e(n).offset().top + r.threshold + e(n).height()
    }, e.leftofbegin = function(n, r) {
        var a;
        return a = r.container === i || r.container === t ? o.scrollLeft() : e(r.container).offset().left, a >= e(n).offset().left + r.threshold + e(n).width()
    }, e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}, setTimeout(function() {
    function e(e, t) {
        t = t || "visible";
        var n = $(window).height(),
            i = $(window).scrollTop(),
            o = 0,
            r = 0;
        return $(e).length && (o = $(e).offset().top, r = $(e).height()), "visible" === t ? n + i > o && o > i - r : "above" === t ? n + i > o : void 0
    }

    function t(e) {
        var t = gsap.timeline();
        return t.from(e, 1.5, {
            delay: .5,
            yPercent: 100,
            rotationX: -45,
            opacity: 0,
            ease: Power2.out,
            stagger: .01
        }), t
    }

    function n() {
        d.removeClass("white-text"), d.addClass("black-text")
    }

    function i() {
        d.removeClass("black-text"), d.addClass("white-text")
    }

    function o() {
        return p = 0, f.forEach(function(e) {
            p += e.offsetWidth, p += gsap.getProperty(e, "marginLeft")
        }), p += 20, p += window.innerWidth, p -= window.matchMedia("(max-width: 1024px)").matches ? f[0].offsetWidth += f[1].offsetWidth : f[0].offsetWidth
    }
    gsap.registerPlugin(ScrollTrigger);
    var r = document.getElementById("localized-page");
    if (!r && $(".about-page").length && gsap.to(".image", {
            backgroundPosition: "50%" - innerHeight / 2 + "px",
            ease: "none",
            scrollTrigger: {
                trigger: ".image",
                scrub: !0
            }
        }), r) {
        var a = new SplitType(".text", {
                types: "lines",
                lineClass: "top-line"
            }),
            s = new SplitType(".bottom-text", {
                types: "lines",
                lineClass: "bottom-line"
            }),
            l = gsap.utils.toArray(".text-container"),
            d = $("#logo-text");
        $(window).resize(function() {
            a.split(), s.split()
        }), l.forEach(function(e) {
            var n = e.querySelectorAll(".top-line"),
                i = gsap.timeline({
                    scrollTrigger: {
                        trigger: e
                    }
                });
            i.add(t(n))
        });
        var c = gsap.utils.toArray(".scalable-section");
        if (c.forEach(function(e) {
                var t = gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        scrub: !0,
                        pin: !1,
                        start: "top top",
                        end: "bottom"
                    }
                });
                t.to(e, {
                    scale: .95,
                    ease: "none"
                })
            }), $(".localized-landing-page").length) {
            var u = new SplitType(".horizontal-text", {
                types: "lines",
                lineClass: "horizontal-line"
            });
            $(window).resize(function() {
                u.split()
            });
            var f = gsap.utils.toArray(".values-item"),
                p = 0;
            o(), ScrollTrigger.addEventListener("refreshInit", o);
            var h = gsap.to(f, {
                    x: function() {
                        return "-" + (p - window.innerWidth)
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".values-container",
                        pin: !0,
                        scrub: .5,
                        end: function() {
                            return "+=" + p
                        },
                        invalidateOnRefresh: !0
                    }
                }),
                g = gsap.utils.toArray(".horizontal-text-container");
            g.forEach(function(e) {
                var n = e.querySelectorAll(".horizontal-line"),
                    i = gsap.timeline({
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: h
                        }
                    });
                i.add(t(n))
            });
            var m = gsap.timeline({
                scrollTrigger: {
                    trigger: ".localized-values",
                    scrub: !0,
                    start: function() {
                        return $(".localized-values").offset().top + o()
                    },
                    end: function() {
                        return $(".customers").offset().top
                    }
                }
            });
            m.to(".localized-values", {
                scale: .95,
                ease: "none"
            });
            var v = gsap.timeline({
                scrollTrigger: {
                    trigger: ".our-team-localized",
                    scrub: !0,
                    pin: !1,
                    start: function() {
                        return $(".our-team-localized").offset().top
                    },
                    end: "bottom"
                }
            });
            v.to(".our-team-localized", {
                scale: .95,
                ease: "none"
            });
            var b = gsap.utils.toArray(".image-container");
            b.forEach(function(e) {
                var t = e.querySelector(".mission-image"),
                    n = gsap.timeline({
                        scrollTrigger: {
                            trigger: e,
                            toggleActions: "restart none none reset"
                        }
                    });
                n.set(e, {
                    autoAlpha: 1
                }), n.from(e, 1.5, {
                    yPercent: -100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out
                }), n.from(t, 1.5, {
                    yPercent: 100,
                    ease: Power2.out
                })
            });
            var y = document.querySelector(".media-about-us-localized");
            gsap.from(".first-container", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: y,
                    start: "center 120%",
                    end: "center 50%",
                    scrub: !0
                }
            }), gsap.from(".second-container", {
                yPercent: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: y,
                    start: "center 120%",
                    end: "center 50%",
                    scrub: !0
                }
            });
            var w = gsap.timeline({
                scrollTrigger: {
                    trigger: ".media-about-us-localized",
                    scrub: !0,
                    pin: !1,
                    start: function() {
                        return $(".media-about-us-localized").offset().top
                    },
                    end: "bottom"
                }
            });
            w.to(".media-about-us-localized", {
                scale: .95,
                ease: "none"
            }), $(window).scroll(function() {
                var t = this.scrollY,
                    r = $(".ua-head"),
                    a = $(".about-company"),
                    s = $(".our-mission"),
                    l = $(".localized-values"),
                    d = $(".customers"),
                    c = $(".our-team-localized"),
                    u = $(".media-about-us-localized"),
                    f = $(".faq-section"),
                    p = r && e(r) && r.offset().top <= t,
                    h = a && e(a) && a.offset().top <= t,
                    g = s && e(s) && s.offset().top <= t,
                    m = l && e(l) && l.offset().top <= t,
                    v = d && e(d) && d.offset().top <= t,
                    b = c && e(c) && c.offset().top <= t,
                    y = u && e(u) && u.offset().top <= t,
                    w = f && e(f) && f.offset().top <= t;
                (h || g || v || b || w) && n(), (p || m || y) && i(), m && l.offset().top + o() >= t && gsap.set(".localized-values", {
                    clearProps: !0
                })
            })
        }
        if ($(".localized-about-us").length) {
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function() {
                    var e = gsap.utils.toArray(".product-img:not(.last-img)");
                    gsap.set(".product-img", {
                        zIndex: function(e, t, n) {
                            return n.length - e
                        }
                    }), e.forEach(function(e, t) {
                        var n = gsap.timeline({
                            scrollTrigger: {
                                trigger: ".products-container",
                                start: function() {
                                    return "top -" + window.innerHeight * (t + .5)
                                },
                                end: function() {
                                    return "+=" + window.innerHeight
                                },
                                scrub: !0,
                                toggleActions: "play none reverse none",
                                invalidateOnRefresh: !0
                            }
                        });
                        n.to(e, {
                            top: -609
                        })
                    }), gsap.set(".product-info", {
                        zIndex: function(e, t, n) {
                            return n.length - e
                        }
                    });
                    var t = gsap.utils.toArray(".product-info");
                    t.forEach(function(e, t) {
                        var n = gsap.timeline({
                            scrollTrigger: {
                                trigger: ".products-container",
                                start: function() {
                                    return "top -" + window.innerHeight * t
                                },
                                end: function() {
                                    return "+=" + window.innerHeight
                                },
                                scrub: !0,
                                toggleActions: "play none reverse none",
                                invalidateOnRefresh: !0
                            }
                        });
                        n.to(e, {
                            duration: .7,
                            opacity: 1,
                            y: "0%"
                        }).to(e, {
                            duration: .7,
                            opacity: 0,
                            y: "0%"
                        }, 1.4)
                    });
                    var n = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".products-section",
                            scrub: !0,
                            start: function() {
                                return "top -" + (e.length + 1) * window.innerHeight
                            },
                            end: function() {
                                return "bottom -" + (e.length + 1) * window.innerHeight
                            }
                        }
                    });
                    n.to(".products-section", {
                        scale: .95,
                        ease: "none"
                    }), ScrollTrigger.create({
                        trigger: ".products-section",
                        scrub: !0,
                        pin: !0,
                        start: "top top",
                        end: function() {
                            return "+=" + (e.length + 1) * window.innerHeight
                        },
                        invalidateOnRefresh: !0
                    })
                },
                "(max-width: 767px)": function() {
                    var e = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".products-section",
                            scrub: !0,
                            start: "top top",
                            end: "bottom"
                        }
                    });
                    e.to(".products-section", {
                        scale: .95,
                        ease: "none"
                    })
                }
            });
            var x = gsap.utils.toArray(".value");
            x.forEach(function(e) {
                var t = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".values-container",
                        toggleClass: "visible"
                    }
                });
                t.from(e, 1.5, {
                    delay: .5,
                    yPercent: 100,
                    rotationX: -45,
                    opacity: 0,
                    ease: Power2.out,
                    stagger: .01
                })
            }), $(window).scroll(function() {
                var t = this.scrollY,
                    o = $(".ua-head"),
                    r = $(".path-section"),
                    a = $(".values-section"),
                    s = $(".products-section"),
                    l = $(".initiatives-section"),
                    d = o && e(o) && o.offset().top <= t,
                    c = r && e(r) && r.offset().top <= t,
                    u = a && e(a) && a.offset().top <= t,
                    f = s && e(s) && s.offset().top <= t,
                    p = l && e(l) && l.offset().top <= t;
                (c || f || p) && n(), (d || u) && i()
            })
        }
        var T = gsap.utils.toArray(".bottom-text-container");
        T.forEach(function(e) {
            var n = e.querySelectorAll(".bottom-line"),
                i = gsap.timeline({
                    scrollTrigger: {
                        trigger: e
                    }
                });
            i.add(t(n))
        }), $(".localized-partnership").length && $(window).scroll(function() {
            var t = this.scrollY,
                o = $(".ua-head"),
                r = $(".partnership-path"),
                a = $(".terms-section"),
                s = $(".localized-clients"),
                l = $(".localized-contact-form"),
                d = o && e(o) && o.offset().top <= t,
                c = r && e(r) && r.offset().top <= t,
                u = a && e(a) && a.offset().top <= t,
                f = s && e(s) && s.offset().top <= t,
                p = l && e(l) && l.offset().top <= t;
            (c || f) && n(), (d || u || p) && i()
        }), $(".localized-team").length && $(window).scroll(function() {
            var t = this.scrollY,
                o = $(".ua-head"),
                r = $(".our-team-localized"),
                a = o && e(o) && o.offset().top <= t,
                s = r && e(r) && r.offset().top <= t;
            s && n(), a && i()
        })
    }
}, 1000);
