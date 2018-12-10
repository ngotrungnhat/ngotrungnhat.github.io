!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = []
      , C = T.document
      , n = Object.getPrototypeOf
      , o = t.slice
      , m = t.concat
      , l = t.push
      , r = t.indexOf
      , i = {}
      , a = i.toString
      , v = i.hasOwnProperty
      , s = v.toString
      , d = s.call(Object)
      , g = {}
      , y = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , b = function(e) {
        return null != e && e === e.window
    }
      , u = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function w(e, t, i) {
        var n, r = (t = t || C).createElement("script");
        if (r.text = e,
        i)
            for (n in u)
                i[n] && (r[n] = i[n]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
    }
    var c = "3.3.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    }
      , h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length"in e && e.length
          , i = x(e);
        return !y(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: c,
        constructor: S,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, i, n, r, a, s = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof s && (d = s,
        s = arguments[o] || {},
        o++),
        "object" == typeof s || y(s) || (s = {}),
        o === l && (s = this,
        o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e)
                    i = s[t],
                    s !== (n = e[t]) && (d && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (a = r ? (r = !1,
                    i && Array.isArray(i) ? i : []) : i && S.isPlainObject(i) ? i : {},
                    s[t] = S.extend(d, a, n)) : void 0 !== n && (s[t] = n));
        return s
    }
    ,
    S.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== a.call(e)) && (!(t = n(e)) || "function" == typeof (i = v.call(t, "constructor") && t.constructor) && s.call(i) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var i, n = 0;
            if (p(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                    ;
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (p(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : r.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++)
                e[r++] = t[n];
            return e.length = r,
            e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, a = e.length, s = !i; r < a; r++)
                !t(e[r], r) !== s && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r, a = 0, s = [];
            if (p(e))
                for (n = e.length; a < n; a++)
                    null != (r = t(e[a], a, i)) && s.push(r);
            else
                for (a in e)
                    null != (r = t(e[a], a, i)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function(i) {
        var e, p, w, a, r, f, c, m, x, l, d, E, T, s, C, v, o, u, g, S = "sizzle" + 1 * new Date, y = i.document, k = 0, n = 0, h = se(), b = se(), M = se(), D = function(e, t) {
            return e === t && (d = !0),
            0
        }, P = {}.hasOwnProperty, t = [], A = t.pop, _ = t.push, O = t.push, I = t.slice, N = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", H = "\\[" + $ + "*(" + z + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + $ + "*\\]", j = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", q = new RegExp($ + "+","g"), F = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), B = new RegExp("^" + $ + "*," + $ + "*"), W = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), R = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]","g"), V = new RegExp(j), Y = new RegExp("^" + z + "$"), X = {
            ID: new RegExp("^#(" + z + ")"),
            CLASS: new RegExp("^\\.(" + z + ")"),
            TAG: new RegExp("^(" + z + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + j),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)","ig"), ee = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ne = function() {
            E()
        }, re = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(t = I.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    _.apply(e, I.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        function ae(e, t, i, n) {
            var r, a, s, o, l, d, u, c = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return i;
            if (!n && ((t ? t.ownerDocument || t : y) !== T && E(t),
            t = t || T,
            C)) {
                if (11 !== h && (l = Q.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r)))
                                return i;
                            if (s.id === r)
                                return i.push(s),
                                i
                        } else if (c && (s = c.getElementById(r)) && g(t, s) && s.id === r)
                            return i.push(s),
                            i
                    } else {
                        if (l[2])
                            return O.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (p.qsa && !M[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h)
                        c = t,
                        u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ie) : t.setAttribute("id", o = S),
                        a = (d = f(e)).length; a--; )
                            d[a] = "#" + o + " " + ge(d[a]);
                        u = d.join(","),
                        c = J.test(e) && me(t.parentNode) || t
                    }
                    if (u)
                        try {
                            return O.apply(i, c.querySelectorAll(u)),
                            i
                        } catch (e) {} finally {
                            o === S && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(F, "$1"), t, i, n)
        }
        function se() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()],
                e[t + " "] = i
            }
        }
        function oe(e) {
            return e[S] = !0,
            e
        }
        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function de(e, t) {
            for (var i = e.split("|"), n = i.length; n--; )
                w.attrHandle[i[n]] = t
        }
        function ue(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function ce(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function fe(s) {
            return oe(function(a) {
                return a = +a,
                oe(function(e, t) {
                    for (var i, n = s([], e.length, a), r = n.length; r--; )
                        e[i = n[r]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = ae.support = {},
        r = ae.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        E = ae.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : y;
            return n !== T && 9 === n.nodeType && n.documentElement && (s = (T = n).documentElement,
            C = !r(T),
            y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)),
            p.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = le(function(e) {
                return e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = K.test(T.getElementsByClassName),
            p.getById = le(function(e) {
                return s.appendChild(e).id = S,
                !T.getElementsByName || !T.getElementsByName(S).length
            }),
            p.getById ? (w.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ) : (w.filter.ID = function(e) {
                var i = e.replace(Z, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var i, n, r, a = t.getElementById(e);
                    if (a) {
                        if ((i = a.getAttributeNode("id")) && i.value === e)
                            return [a];
                        for (r = t.getElementsByName(e),
                        n = 0; a = r[n++]; )
                            if ((i = a.getAttributeNode("id")) && i.value === e)
                                return [a]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" !== e)
                    return a;
                for (; i = a[r++]; )
                    1 === i.nodeType && n.push(i);
                return n
            }
            ,
            w.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                    return t.getElementsByClassName(e)
            }
            ,
            o = [],
            v = [],
            (p.qsa = K.test(T.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + $ + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + $ + "*(?:value|" + L + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + $ + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (p.matchesSelector = K.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                p.disconnectedMatch = u.call(e, "*"),
                u.call(e, "[s!='']:x"),
                o.push("!=", j)
            }),
            v = v.length && new RegExp(v.join("|")),
            o = o.length && new RegExp(o.join("|")),
            t = K.test(s.compareDocumentPosition),
            g = t || K.test(s.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && g(y, e) ? -1 : t === T || t.ownerDocument === y && g(y, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i, n = 0, r = e.parentNode, a = t.parentNode, s = [e], o = [t];
                if (!r || !a)
                    return e === T ? -1 : t === T ? 1 : r ? -1 : a ? 1 : l ? N(l, e) - N(l, t) : 0;
                if (r === a)
                    return ue(e, t);
                for (i = e; i = i.parentNode; )
                    s.unshift(i);
                for (i = t; i = i.parentNode; )
                    o.unshift(i);
                for (; s[n] === o[n]; )
                    n++;
                return n ? ue(s[n], o[n]) : s[n] === y ? -1 : o[n] === y ? 1 : 0
            }
            ),
            T
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T && E(e),
            t = t.replace(R, "='$1']"),
            p.matchesSelector && C && !M[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t)))
                try {
                    var i = u.call(e, t);
                    if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return 0 < ae(t, T, null, [e]).length
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== T && E(e),
            g(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) !== T && E(e);
            var i = w.attrHandle[t.toLowerCase()]
              , n = i && P.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0;
            return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(te, ie)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, i = [], n = 0, r = 0;
            if (d = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(D),
            d) {
                for (; t = e[r++]; )
                    t === e[r] && (n = i.push(r));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return l = null,
            e
        }
        ,
        a = ae.getText = function(e) {
            var t, i = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += a(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += a(t);
            return i
        }
        ,
        (w = ae.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: X,
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
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && V.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = h[e + " "];
                    return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && h(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(i, n, r) {
                    return function(e) {
                        var t = ae.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "",
                        "=" === n ? t === r : "!=" === n ? t !== r : "^=" === n ? r && 0 === t.indexOf(r) : "*=" === n ? r && -1 < t.indexOf(r) : "$=" === n ? r && t.slice(-r.length) === r : "~=" === n ? -1 < (" " + t.replace(q, " ") + " ").indexOf(r) : "|=" === n && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(f, e, t, m, v) {
                    var g = "nth" !== f.slice(0, 3)
                      , y = "last" !== f.slice(-4)
                      , b = "of-type" === e;
                    return 1 === m && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, i) {
                        var n, r, a, s, o, l, d = g !== y ? "nextSibling" : "previousSibling", u = e.parentNode, c = b && e.nodeName.toLowerCase(), h = !i && !b, p = !1;
                        if (u) {
                            if (g) {
                                for (; d; ) {
                                    for (s = e; s = s[d]; )
                                        if (b ? s.nodeName.toLowerCase() === c : 1 === s.nodeType)
                                            return !1;
                                    l = d = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && h) {
                                for (p = (o = (n = (r = (a = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2],
                                s = o && u.childNodes[o]; s = ++o && s && s[d] || (p = o = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        r[f] = [k, o, p];
                                        break
                                    }
                            } else if (h && (p = o = (n = (r = (a = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && n[1]),
                            !1 === p)
                                for (; (s = ++o && s && s[d] || (p = o = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++p || (h && ((r = (a = s[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [k, p]),
                                s !== e)); )
                                    ;
                            return (p -= v) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, a) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[S] ? s(a) : 1 < s.length ? (t = [e, e, "", a],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                        for (var i, n = s(e, a), r = n.length; r--; )
                            e[i = N(e, n[r])] = !(t[i] = n[r])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var n = []
                      , r = []
                      , o = c(e.replace(F, "$1"));
                    return o[S] ? oe(function(e, t, i, n) {
                        for (var r, a = o(e, null, n, []), s = e.length; s--; )
                            (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, t, i) {
                        return n[0] = e,
                        o(n, null, i, r),
                        n[0] = null,
                        !r.pop()
                    }
                }),
                has: oe(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length
                    }
                }),
                contains: oe(function(t) {
                    return t = t.replace(Z, ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                    }
                }),
                lang: oe(function(i) {
                    return Y.test(i || "") || ae.error("unsupported lang: " + i),
                    i = i.replace(Z, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return U.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: fe(function() {
                    return [0]
                }),
                last: fe(function(e, t) {
                    return [t - 1]
                }),
                eq: fe(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: fe(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: fe(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: fe(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; 0 <= --n; )
                        e.push(n);
                    return e
                }),
                gt: fe(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = ce(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = he(e);
        function ve() {}
        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function ye(o, e, t) {
            var l = e.dir
              , d = e.next
              , u = d || l
              , c = t && "parentNode" === u
              , h = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || c)
                        return o(e, t, i);
                return !1
            }
            : function(e, t, i) {
                var n, r, a, s = [k, h];
                if (i) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || c) && o(e, t, i))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || c)
                            if (r = (a = e[S] || (e[S] = {}))[e.uniqueID] || (a[e.uniqueID] = {}),
                            d && d === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((n = r[u]) && n[0] === k && n[1] === h)
                                    return s[2] = n[2];
                                if ((r[u] = s)[2] = o(e, t, i))
                                    return !0
                            }
                return !1
            }
        }
        function be(r) {
            return 1 < r.length ? function(e, t, i) {
                for (var n = r.length; n--; )
                    if (!r[n](e, t, i))
                        return !1;
                return !0
            }
            : r[0]
        }
        function we(e, t, i, n, r) {
            for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++)
                (a = e[o]) && (i && !i(a, n, r) || (s.push(a),
                d && t.push(o)));
            return s
        }
        function xe(p, f, m, v, g, e) {
            return v && !v[S] && (v = xe(v)),
            g && !g[S] && (g = xe(g, e)),
            oe(function(e, t, i, n) {
                var r, a, s, o = [], l = [], d = t.length, u = e || function(e, t, i) {
                    for (var n = 0, r = t.length; n < r; n++)
                        ae(e, t[n], i);
                    return i
                }(f || "*", i.nodeType ? [i] : i, []), c = !p || !e && f ? u : we(u, o, p, i, n), h = m ? g || (e ? p : d || v) ? [] : t : c;
                if (m && m(c, h, i, n),
                v)
                    for (r = we(h, l),
                    v(r, [], i, n),
                    a = r.length; a--; )
                        (s = r[a]) && (h[l[a]] = !(c[l[a]] = s));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (r = [],
                            a = h.length; a--; )
                                (s = h[a]) && r.push(c[a] = s);
                            g(null, h = [], r, n)
                        }
                        for (a = h.length; a--; )
                            (s = h[a]) && -1 < (r = g ? N(e, s) : o[a]) && (e[r] = !(t[r] = s))
                    }
                } else
                    h = we(h === t ? h.splice(d, h.length) : h),
                    g ? g(null, t, h, n) : O.apply(t, h)
            })
        }
        function Ee(e) {
            for (var r, t, i, n = e.length, a = w.relative[e[0].type], s = a || w.relative[" "], o = a ? 1 : 0, l = ye(function(e) {
                return e === r
            }, s, !0), d = ye(function(e) {
                return -1 < N(r, e)
            }, s, !0), u = [function(e, t, i) {
                var n = !a && (i || t !== x) || ((r = t).nodeType ? l(e, t, i) : d(e, t, i));
                return r = null,
                n
            }
            ]; o < n; o++)
                if (t = w.relative[e[o].type])
                    u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[o].type].apply(null, e[o].matches))[S]) {
                        for (i = ++o; i < n && !w.relative[e[i].type]; i++)
                            ;
                        return xe(1 < o && be(u), 1 < o && ge(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, o < i && Ee(e.slice(o, i)), i < n && Ee(e = e.slice(i)), i < n && ge(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return ve.prototype = w.filters = w.pseudos,
        w.setFilters = new ve,
        f = ae.tokenize = function(e, t) {
            var i, n, r, a, s, o, l, d = b[e + " "];
            if (d)
                return t ? 0 : d.slice(0);
            for (s = e,
            o = [],
            l = w.preFilter; s; ) {
                for (a in i && !(n = B.exec(s)) || (n && (s = s.slice(n[0].length) || s),
                o.push(r = [])),
                i = !1,
                (n = W.exec(s)) && (i = n.shift(),
                r.push({
                    value: i,
                    type: n[0].replace(F, " ")
                }),
                s = s.slice(i.length)),
                w.filter)
                    !(n = X[a].exec(s)) || l[a] && !(n = l[a](n)) || (i = n.shift(),
                    r.push({
                        value: i,
                        type: a,
                        matches: n
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return t ? s.length : s ? ae.error(e) : b(e, o).slice(0)
        }
        ,
        c = ae.compile = function(e, t) {
            var i, v, g, y, b, n, r = [], a = [], s = M[e + " "];
            if (!s) {
                for (t || (t = f(e)),
                i = t.length; i--; )
                    (s = Ee(t[i]))[S] ? r.push(s) : a.push(s);
                (s = M(e, (v = a,
                y = 0 < (g = r).length,
                b = 0 < v.length,
                n = function(e, t, i, n, r) {
                    var a, s, o, l = 0, d = "0", u = e && [], c = [], h = x, p = e || b && w.find.TAG("*", r), f = k += null == h ? 1 : Math.random() || .1, m = p.length;
                    for (r && (x = t === T || t || r); d !== m && null != (a = p[d]); d++) {
                        if (b && a) {
                            for (s = 0,
                            t || a.ownerDocument === T || (E(a),
                            i = !C); o = v[s++]; )
                                if (o(a, t || T, i)) {
                                    n.push(a);
                                    break
                                }
                            r && (k = f)
                        }
                        y && ((a = !o && a) && l--,
                        e && u.push(a))
                    }
                    if (l += d,
                    y && d !== l) {
                        for (s = 0; o = g[s++]; )
                            o(u, c, t, i);
                        if (e) {
                            if (0 < l)
                                for (; d--; )
                                    u[d] || c[d] || (c[d] = A.call(n));
                            c = we(c)
                        }
                        O.apply(n, c),
                        r && !e && 0 < c.length && 1 < l + g.length && ae.uniqueSort(n)
                    }
                    return r && (k = f,
                    x = h),
                    u
                }
                ,
                y ? oe(n) : n))).selector = e
            }
            return s
        }
        ,
        m = ae.select = function(e, t, i, n) {
            var r, a, s, o, l, d = "function" == typeof e && e, u = !n && f(e = d.selector || e);
            if (i = i || [],
            1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && C && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(Z, ee), t) || [])[0]))
                        return i;
                    d && (t = t.parentNode),
                    e = e.slice(a.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r],
                !w.relative[o = s.type]); )
                    if ((l = w.find[o]) && (n = l(s.matches[0].replace(Z, ee), J.test(a[0].type) && me(t.parentNode) || t))) {
                        if (a.splice(r, 1),
                        !(e = n.length && ge(a)))
                            return O.apply(i, n),
                            i;
                        break
                    }
            }
            return (d || c(e, u))(n, t, !C, i, !t || J.test(e) && me(t.parentNode) || t),
            i
        }
        ,
        p.sortStable = S.split("").sort(D).join("") === S,
        p.detectDuplicates = !!d,
        E(),
        p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(L, function(e, t, i) {
            var n;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        ae
    }(T);
    S.find = f,
    S.expr = f.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = f.uniqueSort,
    S.text = f.getText,
    S.isXMLDoc = f.isXML,
    S.contains = f.contains,
    S.escapeSelector = f.escape;
    var E = function(e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && S(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , k = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , M = S.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function A(e, i, n) {
        return y(i) ? S.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? S.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? S.grep(e, function(e) {
            return -1 < r.call(i, e) !== n
        }) : S.filter(i, e, n)
    }
    S.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, i, n = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (S.contains(r[t], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            t = 0; t < n; t++)
                S.find(e, r[t], i);
            return 1 < n ? S.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && M.test(e) ? S(e) : e || [], !1).length
        }
    });
    var _, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, i) {
        var n, r;
        if (!e)
            return this;
        if (i = i || _,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this);
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !n[1] && t)
            return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof S ? t[0] : t,
            S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
            P.test(n[1]) && S.isPlainObject(t))
                for (n in t)
                    y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (r = C.getElementById(n[2])) && (this[0] = r,
        this.length = 1),
        this
    }
    ).prototype = S.fn,
    _ = S(C);
    var I = /^(?:parents|prev(?:Until|All))/
      , N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0, r = this.length, a = [], s = "string" != typeof e && S(e);
            if (!M.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(1 < a.length ? S.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return E(e, "parentNode", i)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return E(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return E(e, "previousSibling", i)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(n, r) {
        S.fn[n] = function(e, t) {
            var i = S.map(this, r, e);
            return "Until" !== n.slice(-5) && (t = e),
            t && "string" == typeof t && (i = S.filter(t, i)),
            1 < this.length && (N[n] || S.uniqueSort(i),
            I.test(n) && i.reverse()),
            this.pushStack(i)
        }
    });
    var $ = /[^\x20\t\r\n\f]+/g;
    function z(e) {
        return e
    }
    function H(e) {
        throw e
    }
    function j(e, t, i, n) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(i) : e && y(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    S.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n,
        i = {},
        S.each(e.match($) || [], function(e, t) {
            i[t] = !0
        }),
        i) : S.extend({}, n);
        var r, t, a, s, o = [], l = [], d = -1, u = function() {
            for (s = s || n.once,
            a = r = !0; l.length; d = -1)
                for (t = l.shift(); ++d < o.length; )
                    !1 === o[d].apply(t[0], t[1]) && n.stopOnFalse && (d = o.length,
                    t = !1);
            n.memory || (t = !1),
            r = !1,
            s && (o = t ? [] : "")
        }, c = {
            add: function() {
                return o && (t && !r && (d = o.length - 1,
                l.push(t)),
                function i(e) {
                    S.each(e, function(e, t) {
                        y(t) ? n.unique && c.has(t) || o.push(t) : t && t.length && "string" !== x(t) && i(t)
                    })
                }(arguments),
                t && !r && u()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    for (var i; -1 < (i = S.inArray(t, o, i)); )
                        o.splice(i, 1),
                        i <= d && d--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return s = l = [],
                o = t = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return s = l = [],
                t || r || (o = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                r || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return c
    }
    ,
    S.extend({
        Deferred: function(e) {
            var a = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return S.Deferred(function(n) {
                        S.each(a, function(e, t) {
                            var i = y(r[t[4]]) && r[t[4]];
                            o[t[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, i, n) {
                    var l = 0;
                    function d(r, a, s, o) {
                        return function() {
                            var i = this
                              , n = arguments
                              , e = function() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = s.apply(i, n)) === a.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    y(t) ? o ? t.call(e, d(l, a, z, o), d(l, a, H, o)) : (l++,
                                    t.call(e, d(l, a, z, o), d(l, a, H, o), d(l, a, z, a.notifyWith))) : (s !== z && (i = void 0,
                                    n = [e]),
                                    (o || a.resolveWith)(i, n))
                                }
                            }
                              , t = o ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= r + 1 && (s !== H && (i = void 0,
                                    n = [e]),
                                    a.rejectWith(i, n))
                                }
                            }
                            ;
                            r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        a[0][3].add(d(0, e, y(n) ? n : z, e.notifyWith)),
                        a[1][3].add(d(0, e, y(t) ? t : z)),
                        a[2][3].add(d(0, e, y(i) ? i : H))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, s) : s
                }
            }
              , o = {};
            return S.each(a, function(e, t) {
                var i = t[2]
                  , n = t[5];
                s[t[1]] = i.add,
                n && i.add(function() {
                    r = n
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock),
                i.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = i.fireWith
            }),
            s.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var i = arguments.length
              , t = i
              , n = Array(t)
              , r = o.call(arguments)
              , a = S.Deferred()
              , s = function(t) {
                return function(e) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? o.call(arguments) : e,
                    --i || a.resolveWith(n, r)
                }
            };
            if (i <= 1 && (j(e, a.done(s(t)).resolve, a.reject, !i),
            "pending" === a.state() || y(r[t] && r[t].then)))
                return a.then();
            for (; t--; )
                j(r[t], s(t), a.reject);
            return a.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && q.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        C.removeEventListener("DOMContentLoaded", B),
        T.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(C, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", B),
    T.addEventListener("load", B));
    var W = function(e, t, i, n, r, a, s) {
        var o = 0
          , l = e.length
          , d = null == i;
        if ("object" === x(i))
            for (o in r = !0,
            i)
                W(e, t, o, i[o], !0, a, s);
        else if (void 0 !== n && (r = !0,
        y(n) || (s = !0),
        d && (t = s ? (t.call(e, n),
        null) : (d = t,
        function(e, t, i) {
            return d.call(S(e), i)
        }
        )),
        t))
            for (; o < l; o++)
                t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
        return r ? e : d ? t.call(e) : l ? t(e[0], i) : a
    }
      , R = /^-ms-/
      , V = /-([a-z])/g;
    function Y(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(R, "ms-").replace(V, Y)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function U() {
        this.expando = S.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t)
                r[X(t)] = i;
            else
                for (n in t)
                    r[X(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in n ? [t] : t.match($) || []).length;
                    for (; i--; )
                        delete n[t[i]]
                }
                (void 0 === t || S.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var K = new U
      , Q = new U
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Q.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, i) {
            return Q.access(e, t, i)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, i) {
            return K.access(e, t, i)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(i, e) {
            var t, n, r, a = this[0], s = a && a.attributes;
            if (void 0 !== i)
                return "object" == typeof i ? this.each(function() {
                    Q.set(this, i)
                }) : W(this, function(e) {
                    var t;
                    if (a && void 0 === e)
                        return void 0 !== (t = Q.get(a, i)) ? t : void 0 !== (t = ee(a, i)) ? t : void 0;
                    this.each(function() {
                        Q.set(this, i, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(a),
            1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = X(n.slice(5)),
                    ee(a, n, r[n]));
                K.set(a, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = K.get(e, t),
                i && (!n || Array.isArray(i) ? n = K.access(e, t, S.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = S.queue(e, t)
              , n = i.length
              , r = i.shift()
              , a = S._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(),
            n--),
            r && ("fx" === t && i.unshift("inprogress"),
            delete a.stop,
            r.call(e, function() {
                S.dequeue(e, t)
            }, a)),
            !n && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return K.get(e, i) || K.access(e, i, {
                empty: S.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = S.queue(this, t, i);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, r = S.Deferred(), a = this, s = this.length, o = function() {
                --n || r.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = K.get(a[s], e + "queueHooks")) && i.empty && (n++,
                i.empty.add(o));
            return o(),
            r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
    }
      , ae = function(e, t, i, n) {
        var r, a, s = {};
        for (a in t)
            s[a] = e.style[a],
            e.style[a] = t[a];
        for (a in r = i.apply(e, n || []),
        t)
            e.style[a] = s[a];
        return r
    };
    function se(e, t, i, n) {
        var r, a, s = 20, o = n ? function() {
            return n.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , l = o(), d = i && i[3] || (S.cssNumber[t] ? "" : "px"), u = (S.cssNumber[t] || "px" !== d && +l) && ie.exec(S.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2,
            d = d || u[3],
            u = +l || 1; s--; )
                S.style(e, t, u + d),
                (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0),
                u /= a;
            u *= 2,
            S.style(e, t, u + d),
            i = i || []
        }
        return i && (u = +u || +l || 0,
        r = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = d,
        n.start = u,
        n.end = r)),
        r
    }
    var oe = {};
    function le(e, t) {
        for (var i, n, r, a, s, o, l, d = [], u = 0, c = e.length; u < c; u++)
            (n = e[u]).style && (i = n.style.display,
            t ? ("none" === i && (d[u] = K.get(n, "display") || null,
            d[u] || (n.style.display = "")),
            "" === n.style.display && re(n) && (d[u] = (l = s = a = void 0,
            s = (r = n).ownerDocument,
            o = r.nodeName,
            (l = oe[o]) || (a = s.body.appendChild(s.createElement(o)),
            l = S.css(a, "display"),
            a.parentNode.removeChild(a),
            "none" === l && (l = "block"),
            oe[o] = l)))) : "none" !== i && (d[u] = "none",
            K.set(n, "display", i)));
        for (u = 0; u < c; u++)
            null != d[u] && (e[u].style.display = d[u]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i
      , ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , ce = /^$|^module$|\/(?:java|ecma)script/i
      , he = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function pe(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? S.merge([e], i) : i
    }
    function fe(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"))
    }
    he.optgroup = he.option,
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead,
    he.th = he.td;
    var me, ve, ge = /<|&#?\w+;/;
    function ye(e, t, i, n, r) {
        for (var a, s, o, l, d, u, c = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((a = e[p]) || 0 === a)
                if ("object" === x(a))
                    S.merge(h, a.nodeType ? [a] : a);
                else if (ge.test(a)) {
                    for (s = s || c.appendChild(t.createElement("div")),
                    o = (ue.exec(a) || ["", ""])[1].toLowerCase(),
                    l = he[o] || he._default,
                    s.innerHTML = l[1] + S.htmlPrefilter(a) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    S.merge(h, s.childNodes),
                    (s = c.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(a));
        for (c.textContent = "",
        p = 0; a = h[p++]; )
            if (n && -1 < S.inArray(a, n))
                r && r.push(a);
            else if (d = S.contains(a.ownerDocument, a),
            s = pe(c.appendChild(a), "script"),
            d && fe(s),
            i)
                for (u = 0; a = s[u++]; )
                    ce.test(a.type || "") && i.push(a);
        return c
    }
    me = C.createDocumentFragment().appendChild(C.createElement("div")),
    (ve = C.createElement("input")).setAttribute("type", "radio"),
    ve.setAttribute("checked", "checked"),
    ve.setAttribute("name", "t"),
    me.appendChild(ve),
    g.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var be = C.documentElement
      , we = /^key/
      , xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function Te() {
        return !0
    }
    function Ce() {
        return !1
    }
    function Se() {
        try {
            return C.activeElement
        } catch (e) {}
    }
    function ke(e, t, i, n, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i,
            i = void 0),
            t)
                ke(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == r ? (r = i,
        n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
        n = void 0) : (r = n,
        n = i,
        i = void 0)),
        !1 === r)
            r = Ce;
        else if (!r)
            return e;
        return 1 === a && (s = r,
        (r = function(e) {
            return S().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, r, n, i)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var a, s, o, l, d, u, c, h, p, f, m, v = K.get(t);
            if (v)
                for (i.handler && (i = (a = i).handler,
                r = a.selector),
                r && S.find.matchesSelector(be, r),
                i.guid || (i.guid = S.guid++),
                (l = v.events) || (l = v.events = {}),
                (s = v.handle) || (s = v.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                d = (e = (e || "").match($) || [""]).length; d--; )
                    p = m = (o = Ee.exec(e[d]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    p && (c = S.event.special[p] || {},
                    p = (r ? c.delegateType : c.bindType) || p,
                    c = S.event.special[p] || {},
                    u = S.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && S.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, a),
                    (h = l[p]) || ((h = l[p] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(p, s)),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                    S.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var a, s, o, l, d, u, c, h, p, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match($) || [""]).length; d--; )
                    if (p = m = (o = Ee.exec(t[d]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    p) {
                        for (c = S.event.special[p] || {},
                        h = l[p = (n ? c.delegateType : c.bindType) || p] || [],
                        o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = a = h.length; a--; )
                            u = h[a],
                            !r && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1),
                            u.selector && h.delegateCount--,
                            c.remove && c.remove.call(e, u));
                        s && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || S.removeEvent(e, p, v.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            S.event.remove(e, p + t[d], i, n, !0);
                S.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, a, s, o = S.event.fix(e), l = new Array(arguments.length), d = (K.get(this, "events") || {})[o.type] || [], u = S.event.special[o.type] || {};
            for (l[0] = o,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (o.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = S.event.handlers.call(this, o, d),
                t = 0; (r = s[t++]) && !o.isPropagationStopped(); )
                    for (o.currentTarget = r.elem,
                    i = 0; (a = r.handlers[i++]) && !o.isImmediatePropagationStopped(); )
                        o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a,
                        o.data = a.data,
                        void 0 !== (n = ((S.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(),
                        o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o),
                o.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, a, s, o = [], l = t.delegateCount, d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [],
                        s = {},
                        i = 0; i < l; i++)
                            void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? -1 < S(r, this).index(d) : S.find(r, this, null, [d]).length),
                            s[r] && a.push(n);
                        a.length && o.push({
                            elem: d,
                            handlers: a
                        })
                    }
            return d = this,
            l < t.length && o.push({
                elem: d,
                handlers: t.slice(l)
            }),
            o
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        S.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, i = e.relatedTarget, n = e.handleObj;
                return i && (i === this || S.contains(this, i)) || (e.type = n.origType,
                t = n.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, i, n) {
            return ke(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return ke(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (i = t,
                t = void 0),
                !1 === i && (i = Ce),
                this.each(function() {
                    S.event.remove(this, e, i, t)
                });
            for (r in e)
                this.off(r, t, e[r]);
            return this
        }
    });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , De = /<script|<style|<link/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function _e(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ne(e, t) {
        var i, n, r, a, s, o, l, d;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e),
            s = K.set(t, a),
            d = a.events))
                for (r in delete s.handle,
                s.events = {},
                d)
                    for (i = 0,
                    n = d[r].length; i < n; i++)
                        S.event.add(t, r, d[r][i]);
            Q.hasData(e) && (o = Q.access(e),
            l = S.extend({}, o),
            Q.set(t, l))
        }
    }
    function Le(i, n, r, a) {
        n = m.apply([], n);
        var e, t, s, o, l, d, u = 0, c = i.length, h = c - 1, p = n[0], f = y(p);
        if (f || 1 < c && "string" == typeof p && !g.checkClone && Pe.test(p))
            return i.each(function(e) {
                var t = i.eq(e);
                f && (n[0] = p.call(this, e, t.html())),
                Le(t, n, r, a)
            });
        if (c && (t = (e = ye(n, i[0].ownerDocument, !1, i, a)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || a)) {
            for (o = (s = S.map(pe(e, "script"), Oe)).length; u < c; u++)
                l = e,
                u !== h && (l = S.clone(l, !0, !0),
                o && S.merge(s, pe(l, "script"))),
                r.call(i[u], l, u);
            if (o)
                for (d = s[s.length - 1].ownerDocument,
                S.map(s, Ie),
                u = 0; u < o; u++)
                    l = s[u],
                    ce.test(l.type || "") && !K.access(l, "globalEval") && S.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(Ae, ""), d, l))
        }
        return i
    }
    function $e(e, t, i) {
        for (var n, r = t ? S.filter(t, e) : e, a = 0; null != (n = r[a]); a++)
            i || 1 !== n.nodeType || S.cleanData(pe(n)),
            n.parentNode && (i && S.contains(n.ownerDocument, n) && fe(pe(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(Me, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, a, s, o, l, d, u = e.cloneNode(!0), c = S.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = pe(u),
                n = 0,
                r = (a = pe(e)).length; n < r; n++)
                    o = a[n],
                    l = s[n],
                    void 0,
                    "input" === (d = l.nodeName.toLowerCase()) && de.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || pe(e),
                    s = s || pe(u),
                    n = 0,
                    r = a.length; n < r; n++)
                        Ne(a[n], s[n]);
                else
                    Ne(e, u);
            return 0 < (s = pe(u, "script")).length && fe(s, !c && pe(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, i, n, r = S.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (G(i)) {
                    if (t = i[K.expando]) {
                        if (t.events)
                            for (n in t.events)
                                r[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                        i[K.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return $e(this, e, !0)
        },
        remove: function(e) {
            return $e(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(pe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            1 === (t = this[i] || {}).nodeType && (S.cleanData(pe(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return Le(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(pe(this)),
                t && t.replaceChild(e, this))
            }, i)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, i = [], n = S(e), r = n.length - 1, a = 0; a <= r; a++)
                t = a === r ? this : this.clone(!0),
                S(n[a])[s](t),
                l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var ze = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , He = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T),
        t.getComputedStyle(e)
    }
      , je = new RegExp(ne.join("|"),"i");
    function qe(e, t, i) {
        var n, r, a, s, o = e.style;
        return (i = i || He(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)),
        !g.pixelBoxStyles() && ze.test(s) && je.test(t) && (n = o.width,
        r = o.minWidth,
        a = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = s,
        s = i.width,
        o.width = n,
        o.minWidth = r,
        o.maxWidth = a)),
        void 0 !== s ? s + "" : s
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(o).appendChild(l);
                var e = T.getComputedStyle(l);
                i = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                a = 36 === t(e.right),
                n = 36 === t(e.width),
                l.style.position = "absolute",
                r = 36 === l.offsetWidth || "absolute",
                be.removeChild(o),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var i, n, r, a, s, o = C.createElement("div"), l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        g.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(g, {
            boxSizingReliable: function() {
                return e(),
                n
            },
            pixelBoxStyles: function() {
                return e(),
                a
            },
            pixelPosition: function() {
                return e(),
                i
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                r
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/
      , We = /^--/
      , Re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ye = ["Webkit", "Moz", "ms"]
      , Xe = C.createElement("div").style;
    function Ge(e) {
        var t = S.cssProps[e];
        return t || (t = S.cssProps[e] = function(e) {
            if (e in Xe)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ye.length; i--; )
                if ((e = Ye[i] + t)in Xe)
                    return e
        }(e) || e),
        t
    }
    function Ue(e, t, i) {
        var n = ie.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function Ke(e, t, i, n, r, a) {
        var s = "width" === t ? 1 : 0
          , o = 0
          , l = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === i && (l += S.css(e, i + ne[s], !0, r)),
            n ? ("content" === i && (l -= S.css(e, "padding" + ne[s], !0, r)),
            "margin" !== i && (l -= S.css(e, "border" + ne[s] + "Width", !0, r))) : (l += S.css(e, "padding" + ne[s], !0, r),
            "padding" !== i ? l += S.css(e, "border" + ne[s] + "Width", !0, r) : o += S.css(e, "border" + ne[s] + "Width", !0, r));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))),
        l
    }
    function Qe(e, t, i) {
        var n = He(e)
          , r = qe(e, t, n)
          , a = "border-box" === S.css(e, "boxSizing", !1, n)
          , s = a;
        if (ze.test(r)) {
            if (!i)
                return r;
            r = "auto"
        }
        return s = s && (g.boxSizingReliable() || r === e.style[t]),
        ("auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (r = parseFloat(r) || 0) + Ke(e, t, i || (a ? "border" : "content"), s, n, r) + "px"
    }
    function Je(e, t, i, n, r) {
        return new Je.prototype.init(e,t,i,n,r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = qe(e, "opacity");
                        return "" === i ? "1" : i
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
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = X(t), l = We.test(t), d = e.style;
                if (l || (t = Ge(o)),
                s = S.cssHooks[t] || S.cssHooks[o],
                void 0 === i)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, n)) ? r : d[t];
                "string" === (a = typeof i) && (r = ie.exec(i)) && r[1] && (i = se(e, t, r),
                a = "number"),
                null != i && i == i && ("number" === a && (i += r && r[3] || (S.cssNumber[o] ? "" : "px")),
                g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"),
                s && "set"in s && void 0 === (i = s.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var r, a, s, o = X(t);
            return We.test(t) || (t = Ge(o)),
            (s = S.cssHooks[t] || S.cssHooks[o]) && "get"in s && (r = s.get(e, !0, i)),
            void 0 === r && (r = qe(e, t, n)),
            "normal" === r && t in Ve && (r = Ve[t]),
            "" === i || i ? (a = parseFloat(r),
            !0 === i || isFinite(a) ? a || 0 : r) : r
        }
    }),
    S.each(["height", "width"], function(e, o) {
        S.cssHooks[o] = {
            get: function(e, t, i) {
                if (t)
                    return !Be.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, o, i) : ae(e, Re, function() {
                        return Qe(e, o, i)
                    })
            },
            set: function(e, t, i) {
                var n, r = He(e), a = "border-box" === S.css(e, "boxSizing", !1, r), s = i && Ke(e, o, i, a, r);
                return a && g.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - Ke(e, o, "border", !1, r) - .5)),
                s && (n = ie.exec(t)) && "px" !== (n[3] || "px") && (e.style[o] = t,
                t = S.css(e, o)),
                Ue(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = Fe(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, a) {
        S.cssHooks[r + a] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    i[r + ne[t] + a] = n[t] || n[t - 2] || n[0];
                return i
            }
        },
        "margin" !== r && (S.cssHooks[r + a].set = Ue)
    }),
    S.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, i) {
                var n, r, a = {}, s = 0;
                if (Array.isArray(t)) {
                    for (n = He(e),
                    r = t.length; s < r; s++)
                        a[t[s]] = S.css(e, t[s], !1, n);
                    return a
                }
                return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = Je).prototype = {
        constructor: Je,
        init: function(e, t, i, n, r, a) {
            this.elem = e,
            this.prop = i,
            this.easing = r || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = a || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Je.propHooks._default.set(this),
            this
        }
    }).init.prototype = Je.prototype,
    (Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = Je.prototype.init,
    S.fx.step = {};
    var Ze, et, tt, it, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
    function at() {
        et && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(at) : T.setTimeout(at, S.fx.interval),
        S.fx.tick())
    }
    function st() {
        return T.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function ot(e, t) {
        var i, n = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            r["margin" + (i = ne[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function lt(e, t, i) {
        for (var n, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (n = r[a].call(i, t, e))
                return n
    }
    function dt(a, e, t) {
        var i, s, n = 0, r = dt.prefilters.length, o = S.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var e = Ze || st(), t = Math.max(0, d.startTime + d.duration - e), i = 1 - (t / d.duration || 0), n = 0, r = d.tweens.length; n < r; n++)
                d.tweens[n].run(i);
            return o.notifyWith(a, [d, i, t]),
            i < 1 && r ? t : (r || o.notifyWith(a, [d, 1, 0]),
            o.resolveWith(a, [d]),
            !1)
        }, d = o.promise({
            elem: a,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || st(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var i = S.Tween(a, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(i),
                i
            },
            stop: function(e) {
                var t = 0
                  , i = e ? d.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < i; t++)
                    d.tweens[t].run(1);
                return e ? (o.notifyWith(a, [d, 1, 0]),
                o.resolveWith(a, [d, e])) : o.rejectWith(a, [d, e]),
                this
            }
        }), u = d.props;
        for (!function(e, t) {
            var i, n, r, a, s;
            for (i in e)
                if (r = t[n = X(i)],
                a = e[i],
                Array.isArray(a) && (r = a[1],
                a = e[i] = a[0]),
                i !== n && (e[n] = a,
                delete e[i]),
                (s = S.cssHooks[n]) && "expand"in s)
                    for (i in a = s.expand(a),
                    delete e[n],
                    a)
                        i in e || (e[i] = a[i],
                        t[i] = r);
                else
                    t[n] = r
        }(u, d.opts.specialEasing); n < r; n++)
            if (i = dt.prefilters[n].call(d, a, u, d.opts))
                return y(i.stop) && (S._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)),
                i;
        return S.map(u, lt, d),
        y(d.opts.start) && d.opts.start.call(a, d),
        d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always),
        S.fx.timer(S.extend(l, {
            elem: a,
            anim: d,
            queue: d.opts.queue
        })),
        d
    }
    S.Animation = S.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return se(i.elem, e, ie.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            for (var i, n = 0, r = (e = y(e) ? (t = e,
            ["*"]) : e.match($)).length; n < r; n++)
                i = e[n],
                dt.tweeners[i] = dt.tweeners[i] || [],
                dt.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, r, a, s, o, l, d, u, c = "width"in t || "height"in t, h = this, p = {}, f = e.style, m = e.nodeType && re(e), v = K.get(e, "fxshow");
            for (n in i.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            o = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || o()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    S.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[n],
                nt.test(r)) {
                    if (delete t[n],
                    a = a || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[n])
                            continue;
                        m = !0
                    }
                    p[n] = v && v[n] || S.style(e, n)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (d = v && v.display) && (d = K.get(e, "display")),
                "none" === (u = S.css(e, "display")) && (d ? u = d : (le([e], !0),
                d = e.style.display || d,
                u = S.css(e, "display"),
                le([e]))),
                ("inline" === u || "inline-block" === u && null != d) && "none" === S.css(e, "float") && (l || (h.done(function() {
                    f.display = d
                }),
                null == d && (u = f.display,
                d = "none" === u ? "" : u)),
                f.display = "inline-block")),
                i.overflow && (f.overflow = "hidden",
                h.always(function() {
                    f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2]
                })),
                l = !1,
                p)
                    l || (v ? "hidden"in v && (m = v.hidden) : v = K.access(e, "fxshow", {
                        display: d
                    }),
                    a && (v.hidden = !m),
                    m && le([e], !0),
                    h.done(function() {
                        for (n in m || le([e]),
                        K.remove(e, "fxshow"),
                        p)
                            S.style(e, n, p[n])
                    })),
                    l = lt(m ? v[n] : 0, n, h),
                    n in v || (v[n] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? S.extend({}, e) : {
            complete: i || !i && t || y(e) && e,
            duration: e,
            easing: i && t || t && !y(t) && t
        };
        return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            y(n.old) && n.old.call(this),
            n.queue && S.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            var r = S.isEmptyObject(t)
              , a = S.speed(e, i, n)
              , s = function() {
                var e = dt(this, S.extend({}, t), a);
                (r || K.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(r, e, a) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(a)
            };
            return "string" != typeof r && (a = e,
            e = r,
            r = void 0),
            e && !1 !== r && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , i = S.timers
                  , n = K.get(this);
                if (t)
                    n[t] && n[t].stop && s(n[t]);
                else
                    for (t in n)
                        n[t] && n[t].stop && rt.test(t) && s(n[t]);
                for (t = i.length; t--; )
                    i[t].elem !== this || null != r && i[t].queue !== r || (i[t].anim.stop(a),
                    e = !1,
                    i.splice(t, 1));
                !e && a || S.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = K.get(this), i = t[s + "queue"], n = t[s + "queueHooks"], r = S.timers, a = i ? i.length : 0;
                for (t.finish = !0,
                S.queue(this, s, []),
                n && n.stop && n.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < a; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, n) {
        var r = S.fn[n];
        S.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ot(n, !0), e, t, i)
        }
    }),
    S.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        S.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, i = S.timers;
        for (Ze = Date.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || S.fx.stop(),
        Ze = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        et || (et = !0,
        at())
    }
    ,
    S.fx.stop = function() {
        et = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(n, e) {
        return n = S.fx && S.fx.speeds[n] || n,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }
    ,
    tt = C.createElement("input"),
    it = C.createElement("select").appendChild(C.createElement("option")),
    tt.type = "checkbox",
    g.checkOn = "" !== tt.value,
    g.optSelected = it.selected,
    (tt = C.createElement("input")).value = "t",
    tt.type = "radio",
    g.radioValue = "t" === tt.value;
    var ut, ct = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return W(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === a && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ut : void 0)),
                void 0 !== i ? null === i ? void S.removeAttr(e, t) : r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : r && "get"in r && null !== (n = r.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && D(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0, r = t && t.match($);
            if (r && 1 === e.nodeType)
                for (; i = r[n++]; )
                    e.removeAttribute(i)
        }
    }),
    ut = {
        set: function(e, t, i) {
            return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ct[t] || S.find.attr;
        ct[t] = function(e, t, i) {
            var n, r, a = t.toLowerCase();
            return i || (r = ct[a],
            ct[a] = n,
            n = null != s(e, t, i) ? a : null,
            ct[a] = r),
            n
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ft(e) {
        return (e.match($) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return W(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                r = S.propHooks[t]),
                void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get"in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (S.propHooks.selected = {
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
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, i, n, r, a, s, o, l = 0;
            if (y(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, mt(this)))
                });
            if ((e = vt(t)).length)
                for (; i = this[l++]; )
                    if (r = mt(i),
                    n = 1 === i.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = e[s++]; )
                            n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        r !== (o = ft(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, a, s, o, l = 0;
            if (y(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = vt(t)).length)
                for (; i = this[l++]; )
                    if (r = mt(i),
                    n = 1 === i.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = e[s++]; )
                            for (; -1 < n.indexOf(" " + a + " "); )
                                n = n.replace(" " + a + " ", " ");
                        r !== (o = ft(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var a = typeof r
              , s = "string" === a || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                S(this).toggleClass(r.call(this, e, mt(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if (s)
                    for (t = 0,
                    i = S(this),
                    n = vt(r); e = n[t++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    void 0 !== r && "boolean" !== a || ((e = mt(this)) && K.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && -1 < (" " + ft(mt(i)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var gt = /\r/g;
    S.fn.extend({
        val: function(i) {
            var n, e, r, t = this[0];
            return arguments.length ? (r = y(i),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ft(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options, a = e.selectedIndex, s = "select-one" === e.type, o = s ? null : [], l = s ? a + 1 : r.length;
                    for (n = a < 0 ? l : s ? a : 0; n < l; n++)
                        if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !D(i.parentNode, "optgroup"))) {
                            if (t = S(i).val(),
                            s)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, a = S.makeArray(t), s = r.length; s--; )
                        ((n = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(n), a)) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        g.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    g.focusin = "onfocusin"in T;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, i, n) {
            var r, a, s, o, l, d, u, c, h = [i || C], p = v.call(e, "type") ? e.type : e, f = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = s = i = i || C,
            3 !== i.nodeType && 8 !== i.nodeType && !yt.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(),
            f.sort()),
            l = p.indexOf(":") < 0 && "on" + p,
            (e = e[S.expando] ? e : new S.Event(p,"object" == typeof e && e)).isTrigger = n ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            t = null == t ? [e] : S.makeArray(t, [e]),
            u = S.event.special[p] || {},
            n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                if (!n && !u.noBubble && !b(i)) {
                    for (o = u.delegateType || p,
                    yt.test(o + p) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a),
                        s = a;
                    s === (i.ownerDocument || C) && h.push(s.defaultView || s.parentWindow || T)
                }
                for (r = 0; (a = h[r++]) && !e.isPropagationStopped(); )
                    c = a,
                    e.type = 1 < r ? o : u.bindType || p,
                    (d = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && d.apply(a, t),
                    (d = l && a[l]) && d.apply && G(a) && (e.result = d.apply(a, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !G(i) || l && y(i[p]) && !b(i) && ((s = i[l]) && (i[l] = null),
                S.event.triggered = p,
                e.isPropagationStopped() && c.addEventListener(p, bt),
                i[p](),
                e.isPropagationStopped() && c.removeEventListener(p, bt),
                S.event.triggered = void 0,
                s && (i[l] = s)),
                e.result
            }
        },
        simulate: function(e, t, i) {
            var n = S.extend(new S.Event, i, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return S.event.trigger(e, t, i, !0)
        }
    }),
    g.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var r = function(e) {
            S.event.simulate(n, e.target, S.event.fix(e))
        };
        S.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = K.access(e, n);
                t || e.addEventListener(i, r, !0),
                K.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = K.access(e, n) - 1;
                t ? K.access(e, n, t) : (e.removeEventListener(i, r, !0),
                K.remove(e, n))
            }
        }
    });
    var wt = T.location
      , xt = Date.now()
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var Tt = /\[\]$/
      , Ct = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function Mt(i, e, n, r) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                n || Tt.test(i) ? r(i, t) : Mt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, r)
            });
        else if (n || "object" !== x(e))
            r(i, e);
        else
            for (t in e)
                Mt(i + "[" + t + "]", e[t], n, r)
    }
    S.param = function(e, t) {
        var i, n = [], r = function(e, t) {
            var i = y(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (i in e)
                Mt(i, e[i], t, r);
        return n.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var i = S(this).val();
                return null == i ? null : Array.isArray(i) ? S.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g
      , Pt = /#.*$/
      , At = /([?&])_=[^&]*/
      , _t = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , It = /^\/\//
      , Nt = {}
      , Lt = {}
      , $t = "*/".concat("*")
      , zt = C.createElement("a");
    function Ht(a) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var i, n = 0, r = e.toLowerCase().match($) || [];
            if (y(t))
                for (; i = r[n++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
        }
    }
    function jt(t, r, a, s) {
        var o = {}
          , l = t === Lt;
        function d(e) {
            var n;
            return o[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var i = t(r, a, s);
                return "string" != typeof i || l || o[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i),
                d(i),
                !1)
            }),
            n
        }
        return d(r.dataTypes[0]) || !o["*"] && d("*")
    }
    function qt(e, t) {
        var i, n, r = S.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && S.extend(!0, e, n),
        e
    }
    zt.href = wt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, S.ajaxSettings), t) : qt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Nt),
        ajaxTransport: Ht(Lt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var u, c, h, i, p, n, f, m, r, a, v = S.ajaxSetup({}, t), g = v.context || v, y = v.context && (g.nodeType || g.jquery) ? S(g) : S.event, b = S.Deferred(), w = S.Callbacks("once memory"), x = v.statusCode || {}, s = {}, o = {}, l = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (f) {
                        if (!i)
                            for (i = {}; t = _t.exec(h); )
                                i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return f ? h : null
                },
                setRequestHeader: function(e, t) {
                    return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == f && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (f)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t),
                    d(0, t),
                    this
                }
            };
            if (b.promise(E),
            v.url = ((e || v.url || wt.href) + "").replace(It, wt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match($) || [""],
            null == v.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = v.url,
                    n.href = n.href,
                    v.crossDomain = zt.protocol + "//" + zt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            jt(Nt, v, t, E),
            f)
                return E;
            for (r in (m = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            c = v.url.replace(Pt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Dt, "+")) : (a = v.url.slice(c.length),
            v.data && (v.processData || "string" == typeof v.data) && (c += (Et.test(c) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (c = c.replace(At, "$1"),
            a = (Et.test(c) ? "&" : "?") + "_=" + xt++ + a),
            v.url = c + a),
            v.ifModified && (S.lastModified[c] && E.setRequestHeader("If-Modified-Since", S.lastModified[c]),
            S.etag[c] && E.setRequestHeader("If-None-Match", S.etag[c])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && E.setRequestHeader("Content-Type", v.contentType),
            E.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                E.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, E, v) || f))
                return E.abort();
            if (l = "abort",
            w.add(v.complete),
            E.done(v.success),
            E.fail(v.error),
            u = jt(Lt, v, t, E)) {
                if (E.readyState = 1,
                m && y.trigger("ajaxSend", [E, v]),
                f)
                    return E;
                v.async && 0 < v.timeout && (p = T.setTimeout(function() {
                    E.abort("timeout")
                }, v.timeout));
                try {
                    f = !1,
                    u.send(s, d)
                } catch (e) {
                    if (f)
                        throw e;
                    d(-1, e)
                }
            } else
                d(-1, "No Transport");
            function d(e, t, i, n) {
                var r, a, s, o, l, d = t;
                f || (f = !0,
                p && T.clearTimeout(p),
                u = void 0,
                h = n || "",
                E.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                i && (o = function(e, t, i) {
                    for (var n, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in o)
                            if (o[r] && o[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in i)
                        a = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a)
                        return a !== l[0] && l.unshift(a),
                        i[a]
                }(v, E, i)),
                o = function(e, t, i, n) {
                    var r, a, s, o, l, d = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            d[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a; )
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t),
                        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = a,
                        a = u.shift())
                            if ("*" === a)
                                a = l;
                            else if ("*" !== l && l !== a) {
                                if (!(s = d[l + " " + a] || d["* " + a]))
                                    for (r in d)
                                        if ((o = r.split(" "))[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                                            !0 === s ? s = d[r] : !0 !== d[r] && (a = o[0],
                                            u.unshift(o[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + a
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, o, E, r),
                r ? (v.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (S.lastModified[c] = l),
                (l = E.getResponseHeader("etag")) && (S.etag[c] = l)),
                204 === e || "HEAD" === v.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = o.state,
                a = o.data,
                r = !(s = o.error))) : (s = d,
                !e && d || (d = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (t || d) + "",
                r ? b.resolveWith(g, [a, d, E]) : b.rejectWith(g, [E, d, s]),
                E.statusCode(x),
                x = void 0,
                m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, v, r ? a : s]),
                w.fireWith(g, [E, d]),
                m && (y.trigger("ajaxComplete", [E, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, i) {
            return S.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, r) {
        S[r] = function(e, t, i, n) {
            return y(t) && (n = n || i,
            i = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: r,
                dataType: n,
                data: t,
                success: i
            }, S.isPlainObject(e) && e))
        }
    }),
    S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(i) {
            return y(i) ? this.each(function(e) {
                S(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = y(t);
            return this.each(function(e) {
                S(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ft = {
        0: 200,
        1223: 204
    }
      , Bt = S.ajaxSettings.xhr();
    g.cors = !!Bt && "withCredentials"in Bt,
    g.ajax = Bt = !!Bt,
    S.ajaxTransport(function(r) {
        var a, s;
        if (g.cors || Bt && !r.crossDomain)
            return {
                send: function(e, t) {
                    var i, n = r.xhr();
                    if (n.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (i in r.xhrFields)
                            n[i] = r.xhrFields[i];
                    for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        n.setRequestHeader(i, e[i]);
                    a = function(e) {
                        return function() {
                            a && (a = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null,
                            "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Ft[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }
                    ,
                    n.onload = a(),
                    s = n.onerror = n.ontimeout = a("error"),
                    void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function() {
                        4 === n.readyState && T.setTimeout(function() {
                            a && s()
                        })
                    }
                    ,
                    a = a("abort");
                    try {
                        n.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (a)
                            throw e
                    }
                },
                abort: function() {
                    a && a()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(i) {
        var n, r;
        if (i.crossDomain)
            return {
                send: function(e, t) {
                    n = S("<script>").prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", r = function(e) {
                        n.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    C.head.appendChild(n[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var Wt, Rt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || S.expando + "_" + xt++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, r, a, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Vt, "$1" + n) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
            e.converters["script json"] = function() {
                return a || S.error(n + " was not called"),
                a[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = T[n],
            T[n] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? S(T).removeProp(n) : T[n] = r,
                e[n] && (e.jsonpCallback = t.jsonpCallback,
                Rt.push(n)),
                a && y(r) && r(a[0]),
                a = r = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((Wt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Wt.childNodes.length),
    S.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
        t = !1),
        t || (g.createHTMLDocument ? ((n = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        t.head.appendChild(n)) : t = C),
        a = !i && [],
        (r = P.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, a),
        a && a.length && S(a).remove(),
        S.merge([], r.childNodes)));
        var n, r, a
    }
    ,
    S.fn.load = function(e, t, i) {
        var n, r, a, s = this, o = e.indexOf(" ");
        return -1 < o && (n = ft(e.slice(o)),
        e = e.slice(0, o)),
        y(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < s.length && S.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            s.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, i) {
            var n, r, a, s, o, l, d = S.css(e, "position"), u = S(e), c = {};
            "static" === d && (e.style.position = "relative"),
            o = u.offset(),
            a = S.css(e, "top"),
            l = S.css(e, "left"),
            r = ("absolute" === d || "fixed" === d) && -1 < (a + l).indexOf("auto") ? (s = (n = u.position()).top,
            n.left) : (s = parseFloat(a) || 0,
            parseFloat(l) || 0),
            y(t) && (t = t.call(e, i, S.extend({}, o))),
            null != t.top && (c.top = t.top - o.top + s),
            null != t.left && (c.left = t.left - o.left + r),
            "using"in t ? t.using.call(e, c) : u.css(c)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            i = n.ownerDocument.defaultView,
            {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(n, "position"))
                    t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    i = n.ownerDocument,
                    e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === S.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    r.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - S.css(n, "marginTop", !0),
                    left: t.left - r.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var a = "pageYOffset" === r;
        S.fn[t] = function(e) {
            return W(this, function(e, t, i) {
                var n;
                if (b(e) ? n = e : 9 === e.nodeType && (n = e.defaultView),
                void 0 === i)
                    return n ? n[r] : e[t];
                n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, i) {
        S.cssHooks[i] = Fe(g.pixelPosition, function(e, t) {
            if (t)
                return t = qe(e, i),
                ze.test(t) ? S(e).position()[i] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        S.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(n, a) {
            S.fn[a] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e)
                  , r = n || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, i) {
                    var n;
                    return b(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement,
                    Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? S.css(e, t, r) : S.style(e, t, i, r)
                }, o, i ? e : void 0, i)
            }
        })
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        S.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }),
    S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }),
    S.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        y(e))
            return n = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            r
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = D,
    S.isFunction = y,
    S.isWindow = b,
    S.camelCase = X,
    S.type = x,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = T.jQuery
      , Xt = T.$;
    return S.noConflict = function(e) {
        return T.$ === S && (T.$ = Xt),
        e && T.jQuery === S && (T.jQuery = Yt),
        S
    }
    ,
    e || (T.jQuery = T.$ = S),
    S
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], i = 0, n = 0; n < t.length; n += 1)
        if (e && 0 <= navigator.userAgent.indexOf(t[n])) {
            i = 1;
            break
        }
    var s = e && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, i))
        }
    }
    ;
    function o(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function w(e, t) {
        if (1 !== e.nodeType)
            return [];
        var i = getComputedStyle(e, null);
        return t ? i[t] : i
    }
    function p(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function f(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = w(e)
          , i = t.overflow
          , n = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + r + n) ? e : f(p(e))
    }
    var r = e && !(!window.MSInputMethodContext || !document.documentMode)
      , a = e && /MSIE 10/.test(navigator.userAgent);
    function m(e) {
        return 11 === e ? r : 10 === e ? a : r || a
    }
    function b(e) {
        if (!e)
            return document.documentElement;
        for (var t = m(10) ? document.body : null, i = e.offsetParent; i === t && e.nextElementSibling; )
            i = (e = e.nextElementSibling).offsetParent;
        var n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === w(i, "position") ? b(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }
    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = i ? e : t
          , r = i ? t : e
          , a = document.createRange();
        a.setStart(n, 0),
        a.setEnd(r, 0);
        var s, o, l = a.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(r))
            return "BODY" === (o = (s = l).nodeName) || "HTML" !== o && b(s.firstElementChild) !== s ? b(l) : l;
        var d = u(e);
        return d.host ? v(d.host, t) : v(e, u(t).host)
    }
    function g(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i)
            return e[t];
        var n = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || n)[t]
    }
    function c(e, t) {
        var i = "x" === t ? "Left" : "Top"
          , n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
    }
    function l(e, t, i, n) {
        return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], m(10) ? parseInt(i["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function y(e) {
        var t = e.body
          , i = e.documentElement
          , n = m(10) && getComputedStyle(i);
        return {
            height: l("Height", t, i, n),
            width: l("Width", t, i, n)
        }
    }
    var d = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t),
            i && n(e, i),
            e
        }
    }()
      , x = function(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
      , E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }
    ;
    function T(e) {
        return E({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function C(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var i = g(e, "top")
                  , n = g(e, "left");
                t.top += i,
                t.left += n,
                t.bottom += i,
                t.right += n
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , a = "HTML" === e.nodeName ? y(e.ownerDocument) : {}
          , s = a.width || e.clientWidth || r.right - r.left
          , o = a.height || e.clientHeight || r.bottom - r.top
          , l = e.offsetWidth - s
          , d = e.offsetHeight - o;
        if (l || d) {
            var u = w(e);
            l -= c(u, "x"),
            d -= c(u, "y"),
            r.width -= l,
            r.height -= d
        }
        return T(r)
    }
    function S(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = m(10)
          , r = "HTML" === t.nodeName
          , a = C(e)
          , s = C(t)
          , o = f(e)
          , l = w(t)
          , d = parseFloat(l.borderTopWidth, 10)
          , u = parseFloat(l.borderLeftWidth, 10);
        i && r && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0));
        var c = T({
            top: a.top - s.top - d,
            left: a.left - s.left - u,
            width: a.width,
            height: a.height
        });
        if (c.marginTop = 0,
        c.marginLeft = 0,
        !n && r) {
            var h = parseFloat(l.marginTop, 10)
              , p = parseFloat(l.marginLeft, 10);
            c.top -= d - h,
            c.bottom -= d - h,
            c.left -= u - p,
            c.right -= u - p,
            c.marginTop = h,
            c.marginLeft = p
        }
        return (n && !i ? t.contains(o) : t === o && "BODY" !== o.nodeName) && (c = function(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , n = g(t, "top")
              , r = g(t, "left")
              , a = i ? -1 : 1;
            return e.top += n * a,
            e.bottom += n * a,
            e.left += r * a,
            e.right += r * a,
            e
        }(c, t)),
        c
    }
    function k(e) {
        if (!e || !e.parentElement || m())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function h(e, t, i, n) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , a = {
            top: 0,
            left: 0
        }
          , s = r ? k(e) : v(e, t);
        if ("viewport" === n)
            a = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , i = e.ownerDocument.documentElement
                  , n = S(e, i)
                  , r = Math.max(i.clientWidth, window.innerWidth || 0)
                  , a = Math.max(i.clientHeight, window.innerHeight || 0)
                  , s = t ? 0 : g(i)
                  , o = t ? 0 : g(i, "left");
                return T({
                    top: s - n.top + n.marginTop,
                    left: o - n.left + n.marginLeft,
                    width: r,
                    height: a
                })
            }(s, r);
        else {
            var o = void 0;
            "scrollParent" === n ? "BODY" === (o = f(p(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === n ? e.ownerDocument.documentElement : n;
            var l = S(o, s, r);
            if ("HTML" !== o.nodeName || function e(t) {
                var i = t.nodeName;
                return "BODY" !== i && "HTML" !== i && ("fixed" === w(t, "position") || e(p(t)))
            }(s))
                a = l;
            else {
                var d = y(e.ownerDocument)
                  , u = d.height
                  , c = d.width;
                a.top += l.top - l.marginTop,
                a.bottom = u + l.top,
                a.left += l.left - l.marginLeft,
                a.right = c + l.left
            }
        }
        var h = "number" == typeof (i = i || 0);
        return a.left += h ? i : i.left || 0,
        a.top += h ? i : i.top || 0,
        a.right -= h ? i : i.right || 0,
        a.bottom -= h ? i : i.bottom || 0,
        a
    }
    function M(e, t, n, i, r) {
        var a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = h(n, i, a, r)
          , o = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(o).map(function(e) {
            return E({
                key: e
            }, o[e], {
                area: (t = o[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , d = l.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , u = 0 < d.length ? d[0].key : l[0].key
          , c = e.split("-")[1];
        return u + (c ? "-" + c : "")
    }
    function D(e, t, i) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return S(i, n ? k(t) : v(t, i), n)
    }
    function P(e) {
        var t = getComputedStyle(e)
          , i = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + n,
            height: e.offsetHeight + i
        }
    }
    function A(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function _(e, t, i) {
        i = i.split("-")[0];
        var n = P(e)
          , r = {
            width: n.width,
            height: n.height
        }
          , a = -1 !== ["right", "left"].indexOf(i)
          , s = a ? "top" : "left"
          , o = a ? "left" : "top"
          , l = a ? "height" : "width"
          , d = a ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - n[l] / 2,
        r[o] = i === o ? t[o] - n[d] : t[A(o)],
        r
    }
    function O(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function I(e, i, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, i) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === i
                });
            var n = O(e, function(e) {
                return e[t] === i
            });
            return e.indexOf(n)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && o(t) && (i.offsets.popper = T(i.offsets.popper),
            i.offsets.reference = T(i.offsets.reference),
            i = t(i, e))
        }),
        i
    }
    function N(e, i) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === i
        })
    }
    function L(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var r = t[n]
              , a = r ? "" + r + i : e;
            if (void 0 !== document.body.style[a])
                return a
        }
        return null
    }
    function $(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function z(e, t, i, n) {
        i.updateBound = n,
        $(e).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var r = f(e);
        return function e(t, i, n, r) {
            var a = "BODY" === t.nodeName
              , s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(i, n, {
                passive: !0
            }),
            a || e(f(s.parentNode), i, n, r),
            r.push(s)
        }(r, "scroll", i.updateBound, i.scrollParents),
        i.scrollElement = r,
        i.eventsEnabled = !0,
        i
    }
    function H() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        $(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function j(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function q(i, n) {
        Object.keys(n).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && j(n[e]) && (t = "px"),
            i.style[e] = n[e] + t
        })
    }
    function F(e, t, i) {
        var n = O(e, function(e) {
            return e.name === t
        })
          , r = !!n && e.some(function(e) {
            return e.name === i && e.enabled && e.order < n.order
        });
        if (!r) {
            var a = "`" + t + "`"
              , s = "`" + i + "`";
            console.warn(s + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
        }
        return r
    }
    var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , W = B.slice(3);
    function R(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , i = W.indexOf(e)
          , n = W.slice(i + 1).concat(W.slice(0, i));
        return t ? n.reverse() : n
    }
    var V = "flip"
      , Y = "clockwise"
      , X = "counterclockwise";
    function G(e, r, a, t) {
        var s = [0, 0]
          , o = -1 !== ["right", "left"].indexOf(t)
          , i = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , n = i.indexOf(O(i, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        i[n] && -1 === i[n].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , d = -1 !== n ? [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))] : [i];
        return (d = d.map(function(e, t) {
            var i = (1 === t ? !o : o) ? "height" : "width"
              , n = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                n = !0,
                e) : n ? (e[e.length - 1] += t,
                n = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, i, n) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , a = +r[1]
                      , s = r[2];
                    if (!a)
                        return e;
                    if (0 !== s.indexOf("%"))
                        return "vh" !== s && "vw" !== s ? a : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
                    var o = void 0;
                    switch (s) {
                    case "%p":
                        o = i;
                        break;
                    case "%":
                    case "%r":
                    default:
                        o = n
                    }
                    return T(o)[t] / 100 * a
                }(e, i, r, a)
            })
        })).forEach(function(i, n) {
            i.forEach(function(e, t) {
                j(e) && (s[n] += e * ("-" === i[t - 1] ? -1 : 1))
            })
        }),
        s
    }
    var U = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , i = t.split("-")[0]
                      , n = t.split("-")[1];
                    if (n) {
                        var r = e.offsets
                          , a = r.reference
                          , s = r.popper
                          , o = -1 !== ["bottom", "top"].indexOf(i)
                          , l = o ? "left" : "top"
                          , d = o ? "width" : "height"
                          , u = {
                            start: x({}, l, a[l]),
                            end: x({}, l, a[l] + a[d] - s[d])
                        };
                        e.offsets.popper = E({}, s, u[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var i = t.offset
                      , n = e.placement
                      , r = e.offsets
                      , a = r.popper
                      , s = r.reference
                      , o = n.split("-")[0]
                      , l = void 0;
                    return l = j(+i) ? [+i, 0] : G(i, a, s, o),
                    "left" === o ? (a.top += l[0],
                    a.left -= l[1]) : "right" === o ? (a.top += l[0],
                    a.left += l[1]) : "top" === o ? (a.left += l[0],
                    a.top -= l[1]) : "bottom" === o && (a.left += l[0],
                    a.top += l[1]),
                    e.popper = a,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, n) {
                    var t = n.boundariesElement || b(e.instance.popper);
                    e.instance.reference === t && (t = b(t));
                    var i = L("transform")
                      , r = e.instance.popper.style
                      , a = r.top
                      , s = r.left
                      , o = r[i];
                    r.top = "",
                    r.left = "",
                    r[i] = "";
                    var l = h(e.instance.popper, e.instance.reference, n.padding, t, e.positionFixed);
                    r.top = a,
                    r.left = s,
                    r[i] = o,
                    n.boundaries = l;
                    var d = n.priority
                      , u = e.offsets.popper
                      , c = {
                        primary: function(e) {
                            var t = u[e];
                            return u[e] < l[e] && !n.escapeWithReference && (t = Math.max(u[e], l[e])),
                            x({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , i = u[t];
                            return u[e] > l[e] && !n.escapeWithReference && (i = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))),
                            x({}, t, i)
                        }
                    };
                    return d.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = E({}, u, c[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , i = t.popper
                      , n = t.reference
                      , r = e.placement.split("-")[0]
                      , a = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , o = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , d = s ? "width" : "height";
                    return i[o] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[d]),
                    i[l] > a(n[o]) && (e.offsets.popper[l] = a(n[o])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var i;
                    if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n)))
                            return e
                    } else if (!e.instance.popper.contains(n))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , a = e.offsets
                      , s = a.popper
                      , o = a.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , d = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , c = u.toLowerCase()
                      , h = l ? "left" : "top"
                      , p = l ? "bottom" : "right"
                      , f = P(n)[d];
                    o[p] - f < s[c] && (e.offsets.popper[c] -= s[c] - (o[p] - f)),
                    o[c] + f > s[p] && (e.offsets.popper[c] += o[c] + f - s[p]),
                    e.offsets.popper = T(e.offsets.popper);
                    var m = o[c] + o[d] / 2 - f / 2
                      , v = w(e.instance.popper)
                      , g = parseFloat(v["margin" + u], 10)
                      , y = parseFloat(v["border" + u + "Width"], 10)
                      , b = m - e.offsets.popper[c] - g - y;
                    return b = Math.max(Math.min(s[d] - f, b), 0),
                    e.arrowElement = n,
                    e.offsets.arrow = (x(i = {}, c, Math.round(b)),
                    x(i, h, ""),
                    i),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(f, m) {
                    if (N(f.instance.modifiers, "inner"))
                        return f;
                    if (f.flipped && f.placement === f.originalPlacement)
                        return f;
                    var v = h(f.instance.popper, f.instance.reference, m.padding, m.boundariesElement, f.positionFixed)
                      , g = f.placement.split("-")[0]
                      , y = A(g)
                      , b = f.placement.split("-")[1] || ""
                      , w = [];
                    switch (m.behavior) {
                    case V:
                        w = [g, y];
                        break;
                    case Y:
                        w = R(g);
                        break;
                    case X:
                        w = R(g, !0);
                        break;
                    default:
                        w = m.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (g !== e || w.length === t + 1)
                            return f;
                        g = f.placement.split("-")[0],
                        y = A(g);
                        var i, n = f.offsets.popper, r = f.offsets.reference, a = Math.floor, s = "left" === g && a(n.right) > a(r.left) || "right" === g && a(n.left) < a(r.right) || "top" === g && a(n.bottom) > a(r.top) || "bottom" === g && a(n.top) < a(r.bottom), o = a(n.left) < a(v.left), l = a(n.right) > a(v.right), d = a(n.top) < a(v.top), u = a(n.bottom) > a(v.bottom), c = "left" === g && o || "right" === g && l || "top" === g && d || "bottom" === g && u, h = -1 !== ["top", "bottom"].indexOf(g), p = !!m.flipVariations && (h && "start" === b && o || h && "end" === b && l || !h && "start" === b && d || !h && "end" === b && u);
                        (s || c || p) && (f.flipped = !0,
                        (s || c) && (g = w[t + 1]),
                        p && (b = "end" === (i = b) ? "start" : "start" === i ? "end" : i),
                        f.placement = g + (b ? "-" + b : ""),
                        f.offsets.popper = E({}, f.offsets.popper, _(f.instance.popper, f.offsets.reference, f.placement)),
                        f = I(f.instance.modifiers, f, "flip"))
                    }),
                    f
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , i = t.split("-")[0]
                      , n = e.offsets
                      , r = n.popper
                      , a = n.reference
                      , s = -1 !== ["left", "right"].indexOf(i)
                      , o = -1 === ["top", "left"].indexOf(i);
                    return r[s ? "left" : "top"] = a[i] - (o ? r[s ? "width" : "height"] : 0),
                    e.placement = A(t),
                    e.offsets.popper = T(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , i = O(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var i = t.x
                      , n = t.y
                      , r = e.offsets.popper
                      , a = O(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== a ? a : t.gpuAcceleration
                      , o = b(e.instance.popper)
                      , l = C(o)
                      , d = {
                        position: r.position
                    }
                      , u = {
                        left: Math.floor(r.left),
                        top: Math.round(r.top),
                        bottom: Math.round(r.bottom),
                        right: Math.floor(r.right)
                    }
                      , c = "bottom" === i ? "top" : "bottom"
                      , h = "right" === n ? "left" : "right"
                      , p = L("transform")
                      , f = void 0
                      , m = void 0;
                    if (m = "bottom" === c ? "HTML" === o.nodeName ? -o.clientHeight + u.bottom : -l.height + u.bottom : u.top,
                    f = "right" === h ? "HTML" === o.nodeName ? -o.clientWidth + u.right : -l.width + u.right : u.left,
                    s && p)
                        d[p] = "translate3d(" + f + "px, " + m + "px, 0)",
                        d[c] = 0,
                        d[h] = 0,
                        d.willChange = "transform";
                    else {
                        var v = "bottom" === c ? -1 : 1
                          , g = "right" === h ? -1 : 1;
                        d[c] = m * v,
                        d[h] = f * g,
                        d.willChange = c + ", " + h
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = E({}, y, e.attributes),
                    e.styles = E({}, d, e.styles),
                    e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, i;
                    return q(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    i = e.attributes,
                    Object.keys(i).forEach(function(e) {
                        !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, i, n, r) {
                    var a = D(r, t, e, i.positionFixed)
                      , s = M(i.placement, a, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    q(t, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }),
                    i
                },
                gpuAcceleration: void 0
            }
        }
    }
      , K = function() {
        function a(e, t) {
            var i = this
              , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = s(this.update.bind(this)),
            this.options = E({}, a.Defaults, n),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(E({}, a.Defaults.modifiers, n.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = E({}, a.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return E({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return d(a, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = M(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = _(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = I(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[L("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return H.call(this)
            }
        }]),
        a
    }();
    return K.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    K.placements = B,
    K.Defaults = U,
    K
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.Util = t(e.jQuery)
}(this, function(e) {
    "use strict";
    return function(n) {
        var t = "transitionend";
        function e(e) {
            var t = this
              , i = !1;
            return n(this).one(l.TRANSITION_END, function() {
                i = !0
            }),
            setTimeout(function() {
                i || l.triggerTransitionEnd(t)
            }, e),
            this
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()),
                document.getElementById(e); )
                    ;
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e)
                    return 0;
                var t = n(e).css("transition-duration");
                return parseFloat(t) ? (t = t.split(",")[0],
                1e3 * parseFloat(t)) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                n(e).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var r = i[n]
                          , a = t[n]
                          , s = a && l.isElement(a) ? "element" : (o = a,
                        {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s))
                            throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                var o
            }
        };
        return n.fn.emulateTransitionEnd = e,
        n.event.special[l.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(e) {
                if (n(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        },
        l
    }(e = e && e.hasOwnProperty("default") ? e.default : e)
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util.js"], t) : e.Dropdown = t(e.jQuery, e.Popper, e.Util)
}(this, function(e, a, s) {
    "use strict";
    function r(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function o(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, i, n;
                t = r,
                n = a[i = e],
                i in t ? Object.defineProperty(t, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = n
            })
        }
        return r
    }
    var u, l, c, h, t, i, p, f, m, v, g, y, b, w, x, E, n, T, C, S, k, M, D, P, A, _, O, I, d;
    return e = e && e.hasOwnProperty("default") ? e.default : e,
    a = a && a.hasOwnProperty("default") ? a.default : a,
    s = s && s.hasOwnProperty("default") ? s.default : s,
    l = "dropdown",
    h = "." + (c = "bs.dropdown"),
    t = ".data-api",
    i = (u = e).fn[l],
    p = new RegExp("38|40|27"),
    f = {
        HIDE: "hide" + h,
        HIDDEN: "hidden" + h,
        SHOW: "show" + h,
        SHOWN: "shown" + h,
        CLICK: "click" + h,
        CLICK_DATA_API: "click" + h + t,
        KEYDOWN_DATA_API: "keydown" + h + t,
        KEYUP_DATA_API: "keyup" + h + t
    },
    m = "disabled",
    v = "show",
    g = "dropup",
    y = "dropright",
    b = "dropleft",
    w = "dropdown-menu-right",
    x = "position-static",
    E = '[data-toggle="dropdown"]',
    n = ".dropdown form",
    T = ".dropdown-menu",
    C = ".navbar-nav",
    S = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    k = "top-start",
    M = "top-end",
    D = "bottom-start",
    P = "bottom-end",
    A = "right-start",
    _ = "left-start",
    O = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    },
    I = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    },
    d = function() {
        function d(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e, t, i, n = d.prototype;
        return n.toggle = function() {
            if (!this._element.disabled && !u(this._element).hasClass(m)) {
                var e = d._getParentFromElement(this._element)
                  , t = u(this._menu).hasClass(v);
                if (d._clearMenus(),
                !t) {
                    var i = {
                        relatedTarget: this._element
                    }
                      , n = u.Event(f.SHOW, i);
                    if (u(e).trigger(n),
                    !n.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === a)
                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : s.isElement(this._config.reference) && (r = this._config.reference,
                            void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && u(e).addClass(x),
                            this._popper = new a(r,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === u(e).closest(C).length && u(document.body).children().on("mouseover", null, u.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        u(this._menu).toggleClass(v),
                        u(e).toggleClass(v).trigger(u.Event(f.SHOWN, i))
                    }
                }
            }
        }
        ,
        n.dispose = function() {
            u.removeData(this._element, c),
            u(this._element).off(h),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        n.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n._addEventListeners = function() {
            var t = this;
            u(this._element).on(f.CLICK, function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            })
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, this.constructor.Default, u(this._element).data(), e),
            s.typeCheckConfig(l, e, this.constructor.DefaultType),
            e
        }
        ,
        n._getMenuElement = function() {
            if (!this._menu) {
                var e = d._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(T))
            }
            return this._menu
        }
        ,
        n._getPlacement = function() {
            var e = u(this._element.parentNode)
              , t = D;
            return e.hasClass(g) ? (t = k,
            u(this._menu).hasClass(w) && (t = M)) : e.hasClass(y) ? t = A : e.hasClass(b) ? t = _ : u(this._menu).hasClass(w) && (t = P),
            t
        }
        ,
        n._detectNavbar = function() {
            return 0 < u(this._element).closest(".navbar").length
        }
        ,
        n._getPopperConfig = function() {
            var t = this
              , e = {};
            "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}),
                e
            }
            : e.offset = this._config.offset;
            var i = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: e,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (i.modifiers.applyStyle = {
                enabled: !1
            }),
            i
        }
        ,
        d._jQueryInterface = function(t) {
            return this.each(function() {
                var e = u(this).data(c);
                if (e || (e = new d(this,"object" == typeof t ? t : null),
                u(this).data(c, e)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        d._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(E)), i = 0, n = t.length; i < n; i++) {
                    var r = d._getParentFromElement(t[i])
                      , a = u(t[i]).data(c)
                      , s = {
                        relatedTarget: t[i]
                    };
                    if (e && "click" === e.type && (s.clickEvent = e),
                    a) {
                        var o = a._menu;
                        if (u(r).hasClass(v) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.contains(r, e.target))) {
                            var l = u.Event(f.HIDE, s);
                            u(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && u(document.body).children().off("mouseover", null, u.noop),
                            t[i].setAttribute("aria-expanded", "false"),
                            u(o).removeClass(v),
                            u(r).removeClass(v).trigger(u.Event(f.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        d._getParentFromElement = function(e) {
            var t, i = s.getSelectorFromElement(e);
            return i && (t = document.querySelector(i)),
            t || e.parentNode
        }
        ,
        d._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u(e.target).closest(T).length)) : p.test(e.which)) && (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !u(this).hasClass(m))) {
                var t = d._getParentFromElement(this)
                  , i = u(t).hasClass(v);
                if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                    var n = [].slice.call(t.querySelectorAll(S));
                    if (0 !== n.length) {
                        var r = n.indexOf(e.target);
                        38 === e.which && 0 < r && r--,
                        40 === e.which && r < n.length - 1 && r++,
                        r < 0 && (r = 0),
                        n[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var a = t.querySelector(E);
                        u(a).trigger("focus")
                    }
                    u(this).trigger("click")
                }
            }
        }
        ,
        e = d,
        i = [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return O
            }
        }, {
            key: "DefaultType",
            get: function() {
                return I
            }
        }],
        (t = null) && r(e.prototype, t),
        i && r(e, i),
        d
    }(),
    u(document).on(f.KEYDOWN_DATA_API, E, d._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, T, d._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, d._clearMenus).on(f.CLICK_DATA_API, E, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        d._jQueryInterface.call(u(this), "toggle")
    }).on(f.CLICK_DATA_API, n, function(e) {
        e.stopPropagation()
    }),
    u.fn[l] = d._jQueryInterface,
    u.fn[l].Constructor = d,
    u.fn[l].noConflict = function() {
        return u.fn[l] = i,
        d._jQueryInterface
    }
    ,
    d
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : e.Collapse = t(e.jQuery, e.Util)
}(this, function(e, l) {
    "use strict";
    function r(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function a(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, i, n;
                t = r,
                n = a[i = e],
                i in t ? Object.defineProperty(t, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = n
            })
        }
        return r
    }
    var d, s, u, t, i, c, h, p, f, m, v, g, y, b, w, x, o;
    return e = e && e.hasOwnProperty("default") ? e.default : e,
    l = l && l.hasOwnProperty("default") ? l.default : l,
    s = "collapse",
    t = "." + (u = "bs.collapse"),
    i = (d = e).fn[s],
    c = {
        toggle: !0,
        parent: ""
    },
    h = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    p = {
        SHOW: "show" + t,
        SHOWN: "shown" + t,
        HIDE: "hide" + t,
        HIDDEN: "hidden" + t,
        CLICK_DATA_API: "click" + t + ".data-api"
    },
    f = "show",
    m = "collapse",
    v = "collapsing",
    g = "collapsed",
    y = "width",
    b = "height",
    w = ".show, .collapsing",
    x = '[data-toggle="collapse"]',
    o = function() {
        function o(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = d.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var i = [].slice.call(document.querySelectorAll(x)), n = 0, r = i.length; n < r; n++) {
                var a = i[n]
                  , s = l.getSelectorFromElement(a)
                  , o = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
                null !== s && 0 < o.length && (this._selector = s,
                this._triggerArray.push(a))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e, t, i, n = o.prototype;
        return n.toggle = function() {
            d(this._element).hasClass(f) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var e, t, i = this;
            if (!this._isTransitioning && !d(this._element).hasClass(f) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(w)).filter(function(e) {
                return e.getAttribute("data-parent") === i._config.parent
            })).length && (e = null),
            !(e && (t = d(e).not(this._selector).data(u)) && t._isTransitioning))) {
                var n = d.Event(p.SHOW);
                if (d(this._element).trigger(n),
                !n.isDefaultPrevented()) {
                    e && (o._jQueryInterface.call(d(e).not(this._selector), "hide"),
                    t || d(e).data(u, null));
                    var r = this._getDimension();
                    d(this._element).removeClass(m).addClass(v),
                    this._element.style[r] = 0,
                    this._triggerArray.length && d(this._triggerArray).removeClass(g).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var a = "scroll" + (r[0].toUpperCase() + r.slice(1))
                      , s = l.getTransitionDurationFromElement(this._element);
                    d(this._element).one(l.TRANSITION_END, function() {
                        d(i._element).removeClass(v).addClass(m).addClass(f),
                        i._element.style[r] = "",
                        i.setTransitioning(!1),
                        d(i._element).trigger(p.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[r] = this._element[a] + "px"
                }
            }
        }
        ,
        n.hide = function() {
            var e = this;
            if (!this._isTransitioning && d(this._element).hasClass(f)) {
                var t = d.Event(p.HIDE);
                if (d(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var i = this._getDimension();
                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                    l.reflow(this._element),
                    d(this._element).addClass(v).removeClass(m).removeClass(f);
                    var n = this._triggerArray.length;
                    if (0 < n)
                        for (var r = 0; r < n; r++) {
                            var a = this._triggerArray[r]
                              , s = l.getSelectorFromElement(a);
                            if (null !== s)
                                d([].slice.call(document.querySelectorAll(s))).hasClass(f) || d(a).addClass(g).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[i] = "";
                    var o = l.getTransitionDurationFromElement(this._element);
                    d(this._element).one(l.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        d(e._element).removeClass(v).addClass(m).trigger(p.HIDDEN)
                    }).emulateTransitionEnd(o)
                }
            }
        }
        ,
        n.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        n.dispose = function() {
            d.removeData(this._element, u),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(e) {
            return (e = a({}, c, e)).toggle = Boolean(e.toggle),
            l.typeCheckConfig(s, e, h),
            e
        }
        ,
        n._getDimension = function() {
            return d(this._element).hasClass(y) ? y : b
        }
        ,
        n._getParent = function() {
            var i = this
              , e = null;
            l.isElement(this._config.parent) ? (e = this._config.parent,
            void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , n = [].slice.call(e.querySelectorAll(t));
            return d(n).each(function(e, t) {
                i._addAriaAndCollapsedClass(o._getTargetFromElement(t), [t])
            }),
            e
        }
        ,
        n._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var i = d(e).hasClass(f);
                t.length && d(t).toggleClass(g, !i).attr("aria-expanded", i)
            }
        }
        ,
        o._getTargetFromElement = function(e) {
            var t = l.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        o._jQueryInterface = function(n) {
            return this.each(function() {
                var e = d(this)
                  , t = e.data(u)
                  , i = a({}, c, e.data(), "object" == typeof n && n ? n : {});
                if (!t && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
                t || (t = new o(this,i),
                e.data(u, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        e = o,
        i = [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return c
            }
        }],
        (t = null) && r(e.prototype, t),
        i && r(e, i),
        o
    }(),
    d(document).on(p.CLICK_DATA_API, x, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = d(this)
          , t = l.getSelectorFromElement(this)
          , n = [].slice.call(document.querySelectorAll(t));
        d(n).each(function() {
            var e = d(this)
              , t = e.data(u) ? "toggle" : i.data();
            o._jQueryInterface.call(e, t)
        })
    }),
    d.fn[s] = o._jQueryInterface,
    d.fn[s].Constructor = o,
    d.fn[s].noConflict = function() {
        return d.fn[s] = i,
        o._jQueryInterface
    }
    ,
    o
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : e.Modal = t(e.jQuery, e.Util)
}(this, function(e, s) {
    "use strict";
    function a(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function o(r) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, i, n;
                t = r,
                n = a[i = e],
                i in t ? Object.defineProperty(t, i, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = n
            })
        }
        return r
    }
    var l, d, u, c, t, h, p, f, m, v, g, y, b, w, i, x, E, T, C;
    return e = e && e.hasOwnProperty("default") ? e.default : e,
    s = s && s.hasOwnProperty("default") ? s.default : s,
    d = "modal",
    c = "." + (u = "bs.modal"),
    t = (l = e).fn[d],
    h = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    p = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    f = {
        HIDE: "hide" + c,
        HIDDEN: "hidden" + c,
        SHOW: "show" + c,
        SHOWN: "shown" + c,
        FOCUSIN: "focusin" + c,
        RESIZE: "resize" + c,
        CLICK_DISMISS: "click.dismiss" + c,
        KEYDOWN_DISMISS: "keydown.dismiss" + c,
        MOUSEUP_DISMISS: "mouseup.dismiss" + c,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    },
    m = "modal-scrollbar-measure",
    v = "modal-backdrop",
    g = "modal-open",
    y = "fade",
    b = "show",
    w = ".modal-dialog",
    i = '[data-toggle="modal"]',
    x = '[data-dismiss="modal"]',
    E = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    T = ".sticky-top",
    C = function() {
        function r(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(w),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._scrollbarWidth = 0
        }
        var e, t, i, n = r.prototype;
        return n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        n.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                l(this._element).hasClass(y) && (this._isTransitioning = !0);
                var i = l.Event(f.SHOW, {
                    relatedTarget: e
                });
                l(this._element).trigger(i),
                this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                l(document.body).addClass(g),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                l(this._element).on(f.CLICK_DISMISS, x, function(e) {
                    return t.hide(e)
                }),
                l(this._dialog).on(f.MOUSEDOWN_DISMISS, function() {
                    l(t._element).one(f.MOUSEUP_DISMISS, function(e) {
                        l(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        n.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var i = l.Event(f.HIDE);
                if (l(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var n = l(this._element).hasClass(y);
                    if (n && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    l(document).off(f.FOCUSIN),
                    l(this._element).removeClass(b),
                    l(this._element).off(f.CLICK_DISMISS),
                    l(this._dialog).off(f.MOUSEDOWN_DISMISS),
                    n) {
                        var r = s.getTransitionDurationFromElement(this._element);
                        l(this._element).one(s.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        n.dispose = function() {
            l.removeData(this._element, u),
            l(window, document, this._element, this._backdrop).off(c),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, h, e),
            s.typeCheckConfig(d, e, p),
            e
        }
        ,
        n._showElement = function(e) {
            var t = this
              , i = l(this._element).hasClass(y);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            i && s.reflow(this._element),
            l(this._element).addClass(b),
            this._config.focus && this._enforceFocus();
            var n = l.Event(f.SHOWN, {
                relatedTarget: e
            })
              , r = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                l(t._element).trigger(n)
            };
            if (i) {
                var a = s.getTransitionDurationFromElement(this._element);
                l(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
            } else
                r()
        }
        ,
        n._enforceFocus = function() {
            var t = this;
            l(document).off(f.FOCUSIN).on(f.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === l(t._element).has(e.target).length && t._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? l(this._element).on(f.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(),
                t.hide())
            }) : this._isShown || l(this._element).off(f.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var t = this;
            this._isShown ? l(window).on(f.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : l(window).off(f.RESIZE)
        }
        ,
        n._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                l(document.body).removeClass(g),
                e._resetAdjustments(),
                e._resetScrollbar(),
                l(e._element).trigger(f.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (l(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(e) {
            var t = this
              , i = l(this._element).hasClass(y) ? y : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = v,
                i && this._backdrop.classList.add(i),
                l(this._backdrop).appendTo(document.body),
                l(this._element).on(f.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                }),
                i && s.reflow(this._backdrop),
                l(this._backdrop).addClass(b),
                !e)
                    return;
                if (!i)
                    return void e();
                var n = s.getTransitionDurationFromElement(this._backdrop);
                l(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(n)
            } else if (!this._isShown && this._backdrop) {
                l(this._backdrop).removeClass(b);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (l(this._element).hasClass(y)) {
                    var a = s.getTransitionDurationFromElement(this._backdrop);
                    l(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r()
            } else
                e && e()
        }
        ,
        n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(E))
                  , t = [].slice.call(document.querySelectorAll(T));
                l(e).each(function(e, t) {
                    var i = t.style.paddingRight
                      , n = l(t).css("padding-right");
                    l(t).data("padding-right", i).css("padding-right", parseFloat(n) + r._scrollbarWidth + "px")
                }),
                l(t).each(function(e, t) {
                    var i = t.style.marginRight
                      , n = l(t).css("margin-right");
                    l(t).data("margin-right", i).css("margin-right", parseFloat(n) - r._scrollbarWidth + "px")
                });
                var i = document.body.style.paddingRight
                  , n = l(document.body).css("padding-right");
                l(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
            }
        }
        ,
        n._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(E));
            l(e).each(function(e, t) {
                var i = l(t).data("padding-right");
                l(t).removeData("padding-right"),
                t.style.paddingRight = i || ""
            });
            var t = [].slice.call(document.querySelectorAll("" + T));
            l(t).each(function(e, t) {
                var i = l(t).data("margin-right");
                void 0 !== i && l(t).css("margin-right", i).removeData("margin-right")
            });
            var i = l(document.body).data("padding-right");
            l(document.body).removeData("padding-right"),
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = m,
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        r._jQueryInterface = function(i, n) {
            return this.each(function() {
                var e = l(this).data(u)
                  , t = o({}, h, l(this).data(), "object" == typeof i && i ? i : {});
                if (e || (e = new r(this,t),
                l(this).data(u, e)),
                "string" == typeof i) {
                    if (void 0 === e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i](n)
                } else
                    t.show && e.show(n)
            })
        }
        ,
        e = r,
        i = [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return h
            }
        }],
        (t = null) && a(e.prototype, t),
        i && a(e, i),
        r
    }(),
    l(document).on(f.CLICK_DATA_API, i, function(e) {
        var t, i = this, n = s.getSelectorFromElement(this);
        n && (t = document.querySelector(n));
        var r = l(t).data(u) ? "toggle" : o({}, l(t).data(), l(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = l(t).one(f.SHOW, function(e) {
            e.isDefaultPrevented() || a.one(f.HIDDEN, function() {
                l(i).is(":visible") && i.focus()
            })
        });
        C._jQueryInterface.call(l(t), r, this)
    }),
    l.fn[d] = C._jQueryInterface,
    l.fn[d].Constructor = C,
    l.fn[d].noConflict = function() {
        return l.fn[d] = t,
        C._jQueryInterface
    }
    ,
    C
}),
function() {
    var n, t, i, l, r, a = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }, s = [].indexOf || function(e) {
        for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var i, n;
            for (i in t)
                n = t[i],
                null == e[i] && (e[i] = n);
            return e
        }
        ,
        e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        ,
        e.prototype.createEvent = function(e, t, i, n) {
            var r;
            return null == t && (t = !1),
            null == i && (i = !1),
            null == n && (n = null),
            null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, n) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e,
            r
        }
        ,
        e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }
        ,
        e.prototype.addEvent = function(e, t, i) {
            return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
        }
        ,
        e.prototype.removeEvent = function(e, t, i) {
            return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
        }
        ,
        e.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        e
    }(),
    i = this.WeakMap || this.MozWeakMap || (i = function() {
        function e() {
            this.keys = [],
            this.values = []
        }
        return e.prototype.get = function(e) {
            var t, i, n, r;
            for (t = i = 0,
            n = (r = this.keys).length; i < n; t = ++i)
                if (r[t] === e)
                    return this.values[t]
        }
        ,
        e.prototype.set = function(e, t) {
            var i, n, r, a;
            for (i = n = 0,
            r = (a = this.keys).length; n < r; i = ++n)
                if (a[i] === e)
                    return void (this.values[i] = t);
            return this.keys.push(e),
            this.values.push(t)
        }
        ,
        e
    }()),
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0,
        e.prototype.observe = function() {}
        ,
        e
    }()),
    l = this.getComputedStyle || function(i, e) {
        return this.getPropertyValue = function(e) {
            var t;
            return "float" === e && (e = "styleFloat"),
            r.test(e) && e.replace(r, function(e, t) {
                return t.toUpperCase()
            }),
            (null != (t = i.currentStyle) ? t[e] : void 0) || null
        }
        ,
        this
    }
    ,
    r = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(e) {
            null == e && (e = {}),
            this.scrollCallback = a(this.scrollCallback, this),
            this.scrollHandler = a(this.scrollHandler, this),
            this.resetAnimation = a(this.resetAnimation, this),
            this.start = a(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(e, this.defaults),
            this.animationNameCache = new i,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        },
        e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var r, e, t, i, s;
            if (this.stopped = !1,
            this.boxes = function() {
                var e, t, i, n;
                for (n = [],
                e = 0,
                t = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; e < t; e++)
                    r = i[e],
                    n.push(r);
                return n
            }
            .call(this),
            this.all = function() {
                var e, t, i, n;
                for (n = [],
                e = 0,
                t = (i = this.boxes).length; e < t; e++)
                    r = i[e],
                    n.push(r);
                return n
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = 0,
                    t = (i = this.boxes).length; e < t; e++)
                        r = i[e],
                        this.applyStyle(r, !0);
            if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live)
                return new n((s = this,
                function(e) {
                    var t, i, r, a, n;
                    for (n = [],
                    t = 0,
                    i = e.length; t < i; t++)
                        a = e[t],
                        n.push(function() {
                            var e, t, i, n;
                            for (n = [],
                            e = 0,
                            t = (i = a.addedNodes || []).length; e < t; e++)
                                r = i[e],
                                n.push(this.doSync(r));
                            return n
                        }
                        .call(s));
                    return n
                }
                )).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
        }
        ,
        e.prototype.stop = function() {
            if (this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval)
                return clearInterval(this.interval)
        }
        ,
        e.prototype.sync = function(e) {
            if (n.notSupported)
                return this.doSync(this.element)
        }
        ,
        e.prototype.doSync = function(e) {
            var t, i, n, r, a;
            if (null == e && (e = this.element),
            1 === e.nodeType) {
                for (a = [],
                i = 0,
                n = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; i < n; i++)
                    t = r[i],
                    s.call(this.all, t) < 0 ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                    a.push(this.scrolled = !0)) : a.push(void 0);
                return a
            }
        }
        ,
        e.prototype.show = function(e) {
            return this.applyStyle(e),
            e.className = e.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(e),
            this.util().emitEvent(e, this.wowEvent),
            this.util().addEvent(e, "animationend", this.resetAnimation),
            this.util().addEvent(e, "oanimationend", this.resetAnimation),
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
        }
        ,
        e.prototype.applyStyle = function(e, t) {
            var i, n, r, a;
            return n = e.getAttribute("data-wow-duration"),
            i = e.getAttribute("data-wow-delay"),
            r = e.getAttribute("data-wow-iteration"),
            this.animate((a = this,
            function() {
                return a.customStyle(e, t, n, i, r)
            }
            ))
        }
        ,
        e.prototype.animate = "requestAnimationFrame"in window ? function(e) {
            return window.requestAnimationFrame(e)
        }
        : function(e) {
            return e()
        }
        ,
        e.prototype.resetStyle = function() {
            var e, t, i, n, r;
            for (r = [],
            t = 0,
            i = (n = this.boxes).length; t < i; t++)
                e = n[t],
                r.push(e.style.visibility = "visible");
            return r
        }
        ,
        e.prototype.resetAnimation = function(e) {
            var t;
            if (0 <= e.type.toLowerCase().indexOf("animationend"))
                return (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim()
        }
        ,
        e.prototype.customStyle = function(e, t, i, n, r) {
            return t && this.cacheAnimationName(e),
            e.style.visibility = t ? "hidden" : "visible",
            i && this.vendorSet(e.style, {
                animationDuration: i
            }),
            n && this.vendorSet(e.style, {
                animationDelay: n
            }),
            r && this.vendorSet(e.style, {
                animationIterationCount: r
            }),
            this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }),
            e
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(r, e) {
            var a, t, s, o;
            for (a in t = [],
            e)
                s = e[a],
                r["" + a] = s,
                t.push(function() {
                    var e, t, i, n;
                    for (n = [],
                    e = 0,
                    t = (i = this.vendors).length; e < t; e++)
                        o = i[e],
                        n.push(r["" + o + a.charAt(0).toUpperCase() + a.substr(1)] = s);
                    return n
                }
                .call(this));
            return t
        }
        ,
        e.prototype.vendorCSS = function(e, t) {
            var i, n, r, a, s, o;
            for (a = (s = l(e)).getPropertyCSSValue(t),
            i = 0,
            n = (r = this.vendors).length; i < n; i++)
                o = r[i],
                a = a || s.getPropertyCSSValue("-" + o + "-" + t);
            return a
        }
        ,
        e.prototype.animationName = function(t) {
            var i;
            try {
                i = this.vendorCSS(t, "animation-name").cssText
            } catch (e) {
                i = l(t).getPropertyValue("animation-name")
            }
            return "none" === i ? "" : i
        }
        ,
        e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }
        ,
        e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var r;
            if (this.scrolled && (this.scrolled = !1,
            this.boxes = function() {
                var e, t, i, n;
                for (n = [],
                e = 0,
                t = (i = this.boxes).length; e < t; e++)
                    (r = i[e]) && (this.isVisible(r) ? this.show(r) : n.push(r));
                return n
            }
            .call(this),
            !this.boxes.length && !this.config.live))
                return this.stop()
        }
        ,
        e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop; )
                e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent; )
                t += e.offsetTop;
            return t
        }
        ,
        e.prototype.isVisible = function(e) {
            var t, i, n, r, a;
            return i = e.getAttribute("data-wow-offset") || this.config.offset,
            r = (a = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i,
            t = (n = this.offsetTop(e)) + e.clientHeight,
            n <= r && a <= t
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
.call(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.CountUp = t()
}(this, function(e, t, i) {
    return function(e, t, i, n, r, a) {
        function s(e) {
            return "number" == typeof e && !isNaN(e)
        }
        var l = this;
        if (l.version = function() {
            return "1.9.3"
        }
        ,
        l.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: function(e, t, i, n) {
                return i * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + t
            },
            formattingFn: function(e) {
                var t, i, n, r, a, s, o = e < 0;
                if (e = Math.abs(e).toFixed(l.decimals),
                i = (t = (e += "").split("."))[0],
                n = 1 < t.length ? l.options.decimal + t[1] : "",
                l.options.useGrouping) {
                    for (r = "",
                    a = 0,
                    s = i.length; a < s; ++a)
                        0 !== a && a % 3 == 0 && (r = l.options.separator + r),
                        r = i[s - a - 1] + r;
                    i = r
                }
                return l.options.numerals.length && (i = i.replace(/[0-9]/g, function(e) {
                    return l.options.numerals[+e]
                }),
                n = n.replace(/[0-9]/g, function(e) {
                    return l.options.numerals[+e]
                })),
                (o ? "-" : "") + l.options.prefix + i + n + l.options.suffix
            },
            prefix: "",
            suffix: "",
            numerals: []
        },
        a && "object" == typeof a)
            for (var o in l.options)
                a.hasOwnProperty(o) && null !== a[o] && (l.options[o] = a[o]);
        "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
        for (var d = 0, u = ["webkit", "moz", "ms", "o"], c = 0; c < u.length && !window.requestAnimationFrame; ++c)
            window.requestAnimationFrame = window[u[c] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[u[c] + "CancelAnimationFrame"] || window[u[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - d))
              , r = window.setTimeout(function() {
                e(i + n)
            }, n);
            return d = i + n,
            r
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        ),
        l.initialize = function() {
            return !(!l.initialized && (l.error = "",
            l.d = "string" == typeof e ? document.getElementById(e) : e,
            l.d ? (l.startVal = Number(t),
            l.endVal = Number(i),
            s(l.startVal) && s(l.endVal) ? (l.decimals = Math.max(0, n || 0),
            l.dec = Math.pow(10, l.decimals),
            l.duration = 1e3 * Number(r) || 2e3,
            l.countDown = l.startVal > l.endVal,
            l.frameVal = l.startVal,
            l.initialized = !0,
            0) : (l.error = "[CountUp] startVal (" + t + ") or endVal (" + i + ") is not a number",
            1)) : l.error = "[CountUp] target is null or undefined"))
        }
        ,
        l.printValue = function(e) {
            var t = l.options.formattingFn(e);
            "INPUT" === l.d.tagName ? this.d.value = t : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
        }
        ,
        l.count = function(e) {
            l.startTime || (l.startTime = e);
            var t = (l.timestamp = e) - l.startTime;
            l.remaining = l.duration - t,
            l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(t, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(t, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (t / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (t / l.duration),
            l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal,
            l.frameVal = Math.round(l.frameVal * l.dec) / l.dec,
            l.printValue(l.frameVal),
            t < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
        }
        ,
        l.start = function(e) {
            l.initialize() && (l.callback = e,
            l.rAF = requestAnimationFrame(l.count))
        }
        ,
        l.pauseResume = function() {
            l.paused ? (l.paused = !1,
            delete l.startTime,
            l.duration = l.remaining,
            l.startVal = l.frameVal,
            requestAnimationFrame(l.count)) : (l.paused = !0,
            cancelAnimationFrame(l.rAF))
        }
        ,
        l.reset = function() {
            l.paused = !1,
            delete l.startTime,
            l.initialized = !1,
            l.initialize() && (cancelAnimationFrame(l.rAF),
            l.printValue(l.startVal))
        }
        ,
        l.update = function(e) {
            if (l.initialize()) {
                if (!s(e = Number(e)))
                    return void (l.error = "[CountUp] update() - new endVal is not a number: " + e);
                l.error = "",
                e !== l.frameVal && (cancelAnimationFrame(l.rAF),
                l.paused = !1,
                delete l.startTime,
                l.startVal = l.frameVal,
                l.endVal = e,
                l.countDown = l.startVal > l.endVal,
                l.rAF = requestAnimationFrame(l.count))
            }
        }
        ,
        l.initialize() && l.printValue(l.startVal)
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var m = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , F = "undefined" == typeof window ? {
        document: m,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function _(e, t) {
        var i = []
          , n = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var r, a, s = e.trim();
                if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
                    var o = "div";
                    for (0 === s.indexOf("<li") && (o = "ul"),
                    0 === s.indexOf("<tr") && (o = "tbody"),
                    0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"),
                    0 === s.indexOf("<tbody") && (o = "table"),
                    0 === s.indexOf("<option") && (o = "select"),
                    (a = m.createElement(o)).innerHTML = s,
                    n = 0; n < a.childNodes.length; n += 1)
                        i.push(a.childNodes[n])
                } else
                    for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])],
                    n = 0; n < r.length; n += 1)
                        r[n] && i.push(r[n])
            } else if (e.nodeType || e === F || e === m)
                i.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (n = 0; n < e.length; n += 1)
                    i.push(e[n]);
        return new l(i)
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    _.fn = l.prototype,
    _.Class = l,
    _.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1)
                    void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1)
                    void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1)
                    void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length)
                    this[n].setAttribute(e, t);
                else
                    for (var r in e)
                        this[n][r] = e[r],
                        this[n].setAttribute(r, e[r]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1)
                    (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var r = i.getAttribute("data-" + e);
                return r || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var n = t[0]
              , a = t[1]
              , s = t[2]
              , r = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    _(t).is(a))
                        s.apply(t, i);
                    else
                        for (var n = _(t).parents(), r = 0; r < n.length; r += 1)
                            _(n[r]).is(a) && s.apply(n[r], i)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                s.apply(this, t)
            }
            "function" == typeof t[1] && (n = (e = t)[0],
            s = e[1],
            r = e[2],
            a = void 0),
            r || (r = !1);
            for (var d, u = n.split(" "), c = 0; c < this.length; c += 1) {
                var h = this[c];
                if (a)
                    for (d = 0; d < u.length; d += 1) {
                        var p = u[d];
                        h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                        h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []),
                        h.dom7LiveListeners[p].push({
                            listener: s,
                            proxyListener: o
                        }),
                        h.addEventListener(p, o, r)
                    }
                else
                    for (d = 0; d < u.length; d += 1) {
                        var f = u[d];
                        h.dom7Listeners || (h.dom7Listeners = {}),
                        h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
                        h.dom7Listeners[f].push({
                            listener: s,
                            proxyListener: l
                        }),
                        h.addEventListener(f, l, r)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var n = t[0]
              , r = t[1]
              , a = t[2]
              , s = t[3];
            "function" == typeof t[1] && (n = (e = t)[0],
            a = e[1],
            s = e[2],
            r = void 0),
            s || (s = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], u = 0; u < this.length; u += 1) {
                    var c = this[u]
                      , h = void 0;
                    if (!r && c.dom7Listeners ? h = c.dom7Listeners[d] : r && c.dom7LiveListeners && (h = c.dom7LiveListeners[d]),
                    h && h.length)
                        for (var p = h.length - 1; 0 <= p; p -= 1) {
                            var f = h[p];
                            a && f.listener === a ? (c.removeEventListener(d, f.proxyListener, s),
                            h.splice(p, 1)) : a || (c.removeEventListener(d, f.proxyListener, s),
                            h.splice(p, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = e[0].split(" "), n = e[1], r = 0; r < i.length; r += 1)
                for (var a = i[r], s = 0; s < this.length; s += 1) {
                    var o = this[s]
                      , l = void 0;
                    try {
                        l = new F.CustomEvent(a,{
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = m.createEvent("Event")).initEvent(a, !0, !0),
                        l.detail = n
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                    o.dispatchEvent(l),
                    o.dom7EventData = [],
                    delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var i, n = ["webkitTransitionEnd", "transitionend"], r = this;
            function a(e) {
                if (e.target === this)
                    for (t.call(this, e),
                    i = 0; i < n.length; i += 1)
                        r.off(n[i], a)
            }
            if (t)
                for (i = 0; i < n.length; i += 1)
                    r.on(n[i], a);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , i = m.body
                  , n = e.clientTop || i.clientTop || 0
                  , r = e.clientLeft || i.clientLeft || 0
                  , a = e === F ? F.scrollY : e.scrollTop
                  , s = e === F ? F.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - n,
                    left: t.left + s - r
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var n in e)
                            this[i].style[n] = e[n];
                    return this
                }
                if (this[0])
                    return F.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (i = 0; i < this.length; i += 1)
                this[i].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, i, n = this[0];
            if (!n || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (n.matches)
                    return n.matches(e);
                if (n.webkitMatchesSelector)
                    return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector)
                    return n.msMatchesSelector(e);
                for (t = _(e),
                i = 0; i < t.length; i += 1)
                    if (t[i] === n)
                        return !0;
                return !1
            }
            if (e === m)
                return n === m;
            if (e === F)
                return n === F;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                i = 0; i < t.length; i += 1)
                    if (t[i] === n)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, i = this.length;
            return new l(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            for (var n = 0; n < t.length; n += 1) {
                e = t[n];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof e) {
                        var a = m.createElement("div");
                        for (a.innerHTML = e; a.firstChild; )
                            this[r].appendChild(a.firstChild)
                    } else if (e instanceof l)
                        for (var s = 0; s < e.length; s += 1)
                            this[r].appendChild(e[s]);
                    else
                        this[r].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var n = m.createElement("div");
                    for (n.innerHTML = e,
                    i = n.childNodes.length - 1; 0 <= i; i -= 1)
                        this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof l)
                    for (i = 0; i < e.length; i += 1)
                        this[t].insertBefore(e[i], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && _(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new l([]);
            for (; i.nextElementSibling; ) {
                var n = i.nextElementSibling;
                e ? _(n).is(e) && t.push(n) : t.push(n),
                i = n
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && _(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new l([]);
            for (; i.previousElementSibling; ) {
                var n = i.previousElementSibling;
                e ? _(n).is(e) && t.push(n) : t.push(n),
                i = n
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? _(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return _(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].parentNode; n; )
                    e ? _(n).is(e) && t.push(n) : t.push(n),
                    n = n.parentNode;
            return _(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1)
                    t.push(n[r]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].childNodes, r = 0; r < n.length; r += 1)
                    e ? 1 === n[r].nodeType && _(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r]);
            return new l(a(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, n;
            for (i = 0; i < e.length; i += 1) {
                var r = _(e[i]);
                for (n = 0; n < r.length; n += 1)
                    this[this.length] = r[n],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? F.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        _.fn[e] = t[e]
    });
    var e, i, n, B = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var i, n, r;
            void 0 === t && (t = "x");
            var a = F.getComputedStyle(e, null);
            return F.WebKitCSSMatrix ? (6 < (n = a.transform || a.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            r = new F.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (n = F.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (n = F.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            n || 0
        },
        parseUrlQuery: function(e) {
            var t, i, n, r, a = {}, s = e || F.location.href;
            if ("string" == typeof s && s.length)
                for (r = (i = (s = -1 < s.indexOf("?") ? s.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                t = 0; t < r; t += 1)
                    n = i[t].replace(/#\S+/g, "").split("="),
                    a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
            return a
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                var r = e[n];
                if (null != r)
                    for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                        var l = a[s]
                          , d = Object.getOwnPropertyDescriptor(r, l);
                        void 0 !== d && d.enumerable && (B.isObject(i[l]) && B.isObject(r[l]) ? B.extend(i[l], r[l]) : !B.isObject(i[l]) && B.isObject(r[l]) ? (i[l] = {},
                        B.extend(i[l], r[l])) : i[l] = r[l])
                    }
            }
            return i
        }
    }, W = (n = m.createElement("div"),
    {
        touch: F.Modernizr && !0 === F.Modernizr.touch || !!("ontouchstart"in F || F.DocumentTouch && m instanceof F.DocumentTouch),
        pointerEvents: !!(F.navigator.pointerEnabled || F.PointerEvent || "maxTouchPoints"in F.navigator),
        prefixedPointerEvents: !!F.navigator.msPointerEnabled,
        transition: (i = n.style,
        "transition"in i || "webkitTransition"in i || "MozTransition"in i),
        transforms3d: F.Modernizr && !0 === F.Modernizr.csstransforms3d || (e = n.style,
        "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e),
        flexbox: function() {
            for (var e = n.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                if (t[i]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in F || "WebkitMutationObserver"in F,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                F.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in F
    }), r = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, s = {
        components: {
            configurable: !0
        }
    };
    r.prototype.on = function(e, t, i) {
        var n = this;
        if ("function" != typeof t)
            return n;
        var r = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
            n.eventsListeners[e][r](t)
        }),
        n
    }
    ,
    r.prototype.once = function(n, r, e) {
        var a = this;
        if ("function" != typeof r)
            return a;
        return a.on(n, function e() {
            for (var t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            r.apply(a, t),
            a.off(n, e)
        }, e)
    }
    ,
    r.prototype.off = function(e, n) {
        var r = this;
        return r.eventsListeners && e.split(" ").forEach(function(i) {
            void 0 === n ? r.eventsListeners[i] = [] : r.eventsListeners[i] && r.eventsListeners[i].length && r.eventsListeners[i].forEach(function(e, t) {
                e === n && r.eventsListeners[i].splice(t, 1)
            })
        }),
        r
    }
    ,
    r.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, n, r, a = this;
        return a.eventsListeners && (r = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        n = e.slice(1, e.length),
        a) : (i = e[0].events,
        n = e[0].data,
        e[0].context || a),
        (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(r, n)
                })
            }
        })),
        a
    }
    ,
    r.prototype.useModulesParams = function(i) {
        var n = this;
        n.modules && Object.keys(n.modules).forEach(function(e) {
            var t = n.modules[e];
            t.params && B.extend(i, t.params)
        })
    }
    ,
    r.prototype.useModules = function(n) {
        void 0 === n && (n = {});
        var r = this;
        r.modules && Object.keys(r.modules).forEach(function(e) {
            var i = r.modules[e]
              , t = n[e] || {};
            i.instance && Object.keys(i.instance).forEach(function(e) {
                var t = i.instance[e];
                r[e] = "function" == typeof t ? t.bind(r) : t
            }),
            i.on && r.on && Object.keys(i.on).forEach(function(e) {
                r.on(e, i.on[e])
            }),
            i.create && i.create.bind(r)(t)
        })
    }
    ,
    s.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    r.installModule = function(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--; )
            e[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = t.name || Object.keys(n.prototype.modules).length + "_" + B.now();
        return (n.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function(e) {
            n.prototype[e] = t.proto[e]
        }),
        t.static && Object.keys(t.static).forEach(function(e) {
            n[e] = t.static[e]
        }),
        t.install && t.install.apply(n, e),
        n
    }
    ,
    r.use = function(e) {
        for (var t = [], i = arguments.length - 1; 0 < i--; )
            t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return n.installModule(e)
        }),
        n) : n.installModule.apply(n, [e].concat(t))
    }
    ,
    Object.defineProperties(r, s);
    var o = {
        updateSize: function() {
            var e, t, i = this, n = i.$el;
            e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth,
            t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight,
            0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10),
            t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10),
            B.extend(i, {
                width: e,
                height: t,
                size: i.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this
              , t = e.params
              , i = e.$wrapperEl
              , n = e.size
              , r = e.rtlTranslate
              , a = e.wrongRTL
              , s = e.virtual && t.virtual.enabled
              , o = s ? e.virtual.slides.length : e.slides.length
              , l = i.children("." + e.params.slideClass)
              , d = s ? e.virtual.slides.length : l.length
              , u = []
              , c = []
              , h = []
              , p = t.slidesOffsetBefore;
            "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
            var f = t.slidesOffsetAfter;
            "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
            var m = e.snapGrid.length
              , v = e.snapGrid.length
              , g = t.spaceBetween
              , y = -p
              , b = 0
              , w = 0;
            if (void 0 !== n) {
                var x, E;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * n),
                e.virtualSize = -g,
                r ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var T, C = t.slidesPerColumn, S = x / C, k = S - (t.slidesPerColumn * S - d), M = 0; M < d; M += 1) {
                    E = 0;
                    var D = l.eq(M);
                    if (1 < t.slidesPerColumn) {
                        var P = void 0
                          , A = void 0
                          , _ = void 0;
                        "column" === t.slidesPerColumnFill ? (_ = M - (A = Math.floor(M / C)) * C,
                        (k < A || A === k && _ === C - 1) && C <= (_ += 1) && (_ = 0,
                        A += 1),
                        P = A + _ * x / C,
                        D.css({
                            "-webkit-box-ordinal-group": P,
                            "-moz-box-ordinal-group": P,
                            "-ms-flex-order": P,
                            "-webkit-order": P,
                            order: P
                        })) : A = M - (_ = Math.floor(M / S)) * S,
                        D.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== _ && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", _)
                    }
                    if ("none" !== D.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var O = F.getComputedStyle(D[0], null)
                              , I = D[0].style.transform
                              , N = D[0].style.webkitTransform;
                            I && (D[0].style.transform = "none"),
                            N && (D[0].style.webkitTransform = "none"),
                            E = t.roundLengths ? e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0) : e.isHorizontal() ? parseFloat(O.getPropertyValue("width")) + parseFloat(O.getPropertyValue("margin-left")) + parseFloat(O.getPropertyValue("margin-right")) : parseFloat(O.getPropertyValue("height")) + parseFloat(O.getPropertyValue("margin-top")) + parseFloat(O.getPropertyValue("margin-bottom")),
                            I && (D[0].style.transform = I),
                            N && (D[0].style.webkitTransform = N),
                            t.roundLengths && (E = Math.floor(E))
                        } else
                            E = (n - (t.slidesPerView - 1) * g) / t.slidesPerView,
                            t.roundLengths && (E = Math.floor(E)),
                            l[M] && (e.isHorizontal() ? l[M].style.width = E + "px" : l[M].style.height = E + "px");
                        l[M] && (l[M].swiperSlideSize = E),
                        h.push(E),
                        t.centeredSlides ? (y = y + E / 2 + b / 2 + g,
                        0 === b && 0 !== M && (y = y - n / 2 - g),
                        0 === M && (y = y - n / 2 - g),
                        Math.abs(y) < .001 && (y = 0),
                        t.roundLengths && (y = Math.floor(y)),
                        w % t.slidesPerGroup == 0 && u.push(y),
                        c.push(y)) : (t.roundLengths && (y = Math.floor(y)),
                        w % t.slidesPerGroup == 0 && u.push(y),
                        c.push(y),
                        y = y + E + g),
                        e.virtualSize += E + g,
                        b = E,
                        w += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, n) + f,
                r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                W.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    T = [];
                    for (var L = 0; L < u.length; L += 1) {
                        var $ = u[L];
                        t.roundLengths && ($ = Math.floor($)),
                        u[L] < e.virtualSize + u[0] && T.push($)
                    }
                    u = T
                }
                if (!t.centeredSlides) {
                    T = [];
                    for (var z = 0; z < u.length; z += 1) {
                        var H = u[z];
                        t.roundLengths && (H = Math.floor(H)),
                        u[z] <= e.virtualSize - n && T.push(H)
                    }
                    u = T,
                    1 < Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - n)
                }
                if (0 === u.length && (u = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({
                    marginLeft: g + "px"
                }) : l.css({
                    marginRight: g + "px"
                }) : l.css({
                    marginBottom: g + "px"
                })),
                t.centerInsufficientSlides) {
                    var j = 0;
                    if (h.forEach(function(e) {
                        j += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }),
                    (j -= t.spaceBetween) < n) {
                        var q = (n - j) / 2;
                        u.forEach(function(e, t) {
                            u[t] = e - q
                        }),
                        c.forEach(function(e, t) {
                            c[t] = e + q
                        })
                    }
                }
                B.extend(e, {
                    slides: l,
                    snapGrid: u,
                    slidesGrid: c,
                    slidesSizesGrid: h
                }),
                d !== o && e.emit("slidesLengthChange"),
                u.length !== m && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                c.length !== v && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = this, n = [], r = 0;
            if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed),
            "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    var a = i.activeIndex + t;
                    if (a > i.slides.length)
                        break;
                    n.push(i.slides.eq(a)[0])
                }
            else
                n.push(i.slides.eq(i.activeIndex)[0]);
            for (t = 0; t < n.length; t += 1)
                if (void 0 !== n[t]) {
                    var s = n[t].offsetHeight;
                    r = r < s ? s : r
                }
            r && i.$wrapperEl.css("height", r + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , i = t.params
              , n = t.slides
              , r = t.rtlTranslate;
            if (0 !== n.length) {
                void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                var a = -e;
                r && (a = e),
                n.removeClass(i.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (var s = 0; s < n.length; s += 1) {
                    var o = n[s]
                      , l = (a + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                    if (i.watchSlidesVisibility) {
                        var d = -(a - o.swiperSlideOffset)
                          , u = d + t.slidesSizesGrid[s];
                        (0 <= d && d < t.size || 0 < u && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(s),
                        n.eq(s).addClass(i.slideVisibleClass))
                    }
                    o.progress = r ? -l : l
                }
                t.visibleSlides = _(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , i = t.params
              , n = t.maxTranslate() - t.minTranslate()
              , r = t.progress
              , a = t.isBeginning
              , s = t.isEnd
              , o = a
              , l = s;
            s = 0 === n ? a = !(r = 0) : (a = (r = (e - t.minTranslate()) / n) <= 0,
            1 <= r),
            B.extend(t, {
                progress: r,
                isBeginning: a,
                isEnd: s
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e),
            a && !o && t.emit("reachBeginning toEdge"),
            s && !l && t.emit("reachEnd toEdge"),
            (o && !a || l && !s) && t.emit("fromEdge"),
            t.emit("progress", r)
        },
        updateSlidesClasses: function() {
            var e, t = this, i = t.slides, n = t.params, r = t.$wrapperEl, a = t.activeIndex, s = t.realIndex, o = t.virtual && n.virtual.enabled;
            i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass),
            (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(n.slideActiveClass),
            n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
            var l = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
            var d = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === d.length && (d = i.eq(-1)).addClass(n.slidePrevClass),
            n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass),
            d.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this, n = i.rtlTranslate ? i.translate : -i.translate, r = i.slidesGrid, a = i.snapGrid, s = i.params, o = i.activeIndex, l = i.realIndex, d = i.snapIndex, u = e;
            if (void 0 === u) {
                for (var c = 0; c < r.length; c += 1)
                    void 0 !== r[c + 1] ? n >= r[c] && n < r[c + 1] - (r[c + 1] - r[c]) / 2 ? u = c : n >= r[c] && n < r[c + 1] && (u = c + 1) : n >= r[c] && (u = c);
                s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(u / s.slidesPerGroup)) >= a.length && (t = a.length - 1),
            u !== o) {
                var h = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                B.extend(i, {
                    snapIndex: t,
                    realIndex: h,
                    previousIndex: o,
                    activeIndex: u
                }),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                l !== h && i.emit("realIndexChange"),
                i.emit("slideChange")
            } else
                t !== d && (i.snapIndex = t,
                i.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
              , i = t.params
              , n = _(e.target).closest("." + i.slideClass)[0]
              , r = !1;
            if (n)
                for (var a = 0; a < t.slides.length; a += 1)
                    t.slides[a] === n && (r = !0);
            if (!n || !r)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = n,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(_(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = _(n).index(),
            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , n = this.translate
              , r = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -n : n;
            var a = B.getTranslate(r[0], e);
            return i && (a = -a),
            a || 0
        },
        setTranslate: function(e, t) {
            var i = this
              , n = i.rtlTranslate
              , r = i.params
              , a = i.$wrapperEl
              , s = i.progress
              , o = 0
              , l = 0;
            i.isHorizontal() ? o = n ? -e : e : l = e,
            r.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            r.virtualTranslate || (W.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")),
            i.previousTranslate = i.translate,
            i.translate = i.isHorizontal() ? o : l;
            var d = i.maxTranslate() - i.minTranslate();
            (0 === d ? 0 : (e - i.minTranslate()) / d) !== s && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var u = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , n = this.params
              , r = this.previousIndex;
            n.autoHeight && this.updateAutoHeight();
            var a = t;
            if (a || (a = r < i ? "next" : i < r ? "prev" : "reset"),
            this.emit("transitionStart"),
            e && i !== r) {
                if ("reset" === a)
                    return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"),
                "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , n = this.previousIndex;
            this.animating = !1,
            this.setTransition(0);
            var r = t;
            if (r || (r = n < i ? "next" : i < n ? "prev" : "reset"),
            this.emit("transitionEnd"),
            e && i !== n) {
                if ("reset" === r)
                    return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"),
                "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function(e, t, i, n) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = this
              , a = e;
            a < 0 && (a = 0);
            var s = r.params
              , o = r.snapGrid
              , l = r.slidesGrid
              , d = r.previousIndex
              , u = r.activeIndex
              , c = r.rtlTranslate;
            if (r.animating && s.preventInteractionOnTransition)
                return !1;
            var h = Math.floor(a / s.slidesPerGroup);
            h >= o.length && (h = o.length - 1),
            (u || s.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
            var p, f = -o[h];
            if (r.updateProgress(f),
            s.normalizeSlideIndex)
                for (var m = 0; m < l.length; m += 1)
                    -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
            if (r.initialized && a !== u) {
                if (!r.allowSlideNext && f < r.translate && f < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== a)
                    return !1
            }
            return p = u < a ? "next" : a < u ? "prev" : "reset",
            c && -f === r.translate || !c && f === r.translate ? (r.updateActiveIndex(a),
            s.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== s.effect && r.setTranslate(f),
            "reset" !== p && (r.transitionStart(i, p),
            r.transitionEnd(i, p)),
            !1) : (0 !== t && W.transition ? (r.setTransition(t),
            r.setTranslate(f),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, n),
            r.transitionStart(i, p),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, p))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0),
            r.setTranslate(f),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, n),
            r.transitionStart(i, p),
            r.transitionEnd(i, p)),
            !0)
        },
        slideToLoop: function(e, t, i, n) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = e;
            return this.params.loop && (r += this.loopedSlides),
            this.slideTo(r, t, i, n)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var n = this.params
              , r = this.animating;
            return n.loop ? !r && (this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft,
            this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var n = this
              , r = n.params
              , a = n.animating
              , s = n.snapGrid
              , o = n.slidesGrid
              , l = n.rtlTranslate;
            if (r.loop) {
                if (a)
                    return !1;
                n.loopFix(),
                n._clientLeft = n.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var u, c = d(l ? n.translate : -n.translate), h = s.map(function(e) {
                return d(e)
            }), p = (o.map(function(e) {
                return d(e)
            }),
            s[h.indexOf(c)],
            s[h.indexOf(c) - 1]);
            return void 0 !== p && (u = o.indexOf(p)) < 0 && (u = n.activeIndex - 1),
            n.slideTo(u, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var n = this
              , r = n.activeIndex
              , a = Math.floor(r / n.params.slidesPerGroup);
            if (a < n.snapGrid.length - 1) {
                var s = n.rtlTranslate ? n.translate : -n.translate
                  , o = n.snapGrid[a];
                (n.snapGrid[a + 1] - o) / 2 < s - o && (r = n.params.slidesPerGroup)
            }
            return n.slideTo(r, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, n = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(_(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                B.nextTick(function() {
                    t.slideTo(a)
                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(),
                a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                B.nextTick(function() {
                    t.slideTo(a)
                })) : t.slideTo(a)
            } else
                t.slideTo(a)
        }
    };
    var h = {
        loopCreate: function() {
            var n = this
              , e = n.params
              , t = n.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var r = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var i = e.slidesPerGroup - r.length % e.slidesPerGroup;
                if (i !== e.slidesPerGroup) {
                    for (var a = 0; a < i; a += 1) {
                        var s = _(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(s)
                    }
                    r = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length),
            n.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
            n.loopedSlides += e.loopAdditionalSlides,
            n.loopedSlides > r.length && (n.loopedSlides = r.length);
            var o = []
              , l = [];
            r.each(function(e, t) {
                var i = _(t);
                e < n.loopedSlides && l.push(t),
                e < r.length && e >= r.length - n.loopedSlides && o.push(t),
                i.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(_(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var u = o.length - 1; 0 <= u; u -= 1)
                t.prepend(_(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, i = t.params, n = t.activeIndex, r = t.slides, a = t.loopedSlides, s = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0;
            var u = -l[n] - t.getTranslate();
            n < a ? (e = r.length - 3 * a + n,
            e += a,
            t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)) : ("auto" === i.slidesPerView && 2 * a <= n || n >= r.length - a) && (e = -r.length + n + a,
            e += a,
            t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u));
            t.allowSlidePrev = s,
            t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var p = {
        setGrabCursor: function(e) {
            if (!(W.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            W.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var f = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var n = 0; n < e.length; n += 1)
                    e[n] && t.append(e[n]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && W.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , n = this.activeIndex;
            t.loop && this.loopDestroy();
            var r = n + 1;
            if ("object" == typeof e && "length"in e) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && i.prepend(e[a]);
                r = n + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && W.observer || this.update(),
            this.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this
              , n = i.$wrapperEl
              , r = i.params
              , a = i.activeIndex;
            r.loop && (a -= i.loopedSlides,
            i.loopDestroy(),
            i.slides = n.children("." + r.slideClass));
            var s = i.slides.length;
            if (e <= 0)
                i.prependSlide(t);
            else if (s <= e)
                i.appendSlide(t);
            else {
                for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; d -= 1) {
                    var u = i.slides.eq(d);
                    u.remove(),
                    l.unshift(u)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var c = 0; c < t.length; c += 1)
                        t[c] && n.append(t[c]);
                    o = e < a ? a + t.length : a
                } else
                    n.append(t);
                for (var h = 0; h < l.length; h += 1)
                    n.append(l[h]);
                r.loop && i.loopCreate(),
                r.observer && W.observer || i.update(),
                r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this
              , i = t.params
              , n = t.$wrapperEl
              , r = t.activeIndex;
            i.loop && (r -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = n.children("." + i.slideClass));
            var a, s = r;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    a = e[o],
                    t.slides[a] && t.slides.eq(a).remove(),
                    a < s && (s -= 1);
                s = Math.max(s, 0)
            } else
                a = e,
                t.slides[a] && t.slides.eq(a).remove(),
                a < s && (s -= 1),
                s = Math.max(s, 0);
            i.loop && t.loopCreate(),
            i.observer && W.observer || t.update(),
            i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , v = function() {
        var e = F.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: F.cordova || F.phonegap,
            phonegap: F.cordova || F.phonegap
        }
          , i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , n = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , r = e.match(/(iPad).*OS\s([\d_]+)/)
          , a = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = "windows",
        t.osVersion = i[2],
        t.windows = !0),
        n && !i && (t.os = "android",
        t.osVersion = n[2],
        t.android = !0,
        t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")),
        (r || s || a) && (t.os = "ios",
        t.ios = !0),
        s && !a && (t.osVersion = s[2].replace(/_/g, "."),
        t.iphone = !0),
        r && (t.osVersion = r[2].replace(/_/g, "."),
        t.ipad = !0),
        a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var o = t.osVersion.split(".")
              , l = m.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = F.devicePixelRatio || 1,
        t
    }();
    function g() {
        var e = this
          , t = e.params
          , i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext
              , r = e.allowSlidePrev
              , a = e.snapGrid;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r,
            e.allowSlideNext = n,
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
    }
    var y = {
        attachEvents: function() {
            var e = this
              , t = e.params
              , i = e.touchEvents
              , n = e.el
              , r = e.wrapperEl;
            e.onTouchStart = function(e) {
                var t = this
                  , i = t.touchEventsData
                  , n = t.params
                  , r = t.touches;
                if (!t.animating || !n.preventInteractionOnTransition) {
                    var a = e;
                    if (a.originalEvent && (a = a.originalEvent),
                    i.isTouchEvent = "touchstart" === a.type,
                    (i.isTouchEvent || !("which"in a) || 3 !== a.which) && !(!i.isTouchEvent && "button"in a && 0 < a.button || i.isTouched && i.isMoved))
                        if (n.noSwiping && _(a.target).closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0])
                            t.allowClick = !0;
                        else if (!n.swipeHandler || _(a).closest(n.swipeHandler)[0]) {
                            r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                            var s = r.currentX
                              , o = r.currentY
                              , l = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
                              , d = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                            if (!l || !(s <= d || s >= F.screen.width - d)) {
                                if (B.extend(i, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                r.startX = s,
                                r.startY = o,
                                i.touchStartTime = B.now(),
                                t.allowClick = !0,
                                t.updateSize(),
                                t.swipeDirection = void 0,
                                0 < n.threshold && (i.allowThresholdMove = !1),
                                "touchstart" !== a.type) {
                                    var u = !0;
                                    _(a.target).is(i.formElements) && (u = !1),
                                    m.activeElement && _(m.activeElement).is(i.formElements) && m.activeElement !== a.target && m.activeElement.blur();
                                    var c = u && t.allowTouchMove && n.touchStartPreventDefault;
                                    (n.touchStartForcePreventDefault || c) && a.preventDefault()
                                }
                                t.emit("touchStart", a)
                            }
                        }
                }
            }
            .bind(e),
            e.onTouchMove = function(e) {
                var t = this
                  , i = t.touchEventsData
                  , n = t.params
                  , r = t.touches
                  , a = t.rtlTranslate
                  , s = e;
                if (s.originalEvent && (s = s.originalEvent),
                i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== s.type) {
                        var o = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX
                          , l = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
                        if (s.preventedByNestedSwiper)
                            return r.startX = o,
                            void (r.startY = l);
                        if (!t.allowTouchMove)
                            return t.allowClick = !1,
                            void (i.isTouched && (B.extend(r, {
                                startX: o,
                                startY: l,
                                currentX: o,
                                currentY: l
                            }),
                            i.touchStartTime = B.now()));
                        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (t.isVertical()) {
                                if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate())
                                    return i.isTouched = !1,
                                    void (i.isMoved = !1)
                            } else if (o < r.startX && t.translate <= t.maxTranslate() || o > r.startX && t.translate >= t.minTranslate())
                                return;
                        if (i.isTouchEvent && m.activeElement && s.target === m.activeElement && _(s.target).is(i.formElements))
                            return i.isMoved = !0,
                            void (t.allowClick = !1);
                        if (i.allowTouchCallbacks && t.emit("touchMove", s),
                        !(s.targetTouches && 1 < s.targetTouches.length)) {
                            r.currentX = o,
                            r.currentY = l;
                            var d, u = r.currentX - r.startX, c = r.currentY - r.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < t.params.threshold))
                                if (void 0 === i.isScrolling && (t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : 25 <= u * u + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI,
                                i.isScrolling = t.isHorizontal() ? d > n.touchAngle : 90 - d > n.touchAngle)),
                                i.isScrolling && t.emit("touchMoveOpposite", s),
                                void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                                i.isScrolling)
                                    i.isTouched = !1;
                                else if (i.startMoving) {
                                    t.allowClick = !1,
                                    s.preventDefault(),
                                    n.touchMoveStopPropagation && !n.nested && s.stopPropagation(),
                                    i.isMoved || (n.loop && t.loopFix(),
                                    i.startTranslate = t.getTranslate(),
                                    t.setTransition(0),
                                    t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    i.allowMomentumBounce = !1,
                                    !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                    t.emit("sliderFirstMove", s)),
                                    t.emit("sliderMove", s),
                                    i.isMoved = !0;
                                    var h = t.isHorizontal() ? u : c;
                                    r.diff = h,
                                    h *= n.touchRatio,
                                    a && (h = -h),
                                    t.swipeDirection = 0 < h ? "prev" : "next",
                                    i.currentTranslate = h + i.startTranslate;
                                    var p = !0
                                      , f = n.resistanceRatio;
                                    if (n.touchReleaseOnEdges && (f = 0),
                                    0 < h && i.currentTranslate > t.minTranslate() ? (p = !1,
                                    n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + h, f))) : h < 0 && i.currentTranslate < t.maxTranslate() && (p = !1,
                                    n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - h, f))),
                                    p && (s.preventedByNestedSwiper = !0),
                                    !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    0 < n.threshold) {
                                        if (!(Math.abs(h) > n.threshold || i.allowThresholdMove))
                                            return void (i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove)
                                            return i.allowThresholdMove = !0,
                                            r.startX = r.currentX,
                                            r.startY = r.currentY,
                                            i.currentTranslate = i.startTranslate,
                                            void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    }
                                    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(),
                                    t.updateSlidesClasses()),
                                    n.freeMode && (0 === i.velocities.length && i.velocities.push({
                                        position: r[t.isHorizontal() ? "startX" : "startY"],
                                        time: i.touchStartTime
                                    }),
                                    i.velocities.push({
                                        position: r[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: B.now()
                                    })),
                                    t.updateProgress(i.currentTranslate),
                                    t.setTranslate(i.currentTranslate))
                                }
                        }
                    }
                } else
                    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", s)
            }
            .bind(e),
            e.onTouchEnd = function(e) {
                var t = this
                  , i = t.touchEventsData
                  , n = t.params
                  , r = t.touches
                  , a = t.rtlTranslate
                  , s = t.$wrapperEl
                  , o = t.slidesGrid
                  , l = t.snapGrid
                  , d = e;
                if (d.originalEvent && (d = d.originalEvent),
                i.allowTouchCallbacks && t.emit("touchEnd", d),
                i.allowTouchCallbacks = !1,
                !i.isTouched)
                    return i.isMoved && n.grabCursor && t.setGrabCursor(!1),
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u, c = B.now(), h = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d),
                t.emit("tap", d),
                h < 300 && 300 < c - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout),
                i.clickTimeout = B.nextTick(function() {
                    t && !t.destroyed && t.emit("click", d)
                }, 300)),
                h < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                t.emit("doubleTap", d))),
                i.lastClickTime = B.now(),
                B.nextTick(function() {
                    t.destroyed || (t.allowClick = !0)
                }),
                !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
                    return i.isTouched = !1,
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                if (i.isTouched = !1,
                i.isMoved = !1,
                i.startMoving = !1,
                u = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate,
                n.freeMode) {
                    if (u < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (1 < i.velocities.length) {
                            var p = i.velocities.pop()
                              , f = i.velocities.pop()
                              , m = p.position - f.position
                              , v = p.time - f.time;
                            t.velocity = m / v,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                            (150 < v || 300 < B.now() - p.time) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio,
                        i.velocities.length = 0;
                        var g = 1e3 * n.freeModeMomentumRatio
                          , y = t.velocity * g
                          , b = t.translate + y;
                        a && (b = -b);
                        var w, x, E = !1, T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate())
                            n.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T),
                            w = t.maxTranslate(),
                            E = !0,
                            i.allowMomentumBounce = !0) : b = t.maxTranslate(),
                            n.loop && n.centeredSlides && (x = !0);
                        else if (b > t.minTranslate())
                            n.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T),
                            w = t.minTranslate(),
                            E = !0,
                            i.allowMomentumBounce = !0) : b = t.minTranslate(),
                            n.loop && n.centeredSlides && (x = !0);
                        else if (n.freeModeSticky) {
                            for (var C, S = 0; S < l.length; S += 1)
                                if (l[S] > -b) {
                                    C = S;
                                    break
                                }
                            b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (x && t.once("transitionEnd", function() {
                            t.loopFix()
                        }),
                        0 !== t.velocity)
                            g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (n.freeModeSticky)
                            return void t.slideToClosest();
                        n.freeModeMomentumBounce && E ? (t.updateProgress(w),
                        t.setTransition(g),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        s.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(n.speed),
                            t.setTranslate(w),
                            s.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(b),
                        t.setTransition(g),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                        s.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(b),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else if (n.freeModeSticky)
                        return void t.slideToClosest();
                    (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                } else {
                    for (var k = 0, M = t.slidesSizesGrid[0], D = 0; D < o.length; D += n.slidesPerGroup)
                        void 0 !== o[D + n.slidesPerGroup] ? u >= o[D] && u < o[D + n.slidesPerGroup] && (M = o[(k = D) + n.slidesPerGroup] - o[D]) : u >= o[D] && (k = D,
                        M = o[o.length - 1] - o[o.length - 2]);
                    var P = (u - o[k]) / M;
                    if (h > n.longSwipesMs) {
                        if (!n.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (P >= n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k)),
                        "prev" === t.swipeDirection && (P > 1 - n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k))
                    } else {
                        if (!n.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(k + n.slidesPerGroup),
                        "prev" === t.swipeDirection && t.slideTo(k)
                    }
                }
            }
            .bind(e),
            e.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            .bind(e);
            var a = "container" === t.touchEventsTarget ? n : r
              , s = !!t.nested;
            if (W.touch || !W.pointerEvents && !W.prefixedPointerEvents) {
                if (W.touch) {
                    var o = !("touchstart" !== i.start || !W.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.addEventListener(i.start, e.onTouchStart, o),
                    a.addEventListener(i.move, e.onTouchMove, W.passiveListener ? {
                        passive: !1,
                        capture: s
                    } : s),
                    a.addEventListener(i.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !v.ios && !v.android || t.simulateTouch && !W.touch && v.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1),
                m.addEventListener("mousemove", e.onTouchMove, s),
                m.addEventListener("mouseup", e.onTouchEnd, !1))
            } else
                a.addEventListener(i.start, e.onTouchStart, !1),
                m.addEventListener(i.move, e.onTouchMove, s),
                m.addEventListener(i.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0),
            e.on(v.ios || v.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        },
        detachEvents: function() {
            var e = this
              , t = e.params
              , i = e.touchEvents
              , n = e.el
              , r = e.wrapperEl
              , a = "container" === t.touchEventsTarget ? n : r
              , s = !!t.nested;
            if (W.touch || !W.pointerEvents && !W.prefixedPointerEvents) {
                if (W.touch) {
                    var o = !("onTouchStart" !== i.start || !W.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a.removeEventListener(i.start, e.onTouchStart, o),
                    a.removeEventListener(i.move, e.onTouchMove, s),
                    a.removeEventListener(i.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !v.ios && !v.android || t.simulateTouch && !W.touch && v.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1),
                m.removeEventListener("mousemove", e.onTouchMove, s),
                m.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else
                a.removeEventListener(i.start, e.onTouchStart, !1),
                m.removeEventListener(i.move, e.onTouchMove, s),
                m.removeEventListener(i.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0),
            e.off(v.ios || v.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var b, w = {
        setBreakpoint: function() {
            var e = this
              , t = e.activeIndex
              , i = e.initialized
              , n = e.loopedSlides;
            void 0 === n && (n = 0);
            var r = e.params
              , a = r.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
                var s = e.getBreakpoint(a);
                if (s && e.currentBreakpoint !== s) {
                    var o = s in a ? a[s] : void 0;
                    o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                        var t = o[e];
                        void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    });
                    var l = o || e.originalParams
                      , d = r.loop && l.slidesPerView !== r.slidesPerView;
                    B.extend(e.params, l),
                    B.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = s,
                    d && i && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", l)
                }
            }
        },
        getBreakpoint: function(e) {
            if (e) {
                var t = !1
                  , i = [];
                Object.keys(e).forEach(function(e) {
                    i.push(e)
                }),
                i.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var n = 0; n < i.length; n += 1) {
                    var r = i[n];
                    this.params.breakpointsInverse ? r <= F.innerWidth && (t = r) : r >= F.innerWidth && !t && (t = r)
                }
                return t || "max"
            }
        }
    }, O = {
        isIE: !!F.navigator.userAgent.match(/Trident/g) || !!F.navigator.userAgent.match(/MSIE/g),
        isEdge: !!F.navigator.userAgent.match(/Edge/g),
        isSafari: (b = F.navigator.userAgent.toLowerCase(),
        0 <= b.indexOf("safari") && b.indexOf("chrome") < 0 && b.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(F.navigator.userAgent)
    };
    var x = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , E = {
        update: o,
        translate: d,
        transition: u,
        slide: c,
        loop: h,
        grabCursor: p,
        manipulation: f,
        events: y,
        breakpoints: w,
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                  , i = this.params
                  , e = this.rtl
                  , n = this.$el
                  , r = [];
                r.push(i.direction),
                i.freeMode && r.push("free-mode"),
                W.flexbox || r.push("no-flexbox"),
                i.autoHeight && r.push("autoheight"),
                e && r.push("rtl"),
                1 < i.slidesPerColumn && r.push("multirow"),
                v.android && r.push("android"),
                v.ios && r.push("ios"),
                (O.isIE || O.isEdge) && (W.pointerEvents || W.prefixedPointerEvents) && r.push("wp8-" + i.direction),
                r.forEach(function(e) {
                    t.push(i.containerModifierClass + e)
                }),
                n.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, i, n, r, a) {
                var s;
                function o() {
                    a && a()
                }
                e.complete && r ? o() : t ? ((s = new F.Image).onload = o,
                s.onerror = o,
                n && (s.sizes = n),
                i && (s.srcset = i),
                t && (s.src = t)) : o()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var n = e.imagesToLoad[i];
                    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , T = {}
      , C = function(h) {
        function p() {
            for (var e, t, r, i = [], n = arguments.length; n--; )
                i[n] = arguments[n];
            (r = 1 === i.length && i[0].constructor && i[0].constructor === Object ? i[0] : (t = (e = i)[0],
            e[1])) || (r = {}),
            r = B.extend({}, r),
            t && !r.el && (r.el = t),
            h.call(this, r),
            Object.keys(E).forEach(function(t) {
                Object.keys(E[t]).forEach(function(e) {
                    p.prototype[e] || (p.prototype[e] = E[t][e])
                })
            });
            var a = this;
            void 0 === a.modules && (a.modules = {}),
            Object.keys(a.modules).forEach(function(e) {
                var t = a.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , n = t.params[i];
                    if ("object" != typeof n || null === n)
                        return;
                    if (!(i in r && "enabled"in n))
                        return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }),
                    "object" != typeof r[i] || "enabled"in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = {
                        enabled: !1
                    })
                }
            });
            var s = B.extend({}, x);
            a.useModulesParams(s),
            a.params = B.extend({}, s, T, r),
            a.originalParams = B.extend({}, a.params),
            a.passedParams = B.extend({}, r);
            var o = (a.$ = _)(a.params.el);
            if (t = o[0]) {
                if (1 < o.length) {
                    var l = [];
                    return o.each(function(e, t) {
                        var i = B.extend({}, r, {
                            el: t
                        });
                        l.push(new p(i))
                    }),
                    l
                }
                t.swiper = a,
                o.data("swiper", a);
                var d, u, c = o.children("." + a.params.wrapperClass);
                return B.extend(a, {
                    $el: o,
                    el: t,
                    $wrapperEl: c,
                    wrapperEl: c[0],
                    classNames: [],
                    slides: _(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === a.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === a.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === c.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEvents: (d = ["touchstart", "touchmove", "touchend"],
                    u = ["mousedown", "mousemove", "mouseup"],
                    W.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : W.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    a.touchEventsTouch = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    },
                    a.touchEventsDesktop = {
                        start: u[0],
                        move: u[1],
                        end: u[2]
                    },
                    W.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: B.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                a.useModules(),
                a.params.init && a.init(),
                a
            }
        }
        h && (p.__proto__ = h);
        var e = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , n = this.size
              , r = this.activeIndex
              , a = 1;
            if (e.centeredSlides) {
                for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1)
                    t[l] && !s && (a += 1,
                    n < (o += t[l].swiperSlideSize) && (s = !0));
                for (var d = r - 1; 0 <= d; d -= 1)
                    t[d] && !s && (a += 1,
                    n < (o += t[d].swiperSlideSize) && (s = !0))
            } else
                for (var u = r + 1; u < t.length; u += 1)
                    i[u] - i[r] < n && (a += 1);
            return a
        }
        ,
        p.prototype.update = function() {
            var i = this;
            if (i && !i.destroyed) {
                var e = i.snapGrid
                  , t = i.params;
                t.breakpoints && i.setBreakpoint(),
                i.updateSize(),
                i.updateSlides(),
                i.updateProgress(),
                i.updateSlidesClasses(),
                i.params.freeMode ? (n(),
                i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || n(),
                t.watchOverflow && e !== i.snapGrid && i.checkOverflow(),
                i.emit("update")
            }
            function n() {
                var e = i.rtlTranslate ? -1 * i.translate : i.translate
                  , t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                i.setTranslate(t),
                i.updateActiveIndex(),
                i.updateSlidesClasses()
            }
        }
        ,
        p.prototype.init = function() {
            var e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        ,
        p.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , n = i.params
              , r = i.$el
              , a = i.$wrapperEl
              , s = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            r.removeAttr("style"),
            a.removeAttr("style"),
            s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e)
            }),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            B.deleteProps(i)),
            i.destroyed = !0),
            null
        }
        ,
        p.extendDefaults = function(e) {
            B.extend(T, e)
        }
        ,
        e.extendedDefaults.get = function() {
            return T
        }
        ,
        e.defaults.get = function() {
            return x
        }
        ,
        e.Class.get = function() {
            return h
        }
        ,
        e.$.get = function() {
            return _
        }
        ,
        Object.defineProperties(p, e),
        p
    }(r)
      , S = {
        name: "device",
        proto: {
            device: v
        },
        static: {
            device: v
        }
    }
      , k = {
        name: "support",
        proto: {
            support: W
        },
        static: {
            support: W
        }
    }
      , M = {
        name: "browser",
        proto: {
            browser: O
        },
        static: {
            browser: O
        }
    }
      , D = {
        name: "resize",
        create: function() {
            var e = this;
            B.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                F.addEventListener("resize", this.resize.resizeHandler),
                F.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                F.removeEventListener("resize", this.resize.resizeHandler),
                F.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , P = {
        func: F.MutationObserver || F.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this
              , n = new P.func(function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    F.requestAnimationFrame ? F.requestAnimationFrame(t) : F.setTimeout(t, 0)
                } else
                    i.emit("observerUpdate", e[0])
            }
            );
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(n)
        },
        init: function() {
            if (W.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , A = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            B.extend(this, {
                observer: {
                    init: P.init.bind(this),
                    attach: P.attach.bind(this),
                    destroy: P.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , I = {
        update: function(e) {
            var t = this
              , i = t.params
              , n = i.slidesPerView
              , r = i.slidesPerGroup
              , a = i.centeredSlides
              , s = t.params.virtual
              , o = s.addSlidesBefore
              , l = s.addSlidesAfter
              , d = t.virtual
              , u = d.from
              , c = d.to
              , h = d.slides
              , p = d.slidesGrid
              , f = d.renderSlide
              , m = d.offset;
            t.updateActiveIndex();
            var v, g, y, b = t.activeIndex || 0;
            v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            y = a ? (g = Math.floor(n / 2) + r + o,
            Math.floor(n / 2) + r + l) : (g = n + (r - 1) + o,
            r + l);
            var w = Math.max((b || 0) - y, 0)
              , x = Math.min((b || 0) + g, h.length - 1)
              , E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
            function T() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (B.extend(t.virtual, {
                from: w,
                to: x,
                offset: E,
                slidesGrid: t.slidesGrid
            }),
            u === w && c === x && !e)
                return t.slidesGrid !== p && E !== m && t.slides.css(v, E + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: w,
                    to: x,
                    slides: function() {
                        for (var e = [], t = w; t <= x; t += 1)
                            e.push(h[t]);
                        return e
                    }()
                }),
                void T();
            var C = []
              , S = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var k = u; k <= c; k += 1)
                    (k < w || x < k) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
            for (var M = 0; M < h.length; M += 1)
                w <= M && M <= x && (void 0 === c || e ? S.push(M) : (c < M && S.push(M),
                M < u && C.push(M)));
            S.forEach(function(e) {
                t.$wrapperEl.append(f(h[e], e))
            }),
            C.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(f(h[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(v, E + "px"),
            T()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var n = i.renderSlide ? _(i.renderSlide.call(this, e, t)) : _('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = n),
            n
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e),
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            if (this.virtual.slides.unshift(e),
            this.params.virtual.cache) {
                var t = this.virtual.cache
                  , i = {};
                Object.keys(t).forEach(function(e) {
                    i[e + 1] = t[e]
                }),
                this.virtual.cache = i
            }
            this.virtual.update(!0),
            this.slideNext(0)
        }
    }
      , N = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            B.extend(this, {
                virtual: {
                    update: I.update.bind(this),
                    appendSlide: I.appendSlide.bind(this),
                    prependSlide: I.prependSlide.bind(this),
                    renderSlide: I.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    B.extend(this.params, e),
                    B.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , L = {
        handle: function(e) {
            var t = this
              , i = t.rtlTranslate
              , n = e;
            n.originalEvent && (n = n.originalEvent);
            var r = n.keyCode || n.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r))
                return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                    var a = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var s = F.innerWidth
                      , o = F.innerHeight
                      , l = t.$el.offset();
                    i && (l.left -= t.$el[0].scrollLeft);
                    for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], u = 0; u < d.length; u += 1) {
                        var c = d[u];
                        0 <= c[0] && c[0] <= s && 0 <= c[1] && c[1] <= o && (a = !0)
                    }
                    if (!a)
                        return
                }
                t.isHorizontal() ? (37 !== r && 39 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                (39 === r && !i || 37 === r && i) && t.slideNext(),
                (37 === r && !i || 39 === r && i) && t.slidePrev()) : (38 !== r && 40 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                40 === r && t.slideNext(),
                38 === r && t.slidePrev()),
                t.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (_(m).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (_(m).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , $ = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            B.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: L.enable.bind(this),
                    disable: L.disable.bind(this),
                    handle: L.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var z = {
        lastScrollTime: B.now(),
        event: -1 < F.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var e = "onwheel"
              , t = e in m;
            if (!t) {
                var i = m.createElement("div");
                i.setAttribute(e, "return;"),
                t = "function" == typeof i[e]
            }
            return !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (t = m.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , i = 0
              , n = 0
              , r = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            n = 10 * t,
            r = 10 * i,
            "deltaY"in e && (r = e.deltaY),
            "deltaX"in e && (n = e.deltaX),
            (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40,
            r *= 40) : (n *= 800,
            r *= 800)),
            n && !t && (t = n < 1 ? -1 : 1),
            r && !i && (i = r < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: n,
                pixelY: r
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , n = i.params.mousewheel;
            if (!i.mouseEntered && !n.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , a = i.rtlTranslate ? -1 : 1
              , s = z.normalize(t);
            if (n.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return !0;
                    r = s.pixelX * a
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return !0;
                    r = s.pixelY
                }
            else
                r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
            if (0 === r)
                return !0;
            if (n.invert && (r = -r),
            i.params.freeMode) {
                i.params.loop && i.loopFix();
                var o = i.getTranslate() + r * n.sensitivity
                  , l = i.isBeginning
                  , d = i.isEnd;
                if (o >= i.minTranslate() && (o = i.minTranslate()),
                o <= i.maxTranslate() && (o = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(o),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                (!l && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(),
                i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout),
                i.mousewheel.timeout = B.nextTick(function() {
                    i.slideToClosest()
                }, 300)),
                i.emit("scroll", t),
                i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                o === i.minTranslate() || o === i.maxTranslate())
                    return !0
            } else {
                if (60 < B.now() - i.mousewheel.lastScrollTime)
                    if (r < 0)
                        if (i.isEnd && !i.params.loop || i.animating) {
                            if (n.releaseOnEdges)
                                return !0
                        } else
                            i.slideNext(),
                            i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges)
                            return !0
                    } else
                        i.slidePrev(),
                        i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new F.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable: function() {
            if (!z.event)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = _(this.params.mousewheel.eventsTarged)),
            e.on("mouseenter", this.mousewheel.handleMouseEnter),
            e.on("mouseleave", this.mousewheel.handleMouseLeave),
            e.on(z.event, this.mousewheel.handle),
            this.mousewheel.enabled = !0
        },
        disable: function() {
            if (!z.event)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = _(this.params.mousewheel.eventsTarged)),
            e.off(z.event, this.mousewheel.handle),
            !(this.mousewheel.enabled = !1)
        }
    }
      , H = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , n = t.$prevEl;
                n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass),
                n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this, n = i.params.navigation;
            (n.nextEl || n.prevEl) && (n.nextEl && (e = _(n.nextEl),
            i.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))),
            n.prevEl && (t = _(n.prevEl),
            i.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))),
            e && 0 < e.length && e.on("click", i.navigation.onNextClick),
            t && 0 < t.length && t.on("click", i.navigation.onPrevClick),
            B.extend(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , j = {
        update: function() {
            var e = this
              , t = e.rtl
              , r = e.params.pagination;
            if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a, i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, n = e.pagination.$el, s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (a -= i - 2 * e.loopedSlides),
                s - 1 < a && (a -= s),
                a < 0 && "bullets" !== e.params.paginationType && (a = s + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, u = e.pagination.bullets;
                    if (r.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    n.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"),
                    1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex,
                    e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    o = a - e.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(u.length, r.dynamicMainBullets) - 1)) + o) / 2),
                    u.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"),
                    1 < n.length)
                        u.each(function(e, t) {
                            var i = _(t)
                              , n = i.index();
                            n === a && i.addClass(r.bulletActiveClass),
                            r.dynamicBullets && (o <= n && n <= l && i.addClass(r.bulletActiveClass + "-main"),
                            n === o && i.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"),
                            n === l && i.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
                        });
                    else if (u.eq(a).addClass(r.bulletActiveClass),
                    r.dynamicBullets) {
                        for (var c = u.eq(o), h = u.eq(l), p = o; p <= l; p += 1)
                            u.eq(p).addClass(r.bulletActiveClass + "-main");
                        c.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"),
                        h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                    }
                    if (r.dynamicBullets) {
                        var f = Math.min(u.length, r.dynamicMainBullets + 4)
                          , m = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                          , v = t ? "right" : "left";
                        u.css(e.isHorizontal() ? v : "top", m + "px")
                    }
                }
                if ("fraction" === r.type && (n.find("." + r.currentClass).text(r.formatFractionCurrent(a + 1)),
                n.find("." + r.totalClass).text(r.formatFractionTotal(s))),
                "progressbar" === r.type) {
                    var g;
                    g = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var y = (a + 1) / s
                      , b = 1
                      , w = 1;
                    "horizontal" === g ? b = y : w = y,
                    n.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(e.params.speed)
                }
                "custom" === r.type && r.renderCustom ? (n.html(r.renderCustom(e, a + 1, s)),
                e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]),
                n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , n = e.pagination.$el
                  , r = "";
                if ("bullets" === t.type) {
                    for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1)
                        t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    n.html(r),
                    e.pagination.bullets = n.find("." + t.bulletClass)
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                n.html(r)),
                "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                n.html(r)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var i = this
              , e = i.params.pagination;
            if (e.el) {
                var t = _(e.el);
                0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)),
                "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                t.addClass(e.modifierClass + e.type),
                "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
                i.pagination.dynamicBulletIndex = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                    e.preventDefault();
                    var t = _(this).index() * i.params.slidesPerGroup;
                    i.params.loop && (t += i.loopedSlides),
                    i.slideTo(t)
                }),
                B.extend(i.pagination, {
                    $el: t,
                    el: t[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , q = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , n = e.dragSize
                  , r = e.trackSize
                  , a = e.$dragEl
                  , s = e.$el
                  , o = this.params.scrollbar
                  , l = n
                  , d = (r - n) * i;
                t ? 0 < (d = -d) ? (l = n - d,
                d = 0) : r < -d + n && (l = r + d) : d < 0 ? (l = n + d,
                d = 0) : r < d + n && (l = r - d),
                this.isHorizontal() ? (W.transforms3d ? a.transform("translate3d(" + d + "px, 0, 0)") : a.transform("translateX(" + d + "px)"),
                a[0].style.width = l + "px") : (W.transforms3d ? a.transform("translate3d(0px, " + d + "px, 0)") : a.transform("translateY(" + d + "px)"),
                a[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                s[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout(function() {
                    s[0].style.opacity = 0,
                    s.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , i = t.$dragEl
                  , n = t.$el;
                i[0].style.width = "",
                i[0].style.height = "";
                var r, a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, s = e.size / e.virtualSize, o = s * (a / e.size);
                r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px",
                n[0].style.display = 1 <= s ? "none" : "",
                e.params.scrollbarHide && (n[0].style.opacity = 0),
                B.extend(t, {
                    trackSize: a,
                    divider: s,
                    moveDivider: o,
                    dragSize: r
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function(e) {
            var t, i = this, n = i.scrollbar, r = i.rtlTranslate, a = n.$el, s = n.dragSize, o = n.trackSize;
            t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[i.isHorizontal() ? "left" : "top"] - s / 2) / (o - s),
            t = Math.max(Math.min(t, 1), 0),
            r && (t = 1 - t);
            var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
            i.updateProgress(l),
            i.setTranslate(l),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , n = this.$wrapperEl
              , r = i.$el
              , a = i.$dragEl;
            this.scrollbar.isTouched = !0,
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            a.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            r.transition(0),
            t.hide && r.css("opacity", 1),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , n = t.$el
              , r = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            r.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = B.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , i = e.touchEventsTouch
                  , n = e.touchEventsDesktop
                  , r = e.params
                  , a = t.$el[0]
                  , s = !(!W.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!W.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                W.touch ? (a.addEventListener(i.start, e.scrollbar.onDragStart, s),
                a.addEventListener(i.move, e.scrollbar.onDragMove, s),
                a.addEventListener(i.end, e.scrollbar.onDragEnd, o)) : (a.addEventListener(n.start, e.scrollbar.onDragStart, s),
                m.addEventListener(n.move, e.scrollbar.onDragMove, s),
                m.addEventListener(n.end, e.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , i = e.touchEventsTouch
                  , n = e.touchEventsDesktop
                  , r = e.params
                  , a = t.$el[0]
                  , s = !(!W.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!W.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                W.touch ? (a.removeEventListener(i.start, e.scrollbar.onDragStart, s),
                a.removeEventListener(i.move, e.scrollbar.onDragMove, s),
                a.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) : (a.removeEventListener(n.start, e.scrollbar.onDragStart, s),
                m.removeEventListener(n.move, e.scrollbar.onDragMove, s),
                m.removeEventListener(n.end, e.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , n = _(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && 1 < n.length && 1 === t.find(i.el).length && (n = t.find(i.el));
                var r = n.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = _('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                n.append(r)),
                B.extend(e, {
                    $el: n,
                    el: n[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , R = {
        setTransform: function(e, t) {
            var i = this.rtl
              , n = _(e)
              , r = i ? -1 : 1
              , a = n.attr("data-swiper-parallax") || "0"
              , s = n.attr("data-swiper-parallax-x")
              , o = n.attr("data-swiper-parallax-y")
              , l = n.attr("data-swiper-parallax-scale")
              , d = n.attr("data-swiper-parallax-opacity");
            if (s || o ? (s = s || "0",
            o = o || "0") : this.isHorizontal() ? (s = a,
            o = "0") : (o = a,
            s = "0"),
            s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px",
            o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != d) {
                var u = d - (d - 1) * (1 - Math.abs(t));
                n[0].style.opacity = u
            }
            if (null == l)
                n.transform("translate3d(" + s + ", " + o + ", 0px)");
            else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                n.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var n = this
              , e = n.$el
              , t = n.slides
              , r = n.progress
              , a = n.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                n.parallax.setTransform(t, r)
            }),
            t.each(function(e, t) {
                var i = t.progress;
                1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(e / 2) - r * (a.length - 1)),
                i = Math.min(Math.max(i, -1), 1),
                _(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    n.parallax.setTransform(t, i)
                })
            })
        },
        setTransition: function(r) {
            void 0 === r && (r = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                var i = _(t)
                  , n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || r;
                0 === r && (n = 0),
                i.transition(n)
            })
        }
    }
      , V = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , n = e.targetTouches[1].pageX
              , r = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , n = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !W.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                n.scaleStart = V.getDistanceBetweenTouches(e)
            }
            n.$slideEl && n.$slideEl.length || (n.$slideEl = _(e.target).closest(".swiper-slide"),
            0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)),
            n.$imageEl = n.$slideEl.find("img, svg, canvas"),
            n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass),
            n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0),
            this.zoom.isScaling = !0) : n.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , n = i.gesture;
            if (!W.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                n.scaleMove = V.getDistanceBetweenTouches(e)
            }
            n.$imageEl && 0 !== n.$imageEl.length && (W.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale,
            i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , n = i.gesture;
            if (!W.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !v.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio),
            n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (n.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , n = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (v.android && e.preventDefault(),
            n.isTouched = !0,
            n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , n = t.image
              , r = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            n.isTouched && i.$slideEl)) {
                n.isMoved || (n.width = i.$imageEl[0].offsetWidth,
                n.height = i.$imageEl[0].offsetHeight,
                n.startX = B.getTranslate(i.$imageWrapEl[0], "x") || 0,
                n.startY = B.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (n.startX = -n.startX,
                n.startY = -n.startY));
                var a = n.width * t.scale
                  , s = n.height * t.scale;
                if (!(a < i.slideWidth && s < i.slideHeight)) {
                    if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0),
                    n.maxX = -n.minX,
                    n.minY = Math.min(i.slideHeight / 2 - s / 2, 0),
                    n.maxY = -n.minY,
                    n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !n.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x))
                            return void (n.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y))
                            return void (n.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.isMoved = !0,
                    n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX,
                    n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY,
                    n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)),
                    n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)),
                    n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)),
                    n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = n.touchesCurrent.x,
                    r.prevPositionY = n.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , n = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var r = 300
                  , a = 300
                  , s = n.x * r
                  , o = i.currentX + s
                  , l = n.y * a
                  , d = i.currentY + l;
                0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)),
                0 !== n.y && (a = Math.abs((d - i.currentY) / n.y));
                var u = Math.max(r, a);
                i.currentX = o,
                i.currentY = d;
                var c = i.width * e.scale
                  , h = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - h / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0,
            e.scale = 1,
            e.currentScale = 1)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, n, r, a, s, o, l, d, u, c, h, p, f, m, v, g = this.zoom, y = this.params.zoom, b = g.gesture, w = g.image;
            (b.$slideEl || (b.$slideEl = this.clickedSlide ? _(this.clickedSlide) : this.slides.eq(this.activeIndex),
            b.$imageEl = b.$slideEl.find("img, svg, canvas"),
            b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)),
            b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + y.zoomedSlideClass),
            i = void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x,
            w.touchesStart.y),
            g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
            g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
            e ? (m = b.$slideEl[0].offsetWidth,
            v = b.$slideEl[0].offsetHeight,
            n = b.$slideEl.offset().left + m / 2 - t,
            r = b.$slideEl.offset().top + v / 2 - i,
            o = b.$imageEl[0].offsetWidth,
            l = b.$imageEl[0].offsetHeight,
            d = o * g.scale,
            u = l * g.scale,
            p = -(c = Math.min(m / 2 - d / 2, 0)),
            f = -(h = Math.min(v / 2 - u / 2, 0)),
            (a = n * g.scale) < c && (a = c),
            p < a && (a = p),
            (s = r * g.scale) < h && (s = h),
            f < s && (s = f)) : s = a = 0,
            b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"),
            b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? _(this.clickedSlide) : this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this
              , t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var i = !("touchstart" !== e.touchEvents.start || !W.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                W.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i),
                e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i),
                e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i),
                e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)),
                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function() {
            var e = this
              , t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var i = !("touchstart" !== e.touchEvents.start || !W.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                W.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i),
                e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i),
                e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
                e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i),
                e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)),
                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }
      , Y = {
        loadInSlide: function(e, l) {
            void 0 === l && (l = !0);
            var d = this
              , u = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)
                  , t = c.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                !c.hasClass(u.elementClass) || c.hasClass(u.loadedClass) || c.hasClass(u.loadingClass) || (t = t.add(c[0])),
                0 !== t.length && t.each(function(e, t) {
                    var n = _(t);
                    n.addClass(u.loadingClass);
                    var r = n.attr("data-background")
                      , a = n.attr("data-src")
                      , s = n.attr("data-srcset")
                      , o = n.attr("data-sizes");
                    d.loadImage(n[0], a || r, s, o, !1, function() {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (r ? (n.css("background-image", 'url("' + r + '")'),
                            n.removeAttr("data-background")) : (s && (n.attr("srcset", s),
                            n.removeAttr("data-srcset")),
                            o && (n.attr("sizes", o),
                            n.removeAttr("data-sizes")),
                            a && (n.attr("src", a),
                            n.removeAttr("data-src"))),
                            n.addClass(u.loadedClass).removeClass(u.loadingClass),
                            c.find("." + u.preloaderClass).remove(),
                            d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var i = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(i.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], n[0])
                        }
                    }),
                    d.emit("lazyImageLoad", c[0], n[0])
                })
            }
        },
        load: function() {
            var n = this
              , t = n.$wrapperEl
              , i = n.params
              , r = n.slides
              , e = n.activeIndex
              , a = n.virtual && i.virtual.enabled
              , s = i.lazy
              , o = i.slidesPerView;
            function l(e) {
                if (a) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (r[e])
                    return !0;
                return !1
            }
            function d(e) {
                return a ? _(e).attr("data-swiper-slide-index") : _(e).index()
            }
            if ("auto" === o && (o = 0),
            n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
            n.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each(function(e, t) {
                    var i = a ? _(t).attr("data-swiper-slide-index") : _(t).index();
                    n.lazy.loadInSlide(i)
                });
            else if (1 < o)
                for (var u = e; u < e + o; u += 1)
                    l(u) && n.lazy.loadInSlide(u);
            else
                n.lazy.loadInSlide(e);
            if (s.loadPrevNext)
                if (1 < o || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) {
                    for (var c = s.loadPrevNextAmount, h = o, p = Math.min(e + h + Math.max(c, h), r.length), f = Math.max(e - Math.max(h, c), 0), m = e + o; m < p; m += 1)
                        l(m) && n.lazy.loadInSlide(m);
                    for (var v = f; v < e; v += 1)
                        l(v) && n.lazy.loadInSlide(v)
                } else {
                    var g = t.children("." + i.slideNextClass);
                    0 < g.length && n.lazy.loadInSlide(d(g));
                    var y = t.children("." + i.slidePrevClass);
                    0 < y.length && n.lazy.loadInSlide(d(y))
                }
        }
    }
      , X = {
        LinearSpline: function(e, t) {
            var i, n, r, a, s, o = function(e, t) {
                for (n = -1,
                i = e.length; 1 < i - n; )
                    e[r = i + n >> 1] <= t ? n = r : i = r;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (s = o(this.x, e),
                a = s - 1,
                (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new X.LinearSpline(this.slidesGrid,e.slidesGrid) : new X.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, n, r = this, a = r.controller.control;
            function s(e) {
                var t = r.rtlTranslate ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                n = -r.controller.spline.interpolate(-t)),
                n && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                n = (t - r.minTranslate()) * i + e.minTranslate()),
                r.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, r),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(a))
                for (var o = 0; o < a.length; o += 1)
                    a[o] !== t && a[o]instanceof C && s(a[o]);
            else
                a instanceof C && t !== a && s(a)
        },
        setTransition: function(t, e) {
            var i, n = this, r = n.controller.control;
            function a(e) {
                e.setTransition(t, n),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && B.nextTick(function() {
                    e.updateAutoHeight()
                }),
                e.$wrapperEl.transitionEnd(function() {
                    r && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(r))
                for (i = 0; i < r.length; i += 1)
                    r[i] !== e && r[i]instanceof C && a(r[i]);
            else
                r instanceof C && e !== r && a(r)
        }
    }
      , G = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this
              , i = t.params.a11y;
            if (13 === e.keyCode) {
                var n = _(e.target);
                t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)),
                t.pagination && n.is("." + t.params.pagination.bulletClass) && n[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        },
        updatePagination: function() {
            var n = this
              , r = n.params.a11y;
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(e, t) {
                var i = _(t);
                n.a11y.makeElFocusable(i),
                n.a11y.addElRole(i, "button"),
                n.a11y.addElLabel(i, r.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, i, n = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, n.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
            i && (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, n.prevSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, i = this;
            i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(),
            i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
            i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
            e && e.off("keydown", i.a11y.onEnterKey),
            t && t.off("keydown", i.a11y.onEnterKey),
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
        }
    }
      , U = {
        init: function() {
            if (this.params.history) {
                if (!F.history || !F.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = U.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || F.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || F.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = U.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = F.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t)
                  , n = U.slugify(i.attr("data-history"));
                F.location.pathname.includes(e) || (n = e + "/" + n);
                var r = F.history.state;
                r && r.value === n || (this.params.history.replaceState ? F.history.replaceState({
                    value: n
                }, null, n) : F.history.pushState({
                    value: n
                }, null, n))
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var n = 0, r = this.slides.length; n < r; n += 1) {
                    var a = this.slides.eq(n);
                    if (U.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                        var s = a.index();
                        this.slideTo(s, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , K = {
        onHashCange: function() {
            var e = m.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t)
                    return;
                this.slideTo(t)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && F.history && F.history.replaceState)
                    F.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                else {
                    var e = this.slides.eq(this.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    m.location.hash = t || ""
                }
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = m.location.hash.replace("#", "");
                if (t)
                    for (var i = 0, n = e.slides.length; i < n; i += 1) {
                        var r = e.slides.eq(i);
                        if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                            var a = r.index();
                            e.slideTo(a, 0, e.params.runCallbacksOnInit, !0)
                        }
                    }
                e.params.hashNavigation.watchState && _(F).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && _(F).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , Q = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            e.autoplay.timeout = B.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    }
      , J = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , n = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (n -= this.translate);
                var r = 0;
                this.isHorizontal() || (r = n,
                n = 0);
                var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: a
                }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var i = this
              , t = i.slides
              , n = i.$wrapperEl;
            if (t.transition(e),
            i.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.transitionEnd(function() {
                    if (!r && i && !i.destroyed) {
                        r = !0,
                        i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            n.trigger(e[t])
                    }
                })
            }
        }
    }
      , Z = {
        setTranslate: function() {
            var e, t = this, i = t.$el, n = t.$wrapperEl, r = t.slides, a = t.width, s = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, u = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, h = 0;
            d.shadow && (u ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = _('<div class="swiper-cube-shadow"></div>'),
            n.append(e)),
            e.css({
                height: a + "px"
            })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = _('<div class="swiper-cube-shadow"></div>'),
            i.append(e)));
            for (var p = 0; p < r.length; p += 1) {
                var f = r.eq(p)
                  , m = p;
                c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                var v = 90 * m
                  , g = Math.floor(v / 360);
                o && (v = -v,
                g = Math.floor(-v / 360));
                var y = Math.max(Math.min(f[0].progress, 1), -1)
                  , b = 0
                  , w = 0
                  , x = 0;
                m % 4 == 0 ? (b = 4 * -g * l,
                x = 0) : (m - 1) % 4 == 0 ? (b = 0,
                x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l,
                x = l) : (m - 3) % 4 == 0 && (b = -l,
                x = 3 * l + 4 * l * g),
                o && (b = -b),
                u || (w = b,
                b = 0);
                var E = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                if (y <= 1 && -1 < y && (h = 90 * m + 90 * y,
                o && (h = 90 * -m - 90 * y)),
                f.transform(E),
                d.slideShadows) {
                    var T = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , C = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = _('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'),
                    f.append(T)),
                    0 === C.length && (C = _('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'),
                    f.append(C)),
                    T.length && (T[0].style.opacity = Math.max(-y, 0)),
                    C.length && (C[0].style.opacity = Math.max(y, 0))
                }
            }
            if (n.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (u)
                    e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                      , k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2)
                      , M = d.shadowScale
                      , D = d.shadowScale / k
                      , P = d.shadowOffset;
                    e.transform("scale3d(" + M + ", 1, " + D + ") translate3d(0px, " + (s / 2 + P) + "px, " + -s / 2 / D + "px) rotateX(-90deg)")
                }
            var A = O.isSafari || O.isUiWebView ? -l / 2 : 0;
            n.transform("translate3d(0px,0," + A + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , ee = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var n = e.eq(i)
                  , r = n[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                var a = -180 * r
                  , s = 0
                  , o = -n[0].swiperSlideOffset
                  , l = 0;
                if (this.isHorizontal() ? t && (a = -a) : (l = o,
                s = -a,
                a = o = 0),
                n[0].style.zIndex = -Math.abs(Math.round(r)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var d = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                      , u = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                    0 === d.length && (d = _('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    n.append(d)),
                    0 === u.length && (u = _('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    n.append(u)),
                    d.length && (d[0].style.opacity = Math.max(-r, 0)),
                    u.length && (u[0].style.opacity = Math.max(r, 0))
                }
                n.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + s + "deg) rotateY(" + a + "deg)")
            }
        },
        setTransition: function(e) {
            var i = this
              , t = i.slides
              , n = i.activeIndex
              , r = i.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            i.params.virtualTranslate && 0 !== e) {
                var a = !1;
                t.eq(n).transitionEnd(function() {
                    if (!a && i && !i.destroyed) {
                        a = !0,
                        i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            r.trigger(e[t])
                    }
                })
            }
        }
    }
      , te = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, r = this.slidesSizesGrid, a = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, l = s ? e / 2 - o : t / 2 - o, d = s ? a.rotate : -a.rotate, u = a.depth, c = 0, h = i.length; c < h; c += 1) {
                var p = i.eq(c)
                  , f = r[c]
                  , m = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier
                  , v = s ? d * m : 0
                  , g = s ? 0 : d * m
                  , y = -u * Math.abs(m)
                  , b = s ? 0 : a.stretch * m
                  , w = s ? a.stretch * m : 0;
                Math.abs(w) < .001 && (w = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(v) < .001 && (v = 0),
                Math.abs(g) < .001 && (g = 0);
                var x = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)";
                if (p.transform(x),
                p[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                a.slideShadows) {
                    var E = s ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top")
                      , T = s ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = _('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'),
                    p.append(E)),
                    0 === T.length && (T = _('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'),
                    p.append(T)),
                    E.length && (E[0].style.opacity = 0 < m ? m : 0),
                    T.length && (T[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (W.pointerEvents || W.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , ie = {
        init: function() {
            var e = this
              , t = e.params.thumbs
              , i = e.constructor;
            t.swiper instanceof i ? (e.thumbs.swiper = t.swiper,
            B.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            B.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : B.isObject(t.swiper) && (e.thumbs.swiper = new i(B.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this
              , t = e.thumbs.swiper;
            if (t) {
                var i = t.clickedIndex
                  , n = t.clickedSlide;
                if (!(n && _(n).hasClass(e.params.thumbs.slideThumbActiveClass) || null == i)) {
                    var r;
                    if (r = t.params.loop ? parseInt(_(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i,
                    e.params.loop) {
                        var a = e.activeIndex;
                        e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                        e._clientLeft = e.$wrapperEl[0].clientLeft,
                        a = e.activeIndex);
                        var s = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index()
                          , o = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                        r = void 0 === s ? o : void 0 === o ? s : o - a < a - s ? o : s
                    }
                    e.slideTo(r)
                }
            }
        },
        update: function(e) {
            var t = this
              , i = t.thumbs.swiper;
            if (i) {
                var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                if (t.realIndex !== i.realIndex) {
                    var r, a = i.activeIndex;
                    if (i.params.loop) {
                        i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
                        i._clientLeft = i.$wrapperEl[0].clientLeft,
                        a = i.activeIndex);
                        var s = i.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                          , o = i.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s
                    } else
                        r = t.realIndex;
                    i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = a < r ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : a < r && (r = r - n + 1),
                    i.slideTo(r, e ? 0 : void 0))
                }
                var l = 1
                  , d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView),
                i.slides.removeClass(d),
                i.params.loop)
                    for (var u = 0; u < l; u += 1)
                        i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
                else
                    for (var c = 0; c < l; c += 1)
                        i.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }
      , ne = [S, k, M, D, A, N, $, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            B.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: z.enable.bind(this),
                    disable: z.disable.bind(this),
                    handle: z.handle.bind(this),
                    handleMouseEnter: z.handleMouseEnter.bind(this),
                    handleMouseLeave: z.handleMouseLeave.bind(this),
                    lastScrollTime: B.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            B.extend(this, {
                navigation: {
                    init: H.init.bind(this),
                    update: H.update.bind(this),
                    destroy: H.destroy.bind(this),
                    onNextClick: H.onNextClick.bind(this),
                    onPrevClick: H.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t = this.navigation
                  , i = t.$nextEl
                  , n = t.$prevEl;
                !this.params.navigation.hideOnClick || _(e.target).is(n) || _(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass),
                n && n.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            B.extend(this, {
                pagination: {
                    init: j.init.bind(this),
                    render: j.render.bind(this),
                    update: j.update.bind(this),
                    destroy: j.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !_(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            var e = this;
            B.extend(e, {
                scrollbar: {
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    updateSize: q.updateSize.bind(e),
                    setTranslate: q.setTranslate.bind(e),
                    setTransition: q.setTransition.bind(e),
                    enableDraggable: q.enableDraggable.bind(e),
                    disableDraggable: q.disableDraggable.bind(e),
                    setDragPosition: q.setDragPosition.bind(e),
                    onDragStart: q.onDragStart.bind(e),
                    onDragMove: q.onDragMove.bind(e),
                    onDragEnd: q.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            B.extend(this, {
                parallax: {
                    setTransform: R.setTransform.bind(this),
                    setTranslate: R.setTranslate.bind(this),
                    setTransition: R.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var t = this
              , i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                i[e] = V[e].bind(t)
            }),
            B.extend(t, {
                zoom: i
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            B.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Y.load.bind(this),
                    loadInSlide: Y.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            B.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: X.getInterpolateFunction.bind(this),
                    setTranslate: X.setTranslate.bind(this),
                    setTransition: X.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            B.extend(t, {
                a11y: {
                    liveRegion: _('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(G).forEach(function(e) {
                t.a11y[e] = G[e].bind(t)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            B.extend(this, {
                history: {
                    init: U.init.bind(this),
                    setHistory: U.setHistory.bind(this),
                    setHistoryPopState: U.setHistoryPopState.bind(this),
                    scrollToSlide: U.scrollToSlide.bind(this),
                    destroy: U.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            B.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: K.init.bind(this),
                    destroy: K.destroy.bind(this),
                    setHash: K.setHash.bind(this),
                    onHashCange: K.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var t = this;
            B.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: Q.run.bind(t),
                    start: Q.start.bind(t),
                    stop: Q.stop.bind(t),
                    pause: Q.pause.bind(t),
                    onTransitionEnd: function(e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                        t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            B.extend(this, {
                fadeEffect: {
                    setTranslate: J.setTranslate.bind(this),
                    setTransition: J.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    B.extend(this.params, e),
                    B.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            B.extend(this, {
                cubeEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    B.extend(this.params, e),
                    B.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            B.extend(this, {
                flipEffect: {
                    setTranslate: ee.setTranslate.bind(this),
                    setTransition: ee.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    B.extend(this.params, e),
                    B.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            B.extend(this, {
                coverflowEffect: {
                    setTranslate: te.setTranslate.bind(this),
                    setTransition: te.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            B.extend(this, {
                thumbs: {
                    swiper: null,
                    init: ie.init.bind(this),
                    update: ie.update.bind(this),
                    onThumbClick: ie.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === C.use && (C.use = C.Class.use,
    C.installModule = C.Class.installModule),
    C.use(ne),
    C
}),
function(e) {
    "object" == typeof exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(u) {
    "use strict";
    var i = {}
      , c = Math.max
      , h = Math.min;
    i.c = {},
    i.c.d = u(document),
    i.c.t = function(e) {
        return e.originalEvent.touches.length - 1
    }
    ,
    i.o = function() {
        var n = this;
        this.o = null,
        this.$ = null,
        this.i = null,
        this.g = null,
        this.v = null,
        this.cv = null,
        this.x = 0,
        this.y = 0,
        this.w = 0,
        this.h = 0,
        this.$c = null,
        this.c = null,
        this.t = 0,
        this.isInit = !1,
        this.fgColor = null,
        this.pColor = null,
        this.dH = null,
        this.cH = null,
        this.eH = null,
        this.rH = null,
        this.scale = 1,
        this.relative = !1,
        this.relativeWidth = !1,
        this.relativeHeight = !1,
        this.$div = null,
        this.run = function() {
            var e = function(e, t) {
                var i;
                for (i in t)
                    n.o[i] = t[i];
                n._carve().init(),
                n._configure()._draw()
            };
            if (!this.$.data("kontroled")) {
                if (this.$.data("kontroled", !0),
                this.extend(),
                this.o = u.extend({
                    min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                    max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                    stopper: !0,
                    readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                    cursor: (!0 === this.$.data("cursor") ? 30 : this.$.data("cursor")) || 0,
                    thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                    lineCap: this.$.data("linecap") || "butt",
                    width: this.$.data("width") || 200,
                    height: this.$.data("height") || 200,
                    displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                    displayPrevious: this.$.data("displayprevious"),
                    fgColor: this.$.data("fgcolor") || "#87CEEB",
                    inputColor: this.$.data("inputcolor"),
                    font: this.$.data("font") || "Arial",
                    fontWeight: this.$.data("font-weight") || "bold",
                    inline: !1,
                    step: this.$.data("step") || 1,
                    rotation: this.$.data("rotation"),
                    draw: null,
                    change: null,
                    cancel: null,
                    release: null,
                    format: function(e) {
                        return e
                    },
                    parse: function(e) {
                        return parseFloat(e)
                    }
                }, this.o),
                this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation,
                this.o.inputColor || (this.o.inputColor = this.o.fgColor),
                this.$.is("fieldset") ? (this.v = {},
                this.i = this.$.find("input"),
                this.i.each(function(t) {
                    var i = u(this);
                    n.i[t] = i,
                    n.v[t] = n.o.parse(i.val()),
                    i.bind("change blur", function() {
                        var e = {};
                        e[t] = i.val(),
                        n.val(n._validate(e))
                    })
                }),
                this.$.find("legend").remove()) : (this.i = this.$,
                this.v = this.o.parse(this.$.val()),
                "" === this.v && (this.v = this.o.min),
                this.$.bind("change blur", function() {
                    n.val(n._validate(n.o.parse(n.$.val())))
                })),
                !this.o.displayInput && this.$.hide(),
                this.$c = u(document.createElement("canvas")).attr({
                    width: this.o.width,
                    height: this.o.height
                }),
                this.$div = u('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'),
                this.$.wrap(this.$div).before(this.$c),
                this.$div = this.$.parent(),
                "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]),
                this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null,
                !this.c)
                    throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    };
                return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1),
                this.relativeWidth = this.o.width % 1 != 0 && this.o.width.indexOf("%"),
                this.relativeHeight = this.o.height % 1 != 0 && this.o.height.indexOf("%"),
                this.relative = this.relativeWidth || this.relativeHeight,
                this._carve(),
                this.v instanceof Object ? (this.cv = {},
                this.copy(this.v, this.cv)) : this.cv = this.v,
                this.$.bind("configure", e).parent().bind("configure", e),
                this._listen()._configure()._xy().init(),
                this.isInit = !0,
                this.$.val(this.o.format(this.v)),
                this._draw(),
                this
            }
        }
        ,
        this._carve = function() {
            if (this.relative) {
                var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width()
                  , t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(e, t)
            } else
                this.w = this.o.width,
                this.h = this.o.height;
            return this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            }),
            this.$c.attr({
                width: this.w,
                height: this.h
            }),
            1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale,
            this.$c[0].height = this.$c[0].height * this.scale,
            this.$c.width(this.w),
            this.$c.height(this.h)),
            this
        }
        ,
        this._draw = function() {
            var e = !0;
            n.g = n.c,
            n.clear(),
            n.dH && (e = n.dH()),
            !1 !== e && n.draw()
        }
        ,
        this._touch = function(e) {
            var t = function(e) {
                var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
                t != n.cv && (n.cH && !1 === n.cH(t) || (n.change(n._validate(t)),
                n._draw()))
            };
            return this.t = i.c.t(e),
            t(e),
            i.c.d.bind("touchmove.k", t).bind("touchend.k", function() {
                i.c.d.unbind("touchmove.k touchend.k"),
                n.val(n.cv)
            }),
            this
        }
        ,
        this._mouse = function(e) {
            var t = function(e) {
                var t = n.xy2val(e.pageX, e.pageY);
                t != n.cv && (n.cH && !1 === n.cH(t) || (n.change(n._validate(t)),
                n._draw()))
            };
            return t(e),
            i.c.d.bind("mousemove.k", t).bind("keyup.k", function(e) {
                if (27 === e.keyCode) {
                    if (i.c.d.unbind("mouseup.k mousemove.k keyup.k"),
                    n.eH && !1 === n.eH())
                        return;
                    n.cancel()
                }
            }).bind("mouseup.k", function(e) {
                i.c.d.unbind("mousemove.k mouseup.k keyup.k"),
                n.val(n.cv)
            }),
            this
        }
        ,
        this._xy = function() {
            var e = this.$c.offset();
            return this.x = e.left,
            this.y = e.top,
            this
        }
        ,
        this._listen = function() {
            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(e) {
                e.preventDefault(),
                n._xy()._mouse(e)
            }).bind("touchstart", function(e) {
                e.preventDefault(),
                n._xy()._touch(e)
            }),
            this.listen()),
            this.relative && u(window).resize(function() {
                n._carve().init(),
                n._draw()
            }),
            this
        }
        ,
        this._configure = function() {
            return this.o.draw && (this.dH = this.o.draw),
            this.o.change && (this.cH = this.o.change),
            this.o.cancel && (this.eH = this.o.cancel),
            this.o.release && (this.rH = this.o.release),
            this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"),
            this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor,
            this
        }
        ,
        this._clear = function() {
            this.$c[0].width = this.$c[0].width
        }
        ,
        this._validate = function(e) {
            var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;
            return Math.round(100 * t) / 100
        }
        ,
        this.listen = function() {}
        ,
        this.extend = function() {}
        ,
        this.init = function() {}
        ,
        this.change = function(e) {}
        ,
        this.val = function(e) {}
        ,
        this.xy2val = function(e, t) {}
        ,
        this.draw = function() {}
        ,
        this.clear = function() {
            this._clear()
        }
        ,
        this.h2rgba = function(e, t) {
            var i;
            return e = e.substring(1, 7),
            "rgba(" + (i = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)])[0] + "," + i[1] + "," + i[2] + "," + t + ")"
        }
        ,
        this.copy = function(e, t) {
            for (var i in e)
                t[i] = e[i]
        }
    }
    ,
    i.Dial = function() {
        i.o.call(this),
        this.startAngle = null,
        this.xy = null,
        this.radius = null,
        this.lineWidth = null,
        this.cursorExt = null,
        this.w2 = null,
        this.PI2 = 2 * Math.PI,
        this.extend = function() {
            this.o = u.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: !0
            }, this.o)
        }
        ,
        this.val = function(e, t) {
            if (null == e)
                return this.v;
            e = this.o.parse(e),
            !1 !== t && e != this.v && this.rH && !1 === this.rH(e) || (this.cv = this.o.stopper ? c(h(e, this.o.max), this.o.min) : e,
            this.v = this.cv,
            this.$.val(this.o.format(this.v)),
            this._draw())
        }
        ,
        this.xy2val = function(e, t) {
            var i, n;
            return i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset,
            this.o.flip && (i = this.angleArc - i - this.PI2),
            this.angleArc != this.PI2 && i < 0 && -.5 < i ? i = 0 : i < 0 && (i += this.PI2),
            n = i * (this.o.max - this.o.min) / this.angleArc + this.o.min,
            this.o.stopper && (n = c(h(n, this.o.max), this.o.min)),
            n
        }
        ,
        this.listen = function() {
            var a, s, n, r, o = this, e = function(e) {
                e.preventDefault();
                var t = e.originalEvent
                  , i = t.detail || t.wheelDeltaX
                  , n = t.detail || t.wheelDeltaY
                  , r = o._validate(o.o.parse(o.$.val())) + (0 < i || 0 < n ? o.o.step : i < 0 || n < 0 ? -o.o.step : 0);
                r = c(h(r, o.o.max), o.o.min),
                o.val(r, !1),
                o.rH && (clearTimeout(a),
                a = setTimeout(function() {
                    o.rH(r),
                    a = null
                }, 100),
                s || (s = setTimeout(function() {
                    a && o.rH(r),
                    s = null
                }, 200)))
            }, l = 1, d = {
                37: -o.o.step,
                38: o.o.step,
                39: o.o.step,
                40: -o.o.step
            };
            this.$.bind("keydown", function(e) {
                var t = e.keyCode;
                if (96 <= t && t <= 105 && (t = e.keyCode = t - 48),
                n = parseInt(String.fromCharCode(t)),
                isNaN(n) && (13 !== t && 8 !== t && 9 !== t && 189 !== t && (190 !== t || o.$.val().match(/\./)) && e.preventDefault(),
                -1 < u.inArray(t, [37, 38, 39, 40]))) {
                    e.preventDefault();
                    var i = o.o.parse(o.$.val()) + d[t] * l;
                    o.o.stopper && (i = c(h(i, o.o.max), o.o.min)),
                    o.change(o._validate(i)),
                    o._draw(),
                    r = window.setTimeout(function() {
                        l *= 2
                    }, 30)
                }
            }).bind("keyup", function(e) {
                isNaN(n) ? r && (window.clearTimeout(r),
                r = null,
                l = 1,
                o.val(o.$.val())) : o.$.val() > o.o.max && o.$.val(o.o.max) || o.$.val() < o.o.min && o.$.val(o.o.min)
            }),
            this.$c.bind("mousewheel DOMMouseScroll", e),
            this.$.bind("mousewheel DOMMouseScroll", e)
        }
        ,
        this.init = function() {
            (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min),
            this.$.val(this.v),
            this.w2 = this.w / 2,
            this.cursorExt = this.o.cursor / 100,
            this.xy = this.w2 * this.scale,
            this.lineWidth = this.xy * this.o.thickness,
            this.lineCap = this.o.lineCap,
            this.radius = this.xy - this.lineWidth / 2,
            this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset),
            this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc),
            this.angleOffset = this.o.angleOffset * Math.PI / 180,
            this.angleArc = this.o.angleArc * Math.PI / 180,
            this.startAngle = 1.5 * Math.PI + this.angleOffset,
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var e = c(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        }
        ,
        this.change = function(e) {
            this.cv = e,
            this.$.val(this.o.format(e))
        }
        ,
        this.angle = function(e) {
            return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        }
        ,
        this.arc = function(e) {
            var t, i;
            return e = this.angle(e),
            i = this.o.flip ? (t = this.endAngle + 1e-5) - e - 1e-5 : (t = this.startAngle - 1e-5) + e + 1e-5,
            this.o.cursor && (t = i - this.cursorExt) && (i += this.cursorExt),
            {
                s: t,
                e: i,
                d: this.o.flip && !this.o.cursor
            }
        }
        ,
        this.draw = function() {
            var e, t = this.g, i = this.arc(this.cv), n = 1;
            t.lineWidth = this.lineWidth,
            t.lineCap = this.lineCap,
            "none" !== this.o.bgColor && (t.beginPath(),
            t.strokeStyle = this.o.bgColor,
            t.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0),
            t.stroke()),
            this.o.displayPrevious && (e = this.arc(this.v),
            t.beginPath(),
            t.strokeStyle = this.pColor,
            t.arc(this.xy, this.xy, this.radius, e.s, e.e, e.d),
            t.stroke(),
            n = this.cv == this.v),
            t.beginPath(),
            t.strokeStyle = n ? this.o.fgColor : this.fgColor,
            t.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d),
            t.stroke()
        }
        ,
        this.cancel = function() {
            this.val(this.v)
        }
    }
    ,
    u.fn.dial = u.fn.knob = function(t) {
        return this.each(function() {
            var e = new i.Dial;
            e.o = t,
            e.$ = u(this),
            e.run()
        }).parent()
    }
});
