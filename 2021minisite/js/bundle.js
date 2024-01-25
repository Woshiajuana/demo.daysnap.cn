!function (t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {i: n, l: !1, exports: {}};
        return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    var r = {};
    e.m = t, e.c = r, e.d = function (t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var r = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./", e(e.s = 36)
}([function (t, e, r) {
    "use strict";

    function n(t, e) {
        if (!t) return null;
        var r = "";
        if ("string" == typeof t) {
            var n = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
            n && (r = n[1].toLowerCase())
        }
        for (var i = B.length - 1; i >= 0; --i) {
            var o = B[i];
            if (o.test && o.test(t, r)) return new o(t, e)
        }
        throw new Error("Unrecognized source type to auto-detect Resource")
    }

    function i(t, e) {
        function r() {
            this.constructor = t
        }

        G(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function o(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && (r[n[i]] = t[n[i]]);
        return r
    }

    function s(t) {
        t.destroy = function () {
        }, t.on = function () {
        }, t.once = function () {
        }, t.emit = function () {
        }
    }

    function a(t, e) {
        for (var r = 0, n = 0, i = {}, o = 0; o < t.length; o++) n += e[o], r += t[o].length;
        for (var s = new ArrayBuffer(4 * r), a = null, u = 0, o = 0; o < t.length; o++) {
            var h = e[o], c = t[o], l = Object(D.getBufferType)(c);
            i[l] || (i[l] = new pt[l](s)), a = i[l];
            for (var f = 0; f < c.length; f++) {
                a[(f / h | 0) * n + u + f % h] = c[f]
            }
            u += h
        }
        return new Float32Array(s)
    }

    function u(t, e, r) {
        var n = t.createShader(e);
        return t.shaderSource(n, r), t.compileShader(n), n
    }

    function h(t, e) {
        var r = t.getShaderSource(e).split("\n").map(function (t, e) {
            return e + ": " + t
        }), n = t.getShaderInfoLog(e), i = n.split("\n"), o = {}, s = i.map(function (t) {
            return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))
        }).filter(function (t) {
            return !(!t || o[t]) && (o[t] = !0, !0)
        }), a = [""];
        s.forEach(function (t) {
            r[t - 1] = "%c" + r[t - 1] + "%c", a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
        });
        var u = r.join("\n");
        a[0] = u
    }

    function c(t, e, r, n) {
        t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || h(t, r), t.getShaderParameter(n, t.COMPILE_STATUS) || h(t, n), t.getProgramInfoLog(e))
    }

    function l(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
        return e
    }

    function f(t, e) {
        switch (t) {
            case"float":
                return 0;
            case"vec2":
                return new Float32Array(2 * e);
            case"vec3":
                return new Float32Array(3 * e);
            case"vec4":
                return new Float32Array(4 * e);
            case"int":
            case"uint":
            case"sampler2D":
            case"sampler2DArray":
                return 0;
            case"ivec2":
                return new Int32Array(2 * e);
            case"ivec3":
                return new Int32Array(3 * e);
            case"ivec4":
                return new Int32Array(4 * e);
            case"uvec2":
                return new Uint32Array(2 * e);
            case"uvec3":
                return new Uint32Array(3 * e);
            case"uvec4":
                return new Uint32Array(4 * e);
            case"bool":
                return !1;
            case"bvec2":
                return l(2 * e);
            case"bvec3":
                return l(3 * e);
            case"bvec4":
                return l(4 * e);
            case"mat2":
                return new Float32Array([1, 0, 0, 1]);
            case"mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case"mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
        return null
    }

    function d() {
        if (Bt === Ut || Bt && Bt.isContextLost()) {
            var t = document.createElement("canvas"), e = void 0;
            N.b.PREFER_ENV >= C.g.WEBGL2 && (e = t.getContext("webgl2", {})), e || (e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {}), e ? e.getExtension("WEBGL_draw_buffers") : e = null), Bt = e
        }
        return Bt
    }

    function p() {
        if (!at) {
            at = C.m.MEDIUM;
            var t = d();
            if (t && t.getShaderPrecisionFormat) {
                var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                at = e.precision ? C.m.HIGH : C.m.MEDIUM
            }
        }
        return at
    }

    function _(t, e, r) {
        if ("precision" !== t.substring(0, 9)) {
            var n = e;
            return e === C.m.HIGH && r !== C.m.HIGH && (n = C.m.MEDIUM), "precision " + n + " float;\n" + t
        }
        return r !== C.m.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
    }

    function m(t) {
        return Gt[t]
    }

    function v(t, e) {
        if (!kt) {
            var r = Object.keys(Xt);
            kt = {};
            for (var n = 0; n < r.length; ++n) {
                var i = r[n];
                kt[t[i]] = Xt[i]
            }
        }
        return kt[e]
    }

    function g(t, e) {
        var r = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "];
        for (var n in t.uniforms) {
            var i = e[n];
            if (i) {
                for (var o = t.uniforms[n], s = !1, a = 0; a < jt.length; a++) if (jt[a].test(i, o)) {
                    r.push(jt[a].code(n, o)), s = !0;
                    break
                }
                if (!s) {
                    var u = 1 === i.size ? Ht : Yt, h = u[i.type].replace("location", 'ud["' + n + '"].location');
                    r.push('\n            cv = ud["' + n + '"].value;\n            v = uv["' + n + '"];\n            ' + h + ";")
                }
            } else t.uniforms[n].group && (t.uniforms[n].ubo ? r.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + n + ", '" + n + "');\n                    ") : r.push("\n                        renderer.shader.syncUniformGroup(uv." + n + ", syncData);\n                    "))
        }
        return new Function("ud", "uv", "renderer", "syncData", r.join("\n"))
    }

    function y(t) {
        for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
        return e
    }

    function T(t, e) {
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        for (var r = e.createShader(e.FRAGMENT_SHADER); ;) {
            var n = Vt.replace(/%forloop%/gi, y(t));
            if (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
            t = t / 2 | 0
        }
        return t
    }

    function E() {
        if ("boolean" == typeof ut) return ut;
        try {
            var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
            ut = !0 === t({a: "b"}, "a", "b")
        } catch (t) {
            ut = !1
        }
        return ut
    }

    function b(t, e, r, n, i) {
        r.buffer.update(i)
    }

    function x(t) {
        for (var e = t.map(function (t) {
            return {data: t, offset: 0, dataLen: 0, dirty: 0}
        }), r = 0, n = 0, i = 0, o = 0; o < e.length; o++) {
            var s = e[o];
            if (r = fe[s.data.type], s.data.size > 1 && (r = Math.max(r, 16) * s.data.size), s.dataLen = r, n % r != 0 && n < 16) {
                var a = n % r % 16;
                n += a, i += a
            }
            n + r > 16 ? (i = 16 * Math.ceil(i / 16), s.offset = i, i += r, n = r) : (s.offset = i, n += r, i += r)
        }
        return i = 16 * Math.ceil(i / 16), {uboElements: e, size: i}
    }

    function O(t, e) {
        var r = [];
        for (var n in t) e[n] && r.push(e[n]);
        return r.sort(function (t, e) {
            return t.index - e.index
        }), r
    }

    function R(t, e) {
        if (!t.autoManage) return {size: 0, syncFunc: b};
        for (var r = O(t.uniforms, e), n = x(r), i = n.uboElements, o = n.size, s = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], a = 0; a < i.length; a++) {
            for (var u = i[a], h = t.uniforms[u.data.name], c = u.data.name, l = !1, f = 0; f < jt.length; f++) {
                var d = jt[f];
                if (d.codeUbo && d.test(u.data, h)) {
                    s.push("offset = " + u.offset / 4 + ";", jt[f].codeUbo(u.data.name, h)), l = !0;
                    break
                }
            }
            if (!l) if (u.data.size > 1) {
                var p = m(u.data.type), _ = Math.max(fe[u.data.type] / 16, 1), v = p / _, g = (4 - v % 4) % 4;
                s.push("\n                cv = ud." + c + ".value;\n                v = uv." + c + ";\n                offset = " + u.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + u.data.size * _ + "; i++)\n                {\n                    for(var j = 0; j < " + v + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + g + ";\n                }\n\n                ")
            } else {
                var y = le[u.data.type];
                s.push("\n                cv = ud." + c + ".value;\n                v = uv." + c + ";\n                offset = " + u.offset / 4 + ";\n                " + y + ";\n                ")
            }
        }
        return s.push("\n       renderer.buffer.update(buffer);\n    "), {
            size: o,
            syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join("\n"))
        }
    }

    function A(t, e) {
        for (var r = {}, n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), i = 0; i < n; i++) {
            var o = e.getActiveAttrib(t, i);
            if (0 !== o.name.indexOf("gl_")) {
                var s = v(e, o.type), a = {type: s, name: o.name, size: m(s), location: i};
                r[o.name] = a
            }
        }
        return r
    }

    function S(t, e) {
        for (var r = {}, n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), i = 0; i < n; i++) {
            var o = e.getActiveUniform(t, i), s = o.name.replace(/\[.*?\]$/, ""), a = !!o.name.match(/\[.*?\]$/),
                u = v(e, o.type);
            r[s] = {name: s, index: i, type: u, size: o.size, isArray: a, value: f(u, o.size)}
        }
        return r
    }

    function I(t, e) {
        var r = u(t, t.VERTEX_SHADER, e.vertexSrc), n = u(t, t.FRAGMENT_SHADER, e.fragmentSrc), i = t.createProgram();
        t.attachShader(i, r), t.attachShader(i, n), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || c(t, i, r, n), e.attributeData = A(i, t), e.uniformData = S(i, t);
        var o = Object.keys(e.attributeData);
        o.sort(function (t, e) {
            return t > e ? 1 : -1
        });
        for (var s = 0; s < o.length; s++) e.attributeData[o[s]].location = s, t.bindAttribLocation(i, s, o[s]);
        t.linkProgram(i), t.deleteShader(r), t.deleteShader(n);
        var a = {};
        for (var s in e.uniformData) {
            var h = e.uniformData[s];
            a[s] = {location: t.getUniformLocation(i, s), value: f(h.type, h.size)}
        }
        return new pe(i, a)
    }

    function w(t, e) {
        return void 0 === e && (e = []), e[C.b.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.ADD] = [t.ONE, t.ONE], e[C.b.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.NONE] = [0, 0], e[C.b.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[C.b.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[C.b.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[C.b.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[C.b.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[C.b.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[C.b.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[C.b.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[C.b.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[C.b.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[C.b.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
    }

    function P(t) {
        var e, r, n, i, o, s, a, u, h, c, l, f, d, p, _, m, v, g, y, T, E, b, x;
        return "WebGL2RenderingContext" in self && t instanceof self.WebGL2RenderingContext ? (e = {}, e[C.r.UNSIGNED_BYTE] = (r = {}, r[C.h.RGBA] = t.RGBA8, r[C.h.RGB] = t.RGB8, r[C.h.RG] = t.RG8, r[C.h.RED] = t.R8, r[C.h.RGBA_INTEGER] = t.RGBA8UI, r[C.h.RGB_INTEGER] = t.RGB8UI, r[C.h.RG_INTEGER] = t.RG8UI, r[C.h.RED_INTEGER] = t.R8UI, r[C.h.ALPHA] = t.ALPHA, r[C.h.LUMINANCE] = t.LUMINANCE, r[C.h.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, r), e[C.r.BYTE] = (n = {}, n[C.h.RGBA] = t.RGBA8_SNORM, n[C.h.RGB] = t.RGB8_SNORM, n[C.h.RG] = t.RG8_SNORM, n[C.h.RED] = t.R8_SNORM, n[C.h.RGBA_INTEGER] = t.RGBA8I, n[C.h.RGB_INTEGER] = t.RGB8I, n[C.h.RG_INTEGER] = t.RG8I, n[C.h.RED_INTEGER] = t.R8I, n), e[C.r.UNSIGNED_SHORT] = (i = {}, i[C.h.RGBA_INTEGER] = t.RGBA16UI, i[C.h.RGB_INTEGER] = t.RGB16UI, i[C.h.RG_INTEGER] = t.RG16UI, i[C.h.RED_INTEGER] = t.R16UI, i[C.h.DEPTH_COMPONENT] = t.DEPTH_COMPONENT16, i), e[C.r.SHORT] = (o = {}, o[C.h.RGBA_INTEGER] = t.RGBA16I, o[C.h.RGB_INTEGER] = t.RGB16I, o[C.h.RG_INTEGER] = t.RG16I, o[C.h.RED_INTEGER] = t.R16I, o), e[C.r.UNSIGNED_INT] = (s = {}, s[C.h.RGBA_INTEGER] = t.RGBA32UI, s[C.h.RGB_INTEGER] = t.RGB32UI, s[C.h.RG_INTEGER] = t.RG32UI, s[C.h.RED_INTEGER] = t.R32UI, s[C.h.DEPTH_COMPONENT] = t.DEPTH_COMPONENT24, s), e[C.r.INT] = (a = {}, a[C.h.RGBA_INTEGER] = t.RGBA32I, a[C.h.RGB_INTEGER] = t.RGB32I, a[C.h.RG_INTEGER] = t.RG32I, a[C.h.RED_INTEGER] = t.R32I, a), e[C.r.FLOAT] = (u = {}, u[C.h.RGBA] = t.RGBA32F, u[C.h.RGB] = t.RGB32F, u[C.h.RG] = t.RG32F, u[C.h.RED] = t.R32F, u[C.h.DEPTH_COMPONENT] = t.DEPTH_COMPONENT32F, u), e[C.r.HALF_FLOAT] = (h = {}, h[C.h.RGBA] = t.RGBA16F, h[C.h.RGB] = t.RGB16F, h[C.h.RG] = t.RG16F, h[C.h.RED] = t.R16F, h), e[C.r.UNSIGNED_SHORT_5_6_5] = (c = {}, c[C.h.RGB] = t.RGB565, c), e[C.r.UNSIGNED_SHORT_4_4_4_4] = (l = {}, l[C.h.RGBA] = t.RGBA4, l), e[C.r.UNSIGNED_SHORT_5_5_5_1] = (f = {}, f[C.h.RGBA] = t.RGB5_A1, f), e[C.r.UNSIGNED_INT_2_10_10_10_REV] = (d = {}, d[C.h.RGBA] = t.RGB10_A2, d[C.h.RGBA_INTEGER] = t.RGB10_A2UI, d), e[C.r.UNSIGNED_INT_10F_11F_11F_REV] = (p = {}, p[C.h.RGB] = t.R11F_G11F_B10F, p), e[C.r.UNSIGNED_INT_5_9_9_9_REV] = (_ = {}, _[C.h.RGB] = t.RGB9_E5, _), e[C.r.UNSIGNED_INT_24_8] = (m = {}, m[C.h.DEPTH_STENCIL] = t.DEPTH24_STENCIL8, m), e[C.r.FLOAT_32_UNSIGNED_INT_24_8_REV] = (v = {}, v[C.h.DEPTH_STENCIL] = t.DEPTH32F_STENCIL8, v), x = e) : (g = {}, g[C.r.UNSIGNED_BYTE] = (y = {}, y[C.h.RGBA] = t.RGBA, y[C.h.RGB] = t.RGB, y[C.h.ALPHA] = t.ALPHA, y[C.h.LUMINANCE] = t.LUMINANCE, y[C.h.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, y), g[C.r.UNSIGNED_SHORT_5_6_5] = (T = {}, T[C.h.RGB] = t.RGB, T), g[C.r.UNSIGNED_SHORT_4_4_4_4] = (E = {}, E[C.h.RGBA] = t.RGBA, E), g[C.r.UNSIGNED_SHORT_5_5_5_1] = (b = {}, b[C.h.RGBA] = t.RGBA, b), x = g), x
    }

    function M(t) {
        return Ce.create(t)
    }

    r.d(e, "a", function () {
        return ke
    }), r.d(e, "b", function () {
        return V
    }), r.d(e, "c", function () {
        return Pe
    }), r.d(e, "d", function () {
        return z
    }), r.d(e, "e", function () {
        return lt
    }), r.d(e, "f", function () {
        return W
    }), r.d(e, "g", function () {
        return nt
    }), r.d(e, "h", function () {
        return Y
    }), r.d(e, "i", function () {
        return Ue
    }), r.d(e, "j", function () {
        return je
    }), r.d(e, "k", function () {
        return Ve
    }), r.d(e, "l", function () {
        return ze
    }), r.d(e, "m", function () {
        return Xe
    }), r.d(e, "n", function () {
        return It
    }), r.d(e, "o", function () {
        return Be
    }), r.d(e, "p", function () {
        return dt
    }), r.d(e, "q", function () {
        return j
    }), r.d(e, "r", function () {
        return q
    }), r.d(e, "s", function () {
        return Pt
    }), r.d(e, "t", function () {
        return Z
    }), r.d(e, "u", function () {
        return Jt
    }), r.d(e, "v", function () {
        return xt
    }), r.d(e, "w", function () {
        return At
    }), r.d(e, "x", function () {
        return rt
    }), r.d(e, "y", function () {
        return Ct
    }), r.d(e, "z", function () {
        return Mt
    }), r.d(e, "A", function () {
        return pe
    }), r.d(e, "B", function () {
        return Ae
    }), r.d(e, "C", function () {
        return gt
    }), r.d(e, "D", function () {
        return Lt
    }), r.d(e, "E", function () {
        return de
    }), r.d(e, "F", function () {
        return B
    }), r.d(e, "G", function () {
        return Q
    }), r.d(e, "H", function () {
        return K
    }), r.d(e, "I", function () {
        return Ft
    }), r.d(e, "J", function () {
        return ne
    }), r.d(e, "K", function () {
        return St
    }), r.d(e, "L", function () {
        return qt
    }), r.d(e, "M", function () {
        return ae
    }), r.d(e, "N", function () {
        return yt
    }), r.d(e, "O", function () {
        return Tt
    }), r.d(e, "P", function () {
        return ht
    }), r.d(e, "Q", function () {
        return ct
    }), r.d(e, "R", function () {
        return ce
    }), r.d(e, "S", function () {
        return Ce
    }), r.d(e, "T", function () {
        return X
    }), r.d(e, "U", function () {
        return J
    }), r.d(e, "V", function () {
        return oe
    }), r.d(e, "W", function () {
        return Zt
    }), r.d(e, "X", function () {
        return ve
    }), r.d(e, "Y", function () {
        return re
    }), r.d(e, "Z", function () {
        return Kt
    }), r.d(e, "_0", function () {
        return Oe
    }), r.d(e, "_1", function () {
        return se
    }), r.d(e, "_2", function () {
        return Fe
    }), r.d(e, "_3", function () {
        return st
    }), r.d(e, "_4", function () {
        return Re
    }), r.d(e, "_5", function () {
        return ee
    }), r.d(e, "_6", function () {
        return Se
    }), r.d(e, "_7", function () {
        return it
    }), r.d(e, "_8", function () {
        return bt
    }), r.d(e, "_9", function () {
        return $
    }), r.d(e, "_10", function () {
        return Ge
    }), r.d(e, "_11", function () {
        return M
    }), r.d(e, "_12", function () {
        return n
    }), r.d(e, "_13", function () {
        return T
    }), r.d(e, "_14", function () {
        return x
    }), r.d(e, "_15", function () {
        return Le
    }), r.d(e, "_16", function () {
        return De
    }), r.d(e, "_17", function () {
        return I
    }), r.d(e, "_18", function () {
        return R
    }), r.d(e, "_19", function () {
        return d
    }), r.d(e, "_20", function () {
        return O
    }), r.d(e, "_21", function () {
        return We
    }), r.d(e, "_22", function () {
        return Ze
    }), r.d(e, "_23", function () {
        return jt
    });
    var N = r(3), C = r(5), D = r(1), L = r(22), F = r(8), U = r(2);/*!
 * @pixi/core - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    N.b.PREFER_ENV = D.isMobile.any ? C.g.WEBGL : C.g.WEBGL2, N.b.STRICT_TEXTURE_CACHE = !1;
    var B = [], G = function (t, e) {
        return (G = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, k = function () {
        return k = Object.assign || function (t) {
            for (var e, r = arguments, n = 1, i = arguments.length; n < i; n++) {
                e = r[n];
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
        }, k.apply(this, arguments)
    }, X = function () {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new L.a("setRealSize"), this.onUpdate = new L.a("update"), this.onError = new L.a("onError")
        }

        return t.prototype.bind = function (t) {
            this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
        }, t.prototype.unbind = function (t) {
            this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
        }, t.prototype.resize = function (t, e) {
            t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.emit(t, e))
        }, Object.defineProperty(t.prototype, "valid", {
            get: function () {
                return !!this._width && !!this._height
            }, enumerable: !1, configurable: !0
        }), t.prototype.update = function () {
            this.destroyed || this.onUpdate.emit()
        }, t.prototype.load = function () {
            return Promise.resolve(this)
        }, Object.defineProperty(t.prototype, "width", {
            get: function () {
                return this._width
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "height", {
            get: function () {
                return this._height
            }, enumerable: !1, configurable: !0
        }), t.prototype.style = function (t, e, r) {
            return !1
        }, t.prototype.dispose = function () {
        }, t.prototype.destroy = function () {
            this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
        }, t.test = function (t, e) {
            return !1
        }, t
    }(), j = function (t) {
        function e(e, r) {
            var n = this, i = r || {}, o = i.width, s = i.height;
            if (!o || !s) throw new Error("BufferResource width or height invalid");
            return n = t.call(this, o, s) || this, n.data = e, n
        }

        return i(e, t), e.prototype.upload = function (t, e, r) {
            var n = t.gl;
            n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === C.a.UNPACK);
            var i = e.realWidth, o = e.realHeight;
            return r.width === i && r.height === o ? n.texSubImage2D(e.target, 0, 0, 0, i, o, e.format, r.type, this.data) : (r.width = i, r.height = o, n.texImage2D(e.target, 0, r.internalFormat, i, o, 0, e.format, r.type, this.data)), !0
        }, e.prototype.dispose = function () {
            this.data = null
        }, e.test = function (t) {
            return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
        }, e
    }(X), H = {scaleMode: C.p.NEAREST, format: C.h.RGBA, alphaMode: C.a.NPM}, Y = function (t) {
        function e(e, r) {
            void 0 === e && (e = null), void 0 === r && (r = null);
            var i = t.call(this) || this;
            r = r || {};
            var o = r.alphaMode, s = r.mipmap, a = r.anisotropicLevel, u = r.scaleMode, h = r.width, c = r.height,
                l = r.wrapMode, f = r.format, d = r.type, p = r.target, _ = r.resolution, m = r.resourceOptions;
            return !e || e instanceof X || (e = n(e, m), e.internal = !0), i.resolution = _ || N.b.RESOLUTION, i.width = Math.round((h || 0) * i.resolution) / i.resolution, i.height = Math.round((c || 0) * i.resolution) / i.resolution, i._mipmap = void 0 !== s ? s : N.b.MIPMAP_TEXTURES, i.anisotropicLevel = void 0 !== a ? a : N.b.ANISOTROPIC_LEVEL, i._wrapMode = l || N.b.WRAP_MODE, i._scaleMode = void 0 !== u ? u : N.b.SCALE_MODE, i.format = f || C.h.RGBA, i.type = d || C.r.UNSIGNED_BYTE, i.target = p || C.q.TEXTURE_2D, i.alphaMode = void 0 !== o ? o : C.a.UNPACK, i.uid = Object(D.uid)(), i.touched = 0, i.isPowerOfTwo = !1, i._refreshPOT(), i._glTextures = {}, i.dirtyId = 0, i.dirtyStyleId = 0, i.cacheId = null, i.valid = h > 0 && c > 0, i.textureCacheIds = [], i.destroyed = !1, i.resource = null, i._batchEnabled = 0, i._batchLocation = 0, i.parentTextureArray = null, i.setResource(e), i
        }

        return i(e, t), Object.defineProperty(e.prototype, "realWidth", {
            get: function () {
                return Math.round(this.width * this.resolution)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "realHeight", {
            get: function () {
                return Math.round(this.height * this.resolution)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "mipmap", {
            get: function () {
                return this._mipmap
            }, set: function (t) {
                this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "scaleMode", {
            get: function () {
                return this._scaleMode
            }, set: function (t) {
                this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "wrapMode", {
            get: function () {
                return this._wrapMode
            }, set: function (t) {
                this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++)
            }, enumerable: !1, configurable: !0
        }), e.prototype.setStyle = function (t, e) {
            var r;
            return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this
        }, e.prototype.setSize = function (t, e, r) {
            return r = r || this.resolution, this.setRealSize(t * r, e * r, r)
        }, e.prototype.setRealSize = function (t, e, r) {
            return this.resolution = r || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
        }, e.prototype._refreshPOT = function () {
            this.isPowerOfTwo = Object(D.isPow2)(this.realWidth) && Object(D.isPow2)(this.realHeight)
        }, e.prototype.setResolution = function (t) {
            var e = this.resolution;
            return e === t ? this : (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT(), this)
        }, e.prototype.setResource = function (t) {
            if (this.resource === t) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return t.bind(this), this.resource = t, this
        }, e.prototype.update = function () {
            this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
        }, e.prototype.onError = function (t) {
            this.emit("error", this, t)
        }, e.prototype.destroy = function () {
            this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete D.BaseTextureCache[this.cacheId], delete D.TextureCache[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
        }, e.prototype.dispose = function () {
            this.emit("dispose", this)
        }, e.prototype.castToBaseTexture = function () {
            return this
        }, e.from = function (t, r, n) {
            void 0 === n && (n = N.b.STRICT_TEXTURE_CACHE);
            var i = "string" == typeof t, o = null;
            if (i) o = t; else {
                if (!t._pixiId) {
                    var s = r && r.pixiIdPrefix || "pixiid";
                    t._pixiId = s + "_" + Object(D.uid)()
                }
                o = t._pixiId
            }
            var a = D.BaseTextureCache[o];
            if (i && n && !a) throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.');
            return a || (a = new e(t, r), a.cacheId = o, e.addToCache(a, o)), a
        }, e.fromBuffer = function (t, r, n, i) {
            t = t || new Float32Array(r * n * 4);
            var o = new j(t, {width: r, height: n}), s = t instanceof Float32Array ? C.r.FLOAT : C.r.UNSIGNED_BYTE;
            return new e(o, Object.assign(H, i || {width: r, height: n, type: s}))
        }, e.addToCache = function (t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), D.BaseTextureCache[e], D.BaseTextureCache[e] = t)
        }, e.removeFromCache = function (t) {
            if ("string" == typeof t) {
                var e = D.BaseTextureCache[t];
                if (e) {
                    var r = e.textureCacheIds.indexOf(t);
                    return r > -1 && e.textureCacheIds.splice(r, 1), delete D.BaseTextureCache[t], e
                }
            } else if (t && t.textureCacheIds) {
                for (var n = 0; n < t.textureCacheIds.length; ++n) delete D.BaseTextureCache[t.textureCacheIds[n]];
                return t.textureCacheIds.length = 0, t
            }
            return null
        }, e._globalBatch = 0, e
    }(D.EventEmitter), V = function (t) {
        function e(e, r) {
            var n = this, i = r || {}, o = i.width, s = i.height;
            n = t.call(this, o, s) || this, n.items = [], n.itemDirtyIds = [];
            for (var a = 0; a < e; a++) {
                var u = new Y;
                n.items.push(u), n.itemDirtyIds.push(-2)
            }
            return n.length = e, n._load = null, n.baseTexture = null, n
        }

        return i(e, t), e.prototype.initFromArray = function (t, e) {
            for (var r = 0; r < this.length; r++) t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r] instanceof X ? this.addResourceAt(t[r], r) : this.addResourceAt(n(t[r], e), r))
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
            this.items = null, this.itemDirtyIds = null, this._load = null
        }, e.prototype.addResourceAt = function (t, e) {
            if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
            return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
        }, e.prototype.bind = function (e) {
            if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
            t.prototype.bind.call(this, e);
            for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = e, this.items[r].on("update", e.update, e)
        }, e.prototype.unbind = function (e) {
            t.prototype.unbind.call(this, e);
            for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = null, this.items[r].off("update", e.update, e)
        }, e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.items.map(function (t) {
                return t.resource
            }).filter(function (t) {
                return t
            }), r = e.map(function (t) {
                return t.load()
            });
            return this._load = Promise.all(r).then(function () {
                var e = t.items[0], r = e.realWidth, n = e.realHeight;
                return t.resize(r, n), Promise.resolve(t)
            }), this._load
        }, e
    }(X), z = function (t) {
        function e(e, r) {
            var n, i, o = this, s = r || {}, a = s.width, u = s.height;
            return Array.isArray(e) ? (n = e, i = e.length) : i = e, o = t.call(this, i, {
                width: a,
                height: u
            }) || this, n && o.initFromArray(n, r), o
        }

        return i(e, t), e.prototype.addBaseTextureAt = function (t, e) {
            if (!t.resource) throw new Error("ArrayResource does not support RenderTexture");
            return this.addResourceAt(t.resource, e), this
        }, e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), e.target = C.q.TEXTURE_2D_ARRAY
        }, e.prototype.upload = function (t, e, r) {
            var n = this, i = n.length, o = n.itemDirtyIds, s = n.items, a = t.gl;
            r.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, i, 0, e.format, r.type, null);
            for (var u = 0; u < i; u++) {
                var h = s[u];
                o[u] < h.dirtyId && (o[u] = h.dirtyId, h.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, u, h.resource.width, h.resource.height, 1, e.format, r.type, h.resource.source))
            }
            return !0
        }, e
    }(V), W = function (t) {
        function e(e) {
            var r = this, n = e, i = n.naturalWidth || n.videoWidth || n.width,
                o = n.naturalHeight || n.videoHeight || n.height;
            return r = t.call(this, i, o) || this, r.source = e, r.noSubImage = !1, r
        }

        return i(e, t), e.crossOrigin = function (t, e, r) {
            void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = Object(D.determineCrossOrigin)(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous")
        }, e.prototype.upload = function (t, e, r, n) {
            var i = t.gl, o = e.realWidth, s = e.realHeight;
            return n = n || this.source, i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === C.a.UNPACK), this.noSubImage || e.target !== i.TEXTURE_2D || r.width !== o || r.height !== s ? (r.width = o, r.height = s, i.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, n)) : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, e.format, r.type, n), !0
        }, e.prototype.update = function () {
            if (!this.destroyed) {
                var e = this.source, r = e.naturalWidth || e.videoWidth || e.width,
                    n = e.naturalHeight || e.videoHeight || e.height;
                this.resize(r, n), t.prototype.update.call(this)
            }
        }, e.prototype.dispose = function () {
            this.source = null
        }, e
    }(X), q = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return i(e, t), e.test = function (t) {
            var e = self.OffscreenCanvas;
            return !!(e && t instanceof e) || self.HTMLCanvasElement && t instanceof HTMLCanvasElement
        }, e
    }(W), Z = function (t) {
        function e(r, n) {
            var i = this, o = n || {}, s = o.width, a = o.height, u = o.autoLoad, h = o.linkBaseTexture;
            if (r && r.length !== e.SIDES) throw new Error("Invalid length. Got " + r.length + ", expected 6");
            i = t.call(this, 6, {width: s, height: a}) || this;
            for (var c = 0; c < e.SIDES; c++) i.items[c].target = C.q.TEXTURE_CUBE_MAP_POSITIVE_X + c;
            return i.linkBaseTexture = !1 !== h, r && i.initFromArray(r, n), !1 !== u && i.load(), i
        }

        return i(e, t), e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), e.target = C.q.TEXTURE_CUBE_MAP
        }, e.prototype.addBaseTextureAt = function (t, e, r) {
            if (void 0 === r && (r = this.linkBaseTexture), !this.items[e]) throw new Error("Index " + e + " is out of bounds");
            if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
                if (!t.resource) throw new Error("CubeResource does not support copying of renderTexture.");
                this.addResourceAt(t.resource, e)
            } else t.target = C.q.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
            return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this
        }, e.prototype.upload = function (t, r, n) {
            for (var i = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                var s = this.items[o];
                i[o] < s.dirtyId && (s.valid && s.resource ? (s.resource.upload(t, s, n), i[o] = s.dirtyId) : i[o] < -1 && (t.gl.texImage2D(s.target, 0, n.internalFormat, r.realWidth, r.realHeight, 0, r.format, n.type, null), i[o] = -1))
            }
            return !0
        }, e.test = function (t) {
            return Array.isArray(t) && t.length === e.SIDES
        }, e.SIDES = 6, e
    }(V), K = function (t) {
        function e(e, r) {
            var n = this;
            if (r = r || {}, !(e instanceof HTMLImageElement)) {
                var i = new Image;
                W.crossOrigin(i, e, r.crossorigin), i.src = e, e = i
            }
            return n = t.call(this, e) || this, !e.complete && n._width && n._height && (n._width = 0, n._height = 0), n.url = e.src, n._process = null, n.preserveBitmap = !1, n.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : N.b.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap, n.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null, n.bitmap = null, n._load = null, !1 !== r.autoLoad && n.load(), n
        }

        return i(e, t), e.prototype.load = function (t) {
            var e = this;
            return this._load ? this._load : (void 0 !== t && (this.createBitmap = t), this._load = new Promise(function (t, r) {
                var n = e.source;
                e.url = n.src;
                var i = function () {
                    e.destroyed || (n.onload = null, n.onerror = null, e.resize(n.width, n.height), e._load = null, t(e.createBitmap ? e.process() : e))
                };
                n.complete && n.src ? i() : (n.onload = i, n.onerror = function (t) {
                    r(t), e.onError.emit(t)
                })
            }), this._load)
        }, e.prototype.process = function () {
            var t = this, e = this.source;
            if (null !== this._process) return this._process;
            if (null !== this.bitmap || !self.createImageBitmap) return Promise.resolve(this);
            var r = self.createImageBitmap, n = !e.crossOrigin || "anonymous" === e.crossOrigin;
            return this._process = fetch(e.src, {mode: n ? "cors" : "no-cors"}).then(function (t) {
                return t.blob()
            }).then(function (n) {
                return r(n, 0, 0, e.width, e.height, {premultiplyAlpha: t.alphaMode === C.a.UNPACK ? "premultiply" : "none"})
            }).then(function (e) {
                return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
            }), this._process
        }, e.prototype.upload = function (e, r, n) {
            if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode), !this.createBitmap) return t.prototype.upload.call(this, e, r, n);
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if (t.prototype.upload.call(this, e, r, n, this.bitmap), !this.preserveBitmap) {
                var i = !0, o = r._glTextures;
                for (var s in o) {
                    var a = o[s];
                    if (a !== n && a.dirtyId !== r.dirtyId) {
                        i = !1;
                        break
                    }
                }
                i && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
            }
            return !0
        }, e.prototype.dispose = function () {
            this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
        }, e.test = function (t) {
            return "string" == typeof t || t instanceof HTMLImageElement
        }, e
    }(W), J = function (t) {
        function e(e, r) {
            var n = this;
            return r = r || {}, n = t.call(this, document.createElement("canvas")) || this, n._width = 0, n._height = 0, n.svg = e, n.scale = r.scale || 1, n._overrideWidth = r.width, n._overrideHeight = r.height, n._resolve = null, n._crossorigin = r.crossorigin, n._load = null, !1 !== r.autoLoad && n.load(), n
        }

        return i(e, t), e.prototype.load = function () {
            var t = this;
            return this._load ? this._load : (this._load = new Promise(function (e) {
                if (t._resolve = function () {
                    t.resize(t.source.width, t.source.height), e(t)
                }, /^\<svg/.test(t.svg.trim())) {
                    if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                    t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
                }
                t._loadSvg()
            }), this._load)
        }, e.prototype._loadSvg = function () {
            var t = this, e = new Image;
            W.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = function (r) {
                t._resolve && (e.onerror = null, t.onError.emit(r))
            }, e.onload = function () {
                if (t._resolve) {
                    var r = e.width, n = e.height;
                    if (!r || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                    var i = r * t.scale, o = n * t.scale;
                    (t._overrideWidth || t._overrideHeight) && (i = t._overrideWidth || t._overrideHeight / n * r, o = t._overrideHeight || t._overrideWidth / r * n), i = Math.round(i), o = Math.round(o);
                    var s = t.source;
                    s.width = i, s.height = o, s._pixiId = "canvas_" + Object(D.uid)(), s.getContext("2d").drawImage(e, 0, 0, r, n, 0, 0, i, o), t._resolve(), t._resolve = null
                }
            }
        }, e.getSize = function (t) {
            var r = e.SVG_SIZE.exec(t), n = {};
            return r && (n[r[1]] = Math.round(parseFloat(r[3])), n[r[5]] = Math.round(parseFloat(r[7]))), n
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null
        }, e.test = function (t, r) {
            return "svg" === r || "string" == typeof t && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t) || "string" == typeof t && e.SVG_XML.test(t)
        }, e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e
    }(W), $ = function (t) {
        function e(r, n) {
            var i = this;
            if (n = n || {}, !(r instanceof HTMLVideoElement)) {
                var o = document.createElement("video");
                o.setAttribute("preload", "auto"), o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", ""), "string" == typeof r && (r = [r]);
                var s = r[0].src || r[0];
                W.crossOrigin(o, s, n.crossorigin);
                for (var a = 0; a < r.length; ++a) {
                    var u = document.createElement("source"), h = r[a], c = h.src, l = h.mime;
                    c = c || r[a];
                    var f = c.split("?").shift().toLowerCase(), d = f.substr(f.lastIndexOf(".") + 1);
                    l = l || e.MIME_TYPES[d] || "video/" + d, u.src = c, u.type = l, o.appendChild(u)
                }
                r = o
            }
            return i = t.call(this, r) || this, i.noSubImage = !0, i._autoUpdate = !0, i._isConnectedToTicker = !1, i._updateFPS = n.updateFPS || 0, i._msToNextUpdate = 0, i.autoPlay = !1 !== n.autoPlay, i._load = null, i._resolve = null, i._onCanPlay = i._onCanPlay.bind(i), i._onError = i._onError.bind(i), !1 !== n.autoLoad && i.load(), i
        }

        return i(e, t), e.prototype.update = function (e) {
            if (!this.destroyed) {
                var r = F.a.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - r), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
            }
        }, e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise(function (r) {
                t.valid ? r(t) : (t._resolve = r, e.load())
            }), this._load
        }, e.prototype._onError = function (t) {
            this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t)
        }, e.prototype._isSourcePlaying = function () {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
        }, e.prototype._isSourceReady = function () {
            var t = this.source;
            return 3 === t.readyState || 4 === t.readyState
        }, e.prototype._onPlayStart = function () {
            this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (F.a.shared.add(this.update, this), this._isConnectedToTicker = !0)
        }, e.prototype._onPlayStop = function () {
            this._isConnectedToTicker && (F.a.shared.remove(this.update, this), this._isConnectedToTicker = !1)
        }, e.prototype._onCanPlay = function () {
            var t = this.source;
            t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
        }, e.prototype.dispose = function () {
            this._isConnectedToTicker && (F.a.shared.remove(this.update, this), this._isConnectedToTicker = !1);
            var e = this.source;
            e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), t.prototype.dispose.call(this)
        }, Object.defineProperty(e.prototype, "autoUpdate", {
            get: function () {
                return this._autoUpdate
            }, set: function (t) {
                t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (F.a.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (F.a.shared.add(this.update, this), this._isConnectedToTicker = !0))
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "updateFPS", {
            get: function () {
                return this._updateFPS
            }, set: function (t) {
                t !== this._updateFPS && (this._updateFPS = t)
            }, enumerable: !1, configurable: !0
        }), e.test = function (t, r) {
            return self.HTMLVideoElement && t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1
        }, e.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], e.MIME_TYPES = {
            ogv: "video/ogg",
            mov: "video/quicktime",
            m4v: "video/mp4"
        }, e
    }(W), Q = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return i(e, t), e.test = function (t) {
            return !!self.createImageBitmap && t instanceof ImageBitmap
        }, e
    }(W);
    B.push(K, Q, q, $, J, j, Z, z);
    var tt = {
        __proto__: null,
        Resource: X,
        BaseImageResource: W,
        INSTALLED: B,
        autoDetectResource: n,
        AbstractMultiResource: V,
        ArrayResource: z,
        BufferResource: j,
        CanvasResource: q,
        CubeResource: Z,
        ImageResource: K,
        SVGResource: J,
        VideoResource: $,
        ImageBitmapResource: Q
    }, et = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return i(e, t), e.prototype.upload = function (t, e, r) {
            var n = t.gl;
            n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === C.a.UNPACK);
            var i = e.realWidth, o = e.realHeight;
            return r.width === i && r.height === o ? n.texSubImage2D(e.target, 0, 0, 0, i, o, e.format, r.type, this.data) : (r.width = i, r.height = o, n.texImage2D(e.target, 0, r.internalFormat, i, o, 0, e.format, r.type, this.data)), !0
        }, e
    }(j), rt = function () {
        function t(t, e) {
            this.width = Math.round(t || 100), this.height = Math.round(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new L.a("disposeFramebuffer"), this.multisample = C.l.NONE
        }

        return Object.defineProperty(t.prototype, "colorTexture", {
            get: function () {
                return this.colorTextures[0]
            }, enumerable: !1, configurable: !0
        }), t.prototype.addColorTexture = function (t, e) {
            return void 0 === t && (t = 0), this.colorTextures[t] = e || new Y(null, {
                scaleMode: C.p.NEAREST,
                resolution: 1,
                mipmap: C.k.OFF,
                width: this.width,
                height: this.height
            }), this.dirtyId++, this.dirtyFormat++, this
        }, t.prototype.addDepthTexture = function (t) {
            return this.depthTexture = t || new Y(new et(null, {
                width: this.width,
                height: this.height
            }), {
                scaleMode: C.p.NEAREST,
                resolution: 1,
                width: this.width,
                height: this.height,
                mipmap: C.k.OFF,
                format: C.h.DEPTH_COMPONENT,
                type: C.r.UNSIGNED_SHORT
            }), this.dirtyId++, this.dirtyFormat++, this
        }, t.prototype.enableDepth = function () {
            return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
        }, t.prototype.enableStencil = function () {
            return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
        }, t.prototype.resize = function (t, e) {
            if (t = Math.round(t), e = Math.round(e), t !== this.width || e !== this.height) {
                this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
                for (var r = 0; r < this.colorTextures.length; r++) {
                    var n = this.colorTextures[r], i = n.resolution;
                    n.setSize(t / i, e / i)
                }
                if (this.depthTexture) {
                    var i = this.depthTexture.resolution;
                    this.depthTexture.setSize(t / i, e / i)
                }
            }
        }, t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1)
        }, t.prototype.destroyDepthTexture = function () {
            this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
        }, t
    }(), nt = function (t) {
        function e(e) {
            var r = this;
            if ("number" == typeof e) {
                e = {width: arguments[0], height: arguments[1], scaleMode: arguments[2], resolution: arguments[3]}
            }
            return e.width = e.width || 100, e.height = e.height || 100, e.multisample = void 0 !== e.multisample ? e.multisample : C.l.NONE, r = t.call(this, null, e) || this, r.mipmap = C.k.OFF, r.valid = !0, r.clearColor = [0, 0, 0, 0], r.framebuffer = new rt(r.realWidth, r.realHeight).addColorTexture(0, r), r.framebuffer.multisample = e.multisample, r.maskStack = [], r.filterStack = [{}], r
        }

        return i(e, t), e.prototype.resize = function (t, e) {
            this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
        }, e.prototype.dispose = function () {
            this.framebuffer.dispose(), t.prototype.dispose.call(this)
        }, e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
        }, e
    }(Y), it = function () {
        function t() {
            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
        }

        return t.prototype.set = function (t, e, r) {
            var n = e.width, i = e.height;
            if (r) {
                var o = t.width / 2 / n, s = t.height / 2 / i, a = t.x / n + o, u = t.y / i + s;
                r = U.n.add(r, U.n.NW), this.x0 = a + o * U.n.uX(r), this.y0 = u + s * U.n.uY(r), r = U.n.add(r, 2), this.x1 = a + o * U.n.uX(r), this.y1 = u + s * U.n.uY(r), r = U.n.add(r, 2), this.x2 = a + o * U.n.uX(r), this.y2 = u + s * U.n.uY(r), r = U.n.add(r, 2), this.x3 = a + o * U.n.uX(r), this.y3 = u + s * U.n.uY(r)
            } else this.x0 = t.x / n, this.y0 = t.y / i, this.x1 = (t.x + t.width) / n, this.y1 = t.y / i, this.x2 = (t.x + t.width) / n, this.y2 = (t.y + t.height) / i, this.x3 = t.x / n, this.y3 = (t.y + t.height) / i;
            this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
        }, t.prototype.toString = function () {
            return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
        }, t
    }(), ot = new it, st = function (t) {
        function e(r, n, i, o, s, a) {
            var u = t.call(this) || this;
            if (u.noFrame = !1, n || (u.noFrame = !0, n = new U.j(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), u.baseTexture = r, u._frame = n, u.trim = o, u.valid = !1, u._uvs = ot, u.uvMatrix = null, u.orig = i || n, u._rotate = Number(s || 0), !0 === s) u._rotate = 2; else if (u._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
            return u.defaultAnchor = a ? new U.g(a.x, a.y) : new U.g(0, 0), u._updateID = 0, u.textureCacheIds = [], r.valid ? u.noFrame ? r.valid && u.onBaseTextureUpdated(r) : u.frame = n : r.once("loaded", u.onBaseTextureUpdated, u), u.noFrame && r.on("update", u.onBaseTextureUpdated, u), u
        }

        return i(e, t), e.prototype.update = function () {
            this.baseTexture.resource && this.baseTexture.resource.update()
        }, e.prototype.onBaseTextureUpdated = function (t) {
            if (this.noFrame) {
                if (!this.baseTexture.valid) return;
                this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
            } else this.frame = this._frame;
            this.emit("update", this)
        }, e.prototype.destroy = function (t) {
            if (this.baseTexture) {
                if (t) {
                    var r = this.baseTexture.resource;
                    r && r.url && D.TextureCache[r.url] && e.removeFromCache(r.url), this.baseTexture.destroy()
                }
                this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
            }
            this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
        }, e.prototype.clone = function () {
            var t = this._frame.clone(), r = this._frame === this.orig ? t : this.orig.clone(),
                n = new e(this.baseTexture, !this.noFrame && t, r, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
            return this.noFrame && (n._frame = t), n
        }, e.prototype.updateUvs = function () {
            this._uvs === ot && (this._uvs = new it), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
        }, e.from = function (t, r, n) {
            void 0 === r && (r = {}), void 0 === n && (n = N.b.STRICT_TEXTURE_CACHE);
            var i = "string" == typeof t, o = null;
            if (i) o = t; else {
                if (!t._pixiId) {
                    var s = r && r.pixiIdPrefix || "pixiid";
                    t._pixiId = s + "_" + Object(D.uid)()
                }
                o = t._pixiId
            }
            var a = D.TextureCache[o];
            if (i && n && !a) throw new Error('The cacheId "' + o + '" does not exist in TextureCache.');
            return a || (r.resolution || (r.resolution = Object(D.getResolutionOfUrl)(t)), a = new e(new Y(t, r)), a.baseTexture.cacheId = o, Y.addToCache(a.baseTexture, o), e.addToCache(a, o)), a
        }, e.fromURL = function (t, r) {
            var n = Object.assign({autoLoad: !1}, null === r || void 0 === r ? void 0 : r.resourceOptions),
                i = e.from(t, Object.assign({resourceOptions: n}, r), !1), o = i.baseTexture.resource;
            return i.baseTexture.valid ? Promise.resolve(i) : o.load().then(function () {
                return Promise.resolve(i)
            })
        }, e.fromBuffer = function (t, r, n, i) {
            return new e(Y.fromBuffer(t, r, n, i))
        }, e.fromLoader = function (t, r, n, i) {
            var o = new Y(t, Object.assign({
                scaleMode: N.b.SCALE_MODE,
                resolution: Object(D.getResolutionOfUrl)(r)
            }, i)), s = o.resource;
            s instanceof K && (s.url = r);
            var a = new e(o);
            return n || (n = r), Y.addToCache(a.baseTexture, n), e.addToCache(a, n), n !== r && (Y.addToCache(a.baseTexture, r), e.addToCache(a, r)), a.baseTexture.valid ? Promise.resolve(a) : new Promise(function (t) {
                a.baseTexture.once("loaded", function () {
                    return t(a)
                })
            })
        }, e.addToCache = function (t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), D.TextureCache[e], D.TextureCache[e] = t)
        }, e.removeFromCache = function (t) {
            if ("string" == typeof t) {
                var e = D.TextureCache[t];
                if (e) {
                    var r = e.textureCacheIds.indexOf(t);
                    return r > -1 && e.textureCacheIds.splice(r, 1), delete D.TextureCache[t], e
                }
            } else if (t && t.textureCacheIds) {
                for (var n = 0; n < t.textureCacheIds.length; ++n) D.TextureCache[t.textureCacheIds[n]] === t && delete D.TextureCache[t.textureCacheIds[n]];
                return t.textureCacheIds.length = 0, t
            }
            return null
        }, Object.defineProperty(e.prototype, "resolution", {
            get: function () {
                return this.baseTexture.resolution
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "frame", {
            get: function () {
                return this._frame
            }, set: function (t) {
                this._frame = t, this.noFrame = !1;
                var e = t.x, r = t.y, n = t.width, i = t.height, o = e + n > this.baseTexture.width,
                    s = r + i > this.baseTexture.height;
                if (o || s) {
                    var a = o && s ? "and" : "or",
                        u = "X: " + e + " + " + n + " = " + (e + n) + " > " + this.baseTexture.width,
                        h = "Y: " + r + " + " + i + " = " + (r + i) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + u + " " + a + " " + h)
                }
                this.valid = n && i && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "rotate", {
            get: function () {
                return this._rotate
            }, set: function (t) {
                this._rotate = t, this.valid && this.updateUvs()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this.orig.width
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return this.orig.height
            }, enumerable: !1, configurable: !0
        }), e.prototype.castToBaseTexture = function () {
            return this.baseTexture
        }, e
    }(D.EventEmitter);
    st.EMPTY = new st(new Y), s(st.EMPTY), s(st.EMPTY.baseTexture), st.WHITE = function () {
        var t = document.createElement("canvas");
        t.width = 16, t.height = 16;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new st(new Y(new q(t)))
    }(), s(st.WHITE), s(st.WHITE.baseTexture);
    var at, ut, ht = function (t) {
            function e(e, r) {
                var n = t.call(this, e, r) || this;
                return n.valid = !0, n.filterFrame = null, n.filterPoolKey = null, n.updateUvs(), n
            }

            return i(e, t), Object.defineProperty(e.prototype, "framebuffer", {
                get: function () {
                    return this.baseTexture.framebuffer
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "multisample", {
                get: function () {
                    return this.framebuffer.multisample
                }, set: function (t) {
                    this.framebuffer.multisample = t
                }, enumerable: !1, configurable: !0
            }), e.prototype.resize = function (t, e, r) {
                void 0 === r && (r = !0);
                var n = this.baseTexture.resolution, i = Math.round(t * n) / n, o = Math.round(e * n) / n;
                this.valid = i > 0 && o > 0, this._frame.width = this.orig.width = i, this._frame.height = this.orig.height = o, r && this.baseTexture.resize(i, o), this.updateUvs()
            }, e.prototype.setResolution = function (t) {
                var e = this.baseTexture;
                e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
            }, e.create = function (t) {
                for (var r = arguments, n = [], i = 1; i < arguments.length; i++) n[i - 1] = r[i];
                return "number" == typeof t && (Object(D.deprecation)("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."), t = {
                    width: t,
                    height: n[0],
                    scaleMode: n[1],
                    resolution: n[2]
                }), new e(new nt(t))
            }, e
        }(st), ct = function () {
            function t(t) {
                this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
            }

            return t.prototype.createTexture = function (t, e, r) {
                void 0 === r && (r = C.l.NONE);
                var n = new nt(Object.assign({width: t, height: e, resolution: 1, multisample: r}, this.textureOptions));
                return new ht(n)
            }, t.prototype.getOptimalTexture = function (t, e, r, n) {
                void 0 === r && (r = 1), void 0 === n && (n = C.l.NONE);
                var i;
                t = Math.ceil(t * r), e = Math.ceil(e * r), this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? i = n > 1 ? -n : -1 : (t = Object(D.nextPow2)(t), e = Object(D.nextPow2)(e), i = ((65535 & t) << 16 | 65535 & e) >>> 0, n > 1 && (i += 4294967296 * n)), this.texturePool[i] || (this.texturePool[i] = []);
                var o = this.texturePool[i].pop();
                return o || (o = this.createTexture(t, e, n)), o.filterPoolKey = i, o.setResolution(r), o
            }, t.prototype.getFilterTexture = function (t, e, r) {
                var n = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || C.l.NONE);
                return n.filterFrame = t.filterFrame, n
            }, t.prototype.returnTexture = function (t) {
                var e = t.filterPoolKey;
                t.filterFrame = null, this.texturePool[e].push(t)
            }, t.prototype.returnFilterTexture = function (t) {
                this.returnTexture(t)
            }, t.prototype.clear = function (t) {
                if (t = !1 !== t) for (var e in this.texturePool) {
                    var r = this.texturePool[e];
                    if (r) for (var n = 0; n < r.length; n++) r[n].destroy(!0)
                }
                this.texturePool = {}
            }, t.prototype.setScreenSize = function (t) {
                if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                    this.enableFullScreen = t.width > 0 && t.height > 0;
                    for (var e in this.texturePool) if (Number(e) < 0) {
                        var r = this.texturePool[e];
                        if (r) for (var n = 0; n < r.length; n++) r[n].destroy(!0);
                        this.texturePool[e] = []
                    }
                    this._pixelsWidth = t.width, this._pixelsHeight = t.height
                }
            }, t.SCREEN_KEY = -1, t
        }(), lt = function () {
            function t(t, e, r, n, i, o, s) {
                void 0 === e && (e = 0), void 0 === r && (r = !1), void 0 === n && (n = C.r.FLOAT), this.buffer = t, this.size = e, this.normalized = r, this.type = n, this.stride = i, this.start = o, this.instance = s
            }

            return t.prototype.destroy = function () {
                this.buffer = null
            }, t.from = function (e, r, n, i, o) {
                return new t(e, r, n, i, o)
            }, t
        }(), ft = 0, dt = function () {
            function t(t, e, r) {
                void 0 === e && (e = !0), void 0 === r && (r = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = ft++, this.disposeRunner = new L.a("disposeBuffer")
            }

            return t.prototype.update = function (t) {
                t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
            }, t.prototype.dispose = function () {
                this.disposeRunner.emit(this, !1)
            }, t.prototype.destroy = function () {
                this.dispose(), this.data = null
            }, Object.defineProperty(t.prototype, "index", {
                get: function () {
                    return this.type === C.d.ELEMENT_ARRAY_BUFFER
                }, set: function (t) {
                    this.type = t ? C.d.ELEMENT_ARRAY_BUFFER : C.d.ARRAY_BUFFER
                }, enumerable: !1, configurable: !0
            }), t.from = function (e) {
                return e instanceof Array && (e = new Float32Array(e)), new t(e)
            }, t
        }(), pt = {Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array},
        _t = {5126: 4, 5123: 2, 5121: 1}, mt = 0, vt = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array
        }, gt = function () {
            function t(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = mt++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new L.a("disposeGeometry"), this.refCount = 0
            }

            return t.prototype.addAttribute = function (t, e, r, n, i, o, s, a) {
                if (void 0 === r && (r = 0), void 0 === n && (n = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
                e instanceof dt || (e instanceof Array && (e = new Float32Array(e)), e = new dt(e));
                var u = t.split("|");
                if (u.length > 1) {
                    for (var h = 0; h < u.length; h++) this.addAttribute(u[h], e, r, n, i);
                    return this
                }
                var c = this.buffers.indexOf(e);
                return -1 === c && (this.buffers.push(e), c = this.buffers.length - 1), this.attributes[t] = new lt(c, r, n, i, o, s, a), this.instanced = this.instanced || a, this
            }, t.prototype.getAttribute = function (t) {
                return this.attributes[t]
            }, t.prototype.getBuffer = function (t) {
                return this.buffers[this.getAttribute(t).buffer]
            }, t.prototype.addIndex = function (t) {
                return t instanceof dt || (t instanceof Array && (t = new Uint16Array(t)), t = new dt(t)), t.type = C.d.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
            }, t.prototype.getIndex = function () {
                return this.indexBuffer
            }, t.prototype.interleave = function () {
                if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
                var t, e = [], r = [], n = new dt;
                for (t in this.attributes) {
                    var i = this.attributes[t], o = this.buffers[i.buffer];
                    e.push(o.data), r.push(i.size * _t[i.type] / 4), i.buffer = 0
                }
                for (n.data = a(e, r), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
                return this.buffers = [n], this.indexBuffer && this.buffers.push(this.indexBuffer), this
            }, t.prototype.getSize = function () {
                for (var t in this.attributes) {
                    var e = this.attributes[t];
                    return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                }
                return 0
            }, t.prototype.dispose = function () {
                this.disposeRunner.emit(this, !1)
            }, t.prototype.destroy = function () {
                this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
            }, t.prototype.clone = function () {
                for (var e = new t, r = 0; r < this.buffers.length; r++) e.buffers[r] = new dt(this.buffers[r].data.slice(0));
                for (var r in this.attributes) {
                    var n = this.attributes[r];
                    e.attributes[r] = new lt(n.buffer, n.size, n.normalized, n.type, n.stride, n.start, n.instance)
                }
                return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = C.d.ELEMENT_ARRAY_BUFFER), e
            }, t.merge = function (e) {
                for (var r, n = new t, i = [], o = [], s = [], a = 0; a < e.length; a++) {
                    r = e[a];
                    for (var u = 0; u < r.buffers.length; u++) o[u] = o[u] || 0, o[u] += r.buffers[u].data.length, s[u] = 0
                }
                for (var a = 0; a < r.buffers.length; a++) i[a] = new (vt[Object(D.getBufferType)(r.buffers[a].data)])(o[a]), n.buffers[a] = new dt(i[a]);
                for (var a = 0; a < e.length; a++) {
                    r = e[a];
                    for (var u = 0; u < r.buffers.length; u++) i[u].set(r.buffers[u].data, s[u]), s[u] += r.buffers[u].data.length
                }
                if (n.attributes = r.attributes, r.indexBuffer) {
                    n.indexBuffer = n.buffers[r.buffers.indexOf(r.indexBuffer)], n.indexBuffer.type = C.d.ELEMENT_ARRAY_BUFFER;
                    for (var h = 0, c = 0, l = 0, f = 0, a = 0; a < r.buffers.length; a++) if (r.buffers[a] !== r.indexBuffer) {
                        f = a;
                        break
                    }
                    for (var a in r.attributes) {
                        var d = r.attributes[a];
                        (0 | d.buffer) === f && (c += d.size * _t[d.type] / 4)
                    }
                    for (var a = 0; a < e.length; a++) {
                        for (var p = e[a].indexBuffer.data, u = 0; u < p.length; u++) n.indexBuffer.data[u + l] += h;
                        h += e[a].buffers[f].data.length / c, l += p.length
                    }
                }
                return n
            }, t
        }(), yt = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]), e
            }

            return i(e, t), e
        }(gt), Tt = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), e.vertexBuffer = new dt(e.vertices), e.uvBuffer = new dt(e.uvs), e.addAttribute("aVertexPosition", e.vertexBuffer).addAttribute("aTextureCoord", e.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]), e
            }

            return i(e, t), e.prototype.map = function (t, e) {
                var r = 0, n = 0;
                return this.uvs[0] = r, this.uvs[1] = n, this.uvs[2] = r + e.width / t.width, this.uvs[3] = n, this.uvs[4] = r + e.width / t.width, this.uvs[5] = n + e.height / t.height, this.uvs[6] = r, this.uvs[7] = n + e.height / t.height, r = e.x, n = e.y, this.vertices[0] = r, this.vertices[1] = n, this.vertices[2] = r + e.width, this.vertices[3] = n, this.vertices[4] = r + e.width, this.vertices[5] = n + e.height, this.vertices[6] = r, this.vertices[7] = n + e.height, this.invalidate(), this
            }, e.prototype.invalidate = function () {
                return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
            }, e
        }(gt), Et = 0, bt = function () {
            function t(t, e, r) {
                this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Et++, this.static = !!e, this.ubo = !!r, t instanceof dt ? (this.buffer = t, this.buffer.type = C.d.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new dt(new Float32Array(1)), this.buffer.type = C.d.UNIFORM_BUFFER, this.autoManage = !0))
            }

            return t.prototype.update = function () {
                this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
            }, t.prototype.add = function (e, r, n) {
                if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
                this.uniforms[e] = new t(r, n)
            }, t.from = function (e, r, n) {
                return new t(e, r, n)
            }, t.uboFrom = function (e, r) {
                return new t(e, null === r || void 0 === r || r, !0)
            }, t
        }(), xt = function () {
            function t() {
                this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = C.l.NONE, this.sourceFrame = new U.j, this.destinationFrame = new U.j, this.bindingSourceFrame = new U.j, this.bindingDestinationFrame = new U.j, this.filters = [], this.transform = null
            }

            return t.prototype.clear = function () {
                this.target = null, this.filters = null, this.renderTexture = null
            }, t
        }(), Ot = [new U.g, new U.g, new U.g, new U.g], Rt = new U.d, At = function () {
            function t(t) {
                this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new ct, this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new yt, this.quadUv = new Tt, this.tempRect = new U.j, this.activeState = {}, this.globalUniforms = new bt({
                    outputFrame: new U.j,
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4)
                }, !0), this.forceClear = !1, this.useMaxPadding = !1
            }

            return t.prototype.push = function (t, e) {
                for (var r = this.renderer, n = this.defaultFilterStack, i = this.statePool.pop() || new xt, o = this.renderer.renderTexture, s = e[0].resolution, a = e[0].multisample, u = e[0].padding, h = e[0].autoFit, c = e[0].legacy, l = 1; l < e.length; l++) {
                    var f = e[l];
                    s = Math.min(s, f.resolution), a = Math.min(a, f.multisample), u = this.useMaxPadding ? Math.max(u, f.padding) : u + f.padding, h = h && f.autoFit, c = c || f.legacy
                }
                if (1 === n.length && (this.defaultFilterStack[0].renderTexture = o.current), n.push(i), i.resolution = s, i.multisample = a, i.legacy = c, i.target = t, i.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), i.sourceFrame.pad(u), h) {
                    var d = this.tempRect.copyFrom(o.sourceFrame);
                    r.projection.transform && this.transformAABB(Rt.copyFrom(r.projection.transform).invert(), d), i.sourceFrame.fit(d)
                }
                this.roundFrame(i.sourceFrame, o.current ? o.current.resolution : r.resolution, o.sourceFrame, o.destinationFrame, r.projection.transform), i.renderTexture = this.getOptimalFilterTexture(i.sourceFrame.width, i.sourceFrame.height, s, a), i.filters = e, i.destinationFrame.width = i.renderTexture.width, i.destinationFrame.height = i.renderTexture.height;
                var p = this.tempRect;
                p.x = 0, p.y = 0, p.width = i.sourceFrame.width, p.height = i.sourceFrame.height, i.renderTexture.filterFrame = i.sourceFrame, i.bindingSourceFrame.copyFrom(o.sourceFrame), i.bindingDestinationFrame.copyFrom(o.destinationFrame), i.transform = r.projection.transform, r.projection.transform = null, o.bind(i.renderTexture, i.sourceFrame, p), r.framebuffer.clear(0, 0, 0, 0)
            }, t.prototype.pop = function () {
                var t = this.defaultFilterStack, e = t.pop(), r = e.filters;
                this.activeState = e;
                var n = this.globalUniforms.uniforms;
                n.outputFrame = e.sourceFrame, n.resolution = e.resolution;
                var i = n.inputSize, o = n.inputPixel, s = n.inputClamp;
                if (i[0] = e.destinationFrame.width, i[1] = e.destinationFrame.height, i[2] = 1 / i[0], i[3] = 1 / i[1], o[0] = Math.round(i[0] * e.resolution), o[1] = Math.round(i[1] * e.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * i[2] - .5 * o[2], s[3] = e.sourceFrame.height * i[3] - .5 * o[3], e.legacy) {
                    var a = n.filterArea;
                    a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, n.filterClamp = n.inputClamp
                }
                this.globalUniforms.update();
                var u = t[t.length - 1];
                if (this.renderer.framebuffer.blit(), 1 === r.length) r[0].apply(this, e.renderTexture, u.renderTexture, C.e.BLEND, e), this.returnFilterTexture(e.renderTexture); else {
                    var h = e.renderTexture, c = this.getOptimalFilterTexture(h.width, h.height, e.resolution);
                    c.filterFrame = h.filterFrame;
                    var l = 0;
                    for (l = 0; l < r.length - 1; ++l) {
                        1 === l && e.multisample > 1 && (c = this.getOptimalFilterTexture(h.width, h.height, e.resolution), c.filterFrame = h.filterFrame), r[l].apply(this, h, c, C.e.CLEAR, e);
                        var f = h;
                        h = c, c = f
                    }
                    r[l].apply(this, h, u.renderTexture, C.e.BLEND, e), l > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(h), this.returnFilterTexture(c)
                }
                e.clear(), this.statePool.push(e)
            }, t.prototype.bindAndClear = function (t, e) {
                void 0 === e && (e = C.e.CLEAR);
                var r = this.renderer, n = r.renderTexture, i = r.state;
                if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t && t.filterFrame) {
                    var o = this.tempRect;
                    o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, n.bind(t, t.filterFrame, o)
                } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? n.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                var s = 1 & i.stateId || this.forceClear;
                (e === C.e.CLEAR || e === C.e.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0)
            }, t.prototype.applyFilter = function (t, e, r, n) {
                var i = this.renderer;
                i.state.set(t.state), this.bindAndClear(r, n), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, i.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), i.geometry.bind(this.quadUv), i.geometry.draw(C.f.TRIANGLES)) : (i.geometry.bind(this.quad), i.geometry.draw(C.f.TRIANGLE_STRIP))
            }, t.prototype.calculateSpriteMatrix = function (t, e) {
                var r = this.activeState, n = r.sourceFrame, i = r.destinationFrame, o = e._texture.orig,
                    s = t.set(i.width, 0, 0, i.height, n.x, n.y), a = e.worldTransform.copyTo(U.d.TEMP_MATRIX);
                return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
            }, t.prototype.destroy = function () {
                this.renderer = null, this.texturePool.clear(!1)
            }, t.prototype.getOptimalFilterTexture = function (t, e, r, n) {
                return void 0 === r && (r = 1), void 0 === n && (n = C.l.NONE), this.texturePool.getOptimalTexture(t, e, r, n)
            }, t.prototype.getFilterTexture = function (t, e, r) {
                if ("number" == typeof t) {
                    var n = t;
                    t = e, e = n
                }
                t = t || this.activeState.renderTexture;
                var i = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || C.l.NONE);
                return i.filterFrame = t.filterFrame, i
            }, t.prototype.returnFilterTexture = function (t) {
                this.texturePool.returnTexture(t)
            }, t.prototype.emptyPool = function () {
                this.texturePool.clear(!0)
            }, t.prototype.resize = function () {
                this.texturePool.setScreenSize(this.renderer.view)
            }, t.prototype.transformAABB = function (t, e) {
                var r = Ot[0], n = Ot[1], i = Ot[2], o = Ot[3];
                r.set(e.left, e.top), n.set(e.left, e.bottom), i.set(e.right, e.top), o.set(e.right, e.bottom), t.apply(r, r), t.apply(n, n), t.apply(i, i), t.apply(o, o);
                var s = Math.min(r.x, n.x, i.x, o.x), a = Math.min(r.y, n.y, i.y, o.y), u = Math.max(r.x, n.x, i.x, o.x),
                    h = Math.max(r.y, n.y, i.y, o.y);
                e.x = s, e.y = a, e.width = u - s, e.height = h - a
            }, t.prototype.roundFrame = function (t, e, r, n, i) {
                if (i) {
                    var o = i.a, s = i.b, a = i.c, u = i.d;
                    if ((Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(u) > 1e-4)) return
                }
                i = i ? Rt.copyFrom(i) : Rt.identity(), i.translate(-r.x, -r.y).scale(n.width / r.width, n.height / r.height).translate(n.x, n.y), this.transformAABB(i, t), t.ceil(e), this.transformAABB(i.invert(), t)
            }, t
        }(), St = function () {
            function t(t) {
                this.renderer = t
            }

            return t.prototype.flush = function () {
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t.prototype.start = function () {
            }, t.prototype.stop = function () {
                this.flush()
            }, t.prototype.render = function (t) {
            }, t
        }(), It = function () {
            function t(t) {
                this.renderer = t, this.emptyRenderer = new St(t), this.currentRenderer = this.emptyRenderer
            }

            return t.prototype.setObjectRenderer = function (t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, t.prototype.flush = function () {
                this.setObjectRenderer(this.emptyRenderer)
            }, t.prototype.reset = function () {
                this.setObjectRenderer(this.emptyRenderer)
            }, t.prototype.copyBoundTextures = function (t, e) {
                for (var r = this.renderer.texture.boundTextures, n = e - 1; n >= 0; --n) t[n] = r[n] || null, t[n] && (t[n]._batchLocation = n)
            }, t.prototype.boundArray = function (t, e, r, n) {
                for (var i = t.elements, o = t.ids, s = t.count, a = 0, u = 0; u < s; u++) {
                    var h = i[u], c = h._batchLocation;
                    if (c >= 0 && c < n && e[c] === h) o[u] = c; else for (; a < n;) {
                        var l = e[a];
                        {
                            if (!l || l._batchEnabled !== r || l._batchLocation !== a) {
                                o[u] = a, h._batchLocation = a, e[a] = h;
                                break
                            }
                            a++
                        }
                    }
                }
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), wt = 0, Pt = function () {
            function t(t) {
                this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {uint32Indices: !1}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
            }

            return Object.defineProperty(t.prototype, "isLost", {
                get: function () {
                    return !this.gl || this.gl.isContextLost()
                }, enumerable: !1, configurable: !0
            }), t.prototype.contextChange = function (t) {
                this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = wt++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
            }, t.prototype.initFromContext = function (t) {
                this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = wt++, this.renderer.runners.contextChange.emit(t)
            }, t.prototype.initFromOptions = function (t) {
                var e = this.createContext(this.renderer.view, t);
                this.initFromContext(e)
            }, t.prototype.createContext = function (t, e) {
                var r;
                if (N.b.PREFER_ENV >= C.g.WEBGL2 && (r = t.getContext("webgl2", e)), r) this.webGLVersion = 2; else if (this.webGLVersion = 1, !(r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                return this.gl = r, this.getExtensions(), this.gl
            }, t.prototype.getExtensions = function () {
                var t = this.gl, e = {
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: t.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: t.getExtension("WEBGL_compressed_texture_atc"),
                    astc: t.getExtension("WEBGL_compressed_texture_astc")
                };
                1 === this.webGLVersion ? Object.assign(this.extensions, e, {
                    drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                    depthTexture: t.getExtension("WEBGL_depth_texture"),
                    loseContext: t.getExtension("WEBGL_lose_context"),
                    vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                    floatTexture: t.getExtension("OES_texture_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: t.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                }) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {colorBufferFloat: t.getExtension("EXT_color_buffer_float")})
            }, t.prototype.handleContextLost = function (t) {
                t.preventDefault()
            }, t.prototype.handleContextRestored = function () {
                this.renderer.runners.contextChange.emit(this.gl)
            }, t.prototype.destroy = function () {
                var t = this.renderer.view;
                this.renderer = null, t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
            }, t.prototype.postrender = function () {
                this.renderer.renderingToScreen && this.gl.flush()
            }, t.prototype.validateContext = function (t) {
                var e = t.getContextAttributes(),
                    r = "WebGL2RenderingContext" in self && t instanceof self.WebGL2RenderingContext;
                r && (this.webGLVersion = 2), e.stencil;
                var n = r || !!t.getExtension("OES_element_index_uint");
                this.supports.uint32Indices = n
            }, t
        }(), Mt = function () {
            function t(t) {
                this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = C.l.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
            }

            return t
        }(), Nt = new U.j, Ct = function () {
            function t(t) {
                this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new rt(10, 10), this.msaaSamples = null
            }

            return t.prototype.contextChange = function () {
                var t = this.gl = this.renderer.gl;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new U.j, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                    var e = this.renderer.context.extensions.drawBuffers, r = this.renderer.context.extensions.depthTexture;
                    N.b.PREFER_ENV === C.g.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = function (t) {
                        return e.drawBuffersWEBGL(t)
                    } : (this.hasMRT = !1, t.drawBuffers = function () {
                    }), r || (this.writeDepthTexture = !1)
                } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
            }, t.prototype.bind = function (t, e, r) {
                void 0 === r && (r = 0);
                var n = this.gl;
                if (t) {
                    var i = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                    this.current !== t && (this.current = t, n.bindFramebuffer(n.FRAMEBUFFER, i.framebuffer)), i.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, i.mipLevel = r), i.dirtyId !== t.dirtyId && (i.dirtyId = t.dirtyId, i.dirtyFormat !== t.dirtyFormat ? (i.dirtyFormat = t.dirtyFormat, i.dirtySize = t.dirtySize, this.updateFramebuffer(t, r)) : i.dirtySize !== t.dirtySize && (i.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                    for (var o = 0; o < t.colorTextures.length; o++) {
                        var s = t.colorTextures[o];
                        this.renderer.texture.unbind(s.parentTextureArray || s)
                    }
                    if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
                        var a = e.width >> r, u = e.height >> r, h = a / e.width;
                        this.setViewport(e.x * h, e.y * h, a, u)
                    } else {
                        var a = t.width >> r, u = t.height >> r;
                        this.setViewport(0, 0, a, u)
                    }
                } else this.current && (this.current = null, n.bindFramebuffer(n.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
            }, t.prototype.setViewport = function (t, e, r, n) {
                var i = this.viewport;
                t = Math.round(t), e = Math.round(e), r = Math.round(r), n = Math.round(n), i.width === r && i.height === n && i.x === t && i.y === e || (i.x = t, i.y = e, i.width = r, i.height = n, this.gl.viewport(t, e, r, n))
            }, Object.defineProperty(t.prototype, "size", {
                get: function () {
                    return this.current ? {x: 0, y: 0, width: this.current.width, height: this.current.height} : {
                        x: 0,
                        y: 0,
                        width: this.renderer.width,
                        height: this.renderer.height
                    }
                }, enumerable: !1, configurable: !0
            }), t.prototype.clear = function (t, e, r, n, i) {
                void 0 === i && (i = C.c.COLOR | C.c.DEPTH);
                var o = this.gl;
                o.clearColor(t, e, r, n), o.clear(i)
            }, t.prototype.initFramebuffer = function (t) {
                var e = this.gl, r = new Mt(e.createFramebuffer());
                return r.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = r, this.managedFramebuffers.push(t), t.disposeRunner.add(this), r
            }, t.prototype.resizeFramebuffer = function (t) {
                var e = this.gl, r = t.glFramebuffers[this.CONTEXT_UID];
                r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.RGBA8, t.width, t.height)), r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                var n = t.colorTextures, i = n.length;
                e.drawBuffers || (i = Math.min(i, 1));
                for (var o = 0; o < i; o++) {
                    var s = n[o], a = s.parentTextureArray || s;
                    this.renderer.texture.bind(a, 0)
                }
                t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
            }, t.prototype.updateFramebuffer = function (t, e) {
                var r = this.gl, n = t.glFramebuffers[this.CONTEXT_UID], i = t.colorTextures, o = i.length;
                r.drawBuffers || (o = Math.min(o, 1)), n.multisample > 1 && this.canMultisampleFramebuffer(t) ? (n.msaaBuffer = n.msaaBuffer || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, n.msaaBuffer), r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, r.RGBA8, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, n.msaaBuffer)) : n.msaaBuffer && (r.deleteRenderbuffer(n.msaaBuffer), n.msaaBuffer = null, n.blitFramebuffer && (n.blitFramebuffer.dispose(), n.blitFramebuffer = null));
                for (var s = [], a = 0; a < o; a++) {
                    var u = i[a], h = u.parentTextureArray || u;
                    this.renderer.texture.bind(h, 0), 0 === a && n.msaaBuffer || (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, u.target, h._glTextures[this.CONTEXT_UID].texture, e), s.push(r.COLOR_ATTACHMENT0 + a))
                }
                if (s.length > 1 && r.drawBuffers(s), t.depthTexture) {
                    if (this.writeDepthTexture) {
                        var c = t.depthTexture;
                        this.renderer.texture.bind(c, 0), r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, c._glTextures[this.CONTEXT_UID].texture, e)
                    }
                }
                !t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture ? n.stencil && (r.deleteRenderbuffer(n.stencil), n.stencil = null) : (n.stencil = n.stencil || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, n.stencil), n.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, r.DEPTH24_STENCIL8, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, n.stencil))
            }, t.prototype.canMultisampleFramebuffer = function (t) {
                return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture
            }, t.prototype.detectSamples = function (t) {
                var e = this.msaaSamples, r = C.l.NONE;
                if (t <= 1 || null === e) return r;
                for (var n = 0; n < e.length; n++) if (e[n] <= t) {
                    r = e[n];
                    break
                }
                return 1 === r && (r = C.l.NONE), r
            }, t.prototype.blit = function (t, e, r) {
                var n = this, i = n.current, o = n.renderer, s = n.gl, a = n.CONTEXT_UID;
                if (2 === o.context.webGLVersion && i) {
                    var u = i.glFramebuffers[a];
                    if (u) {
                        if (!t) {
                            if (!u.msaaBuffer) return;
                            var h = i.colorTextures[0];
                            if (!h) return;
                            u.blitFramebuffer || (u.blitFramebuffer = new rt(i.width, i.height), u.blitFramebuffer.addColorTexture(0, h)), t = u.blitFramebuffer, t.colorTextures[0] !== h && (t.colorTextures[0] = h, t.dirtyId++, t.dirtyFormat++), t.width === i.width && t.height === i.height || (t.width = i.width, t.height = i.height, t.dirtyId++, t.dirtySize++)
                        }
                        e || (e = Nt, e.width = i.width, e.height = i.height), r || (r = e);
                        var c = e.width === r.width && e.height === r.height;
                        this.bind(t), s.bindFramebuffer(s.READ_FRAMEBUFFER, u.framebuffer), s.blitFramebuffer(e.x, e.y, e.width, e.height, r.x, r.y, r.width, r.height, s.COLOR_BUFFER_BIT, c ? s.NEAREST : s.LINEAR)
                    }
                }
            }, t.prototype.disposeFramebuffer = function (t, e) {
                var r = t.glFramebuffers[this.CONTEXT_UID], n = this.gl;
                if (r) {
                    delete t.glFramebuffers[this.CONTEXT_UID];
                    var i = this.managedFramebuffers.indexOf(t);
                    i >= 0 && this.managedFramebuffers.splice(i, 1), t.disposeRunner.remove(this), e || (n.deleteFramebuffer(r.framebuffer), r.msaaBuffer && n.deleteRenderbuffer(r.msaaBuffer), r.stencil && n.deleteRenderbuffer(r.stencil)), r.blitFramebuffer && r.blitFramebuffer.dispose()
                }
            }, t.prototype.disposeAll = function (t) {
                var e = this.managedFramebuffers;
                this.managedFramebuffers = [];
                for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t)
            }, t.prototype.forceStencil = function () {
                var t = this.current;
                if (t) {
                    var e = t.glFramebuffers[this.CONTEXT_UID];
                    if (e && !e.stencil) {
                        t.stencil = !0;
                        var r = t.width, n = t.height, i = this.gl, o = i.createRenderbuffer();
                        i.bindRenderbuffer(i.RENDERBUFFER, o), e.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, e.multisample, i.DEPTH24_STENCIL8, r, n) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, r, n), e.stencil = o, i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, o)
                    }
                }
            }, t.prototype.reset = function () {
                this.current = this.unknownFramebuffer, this.viewport = new U.j
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), Dt = {5126: 4, 5123: 2, 5121: 1}, Lt = function () {
            function t(t) {
                this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
            }

            return t.prototype.contextChange = function () {
                this.disposeAll(!0);
                var t = this.gl = this.renderer.gl, e = this.renderer.context;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
                    var r = this.renderer.context.extensions.vertexArrayObject;
                    N.b.PREFER_ENV === C.g.WEBGL_LEGACY && (r = null), r ? (t.createVertexArray = function () {
                        return r.createVertexArrayOES()
                    }, t.bindVertexArray = function (t) {
                        return r.bindVertexArrayOES(t)
                    }, t.deleteVertexArray = function (t) {
                        return r.deleteVertexArrayOES(t)
                    }) : (this.hasVao = !1, t.createVertexArray = function () {
                        return null
                    }, t.bindVertexArray = function () {
                        return null
                    }, t.deleteVertexArray = function () {
                        return null
                    })
                }
                if (2 !== e.webGLVersion) {
                    var n = t.getExtension("ANGLE_instanced_arrays");
                    n ? (t.vertexAttribDivisor = function (t, e) {
                        return n.vertexAttribDivisorANGLE(t, e)
                    }, t.drawElementsInstanced = function (t, e, r, i, o) {
                        return n.drawElementsInstancedANGLE(t, e, r, i, o)
                    }, t.drawArraysInstanced = function (t, e, r, i) {
                        return n.drawArraysInstancedANGLE(t, e, r, i)
                    }) : this.hasInstance = !1
                }
                this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
            }, t.prototype.bind = function (t, e) {
                e = e || this.renderer.shader.shader;
                var r = this.gl, n = t.glVertexArrayObjects[this.CONTEXT_UID], i = !1;
                n || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = n = {}, i = !0);
                var o = n[e.program.id] || this.initGeometryVao(t, e, i);
                this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? r.bindVertexArray(o) : this.activateVao(t, e.program)), this.updateBuffers()
            }, t.prototype.reset = function () {
                this.unbind()
            }, t.prototype.updateBuffers = function () {
                for (var t = this._activeGeometry, e = this.renderer.buffer, r = 0; r < t.buffers.length; r++) {
                    var n = t.buffers[r];
                    e.update(n)
                }
            }, t.prototype.checkCompatibility = function (t, e) {
                var r = t.attributes, n = e.attributeData;
                for (var i in n) if (!r[i]) throw new Error('shader and geometry incompatible, geometry missing the "' + i + '" attribute')
            }, t.prototype.getSignature = function (t, e) {
                var r = t.attributes, n = e.attributeData, i = ["g", t.id];
                for (var o in r) n[o] && i.push(o);
                return i.join("-")
            }, t.prototype.initGeometryVao = function (t, e, r) {
                void 0 === r && (r = !0);
                var n = this.gl, i = this.CONTEXT_UID, o = this.renderer.buffer, s = e.program;
                s.glPrograms[i] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, s);
                var a = this.getSignature(t, s), u = t.glVertexArrayObjects[this.CONTEXT_UID], h = u[a];
                if (h) return u[s.id] = h, h;
                var c = t.buffers, l = t.attributes, f = {}, d = {};
                for (var p in c) f[p] = 0, d[p] = 0;
                for (var p in l) !l[p].size && s.attributeData[p] ? l[p].size = s.attributeData[p].size : l[p].size, f[l[p].buffer] += l[p].size * Dt[l[p].type];
                for (var p in l) {
                    var _ = l[p], m = _.size;
                    void 0 === _.stride && (f[_.buffer] === m * Dt[_.type] ? _.stride = 0 : _.stride = f[_.buffer]), void 0 === _.start && (_.start = d[_.buffer], d[_.buffer] += m * Dt[_.type])
                }
                h = n.createVertexArray(), n.bindVertexArray(h);
                for (var v = 0; v < c.length; v++) {
                    var g = c[v];
                    o.bind(g), r && g._glBuffers[i].refCount++
                }
                return this.activateVao(t, s), this._activeVao = h, u[s.id] = h, u[a] = h, h
            }, t.prototype.disposeGeometry = function (t, e) {
                var r;
                if (this.managedGeometries[t.id]) {
                    delete this.managedGeometries[t.id];
                    var n = t.glVertexArrayObjects[this.CONTEXT_UID], i = this.gl, o = t.buffers,
                        s = null === (r = this.renderer) || void 0 === r ? void 0 : r.buffer;
                    if (t.disposeRunner.remove(this), n) {
                        if (s) for (var a = 0; a < o.length; a++) {
                            var u = o[a]._glBuffers[this.CONTEXT_UID];
                            u && (0 !== --u.refCount || e || s.dispose(o[a], e))
                        }
                        if (!e) for (var h in n) if ("g" === h[0]) {
                            var c = n[h];
                            this._activeVao === c && this.unbind(), i.deleteVertexArray(c)
                        }
                        delete t.glVertexArrayObjects[this.CONTEXT_UID]
                    }
                }
            }, t.prototype.disposeAll = function (t) {
                for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++) this.disposeGeometry(this.managedGeometries[e[r]], t)
            }, t.prototype.activateVao = function (t, e) {
                var r = this.gl, n = this.CONTEXT_UID, i = this.renderer.buffer, o = t.buffers, s = t.attributes;
                t.indexBuffer && i.bind(t.indexBuffer);
                var a = null;
                for (var u in s) {
                    var h = s[u], c = o[h.buffer], l = c._glBuffers[n];
                    if (e.attributeData[u]) {
                        a !== l && (i.bind(c), a = l);
                        var f = e.attributeData[u].location;
                        if (r.enableVertexAttribArray(f), r.vertexAttribPointer(f, h.size, h.type || r.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                            if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                            r.vertexAttribDivisor(f, 1)
                        }
                    }
                }
            }, t.prototype.draw = function (t, e, r, n) {
                var i = this.gl, o = this._activeGeometry;
                if (o.indexBuffer) {
                    var s = o.indexBuffer.data.BYTES_PER_ELEMENT, a = 2 === s ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
                    (2 === s || 4 === s && this.canUseUInt32ElementIndex) && (o.instanced ? i.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, n || 1) : i.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s))
                } else o.instanced ? i.drawArraysInstanced(t, r, e || o.getSize(), n || 1) : i.drawArrays(t, r, e || o.getSize());
                return this
            }, t.prototype.unbind = function () {
                this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), Ft = function () {
            function t(t) {
                void 0 === t && (t = null), this.type = C.j.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = N.b.FILTER_MULTISAMPLE, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null
            }

            return t.prototype.reset = function () {
                this.pooled && (this.maskObject = null, this.type = C.j.NONE, this.autoDetect = !0), this._target = null
            }, t.prototype.copyCountersOrReset = function (t) {
                t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
            }, t
        }(), Ut = {}, Bt = Ut, Gt = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            uint: 1,
            uvec2: 2,
            uvec3: 3,
            uvec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        }, kt = null, Xt = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            UNSIGNED_INT: "uint",
            UNSIGNED_INT_VEC2: "uvec2",
            UNSIGNED_INT_VEC3: "uvec3",
            UNSIGNED_INT_VEC4: "uvec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            INT_SAMPLER_2D: "sampler2D",
            UNSIGNED_INT_SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            INT_SAMPLER_CUBE: "samplerCube",
            UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray",
            INT_SAMPLER_2D_ARRAY: "sampler2DArray",
            UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
        }, jt = [{
            test: function (t) {
                return "float" === t.type && 1 === t.size
            }, code: function (t) {
                return '\n            if(uv["' + t + '"] !== ud["' + t + '"].value)\n            {\n                ud["' + t + '"].value = uv["' + t + '"]\n                gl.uniform1f(ud["' + t + '"].location, uv["' + t + '"])\n            }\n            '
            }
        }, {
            test: function (t) {
                return ("sampler2D" === t.type || "samplerCube" === t.type || "sampler2DArray" === t.type) && 1 === t.size && !t.isArray
            }, code: function (t) {
                return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t + '"], t);\n\n            if(ud["' + t + '"].value !== t)\n            {\n                ud["' + t + '"].value = t;\n                gl.uniform1i(ud["' + t + '"].location, t);\n; // eslint-disable-line max-len\n            }'
            }
        }, {
            test: function (t, e) {
                return "mat3" === t.type && 1 === t.size && void 0 !== e.a
            }, code: function (t) {
                return '\n            gl.uniformMatrix3fv(ud["' + t + '"].location, false, uv["' + t + '"].toArray(true));\n            '
            }, codeUbo: function (t) {
                return "\n                var " + t + "_matrix = uv." + t + ".toArray(true);\n\n                data[offset] = " + t + "_matrix[0];\n                data[offset+1] = " + t + "_matrix[1];\n                data[offset+2] = " + t + "_matrix[2];\n        \n                data[offset + 4] = " + t + "_matrix[3];\n                data[offset + 5] = " + t + "_matrix[4];\n                data[offset + 6] = " + t + "_matrix[5];\n        \n                data[offset + 8] = " + t + "_matrix[6];\n                data[offset + 9] = " + t + "_matrix[7];\n                data[offset + 10] = " + t + "_matrix[8];\n            "
            }
        }, {
            test: function (t, e) {
                return "vec2" === t.type && 1 === t.size && void 0 !== e.x
            }, code: function (t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t + '"].location, v.x, v.y);\n                }'
            }, codeUbo: function (t) {
                return "\n                v = uv." + t + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "
            }
        }, {
            test: function (t) {
                return "vec2" === t.type && 1 === t.size
            }, code: function (t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t + '"].location, v[0], v[1]);\n                }\n            '
            }
        }, {
            test: function (t, e) {
                return "vec4" === t.type && 1 === t.size && void 0 !== e.width
            }, code: function (t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t + '"].location, v.x, v.y, v.width, v.height)\n                }'
            }, codeUbo: function (t) {
                return "\n                    v = uv." + t + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "
            }
        }, {
            test: function (t) {
                return "vec4" === t.type && 1 === t.size
            }, code: function (t) {
                return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t + '"].location, v[0], v[1], v[2], v[3])\n                }'
            }
        }], Ht = {
            float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
            vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
            vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
            vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
            int: "gl.uniform1i(location, v)",
            ivec2: "gl.uniform2i(location, v[0], v[1])",
            ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            uint: "gl.uniform1ui(location, v)",
            uvec2: "gl.uniform2ui(location, v[0], v[1])",
            uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
            uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
            bool: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1i(location, v)\n    }",
            bvec2: "gl.uniform2i(location, v[0], v[1])",
            bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            sampler2D: "gl.uniform1i(location, v)",
            samplerCube: "gl.uniform1i(location, v)",
            sampler2DArray: "gl.uniform1i(location, v)"
        }, Yt = {
            float: "gl.uniform1fv(location, v)",
            vec2: "gl.uniform2fv(location, v)",
            vec3: "gl.uniform3fv(location, v)",
            vec4: "gl.uniform4fv(location, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            int: "gl.uniform1iv(location, v)",
            ivec2: "gl.uniform2iv(location, v)",
            ivec3: "gl.uniform3iv(location, v)",
            ivec4: "gl.uniform4iv(location, v)",
            uint: "gl.uniform1uiv(location, v)",
            uvec2: "gl.uniform2uiv(location, v)",
            uvec3: "gl.uniform3uiv(location, v)",
            uvec4: "gl.uniform4uiv(location, v)",
            bool: "gl.uniform1iv(location, v)",
            bvec2: "gl.uniform2iv(location, v)",
            bvec3: "gl.uniform3iv(location, v)",
            bvec4: "gl.uniform4iv(location, v)",
            sampler2D: "gl.uniform1iv(location, v)",
            samplerCube: "gl.uniform1iv(location, v)",
            sampler2DArray: "gl.uniform1iv(location, v)"
        },
        Vt = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n"),
        zt = 0, Wt = {}, qt = function () {
            function t(e, r, n) {
                void 0 === n && (n = "pixi-shader"), this.id = zt++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (n = n.replace(/\s+/g, "-"), Wt[n] ? (Wt[n]++, n += "-" + Wt[n]) : Wt[n] = 1, this.vertexSrc = "#define SHADER_NAME " + n + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + n + "\n" + this.fragmentSrc, this.vertexSrc = _(this.vertexSrc, N.b.PRECISION_VERTEX, C.m.HIGH), this.fragmentSrc = _(this.fragmentSrc, N.b.PRECISION_FRAGMENT, p())), this.glPrograms = {}, this.syncUniforms = null
            }

            return Object.defineProperty(t, "defaultVertexSrc", {
                get: function () {
                    return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t, "defaultFragmentSrc", {
                get: function () {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
                }, enumerable: !1, configurable: !0
            }), t.from = function (e, r, n) {
                var i = e + r, o = D.ProgramCache[i];
                return o || (D.ProgramCache[i] = o = new t(e, r, n)), o
            }, t
        }(), Zt = function () {
            function t(t, e) {
                this.uniformBindCount = 0, this.program = t, this.uniformGroup = e ? e instanceof bt ? e : new bt(e) : new bt({})
            }

            return t.prototype.checkUniformExists = function (t, e) {
                if (e.uniforms[t]) return !0;
                for (var r in e.uniforms) {
                    var n = e.uniforms[r];
                    if (n.group && this.checkUniformExists(t, n)) return !0
                }
                return !1
            }, t.prototype.destroy = function () {
                this.uniformGroup = null
            }, Object.defineProperty(t.prototype, "uniforms", {
                get: function () {
                    return this.uniformGroup.uniforms
                }, enumerable: !1, configurable: !0
            }), t.from = function (e, r, n) {
                return new t(qt.from(e, r), n)
            }, t
        }(), Kt = function () {
            function t() {
                this.data = 0, this.blendMode = C.b.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
            }

            return Object.defineProperty(t.prototype, "blend", {
                get: function () {
                    return !!(1 & this.data)
                }, set: function (t) {
                    !!(1 & this.data) !== t && (this.data ^= 1)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "offsets", {
                get: function () {
                    return !!(2 & this.data)
                }, set: function (t) {
                    !!(2 & this.data) !== t && (this.data ^= 2)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "culling", {
                get: function () {
                    return !!(4 & this.data)
                }, set: function (t) {
                    !!(4 & this.data) !== t && (this.data ^= 4)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "depthTest", {
                get: function () {
                    return !!(8 & this.data)
                }, set: function (t) {
                    !!(8 & this.data) !== t && (this.data ^= 8)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "depthMask", {
                get: function () {
                    return !!(32 & this.data)
                }, set: function (t) {
                    !!(32 & this.data) !== t && (this.data ^= 32)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "clockwiseFrontFace", {
                get: function () {
                    return !!(16 & this.data)
                }, set: function (t) {
                    !!(16 & this.data) !== t && (this.data ^= 16)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "blendMode", {
                get: function () {
                    return this._blendMode
                }, set: function (t) {
                    this.blend = t !== C.b.NONE, this._blendMode = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "polygonOffset", {
                get: function () {
                    return this._polygonOffset
                }, set: function (t) {
                    this.offsets = !!t, this._polygonOffset = t
                }, enumerable: !1, configurable: !0
            }), t.prototype.toString = function () {
                return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
            }, t.for2d = function () {
                var e = new t;
                return e.depthTest = !1, e.blend = !0, e
            }, t
        }(), Jt = function (t) {
            function e(r, n, i) {
                var o = this, s = qt.from(r || e.defaultVertexSrc, n || e.defaultFragmentSrc);
                return o = t.call(this, s, i) || this, o.padding = 0, o.resolution = N.b.FILTER_RESOLUTION, o.multisample = N.b.FILTER_MULTISAMPLE, o.enabled = !0, o.autoFit = !0, o.state = new Kt, o
            }

            return i(e, t), e.prototype.apply = function (t, e, r, n, i) {
                t.applyFilter(this, e, r, n)
            }, Object.defineProperty(e.prototype, "blendMode", {
                get: function () {
                    return this.state.blendMode
                }, set: function (t) {
                    this.state.blendMode = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "resolution", {
                get: function () {
                    return this._resolution
                }, set: function (t) {
                    this._resolution = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e, "defaultVertexSrc", {
                get: function () {
                    return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e, "defaultFragmentSrc", {
                get: function () {
                    return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
                }, enumerable: !1, configurable: !0
            }), e
        }(Zt),
        $t = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
        Qt = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
        te = new U.d, ee = function () {
            function t(t, e) {
                this._texture = t, this.mapCoord = new U.d, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
            }

            return Object.defineProperty(t.prototype, "texture", {
                get: function () {
                    return this._texture
                }, set: function (t) {
                    this._texture = t, this._textureID = -1
                }, enumerable: !1, configurable: !0
            }), t.prototype.multiplyUvs = function (t, e) {
                void 0 === e && (e = t);
                for (var r = this.mapCoord, n = 0; n < t.length; n += 2) {
                    var i = t[n], o = t[n + 1];
                    e[n] = i * r.a + o * r.c + r.tx, e[n + 1] = i * r.b + o * r.d + r.ty
                }
                return e
            }, t.prototype.update = function (t) {
                var e = this._texture;
                if (!e || !e.valid) return !1;
                if (!t && this._textureID === e._updateID) return !1;
                this._textureID = e._updateID, this._updateID++;
                var r = e._uvs;
                this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                var n = e.orig, i = e.trim;
                i && (te.set(n.width / i.width, 0, 0, n.height / i.height, -i.x / i.width, -i.y / i.height), this.mapCoord.append(te));
                var o = e.baseTexture, s = this.uClampFrame, a = this.clampMargin / o.resolution, u = this.clampOffset;
                return s[0] = (e._frame.x + a + u) / o.width, s[1] = (e._frame.y + a + u) / o.height, s[2] = (e._frame.x + e._frame.width - a + u) / o.width, s[3] = (e._frame.y + e._frame.height - a + u) / o.height, this.uClampOffset[0] = u / o.realWidth, this.uClampOffset[1] = u / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
            }, t
        }(), re = function (t) {
            function e(e) {
                var r = this, n = new U.d;
                return r = t.call(this, $t, Qt) || this, e.renderable = !1, r.maskSprite = e, r.maskMatrix = n, r
            }

            return i(e, t), e.prototype.apply = function (t, e, r, n) {
                var i = this.maskSprite, o = i._texture;
                o.valid && (o.uvMatrix || (o.uvMatrix = new ee(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = i.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, e, r, n))
            }, e
        }(Jt), ne = function () {
            function t(t) {
                this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
            }

            return t.prototype.setMaskStack = function (t) {
                this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
            }, t.prototype.push = function (t, e) {
                var r = e;
                if (!r.isMaskData) {
                    var n = this.maskDataPool.pop() || new Ft;
                    n.pooled = !0, n.maskObject = e, r = n
                }
                switch (r.autoDetect && this.detect(r), r.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), r._target = t, r.type) {
                    case C.j.SCISSOR:
                        this.maskStack.push(r), this.renderer.scissor.push(r);
                        break;
                    case C.j.STENCIL:
                        this.maskStack.push(r), this.renderer.stencil.push(r);
                        break;
                    case C.j.SPRITE:
                        r.copyCountersOrReset(null), this.pushSpriteMask(r), this.maskStack.push(r)
                }
            }, t.prototype.pop = function (t) {
                var e = this.maskStack.pop();
                if (e && e._target === t) {
                    switch (e.type) {
                        case C.j.SCISSOR:
                            this.renderer.scissor.pop();
                            break;
                        case C.j.STENCIL:
                            this.renderer.stencil.pop(e.maskObject);
                            break;
                        case C.j.SPRITE:
                            this.popSpriteMask()
                    }
                    e.reset(), e.pooled && this.maskDataPool.push(e)
                }
            }, t.prototype.detect = function (t) {
                var e = t.maskObject;
                if (e.isSprite) return void (t.type = C.j.SPRITE);
                if (t.type = C.j.STENCIL, this.enableScissor && e.isFastRect && e.isFastRect()) {
                    var r = e.worldTransform, n = Math.atan2(r.b, r.a), i = Math.atan2(r.d, r.c);
                    n = Math.round(n * (180 / Math.PI) * 100), i = Math.round(i * (180 / Math.PI) * 100) - n, n = (n % 9e3 + 9e3) % 9e3, i = (i % 18e3 + 18e3) % 18e3, 0 === n && 9e3 === i && (t.type = C.j.SCISSOR)
                }
            }, t.prototype.pushSpriteMask = function (t) {
                var e, r, n = t.maskObject, i = t._target, o = this.alphaMaskPool[this.alphaMaskIndex];
                o || (o = this.alphaMaskPool[this.alphaMaskIndex] = [new re(n)]);
                var s, a, u = this.renderer, h = u.renderTexture;
                if (h.current) {
                    var c = h.current;
                    s = t.resolution || c.resolution, a = null !== (e = t.multisample) && void 0 !== e ? e : c.multisample
                } else s = t.resolution || u.resolution, a = null !== (r = t.multisample) && void 0 !== r ? r : u.multisample;
                o[0].resolution = s, o[0].multisample = a, o[0].maskSprite = n;
                var l = i.filterArea;
                i.filterArea = n.getBounds(!0), u.filter.push(i, o), i.filterArea = l, this.alphaMaskIndex++
            }, t.prototype.popSpriteMask = function () {
                this.renderer.filter.pop(), this.alphaMaskIndex--
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), ie = function () {
            function t(t) {
                this.renderer = t, this.maskStack = [], this.glConst = 0
            }

            return t.prototype.getStackLength = function () {
                return this.maskStack.length
            }, t.prototype.setMaskStack = function (t) {
                var e = this.renderer.gl, r = this.getStackLength();
                this.maskStack = t;
                var n = this.getStackLength();
                n !== r && (0 === n ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
            }, t.prototype._useCurrent = function () {
            }, t.prototype.destroy = function () {
                this.renderer = null, this.maskStack = null
            }, t
        }(), oe = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.glConst = WebGLRenderingContext.SCISSOR_TEST, r
            }

            return i(e, t), e.prototype.getStackLength = function () {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._scissorCounter : 0
            }, e.prototype.push = function (t) {
                var e = t.maskObject;
                e.renderable = !0;
                var r = t._scissorRect, n = e.getBounds(!0), i = this.renderer.gl;
                e.renderable = !1, r ? n.fit(r) : i.enable(i.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = n, this._useCurrent()
            }, e.prototype.pop = function () {
                var t = this.renderer.gl;
                this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
            }, e.prototype._useCurrent = function () {
                var t = this.maskStack[this.maskStack.length - 1]._scissorRect, e = this.renderer.renderTexture.current,
                    r = this.renderer.projection, n = r.transform, i = r.sourceFrame, o = r.destinationFrame,
                    s = e ? e.resolution : this.renderer.resolution, a = o.width / i.width, u = o.height / i.height,
                    h = ((t.x - i.x) * a + o.x) * s, c = ((t.y - i.y) * u + o.y) * s, l = t.width * a * s,
                    f = t.height * u * s;
                n && (h += n.tx * s, c += n.ty * s), e || (c = this.renderer.height - f - c), h = Math.round(h), c = Math.round(c), l = Math.round(l), f = Math.round(f), this.renderer.gl.scissor(h, c, l, f)
            }, e
        }(ie), se = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.glConst = WebGLRenderingContext.STENCIL_TEST, r
            }

            return i(e, t), e.prototype.getStackLength = function () {
                var t = this.maskStack[this.maskStack.length - 1];
                return t ? t._stencilCounter : 0
            }, e.prototype.push = function (t) {
                var e = t.maskObject, r = this.renderer.gl, n = t._stencilCounter;
                0 === n && (this.renderer.framebuffer.forceStencil(), r.enable(r.STENCIL_TEST)), t._stencilCounter++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, n, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent()
            }, e.prototype.pop = function (t) {
                var e = this.renderer.gl;
                0 === this.getStackLength() ? (e.disable(e.STENCIL_TEST), e.clearStencil(0), e.clear(e.STENCIL_BUFFER_BIT)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent())
            }, e.prototype._useCurrent = function () {
                var t = this.renderer.gl;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
            }, e
        }(ie), ae = function () {
            function t(t) {
                this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new U.d, this.transform = null
            }

            return t.prototype.update = function (t, e, r, n) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, n), this.transform && this.projectionMatrix.append(this.transform);
                var i = this.renderer;
                i.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, i.globalUniforms.update(), i.shader.shader && i.shader.syncUniformGroup(i.shader.shader.uniforms.globals)
            }, t.prototype.calculateProjection = function (t, e, r, n) {
                var i = this.projectionMatrix, o = n ? -1 : 1;
                i.identity(), i.a = 1 / e.width * 2, i.d = o * (1 / e.height * 2), i.tx = -1 - e.x * i.a, i.ty = -o - e.y * i.d
            }, t.prototype.setTransform = function (t) {
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), ue = new U.j, he = new U.j, ce = function () {
            function t(t) {
                this.renderer = t, this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new U.j, this.destinationFrame = new U.j, this.viewportFrame = new U.j
            }

            return t.prototype.bind = function (t, e, r) {
                void 0 === t && (t = null);
                var n = this.renderer;
                this.current = t;
                var i, o, s;
                t ? (i = t.baseTexture, s = i.resolution, e || (ue.width = t.frame.width, ue.height = t.frame.height, e = ue), r || (he.x = t.frame.x, he.y = t.frame.y, he.width = e.width, he.height = e.height, r = he), o = i.framebuffer) : (s = n.resolution, e || (ue.width = n.screen.width, ue.height = n.screen.height, e = ue), r || (r = ue, r.width = e.width, r.height = e.height));
                var a = this.viewportFrame;
                a.x = r.x * s, a.y = r.y * s, a.width = r.width * s, a.height = r.height * s, t || (a.y = n.view.height - (a.y + a.height)), a.ceil(), this.renderer.framebuffer.bind(o, a), this.renderer.projection.update(r, e, s, !o), t ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(r)
            }, t.prototype.clear = function (t, e) {
                t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor;
                var r = this.destinationFrame, n = this.current ? this.current.baseTexture : this.renderer.screen,
                    i = r.width !== n.width || r.height !== n.height;
                if (i) {
                    var o = this.viewportFrame, s = o.x, a = o.y, u = o.width, h = o.height;
                    s = Math.round(s), a = Math.round(a), u = Math.round(u), h = Math.round(h), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(s, a, u, h)
                }
                this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e), i && this.renderer.scissor.pop()
            }, t.prototype.resize = function () {
                this.bind(null)
            }, t.prototype.reset = function () {
                this.bind(null)
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), le = {
            float: "\n        data[offset] = v;\n    ",
            vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
            vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
            vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
            mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
            mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
            mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
        }, fe = {
            float: 4,
            vec2: 8,
            vec3: 12,
            vec4: 16,
            int: 4,
            ivec2: 8,
            ivec3: 12,
            ivec4: 16,
            uint: 4,
            uvec2: 8,
            uvec3: 12,
            uvec4: 16,
            bool: 4,
            bvec2: 8,
            bvec3: 12,
            bvec4: 16,
            mat2: 32,
            mat3: 48,
            mat4: 64
        }, de = function () {
            function t() {
            }

            return t
        }(), pe = function () {
            function t(t, e) {
                this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
            }

            return t.prototype.destroy = function () {
                this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
            }, t
        }(), _e = 0, me = {textureCount: 0, uboCount: 0}, ve = function () {
            function t(t) {
                this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = _e++
            }

            return t.prototype.systemCheck = function () {
                if (!E()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
            }, t.prototype.contextChange = function (t) {
                this.gl = t, this.reset()
            }, t.prototype.bind = function (t, e) {
                t.uniforms.globals = this.renderer.globalUniforms;
                var r = t.program, n = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
                return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(n.program)), e || (me.textureCount = 0, me.uboCount = 0, this.syncUniformGroup(t.uniformGroup, me)), n
            }, t.prototype.setUniforms = function (t) {
                var e = this.shader.program, r = e.glPrograms[this.renderer.CONTEXT_UID];
                e.syncUniforms(r.uniformData, t, this.renderer)
            }, t.prototype.syncUniformGroup = function (t, e) {
                var r = this.getGlProgram();
                t.static && t.dirtyId === r.uniformDirtyGroups[t.id] || (r.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e))
            }, t.prototype.syncUniforms = function (t, e, r) {
                (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r)
            }, t.prototype.createSyncGroups = function (t) {
                var e = this.getSignature(t, this.shader.program.uniformData, "u");
                return this.cache[e] || (this.cache[e] = g(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
            }, t.prototype.syncUniformBufferGroup = function (t, e) {
                var r = this.getGlProgram();
                if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
                    t.dirtyId = 0;
                    var n = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
                    t.buffer.update(), n(r.uniformData, t.uniforms, this.renderer, me, t.buffer)
                }
                this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
            }, t.prototype.createSyncBufferGroup = function (t, e, r) {
                var n = this.renderer.gl;
                this.renderer.buffer.bind(t.buffer);
                var i = this.gl.getUniformBlockIndex(e.program, r);
                e.uniformBufferBindings[r] = this.shader.uniformBindCount, n.uniformBlockBinding(e.program, i, this.shader.uniformBindCount), this.shader.uniformBindCount++;
                var o = this.getSignature(t, this.shader.program.uniformData, "ubo"), s = this._uboCache[o];
                if (s || (s = this._uboCache[o] = R(t, this.shader.program.uniformData)), t.autoManage) {
                    var a = new Float32Array(s.size / 4);
                    t.buffer.update(a)
                }
                return e.uniformGroups[t.id] = s.syncFunc, e.uniformGroups[t.id]
            }, t.prototype.getSignature = function (t, e, r) {
                var n = t.uniforms, i = [r + "-"];
                for (var o in n) i.push(o), e[o] && i.push(e[o].type);
                return i.join("-")
            }, t.prototype.getGlProgram = function () {
                return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
            }, t.prototype.generateProgram = function (t) {
                var e = this.gl, r = t.program, n = I(e, r);
                return r.glPrograms[this.renderer.CONTEXT_UID] = n, n
            }, t.prototype.reset = function () {
                this.program = null, this.shader = null
            }, t.prototype.destroy = function () {
                this.renderer = null, this.destroyed = !0
            }, t
        }(), ge = 0, ye = 1, Te = 2, Ee = 3, be = 4, xe = 5, Oe = function () {
            function t() {
                this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = C.b.NONE, this._blendEq = !1, this.map = [], this.map[ge] = this.setBlend, this.map[ye] = this.setOffset, this.map[Te] = this.setCullFace, this.map[Ee] = this.setDepthTest, this.map[be] = this.setFrontFace, this.map[xe] = this.setDepthMask, this.checks = [], this.defaultState = new Kt, this.defaultState.blend = !0
            }

            return t.prototype.contextChange = function (t) {
                this.gl = t, this.blendModes = w(t), this.set(this.defaultState), this.reset()
            }, t.prototype.set = function (t) {
                if (t = t || this.defaultState, this.stateId !== t.data) {
                    for (var e = this.stateId ^ t.data, r = 0; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
                    this.stateId = t.data
                }
                for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t)
            }, t.prototype.forceState = function (t) {
                t = t || this.defaultState;
                for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                for (var e = 0; e < this.checks.length; e++) this.checks[e](this, t);
                this.stateId = t.data
            }, t.prototype.setBlend = function (e) {
                this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
            }, t.prototype.setOffset = function (e) {
                this.updateCheck(t.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
            }, t.prototype.setDepthTest = function (t) {
                this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
            }, t.prototype.setDepthMask = function (t) {
                this.gl.depthMask(t)
            }, t.prototype.setCullFace = function (t) {
                this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
            }, t.prototype.setFrontFace = function (t) {
                this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
            }, t.prototype.setBlendMode = function (t) {
                if (t !== this.blendMode) {
                    this.blendMode = t;
                    var e = this.blendModes[t], r = this.gl;
                    2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                }
            }, t.prototype.setPolygonOffset = function (t, e) {
                this.gl.polygonOffset(t, e)
            }, t.prototype.reset = function () {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
            }, t.prototype.updateCheck = function (t, e) {
                var r = this.checks.indexOf(t);
                e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1)
            }, t.checkBlendMode = function (t, e) {
                t.setBlendMode(e.blendMode)
            }, t.checkPolygonOffset = function (t, e) {
                t.setPolygonOffset(1, e.polygonOffset)
            }, t.prototype.destroy = function () {
                this.gl = null
            }, t
        }(), Re = function () {
            function t(t) {
                this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = N.b.GC_MAX_IDLE, this.checkCountMax = N.b.GC_MAX_CHECK_COUNT, this.mode = N.b.GC_MODE
            }

            return t.prototype.postrender = function () {
                this.renderer.renderingToScreen && (this.count++, this.mode !== C.i.MANUAL && ++this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
            }, t.prototype.run = function () {
                for (var t = this.renderer.texture, e = t.managedTextures, r = !1, n = 0; n < e.length; n++) {
                    var i = e[n];
                    !i.framebuffer && this.count - i.touched > this.maxIdle && (t.destroyTexture(i, !0), e[n] = null, r = !0)
                }
                if (r) {
                    for (var o = 0, n = 0; n < e.length; n++) null !== e[n] && (e[o++] = e[n]);
                    e.length = o
                }
            }, t.prototype.unload = function (t) {
                var e = this.renderer.texture, r = t._texture;
                r && !r.framebuffer && e.destroyTexture(r);
                for (var n = t.children.length - 1; n >= 0; n--) this.unload(t.children[n])
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), Ae = function () {
            function t(t) {
                this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = C.r.UNSIGNED_BYTE, this.internalFormat = C.h.RGBA, this.samplerType = 0
            }

            return t
        }(), Se = function () {
            function t(t) {
                this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new Y, this.hasIntegerTextures = !1
            }

            return t.prototype.contextChange = function () {
                var t = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = P(t);
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = e;
                for (var r = 0; r < e; r++) this.boundTextures[r] = null;
                this.emptyTextures = {};
                var n = new Ae(t.createTexture());
                t.bindTexture(t.TEXTURE_2D, n.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = n, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ae(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
                for (var r = 0; r < 6; r++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
                for (var r = 0; r < this.boundTextures.length; r++) this.bind(null, r)
            }, t.prototype.bind = function (t, e) {
                void 0 === e && (e = 0);
                var r = this.gl;
                if ((t = null === t || void 0 === t ? void 0 : t.castToBaseTexture()) && t.valid && !t.parentTextureArray) {
                    t.touched = this.renderer.textureGC.count;
                    var n = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                    this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, n.texture)), n.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t
                } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null
            }, t.prototype.reset = function () {
                this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
                for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
            }, t.prototype.unbind = function (t) {
                var e = this, r = e.gl, n = e.boundTextures;
                if (this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;
                    for (var i = 0; i < n.length; i++) n[i] === this.unknownTexture && this.bind(null, i)
                }
                for (var i = 0; i < n.length; i++) n[i] === t && (this.currentLocation !== i && (r.activeTexture(r.TEXTURE0 + i), this.currentLocation = i), r.bindTexture(t.target, this.emptyTextures[t.target].texture), n[i] = null)
            }, t.prototype.ensureSamplerType = function (t) {
                var e = this, r = e.boundTextures, n = e.hasIntegerTextures, i = e.CONTEXT_UID;
                if (n) for (var o = t - 1; o >= 0; --o) {
                    var s = r[o];
                    if (s) {
                        var a = s._glTextures[i];
                        a.samplerType !== C.o.FLOAT && this.renderer.texture.unbind(s)
                    }
                }
            }, t.prototype.initTexture = function (t) {
                var e = new Ae(this.gl.createTexture());
                return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
            }, t.prototype.initTextureType = function (t, e) {
                var r, n;
                e.internalFormat = null !== (n = null === (r = this.internalFormats[t.type]) || void 0 === r ? void 0 : r[t.format]) && void 0 !== n ? n : t.format, 2 === this.webGLVersion && t.type === C.r.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
            }, t.prototype.updateTexture = function (t) {
                var e = t._glTextures[this.CONTEXT_UID];
                if (e) {
                    var r = this.renderer;
                    if (this.initTextureType(t, e), t.resource && t.resource.upload(r, t, e)) e.samplerType !== C.o.FLOAT && (this.hasIntegerTextures = !0); else {
                        var n = t.realWidth, i = t.realHeight, o = r.gl;
                        (e.width !== n || e.height !== i || e.dirtyId < 0) && (e.width = n, e.height = i, o.texImage2D(t.target, 0, e.internalFormat, n, i, 0, t.format, e.type, null))
                    }
                    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                }
            }, t.prototype.destroyTexture = function (t, e) {
                var r = this.gl;
                if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                    var n = this.managedTextures.indexOf(t);
                    -1 !== n && Object(D.removeItems)(this.managedTextures, n, 1)
                }
            }, t.prototype.updateTextureStyle = function (t) {
                var e = t._glTextures[this.CONTEXT_UID];
                e && (t.mipmap !== C.k.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = C.s.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
            }, t.prototype.setStyle = function (t, e) {
                var r = this.gl;
                if (e.mipmap && t.mipmap !== C.k.ON_MANUAL && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                    r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === C.p.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
                    var n = this.renderer.context.extensions.anisotropicFiltering;
                    if (n && t.anisotropicLevel > 0 && t.scaleMode === C.p.LINEAR) {
                        var i = Math.min(t.anisotropicLevel, r.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                        r.texParameterf(t.target, n.TEXTURE_MAX_ANISOTROPY_EXT, i)
                    }
                } else r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === C.p.LINEAR ? r.LINEAR : r.NEAREST);
                r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === C.p.LINEAR ? r.LINEAR : r.NEAREST)
            }, t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), Ie = {
            __proto__: null,
            FilterSystem: At,
            BatchSystem: It,
            ContextSystem: Pt,
            FramebufferSystem: Ct,
            GeometrySystem: Lt,
            MaskSystem: ne,
            ScissorSystem: oe,
            StencilSystem: se,
            ProjectionSystem: ae,
            RenderTextureSystem: ce,
            ShaderSystem: ve,
            StateSystem: Oe,
            TextureGCSystem: Re,
            TextureSystem: Se
        }, we = new U.d, Pe = function (t) {
            function e(e, r) {
                void 0 === e && (e = C.n.UNKNOWN);
                var n = t.call(this) || this;
                return r = Object.assign({}, N.b.RENDER_OPTIONS, r), n.options = r, n.type = e, n.screen = new U.j(0, 0, r.width, r.height), n.view = r.view || document.createElement("canvas"), n.resolution = r.resolution || N.b.RESOLUTION, n.useContextAlpha = r.useContextAlpha, n.autoDensity = !!r.autoDensity, n.preserveDrawingBuffer = r.preserveDrawingBuffer, n.clearBeforeRender = r.clearBeforeRender, n._backgroundColor = 0, n._backgroundColorRgba = [0, 0, 0, 1], n._backgroundColorString = "#000000", n.backgroundColor = r.backgroundColor || n._backgroundColor, n.backgroundAlpha = r.backgroundAlpha, void 0 !== r.transparent && (Object(D.deprecation)("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."), n.useContextAlpha = r.transparent, n.backgroundAlpha = r.transparent ? 0 : 1), n._lastObjectRendered = null, n.plugins = {}, n
            }

            return i(e, t), e.prototype.initPlugins = function (t) {
                for (var e in t) this.plugins[e] = new t[e](this)
            }, Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this.view.width
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function () {
                    return this.view.height
                }, enumerable: !1, configurable: !0
            }), e.prototype.resize = function (t, e) {
                this.view.width = Math.round(t * this.resolution), this.view.height = Math.round(e * this.resolution);
                var r = this.view.width / this.resolution, n = this.view.height / this.resolution;
                this.screen.width = r, this.screen.height = n, this.autoDensity && (this.view.style.width = r + "px", this.view.style.height = n + "px"), this.emit("resize", r, n)
            }, e.prototype.generateTexture = function (t, e, r, n) {
                void 0 === e && (e = {}), "number" == typeof e && (Object(D.deprecation)("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options."), e = {
                    scaleMode: e,
                    resolution: r,
                    region: n
                });
                var i = e.region, s = o(e, ["region"]);
                n = i || t.getLocalBounds(null, !0), 0 === n.width && (n.width = 1), 0 === n.height && (n.height = 1);
                var a = ht.create(k({width: n.width, height: n.height}, s));
                return we.tx = -n.x, we.ty = -n.y, this.render(t, {
                    renderTexture: a,
                    clear: !1,
                    transform: we,
                    skipUpdateTransform: !!t.parent
                }), a
            }, e.prototype.destroy = function (t) {
                for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                var r = this;
                r.plugins = null, r.type = C.n.UNKNOWN, r.view = null, r.screen = null, r._tempDisplayObjectParent = null, r.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null
            }, Object.defineProperty(e.prototype, "backgroundColor", {
                get: function () {
                    return this._backgroundColor
                }, set: function (t) {
                    this._backgroundColor = t, this._backgroundColorString = Object(D.hex2string)(t), Object(D.hex2rgb)(t, this._backgroundColorRgba)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "backgroundAlpha", {
                get: function () {
                    return this._backgroundColorRgba[3]
                }, set: function (t) {
                    this._backgroundColorRgba[3] = t
                }, enumerable: !1, configurable: !0
            }), e
        }(D.EventEmitter), Me = function () {
            function t(t) {
                this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
            }

            return t
        }(), Ne = function () {
            function t(t) {
                this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
            }

            return t.prototype.destroy = function () {
                this.renderer = null
            }, t.prototype.contextChange = function () {
                this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
            }, t.prototype.bind = function (t) {
                var e = this, r = e.gl, n = e.CONTEXT_UID, i = t._glBuffers[n] || this.createGLBuffer(t);
                r.bindBuffer(t.type, i.buffer)
            }, t.prototype.bindBufferBase = function (t, e) {
                var r = this, n = r.gl, i = r.CONTEXT_UID;
                if (this.boundBufferBases[e] !== t) {
                    var o = t._glBuffers[i] || this.createGLBuffer(t);
                    this.boundBufferBases[e] = t, n.bindBufferBase(n.UNIFORM_BUFFER, e, o.buffer)
                }
            }, t.prototype.bindBufferRange = function (t, e, r) {
                var n = this, i = n.gl, o = n.CONTEXT_UID;
                r = r || 0;
                var s = t._glBuffers[o] || this.createGLBuffer(t);
                i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, s.buffer, 256 * r, 256)
            }, t.prototype.update = function (t) {
                var e = this, r = e.gl, n = e.CONTEXT_UID, i = t._glBuffers[n];
                if (t._updateID !== i.updateID) if (i.updateID = t._updateID, r.bindBuffer(t.type, i.buffer), i.byteLength >= t.data.byteLength) r.bufferSubData(t.type, 0, t.data); else {
                    var o = t.static ? r.STATIC_DRAW : r.DYNAMIC_DRAW;
                    i.byteLength = t.data.byteLength, r.bufferData(t.type, t.data, o)
                }
            }, t.prototype.dispose = function (t, e) {
                if (this.managedBuffers[t.id]) {
                    delete this.managedBuffers[t.id];
                    var r = t._glBuffers[this.CONTEXT_UID], n = this.gl;
                    t.disposeRunner.remove(this), r && (e || n.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID])
                }
            }, t.prototype.disposeAll = function (t) {
                for (var e = Object.keys(this.managedBuffers), r = 0; r < e.length; r++) this.dispose(this.managedBuffers[e[r]], t)
            }, t.prototype.createGLBuffer = function (t) {
                var e = this, r = e.CONTEXT_UID, n = e.gl;
                return t._glBuffers[r] = new Me(n.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[r]
            }, t
        }(), Ce = function (t) {
            function e(r) {
                var n = t.call(this, C.n.WEBGL, r) || this;
                return r = n.options, n.gl = null, n.CONTEXT_UID = 0, n.runners = {
                    destroy: new L.a("destroy"),
                    contextChange: new L.a("contextChange"),
                    reset: new L.a("reset"),
                    update: new L.a("update"),
                    postrender: new L.a("postrender"),
                    prerender: new L.a("prerender"),
                    resize: new L.a("resize")
                }, n.runners.contextChange.add(n), n.globalUniforms = new bt({projectionMatrix: new U.d}, !0), n.addSystem(ne, "mask").addSystem(Pt, "context").addSystem(Oe, "state").addSystem(ve, "shader").addSystem(Se, "texture").addSystem(Ne, "buffer").addSystem(Lt, "geometry").addSystem(Ct, "framebuffer").addSystem(oe, "scissor").addSystem(se, "stencil").addSystem(ae, "projection").addSystem(Re, "textureGC").addSystem(At, "filter").addSystem(ce, "renderTexture").addSystem(It, "batch"), n.initPlugins(e.__plugins), n.multisample = void 0, r.context ? n.context.initFromContext(r.context) : n.context.initFromOptions({
                    alpha: !!n.useContextAlpha,
                    antialias: r.antialias,
                    premultipliedAlpha: n.useContextAlpha && "notMultiplied" !== n.useContextAlpha,
                    stencil: !0,
                    preserveDrawingBuffer: r.preserveDrawingBuffer,
                    powerPreference: n.options.powerPreference
                }), n.renderingToScreen = !0, Object(D.sayHello)(2 === n.context.webGLVersion ? "WebGL 2" : "WebGL 1"), n.resize(n.options.width, n.options.height), n
            }

            return i(e, t), e.create = function (t) {
                if (Object(D.isWebGLSupported)()) return new e(t);
                throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
            }, e.prototype.contextChange = function () {
                var t, e = this.gl;
                if (1 === this.context.webGLVersion) {
                    var r = e.getParameter(e.FRAMEBUFFER_BINDING);
                    e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, r)
                } else {
                    var r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
                    e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r)
                }
                t >= C.l.HIGH ? this.multisample = C.l.HIGH : t >= C.l.MEDIUM ? this.multisample = C.l.MEDIUM : t >= C.l.LOW ? this.multisample = C.l.LOW : this.multisample = C.l.NONE
            }, e.prototype.addSystem = function (t, e) {
                var r = new t(this);
                if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
                this[e] = r;
                for (var n in this.runners) this.runners[n].add(r);
                return this
            }, e.prototype.render = function (t, e) {
                var r, n, i, o;
                if (e && (e instanceof ht ? (Object(D.deprecation)("6.0.0", "Renderer#render arguments changed, use options instead."), r = e, n = arguments[2], i = arguments[3], o = arguments[4]) : (r = e.renderTexture, n = e.clear, i = e.transform, o = e.skipUpdateTransform)), this.renderingToScreen = !r, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = i, !this.context.isLost) {
                    if (r || (this._lastObjectRendered = t), !o) {
                        var s = t.enableTempParent();
                        t.updateTransform(), t.disableTempParent(s)
                    }
                    this.renderTexture.bind(r), this.batch.currentRenderer.start(), (void 0 !== n ? n : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), r && r.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender")
                }
            }, e.prototype.generateTexture = function (e, r, n, i) {
                void 0 === r && (r = {});
                var o = t.prototype.generateTexture.call(this, e, r, n, i);
                return this.framebuffer.blit(), o
            }, e.prototype.resize = function (e, r) {
                t.prototype.resize.call(this, e, r), this.runners.resize.emit(this.screen.height, this.screen.width)
            }, e.prototype.reset = function () {
                return this.runners.reset.emit(), this
            }, e.prototype.clear = function () {
                this.renderTexture.bind(), this.renderTexture.clear()
            }, e.prototype.destroy = function (e) {
                this.runners.destroy.emit();
                for (var r in this.runners) this.runners[r].destroy();
                t.prototype.destroy.call(this, e), this.gl = null
            }, Object.defineProperty(e.prototype, "extract", {
                get: function () {
                    return Object(D.deprecation)("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."), this.plugins.extract
                }, enumerable: !1, configurable: !0
            }), e.registerPlugin = function (t, r) {
                e.__plugins = e.__plugins || {}, e.__plugins[t] = r
            }, e
        }(Pe),
        De = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        Le = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Fe = function () {
            function t(t) {
                Object(D.deprecation)("6.1.0", "System class is deprecated, implemement ISystem interface instead."), this.renderer = t
            }

            return t.prototype.destroy = function () {
                this.renderer = null
            }, t
        }(), Ue = function () {
            function t() {
                this.texArray = null, this.blend = 0, this.type = C.f.TRIANGLES, this.start = 0, this.size = 0, this.data = null
            }

            return t
        }(), Be = function () {
            function t() {
                this.elements = [], this.ids = [], this.count = 0
            }

            return t.prototype.clear = function () {
                for (var t = 0; t < this.count; t++) this.elements[t] = null;
                this.count = 0
            }, t
        }(), Ge = function () {
            function t(t) {
                "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
            }

            return Object.defineProperty(t.prototype, "int8View", {
                get: function () {
                    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "uint8View", {
                get: function () {
                    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "int16View", {
                get: function () {
                    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "uint16View", {
                get: function () {
                    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "int32View", {
                get: function () {
                    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
                }, enumerable: !1, configurable: !0
            }), t.prototype.view = function (t) {
                return this[t + "View"]
            }, t.prototype.destroy = function () {
                this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
            }, t.sizeOf = function (t) {
                switch (t) {
                    case"int8":
                    case"uint8":
                        return 1;
                    case"int16":
                    case"uint16":
                        return 2;
                    case"int32":
                    case"uint32":
                    case"float32":
                        return 4;
                    default:
                        throw new Error(t + " isn't a valid view type")
                }
            }, t
        }(), ke = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.shaderGenerator = null, r.geometryClass = null, r.vertexSize = null, r.state = Kt.for2d(), r.size = 4 * N.b.SPRITE_BATCH_SIZE, r._vertexCount = 0, r._indexCount = 0, r._bufferedElements = [], r._bufferedTextures = [], r._bufferSize = 0, r._shader = null, r._packedGeometries = [], r._packedGeometryPoolSize = 2, r._flushId = 0, r._aBuffers = {}, r._iBuffers = {}, r.MAX_TEXTURES = 1, r.renderer.on("prerender", r.onPrerender, r), e.runners.contextChange.add(r), r._dcIndex = 0, r._aIndex = 0, r._iIndex = 0, r._attributeBuffer = null, r._indexBuffer = null, r._tempBoundTextures = [], r
            }

            return i(e, t), e.prototype.contextChange = function () {
                var t = this.renderer.gl;
                N.b.PREFER_ENV === C.g.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), N.b.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = T(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
                this.initFlushBuffers()
            }, e.prototype.initFlushBuffers = function () {
                for (var t = e._drawCallPool, r = e._textureArrayPool, n = this.size / 4, i = Math.floor(n / this.MAX_TEXTURES) + 1; t.length < n;) t.push(new Ue);
                for (; r.length < i;) r.push(new Be);
                for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
            }, e.prototype.onPrerender = function () {
                this._flushId = 0
            }, e.prototype.render = function (t) {
                t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
            }, e.prototype.buildTexturesAndDrawCalls = function () {
                var t = this, r = t._bufferedTextures, n = t.MAX_TEXTURES, i = e._textureArrayPool, o = this.renderer.batch,
                    s = this._tempBoundTextures, a = this.renderer.textureGC.count, u = ++Y._globalBatch, h = 0, c = i[0],
                    l = 0;
                o.copyBoundTextures(s, n);
                for (var f = 0; f < this._bufferSize; ++f) {
                    var d = r[f];
                    r[f] = null, d._batchEnabled !== u && (c.count >= n && (o.boundArray(c, s, u, n), this.buildDrawCalls(c, l, f), l = f, c = i[++h], ++u), d._batchEnabled = u, d.touched = a, c.elements[c.count++] = d)
                }
                c.count > 0 && (o.boundArray(c, s, u, n), this.buildDrawCalls(c, l, this._bufferSize), ++h, ++u);
                for (var f = 0; f < s.length; f++) s[f] = null;
                Y._globalBatch = u
            }, e.prototype.buildDrawCalls = function (t, r, n) {
                var i = this, o = i._bufferedElements, s = i._attributeBuffer, a = i._indexBuffer, u = i.vertexSize,
                    h = e._drawCallPool, c = this._dcIndex, l = this._aIndex, f = this._iIndex, d = h[c];
                d.start = this._iIndex, d.texArray = t;
                for (var p = r; p < n; ++p) {
                    var _ = o[p], m = _._texture.baseTexture, v = D.premultiplyBlendMode[m.alphaMode ? 1 : 0][_.blendMode];
                    o[p] = null, r < p && d.blend !== v && (d.size = f - d.start, r = p, d = h[++c], d.texArray = t, d.start = f), this.packInterleavedGeometry(_, s, a, l, f), l += _.vertexData.length / 2 * u, f += _.indices.length, d.blend = v
                }
                r < n && (d.size = f - d.start, ++c), this._dcIndex = c, this._aIndex = l, this._iIndex = f
            }, e.prototype.bindAndClearTexArray = function (t) {
                for (var e = this.renderer.texture, r = 0; r < t.count; r++) e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
                t.count = 0
            }, e.prototype.updateGeometry = function () {
                var t = this, e = t._packedGeometries, r = t._attributeBuffer, n = t._indexBuffer;
                N.b.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass), e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
            }, e.prototype.drawBatches = function () {
                for (var t = this._dcIndex, r = this.renderer, n = r.gl, i = r.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
                    var u = o[a], h = u.texArray, c = u.type, l = u.size, f = u.start, d = u.blend;
                    s !== h && (s = h, this.bindAndClearTexArray(h)), this.state.blendMode = d, i.set(this.state), n.drawElements(c, l, n.UNSIGNED_SHORT, 2 * f)
                }
            }, e.prototype.flush = function () {
                0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
            }, e.prototype.start = function () {
                this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), N.b.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
            }, e.prototype.stop = function () {
                this.flush()
            }, e.prototype.destroy = function () {
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
                this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this)
            }, e.prototype.getAttributeBuffer = function (t) {
                var e = Object(D.nextPow2)(Math.ceil(t / 8)), r = Object(D.log2)(e), n = 8 * e;
                this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
                var i = this._aBuffers[n];
                return i || (this._aBuffers[n] = i = new Ge(n * this.vertexSize * 4)), i
            }, e.prototype.getIndexBuffer = function (t) {
                var e = Object(D.nextPow2)(Math.ceil(t / 12)), r = Object(D.log2)(e), n = 12 * e;
                this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
                var i = this._iBuffers[r];
                return i || (this._iBuffers[r] = i = new Uint16Array(n)), i
            }, e.prototype.packInterleavedGeometry = function (t, e, r, n, i) {
                for (var o = e.uint32View, s = e.float32View, a = n / this.vertexSize, u = t.uvs, h = t.indices, c = t.vertexData, l = t._texture.baseTexture._batchLocation, f = Math.min(t.worldAlpha, 1), d = f < 1 && t._texture.baseTexture.alphaMode ? Object(D.premultiplyTint)(t._tintRGB, f) : t._tintRGB + (255 * f << 24), p = 0; p < c.length; p += 2) s[n++] = c[p], s[n++] = c[p + 1], s[n++] = u[p], s[n++] = u[p + 1], o[n++] = d, s[n++] = l;
                for (var p = 0; p < h.length; p++) r[i++] = a + h[p]
            }, e._drawCallPool = [], e._textureArrayPool = [], e
        }(St), Xe = function () {
            function t(t, e) {
                if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
                if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
            }

            return t.prototype.generateShader = function (t) {
                if (!this.programCache[t]) {
                    for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
                    this.defaultGroupCache[t] = bt.from({uSamplers: e}, !0);
                    var n = this.fragTemplate;
                    n = n.replace(/%count%/gi, "" + t), n = n.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new qt(this.vertexSrc, n)
                }
                var i = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new U.d,
                    default: this.defaultGroupCache[t]
                };
                return new Zt(this.programCache[t], i)
            }, t.prototype.generateSampleSrc = function (t) {
                var e = "";
                e += "\n", e += "\n";
                for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(vTextureId < " + r + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
                return e += "\n", e += "\n"
            }, t
        }(), je = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var r = t.call(this) || this;
                return r._buffer = new dt(null, e, !1), r._indexBuffer = new dt(null, e, !0), r.addAttribute("aVertexPosition", r._buffer, 2, !1, C.r.FLOAT).addAttribute("aTextureCoord", r._buffer, 2, !1, C.r.FLOAT).addAttribute("aColor", r._buffer, 4, !0, C.r.UNSIGNED_BYTE).addAttribute("aTextureId", r._buffer, 1, !0, C.r.FLOAT).addIndex(r._indexBuffer), r
            }

            return i(e, t), e
        }(gt),
        He = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        Ye = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        Ve = function () {
            function t() {
            }

            return t.create = function (t) {
                var e = Object.assign({vertex: He, fragment: Ye, geometryClass: je, vertexSize: 6}, t), r = e.vertex,
                    n = e.fragment, o = e.vertexSize, s = e.geometryClass;
                return function (t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return i.shaderGenerator = new Xe(r, n), i.geometryClass = s, i.vertexSize = o, i
                    }

                    return i(e, t), e
                }(ke)
            }, Object.defineProperty(t, "defaultVertexSrc", {
                get: function () {
                    return He
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t, "defaultFragmentTemplate", {
                get: function () {
                    return Ye
                }, enumerable: !1, configurable: !0
            }), t
        }(), ze = Ve.create(), We = {};
    for (var qe in tt) !function (t) {
        Object.defineProperty(We, t, {
            get: function () {
                return Object(D.deprecation)("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t), tt[t]
            }
        })
    }(qe);
    var Ze = {};
    for (var qe in Ie) !function (t) {
        Object.defineProperty(Ze, t, {
            get: function () {
                return Object(D.deprecation)("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t), Ie[t]
            }
        })
    }(qe)
}, function (t, e, r) {
    "use strict";

    function n() {
        k = !0
    }

    function i(t) {
        var e;
        if (!k) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var r = ["\n %c %c %c PixiJS " + X + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                (e = self.console).log.apply(e, r)
            } else self.console && self.console.log("PixiJS " + X + " - " + t + " - http://www.pixijs.com/");
            k = !0
        }
    }

    function o() {
        return void 0 === B && (B = function () {
            var t = {stencil: !0, failIfMajorPerformanceCaveat: P.b.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};
            try {
                if (!self.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                    r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                    n = !(!r || !r.getContextAttributes().stencil);
                if (r) {
                    var i = r.getExtension("WEBGL_lose_context");
                    i && i.loseContext()
                }
                return r = null, n
            } catch (t) {
                return !1
            }
        }()), B
    }

    function s(t, e) {
        return void 0 === e && (e = []), e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
    }

    function a(t) {
        var e = t.toString(16);
        return "#" + (e = "000000".substr(0, 6 - e.length) + e)
    }

    function u(t) {
        return "string" == typeof t && (t = j[t.toLowerCase()] || t, "#" === t[0] && (t = t.substr(1))), parseInt(t, 16)
    }

    function h(t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
    }

    function c(t, e) {
        return H[e ? 1 : 0][t]
    }

    function l(t, e, r, n) {
        return r = r || new Float32Array(4), n || void 0 === n ? (r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]), r[3] = e, r
    }

    function f(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var r = t >> 16 & 255, n = t >> 8 & 255, i = 255 & t;
        return r = r * e + .5 | 0, n = n * e + .5 | 0, i = i * e + .5 | 0, (255 * e << 24) + (r << 16) + (n << 8) + i
    }

    function d(t, e, r, n) {
        return r = r || new Float32Array(4), r[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (n || void 0 === n) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r
    }

    function p(t, e) {
        void 0 === e && (e = null);
        var r = 6 * t;
        if (e = e || new Uint16Array(r), e.length !== r) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + r);
        for (var n = 0, i = 0; n < r; n += 6, i += 4) e[n + 0] = i + 0, e[n + 1] = i + 1, e[n + 2] = i + 2, e[n + 3] = i + 0, e[n + 4] = i + 2, e[n + 5] = i + 3;
        return e
    }

    function _(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array"
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
        return null
    }

    function m(t, e) {
        for (var r = 0, n = 0, i = {}, o = 0; o < t.length; o++) n += e[o], r += t[o].length;
        for (var s = new ArrayBuffer(4 * r), a = null, u = 0, o = 0; o < t.length; o++) {
            var h = e[o], c = t[o], l = _(c);
            i[l] || (i[l] = new Y[l](s)), a = i[l];
            for (var f = 0; f < c.length; f++) {
                a[(f / h | 0) * n + u + f % h] = c[f]
            }
            u += h
        }
        return new Float32Array(s)
    }

    function v(t) {
        return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
    }

    function g(t) {
        return !(t & t - 1 || !t)
    }

    function y(t) {
        var e = (t > 65535 ? 1 : 0) << 4;
        t >>>= e;
        var r = (t > 255 ? 1 : 0) << 3;
        return t >>>= r, e |= r, r = (t > 15 ? 1 : 0) << 2, t >>>= r, e |= r, r = (t > 3 ? 1 : 0) << 1, t >>>= r, (e |= r) | t >> 1
    }

    function T(t, e, r) {
        var n, i = t.length;
        if (!(e >= i || 0 === r)) {
            r = e + r > i ? i - e : r;
            var o = i - r;
            for (n = e; n < o; ++n) t[n] = t[n + r];
            t.length = o
        }
    }

    function E(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
    }

    function b() {
        return ++V
    }

    function x(t, e, r) {
        if (void 0 === r && (r = 3), !z[e]) {
            var n = (new Error).stack;
            void 0 === n || (n = n.split("\n").splice(r).join("\n"), console.groupCollapsed), z[e] = !0
        }
    }

    function O() {
        var t;
        for (t in q) q[t].destroy();
        for (t in Z) Z[t].destroy()
    }

    function R() {
        var t;
        for (t in q) delete q[t];
        for (t in Z) delete Z[t]
    }

    function A(t) {
        var e, r, n, i = t.width, o = t.height, s = t.getContext("2d"), a = s.getImageData(0, 0, i, o), u = a.data,
            h = u.length, c = {top: null, left: null, right: null, bottom: null}, l = null;
        for (e = 0; e < h; e += 4) 0 !== u[e + 3] && (r = e / 4 % i, n = ~~(e / 4 / i), null === c.top && (c.top = n), null === c.left ? c.left = r : r < c.left && (c.left = r), null === c.right ? c.right = r + 1 : c.right < r && (c.right = r + 1), null === c.bottom ? c.bottom = n : c.bottom < n && (c.bottom = n));
        return null !== c.top && (i = c.right - c.left, o = c.bottom - c.top + 1, l = s.getImageData(c.left, c.top, i, o)), {
            height: o,
            width: i,
            data: l
        }
    }

    function S(t) {
        var e = J.exec(t);
        if (e) return {
            mediaType: e[1] ? e[1].toLowerCase() : void 0,
            subType: e[2] ? e[2].toLowerCase() : void 0,
            charset: e[3] ? e[3].toLowerCase() : void 0,
            encoding: e[4] ? e[4].toLowerCase() : void 0,
            data: e[5]
        }
    }

    function I(t, e) {
        if (void 0 === e && (e = self.location), 0 === t.indexOf("data:")) return "";
        e = e || self.location, G || (G = document.createElement("a")), G.href = t;
        var r = U.parse(G.href), n = !r.port && "" === e.port || r.port === e.port;
        return r.hostname === e.hostname && n && r.protocol === e.protocol ? "" : "anonymous"
    }

    function w(t, e) {
        var r = P.b.RETINA_PREFIX.exec(t);
        return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
    }

    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "BaseTextureCache", function () {
        return Z
    }), r.d(e, "CanvasRenderTarget", function () {
        return K
    }), r.d(e, "DATA_URI", function () {
        return J
    }), r.d(e, "ProgramCache", function () {
        return W
    }), r.d(e, "TextureCache", function () {
        return q
    }), r.d(e, "clearTextureCache", function () {
        return R
    }), r.d(e, "correctBlendMode", function () {
        return c
    }), r.d(e, "createIndicesForQuads", function () {
        return p
    }), r.d(e, "decomposeDataUri", function () {
        return S
    }), r.d(e, "deprecation", function () {
        return x
    }), r.d(e, "destroyTextureCache", function () {
        return O
    }), r.d(e, "determineCrossOrigin", function () {
        return I
    }), r.d(e, "getBufferType", function () {
        return _
    }), r.d(e, "getResolutionOfUrl", function () {
        return w
    }), r.d(e, "hex2rgb", function () {
        return s
    }), r.d(e, "hex2string", function () {
        return a
    }), r.d(e, "interleaveTypedArrays", function () {
        return m
    }), r.d(e, "isPow2", function () {
        return g
    }), r.d(e, "isWebGLSupported", function () {
        return o
    }), r.d(e, "log2", function () {
        return y
    }), r.d(e, "nextPow2", function () {
        return v
    }), r.d(e, "premultiplyBlendMode", function () {
        return H
    }), r.d(e, "premultiplyRgba", function () {
        return l
    }), r.d(e, "premultiplyTint", function () {
        return f
    }), r.d(e, "premultiplyTintToRgba", function () {
        return d
    }), r.d(e, "removeItems", function () {
        return T
    }), r.d(e, "rgb2hex", function () {
        return h
    }), r.d(e, "sayHello", function () {
        return i
    }), r.d(e, "sign", function () {
        return E
    }), r.d(e, "skipHello", function () {
        return n
    }), r.d(e, "string2hex", function () {
        return u
    }), r.d(e, "trimCanvas", function () {
        return A
    }), r.d(e, "uid", function () {
        return b
    }), r.d(e, "url", function () {
        return U
    });
    var P = r(3);
    r.d(e, "isMobile", function () {
        return P.a
    });
    var M = r(53), N = r.n(M);
    r.d(e, "EventEmitter", function () {
        return N.a
    });
    var C = r(54), D = r.n(C);
    r.d(e, "earcut", function () {
        return D.a
    });
    var L = r(55), F = (r.n(L), r(5)), U = {parse: L.parse, format: L.format, resolve: L.resolve};
    P.b.RETINA_PREFIX = /@([0-9\.]+)x/, P.b.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
    var B, G, k = !1, X = "6.1.3", j = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            goldenrod: "#daa520",
            gold: "#ffd700",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavenderblush: "#fff0f5",
            lavender: "#e6e6fa",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        }, H = function () {
            for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
            t[F.b.NORMAL_NPM] = F.b.NORMAL, t[F.b.ADD_NPM] = F.b.ADD, t[F.b.SCREEN_NPM] = F.b.SCREEN, e[F.b.NORMAL] = F.b.NORMAL_NPM, e[F.b.ADD] = F.b.ADD_NPM, e[F.b.SCREEN] = F.b.SCREEN_NPM;
            var n = [];
            return n.push(e), n.push(t), n
        }(), Y = {Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array},
        V = 0, z = {}, W = {}, q = Object.create(null), Z = Object.create(null), K = function () {
            function t(t, e, r) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || P.b.RESOLUTION, this.resize(t, e)
            }

            return t.prototype.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }, t.prototype.resize = function (t, e) {
                this.canvas.width = Math.round(t * this.resolution), this.canvas.height = Math.round(e * this.resolution)
            }, t.prototype.destroy = function () {
                this.context = null, this.canvas = null
            }, Object.defineProperty(t.prototype, "width", {
                get: function () {
                    return this.canvas.width
                }, set: function (t) {
                    this.canvas.width = Math.round(t)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "height", {
                get: function () {
                    return this.canvas.height
                }, set: function (t) {
                    this.canvas.height = Math.round(t)
                }, enumerable: !1, configurable: !0
            }), t
        }(), J = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return u
    }), r.d(e, "b", function () {
        return s
    }), r.d(e, "c", function () {
        return h
    }), r.d(e, "d", function () {
        return p
    }), r.d(e, "e", function () {
        return d
    }), r.d(e, "f", function () {
        return i
    }), r.d(e, "g", function () {
        return f
    }), r.d(e, "h", function () {
        return c
    }), r.d(e, "i", function () {
        return o
    }), r.d(e, "j", function () {
        return a
    }), r.d(e, "k", function () {
        return l
    }), r.d(e, "l", function () {
        return n
    }), r.d(e, "m", function () {
        return x
    }), r.d(e, "n", function () {
        return b
    });/*!
 * @pixi/math - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    var n, i = 2 * Math.PI, o = 180 / Math.PI, s = Math.PI / 180;
    !function (t) {
        t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC"
    }(n || (n = {}));
    var a = function () {
            function t(t, e, r, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(i), this.type = n.RECT
            }

            return Object.defineProperty(t.prototype, "left", {
                get: function () {
                    return this.x
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "right", {
                get: function () {
                    return this.x + this.width
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "top", {
                get: function () {
                    return this.y
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "bottom", {
                get: function () {
                    return this.y + this.height
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t, "EMPTY", {
                get: function () {
                    return new t(0, 0, 0, 0)
                }, enumerable: !1, configurable: !0
            }), t.prototype.clone = function () {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.copyFrom = function (t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, t.prototype.copyTo = function (t) {
                return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
            }, t.prototype.contains = function (t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
            }, t.prototype.pad = function (t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
            }, t.prototype.fit = function (t) {
                var e = Math.max(this.x, t.x), r = Math.min(this.x + this.width, t.x + t.width), n = Math.max(this.y, t.y),
                    i = Math.min(this.y + this.height, t.y + t.height);
                return this.x = e, this.width = Math.max(r - e, 0), this.y = n, this.height = Math.max(i - n, 0), this
            }, t.prototype.ceil = function (t, e) {
                void 0 === t && (t = 1), void 0 === e && (e = .001);
                var r = Math.ceil((this.x + this.width - e) * t) / t, n = Math.ceil((this.y + this.height - e) * t) / t;
                return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = n - this.y, this
            }, t.prototype.enlarge = function (t) {
                var e = Math.min(this.x, t.x), r = Math.max(this.x + this.width, t.x + t.width), n = Math.min(this.y, t.y),
                    i = Math.max(this.y + this.height, t.y + t.height);
                return this.x = e, this.width = r - e, this.y = n, this.height = i - n, this
            }, t.prototype.toString = function () {
                return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            }, t
        }(), u = function () {
            function t(t, e, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.radius = r, this.type = n.CIRC
            }

            return t.prototype.clone = function () {
                return new t(this.x, this.y, this.radius)
            }, t.prototype.contains = function (t, e) {
                if (this.radius <= 0) return !1;
                var r = this.radius * this.radius, n = this.x - t, i = this.y - e;
                return n *= n, i *= i, n + i <= r
            }, t.prototype.getBounds = function () {
                return new a(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }, t.prototype.toString = function () {
                return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
            }, t
        }(), h = function () {
            function t(t, e, r, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.width = r, this.height = i, this.type = n.ELIP
            }

            return t.prototype.clone = function () {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.contains = function (t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var r = (t - this.x) / this.width, n = (e - this.y) / this.height;
                return r *= r, n *= n, r + n <= 1
            }, t.prototype.getBounds = function () {
                return new a(this.x - this.width, this.y - this.height, this.width, this.height)
            }, t.prototype.toString = function () {
                return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
            }, t
        }(), c = function () {
            function t() {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
                var i = Array.isArray(e[0]) ? e[0] : e;
                if ("number" != typeof i[0]) {
                    for (var o = [], s = 0, a = i.length; s < a; s++) o.push(i[s].x, i[s].y);
                    i = o
                }
                this.points = i, this.type = n.POLY, this.closeStroke = !0
            }

            return t.prototype.clone = function () {
                var e = this.points.slice(), r = new t(e);
                return r.closeStroke = this.closeStroke, r
            }, t.prototype.contains = function (t, e) {
                for (var r = !1, n = this.points.length / 2, i = 0, o = n - 1; i < n; o = i++) {
                    var s = this.points[2 * i], a = this.points[2 * i + 1], u = this.points[2 * o],
                        h = this.points[2 * o + 1];
                    a > e != h > e && t < (e - a) / (h - a) * (u - s) + s && (r = !r)
                }
                return r
            }, t.prototype.toString = function () {
                return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce(function (t, e) {
                    return t + ", " + e
                }, "") + "]"
            }, t
        }(), l = function () {
            function t(t, e, r, i, o) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === o && (o = 20), this.x = t, this.y = e, this.width = r, this.height = i, this.radius = o, this.type = n.RREC
            }

            return t.prototype.clone = function () {
                return new t(this.x, this.y, this.width, this.height, this.radius)
            }, t.prototype.contains = function (t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                    if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                    var r = t - (this.x + this.radius), n = e - (this.y + this.radius), i = this.radius * this.radius;
                    if (r * r + n * n <= i) return !0;
                    if ((r = t - (this.x + this.width - this.radius)) * r + n * n <= i) return !0;
                    if (n = e - (this.y + this.height - this.radius), r * r + n * n <= i) return !0;
                    if ((r = t - (this.x + this.radius)) * r + n * n <= i) return !0
                }
                return !1
            }, t.prototype.toString = function () {
                return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
            }, t
        }(), f = function () {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e
            }

            return t.prototype.clone = function () {
                return new t(this.x, this.y)
            }, t.prototype.copyFrom = function (t) {
                return this.set(t.x, t.y), this
            }, t.prototype.copyTo = function (t) {
                return t.set(this.x, this.y), t
            }, t.prototype.equals = function (t) {
                return t.x === this.x && t.y === this.y
            }, t.prototype.set = function (t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e, this
            }, t.prototype.toString = function () {
                return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
            }, t
        }(), d = function () {
            function t(t, e, r, n) {
                void 0 === r && (r = 0), void 0 === n && (n = 0), this._x = r, this._y = n, this.cb = t, this.scope = e
            }

            return t.prototype.clone = function (e, r) {
                return void 0 === e && (e = this.cb), void 0 === r && (r = this.scope), new t(e, r, this._x, this._y)
            }, t.prototype.set = function (t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this
            }, t.prototype.copyFrom = function (t) {
                return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
            }, t.prototype.copyTo = function (t) {
                return t.set(this._x, this._y), t
            }, t.prototype.equals = function (t) {
                return t.x === this._x && t.y === this._y
            }, t.prototype.toString = function () {
                return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
            }, Object.defineProperty(t.prototype, "x", {
                get: function () {
                    return this._x
                }, set: function (t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "y", {
                get: function () {
                    return this._y
                }, set: function (t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                }, enumerable: !1, configurable: !0
            }), t
        }(), p = function () {
            function t(t, e, r, n, i, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o
            }

            return t.prototype.fromArray = function (t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, t.prototype.set = function (t, e, r, n, i, o) {
                return this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this
            }, t.prototype.toArray = function (t, e) {
                this.array || (this.array = new Float32Array(9));
                var r = e || this.array;
                return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
            }, t.prototype.apply = function (t, e) {
                e = e || new f;
                var r = t.x, n = t.y;
                return e.x = this.a * r + this.c * n + this.tx, e.y = this.b * r + this.d * n + this.ty, e
            }, t.prototype.applyInverse = function (t, e) {
                e = e || new f;
                var r = 1 / (this.a * this.d + this.c * -this.b), n = t.x, i = t.y;
                return e.x = this.d * r * n + -this.c * r * i + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * i + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r, e
            }, t.prototype.translate = function (t, e) {
                return this.tx += t, this.ty += e, this
            }, t.prototype.scale = function (t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, t.prototype.rotate = function (t) {
                var e = Math.cos(t), r = Math.sin(t), n = this.a, i = this.c, o = this.tx;
                return this.a = n * e - this.b * r, this.b = n * r + this.b * e, this.c = i * e - this.d * r, this.d = i * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
            }, t.prototype.append = function (t) {
                var e = this.a, r = this.b, n = this.c, i = this.d;
                return this.a = t.a * e + t.b * n, this.b = t.a * r + t.b * i, this.c = t.c * e + t.d * n, this.d = t.c * r + t.d * i, this.tx = t.tx * e + t.ty * n + this.tx, this.ty = t.tx * r + t.ty * i + this.ty, this
            }, t.prototype.setTransform = function (t, e, r, n, i, o, s, a, u) {
                return this.a = Math.cos(s + u) * i, this.b = Math.sin(s + u) * i, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + n * this.c), this.ty = e - (r * this.b + n * this.d), this
            }, t.prototype.prepend = function (t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var r = this.a, n = this.c;
                    this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = n * t.a + this.d * t.c, this.d = n * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }, t.prototype.decompose = function (t) {
                var e = this.a, r = this.b, n = this.c, o = this.d, s = t.pivot, a = -Math.atan2(-n, o),
                    u = Math.atan2(r, e), h = Math.abs(a + u);
                return h < 1e-5 || Math.abs(i - h) < 1e-5 ? (t.rotation = u, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = u), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(n * n + o * o), t.position.x = this.tx + (s.x * e + s.y * n), t.position.y = this.ty + (s.x * r + s.y * o), t
            }, t.prototype.invert = function () {
                var t = this.a, e = this.b, r = this.c, n = this.d, i = this.tx, o = t * n - e * r;
                return this.a = n / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - n * i) / o, this.ty = -(t * this.ty - e * i) / o, this
            }, t.prototype.identity = function () {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, t.prototype.clone = function () {
                var e = new t;
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
            }, t.prototype.copyTo = function (t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, t.prototype.copyFrom = function (t) {
                return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
            }, t.prototype.toString = function () {
                return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
            }, Object.defineProperty(t, "IDENTITY", {
                get: function () {
                    return new t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t, "TEMP_MATRIX", {
                get: function () {
                    return new t
                }, enumerable: !1, configurable: !0
            }), t
        }(), _ = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        m = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        v = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        g = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], y = [], T = [], E = Math.sign;
    !function () {
        for (var t = 0; t < 16; t++) {
            var e = [];
            y.push(e);
            for (var r = 0; r < 16; r++) for (var n = E(_[t] * _[r] + v[t] * m[r]), i = E(m[t] * _[r] + g[t] * m[r]), o = E(_[t] * v[r] + v[t] * g[r]), s = E(m[t] * v[r] + g[t] * g[r]), a = 0; a < 16; a++) if (_[a] === n && m[a] === i && v[a] === o && g[a] === s) {
                e.push(a);
                break
            }
        }
        for (var t = 0; t < 16; t++) {
            var u = new p;
            u.set(_[t], m[t], v[t], g[t], 0, 0), T.push(u)
        }
    }();
    var b = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: function (t) {
            return _[t]
        },
        uY: function (t) {
            return m[t]
        },
        vX: function (t) {
            return v[t]
        },
        vY: function (t) {
            return g[t]
        },
        inv: function (t) {
            return 8 & t ? 15 & t : 7 & -t
        },
        add: function (t, e) {
            return y[t][e]
        },
        sub: function (t, e) {
            return y[t][b.inv(e)]
        },
        rotate180: function (t) {
            return 4 ^ t
        },
        isVertical: function (t) {
            return 2 == (3 & t)
        },
        byDirection: function (t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? b.S : b.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? b.E : b.W : e > 0 ? t > 0 ? b.SE : b.SW : t > 0 ? b.NE : b.NW
        },
        matrixAppendRotationInv: function (t, e, r, n) {
            void 0 === r && (r = 0), void 0 === n && (n = 0);
            var i = T[b.inv(e)];
            i.tx = r, i.ty = n, t.append(i)
        }
    }, x = function () {
        function t() {
            this.worldTransform = new p, this.localTransform = new p, this.position = new d(this.onChange, this, 0, 0), this.scale = new d(this.onChange, this, 1, 1), this.pivot = new d(this.onChange, this, 0, 0), this.skew = new d(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
        }

        return t.prototype.onChange = function () {
            this._localID++
        }, t.prototype.updateSkew = function () {
            this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
        }, t.prototype.toString = function () {
            return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
        }, t.prototype.updateLocalTransform = function () {
            var t = this.localTransform;
            this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
        }, t.prototype.updateTransform = function (t) {
            var e = this.localTransform;
            if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                var r = t.worldTransform, n = this.worldTransform;
                n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
            }
        }, t.prototype.setFromMatrix = function (t) {
            t.decompose(this), this._localID++
        }, Object.defineProperty(t.prototype, "rotation", {
            get: function () {
                return this._rotation
            }, set: function (t) {
                this._rotation !== t && (this._rotation = t, this.updateSkew())
            }, enumerable: !1, configurable: !0
        }), t.IDENTITY = new t, t
    }()
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return o
    }), r.d(e, "b", function () {
        return O
    });
    var n, i = r(52), o = Object(i.a)(self.navigator);
    !function (t) {
        t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
    }(n || (n = {}));
    var s;
    !function (t) {
        t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
    }(s || (s = {}));
    var a;
    !function (t) {
        t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
    }(a || (a = {}));
    var u;
    !function (t) {
        t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
    }(u || (u = {}));
    var h;
    !function (t) {
        t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
    }(h || (h = {}));
    var c;
    !function (t) {
        t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
    }(c || (c = {}));
    var l;
    !function (t) {
        t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
    }(l || (l = {}));
    var f;
    !function (t) {
        t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
    }(f || (f = {}));
    var d;
    !function (t) {
        t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
    }(d || (d = {}));
    var p;
    !function (t) {
        t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
    }(p || (p = {}));
    var _;
    !function (t) {
        t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
    }(_ || (_ = {}));
    var m;
    !function (t) {
        t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
    }(m || (m = {}));
    var v;
    !function (t) {
        t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
    }(v || (v = {}));
    var g;
    !function (t) {
        t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
    }(g || (g = {}));
    var y;
    !function (t) {
        t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
    }(y || (y = {}));
    var T;
    !function (t) {
        t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
    }(T || (T = {}));
    var E;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
    }(E || (E = {}));
    var b;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
    }(b || (b = {}));
    var x;
    !function (t) {
        t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
    }(x || (x = {}));
    var O = {
        MIPMAP_TEXTURES: m.POW2,
        ANISOTROPIC_LEVEL: 0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        FILTER_MULTISAMPLE: b.NONE,
        SPRITE_MAX_TEXTURES: function (t) {
            var e = !0;
            if (o.tablet || o.phone) {
                if (o.apple.device) {
                    var r = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                    if (r) {
                        var n = parseInt(r[1], 10);
                        n < 11 && (e = !1)
                    }
                }
                if (o.android.device) {
                    var r = navigator.userAgent.match(/Android\s([0-9.]*)/);
                    if (r) {
                        var n = parseInt(r[1], 10);
                        n < 7 && (e = !1)
                    }
                }
            }
            return e ? t : 4
        }(32),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            autoDensity: !1,
            backgroundColor: 0,
            backgroundAlpha: 1,
            useContextAlpha: !0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        GC_MODE: y.AUTO,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: _.CLAMP,
        SCALE_MODE: p.LINEAR,
        PRECISION_VERTEX: T.HIGH,
        PRECISION_FRAGMENT: o.apple.device ? T.HIGH : T.MEDIUM,
        CAN_UPLOAD_SAME_BUFFER: function () {
            return !o.apple.device
        }(),
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    }
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        h(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t, e) {
        return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
    }

    r.d(e, "a", function () {
        return u
    }), r.d(e, "b", function () {
        return f
    }), r.d(e, "c", function () {
        return c
    }), r.d(e, "d", function () {
        return l
    });
    var o = r(3), s = r(2), a = r(1);/*!
 * @pixi/display - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    o.b.SORTABLE_CHILDREN = !1;
    var u = function () {
        function t() {
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
        }

        return t.prototype.isEmpty = function () {
            return this.minX > this.maxX || this.minY > this.maxY
        }, t.prototype.clear = function () {
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
        }, t.prototype.getRectangle = function (t) {
            return this.minX > this.maxX || this.minY > this.maxY ? s.j.EMPTY : (t = t || new s.j(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
        }, t.prototype.addPoint = function (t) {
            this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
        }, t.prototype.addPointMatrix = function (t, e) {
            var r = t.a, n = t.b, i = t.c, o = t.d, s = t.tx, a = t.ty, u = r * e.x + i * e.y + s,
                h = n * e.x + o * e.y + a;
            this.minX = Math.min(this.minX, u), this.maxX = Math.max(this.maxX, u), this.minY = Math.min(this.minY, h), this.maxY = Math.max(this.maxY, h)
        }, t.prototype.addQuad = function (t) {
            var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY, o = t[0], s = t[1];
            e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t[2], s = t[3], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t[4], s = t[5], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, o = t[6], s = t[7], e = o < e ? o : e, r = s < r ? s : r, n = o > n ? o : n, i = s > i ? s : i, this.minX = e, this.minY = r, this.maxX = n, this.maxY = i
        }, t.prototype.addFrame = function (t, e, r, n, i) {
            this.addFrameMatrix(t.worldTransform, e, r, n, i)
        }, t.prototype.addFrameMatrix = function (t, e, r, n, i) {
            var o = t.a, s = t.b, a = t.c, u = t.d, h = t.tx, c = t.ty, l = this.minX, f = this.minY, d = this.maxX,
                p = this.maxY, _ = o * e + a * r + h, m = s * e + u * r + c;
            l = _ < l ? _ : l, f = m < f ? m : f, d = _ > d ? _ : d, p = m > p ? m : p, _ = o * n + a * r + h, m = s * n + u * r + c, l = _ < l ? _ : l, f = m < f ? m : f, d = _ > d ? _ : d, p = m > p ? m : p, _ = o * e + a * i + h, m = s * e + u * i + c, l = _ < l ? _ : l, f = m < f ? m : f, d = _ > d ? _ : d, p = m > p ? m : p, _ = o * n + a * i + h, m = s * n + u * i + c, l = _ < l ? _ : l, f = m < f ? m : f, d = _ > d ? _ : d, p = m > p ? m : p, this.minX = l, this.minY = f, this.maxX = d, this.maxY = p
        }, t.prototype.addVertexData = function (t, e, r) {
            for (var n = this.minX, i = this.minY, o = this.maxX, s = this.maxY, a = e; a < r; a += 2) {
                var u = t[a], h = t[a + 1];
                n = u < n ? u : n, i = h < i ? h : i, o = u > o ? u : o, s = h > s ? h : s
            }
            this.minX = n, this.minY = i, this.maxX = o, this.maxY = s
        }, t.prototype.addVertices = function (t, e, r, n) {
            this.addVerticesMatrix(t.worldTransform, e, r, n)
        }, t.prototype.addVerticesMatrix = function (t, e, r, n, i, o) {
            void 0 === i && (i = 0), void 0 === o && (o = i);
            for (var s = t.a, a = t.b, u = t.c, h = t.d, c = t.tx, l = t.ty, f = this.minX, d = this.minY, p = this.maxX, _ = this.maxY, m = r; m < n; m += 2) {
                var v = e[m], g = e[m + 1], y = s * v + u * g + c, T = h * g + a * v + l;
                f = Math.min(f, y - i), p = Math.max(p, y + i), d = Math.min(d, T - o), _ = Math.max(_, T + o)
            }
            this.minX = f, this.minY = d, this.maxX = p, this.maxY = _
        }, t.prototype.addBounds = function (t) {
            var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY;
            this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > n ? t.maxX : n, this.maxY = t.maxY > i ? t.maxY : i
        }, t.prototype.addBoundsMask = function (t, e) {
            var r = t.minX > e.minX ? t.minX : e.minX, n = t.minY > e.minY ? t.minY : e.minY,
                i = t.maxX < e.maxX ? t.maxX : e.maxX, o = t.maxY < e.maxY ? t.maxY : e.maxY;
            if (r <= i && n <= o) {
                var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = i > u ? i : u, this.maxY = o > h ? o : h
            }
        }, t.prototype.addBoundsMatrix = function (t, e) {
            this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
        }, t.prototype.addBoundsArea = function (t, e) {
            var r = t.minX > e.x ? t.minX : e.x, n = t.minY > e.y ? t.minY : e.y,
                i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
            if (r <= i && n <= o) {
                var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = i > u ? i : u, this.maxY = o > h ? o : h
            }
        }, t.prototype.pad = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = t), this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
        }, t.prototype.addFramePad = function (t, e, r, n, i, o) {
            t -= i, e -= o, r += i, n += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > n ? this.maxY : n
        }, t
    }(), h = function (t, e) {
        return (h = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.tempDisplayObjectParent = null, e.transform = new s.m, e.alpha = 1, e.visible = !0, e.renderable = !0, e.parent = null, e.worldAlpha = 1, e._lastSortedIndex = 0, e._zIndex = 0, e.filterArea = null, e.filters = null, e._enabledFilters = null, e._bounds = new u, e._localBounds = null, e._boundsID = 0, e._boundsRect = null, e._localBoundsRect = null, e._mask = null, e._destroyed = !1, e.isSprite = !1, e.isMask = !1, e
        }

        return n(e, t), e.mixin = function (t) {
            for (var r = Object.keys(t), n = 0; n < r.length; ++n) {
                var i = r[n];
                Object.defineProperty(e.prototype, i, Object.getOwnPropertyDescriptor(t, i))
            }
        }, Object.defineProperty(e.prototype, "destroyed", {
            get: function () {
                return this._destroyed
            }, enumerable: !1, configurable: !0
        }), e.prototype._recursivePostUpdateTransform = function () {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
        }, e.prototype.updateTransform = function () {
            this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
        }, e.prototype.getBounds = function (t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new s.j), e = this._boundsRect), this._bounds.getRectangle(e)
        }, e.prototype.getLocalBounds = function (t) {
            t || (this._localBoundsRect || (this._localBoundsRect = new s.j), t = this._localBoundsRect), this._localBounds || (this._localBounds = new u);
            var e = this.transform, r = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
            var n = this._bounds, i = this._boundsID;
            this._bounds = this._localBounds;
            var o = this.getBounds(!1, t);
            return this.parent = r, this.transform = e, this._bounds = n, this._bounds.updateID += this._boundsID - i, o
        }, e.prototype.toGlobal = function (t, e, r) {
            return void 0 === r && (r = !1), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
        }, e.prototype.toLocal = function (t, e, r, n) {
            return e && (t = e.toGlobal(t, r, n)), n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
        }, e.prototype.setParent = function (t) {
            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t
        }, e.prototype.setTransform = function (t, e, r, n, i, o, s, a, u) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === u && (u = 0), this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = n || 1, this.rotation = i, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, this
        }, e.prototype.destroy = function (t) {
            this.parent && this.parent.removeChild(this), this.emit("destroyed"), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
        }, Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
            get: function () {
                return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new l), this.tempDisplayObjectParent
            }, enumerable: !1, configurable: !0
        }), e.prototype.enableTempParent = function () {
            var t = this.parent;
            return this.parent = this._tempDisplayObjectParent, t
        }, e.prototype.disableTempParent = function (t) {
            this.parent = t
        }, Object.defineProperty(e.prototype, "x", {
            get: function () {
                return this.position.x
            }, set: function (t) {
                this.transform.position.x = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "y", {
            get: function () {
                return this.position.y
            }, set: function (t) {
                this.transform.position.y = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "worldTransform", {
            get: function () {
                return this.transform.worldTransform
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "localTransform", {
            get: function () {
                return this.transform.localTransform
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "position", {
            get: function () {
                return this.transform.position
            }, set: function (t) {
                this.transform.position.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "scale", {
            get: function () {
                return this.transform.scale
            }, set: function (t) {
                this.transform.scale.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "pivot", {
            get: function () {
                return this.transform.pivot
            }, set: function (t) {
                this.transform.pivot.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "skew", {
            get: function () {
                return this.transform.skew
            }, set: function (t) {
                this.transform.skew.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "rotation", {
            get: function () {
                return this.transform.rotation
            }, set: function (t) {
                this.transform.rotation = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "angle", {
            get: function () {
                return this.transform.rotation * s.i
            }, set: function (t) {
                this.transform.rotation = t * s.b
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "zIndex", {
            get: function () {
                return this._zIndex
            }, set: function (t) {
                this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "worldVisible", {
            get: function () {
                var t = this;
                do {
                    if (!t.visible) return !1;
                    t = t.parent
                } while (t);
                return !0
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "mask", {
            get: function () {
                return this._mask
            }, set: function (t) {
                if (this._mask) {
                    var e = this._mask.maskObject || this._mask;
                    e.renderable = !0, e.isMask = !1
                }
                if (this._mask = t, this._mask) {
                    var e = this._mask.maskObject || this._mask;
                    e.renderable = !1, e.isMask = !0
                }
            }, enumerable: !1, configurable: !0
        }), e
    }(a.EventEmitter), l = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.sortDirty = null, e
        }

        return n(e, t), e
    }(c);
    c.prototype.displayObjectUpdateTransform = c.prototype.updateTransform;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.children = [], e.sortableChildren = o.b.SORTABLE_CHILDREN, e.sortDirty = !1, e
        }

        return n(e, t), e.prototype.onChildrenChange = function (t) {
        }, e.prototype.addChild = function () {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
            if (e.length > 1) for (var n = 0; n < e.length; n++) this.addChild(e[n]); else {
                var i = e[0];
                i.parent && i.parent.removeChild(i), i.parent = this, this.sortDirty = !0, i.transform._parentID = -1, this.children.push(i), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", i, this, this.children.length - 1), i.emit("added", this)
            }
            return e[0]
        }, e.prototype.addChildAt = function (t, e) {
            if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
        }, e.prototype.swapChildren = function (t, e) {
            if (t !== e) {
                var r = this.getChildIndex(t), n = this.getChildIndex(e);
                this.children[r] = e, this.children[n] = t, this.onChildrenChange(r < n ? r : n)
            }
        }, e.prototype.getChildIndex = function (t) {
            var e = this.children.indexOf(t);
            if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
        }, e.prototype.setChildIndex = function (t, e) {
            if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var r = this.getChildIndex(t);
            Object(a.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
        }, e.prototype.getChildAt = function (t) {
            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t]
        }, e.prototype.removeChild = function () {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
            if (e.length > 1) for (var n = 0; n < e.length; n++) this.removeChild(e[n]); else {
                var i = e[0], o = this.children.indexOf(i);
                if (-1 === o) return null;
                i.parent = null, i.transform._parentID = -1, Object(a.removeItems)(this.children, o, 1), this._boundsID++, this.onChildrenChange(o), i.emit("removed", this), this.emit("childRemoved", i, this, o)
            }
            return e[0]
        }, e.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return e.parent = null, e.transform._parentID = -1, Object(a.removeItems)(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
        }, e.prototype.removeChildren = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
            var r, n = t, i = e, o = i - n;
            if (o > 0 && o <= i) {
                r = this.children.splice(n, o);
                for (var s = 0; s < r.length; ++s) r[s].parent = null, r[s].transform && (r[s].transform._parentID = -1);
                this._boundsID++, this.onChildrenChange(t);
                for (var s = 0; s < r.length; ++s) r[s].emit("removed", this), this.emit("childRemoved", r[s], this, s);
                return r
            }
            if (0 === o && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
        }, e.prototype.sortChildren = function () {
            for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
                var n = this.children[e];
                n._lastSortedIndex = e, t || 0 === n.zIndex || (t = !0)
            }
            t && this.children.length > 1 && this.children.sort(i), this.sortDirty = !1
        }, e.prototype.updateTransform = function () {
            this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
            for (var t = 0, e = this.children.length; t < e; ++t) {
                var r = this.children[t];
                r.visible && r.updateTransform()
            }
        }, e.prototype.calculateBounds = function () {
            this._bounds.clear(), this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                if (e.visible && e.renderable) if (e.calculateBounds(), e._mask) {
                    var r = e._mask.maskObject || e._mask;
                    r.calculateBounds(), this._bounds.addBoundsMask(e._bounds, r._bounds)
                } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
            }
            this._bounds.updateID = this._boundsID
        }, e.prototype.getLocalBounds = function (e, r) {
            void 0 === r && (r = !1);
            var n = t.prototype.getLocalBounds.call(this, e);
            if (!r) for (var i = 0, o = this.children.length; i < o; ++i) {
                var s = this.children[i];
                s.visible && s.updateTransform()
            }
            return n
        }, e.prototype._calculateBounds = function () {
        }, e.prototype.render = function (t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t); else {
                this._render(t);
                for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].render(t)
            }
        }, e.prototype.renderAdvanced = function (t) {
            t.batch.flush();
            var e = this.filters, r = this._mask;
            if (e) {
                this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                for (var n = 0; n < e.length; n++) e[n].enabled && this._enabledFilters.push(e[n]);
                this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
            }
            r && t.mask.push(this, this._mask), this._render(t);
            for (var n = 0, i = this.children.length; n < i; n++) this.children[n].render(t);
            t.batch.flush(), r && t.mask.pop(this), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
        }, e.prototype._render = function (t) {
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this), this.sortDirty = !1;
            var r = "boolean" == typeof e ? e : e && e.children, n = this.removeChildren(0, this.children.length);
            if (r) for (var i = 0; i < n.length; ++i) n[i].destroy(e)
        }, Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this.scale.x * this.getLocalBounds().width
            }, set: function (t) {
                var e = this.getLocalBounds().width;
                this.scale.x = 0 !== e ? t / e : 1, this._width = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return this.scale.y * this.getLocalBounds().height
            }, set: function (t) {
                var e = this.getLocalBounds().height;
                this.scale.y = 0 !== e ? t / e : 1, this._height = t
            }, enumerable: !1, configurable: !0
        }), e
    }(c);
    f.prototype.containerUpdateTransform = f.prototype.updateTransform
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return _
    }), r.d(e, "b", function () {
        return s
    }), r.d(e, "c", function () {
        return o
    }), r.d(e, "d", function () {
        return E
    }), r.d(e, "e", function () {
        return m
    }), r.d(e, "f", function () {
        return a
    }), r.d(e, "g", function () {
        return n
    }), r.d(e, "h", function () {
        return u
    }), r.d(e, "i", function () {
        return v
    }), r.d(e, "j", function () {
        return y
    }), r.d(e, "k", function () {
        return p
    }), r.d(e, "l", function () {
        return T
    }), r.d(e, "m", function () {
        return g
    }), r.d(e, "n", function () {
        return i
    }), r.d(e, "o", function () {
        return l
    }), r.d(e, "p", function () {
        return f
    }), r.d(e, "q", function () {
        return h
    }), r.d(e, "r", function () {
        return c
    }), r.d(e, "s", function () {
        return d
    });/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    var n;
    !function (t) {
        t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
    }(n || (n = {}));
    var i;
    !function (t) {
        t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
    }(i || (i = {}));
    var o;
    !function (t) {
        t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
    }(o || (o = {}));
    var s;
    !function (t) {
        t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
    }(s || (s = {}));
    var a;
    !function (t) {
        t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
    }(a || (a = {}));
    var u;
    !function (t) {
        t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
    }(u || (u = {}));
    var h;
    !function (t) {
        t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
    }(h || (h = {}));
    var c;
    !function (t) {
        t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
    }(c || (c = {}));
    var l;
    !function (t) {
        t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
    }(l || (l = {}));
    var f;
    !function (t) {
        t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
    }(f || (f = {}));
    var d;
    !function (t) {
        t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
    }(d || (d = {}));
    var p;
    !function (t) {
        t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
    }(p || (p = {}));
    var _;
    !function (t) {
        t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
    }(_ || (_ = {}));
    var m;
    !function (t) {
        t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
    }(m || (m = {}));
    var v;
    !function (t) {
        t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
    }(v || (v = {}));
    var g;
    !function (t) {
        t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
    }(g || (g = {}));
    var y;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
    }(y || (y = {}));
    var T;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
    }(T || (T = {}));
    var E;
    !function (t) {
        t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
    }(E || (E = {}))
}, function (t, e, r) {
    r(37)(r(38)), t.exports = window.$
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = {baseurl: null, lib: null, app: null, imgList: null, transfrom: {}, userInfo: {}};
    e.default = n
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return s
    }), r.d(e, "b", function () {
        return a
    }), r.d(e, "c", function () {
        return i
    });
    var n = r(3);/*!
 * @pixi/ticker - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    n.b.TARGET_FPMS = .06;
    var i;
    !function (t) {
        t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY"
    }(i || (i = {}));
    var o = function () {
        function t(t, e, r, n) {
            void 0 === e && (e = null), void 0 === r && (r = 0), void 0 === n && (n = !1), this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = r, this.once = n
        }

        return t.prototype.match = function (t, e) {
            return void 0 === e && (e = null), this.fn === t && this.context === e
        }, t.prototype.emit = function (t) {
            this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
            var e = this.next;
            return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
        }, t.prototype.connect = function (t) {
            this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
        }, t.prototype.destroy = function (t) {
            void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
            var e = this.next;
            return this.next = t ? null : e, this.previous = null, e
        }, t
    }(), s = function () {
        function t() {
            var t = this;
            this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new o(null, null, 1 / 0), this.deltaMS = 1 / n.b.TARGET_FPMS, this.elapsedMS = 1 / n.b.TARGET_FPMS, this._tick = function (e) {
                t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
            }
        }

        return t.prototype._requestIfNeeded = function () {
            null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
        }, t.prototype._cancelIfNeeded = function () {
            null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
        }, t.prototype._startIfPossible = function () {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start()
        }, t.prototype.add = function (t, e, r) {
            return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r))
        }, t.prototype.addOnce = function (t, e, r) {
            return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r, !0))
        }, t.prototype._addListener = function (t) {
            var e = this._head.next, r = this._head;
            if (e) {
                for (; e;) {
                    if (t.priority > e.priority) {
                        t.connect(r);
                        break
                    }
                    r = e, e = e.next
                }
                t.previous || t.connect(r)
            } else t.connect(r);
            return this._startIfPossible(), this
        }, t.prototype.remove = function (t, e) {
            for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;
            return this._head.next || this._cancelIfNeeded(), this
        }, Object.defineProperty(t.prototype, "count", {
            get: function () {
                if (!this._head) return 0;
                for (var t = 0, e = this._head; e = e.next;) t++;
                return t
            }, enumerable: !1, configurable: !0
        }), t.prototype.start = function () {
            this.started || (this.started = !0, this._requestIfNeeded())
        }, t.prototype.stop = function () {
            this.started && (this.started = !1, this._cancelIfNeeded())
        }, t.prototype.destroy = function () {
            if (!this._protected) {
                this.stop();
                for (var t = this._head.next; t;) t = t.destroy(!0);
                this._head.destroy(), this._head = null
            }
        }, t.prototype.update = function (t) {
            void 0 === t && (t = performance.now());
            var e;
            if (t > this.lastTime) {
                if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                    var r = t - this._lastFrame | 0;
                    if (r < this._minElapsedMS) return;
                    this._lastFrame = t - r % this._minElapsedMS
                }
                this.deltaMS = e, this.deltaTime = this.deltaMS * n.b.TARGET_FPMS;
                for (var i = this._head, o = i.next; o;) o = o.emit(this.deltaTime);
                i.next || this._cancelIfNeeded()
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t
        }, Object.defineProperty(t.prototype, "FPS", {
            get: function () {
                return 1e3 / this.elapsedMS
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "minFPS", {
            get: function () {
                return 1e3 / this._maxElapsedMS
            }, set: function (t) {
                var e = Math.min(this.maxFPS, t), r = Math.min(Math.max(0, e) / 1e3, n.b.TARGET_FPMS);
                this._maxElapsedMS = 1 / r
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "maxFPS", {
            get: function () {
                return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
            }, set: function (t) {
                if (0 === t) this._minElapsedMS = 0; else {
                    var e = Math.max(this.minFPS, t);
                    this._minElapsedMS = 1 / (e / 1e3)
                }
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t, "shared", {
            get: function () {
                if (!t._shared) {
                    var e = t._shared = new t;
                    e.autoStart = !0, e._protected = !0
                }
                return t._shared
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t, "system", {
            get: function () {
                if (!t._system) {
                    var e = t._system = new t;
                    e.autoStart = !0, e._protected = !0
                }
                return t._system
            }, enumerable: !1, configurable: !0
        }), t
    }(), a = function () {
        function t() {
        }

        return t.init = function (t) {
            var e = this;
            t = Object.assign({
                autoStart: !0,
                sharedTicker: !1
            }, t), Object.defineProperty(this, "ticker", {
                set: function (t) {
                    this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, i.LOW)
                }, get: function () {
                    return this._ticker
                }
            }), this.stop = function () {
                e._ticker.stop()
            }, this.start = function () {
                e._ticker.start()
            }, this._ticker = null, this.ticker = t.sharedTicker ? s.shared : new s, t.autoStart && this.start()
        }, t.destroy = function () {
            if (this._ticker) {
                var t = this._ticker;
                this.ticker = null, t.destroy()
            }
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "VERSION", function () {
        return D
    }), r.d(e, "filters", function () {
        return L
    });
    var n = (r(44), r(1));
    r.d(e, "utils", function () {
        return n
    });
    var i = r(19);
    r.d(e, "AccessibilityManager", function () {
        return i.a
    }), r.d(e, "accessibleTarget", function () {
        return i.b
    });
    var o = r(20);
    r.d(e, "InteractionData", function () {
        return o.a
    }), r.d(e, "InteractionEvent", function () {
        return o.b
    }), r.d(e, "InteractionManager", function () {
        return o.c
    }), r.d(e, "InteractionTrackingData", function () {
        return o.d
    }), r.d(e, "interactiveTarget", function () {
        return o.e
    });
    var s = r(21);
    r.d(e, "Application", function () {
        return s.a
    });
    var a = r(0);
    r.d(e, "AbstractBatchRenderer", function () {
        return a.a
    }), r.d(e, "AbstractMultiResource", function () {
        return a.b
    }), r.d(e, "AbstractRenderer", function () {
        return a.c
    }), r.d(e, "ArrayResource", function () {
        return a.d
    }), r.d(e, "Attribute", function () {
        return a.e
    }), r.d(e, "BaseImageResource", function () {
        return a.f
    }), r.d(e, "BaseRenderTexture", function () {
        return a.g
    }), r.d(e, "BaseTexture", function () {
        return a.h
    }), r.d(e, "BatchDrawCall", function () {
        return a.i
    }), r.d(e, "BatchGeometry", function () {
        return a.j
    }), r.d(e, "BatchPluginFactory", function () {
        return a.k
    }), r.d(e, "BatchRenderer", function () {
        return a.l
    }), r.d(e, "BatchShaderGenerator", function () {
        return a.m
    }), r.d(e, "BatchSystem", function () {
        return a.n
    }), r.d(e, "BatchTextureArray", function () {
        return a.o
    }), r.d(e, "Buffer", function () {
        return a.p
    }), r.d(e, "BufferResource", function () {
        return a.q
    }), r.d(e, "CanvasResource", function () {
        return a.r
    }), r.d(e, "ContextSystem", function () {
        return a.s
    }), r.d(e, "CubeResource", function () {
        return a.t
    }), r.d(e, "Filter", function () {
        return a.u
    }), r.d(e, "FilterState", function () {
        return a.v
    }), r.d(e, "FilterSystem", function () {
        return a.w
    }), r.d(e, "Framebuffer", function () {
        return a.x
    }), r.d(e, "FramebufferSystem", function () {
        return a.y
    }), r.d(e, "GLFramebuffer", function () {
        return a.z
    }), r.d(e, "GLProgram", function () {
        return a.A
    }), r.d(e, "GLTexture", function () {
        return a.B
    }), r.d(e, "Geometry", function () {
        return a.C
    }), r.d(e, "GeometrySystem", function () {
        return a.D
    }), r.d(e, "IGLUniformData", function () {
        return a.E
    }), r.d(e, "INSTALLED", function () {
        return a.F
    }), r.d(e, "ImageBitmapResource", function () {
        return a.G
    }), r.d(e, "ImageResource", function () {
        return a.H
    }), r.d(e, "MaskData", function () {
        return a.I
    }), r.d(e, "MaskSystem", function () {
        return a.J
    }), r.d(e, "ObjectRenderer", function () {
        return a.K
    }), r.d(e, "Program", function () {
        return a.L
    }), r.d(e, "ProjectionSystem", function () {
        return a.M
    }), r.d(e, "Quad", function () {
        return a.N
    }), r.d(e, "QuadUv", function () {
        return a.O
    }), r.d(e, "RenderTexture", function () {
        return a.P
    }), r.d(e, "RenderTexturePool", function () {
        return a.Q
    }), r.d(e, "RenderTextureSystem", function () {
        return a.R
    }), r.d(e, "Renderer", function () {
        return a.S
    }), r.d(e, "Resource", function () {
        return a.T
    }), r.d(e, "SVGResource", function () {
        return a.U
    }), r.d(e, "ScissorSystem", function () {
        return a.V
    }), r.d(e, "Shader", function () {
        return a.W
    }), r.d(e, "ShaderSystem", function () {
        return a.X
    }), r.d(e, "SpriteMaskFilter", function () {
        return a.Y
    }), r.d(e, "State", function () {
        return a.Z
    }), r.d(e, "StateSystem", function () {
        return a._0
    }), r.d(e, "StencilSystem", function () {
        return a._1
    }), r.d(e, "System", function () {
        return a._2
    }), r.d(e, "Texture", function () {
        return a._3
    }), r.d(e, "TextureGCSystem", function () {
        return a._4
    }), r.d(e, "TextureMatrix", function () {
        return a._5
    }), r.d(e, "TextureSystem", function () {
        return a._6
    }), r.d(e, "TextureUvs", function () {
        return a._7
    }), r.d(e, "UniformGroup", function () {
        return a._8
    }), r.d(e, "VideoResource", function () {
        return a._9
    }), r.d(e, "ViewableBuffer", function () {
        return a._10
    }), r.d(e, "autoDetectRenderer", function () {
        return a._11
    }), r.d(e, "autoDetectResource", function () {
        return a._12
    }), r.d(e, "checkMaxIfStatementsInShader", function () {
        return a._13
    }), r.d(e, "createUBOElements", function () {
        return a._14
    }), r.d(e, "defaultFilterVertex", function () {
        return a._15
    }), r.d(e, "defaultVertex", function () {
        return a._16
    }), r.d(e, "generateProgram", function () {
        return a._17
    }), r.d(e, "generateUniformBufferSync", function () {
        return a._18
    }), r.d(e, "getTestContext", function () {
        return a._19
    }), r.d(e, "getUBOData", function () {
        return a._20
    }), r.d(e, "resources", function () {
        return a._21
    }), r.d(e, "systems", function () {
        return a._22
    }), r.d(e, "uniformParsers", function () {
        return a._23
    });
    var u = r(23);
    r.d(e, "Extract", function () {
        return u.a
    });
    var h = r(10);
    r.d(e, "AppLoaderPlugin", function () {
        return h.a
    }), r.d(e, "Loader", function () {
        return h.b
    }), r.d(e, "LoaderResource", function () {
        return h.c
    }), r.d(e, "TextureLoader", function () {
        return h.d
    });
    var c = r(24);
    r.d(e, "BlobResource", function () {
        return c.a
    }), r.d(e, "CompressedTextureLoader", function () {
        return c.b
    }), r.d(e, "CompressedTextureResource", function () {
        return c.c
    }), r.d(e, "DDSLoader", function () {
        return c.d
    }), r.d(e, "FORMATS_TO_COMPONENTS", function () {
        return c.e
    }), r.d(e, "INTERNAL_FORMATS", function () {
        return c.f
    }), r.d(e, "INTERNAL_FORMAT_TO_BYTES_PER_PIXEL", function () {
        return c.g
    }), r.d(e, "KTXLoader", function () {
        return c.h
    }), r.d(e, "TYPES_TO_BYTES_PER_COMPONENT", function () {
        return c.i
    }), r.d(e, "TYPES_TO_BYTES_PER_PIXEL", function () {
        return c.j
    });
    var l = r(25);
    r.d(e, "ParticleContainer", function () {
        return l.a
    }), r.d(e, "ParticleRenderer", function () {
        return l.b
    });
    var f = r(26);
    r.d(e, "BasePrepare", function () {
        return f.a
    }), r.d(e, "CountLimiter", function () {
        return f.b
    }), r.d(e, "Prepare", function () {
        return f.c
    }), r.d(e, "TimeLimiter", function () {
        return f.d
    });
    var d = r(28);
    r.d(e, "Spritesheet", function () {
        return d.a
    }), r.d(e, "SpritesheetLoader", function () {
        return d.b
    });
    var p = r(29);
    r.d(e, "TilingSprite", function () {
        return p.a
    }), r.d(e, "TilingSpriteRenderer", function () {
        return p.b
    });
    var _ = r(30);
    r.d(e, "BitmapFont", function () {
        return _.a
    }), r.d(e, "BitmapFontData", function () {
        return _.b
    }), r.d(e, "BitmapFontLoader", function () {
        return _.c
    }), r.d(e, "BitmapText", function () {
        return _.d
    });
    var m = r(8);
    r.d(e, "Ticker", function () {
        return m.a
    }), r.d(e, "TickerPlugin", function () {
        return m.b
    }), r.d(e, "UPDATE_PRIORITY", function () {
        return m.c
    });
    var v = r(62), g = r(63), y = r(64), T = r(65), E = r(66), b = r(67), x = (r(68), r(69), r(70), r(5));
    r.d(e, "ALPHA_MODES", function () {
        return x.a
    }), r.d(e, "BLEND_MODES", function () {
        return x.b
    }), r.d(e, "BUFFER_BITS", function () {
        return x.c
    }), r.d(e, "BUFFER_TYPE", function () {
        return x.d
    }), r.d(e, "CLEAR_MODES", function () {
        return x.e
    }), r.d(e, "DRAW_MODES", function () {
        return x.f
    }), r.d(e, "ENV", function () {
        return x.g
    }), r.d(e, "FORMATS", function () {
        return x.h
    }), r.d(e, "GC_MODES", function () {
        return x.i
    }), r.d(e, "MASK_TYPES", function () {
        return x.j
    }), r.d(e, "MIPMAP_MODES", function () {
        return x.k
    }), r.d(e, "MSAA_QUALITY", function () {
        return x.l
    }), r.d(e, "PRECISION", function () {
        return x.m
    }), r.d(e, "RENDERER_TYPE", function () {
        return x.n
    }), r.d(e, "SAMPLER_TYPES", function () {
        return x.o
    }), r.d(e, "SCALE_MODES", function () {
        return x.p
    }), r.d(e, "TARGETS", function () {
        return x.q
    }), r.d(e, "TYPES", function () {
        return x.r
    }), r.d(e, "WRAP_MODES", function () {
        return x.s
    });
    var O = r(4);
    r.d(e, "Bounds", function () {
        return O.a
    }), r.d(e, "Container", function () {
        return O.b
    }), r.d(e, "DisplayObject", function () {
        return O.c
    }), r.d(e, "TemporaryDisplayObject", function () {
        return O.d
    });
    var R = r(27);
    r.d(e, "FillStyle", function () {
        return R.a
    }), r.d(e, "GRAPHICS_CURVES", function () {
        return R.b
    }), r.d(e, "Graphics", function () {
        return R.c
    }), r.d(e, "GraphicsData", function () {
        return R.d
    }), r.d(e, "GraphicsGeometry", function () {
        return R.e
    }), r.d(e, "LINE_CAP", function () {
        return R.f
    }), r.d(e, "LINE_JOIN", function () {
        return R.g
    }), r.d(e, "LineStyle", function () {
        return R.h
    }), r.d(e, "graphicsUtils", function () {
        return R.i
    });
    var A = r(2);
    r.d(e, "Circle", function () {
        return A.a
    }), r.d(e, "DEG_TO_RAD", function () {
        return A.b
    }), r.d(e, "Ellipse", function () {
        return A.c
    }), r.d(e, "Matrix", function () {
        return A.d
    }), r.d(e, "ObservablePoint", function () {
        return A.e
    }), r.d(e, "PI_2", function () {
        return A.f
    }), r.d(e, "Point", function () {
        return A.g
    }), r.d(e, "Polygon", function () {
        return A.h
    }), r.d(e, "RAD_TO_DEG", function () {
        return A.i
    }), r.d(e, "Rectangle", function () {
        return A.j
    }), r.d(e, "RoundedRectangle", function () {
        return A.k
    }), r.d(e, "SHAPES", function () {
        return A.l
    }), r.d(e, "Transform", function () {
        return A.m
    }), r.d(e, "groupD8", function () {
        return A.n
    });
    var S = r(16);
    r.d(e, "Mesh", function () {
        return S.a
    }), r.d(e, "MeshBatchUvs", function () {
        return S.b
    }), r.d(e, "MeshGeometry", function () {
        return S.c
    }), r.d(e, "MeshMaterial", function () {
        return S.d
    });
    var I = r(71);
    r.d(e, "NineSlicePlane", function () {
        return I.a
    }), r.d(e, "PlaneGeometry", function () {
        return I.b
    }), r.d(e, "RopeGeometry", function () {
        return I.c
    }), r.d(e, "SimpleMesh", function () {
        return I.d
    }), r.d(e, "SimplePlane", function () {
        return I.e
    }), r.d(e, "SimpleRope", function () {
        return I.f
    });
    var w = r(22);
    r.d(e, "Runner", function () {
        return w.a
    });
    var P = r(11);
    r.d(e, "Sprite", function () {
        return P.a
    });
    var M = r(72);
    r.d(e, "AnimatedSprite", function () {
        return M.a
    });
    var N = r(15);
    r.d(e, "TEXT_GRADIENT", function () {
        return N.a
    }), r.d(e, "Text", function () {
        return N.b
    }), r.d(e, "TextMetrics", function () {
        return N.c
    }), r.d(e, "TextStyle", function () {
        return N.d
    });
    var C = r(3);
    r.d(e, "isMobile", function () {
        return C.a
    }), r.d(e, "settings", function () {
        return C.b
    }),/*!
 * pixi.js - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
        a.S.registerPlugin("accessibility", i.a), a.S.registerPlugin("extract", u.a), a.S.registerPlugin("interaction", o.c), a.S.registerPlugin("particle", l.b), a.S.registerPlugin("prepare", f.c), a.S.registerPlugin("batch", a.l), a.S.registerPlugin("tilingSprite", p.b), h.b.registerPlugin(_.c), h.b.registerPlugin(c.b), h.b.registerPlugin(c.d), h.b.registerPlugin(c.h), h.b.registerPlugin(d.b), s.a.registerPlugin(m.b), s.a.registerPlugin(h.a);
    var D = "6.1.3", L = {
        AlphaFilter: v.a,
        BlurFilter: g.a,
        BlurFilterPass: g.b,
        ColorMatrixFilter: y.a,
        DisplacementFilter: T.a,
        FXAAFilter: E.a,
        NoiseFilter: b.a
    }
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
    }

    function i(t, e) {
        e = e || {};
        for (var r = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, n = r.parser[e.strictMode ? "strict" : "loose"].exec(t), i = {}, o = 14; o--;) i[r.key[o]] = n[o] || "";
        return i[r.q.name] = {}, i[r.key[12]].replace(r.q.parser, function (t, e, n) {
            e && (i[r.q.name][e] = n)
        }), i
    }

    function o() {
    }

    function s(t, e, r) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
    }

    function a(t) {
        return t.toString().replace("object ", "")
    }

    function u() {
    }

    function h(t) {
        return function () {
            for (var e = arguments, r = [], n = 0; n < arguments.length; n++) r[n] = e[n];
            if (null === t) throw new Error("Callback was already called.");
            var i = t;
            t = null, i.apply(this, r)
        }
    }

    function c(t) {
        for (var e = "", r = 0; r < t.length;) {
            for (var n = [0, 0, 0], i = [0, 0, 0, 0], o = 0; o < n.length; ++o) r < t.length ? n[o] = 255 & t.charCodeAt(r++) : n[o] = 0;
            i[0] = n[0] >> 2, i[1] = (3 & n[0]) << 4 | n[1] >> 4, i[2] = (15 & n[1]) << 2 | n[2] >> 6, i[3] = 63 & n[2];
            switch (r - (t.length - 1)) {
                case 2:
                    i[3] = 64, i[2] = 64;
                    break;
                case 1:
                    i[3] = 64
            }
            for (var o = 0; o < i.length; ++o) e += O.charAt(i[o])
        }
        return e
    }

    function l(t, e) {
        if (!t.data) return void e();
        if (t.xhr && t.xhrType === v.XHR_RESPONSE_TYPE.BLOB) if (self.Blob && "string" != typeof t.data) {
            if (0 === t.data.type.indexOf("image")) {
                var r = R.createObjectURL(t.data);
                return t.blob = t.data, t.data = new Image, t.data.src = r, t.type = v.TYPE.IMAGE, void (t.data.onload = function () {
                    R.revokeObjectURL(r), t.data.onload = null, e()
                })
            }
        } else {
            var n = t.xhr.getResponseHeader("content-type");
            if (n && 0 === n.indexOf("image")) return t.data = new Image, t.data.src = "data:" + n + ";base64," + c(t.xhr.responseText), t.type = v.TYPE.IMAGE, void (t.data.onload = function () {
                t.data.onload = null, e()
            })
        }
        e()
    }

    r.d(e, "a", function () {
        return b
    }), r.d(e, "b", function () {
        return E
    }), r.d(e, "c", function () {
        return v
    }), r.d(e, "d", function () {
        return x
    });
    var f = r(0), d = function () {
        function t(t, e, r) {
            void 0 === e && (e = !1), this._fn = t, this._once = e, this._thisArg = r, this._next = this._prev = this._owner = null
        }

        return t.prototype.detach = function () {
            return null !== this._owner && (this._owner.detach(this), !0)
        }, t
    }(), p = function () {
        function t() {
            this._head = this._tail = void 0
        }

        return t.prototype.handlers = function (t) {
            void 0 === t && (t = !1);
            var e = this._head;
            if (t) return !!e;
            for (var r = []; e;) r.push(e), e = e._next;
            return r
        }, t.prototype.has = function (t) {
            if (!(t instanceof d)) throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
            return t._owner === this
        }, t.prototype.dispatch = function () {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
            var n = this._head;
            if (!n) return !1;
            for (; n;) n._once && this.detach(n), n._fn.apply(n._thisArg, e), n = n._next;
            return !0
        }, t.prototype.add = function (t, e) {
            if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
            return n(this, new d(t, !1, e))
        }, t.prototype.once = function (t, e) {
            if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
            return n(this, new d(t, !0, e))
        }, t.prototype.detach = function (t) {
            if (!(t instanceof d)) throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
            return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
        }, t.prototype.detachAll = function () {
            var t = this._head;
            if (!t) return this;
            for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
            return this
        }, t
    }(), _ = !(!self.XDomainRequest || "withCredentials" in new XMLHttpRequest), m = null, v = function () {
        function t(e, r, n) {
            if (this._dequeue = o, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = null, this._boundOnError = null, this._boundOnProgress = null, this._boundOnTimeout = null, this._boundXhrOnError = null, this._boundXhrOnTimeout = null, this._boundXhrOnAbort = null, this._boundXhrOnLoad = null, "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
            n = n || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === n.crossOrigin ? "anonymous" : n.crossOrigin, this.timeout = n.timeout || 0, this.loadType = n.loadType || this._determineLoadType(), this.xhrType = n.xhrType, this.metadata = n.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = o, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new p, this.onProgress = new p, this.onComplete = new p, this.onAfterMiddleware = new p
        }

        return t.setExtensionLoadType = function (e, r) {
            s(t._loadTypeMap, e, r)
        }, t.setExtensionXhrType = function (e, r) {
            s(t._xhrTypeMap, e, r)
        }, Object.defineProperty(t.prototype, "isDataUrl", {
            get: function () {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "isComplete", {
            get: function () {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "isLoading", {
            get: function () {
                return this._hasFlag(t.STATUS_FLAGS.LOADING)
            }, enumerable: !1, configurable: !0
        }), t.prototype.complete = function () {
            this._clearEvents(), this._finish()
        }, t.prototype.abort = function (e) {
            if (!this.error) {
                if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = t.EMPTY_GIF; else for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                this._finish()
            }
        }, t.prototype.load = function (e) {
            var r = this;
            if (!this.isLoading) {
                if (this.isComplete) return void (e && setTimeout(function () {
                    return e(r)
                }, 1));
                switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        _ && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }
        }, t.prototype._hasFlag = function (t) {
            return 0 != (this._flags & t)
        }, t.prototype._setFlag = function (t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }, t.prototype._clearEvents = function () {
            clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
        }, t.prototype._finish = function () {
            if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
        }, t.prototype._loadElement = function (t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== self.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
        }, t.prototype._loadSourceElement = function (t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== self.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return void this.abort("Unsupported element: " + t);
            if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e)); else {
                var e = this.metadata.mimeType;
                this.data.appendChild(this._createSource(t, this.url, Array.isArray(e) ? e[0] : e))
            }
            this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
        }, t.prototype._loadXhr = function () {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest;
            e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
        }, t.prototype._loadXdr = function () {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new self.XDomainRequest;
            t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                return t.send()
            }, 1)
        }, t.prototype._createSource = function (t, e, r) {
            r || (r = t + "/" + this._getExtension(e));
            var n = document.createElement("source");
            return n.src = e, n.type = r, n
        }, t.prototype._onError = function (t) {
            this.abort("Failed to load element using: " + t.target.nodeName)
        }, t.prototype._onProgress = function (t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
        }, t.prototype._onTimeout = function () {
            this.abort("Load timed out.")
        }, t.prototype._xhrOnError = function () {
            var t = this.xhr;
            this.abort(a(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
        }, t.prototype._xhrOnTimeout = function () {
            var t = this.xhr;
            this.abort(a(t) + " Request timed out.")
        }, t.prototype._xhrOnAbort = function () {
            var t = this.xhr;
            this.abort(a(t) + " Request was aborted by the user.")
        }, t.prototype._xhrOnLoad = function () {
            var e = this.xhr, r = "", n = void 0 === e.status ? 200 : e.status;
            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === n && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? n = 200 : 1223 === n && (n = 204), 2 != (n / 100 | 0)) return void this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
            if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT; else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                this.data = JSON.parse(r), this.type = t.TYPE.JSON
            } catch (t) {
                return void this.abort("Error trying to parse loaded json: " + t)
            } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                if (self.DOMParser) {
                    var i = new DOMParser;
                    this.data = i.parseFromString(r, "text/xml")
                } else {
                    var o = document.createElement("div");
                    o.innerHTML = r, this.data = o
                }
                this.type = t.TYPE.XML
            } catch (t) {
                return void this.abort("Error trying to parse loaded xml: " + t)
            } else this.data = e.response || r;
            this.complete()
        }, t.prototype._determineCrossOrigin = function (t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (self.origin !== self.location.origin) return "anonymous";
            e = e || self.location, m || (m = document.createElement("a")), m.href = t;
            var r = i(m.href, {strictMode: !0}), n = !r.port && "" === e.port || r.port === e.port,
                o = r.protocol ? r.protocol + ":" : "";
            return r.host === e.hostname && n && o === e.protocol ? "" : "anonymous"
        }, t.prototype._determineXhrType = function () {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
        }, t.prototype._determineLoadType = function () {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
        }, t.prototype._getExtension = function (t) {
            void 0 === t && (t = this.url);
            var e = "";
            if (this.isDataUrl) {
                var r = t.indexOf("/");
                e = t.substring(r + 1, t.indexOf(";", r))
            } else {
                var n = t.indexOf("?"), i = t.indexOf("#"), o = Math.min(n > -1 ? n : t.length, i > -1 ? i : t.length);
                t = t.substring(0, o), e = t.substring(t.lastIndexOf(".") + 1)
            }
            return e.toLowerCase()
        }, t.prototype._getMimeFromXhrType = function (e) {
            switch (e) {
                case t.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case t.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case t.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case t.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case t.XHR_RESPONSE_TYPE.DEFAULT:
                case t.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain"
            }
        }, t
    }();
    !function (t) {
        !function (t) {
            t[t.NONE = 0] = "NONE", t[t.DATA_URL = 1] = "DATA_URL", t[t.COMPLETE = 2] = "COMPLETE", t[t.LOADING = 4] = "LOADING"
        }(t.STATUS_FLAGS || (t.STATUS_FLAGS = {}));
        !function (t) {
            t[t.UNKNOWN = 0] = "UNKNOWN", t[t.JSON = 1] = "JSON", t[t.XML = 2] = "XML", t[t.IMAGE = 3] = "IMAGE", t[t.AUDIO = 4] = "AUDIO", t[t.VIDEO = 5] = "VIDEO", t[t.TEXT = 6] = "TEXT"
        }(t.TYPE || (t.TYPE = {}));
        !function (t) {
            t[t.XHR = 1] = "XHR", t[t.IMAGE = 2] = "IMAGE", t[t.AUDIO = 3] = "AUDIO", t[t.VIDEO = 4] = "VIDEO"
        }(t.LOAD_TYPE || (t.LOAD_TYPE = {}));
        !function (t) {
            t.DEFAULT = "text", t.BUFFER = "arraybuffer", t.BLOB = "blob", t.DOCUMENT = "document", t.JSON = "json", t.TEXT = "text"
        }(t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})), t._loadTypeMap = {
            gif: t.LOAD_TYPE.IMAGE,
            png: t.LOAD_TYPE.IMAGE,
            bmp: t.LOAD_TYPE.IMAGE,
            jpg: t.LOAD_TYPE.IMAGE,
            jpeg: t.LOAD_TYPE.IMAGE,
            tif: t.LOAD_TYPE.IMAGE,
            tiff: t.LOAD_TYPE.IMAGE,
            webp: t.LOAD_TYPE.IMAGE,
            tga: t.LOAD_TYPE.IMAGE,
            svg: t.LOAD_TYPE.IMAGE,
            "svg+xml": t.LOAD_TYPE.IMAGE,
            mp3: t.LOAD_TYPE.AUDIO,
            ogg: t.LOAD_TYPE.AUDIO,
            wav: t.LOAD_TYPE.AUDIO,
            mp4: t.LOAD_TYPE.VIDEO,
            webm: t.LOAD_TYPE.VIDEO
        }, t._xhrTypeMap = {
            xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
            html: t.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: t.XHR_RESPONSE_TYPE.BLOB,
            png: t.XHR_RESPONSE_TYPE.BLOB,
            bmp: t.XHR_RESPONSE_TYPE.BLOB,
            jpg: t.XHR_RESPONSE_TYPE.BLOB,
            jpeg: t.XHR_RESPONSE_TYPE.BLOB,
            tif: t.XHR_RESPONSE_TYPE.BLOB,
            tiff: t.XHR_RESPONSE_TYPE.BLOB,
            webp: t.XHR_RESPONSE_TYPE.BLOB,
            tga: t.XHR_RESPONSE_TYPE.BLOB,
            json: t.XHR_RESPONSE_TYPE.JSON,
            text: t.XHR_RESPONSE_TYPE.TEXT,
            txt: t.XHR_RESPONSE_TYPE.TEXT,
            ttf: t.XHR_RESPONSE_TYPE.BUFFER,
            otf: t.XHR_RESPONSE_TYPE.BUFFER
        }, t.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    }(v || (v = {}));
    var g = function () {
        function t(t, e) {
            this.data = t, this.callback = e
        }

        return t
    }(), y = function () {
        function t(t, e) {
            var r = this;
            if (void 0 === e && (e = 1), this.workers = 0, this.saturated = u, this.unsaturated = u, this.empty = u, this.drain = u, this.error = u, this.started = !1, this.paused = !1, this._tasks = [], this._insert = function (t, e, n) {
                if (n && "function" != typeof n) throw new Error("task callback must be a function");
                if (r.started = !0, null == t && r.idle()) return void setTimeout(function () {
                    return r.drain()
                }, 1);
                var i = new g(t, "function" == typeof n ? n : u);
                e ? r._tasks.unshift(i) : r._tasks.push(i), setTimeout(r.process, 1)
            }, this.process = function () {
                for (; !r.paused && r.workers < r.concurrency && r._tasks.length;) {
                    var t = r._tasks.shift();
                    0 === r._tasks.length && r.empty(), r.workers += 1, r.workers === r.concurrency && r.saturated(), r._worker(t.data, h(r._next(t)))
                }
            }, this._worker = t, 0 === e) throw new Error("Concurrency must not be zero");
            this.concurrency = e, this.buffer = e / 4
        }

        return t.prototype._next = function (t) {
            var e = this;
            return function () {
                for (var r = arguments, n = [], i = 0; i < arguments.length; i++) n[i] = r[i];
                e.workers -= 1, t.callback.apply(t, n), null != n[0] && e.error(n[0], t.data), e.workers <= e.concurrency - e.buffer && e.unsaturated(), e.idle() && e.drain(), e.process()
            }
        }, t.prototype.push = function (t, e) {
            this._insert(t, !1, e)
        }, t.prototype.kill = function () {
            this.workers = 0, this.drain = u, this.started = !1, this._tasks = []
        }, t.prototype.unshift = function (t, e) {
            this._insert(t, !0, e)
        }, t.prototype.length = function () {
            return this._tasks.length
        }, t.prototype.running = function () {
            return this.workers
        }, t.prototype.idle = function () {
            return this._tasks.length + this.workers === 0
        }, t.prototype.pause = function () {
            !0 !== this.paused && (this.paused = !0)
        }, t.prototype.resume = function () {
            if (!1 !== this.paused) {
                this.paused = !1;
                for (var t = 1; t <= this.concurrency; t++) this.process()
            }
        }, t.eachSeries = function (t, e, r, n) {
            function i(a) {
                if (a || o === s) return void (r && r(a));
                n ? setTimeout(function () {
                    e(t[o++], i)
                }, 1) : e(t[o++], i)
            }

            var o = 0, s = t.length;
            i()
        }, t.queue = function (e, r) {
            return new t(e, r)
        }, t
    }(), T = /(#[\w-]+)?$/, E = function () {
        function t(e, r) {
            var n = this;
            void 0 === e && (e = ""), void 0 === r && (r = 10), this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, e) {
                return n._loadResource(t, e)
            }, this.resources = {}, this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, e) {
                return n._loadResource(t, e)
            }, this._queue = y.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new p, this.onError = new p, this.onLoad = new p, this.onStart = new p, this.onComplete = new p;
            for (var i = 0; i < t._plugins.length; ++i) {
                var o = t._plugins[i], s = o.pre, a = o.use;
                s && this.pre(s), a && this.use(a)
            }
            this._protected = !1
        }

        return t.prototype._add = function (t, e, r, n) {
            if (this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
            if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
            if (e = this._prepareUrl(e), this.resources[t] = new v(t, e, r), "function" == typeof n && this.resources[t].onAfterMiddleware.once(n), this.loading) {
                for (var i = r.parentResource, o = [], s = 0; s < i.children.length; ++s) i.children[s].isComplete || o.push(i.children[s]);
                var a = i.progressChunk * (o.length + 1), u = a / (o.length + 2);
                i.children.push(this.resources[t]), i.progressChunk = u;
                for (var s = 0; s < o.length; ++s) o[s].progressChunk = u;
                this.resources[t].progressChunk = u
            }
            return this._queue.push(this.resources[t]), this
        }, t.prototype.pre = function (t) {
            return this._beforeMiddleware.push(t), this
        }, t.prototype.use = function (t) {
            return this._afterMiddleware.push(t), this
        }, t.prototype.reset = function () {
            this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause();
            for (var t in this.resources) {
                var e = this.resources[t];
                e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort("loader reset")
            }
            return this.resources = {}, this
        }, t.prototype.load = function (t) {
            if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
            if (this._queue.idle()) this._onStart(), this._onComplete(); else {
                for (var e = this._queue._tasks.length, r = 100 / e, n = 0; n < this._queue._tasks.length; ++n) this._queue._tasks[n].data.progressChunk = r;
                this._onStart(), this._queue.resume()
            }
            return this
        }, Object.defineProperty(t.prototype, "concurrency", {
            get: function () {
                return this._queue.concurrency
            }, set: function (t) {
                this._queue.concurrency = t
            }, enumerable: !1, configurable: !0
        }), t.prototype._prepareUrl = function (t) {
            var e, r = i(t, {strictMode: !0});
            if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                var n = T.exec(e)[0];
                e = e.substr(0, e.length - n.length), -1 !== e.indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += n
            }
            return e
        }, t.prototype._loadResource = function (t, e) {
            var r = this;
            t._dequeue = e, y.eachSeries(this._beforeMiddleware, function (e, n) {
                e.call(r, t, function () {
                    n(t.isComplete ? {} : null)
                })
            }, function () {
                t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load())
            }, !0)
        }, t.prototype._onStart = function () {
            this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
        }, t.prototype._onComplete = function () {
            this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
        }, t.prototype._onLoad = function (t) {
            var e = this;
            t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), y.eachSeries(this._afterMiddleware, function (r, n) {
                r.call(e, t, n)
            }, function () {
                t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
            }, !0)
        }, t.prototype.destroy = function () {
            this._protected || this.reset()
        }, Object.defineProperty(t, "shared", {
            get: function () {
                var e = t._shared;
                return e || (e = new t, e._protected = !0, t._shared = e), e
            }, enumerable: !1, configurable: !0
        }), t.registerPlugin = function (e) {
            return t._plugins.push(e), e.add && e.add(), t
        }, t._plugins = [], t
    }();
    E.prototype.add = function (t, e, r, n) {
        if (Array.isArray(t)) {
            for (var i = 0; i < t.length; ++i) this.add(t[i]);
            return this
        }
        if ("object" == typeof t && (r = t, n = e || r.callback || r.onComplete, e = r.url, t = r.name || r.key || r.url), "string" != typeof e && (n = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
        return "function" == typeof r && (n = r, r = null), this._add(t, e, r, n)
    };
    var b = function () {
        function t() {
        }

        return t.init = function (t) {
            t = Object.assign({sharedLoader: !1}, t), this.loader = t.sharedLoader ? E.shared : new E
        }, t.destroy = function () {
            this.loader && (this.loader.destroy(), this.loader = null)
        }, t
    }(), x = function () {
        function t() {
        }

        return t.add = function () {
            v.setExtensionLoadType("svg", v.LOAD_TYPE.XHR), v.setExtensionXhrType("svg", v.XHR_RESPONSE_TYPE.TEXT)
        }, t.use = function (t, e) {
            if (!t.data || t.type !== v.TYPE.IMAGE && "svg" !== t.extension) e(); else {
                var r = t.data, n = t.url, i = t.name, o = t.metadata;
                f._3.fromLoader(r, n, i, o).then(function (r) {
                    t.texture = r, e()
                }).catch(e)
            }
        }, t
    }(), O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", R = self.URL || self.webkitURL;
    E.registerPlugin({use: l}), E.registerPlugin(x)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        c(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return d
    });
    var i = r(5), o = r(0), s = r(4), a = r(2), u = r(3), h = r(1), c = function (t, e) {
        return (c = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, l = new a.g, f = new Uint16Array([0, 1, 2, 0, 2, 3]), d = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r._anchor = new a.e(r._onAnchorUpdate, r, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), r._texture = null, r._width = 0, r._height = 0, r._tint = null, r._tintRGB = null, r.tint = 16777215, r.blendMode = i.b.NORMAL, r._cachedTint = 16777215, r.uvs = null, r.texture = e || o._3.EMPTY, r.vertexData = new Float32Array(8), r.vertexTrimmedData = null, r._transformID = -1, r._textureID = -1, r._transformTrimmedID = -1, r._textureTrimmedID = -1, r.indices = f, r.pluginName = "batch", r.isSprite = !0, r._roundPixels = u.b.ROUND_PIXELS, r
        }

        return n(e, t), e.prototype._onTextureUpdate = function () {
            this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Object(h.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Object(h.sign)(this.scale.y) * this._height / this._texture.orig.height)
        }, e.prototype._onAnchorUpdate = function () {
            this._transformID = -1, this._transformTrimmedID = -1
        }, e.prototype.calculateVertices = function () {
            var t = this._texture;
            if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                var e = this.transform.worldTransform, r = e.a, n = e.b, i = e.c, o = e.d, s = e.tx, a = e.ty,
                    h = this.vertexData, c = t.trim, l = t.orig, f = this._anchor, d = 0, p = 0, _ = 0, m = 0;
                if (c ? (p = c.x - f._x * l.width, d = p + c.width, m = c.y - f._y * l.height, _ = m + c.height) : (p = -f._x * l.width, d = p + l.width, m = -f._y * l.height, _ = m + l.height), h[0] = r * p + i * m + s, h[1] = o * m + n * p + a, h[2] = r * d + i * m + s, h[3] = o * m + n * d + a, h[4] = r * d + i * _ + s, h[5] = o * _ + n * d + a, h[6] = r * p + i * _ + s, h[7] = o * _ + n * p + a, this._roundPixels) for (var v = u.b.RESOLUTION, g = 0; g < h.length; ++g) h[g] = Math.round((h[g] * v | 0) / v)
            }
        }, e.prototype.calculateTrimmedVertices = function () {
            if (this.vertexTrimmedData) {
                if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
            } else this.vertexTrimmedData = new Float32Array(8);
            this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
            var t = this._texture, e = this.vertexTrimmedData, r = t.orig, n = this._anchor,
                i = this.transform.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, c = i.ty,
                l = -n._x * r.width, f = l + r.width, d = -n._y * r.height, p = d + r.height;
            e[0] = o * l + a * d + h, e[1] = u * d + s * l + c, e[2] = o * f + a * d + h, e[3] = u * d + s * f + c, e[4] = o * f + a * p + h, e[5] = u * p + s * f + c, e[6] = o * l + a * p + h, e[7] = u * p + s * l + c
        }, e.prototype._render = function (t) {
            this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
        }, e.prototype._calculateBounds = function () {
            var t = this._texture.trim, e = this._texture.orig;
            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
        }, e.prototype.getLocalBounds = function (e) {
            return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new a.j), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
        }, e.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, l);
            var e = this._texture.orig.width, r = this._texture.orig.height, n = -e * this.anchor.x, i = 0;
            return l.x >= n && l.x < n + e && (i = -r * this.anchor.y, l.y >= i && l.y < i + r)
        }, e.prototype.destroy = function (e) {
            if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                var r = "boolean" == typeof e ? e : e && e.baseTexture;
                this._texture.destroy(!!r)
            }
            this._texture = null
        }, e.from = function (t, r) {
            return new e(t instanceof o._3 ? t : o._3.from(t, r))
        }, Object.defineProperty(e.prototype, "roundPixels", {
            get: function () {
                return this._roundPixels
            }, set: function (t) {
                this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "width", {
            get: function () {
                return Math.abs(this.scale.x) * this._texture.orig.width
            }, set: function (t) {
                var e = Object(h.sign)(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return Math.abs(this.scale.y) * this._texture.orig.height
            }, set: function (t) {
                var e = Object(h.sign)(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "anchor", {
            get: function () {
                return this._anchor
            }, set: function (t) {
                this._anchor.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "tint", {
            get: function () {
                return this._tint
            }, set: function (t) {
                this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "texture", {
            get: function () {
                return this._texture
            }, set: function (t) {
                this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || o._3.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }, enumerable: !1, configurable: !0
        }), e
    }(s.b)
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i() {
            g = new d.Application({
                antialias: !0,
                backgroundAlpha: 0,
                resolution: 2
            }), g.renderer.autoDensity = !0, l.default.app = g, t("#home").append(g.view)
        }

        function o() {
            switch (y = {width: 750, height: 1334}, T = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }, E = Math.max(T.width / y.width, T.height / y.height), b = T.width / y.width, l.default.transfrom = {
                design: y,
                full: T,
                scale: E,
                scaleW: b
            }, g.renderer.resize(window.innerWidth, window.innerHeight), v) {
                case"loading":
                    break;
                case"home":
                    a.default.onResize();
                    break;
                case"game":
                    _.default.onResize()
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = r(43), a = n(s), u = r(124), h = n(u), c = r(7), l = n(c), f = r(9), d = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }(f), p = r(141), _ = n(p), m = {}, v = null, g = void 0;
        m.init = function () {
            window.addEventListener("resize", o), i(), this.change("loading")
        }, m.change = function (t) {
            switch (v = t) {
                case"loading":
                    h.default.init();
                    break;
                case"home":
                    a.default.init();
                    break;
                case"game":
                    _.default.init()
            }
            o()
        };
        var y = void 0, T = void 0, E = void 0, b = void 0;
        e.default = m
    }).call(e, r(6))
}, function (t, e, r) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = {}, n = null, i = null;
        r.status = !0, r.init = function () {
            n = document.getElementById("bgm"), n.loop = !0, n.play(), i = t(".music"), i.removeClass("hide"), i.bind("click", function () {
                r.status = !r.status, r.status ? r.play() : r.pause()
            })
        }, document.addEventListener("WeixinJSBridgeReady", function () {
            n = document.getElementById("bgm"), n.play()
        }), r.play = function () {
            n.play(), t(".no").removeClass("hide"), t(".off").addClass("hide")
        }, r.pause = function () {
            n.pause(), t(".no").addClass("hide"), t(".off").removeClass("hide")
        }, e.Music = r
    }).call(e, r(6))
}, function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        p(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t) {
        return "number" == typeof t ? Object(d.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) t[e] = i(t[e]);
            return t
        }
        return i(t)
    }

    function s(t, e) {
        if (!Array.isArray(t) || !Array.isArray(e)) return !1;
        if (t.length !== e.length) return !1;
        for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;
        return !0
    }

    function a(t, e, r) {
        for (var n in r) Array.isArray(e[n]) ? t[n] = e[n].slice() : t[n] = e[n]
    }

    r.d(e, "a", function () {
        return u
    }), r.d(e, "b", function () {
        return E
    }), r.d(e, "c", function () {
        return g
    }), r.d(e, "d", function () {
        return v
    });
    var u, h = r(11), c = r(0), l = r(3), f = r(2), d = r(1), p = function (t, e) {
        return (p = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    };
    !function (t) {
        t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
    }(u || (u = {}));
    var _ = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: u.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0
    }, m = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"], v = function () {
        function t(t) {
            this.styleID = 0, this.reset(), a(this, t, t)
        }

        return t.prototype.clone = function () {
            var e = {};
            return a(e, this, _), new t(e)
        }, t.prototype.reset = function () {
            a(this, _, _)
        }, Object.defineProperty(t.prototype, "align", {
            get: function () {
                return this._align
            }, set: function (t) {
                this._align !== t && (this._align = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "breakWords", {
            get: function () {
                return this._breakWords
            }, set: function (t) {
                this._breakWords !== t && (this._breakWords = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadow", {
            get: function () {
                return this._dropShadow
            }, set: function (t) {
                this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadowAlpha", {
            get: function () {
                return this._dropShadowAlpha
            }, set: function (t) {
                this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadowAngle", {
            get: function () {
                return this._dropShadowAngle
            }, set: function (t) {
                this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadowBlur", {
            get: function () {
                return this._dropShadowBlur
            }, set: function (t) {
                this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadowColor", {
            get: function () {
                return this._dropShadowColor
            }, set: function (t) {
                var e = o(t);
                this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dropShadowDistance", {
            get: function () {
                return this._dropShadowDistance
            }, set: function (t) {
                this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fill", {
            get: function () {
                return this._fill
            }, set: function (t) {
                var e = o(t);
                this._fill !== e && (this._fill = e, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fillGradientType", {
            get: function () {
                return this._fillGradientType
            }, set: function (t) {
                this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fillGradientStops", {
            get: function () {
                return this._fillGradientStops
            }, set: function (t) {
                s(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fontFamily", {
            get: function () {
                return this._fontFamily
            }, set: function (t) {
                this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fontSize", {
            get: function () {
                return this._fontSize
            }, set: function (t) {
                this._fontSize !== t && (this._fontSize = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fontStyle", {
            get: function () {
                return this._fontStyle
            }, set: function (t) {
                this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fontVariant", {
            get: function () {
                return this._fontVariant
            }, set: function (t) {
                this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fontWeight", {
            get: function () {
                return this._fontWeight
            }, set: function (t) {
                this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "letterSpacing", {
            get: function () {
                return this._letterSpacing
            }, set: function (t) {
                this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "lineHeight", {
            get: function () {
                return this._lineHeight
            }, set: function (t) {
                this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "leading", {
            get: function () {
                return this._leading
            }, set: function (t) {
                this._leading !== t && (this._leading = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "lineJoin", {
            get: function () {
                return this._lineJoin
            }, set: function (t) {
                this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "miterLimit", {
            get: function () {
                return this._miterLimit
            }, set: function (t) {
                this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "padding", {
            get: function () {
                return this._padding
            }, set: function (t) {
                this._padding !== t && (this._padding = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "stroke", {
            get: function () {
                return this._stroke
            }, set: function (t) {
                var e = o(t);
                this._stroke !== e && (this._stroke = e, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "strokeThickness", {
            get: function () {
                return this._strokeThickness
            }, set: function (t) {
                this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "textBaseline", {
            get: function () {
                return this._textBaseline
            }, set: function (t) {
                this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "trim", {
            get: function () {
                return this._trim
            }, set: function (t) {
                this._trim !== t && (this._trim = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "whiteSpace", {
            get: function () {
                return this._whiteSpace
            }, set: function (t) {
                this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "wordWrap", {
            get: function () {
                return this._wordWrap
            }, set: function (t) {
                this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "wordWrapWidth", {
            get: function () {
                return this._wordWrapWidth
            }, set: function (t) {
                this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
            }, enumerable: !1, configurable: !0
        }), t.prototype.toFontString = function () {
            var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e = this.fontFamily;
            Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
            for (var r = e.length - 1; r >= 0; r--) {
                var n = e[r].trim();
                !/([\"\'])[^\'\"]+\1/.test(n) && m.indexOf(n) < 0 && (n = '"' + n + '"'), e[r] = n
            }
            return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
        }, t
    }(), g = function () {
        function t(t, e, r, n, i, o, s, a, u) {
            this.text = t, this.style = e, this.width = r, this.height = n, this.lines = i, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = u
        }

        return t.measureText = function (e, r, n, i) {
            void 0 === i && (i = t._canvas), n = void 0 === n || null === n ? r.wordWrap : n;
            var o = r.toFontString(), s = t.measureFont(o);
            0 === s.fontSize && (s.fontSize = r.fontSize, s.ascent = r.fontSize);
            var a = i.getContext("2d");
            a.font = o;
            for (var u = n ? t.wordWrap(e, r, i) : e, h = u.split(/(?:\r\n|\r|\n)/), c = new Array(h.length), l = 0, f = 0; f < h.length; f++) {
                var d = a.measureText(h[f]).width + (h[f].length - 1) * r.letterSpacing;
                c[f] = d, l = Math.max(l, d)
            }
            var p = l + r.strokeThickness;
            r.dropShadow && (p += r.dropShadowDistance);
            var _ = r.lineHeight || s.fontSize + r.strokeThickness,
                m = Math.max(_, s.fontSize + r.strokeThickness) + (h.length - 1) * (_ + r.leading);
            return r.dropShadow && (m += r.dropShadowDistance), new t(e, r, p, m, h, c, _ + r.leading, l, s)
        }, t.wordWrap = function (e, r, n) {
            void 0 === n && (n = t._canvas);
            for (var i = n.getContext("2d"), o = 0, s = "", a = "", u = Object.create(null), h = r.letterSpacing, c = r.whiteSpace, l = t.collapseSpaces(c), f = t.collapseNewlines(c), d = !l, p = r.wordWrapWidth + h, _ = t.tokenize(e), m = 0; m < _.length; m++) {
                var v = _[m];
                if (t.isNewline(v)) {
                    if (!f) {
                        a += t.addLine(s), d = !l, s = "", o = 0;
                        continue
                    }
                    v = " "
                }
                if (l) {
                    var g = t.isBreakingSpace(v), y = t.isBreakingSpace(s[s.length - 1]);
                    if (g && y) continue
                }
                var T = t.getFromCache(v, h, u, i);
                if (T > p) if ("" !== s && (a += t.addLine(s), s = "", o = 0), t.canBreakWords(v, r.breakWords)) for (var E = t.wordWrapSplit(v), b = 0; b < E.length; b++) {
                    for (var x = E[b], O = 1; E[b + O];) {
                        var R = E[b + O], A = x[x.length - 1];
                        if (t.canBreakChars(A, R, v, b, r.breakWords)) break;
                        x += R, O++
                    }
                    b += x.length - 1;
                    var S = t.getFromCache(x, h, u, i);
                    S + o > p && (a += t.addLine(s), d = !1, s = "", o = 0), s += x, o += S
                } else {
                    s.length > 0 && (a += t.addLine(s), s = "", o = 0);
                    var I = m === _.length - 1;
                    a += t.addLine(v, !I), d = !1, s = "", o = 0
                } else T + o > p && (d = !1, a += t.addLine(s), s = "", o = 0), (s.length > 0 || !t.isBreakingSpace(v) || d) && (s += v, o += T)
            }
            return a += t.addLine(s, !1)
        }, t.addLine = function (e, r) {
            return void 0 === r && (r = !0), e = t.trimRight(e), e = r ? e + "\n" : e
        }, t.getFromCache = function (t, e, r, n) {
            var i = r[t];
            if ("number" != typeof i) {
                var o = t.length * e;
                i = n.measureText(t).width + o, r[t] = i
            }
            return i
        }, t.collapseSpaces = function (t) {
            return "normal" === t || "pre-line" === t
        }, t.collapseNewlines = function (t) {
            return "normal" === t
        }, t.trimRight = function (e) {
            if ("string" != typeof e) return "";
            for (var r = e.length - 1; r >= 0; r--) {
                var n = e[r];
                if (!t.isBreakingSpace(n)) break;
                e = e.slice(0, -1)
            }
            return e
        }, t.isNewline = function (e) {
            return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
        }, t.isBreakingSpace = function (e, r) {
            return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
        }, t.tokenize = function (e) {
            var r = [], n = "";
            if ("string" != typeof e) return r;
            for (var i = 0; i < e.length; i++) {
                var o = e[i], s = e[i + 1];
                t.isBreakingSpace(o, s) || t.isNewline(o) ? ("" !== n && (r.push(n), n = ""), r.push(o)) : n += o
            }
            return "" !== n && r.push(n), r
        }, t.canBreakWords = function (t, e) {
            return e
        }, t.canBreakChars = function (t, e, r, n, i) {
            return !0
        }, t.wordWrapSplit = function (t) {
            return t.split("")
        }, t.measureFont = function (e) {
            if (t._fonts[e]) return t._fonts[e];
            var r = {ascent: 0, descent: 0, fontSize: 0}, n = t._canvas, i = t._context;
            i.font = e;
            var o = t.METRICS_STRING + t.BASELINE_SYMBOL, s = Math.ceil(i.measureText(o).width),
                a = Math.ceil(i.measureText(t.BASELINE_SYMBOL).width), u = Math.ceil(t.HEIGHT_MULTIPLIER * a);
            a = a * t.BASELINE_MULTIPLIER | 0, n.width = s, n.height = u, i.fillStyle = "#f00", i.fillRect(0, 0, s, u), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(o, 0, a);
            var h = i.getImageData(0, 0, s, u).data, c = h.length, l = 4 * s, f = 0, d = 0, p = !1;
            for (f = 0; f < a; ++f) {
                for (var _ = 0; _ < l; _ += 4) if (255 !== h[d + _]) {
                    p = !0;
                    break
                }
                if (p) break;
                d += l
            }
            for (r.ascent = a - f, d = c - l, p = !1, f = u; f > a; --f) {
                for (var _ = 0; _ < l; _ += 4) if (255 !== h[d + _]) {
                    p = !0;
                    break
                }
                if (p) break;
                d -= l
            }
            return r.descent = f - a, r.fontSize = r.ascent + r.descent, t._fonts[e] = r, r
        }, t.clearMetrics = function (e) {
            void 0 === e && (e = ""), e ? delete t._fonts[e] : t._fonts = {}
        }, t
    }(), y = function () {
        try {
            var t = new OffscreenCanvas(0, 0), e = t.getContext("2d");
            return e && e.measureText ? t : document.createElement("canvas")
        } catch (t) {
            return document.createElement("canvas")
        }
    }();
    y.width = y.height = 10, g._canvas = y, g._context = y.getContext("2d"), g._fonts = {}, g.METRICS_STRING = "|ÉqÅ", g.BASELINE_SYMBOL = "M", g.BASELINE_MULTIPLIER = 1.4, g.HEIGHT_MULTIPLIER = 2, g._newlines = [10, 13], g._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
    var T = {texture: !0, children: !1, baseTexture: !0}, E = function (t) {
        function e(e, r, n) {
            var i = this, o = !1;
            n || (n = document.createElement("canvas"), o = !0), n.width = 3, n.height = 3;
            var s = c._3.from(n);
            return s.orig = new f.j, s.trim = new f.j, i = t.call(this, s) || this, i._ownCanvas = o, i.canvas = n, i.context = i.canvas.getContext("2d"), i._resolution = l.b.RESOLUTION, i._autoResolution = !0, i._text = null, i._style = null, i._styleListener = null, i._font = "", i.text = e, i.style = r, i.localStyleID = -1, i
        }

        return n(e, t), e.prototype.updateText = function (t) {
            var r = this._style;
            if (this.localStyleID !== r.styleID && (this.dirty = !0, this.localStyleID = r.styleID), this.dirty || !t) {
                this._font = this._style.toFontString();
                var n = this.context,
                    i = g.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), o = i.width,
                    s = i.height, a = i.lines, u = i.lineHeight, h = i.lineWidths, c = i.maxLineWidth,
                    l = i.fontProperties;
                this.canvas.width = Math.ceil(Math.ceil(Math.max(1, o) + 2 * r.padding) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, s) + 2 * r.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = r.strokeThickness, n.textBaseline = r.textBaseline, n.lineJoin = r.lineJoin, n.miterLimit = r.miterLimit;
                for (var f, p, _ = r.dropShadow ? 2 : 1, m = 0; m < _; ++m) {
                    var v = r.dropShadow && 0 === m, y = v ? Math.ceil(Math.max(1, s) + 2 * r.padding) : 0,
                        T = y * this._resolution;
                    if (v) {
                        n.fillStyle = "black", n.strokeStyle = "black";
                        var E = r.dropShadowColor,
                            b = Object(d.hex2rgb)("number" == typeof E ? E : Object(d.string2hex)(E));
                        n.shadowColor = "rgba(" + 255 * b[0] + "," + 255 * b[1] + "," + 255 * b[2] + "," + r.dropShadowAlpha + ")", n.shadowBlur = r.dropShadowBlur, n.shadowOffsetX = Math.cos(r.dropShadowAngle) * r.dropShadowDistance, n.shadowOffsetY = Math.sin(r.dropShadowAngle) * r.dropShadowDistance + T
                    } else n.fillStyle = this._generateFillStyle(r, a, i), n.strokeStyle = r.stroke, n.shadowColor = "black", n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
                    var x = (u - l.fontSize) / 2;
                    (!e.nextLineHeightBehavior || u - l.fontSize < 0) && (x = 0);
                    for (var O = 0; O < a.length; O++) f = r.strokeThickness / 2, p = r.strokeThickness / 2 + O * u + l.ascent + x, "right" === r.align ? f += c - h[O] : "center" === r.align && (f += (c - h[O]) / 2), r.stroke && r.strokeThickness && this.drawLetterSpacing(a[O], f + r.padding, p + r.padding - y, !0), r.fill && this.drawLetterSpacing(a[O], f + r.padding, p + r.padding - y)
                }
                this.updateTexture()
            }
        }, e.prototype.drawLetterSpacing = function (t, e, r, n) {
            void 0 === n && (n = !1);
            var i = this._style, o = i.letterSpacing;
            if (0 === o) return void (n ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r));
            for (var s = e, a = Array.from ? Array.from(t) : t.split(""), u = this.context.measureText(t).width, h = 0, c = 0; c < a.length; ++c) {
                var l = a[c];
                n ? this.context.strokeText(l, s, r) : this.context.fillText(l, s, r), h = this.context.measureText(t.substring(c + 1)).width, s += u - h + o, u = h
            }
        }, e.prototype.updateTexture = function () {
            var t = this.canvas;
            if (this._style.trim) {
                var e = Object(d.trimCanvas)(t);
                e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
            }
            var r = this._texture, n = this._style, i = n.trim ? 0 : n.padding, o = r.baseTexture;
            r.trim.width = r._frame.width = t.width / this._resolution, r.trim.height = r._frame.height = t.height / this._resolution, r.trim.x = -i, r.trim.y = -i, r.orig.width = r._frame.width - 2 * i, r.orig.height = r._frame.height - 2 * i, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), r.updateUvs(), this._recursivePostUpdateTransform(), this.dirty = !1
        }, e.prototype._render = function (e) {
            this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e)
        }, e.prototype.getLocalBounds = function (e) {
            return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
        }, e.prototype._calculateBounds = function () {
            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
        }, e.prototype._generateFillStyle = function (t, e, r) {
            var n = t.fill;
            if (!Array.isArray(n)) return n;
            if (1 === n.length) return n[0];
            var i, o = t.dropShadow ? t.dropShadowDistance : 0, s = t.padding || 0,
                a = this.canvas.width / this._resolution - o - 2 * s,
                h = this.canvas.height / this._resolution - o - 2 * s, c = n.slice(), l = t.fillGradientStops.slice();
            if (!l.length) for (var f = c.length + 1, d = 1; d < f; ++d) l.push(d / f);
            if (c.unshift(n[0]), l.unshift(0), c.push(n[n.length - 1]), l.push(1), t.fillGradientType === u.LINEAR_VERTICAL) {
                i = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
                for (var p = r.fontProperties.fontSize + t.strokeThickness, d = 0; d < e.length; d++) {
                    var _ = r.lineHeight * (d - 1) + p, m = r.lineHeight * d, v = m;
                    d > 0 && _ > m && (v = (m + _) / 2);
                    var g = m + p, y = r.lineHeight * (d + 1), T = g;
                    d + 1 < e.length && y < g && (T = (g + y) / 2);
                    for (var E = (T - v) / h, b = 0; b < c.length; b++) {
                        var x = 0;
                        x = "number" == typeof l[b] ? l[b] : b / c.length;
                        var O = Math.min(1, Math.max(0, v / h + x * E));
                        O = Number(O.toFixed(5)), i.addColorStop(O, c[b])
                    }
                }
            } else {
                i = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
                for (var R = c.length + 1, A = 1, d = 0; d < c.length; d++) {
                    var S = void 0;
                    S = "number" == typeof l[d] ? l[d] : A / R, i.addColorStop(S, c[d]), A++
                }
            }
            return i
        }, e.prototype.destroy = function (e) {
            "boolean" == typeof e && (e = {children: e}), e = Object.assign({}, T, e), t.prototype.destroy.call(this, e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
        }, Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
            }, set: function (t) {
                this.updateText(!0);
                var e = Object(d.sign)(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
            }, set: function (t) {
                this.updateText(!0);
                var e = Object(d.sign)(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "style", {
            get: function () {
                return this._style
            }, set: function (t) {
                t = t || {}, this._style = t instanceof v ? t : new v(t), this.localStyleID = -1, this.dirty = !0
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            }, set: function (t) {
                t = String(null === t || void 0 === t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "resolution", {
            get: function () {
                return this._resolution
            }, set: function (t) {
                this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), e.nextLineHeightBehavior = !1, e
    }(h.a)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        c(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return p
    }), r.d(e, "b", function () {
        return l
    }), r.d(e, "c", function () {
        return g
    }), r.d(e, "d", function () {
        return v
    });
    var i = r(0), o = r(2), s = r(5), a = r(4), u = r(3), h = r(1), c = function (t, e) {
            return (c = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, l = function () {
            function t(t, e) {
                this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
            }

            return t.prototype.update = function (t) {
                if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                    var e = this.uvBuffer.data;
                    this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
                }
            }, t
        }(), f = new o.g, d = new o.h, p = function (t) {
            function e(e, r, n, o) {
                void 0 === o && (o = s.f.TRIANGLES);
                var a = t.call(this) || this;
                return a.geometry = e, e.refCount++, a.shader = r, a.state = n || i.Z.for2d(), a.drawMode = o, a.start = 0, a.size = 0, a.uvs = null, a.indices = null, a.vertexData = new Float32Array(1), a.vertexDirty = -1, a._transformID = -1, a._roundPixels = u.b.ROUND_PIXELS, a.batchUvs = null, a
            }

            return n(e, t), Object.defineProperty(e.prototype, "uvBuffer", {
                get: function () {
                    return this.geometry.buffers[1]
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "verticesBuffer", {
                get: function () {
                    return this.geometry.buffers[0]
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "material", {
                get: function () {
                    return this.shader
                }, set: function (t) {
                    this.shader = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "blendMode", {
                get: function () {
                    return this.state.blendMode
                }, set: function (t) {
                    this.state.blendMode = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "roundPixels", {
                get: function () {
                    return this._roundPixels
                }, set: function (t) {
                    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "tint", {
                get: function () {
                    return "tint" in this.shader ? this.shader.tint : null
                }, set: function (t) {
                    this.shader.tint = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "texture", {
                get: function () {
                    return "texture" in this.shader ? this.shader.texture : null
                }, set: function (t) {
                    this.shader.texture = t
                }, enumerable: !1, configurable: !0
            }), e.prototype._render = function (t) {
                var r = this.geometry.buffers[0].data;
                this.shader.batchable && this.drawMode === s.f.TRIANGLES && r.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
            }, e.prototype._renderDefault = function (t) {
                var e = this.shader;
                e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
            }, e.prototype._renderToBatch = function (t) {
                var e = this.geometry, r = this.shader;
                r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = r._tintRGB, this._texture = r.texture;
                var n = this.material.pluginName;
                t.batch.setObjectRenderer(t.plugins[n]), t.plugins[n].render(this)
            }, e.prototype.calculateVertices = function () {
                var t = this.geometry, e = t.buffers[0], r = e.data, n = e._updateID;
                if (n !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID, this.vertexData.length !== r.length && (this.vertexData = new Float32Array(r.length));
                    for (var i = this.transform.worldTransform, o = i.a, s = i.b, a = i.c, h = i.d, c = i.tx, l = i.ty, f = this.vertexData, d = 0; d < f.length / 2; d++) {
                        var p = r[2 * d], _ = r[2 * d + 1];
                        f[2 * d] = o * p + a * _ + c, f[2 * d + 1] = s * p + h * _ + l
                    }
                    if (this._roundPixels) for (var m = u.b.RESOLUTION, d = 0; d < f.length; ++d) f[d] = Math.round((f[d] * m | 0) / m);
                    this.vertexDirty = n
                }
            }, e.prototype.calculateUvs = function () {
                var t = this.geometry.buffers[1], e = this.shader;
                e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new l(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
            }, e.prototype._calculateBounds = function () {
                this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
            }, e.prototype.containsPoint = function (t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, f);
                for (var e = this.geometry.getBuffer("aVertexPosition").data, r = d.points, n = this.geometry.getIndex().data, i = n.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < i; s += o) {
                    var a = 2 * n[s], u = 2 * n[s + 1], h = 2 * n[s + 2];
                    if (r[0] = e[a], r[1] = e[a + 1], r[2] = e[u], r[3] = e[u + 1], r[4] = e[h], r[5] = e[h + 1], d.contains(f.x, f.y)) return !0
                }
                return !1
            }, e.prototype.destroy = function (e) {
                t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
            }, e.BATCHABLE_SIZE = 100, e
        }(a.b),
        _ = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
        m = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        v = function (t) {
            function e(e, r) {
                var n = this,
                    s = {uSampler: e, alpha: 1, uTextureMatrix: o.d.IDENTITY, uColor: new Float32Array([1, 1, 1, 1])};
                return r = Object.assign({
                    tint: 16777215,
                    alpha: 1,
                    pluginName: "batch"
                }, r), r.uniforms && Object.assign(s, r.uniforms), n = t.call(this, r.program || i.L.from(m, _), s) || this, n._colorDirty = !1, n.uvMatrix = new i._5(e), n.batchable = void 0 === r.program, n.pluginName = r.pluginName, n.tint = r.tint, n.alpha = r.alpha, n
            }

            return n(e, t), Object.defineProperty(e.prototype, "texture", {
                get: function () {
                    return this.uniforms.uSampler
                }, set: function (t) {
                    this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "alpha", {
                get: function () {
                    return this._alpha
                }, set: function (t) {
                    t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "tint", {
                get: function () {
                    return this._tint
                }, set: function (t) {
                    t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
                }, enumerable: !1, configurable: !0
            }), e.prototype.update = function () {
                if (this._colorDirty) {
                    this._colorDirty = !1;
                    var t = this.texture.baseTexture;
                    Object(h.premultiplyTintToRgba)(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
                }
                this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
            }, e
        }(i.W), g = function (t) {
            function e(e, r, n) {
                var o = t.call(this) || this, a = new i.p(e), u = new i.p(r, !0), h = new i.p(n, !0, !0);
                return o.addAttribute("aVertexPosition", a, 2, !1, s.r.FLOAT).addAttribute("aTextureCoord", u, 2, !1, s.r.FLOAT).addIndex(h), o._updateId = -1, o
            }

            return n(e, t), Object.defineProperty(e.prototype, "vertexDirtyId", {
                get: function () {
                    return this.buffers[0]._updateID
                }, enumerable: !1, configurable: !0
            }), e
        }(i.C)
}, function (t, e, r) {
    t.exports = r.p + "img/p6_01.jpg"
}, function (t, e, r) {
    "use strict";

    function n(t) {
        return function (e) {
            return e.test(t)
        }
    }

    function i(t) {
        var e = {userAgent: "", platform: "", maxTouchPoints: 0};
        t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
            userAgent: t.userAgent,
            platform: t.platform,
            maxTouchPoints: t.maxTouchPoints || 0
        }) : e = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
        var r = e.userAgent, i = r.split("[FBAN");
        void 0 !== i[1] && (r = i[0]), i = r.split("Twitter"), void 0 !== i[1] && (r = i[0]);
        var E = n(r), b = {
            apple: {
                phone: E(o) && !E(d),
                ipod: E(s),
                tablet: !E(o) && (E(a) || T(e)) && !E(d),
                universal: E(u),
                device: (E(o) || E(s) || E(a) || E(u) || T(e)) && !E(d)
            },
            amazon: {phone: E(l), tablet: !E(l) && E(f), device: E(l) || E(f)},
            android: {
                phone: !E(d) && E(l) || !E(d) && E(h),
                tablet: !E(d) && !E(l) && !E(h) && (E(f) || E(c)),
                device: !E(d) && (E(l) || E(f) || E(h) || E(c)) || E(/\bokhttp\b/i)
            },
            windows: {phone: E(d), tablet: E(p), device: E(d) || E(p)},
            other: {
                blackberry: E(_),
                blackberry10: E(m),
                opera: E(v),
                firefox: E(y),
                chrome: E(g),
                device: E(_) || E(m) || E(v) || E(y) || E(g)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
        return b.any = b.apple.device || b.android.device || b.windows.device || b.other.device, b.phone = b.apple.phone || b.android.phone || b.windows.phone, b.tablet = b.apple.tablet || b.android.tablet || b.windows.tablet, b
    }

    e.a = i;
    var o = /iPhone/i, s = /iPod/i, a = /iPad/i, u = /\biOS-universal(?:.+)Mac\b/i, h = /\bAndroid(?:.+)Mobile\b/i,
        c = /Android/i, l = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, f = /Silk/i, d = /Windows Phone/i,
        p = /\bWindows(?:.+)ARM\b/i, _ = /BlackBerry/i, m = /BB10/i, v = /Opera Mini/i,
        g = /\b(CriOS|Chrome)(?:.+)Mobile/i, y = /Mobile(?:.+)Firefox\b/i, T = function (t) {
            return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
        }
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return l
    }), r.d(e, "b", function () {
        return o
    });
    var n = r(4), i = r(1), o = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: null,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0,
        renderId: -1
    };
    n.c.mixin(o);
    var s = 100, a = 0, u = 0, h = 2, c = 2, l = function () {
        function t(t) {
            this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (i.isMobile.tablet || i.isMobile.phone) && this.createTouchHook();
            var e = document.createElement("div");
            e.style.width = s + "px", e.style.height = s + "px", e.style.position = "absolute", e.style.top = a + "px", e.style.left = u + "px", e.style.zIndex = h.toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), self.addEventListener("keydown", this._onKeyDown, !1)
        }

        return Object.defineProperty(t.prototype, "isActive", {
            get: function () {
                return this._isActive
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "isMobileAccessibility", {
            get: function () {
                return this._isMobileAccessibility
            }, enumerable: !1, configurable: !0
        }), t.prototype.createTouchHook = function () {
            var t = this, e = document.createElement("button");
            e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = c.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", function () {
                t._isMobileAccessibility = !0, t.activate(), t.destroyTouchHook()
            }), document.body.appendChild(e), this._hookDiv = e
        }, t.prototype.destroyTouchHook = function () {
            this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
        }, t.prototype.activate = function () {
            var t;
            this._isActive || (this._isActive = !0, self.document.addEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), null === (t = this.renderer.view.parentNode) || void 0 === t || t.appendChild(this.div))
        }, t.prototype.deactivate = function () {
            var t;
            this._isActive && !this._isMobileAccessibility && (this._isActive = !1, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), null === (t = this.div.parentNode) || void 0 === t || t.removeChild(this.div))
        }, t.prototype.updateAccessibleObjects = function (t) {
            if (t.visible && t.accessibleChildren) {
                t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                for (var e = t.children, r = 0; r < e.length; r++) this.updateAccessibleObjects(e[r])
            }
        }, t.prototype.update = function () {
            var t = performance.now();
            if (!(i.isMobile.android.device && t < this.androidUpdateCount) && (this.androidUpdateCount = t + this.androidUpdateFrequency, this.renderer.renderingToScreen)) {
                this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                var e = this.renderer.view.getBoundingClientRect(), r = e.left, n = e.top, o = e.width, s = e.height,
                    a = this.renderer, u = a.width, h = a.height, c = a.resolution, l = o / u * c, f = s / h * c,
                    d = this.div;
                d.style.left = r + "px", d.style.top = n + "px", d.style.width = u + "px", d.style.height = h + "px";
                for (var p = 0; p < this.children.length; p++) {
                    var _ = this.children[p];
                    if (_.renderId !== this.renderId) _._accessibleActive = !1, Object(i.removeItems)(this.children, p, 1), this.div.removeChild(_._accessibleDiv), this.pool.push(_._accessibleDiv), _._accessibleDiv = null, p--; else {
                        d = _._accessibleDiv;
                        var m = _.hitArea, v = _.worldTransform;
                        _.hitArea ? (d.style.left = (v.tx + m.x * v.a) * l + "px", d.style.top = (v.ty + m.y * v.d) * f + "px", d.style.width = m.width * v.a * l + "px", d.style.height = m.height * v.d * f + "px") : (m = _.getBounds(), this.capHitArea(m), d.style.left = m.x * l + "px", d.style.top = m.y * f + "px", d.style.width = m.width * l + "px", d.style.height = m.height * f + "px", d.title !== _.accessibleTitle && null !== _.accessibleTitle && (d.title = _.accessibleTitle), d.getAttribute("aria-label") !== _.accessibleHint && null !== _.accessibleHint && d.setAttribute("aria-label", _.accessibleHint)), _.accessibleTitle === d.title && _.tabIndex === d.tabIndex || (d.title = _.accessibleTitle, d.tabIndex = _.tabIndex, this.debug && this.updateDebugHTML(d))
                    }
                }
                this.renderId++
            }
        }, t.prototype.updateDebugHTML = function (t) {
            t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex
        }, t.prototype.capHitArea = function (t) {
            t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
            var e = this.renderer, r = e.width, n = e.height;
            t.x + t.width > r && (t.width = r - t.x), t.y + t.height > n && (t.height = n - t.y)
        }, t.prototype.addChild = function (t) {
            var e = this.pool.pop();
            e || (e = document.createElement("button"), e.style.width = s + "px", e.style.height = s + "px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = h.toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
        }, t.prototype._onClick = function (t) {
            var e = this.renderer.plugins.interaction, r = t.target.displayObject, n = e.eventData;
            e.dispatchEvent(r, "click", n), e.dispatchEvent(r, "pointertap", n), e.dispatchEvent(r, "tap", n)
        }, t.prototype._onFocus = function (t) {
            t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive");
            var e = this.renderer.plugins.interaction, r = t.target.displayObject, n = e.eventData;
            e.dispatchEvent(r, "mouseover", n)
        }, t.prototype._onFocusOut = function (t) {
            t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite");
            var e = this.renderer.plugins.interaction, r = t.target.displayObject, n = e.eventData;
            e.dispatchEvent(r, "mouseout", n)
        }, t.prototype._onKeyDown = function (t) {
            9 === t.keyCode && this.activate()
        }, t.prototype._onMouseMove = function (t) {
            0 === t.movementX && 0 === t.movementY || this.deactivate()
        }, t.prototype.destroy = function () {
            this.destroyTouchHook(), this.div = null, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
        }, t
    }()
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        h(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return u
    }), r.d(e, "b", function () {
        return c
    }), r.d(e, "c", function () {
        return m
    }), r.d(e, "d", function () {
        return l
    }), r.d(e, "e", function () {
        return d
    });
    var i = r(2), o = r(8), s = r(4), a = r(1), u = function () {
        function t() {
            this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0, this.global = new i.g, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
        }

        return Object.defineProperty(t.prototype, "pointerId", {
            get: function () {
                return this.identifier
            }, enumerable: !1, configurable: !0
        }), t.prototype.getLocalPosition = function (t, e, r) {
            return t.worldTransform.applyInverse(r || this.global, e)
        }, t.prototype.copyEvent = function (t) {
            "isPrimary" in t && t.isPrimary && (this.isPrimary = !0), this.button = "button" in t && t.button;
            var e = "buttons" in t && t.buttons;
            this.buttons = Number.isInteger(e) ? e : "which" in t && t.which, this.width = "width" in t && t.width, this.height = "height" in t && t.height, this.tiltX = "tiltX" in t && t.tiltX, this.tiltY = "tiltY" in t && t.tiltY, this.pointerType = "pointerType" in t && t.pointerType, this.pressure = "pressure" in t && t.pressure, this.rotationAngle = "rotationAngle" in t && t.rotationAngle, this.twist = "twist" in t && t.twist || 0, this.tangentialPressure = "tangentialPressure" in t && t.tangentialPressure || 0
        }, t.prototype.reset = function () {
            this.isPrimary = !1
        }, t
    }(), h = function (t, e) {
        return (h = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, c = function () {
        function t() {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
        }

        return t.prototype.stopPropagation = function () {
            this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget
        }, t.prototype.reset = function () {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null
        }, t
    }(), l = function () {
        function t(e) {
            this._pointerId = e, this._flags = t.FLAGS.NONE
        }

        return t.prototype._doSet = function (t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }, Object.defineProperty(t.prototype, "pointerId", {
            get: function () {
                return this._pointerId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "flags", {
            get: function () {
                return this._flags
            }, set: function (t) {
                this._flags = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "none", {
            get: function () {
                return this._flags === t.FLAGS.NONE
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "over", {
            get: function () {
                return 0 != (this._flags & t.FLAGS.OVER)
            }, set: function (e) {
                this._doSet(t.FLAGS.OVER, e)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "rightDown", {
            get: function () {
                return 0 != (this._flags & t.FLAGS.RIGHT_DOWN)
            }, set: function (e) {
                this._doSet(t.FLAGS.RIGHT_DOWN, e)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "leftDown", {
            get: function () {
                return 0 != (this._flags & t.FLAGS.LEFT_DOWN)
            }, set: function (e) {
                this._doSet(t.FLAGS.LEFT_DOWN, e)
            }, enumerable: !1, configurable: !0
        }), t.FLAGS = Object.freeze({NONE: 0, OVER: 1, LEFT_DOWN: 2, RIGHT_DOWN: 4}), t
    }(), f = function () {
        function t() {
            this._tempPoint = new i.g
        }

        return t.prototype.recursiveFindHit = function (t, e, r, n, i) {
            if (!e || !e.visible) return !1;
            var o = t.data.global;
            i = e.interactive || i;
            var s = !1, a = i, u = !0;
            if (e.hitArea ? (n && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (n = !1, u = !1)), a = !1) : e._mask && n && (e._mask.containsPoint && e._mask.containsPoint(o) || (n = !1)), u && e.interactiveChildren && e.children) for (var h = e.children, c = h.length - 1; c >= 0; c--) {
                var l = h[c], f = this.recursiveFindHit(t, l, r, n, a);
                if (f) {
                    if (!l.parent) continue;
                    a = !1, f && (t.target && (n = !1), s = !0)
                }
            }
            return i && (n && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s
        }, t.prototype.findHit = function (t, e, r, n) {
            this.recursiveFindHit(t, e, r, n, !1)
        }, t
    }(), d = {
        interactive: !1, interactiveChildren: !0, hitArea: null, get buttonMode() {
            return "pointer" === this.cursor
        }, set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        }, cursor: null, get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
        }, _trackedPointers: void 0
    };
    s.c.mixin(d);
    var p = 1, _ = {target: null, data: {global: null}}, m = function (t) {
        function e(e, r) {
            var n = t.call(this) || this;
            return r = r || {}, n.renderer = e, n.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault, n.interactionFrequency = r.interactionFrequency || 10, n.mouse = new u, n.mouse.identifier = p, n.mouse.global.set(-999999), n.activeInteractionData = {}, n.activeInteractionData[p] = n.mouse, n.interactionDataPool = [], n.eventData = new c, n.interactionDOMElement = null, n.moveWhenInside = !1, n.eventsAdded = !1, n.tickerAdded = !1, n.mouseOverRenderer = !("PointerEvent" in self), n.supportsTouchEvents = "ontouchstart" in self, n.supportsPointerEvents = !!self.PointerEvent, n.onPointerUp = n.onPointerUp.bind(n), n.processPointerUp = n.processPointerUp.bind(n), n.onPointerCancel = n.onPointerCancel.bind(n), n.processPointerCancel = n.processPointerCancel.bind(n), n.onPointerDown = n.onPointerDown.bind(n), n.processPointerDown = n.processPointerDown.bind(n), n.onPointerMove = n.onPointerMove.bind(n), n.processPointerMove = n.processPointerMove.bind(n), n.onPointerOut = n.onPointerOut.bind(n), n.processPointerOverOut = n.processPointerOverOut.bind(n), n.onPointerOver = n.onPointerOver.bind(n), n.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            }, n.currentCursorMode = null, n.cursor = null, n.resolution = 1, n.delayedEvents = [], n.search = new f, n._tempDisplayObject = new s.d, n._eventListenerOptions = {
                capture: !0,
                passive: !1
            }, n._useSystemTicker = void 0 === r.useSystemTicker || r.useSystemTicker, n.setTargetElement(n.renderer.view, n.renderer.resolution), n
        }

        return n(e, t), Object.defineProperty(e.prototype, "useSystemTicker", {
            get: function () {
                return this._useSystemTicker
            }, set: function (t) {
                this._useSystemTicker = t, t ? this.addTickerListener() : this.removeTickerListener()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "lastObjectRendered", {
            get: function () {
                return this.renderer._lastObjectRendered || this._tempDisplayObject
            }, enumerable: !1, configurable: !0
        }), e.prototype.hitTest = function (t, e) {
            return _.target = null, _.data.global = t, e || (e = this.lastObjectRendered), this.processInteractive(_, e, null, !0), _.target
        }, e.prototype.setTargetElement = function (t, e) {
            void 0 === e && (e = 1), this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents(), this.addTickerListener()
        }, e.prototype.addTickerListener = function () {
            !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (o.a.system.add(this.tickerUpdate, this, o.c.INTERACTION), this.tickerAdded = !0)
        }, e.prototype.removeTickerListener = function () {
            this.tickerAdded && (o.a.system.remove(this.tickerUpdate, this), this.tickerAdded = !1)
        }, e.prototype.addEvents = function () {
            if (!this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none"), this.supportsPointerEvents ? (self.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.eventsAdded = !0
            }
        }, e.prototype.removeEvents = function () {
            if (this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (self.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.interactionDOMElement = null, this.eventsAdded = !1
            }
        }, e.prototype.tickerUpdate = function (t) {
            this._deltaTime += t, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update())
        }, e.prototype.update = function () {
            if (this.interactionDOMElement) {
                if (this._didMove) return void (this._didMove = !1);
                this.cursor = null;
                for (var t in this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(t)) {
                    var e = this.activeInteractionData[t];
                    if (e.originalEvent && "touch" !== e.pointerType) {
                        var r = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
                        this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, !0)
                    }
                }
                this.setCursorMode(this.cursor)
            }
        }, e.prototype.setCursorMode = function (t) {
            t = t || "default";
            var e = !0;
            if (self.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas && (e = !1), this.currentCursorMode !== t) {
                this.currentCursorMode = t;
                var r = this.cursorStyles[t];
                if (r) switch (typeof r) {
                    case"string":
                        e && (this.interactionDOMElement.style.cursor = r);
                        break;
                    case"function":
                        r(t);
                        break;
                    case"object":
                        e && Object.assign(this.interactionDOMElement.style, r)
                } else e && "string" == typeof t && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.interactionDOMElement.style.cursor = t)
            }
        }, e.prototype.dispatchEvent = function (t, e, r) {
            r.stopPropagationHint && t !== r.stopsPropagatingAt || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
        }, e.prototype.delayDispatchEvent = function (t, e, r) {
            this.delayedEvents.push({displayObject: t, eventString: e, eventData: r})
        }, e.prototype.mapPositionToPoint = function (t, e, r) {
            var n;
            n = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                x: 0,
                y: 0,
                width: this.interactionDOMElement.width,
                height: this.interactionDOMElement.height,
                left: 0,
                top: 0
            };
            var i = 1 / this.resolution;
            t.x = (e - n.left) * (this.interactionDOMElement.width / n.width) * i, t.y = (r - n.top) * (this.interactionDOMElement.height / n.height) * i
        }, e.prototype.processInteractive = function (t, e, r, n) {
            var i = this.search.findHit(t, e, r, n), o = this.delayedEvents;
            if (!o.length) return i;
            t.stopPropagationHint = !1;
            var s = o.length;
            this.delayedEvents = [];
            for (var a = 0; a < s; a++) {
                var u = o[a], h = u.displayObject, c = u.eventString, l = u.eventData;
                l.stopsPropagatingAt === h && (l.stopPropagationHint = !0), this.dispatchEvent(h, c, l)
            }
            return i
        }, e.prototype.onPointerDown = function (t) {
            console.log('111')
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                if (this.autoPreventDefault && e[0].isNormalized) {
                    (t.cancelable || !("cancelable" in t)) && t.preventDefault()
                }
                for (var r = e.length, n = 0; n < r; n++) {
                    var i = e[n], o = this.getInteractionDataForPointerId(i),
                        s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                    if (s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === i.pointerType) this.emit("touchstart", s); else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                        var a = 2 === i.button;
                        this.emit(a ? "rightdown" : "mousedown", this.eventData)
                    }
                }
            }
        }, e.prototype.processPointerDown = function (t, e, r) {
            var n = t.data, i = t.data.identifier;
            if (r) if (e.trackedPointers[i] || (e.trackedPointers[i] = new l(i)), this.dispatchEvent(e, "pointerdown", t), "touch" === n.pointerType) this.dispatchEvent(e, "touchstart", t); else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                var o = 2 === n.button;
                o ? e.trackedPointers[i].rightDown = !0 : e.trackedPointers[i].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
            }
        }, e.prototype.onPointerComplete = function (t, e, r) {
            for (var n = this.normalizeToPointerData(t), i = n.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < i; s++) {
                var a = n[s], u = this.getInteractionDataForPointerId(a),
                    h = this.configureInteractionEventForDOMEvent(this.eventData, a, u);
                if (h.data.originalEvent = t, this.processInteractive(h, this.lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, h), "mouse" === a.pointerType || "pen" === a.pointerType) {
                    var c = 2 === a.button;
                    this.emit(c ? "rightup" + o : "mouseup" + o, h)
                } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, h), this.releaseInteractionDataForPointerId(a.pointerId))
            }
        }, e.prototype.onPointerCancel = function (t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
        }, e.prototype.processPointerCancel = function (t, e) {
            var r = t.data, n = t.data.identifier;
            void 0 !== e.trackedPointers[n] && (delete e.trackedPointers[n], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
        }, e.prototype.onPointerUp = function (t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
        }, e.prototype.processPointerUp = function (t, e, r) {
            var n = t.data, i = t.data.identifier, o = e.trackedPointers[i], s = "touch" === n.pointerType,
                a = "mouse" === n.pointerType || "pen" === n.pointerType, u = !1;
            if (a) {
                var h = 2 === n.button, c = l.FLAGS, f = h ? c.RIGHT_DOWN : c.LEFT_DOWN,
                    d = void 0 !== o && o.flags & f;
                r ? (this.dispatchEvent(e, h ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, h ? "rightclick" : "click", t), u = !0)) : d && this.dispatchEvent(e, h ? "rightupoutside" : "mouseupoutside", t), o && (h ? o.rightDown = !1 : o.leftDown = !1)
            }
            r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !u || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[i]
        }, e.prototype.onPointerMove = function (t) {
            console.log('11111')
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this._didMove = !0, this.cursor = null);
                for (var r = e.length, n = 0; n < r; n++) {
                    var i = e[n], o = this.getInteractionDataForPointerId(i),
                        s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                    s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === i.pointerType && this.emit("touchmove", s), "mouse" !== i.pointerType && "pen" !== i.pointerType || this.emit("mousemove", s)
                }
                "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
            }
        }, e.prototype.processPointerMove = function (t, e, r) {
            var n = t.data, i = "touch" === n.pointerType, o = "mouse" === n.pointerType || "pen" === n.pointerType;
            o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), i && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
        }, e.prototype.onPointerOut = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t), r = e[0];
                "mouse" === r.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                var n = this.getInteractionDataForPointerId(r),
                    i = this.configureInteractionEventForDOMEvent(this.eventData, r, n);
                i.data.originalEvent = r, this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === r.pointerType || "pen" === r.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(n.identifier)
            }
        }, e.prototype.processPointerOverOut = function (t, e, r) {
            var n = t.data, i = t.data.identifier, o = "mouse" === n.pointerType || "pen" === n.pointerType,
                s = e.trackedPointers[i];
            r && !s && (s = e.trackedPointers[i] = new l(i)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[i]))
        }, e.prototype.onPointerOver = function (t) {
            var e = this.normalizeToPointerData(t), r = e[0], n = this.getInteractionDataForPointerId(r),
                i = this.configureInteractionEventForDOMEvent(this.eventData, r, n);
            i.data.originalEvent = r, "mouse" === r.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== r.pointerType && "pen" !== r.pointerType || this.emit("mouseover", i)
        }, e.prototype.getInteractionDataForPointerId = function (t) {
            var e, r = t.pointerId;
            return r === p || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[r] ? e = this.activeInteractionData[r] : (e = this.interactionDataPool.pop() || new u, e.identifier = r, this.activeInteractionData[r] = e), e.copyEvent(t), e
        }, e.prototype.releaseInteractionDataForPointerId = function (t) {
            var e = this.activeInteractionData[t];
            e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
        }, e.prototype.configureInteractionEventForDOMEvent = function (t, e, r) {
            return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t.reset(), t
        }, e.prototype.normalizeToPointerData = function (t) {
            var e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent) for (var r = 0, n = t.changedTouches.length; r < n; r++) {
                var i = t.changedTouches[r];
                void 0 === i.button && (i.button = t.touches.length ? 1 : 0), void 0 === i.buttons && (i.buttons = t.touches.length ? 1 : 0), void 0 === i.isPrimary && (i.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === i.width && (i.width = i.radiusX || 1), void 0 === i.height && (i.height = i.radiusY || 1), void 0 === i.tiltX && (i.tiltX = 0), void 0 === i.tiltY && (i.tiltY = 0), void 0 === i.pointerType && (i.pointerType = "touch"), void 0 === i.pointerId && (i.pointerId = i.identifier || 0), void 0 === i.pressure && (i.pressure = i.force || .5), void 0 === i.twist && (i.twist = 0), void 0 === i.tangentialPressure && (i.tangentialPressure = 0), void 0 === i.layerX && (i.layerX = i.offsetX = i.clientX), void 0 === i.layerY && (i.layerY = i.offsetY = i.clientY), i.isNormalized = !0, e.push(i)
            } else if (self.MouseEvent && (!(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof self.PointerEvent)) e.push(t); else {
                var o = t;
                void 0 === o.isPrimary && (o.isPrimary = !0), void 0 === o.width && (o.width = 1), void 0 === o.height && (o.height = 1), void 0 === o.tiltX && (o.tiltX = 0), void 0 === o.tiltY && (o.tiltY = 0), void 0 === o.pointerType && (o.pointerType = "mouse"), void 0 === o.pointerId && (o.pointerId = p), void 0 === o.pressure && (o.pressure = .5), void 0 === o.twist && (o.twist = 0), void 0 === o.tangentialPressure && (o.tangentialPressure = 0), o.isNormalized = !0, e.push(o)
            }
            return e
        }, e.prototype.destroy = function () {
            this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null
        }, e
    }(a.EventEmitter)
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return o
    });
    var n = r(4), i = r(0), o = function () {
        function t(e) {
            var r = this;
            this.stage = new n.b, e = Object.assign({forceCanvas: !1}, e), this.renderer = Object(i._11)(e), t._plugins.forEach(function (t) {
                t.init.call(r, e)
            })
        }

        return t.registerPlugin = function (e) {
            t._plugins.push(e)
        }, t.prototype.render = function () {
            this.renderer.render(this.stage)
        }, Object.defineProperty(t.prototype, "view", {
            get: function () {
                return this.renderer.view
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "screen", {
            get: function () {
                return this.renderer.screen
            }, enumerable: !1, configurable: !0
        }), t.prototype.destroy = function (e, r) {
            var n = this, i = t._plugins.slice(0);
            i.reverse(), i.forEach(function (t) {
                t.destroy.call(n)
            }), this.stage.destroy(r), this.stage = null, this.renderer.destroy(e), this.renderer = null
        }, t._plugins = [], t
    }(), s = function () {
        function t() {
        }

        return t.init = function (t) {
            var e = this;
            Object.defineProperty(this, "resizeTo", {
                set: function (t) {
                    self.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (self.addEventListener("resize", this.queueResize), this.resize())
                }, get: function () {
                    return this._resizeTo
                }
            }), this.queueResize = function () {
                e._resizeTo && (e.cancelResize(), e._resizeId = requestAnimationFrame(function () {
                    return e.resize()
                }))
            }, this.cancelResize = function () {
                e._resizeId && (cancelAnimationFrame(e._resizeId), e._resizeId = null)
            }, this.resize = function () {
                if (e._resizeTo) {
                    e.cancelResize();
                    var t, r;
                    if (e._resizeTo === self) t = self.innerWidth, r = self.innerHeight; else {
                        var n = e._resizeTo, i = n.clientWidth, o = n.clientHeight;
                        t = i, r = o
                    }
                    e.renderer.resize(t, r)
                }
            }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
        }, t.destroy = function () {
            self.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
        }, t
    }();
    o.registerPlugin(s)
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return n
    });/*!
 * @pixi/runner - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    var n = function () {
        function t(t) {
            this.items = [], this._name = t, this._aliasCount = 0
        }

        return t.prototype.emit = function (t, e, r, n, i, o, s, a) {
            if (arguments.length > 8) throw new Error("max arguments reached");
            var u = this, h = u.name, c = u.items;
            this._aliasCount++;
            for (var l = 0, f = c.length; l < f; l++) c[l][h](t, e, r, n, i, o, s, a);
            return c === this.items && this._aliasCount--, this
        }, t.prototype.ensureNonAliasedItems = function () {
            this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
        }, t.prototype.add = function (t) {
            return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
        }, t.prototype.remove = function (t) {
            var e = this.items.indexOf(t);
            return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
        }, t.prototype.contains = function (t) {
            return -1 !== this.items.indexOf(t)
        }, t.prototype.removeAll = function () {
            return this.ensureNonAliasedItems(), this.items.length = 0, this
        }, t.prototype.destroy = function () {
            this.removeAll(), this.items = null, this._name = null
        }, Object.defineProperty(t.prototype, "empty", {
            get: function () {
                return 0 === this.items.length
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return this._name
            }, enumerable: !1, configurable: !0
        }), t
    }();
    Object.defineProperties(n.prototype, {dispatch: {value: n.prototype.emit}, run: {value: n.prototype.emit}})
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return a
    });
    var n = r(1), i = r(2), o = r(0), s = new i.j, a = function () {
        function t(t) {
            this.renderer = t
        }

        return t.prototype.image = function (t, e, r) {
            var n = new Image;
            return n.src = this.base64(t, e, r), n
        }, t.prototype.base64 = function (t, e, r) {
            return this.canvas(t).toDataURL(e, r)
        }, t.prototype.canvas = function (e) {
            var r, i, a, u = this.renderer, h = !1, c = !1;
            e && (e instanceof o.P ? a = e : (a = this.renderer.generateTexture(e), c = !0)), a ? (r = a.baseTexture.resolution, i = a.frame, h = !1, u.renderTexture.bind(a)) : (r = this.renderer.resolution, h = !0, i = s, i.width = this.renderer.width, i.height = this.renderer.height, u.renderTexture.bind(null));
            var l = Math.floor(i.width * r + 1e-4), f = Math.floor(i.height * r + 1e-4),
                d = new n.CanvasRenderTarget(l, f, 1), p = new Uint8Array(4 * l * f), _ = u.gl;
            _.readPixels(i.x * r, i.y * r, l, f, _.RGBA, _.UNSIGNED_BYTE, p);
            var m = d.context.getImageData(0, 0, l, f);
            if (t.arrayPostDivide(p, m.data), d.context.putImageData(m, 0, 0), h) {
                var v = new n.CanvasRenderTarget(d.width, d.height, 1);
                v.context.scale(1, -1), v.context.drawImage(d.canvas, 0, -f), d.destroy(), d = v
            }
            return c && a.destroy(!0), d.canvas
        }, t.prototype.pixels = function (e) {
            var r, n, i, a = this.renderer, u = !1;
            e && (e instanceof o.P ? i = e : (i = this.renderer.generateTexture(e), u = !0)), i ? (r = i.baseTexture.resolution, n = i.frame, a.renderTexture.bind(i)) : (r = a.resolution, n = s, n.width = a.width, n.height = a.height, a.renderTexture.bind(null));
            var h = n.width * r, c = n.height * r, l = new Uint8Array(4 * h * c), f = a.gl;
            return f.readPixels(n.x * r, n.y * r, h, c, f.RGBA, f.UNSIGNED_BYTE, l), u && i.destroy(!0), t.arrayPostDivide(l, l), l
        }, t.prototype.destroy = function () {
            this.renderer = null
        }, t.arrayPostDivide = function (t, e) {
            for (var r = 0; r < t.length; r += 4) {
                var n = e[r + 3] = t[r + 3];
                0 !== n ? (e[r] = Math.round(Math.min(255 * t[r] / n, 255)), e[r + 1] = Math.round(Math.min(255 * t[r + 1] / n, 255)), e[r + 2] = Math.round(Math.min(255 * t[r + 2] / n, 255))) : (e[r] = t[r], e[r + 1] = t[r + 1], e[r + 2] = t[r + 2])
            }
        }, t
    }()
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        m(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
            function s(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                t.done ? i(t.value) : new r(function (e) {
                    e(t.value)
                }).then(s, a)
            }

            u((n = n.apply(t, e || [])).next())
        })
    }

    function o(t, e) {
        function r(t) {
            return function (e) {
                return n([t, e])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; u;) try {
                if (i = 1, o && (s = 2 & r[0] ? o.return : r[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, r[1])).done) return s;
                switch (o = 0, s && (r = [2 & r[0], s.value]), r[0]) {
                    case 0:
                    case 1:
                        s = r;
                        break;
                    case 4:
                        return u.label++, {value: r[1], done: !1};
                    case 5:
                        u.label++, o = r[1], r = [0];
                        continue;
                    case 7:
                        r = u.ops.pop(), u.trys.pop();
                        continue;
                    default:
                        if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            u = 0;
                            continue
                        }
                        if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                            u.label = r[1];
                            break
                        }
                        if (6 === r[0] && u.label < s[1]) {
                            u.label = s[1], s = r;
                            break
                        }
                        if (s && u.label < s[2]) {
                            u.label = s[2], u.ops.push(r);
                            break
                        }
                        s[2] && u.ops.pop(), u.trys.pop();
                        continue
                }
                r = e.call(t, u)
            } catch (t) {
                r = [6, t], o = 0
            } finally {
                i = s = 0
            }
            if (5 & r[0]) throw r[1];
            return {value: r[0] ? r[1] : void 0, done: !0}
        }

        var i, o, s, a, u = {
            label: 0, sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1]
            }, trys: [], ops: []
        };
        return a = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
            return this
        }), a
    }

    function s(t, e, r) {
        var n = {textures: {}, texture: null};
        return e ? (e.map(function (t) {
            return new h._3(new h.h(t, Object.assign({mipmap: f.k.OFF, alphaMode: f.a.NO_PREMULTIPLIED_ALPHA}, r)))
        }).forEach(function (e, r) {
            var i = e.baseTexture, o = t + "-" + (r + 1);
            h.h.addToCache(i, o), h._3.addToCache(e, o), 0 === r && (h.h.addToCache(i, t), h._3.addToCache(e, t), n.texture = e), n.textures[o] = e
        }), n) : n
    }

    r.d(e, "a", function () {
        return v
    }), r.d(e, "b", function () {
        return y
    }), r.d(e, "c", function () {
        return g
    }), r.d(e, "d", function () {
        return P
    }), r.d(e, "e", function () {
        return D
    }), r.d(e, "f", function () {
        return u
    }), r.d(e, "g", function () {
        return _
    }), r.d(e, "h", function () {
        return F
    }), r.d(e, "i", function () {
        return C
    }), r.d(e, "j", function () {
        return L
    });
    var a, u, h = r(0), c = r(10), l = r(1), f = r(5);
    !function (t) {
        t[t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", t[t.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", t[t.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", t[t.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", t[t.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", t[t.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", t[t.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", t[t.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", t[t.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"
    }(u || (u = {}));
    var d, p,
        _ = (a = {}, a[u.COMPRESSED_RGB_S3TC_DXT1_EXT] = .5, a[u.COMPRESSED_RGBA_S3TC_DXT1_EXT] = .5, a[u.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1, a[u.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1, a[u.COMPRESSED_SRGB_S3TC_DXT1_EXT] = .5, a[u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = .5, a[u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1, a[u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1, a[u.COMPRESSED_R11_EAC] = .5, a[u.COMPRESSED_SIGNED_R11_EAC] = .5, a[u.COMPRESSED_RG11_EAC] = 1, a[u.COMPRESSED_SIGNED_RG11_EAC] = 1, a[u.COMPRESSED_RGB8_ETC2] = .5, a[u.COMPRESSED_RGBA8_ETC2_EAC] = 1, a[u.COMPRESSED_SRGB8_ETC2] = .5, a[u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1, a[u.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, a[u.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, a[u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = .5, a[u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = .5, a[u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = .25, a[u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = .25, a[u.COMPRESSED_RGB_ETC1_WEBGL] = .5, a[u.COMPRESSED_RGB_ATC_WEBGL] = .5, a[u.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1, a[u.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1, a),
        m = function (t, e) {
            return (m = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, v = function (t) {
            function e(e, r) {
                void 0 === r && (r = {width: 1, height: 1, autoLoad: !0});
                var n, i, o = this;
                return "string" == typeof e ? (n = e, i = new Uint8Array) : (n = null, i = e), o = t.call(this, i, r) || this, o.origin = n, o.buffer = i ? new h._10(i) : null, o.origin && !1 !== r.autoLoad && o.load(), i && i.length && (o.loaded = !0, o.onBlobLoaded(o.buffer.rawBinaryData)), o
            }

            return n(e, t), e.prototype.onBlobLoaded = function (t) {
            }, e.prototype.load = function () {
                return i(this, void 0, Promise, function () {
                    var t, e, r;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch(this.origin)];
                            case 1:
                                return t = n.sent(), [4, t.blob()];
                            case 2:
                                return e = n.sent(), [4, e.arrayBuffer()];
                            case 3:
                                return r = n.sent(), this.data = new Uint32Array(r), this.buffer = new h._10(r), this.loaded = !0, this.onBlobLoaded(r), this.update(), [2, this]
                        }
                    })
                })
            }, e
        }(h.q), g = function (t) {
            function e(r, n) {
                var i = t.call(this, r, n) || this;
                return i.format = n.format, i.levels = n.levels || 1, i._width = n.width, i._height = n.height, i._extension = e._formatToExtension(i.format), (n.levelBuffers || i.buffer) && (i._levelBuffers = n.levelBuffers || e._createLevelBuffers(r instanceof Uint8Array ? r : i.buffer.uint8View, i.format, i.levels, 4, 4, i.width, i.height)), i
            }

            return n(e, t), e.prototype.upload = function (t, e, r) {
                var n = t.gl;
                if (!t.context.extensions[this._extension]) throw new Error(this._extension + " textures are not supported on the current machine");
                if (!this._levelBuffers) return !1;
                for (var i = 0, o = this.levels; i < o; i++) {
                    var s = this._levelBuffers[i], a = s.levelID, u = s.levelWidth, h = s.levelHeight, c = s.levelBuffer;
                    n.compressedTexImage2D(n.TEXTURE_2D, a, this.format, u, h, 0, c)
                }
                return !0
            }, e.prototype.onBlobLoaded = function () {
                this._levelBuffers = e._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
            }, e._formatToExtension = function (t) {
                if (t >= 33776 && t <= 33779) return "s3tc";
                if (t >= 37488 && t <= 37497) return "etc";
                if (t >= 35840 && t <= 35843) return "pvrtc";
                if (t >= 36196) return "etc1";
                if (t >= 35986 && t <= 34798) return "atc";
                throw new Error("Invalid (compressed) texture format given!")
            }, e._createLevelBuffers = function (t, e, r, n, i, o, s) {
                for (var a = new Array(r), u = t.byteOffset, h = o, c = s, l = h + n - 1 & ~(n - 1), f = c + i - 1 & ~(i - 1), d = l * f * _[e], p = 0; p < r; p++) a[p] = {
                    levelID: p,
                    levelWidth: r > 1 ? h : l,
                    levelHeight: r > 1 ? c : f,
                    levelBuffer: new Uint8Array(t.buffer, u, d)
                }, u += d, h = h >> 1 || 1, c = c >> 1 || 1, l = h + n - 1 & ~(n - 1), f = c + i - 1 & ~(i - 1), d = l * f * _[e];
                return a
            }, e
        }(v), y = function () {
            function t() {
            }

            return t.use = function (e, r) {
                var n = e.data, i = this;
                if (e.type === c.c.TYPE.JSON && n && n.cacheID && n.textures) {
                    for (var o = n.textures, s = void 0, a = void 0, u = 0, h = o.length; u < h; u++) {
                        var f = o[u], d = f.src, p = f.format;
                        if (p || (a = d), t.textureFormats[p]) {
                            s = d;
                            break
                        }
                    }
                    if (!(s = s || a)) return void r(new Error("Cannot load compressed-textures in " + e.url + ", make sure you provide a fallback"));
                    if (s === e.url) return void r(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
                    var _ = {crossOrigin: e.crossOrigin, metadata: e.metadata.imageMetadata, parentResource: e},
                        m = l.url.resolve(e.url.replace(i.baseUrl, ""), s), v = n.cacheID;
                    i.add(v, m, _, function (t) {
                        if (t.error) return void r(t.error);
                        var n = t.texture, i = void 0 === n ? null : n, o = t.textures, s = void 0 === o ? {} : o;
                        Object.assign(e, {texture: i, textures: s}), r()
                    })
                } else r()
            }, t.add = function () {
                var e = document.createElement("canvas"), r = e.getContext("webgl");
                if (r) {
                    var n = {
                        s3tc: r.getExtension("WEBGL_compressed_texture_s3tc"),
                        s3tc_sRGB: r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                        etc: r.getExtension("WEBGL_compressed_texture_etc"),
                        etc1: r.getExtension("WEBGL_compressed_texture_etc1"),
                        pvrtc: r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                        atc: r.getExtension("WEBGL_compressed_texture_atc"),
                        astc: r.getExtension("WEBGL_compressed_texture_astc")
                    };
                    t.textureExtensions = n, t.textureFormats = {};
                    for (var i in n) {
                        var o = n[i];
                        o && Object.assign(t.textureFormats, Object.getPrototypeOf(o))
                    }
                }
            }, t
        }();
    c.c.setExtensionXhrType("dds", c.c.XHR_RESPONSE_TYPE.BUFFER);
    var T, E = {SIZE: 1, FLAGS: 2, HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19},
        b = {SIZE: 0, FLAGS: 1, FOURCC: 2, RGB_BITCOUNT: 3, R_BIT_MASK: 4, G_BIT_MASK: 5, B_BIT_MASK: 6, A_BIT_MASK: 7},
        x = {DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3, MISC_FLAGS2: 4};
    !function (t) {
        t[t.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", t[t.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", t[t.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", t[t.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", t[t.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", t[t.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", t[t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", t[t.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", t[t.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", t[t.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", t[t.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", t[t.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", t[t.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", t[t.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", t[t.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", t[t.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", t[t.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", t[t.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", t[t.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", t[t.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", t[t.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", t[t.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", t[t.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", t[t.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", t[t.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", t[t.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", t[t.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", t[t.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", t[t.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", t[t.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", t[t.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", t[t.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", t[t.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", t[t.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", t[t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", t[t.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", t[t.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", t[t.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", t[t.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", t[t.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", t[t.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", t[t.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", t[t.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", t[t.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", t[t.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", t[t.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", t[t.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", t[t.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", t[t.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", t[t.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", t[t.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", t[t.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", t[t.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", t[t.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", t[t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", t[t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", t[t.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", t[t.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", t[t.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", t[t.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", t[t.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", t[t.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", t[t.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", t[t.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", t[t.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", t[t.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", t[t.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", t[t.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", t[t.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", t[t.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", t[t.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", t[t.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", t[t.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", t[t.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", t[t.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", t[t.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", t[t.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", t[t.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", t[t.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", t[t.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", t[t.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV",t[t.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410",t[t.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416",t[t.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12",t[t.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010",t[t.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016",t[t.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE",t[t.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2",t[t.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210",t[t.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216",t[t.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11",t[t.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44",t[t.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44",t[t.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8",t[t.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8",t[t.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM",t[t.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208",t[t.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208",t[t.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",t[t.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT"
    }(T || (T = {}));
    var O;
    !function (t) {
        t[t.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", t[t.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", t[t.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D"
    }(O || (O = {}));
    var R, A, S,
        I = (d = {}, d[827611204] = u.COMPRESSED_RGBA_S3TC_DXT1_EXT, d[861165636] = u.COMPRESSED_RGBA_S3TC_DXT3_EXT, d[894720068] = u.COMPRESSED_RGBA_S3TC_DXT5_EXT, d),
        w = (p = {}, p[T.DXGI_FORMAT_BC1_TYPELESS] = u.COMPRESSED_RGBA_S3TC_DXT1_EXT, p[T.DXGI_FORMAT_BC1_UNORM] = u.COMPRESSED_RGBA_S3TC_DXT1_EXT, p[T.DXGI_FORMAT_BC2_TYPELESS] = u.COMPRESSED_RGBA_S3TC_DXT3_EXT, p[T.DXGI_FORMAT_BC2_UNORM] = u.COMPRESSED_RGBA_S3TC_DXT3_EXT, p[T.DXGI_FORMAT_BC3_TYPELESS] = u.COMPRESSED_RGBA_S3TC_DXT5_EXT, p[T.DXGI_FORMAT_BC3_UNORM] = u.COMPRESSED_RGBA_S3TC_DXT5_EXT, p[T.DXGI_FORMAT_BC1_UNORM_SRGB] = u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, p[T.DXGI_FORMAT_BC2_UNORM_SRGB] = u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, p[T.DXGI_FORMAT_BC3_UNORM_SRGB] = u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, p),
        P = function () {
            function t() {
            }

            return t.use = function (e, r) {
                if ("dds" === e.extension && e.data) try {
                    Object.assign(e, s(e.name || e.url, t.parse(e.data), e.metadata))
                } catch (t) {
                    return void r(t)
                }
                r()
            }, t.parse = function (t) {
                var e = new Uint32Array(t);
                if (542327876 !== e[0]) throw new Error("Invalid DDS file magic word");
                var r = new Uint32Array(t, 0, 124 / Uint32Array.BYTES_PER_ELEMENT), n = r[E.HEIGHT], i = r[E.WIDTH],
                    o = r[E.MIPMAP_COUNT],
                    s = new Uint32Array(t, E.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, 32 / Uint32Array.BYTES_PER_ELEMENT),
                    a = s[1];
                if (4 & a) {
                    var u = s[b.FOURCC];
                    if (808540228 !== u) {
                        var h = I[u], c = new Uint8Array(t, 128);
                        return [new g(c, {format: h, width: i, height: n, levels: o})]
                    }
                    var l = new Uint32Array(e.buffer, 128, 20 / Uint32Array.BYTES_PER_ELEMENT), f = l[x.DXGI_FORMAT],
                        d = l[x.RESOURCE_DIMENSION], p = l[x.MISC_FLAG], m = l[x.ARRAY_SIZE], v = w[f];
                    if (void 0 === v) throw new Error("DDSLoader cannot parse texture data with DXGI format " + f);
                    if (4 === p) throw new Error("DDSLoader does not support cubemap textures");
                    if (d === O.DDS_DIMENSION_TEXTURE3D) throw new Error("DDSLoader does not supported 3D texture data");
                    var y = new Array;
                    if (1 === m) y.push(new Uint8Array(t, 148)); else {
                        for (var T = _[v], R = 0, A = i, S = n, P = 0; P < o; P++) {
                            R += Math.max(1, A + 3 & -4) * Math.max(1, S + 3 & -4) * T, A >>>= 1, S >>>= 1
                        }
                        for (var M = 148, P = 0; P < m; P++) y.push(new Uint8Array(t, M, R)), M += R
                    }
                    return y.map(function (t) {
                        return new g(t, {format: v, width: i, height: n, levels: o})
                    })
                }
                if (64 & a) throw new Error("DDSLoader does not support uncompressed texture data.");
                if (512 & a) throw new Error("DDSLoader does not supported YUV uncompressed texture data.");
                if (131072 & a) throw new Error("DDSLoader does not support single-channel (lumninance) texture data!");
                if (2 & a) throw new Error("DDSLoader does not support single-channel (alpha) texture data!");
                throw new Error("DDSLoader failed to load a texture file due to an unknown reason!")
            }, t
        }();
    c.c.setExtensionXhrType("ktx", c.c.XHR_RESPONSE_TYPE.BUFFER);
    var M = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], N = {
            FILE_IDENTIFIER: 0,
            ENDIANNESS: 12,
            GL_TYPE: 16,
            GL_TYPE_SIZE: 20,
            GL_FORMAT: 24,
            GL_INTERNAL_FORMAT: 28,
            GL_BASE_INTERNAL_FORMAT: 32,
            PIXEL_WIDTH: 36,
            PIXEL_HEIGHT: 40,
            PIXEL_DEPTH: 44,
            NUMBER_OF_ARRAY_ELEMENTS: 48,
            NUMBER_OF_FACES: 52,
            NUMBER_OF_MIPMAP_LEVELS: 56,
            BYTES_OF_KEY_VALUE_DATA: 60
        }, C = (R = {}, R[f.r.UNSIGNED_BYTE] = 1, R[f.r.UNSIGNED_SHORT] = 2, R[f.r.FLOAT] = 4, R[f.r.HALF_FLOAT] = 8, R),
        D = (A = {}, A[f.h.RGBA] = 4, A[f.h.RGB] = 3, A[f.h.LUMINANCE] = 1, A[f.h.LUMINANCE_ALPHA] = 2, A[f.h.ALPHA] = 1, A),
        L = (S = {}, S[f.r.UNSIGNED_SHORT_4_4_4_4] = 2, S[f.r.UNSIGNED_SHORT_5_5_5_1] = 2, S[f.r.UNSIGNED_SHORT_5_6_5] = 2, S),
        F = function () {
            function t() {
            }

            return t.use = function (e, r) {
                if ("ktx" === e.extension && e.data) try {
                    var n = e.name || e.url;
                    Object.assign(e, s(n, t.parse(n, e.data), e.metadata))
                } catch (t) {
                    return void r(t)
                }
                r()
            }, t.parse = function (e, r) {
                var n = new DataView(r);
                if (!t.validate(e, n)) return null;
                var i = 67305985 === n.getUint32(N.ENDIANNESS, !0), o = n.getUint32(N.GL_TYPE, i),
                    s = n.getUint32(N.GL_FORMAT, i), a = n.getUint32(N.GL_INTERNAL_FORMAT, i),
                    u = n.getUint32(N.PIXEL_WIDTH, i), h = n.getUint32(N.PIXEL_HEIGHT, i) || 1,
                    c = n.getUint32(N.PIXEL_DEPTH, i) || 1, l = n.getUint32(N.NUMBER_OF_ARRAY_ELEMENTS, i) || 1,
                    f = n.getUint32(N.NUMBER_OF_FACES, i), d = n.getUint32(N.NUMBER_OF_MIPMAP_LEVELS, i),
                    p = n.getUint32(N.BYTES_OF_KEY_VALUE_DATA, i);
                if (0 === h || 1 !== c) throw new Error("Only 2D textures are supported");
                if (1 !== f) throw new Error("CubeTextures are not supported by KTXLoader yet!");
                if (1 !== l) throw new Error("WebGL does not support array textures");
                var m = u + 3 & -4, v = h + 3 & -4, y = new Array(l), T = u * h;
                0 === o && (T = m * v);
                var E;
                if (void 0 === (E = 0 !== o ? C[o] ? C[o] * D[s] : L[o] : _[a])) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
                for (var b = T * E, x = b, O = u, R = h, A = m, S = v, I = 64 + p, w = 0; w < d; w++) {
                    for (var P = n.getUint32(I, i), M = I + 4, F = 0; F < l; F++) {
                        var U = y[F];
                        U || (U = y[F] = new Array(d)), U[w] = {
                            levelID: w,
                            levelWidth: d > 1 ? O : A,
                            levelHeight: d > 1 ? R : S,
                            levelBuffer: new Uint8Array(r, M, x)
                        }, M += x
                    }
                    I += P + 4, I = I % 4 != 0 ? I + 4 - I % 4 : I, O = O >> 1 || 1, R = R >> 1 || 1, A = O + 4 - 1 & -4, S = R + 4 - 1 & -4, x = A * S * E
                }
                if (0 !== o) throw new Error("TODO: Uncompressed");
                return y.map(function (t) {
                    return new g(null, {format: a, width: u, height: h, levels: d, levelBuffers: t})
                })
            }, t.validate = function (t, e) {
                for (var r = 0; r < M.length; r++) if (e.getUint8(r) !== M[r]) return !1;
                return !0
            }, t
        }()
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        h(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return c
    }), r.d(e, "b", function () {
        return p
    });
    var i = r(5), o = r(4), s = r(1), a = r(0), u = r(2), h = function (t, e) {
            return (h = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, c = function (t) {
            function e(e, r, n, o) {
                void 0 === e && (e = 1500), void 0 === n && (n = 16384), void 0 === o && (o = !1);
                var s = t.call(this) || this;
                return n > 16384 && (n = 16384), s._properties = [!1, !0, !1, !1, !1], s._maxSize = e, s._batchSize = n, s._buffers = null, s._bufferUpdateIDs = [], s._updateID = 0, s.interactiveChildren = !1, s.blendMode = i.b.NORMAL, s.autoResize = o, s.roundPixels = !0, s.baseTexture = null, s.setProperties(r), s._tint = 0, s.tintRgb = new Float32Array(4), s.tint = 16777215, s
            }

            return n(e, t), e.prototype.setProperties = function (t) {
                t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
            }, e.prototype.updateTransform = function () {
                this.displayObjectUpdateTransform()
            }, Object.defineProperty(e.prototype, "tint", {
                get: function () {
                    return this._tint
                }, set: function (t) {
                    this._tint = t, Object(s.hex2rgb)(t, this.tintRgb)
                }, enumerable: !1, configurable: !0
            }), e.prototype.render = function (t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function () {
                    return e.onChildrenChange(0)
                })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, e.prototype.onChildrenChange = function (t) {
                for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
                this._bufferUpdateIDs[e] = ++this._updateID
            }, e.prototype.dispose = function () {
                if (this._buffers) {
                    for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                    this._buffers = null
                }
            }, e.prototype.destroy = function (e) {
                t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
            }, e
        }(o.b), l = function () {
            function t(t, e, r) {
                this.geometry = new a.C, this.indexBuffer = null, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                for (var n = 0; n < t.length; ++n) {
                    var o = t[n];
                    o = {
                        attributeName: o.attributeName,
                        size: o.size,
                        uploadFunction: o.uploadFunction,
                        type: o.type || i.r.FLOAT,
                        offset: o.offset
                    }, e[n] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
            }

            return t.prototype.initBuffers = function () {
                var t = this.geometry, e = 0;
                this.indexBuffer = new a.p(Object(s.createIndicesForQuads)(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
                for (var r = 0; r < this.dynamicProperties.length; ++r) {
                    var n = this.dynamicProperties[r];
                    n.offset = e, e += n.size, this.dynamicStride += n.size
                }
                var o = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
                this.dynamicData = new Float32Array(o), this.dynamicDataUint32 = new Uint32Array(o), this.dynamicBuffer = new a.p(this.dynamicData, !1, !1);
                var u = 0;
                this.staticStride = 0;
                for (var r = 0; r < this.staticProperties.length; ++r) {
                    var n = this.staticProperties[r];
                    n.offset = u, u += n.size, this.staticStride += n.size
                }
                var h = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
                this.staticData = new Float32Array(h), this.staticDataUint32 = new Uint32Array(h), this.staticBuffer = new a.p(this.staticData, !0, !1);
                for (var r = 0; r < this.dynamicProperties.length; ++r) {
                    var n = this.dynamicProperties[r];
                    t.addAttribute(n.attributeName, this.dynamicBuffer, 0, n.type === i.r.UNSIGNED_BYTE, n.type, 4 * this.dynamicStride, 4 * n.offset)
                }
                for (var r = 0; r < this.staticProperties.length; ++r) {
                    var n = this.staticProperties[r];
                    t.addAttribute(n.attributeName, this.staticBuffer, 0, n.type === i.r.UNSIGNED_BYTE, n.type, 4 * this.staticStride, 4 * n.offset)
                }
            }, t.prototype.uploadDynamic = function (t, e, r) {
                for (var n = 0; n < this.dynamicProperties.length; n++) {
                    var o = this.dynamicProperties[n];
                    o.uploadFunction(t, e, r, o.type === i.r.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, o.offset)
                }
                this.dynamicBuffer._updateID++
            }, t.prototype.uploadStatic = function (t, e, r) {
                for (var n = 0; n < this.staticProperties.length; n++) {
                    var o = this.staticProperties[n];
                    o.uploadFunction(t, e, r, o.type === i.r.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, o.offset)
                }
                this.staticBuffer._updateID++
            }, t.prototype.destroy = function () {
                this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
            }, t
        }(),
        f = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
        d = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
        p = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.shader = null, r.properties = null, r.tempMatrix = new u.d, r.properties = [{
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: r.uploadVertices,
                    offset: 0
                }, {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: r.uploadPosition,
                    offset: 0
                }, {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: r.uploadRotation,
                    offset: 0
                }, {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: r.uploadUvs,
                    offset: 0
                }, {
                    attributeName: "aColor",
                    size: 1,
                    type: i.r.UNSIGNED_BYTE,
                    uploadFunction: r.uploadTint,
                    offset: 0
                }], r.shader = a.W.from(d, f, {}), r.state = a.Z.for2d(), r
            }

            return n(e, t), e.prototype.render = function (t) {
                var e = t.children, r = t._maxSize, n = t._batchSize, i = this.renderer, o = e.length;
                if (0 !== o) {
                    o > r && !t.autoResize && (o = r);
                    var a = t._buffers;
                    a || (a = t._buffers = this.generateBuffers(t));
                    var u = e[0]._texture.baseTexture;
                    this.state.blendMode = Object(s.correctBlendMode)(t.blendMode, u.alphaMode), i.state.set(this.state);
                    var h = i.gl, c = t.worldTransform.copyTo(this.tempMatrix);
                    c.prepend(i.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(!0), this.shader.uniforms.uColor = Object(s.premultiplyRgba)(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, u.alphaMode), this.shader.uniforms.uSampler = u, this.renderer.shader.bind(this.shader);
                    for (var l = !1, f = 0, d = 0; f < o; f += n, d += 1) {
                        var p = o - f;
                        p > n && (p = n), d >= a.length && a.push(this._generateOneMoreBuffer(t));
                        var _ = a[d];
                        _.uploadDynamic(e, f, p);
                        var m = t._bufferUpdateIDs[d] || 0;
                        l = l || _._updateID < m, l && (_._updateID = t._updateID, _.uploadStatic(e, f, p)), i.geometry.bind(_.geometry), h.drawElements(h.TRIANGLES, 6 * p, h.UNSIGNED_SHORT, 0)
                    }
                }
            }, e.prototype.generateBuffers = function (t) {
                for (var e = [], r = t._maxSize, n = t._batchSize, i = t._properties, o = 0; o < r; o += n) e.push(new l(this.properties, i, n));
                return e
            }, e.prototype._generateOneMoreBuffer = function (t) {
                var e = t._batchSize, r = t._properties;
                return new l(this.properties, r, e)
            }, e.prototype.uploadVertices = function (t, e, r, n, i, o) {
                for (var s = 0, a = 0, u = 0, h = 0, c = 0; c < r; ++c) {
                    var l = t[e + c], f = l._texture, d = l.scale.x, p = l.scale.y, _ = f.trim, m = f.orig;
                    _ ? (a = _.x - l.anchor.x * m.width, s = a + _.width, h = _.y - l.anchor.y * m.height, u = h + _.height) : (s = m.width * (1 - l.anchor.x), a = m.width * -l.anchor.x, u = m.height * (1 - l.anchor.y), h = m.height * -l.anchor.y), n[o] = a * d, n[o + 1] = h * p, n[o + i] = s * d, n[o + i + 1] = h * p, n[o + 2 * i] = s * d, n[o + 2 * i + 1] = u * p, n[o + 3 * i] = a * d, n[o + 3 * i + 1] = u * p, o += 4 * i
                }
            }, e.prototype.uploadPosition = function (t, e, r, n, i, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].position;
                    n[o] = a.x, n[o + 1] = a.y, n[o + i] = a.x, n[o + i + 1] = a.y, n[o + 2 * i] = a.x, n[o + 2 * i + 1] = a.y, n[o + 3 * i] = a.x, n[o + 3 * i + 1] = a.y, o += 4 * i
                }
            }, e.prototype.uploadRotation = function (t, e, r, n, i, o) {
                for (var s = 0; s < r; s++) {
                    var a = t[e + s].rotation;
                    n[o] = a, n[o + i] = a, n[o + 2 * i] = a, n[o + 3 * i] = a, o += 4 * i
                }
            }, e.prototype.uploadUvs = function (t, e, r, n, i, o) {
                for (var s = 0; s < r; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (n[o] = a.x0, n[o + 1] = a.y0, n[o + i] = a.x1, n[o + i + 1] = a.y1, n[o + 2 * i] = a.x2, n[o + 2 * i + 1] = a.y2, n[o + 3 * i] = a.x3, n[o + 3 * i + 1] = a.y3, o += 4 * i) : (n[o] = 0, n[o + 1] = 0, n[o + i] = 0, n[o + i + 1] = 0, n[o + 2 * i] = 0, n[o + 2 * i + 1] = 0, n[o + 3 * i] = 0, n[o + 3 * i + 1] = 0, o += 4 * i)
                }
            }, e.prototype.uploadTint = function (t, e, r, n, i, o) {
                for (var a = 0; a < r; ++a) {
                    var u = t[e + a], h = u._texture.baseTexture.alphaMode > 0, c = u.alpha,
                        l = c < 1 && h ? Object(s.premultiplyTint)(u._tintRGB, c) : u._tintRGB + (255 * c << 24);
                    n[o] = l, n[o + i] = l, n[o + 2 * i] = l, n[o + 3 * i] = l, o += 4 * i
                }
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
            }, e
        }(a.K)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        T(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t, e) {
        var r = !1;
        if (t && t._textures && t._textures.length) for (var n = 0; n < t._textures.length; n++) if (t._textures[n] instanceof _._3) {
            var i = t._textures[n].baseTexture;
            -1 === e.indexOf(i) && (e.push(i), r = !0)
        }
        return r
    }

    function o(t, e) {
        if (t.baseTexture instanceof _.h) {
            var r = t.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0
        }
        return !1
    }

    function s(t, e) {
        if (t._texture && t._texture instanceof _._3) {
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0
        }
        return !1
    }

    function a(t, e) {
        return e instanceof y.b && (e.updateText(!0), !0)
    }

    function u(t, e) {
        if (e instanceof y.d) {
            var r = e.toFontString();
            return y.c.measureFont(r), !0
        }
        return !1
    }

    function h(t, e) {
        if (t instanceof y.b) {
            -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r), !0
        }
        return !1
    }

    function c(t, e) {
        return t instanceof y.d && (-1 === e.indexOf(t) && e.push(t), !0)
    }

    function l(t, e) {
        return e instanceof _.h && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
    }

    function f(t, e) {
        if (!(e instanceof m.c)) return !1;
        var r = e.geometry;
        e.finishPoly(), r.updateBatches();
        for (var n = r.batches, i = 0; i < n.length; i++) {
            var o = n[i].style.texture;
            o && l(t, o.baseTexture)
        }
        return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)), !0
    }

    function d(t, e) {
        return t instanceof m.c && (e.push(t), !0)
    }

    r.d(e, "a", function () {
        return b
    }), r.d(e, "b", function () {
        return E
    }), r.d(e, "c", function () {
        return x
    }), r.d(e, "d", function () {
        return O
    });
    var p = r(3), _ = r(0), m = r(27), v = r(8), g = r(4), y = r(15);/*!
 * @pixi/prepare - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    p.b.UPLOADS_PER_FRAME = 4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var T = function (t, e) {
        return (T = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, E = function () {
        function t(t) {
            this.maxItemsPerFrame = t, this.itemsLeft = 0
        }

        return t.prototype.beginFrame = function () {
            this.itemsLeft = this.maxItemsPerFrame
        }, t.prototype.allowedToUpload = function () {
            return this.itemsLeft-- > 0
        }, t
    }(), b = function () {
        function t(t) {
            var e = this;
            this.limiter = new E(p.b.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function () {
                e.queue && e.prepareItems()
            }, this.registerFindHook(h), this.registerFindHook(c), this.registerFindHook(i), this.registerFindHook(o), this.registerFindHook(s), this.registerUploadHook(a), this.registerUploadHook(u)
        }

        return t.prototype.upload = function (t, e) {
            "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, v.a.system.addOnce(this.tick, this, v.c.UTILITY))) : e && e()
        }, t.prototype.tick = function () {
            setTimeout(this.delayedTick, 0)
        }, t.prototype.prepareItems = function () {
            for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                var t = this.queue[0], e = !1;
                if (t && !t._destroyed) for (var r = 0, n = this.uploadHooks.length; r < n; r++) if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                    this.queue.shift(), e = !0;
                    break
                }
                e || this.queue.shift()
            }
            if (this.queue.length) v.a.system.addOnce(this.tick, this, v.c.UTILITY); else {
                this.ticking = !1;
                var i = this.completes.slice(0);
                this.completes.length = 0;
                for (var r = 0, n = i.length; r < n; r++) i[r]()
            }
        }, t.prototype.registerFindHook = function (t) {
            return t && this.addHooks.push(t), this
        }, t.prototype.registerUploadHook = function (t) {
            return t && this.uploadHooks.push(t), this
        }, t.prototype.add = function (t) {
            for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++) ;
            if (t instanceof g.b) for (var e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
            return this
        }, t.prototype.destroy = function () {
            this.ticking && v.a.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
        }, t
    }(), x = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.uploadHookHelper = r.renderer, r.registerFindHook(d), r.registerUploadHook(l), r.registerUploadHook(f), r
        }

        return n(e, t), e
    }(b), O = function () {
        function t(t) {
            this.maxMilliseconds = t, this.frameStart = 0
        }

        return t.prototype.beginFrame = function () {
            this.frameStart = Date.now()
        }, t.prototype.allowedToUpload = function () {
            return Date.now() - this.frameStart < this.maxMilliseconds
        }, t
    }()
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        b(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t, e, r) {
        return t + (e - t) * r
    }

    function o(t, e, r, n, o, s, a) {
        void 0 === a && (a = []);
        for (var u = a, h = 0, c = 0, l = 0, f = 0, d = 0, p = 0, _ = 0, m = 0; _ <= 20; ++_) m = _ / 20, h = i(t, r, m), c = i(e, n, m), l = i(r, o, m), f = i(n, s, m), d = i(h, l, m), p = i(c, f, m), 0 === _ && u[u.length - 2] === d && u[u.length - 1] === p || u.push(d, p);
        return u
    }

    function s(t, e, r, n, i, o, s, a) {
        var u, h, c = t - r * i, l = e - n * i, f = t + r * o, d = e + n * o;
        s ? (u = n, h = -r) : (u = -n, h = r);
        var p = c + u, _ = l + h, m = f + u, v = d + h;
        return a.push(p, _), a.push(m, v), 2
    }

    function a(t, e, r, n, i, o, s, a) {
        var u = r - t, h = n - e, c = Math.atan2(u, h), l = Math.atan2(i - t, o - e);
        a && c < l ? c += 2 * Math.PI : !a && c > l && (l += 2 * Math.PI);
        var f = c, d = l - c, p = Math.abs(d), _ = Math.sqrt(u * u + h * h),
            m = 1 + (15 * p * Math.sqrt(_) / Math.PI >> 0), v = d / m;
        if (f += v, a) {
            s.push(t, e), s.push(r, n);
            for (var g = 1, y = f; g < m; g++, y += v) s.push(t, e), s.push(t + Math.sin(y) * _, e + Math.cos(y) * _);
            s.push(t, e), s.push(i, o)
        } else {
            s.push(r, n), s.push(t, e);
            for (var g = 1, y = f; g < m; g++, y += v) s.push(t + Math.sin(y) * _, e + Math.cos(y) * _), s.push(t, e);
            s.push(i, o), s.push(t, e)
        }
        return 2 * m
    }

    function u(t, e) {
        var r = t.shape, n = t.points || r.points.slice(), i = e.closePointEps;
        if (0 !== n.length) {
            var o = t.lineStyle, u = new p.g(n[0], n[1]), h = new p.g(n[n.length - 2], n[n.length - 1]),
                c = r.type !== p.l.POLY || r.closeStroke, l = Math.abs(u.x - h.x) < i && Math.abs(u.y - h.y) < i;
            if (c) {
                n = n.slice(), l && (n.pop(), n.pop(), h.set(n[n.length - 2], n[n.length - 1]));
                var d = .5 * (u.x + h.x), _ = .5 * (h.y + u.y);
                n.unshift(d, _), n.push(d, _)
            }
            var m = e.points, v = n.length / 2, y = n.length, E = m.length / 2, b = o.width / 2, x = b * b,
                O = o.miterLimit * o.miterLimit, R = n[0], A = n[1], S = n[2], I = n[3], w = 0, P = 0, M = -(A - I),
                N = R - S, C = 0, D = 0, L = Math.sqrt(M * M + N * N);
            M /= L, N /= L, M *= b, N *= b;
            var F = o.alignment, U = 2 * (1 - F), B = 2 * F;
            c || (o.cap === g.ROUND ? y += a(R - M * (U - B) * .5, A - N * (U - B) * .5, R - M * U, A - N * U, R + M * B, A + N * B, m, !0) + 2 : o.cap === g.SQUARE && (y += s(R, A, M, N, U, B, !0, m))), m.push(R - M * U, A - N * U), m.push(R + M * B, A + N * B);
            for (var G = 1; G < v - 1; ++G) {
                R = n[2 * (G - 1)], A = n[2 * (G - 1) + 1], S = n[2 * G], I = n[2 * G + 1], w = n[2 * (G + 1)], P = n[2 * (G + 1) + 1], M = -(A - I), N = R - S, L = Math.sqrt(M * M + N * N), M /= L, N /= L, M *= b, N *= b, C = -(I - P), D = S - w, L = Math.sqrt(C * C + D * D), C /= L, D /= L, C *= b, D *= b;
                var k = S - R, X = A - I, j = S - w, H = P - I, Y = X * j - H * k, V = Y < 0;
                if (Math.abs(Y) < .1) m.push(S - M * U, I - N * U), m.push(S + M * B, I + N * B); else {
                    var z = (-M + R) * (-N + I) - (-M + S) * (-N + A), W = (-C + w) * (-D + I) - (-C + S) * (-D + P),
                        q = (k * W - j * z) / Y, Z = (H * z - X * W) / Y, K = (q - S) * (q - S) + (Z - I) * (Z - I),
                        J = S + (q - S) * U, $ = I + (Z - I) * U, Q = S - (q - S) * B, tt = I - (Z - I) * B,
                        et = Math.min(k * k + X * X, j * j + H * H), rt = V ? U : B;
                    K <= et + rt * rt * x ? o.join === f.BEVEL || K / x > O ? (V ? (m.push(J, $), m.push(S + M * B, I + N * B), m.push(J, $), m.push(S + C * B, I + D * B)) : (m.push(S - M * U, I - N * U), m.push(Q, tt), m.push(S - C * U, I - D * U), m.push(Q, tt)), y += 2) : o.join === f.ROUND ? V ? (m.push(J, $), m.push(S + M * B, I + N * B), y += a(S, I, S + M * B, I + N * B, S + C * B, I + D * B, m, !0) + 4, m.push(J, $), m.push(S + C * B, I + D * B)) : (m.push(S - M * U, I - N * U), m.push(Q, tt), y += a(S, I, S - M * U, I - N * U, S - C * U, I - D * U, m, !1) + 4, m.push(S - C * U, I - D * U), m.push(Q, tt)) : (m.push(J, $), m.push(Q, tt)) : (m.push(S - M * U, I - N * U), m.push(S + M * B, I + N * B), o.join === f.BEVEL || K / x > O || (o.join === f.ROUND ? y += V ? a(S, I, S + M * B, I + N * B, S + C * B, I + D * B, m, !0) + 2 : a(S, I, S - M * U, I - N * U, S - C * U, I - D * U, m, !1) + 2 : (V ? (m.push(Q, tt), m.push(Q, tt)) : (m.push(J, $), m.push(J, $)), y += 2)), m.push(S - C * U, I - D * U), m.push(S + C * B, I + D * B), y += 2)
                }
            }
            R = n[2 * (v - 2)], A = n[2 * (v - 2) + 1], S = n[2 * (v - 1)], I = n[2 * (v - 1) + 1], M = -(A - I), N = R - S, L = Math.sqrt(M * M + N * N), M /= L, N /= L, M *= b, N *= b, m.push(S - M * U, I - N * U), m.push(S + M * B, I + N * B), c || (o.cap === g.ROUND ? y += a(S - M * (U - B) * .5, I - N * (U - B) * .5, S - M * U, I - N * U, S + M * B, I + N * B, m, !1) + 2 : o.cap === g.SQUARE && (y += s(S, I, M, N, U, B, !1, m)));
            for (var nt = e.indices, it = T.epsilon * T.epsilon, G = E; G < y + E - 2; ++G) R = m[2 * G], A = m[2 * G + 1], S = m[2 * (G + 1)], I = m[2 * (G + 1) + 1], w = m[2 * (G + 2)], P = m[2 * (G + 2) + 1], Math.abs(R * (I - P) + S * (P - A) + w * (A - I)) < it || nt.push(G, G + 1, G + 2)
        }
    }

    function h(t, e) {
        var r = 0, n = t.shape, i = t.points || n.points, o = n.type !== p.l.POLY || n.closeStroke;
        if (0 !== i.length) {
            var s = e.points, a = e.indices, u = i.length / 2, h = s.length / 2, c = h;
            for (s.push(i[0], i[1]), r = 1; r < u; r++) s.push(i[2 * r], i[2 * r + 1]), a.push(c, c + 1), c++;
            o && a.push(c, h)
        }
    }

    function c(t, e) {
        t.lineStyle.native ? h(t, e) : u(t, e)
    }

    function l(t) {
        for (var e = t.points, r = 0, n = 0; n < e.length - 2; n += 2) r += (e[n + 2] - e[n]) * (e[n + 3] + e[n + 1]);
        return r > 0
    }

    r.d(e, "a", function () {
        return E
    }), r.d(e, "b", function () {
        return T
    }), r.d(e, "c", function () {
        return X
    }), r.d(e, "d", function () {
        return D
    }), r.d(e, "e", function () {
        return U
    }), r.d(e, "f", function () {
        return g
    }), r.d(e, "g", function () {
        return f
    }), r.d(e, "h", function () {
        return B
    }), r.d(e, "i", function () {
        return j
    });
    var f, d = r(0), p = r(2), _ = r(1), m = r(5), v = r(4);
    !function (t) {
        t.MITER = "miter", t.BEVEL = "bevel", t.ROUND = "round"
    }(f || (f = {}));
    var g;
    !function (t) {
        t.BUTT = "butt", t.ROUND = "round", t.SQUARE = "square"
    }(g || (g = {}));
    var y, T = {
            adaptive: !0,
            maxLength: 10,
            minSegments: 8,
            maxSegments: 2048,
            epsilon: 1e-4,
            _segmentsCount: function (t, e) {
                if (void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)) return e;
                var r = Math.ceil(t / this.maxLength);
                return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r
            }
        }, E = function () {
            function t() {
                this.color = 16777215, this.alpha = 1, this.texture = d._3.WHITE, this.matrix = null, this.visible = !1, this.reset()
            }

            return t.prototype.clone = function () {
                var e = new t;
                return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e
            }, t.prototype.reset = function () {
                this.color = 16777215, this.alpha = 1, this.texture = d._3.WHITE, this.matrix = null, this.visible = !1
            }, t.prototype.destroy = function () {
                this.texture = null, this.matrix = null
            }, t
        }(), b = function (t, e) {
            return (b = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, x = {
            build: function (t) {
                t.points = t.shape.points.slice()
            }, triangulate: function (t, e) {
                var r = t.points, n = t.holes, i = e.points, o = e.indices;
                if (r.length >= 6) {
                    for (var s = [], a = 0; a < n.length; a++) {
                        var u = n[a];
                        s.push(r.length / 2), r = r.concat(u.points)
                    }
                    var h = Object(_.earcut)(r, s, 2);
                    if (!h) return;
                    for (var c = i.length / 2, a = 0; a < h.length; a += 3) o.push(h[a] + c), o.push(h[a + 1] + c), o.push(h[a + 2] + c);
                    for (var a = 0; a < r.length; a++) i.push(r[a])
                }
            }
        }, O = {
            build: function (t) {
                var e, r, n = t.shape, i = t.points, o = n.x, s = n.y;
                if (i.length = 0, t.type === p.l.CIRC) e = n.radius, r = n.radius; else {
                    var a = t.shape;
                    e = a.width, r = a.height
                }
                if (0 !== e && 0 !== r) {
                    var u = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(e + r));
                    u /= 2.3;
                    for (var h = 2 * Math.PI / u, c = 0; c < u - .5; c++) i.push(o + Math.sin(-h * c) * e, s + Math.cos(-h * c) * r);
                    i.push(i[0], i[1])
                }
            }, triangulate: function (t, e) {
                var r = t.points, n = e.points, i = e.indices, o = n.length / 2, s = o, a = t.shape, u = t.matrix, h = a.x,
                    c = a.y;
                n.push(t.matrix ? u.a * h + u.c * c + u.tx : h, t.matrix ? u.b * h + u.d * c + u.ty : c);
                for (var l = 0; l < r.length; l += 2) n.push(r[l], r[l + 1]), i.push(o++, s, o)
            }
        }, R = {
            build: function (t) {
                var e = t.shape, r = e.x, n = e.y, i = e.width, o = e.height, s = t.points;
                s.length = 0, s.push(r, n, r + i, n, r + i, n + o, r, n + o)
            }, triangulate: function (t, e) {
                var r = t.points, n = e.points, i = n.length / 2;
                n.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3)
            }
        }, A = {
            build: function (t) {
                var e = t.shape, r = t.points, n = e.x, i = e.y, s = e.width, a = e.height,
                    u = Math.max(0, Math.min(e.radius, Math.min(s, a) / 2));
                r.length = 0, u ? (o(n, i + u, n, i, n + u, i, r), o(n + s - u, i, n + s, i, n + s, i + u, r), o(n + s, i + a - u, n + s, i + a, n + s - u, i + a, r), o(n + u, i + a, n, i + a, n, i + a - u, r)) : r.push(n, i, n + s, i, n + s, i + a, n, i + a)
            }, triangulate: function (t, e) {
                for (var r = t.points, n = e.points, i = e.indices, o = n.length / 2, s = Object(_.earcut)(r, null, 2), a = 0, u = s.length; a < u; a += 3) i.push(s[a] + o), i.push(s[a + 1] + o), i.push(s[a + 2] + o);
                for (var a = 0, u = r.length; a < u; a++) n.push(r[a], r[++a])
            }
        }, S = function () {
            function t() {
            }

            return t.curveTo = function (t, e, r, n, i, o) {
                var s = o[o.length - 2], a = o[o.length - 1], u = a - e, h = s - t, c = n - e, l = r - t,
                    f = Math.abs(u * l - h * c);
                if (f < 1e-8 || 0 === i) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;
                var d = u * u + h * h, p = c * c + l * l, _ = u * c + h * l, m = i * Math.sqrt(d) / f,
                    v = i * Math.sqrt(p) / f, g = m * _ / d, y = v * _ / p, T = m * l + v * h, E = m * c + v * u,
                    b = h * (v + g), x = u * (v + g), O = l * (m + y), R = c * (m + y);
                return {
                    cx: T + t,
                    cy: E + e,
                    radius: i,
                    startAngle: Math.atan2(x - E, b - T),
                    endAngle: Math.atan2(R - E, O - T),
                    anticlockwise: h * c > l * u
                }
            }, t.arc = function (t, e, r, n, i, o, s, a, u) {
                for (var h = s - o, c = T._segmentsCount(Math.abs(h) * i, 40 * Math.ceil(Math.abs(h) / p.f)), l = h / (2 * c), f = 2 * l, d = Math.cos(l), _ = Math.sin(l), m = c - 1, v = m % 1 / m, g = 0; g <= m; ++g) {
                    var y = g + v * g, E = l + o + f * y, b = Math.cos(E), x = -Math.sin(E);
                    u.push((d * b + _ * x) * i + r, (d * -x + _ * b) * i + n)
                }
            }, t
        }(), I = function () {
            function t() {
            }

            return t.curveLength = function (t, e, r, n, i, o, s, a) {
                for (var u = 0, h = 0, c = 0, l = 0, f = 0, d = 0, p = 0, _ = 0, m = 0, v = 0, g = 0, y = t, T = e, E = 1; E <= 10; ++E) h = E / 10, c = h * h, l = c * h, f = 1 - h, d = f * f, p = d * f, _ = p * t + 3 * d * h * r + 3 * f * c * i + l * s, m = p * e + 3 * d * h * n + 3 * f * c * o + l * a, v = y - _, g = T - m, y = _, T = m, u += Math.sqrt(v * v + g * g);
                return u
            }, t.curveTo = function (e, r, n, i, o, s, a) {
                var u = a[a.length - 2], h = a[a.length - 1];
                a.length -= 2;
                var c = T._segmentsCount(t.curveLength(u, h, e, r, n, i, o, s)), l = 0, f = 0, d = 0, p = 0, _ = 0;
                a.push(u, h);
                for (var m = 1, v = 0; m <= c; ++m) v = m / c, l = 1 - v, f = l * l, d = f * l, p = v * v, _ = p * v, a.push(d * u + 3 * f * v * e + 3 * l * p * n + _ * o, d * h + 3 * f * v * r + 3 * l * p * i + _ * s)
            }, t
        }(), w = function () {
            function t() {
            }

            return t.curveLength = function (t, e, r, n, i, o) {
                var s = t - 2 * r + i, a = e - 2 * n + o, u = 2 * r - 2 * t, h = 2 * n - 2 * e, c = 4 * (s * s + a * a),
                    l = 4 * (s * u + a * h), f = u * u + h * h, d = 2 * Math.sqrt(c + l + f), p = Math.sqrt(c),
                    _ = 2 * c * p, m = 2 * Math.sqrt(f), v = l / p;
                return (_ * d + p * l * (d - m) + (4 * f * c - l * l) * Math.log((2 * p + v + d) / (v + m))) / (4 * _)
            }, t.curveTo = function (e, r, n, i, o) {
                for (var s = o[o.length - 2], a = o[o.length - 1], u = T._segmentsCount(t.curveLength(s, a, e, r, n, i)), h = 0, c = 0, l = 1; l <= u; ++l) {
                    var f = l / u;
                    h = s + (e - s) * f, c = a + (r - a) * f, o.push(h + (e + (n - e) * f - h) * f, c + (r + (i - r) * f - c) * f)
                }
            }, t
        }(), P = function () {
            function t() {
                this.reset()
            }

            return t.prototype.begin = function (t, e, r) {
                this.reset(), this.style = t, this.start = e, this.attribStart = r
            }, t.prototype.end = function (t, e) {
                this.attribSize = e - this.attribStart, this.size = t - this.start
            }, t.prototype.reset = function () {
                this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
            }, t
        }(), M = (y = {}, y[p.l.POLY] = x, y[p.l.CIRC] = O, y[p.l.ELIP] = O, y[p.l.RECT] = R, y[p.l.RREC] = A, y), N = [],
        C = [], D = function () {
            function t(t, e, r, n) {
                void 0 === e && (e = null), void 0 === r && (r = null), void 0 === n && (n = null), this.points = [], this.holes = [], this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = n, this.type = t.type
            }

            return t.prototype.clone = function () {
                return new t(this.shape, this.fillStyle, this.lineStyle, this.matrix)
            }, t.prototype.destroy = function () {
                this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
            }, t
        }(), L = new p.g, F = new v.a, U = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.closePointEps = 1e-4, e.boundsPadding = 0, e.uvsFloat32 = null, e.indicesUint16 = null, e.batchable = !1, e.points = [], e.colors = [], e.uvs = [], e.indices = [], e.textureIds = [], e.graphicsData = [], e.drawCalls = [], e.batchDirty = -1, e.batches = [], e.dirty = 0, e.cacheDirty = -1, e.clearDirty = 0, e.shapeIndex = 0, e._bounds = new v.a, e.boundsDirty = -1, e
            }

            return n(e, t), Object.defineProperty(e.prototype, "bounds", {
                get: function () {
                    return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
                }, enumerable: !1, configurable: !0
            }), e.prototype.invalidate = function () {
                this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), C.push(this.drawCalls[t]);
                this.drawCalls.length = 0;
                for (var t = 0; t < this.batches.length; t++) {
                    var e = this.batches[t];
                    e.reset(), N.push(e)
                }
                this.batches.length = 0
            }, e.prototype.clear = function () {
                return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
            }, e.prototype.drawShape = function (t, e, r, n) {
                void 0 === e && (e = null), void 0 === r && (r = null), void 0 === n && (n = null);
                var i = new D(t, e, r, n);
                return this.graphicsData.push(i), this.dirty++, this
            }, e.prototype.drawHole = function (t, e) {
                if (void 0 === e && (e = null), !this.graphicsData.length) return null;
                var r = new D(t, null, null, e), n = this.graphicsData[this.graphicsData.length - 1];
                return r.lineStyle = n.lineStyle, n.holes.push(r), this.dirty++, this
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this);
                for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
                this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
            }, e.prototype.containsPoint = function (t) {
                for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                    var n = e[r];
                    if (n.fillStyle.visible && (n.shape && (n.matrix ? n.matrix.applyInverse(t, L) : L.copyFrom(t), n.shape.contains(L.x, L.y)))) {
                        var i = !1;
                        if (n.holes) for (var o = 0; o < n.holes.length; o++) {
                            var s = n.holes[o];
                            if (s.shape.contains(L.x, L.y)) {
                                i = !0;
                                break
                            }
                        }
                        if (!i) return !0
                    }
                }
                return !1
            }, e.prototype.updateBatches = function (t) {
                if (!this.graphicsData.length) return void (this.batchable = !0);
                if (this.validateBatching()) {
                    this.cacheDirty = this.dirty;
                    var e = this.uvs, r = this.graphicsData, n = null, i = null;
                    this.batches.length > 0 && (n = this.batches[this.batches.length - 1], i = n.style);
                    for (var o = this.shapeIndex; o < r.length; o++) {
                        this.shapeIndex++;
                        var s = r[o], a = s.fillStyle, u = s.lineStyle;
                        M[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix);
                        for (var h = 0; h < 2; h++) {
                            var c = 0 === h ? a : u;
                            if (c.visible) {
                                var l = c.texture.baseTexture, f = this.indices.length, d = this.points.length / 2;
                                l.wrapMode = m.s.REPEAT, 0 === h ? this.processFill(s) : this.processLine(s);
                                var p = this.points.length / 2 - d;
                                0 !== p && (n && !this._compareStyles(i, c) && (n.end(f, d), n = null), n || (n = N.pop() || new P, n.begin(c, f, d), this.batches.push(n), i = c), this.addUvs(this.points, e, c.texture, d, p, c.matrix))
                            }
                        }
                    }
                    var _ = this.indices.length, v = this.points.length / 2;
                    if (n && n.end(_, v), 0 === this.batches.length) return void (this.batchable = !0);
                    if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices); else {
                        var g = v > 65535 && t;
                        this.indicesUint16 = g ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
                    }
                    this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
                }
            }, e.prototype._compareStyles = function (t, e) {
                return !(!t || !e) && (t.texture.baseTexture === e.texture.baseTexture && (t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native))
            }, e.prototype.validateBatching = function () {
                if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
                for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                    var r = this.graphicsData[t], n = r.fillStyle, i = r.lineStyle;
                    if (n && !n.texture.baseTexture.valid) return !1;
                    if (i && !i.texture.baseTexture.valid) return !1
                }
                return !0
            }, e.prototype.packBatches = function () {
                this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                for (var t = this.batches, e = 0, r = t.length; e < r; e++) for (var n = t[e], i = 0; i < n.size; i++) {
                    var o = n.start + i;
                    this.indicesUint16[o] = this.indicesUint16[o] - n.attribStart
                }
            }, e.prototype.isBatchable = function () {
                if (this.points.length > 131070) return !1;
                for (var t = this.batches, r = 0; r < t.length; r++) if (t[r].style.native) return !1;
                return this.points.length < 2 * e.BATCHABLE_SIZE
            }, e.prototype.buildDrawCalls = function () {
                for (var t = ++d.h._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), C.push(this.drawCalls[e]);
                this.drawCalls.length = 0;
                var r = this.colors, n = this.textureIds, i = C.pop();
                i || (i = new d.i, i.texArray = new d.o), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = m.f.TRIANGLES;
                var o = 0, s = null, a = 0, u = !1, h = m.f.TRIANGLES, c = 0;
                this.drawCalls.push(i);
                for (var e = 0; e < this.batches.length; e++) {
                    var l = this.batches[e], f = l.style, p = f.texture.baseTexture;
                    u !== !!f.native && (u = !!f.native, h = u ? m.f.LINES : m.f.TRIANGLES, s = null, o = 8, t++), s !== p && (s = p, p._batchEnabled !== t && (8 === o && (t++, o = 0, i.size > 0 && (i = C.pop(), i || (i = new d.i, i.texArray = new d.o), this.drawCalls.push(i)), i.start = c, i.size = 0, i.texArray.count = 0, i.type = h), p.touched = 1, p._batchEnabled = t, p._batchLocation = o, p.wrapMode = m.s.REPEAT, i.texArray.elements[i.texArray.count++] = p, o++)), i.size += l.size, c += l.size, a = p._batchLocation, this.addColors(r, f.color, f.alpha, l.attribSize, l.attribStart), this.addTextureIds(n, a, l.attribSize, l.attribStart)
                }
                d.h._globalBatch = t, this.packAttributes()
            }, e.prototype.packAttributes = function () {
                for (var t = this.points, e = this.uvs, r = this.colors, n = this.textureIds, i = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(i), s = new Uint32Array(i), a = 0, u = 0; u < t.length / 2; u++) o[a++] = t[2 * u], o[a++] = t[2 * u + 1], o[a++] = e[2 * u], o[a++] = e[2 * u + 1], s[a++] = r[u], o[a++] = n[u];
                this._buffer.update(i), this._indexBuffer.update(this.indicesUint16)
            }, e.prototype.processFill = function (t) {
                if (t.holes.length) this.processHoles(t.holes), x.triangulate(t, this); else {
                    M[t.type].triangulate(t, this)
                }
            }, e.prototype.processLine = function (t) {
                c(t, this);
                for (var e = 0; e < t.holes.length; e++) c(t.holes[e], this)
            }, e.prototype.processHoles = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    M[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix)
                }
            }, e.prototype.calculateBounds = function () {
                var t = this._bounds, e = F, r = p.d.IDENTITY;
                this._bounds.clear(), e.clear();
                for (var n = 0; n < this.graphicsData.length; n++) {
                    var i = this.graphicsData[n], o = i.shape, s = i.type, a = i.lineStyle, u = i.matrix || p.d.IDENTITY,
                        h = 0;
                    if (a && a.visible) {
                        var c = a.alignment;
                        h = a.width, s === p.l.POLY ? l(o) ? h *= 1 - c : h *= c : h *= Math.max(0, c)
                    }
                    if (r !== u && (e.isEmpty() || (t.addBoundsMatrix(e, r), e.clear()), r = u), s === p.l.RECT || s === p.l.RREC) {
                        var f = o;
                        e.addFramePad(f.x, f.y, f.x + f.width, f.y + f.height, h, h)
                    } else if (s === p.l.CIRC) {
                        var d = o;
                        e.addFramePad(d.x, d.y, d.x, d.y, d.radius + h, d.radius + h)
                    } else if (s === p.l.ELIP) {
                        var _ = o;
                        e.addFramePad(_.x, _.y, _.x, _.y, _.width + h, _.height + h)
                    } else {
                        var m = o;
                        t.addVerticesMatrix(r, m.points, 0, m.points.length, h, h)
                    }
                }
                e.isEmpty() || t.addBoundsMatrix(e, r), t.pad(this.boundsPadding, this.boundsPadding)
            }, e.prototype.transformPoints = function (t, e) {
                for (var r = 0; r < t.length / 2; r++) {
                    var n = t[2 * r], i = t[2 * r + 1];
                    t[2 * r] = e.a * n + e.c * i + e.tx, t[2 * r + 1] = e.b * n + e.d * i + e.ty
                }
            }, e.prototype.addColors = function (t, e, r, n, i) {
                void 0 === i && (i = 0);
                var o = (e >> 16) + (65280 & e) + ((255 & e) << 16), s = Object(_.premultiplyTint)(o, r);
                t.length = Math.max(t.length, i + n);
                for (var a = 0; a < n; a++) t[i + a] = s
            }, e.prototype.addTextureIds = function (t, e, r, n) {
                void 0 === n && (n = 0), t.length = Math.max(t.length, n + r);
                for (var i = 0; i < r; i++) t[n + i] = e
            }, e.prototype.addUvs = function (t, e, r, n, i, o) {
                void 0 === o && (o = null);
                for (var s = 0, a = e.length, u = r.frame; s < i;) {
                    var h = t[2 * (n + s)], c = t[2 * (n + s) + 1];
                    if (o) {
                        var l = o.a * h + o.c * c + o.tx;
                        c = o.b * h + o.d * c + o.ty, h = l
                    }
                    s++, e.push(h / u.width, c / u.height)
                }
                var f = r.baseTexture;
                (u.width < f.width || u.height < f.height) && this.adjustUvs(e, r, a, i)
            }, e.prototype.adjustUvs = function (t, e, r, n) {
                for (var i = e.baseTexture, o = r + 2 * n, s = e.frame, a = s.width / i.width, u = s.height / i.height, h = s.x / s.width, c = s.y / s.height, l = Math.floor(t[r] + 1e-6), f = Math.floor(t[r + 1] + 1e-6), d = r + 2; d < o; d += 2) l = Math.min(l, Math.floor(t[d] + 1e-6)), f = Math.min(f, Math.floor(t[d + 1] + 1e-6));
                h -= l, c -= f;
                for (var d = r; d < o; d += 2) t[d] = (t[d] + h) * a, t[d + 1] = (t[d + 1] + c) * u
            }, e.BATCHABLE_SIZE = 100, e
        }(d.j), B = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.width = 0, e.alignment = .5, e.native = !1, e.cap = g.BUTT, e.join = f.MITER, e.miterLimit = 10, e
            }

            return n(e, t), e.prototype.clone = function () {
                var t = new e;
                return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
            }, e.prototype.reset = function () {
                t.prototype.reset.call(this), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1
            }, e
        }(E), G = new Float32Array(3), k = {}, X = function (t) {
            function e(e) {
                void 0 === e && (e = null);
                var r = t.call(this) || this;
                return r.shader = null, r.pluginName = "batch", r.currentPath = null, r.batches = [], r.batchTint = -1, r.batchDirty = -1, r.vertexData = null, r._fillStyle = new E, r._lineStyle = new B, r._matrix = null, r._holeMode = !1, r.state = d.Z.for2d(), r._geometry = e || new U, r._geometry.refCount++, r._transformID = -1, r.tint = 16777215, r.blendMode = m.b.NORMAL, r
            }

            return n(e, t), Object.defineProperty(e.prototype, "geometry", {
                get: function () {
                    return this._geometry
                }, enumerable: !1, configurable: !0
            }), e.prototype.clone = function () {
                return this.finishPoly(), new e(this._geometry)
            }, Object.defineProperty(e.prototype, "blendMode", {
                get: function () {
                    return this.state.blendMode
                }, set: function (t) {
                    this.state.blendMode = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "tint", {
                get: function () {
                    return this._tint
                }, set: function (t) {
                    this._tint = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "fill", {
                get: function () {
                    return this._fillStyle
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "line", {
                get: function () {
                    return this._lineStyle
                }, enumerable: !1, configurable: !0
            }), e.prototype.lineStyle = function (t, e, r, n, i) {
                return void 0 === t && (t = null), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === n && (n = .5), void 0 === i && (i = !1), "number" == typeof t && (t = {
                    width: t,
                    color: e,
                    alpha: r,
                    alignment: n,
                    native: i
                }), this.lineTextureStyle(t)
            }, e.prototype.lineTextureStyle = function (t) {
                t = Object.assign({
                    width: 0,
                    texture: d._3.WHITE,
                    color: t && t.texture ? 16777215 : 0,
                    alpha: 1,
                    matrix: null,
                    alignment: .5,
                    native: !1,
                    cap: g.BUTT,
                    join: f.MITER,
                    miterLimit: 10
                }, t), this.currentPath && this.startPoly();
                var e = t.width > 0 && t.alpha > 0;
                return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {visible: e}, t)) : this._lineStyle.reset(), this
            }, e.prototype.startPoly = function () {
                if (this.currentPath) {
                    var t = this.currentPath.points, e = this.currentPath.points.length;
                    e > 2 && (this.drawShape(this.currentPath), this.currentPath = new p.h, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                } else this.currentPath = new p.h, this.currentPath.closeStroke = !1
            }, e.prototype.finishPoly = function () {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
            }, e.prototype.moveTo = function (t, e) {
                return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
            }, e.prototype.lineTo = function (t, e) {
                this.currentPath || this.moveTo(0, 0);
                var r = this.currentPath.points, n = r[r.length - 2], i = r[r.length - 1];
                return n === t && i === e || r.push(t, e), this
            }, e.prototype._initCurve = function (t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
            }, e.prototype.quadraticCurveTo = function (t, e, r, n) {
                this._initCurve();
                var i = this.currentPath.points;
                return 0 === i.length && this.moveTo(0, 0), w.curveTo(t, e, r, n, i), this
            }, e.prototype.bezierCurveTo = function (t, e, r, n, i, o) {
                return this._initCurve(), I.curveTo(t, e, r, n, i, o, this.currentPath.points), this
            }, e.prototype.arcTo = function (t, e, r, n, i) {
                this._initCurve(t, e);
                var o = this.currentPath.points, s = S.curveTo(t, e, r, n, i, o);
                if (s) {
                    var a = s.cx, u = s.cy, h = s.radius, c = s.startAngle, l = s.endAngle, f = s.anticlockwise;
                    this.arc(a, u, h, c, l, f)
                }
                return this
            }, e.prototype.arc = function (t, e, r, n, i, o) {
                if (void 0 === o && (o = !1), n === i) return this;
                if (!o && i <= n ? i += p.f : o && n <= i && (n += p.f), 0 == i - n) return this;
                var s = t + Math.cos(n) * r, a = e + Math.sin(n) * r, u = this._geometry.closePointEps,
                    h = this.currentPath ? this.currentPath.points : null;
                if (h) {
                    var c = Math.abs(h[h.length - 2] - s), l = Math.abs(h[h.length - 1] - a);
                    c < u && l < u || h.push(s, a)
                } else this.moveTo(s, a), h = this.currentPath.points;
                return S.arc(s, a, t, e, r, n, i, o, h), this
            }, e.prototype.beginFill = function (t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill({
                    texture: d._3.WHITE,
                    color: t,
                    alpha: e
                })
            }, e.prototype.beginTextureFill = function (t) {
                t = Object.assign({
                    texture: d._3.WHITE,
                    color: 16777215,
                    alpha: 1,
                    matrix: null
                }, t), this.currentPath && this.startPoly();
                var e = t.alpha > 0;
                return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {visible: e}, t)) : this._fillStyle.reset(), this
            }, e.prototype.endFill = function () {
                return this.finishPoly(), this._fillStyle.reset(), this
            }, e.prototype.drawRect = function (t, e, r, n) {
                return this.drawShape(new p.j(t, e, r, n))
            }, e.prototype.drawRoundedRect = function (t, e, r, n, i) {
                return this.drawShape(new p.k(t, e, r, n, i))
            }, e.prototype.drawCircle = function (t, e, r) {
                return this.drawShape(new p.a(t, e, r))
            }, e.prototype.drawEllipse = function (t, e, r, n) {
                return this.drawShape(new p.c(t, e, r, n))
            }, e.prototype.drawPolygon = function () {
                for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
                var n, i = !0, o = e[0];
                o.points ? (i = o.closeStroke, n = o.points) : n = Array.isArray(e[0]) ? e[0] : e;
                var s = new p.h(n);
                return s.closeStroke = i, this.drawShape(s), this
            }, e.prototype.drawShape = function (t) {
                return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
            }, e.prototype.clear = function () {
                return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
            }, e.prototype.isFastRect = function () {
                var t = this._geometry.graphicsData;
                return !(1 !== t.length || t[0].shape.type !== p.l.RECT || t[0].holes.length || t[0].lineStyle.visible && t[0].lineStyle.width)
            }, e.prototype._render = function (t) {
                this.finishPoly();
                var e = this._geometry, r = t.context.supports.uint32Indices;
                e.updateBatches(r), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
            }, e.prototype._populateBatches = function () {
                var t = this._geometry, e = this.blendMode, r = t.batches.length;
                this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = r, this.vertexData = new Float32Array(t.points);
                for (var n = 0; n < r; n++) {
                    var i = t.batches[n], o = i.style.color,
                        s = new Float32Array(this.vertexData.buffer, 4 * i.attribStart * 2, 2 * i.attribSize),
                        a = new Float32Array(t.uvsFloat32.buffer, 4 * i.attribStart * 2, 2 * i.attribSize),
                        u = new Uint16Array(t.indicesUint16.buffer, 2 * i.start, i.size), h = {
                            vertexData: s,
                            blendMode: e,
                            indices: u,
                            uvs: a,
                            _batchRGB: Object(_.hex2rgb)(o),
                            _tintRGB: o,
                            _texture: i.style.texture,
                            alpha: i.style.alpha,
                            worldAlpha: 1
                        };
                    this.batches[n] = h
                }
            }, e.prototype._renderBatched = function (t) {
                if (this.batches.length) {
                    t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                    for (var e = 0, r = this.batches.length; e < r; e++) {
                        var n = this.batches[e];
                        n.worldAlpha = this.worldAlpha * n.alpha, t.plugins[this.pluginName].render(n)
                    }
                }
            }, e.prototype._renderDirect = function (t) {
                var e = this._resolveDirectShader(t), r = this._geometry, n = this.tint, i = this.worldAlpha,
                    o = e.uniforms, s = r.drawCalls;
                o.translationMatrix = this.transform.worldTransform, o.tint[0] = (n >> 16 & 255) / 255 * i, o.tint[1] = (n >> 8 & 255) / 255 * i, o.tint[2] = (255 & n) / 255 * i, o.tint[3] = i, t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);
                for (var a = 0, u = s.length; a < u; a++) this._renderDrawCallDirect(t, r.drawCalls[a])
            }, e.prototype._renderDrawCallDirect = function (t, e) {
                for (var r = e.texArray, n = e.type, i = e.size, o = e.start, s = r.count, a = 0; a < s; a++) t.texture.bind(r.elements[a], a);
                t.geometry.draw(n, i, o)
            }, e.prototype._resolveDirectShader = function (t) {
                var e = this.shader, r = this.pluginName;
                if (!e) {
                    if (!k[r]) {
                        for (var n = t.plugins.batch.MAX_TEXTURES, i = new Int32Array(n), o = 0; o < n; o++) i[o] = o;
                        var s = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new p.d,
                            default: d._8.from({uSamplers: i}, !0)
                        }, a = t.plugins[r]._shader.program;
                        k[r] = new d.W(a, s)
                    }
                    e = k[r]
                }
                return e
            }, e.prototype._calculateBounds = function () {
                this.finishPoly();
                var t = this._geometry;
                if (t.graphicsData.length) {
                    var e = t.bounds, r = e.minX, n = e.minY, i = e.maxX, o = e.maxY;
                    this._bounds.addFrame(this.transform, r, n, i, o)
                }
            }, e.prototype.containsPoint = function (t) {
                return this.worldTransform.applyInverse(t, e._TEMP_POINT), this._geometry.containsPoint(e._TEMP_POINT)
            }, e.prototype.calculateTints = function () {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;
                    for (var t = Object(_.hex2rgb)(this.tint, G), e = 0; e < this.batches.length; e++) {
                        var r = this.batches[e], n = r._batchRGB, i = t[0] * n[0] * 255, o = t[1] * n[1] * 255,
                            s = t[2] * n[2] * 255, a = (i << 16) + (o << 8) + (0 | s);
                        r._tintRGB = (a >> 16) + (65280 & a) + ((255 & a) << 16)
                    }
                }
            }, e.prototype.calculateVertices = function () {
                var t = this.transform._worldID;
                if (this._transformID !== t) {
                    this._transformID = t;
                    for (var e = this.transform.worldTransform, r = e.a, n = e.b, i = e.c, o = e.d, s = e.tx, a = e.ty, u = this._geometry.points, h = this.vertexData, c = 0, l = 0; l < u.length; l += 2) {
                        var f = u[l], d = u[l + 1];
                        h[c++] = r * f + i * d + s, h[c++] = o * d + n * f + a
                    }
                }
            }, e.prototype.closePath = function () {
                var t = this.currentPath;
                return t && (t.closeStroke = !0, this.finishPoly()), this
            }, e.prototype.setMatrix = function (t) {
                return this._matrix = t, this
            }, e.prototype.beginHole = function () {
                return this.finishPoly(), this._holeMode = !0, this
            }, e.prototype.endHole = function () {
                return this.finishPoly(), this._holeMode = !1, this
            }, e.prototype.destroy = function (e) {
                this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e)
            }, e._TEMP_POINT = new p.g, e
        }(v.b), j = {
            buildPoly: x,
            buildCircle: O,
            buildRectangle: R,
            buildRoundedRectangle: A,
            buildLine: c,
            ArcUtils: S,
            BezierUtils: I,
            QuadraticUtils: w,
            BatchPart: P,
            FILL_COMMANDS: M,
            BATCH_POOL: N,
            DRAW_CALL_POOL: C
        }
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return a
    }), r.d(e, "b", function () {
        return u
    });
    var n = r(2), i = r(0), o = r(1), s = r(10), a = function () {
        function t(t, e, r) {
            void 0 === r && (r = null), this._texture = t instanceof i._3 ? t : null, this.baseTexture = t instanceof i.h ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
            var n = this.baseTexture.resource;
            this.resolution = this._updateResolution(r || (n ? n.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
        }

        return t.prototype._updateResolution = function (t) {
            void 0 === t && (t = null);
            var e = this.data.meta.scale, r = Object(o.getResolutionOfUrl)(t, null);
            return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && this.baseTexture.setResolution(r), r
        }, t.prototype.parse = function (e) {
            this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
        }, t.prototype._processFrames = function (e) {
            for (var r = e, o = t.BATCH_SIZE; r - e < o && r < this._frameKeys.length;) {
                var s = this._frameKeys[r], a = this._frames[s], u = a.frame;
                if (u) {
                    var h = null, c = null, l = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame,
                        f = new n.j(0, 0, Math.floor(l.w) / this.resolution, Math.floor(l.h) / this.resolution);
                    h = a.rotated ? new n.j(Math.floor(u.x) / this.resolution, Math.floor(u.y) / this.resolution, Math.floor(u.h) / this.resolution, Math.floor(u.w) / this.resolution) : new n.j(Math.floor(u.x) / this.resolution, Math.floor(u.y) / this.resolution, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution), !1 !== a.trimmed && a.spriteSourceSize && (c = new n.j(Math.floor(a.spriteSourceSize.x) / this.resolution, Math.floor(a.spriteSourceSize.y) / this.resolution, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution)), this.textures[s] = new i._3(this.baseTexture, h, f, c, a.rotated ? 2 : 0, a.anchor), i._3.addToCache(this.textures[s], s)
                }
                r++
            }
        }, t.prototype._processAnimations = function () {
            var t = this.data.animations || {};
            for (var e in t) {
                this.animations[e] = [];
                for (var r = 0; r < t[e].length; r++) {
                    var n = t[e][r];
                    this.animations[e].push(this.textures[n])
                }
            }
        }, t.prototype._parseComplete = function () {
            var t = this._callback;
            this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
        }, t.prototype._nextBatch = function () {
            var e = this;
            this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout(function () {
                e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
            }, 0)
        }, t.prototype.destroy = function (t) {
            var e;
            void 0 === t && (t = !1);
            for (var r in this.textures) this.textures[r].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null === (e = this._texture) || void 0 === e || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null
        }, t.BATCH_SIZE = 1e3, t
    }(), u = function () {
        function t() {
        }

        return t.use = function (e, r) {
            var n, i, u = this, h = e.name + "_image";
            if (!e.data || e.type !== s.c.TYPE.JSON || !e.data.frames || u.resources[h]) return void r();
            var c = null === (i = null === (n = e.data) || void 0 === n ? void 0 : n.meta) || void 0 === i ? void 0 : i.related_multi_packs;
            if (Array.isArray(c)) for (var l = 0, f = c; l < f.length; l++) {
                var d = f[l];
                !function (t) {
                    if ("string" != typeof t) return "continue";
                    var r = t.replace(".json", ""), n = o.url.resolve(e.url.replace(u.baseUrl, ""), t);
                    if (u.resources[r] || Object.values(u.resources).some(function (t) {
                        return o.url.format(o.url.parse(t.url)) === n
                    })) return "continue";
                    var i = {
                        crossOrigin: e.crossOrigin,
                        loadType: s.c.LOAD_TYPE.XHR,
                        xhrType: s.c.XHR_RESPONSE_TYPE.JSON,
                        parentResource: e,
                        metadata: e.metadata
                    };
                    u.add(r, n, i)
                }(d)
            }
            var p = {crossOrigin: e.crossOrigin, metadata: e.metadata.imageMetadata, parentResource: e},
                _ = t.getResourcePath(e, u.baseUrl);
            u.add(h, _, p, function (t) {
                if (t.error) return void r(t.error);
                var n = new a(t.texture, e.data, e.url);
                n.parse(function () {
                    e.spritesheet = n, e.textures = n.textures, r()
                })
            })
        }, t.getResourcePath = function (t, e) {
            return t.isDataUrl ? t.data.meta.image : o.url.resolve(t.url.replace(e, ""), t.data.meta.image)
        }, t
    }()
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        h(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return l
    }), r.d(e, "b", function () {
        return m
    });
    var i = r(0), o = r(2), s = r(11), a = r(5), u = r(1), h = function (t, e) {
            return (h = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, c = new o.g, l = function (t) {
            function e(e, r, n) {
                void 0 === r && (r = 100), void 0 === n && (n = 100);
                var s = t.call(this, e) || this;
                return s.tileTransform = new o.m, s._width = r, s._height = n, s.uvMatrix = s.texture.uvMatrix || new i._5(e), s.pluginName = "tilingSprite", s.uvRespectAnchor = !1, s
            }

            return n(e, t), Object.defineProperty(e.prototype, "clampMargin", {
                get: function () {
                    return this.uvMatrix.clampMargin
                }, set: function (t) {
                    this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "tileScale", {
                get: function () {
                    return this.tileTransform.scale
                }, set: function (t) {
                    this.tileTransform.scale.copyFrom(t)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "tilePosition", {
                get: function () {
                    return this.tileTransform.position
                }, set: function (t) {
                    this.tileTransform.position.copyFrom(t)
                }, enumerable: !1, configurable: !0
            }), e.prototype._onTextureUpdate = function () {
                this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
            }, e.prototype._render = function (t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
            }, e.prototype._calculateBounds = function () {
                var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y,
                    r = this._width * (1 - this._anchor._x), n = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, r, n)
            }, e.prototype.getLocalBounds = function (e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new o.j), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, c);
                var e = this._width, r = this._height, n = -e * this.anchor._x;
                if (c.x >= n && c.x < n + e) {
                    var i = -r * this.anchor._y;
                    if (c.y >= i && c.y < i + r) return !0
                }
                return !1
            }, e.prototype.destroy = function (e) {
                t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null
            }, e.from = function (t, r) {
                return new e(t instanceof i._3 ? t : i._3.from(t, r), r.width, r.height)
            }, Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this._width
                }, set: function (t) {
                    this._width = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function () {
                    return this._height
                }, set: function (t) {
                    this._height = t
                }, enumerable: !1, configurable: !0
            }), e
        }(s.a),
        f = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        d = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
        p = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
        _ = new o.d, m = function (t) {
            function e(e) {
                var r = t.call(this, e) || this, n = {globals: r.renderer.globalUniforms};
                return r.shader = i.W.from(f, d, n), r.simpleShader = i.W.from(f, p, n), r.quad = new i.O, r.state = i.Z.for2d(), r
            }

            return n(e, t), e.prototype.render = function (t) {
                var e = this.renderer, r = this.quad, n = r.vertices;
                n[0] = n[6] = t._width * -t.anchor.x, n[1] = n[3] = t._height * -t.anchor.y, n[2] = n[4] = t._width * (1 - t.anchor.x), n[5] = n[7] = t._height * (1 - t.anchor.y);
                var i = t.uvRespectAnchor ? t.anchor.x : 0, o = t.uvRespectAnchor ? t.anchor.y : 0;
                n = r.uvs, n[0] = n[6] = -i, n[1] = n[3] = -o, n[2] = n[4] = 1 - i, n[5] = n[7] = 1 - o, r.invalidate();
                var s = t._texture, h = s.baseTexture, c = t.tileTransform.localTransform, l = t.uvMatrix,
                    f = h.isPowerOfTwo && s.frame.width === h.width && s.frame.height === h.height;
                f && (h._glTextures[e.CONTEXT_UID] ? f = h.wrapMode !== a.s.CLAMP : h.wrapMode === a.s.CLAMP && (h.wrapMode = a.s.REPEAT));
                var d = f ? this.simpleShader : this.shader, p = s.width, m = s.height, v = t._width, g = t._height;
                _.set(c.a * p / v, c.b * p / g, c.c * m / v, c.d * m / g, c.tx / v, c.ty / g), _.invert(), f ? _.prepend(l.mapCoord) : (d.uniforms.uMapCoord = l.mapCoord.toArray(!0), d.uniforms.uClampFrame = l.uClampFrame, d.uniforms.uClampOffset = l.uClampOffset), d.uniforms.uTransform = _.toArray(!0), d.uniforms.uColor = Object(u.premultiplyTintToRgba)(t.tint, t.worldAlpha, d.uniforms.uColor, h.alphaMode), d.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), d.uniforms.uSampler = s, e.shader.bind(d), e.geometry.bind(r), this.state.blendMode = Object(u.correctBlendMode)(t.blendMode, h.alphaMode), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
            }, e
        }(i.K)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        m(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t) {
        for (var e = 0; e < E.length; e++) if (E[e].test(t)) return E[e];
        return null
    }

    function o(t, e, r, n, i, o) {
        var s = r.fill;
        if (!Array.isArray(s)) return s;
        if (1 === s.length) return s[0];
        var a, u = r.dropShadow ? r.dropShadowDistance : 0, h = r.padding || 0, c = t.width / n - u - 2 * h,
            l = t.height / n - u - 2 * h, f = s.slice(), p = r.fillGradientStops.slice();
        if (!p.length) for (var _ = f.length + 1, m = 1; m < _; ++m) p.push(m / _);
        if (f.unshift(s[0]), p.unshift(0), f.push(s[s.length - 1]), p.push(1), r.fillGradientType === d.a.LINEAR_VERTICAL) {
            a = e.createLinearGradient(c / 2, h, c / 2, l + h);
            for (var v = 0, g = o.fontProperties.fontSize + r.strokeThickness, y = g / l, m = 0; m < i.length; m++) for (var T = o.lineHeight * m, E = 0; E < f.length; E++) {
                var b = 0;
                b = "number" == typeof p[E] ? p[E] : E / f.length;
                var x = T / l + b * y, O = Math.max(v, x);
                O = Math.min(O, 1), a.addColorStop(O, f[E]), v = O
            }
        } else {
            a = e.createLinearGradient(h, l / 2, c + h, l / 2);
            for (var R = f.length + 1, A = 1, m = 0; m < f.length; m++) {
                var S = void 0;
                S = "number" == typeof p[m] ? p[m] : A / R, a.addColorStop(S, f[m]), A++
            }
        }
        return a
    }

    function s(t, e, r, n, i, s, a) {
        var u = r.text, h = r.fontProperties;
        e.translate(n, i), e.scale(s, s);
        var c = a.strokeThickness / 2, f = -a.strokeThickness / 2;
        e.font = a.toFontString(), e.lineWidth = a.strokeThickness, e.textBaseline = a.textBaseline, e.lineJoin = a.lineJoin, e.miterLimit = a.miterLimit, e.fillStyle = o(t, e, a, s, [u], r), e.strokeStyle = a.stroke;
        var d = a.dropShadowColor, p = Object(l.hex2rgb)("number" == typeof d ? d : Object(l.string2hex)(d));
        a.dropShadow ? (e.shadowColor = "rgba(" + 255 * p[0] + "," + 255 * p[1] + "," + 255 * p[2] + "," + a.dropShadowAlpha + ")", e.shadowBlur = a.dropShadowBlur, e.shadowOffsetX = Math.cos(a.dropShadowAngle) * a.dropShadowDistance, e.shadowOffsetY = Math.sin(a.dropShadowAngle) * a.dropShadowDistance) : (e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0), a.stroke && a.strokeThickness && e.strokeText(u, c, f + r.lineHeight - h.descent), a.fill && e.fillText(u, c, f + r.lineHeight - h.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)"
    }

    function a(t) {
        "string" == typeof t && (t = [t]);
        for (var e = [], r = 0, n = t.length; r < n; r++) {
            var i = t[r];
            if (Array.isArray(i)) {
                if (2 !== i.length) throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + i.length + ".");
                var o = i[0].charCodeAt(0), s = i[1].charCodeAt(0);
                if (s < o) throw new Error("[BitmapFont]: Invalid character range.");
                for (var a = o, u = s; a <= u; a++) e.push(String.fromCharCode(a))
            } else e.push.apply(e, i.split(""))
        }
        if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
        return e
    }

    r.d(e, "a", function () {
        return b
    }), r.d(e, "b", function () {
        return v
    }), r.d(e, "c", function () {
        return A
    }), r.d(e, "d", function () {
        return R
    });
    var u = r(2), h = r(3), c = r(16), l = r(1), f = r(0), d = r(15), p = r(4), _ = r(10), m = function (t, e) {
        return (m = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, v = function () {
        function t() {
            this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = []
        }

        return t
    }(), g = function () {
        function t() {
        }

        return t.test = function (t) {
            return "string" == typeof t && 0 === t.indexOf("info face=")
        }, t.parse = function (t) {
            var e = t.match(/^[a-z]+\s+.+$/gm),
                r = {info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: []};
            for (var n in e) {
                var i = e[n].match(/^[a-z]+/gm)[0], o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), s = {};
                for (var a in o) {
                    var u = o[a].split("="), h = u[0], c = u[1].replace(/"/gm, ""), l = parseFloat(c),
                        f = isNaN(l) ? c : l;
                    s[h] = f
                }
                r[i].push(s)
            }
            var d = new v;
            return r.info.forEach(function (t) {
                return d.info.push({face: t.face, size: parseInt(t.size, 10)})
            }), r.common.forEach(function (t) {
                return d.common.push({lineHeight: parseInt(t.lineHeight, 10)})
            }), r.page.forEach(function (t) {
                return d.page.push({id: parseInt(t.id, 10), file: t.file})
            }), r.char.forEach(function (t) {
                return d.char.push({
                    id: parseInt(t.id, 10),
                    page: parseInt(t.page, 10),
                    x: parseInt(t.x, 10),
                    y: parseInt(t.y, 10),
                    width: parseInt(t.width, 10),
                    height: parseInt(t.height, 10),
                    xoffset: parseInt(t.xoffset, 10),
                    yoffset: parseInt(t.yoffset, 10),
                    xadvance: parseInt(t.xadvance, 10)
                })
            }), r.kerning.forEach(function (t) {
                return d.kerning.push({
                    first: parseInt(t.first, 10),
                    second: parseInt(t.second, 10),
                    amount: parseInt(t.amount, 10)
                })
            }), d
        }, t
    }(), y = function () {
        function t() {
        }

        return t.test = function (t) {
            return t instanceof XMLDocument && t.getElementsByTagName("page").length && null !== t.getElementsByTagName("info")[0].getAttribute("face")
        }, t.parse = function (t) {
            for (var e = new v, r = t.getElementsByTagName("info"), n = t.getElementsByTagName("common"), i = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), s = t.getElementsByTagName("kerning"), a = 0; a < r.length; a++) e.info.push({
                face: r[a].getAttribute("face"),
                size: parseInt(r[a].getAttribute("size"), 10)
            });
            for (var a = 0; a < n.length; a++) e.common.push({lineHeight: parseInt(n[a].getAttribute("lineHeight"), 10)});
            for (var a = 0; a < i.length; a++) e.page.push({
                id: parseInt(i[a].getAttribute("id"), 10) || 0,
                file: i[a].getAttribute("file")
            });
            for (var a = 0; a < o.length; a++) {
                var u = o[a];
                e.char.push({
                    id: parseInt(u.getAttribute("id"), 10),
                    page: parseInt(u.getAttribute("page"), 10) || 0,
                    x: parseInt(u.getAttribute("x"), 10),
                    y: parseInt(u.getAttribute("y"), 10),
                    width: parseInt(u.getAttribute("width"), 10),
                    height: parseInt(u.getAttribute("height"), 10),
                    xoffset: parseInt(u.getAttribute("xoffset"), 10),
                    yoffset: parseInt(u.getAttribute("yoffset"), 10),
                    xadvance: parseInt(u.getAttribute("xadvance"), 10)
                })
            }
            for (var a = 0; a < s.length; a++) e.kerning.push({
                first: parseInt(s[a].getAttribute("first"), 10),
                second: parseInt(s[a].getAttribute("second"), 10),
                amount: parseInt(s[a].getAttribute("amount"), 10)
            });
            return e
        }, t
    }(), T = function () {
        function t() {
        }

        return t.test = function (t) {
            if ("string" == typeof t && t.indexOf("<font>") > -1) {
                var e = (new self.DOMParser).parseFromString(t, "text/xml");
                return y.test(e)
            }
            return !1
        }, t.parse = function (t) {
            var e = (new self.DOMParser).parseFromString(t, "text/xml");
            return y.parse(e)
        }, t
    }(), E = [g, y, T], b = function () {
        function t(t, e, r) {
            var n = t.info[0], i = t.common[0], o = t.page[0], s = Object(l.getResolutionOfUrl)(o.file), a = {};
            this._ownsTextures = r, this.font = n.face, this.size = n.size, this.lineHeight = i.lineHeight / s, this.chars = {}, this.pageTextures = a;
            for (var h = 0; h < t.page.length; h++) {
                var c = t.page[h], d = c.id, p = c.file;
                a[d] = e instanceof Array ? e[h] : e[p]
            }
            for (var h = 0; h < t.char.length; h++) {
                var _ = t.char[h], d = _.id, m = _.page, v = t.char[h], g = v.x, y = v.y, T = v.width, E = v.height,
                    b = v.xoffset, x = v.yoffset, O = v.xadvance;
                g /= s, y /= s, T /= s, E /= s, b /= s, x /= s, O /= s;
                var R = new u.j(g + a[m].frame.x / s, y + a[m].frame.y / s, T, E);
                this.chars[d] = {
                    xOffset: b,
                    yOffset: x,
                    xAdvance: O,
                    kerning: {},
                    texture: new f._3(a[m].baseTexture, R),
                    page: m
                }
            }
            for (var h = 0; h < t.kerning.length; h++) {
                var A = t.kerning[h], S = A.first, I = A.second, w = A.amount;
                S /= s, I /= s, w /= s, this.chars[I] && (this.chars[I].kerning[S] = w)
            }
        }

        return t.prototype.destroy = function () {
            for (var t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;
            for (var t in this.pageTextures) this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;
            this.chars = null, this.pageTextures = null
        }, t.install = function (e, r, n) {
            var o;
            if (e instanceof v) o = e; else {
                var s = i(e);
                if (!s) throw new Error("Unrecognized data format for font.");
                o = s.parse(e)
            }
            r instanceof f._3 && (r = [r]);
            var a = new t(o, r, n);
            return t.available[a.font] = a, a
        }, t.uninstall = function (e) {
            var r = t.available[e];
            if (!r) throw new Error("No font found named '" + e + "'");
            r.destroy(), delete t.available[e]
        }, t.from = function (e, r, n) {
            if (!e) throw new Error("[BitmapFont] Property `name` is required.");
            var i = Object.assign({}, t.defaultOptions, n), o = i.chars, u = i.padding, h = i.resolution,
                c = i.textureWidth, l = i.textureHeight, p = a(o), _ = r instanceof d.d ? r : new d.d(r), m = c,
                g = new v;
            g.info[0] = {face: _.fontFamily, size: _.fontSize}, g.common[0] = {lineHeight: _.fontSize};
            for (var y, T, E, b = 0, x = 0, O = 0, R = [], A = 0; A < p.length; A++) {
                y || (y = document.createElement("canvas"), y.width = c, y.height = l, T = y.getContext("2d"), E = new f.h(y, {resolution: h}), R.push(new f._3(E)), g.page.push({
                    id: R.length - 1,
                    file: ""
                }));
                var S = d.c.measureText(p[A], _, !1, y), I = S.width, w = Math.ceil(S.height),
                    P = Math.ceil(("italic" === _.fontStyle ? 2 : 1) * I);
                if (x >= l - w * h) {
                    if (0 === x) throw new Error("[BitmapFont] textureHeight " + l + "px is too small for " + _.fontSize + "px fonts");
                    --A, y = null, T = null, E = null, x = 0, b = 0, O = 0
                } else if (O = Math.max(w + S.fontProperties.descent, O), P * h + b >= m) --A, x += O * h, x = Math.ceil(x), b = 0, O = 0; else {
                    s(y, T, S, b, x, h, _);
                    var M = S.text.charCodeAt(0);
                    g.char.push({
                        id: M,
                        page: R.length - 1,
                        x: b / h,
                        y: x / h,
                        width: P,
                        height: w,
                        xoffset: 0,
                        yoffset: 0,
                        xadvance: Math.ceil(I - (_.dropShadow ? _.dropShadowDistance : 0) - (_.stroke ? _.strokeThickness : 0))
                    }), b += (P + 2 * u) * h, b = Math.ceil(b)
                }
            }
            for (var A = 0, N = p.length; A < N; A++) for (var C = p[A], D = 0; D < N; D++) {
                var L = p[D], F = T.measureText(C).width, U = T.measureText(L).width, B = T.measureText(C + L).width,
                    G = B - (F + U);
                G && g.kerning.push({first: C.charCodeAt(0), second: L.charCodeAt(0), amount: G})
            }
            var k = new t(g, R, !0);
            return void 0 !== t.available[e] && t.uninstall(e), t.available[e] = k, k
        }, t.ALPHA = [["a", "z"], ["A", "Z"], " "], t.NUMERIC = [["0", "9"]], t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], t.ASCII = [[" ", "~"]], t.defaultOptions = {
            resolution: 1,
            textureWidth: 512,
            textureHeight: 512,
            padding: 4,
            chars: t.ALPHANUMERIC
        }, t.available = {}, t
    }(), x = [], O = [], R = function (t) {
        function e(r, n) {
            void 0 === n && (n = {});
            var i = t.call(this) || this;
            i._tint = 16777215;
            var o = Object.assign({}, e.styleDefaults, n), s = o.align, a = o.tint, c = o.maxWidth, l = o.letterSpacing,
                f = o.fontName, d = o.fontSize;
            if (!b.available[f]) throw new Error('Missing BitmapFont "' + f + '"');
            return i._activePagesMeshData = [], i._textWidth = 0, i._textHeight = 0, i._align = s, i._tint = a, i._fontName = f, i._fontSize = d || b.available[f].size, i._text = r, i._maxWidth = c, i._maxLineHeight = 0, i._letterSpacing = l, i._anchor = new u.e(function () {
                i.dirty = !0
            }, i, 0, 0), i._roundPixels = h.b.ROUND_PIXELS, i.dirty = !0, i._textureCache = {}, i
        }

        return n(e, t), e.prototype.updateText = function () {
            for (var t, e = b.available[this._fontName], r = this._fontSize / e.size, n = new u.g, i = [], o = [], s = [], a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h = a.length, d = this._maxWidth * e.size / this._fontSize, p = null, _ = 0, m = 0, v = 0, g = -1, y = 0, T = 0, E = 0, R = 0, A = 0; A < h; A++) {
                var S = a.charCodeAt(A), I = a.charAt(A);
                if (/(?:\s)/.test(I) && (g = A, y = _, R++), "\r" !== I && "\n" !== I) {
                    var w = e.chars[S];
                    if (w) {
                        p && w.kerning[p] && (n.x += w.kerning[p]);
                        var P = O.pop() || {
                            texture: f._3.EMPTY,
                            line: 0,
                            charCode: 0,
                            prevSpaces: 0,
                            position: new u.g
                        };
                        P.texture = w.texture, P.line = v, P.charCode = S, P.position.x = n.x + w.xOffset + this._letterSpacing / 2, P.position.y = n.y + w.yOffset, P.prevSpaces = R, i.push(P), _ = P.position.x + w.texture.orig.width, n.x += w.xAdvance + this._letterSpacing, E = Math.max(E, w.yOffset + w.texture.height), p = S, -1 !== g && d > 0 && n.x > d && (++T, Object(l.removeItems)(i, 1 + g - T, 1 + A - g), A = g, g = -1, o.push(y), s.push(i.length > 0 ? i[i.length - 1].prevSpaces : 0), m = Math.max(m, y), v++, n.x = 0, n.y += e.lineHeight, p = null, R = 0)
                    }
                } else o.push(_), s.push(-1), m = Math.max(m, _), ++v, ++T, n.x = 0, n.y += e.lineHeight, p = null, R = 0
            }
            var M = a.charAt(a.length - 1);
            "\r" !== M && "\n" !== M && (/(?:\s)/.test(M) && (_ = y), o.push(_), m = Math.max(m, _), s.push(-1));
            for (var N = [], A = 0; A <= v; A++) {
                var C = 0;
                "right" === this._align ? C = m - o[A] : "center" === this._align ? C = (m - o[A]) / 2 : "justify" === this._align && (C = s[A] < 0 ? 0 : (m - o[A]) / s[A]), N.push(C)
            }
            for (var D = i.length, L = {}, F = [], U = this._activePagesMeshData, A = 0; A < U.length; A++) x.push(U[A]);
            for (var A = 0; A < D; A++) {
                var B = i[A].texture, G = B.baseTexture.uid;
                if (!L[G]) {
                    var k = x.pop();
                    if (!k) {
                        var X = new c.c, j = new c.d(f._3.EMPTY);
                        k = {
                            index: 0,
                            indexCount: 0,
                            vertexCount: 0,
                            uvsCount: 0,
                            total: 0,
                            mesh: new c.a(X, j),
                            vertices: null,
                            uvs: null,
                            indices: null
                        }
                    }
                    k.index = 0, k.indexCount = 0, k.vertexCount = 0, k.uvsCount = 0, k.total = 0;
                    var H = this._textureCache;
                    H[G] = H[G] || new f._3(B.baseTexture), k.mesh.texture = H[G], k.mesh.tint = this._tint, F.push(k), L[G] = k
                }
                L[G].total++
            }
            for (var A = 0; A < U.length; A++) -1 === F.indexOf(U[A]) && this.removeChild(U[A].mesh);
            for (var A = 0; A < F.length; A++) F[A].mesh.parent !== this && this.addChild(F[A].mesh);
            this._activePagesMeshData = F;
            for (var A in L) {
                var k = L[A], Y = k.total;
                if (!((null === (t = k.indices) || void 0 === t ? void 0 : t.length) > 6 * Y) || k.vertices.length < 2 * c.a.BATCHABLE_SIZE) k.vertices = new Float32Array(8 * Y), k.uvs = new Float32Array(8 * Y), k.indices = new Uint16Array(6 * Y); else for (var V = k.total, z = k.vertices, W = 4 * V * 2; W < z.length; W++) z[W] = 0;
                k.mesh.size = 6 * Y
            }
            for (var A = 0; A < D; A++) {
                var I = i[A], q = I.position.x + N[I.line] * ("justify" === this._align ? I.prevSpaces : 1);
                this._roundPixels && (q = Math.round(q));
                var Z = q * r, K = I.position.y * r, B = I.texture, J = L[B.baseTexture.uid], $ = B.frame, Q = B._uvs,
                    tt = J.index++;
                J.indices[6 * tt + 0] = 0 + 4 * tt, J.indices[6 * tt + 1] = 1 + 4 * tt, J.indices[6 * tt + 2] = 2 + 4 * tt, J.indices[6 * tt + 3] = 0 + 4 * tt, J.indices[6 * tt + 4] = 2 + 4 * tt, J.indices[6 * tt + 5] = 3 + 4 * tt, J.vertices[8 * tt + 0] = Z, J.vertices[8 * tt + 1] = K, J.vertices[8 * tt + 2] = Z + $.width * r, J.vertices[8 * tt + 3] = K, J.vertices[8 * tt + 4] = Z + $.width * r, J.vertices[8 * tt + 5] = K + $.height * r, J.vertices[8 * tt + 6] = Z, J.vertices[8 * tt + 7] = K + $.height * r, J.uvs[8 * tt + 0] = Q.x0, J.uvs[8 * tt + 1] = Q.y0, J.uvs[8 * tt + 2] = Q.x1, J.uvs[8 * tt + 3] = Q.y1, J.uvs[8 * tt + 4] = Q.x2, J.uvs[8 * tt + 5] = Q.y2, J.uvs[8 * tt + 6] = Q.x3, J.uvs[8 * tt + 7] = Q.y3
            }
            this._textWidth = m * r, this._textHeight = (n.y + e.lineHeight) * r;
            for (var A in L) {
                var k = L[A];
                if (0 !== this.anchor.x || 0 !== this.anchor.y) for (var et = 0, rt = this._textWidth * this.anchor.x, nt = this._textHeight * this.anchor.y, it = 0; it < k.total; it++) k.vertices[et++] -= rt, k.vertices[et++] -= nt, k.vertices[et++] -= rt, k.vertices[et++] -= nt, k.vertices[et++] -= rt, k.vertices[et++] -= nt, k.vertices[et++] -= rt, k.vertices[et++] -= nt;
                this._maxLineHeight = E * r;
                var ot = k.mesh.geometry.getBuffer("aVertexPosition"), st = k.mesh.geometry.getBuffer("aTextureCoord"),
                    at = k.mesh.geometry.getIndex();
                ot.data = k.vertices, st.data = k.uvs, at.data = k.indices, ot.update(), st.update(), at.update()
            }
            for (var A = 0; A < i.length; A++) O.push(i[A])
        }, e.prototype.updateTransform = function () {
            this.validate(), this.containerUpdateTransform()
        }, e.prototype.getLocalBounds = function () {
            return this.validate(), t.prototype.getLocalBounds.call(this)
        }, e.prototype.validate = function () {
            this.dirty && (this.updateText(), this.dirty = !1)
        }, Object.defineProperty(e.prototype, "tint", {
            get: function () {
                return this._tint
            }, set: function (t) {
                if (this._tint !== t) {
                    this._tint = t;
                    for (var e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t
                }
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "align", {
            get: function () {
                return this._align
            }, set: function (t) {
                this._align !== t && (this._align = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "fontName", {
            get: function () {
                return this._fontName
            }, set: function (t) {
                if (!b.available[t]) throw new Error('Missing BitmapFont "' + t + '"');
                this._fontName !== t && (this._fontName = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "fontSize", {
            get: function () {
                return this._fontSize
            }, set: function (t) {
                this._fontSize !== t && (this._fontSize = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "anchor", {
            get: function () {
                return this._anchor
            }, set: function (t) {
                "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            }, set: function (t) {
                t = String(null === t || void 0 === t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "maxWidth", {
            get: function () {
                return this._maxWidth
            }, set: function (t) {
                this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "maxLineHeight", {
            get: function () {
                return this.validate(), this._maxLineHeight
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "textWidth", {
            get: function () {
                return this.validate(), this._textWidth
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "letterSpacing", {
            get: function () {
                return this._letterSpacing
            }, set: function (t) {
                this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "roundPixels", {
            get: function () {
                return this._roundPixels
            }, set: function (t) {
                t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "textHeight", {
            get: function () {
                return this.validate(), this._textHeight
            }, enumerable: !1, configurable: !0
        }), e.prototype.destroy = function (e) {
            var r = this._textureCache;
            for (var n in r) {
                r[n].destroy(), delete r[n]
            }
            this._textureCache = null, t.prototype.destroy.call(this, e)
        }, e.styleDefaults = {align: "left", tint: 16777215, maxWidth: 0, letterSpacing: 0}, e
    }(p.b), A = function () {
        function t() {
        }

        return t.add = function () {
            _.c.setExtensionXhrType("fnt", _.c.XHR_RESPONSE_TYPE.TEXT)
        }, t.use = function (e, r) {
            var n = i(e.data);
            if (!n) return void r();
            for (var o = t.getBaseUrl(this, e), s = n.parse(e.data), a = {}, u = function (t) {
                a[t.metadata.pageFile] = t.texture, Object.keys(a).length === s.page.length && (e.bitmapFont = b.install(s, a, !0), r())
            }, h = 0; h < s.page.length; ++h) {
                var c = s.page[h].file, l = o + c, f = !1;
                for (var d in this.resources) {
                    var p = this.resources[d];
                    if (p.url === l) {
                        p.metadata.pageFile = c, p.texture ? u(p) : p.onAfterMiddleware.add(u), f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = {
                        crossOrigin: e.crossOrigin,
                        loadType: _.c.LOAD_TYPE.IMAGE,
                        metadata: Object.assign({pageFile: c}, e.metadata.imageMetadata),
                        parentResource: e
                    };
                    this.add(l, m, u)
                }
            }
        }, t.getBaseUrl = function (e, r) {
            var n = r.isDataUrl ? "" : t.dirname(r.url);
            return r.isDataUrl && ("." === n && (n = ""), e.baseUrl && n && "/" === e.baseUrl.charAt(e.baseUrl.length - 1) && (n += "/")), n = n.replace(e.baseUrl, ""), n && "/" !== n.charAt(n.length - 1) && (n += "/"), n
        }, t.dirname = function (t) {
            var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
            return e === t ? "." : "" === e ? "/" : e
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "gsap", function () {
        return o
    }), r.d(e, "default", function () {
        return o
    }), r.d(e, "TweenMax", function () {
        return s
    });
    var n = r(32), i = r(74);
    r.d(e, "CSSPlugin", function () {
        return i.a
    }), r.d(e, "TweenLite", function () {
        return n.w
    }), r.d(e, "TimelineMax", function () {
        return n.v
    }), r.d(e, "TimelineLite", function () {
        return n.u
    }), r.d(e, "Power0", function () {
        return n.i
    }), r.d(e, "Power1", function () {
        return n.j
    }), r.d(e, "Power2", function () {
        return n.k
    }), r.d(e, "Power3", function () {
        return n.l
    }), r.d(e, "Power4", function () {
        return n.m
    }), r.d(e, "Linear", function () {
        return n.h
    }), r.d(e, "Quad", function () {
        return n.o
    }), r.d(e, "Cubic", function () {
        return n.d
    }), r.d(e, "Quart", function () {
        return n.p
    }), r.d(e, "Quint", function () {
        return n.q
    }), r.d(e, "Strong", function () {
        return n.t
    }), r.d(e, "Elastic", function () {
        return n.e
    }), r.d(e, "Back", function () {
        return n.a
    }), r.d(e, "SteppedEase", function () {
        return n.s
    }), r.d(e, "Bounce", function () {
        return n.b
    }), r.d(e, "Sine", function () {
        return n.r
    }), r.d(e, "Expo", function () {
        return n.f
    }), r.d(e, "Circ", function () {
        return n.c
    });
    var o = n.S.registerPlugin(i.a) || n.S, s = o.core.Tween
}, function (t, e, r) {
    "use strict";

    function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    r.d(e, "g", function () {
        return Ge
    }), r.d(e, "n", function () {
        return fr
    }), r.d(e, "S", function () {
        return vr
    }), r.d(e, "i", function () {
        return gr
    }), r.d(e, "j", function () {
        return yr
    }), r.d(e, "k", function () {
        return Tr
    }), r.d(e, "l", function () {
        return Er
    }), r.d(e, "m", function () {
        return br
    }), r.d(e, "h", function () {
        return xr
    }), r.d(e, "o", function () {
        return Or
    }), r.d(e, "d", function () {
        return Rr
    }), r.d(e, "p", function () {
        return Ar
    }), r.d(e, "q", function () {
        return Sr
    }), r.d(e, "t", function () {
        return Ir
    }), r.d(e, "e", function () {
        return wr
    }), r.d(e, "a", function () {
        return Pr
    }), r.d(e, "s", function () {
        return Mr
    }), r.d(e, "b", function () {
        return Nr
    }), r.d(e, "r", function () {
        return Cr
    }), r.d(e, "f", function () {
        return Dr
    }), r.d(e, "c", function () {
        return Lr
    }), r.d(e, "w", function () {
        return $e
    }), r.d(e, "v", function () {
        return Xe
    }), r.d(e, "u", function () {
        return Xe
    }), r.d(e, "R", function () {
        return Vt
    }), r.d(e, "D", function () {
        return nt
    }), r.d(e, "I", function () {
        return D
    }), r.d(e, "J", function () {
        return L
    }), r.d(e, "F", function () {
        return x
    }), r.d(e, "G", function () {
        return A
    }), r.d(e, "M", function () {
        return sr
    }), r.d(e, "L", function () {
        return U
    }), r.d(e, "B", function () {
        return it
    }), r.d(e, "P", function () {
        return lr
    }), r.d(e, "z", function () {
        return xe
    }), r.d(e, "N", function () {
        return he
    }), r.d(e, "x", function () {
        return ze
    }), r.d(e, "K", function () {
        return K
    }), r.d(e, "Q", function () {
        return Oe
    }), r.d(e, "A", function () {
        return p
    }), r.d(e, "O", function () {
        return ot
    }), r.d(e, "H", function () {
        return H
    }), r.d(e, "E", function () {
        return nr
    }), r.d(e, "C", function () {
        return rt
    }), r.d(e, "y", function () {
        return Ee
    });/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var o, s, a, u, h, c, l, f, d, p = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        _ = {duration: .5, overwrite: !1, delay: 0}, m = 1e-8, v = 2 * Math.PI, g = v / 4, y = 0, T = Math.sqrt,
        E = Math.cos, b = Math.sin, x = function (t) {
            return "string" == typeof t
        }, O = function (t) {
            return "function" == typeof t
        }, R = function (t) {
            return "number" == typeof t
        }, A = function (t) {
            return void 0 === t
        }, S = function (t) {
            return "object" == typeof t
        }, I = function (t) {
            return !1 !== t
        }, w = function () {
            return "undefined" != typeof window
        }, P = function (t) {
            return O(t) || x(t)
        }, M = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, N = Array.isArray, C = /(?:-?\.?\d|\.)+/gi, D = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        L = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, F = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, U = /[+-]=-?[.\d]+/,
        B = /[^,'"\[\]\s]+/gi, G = /[\d.+\-=]+(?:e[-+]\d*)*/i, k = {}, X = {}, j = function (t) {
            return (X = pt(t, k)) && vr
        }, H = function (t, e) {
        }, Y = function (t, e) {
            return !e && void 0
        }, V = function (t, e) {
            return t && (k[t] = e) && X && (X[t] = e) || k
        }, z = function () {
            return 0
        }, W = {}, q = [], Z = {}, K = {}, J = {}, $ = 30, Q = [], tt = "", et = function (t) {
            var e, r, n = t[0];
            if (S(n) || O(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = Q.length; r-- && !Q[r].targetTest(n);) ;
                e = Q[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ge(t[r], e))) || t.splice(r, 1);
            return t
        }, rt = function (t) {
            return t._gsap || et(Kt(t))[0]._gsap
        }, nt = function (t, e, r) {
            return (r = t[e]) && O(r) ? t[e]() : A(r) && t.getAttribute && t.getAttribute(e) || r
        }, it = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, ot = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, st = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0
        }, at = function (t, e) {
            for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;) ;
            return n < r
        }, ut = function () {
            var t, e, r = q.length, n = q.slice(0);
            for (Z = {}, q.length = 0, t = 0; t < r; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }, ht = function (t, e, r, n) {
            q.length && ut(), t.render(e, r, n), q.length && ut()
        }, ct = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(B).length < 2 ? e : x(t) ? t.trim() : t
        }, lt = function (t) {
            return t
        }, ft = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        }, dt = function (t, e) {
            for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
        }, pt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t
        }, _t = function t(e, r) {
            for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = S(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        }, mt = function (t, e) {
            var r, n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n
        }, vt = function (t) {
            var e = t.parent || s, r = t.keyframes ? dt : ft;
            if (I(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        }, gt = function (t, e) {
            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];) ;
            return r < 0
        }, yt = function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var o, s = t[n];
            if (i) for (o = e[i]; s && s[i] > o;) s = s._prev;
            return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
        }, Tt = function (t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev, o = e._next;
            i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        }, Et = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        }, bt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        }, xt = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        }, Ot = function t(e) {
            return !e || e._ts && t(e.parent)
        }, Rt = function (t) {
            return t._repeat ? At(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, At = function (t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        }, St = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, It = function (t) {
            return t._end = st(t._start + (t._tDur / Math.abs(t._ts || t._rts || m) || 0))
        }, wt = function (t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = st(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), It(t), r._dirty || bt(r, t)), t
        }, Pt = function (t, e) {
            var r;
            if ((e._time || e._initted && !e._dur) && (r = St(t.rawTime(), e), (!e._dur || Yt(0, e.totalDuration(), r) - e._tTime > m) && e.render(r, !0)), bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration()) for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -m
            }
        }, Mt = function (t, e, r, n) {
            return e.parent && Et(e), e._start = st((R(r) ? r : r || t !== s ? Xt(t, r, e) : t._time) + e._delay), e._end = st(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), yt(t, e, "_first", "_last", t._sort ? "_start" : 0), Lt(e) || (t._recent = e), n || Pt(t, e), t
        }, Nt = function (t, e) {
            return (k.ScrollTrigger || H("scrollTrigger", e)) && k.ScrollTrigger.create(e, t)
        }, Ct = function (t, e, r, n) {
            return We(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && l !== Oe.frame ? (q.push(t), t._lazy = [e, n], 1) : void 0 : 1
        }, Dt = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        }, Lt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        }, Ft = function (t, e, r, n) {
            var i, o, s, a = t.ratio,
                u = e < 0 || !e && (!t._start && Dt(t) && (t._initted || !Lt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Lt(t)) ? 0 : 1,
                h = t._rDelay, c = 0;
            if (h && t._repeat && (c = Yt(0, t._tDur, e), o = At(c, h), s = At(t._tTime, h), t._yoyo && 1 & o && (u = 1 - u), o !== s && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || t._zTime === m || !e && t._zTime) {
                if (!t._initted && Ct(t, e, n, r)) return;
                for (s = t._zTime, t._zTime = e || (r ? m : 0), r || (r = e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
                t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && de(t, "onUpdate"), c && t._repeat && !r && t.parent && de(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Et(t, 1), r || (de(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        }, Ut = function (t, e, r) {
            var n;
            if (r > e) for (n = t._first; n && n._start <= r;) {
                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                n = n._next
            } else for (n = t._last; n && n._start >= r;) {
                if (!n._dur && "isPause" === n.data && n._start < e) return n;
                n = n._prev
            }
        }, Bt = function (t, e, r, n) {
            var i = t._repeat, o = st(e) || 0, s = t._tTime / t._tDur;
            return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : st(o * (i + 1) + t._rDelay * i) : o, s && !n ? wt(t, t._tTime = t._tDur * s) : t.parent && It(t), r || bt(t.parent, t), t
        }, Gt = function (t) {
            return t instanceof Xe ? bt(t) : Bt(t, t._dur)
        }, kt = {_start: 0, endTime: z, totalDuration: z}, Xt = function t(e, r, n) {
            var i, o, s, a = e.labels, u = e._recent || kt, h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
            return x(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = h), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (N(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : h + o)) : null == r ? h : +r
        }, jt = function (t, e, r) {
            var n, i, o = R(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
            if (o && (a.duration = e[1]), a.parent = r, t) {
                for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = I(i.vars.inherit) && i.parent;
                a.immediateRender = I(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
            }
            return new $e(e[0], a, e[s + 1])
        }, Ht = function (t, e) {
            return t || 0 === t ? e(t) : e
        }, Yt = function (t, e, r) {
            return r < t ? t : r > e ? e : r
        }, Vt = function (t) {
            if ("string" != typeof t) return "";
            var e = G.exec(t);
            return e ? t.substr(e.index + e[0].length) : ""
        }, zt = function (t, e, r) {
            return Ht(r, function (r) {
                return Yt(t, e, r)
            })
        }, Wt = [].slice, qt = function (t, e) {
            return t && S(t) && "length" in t && (!e && !t.length || t.length - 1 in t && S(t[0])) && !t.nodeType && t !== a
        }, Zt = function (t, e, r) {
            return void 0 === r && (r = []), t.forEach(function (t) {
                var n;
                return x(t) && !e || qt(t, 1) ? (n = r).push.apply(n, Kt(t)) : r.push(t)
            }) || r
        }, Kt = function (t, e, r) {
            return !x(t) || r || !u && Re() ? N(t) ? Zt(t, r) : qt(t) ? Wt.call(t, 0) : t ? [t] : [] : Wt.call((e || h).querySelectorAll(t), 0)
        }, Jt = function (t) {
            return t = Kt(t)[0] || Y("Invalid scope") || {}, function (e) {
                var r = t.current || t.nativeElement || t;
                return Kt(e, r.querySelectorAll ? r : r === t ? Y("Invalid scope") || h.createElement("div") : t)
            }
        }, $t = function (t) {
            return t.sort(function () {
                return .5 - Math.random()
            })
        }, Qt = function (t) {
            if (O(t)) return t;
            var e = S(t) ? t : {each: t}, r = De(e.ease), n = e.from || 0, i = parseFloat(e.base) || 0, o = {},
                s = n > 0 && n < 1, a = isNaN(n) || s, u = e.axis, h = n, c = n;
            return x(n) ? h = c = {
                center: .5,
                edges: .5,
                end: 1
            }[n] || 0 : !s && a && (h = n[0], c = n[1]), function (t, s, l) {
                var f, d, p, _, m, v, g, y, E, b = (l || e).length, x = o[b];
                if (!x) {
                    if (!(E = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                        for (g = -1e8; g < (g = l[E++].getBoundingClientRect().left) && E < b;) ;
                        E--
                    }
                    for (x = o[b] = [], f = a ? Math.min(E, b) * h - .5 : n % E, d = a ? b * c / E - .5 : n / E | 0, g = 0, y = 1e8, v = 0; v < b; v++) p = v % E - f, _ = d - (v / E | 0), x[v] = m = u ? Math.abs("y" === u ? _ : p) : T(p * p + _ * _), m > g && (g = m), m < y && (y = m);
                    "random" === n && $t(x), x.max = g - y, x.min = y, x.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (E > b ? b - 1 : u ? "y" === u ? b / E : E : Math.max(E, b / E)) || 0) * ("edges" === n ? -1 : 1), x.b = b < 0 ? i - b : i, x.u = Vt(e.amount || e.each) || 0, r = r && b < 0 ? Ne(r) : r
                }
                return b = (x[t] - x.min) / x.max || 0, st(x.b + (r ? r(b) : b) * x.v) + x.u
            }
        }, te = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
                var n = Math.round(parseFloat(r) / t) * t * e;
                return (n - n % 1) / e + (R(r) ? 0 : Vt(r))
            }
        }, ee = function (t, e) {
            var r, n, i = N(t);
            return !i && S(t) && (r = i = t.radius || 1e8, t.values ? (t = Kt(t.values), (n = !R(t[0])) && (r *= r)) : t = te(t.increment)), Ht(e, i ? O(t) ? function (e) {
                return n = t(e), Math.abs(n - e) <= r ? n : e
            } : function (e) {
                for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = 1e8, h = 0, c = t.length; c--;) n ? (i = t[c].x - s, o = t[c].y - a, i = i * i + o * o) : i = Math.abs(t[c] - s), i < u && (u = i, h = c);
                return h = !r || u <= r ? t[h] : e, n || h === e || R(e) ? h : h + Vt(e)
            } : te(t))
        }, re = function (t, e, r, n) {
            return Ht(N(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
                return N(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
            })
        }, ne = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (t) {
                return e.reduce(function (t, e) {
                    return e(t)
                }, t)
            }
        }, ie = function (t, e) {
            return function (r) {
                return t(parseFloat(r)) + (e || Vt(r))
            }
        }, oe = function (t, e, r) {
            return ce(t, e, 0, 1, r)
        }, se = function (t, e, r) {
            return Ht(r, function (r) {
                return t[~~e(r)]
            })
        }, ae = function t(e, r, n) {
            var i = r - e;
            return N(e) ? se(e, t(0, e.length), r) : Ht(n, function (t) {
                return (i + (t - e) % i) % i + e
            })
        }, ue = function t(e, r, n) {
            var i = r - e, o = 2 * i;
            return N(e) ? se(e, t(0, e.length - 1), r) : Ht(n, function (t) {
                return t = (o + (t - e) % o) % o || 0, e + (t > i ? o - t : t)
            })
        }, he = function (t) {
            for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? B : C), s += t.substr(o, e - o) + re(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
            return s + t.substr(o, t.length - o)
        }, ce = function (t, e, r, n, i) {
            var o = e - t, s = n - r;
            return Ht(i, function (e) {
                return r + ((e - t) / o * s || 0)
            })
        }, le = function t(e, r, n, i) {
            var o = isNaN(e + r) ? 0 : function (t) {
                return (1 - t) * e + t * r
            };
            if (!o) {
                var s, a, u, h, c, l = x(e), f = {};
                if (!0 === n && (i = 1) && (n = null), l) e = {p: e}, r = {p: r}; else if (N(e) && !N(r)) {
                    for (u = [], h = e.length, c = h - 2, a = 1; a < h; a++) u.push(t(e[a - 1], e[a]));
                    h--, o = function (t) {
                        t *= h;
                        var e = Math.min(c, ~~t);
                        return u[e](t - e)
                    }, n = r
                } else i || (e = pt(N(e) ? [] : {}, e));
                if (!u) {
                    for (s in r) Ye.call(f, e, s, "get", r[s]);
                    o = function (t) {
                        return ar(t, f) || (l ? e.p : e)
                    }
                }
            }
            return Ht(n, o)
        }, fe = function (t, e, r) {
            var n, i, o, s = t.labels, a = 1e8;
            for (n in s) (i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
            return o
        }, de = function (t, e, r) {
            var n, i, o = t.vars, s = o[e];
            if (s) return n = o[e + "Params"], i = o.callbackScope || t, r && q.length && ut(), n ? s.apply(i, n) : s.call(i)
        }, pe = function (t) {
            return Et(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && de(t, "onInterrupt"), t
        }, _e = function (t) {
            t = !t.name && t.default || t;
            var e = t.name, r = O(t), n = e && !r && t.init ? function () {
                    this._props = []
                } : t, i = {init: z, render: ar, add: Ye, kill: hr, modifier: ur, rawVars: 0},
                o = {targetTest: 0, get: 0, getSetter: nr, aliases: {}, register: 0};
            if (Re(), t !== n) {
                if (K[e]) return;
                ft(n, ft(mt(t, i), o)), pt(n.prototype, pt(i, mt(t, o))), K[n.prop = e] = n, t.targetTest && (Q.push(n), W[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            V(e, n), t.register && t.register(vr, n, fr)
        }, me = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ve = function (t, e, r) {
            return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, ge = function (t, e, r) {
            var n, i, o, s, a, u, h, c, l, f, d = t ? R(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : me.black;
            if (!d) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]) d = me[t]; else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return d = parseInt(t.substr(1, 6), 16), [d >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
                    t = parseInt(t.substr(1), 16), d = [t >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3)) if (d = f = t.match(C), e) {
                    if (~t.indexOf("=")) return d = t.match(D), r && d.length < 4 && (d[3] = 1), d
                } else s = +d[0] % 360 / 360, a = +d[1] / 100, u = +d[2] / 100, i = u <= .5 ? u * (a + 1) : u + a - u * a, n = 2 * u - i, d.length > 3 && (d[3] *= 1), d[0] = ve(s + 1 / 3, n, i), d[1] = ve(s, n, i), d[2] = ve(s - 1 / 3, n, i); else d = t.match(C) || me.transparent;
                d = d.map(Number)
            }
            return e && !f && (n = d[0] / 255, i = d[1] / 255, o = d[2] / 255, h = Math.max(n, i, o), c = Math.min(n, i, o), u = (h + c) / 2, h === c ? s = a = 0 : (l = h - c, a = u > .5 ? l / (2 - h - c) : l / (h + c), s = h === n ? (i - o) / l + (i < o ? 6 : 0) : h === i ? (o - n) / l + 2 : (n - i) / l + 4, s *= 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * u + .5)), r && d.length < 4 && (d[3] = 1), d
        }, ye = function (t) {
            var e = [], r = [], n = -1;
            return t.split(Ee).forEach(function (t) {
                var i = t.match(L) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            }), e.c = r, e
        }, Te = function (t, e, r) {
            var n, i, o, s, a = "", u = (t + a).match(Ee), h = e ? "hsla(" : "rgba(", c = 0;
            if (!u) return t;
            if (u = u.map(function (t) {
                return (t = ge(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (o = ye(t), n = r.c, n.join(a) !== o.c.join(a))) for (i = t.replace(Ee, "1").split(L), s = i.length - 1; c < s; c++) a += i[c] + (~n.indexOf(c) ? u.shift() || h + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
            if (!i) for (i = t.split(Ee), s = i.length - 1; c < s; c++) a += i[c] + u[c];
            return a + i[s]
        }, Ee = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in me) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(), be = /hsl[a]?\(/, xe = function (t) {
            var e, r = t.join(" ");
            if (Ee.lastIndex = 0, Ee.test(r)) return e = be.test(r), t[1] = Te(t[1], e), t[0] = Te(t[0], e, ye(t[1])), !0
        }, Oe = function () {
            var t, e, r, n, i, o, s = Date.now, l = 500, f = 33, p = s(), _ = p, v = 1e3 / 240, g = v, y = [],
                T = function r(a) {
                    var u, h, c, d, m = s() - _, T = !0 === a;
                    if (m > l && (p += m - f), _ += m, c = _ - p, u = c - g, (u > 0 || T) && (d = ++n.frame, i = c - 1e3 * n.time, n.time = c /= 1e3, g += u + (u >= v ? 4 : v - u), h = 1), T || (t = e(r)), h) for (o = 0; o < y.length; o++) y[o](c, i, d, a)
                };
            return n = {
                time: 0, frame: 0, tick: function () {
                    T(!0)
                }, deltaRatio: function (t) {
                    return i / (1e3 / (t || 60))
                }, wake: function () {
                    c && (!u && w() && (a = u = window, h = a.document || {}, k.gsap = vr, (a.gsapVersions || (a.gsapVersions = [])).push(vr.version), j(X || a.GreenSockGlobals || !a.gsap && a || {}), r = a.requestAnimationFrame), t && n.sleep(), e = r || function (t) {
                        return setTimeout(t, g - 1e3 * n.time + 1 | 0)
                    }, d = 1, T(2))
                }, sleep: function () {
                    (r ? a.cancelAnimationFrame : clearTimeout)(t), d = 0, e = z
                }, lagSmoothing: function (t, e) {
                    l = t || 1 / m, f = Math.min(e, l, 0)
                }, fps: function (t) {
                    v = 1e3 / (t || 240), g = 1e3 * n.time + v
                }, add: function (t) {
                    y.indexOf(t) < 0 && y.push(t), Re()
                }, remove: function (t) {
                    var e;
                    ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--
                }, _listeners: y
            }
        }(), Re = function () {
            return !d && Oe.wake()
        }, Ae = {}, Se = /^[\d.\-M][\d.\-,\s]/, Ie = /["']/g, we = function (t) {
            for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(Ie, "").trim() : +n, s = r.substr(e + 1).trim();
            return i
        }, Pe = function (t) {
            var e = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", e);
            return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
        }, Me = function (t) {
            var e = (t + "").split("("), r = Ae[e[0]];
            return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [we(e[1])] : Pe(t).split(",").map(ct)) : Ae._CE && Se.test(t) ? Ae._CE("", t) : r
        }, Ne = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        }, Ce = function t(e, r) {
            for (var n, i = e._first; i;) i instanceof Xe ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
        }, De = function (t, e) {
            return t ? (O(t) ? t : Ae[t] || Me(t)) || e : e
        }, Le = function (t, e, r, n) {
            void 0 === r && (r = function (t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, o = {easeIn: e, easeOut: r, easeInOut: n};
            return it(t, function (t) {
                Ae[t] = k[t] = o, Ae[i = t.toLowerCase()] = r;
                for (var e in o) Ae[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ae[t + "." + e] = o[e]
            }), o
        }, Fe = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }, Ue = function t(e, r, n) {
            var i = r >= 1 ? r : 1, o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1), s = o / v * (Math.asin(1 / i) || 0),
                a = function (t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * b((t - s) * o) + 1
                }, u = "out" === e ? a : "in" === e ? function (t) {
                    return 1 - a(1 - t)
                } : Fe(a);
            return o = v / o, u.config = function (r, n) {
                return t(e, r, n)
            }, u
        }, Be = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            }, i = "out" === e ? n : "in" === e ? function (t) {
                return 1 - n(1 - t)
            } : Fe(n);
            return i.config = function (r) {
                return t(e, r)
            }, i
        };
    it("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        Le(t + ",Power" + (r - 1), e ? function (t) {
            return Math.pow(t, r)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, r)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn, Le("Elastic", Ue("in"), Ue("out"), Ue()), function (t, e) {
        var r = 1 / e, n = function (n) {
            return n < r ? t * n * n : n < .7272727272727273 ? t * Math.pow(n - 1.5 / e, 2) + .75 : n < .9090909090909092 ? t * (n -= 2.25 / e) * n + .9375 : t * Math.pow(n - 2.625 / e, 2) + .984375
        };
        Le("Bounce", function (t) {
            return 1 - n(1 - t)
        }, n)
    }(7.5625, 2.75), Le("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Le("Circ", function (t) {
        return -(T(1 - t * t) - 1)
    }), Le("Sine", function (t) {
        return 1 === t ? 1 : 1 - E(t * g)
    }), Le("Back", Be("in"), Be("out"), Be()), Ae.SteppedEase = Ae.steps = k.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t, n = t + (e ? 0 : 1), i = e ? 1 : 0, o = 1 - m;
            return function (t) {
                return ((n * Yt(0, o, t) | 0) + i) * r
            }
        }
    }, _.ease = Ae["quad.out"], it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return tt += t + "," + t + "Params,"
    });
    var Ge = function (t, e) {
        this.id = y++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : nt, this.set = e ? e.getSetter : nr
    }, ke = function () {
        function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Bt(this, +t.duration, 1, 1), this.data = t.data, d || Oe.wake()
        }

        var e = t.prototype;
        return e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, Bt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (t, e) {
            if (Re(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (wt(this, t), !r._dp || r.parent || Pt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Mt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === m || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ht(this, t, e)), this
        }, e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? At(this._tTime, r) + 1 : 1
        }, e.timeScale = function (t) {
            if (!arguments.length) return this._rts === -m ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? St(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -m ? 0 : this._rts, xt(this.totalTime(Yt(-this._delay, this._tDur, e), !0)), It(this), this
        }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Re(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== m && (this._tTime -= m)))), this) : this._ps
        }, e.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Mt(e, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function (t) {
            return this._start + (I(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? St(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Gt(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function (t, e) {
            return this.totalTime(Xt(this, t), I(e))
        }, e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, I(e))
        }, e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function () {
            return this.paused(!1)
        }, e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -m : 0)), this) : this._rts < 0
        }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -m, this
        }, e.isActive = function () {
            var t, e = this.parent || this._dp, r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - m))
        }, e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
                var n = O(t) ? t : lt, i = function () {
                    var t = e.then;
                    e.then = null, O(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            })
        }, e.kill = function () {
            pe(this)
        }, t
    }();
    ft(ke.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -m,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Xe = function (t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}), i = t.call(this, e) || this, i.labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = I(e.sortChildren), s && Mt(e.parent || s, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Nt(n(i), e.scrollTrigger), i
        }

        i(e, t);
        var r = e.prototype;
        return r.to = function (t, e, r) {
            return jt(0, arguments, this), this
        }, r.from = function (t, e, r) {
            return jt(1, arguments, this), this
        }, r.fromTo = function (t, e, r, n) {
            return jt(2, arguments, this), this
        }, r.set = function (t, e, r) {
            return e.duration = 0, e.parent = this, vt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $e(t, e, Xt(this, r), 1), this
        }, r.call = function (t, e, r) {
            return Mt(this, $e.delayedCall(0, t, e), r)
        }, r.staggerTo = function (t, e, r, n, i, o, s) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new $e(t, r, Xt(this, i)), this
        }, r.staggerFrom = function (t, e, r, n, i, o, s) {
            return r.runBackwards = 1, vt(r).immediateRender = I(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
        }, r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
            return n.startAt = r, vt(n).immediateRender = I(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
        }, r.render = function (t, e, r) {
            var n, i, o, a, u, h, c, l, f, d, p, _, v = this._time, g = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur, T = t <= 0 ? 0 : st(t), E = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== s && T > g && t >= 0 && (T = g), T !== this._tTime || r || E) {
                if (v !== this._time && y && (T += this._time - v, t += this._time - v), n = T, f = this._start, l = this._ts, h = !l, E && (y || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, u = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
                    if (n = st(T % u), T === g ? (a = this._repeat, n = y) : (a = ~~(T / u), a && a === T / u && (n = y, a--), n > y && (n = y)), d = At(this._tTime, u), !v && this._tTime && d !== a && (d = a), p && 1 & a && (n = y - n, _ = 1), a !== d && !this._lock) {
                        var b = p && 1 & d, x = b === (p && 1 & a);
                        if (a < d && (b = !b), v = b ? 0 : y, this._lock = 1, this.render(v || (_ ? 0 : st(a * u)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && de(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), v && v !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, g = this._tDur, x && (this._lock = 2, v = b ? y : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                        Ce(this, _)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = Ut(this, st(v), st(n))) && (T -= n - (n = c._start)), this._tTime = T, this._time = n, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && n && !e && (de(this, "onStart"), this._tTime !== T)) return this;
                if (n >= v && t >= 0) for (i = this._first; i;) {
                    if (o = i._next, (i._act || n >= i._start) && i._ts && c !== i) {
                        if (i.parent !== this) return this.render(t, e, r);
                        if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !h) {
                            c = 0, o && (T += this._zTime = -m);
                            break
                        }
                    }
                    i = o
                } else {
                    i = this._last;
                    for (var O = t < 0 ? t : n; i;) {
                        if (o = i._prev, (i._act || O <= i._end) && i._ts && c !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (O - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (O - i._start) * i._ts, e, r), n !== this._time || !this._ts && !h) {
                                c = 0, o && (T += this._zTime = O ? -m : m);
                                break
                            }
                        }
                        i = o
                    }
                }
                if (c && !e && (this.pause(), c.render(n >= v ? 0 : -m)._zTime = n >= v ? 1 : -1, this._ts)) return this._start = f, It(this), this.render(t, e, r);
                this._onUpdate && !e && de(this, "onUpdate", !0), (T === g && g >= this.totalDuration() || !T && v) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === g && this._ts > 0 || !T && this._ts < 0) && Et(this, 1), e || t < 0 && !v || !T && !v && g || (de(this, T === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < g && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function (t, e) {
            var r = this;
            if (R(e) || (e = Xt(this, e, t)), !(t instanceof ke)) {
                if (N(t)) return t.forEach(function (t) {
                    return r.add(t, e)
                }), this;
                if (x(t)) return this.addLabel(t, e);
                if (!O(t)) return this;
                t = $e.delayedCall(0, t)
            }
            return this !== t ? Mt(this, t, e) : this
        }, r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
            for (var i = [], o = this._first; o;) o._start >= n && (o instanceof $e ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
            return i
        }, r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r]
        }, r.remove = function (t) {
            return x(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (Tt(this, t), t === this._recent && (this._recent = this._last), bt(this))
        }, r.totalTime = function (e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = st(Oe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function (t, e) {
            return this.labels[t] = Xt(this, e), this
        }, r.removeLabel = function (t) {
            return delete this.labels[t], this
        }, r.addPause = function (t, e, r) {
            var n = $e.delayedCall(0, e || z, r);
            return n.data = "isPause", this._hasPause = 1, Mt(this, n, Xt(this, t))
        }, r.removePause = function (t) {
            var e = this._first;
            for (t = Xt(this, t); e;) e._start === t && "isPause" === e.data && Et(e), e = e._next
        }, r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) je !== n[i] && n[i].kill(t, e);
            return this
        }, r.getTweensOf = function (t, e) {
            for (var r, n = [], i = Kt(t), o = this._first, s = R(e); o;) o instanceof $e ? at(o._targets, i) && (s ? (!je || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
            return n
        }, r.tweenTo = function (t, e) {
            e = e || {};
            var r, n = this, i = Xt(n, t), o = e, s = o.startAt, a = o.onStart, u = o.onStartParams,
                h = o.immediateRender, c = $e.to(n, ft({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || m,
                    onStart: function () {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                            c._dur !== t && Bt(c, t, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        a && a.apply(c, u || [])
                    }
                }, e));
            return h ? c.render(0) : c
        }, r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, ft({startAt: {time: Xt(this, t)}}, r))
        }, r.recent = function () {
            return this._recent
        }, r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), fe(this, Xt(this, t))
        }, r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), fe(this, Xt(this, t), 1)
        }, r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + m)
        }, r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e) for (n in o) o[n] >= r && (o[n] += t);
            return bt(this)
        }, r.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), bt(this)
        }, r.totalDuration = function (t) {
            var e, r, n, i = 0, o = this, a = o._last, u = 1e8;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), r = a._start, r > u && o._sort && a._ts && !o._lock ? (o._lock = 1, Mt(o, a, r - a._delay, 1)._lock = 0) : u = r, r < 0 && a._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -Infinity), u = 0), a._end > i && a._ts && (i = a._end), a = e;
                Bt(o, o === s && o._time > i ? o._time : i, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function (t) {
            if (s._ts && (ht(s, St(t, s)), l = Oe.frame), Oe.frame >= $) {
                $ += p.autoSleep || 120;
                var e = s._first;
                if ((!e || !e._ts) && p.autoSleep && Oe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Oe.sleep()
                }
            }
        }, e
    }(ke);
    ft(Xe.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var je, He = function (t, e, r, n, i, o, s) {
            var a, u, h, c, l, f, d, p, _ = new fr(this._pt, t, e, 0, 1, sr, null, i), m = 0, v = 0;
            for (_.b = r, _.e = n, r += "", n += "", (d = ~n.indexOf("random(")) && (n = he(n)), o && (p = [r, n], o(p, t, e), r = p[0], n = p[1]), u = r.match(F) || []; a = F.exec(n);) c = a[0], l = n.substring(m, a.index), h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1), c !== u[v++] && (f = parseFloat(u[v - 1]) || 0, _._pt = {
                _next: _._pt,
                p: l || 1 === v ? l : ",",
                s: f,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f,
                m: h && h < 4 ? Math.round : 0
            }, m = F.lastIndex);
            return _.c = m < n.length ? n.substring(m, n.length) : "", _.fp = s, (U.test(n) || d) && (_.e = 0), this._pt = _, _
        }, Ye = function (t, e, r, n, i, o, s, a, u) {
            O(n) && (n = n(i || 0, t, o));
            var h, c = t[e],
                l = "get" !== r ? r : O(c) ? u ? t[e.indexOf("set") || !O(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c,
                f = O(c) ? u ? er : tr : Qe;
            if (x(n) && (~n.indexOf("random(") && (n = he(n)), "=" === n.charAt(1) && ((h = parseFloat(l) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (Vt(l) || 0)) || 0 === h) && (n = h)), l !== n) return isNaN(l * n) || "" === n ? (!c && !(e in t) && H(e, n), He.call(this, t, e, l, n, f, a || p.stringFilter, u)) : (h = new fr(this._pt, t, e, +l || 0, n - (l || 0), "boolean" == typeof c ? or : ir, 0, f), u && (h.fp = u), s && h.modifier(s, this, t), this._pt = h)
        }, Ve = function (t, e, r, n, i) {
            if (O(t) && (t = Ze(t, i, e, r, n)), !S(t) || t.style && t.nodeType || N(t) || M(t)) return x(t) ? Ze(t, i, e, r, n) : t;
            var o, s = {};
            for (o in t) s[o] = Ze(t[o], i, e, r, n);
            return s
        }, ze = function (t, e, r, n, i, o) {
            var s, a, u, h;
            if (K[t] && !1 !== (s = new K[t]).init(i, s.rawVars ? e[t] : Ve(e[t], n, i, o, r), r, n, o) && (r._pt = a = new fr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== f)) for (u = r._ptLookup[r._targets.indexOf(i)], h = s._props.length; h--;) u[s._props[h]] = a;
            return s
        }, We = function t(e, r) {
            var n, i, a, u, h, c, l, f, d, p, v, g, y, T = e.vars, E = T.ease, b = T.startAt, x = T.immediateRender,
                O = T.lazy, R = T.onUpdate, A = T.onUpdateParams, S = T.callbackScope, w = T.runBackwards, P = T.yoyoEase,
                M = T.keyframes, N = T.autoRevert, C = e._dur, D = e._startAt, L = e._targets, F = e.parent,
                U = F && "nested" === F.data ? F.parent._targets : L, B = "auto" === e._overwrite && !o, G = e.timeline;
            if (G && (!M || !E) && (E = "none"), e._ease = De(E, _.ease), e._yEase = P ? Ne(De(!0 === P ? E : P, _.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !G && !!T.runBackwards, !G) {
                if (f = L[0] ? rt(L[0]).harness : 0, g = f && T[f.prop], n = mt(T, W), D && D.render(-1, !0).kill(), b) if (Et(e._startAt = $e.set(L, ft({
                    data: "isStart",
                    overwrite: !1,
                    parent: F,
                    immediateRender: !0,
                    lazy: I(O),
                    startAt: null,
                    delay: 0,
                    onUpdate: R,
                    onUpdateParams: A,
                    callbackScope: S,
                    stagger: 0
                }, b))), r < 0 && !x && !N && e._startAt.render(-1, !0), x) {
                    if (r > 0 && !N && (e._startAt = 0), C && r <= 0) return void (r && (e._zTime = r))
                } else !1 === N && (e._startAt = 0); else if (w && C) if (D) !N && (e._startAt = 0); else if (r && (x = !1), a = ft({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: x && I(O),
                    immediateRender: x,
                    stagger: 0,
                    parent: F
                }, n), g && (a[f.prop] = g), Et(e._startAt = $e.set(L, a)), r < 0 && e._startAt.render(-1, !0), x) {
                    if (!r) return
                } else t(e._startAt, m);
                for (e._pt = 0, O = C && I(O) || O && !C, i = 0; i < L.length; i++) {
                    if (h = L[i], l = h._gsap || et(L)[i]._gsap, e._ptLookup[i] = p = {}, Z[l.id] && q.length && ut(), v = U === L ? i : U.indexOf(h), f && !1 !== (d = new f).init(h, g || n, e, v, U) && (e._pt = u = new fr(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function (t) {
                        p[t] = u
                    }), d.priority && (c = 1)), !f || g) for (a in n) K[a] && (d = ze(a, n, e, v, h, U)) ? d.priority && (c = 1) : p[a] = u = Ye.call(e, h, a, "get", n[a], v, U, 0, T.stringFilter);
                    e._op && e._op[i] && e.kill(h, e._op[i]), B && e._pt && (je = e, s.killTweensOf(h, p, e.globalTime(r)), y = !e.parent, je = 0), e._pt && O && (Z[l.id] = 1)
                }
                c && lr(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = R, e._initted = (!e._op || e._pt) && !y
        }, qe = function (t, e) {
            var r, n, i, o, s = t[0] ? rt(t[0]).harness : 0, a = s && s.aliases;
            if (!a) return e;
            r = pt({}, e);
            for (n in a) if (n in r) for (o = a[n].split(","), i = o.length; i--;) r[o[i]] = r[n];
            return r
        }, Ze = function (t, e, r, n, i) {
            return O(t) ? t.call(e, r, n, i) : x(t) && ~t.indexOf("random(") ? he(t) : t
        }, Ke = tt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Je = (Ke + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), $e = function (t) {
            function e(e, r, i, a) {
                var u;
                "number" == typeof r && (i.duration = r, r = i, i = null), u = t.call(this, a ? r : vt(r)) || this;
                var h, c, l, f, d, _, v, g, y = u.vars, T = y.duration, E = y.delay, b = y.immediateRender, x = y.stagger,
                    O = y.overwrite, A = y.keyframes, w = y.defaults, C = y.scrollTrigger, D = y.yoyoEase,
                    L = r.parent || s, F = (N(e) || M(e) ? R(e[0]) : "length" in r) ? [e] : Kt(e);
                if (u._targets = F.length ? et(F) : Y("GSAP target " + e + " not found. https://greensock.com", !p.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = O, A || x || P(T) || P(E)) {
                    if (r = u.vars, h = u.timeline = new Xe({
                        data: "nested",
                        defaults: w || {}
                    }), h.kill(), h.parent = h._dp = n(u), h._start = 0, A) vt(ft(h.vars.defaults, {ease: "none"})), x ? F.forEach(function (t, e) {
                        return A.forEach(function (r, n) {
                            return h.to(t, r, n ? ">" : e * x)
                        })
                    }) : A.forEach(function (t) {
                        return h.to(F, t, ">")
                    }); else {
                        if (f = F.length, v = x ? Qt(x) : z, S(x)) for (d in x) ~Ke.indexOf(d) && (g || (g = {}), g[d] = x[d]);
                        for (c = 0; c < f; c++) {
                            l = {};
                            for (d in r) Je.indexOf(d) < 0 && (l[d] = r[d]);
                            l.stagger = 0, D && (l.yoyoEase = D), g && pt(l, g), _ = F[c], l.duration = +Ze(T, n(u), c, _, F), l.delay = (+Ze(E, n(u), c, _, F) || 0) - u._delay, !x && 1 === f && l.delay && (u._delay = E = l.delay, u._start += E, l.delay = 0), h.to(_, l, v(c, _, F))
                        }
                        h.duration() ? T = E = 0 : u.timeline = 0
                    }
                    T || u.duration(T = h.duration())
                } else u.timeline = 0;
                return !0 !== O || o || (je = n(u), s.killTweensOf(F), je = 0), Mt(L, n(u), i), r.reversed && u.reverse(), r.paused && u.paused(!0), (b || !T && !A && u._start === st(L._time) && I(b) && Ot(n(u)) && "nested" !== L.data) && (u._tTime = -m, u.render(Math.max(0, -E))), C && Nt(n(u), C), u
            }

            i(e, t);
            var r = e.prototype;
            return r.render = function (t, e, r) {
                var n, i, o, s, a, u, h, c, l, f = this._time, d = this._tDur, p = this._dur,
                    _ = t > d - m && t >= 0 ? d : t < m ? 0 : t;
                if (p) {
                    if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = _, c = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                            if (n = st(_ % s), _ === d ? (o = this._repeat, n = p) : (o = ~~(_ / s), o && o === _ / s && (n = p, o--), n > p && (n = p)), u = this._yoyo && 1 & o, u && (l = this._yEase, n = p - n), a = At(this._tTime, s), n === f && !r && this._initted) return this;
                            o !== a && (c && this._yEase && Ce(c, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(st(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ct(this, t < 0 ? t : n, r, e)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(t, e, r)
                        }
                        if (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (l || this._ease)(n / p), this._from && (this.ratio = h = 1 - h), n && !f && !e && (de(this, "onStart"), this._tTime !== _)) return this;
                        for (i = this._pt; i;) i.r(h, i.d), i = i._next;
                        c && c.render(t < 0 ? t : !n && u ? -m : c._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), de(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Et(this, 1), e || t < 0 && !f || !_ && !f || (de(this, _ === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < d && this.timeScale() > 0) && this._prom()))
                    }
                } else Ft(this, t, e, r);
                return this
            }, r.targets = function () {
                return this._targets
            }, r.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, r.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? pe(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || pe(this), this.parent && r !== this.timeline.totalDuration() && Bt(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var n, i, o, s, a, u, h, c = this._targets, l = t ? Kt(t) : c, f = this._ptLookup, d = this._pt;
                if ((!e || "all" === e) && gt(c, l)) return "all" === e && (this._pt = 0), pe(this);
                for (n = this._op = this._op || [], "all" !== e && (x(e) && (a = {}, it(e, function (t) {
                    return a[t] = 1
                }), e = a), e = qe(c, e)), h = c.length; h--;) if (~l.indexOf(c[h])) {
                    i = f[h], "all" === e ? (n[h] = e, s = i, o = {}) : (o = n[h] = n[h] || {}, s = e);
                    for (a in s) u = i && i[a], u && ("kill" in u.d && !0 !== u.d.kill(a) || Tt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1)
                }
                return this._initted && !this._pt && d && pe(this), this
            }, e.to = function (t, r) {
                return new e(t, r, arguments[2])
            }, e.from = function (t, e) {
                return jt(1, arguments)
            }, e.delayedCall = function (t, r, n, i) {
                return new e(r, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: r,
                    onReverseComplete: r,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: i
                })
            }, e.fromTo = function (t, e, r) {
                return jt(2, arguments)
            }, e.set = function (t, r) {
                return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
            }, e.killTweensOf = function (t, e, r) {
                return s.killTweensOf(t, e, r)
            }, e
        }(ke);
    ft($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), it("staggerTo,staggerFrom,staggerFromTo", function (t) {
        $e[t] = function () {
            var e = new Xe, r = Wt.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var Qe = function (t, e, r) {
        return t[e] = r
    }, tr = function (t, e, r) {
        return t[e](r)
    }, er = function (t, e, r, n) {
        return t[e](n.fp, r)
    }, rr = function (t, e, r) {
        return t.setAttribute(e, r)
    }, nr = function (t, e) {
        return O(t[e]) ? tr : A(t[e]) && t.setAttribute ? rr : Qe
    }, ir = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }, or = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }, sr = function (t, e) {
        var r = e._pt, n = "";
        if (!t && e.b) n = e.b; else if (1 === t && e.e) n = e.e; else {
            for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }, ar = function (t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    }, ur = function (t, e, r, n) {
        for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
    }, hr = function (t) {
        for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Tt(this, n, "_pt") : n.dep || (e = 1), n = r;
        return !e
    }, cr = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    }, lr = function (t) {
        for (var e, r, n, i, o = t._pt; o;) {
            for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
            (o._prev = r ? r._prev : i) ? o._prev._next = o : n = o, (o._next = r) ? r._prev = o : i = o, o = e
        }
        t._pt = n
    }, fr = function () {
        function t(t, e, r, n, i, o, s, a, u) {
            this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || ir, this.d = s || this, this.set = a || Qe, this.pr = u || 0, this._next = t, t && (t._prev = this)
        }

        return t.prototype.modifier = function (t, e, r) {
            this.mSet = this.mSet || this.set, this.set = cr, this.m = t, this.mt = r, this.tween = e
        }, t
    }();
    it(tt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return W[t] = 1
    }), k.TweenMax = k.TweenLite = $e, k.TimelineLite = k.TimelineMax = Xe, s = new Xe({
        sortChildren: !1,
        defaults: _,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), p.stringFilter = xe;
    var dr = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (t) {
                return _e(t)
            })
        },
        timeline: function (t) {
            return new Xe(t)
        },
        getTweensOf: function (t, e) {
            return s.getTweensOf(t, e)
        },
        getProperty: function (t, e, r, n) {
            x(t) && (t = Kt(t)[0]);
            var i = rt(t || {}).get, o = r ? lt : ct;
            return "native" === r && (r = ""), t ? e ? o((K[e] && K[e].get || i)(t, e, r, n)) : function (e, r, n) {
                return o((K[e] && K[e].get || i)(t, e, r, n))
            } : t
        },
        quickSetter: function (t, e, r) {
            if (t = Kt(t), t.length > 1) {
                var n = t.map(function (t) {
                    return vr.quickSetter(t, e, r)
                }), i = n.length;
                return function (t) {
                    for (var e = i; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var o = K[e], s = rt(t), a = s.harness && (s.harness.aliases || {})[e] || e, u = o ? function (e) {
                var n = new o;
                f._pt = 0, n.init(t, r ? e + r : e, f, 0, [t]), n.render(1, n), f._pt && ar(1, f)
            } : s.set(t, a);
            return o ? u : function (e) {
                return u(t, a, r ? e + r : e, s, 1)
            }
        },
        isTweening: function (t) {
            return s.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = De(t.ease, _.ease)), _t(_, t || {})
        },
        config: function (t) {
            return _t(p, t || {})
        },
        registerEffect: function (t) {
            var e = t.name, r = t.effect, n = t.plugins, i = t.defaults, o = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
                return t && !K[t] && !k[t] && Y(e + " effect requires " + t + " plugin.")
            }), J[e] = function (t, e, n) {
                return r(Kt(t), ft(e || {}, i), n)
            }, o && (Xe.prototype[e] = function (t, r, n) {
                return this.add(J[e](t, S(r) ? r : (n = r) && {}, this), n)
            })
        },
        registerEase: function (t, e) {
            Ae[t] = De(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? De(t, e) : Ae
        },
        getById: function (t) {
            return s.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r, n, i = new Xe(t);
            for (i.smoothChildTiming = I(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, r = s._first; r;) n = r._next, !e && !r._dur && r instanceof $e && r.vars.onComplete === r._targets[0] || Mt(i, r, r._start - r._delay), r = n;
            return Mt(s, i, 0), i
        },
        utils: {
            wrap: ae,
            wrapYoyo: ue,
            distribute: Qt,
            random: re,
            snap: ee,
            normalize: oe,
            getUnit: Vt,
            clamp: zt,
            splitColor: ge,
            toArray: Kt,
            selector: Jt,
            mapRange: ce,
            pipe: ne,
            unitize: ie,
            interpolate: le,
            shuffle: $t
        },
        install: j,
        effects: J,
        ticker: Oe,
        updateRoot: Xe.updateRoot,
        plugins: K,
        globalTimeline: s,
        core: {
            PropTween: fr,
            globals: V,
            Tween: $e,
            Timeline: Xe,
            Animation: ke,
            getCache: rt,
            _removeLinkedListItem: Tt,
            suppressOverwrites: function (t) {
                return o = t
            }
        }
    };
    it("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return dr[t] = $e[t]
    }), Oe.add(Xe.updateRoot), f = dr.to({}, {duration: 0});
    var pr = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }, _r = function (t, e) {
        var r, n, i, o = t._targets;
        for (r in e) for (n = o.length; n--;) (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = pr(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
    }, mr = function (t, e) {
        return {
            name: t, rawVars: 1, init: function (t, r, n) {
                n._onInit = function (t) {
                    var n, i;
                    if (x(r) && (n = {}, it(r, function (t) {
                        return n[t] = 1
                    }), r = n), e) {
                        n = {};
                        for (i in r) n[i] = e(r[i]);
                        r = n
                    }
                    _r(t, r)
                }
            }
        }
    }, vr = dr.registerPlugin({
        name: "attr", init: function (t, e, r, n, i) {
            var o, s;
            for (o in e) s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, i, 0, 0, o), s && (s.op = o), this._props.push(o)
        }
    }, {
        name: "endArray", init: function (t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, mr("roundProps", te), mr("modifiers"), mr("snap", ee)) || dr;
    $e.version = Xe.version = vr.version = "3.8.0", c = 1, w() && Re();
    var gr = Ae.Power0, yr = Ae.Power1, Tr = Ae.Power2, Er = Ae.Power3, br = Ae.Power4, xr = Ae.Linear, Or = Ae.Quad,
        Rr = Ae.Cubic, Ar = Ae.Quart, Sr = Ae.Quint, Ir = Ae.Strong, wr = Ae.Elastic, Pr = Ae.Back, Mr = Ae.SteppedEase,
        Nr = Ae.Bounce, Cr = Ae.Sine, Dr = Ae.Expo, Lr = Ae.Circ
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n() {
            t(".menu_item").on("click", function () {
                3 == y && "ago" == R ? window.location.href = E.liveurl : (T = t(this).index(), o())
            }), t("#menubox").removeClass("menudown"), t(".pop0").scrollTop(0), g = t("#menubox").offset().top, t(".pop0").on("scroll", function (e) {
                t("#menubox").offset().top;
                scrollY = t(".pop0").scrollTop(), scrollY >= g ? (t(".loopImg").css({"margin-top": t("#menubox").height() + "px"}), t("#menubox").addClass("menudown")) : (t(".loopImg").css({"margin-top": "0px"}), t("#menubox").removeClass("menudown"))
            })
        }

        function i() {
            w = document.getElementById("vowv0"), P = document.getElementById("vowv1"), M = document.getElementById("vowv2"), N = document.getElementById("vowv3"), C = document.getElementById("vowv4"), D = document.getElementById("vowv5"), v = t(".menu"), v.find("div").remove();
            for (var e = "", r = 0; r < S.length; r++) {
                var n = S[r], i = "";
                1 != E.menurow && (i = 0 == r ? "menu_item_active" : ""), e += '<div class="menu_item ' + i + '">' + n + ' <div class="menutip"></div></div>'
            }
            var o = "";
            v.removeClass("menutwo"), v.removeClass("menuone");
            var a = E.menurow;
            switch (3 == y && "later" == R && (a = E.menurowlater), a) {
                case 1:
                    o = "menuone";
                    break;
                case 2:
                    o = "menutwo"
            }
            v.addClass(o), v.append(e), t("#topimg").attr("src", E.header), S.length < 1 ? t("#menubox").addClass("hide") : t("#menubox").removeClass("hide"), "later" == R && (t(".poptimer").addClass("hide"), t("#poptimer2").removeClass("hide")), s()
        }

        function o() {
            t(".menu_item").removeClass("menu_item_active"), t(".menu_item").eq(T).addClass("menu_item_active"), s()
        }

        function s() {
            if (t(".video-box2").addClass("hide"), t(".video-box1").addClass("hide"), t(".vowlater").addClass("hide"), "later" == R) switch (y) {
                case 0:
                    a();
                    break;
                case 3:
                default:
                    u()
            }
            t(".loopImg").find("img").remove();
            for (var e = "", r = "later" == R ? 1 : A[T].item.length, n = 0; n < r; n++) {
                e += '<img src="' + A[T].item[n] + '" alt="">'
            }
            t(".loopImg").append(e)
        }

        function a() {
            N.src = p.default.baseurl + I[0][0].video, C.src = p.default.baseurl + I[0][1].video, N.poster = p.default.baseurl + I[0][0].imgsrc, C.poster = p.default.baseurl + I[0][1].imgsrc, t(".vowlater").removeClass("hide")
        }

        function u() {
            if (I[T].length > 1) {
                if (P.src = p.default.baseurl + I[T][0].video, M.src = p.default.baseurl + I[T][1].video, P.poster = p.default.baseurl + I[T][0].imgsrc, M.poster = p.default.baseurl + I[T][1].imgsrc, 3 == y) {
                    var e = A[T].item[1];
                    t(".video2title").attr("src", e)
                }
                t(".video-box2").removeClass("hide")
            } else t(".video-box1").removeClass("hide"), w.src = p.default.baseurl + I[T][0].video, w.poster = p.default.baseurl + I[T][0].imgsrc
        }

        function h() {
            D = document.getElementById("vowv5"), _.Music.pause(), D.play(), t("#eluvia").removeClass("hide")
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.Pop = void 0;
        var c = r(9), l = function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }(c), f = r(34), d = r(7), p = function (t) {
                return t && t.__esModule ? t : {default: t}
            }(d), _ = r(13), m = r(75), v = void 0, g = void 0, y = 0, T = 0, E = void 0, b = {}, x = [],
            O = [0, 0, 0, 0, 0, 0, 0, 0], R = 0, A = [], S = [], I = [], w = void 0, P = void 0, M = void 0, N = void 0,
            C = void 0, D = void 0, L = {
                init: function () {
                    t(".popback0").on("click", function (e) {
                        _.Music.play(), t(".pop0").addClass("hide"), clearInterval(void 0), w.pause(), P.pause(), M.pause(), N.pause(), C.pause()
                    }), t("#eluvia .popback1").on("click", function () {
                        t("#eluvia").addClass("hide"), D.pause(), _.Music.play()
                    })
                }, showPop: function (e) {
                    var r = this;
                    if (_.Music.pause(), 1 == e) return void h();
                    y = e, T = 0, g = 0;
                    var n = "";
                    switch (y) {
                        case 7:
                            E = m.IMG_DATA[0], n = "boyoufan";
                            break;
                        case 2:
                            E = m.IMG_DATA[1], n = "weixinghui";
                            break;
                        case 6:
                            n = "boshitang", E = m.IMG_DATA[2];
                            break;
                        case 0:
                            n = "vow", E = m.IMG_DATA[3];
                            break;
                        case 3:
                            n = "boyingshi", E = m.IMG_DATA[4]
                    }
                    1 != O[y] && t("#poploading").removeClass("hide"), t.ajax({
                        url: p.default.baseurl + "apilist.php?a=geturl",
                        type: "post",
                        data: {type: n},
                        success: function (t) {
                            var e = JSON.parse(t);
                            if ("0" == e.errorcode) switch (I = e.data.videolist, b.date = e.data.starttime, R = e.data.type, 3 == y && "later" == R ? (A = E.listlater, S = E.menulater) : (A = E.list, S = E.menu), R) {
                                case"ago":
                                    r.updateTimer(), r.loadImg();
                                    break;
                                case"ing":
                                    window.location.href = e.data.url;
                                    break;
                                case"later":
                                    r.loadImg()
                            }
                        },
                        fail: function (t) {
                        }
                    })
                }, later: function () {
                }, updateTimer: function () {
                    function e(e) {
                        t(".second").html(r.second), t(".hour").html(r.hour), t(".minute").html(r.minute)
                    }

                    var r = f.Countdown.getDate(b.date);
                    setInterval(function () {
                        r = f.Countdown.getDate(b.date), e()
                    }, 1e3), e()
                }, loadImg: function () {
                    var t = this;
                    if (1 == O[y]) return void this.change();
                    x = [], x.push(E.header);
                    for (var e = 0; e < A.length; e++) for (var r = "later" == R ? 1 : A[e].item.length, n = 0; n < r; n++) x.push(A[e].item[n]);
                    var i = new l.Loader;
                    i.add(x), i.onComplete.add(function (e) {
                        t.change()
                    }), i.load(function (t, e) {
                    })
                }, change: function (e) {
                    t("#poploading").addClass("hide"), O[y] = 1, 0 == y ? t(".loopImg").addClass("loopImgtop") : t(".loopImg").removeClass("loopImgtop"), t(".pop0").removeClass("hide"), i(), n()
                }
            };
        e.Pop = L
    }).call(e, r(6))
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = {
        init: function () {
            this.getDate("2021-10-21 00:00:00")
        }, getDate: function (t) {
            var e = new Date, r = new Date(t), n = r.getTime() - e.getTime(), i = Math.floor(n / 864e5),
                o = Math.floor(n / 36e5), s = Math.floor(n / 6e4 % 60), a = Math.floor(n / 1e3 % 60);
            return o = o < 10 ? "0" + o : o, s = s < 10 ? "0" + s : s, a = a < 10 ? "0" + a : a, n < 0 && (o = "00", s = "00", a = "00"), {
                spacedate: n,
                day: i,
                hour: o,
                minute: s,
                second: a
            }
        }
    };
    e.Countdown = n
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return !!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t)
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.Request = void 0;
        var i = r(7), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(i), s = {
            getUserInfo: function () {
                t.ajax({
                    url: o.default.baseurl + "apilist.php?a=getuserinfo",
                    type: "get",
                    dataType: "jsonp",
                    timeout: 5e3,
                    success: function (t) {
                        o.default.userInfo = t.data
                    }
                })
            }, setScore: function (e) {
                t.ajax({
                    url: o.default.baseurl + "apilist.php?a=setgameinfo",
                    type: "post",
                    data: {score: e, uid: o.default.userInfo.uid},
                    success: function (t) {
                        JSON.parse(t)
                    },
                    fail: function (t) {
                    }
                })
            }, getRankList: function (e) {
                t.ajax({
                    url: o.default.baseurl + "apilist.php?a=getranking",
                    type: "post",
                    data: {uid: o.default.userInfo.uid},
                    timeout: 5e3,
                    success: function (t) {
                        var r = JSON.parse(t);
                        e(r), r.errorcode
                    }
                })
            }, setMsg: function (e) {
                var r = {username: t(".nametxt").val(), mobile: t(".teltxt").val(), uid: o.default.userInfo.uid};
                return "" == r.username ? void alert("请输入名字") : n(r.mobile) ? void t.ajax({
                    url: o.default.baseurl + "apilist.php?a=setuserinfo",
                    type: "post",
                    data: r,
                    success: function (t) {
                        JSON.parse(t);
                        e()
                    },
                    fail: function (t) {
                    }
                }) : void alert("请输入手机号")
            }
        };
        e.Request = s
    }).call(e, r(6))
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function e() {
            i.init()
        }

        r(39), r(42);
        var n = r(12), i = n.default, o = r(34), s = o.Countdown, a = r(7), u = a.default, h = r(13), c = h.Music,
            l = r(33), f = l.Pop;
        t(function () {
            var t = "192.168.1.118:8000" == window.location.host ? "https://family.g-elephant.net/year7/" : "./";
            u.baseurl = t, e(), f.init(), s.init(), c.init()
        })
    }).call(e, r(6))
}, function (t, e) {
    t.exports = function (t) {
        "undefined" != typeof execScript ? execScript(t) : eval.call(null, t)
    }
}, function (t, e) {
    t.exports = '/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\\\s)"+t+"(\\\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\\[\\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\\s*<(\\w+|!)[^>]*>/,d=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,a=/^(?:text|application)\\/javascript/i,u=/^(?:text|application)\\/xml/i,f="application/json",c="text/html",l=/^\\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\\?(.+)=\\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\\?.+=\\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\\w-]+:)\\/\\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});'
}, function (t, e, r) {
    t.exports = '<!doctype html> <html lang=zh-CN> <head> <meta charset=UTF-8> <meta name=viewport content="width=750,target-densitydpi=device-dpi,user-scalable=no"> <meta name=format-detection content="telephone=no"> <title>波科外周梦工厂</title> <script src=https://code.createjs.com/1.0.0/soundjs.min.js><\/script> <script src=https://code.createjs.com/1.0.0/preloadjs.min.js><\/script> <script src=./js/jquery-1.8.3.min.js><\/script> <script src=./js/weixin.js><\/script> {{{__HEAD_JAVASCRIPT__}}} <style>.hide{display:none}</style> <script>var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?398964f40c3f271fd300a7fc6ef38b94";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()<\/script> </head> <body> <div id=o2_loading class="loading hide"> <div class=box> <div class=loadingicon></div> <div id=dot> <div class="dotitem dot0"></div> <div class="dotitem dot1"></div> <div class="dotitem dot2"></div> <div class="dotitem dot3"></div> <div class="dotitem dot4"></div> <div class="dotitem dot5"></div> <div class="dotitem dot6"></div> <div class="dotitem dot7"></div> <div class="dotitem dot8"></div> <div class="dotitem dot9"></div> <div class="dotitem dot10"></div> </div> <div id=textbox> <div class=precent>0%</div> <div>精彩加载中...</div> </div> </div> </div> <audio src=media/bg.mp3 id=bgm></audio> <div id=o2_main class="main hide"> <div id=home></div> <div id=hometip> <div class=box> <div class=hand></div> </div> </div> <div id=gamestart class=hide> <div id=logo class="animated08 fadeInToAlpha"></div> <div class=box> <div class="f0 animated08 fadeInToY"></div> <div class="f1 delay02 animated08 fadeInToY"></div> <div class="start delay05 animated08 fadeInToY"></div> <div class="rankbtn delay08 animated08 fadeInToY"></div> <div class="backbtn delay1 animated08 fadeInToY"></div> </div> <div class="icon animated08 fadeInToAlpha"></div> </div> <div id=gametippop class=hide> <div class=box> <div class="tipclose close"></div> </div> </div> <div id=gamerule class=hide> <div class="rule animated05 fadeInScale"> <div class="ruleclose close"></div> </div> </div> <div id=msg class=hide> <div class="box animated05 fadeInScale"> <div class="msgclose close"></div> <input type=text class="nametxt inputs" onkeyup=\'this.value=this.value.replace(/[^a-zA-Z]/g,"")\'/> <input type=tel class="teltxt inputs" onkeyup=\'this.value=this.value.replace(/\\D/g,"")\'> <div class=sendbtn></div> </div> </div> <div id=end class=hide> <div class="box animated05 fadeInScale"> <div class="endclose close"></div> <div class=score>95分</div> <div class=cur></div> <div class=endrank></div> <div class=reset></div> </div> </div> <div id=gamerank class=hide> <div class="box animated05 fadeInScale"> <div class=rank-scroll> <div class=rank-item> <div class=count>1</div> <div class=nick>安安</div> <div class=rankscore>10000</div> </div> </div> <div class=rankuser> <div class=rank-item> <div class=count></div> <div class=nick></div> <div class=rankscore></div> </div> </div> <div class="rankclose close"></div> </div> </div> <div class=music> <div class=no></div> <div class="off hide"></div> </div> <div class="pop0 hide"> <img id=topimg src=' + r(17) + ' alt=""> <div class=popbox> <div class=topbox></div> <div class=poptimer> <div class=datebox> <div class="date_item hour">00</div> <div class="date_item minute">00</div> <div class="date_item second">00</div> </div> </div> <div id=poptimer2 class=hide></div> <div id=menubox> <div class=menubg></div> <div class=menu> <div class=menu_item>颈动脉<div class=menutip></div> </div> <div class=menu_item>下肢动脉</div> <div class=menu_item>栓塞</div> <div class=menu_item>栓塞</div> </div> </div> <div class=loopImg> </div> <div class="video-box video-box1 hide"> <div class=videoel-box> <video id=vowv0 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=""></video> </div> <div class=videof>点击回看精彩学术内容</div> </div> <div class="video-box video-box2 hide"> <div class=videoel-box> <video id=vowv1 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=""></video> </div> <div class=videof>点击回看精彩学术内容</div> <img class=video2title alt=""> <div class=videoel-box> <video id=vowv2 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=""></video> </div> <div class=videof>点击回看精彩学术内容</div> </div> <div class="vowlater hide"> <div class="vowt vowt1"><img src=' + r(40) + ' alt=""></div> <div class=videoel-box> <video id=vowv3 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=""></video> </div> <div class=videof>点击回看精彩学术内容</div> <div class="vowt vowt2"><img src=' + r(41) + ' alt=""></div> <div class=videoel-box> <video id=vowv4 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=""></video> </div> <div class=videof>点击回看精彩学术内容</div> </div> </div> <div id=popback class=popback0></div> </div> <div id=eluvia class=hide> <div class=eluviaicon></div> <div class=eluvabox> <div class=videoel-box> <video id=vowv5 controls class=vowv x5-playsinline="" playsinline="" webkit-playsinline="" src=video/1634630945443580.mp4></video> </div> </div> <div id=popback class=popback1></div> </div> <div id=poploading class=hide> <div class=poploadinground></div> </div> </div> </body> </html>'
}, function (t, e, r) {
    t.exports = r.p + "img/p0_t1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p0_t2.png"
}, function (t, e) {
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i() {
            setTimeout(function () {
                t("#hometip").remove()
            }, 4e3), O = v.default.app, R = new _.Container, O.stage.addChild(R), D = requestAnimationFrame(l);
            var e = v.default.imgList;
            A = v.default.transfrom, I = R.x = (A.full.width - (w - 300) * A.scale) / 2, R.addChild(e);
            for (var r = [{scale: 1, x: 1382, y: 647, space: 20}, {scale: .7, x: 1051, y: 920, space: 20}, {
                scale: .5,
                x: 1168,
                y: 534,
                space: 20
            }, {scale: .6, x: 686, y: 552, space: 20}, {scale: .5, x: 488, y: 654, space: 20}, {
                scale: .4,
                x: 705,
                y: 446,
                space: 20
            }], n = 0; n < r.length; n++) {
                var i = r[n], a = s("round.png");
                a.x = i.x, a.y = i.y, a.scale = {
                    x: i.scale,
                    y: i.scale
                }, T.TweenMax.to(a, 1 * Math.random() + 1, {
                    y: i.y + i.space,
                    yoyo: !0,
                    repeat: -1,
                    ease: T.Linear.easeInOut
                })
            }
            var u = [_.Texture.from("b0.png"), _.Texture.from("b1.png"), _.Texture.from("b2.png")],
                h = new _.AnimatedSprite(u);
            h.x = 1424, h.y = 728, R.addChild(h), h.animationSpeed = .02, h.play();
            var c = [_.Texture.from("tv0.png"), _.Texture.from("tv1.png"), _.Texture.from("tv2.png"), _.Texture.from("tv3.png")],
                d = new _.AnimatedSprite(c);
            d.x = 167, d.y = 37, R.addChild(d), d.animationSpeed = .01, d.play();
            var p = [_.Texture.from("line1.png"), _.Texture.from("line2.png")], m = new _.AnimatedSprite(p);
            m.x = 1807, m.y = 785, R.addChild(m), m.animationSpeed = .02, m.play();
            var g = s("line0.png");
            g.x = 1967, g.y = 731;
            var y = s("color.png");
            y.x = 915, y.y = 418, R.addChild(y);
            var E = s("line.png");
            E.x = 853, E.y = 255, new T.TimelineLite({repeat: -1}).fromTo(E, 1, {alpha: 0, y: 300}, {
                alpha: 1,
                y: 265,
                ease: T.Linear.easeOut
            }).to(E, 1, {y: 220, ease: T.Linear.easeOut}).to(E, .8, {alpha: 0, y: 185, ease: T.Linear.easeOut});
            var b = s("slogin.png"), S = {x: 897, y: 219};
            b.x = S.x, b.y = S.y;
            for (var P = [{
                enName: "cec英文字",
                name: "cec.png",
                x: 819,
                y: 534,
                offsetY: 10,
                offsetX: 0,
                scale: 1
            }, {name: "arrow0.png", x: 1993, y: 689, offsetY: -5, offsetX: 0, scale: 1}, {
                name: "arrow1.png",
                x: 2275,
                y: 504,
                offsetY: 0,
                offsetX: -10,
                scale: 1
            }, {name: "arrow2.png", x: 1669, y: 465, offsetY: 0, offsetX: 10, scale: 1}, {
                name: "ballup.png",
                x: 931,
                y: 513,
                offsetY: 10,
                offsetX: 0,
                scale: 1
            }, {name: "round2.png", speed: 1, x: 1983, y: 256, offsetY: 10, offsetX: 0, scale: 1}, {
                name: "round3.png",
                speed: 1,
                x: 1973,
                y: 317,
                offsetY: 10,
                offsetX: 0,
                scale: 1
            }], n = 0; n < P.length; n++) {
                var N = P[n], C = s(N.name);
                C.x = N.x, C.y = N.y;
                var L = Math.random() + 1;
                void 0 != N.speed && (L = N.speed), T.TweenMax.to(C, L, {
                    y: N.y + N.offsetY,
                    x: N.x + N.offsetX,
                    yoyo: !0,
                    repeat: -1,
                    ease: T.Linear.easeInOut
                })
            }
            var F = s("boyoufan.png");
            F.x = 631, F.y = 1005, T.TweenMax.to(F, .2, {alpha: 0, yoyo: !0, repeat: -1, ease: T.Linear.line});
            var U = s("light0.png");
            U.x = 243, U.y = 662, T.TweenMax.to(U, .5, {alpha: 0, yoyo: !0, repeat: -1, ease: T.Linear.easeOut});
            for (var B = [{name: "boy.png", x: 236, y: 505, offsetY: 60, offsetX: -90, scale: 1}, {
                name: "girl.png",
                x: 1327,
                y: 590,
                offsetY: 50,
                offsetX: -90,
                scale: 1
            }, {name: "boyl.png", x: 381, y: 956, offsetY: 50, offsetX: -90, scale: 1}, {
                name: "grill.png",
                x: 1796,
                y: 674,
                offsetY: 25,
                offsetX: 50,
                scale: 1
            }], n = 0; n < B.length; n++) {
                var G = B[n], k = s(G.name);
                k.x = G.x, k.y = G.y;
                var X = 5 * Math.random() + 1;
                T.TweenMax.to(k, X, {y: G.y + G.offsetY, x: G.x + G.offsetX, repeat: -1, ease: T.Linear.easeInOut})
            }
            var j = new o;
            j.scale = {x: .8, y: .8}, j.x = 136, j.y = 1146;
            var H = new o;
            H.scale = {x: .4, y: .4}, H.x = 332, H.y = 493;
            var Y = new o;
            Y.scale = {x: .8, y: .8}, Y.x = 1702, Y.y = 1147;
            var V = new o;
            V.scale = {x: .55, y: .55}, V.x = 1723, V.y = 230;
            for (var z = [{id: 0, name: "box0.png", x: 451, y: 619, offsetY: 60}, {
                id: 1,
                name: "box1.png",
                x: 473,
                y: 580,
                offsetY: 71
            }, {id: 1, name: "box2.png", x: 564, y: 457, offsetY: 71}, {
                id: 1,
                name: "box3.png",
                x: 747,
                y: 368,
                offsetY: 73
            }, {id: 1, name: "box4.png", x: 624, y: 549, offsetY: 71}, {
                id: 1,
                name: "box7.png",
                x: 805,
                y: 621,
                offsetY: 91
            }, {id: 1, name: "box8.png", x: 1126, y: 724, offsetY: 90}], n = 0; n < z.length; n++) {
                var W = z[n], q = s(W.name);
                q.x = W.x, q.y = W.y, R.addChild(q);
                var Z = 2 * Math.random();
                T.TweenMax.fromTo(q, 2, {alpha: 0, y: W.y + W.offsetY}, {
                    delay: Z,
                    repeatDelay: 2,
                    alpha: 1,
                    y: W.y,
                    repeat: -1,
                    ease: T.Expo.easeOut
                }), T.TweenMax.fromTo(q.scale, 2, {y: 0}, {
                    delay: Z,
                    repeatDelay: 2,
                    y: 1,
                    repeat: -1,
                    ease: T.Expo.easeOut
                })
            }
            for (var K = [{id: 0, name: "国际连线", width: 640, height: 475, x: 130, y: 0, childx: 40, childy: 324}, {
                id: 1,
                name: "波动未来",
                width: 320,
                height: 380,
                x: 83,
                y: 652,
                childx: 106,
                childy: 168
            }, {id: 2, name: "卫星会", width: 290, height: 370, x: 764, y: 0, childx: 0, childy: 100}, {
                id: 3,
                name: "波映室",
                width: 430,
                height: 450,
                x: 1259,
                y: 0,
                childx: 93,
                childy: 130
            }, {id: 5, name: "波悦方", width: 290, height: 488, x: 1857, y: 67, childx: 255, childy: 27}, {
                id: 6,
                name: "波动力",
                width: 555,
                height: 400,
                x: 1787,
                y: 718,
                childx: 90,
                childy: 324
            }, {id: 7, name: "波士堂", width: 445, height: 490, x: 1146, y: 743, childx: 148, childy: 452}, {
                id: 8,
                name: "波有范",
                width: 400,
                height: 335,
                x: 557,
                y: 982,
                childx: 214,
                childy: 235
            }, {
                id: 9,
                name: "中间球",
                width: 260,
                height: 260,
                x: 913,
                y: 409,
                childx: 114,
                childy: 135
            }], J = 0; J < K.length; J++) {
                var $ = K[J], Q = new _.Container;
                R.addChild(Q);
                var tt = new _.Sprite;
                tt.id = J, tt.width = $.width, tt.height = $.height, Q.x = $.x, Q.y = $.y, Q.addChild(tt), tt.interactive = !0, tt.on("pointertap", function (t) {
                    if (!M) {
                        var e = t.currentTarget.id,
                            r = ["vow", "ELUVIA", "波科卫星会", "手术波映室", "波悦厅", "游戏", "波士堂", "波有范", "cec"];
                        _hmt.push(["_trackEvent", "nav", "click", r[e]]), setTimeout(function () {
                            switch (e) {
                                case 7:
                                case 2:
                                case 6:
                                case 0:
                                case 1:
                                    x.Pop.showPop(e);
                                    break;
                                case 4:
                                    window.location.href = "https://360vryun.com/t/8bc1044042ae0676";
                                    break;
                                case 3:
                                    x.Pop.showPop(e);
                                    break;
                                case 8:
                                    window.location.href = "http://xgzx.talkmed.com/vascularNews/company/index?meeting_id=235&company_area_id=32";
                                    break;
                                case 5:
                                    f()
                            }
                        }, 200)
                    }
                });
                var et = new _.Sprite(_.Texture.from("roundtip.png"));
                et.anchor.set(.5, .5), et.x = $.childx, et.y = $.childy, Q.addChild(et), T.TweenMax.fromTo(et.scale, 1, {
                    x: 0,
                    y: 0
                }, {x: 1, y: 1, repeat: -1})
            }
            T.TweenMax.fromTo(R, 3, {alpha: 0}, {alpha: 1, ease: T.Expo.easeOut})
        }

        function o() {
            var t = new _.Container;
            R.addChild(t);
            var e = s("pq.png");
            t.addChild(e);
            for (var r = 0; r < 8; r++) {
                var n = s("dot.png");
                n.x = 223 * Math.random() + 20, n.y = 100;
                var i = Math.max(Math.random(), .5);
                n.scale = {x: i, y: i};
                var o = Math.max(1 * Math.random(), .2);
                t.addChild(n);
                new T.TimelineLite({repeat: -1}).fromTo(n, o, {alpha: 0, y: 100}, {
                    alpha: 1,
                    y: 70,
                    ease: T.Linear.easeOut
                }).to(n, o, {y: 0, ease: T.Linear.easeOut}).to(n, o, {alpha: 0, y: -100, ease: T.Linear.easeOut})
            }
            return t
        }

        function s(t) {
            var e = new _.Sprite(_.Texture.from(t));
            return R.addChild(e), e
        }

        function a() {
            var t = document.getElementById("home"), e = new y.default(t);
            e.on("panstart", h), e.on("panend", u), e.on("panleft panright", c)
        }

        function u(t) {
            N || (clearTimeout(d), setTimeout(function () {
                M = !1
            }, 500))
        }

        function h(t) {
            N || (S = R.x, M = !0)
        }

        function c(t) {
            N || (I = 1.2 * t.deltaX + S, I = Math.min(0, Math.max(I, -(w * A.scale - A.full.width))))
        }

        function l() {
            R.x += .12 * (I - R.x), D = requestAnimationFrame(l)
        }

        function f() {
            N = !0, R.y = 2 * A.height, b.default.change("game")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var d, p = r(9), _ = function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }(p), m = r(7), v = n(m), g = r(73), y = n(g), T = r(31), E = r(12), b = n(E), x = r(33), O = void 0,
            R = void 0, A = void 0, S = void 0, I = void 0, w = 2372, P = !1, M = !1, N = !1, C = {
                init: function () {
                    void 0 != R && (R.y = 0), N = !1, P || (P = !0, i(), a())
                }
            }, D = void 0;
        C.onResize = function () {
            A = v.default.transfrom, R.scale.x = R.scale.y = A.scale, O.renderer.resize(A.full.width, A.full.height)
        }, e.default = C
    }).call(e, r(6))
}, function (t, e, r) {
    "use strict";
    var n = r(45), i = r(51), o = r.n(i);/*!
 * @pixi/polyfill - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    self.Promise || (self.Promise = n.a), Object.assign || (Object.assign = o.a);
    if (Date.now && Date.prototype.getTime || (Date.now = function () {
        return (new Date).getTime()
    }), !self.performance || !self.performance.now) {
        var s = Date.now();
        self.performance || (self.performance = {}), self.performance.now = function () {
            return Date.now() - s
        }
    }
    for (var a = Date.now(), u = ["ms", "moz", "webkit", "o"], h = 0; h < u.length && !self.requestAnimationFrame; ++h) {
        var c = u[h];
        self.requestAnimationFrame = self[c + "RequestAnimationFrame"], self.cancelAnimationFrame = self[c + "CancelAnimationFrame"] || self[c + "CancelRequestAnimationFrame"]
    }
    self.requestAnimationFrame || (self.requestAnimationFrame = function (t) {
        if ("function" != typeof t) throw new TypeError(t + "is not a function");
        var e = Date.now(), r = 16 + a - e;
        return r < 0 && (r = 0), a = e, self.setTimeout(function () {
            a = Date.now(), t(performance.now())
        }, r)
    }), self.cancelAnimationFrame || (self.cancelAnimationFrame = function (t) {
        return clearTimeout(t)
    }), Math.sign || (Math.sign = function (t) {
        return t = Number(t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
    }), Number.isInteger || (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), self.ArrayBuffer || (self.ArrayBuffer = Array), self.Float32Array || (self.Float32Array = Array), self.Uint32Array || (self.Uint32Array = Array), self.Uint16Array || (self.Uint16Array = Array), self.Uint8Array || (self.Uint8Array = Array), self.Int32Array || (self.Int32Array = Array)
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return Boolean(t && void 0 !== t.length)
        }

        function i() {
        }

        function o(t, e) {
            return function () {
                t.apply(e, arguments)
            }
        }

        function s(t) {
            if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
        }

        function a(t, e) {
            for (; 3 === t._state;) t = t._value;
            if (0 === t._state) return void t._deferreds.push(e);
            t._handled = !0, s._immediateFn(function () {
                var r = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null === r) return void (1 === t._state ? u : h)(e.promise, t._value);
                var n;
                try {
                    n = r(t._value)
                } catch (t) {
                    return void h(e.promise, t)
                }
                u(e.promise, n)
            })
        }

        function u(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var r = e.then;
                    if (e instanceof s) return t._state = 3, t._value = e, void c(t);
                    if ("function" == typeof r) return void f(o(r, e), t)
                }
                t._state = 1, t._value = e, c(t)
            } catch (e) {
                h(t, e)
            }
        }

        function h(t, e) {
            t._state = 2, t._value = e, c(t)
        }

        function c(t) {
            2 === t._state && 0 === t._deferreds.length && s._immediateFn(function () {
                t._handled || s._unhandledRejectionFn(t._value)
            });
            for (var e = 0, r = t._deferreds.length; e < r; e++) a(t, t._deferreds[e]);
            t._deferreds = null
        }

        function l(t, e, r) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = r
        }

        function f(t, e) {
            var r = !1;
            try {
                t(function (t) {
                    r || (r = !0, u(e, t))
                }, function (t) {
                    r || (r = !0, h(e, t))
                })
            } catch (t) {
                if (r) return;
                r = !0, h(e, t)
            }
        }

        var d = r(49), p = r(50), _ = setTimeout;
        s.prototype.catch = function (t) {
            return this.then(null, t)
        }, s.prototype.then = function (t, e) {
            var r = new this.constructor(i);
            return a(this, new l(t, e, r)), r
        }, s.prototype.finally = d.a, s.all = function (t) {
            return new s(function (e, r) {
                function i(t, n) {
                    try {
                        if (n && ("object" == typeof n || "function" == typeof n)) {
                            var a = n.then;
                            if ("function" == typeof a) return void a.call(n, function (e) {
                                i(t, e)
                            }, r)
                        }
                        o[t] = n, 0 == --s && e(o)
                    } catch (t) {
                        r(t)
                    }
                }

                if (!n(t)) return r(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(t);
                if (0 === o.length) return e([]);
                for (var s = o.length, a = 0; a < o.length; a++) i(a, o[a])
            })
        }, s.allSettled = p.a, s.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === s ? t : new s(function (e) {
                e(t)
            })
        }, s.reject = function (t) {
            return new s(function (e, r) {
                r(t)
            })
        }, s.race = function (t) {
            return new s(function (e, r) {
                if (!n(t)) return r(new TypeError("Promise.race accepts an array"));
                for (var i = 0, o = t.length; i < o; i++) s.resolve(t[i]).then(e, r)
            })
        }, s._immediateFn = "function" == typeof t && function (e) {
            t(e)
        } || function (t) {
            _(t, 0)
        }, s._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console
        }, e.a = s
    }).call(e, r(46).setImmediate)
}, function (t, e, r) {
    (function (t) {
        function n(t, e) {
            this._id = t, this._clearFn = e
        }

        var i = void 0 !== t && t || "undefined" != typeof self && self || window, o = Function.prototype.apply;
        e.setTimeout = function () {
            return new n(o.call(setTimeout, i, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new n(o.call(setInterval, i, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, n.prototype.unref = n.prototype.ref = function () {
        }, n.prototype.close = function () {
            this._clearFn.call(i, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, r(47), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(e, r(14))
}, function (t, e, r) {
    (function (t, e) {
        !function (t, r) {
            "use strict";

            function n(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++) e[r] = arguments[r + 1];
                var n = {callback: t, args: e};
                return h[u] = n, a(u), u++
            }

            function i(t) {
                delete h[t]
            }

            function o(t) {
                var e = t.callback, n = t.args;
                switch (n.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(n[0]);
                        break;
                    case 2:
                        e(n[0], n[1]);
                        break;
                    case 3:
                        e(n[0], n[1], n[2]);
                        break;
                    default:
                        e.apply(r, n)
                }
            }

            function s(t) {
                if (c) setTimeout(s, 0, t); else {
                    var e = h[t];
                    if (e) {
                        c = !0;
                        try {
                            o(e)
                        } finally {
                            i(t), c = !1
                        }
                    }
                }
            }

            if (!t.setImmediate) {
                var a, u = 1, h = {}, c = !1, l = t.document, f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? function () {
                    a = function (t) {
                        e.nextTick(function () {
                            s(t)
                        })
                    }
                }() : function () {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0, r = t.onmessage;
                        return t.onmessage = function () {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = r, e
                    }
                }() ? function () {
                    var e = "setImmediate$" + Math.random() + "$", r = function (r) {
                        r.source === t && "string" == typeof r.data && 0 === r.data.indexOf(e) && s(+r.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", r, !1) : t.attachEvent("onmessage", r), a = function (r) {
                        t.postMessage(e + r, "*")
                    }
                }() : t.MessageChannel ? function () {
                    var t = new MessageChannel;
                    t.port1.onmessage = function (t) {
                        s(t.data)
                    }, a = function (e) {
                        t.port2.postMessage(e)
                    }
                }() : l && "onreadystatechange" in l.createElement("script") ? function () {
                    var t = l.documentElement;
                    a = function (e) {
                        var r = l.createElement("script");
                        r.onreadystatechange = function () {
                            s(e), r.onreadystatechange = null, t.removeChild(r), r = null
                        }, t.appendChild(r)
                    }
                }() : function () {
                    a = function (t) {
                        setTimeout(s, 0, t)
                    }
                }(), f.setImmediate = n, f.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, r(14), r(48))
}, function (t, e) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t)
        } catch (e) {
            try {
                return l.call(null, t)
            } catch (e) {
                return l.call(this, t)
            }
        }
    }

    function s() {
        _ && d && (_ = !1, d.length ? p = d.concat(p) : m = -1, p.length && a())
    }

    function a() {
        if (!_) {
            var t = i(s);
            _ = !0;
            for (var e = p.length; e;) {
                for (d = p, p = []; ++m < e;) d && d[m].run();
                m = -1, e = p.length
            }
            d = null, _ = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function h() {
    }

    var c, l, f = t.exports = {};
    !function () {
        try {
            c = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            c = r
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            l = n
        }
    }();
    var d, p = [], _ = !1, m = -1;
    f.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        p.push(new u(t, e)), 1 !== p.length || _ || i(a)
    }, u.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = h, f.addListener = h, f.once = h, f.off = h, f.removeListener = h, f.removeAllListeners = h, f.emit = h, f.prependListener = h, f.prependOnceListener = h, f.listeners = function (t) {
        return []
    }, f.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (t, e, r) {
    "use strict";

    function n(t) {
        var e = this.constructor;
        return this.then(function (r) {
            return e.resolve(t()).then(function () {
                return r
            })
        }, function (r) {
            return e.resolve(t()).then(function () {
                return e.reject(r)
            })
        })
    }

    e.a = n
}, function (t, e, r) {
    "use strict";

    function n(t) {
        return new this(function (e, r) {
            function n(t, r) {
                if (r && ("object" == typeof r || "function" == typeof r)) {
                    var s = r.then;
                    if ("function" == typeof s) return void s.call(r, function (e) {
                        n(t, e)
                    }, function (r) {
                        i[t] = {status: "rejected", reason: r}, 0 == --o && e(i)
                    })
                }
                i[t] = {status: "fulfilled", value: r}, 0 == --o && e(i)
            }

            if (!t || void 0 === t.length) return r(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return e([]);
            for (var o = i.length, s = 0; s < i.length; s++) n(s, i[s])
        })
    }

    e.a = n
}, function (t, e, r) {
    "use strict";

    function n(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;
    t.exports = function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                return e[t]
            }).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                n[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var r, a, u = n(t), h = 1; h < arguments.length; h++) {
            r = Object(arguments[h]);
            for (var c in r) o.call(r, c) && (u[c] = r[c]);
            if (i) {
                a = i(r);
                for (var l = 0; l < a.length; l++) s.call(r, a[l]) && (u[a[l]] = r[a[l]])
            }
        }
        return u
    }
}, function (t, e, r) {
    "use strict";
    var n = r(18);
    r.d(e, "a", function () {
        return n.a
    })
}, function (t, e, r) {
    "use strict";

    function n() {
    }

    function i(t, e, r) {
        this.fn = t, this.context = e, this.once = r || !1
    }

    function o(t, e, r, n, o) {
        if ("function" != typeof r) throw new TypeError("The listener must be a function");
        var s = new i(r, n || t, o), a = h ? h + e : e;
        return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], s] : t._events[a].push(s) : (t._events[a] = s, t._eventsCount++), t
    }

    function s(t, e) {
        0 == --t._eventsCount ? t._events = new n : delete t._events[e]
    }

    function a() {
        this._events = new n, this._eventsCount = 0
    }

    var u = Object.prototype.hasOwnProperty, h = "~";
    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (h = !1)), a.prototype.eventNames = function () {
        var t, e, r = [];
        if (0 === this._eventsCount) return r;
        for (e in t = this._events) u.call(t, e) && r.push(h ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
    }, a.prototype.listeners = function (t) {
        var e = h ? h + t : t, r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, i = r.length, o = new Array(i); n < i; n++) o[n] = r[n].fn;
        return o
    }, a.prototype.listenerCount = function (t) {
        var e = h ? h + t : t, r = this._events[e];
        return r ? r.fn ? 1 : r.length : 0
    }, a.prototype.emit = function (t, e, r, n, i, o) {
        var s = h ? h + t : t;
        if (!this._events[s]) return !1;
        var a, u, c = this._events[s], l = arguments.length;
        if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), l) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, e), !0;
                case 3:
                    return c.fn.call(c.context, e, r), !0;
                case 4:
                    return c.fn.call(c.context, e, r, n), !0;
                case 5:
                    return c.fn.call(c.context, e, r, n, i), !0;
                case 6:
                    return c.fn.call(c.context, e, r, n, i, o), !0
            }
            for (u = 1, a = new Array(l - 1); u < l; u++) a[u - 1] = arguments[u];
            c.fn.apply(c.context, a)
        } else {
            var f, d = c.length;
            for (u = 0; u < d; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), l) {
                case 1:
                    c[u].fn.call(c[u].context);
                    break;
                case 2:
                    c[u].fn.call(c[u].context, e);
                    break;
                case 3:
                    c[u].fn.call(c[u].context, e, r);
                    break;
                case 4:
                    c[u].fn.call(c[u].context, e, r, n);
                    break;
                default:
                    if (!a) for (f = 1, a = new Array(l - 1); f < l; f++) a[f - 1] = arguments[f];
                    c[u].fn.apply(c[u].context, a)
            }
        }
        return !0
    }, a.prototype.on = function (t, e, r) {
        return o(this, t, e, r, !1)
    }, a.prototype.once = function (t, e, r) {
        return o(this, t, e, r, !0)
    }, a.prototype.removeListener = function (t, e, r, n) {
        var i = h ? h + t : t;
        if (!this._events[i]) return this;
        if (!e) return s(this, i), this;
        var o = this._events[i];
        if (o.fn) o.fn !== e || n && !o.once || r && o.context !== r || s(this, i); else {
            for (var a = 0, u = [], c = o.length; a < c; a++) (o[a].fn !== e || n && !o[a].once || r && o[a].context !== r) && u.push(o[a]);
            u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i)
        }
        return this
    }, a.prototype.removeAllListeners = function (t) {
        var e;
        return t ? (e = h ? h + t : t, this._events[e] && s(this, e)) : (this._events = new n, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = h, a.EventEmitter = a, t.exports = a
}, function (t, e, r) {
    "use strict";

    function n(t, e, r) {
        r = r || 2;
        var n = e && e.length, o = n ? e[0] * r : t.length, a = i(t, 0, o, r, !0), u = [];
        if (!a || a.next === a.prev) return u;
        var h, c, f, d, p, _, m;
        if (n && (a = l(t, e, a, r)), t.length > 80 * r) {
            h = f = t[0], c = d = t[1];
            for (var v = r; v < o; v += r) p = t[v], _ = t[v + 1], p < h && (h = p), _ < c && (c = _), p > f && (f = p), _ > d && (d = _);
            m = Math.max(f - h, d - c), m = 0 !== m ? 1 / m : 0
        }
        return s(a, u, r, h, c, m), u
    }

    function i(t, e, r, n, i) {
        var o, s;
        if (i === D(t, e, r, n) > 0) for (o = e; o < r; o += n) s = M(o, t[o], t[o + 1], s); else for (o = r - n; o >= e; o -= n) s = M(o, t[o], t[o + 1], s);
        return s && x(s, s.next) && (N(s), s = s.next), s
    }

    function o(t, e) {
        if (!t) return t;
        e || (e = t);
        var r, n = t;
        do {
            if (r = !1, n.steiner || !x(n, n.next) && 0 !== b(n.prev, n, n.next)) n = n.next; else {
                if (N(n), (n = e = n.prev) === n.next) break;
                r = !0
            }
        } while (r || n !== e);
        return e
    }

    function s(t, e, r, n, i, l, f) {
        if (t) {
            !f && l && m(t, n, i, l);
            for (var d, p, _ = t; t.prev !== t.next;) if (d = t.prev, p = t.next, l ? u(t, n, i, l) : a(t)) e.push(d.i / r), e.push(t.i / r), e.push(p.i / r), N(t), t = p.next, _ = p.next; else if ((t = p) === _) {
                f ? 1 === f ? (t = h(o(t), e, r), s(t, e, r, n, i, l, 2)) : 2 === f && c(t, e, r, n, i, l) : s(o(t), e, r, n, i, l, 1);
                break
            }
        }
    }

    function a(t) {
        var e = t.prev, r = t, n = t.next;
        if (b(e, r, n) >= 0) return !1;
        for (var i = t.next.next; i !== t.prev;) {
            if (T(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) && b(i.prev, i, i.next) >= 0) return !1;
            i = i.next
        }
        return !0
    }

    function u(t, e, r, n) {
        var i = t.prev, o = t, s = t.next;
        if (b(i, o, s) >= 0) return !1;
        for (var a = i.x < o.x ? i.x < s.x ? i.x : s.x : o.x < s.x ? o.x : s.x, u = i.y < o.y ? i.y < s.y ? i.y : s.y : o.y < s.y ? o.y : s.y, h = i.x > o.x ? i.x > s.x ? i.x : s.x : o.x > s.x ? o.x : s.x, c = i.y > o.y ? i.y > s.y ? i.y : s.y : o.y > s.y ? o.y : s.y, l = g(a, u, e, r, n), f = g(h, c, e, r, n), d = t.prevZ, p = t.nextZ; d && d.z >= l && p && p.z <= f;) {
            if (d !== t.prev && d !== t.next && T(i.x, i.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
            if (d = d.prevZ, p !== t.prev && p !== t.next && T(i.x, i.y, o.x, o.y, s.x, s.y, p.x, p.y) && b(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ
        }
        for (; d && d.z >= l;) {
            if (d !== t.prev && d !== t.next && T(i.x, i.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        for (; p && p.z <= f;) {
            if (p !== t.prev && p !== t.next && T(i.x, i.y, o.x, o.y, s.x, s.y, p.x, p.y) && b(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ
        }
        return !0
    }

    function h(t, e, r) {
        var n = t;
        do {
            var i = n.prev, s = n.next.next;
            !x(i, s) && O(i, n, n.next, s) && I(i, s) && I(s, i) && (e.push(i.i / r), e.push(n.i / r), e.push(s.i / r), N(n), N(n.next), n = t = s), n = n.next
        } while (n !== t);
        return o(n)
    }

    function c(t, e, r, n, i, a) {
        var u = t;
        do {
            for (var h = u.next.next; h !== u.prev;) {
                if (u.i !== h.i && E(u, h)) {
                    var c = P(u, h);
                    return u = o(u, u.next), c = o(c, c.next), s(u, e, r, n, i, a), void s(c, e, r, n, i, a)
                }
                h = h.next
            }
            u = u.next
        } while (u !== t)
    }

    function l(t, e, r, n) {
        var s, a, u, h, c, l = [];
        for (s = 0, a = e.length; s < a; s++) u = e[s] * n, h = s < a - 1 ? e[s + 1] * n : t.length, c = i(t, u, h, n, !1), c === c.next && (c.steiner = !0), l.push(y(c));
        for (l.sort(f), s = 0; s < l.length; s++) r = d(l[s], r), r = o(r, r.next);
        return r
    }

    function f(t, e) {
        return t.x - e.x
    }

    function d(t, e) {
        var r = p(t, e);
        if (!r) return e;
        var n = P(r, t), i = o(r, r.next);
        return o(n, n.next), e === r ? i : e
    }

    function p(t, e) {
        var r, n = e, i = t.x, o = t.y, s = -1 / 0;
        do {
            if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
                var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                if (a <= i && a > s) {
                    if (s = a, a === i) {
                        if (o === n.y) return n;
                        if (o === n.next.y) return n.next
                    }
                    r = n.x < n.next.x ? n : n.next
                }
            }
            n = n.next
        } while (n !== e);
        if (!r) return null;
        if (i === s) return r;
        var u, h = r, c = r.x, l = r.y, f = 1 / 0;
        n = r;
        do {
            i >= n.x && n.x >= c && i !== n.x && T(o < l ? i : s, o, c, l, o < l ? s : i, o, n.x, n.y) && (u = Math.abs(o - n.y) / (i - n.x), I(n, t) && (u < f || u === f && (n.x > r.x || n.x === r.x && _(r, n))) && (r = n, f = u)), n = n.next
        } while (n !== h);
        return r
    }

    function _(t, e) {
        return b(t.prev, t, e.prev) < 0 && b(e.next, t, t.next) < 0
    }

    function m(t, e, r, n) {
        var i = t;
        do {
            null === i.z && (i.z = g(i.x, i.y, e, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
        } while (i !== t);
        i.prevZ.nextZ = null, i.prevZ = null, v(i)
    }

    function v(t) {
        var e, r, n, i, o, s, a, u, h = 1;
        do {
            for (r = t, t = null, o = null, s = 0; r;) {
                for (s++, n = r, a = 0, e = 0; e < h && (a++, n = n.nextZ); e++) ;
                for (u = h; a > 0 || u > 0 && n;) 0 !== a && (0 === u || !n || r.z <= n.z) ? (i = r, r = r.nextZ, a--) : (i = n, n = n.nextZ, u--), o ? o.nextZ = i : t = i, i.prevZ = o, o = i;
                r = n
            }
            o.nextZ = null, h *= 2
        } while (s > 1);
        return t
    }

    function g(t, e, r, n, i) {
        return t = 32767 * (t - r) * i, e = 32767 * (e - n) * i, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
    }

    function y(t) {
        var e = t, r = t;
        do {
            (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next
        } while (e !== t);
        return r
    }

    function T(t, e, r, n, i, o, s, a) {
        return (i - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (n - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (i - s) * (n - a) >= 0
    }

    function E(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !S(t, e) && (I(t, e) && I(e, t) && w(t, e) && (b(t.prev, t, e.prev) || b(t, e.prev, e)) || x(t, e) && b(t.prev, t, t.next) > 0 && b(e.prev, e, e.next) > 0)
    }

    function b(t, e, r) {
        return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
    }

    function x(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function O(t, e, r, n) {
        var i = A(b(t, e, r)), o = A(b(t, e, n)), s = A(b(r, n, t)), a = A(b(r, n, e));
        return i !== o && s !== a || (!(0 !== i || !R(t, r, e)) || (!(0 !== o || !R(t, n, e)) || (!(0 !== s || !R(r, t, n)) || !(0 !== a || !R(r, e, n)))))
    }

    function R(t, e, r) {
        return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
    }

    function A(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }

    function S(t, e) {
        var r = t;
        do {
            if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && O(r, r.next, t, e)) return !0;
            r = r.next
        } while (r !== t);
        return !1
    }

    function I(t, e) {
        return b(t.prev, t, t.next) < 0 ? b(t, e, t.next) >= 0 && b(t, t.prev, e) >= 0 : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0
    }

    function w(t, e) {
        var r = t, n = !1, i = (t.x + e.x) / 2, o = (t.y + e.y) / 2;
        do {
            r.y > o != r.next.y > o && r.next.y !== r.y && i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next
        } while (r !== t);
        return n
    }

    function P(t, e) {
        var r = new C(t.i, t.x, t.y), n = new C(e.i, e.x, e.y), i = t.next, o = e.prev;
        return t.next = e, e.prev = t, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n
    }

    function M(t, e, r, n) {
        var i = new C(t, e, r);
        return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
    }

    function N(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function C(t, e, r) {
        this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function D(t, e, r, n) {
        for (var i = 0, o = e, s = r - n; o < r; o += n) i += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        return i
    }

    t.exports = n, t.exports.default = n, n.deviation = function (t, e, r, n) {
        var i = e && e.length, o = i ? e[0] * r : t.length, s = Math.abs(D(t, 0, o, r));
        if (i) for (var a = 0, u = e.length; a < u; a++) {
            var h = e[a] * r, c = a < u - 1 ? e[a + 1] * r : t.length;
            s -= Math.abs(D(t, h, c, r))
        }
        var l = 0;
        for (a = 0; a < n.length; a += 3) {
            var f = n[a] * r, d = n[a + 1] * r, p = n[a + 2] * r;
            l += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]))
        }
        return 0 === s && 0 === l ? 0 : Math.abs((l - s) / s)
    }, n.flatten = function (t) {
        for (var e = t[0][0].length, r = {vertices: [], holes: [], dimensions: e}, n = 0, i = 0; i < t.length; i++) {
            for (var o = 0; o < t[i].length; o++) for (var s = 0; s < e; s++) r.vertices.push(t[i][o][s]);
            i > 0 && (n += t[i - 1].length, r.holes.push(n))
        }
        return r
    }
}, function (t, e, r) {
    "use strict";

    function n() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function i(t, e, r) {
        if (t && h.isObject(t) && t instanceof n) return t;
        var i = new n;
        return i.parse(t, e, r), i
    }

    function o(t) {
        return h.isString(t) && (t = i(t)), t instanceof n ? t.format() : n.prototype.format.call(t)
    }

    function s(t, e) {
        return i(t, !1, !0).resolve(e)
    }

    function a(t, e) {
        return t ? i(t, !1, !0).resolveObject(e) : e
    }

    var u = r(56), h = r(58);
    e.parse = i, e.resolve = s, e.resolveObject = a, e.format = o, e.Url = n;
    var c = /^([a-z0-9.+-]+:)/i, l = /:[0-9]*$/, f = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], p = ["{", "}", "|", "\\", "^", "`"].concat(d),
        _ = ["'"].concat(p), m = ["%", "/", "?", ";", "#"].concat(_), v = ["/", "?", "#"], g = /^[+a-z0-9A-Z_-]{0,63}$/,
        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, T = {javascript: !0, "javascript:": !0},
        E = {javascript: !0, "javascript:": !0}, b = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }, x = r(59);
    n.prototype.parse = function (t, e, r) {
        if (!h.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var n = t.indexOf("?"), i = -1 !== n && n < t.indexOf("#") ? "?" : "#", o = t.split(i), s = /\\/g;
        o[0] = o[0].replace(s, "/"), t = o.join(i);
        var a = t;
        if (a = a.trim(), !r && 1 === t.split("#").length) {
            var l = f.exec(a);
            if (l) return this.path = a, this.href = a, this.pathname = l[1], l[2] ? (this.search = l[2], this.query = e ? x.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var d = c.exec(a);
        if (d) {
            d = d[0];
            var p = d.toLowerCase();
            this.protocol = p, a = a.substr(d.length)
        }
        if (r || d || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var O = "//" === a.substr(0, 2);
            !O || d && E[d] || (a = a.substr(2), this.slashes = !0)
        }
        if (!E[d] && (O || d && !b[d])) {
            for (var R = -1, A = 0; A < v.length; A++) {
                var S = a.indexOf(v[A]);
                -1 !== S && (-1 === R || S < R) && (R = S)
            }
            var I, w;
            w = -1 === R ? a.lastIndexOf("@") : a.lastIndexOf("@", R), -1 !== w && (I = a.slice(0, w), a = a.slice(w + 1), this.auth = decodeURIComponent(I)), R = -1;
            for (var A = 0; A < m.length; A++) {
                var S = a.indexOf(m[A]);
                -1 !== S && (-1 === R || S < R) && (R = S)
            }
            -1 === R && (R = a.length), this.host = a.slice(0, R), a = a.slice(R), this.parseHost(), this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P) for (var M = this.hostname.split(/\./), A = 0, N = M.length; A < N; A++) {
                var C = M[A];
                if (C && !C.match(g)) {
                    for (var D = "", L = 0, F = C.length; L < F; L++) C.charCodeAt(L) > 127 ? D += "x" : D += C[L];
                    if (!D.match(g)) {
                        var U = M.slice(0, A), B = M.slice(A + 1), G = C.match(y);
                        G && (U.push(G[1]), B.unshift(G[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = U.join(".");
                        break
                    }
                }
            }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = u.toASCII(this.hostname));
            var k = this.port ? ":" + this.port : "", X = this.hostname || "";
            this.host = X + k, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
        }
        if (!T[p]) for (var A = 0, N = _.length; A < N; A++) {
            var j = _[A];
            if (-1 !== a.indexOf(j)) {
                var H = encodeURIComponent(j);
                H === j && (H = escape(j)), a = a.split(j).join(H)
            }
        }
        var Y = a.indexOf("#");
        -1 !== Y && (this.hash = a.substr(Y), a = a.slice(0, Y));
        var V = a.indexOf("?");
        if (-1 !== V ? (this.search = a.substr(V), this.query = a.substr(V + 1), e && (this.query = x.parse(this.query)), a = a.slice(0, V)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), b[p] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var k = this.pathname || "", z = this.search || "";
            this.path = k + z
        }
        return this.href = this.format(), this
    }, n.prototype.format = function () {
        var t = this.auth || "";
        t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, o = "";
        this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && h.isObject(this.query) && Object.keys(this.query).length && (o = x.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || b[e]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function (t) {
            return encodeURIComponent(t)
        }), s = s.replace("#", "%23"), e + i + r + s + n
    }, n.prototype.resolve = function (t) {
        return this.resolveObject(i(t, !1, !0)).format()
    }, n.prototype.resolveObject = function (t) {
        if (h.isString(t)) {
            var e = new n;
            e.parse(t, !1, !0), t = e
        }
        for (var r = new n, i = Object.keys(this), o = 0; o < i.length; o++) {
            var s = i[o];
            r[s] = this[s]
        }
        if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
        if (t.slashes && !t.protocol) {
            for (var a = Object.keys(t), u = 0; u < a.length; u++) {
                var c = a[u];
                "protocol" !== c && (r[c] = t[c])
            }
            return b[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
        }
        if (t.protocol && t.protocol !== r.protocol) {
            if (!b[t.protocol]) {
                for (var l = Object.keys(t), f = 0; f < l.length; f++) {
                    var d = l[f];
                    r[d] = t[d]
                }
                return r.href = r.format(), r
            }
            if (r.protocol = t.protocol, t.host || E[t.protocol]) r.pathname = t.pathname; else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift());) ;
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
            }
            if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                var _ = r.pathname || "", m = r.search || "";
                r.path = _ + m
            }
            return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
        }
        var v = r.pathname && "/" === r.pathname.charAt(0), g = t.host || t.pathname && "/" === t.pathname.charAt(0),
            y = g || v || r.host && t.pathname, T = y, x = r.pathname && r.pathname.split("/") || [],
            p = t.pathname && t.pathname.split("/") || [], O = r.protocol && !b[r.protocol];
        if (O && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), y = y && ("" === p[0] || "" === x[0])), g) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, x = p; else if (p.length) x || (x = []), x.pop(), x = x.concat(p), r.search = t.search, r.query = t.query; else if (!h.isNullOrUndefined(t.search)) {
            if (O) {
                r.hostname = r.host = x.shift();
                var R = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                R && (r.auth = R.shift(), r.host = r.hostname = R.shift())
            }
            return r.search = t.search, r.query = t.query, h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
        }
        if (!x.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
        for (var A = x.slice(-1)[0], S = (r.host || t.host || x.length > 1) && ("." === A || ".." === A) || "" === A, I = 0, w = x.length; w >= 0; w--) A = x[w], "." === A ? x.splice(w, 1) : ".." === A ? (x.splice(w, 1), I++) : I && (x.splice(w, 1), I--);
        if (!y && !T) for (; I--; I) x.unshift("..");
        !y || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), S && "/" !== x.join("/").substr(-1) && x.push("");
        var P = "" === x[0] || x[0] && "/" === x[0].charAt(0);
        if (O) {
            r.hostname = r.host = P ? "" : x.length ? x.shift() : "";
            var R = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
            R && (r.auth = R.shift(), r.host = r.hostname = R.shift())
        }
        return y = y || r.host && x.length, y && !P && x.unshift(""), x.length ? r.pathname = x.join("/") : (r.pathname = null, r.path = null), h.isNull(r.pathname) && h.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
    }, n.prototype.parseHost = function () {
        var t = this.host, e = l.exec(t);
        e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }
}, function (t, e, r) {
    (function (t, n) {
        var i;
        !function (o) {
            function s(t) {
                throw new RangeError(N[t])
            }

            function a(t, e) {
                for (var r = t.length, n = []; r--;) n[r] = e(t[r]);
                return n
            }

            function u(t, e) {
                var r = t.split("@"), n = "";
                return r.length > 1 && (n = r[0] + "@", t = r[1]), t = t.replace(M, "."), n + a(t.split("."), e).join(".")
            }

            function h(t) {
                for (var e, r, n = [], i = 0, o = t.length; i < o;) e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (r = t.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--)) : n.push(e);
                return n
            }

            function c(t) {
                return a(t, function (t) {
                    var e = "";
                    return t > 65535 && (t -= 65536, e += L(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += L(t)
                }).join("")
            }

            function l(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : E
            }

            function f(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function d(t, e, r) {
                var n = 0;
                for (t = r ? D(t / R) : t >> 1, t += D(t / e); t > C * x >> 1; n += E) t = D(t / C);
                return D(n + (C + 1) * t / (t + O))
            }

            function p(t) {
                var e, r, n, i, o, a, u, h, f, p, _ = [], m = t.length, v = 0, g = S, y = A;
                for (r = t.lastIndexOf(I), r < 0 && (r = 0), n = 0; n < r; ++n) t.charCodeAt(n) >= 128 && s("not-basic"), _.push(t.charCodeAt(n));
                for (i = r > 0 ? r + 1 : 0; i < m;) {
                    for (o = v, a = 1, u = E; i >= m && s("invalid-input"), h = l(t.charCodeAt(i++)), (h >= E || h > D((T - v) / a)) && s("overflow"), v += h * a, f = u <= y ? b : u >= y + x ? x : u - y, !(h < f); u += E) p = E - f, a > D(T / p) && s("overflow"), a *= p;
                    e = _.length + 1, y = d(v - o, e, 0 == o), D(v / e) > T - g && s("overflow"), g += D(v / e), v %= e, _.splice(v++, 0, g)
                }
                return c(_)
            }

            function _(t) {
                var e, r, n, i, o, a, u, c, l, p, _, m, v, g, y, O = [];
                for (t = h(t), m = t.length, e = S, r = 0, o = A, a = 0; a < m; ++a) (_ = t[a]) < 128 && O.push(L(_));
                for (n = i = O.length, i && O.push(I); n < m;) {
                    for (u = T, a = 0; a < m; ++a) (_ = t[a]) >= e && _ < u && (u = _);
                    for (v = n + 1, u - e > D((T - r) / v) && s("overflow"), r += (u - e) * v, e = u, a = 0; a < m; ++a) if (_ = t[a], _ < e && ++r > T && s("overflow"), _ == e) {
                        for (c = r, l = E; p = l <= o ? b : l >= o + x ? x : l - o, !(c < p); l += E) y = c - p, g = E - p, O.push(L(f(p + y % g, 0))), c = D(y / g);
                        O.push(L(f(c, 0))), o = d(r, v, n == i), r = 0, ++n
                    }
                    ++r, ++e
                }
                return O.join("")
            }

            function m(t) {
                return u(t, function (t) {
                    return w.test(t) ? p(t.slice(4).toLowerCase()) : t
                })
            }

            function v(t) {
                return u(t, function (t) {
                    return P.test(t) ? "xn--" + _(t) : t
                })
            }

            var g = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof n && n);
            var y, T = 2147483647, E = 36, b = 1, x = 26, O = 38, R = 700, A = 72, S = 128, I = "-", w = /^xn--/,
                P = /[^\x20-\x7E]/, M = /[\x2E\u3002\uFF0E\uFF61]/g, N = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, C = E - b, D = Math.floor, L = String.fromCharCode;
            y = {
                version: "1.4.1",
                ucs2: {decode: h, encode: c},
                decode: p,
                encode: _,
                toASCII: v,
                toUnicode: m
            }, void 0 !== (i = function () {
                return y
            }.call(e, r, e, t)) && (t.exports = i)
        }()
    }).call(e, r(57)(t), r(14))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, r) {
    "use strict";
    t.exports = {
        isString: function (t) {
            return "string" == typeof t
        }, isObject: function (t) {
            return "object" == typeof t && null !== t
        }, isNull: function (t) {
            return null === t
        }, isNullOrUndefined: function (t) {
            return null == t
        }
    }
}, function (t, e, r) {
    "use strict";
    e.decode = e.parse = r(60), e.encode = e.stringify = r(61)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    t.exports = function (t, e, r, o) {
        e = e || "&", r = r || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length) return s;
        var a = /\+/g;
        t = t.split(e);
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var h = t.length;
        u > 0 && h > u && (h = u);
        for (var c = 0; c < h; ++c) {
            var l, f, d, p, _ = t[c].replace(a, "%20"), m = _.indexOf(r);
            m >= 0 ? (l = _.substr(0, m), f = _.substr(m + 1)) : (l = _, f = ""), d = decodeURIComponent(l), p = decodeURIComponent(f), n(s, d) ? i(s[d]) ? s[d].push(p) : s[d] = [s[d], p] : s[d] = p
        }
        return s
    };
    var i = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        if (t.map) return t.map(e);
        for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
        return r
    }

    var i = function (t) {
        switch (typeof t) {
            case"string":
                return t;
            case"boolean":
                return t ? "true" : "false";
            case"number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    };
    t.exports = function (t, e, r, a) {
        return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? n(s(t), function (s) {
            var a = encodeURIComponent(i(s)) + r;
            return o(t[s]) ? n(t[s], function (t) {
                return a + encodeURIComponent(i(t))
            }).join(e) : a + encodeURIComponent(i(t[s]))
        }).join(e) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(t)) : ""
    };
    var o = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, s = Object.keys || function (t) {
        var e = [];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
        return e
    }
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return a
    });
    var i = r(0), o = function (t, e) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        s = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
        a = function (t) {
            function e(e) {
                void 0 === e && (e = 1);
                var r = t.call(this, i._16, s, {uAlpha: 1}) || this;
                return r.alpha = e, r
            }

            return n(e, t), Object.defineProperty(e.prototype, "alpha", {
                get: function () {
                    return this.uniforms.uAlpha
                }, set: function (t) {
                    this.uniforms.uAlpha = t
                }, enumerable: !1, configurable: !0
            }), e
        }(i.u)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        h(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    function i(t, e) {
        var r, n = Math.ceil(t / 2), i = c, o = "";
        r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
        for (var s = 0; s < t; s++) {
            var a = r.replace("%index%", s.toString());
            a = a.replace("%sampleIndex%", s - (n - 1) + ".0"), o += a, o += "\n"
        }
        return i = i.replace("%blur%", o), i = i.replace("%size%", t.toString())
    }

    function o(t) {
        for (var e, r = l[t], n = r.length, i = f, o = "", s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", a = 0; a < t; a++) {
            var u = s.replace("%index%", a.toString());
            e = a, a >= n && (e = t - a - 1), u = u.replace("%value%", r[e].toString()), o += u, o += "\n"
        }
        return i = i.replace("%blur%", o), i = i.replace("%size%", t.toString())
    }

    r.d(e, "a", function () {
        return N
    }), r.d(e, "b", function () {
        return M
    });
    var s, a = r(0), u = r(3), h = function (t, e) {
            return (h = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        c = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
        l = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        f = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
    !function (t) {
        t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
    }(s || (s = {}));
    var d;
    !function (t) {
        t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
    }(d || (d = {}));
    var p;
    !function (t) {
        t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
    }(p || (p = {}));
    var _;
    !function (t) {
        t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
    }(_ || (_ = {}));
    var m;
    !function (t) {
        t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
    }(m || (m = {}));
    var v;
    !function (t) {
        t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
    }(v || (v = {}));
    var g;
    !function (t) {
        t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
    }(g || (g = {}));
    var y;
    !function (t) {
        t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
    }(y || (y = {}));
    var T;
    !function (t) {
        t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
    }(T || (T = {}));
    var E;
    !function (t) {
        t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
    }(E || (E = {}));
    var b;
    !function (t) {
        t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
    }(b || (b = {}));
    var x;
    !function (t) {
        t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
    }(x || (x = {}));
    var O;
    !function (t) {
        t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
    }(O || (O = {}));
    var R;
    !function (t) {
        t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
    }(R || (R = {}));
    var A;
    !function (t) {
        t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
    }(A || (A = {}));
    var S;
    !function (t) {
        t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
    }(S || (S = {}));
    var I;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
    }(I || (I = {}));
    var w;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
    }(w || (w = {}));
    var P;
    !function (t) {
        t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
    }(P || (P = {}));
    var M = function (t) {
        function e(e, r, n, s, a) {
            void 0 === r && (r = 8), void 0 === n && (n = 4), void 0 === s && (s = u.b.FILTER_RESOLUTION), void 0 === a && (a = 5);
            var h = this, c = i(a, e), l = o(a);
            return h = t.call(this, c, l) || this, h.horizontal = e, h.resolution = s, h._quality = 0, h.quality = n, h.blur = r, h
        }

        return n(e, t), e.prototype.apply = function (t, e, r, n) {
            if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, n); else {
                var i = t.getFilterTexture(), o = t.renderer, s = e, a = i;
                this.state.blend = !1, t.applyFilter(this, s, a, R.CLEAR);
                for (var u = 1; u < this.passes - 1; u++) {
                    t.bindAndClear(s, R.BLIT), this.uniforms.uSampler = a;
                    var h = a;
                    a = s, s = h, o.shader.bind(this), o.geometry.draw(5)
                }
                this.state.blend = !0, t.applyFilter(this, a, r, n), t.returnFilterTexture(i)
            }
        }, Object.defineProperty(e.prototype, "blur", {
            get: function () {
                return this.strength
            }, set: function (t) {
                this.padding = 1 + 2 * Math.abs(t), this.strength = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "quality", {
            get: function () {
                return this._quality
            }, set: function (t) {
                this._quality = t, this.passes = t
            }, enumerable: !1, configurable: !0
        }), e
    }(a.u), N = function (t) {
        function e(e, r, n, i) {
            void 0 === e && (e = 8), void 0 === r && (r = 4), void 0 === n && (n = u.b.FILTER_RESOLUTION), void 0 === i && (i = 5);
            var o = t.call(this) || this;
            return o.blurXFilter = new M(!0, e, r, n, i), o.blurYFilter = new M(!1, e, r, n, i), o.resolution = n, o.quality = r, o.blur = e, o.repeatEdgePixels = !1, o
        }

        return n(e, t), e.prototype.apply = function (t, e, r, n) {
            var i = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
            if (i && o) {
                var s = t.getFilterTexture();
                this.blurXFilter.apply(t, e, s, R.CLEAR), this.blurYFilter.apply(t, s, r, n), t.returnFilterTexture(s)
            } else o ? this.blurYFilter.apply(t, e, r, n) : this.blurXFilter.apply(t, e, r, n)
        }, e.prototype.updatePadding = function () {
            this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
        }, Object.defineProperty(e.prototype, "blur", {
            get: function () {
                return this.blurXFilter.blur
            }, set: function (t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "quality", {
            get: function () {
                return this.blurXFilter.quality
            }, set: function (t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "blurX", {
            get: function () {
                return this.blurXFilter.blur
            }, set: function (t) {
                this.blurXFilter.blur = t, this.updatePadding()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "blurY", {
            get: function () {
                return this.blurYFilter.blur
            }, set: function (t) {
                this.blurYFilter.blur = t, this.updatePadding()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
                return this.blurYFilter.blendMode
            }, set: function (t) {
                this.blurYFilter.blendMode = t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "repeatEdgePixels", {
            get: function () {
                return this._repeatEdgePixels
            }, set: function (t) {
                this._repeatEdgePixels = t, this.updatePadding()
            }, enumerable: !1, configurable: !0
        }), e
    }(a.u)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return a
    });
    var i = r(0), o = function (t, e) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        s = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
        a = function (t) {
            function e() {
                var e = this,
                    r = {m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1};
                return e = t.call(this, i._15, s, r) || this, e.alpha = 1, e
            }

            return n(e, t), e.prototype._loadMatrix = function (t, e) {
                void 0 === e && (e = !1);
                var r = t;
                e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r
            }, e.prototype._multiply = function (t, e, r) {
                return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t
            }, e.prototype._colorMatrix = function (t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, e.prototype.brightness = function (t, e) {
                var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, e.prototype.tint = function (t, e) {
                var r = t >> 16 & 255, n = t >> 8 & 255, i = 255 & t,
                    o = [r / 255, 0, 0, 0, 0, 0, n / 255, 0, 0, 0, 0, 0, i / 255, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(o, e)
            }, e.prototype.greyscale = function (t, e) {
                var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, e.prototype.blackAndWhite = function (t) {
                var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.hue = function (t, e) {
                t = (t || 0) / 180 * Math.PI;
                var r = Math.cos(t), n = Math.sin(t), i = Math.sqrt, o = 1 / 3, s = i(o), a = r + (1 - r) * o,
                    u = o * (1 - r) - s * n, h = o * (1 - r) + s * n, c = o * (1 - r) + s * n, l = r + o * (1 - r),
                    f = o * (1 - r) - s * n, d = o * (1 - r) - s * n, p = o * (1 - r) + s * n, _ = r + o * (1 - r),
                    m = [a, u, h, 0, 0, c, l, f, 0, 0, d, p, _, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(m, e)
            }, e.prototype.contrast = function (t, e) {
                var r = (t || 0) + 1, n = -.5 * (r - 1),
                    i = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.saturate = function (t, e) {
                void 0 === t && (t = 0);
                var r = 2 * t / 3 + 1, n = -.5 * (r - 1),
                    i = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.desaturate = function () {
                this.saturate(-1)
            }, e.prototype.negative = function (t) {
                var e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.sepia = function (t) {
                var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.technicolor = function (t) {
                var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.polaroid = function (t) {
                var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.toBGR = function (t) {
                var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.kodachrome = function (t) {
                var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.browni = function (t) {
                var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.vintage = function (t) {
                var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.colorTone = function (t, e, r, n, i) {
                t = t || .2, e = e || .15, r = r || 16770432, n = n || 3375104;
                var o = (r >> 16 & 255) / 255, s = (r >> 8 & 255) / 255, a = (255 & r) / 255, u = (n >> 16 & 255) / 255,
                    h = (n >> 8 & 255) / 255, c = (255 & n) / 255,
                    l = [.3, .59, .11, 0, 0, o, s, a, t, 0, u, h, c, e, 0, o - u, s - h, a - c, 0, 0];
                this._loadMatrix(l, i)
            }, e.prototype.night = function (t, e) {
                t = t || .1;
                var r = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, e.prototype.predator = function (t, e) {
                var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(r, e)
            }, e.prototype.lsd = function (t) {
                var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.reset = function () {
                var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(t, !1)
            }, Object.defineProperty(e.prototype, "matrix", {
                get: function () {
                    return this.uniforms.m
                }, set: function (t) {
                    this.uniforms.m = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "alpha", {
                get: function () {
                    return this.uniforms.uAlpha
                }, set: function (t) {
                    this.uniforms.uAlpha = t
                }, enumerable: !1, configurable: !0
            }), e
        }(i.u);
    a.prototype.grayscale = a.prototype.greyscale
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        s(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return h
    });
    var i = r(0), o = r(2), s = function (t, e) {
            return (s = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        a = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
        u = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
        h = function (t) {
            function e(e, r) {
                var n = this, i = new o.d;
                return e.renderable = !1, n = t.call(this, u, a, {
                    mapSampler: e._texture,
                    filterMatrix: i,
                    scale: {x: 1, y: 1},
                    rotation: new Float32Array([1, 0, 0, 1])
                }) || this, n.maskSprite = e, n.maskMatrix = i, null !== r && void 0 !== r || (r = 20), n.scale = new o.g(r, r), n
            }

            return n(e, t), e.prototype.apply = function (t, e, r, n) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
                var i = this.maskSprite.worldTransform, o = Math.sqrt(i.a * i.a + i.b * i.b),
                    s = Math.sqrt(i.c * i.c + i.d * i.d);
                0 !== o && 0 !== s && (this.uniforms.rotation[0] = i.a / o, this.uniforms.rotation[1] = i.b / o, this.uniforms.rotation[2] = i.c / s, this.uniforms.rotation[3] = i.d / s), t.applyFilter(this, e, r, n)
            }, Object.defineProperty(e.prototype, "map", {
                get: function () {
                    return this.uniforms.mapSampler
                }, set: function (t) {
                    this.uniforms.mapSampler = t
                }, enumerable: !1, configurable: !0
            }), e
        }(i.u)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return u
    });
    var i = r(0), o = function (t, e) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        s = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
        a = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
        u = function (t) {
            function e() {
                return t.call(this, s, a) || this
            }

            return n(e, t), e
        }(i.u)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return a
    });
    var i = r(0), o = function (t, e) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        },
        s = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
        a = function (t) {
            function e(e, r) {
                void 0 === e && (e = .5), void 0 === r && (r = Math.random());
                var n = t.call(this, i._15, s, {uNoise: 0, uSeed: 0}) || this;
                return n.noise = e, n.seed = r, n
            }

            return n(e, t), Object.defineProperty(e.prototype, "noise", {
                get: function () {
                    return this.uniforms.uNoise
                }, set: function (t) {
                    this.uniforms.uNoise = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "seed", {
                get: function () {
                    return this.uniforms.uSeed
                }, set: function (t) {
                    this.uniforms.uSeed = t
                }, enumerable: !1, configurable: !0
            }), e
        }(i.u)
}, function (t, e, r) {
    "use strict";
    var n, i = r(0), o = r(11), s = r(4), a = r(2), u = r(1), h = r(3);
    !function (t) {
        t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
    }(n || (n = {}));
    var c;
    !function (t) {
        t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
    }(c || (c = {}));
    var l;
    !function (t) {
        t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
    }(l || (l = {}));
    var f;
    !function (t) {
        t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
    }(f || (f = {}));
    var d;
    !function (t) {
        t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
    }(d || (d = {}));
    var p;
    !function (t) {
        t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
    }(p || (p = {}));
    var _;
    !function (t) {
        t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
    }(_ || (_ = {}));
    var m;
    !function (t) {
        t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
    }(m || (m = {}));
    var v;
    !function (t) {
        t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
    }(v || (v = {}));
    var g;
    !function (t) {
        t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
    }(g || (g = {}));
    var y;
    !function (t) {
        t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
    }(y || (y = {}));
    var T;
    !function (t) {
        t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
    }(T || (T = {}));
    var E;
    !function (t) {
        t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
    }(E || (E = {}));
    var b;
    !function (t) {
        t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
    }(b || (b = {}));
    var x;
    !function (t) {
        t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
    }(x || (x = {}));
    var O;
    !function (t) {
        t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
    }(O || (O = {}));
    var R;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
    }(R || (R = {}));
    var A;
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
    }(A || (A = {}));
    var S;
    !function (t) {
        t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
    }(S || (S = {}));
    var I = new a.d;
    s.c.prototype._cacheAsBitmap = !1, s.c.prototype._cacheData = null, s.c.prototype._cacheAsBitmapResolution = null, s.c.prototype._cacheAsBitmapMultisample = A.NONE;
    var w = function () {
        function t() {
            this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null
        }

        return t
    }();
    Object.defineProperties(s.c.prototype, {
        cacheAsBitmapResolution: {
            get: function () {
                return this._cacheAsBitmapResolution
            }, set: function (t) {
                t !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
            }
        }, cacheAsBitmapMultisample: {
            get: function () {
                return this._cacheAsBitmapMultisample
            }, set: function (t) {
                t !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
            }
        }, cacheAsBitmap: {
            get: function () {
                return this._cacheAsBitmap
            }, set: function (t) {
                if (this._cacheAsBitmap !== t) {
                    this._cacheAsBitmap = t;
                    var e;
                    t ? (this._cacheData || (this._cacheData = new w), e = this._cacheData, e.originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                }
            }
        }
    }), s.c.prototype._renderCached = function (t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
    }, s.c.prototype._initCachedDisplayObject = function (t) {
        var e;
        if (!this._cacheData || !this._cacheData.sprite) {
            var r = this.alpha;
            this.alpha = 1, t.batch.flush();
            var n = this.getLocalBounds(null, !0).clone();
            if (this.filters) {
                var s = this.filters[0].padding;
                n.pad(s)
            }
            n.ceil(h.b.RESOLUTION);
            var a = t.renderTexture.current, c = t.renderTexture.sourceFrame.clone(),
                l = t.renderTexture.destinationFrame.clone(), f = t.projection.transform, d = i.P.create({
                    width: n.width,
                    height: n.height,
                    resolution: this.cacheAsBitmapResolution || t.resolution,
                    multisample: null !== (e = this.cacheAsBitmapMultisample) && void 0 !== e ? e : t.multisample
                }), p = "cacheAsBitmap_" + Object(u.uid)();
            this._cacheData.textureCacheId = p, i.h.addToCache(d.baseTexture, p), i._3.addToCache(d, p);
            var _ = this.transform.localTransform.copyTo(I).invert().translate(-n.x, -n.y);
            this.render = this._cacheData.originalRender, t.render(this, {
                renderTexture: d,
                clear: !0,
                transform: _,
                skipUpdateTransform: !1
            }), t.framebuffer.blit(), t.projection.transform = f, t.renderTexture.bind(a, c, l), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
            var m = new o.a(d);
            m.transform.worldTransform = this.transform.worldTransform, m.anchor.x = -n.x / n.width, m.anchor.y = -n.y / n.height, m.alpha = r, m._bounds = this._bounds, this._cacheData.sprite = m, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = m.containsPoint.bind(m)
        }
    }, s.c.prototype._renderCachedCanvas = function (t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
    }, s.c.prototype._initCachedDisplayObjectCanvas = function (t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(null, !0), r = this.alpha;
            this.alpha = 1;
            var n = t.context, s = t._projTransform;
            e.ceil(h.b.RESOLUTION);
            var a = i.P.create({width: e.width, height: e.height}), c = "cacheAsBitmap_" + Object(u.uid)();
            this._cacheData.textureCacheId = c, i.h.addToCache(a.baseTexture, c), i._3.addToCache(a, c);
            var l = I;
            this.transform.localTransform.copyTo(l), l.invert(), l.tx -= e.x, l.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, {
                renderTexture: a,
                clear: !0,
                transform: l,
                skipUpdateTransform: !1
            }), t.context = n, t._projTransform = s, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
            var f = new o.a(a);
            f.transform.worldTransform = this.transform.worldTransform, f.anchor.x = -e.x / e.width, f.anchor.y = -e.y / e.height, f.alpha = r, f._bounds = this._bounds, this._cacheData.sprite = f, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = f.containsPoint.bind(f)
        }
    }, s.c.prototype._calculateCachedBounds = function () {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID
    }, s.c.prototype._getCachedLocalBounds = function () {
        return this._cacheData.sprite.getLocalBounds(null)
    }, s.c.prototype._destroyCachedDisplayObject = function () {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, i.h.removeFromCache(this._cacheData.textureCacheId), i._3.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
    }, s.c.prototype._cacheAsBitmapDestroy = function (t) {
        this.cacheAsBitmap = !1, this.destroy(t)
    }
}, function (t, e, r) {
    "use strict";
    var n = r(4);/*!
 * @pixi/mixin-get-child-by-name - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    n.c.prototype.name = null, n.b.prototype.getChildByName = function (t, e) {
        for (var r = 0, n = this.children.length; r < n; r++) if (this.children[r].name === t) return this.children[r];
        if (e) for (var r = 0, n = this.children.length; r < n; r++) {
            var i = this.children[r];
            if (i.getChildByName) {
                var o = this.children[r].getChildByName(t, !0);
                if (o) return o
            }
        }
        return null
    }
}, function (t, e, r) {
    "use strict";
    var n = r(4), i = r(2);/*!
 * @pixi/mixin-get-global-position - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
    n.c.prototype.getGlobalPosition = function (t, e) {
        return void 0 === t && (t = new i.g), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
    }
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return p
    }), r.d(e, "b", function () {
        return u
    }), r.d(e, "c", function () {
        return h
    }), r.d(e, "d", function () {
        return f
    }), r.d(e, "e", function () {
        return l
    }), r.d(e, "f", function () {
        return c
    });
    var i = r(16), o = r(5), s = r(0), a = function (t, e) {
        return (a = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, u = function (t) {
        function e(e, r, n, i) {
            void 0 === e && (e = 100), void 0 === r && (r = 100), void 0 === n && (n = 10), void 0 === i && (i = 10);
            var o = t.call(this) || this;
            return o.segWidth = n, o.segHeight = i, o.width = e, o.height = r, o.build(), o
        }

        return n(e, t), e.prototype.build = function () {
            for (var t = this.segWidth * this.segHeight, e = [], r = [], n = [], i = this.segWidth - 1, o = this.segHeight - 1, s = this.width / i, a = this.height / o, u = 0; u < t; u++) {
                var h = u % this.segWidth, c = u / this.segWidth | 0;
                e.push(h * s, c * a), r.push(h / i, c / o)
            }
            for (var l = i * o, u = 0; u < l; u++) {
                var f = u % i, d = u / i | 0, p = d * this.segWidth + f, _ = d * this.segWidth + f + 1,
                    m = (d + 1) * this.segWidth + f, v = (d + 1) * this.segWidth + f + 1;
                n.push(p, _, m, _, v, m)
            }
            this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(n), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
        }, e
    }(i.c), h = function (t) {
        function e(e, r, n) {
            void 0 === e && (e = 200), void 0 === n && (n = 0);
            var i = t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))) || this;
            return i.points = r, i._width = e, i.textureScale = n, i.build(), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this._width
            }, enumerable: !1, configurable: !0
        }), e.prototype.build = function () {
            var t = this.points;
            if (t) {
                var e = this.getBuffer("aVertexPosition"), r = this.getBuffer("aTextureCoord"), n = this.getIndex();
                if (!(t.length < 1)) {
                    e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), n.data = new Uint16Array(6 * (t.length - 1)));
                    var i = r.data, o = n.data;
                    i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 1;
                    for (var s = 0, a = t[0], u = this._width * this.textureScale, h = t.length, c = 0; c < h; c++) {
                        var l = 4 * c;
                        if (this.textureScale > 0) {
                            var f = a.x - t[c].x, d = a.y - t[c].y, p = Math.sqrt(f * f + d * d);
                            a = t[c], s += p / u
                        } else s = c / (h - 1);
                        i[l] = s, i[l + 1] = 0, i[l + 2] = s, i[l + 3] = 1
                    }
                    for (var _ = 0, c = 0; c < h - 1; c++) {
                        var l = 2 * c;
                        o[_++] = l, o[_++] = l + 1, o[_++] = l + 2, o[_++] = l + 2, o[_++] = l + 1, o[_++] = l + 3
                    }
                    r.update(), n.update(), this.updateVertices()
                }
            }
        }, e.prototype.updateVertices = function () {
            var t = this.points;
            if (!(t.length < 1)) {
                for (var e, r = t[0], n = 0, i = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                    var u = t[a], h = 4 * a;
                    e = a < t.length - 1 ? t[a + 1] : u, i = -(e.x - r.x), n = e.y - r.y;
                    var c = Math.sqrt(n * n + i * i),
                        l = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                    n /= c, i /= c, n *= l, i *= l, o[h] = u.x + n, o[h + 1] = u.y + i, o[h + 2] = u.x - n, o[h + 3] = u.y - i, r = u
                }
                this.buffers[0].update()
            }
        }, e.prototype.update = function () {
            this.textureScale > 0 ? this.build() : this.updateVertices()
        }, e
    }(i.c), c = function (t) {
        function e(e, r, n) {
            void 0 === n && (n = 0);
            var s = this, a = new h(e.height, r, n), u = new i.d(e);
            return n > 0 && (e.baseTexture.wrapMode = o.s.REPEAT), s = t.call(this, a, u) || this, s.autoUpdate = !0, s
        }

        return n(e, t), e.prototype._render = function (e) {
            var r = this.geometry;
            (this.autoUpdate || r._width !== this.shader.texture.height) && (r._width = this.shader.texture.height, r.update()), t.prototype._render.call(this, e)
        }, e
    }(i.a), l = function (t) {
        function e(e, r, n) {
            var o = this, a = new u(e.width, e.height, r, n), h = new i.d(s._3.WHITE);
            return o = t.call(this, a, h) || this, o.texture = e, o.autoResize = !0, o
        }

        return n(e, t), e.prototype.textureUpdated = function () {
            this._textureID = this.shader.texture._updateID;
            var t = this.geometry, e = this.shader.texture, r = e.width, n = e.height;
            !this.autoResize || t.width === r && t.height === n || (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build())
        }, Object.defineProperty(e.prototype, "texture", {
            get: function () {
                return this.shader.texture
            }, set: function (t) {
                this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
            }, enumerable: !1, configurable: !0
        }), e.prototype._render = function (e) {
            this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
        }, e.prototype.destroy = function (e) {
            this.shader.texture.off("update", this.textureUpdated, this), t.prototype.destroy.call(this, e)
        }, e
    }(i.a), f = function (t) {
        function e(e, r, n, o, a) {
            void 0 === e && (e = s._3.EMPTY);
            var u = this, h = new i.c(r, n, o);
            h.getBuffer("aVertexPosition").static = !1;
            var c = new i.d(e);
            return u = t.call(this, h, c, null, a) || this, u.autoUpdate = !0, u
        }

        return n(e, t), Object.defineProperty(e.prototype, "vertices", {
            get: function () {
                return this.geometry.getBuffer("aVertexPosition").data
            }, set: function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, enumerable: !1, configurable: !0
        }), e.prototype._render = function (e) {
            this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
        }, e
    }(i.a), d = 10, p = function (t) {
        function e(e, r, n, i, o) {
            void 0 === r && (r = d), void 0 === n && (n = d), void 0 === i && (i = d), void 0 === o && (o = d);
            var a = t.call(this, s._3.WHITE, 4, 4) || this;
            return a._origWidth = e.orig.width, a._origHeight = e.orig.height, a._width = a._origWidth, a._height = a._origHeight, a._leftWidth = r, a._rightWidth = i, a._topHeight = n, a._bottomHeight = o, a.texture = e, a
        }

        return n(e, t), e.prototype.textureUpdated = function () {
            this._textureID = this.shader.texture._updateID, this._refresh()
        }, Object.defineProperty(e.prototype, "vertices", {
            get: function () {
                return this.geometry.getBuffer("aVertexPosition").data
            }, set: function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, enumerable: !1, configurable: !0
        }), e.prototype.updateHorizontalVertices = function () {
            var t = this.vertices, e = this._getMinScale();
            t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height
        }, e.prototype.updateVerticalVertices = function () {
            var t = this.vertices, e = this._getMinScale();
            t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width
        }, e.prototype._getMinScale = function () {
            var t = this._leftWidth + this._rightWidth, e = this._width > t ? 1 : this._width / t,
                r = this._topHeight + this._bottomHeight, n = this._height > r ? 1 : this._height / r;
            return Math.min(e, n)
        }, Object.defineProperty(e.prototype, "width", {
            get: function () {
                return this._width
            }, set: function (t) {
                this._width = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "height", {
            get: function () {
                return this._height
            }, set: function (t) {
                this._height = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "leftWidth", {
            get: function () {
                return this._leftWidth
            }, set: function (t) {
                this._leftWidth = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "rightWidth", {
            get: function () {
                return this._rightWidth
            }, set: function (t) {
                this._rightWidth = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "topHeight", {
            get: function () {
                return this._topHeight
            }, set: function (t) {
                this._topHeight = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "bottomHeight", {
            get: function () {
                return this._bottomHeight
            }, set: function (t) {
                this._bottomHeight = t, this._refresh()
            }, enumerable: !1, configurable: !0
        }), e.prototype._refresh = function () {
            var t = this.texture, e = this.geometry.buffers[1].data;
            this._origWidth = t.orig.width, this._origHeight = t.orig.height;
            var r = 1 / this._origWidth, n = 1 / this._origHeight;
            e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = n * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
        }, e
    }(l)
}, function (t, e, r) {
    "use strict";

    function n(t, e) {
        function r() {
            this.constructor = t
        }

        a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
    }

    r.d(e, "a", function () {
        return u
    });
    var i = r(0), o = r(11), s = r(8), a = function (t, e) {
        return (a = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        })(t, e)
    }, u = function (t) {
        function e(e, r) {
            void 0 === r && (r = !0);
            var n = t.call(this, e[0] instanceof i._3 ? e[0] : e[0].texture) || this;
            return n._textures = null, n._durations = null, n._autoUpdate = r, n._isConnectedToTicker = !1, n.animationSpeed = 1, n.loop = !0, n.updateAnchor = !1, n.onComplete = null, n.onFrameChange = null, n.onLoop = null, n._currentTime = 0, n._playing = !1, n._previousFrame = null, n.textures = e, n
        }

        return n(e, t), e.prototype.stop = function () {
            this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (s.a.shared.remove(this.update, this), this._isConnectedToTicker = !1))
        }, e.prototype.play = function () {
            this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (s.a.shared.add(this.update, this, s.c.HIGH), this._isConnectedToTicker = !0))
        }, e.prototype.gotoAndStop = function (t) {
            this.stop();
            var e = this.currentFrame;
            this._currentTime = t, e !== this.currentFrame && this.updateTexture()
        }, e.prototype.gotoAndPlay = function (t) {
            var e = this.currentFrame;
            this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
        }, e.prototype.update = function (t) {
            if (this._playing) {
                var e = this.animationSpeed * t, r = this.currentFrame;
                if (null !== this._durations) {
                    var n = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (n += e / 60 * 1e3; n < 0;) this._currentTime--, n += this._durations[this.currentFrame];
                    var i = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); n >= this._durations[this.currentFrame];) n -= this._durations[this.currentFrame] * i, this._currentTime += i;
                    this._currentTime += n / this._durations[this.currentFrame]
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r && this.onLoop()), this.updateTexture())
            }
        }, e.prototype.updateTexture = function () {
            var t = this.currentFrame;
            this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame))
        }, e.prototype.destroy = function (e) {
            this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
        }, e.fromFrames = function (t) {
            for (var r = [], n = 0; n < t.length; ++n) r.push(i._3.from(t[n]));
            return new e(r)
        }, e.fromImages = function (t) {
            for (var r = [], n = 0; n < t.length; ++n) r.push(i._3.from(t[n]));
            return new e(r)
        }, Object.defineProperty(e.prototype, "totalFrames", {
            get: function () {
                return this._textures.length
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "textures", {
            get: function () {
                return this._textures
            }, set: function (t) {
                if (t[0] instanceof i._3) this._textures = t, this._durations = null; else {
                    this._textures = [], this._durations = [];
                    for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                }
                this._previousFrame = null, this.gotoAndStop(0), this.updateTexture()
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "currentFrame", {
            get: function () {
                var t = Math.floor(this._currentTime) % this._textures.length;
                return t < 0 && (t += this._textures.length), t
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "playing", {
            get: function () {
                return this._playing
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "autoUpdate", {
            get: function () {
                return this._autoUpdate
            }, set: function (t) {
                t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (s.a.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (s.a.shared.add(this.update, this), this._isConnectedToTicker = !0))
            }, enumerable: !1, configurable: !0
        }), e
    }(o.a)
}, function (t, e, r) {
    var n;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
    !function (i, o, s, a) {
        "use strict";

        function u(t, e, r) {
            return setTimeout(d(t, r), e)
        }

        function h(t, e, r) {
            return !!Array.isArray(t) && (c(t, r[e], r), !0)
        }

        function c(t, e, r) {
            var n;
            if (t) if (t.forEach) t.forEach(e, r); else if (t.length !== a) for (n = 0; n < t.length;) e.call(r, t[n], n, t), n++; else for (n in t) t.hasOwnProperty(n) && e.call(r, t[n], n, t)
        }

        function l(t, e, r) {
            var n = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
            return function () {
                var e = new Error("get-stack-trace"),
                    r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = i.console && (i.console.warn || i.console.log);
                return o && o.call(i.console, n, r), t.apply(this, arguments)
            }
        }

        function f(t, e, r) {
            var n, i = e.prototype;
            n = t.prototype = Object.create(i), n.constructor = t, n._super = i, r && pt(n, r)
        }

        function d(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function p(t, e) {
            return typeof t == vt ? t.apply(e ? e[0] || a : a, e) : t
        }

        function _(t, e) {
            return t === a ? e : t
        }

        function m(t, e, r) {
            c(T(e), function (e) {
                t.addEventListener(e, r, !1)
            })
        }

        function v(t, e, r) {
            c(T(e), function (e) {
                t.removeEventListener(e, r, !1)
            })
        }

        function g(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function y(t, e) {
            return t.indexOf(e) > -1
        }

        function T(t) {
            return t.trim().split(/\s+/g)
        }

        function E(t, e, r) {
            if (t.indexOf && !r) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (r && t[n][r] == e || !r && t[n] === e) return n;
                n++
            }
            return -1
        }

        function b(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function x(t, e, r) {
            for (var n = [], i = [], o = 0; o < t.length;) {
                var s = e ? t[o][e] : t[o];
                E(i, s) < 0 && n.push(t[o]), i[o] = s, o++
            }
            return r && (n = e ? n.sort(function (t, r) {
                return t[e] > r[e]
            }) : n.sort()), n
        }

        function O(t, e) {
            for (var r, n, i = e[0].toUpperCase() + e.slice(1), o = 0; o < _t.length;) {
                if (r = _t[o], (n = r ? r + i : e) in t) return n;
                o++
            }
            return a
        }

        function R() {
            return xt++
        }

        function A(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || i
        }

        function S(t, e) {
            var r = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                p(t.options.enable, [t]) && r.handler(e)
            }, this.init()
        }

        function I(t) {
            var e = t.options.inputClass;
            return new (e || (At ? j : St ? V : Rt ? W : X))(t, w)
        }

        function w(t, e, r) {
            var n = r.pointers.length, i = r.changedPointers.length, o = e & wt && n - i == 0,
                s = e & (Mt | Nt) && n - i == 0;
            r.isFirst = !!o, r.isFinal = !!s, o && (t.session = {}), r.eventType = e, P(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r
        }

        function P(t, e) {
            var r = t.session, n = e.pointers, i = n.length;
            r.firstInput || (r.firstInput = C(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = C(e) : 1 === i && (r.firstMultiple = !1);
            var o = r.firstInput, s = r.firstMultiple, a = s ? s.center : o.center, u = e.center = D(n);
            e.timeStamp = Tt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = B(a, u), e.distance = U(a, u), M(r, e), e.offsetDirection = F(e.deltaX, e.deltaY);
            var h = L(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = yt(h.x) > yt(h.y) ? h.x : h.y, e.scale = s ? k(s.pointers, n) : 1, e.rotation = s ? G(s.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length, N(r, e);
            var c = t.element;
            g(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
        }

        function M(t, e) {
            var r = e.center, n = t.offsetDelta || {}, i = t.prevDelta || {}, o = t.prevInput || {};
            e.eventType !== wt && o.eventType !== Mt || (i = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, n = t.offsetDelta = {x: r.x, y: r.y}), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y)
        }

        function N(t, e) {
            var r, n, i, o, s = t.lastInterval || e, u = e.timeStamp - s.timeStamp;
            if (e.eventType != Nt && (u > It || s.velocity === a)) {
                var h = e.deltaX - s.deltaX, c = e.deltaY - s.deltaY, l = L(u, h, c);
                n = l.x, i = l.y, r = yt(l.x) > yt(l.y) ? l.x : l.y, o = F(h, c), t.lastInterval = e
            } else r = s.velocity, n = s.velocityX, i = s.velocityY, o = s.direction;
            e.velocity = r, e.velocityX = n, e.velocityY = i, e.direction = o
        }

        function C(t) {
            for (var e = [], r = 0; r < t.pointers.length;) e[r] = {
                clientX: gt(t.pointers[r].clientX),
                clientY: gt(t.pointers[r].clientY)
            }, r++;
            return {timeStamp: Tt(), pointers: e, center: D(e), deltaX: t.deltaX, deltaY: t.deltaY}
        }

        function D(t) {
            var e = t.length;
            if (1 === e) return {x: gt(t[0].clientX), y: gt(t[0].clientY)};
            for (var r = 0, n = 0, i = 0; i < e;) r += t[i].clientX, n += t[i].clientY, i++;
            return {x: gt(r / e), y: gt(n / e)}
        }

        function L(t, e, r) {
            return {x: e / t || 0, y: r / t || 0}
        }

        function F(t, e) {
            return t === e ? Ct : yt(t) >= yt(e) ? t < 0 ? Dt : Lt : e < 0 ? Ft : Ut
        }

        function U(t, e, r) {
            r || (r = Xt);
            var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
            return Math.sqrt(n * n + i * i)
        }

        function B(t, e, r) {
            r || (r = Xt);
            var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
            return 180 * Math.atan2(i, n) / Math.PI
        }

        function G(t, e) {
            return B(e[1], e[0], jt) + B(t[1], t[0], jt)
        }

        function k(t, e) {
            return U(e[0], e[1], jt) / U(t[0], t[1], jt)
        }

        function X() {
            this.evEl = Yt, this.evWin = Vt, this.pressed = !1, S.apply(this, arguments)
        }

        function j() {
            this.evEl = qt, this.evWin = Zt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function H() {
            this.evTarget = Jt, this.evWin = $t, this.started = !1, S.apply(this, arguments)
        }

        function Y(t, e) {
            var r = b(t.touches), n = b(t.changedTouches);
            return e & (Mt | Nt) && (r = x(r.concat(n), "identifier", !0)), [r, n]
        }

        function V() {
            this.evTarget = te, this.targetIds = {}, S.apply(this, arguments)
        }

        function z(t, e) {
            var r = b(t.touches), n = this.targetIds;
            if (e & (wt | Pt) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
            var i, o, s = b(t.changedTouches), a = [], u = this.target;
            if (o = r.filter(function (t) {
                return g(t.target, u)
            }), e === wt) for (i = 0; i < o.length;) n[o[i].identifier] = !0, i++;
            for (i = 0; i < s.length;) n[s[i].identifier] && a.push(s[i]), e & (Mt | Nt) && delete n[s[i].identifier], i++;
            return a.length ? [x(o.concat(a), "identifier", !0), a] : void 0
        }

        function W() {
            S.apply(this, arguments);
            var t = d(this.handler, this);
            this.touch = new V(this.manager, t), this.mouse = new X(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function q(t, e) {
            t & wt ? (this.primaryTouch = e.changedPointers[0].identifier, Z.call(this, e)) : t & (Mt | Nt) && Z.call(this, e)
        }

        function Z(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var r = {x: e.clientX, y: e.clientY};
                this.lastTouches.push(r);
                var n = this.lastTouches, i = function () {
                    var t = n.indexOf(r);
                    t > -1 && n.splice(t, 1)
                };
                setTimeout(i, ee)
            }
        }

        function K(t) {
            for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var i = this.lastTouches[n], o = Math.abs(e - i.x), s = Math.abs(r - i.y);
                if (o <= re && s <= re) return !0
            }
            return !1
        }

        function J(t, e) {
            this.manager = t, this.set(e)
        }

        function $(t) {
            if (y(t, ae)) return ae;
            var e = y(t, ue), r = y(t, he);
            return e && r ? ae : e || r ? e ? ue : he : y(t, se) ? se : oe
        }

        function Q(t) {
            this.options = pt({}, this.defaults, t || {}), this.id = R(), this.manager = null, this.options.enable = _(this.options.enable, !0), this.state = le, this.simultaneous = {}, this.requireFail = []
        }

        function tt(t) {
            return t & me ? "cancel" : t & pe ? "end" : t & de ? "move" : t & fe ? "start" : ""
        }

        function et(t) {
            return t == Ut ? "down" : t == Ft ? "up" : t == Dt ? "left" : t == Lt ? "right" : ""
        }

        function rt(t, e) {
            var r = e.manager;
            return r ? r.get(t) : t
        }

        function nt() {
            Q.apply(this, arguments)
        }

        function it() {
            nt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ot() {
            nt.apply(this, arguments)
        }

        function st() {
            Q.apply(this, arguments), this._timer = null, this._input = null
        }

        function at() {
            nt.apply(this, arguments)
        }

        function ut() {
            nt.apply(this, arguments)
        }

        function ht() {
            Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ct(t, e) {
            return e = e || {}, e.recognizers = _(e.recognizers, ct.defaults.preset), new lt(t, e)
        }

        function lt(t, e) {
            this.options = pt({}, ct.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = I(this), this.touchAction = new J(this, this.options.touchAction), ft(this, !0), c(this.options.recognizers, function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ft(t, e) {
            var r = t.element;
            if (r.style) {
                var n;
                c(t.options.cssProps, function (i, o) {
                    n = O(r.style, o), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function dt(t, e) {
            var r = o.createEvent("Event");
            r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r)
        }

        var pt, _t = ["", "webkit", "Moz", "MS", "ms", "o"], mt = o.createElement("div"), vt = "function",
            gt = Math.round, yt = Math.abs, Tt = Date.now;
        pt = "function" != typeof Object.assign ? function (t) {
            if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                if (n !== a && null !== n) for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
            }
            return e
        } : Object.assign;
        var Et = l(function (t, e, r) {
                for (var n = Object.keys(e), i = 0; i < n.length;) (!r || r && t[n[i]] === a) && (t[n[i]] = e[n[i]]), i++;
                return t
            }, "extend", "Use `assign`."), bt = l(function (t, e) {
                return Et(t, e, !0)
            }, "merge", "Use `assign`."), xt = 1, Ot = /mobile|tablet|ip(ad|hone|od)|android/i, Rt = "ontouchstart" in i,
            At = O(i, "PointerEvent") !== a, St = Rt && Ot.test(navigator.userAgent), It = 25, wt = 1, Pt = 2, Mt = 4,
            Nt = 8, Ct = 1, Dt = 2, Lt = 4, Ft = 8, Ut = 16, Bt = Dt | Lt, Gt = Ft | Ut, kt = Bt | Gt, Xt = ["x", "y"],
            jt = ["clientX", "clientY"];
        S.prototype = {
            handler: function () {
            }, init: function () {
                this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(A(this.element), this.evWin, this.domHandler)
            }, destroy: function () {
                this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(A(this.element), this.evWin, this.domHandler)
            }
        };
        var Ht = {mousedown: wt, mousemove: Pt, mouseup: Mt}, Yt = "mousedown", Vt = "mousemove mouseup";
        f(X, S, {
            handler: function (t) {
                var e = Ht[t.type];
                e & wt && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = Mt), this.pressed && (e & Mt && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: "mouse",
                    srcEvent: t
                }))
            }
        });
        var zt = {pointerdown: wt, pointermove: Pt, pointerup: Mt, pointercancel: Nt, pointerout: Nt},
            Wt = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, qt = "pointerdown",
            Zt = "pointermove pointerup pointercancel";
        i.MSPointerEvent && !i.PointerEvent && (qt = "MSPointerDown", Zt = "MSPointerMove MSPointerUp MSPointerCancel"), f(j, S, {
            handler: function (t) {
                var e = this.store, r = !1, n = t.type.toLowerCase().replace("ms", ""), i = zt[n],
                    o = Wt[t.pointerType] || t.pointerType, s = "touch" == o, a = E(e, t.pointerId, "pointerId");
                i & wt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : i & (Mt | Nt) && (r = !0), a < 0 || (e[a] = t, this.callback(this.manager, i, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: o,
                    srcEvent: t
                }), r && e.splice(a, 1))
            }
        });
        var Kt = {touchstart: wt, touchmove: Pt, touchend: Mt, touchcancel: Nt}, Jt = "touchstart",
            $t = "touchstart touchmove touchend touchcancel";
        f(H, S, {
            handler: function (t) {
                var e = Kt[t.type];
                if (e === wt && (this.started = !0), this.started) {
                    var r = Y.call(this, t, e);
                    e & (Mt | Nt) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: r[0],
                        changedPointers: r[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            }
        });
        var Qt = {touchstart: wt, touchmove: Pt, touchend: Mt, touchcancel: Nt},
            te = "touchstart touchmove touchend touchcancel";
        f(V, S, {
            handler: function (t) {
                var e = Qt[t.type], r = z.call(this, t, e);
                r && this.callback(this.manager, e, {
                    pointers: r[0],
                    changedPointers: r[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        });
        var ee = 2500, re = 25;
        f(W, S, {
            handler: function (t, e, r) {
                var n = "touch" == r.pointerType, i = "mouse" == r.pointerType;
                if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
                    if (n) q.call(this, e, r); else if (i && K.call(this, r)) return;
                    this.callback(t, e, r)
                }
            }, destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var ne = O(mt.style, "touchAction"), ie = ne !== a, oe = "auto", se = "manipulation", ae = "none", ue = "pan-x",
            he = "pan-y", ce = function () {
                if (!ie) return !1;
                var t = {}, e = i.CSS && i.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (r) {
                    t[r] = !e || i.CSS.supports("touch-action", r)
                }), t
            }();
        J.prototype = {
            set: function (t) {
                "compute" == t && (t = this.compute()), ie && this.manager.element.style && ce[t] && (this.manager.element.style[ne] = t), this.actions = t.toLowerCase().trim()
            }, update: function () {
                this.set(this.manager.options.touchAction)
            }, compute: function () {
                var t = [];
                return c(this.manager.recognizers, function (e) {
                    p(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), $(t.join(" "))
            }, preventDefaults: function (t) {
                var e = t.srcEvent, r = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions, i = y(n, ae) && !ce[ae], o = y(n, he) && !ce[he], s = y(n, ue) && !ce[ue];
                if (i) {
                    var a = 1 === t.pointers.length, u = t.distance < 2, h = t.deltaTime < 250;
                    if (a && u && h) return
                }
                return s && o ? void 0 : i || o && r & Bt || s && r & Gt ? this.preventSrc(e) : void 0
            }, preventSrc: function (t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var le = 1, fe = 2, de = 4, pe = 8, _e = pe, me = 16;
        Q.prototype = {
            defaults: {}, set: function (t) {
                return pt(this.options, t), this.manager && this.manager.touchAction.update(), this
            }, recognizeWith: function (t) {
                if (h(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = rt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            }, dropRecognizeWith: function (t) {
                return h(t, "dropRecognizeWith", this) ? this : (t = rt(t, this), delete this.simultaneous[t.id], this)
            }, requireFailure: function (t) {
                if (h(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = rt(t, this), -1 === E(e, t) && (e.push(t), t.requireFailure(this)), this
            }, dropRequireFailure: function (t) {
                if (h(t, "dropRequireFailure", this)) return this;
                t = rt(t, this);
                var e = E(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            }, hasRequireFailures: function () {
                return this.requireFail.length > 0
            }, canRecognizeWith: function (t) {
                return !!this.simultaneous[t.id]
            }, emit: function (t) {
                function e(e) {
                    r.manager.emit(e, t)
                }

                var r = this, n = this.state;
                n < pe && e(r.options.event + tt(n)), e(r.options.event), t.additionalEvent && e(t.additionalEvent), n >= pe && e(r.options.event + tt(n))
            }, tryEmit: function (t) {
                if (this.canEmit()) return this.emit(t);
                this.state = 32
            }, canEmit: function () {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | le))) return !1;
                    t++
                }
                return !0
            }, recognize: function (t) {
                var e = pt({}, t);
                if (!p(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
                this.state & (_e | me | 32) && (this.state = le), this.state = this.process(e), this.state & (fe | de | pe | me) && this.tryEmit(e)
            }, process: function (t) {
            }, getTouchAction: function () {
            }, reset: function () {
            }
        }, f(nt, Q, {
            defaults: {pointers: 1}, attrTest: function (t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            }, process: function (t) {
                var e = this.state, r = t.eventType, n = e & (fe | de), i = this.attrTest(t);
                return n && (r & Nt || !i) ? e | me : n || i ? r & Mt ? e | pe : e & fe ? e | de : fe : 32
            }
        }), f(it, nt, {
            defaults: {event: "pan", threshold: 10, pointers: 1, direction: kt},
            getTouchAction: function () {
                var t = this.options.direction, e = [];
                return t & Bt && e.push(he), t & Gt && e.push(ue), e
            },
            directionTest: function (t) {
                var e = this.options, r = !0, n = t.distance, i = t.direction, o = t.deltaX, s = t.deltaY;
                return i & e.direction || (e.direction & Bt ? (i = 0 === o ? Ct : o < 0 ? Dt : Lt, r = o != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === s ? Ct : s < 0 ? Ft : Ut, r = s != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
            },
            attrTest: function (t) {
                return nt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
            },
            emit: function (t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = et(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), f(ot, nt, {
            defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                return [ae]
            }, attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
            }, emit: function (t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), f(st, Q, {
            defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
                return [oe]
            }, process: function (t) {
                var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                    i = t.deltaTime > e.time;
                if (this._input = t, !n || !r || t.eventType & (Mt | Nt) && !i) this.reset(); else if (t.eventType & wt) this.reset(), this._timer = u(function () {
                    this.state = _e, this.tryEmit()
                }, e.time, this); else if (t.eventType & Mt) return _e;
                return 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function (t) {
                this.state === _e && (t && t.eventType & Mt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Tt(), this.manager.emit(this.options.event, this._input)))
            }
        }), f(at, nt, {
            defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                return [ae]
            }, attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
            }
        }), f(ut, nt, {
            defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Bt | Gt, pointers: 1},
            getTouchAction: function () {
                return it.prototype.getTouchAction.call(this)
            },
            attrTest: function (t) {
                var e, r = this.options.direction;
                return r & (Bt | Gt) ? e = t.overallVelocity : r & Bt ? e = t.overallVelocityX : r & Gt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && yt(e) > this.options.velocity && t.eventType & Mt
            },
            emit: function (t) {
                var e = et(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), f(ht, Q, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            }, getTouchAction: function () {
                return [se]
            }, process: function (t) {
                var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                    i = t.deltaTime < e.time;
                if (this.reset(), t.eventType & wt && 0 === this.count) return this.failTimeout();
                if (n && i && r) {
                    if (t.eventType != Mt) return this.failTimeout();
                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        s = !this.pCenter || U(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, s && o ? this.count += 1 : this.count = 1, this._input = t;
                    if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = u(function () {
                        this.state = _e, this.tryEmit()
                    }, e.interval, this), fe) : _e
                }
                return 32
            }, failTimeout: function () {
                return this._timer = u(function () {
                    this.state = 32
                }, this.options.interval, this), 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function () {
                this.state == _e && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ct.VERSION = "2.0.7", ct.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[at, {enable: !1}], [ot, {enable: !1}, ["rotate"]], [ut, {direction: Bt}], [it, {direction: Bt}, ["swipe"]], [ht], [ht, {
                event: "doubletap",
                taps: 2
            }, ["tap"]], [st]],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        lt.prototype = {
            set: function (t) {
                return pt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            }, stop: function (t) {
                this.session.stopped = t ? 2 : 1
            }, recognize: function (t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var r, n = this.recognizers, i = e.curRecognizer;
                    (!i || i && i.state & _e) && (i = e.curRecognizer = null);
                    for (var o = 0; o < n.length;) r = n[o], 2 === e.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(t), !i && r.state & (fe | de | pe) && (i = e.curRecognizer = r), o++
                }
            }, get: function (t) {
                if (t instanceof Q) return t;
                for (var e = this.recognizers, r = 0; r < e.length; r++) if (e[r].options.event == t) return e[r];
                return null
            }, add: function (t) {
                if (h(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            }, remove: function (t) {
                if (h(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers, r = E(e, t);
                    -1 !== r && (e.splice(r, 1), this.touchAction.update())
                }
                return this
            }, on: function (t, e) {
                if (t !== a && e !== a) {
                    var r = this.handlers;
                    return c(T(t), function (t) {
                        r[t] = r[t] || [], r[t].push(e)
                    }), this
                }
            }, off: function (t, e) {
                if (t !== a) {
                    var r = this.handlers;
                    return c(T(t), function (t) {
                        e ? r[t] && r[t].splice(E(r[t], e), 1) : delete r[t]
                    }), this
                }
            }, emit: function (t, e) {
                this.options.domEvents && dt(t, e);
                var r = this.handlers[t] && this.handlers[t].slice();
                if (r && r.length) {
                    e.type = t, e.preventDefault = function () {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < r.length;) r[n](e), n++
                }
            }, destroy: function () {
                this.element && ft(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, pt(ct, {
            INPUT_START: wt,
            INPUT_MOVE: Pt,
            INPUT_END: Mt,
            INPUT_CANCEL: Nt,
            STATE_POSSIBLE: le,
            STATE_BEGAN: fe,
            STATE_CHANGED: de,
            STATE_ENDED: pe,
            STATE_RECOGNIZED: _e,
            STATE_CANCELLED: me,
            STATE_FAILED: 32,
            DIRECTION_NONE: Ct,
            DIRECTION_LEFT: Dt,
            DIRECTION_RIGHT: Lt,
            DIRECTION_UP: Ft,
            DIRECTION_DOWN: Ut,
            DIRECTION_HORIZONTAL: Bt,
            DIRECTION_VERTICAL: Gt,
            DIRECTION_ALL: kt,
            Manager: lt,
            Input: S,
            TouchAction: J,
            TouchInput: V,
            MouseInput: X,
            PointerEventInput: j,
            TouchMouseInput: W,
            SingleTouchInput: H,
            Recognizer: Q,
            AttrRecognizer: nt,
            Tap: ht,
            Pan: it,
            Swipe: ut,
            Pinch: ot,
            Rotate: at,
            Press: st,
            on: m,
            off: v,
            each: c,
            merge: bt,
            extend: Et,
            assign: pt,
            inherit: f,
            bindFn: d,
            prefixed: O
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = ct, (n = function () {
            return ct
        }.call(e, r, e, t)) !== a && (t.exports = n)
    }(window, document)
}, function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
        return _t
    });
    var n, i, o, s, a, u, h, c, l = r(32), f = function () {
            return "undefined" != typeof window
        }, d = {}, p = 180 / Math.PI, _ = Math.PI / 180, m = Math.atan2, v = /([A-Z])/g,
        g = /(?:left|right|width|margin|padding|x)/i, y = /[\s,\(]\S/,
        T = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, E = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, b = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, x = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        }, O = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        }, R = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }, A = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }, S = function (t, e, r) {
            return t.style[e] = r
        }, I = function (t, e, r) {
            return t.style.setProperty(e, r)
        }, w = function (t, e, r) {
            return t._gsap[e] = r
        }, P = function (t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        }, M = function (t, e, r, n, i) {
            var o = t._gsap;
            o.scaleX = o.scaleY = r, o.renderTransform(i, o)
        }, N = function (t, e, r, n, i) {
            var o = t._gsap;
            o[e] = r, o.renderTransform(i, o)
        }, C = "transform", D = C + "Origin", L = function (t, e) {
            var r = i.createElementNS ? i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i.createElement(t);
            return r.style ? r : i.createElement(t)
        }, F = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(v, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, B(r) || r, 1) || ""
        }, U = "O,Moz,ms,Ms,Webkit".split(","), B = function (t, e, r) {
            var n = e || a, i = n.style, o = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(U[o] + t in i);) ;
            return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? U[o] : "") + t
        }, G = function () {
            f() && window.document && (n = window, i = n.document, o = i.documentElement, a = L("div") || {style: {}}, u = L("div"), C = B(C), D = C + "Origin", a.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", c = !!B("perspective"), s = 1)
        }, k = function t(e) {
            var r,
                n = L("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode, s = this.nextSibling, a = this.style.cssText;
            if (o.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {
            } else this._gsapBBox && (r = this._gsapBBox());
            return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), o.removeChild(n), this.style.cssText = a, r
        }, X = function (t, e) {
            for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        }, j = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (r) {
                e = k.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === k || (e = k.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +X(t, ["x", "cx", "x1"]) || 0,
                y: +X(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, H = function (t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !j(t))
        }, Y = function (t, e) {
            if (e) {
                var r = t.style;
                e in d && e !== D && (e = C), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(v, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        }, V = function (t, e, r, n, i, o) {
            var s = new l.n(t._pt, e, r, 0, 1, o ? A : R);
            return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
        }, z = {deg: 1, rad: 1, turn: 1}, W = function t(e, r, n, o) {
            var s, u, h, c, f = parseFloat(n) || 0, p = (n + "").trim().substr((f + "").length) || "px", _ = a.style,
                m = g.test(r), v = "svg" === e.tagName.toLowerCase(),
                y = (v ? "client" : "offset") + (m ? "Width" : "Height"), T = "px" === o, E = "%" === o;
            return o === p || !f || z[o] || z[p] ? f : ("px" !== p && !T && (f = t(e, r, n, "px")), c = e.getCTM && H(e), !E && "%" !== p || !d[r] && !~r.indexOf("adius") ? (_[m ? "width" : "height"] = 100 + (T ? p : o), u = ~r.indexOf("adius") || "em" === o && e.appendChild && !v ? e : e.parentNode, c && (u = (e.ownerSVGElement || {}).parentNode), u && u !== i && u.appendChild || (u = i.body), (h = u._gsap) && E && h.width && m && h.time === l.Q.time ? Object(l.O)(f / h.width * 100) : ((E || "%" === p) && (_.position = F(e, "position")), u === e && (_.position = "static"), u.appendChild(a), s = a[y], u.removeChild(a), _.position = "absolute", m && E && (h = Object(l.C)(u), h.time = l.Q.time, h.width = u[y]), Object(l.O)(T ? s * f / 100 : s && f ? 100 / s * f : 0))) : (s = c ? e.getBBox()[m ? "width" : "height"] : e[y], Object(l.O)(E ? f / s * 100 : f / 100 * s)))
        }, q = function (t, e, r, n) {
            var i;
            return s || G(), e in T && "transform" !== e && (e = T[e], ~e.indexOf(",") && (e = e.split(",")[0])), d[e] && "transform" !== e ? (i = st(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : at(F(t, D)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Q[e] && Q[e](t, e, r) || F(t, e) || Object(l.D)(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? W(t, e, i, r) + r : i
        }, Z = function (t, e, r, n) {
            if (!r || "none" === r) {
                var i = B(e, t, 1), o = i && F(t, i, 1);
                o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = F(t, "borderTopColor"))
            }
            var s, a, u, h, c, f, d, p, _, m, v, g, y, T = new l.n(this._pt, t.style, e, 0, 1, l.M), E = 0, b = 0;
            if (T.b = r, T.e = n, r += "", n += "", "auto" === n && (t.style[e] = n, n = F(t, e) || n, t.style[e] = r), s = [r, n], Object(l.z)(s), r = s[0], n = s[1], u = r.match(l.J) || [], y = n.match(l.J) || [], y.length) {
                for (; a = l.J.exec(n);) d = a[0], _ = n.substring(E, a.index), c ? c = (c + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (c = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, v = f.substr((h + "").length), g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0, g && (d = d.substr(2)), p = parseFloat(d), m = d.substr((p + "").length), E = l.J.lastIndex - m.length, m || (m = m || l.A.units[e] || v, E === n.length && (n += m, T.e += m)), v !== m && (h = W(t, e, f, m) || 0), T._pt = {
                    _next: T._pt,
                    p: _ || 1 === b ? _ : ",",
                    s: h,
                    c: g ? g * p : p - h,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                T.c = E < n.length ? n.substring(E, n.length) : ""
            } else T.r = "display" === e && "none" === n ? A : R;
            return l.L.test(n) && (T.e = 0), this._pt = T, T
        }, K = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, J = function (t) {
            var e = t.split(" "), r = e[0], n = e[1] || "50%";
            return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = K[r] || r, e[1] = K[n] || n, e.join(" ")
        }, $ = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, o = e.t, s = o.style, a = e.u, u = o._gsap;
                if ("all" === a || !0 === a) s.cssText = "", n = 1; else for (a = a.split(","), i = a.length; --i > -1;) r = a[i], d[r] && (n = 1, r = "transformOrigin" === r ? D : C), Y(o, r);
                n && (Y(o, C), u && (u.svg && o.removeAttribute("transform"), st(o, 1), u.uncache = 1))
            }
        }, Q = {
            clearProps: function (t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new l.n(t._pt, e, r, 0, 0, $);
                    return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                }
            }
        }, tt = [1, 0, 0, 1, 0, 0], et = {}, rt = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }, nt = function (t) {
            var e = F(t, C);
            return rt(e) ? tt : e.substr(7).match(l.I).map(l.O)
        }, it = function (t, e) {
            var r, n, i, s, a = t._gsap || Object(l.C)(t), u = t.style, h = nt(t);
            return a.svg && t.getAttribute("transform") ? (i = t.transform.baseVal.consolidate().matrix, h = [i.a, i.b, i.c, i.d, i.e, i.f], "1,0,0,1,0,0" === h.join(",") ? tt : h) : (h !== tt || t.offsetParent || t === o || a.svg || (i = u.display, u.display = "block", r = t.parentNode, r && t.offsetParent || (s = 1, n = t.nextSibling, o.appendChild(t)), h = nt(t), i ? u.display = i : Y(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : o.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
        }, ot = function (t, e, r, n, i, o) {
            var s, a, u, h, c = t._gsap, l = i || it(t, !0), f = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0,
                _ = c.yOffset || 0, m = l[0], v = l[1], g = l[2], y = l[3], T = l[4], E = l[5], b = e.split(" "),
                x = parseFloat(b[0]) || 0, O = parseFloat(b[1]) || 0;
            r ? l !== tt && (a = m * y - v * g) && (u = x * (y / a) + O * (-g / a) + (g * E - y * T) / a, h = x * (-v / a) + O * (m / a) - (m * E - v * T) / a, x = u, O = h) : (s = j(t), x = s.x + (~b[0].indexOf("%") ? x / 100 * s.width : x), O = s.y + (~(b[1] || b[0]).indexOf("%") ? O / 100 * s.height : O)), n || !1 !== n && c.smooth ? (T = x - f, E = O - d, c.xOffset = p + (T * m + E * g) - T, c.yOffset = _ + (T * v + E * y) - E) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = O, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[D] = "0px 0px", o && (V(o, c, "xOrigin", f, x), V(o, c, "yOrigin", d, O), V(o, c, "xOffset", p, c.xOffset), V(o, c, "yOffset", _, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + O)
        }, st = function (t, e) {
            var r = t._gsap || new l.g(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, o, s, a, u, h, f, d, v, g, y, T, E, b, x, O, R, A, S, I, w, P, M, N, L, U, B, G, k, X, j, Y = t.style,
                V = r.scaleX < 0, z = F(t, D) || "0";
            return n = i = o = u = h = f = d = v = g = 0, s = a = 1, r.svg = !(!t.getCTM || !H(t)), E = it(t, r.svg), r.svg && (M = (!r.uncache || "0px 0px" === z) && !e && t.getAttribute("data-svg-origin"), ot(t, M || z, !!M || r.originIsAbsolute, !1 !== r.smooth, E)), y = r.xOrigin || 0, T = r.yOrigin || 0, E !== tt && (R = E[0], A = E[1], S = E[2], I = E[3], n = w = E[4], i = P = E[5], 6 === E.length ? (s = Math.sqrt(R * R + A * A), a = Math.sqrt(I * I + S * S), u = R || A ? m(A, R) * p : 0, d = S || I ? m(S, I) * p + u : 0, d && (a *= Math.abs(Math.cos(d * _))), r.svg && (n -= y - (y * R + T * S), i -= T - (y * A + T * I))) : (j = E[6], k = E[7], U = E[8], B = E[9], G = E[10], X = E[11], n = E[12], i = E[13], o = E[14], b = m(j, G), h = b * p, b && (x = Math.cos(-b), O = Math.sin(-b), M = w * x + U * O, N = P * x + B * O, L = j * x + G * O, U = w * -O + U * x, B = P * -O + B * x, G = j * -O + G * x, X = k * -O + X * x, w = M, P = N, j = L), b = m(-S, G), f = b * p, b && (x = Math.cos(-b), O = Math.sin(-b), M = R * x - U * O, N = A * x - B * O, L = S * x - G * O, X = I * O + X * x, R = M, A = N, S = L), b = m(A, R), u = b * p, b && (x = Math.cos(b), O = Math.sin(b), M = R * x + A * O, N = w * x + P * O, A = A * x - R * O, P = P * x - w * O, R = M, w = N), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, f = 180 - f), s = Object(l.O)(Math.sqrt(R * R + A * A + S * S)), a = Object(l.O)(Math.sqrt(P * P + j * j)), b = m(w, P), d = Math.abs(b) > 2e-4 ? b * p : 0, g = X ? 1 / (X < 0 ? -X : X) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !rt(F(t, C)), M && t.setAttribute("transform", M))), Math.abs(d) > 90 && Math.abs(d) < 270 && (V ? (s *= -1, d += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = o + "px", r.scaleX = Object(l.O)(s), r.scaleY = Object(l.O)(a), r.rotation = Object(l.O)(u) + "deg", r.rotationX = Object(l.O)(h) + "deg", r.rotationY = Object(l.O)(f) + "deg", r.skewX = d + "deg", r.skewY = v + "deg", r.transformPerspective = g + "px", (r.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (Y[D] = at(z)), r.xOffset = r.yOffset = 0, r.force3D = l.A.force3D, r.renderTransform = r.svg ? lt : c ? ct : ht, r.uncache = 0, r
        }, at = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, ut = function (t, e, r) {
            var n = Object(l.R)(e);
            return Object(l.O)(parseFloat(e) + parseFloat(W(t, "x", r + "px", n))) + n
        }, ht = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ct(t, e)
        }, ct = function (t, e) {
            var r = e || this, n = r.xPercent, i = r.yPercent, o = r.x, s = r.y, a = r.z, u = r.rotation, h = r.rotationY,
                c = r.rotationX, l = r.skewX, f = r.skewY, d = r.scaleX, p = r.scaleY, m = r.transformPerspective,
                v = r.force3D, g = r.target, y = r.zOrigin, T = "", E = "auto" === v && t && 1 !== t || !0 === v;
            if (y && ("0deg" !== c || "0deg" !== h)) {
                var b, x = parseFloat(h) * _, O = Math.sin(x), R = Math.cos(x);
                x = parseFloat(c) * _, b = Math.cos(x), o = ut(g, o, O * b * -y), s = ut(g, s, -Math.sin(x) * -y), a = ut(g, a, R * b * -y + y)
            }
            "0px" !== m && (T += "perspective(" + m + ") "), (n || i) && (T += "translate(" + n + "%, " + i + "%) "), (E || "0px" !== o || "0px" !== s || "0px" !== a) && (T += "0px" !== a || E ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== u && (T += "rotate(" + u + ") "), "0deg" !== h && (T += "rotateY(" + h + ") "), "0deg" !== c && (T += "rotateX(" + c + ") "), "0deg" === l && "0deg" === f || (T += "skew(" + l + ", " + f + ") "), 1 === d && 1 === p || (T += "scale(" + d + ", " + p + ") "), g.style[C] = T || "translate(0, 0)"
        }, lt = function (t, e) {
            var r, n, i, o, s, a = e || this, u = a.xPercent, h = a.yPercent, c = a.x, f = a.y, d = a.rotation, p = a.skewX,
                m = a.skewY, v = a.scaleX, g = a.scaleY, y = a.target, T = a.xOrigin, E = a.yOrigin, b = a.xOffset,
                x = a.yOffset, O = a.forceCSS, R = parseFloat(c), A = parseFloat(f);
            d = parseFloat(d), p = parseFloat(p), m = parseFloat(m), m && (m = parseFloat(m), p += m, d += m), d || p ? (d *= _, p *= _, r = Math.cos(d) * v, n = Math.sin(d) * v, i = Math.sin(d - p) * -g, o = Math.cos(d - p) * g, p && (m *= _, s = Math.tan(p - m), s = Math.sqrt(1 + s * s), i *= s, o *= s, m && (s = Math.tan(m), s = Math.sqrt(1 + s * s), r *= s, n *= s)), r = Object(l.O)(r), n = Object(l.O)(n), i = Object(l.O)(i), o = Object(l.O)(o)) : (r = v, o = g, n = i = 0), (R && !~(c + "").indexOf("px") || A && !~(f + "").indexOf("px")) && (R = W(y, "x", c, "px"), A = W(y, "y", f, "px")), (T || E || b || x) && (R = Object(l.O)(R + T - (T * r + E * i) + b), A = Object(l.O)(A + E - (T * n + E * o) + x)), (u || h) && (s = y.getBBox(), R = Object(l.O)(R + u / 100 * s.width), A = Object(l.O)(A + h / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + R + "," + A + ")", y.setAttribute("transform", s), O && (y.style[C] = s)
        }, ft = function (t, e, r, n, i, o) {
            var s, a, u = Object(l.F)(i), h = parseFloat(i) * (u && ~i.indexOf("rad") ? p : 1), c = o ? h * o : h - n,
                f = n + c + "deg";
            return u && (s = i.split("_")[1], "short" === s && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === s && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === s && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = a = new l.n(t._pt, e, r, n, c, b), a.e = f, a.u = "deg", t._props.push(r), a
        }, dt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t
        }, pt = function (t, e, r) {
            var n, i, o, s, a, u, h, c, f = dt({}, r._gsap), p = "perspective,force3D,transformOrigin,svgOrigin",
                _ = r.style;
            f.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), _[C] = e, n = st(r, 1), Y(r, C), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[C], _[C] = e, n = st(r, 1), _[C] = o);
            for (i in d) o = f[i], s = n[i], o !== s && p.indexOf(i) < 0 && (h = Object(l.R)(o), c = Object(l.R)(s), a = h !== c ? W(r, i, o, c) : parseFloat(o), u = parseFloat(s), t._pt = new l.n(t._pt, n, i, a, u - a, E), t._pt.u = c || 0, t._props.push(i));
            dt(n, f)
        };
    Object(l.B)("padding,margin,Width,Radius", function (t, e) {
        var r = "Top", n = "Right", i = "Bottom", o = "Left",
            s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (r) {
                return e < 2 ? t + r : "border" + r + t
            });
        Q[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
            var o, a;
            if (arguments.length < 4) return o = s.map(function (e) {
                return q(t, e, r)
            }), a = o.join(" "), 5 === a.split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "), a = {}, s.forEach(function (t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }), t.init(e, a, i)
        }
    });
    var _t = {
        name: "css", register: G, targetTest: function (t) {
            return t.style && t.nodeType
        }, init: function (t, e, r, n, i) {
            var o, a, u, h, c, f, p, _, m, v, g, b, R, A, S, I = this._props, w = t.style, P = r.vars.startAt;
            s || G();
            for (p in e) if ("autoRound" !== p && (a = e[p], !l.K[p] || !Object(l.x)(p, e, r, n, t, i))) if (c = typeof a, f = Q[p], "function" === c && (a = a.call(r, n, t, i), c = typeof a), "string" === c && ~a.indexOf("random(") && (a = Object(l.N)(a)), f) f(this, t, p, a, r) && (S = 1); else if ("--" === p.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(p) + "").trim(), a += "", l.y.lastIndex = 0, l.y.test(o) || (_ = Object(l.R)(o), m = Object(l.R)(a)), m ? _ !== m && (o = W(t, p, o, m) + m) : _ && (a += _), this.add(w, "setProperty", o, a, n, i, 0, 0, p), I.push(p); else if ("undefined" !== c) {
                if (P && p in P ? (o = "function" == typeof P[p] ? P[p].call(r, n, t, i) : P[p], p in l.A.units && !Object(l.R)(o) && (o += l.A.units[p]), Object(l.F)(o) && ~o.indexOf("random(") && (o = Object(l.N)(o)), "=" === (o + "").charAt(1) && (o = q(t, p))) : o = q(t, p), h = parseFloat(o), v = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0, v && (a = a.substr(2)), u = parseFloat(a), p in T && ("autoAlpha" === p && (1 === h && "hidden" === q(t, "visibility") && u && (h = 0), V(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== p && "transform" !== p && (p = T[p], ~p.indexOf(",") && (p = p.split(",")[0]))), g = p in d) if (b || (R = t._gsap, R.renderTransform && !e.parseTransform || st(t, e.parseTransform), A = !1 !== e.smoothOrigin && R.smooth, b = this._pt = new l.n(this._pt, w, C, 0, 1, R.renderTransform, R, 0, -1), b.dep = 1), "scale" === p) this._pt = new l.n(this._pt, R, "scaleY", R.scaleY, (v ? v * u : u - R.scaleY) || 0), I.push("scaleY", p), p += "X"; else {
                    if ("transformOrigin" === p) {
                        a = J(a), R.svg ? ot(t, a, 0, A, 0, this) : (m = parseFloat(a.split(" ")[2]) || 0, m !== R.zOrigin && V(this, R, "zOrigin", R.zOrigin, m), V(this, w, p, at(o), at(a)));
                        continue
                    }
                    if ("svgOrigin" === p) {
                        ot(t, a, 1, A, 0, this);
                        continue
                    }
                    if (p in et) {
                        ft(this, R, p, h, a, v);
                        continue
                    }
                    if ("smoothOrigin" === p) {
                        V(this, R, "smooth", R.smooth, a);
                        continue
                    }
                    if ("force3D" === p) {
                        R[p] = a;
                        continue
                    }
                    if ("transform" === p) {
                        pt(this, a, t);
                        continue
                    }
                } else p in w || (p = B(p) || p);
                if (g || (u || 0 === u) && (h || 0 === h) && !y.test(a) && p in w) _ = (o + "").substr((h + "").length), u || (u = 0), m = Object(l.R)(a) || (p in l.A.units ? l.A.units[p] : _), _ !== m && (h = W(t, p, o, m)), this._pt = new l.n(this._pt, g ? R : w, p, h, v ? v * u : u - h, g || "px" !== m && "zIndex" !== p || !1 === e.autoRound ? E : O), this._pt.u = m || 0, _ !== m && "%" !== m && (this._pt.b = o, this._pt.r = x); else if (p in w) Z.call(this, t, p, o, a); else {
                    if (!(p in t)) {
                        Object(l.H)(p, a);
                        continue
                    }
                    this.add(t, p, o || t[p], a, n, i)
                }
                I.push(p)
            }
            S && Object(l.P)(this)
        }, get: q, aliases: T, getSetter: function (t, e, r) {
            var n = T[e];
            return n && n.indexOf(",") < 0 && (e = n), e in d && e !== D && (t._gsap.x || q(t, "x")) ? r && h === r ? "scale" === e ? P : w : (h = r || {}) && ("scale" === e ? M : N) : t.style && !Object(l.G)(t.style[e]) ? S : ~e.indexOf("-") ? I : Object(l.E)(t, e)
        }, core: {_removeProperty: Y, _getMatrix: it}
    };
    l.S.utils.checkPrefix = B, function (t, e, r, n) {
        var i = Object(l.B)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
            d[t] = 1
        });
        Object(l.B)(e, function (t) {
            l.A.units[t] = "deg", et[t] = 1
        }), T[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e, Object(l.B)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
            var e = t.split(":");
            T[e[1]] = i[e[0]]
        })
    }(0, "rotation,rotationX,rotationY,skewX,skewY"), Object(l.B)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        l.A.units[t] = "px"
    }), l.S.registerPlugin(_t)
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = [{
        date: "2021/10/21",
        mainId: 7,
        menu: ["颈动脉", "下肢动脉", "栓塞"],
        header: r(76),
        list: [{maxh: 1716, item: [r(77), r(78), r(79)]}, {maxh: 1716, item: [r(80), r(81), r(82)]}, {
            maxh: 1716,
            item: [r(83), r(84), r(85)]
        }]
    }, {
        date: "2021/10/21",
        mainId: 2,
        menu: ["静脉", "下肢动脉", "栓塞"],
        header: r(86),
        list: [{maxh: 1716, item: [r(87), r(88), r(89)]}, {maxh: 1568, item: [r(90), r(91), r(92)]}, {
            maxh: 1568,
            item: [r(93), r(94), r(95)]
        }]
    }, {
        date: "2021/10/16 24:00:00",
        mainId: 6,
        menurow: 2,
        menu: ["栓塞新探索", "髂静脉的腔内重建", "E+载药支架实战派", "深静脉血栓管理"],
        header: r(17),
        list: [{maxh: 2286, item: [r(96), r(97), r(98), r(99)]}, {
            maxh: 2993,
            item: [r(100), r(101), r(102)]
        }, {maxh: 2629, item: [r(103), r(104), r(105)]}, {maxh: 2629, item: [r(106), r(107), r(108)]}]
    }, {
        date: "2021/10/21",
        mainId: 0,
        menurow: 1,
        menu: [],
        header: r(109),
        list: [{maxh: 2286, item: [r(110), r(111), r(112)]}]
    }, {
        date: "2021/10/21",
        mainId: 0,
        menurowlater: 2,
        menurow: 1,
        liveurl: "http://xgzx.talkmed.com/vascularNews/meeting/live?meeting_id=235",
        menu: ["进入直播频道"],
        menulater: ["颈动脉", "静脉", "栓塞", "下肢动脉"],
        header: r(113),
        list: [{item: [r(114), r(115), r(116)]}],
        listlater: [{item: [r(117)]}, {item: [r(118), r(119)]}, {item: [r(120), r(121)]}, {item: [r(122), r(123)]}]
    }];
    e.IMG_DATA = n
}, function (t, e, r) {
    t.exports = r.p + "img/p7_01.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_t0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_02.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_03.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_t1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_12.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_13.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_t2.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_22.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p7_23.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_01.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_t0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_02.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_03.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_t1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_12.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_13.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_t2.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_22.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p2_23.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_t0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_02.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_03.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_04.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_t1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_12.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_13.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_t2.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_22.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_23.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_t3.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_32.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p6_33.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p0_01.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p0_t0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p0_02.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p0_03.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_01.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_02.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_03.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t20.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t21.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t30.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t31.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t40.png"
}, function (t, e, r) {
    t.exports = r.p + "img/p3_t41.png"
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i() {
            for (var e = t(".dotitem"), r = 0; r < e.length; r++) {
                var n = t(".dotitem").eq(r), i = Math.random() + .8;
                n.css({"animation-duration": i + "s"})
            }
            t("#o2_loading").removeClass("hide")
        }

        function o() {
            var e = [r(125), r(126), r(127), r(128), r(129), r(130), r(131), r(132), r(133), r(134), r(135), r(136), r(137), r(138), r(139)],
                n = new a.Loader;
            n.add("home", "img/home.json").add("bg", r(140)).add(e), n.load(function (t, e) {
                l.default.imgList = new a.Sprite(e.bg.texture)
            }), n.onProgress.add(function (e) {
                var r = Math.floor(e.progress);
                t(".precent").html(r + "%")
            }), n.onComplete.add(function (e) {
                t("#o2_loading").remove(), t("#o2_main").removeClass("hide"), h.default.change("home")
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = r(9), a = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }(s), u = r(12), h = n(u), c = r(7), l = n(c), f = {};
        f.init = function () {
            i(), o()
        }, e.default = f
    }).call(e, r(6))
}, function (t, e, r) {
    t.exports = r.p + "img/game_bg.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/game_rank_box.png"
}, function (t, e, r) {
    t.exports = r.p + "img/tipcount.png"
}, function (t, e, r) {
    t.exports = r.p + "img/backbtn.png"
}, function (t, e, r) {
    t.exports = r.p + "img/gameend.png"
}, function (t, e, r) {
    t.exports = r.p + "img/msg.png"
}, function (t, e, r) {
    t.exports = r.p + "img/gamerule.png"
}, function (t, e, r) {
    t.exports = r.p + "img/game_p0_f0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/game_p0_f1.png"
}, function (t, e, r) {
    t.exports = r.p + "img/game_rank.png"
}, function (t, e, r) {
    t.exports = r.p + "img/game_start_btn.png"
}, function (t, e, r) {
    t.exports = r.p + "img/logo.png"
}, function (t, e, r) {
    t.exports = r.p + "img/game_p0_iconb.png"
}, function (t, e, r) {
    t.exports = r.p + "img/eluvia.jpg"
}, function (t, e, r) {
    t.exports = r.p + "img/eluvaf0.png"
}, function (t, e, r) {
    t.exports = r.p + "img/bg0.jpg"
}, function (t, e, r) {
    "use strict";
    (function (t) {
        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i() {
            T = t("#gamestart"), E = t("#gamerule"), b = t("#msg"), x = t("#end"), O = t("#gamerank")
        }

        function o(t) {
            switch (t) {
                case"start":
                    T.removeClass("hide");
                    break;
                case"msg":
                    b.removeClass("hide");
                    break;
                case"rule":
                    break;
                case"game":
                    m.default.init(u);
                    break;
                case"end":
                    x.removeClass("hide");
                    break;
                case"rank":
                    O.removeClass("hide"), v.Rank.init()
            }
        }

        function s() {
            t(".start").on("click", function (e) {
                d.default.userInfo.count > 0 ? (T.addClass("hide"), E.removeClass("hide")) : t("#gametippop").removeClass("hide")
            }), t(".rankbtn").on("click", function (t) {
                T.addClass("hide"), o("rank")
            }), t(".ruleclose").on("click", function (t) {
                E.addClass("hide"), o("" == d.default.userInfo.username || null == d.default.userInfo.username ? "msg" : "game")
            }), t(".msgclose").on("click", function (t) {
                b.addClass("hide"), T.removeClass("hide")
            }), t(".endrank").on("click", function (t) {
                x.addClass("hide"), o("rank")
            }), t(".endclose").on("click", function (t) {
                x.addClass("hide"), T.removeClass("hide")
            }), t(".backbtn").on("click", function (t) {
                h()
            }), t(".sendbtn").on("click", function (t) {
                g.Request.setMsg(a)
            }), t(".reset").on("click", function (e) {
                0 == d.default.userInfo.count ? t("#gametippop").removeClass("hide") : (x.addClass("hide"), m.default.reset())
            }), t(".rankclose").on("click", function (t) {
                O.addClass("hide"), T.removeClass("hide")
            }), t(".tipclose").on("click", function (e) {
                t("#gametippop").addClass("hide")
            }), t(".nametxt").on("change input propertychange", function () {
                t(".nametxt").val()
            })
        }

        function a() {
            b.addClass("hide"), o("game")
        }

        function u(e) {
            t(".score").html(e + "分"), o("end"), g.Request.setScore(e);
            var r = d.default.userInfo.count = d.default.userInfo.count - 1;
            t(".cur").html("今日剩余" + r + "次")
        }

        function h() {
            p.Music.play(), t("#home").removeClass("gamebg"), T.addClass("hide"), l.default.change("home")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var c = r(12), l = n(c), f = r(7), d = n(f), p = r(13), _ = r(142), m = n(_), v = r(144), g = r(35), y = {},
            T = void 0, E = void 0, b = void 0, x = void 0, O = void 0, R = !1;
        y.init = function () {
            R || (i(), s()), m.default.loadermp3(), R = !0, o("start"), t("#home").addClass("gamebg"), g.Request.getUserInfo()
        }, y.onResize = function () {
            m.default.onResize()
        }, e.default = y
    }).call(e, r(6))
}, function (t, e, r) {
    "use strict";

    function n() {
        (new d.Loader).add("logoicon", "img/logoicon.json").add("note", r(143)).load(function (t) {
        }).onComplete.add(function (t) {
        })
    }

    function i() {
        C.onResize();
        for (var t = 0; t < b; t++) N.push(t);
        N.sort(), g.ticker.add(function () {
            if (!w) {
                I += .005;
                for (var t = 0; t < x.length; t++) for (var e = 0; e < x[t].length; e++) {
                    var r = x[t][e];
                    r.y += I
                }
                a()
            }
        })
    }

    function o() {
        T = new d.Container, y.addChild(T), S = A.full.height / A.scaleW;
        for (var t = 0; t < b; t++) {
            x[t] = [];
            for (var e = Math.min(3, Math.floor(4 * Math.random())), r = 0; r < 4; r++) {
                var n;
                if (e == r) {
                    n = new d.Container, n.num = t;
                    var i = l("logo" + N[t] + ".png");
                    n.addChild(i);
                    var o = l("note");
                    n.addChild(o), n.id = R[O], O++
                } else {
                    var n = new d.Graphics;
                    n.id = 0, n.beginFill(16711680, 1), n.alpha = 0, n.drawRect(0, 0, E.width, E.height), T.addChild(n)
                }
                n.x = r * E.width, n.y = -t * E.height + S - 2 * E.height, x[t].push(n), T.addChild(n)
            }
        }
        s(), setTimeout(function () {
            h()
        }, 1e3)
    }

    function s() {
        for (var t = 0; t < x.length; t++) for (var e = .02 * t, r = 0; r < x[t].length; r++) {
            var n = x[t][r];
            n.id > 0 && m.TweenMax.fromTo(n, 1, {y: n.y - 1e3, alpha: 0}, {
                delay: e,
                alpha: 1,
                y: n.y,
                ease: m.Expo.easeOut
            })
        }
    }

    function a() {
        if (x[0][0].y > A.full.height + E.height) {
            for (var t = 0; t < 4; t++) if (x[0][t].id > 0) return void c();
            var e = x.shift();
            e.sort(function () {
                return .5 - Math.random()
            }), x.push(e), u()
        }
    }

    function u() {
        for (var t = 0; t < 4; t++) {
            var e = x[x.length - 1][t];
            e.x = t * E.width, e.y = x[x.length - 2][0].y - E.height, e.id < 0 && (e.children[1].alpha = 1, M += 1, e.num = M, e.id = R[O])
        }
        ++O > R.length - 1 && (O = 0)
    }

    function h() {
        for (var t = 0; t < x.length; t++) for (var e = 0; e < x[t].length; e++) {
            var r = x[t][e];
            r.interactive = !0, r.on("pointerdown", function (t) {
                console.log('pointerdown => ', pointerdown)
                var e = t.currentTarget.id;
                0 != e ? t.currentTarget.num == P && (t.currentTarget.id = -1, t.currentTarget.children[1].alpha = 0, createjs.Sound.play("sound_" + e), P++, w = !1) : (0 == e && (t.currentTarget.alpha = 1), c())
            })
        }
    }

    function c() {
        w = !0, y.removeChild(T), createjs.Sound.play("sound_1"), L(P)
    }

    function l(t) {
        return new d.Sprite(d.Texture.from(t))
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var f = r(9), d = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }(f), p = r(7), _ = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(p), m = r(31), v = r(13), g = void 0, y = void 0, T = void 0, E = {width: 188, height: 236}, b = 22, x = [],
        O = 0, R = [], A = void 0, S = 800, I = 5, w = !0, P = 0, M = b - 1, N = [], C = {},
        D = [[25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23, 24, 23, 22, 21, 17, 21, 22, 23, 21, 22, 25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23, 24, 23, 22, 21, 22, 23, 22, 21, 17, 21], [23, 22, 21, 17, 16, 15, 16, 17, 21, 17, 16, 15, 14, 13, 14, 12, 21, 17, 21, 11, 7, 15, 12, 13, 11, 21, 17, 16, 17, 23, 25, 26, 24, 23, 22, 24, 24, 23, 21, 17, 16, 15, 14, 13, 12, 14, 13, 12, 11, 12, 13, 14, 15, 12, 15, 14, 13, 16, 15, 14, 15, 14, 13, 12, 11, 6, 16, 17, 21, 17, 16, 15, 14, 13, 12, 16, 15, 16, 15, 14, 13, 23, 22, 21, 22, 21, 23, 22, 24, 25, 23, 24, 25, 23, 24, 25, 15, 16, 17, 21, 22, 23, 24, 23, 21, 22, 23, 13, 14, 15, 16, 15, 14, 15, 13, 14, 15, 14, 16, 15, 14, 13, 12, 13, 12, 11, 12, 13, 14, 15, 16, 14, 16, 15, 16, 17, 21, 15, 16, 17, 21, 22, 23, 24, 25, 23, 21, 22, 23, 22, 21, 22, 17, 21, 22, 23, 22, 21, 17, 21, 16, 17, 21, 11, 12, 13, 14, 13, 12, 13, 21, 17, 21, 16, 21, 17, 16, 15, 14, 15, 14, 13, 14, 15, 16, 17, 11, 16, 21, 17, 21, 17, 16, 17, 21, 22, 21, 17, 21, 16, 17, 23, 13, 14, 13, 12, 22, 23, 22, 21, 13, 11, 16, 15, 5, 4, 5, 6, 16, 17, 16, 17, 5, 4, 5, 6, 16, 15, 16, 17, 17, 16, 17, 11, 21, 22, 21, 17, 7, 11, 7, 6, 16, 15, 16, 17, 7, 13, 12, 11, 21, 22, 24, 23, 13, 15, 23, 21, 24, 23, 24, 22, 15, 14, 15, 13, 21, 17, 21, 13, 15, 15, 16, 17, 15, 13, 21, 22, 23, 21, 23, 23, 22, 21, 17, 16, 16, 15, 16, 17, 21, 23, 22, 21, 23]],
        L = void 0, F = !1;
    C.init = function (t) {
        if (F) return void this.reset();
        F = !0, L = t, g = _.default.app, y = new d.Container, g.stage.addChild(y), R = D[0], i(), o(), v.Music.pause()
    }, C.loadermp3 = function () {
        var t = new createjs.LoadQueue(!0);
        t.installPlugin(createjs.Sound);
        for (var e = [{
            id: "sound_1",
            src: "mp3/sound_1.mp3"
        }], r = [4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 26, 31], i = 4; i < r.length; i++) {
            var o = r[i], s = {id: "sound_" + o, src: "mp3/sound_" + o + ".mp3"};
            e.push(s)
        }
        t.on("complete", function () {
            n()
        }), t.loadManifest(e)
    }, C.reset = function () {
        x = [], O = 0, I = 5, P = 0, M = b - 1, o()
    }, C.onResize = function () {
        A = _.default.transfrom
    }, e.default = C
}, function (t, e, r) {
    t.exports = r.p + "img/note.png"
}, function (t, e, r) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.Rank = void 0;
        var n = r(35), i = {
            init: function () {
                n.Request.getRankList(this.show)
            }, show: function (e) {
                var r = e.data.total, n = e.data.info;
                t(".rank-scroll .rank-item").remove();
                for (var i = "", o = 0; o < r.length; o++) {
                    var s = r[o];
                    i += '<div class="rank-item">\n            <div class="count">' + (o + 1) + '</div>\n            <div class="nick">' + s.username + '</div>\n            <div class="rankscore">' + s.total + "</div>\n          </div>"
                }
                t(".rank-scroll").append(i), void 0 != n && (t(".rankuser .count").html(n.ranking), t(".rankuser .nick").html(n.username), t(".rankuser .rankscore").html(n.total))
            }
        };
        e.Rank = i
    }).call(e, r(6))
}]);
