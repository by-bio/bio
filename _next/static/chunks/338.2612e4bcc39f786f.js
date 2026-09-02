"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[338], {
		176: e => {
			var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
				n = /\n/g,
				r = /^\s*/,
				a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
				i = /^:\s*/,
				s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
				o = /^[;\s]*/,
				c = /^\s+|\s+$/g;

			function l(e) {
				return e ? e.replace(c, "") : ""
			}
			e.exports = function(e, c) {
				if ("string" != typeof e) throw TypeError("First argument must be a string");
				if (!e) return [];
				c = c || {};
				var u = 1,
					h = 1;

				function p(e) {
					var t = e.match(n);
					t && (u += t.length);
					var r = e.lastIndexOf("\n");
					h = ~r ? e.length - r : h + e.length
				}

				function d() {
					var e = {
						line: u,
						column: h
					};
					return function(t) {
						return t.position = new f(e), E(r), t
					}
				}

				function f(e) {
					this.start = e, this.end = {
						line: u,
						column: h
					}, this.source = c.source
				}

				function m(t) {
					var n = Error(c.source + ":" + u + ":" + h + ": " + t);
					if (n.reason = t, n.filename = c.source, n.line = u, n.column = h, n.source = e, c.silent);
					else throw n
				}

				function E(t) {
					var n = t.exec(e);
					if (n) {
						var r = n[0];
						return p(r), e = e.slice(r.length), n
					}
				}

				function T(e) {
					var t;
					for (e = e || []; t = g();) !1 !== t && e.push(t);
					return e
				}

				function g() {
					var t = d();
					if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
						for (var n = 2;
							"" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
						if (n += 2, "" === e.charAt(n - 1)) return m("End of comment missing");
						var r = e.slice(2, n - 2);
						return h += 2, p(r), e = e.slice(n), h += 2, t({
							type: "comment",
							comment: r
						})
					}
				}
				f.prototype.content = e, E(r);
				var A, _ = [];
				for (T(_); A = function() {
						var e = d(),
							n = E(a);
						if (n) {
							if (g(), !E(i)) return m("property missing ':'");
							var r = E(s),
								c = e({
									type: "declaration",
									property: l(n[0].replace(t, "")),
									value: r ? l(r[0].replace(t, "")) : ""
								});
							return E(o), c
						}
					}();) !1 !== A && (_.push(A), T(_));
				return _
			}
		},
		231: function(e, t, n) {
			var r = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, t) {
				var n = null;
				if (!e || "string" != typeof e) return n;
				var r = (0, a.default)(e),
					i = "function" == typeof t;
				return r.forEach(e => {
					if ("declaration" === e.type) {
						var {
							property: r,
							value: a
						} = e;
						i ? t(r, a, e) : a && ((n = n || {})[r] = a)
					}
				}), n
			};
			var a = r(n(176))
		},
		269: (e, t, n) => {
			n.d(t, {
				BM: () => o,
				CW: () => r,
				Ee: () => h,
				HP: () => u,
				JQ: () => s,
				Ny: () => f,
				On: () => p,
				cx: () => i,
				es: () => d,
				lV: () => a,
				ok: () => c,
				ol: () => l
			});
			var r = m(/[A-Za-z]/),
				a = m(/[\dA-Za-z]/),
				i = m(/[#-'*+\--9=?A-Z^-~]/);

			function s(e) {
				return null !== e && (e < 32 || 127 === e)
			}
			var o = m(/\d/),
				c = m(/[\dA-Fa-f]/),
				l = m(/[!-/:-@[-`{-~]/);

			function u(e) {
				return null !== e && e < -2
			}

			function h(e) {
				return null !== e && (e < 0 || 32 === e)
			}

			function p(e) {
				return -2 === e || -1 === e || 32 === e
			}
			var d = m(/\p{P}|\p{S}/u),
				f = m(/\s/);

			function m(e) {
				return function(t) {
					return null !== t && t > -1 && e.test(String.fromCharCode(t))
				}
			}
		},
		457: (e, t, n) => {
			n.d(t, {
				d: () => a
			});
			var r = {};

			function a(e, t) {
				var n = t || r;
				return i(e, "boolean" != typeof n.includeImageAlt || n.includeImageAlt, "boolean" != typeof n.includeHtml || n.includeHtml)
			}

			function i(e, t, n) {
				var r;
				if ((r = e) && "object" == typeof r) {
					if ("value" in e) return "html" !== e.type || n ? e.value : "";
					if (t && "alt" in e && e.alt) return e.alt;
					if ("children" in e) return s(e.children, t, n)
				}
				return Array.isArray(e) ? s(e, t, n) : ""
			}

			function s(e, t, n) {
				for (var r = [], a = -1; ++a < e.length;) r[a] = i(e[a], t, n);
				return r.join("")
			}
		},
		975: (e, t, n) => {
			n.d(t, {
				G1: () => s,
				PW: () => a,
				Y: () => r
			});
			var r = i("end"),
				a = i("start");

			function i(e) {
				return function(t) {
					var n = t && t.position && t.position[e] || {};
					if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
						line: n.line,
						column: n.column,
						offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
					}
				}
			}

			function s(e) {
				var t = a(e),
					n = r(e);
				if (t && n) return {
					start: t,
					end: n
				}
			}
		},
		1257: (e, t, n) => {
			n.r(t), n.d(t, {
				boolean: () => a,
				booleanish: () => i,
				commaOrSpaceSeparated: () => u,
				commaSeparated: () => l,
				number: () => o,
				overloadedBoolean: () => s,
				spaceSeparated: () => c
			});
			var r = 0,
				a = h(),
				i = h(),
				s = h(),
				o = h(),
				c = h(),
				l = h(),
				u = h();

			function h() {
				return 2 ** ++r
			}
		},
		1524: (e, t, n) => {
			n.d(t, {
				Ay: () => h
			});
			var r = "object" == typeof self ? self : globalThis,
				a = (e, t) => {
					switch (e) {
						case "Function":
						case "SharedWorker":
						case "Worker":
						case "eval":
						case "setInterval":
						case "setTimeout":
							throw TypeError("unable to deserialize " + e)
					}
					return new r[e](t)
				},
				i = e => {
					var t, n, r;
					return (t = new Map, n = (e, n) => (t.set(n, e), e), r = i => {
						if (t.has(i)) return t.get(i);
						var [s, o] = e[i];
						switch (s) {
							case 0:
							case -1:
								return n(o, i);
							case 1:
								var c = n([], i);
								for (var l of o) c.push(r(l));
								return c;
							case 2:
								var u = n({}, i);
								for (var [h, p] of o) u[r(h)] = r(p);
								return u;
							case 3:
								return n(new Date(o), i);
							case 4:
								var {
									source: d, flags: f
								} = o;
								return n(new RegExp(d, f), i);
							case 5:
								var m = n(new Map, i);
								for (var [E, T] of o) m.set(r(E), r(T));
								return m;
							case 6:
								var g = n(new Set, i);
								for (var A of o) g.add(r(A));
								return g;
							case 7:
								var {
									name: _, message: S
								} = o;
								return n(a(_, S), i);
							case 8:
								return n(BigInt(o), i);
							case "BigInt":
								return n(Object(BigInt(o)), i);
							case "ArrayBuffer":
								return n(new Uint8Array(o).buffer, o);
							case "DataView":
								var {
									buffer: O
								} = new Uint8Array(o);
								return n(new DataView(O), o)
						}
						return n(a(s, o), i)
					})(0)
				},
				{
					toString: s
				} = {},
				{
					keys: o
				} = Object,
				c = e => {
					var t = typeof e;
					if ("object" !== t || !e) return [0, t];
					var n = s.call(e).slice(8, -1);
					switch (n) {
						case "Array":
							return [1, ""];
						case "Object":
							return [2, ""];
						case "Date":
							return [3, ""];
						case "RegExp":
							return [4, ""];
						case "Map":
							return [5, ""];
						case "Set":
							return [6, ""];
						case "DataView":
							return [1, n]
					}
					return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n]
				},
				l = e => {
					var [t, n] = e;
					return 0 === t && ("function" === n || "symbol" === n)
				},
				u = function(e) {
					var t, n, r, a, i, {
							json: s,
							lossy: u
						} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						h = [];
					return (t = !(s || u), n = !!s, r = new Map, a = (e, t) => {
						var n = h.push(e) - 1;
						return r.set(t, n), n
					}, i = e => {
						if (r.has(e)) return r.get(e);
						var [s, u] = c(e);
						switch (s) {
							case 0:
								var h = e;
								switch (u) {
									case "bigint":
										s = 8, h = e.toString();
										break;
									case "function":
									case "symbol":
										if (t) throw TypeError("unable to serialize " + u);
										h = null;
										break;
									case "undefined":
										return a([-1], e)
								}
								return a([s, h], e);
							case 1:
								if (u) {
									var p = e;
									return "DataView" === u ? p = new Uint8Array(e.buffer) : "ArrayBuffer" === u && (p = new Uint8Array(e)), a([u, [...p]], e)
								}
								var d = [],
									f = a([s, d], e);
								for (var m of e) d.push(i(m));
								return f;
							case 2:
								if (u) switch (u) {
									case "BigInt":
										return a([u, e.toString()], e);
									case "Boolean":
									case "Number":
									case "String":
										return a([u, e.valueOf()], e)
								}
								if (n && "toJSON" in e) return i(e.toJSON());
								var E = [],
									T = a([s, E], e);
								for (var g of o(e))(t || !l(c(e[g]))) && E.push([i(g), i(e[g])]);
								return T;
							case 3:
								return a([s, isNaN(e.getTime()) ? "" : e.toISOString()], e);
							case 4:
								var {
									source: A, flags: _
								} = e;
								return a([s, {
									source: A,
									flags: _
								}], e);
							case 5:
								var S = [],
									O = a([s, S], e);
								for (var [I, N] of e)(t || !(l(c(I)) || l(c(N)))) && S.push([i(I), i(N)]);
								return O;
							case 6:
								var k = [],
									b = a([s, k], e);
								for (var C of e)(t || !l(c(C))) && k.push(i(C));
								return b
						}
						var {
							message: v
						} = e;
						return a([s, {
							name: u,
							message: v
						}], e)
					})(e), h
				};
			let h = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? i(u(e, t)) : structuredClone(e) : (e, t) => i(u(e, t))
		},
		1871: (e, t, n) => {
			n.d(t, {
				I: () => l
			});
			var r = n(8636),
				a = n(5244),
				i = n(4626),
				s = /[A-Z]/g,
				o = /-[a-z]/g,
				c = /^data[-\w.:]+$/i;

			function l(e, t) {
				var n = (0, i.S)(t),
					l = t,
					p = a.R;
				if (n in e.normal) return e.property[e.normal[n]];
				if (n.length > 4 && "data" === n.slice(0, 4) && c.test(t)) {
					if ("-" === t.charAt(4)) {
						var d = t.slice(5).replace(o, h);
						l = "data" + d.charAt(0).toUpperCase() + d.slice(1)
					} else {
						var f = t.slice(4);
						if (!o.test(f)) {
							var m = f.replace(s, u);
							"-" !== m.charAt(0) && (m = "-" + m), t = "data" + m
						}
					}
					p = r.E
				}
				return new p(l, t)
			}

			function u(e) {
				return "-" + e.toLowerCase()
			}

			function h(e) {
				return e.charAt(1).toUpperCase()
			}
		},
		2136: (e, t, n) => {
			n.d(t, {
				B: () => i
			});
			var r = n(7666),
				a = n(269),
				i = {
					partial: !0,
					tokenize: function(e, t, n) {
						return function(t) {
							return (0, a.On)(t) ? (0, r.N)(e, i, "linePrefix")(t) : i(t)
						};

						function i(e) {
							return null === e || (0, a.HP)(e) ? t(e) : n(e)
						}
					}
				}
		},
		2565: (e, t, n) => {
			function r(e) {
				for (var t = [], n = String(e || ""), r = n.indexOf(","), a = 0, i = !1; !i;) {
					-1 === r && (r = n.length, i = !0);
					var s = n.slice(a, r).trim();
					(s || !i) && t.push(s), a = r + 1, r = n.indexOf(",", a)
				}
				return t
			}

			function a(e, t) {
				var n = t || {};
				return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
			}
			n.d(t, {
				A: () => a,
				q: () => r
			})
		},
		3326: (e, t, n) => {
			function r(e) {
				var t = String(e || "").trim();
				return t ? t.split(/[ \t\n\r\f]+/g) : []
			}

			function a(e) {
				return e.join(" ").trim()
			}
			n.d(t, {
				A: () => a,
				q: () => r
			})
		},
		3679: function(e, t, n) {
			var r = (this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				})(n(231)),
				a = n(9715);

			function i(e, t) {
				var n = {};
				return e && "string" == typeof e && (0, r.default)(e, function(e, r) {
					e && r && (n[(0, a.camelCase)(e, t)] = r)
				}), n
			}
			i.default = i, e.exports = i
		},
		3925: (e, t, n) => {
			n.d(t, {
				YR: () => a
			});
			var r = n(7978);

			function a(e, t, n, a) {
				var i, s, o;
				"function" == typeof t && "function" != typeof n ? (s = void 0, o = t, i = n) : (s = t, o = n, i = a), (0, r.VG)(e, s, function(e, t) {
					var n = t[t.length - 1],
						r = n ? n.children.indexOf(e) : void 0;
					return o(e, r, n)
				}, i)
			}
		},
		4626: (e, t, n) => {
			n.d(t, {
				S: () => r
			});

			function r(e) {
				return e.toLowerCase()
			}
		},
		4896: (e, t, n) => {
			n.d(t, {
				A: () => ns
			});
			var r, a, i, s, o, c, l, u, h, p, d, f, m, E, T, g, A, _, S, O, I, N, k, b, C, v, D, y, R, L, P = n(1106),
				M = n(1524),
				x = n(8472),
				w = n(7774),
				B = n(2565),
				F = /[#.]/g,
				H = n(1871),
				U = n(4626),
				G = n(3326);

			function j(e, t, n) {
				var r = n ? function(e) {
					var t = new Map;
					for (var n of e) t.set(n.toLowerCase(), n);
					return t
				}(n) : void 0;
				return function(n, a) {
					for (var i, s = arguments.length, o = Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) o[c - 2] = arguments[c];
					if (null == n) i = {
						type: "root",
						children: []
					}, o.unshift(a);
					else {
						var l = (i = function(e, t) {
								for (var n, r, a = e || "", i = {}, s = 0; s < a.length;) {
									F.lastIndex = s;
									var o = F.exec(a),
										c = a.slice(s, o ? o.index : a.length);
									c && (n ? "#" === n ? i.id = c : Array.isArray(i.className) ? i.className.push(c) : i.className = [c] : r = c, s += c.length), o && (n = o[0], s++)
								}
								return {
									type: "element",
									tagName: r || t || "div",
									properties: i,
									children: []
								}
							}(n, t)).tagName.toLowerCase(),
							u = r ? r.get(l) : void 0;
						if (i.tagName = u || l, function(e) {
								if (null === e || "object" != typeof e || Array.isArray(e)) return !0;
								if ("string" != typeof e.type) return !1;
								for (var t of Object.keys(e)) {
									var n = e[t];
									if (n && "object" == typeof n) {
										if (!Array.isArray(n)) return !0;
										for (var r of n)
											if ("number" != typeof r && "string" != typeof r) return !0
									}
								}
								return !!("children" in e && Array.isArray(e.children))
							}(a)) o.unshift(a);
						else
							for (var [h, p] of Object.entries(a)) ! function(e, t, n, r) {
								var a, i = (0, H.I)(e, n);
								if (null != r) {
									if ("number" == typeof r) {
										if (Number.isNaN(r)) return;
										a = r
									} else a = "boolean" == typeof r ? r : "string" == typeof r ? i.spaceSeparated ? (0, G.q)(r) : i.commaSeparated ? (0, B.q)(r) : i.commaOrSpaceSeparated ? (0, G.q)((0, B.q)(r).join(" ")) : Y(i, i.property, r) : Array.isArray(r) ? [...r] : "style" === i.property ? function(e) {
										var t = [];
										for (var [n, r] of Object.entries(e)) t.push([n, r].join(": "));
										return t.join("; ")
									}(r) : String(r);
									if (Array.isArray(a)) {
										var s = [];
										for (var o of a) s.push(Y(i, i.property, o));
										a = s
									}
									"className" === i.property && Array.isArray(t.className) && (a = t.className.concat(a)), t[i.property] = a
								}
							}(e, i.properties, h, p)
					}
					for (var d of o) ! function e(t, n) {
						if (null == n);
						else if ("number" == typeof n || "string" == typeof n) t.push({
							type: "text",
							value: String(n)
						});
						else if (Array.isArray(n))
							for (var r of n) e(t, r);
						else if ("object" == typeof n && "type" in n) "root" === n.type ? e(t, n.children) : t.push(n);
						else throw Error("Expected node, nodes, or string, got `" + n + "`")
					}(i.children, d);
					return "element" === i.type && "template" === i.tagName && (i.content = {
						type: "root",
						children: i.children
					}, i.children = []), i
				}
			}

			function Y(e, t, n) {
				if ("string" == typeof n) {
					if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
					if ((e.boolean || e.overloadedBoolean) && ("" === n || (0, U.S)(n) === (0, U.S)(t))) return !0
				}
				return n
			}
			var z = j(w.qy, "div"),
				W = j(w.JW, "g", ["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "solidColor", "textArea", "textPath"]);

			function q(e, t) {
				var n = e.indexOf("\r", t),
					r = e.indexOf("\n", t);
				return -1 === r ? n : -1 === n || n + 1 === r ? r : n < r ? n : r
			}
			var V = {
					html: "http://www.w3.org/1999/xhtml",
					mathml: "http://www.w3.org/1998/Math/MathML",
					svg: "http://www.w3.org/2000/svg",
					xlink: "http://www.w3.org/1999/xlink",
					xml: "http://www.w3.org/XML/1998/namespace",
					xmlns: "http://www.w3.org/2000/xmlns/"
				},
				Q = {}.hasOwnProperty,
				K = Object.prototype;

			function X(e, t) {
				var n;
				switch (t.nodeName) {
					case "#comment":
						return n = {
							type: "comment",
							value: t.data
						}, Z(e, t, n), n;
					case "#document":
					case "#document-fragment":
						var r = "mode" in t && ("quirks" === t.mode || "limited-quirks" === t.mode);
						if (n = {
								type: "root",
								children: J(e, t.childNodes),
								data: {
									quirksMode: r
								}
							}, e.file && e.location) {
							var a, i, s = String(e.file),
								o = (a = String(s), i = [], {
									toOffset: function(e) {
										if (e && "number" == typeof e.line && "number" == typeof e.column && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
											for (; i.length < e.line;) {
												var t = i[i.length - 1],
													n = q(a, t),
													r = -1 === n ? a.length + 1 : n + 1;
												if (t === r) break;
												i.push(r)
											}
											var s = (e.line > 1 ? i[e.line - 2] : 0) + e.column - 1;
											if (s < i[e.line - 1]) return s
										}
									},
									toPoint: function(e) {
										if ("number" == typeof e && e > -1 && e <= a.length)
											for (var t = 0;;) {
												var n = i[t];
												if (void 0 === n) {
													var r = q(a, i[t - 1]);
													n = -1 === r ? a.length + 1 : r + 1, i[t] = n
												}
												if (n > e) return {
													line: t + 1,
													column: e - (t > 0 ? i[t - 1] : 0) + 1,
													offset: e
												};
												t++
											}
									}
								}),
								c = o.toPoint(0),
								l = o.toPoint(s.length);
							(0, x.ok)(c, "expected `start`"), (0, x.ok)(l, "expected `end`"), n.position = {
								start: c,
								end: l
							}
						}
						return n;
					case "#documentType":
						return Z(e, t, n = {
							type: "doctype"
						}), n;
					case "#text":
						return n = {
							type: "text",
							value: t.value
						}, Z(e, t, n), n;
					default:
						return function(e, t) {
							var n = e.schema;
							e.schema = t.namespaceURI === V.svg ? w.JW : w.qy;
							for (var r = -1, a = {}; ++r < t.attrs.length;) {
								var i = t.attrs[r],
									s = (i.prefix ? i.prefix + ":" : "") + i.name;
								Q.call(K, s) || (a[s] = i.value)
							}
							var o = ("svg" === e.schema.space ? W : z)(t.tagName, a, J(e, t.childNodes));
							if (Z(e, t, o), "template" === o.tagName) {
								var c = t.sourceCodeLocation,
									l = c && c.startTag && $(c.startTag),
									u = c && c.endTag && $(c.endTag),
									h = X(e, t.content);
								l && u && e.file && (h.position = {
									start: l.end,
									end: u.start
								}), o.content = h
							}
							return e.schema = n, o
						}(e, t)
				}
			}

			function J(e, t) {
				for (var n = -1, r = []; ++n < t.length;) {
					var a = X(e, t[n]);
					r.push(a)
				}
				return r
			}

			function Z(e, t, n) {
				if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
					var r = function(e, t, n) {
						var r = $(n);
						if ("element" === t.type) {
							var a = t.children[t.children.length - 1];
							if (r && !n.endTag && a && a.position && a.position.end && (r.end = Object.assign({}, a.position.end)), e.verbose) {
								var i, s = {};
								if (n.attrs)
									for (i in n.attrs) Q.call(n.attrs, i) && (s[(0, H.I)(e.schema, i).property] = $(n.attrs[i]));
								(0, x.ok)(n.startTag, "a start tag should exist");
								var o = $(n.startTag),
									c = n.endTag ? $(n.endTag) : void 0,
									l = {
										opening: o
									};
								c && (l.closing = c), l.properties = s, t.data = {
									position: l
								}
							}
						}
						return r
					}(e, n, t.sourceCodeLocation);
					r && (e.location = !0, n.position = r)
				}
			}

			function $(e) {
				var t = ee({
						line: e.startLine,
						column: e.startCol,
						offset: e.startOffset
					}),
					n = ee({
						line: e.endLine,
						column: e.endCol,
						offset: e.endOffset
					});
				return t || n ? {
					start: t,
					end: n
				} : void 0
			}

			function ee(e) {
				return e.line && e.column ? e : void 0
			}
			var et = {}.hasOwnProperty;

			function en(e, t) {
				var n = t || {};

				function r(t) {
					var n = r.invalid,
						a = r.handlers;
					if (t && et.call(t, e)) {
						var i = String(t[e]);
						n = et.call(a, i) ? a[i] : r.unknown
					}
					if (n) {
						for (var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) o[c - 1] = arguments[c];
						return n.call(this, t, ...o)
					}
				}
				return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r
			}
			var er = {}.hasOwnProperty,
				ea = en("type", {
					handlers: {
						root: function(e, t) {
							var n = {
								nodeName: "#document",
								mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
								childNodes: []
							};
							return n.childNodes = ei(e.children, n, t), es(e, n), n
						},
						element: function(e, t) {
							var n, r, a, i, s = t;
							"element" === e.type && "svg" === e.tagName.toLowerCase() && "html" === t.space && (s = w.JW);
							var o = [];
							if (e.properties) {
								for (n in e.properties)
									if ("children" !== n && er.call(e.properties, n)) {
										var c = function(e, t, n) {
											var r = (0, H.I)(e, t);
											if (!(!1 === n || null == n || "number" == typeof n && Number.isNaN(n)) && (n || !r.boolean)) {
												Array.isArray(n) && (n = r.commaSeparated ? (0, B.A)(n) : (0, G.A)(n));
												var a = {
													name: r.attribute,
													value: !0 === n ? "" : String(n)
												};
												if (r.space && "html" !== r.space && "svg" !== r.space) {
													var i = a.name.indexOf(":");
													i < 0 ? a.prefix = "" : (a.name = a.name.slice(i + 1), a.prefix = r.attribute.slice(0, i)), a.namespace = V[r.space]
												}
												return a
											}
										}(s, n, e.properties[n]);
										c && o.push(c)
									}
							}
							var l = s.space;
							(0, x.ok)(l);
							var u = {
								nodeName: e.tagName,
								tagName: e.tagName,
								attrs: o,
								namespaceURI: V[l],
								childNodes: [],
								parentNode: null
							};
							return u.childNodes = ei(e.children, u, s), es(e, u), "template" === e.tagName && e.content && (r = e.content, a = s, (i = {
								nodeName: "#document-fragment",
								childNodes: []
							}).childNodes = ei(r.children, i, a), es(r, i), u.content = i), u
						},
						text: function(e) {
							var t = {
								nodeName: "#text",
								value: e.value,
								parentNode: null
							};
							return es(e, t), t
						},
						comment: function(e) {
							var t = {
								nodeName: "#comment",
								data: e.value,
								parentNode: null
							};
							return es(e, t), t
						},
						doctype: function(e) {
							var t = {
								nodeName: "#documentType",
								name: "html",
								publicId: "",
								systemId: "",
								parentNode: null
							};
							return es(e, t), t
						}
					}
				});

			function ei(e, t, n) {
				var r = -1,
					a = [];
				if (e)
					for (; ++r < e.length;) {
						var i = ea(e[r], n);
						i.parentNode = t, a.push(i)
					}
				return a
			}

			function es(e, t) {
				var n = e.position;
				n && n.start && n.end && ((0, x.ok)("number" == typeof n.start.offset), (0, x.ok)("number" == typeof n.end.offset), t.sourceCodeLocation = {
					startLine: n.start.line,
					startCol: n.start.column,
					startOffset: n.start.offset,
					endLine: n.end.line,
					endCol: n.end.column,
					endOffset: n.end.offset
				})
			}
			var eo = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
				ec = new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]);
			(r = g || (g = {}))[r.EOF = -1] = "EOF", r[r.NULL = 0] = "NULL", r[r.TABULATION = 9] = "TABULATION", r[r.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", r[r.LINE_FEED = 10] = "LINE_FEED", r[r.FORM_FEED = 12] = "FORM_FEED", r[r.SPACE = 32] = "SPACE", r[r.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", r[r.QUOTATION_MARK = 34] = "QUOTATION_MARK", r[r.AMPERSAND = 38] = "AMPERSAND", r[r.APOSTROPHE = 39] = "APOSTROPHE", r[r.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", r[r.SOLIDUS = 47] = "SOLIDUS", r[r.DIGIT_0 = 48] = "DIGIT_0", r[r.DIGIT_9 = 57] = "DIGIT_9", r[r.SEMICOLON = 59] = "SEMICOLON", r[r.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", r[r.EQUALS_SIGN = 61] = "EQUALS_SIGN", r[r.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", r[r.QUESTION_MARK = 63] = "QUESTION_MARK", r[r.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", r[r.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", r[r.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", r[r.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", r[r.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", r[r.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
			var el = "[CDATA[",
				eu = "doctype",
				eh = "script";

			function ep(e) {
				return e >= 55296 && e <= 57343
			}

			function ed(e) {
				return 32 !== e && 10 !== e && 13 !== e && 9 !== e && 12 !== e && e >= 1 && e <= 31 || e >= 127 && e <= 159
			}

			function ef(e) {
				return e >= 64976 && e <= 65007 || ec.has(e)
			}(a = A || (A = {})).controlCharacterInInputStream = "control-character-in-input-stream", a.noncharacterInInputStream = "noncharacter-in-input-stream", a.surrogateInInputStream = "surrogate-in-input-stream", a.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", a.endTagWithAttributes = "end-tag-with-attributes", a.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", a.unexpectedSolidusInTag = "unexpected-solidus-in-tag", a.unexpectedNullCharacter = "unexpected-null-character", a.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", a.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", a.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", a.missingEndTagName = "missing-end-tag-name", a.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", a.unknownNamedCharacterReference = "unknown-named-character-reference", a.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", a.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", a.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", a.eofBeforeTagName = "eof-before-tag-name", a.eofInTag = "eof-in-tag", a.missingAttributeValue = "missing-attribute-value", a.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", a.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", a.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", a.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", a.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", a.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", a.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", a.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", a.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", a.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", a.cdataInHtmlContent = "cdata-in-html-content", a.incorrectlyOpenedComment = "incorrectly-opened-comment", a.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", a.eofInDoctype = "eof-in-doctype", a.nestedComment = "nested-comment", a.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", a.eofInComment = "eof-in-comment", a.incorrectlyClosedComment = "incorrectly-closed-comment", a.eofInCdata = "eof-in-cdata", a.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", a.nullCharacterReference = "null-character-reference", a.surrogateCharacterReference = "surrogate-character-reference", a.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", a.controlCharacterReference = "control-character-reference", a.noncharacterCharacterReference = "noncharacter-character-reference", a.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", a.missingDoctypeName = "missing-doctype-name", a.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", a.duplicateAttribute = "duplicate-attribute", a.nonConformingDoctype = "non-conforming-doctype", a.missingDoctype = "missing-doctype", a.misplacedDoctype = "misplaced-doctype", a.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", a.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", a.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", a.openElementsLeftAfterEof = "open-elements-left-after-eof", a.abandonedHeadElementChild = "abandoned-head-element-child", a.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", a.nestedNoscriptInHead = "nested-noscript-in-head", a.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
			class em {
				constructor(e) {
					this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1
				}
				get col() {
					return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
				}
				get offset() {
					return this.droppedBufferSize + this.pos
				}
				getError(e, t) {
					var {
						line: n,
						col: r,
						offset: a
					} = this, i = r + t, s = a + t;
					return {
						code: e,
						startLine: n,
						endLine: n,
						startCol: i,
						endCol: i,
						startOffset: s,
						endOffset: s
					}
				}
				_err(e) {
					this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)))
				}
				_addGap() {
					this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos
				}
				_processSurrogate(e) {
					if (this.pos !== this.html.length - 1) {
						var t = this.html.charCodeAt(this.pos + 1);
						if (t >= 56320 && t <= 57343) return this.pos++, this._addGap(), (e - 55296) * 1024 + 9216 + t
					} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, g.EOF;
					return this._err(A.surrogateInInputStream), e
				}
				willDropParsedChunk() {
					return this.pos > this.bufferWaterline
				}
				dropParsedChunk() {
					this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0)
				}
				write(e, t) {
					this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t
				}
				insertHtmlAtCurrentPos(e) {
					this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1
				}
				startsWith(e, t) {
					if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
					if (t) return this.html.startsWith(e, this.pos);
					for (var n = 0; n < e.length; n++)
						if ((32 | this.html.charCodeAt(this.pos + n)) !== e.charCodeAt(n)) return !1;
					return !0
				}
				peek(e) {
					var t = this.pos + e;
					if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, g.EOF;
					var n = this.html.charCodeAt(t);
					return n === g.CARRIAGE_RETURN ? g.LINE_FEED : n
				}
				advance() {
					if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, g.EOF;
					var e = this.html.charCodeAt(this.pos);
					return e === g.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, g.LINE_FEED) : e === g.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ep(e) && (e = this._processSurrogate(e)), null === this.handler.onParseError || e > 31 && e < 127 || e === g.LINE_FEED || e === g.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e)
				}
				_checkForProblematicCharacters(e) {
					ed(e) ? this._err(A.controlCharacterInInputStream) : ef(e) && this._err(A.noncharacterInInputStream)
				}
				retreat(e) {
					for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
					this.isEol = !1
				}
			}

			function eE(e, t) {
				for (var n = e.attrs.length - 1; n >= 0; n--)
					if (e.attrs[n].name === t) return e.attrs[n].value;
				return null
			}(i = _ || (_ = {}))[i.CHARACTER = 0] = "CHARACTER", i[i.NULL_CHARACTER = 1] = "NULL_CHARACTER", i[i.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", i[i.START_TAG = 3] = "START_TAG", i[i.END_TAG = 4] = "END_TAG", i[i.COMMENT = 5] = "COMMENT", i[i.DOCTYPE = 6] = "DOCTYPE", i[i.EOF = 7] = "EOF", i[i.HIBERNATION = 8] = "HIBERNATION";
			var eT = new Uint16Array('ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\uD835\uDD04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\uD835\uDD38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\uD835\uDC9Cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\uD835\uDD05pf;쀀\uD835\uDD39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\uD835\uDC9EpĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\uD835\uDD07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀\uD835\uDD3Bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\0\0ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\uD835\uDC9Frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\uD835\uDD08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\uD835\uDD3Csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\uD835\uDD09lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀\uD835\uDD3DAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\uD835\uDD0A;拙pf;쀀\uD835\uDD3Eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\uD835\uDCA2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\uD835\uDD40a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\uD835\uDD0Dpf;쀀\uD835\uDD41ǣ߇\0ߌr;쀀\uD835\uDCA5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\uD835\uDD0Epf;쀀\uD835\uDD42cr;쀀\uD835\uDCA6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\uD835\uDD0FĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\uD835\uDD43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\uD835\uDD10nusPlus;戓pf;쀀\uD835\uDD44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\uD835\uDD11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\uD835\uDCA9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\uD835\uDD12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\uD835\uDD46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\uD835\uDCAAash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\uD835\uDD13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\uD835\uDCAB;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\uD835\uDD14pf;愚cr;쀀\uD835\uDCAC؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\uD835\uDD16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\uD835\uDD4Aɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\uD835\uDCAEar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\uD835\uDD17Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\uD835\uDD4BipleDot;惛Āctዖዛr;쀀\uD835\uDCAFrok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\uD835\uDD18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\uD835\uDD4CЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\uD835\uDCB0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\uD835\uDD19pf;쀀\uD835\uDD4Dcr;쀀\uD835\uDCB1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\uD835\uDD1Apf;쀀\uD835\uDD4Ecr;쀀\uD835\uDCB2Ȁfiosᓋᓐᓒᓘr;쀀\uD835\uDD1B;䎞pf;쀀\uD835\uDD4Fcr;쀀\uD835\uDCB3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\uD835\uDD1Cpf;쀀\uD835\uDD50cr;쀀\uD835\uDCB4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\uD835\uDCB5௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\uD835\uDD1Erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\uD835\uDD52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\uD835\uDCB6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\uD835\uDD1Fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\uD835\uDD53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\uD835\uDCB7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\uD835\uDD20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\0ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\uD835\uDD54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\uD835\uDCB8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\uD835\uDD21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\uD835\uDD55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\uD835\uDCB9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\uD835\uDD22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\uD835\uDD56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\0\0ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀\uD835\uDD23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀\uD835\uDD57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀\uD835\uDCBBࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\uD835\uDD24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\uD835\uDD58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\uD835\uDD25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\uD835\uDD59bar;怕ƀclt≯≴≸r;쀀\uD835\uDCBDas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\uD835\uDD26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\uD835\uDD5Aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\uD835\uDCBEnʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\uD835\uDD27ath;䈷pf;쀀\uD835\uDD5Bǣ⏬\0⏱r;쀀\uD835\uDCBFrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\uD835\uDD28reen;䄸cy;䑅cy;䑜pf;쀀\uD835\uDD5Ccr;쀀\uD835\uDCC0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\uD835\uDD29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\uD835\uDD5Dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\uD835\uDCC1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\uD835\uDD2Ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\uD835\uDD5EĀct⣸⣽r;쀀\uD835\uDCC2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\uD835\uDD2BȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\uD835\uDD5F膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\uD835\uDCC3ortɭ⬅\0\0⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\uD835\uDD2Cͯ⵹\0\0⵼\0ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\uD835\uDD60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\uD835\uDD2Dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\uD835\uDD61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\uD835\uDCC5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\uD835\uDD2Epf;쀀\uD835\uDD62rime;恗cr;쀀\uD835\uDCC6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\uD835\uDD2FĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\uD835\uDD63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\uD835\uDCC7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\uD835\uDD30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\uD835\uDD64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\uD835\uDCC8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\uD835\uDD31Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\uD835\uDD65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\uD835\uDCC9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\uD835\uDD32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\uD835\uDD66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\uD835\uDCCAƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\uD835\uDD33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\uD835\uDD67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\uD835\uDCCBĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\uD835\uDD34pf;쀀\uD835\uDD68Ā;eᑹ㩦at\xe8ᑹcr;쀀\uD835\uDCCCૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tr\xe9៑r;쀀\uD835\uDD35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\uD835\uDD69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\uD835\uDCCDĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\uD835\uDD36cy;䑗pf;쀀\uD835\uDD6Acr;쀀\uD835\uDCCEĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\uD835\uDD37cy;䐶grarr;懝pf;쀀\uD835\uDD6Bcr;쀀\uD835\uDCCFĀjn㮅㮇;怍j;怌'.split("").map(e => e.charCodeAt(0))),
				eg = new Map([
					[0, 65533],
					[128, 8364],
					[130, 8218],
					[131, 402],
					[132, 8222],
					[133, 8230],
					[134, 8224],
					[135, 8225],
					[136, 710],
					[137, 8240],
					[138, 352],
					[139, 8249],
					[140, 338],
					[142, 381],
					[145, 8216],
					[146, 8217],
					[147, 8220],
					[148, 8221],
					[149, 8226],
					[150, 8211],
					[151, 8212],
					[152, 732],
					[153, 8482],
					[154, 353],
					[155, 8250],
					[156, 339],
					[158, 382],
					[159, 376]
				]);

			function eA(e) {
				return e >= S.ZERO && e <= S.NINE
			}(s = S || (S = {}))[s.NUM = 35] = "NUM", s[s.SEMI = 59] = "SEMI", s[s.EQUALS = 61] = "EQUALS", s[s.ZERO = 48] = "ZERO", s[s.NINE = 57] = "NINE", s[s.LOWER_A = 97] = "LOWER_A", s[s.LOWER_F = 102] = "LOWER_F", s[s.LOWER_X = 120] = "LOWER_X", s[s.LOWER_Z = 122] = "LOWER_Z", s[s.UPPER_A = 65] = "UPPER_A", s[s.UPPER_F = 70] = "UPPER_F", s[s.UPPER_Z = 90] = "UPPER_Z", (o = O || (O = {}))[o.VALUE_LENGTH = 49152] = "VALUE_LENGTH", o[o.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", o[o.JUMP_TABLE = 127] = "JUMP_TABLE", (c = I || (I = {}))[c.EntityStart = 0] = "EntityStart", c[c.NumericStart = 1] = "NumericStart", c[c.NumericDecimal = 2] = "NumericDecimal", c[c.NumericHex = 3] = "NumericHex", c[c.NamedEntity = 4] = "NamedEntity", (l = N || (N = {}))[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
			class e_ {
				constructor(e, t, n) {
					this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = N.Strict
				}
				startEntity(e) {
					this.decodeMode = e, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1
				}
				write(e, t) {
					switch (this.state) {
						case I.EntityStart:
							if (e.charCodeAt(t) === S.NUM) return this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1);
							return this.state = I.NamedEntity, this.stateNamedEntity(e, t);
						case I.NumericStart:
							return this.stateNumericStart(e, t);
						case I.NumericDecimal:
							return this.stateNumericDecimal(e, t);
						case I.NumericHex:
							return this.stateNumericHex(e, t);
						case I.NamedEntity:
							return this.stateNamedEntity(e, t)
					}
				}
				stateNumericStart(e, t) {
					return t >= e.length ? -1 : (32 | e.charCodeAt(t)) === S.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(e, t))
				}
				addToNumericResult(e, t, n, r) {
					if (t !== n) {
						var a = n - t;
						this.result = this.result * Math.pow(r, a) + Number.parseInt(e.substr(t, a), r), this.consumed += a
					}
				}
				stateNumericHex(e, t) {
					for (var n = t; t < e.length;) {
						var r, a = e.charCodeAt(t);
						if (!eA(a) && (!((r = a) >= S.UPPER_A) || !(r <= S.UPPER_F)) && (!(r >= S.LOWER_A) || !(r <= S.LOWER_F))) return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(a, 3);
						t += 1
					}
					return this.addToNumericResult(e, n, t, 16), -1
				}
				stateNumericDecimal(e, t) {
					for (var n = t; t < e.length;) {
						var r = e.charCodeAt(t);
						if (!eA(r)) return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
						t += 1
					}
					return this.addToNumericResult(e, n, t, 10), -1
				}
				emitNumericEntity(e, t) {
					var n, r, a;
					if (this.consumed <= t) return null == (n = this.errors) || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
					if (e === S.SEMI) this.consumed += 1;
					else if (this.decodeMode === N.Strict) return 0;
					return this.emitCodePoint((r = this.result) >= 55296 && r <= 57343 || r > 1114111 ? 65533 : null != (a = eg.get(r)) ? a : r, this.consumed), this.errors && (e !== S.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed
				}
				stateNamedEntity(e, t) {
					for (var {
							decodeTree: n
						} = this, r = n[this.treeIndex], a = (r & O.VALUE_LENGTH) >> 14; t < e.length; t++, this.excess++) {
						var i = e.charCodeAt(t);
						if (this.treeIndex = function(e, t, n, r) {
								var a = (t & O.BRANCH_LENGTH) >> 7,
									i = t & O.JUMP_TABLE;
								if (0 === a) return 0 !== i && r === i ? n : -1;
								if (i) {
									var s = r - i;
									return s < 0 || s >= a ? -1 : e[n + s] - 1
								}
								for (var o = n, c = o + a - 1; o <= c;) {
									var l = o + c >>> 1,
										u = e[l];
									if (u < r) o = l + 1;
									else {
										if (!(u > r)) return e[l + a];
										c = l - 1
									}
								}
								return -1
							}(n, r, this.treeIndex + Math.max(1, a), i), this.treeIndex < 0) return 0 === this.result || this.decodeMode === N.Attribute && (0 === a || function(e) {
							var t;
							return e === S.EQUALS || (t = e) >= S.UPPER_A && t <= S.UPPER_Z || t >= S.LOWER_A && t <= S.LOWER_Z || eA(t)
						}(i)) ? 0 : this.emitNotTerminatedNamedEntity();
						if (0 != (a = ((r = n[this.treeIndex]) & O.VALUE_LENGTH) >> 14)) {
							if (i === S.SEMI) return this.emitNamedEntityData(this.treeIndex, a, this.consumed + this.excess);
							this.decodeMode !== N.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0)
						}
					}
					return -1
				}
				emitNotTerminatedNamedEntity() {
					var e, {
							result: t,
							decodeTree: n
						} = this,
						r = (n[t] & O.VALUE_LENGTH) >> 14;
					return this.emitNamedEntityData(t, r, this.consumed), null == (e = this.errors) || e.missingSemicolonAfterCharacterReference(), this.consumed
				}
				emitNamedEntityData(e, t, n) {
					var {
						decodeTree: r
					} = this;
					return this.emitCodePoint(1 === t ? r[e] & ~O.VALUE_LENGTH : r[e + 1], n), 3 === t && this.emitCodePoint(r[e + 2], n), n
				}
				end() {
					var e;
					switch (this.state) {
						case I.NamedEntity:
							return 0 !== this.result && (this.decodeMode !== N.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
						case I.NumericDecimal:
							return this.emitNumericEntity(0, 2);
						case I.NumericHex:
							return this.emitNumericEntity(0, 3);
						case I.NumericStart:
							return null == (e = this.errors) || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
						case I.EntityStart:
							return 0
					}
				}
			}(u = k || (k = {})).HTML = "http://www.w3.org/1999/xhtml", u.MATHML = "http://www.w3.org/1998/Math/MathML", u.SVG = "http://www.w3.org/2000/svg", u.XLINK = "http://www.w3.org/1999/xlink", u.XML = "http://www.w3.org/XML/1998/namespace", u.XMLNS = "http://www.w3.org/2000/xmlns/", (h = b || (b = {})).TYPE = "type", h.ACTION = "action", h.ENCODING = "encoding", h.PROMPT = "prompt", h.NAME = "name", h.COLOR = "color", h.FACE = "face", h.SIZE = "size", (p = C || (C = {})).NO_QUIRKS = "no-quirks", p.QUIRKS = "quirks", p.LIMITED_QUIRKS = "limited-quirks", (d = v || (v = {})).A = "a", d.ADDRESS = "address", d.ANNOTATION_XML = "annotation-xml", d.APPLET = "applet", d.AREA = "area", d.ARTICLE = "article", d.ASIDE = "aside", d.B = "b", d.BASE = "base", d.BASEFONT = "basefont", d.BGSOUND = "bgsound", d.BIG = "big", d.BLOCKQUOTE = "blockquote", d.BODY = "body", d.BR = "br", d.BUTTON = "button", d.CAPTION = "caption", d.CENTER = "center", d.CODE = "code", d.COL = "col", d.COLGROUP = "colgroup", d.DD = "dd", d.DESC = "desc", d.DETAILS = "details", d.DIALOG = "dialog", d.DIR = "dir", d.DIV = "div", d.DL = "dl", d.DT = "dt", d.EM = "em", d.EMBED = "embed", d.FIELDSET = "fieldset", d.FIGCAPTION = "figcaption", d.FIGURE = "figure", d.FONT = "font", d.FOOTER = "footer", d.FOREIGN_OBJECT = "foreignObject", d.FORM = "form", d.FRAME = "frame", d.FRAMESET = "frameset", d.H1 = "h1", d.H2 = "h2", d.H3 = "h3", d.H4 = "h4", d.H5 = "h5", d.H6 = "h6", d.HEAD = "head", d.HEADER = "header", d.HGROUP = "hgroup", d.HR = "hr", d.HTML = "html", d.I = "i", d.IMG = "img", d.IMAGE = "image", d.INPUT = "input", d.IFRAME = "iframe", d.KEYGEN = "keygen", d.LABEL = "label", d.LI = "li", d.LINK = "link", d.LISTING = "listing", d.MAIN = "main", d.MALIGNMARK = "malignmark", d.MARQUEE = "marquee", d.MATH = "math", d.MENU = "menu", d.META = "meta", d.MGLYPH = "mglyph", d.MI = "mi", d.MO = "mo", d.MN = "mn", d.MS = "ms", d.MTEXT = "mtext", d.NAV = "nav", d.NOBR = "nobr", d.NOFRAMES = "noframes", d.NOEMBED = "noembed", d.NOSCRIPT = "noscript", d.OBJECT = "object", d.OL = "ol", d.OPTGROUP = "optgroup", d.OPTION = "option", d.P = "p", d.PARAM = "param", d.PLAINTEXT = "plaintext", d.PRE = "pre", d.RB = "rb", d.RP = "rp", d.RT = "rt", d.RTC = "rtc", d.RUBY = "ruby", d.S = "s", d.SCRIPT = "script", d.SEARCH = "search", d.SECTION = "section", d.SELECT = "select", d.SOURCE = "source", d.SMALL = "small", d.SPAN = "span", d.STRIKE = "strike", d.STRONG = "strong", d.STYLE = "style", d.SUB = "sub", d.SUMMARY = "summary", d.SUP = "sup", d.TABLE = "table", d.TBODY = "tbody", d.TEMPLATE = "template", d.TEXTAREA = "textarea", d.TFOOT = "tfoot", d.TD = "td", d.TH = "th", d.THEAD = "thead", d.TITLE = "title", d.TR = "tr", d.TRACK = "track", d.TT = "tt", d.U = "u", d.UL = "ul", d.SVG = "svg", d.VAR = "var", d.WBR = "wbr", d.XMP = "xmp", (f = D || (D = {}))[f.UNKNOWN = 0] = "UNKNOWN", f[f.A = 1] = "A", f[f.ADDRESS = 2] = "ADDRESS", f[f.ANNOTATION_XML = 3] = "ANNOTATION_XML", f[f.APPLET = 4] = "APPLET", f[f.AREA = 5] = "AREA", f[f.ARTICLE = 6] = "ARTICLE", f[f.ASIDE = 7] = "ASIDE", f[f.B = 8] = "B", f[f.BASE = 9] = "BASE", f[f.BASEFONT = 10] = "BASEFONT", f[f.BGSOUND = 11] = "BGSOUND", f[f.BIG = 12] = "BIG", f[f.BLOCKQUOTE = 13] = "BLOCKQUOTE", f[f.BODY = 14] = "BODY", f[f.BR = 15] = "BR", f[f.BUTTON = 16] = "BUTTON", f[f.CAPTION = 17] = "CAPTION", f[f.CENTER = 18] = "CENTER", f[f.CODE = 19] = "CODE", f[f.COL = 20] = "COL", f[f.COLGROUP = 21] = "COLGROUP", f[f.DD = 22] = "DD", f[f.DESC = 23] = "DESC", f[f.DETAILS = 24] = "DETAILS", f[f.DIALOG = 25] = "DIALOG", f[f.DIR = 26] = "DIR", f[f.DIV = 27] = "DIV", f[f.DL = 28] = "DL", f[f.DT = 29] = "DT", f[f.EM = 30] = "EM", f[f.EMBED = 31] = "EMBED", f[f.FIELDSET = 32] = "FIELDSET", f[f.FIGCAPTION = 33] = "FIGCAPTION", f[f.FIGURE = 34] = "FIGURE", f[f.FONT = 35] = "FONT", f[f.FOOTER = 36] = "FOOTER", f[f.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", f[f.FORM = 38] = "FORM", f[f.FRAME = 39] = "FRAME", f[f.FRAMESET = 40] = "FRAMESET", f[f.H1 = 41] = "H1", f[f.H2 = 42] = "H2", f[f.H3 = 43] = "H3", f[f.H4 = 44] = "H4", f[f.H5 = 45] = "H5", f[f.H6 = 46] = "H6", f[f.HEAD = 47] = "HEAD", f[f.HEADER = 48] = "HEADER", f[f.HGROUP = 49] = "HGROUP", f[f.HR = 50] = "HR", f[f.HTML = 51] = "HTML", f[f.I = 52] = "I", f[f.IMG = 53] = "IMG", f[f.IMAGE = 54] = "IMAGE", f[f.INPUT = 55] = "INPUT", f[f.IFRAME = 56] = "IFRAME", f[f.KEYGEN = 57] = "KEYGEN", f[f.LABEL = 58] = "LABEL", f[f.LI = 59] = "LI", f[f.LINK = 60] = "LINK", f[f.LISTING = 61] = "LISTING", f[f.MAIN = 62] = "MAIN", f[f.MALIGNMARK = 63] = "MALIGNMARK", f[f.MARQUEE = 64] = "MARQUEE", f[f.MATH = 65] = "MATH", f[f.MENU = 66] = "MENU", f[f.META = 67] = "META", f[f.MGLYPH = 68] = "MGLYPH", f[f.MI = 69] = "MI", f[f.MO = 70] = "MO", f[f.MN = 71] = "MN", f[f.MS = 72] = "MS", f[f.MTEXT = 73] = "MTEXT", f[f.NAV = 74] = "NAV", f[f.NOBR = 75] = "NOBR", f[f.NOFRAMES = 76] = "NOFRAMES", f[f.NOEMBED = 77] = "NOEMBED", f[f.NOSCRIPT = 78] = "NOSCRIPT", f[f.OBJECT = 79] = "OBJECT", f[f.OL = 80] = "OL", f[f.OPTGROUP = 81] = "OPTGROUP", f[f.OPTION = 82] = "OPTION", f[f.P = 83] = "P", f[f.PARAM = 84] = "PARAM", f[f.PLAINTEXT = 85] = "PLAINTEXT", f[f.PRE = 86] = "PRE", f[f.RB = 87] = "RB", f[f.RP = 88] = "RP", f[f.RT = 89] = "RT", f[f.RTC = 90] = "RTC", f[f.RUBY = 91] = "RUBY", f[f.S = 92] = "S", f[f.SCRIPT = 93] = "SCRIPT", f[f.SEARCH = 94] = "SEARCH", f[f.SECTION = 95] = "SECTION", f[f.SELECT = 96] = "SELECT", f[f.SOURCE = 97] = "SOURCE", f[f.SMALL = 98] = "SMALL", f[f.SPAN = 99] = "SPAN", f[f.STRIKE = 100] = "STRIKE", f[f.STRONG = 101] = "STRONG", f[f.STYLE = 102] = "STYLE", f[f.SUB = 103] = "SUB", f[f.SUMMARY = 104] = "SUMMARY", f[f.SUP = 105] = "SUP", f[f.TABLE = 106] = "TABLE", f[f.TBODY = 107] = "TBODY", f[f.TEMPLATE = 108] = "TEMPLATE", f[f.TEXTAREA = 109] = "TEXTAREA", f[f.TFOOT = 110] = "TFOOT", f[f.TD = 111] = "TD", f[f.TH = 112] = "TH", f[f.THEAD = 113] = "THEAD", f[f.TITLE = 114] = "TITLE", f[f.TR = 115] = "TR", f[f.TRACK = 116] = "TRACK", f[f.TT = 117] = "TT", f[f.U = 118] = "U", f[f.UL = 119] = "UL", f[f.SVG = 120] = "SVG", f[f.VAR = 121] = "VAR", f[f.WBR = 122] = "WBR", f[f.XMP = 123] = "XMP";
			var eS = new Map([
				[v.A, D.A],
				[v.ADDRESS, D.ADDRESS],
				[v.ANNOTATION_XML, D.ANNOTATION_XML],
				[v.APPLET, D.APPLET],
				[v.AREA, D.AREA],
				[v.ARTICLE, D.ARTICLE],
				[v.ASIDE, D.ASIDE],
				[v.B, D.B],
				[v.BASE, D.BASE],
				[v.BASEFONT, D.BASEFONT],
				[v.BGSOUND, D.BGSOUND],
				[v.BIG, D.BIG],
				[v.BLOCKQUOTE, D.BLOCKQUOTE],
				[v.BODY, D.BODY],
				[v.BR, D.BR],
				[v.BUTTON, D.BUTTON],
				[v.CAPTION, D.CAPTION],
				[v.CENTER, D.CENTER],
				[v.CODE, D.CODE],
				[v.COL, D.COL],
				[v.COLGROUP, D.COLGROUP],
				[v.DD, D.DD],
				[v.DESC, D.DESC],
				[v.DETAILS, D.DETAILS],
				[v.DIALOG, D.DIALOG],
				[v.DIR, D.DIR],
				[v.DIV, D.DIV],
				[v.DL, D.DL],
				[v.DT, D.DT],
				[v.EM, D.EM],
				[v.EMBED, D.EMBED],
				[v.FIELDSET, D.FIELDSET],
				[v.FIGCAPTION, D.FIGCAPTION],
				[v.FIGURE, D.FIGURE],
				[v.FONT, D.FONT],
				[v.FOOTER, D.FOOTER],
				[v.FOREIGN_OBJECT, D.FOREIGN_OBJECT],
				[v.FORM, D.FORM],
				[v.FRAME, D.FRAME],
				[v.FRAMESET, D.FRAMESET],
				[v.H1, D.H1],
				[v.H2, D.H2],
				[v.H3, D.H3],
				[v.H4, D.H4],
				[v.H5, D.H5],
				[v.H6, D.H6],
				[v.HEAD, D.HEAD],
				[v.HEADER, D.HEADER],
				[v.HGROUP, D.HGROUP],
				[v.HR, D.HR],
				[v.HTML, D.HTML],
				[v.I, D.I],
				[v.IMG, D.IMG],
				[v.IMAGE, D.IMAGE],
				[v.INPUT, D.INPUT],
				[v.IFRAME, D.IFRAME],
				[v.KEYGEN, D.KEYGEN],
				[v.LABEL, D.LABEL],
				[v.LI, D.LI],
				[v.LINK, D.LINK],
				[v.LISTING, D.LISTING],
				[v.MAIN, D.MAIN],
				[v.MALIGNMARK, D.MALIGNMARK],
				[v.MARQUEE, D.MARQUEE],
				[v.MATH, D.MATH],
				[v.MENU, D.MENU],
				[v.META, D.META],
				[v.MGLYPH, D.MGLYPH],
				[v.MI, D.MI],
				[v.MO, D.MO],
				[v.MN, D.MN],
				[v.MS, D.MS],
				[v.MTEXT, D.MTEXT],
				[v.NAV, D.NAV],
				[v.NOBR, D.NOBR],
				[v.NOFRAMES, D.NOFRAMES],
				[v.NOEMBED, D.NOEMBED],
				[v.NOSCRIPT, D.NOSCRIPT],
				[v.OBJECT, D.OBJECT],
				[v.OL, D.OL],
				[v.OPTGROUP, D.OPTGROUP],
				[v.OPTION, D.OPTION],
				[v.P, D.P],
				[v.PARAM, D.PARAM],
				[v.PLAINTEXT, D.PLAINTEXT],
				[v.PRE, D.PRE],
				[v.RB, D.RB],
				[v.RP, D.RP],
				[v.RT, D.RT],
				[v.RTC, D.RTC],
				[v.RUBY, D.RUBY],
				[v.S, D.S],
				[v.SCRIPT, D.SCRIPT],
				[v.SEARCH, D.SEARCH],
				[v.SECTION, D.SECTION],
				[v.SELECT, D.SELECT],
				[v.SOURCE, D.SOURCE],
				[v.SMALL, D.SMALL],
				[v.SPAN, D.SPAN],
				[v.STRIKE, D.STRIKE],
				[v.STRONG, D.STRONG],
				[v.STYLE, D.STYLE],
				[v.SUB, D.SUB],
				[v.SUMMARY, D.SUMMARY],
				[v.SUP, D.SUP],
				[v.TABLE, D.TABLE],
				[v.TBODY, D.TBODY],
				[v.TEMPLATE, D.TEMPLATE],
				[v.TEXTAREA, D.TEXTAREA],
				[v.TFOOT, D.TFOOT],
				[v.TD, D.TD],
				[v.TH, D.TH],
				[v.THEAD, D.THEAD],
				[v.TITLE, D.TITLE],
				[v.TR, D.TR],
				[v.TRACK, D.TRACK],
				[v.TT, D.TT],
				[v.U, D.U],
				[v.UL, D.UL],
				[v.SVG, D.SVG],
				[v.VAR, D.VAR],
				[v.WBR, D.WBR],
				[v.XMP, D.XMP]
			]);

			function eO(e) {
				var t;
				return null != (t = eS.get(e)) ? t : D.UNKNOWN
			}
			var eI = D,
				eN = {
					[k.HTML]: new Set([eI.ADDRESS, eI.APPLET, eI.AREA, eI.ARTICLE, eI.ASIDE, eI.BASE, eI.BASEFONT, eI.BGSOUND, eI.BLOCKQUOTE, eI.BODY, eI.BR, eI.BUTTON, eI.CAPTION, eI.CENTER, eI.COL, eI.COLGROUP, eI.DD, eI.DETAILS, eI.DIR, eI.DIV, eI.DL, eI.DT, eI.EMBED, eI.FIELDSET, eI.FIGCAPTION, eI.FIGURE, eI.FOOTER, eI.FORM, eI.FRAME, eI.FRAMESET, eI.H1, eI.H2, eI.H3, eI.H4, eI.H5, eI.H6, eI.HEAD, eI.HEADER, eI.HGROUP, eI.HR, eI.HTML, eI.IFRAME, eI.IMG, eI.INPUT, eI.LI, eI.LINK, eI.LISTING, eI.MAIN, eI.MARQUEE, eI.MENU, eI.META, eI.NAV, eI.NOEMBED, eI.NOFRAMES, eI.NOSCRIPT, eI.OBJECT, eI.OL, eI.P, eI.PARAM, eI.PLAINTEXT, eI.PRE, eI.SCRIPT, eI.SECTION, eI.SELECT, eI.SOURCE, eI.STYLE, eI.SUMMARY, eI.TABLE, eI.TBODY, eI.TD, eI.TEMPLATE, eI.TEXTAREA, eI.TFOOT, eI.TH, eI.THEAD, eI.TITLE, eI.TR, eI.TRACK, eI.UL, eI.WBR, eI.XMP]),
					[k.MATHML]: new Set([eI.MI, eI.MO, eI.MN, eI.MS, eI.MTEXT, eI.ANNOTATION_XML]),
					[k.SVG]: new Set([eI.TITLE, eI.FOREIGN_OBJECT, eI.DESC]),
					[k.XLINK]: new Set,
					[k.XML]: new Set,
					[k.XMLNS]: new Set
				},
				ek = new Set([eI.H1, eI.H2, eI.H3, eI.H4, eI.H5, eI.H6]);
			v.STYLE, v.SCRIPT, v.XMP, v.IFRAME, v.NOEMBED, v.NOFRAMES, v.PLAINTEXT, (m = y || (y = {}))[m.DATA = 0] = "DATA", m[m.RCDATA = 1] = "RCDATA", m[m.RAWTEXT = 2] = "RAWTEXT", m[m.SCRIPT_DATA = 3] = "SCRIPT_DATA", m[m.PLAINTEXT = 4] = "PLAINTEXT", m[m.TAG_OPEN = 5] = "TAG_OPEN", m[m.END_TAG_OPEN = 6] = "END_TAG_OPEN", m[m.TAG_NAME = 7] = "TAG_NAME", m[m.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", m[m.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", m[m.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", m[m.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", m[m.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", m[m.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", m[m.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", m[m.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", m[m.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", m[m.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", m[m.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", m[m.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", m[m.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", m[m.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", m[m.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", m[m.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", m[m.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", m[m.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", m[m.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", m[m.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", m[m.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", m[m.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", m[m.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", m[m.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", m[m.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", m[m.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", m[m.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", m[m.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", m[m.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", m[m.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", m[m.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", m[m.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", m[m.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", m[m.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", m[m.COMMENT_START = 42] = "COMMENT_START", m[m.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", m[m.COMMENT = 44] = "COMMENT", m[m.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", m[m.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", m[m.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", m[m.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", m[m.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", m[m.COMMENT_END = 50] = "COMMENT_END", m[m.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", m[m.DOCTYPE = 52] = "DOCTYPE", m[m.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", m[m.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", m[m.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", m[m.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", m[m.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", m[m.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", m[m.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", m[m.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", m[m.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", m[m.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", m[m.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", m[m.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", m[m.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", m[m.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", m[m.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", m[m.CDATA_SECTION = 68] = "CDATA_SECTION", m[m.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", m[m.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", m[m.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", m[m.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
			var eb = {
				DATA: y.DATA,
				RCDATA: y.RCDATA,
				RAWTEXT: y.RAWTEXT,
				SCRIPT_DATA: y.SCRIPT_DATA,
				PLAINTEXT: y.PLAINTEXT,
				CDATA_SECTION: y.CDATA_SECTION
			};

			function eC(e) {
				return e >= g.LATIN_CAPITAL_A && e <= g.LATIN_CAPITAL_Z
			}

			function ev(e) {
				return e >= g.LATIN_SMALL_A && e <= g.LATIN_SMALL_Z || eC(e)
			}

			function eD(e) {
				return ev(e) || e >= g.DIGIT_0 && e <= g.DIGIT_9
			}

			function ey(e) {
				return e === g.SPACE || e === g.LINE_FEED || e === g.TABULATION || e === g.FORM_FEED
			}

			function eR(e) {
				return ey(e) || e === g.SOLIDUS || e === g.GREATER_THAN_SIGN
			}
			class eL {
				constructor(e, t) {
					this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = y.DATA, this.returnState = y.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
						name: "",
						value: ""
					}, this.preprocessor = new em(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new e_(eT, (e, t) => {
						this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e)
					}, t.onParseError ? {
						missingSemicolonAfterCharacterReference: () => {
							this._err(A.missingSemicolonAfterCharacterReference, 1)
						},
						absenceOfDigitsInNumericCharacterReference: e => {
							this._err(A.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e)
						},
						validateNumericCharacterReference: e => {
							var t = function(e) {
								if (e === g.NULL) return A.nullCharacterReference;
								if (e > 1114111) return A.characterReferenceOutsideUnicodeRange;
								if (ep(e)) return A.surrogateCharacterReference;
								if (ef(e)) return A.noncharacterCharacterReference;
								if (ed(e) || e === g.CARRIAGE_RETURN) return A.controlCharacterReference;
								return null
							}(e);
							t && this._err(t, 1)
						}
					} : void 0)
				}
				_err(e) {
					var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					null == (n = (t = this.handler).onParseError) || n.call(t, this.preprocessor.getError(e, r))
				}
				getCurrentLocation(e) {
					return this.options.sourceCodeLocationInfo ? {
						startLine: this.preprocessor.line,
						startCol: this.preprocessor.col - e,
						startOffset: this.preprocessor.offset - e,
						endLine: -1,
						endCol: -1,
						endOffset: -1
					} : null
				}
				_runParsingLoop() {
					if (!this.inLoop) {
						for (this.inLoop = !0; this.active && !this.paused;) {
							this.consumedAfterSnapshot = 0;
							var e = this._consume();
							this._ensureHibernation() || this._callState(e)
						}
						this.inLoop = !1
					}
				}
				pause() {
					this.paused = !0
				}
				resume(e) {
					if (!this.paused) throw Error("Parser was already resumed");
					this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || null == e || e())
				}
				write(e, t, n) {
					this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || null == n || n()
				}
				insertHtmlAtCurrentPos(e) {
					this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop()
				}
				_ensureHibernation() {
					return !!this.preprocessor.endOfChunkHit && (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0)
				}
				_consume() {
					return this.consumedAfterSnapshot++, this.preprocessor.advance()
				}
				_advanceBy(e) {
					this.consumedAfterSnapshot += e;
					for (var t = 0; t < e; t++) this.preprocessor.advance()
				}
				_consumeSequenceIfMatch(e, t) {
					return !!this.preprocessor.startsWith(e, t) && (this._advanceBy(e.length - 1), !0)
				}
				_createStartTagToken() {
					this.currentToken = {
						type: _.START_TAG,
						tagName: "",
						tagID: D.UNKNOWN,
						selfClosing: !1,
						ackSelfClosing: !1,
						attrs: [],
						location: this.getCurrentLocation(1)
					}
				}
				_createEndTagToken() {
					this.currentToken = {
						type: _.END_TAG,
						tagName: "",
						tagID: D.UNKNOWN,
						selfClosing: !1,
						ackSelfClosing: !1,
						attrs: [],
						location: this.getCurrentLocation(2)
					}
				}
				_createCommentToken(e) {
					this.currentToken = {
						type: _.COMMENT,
						data: "",
						location: this.getCurrentLocation(e)
					}
				}
				_createDoctypeToken(e) {
					this.currentToken = {
						type: _.DOCTYPE,
						name: e,
						forceQuirks: !1,
						publicId: null,
						systemId: null,
						location: this.currentLocation
					}
				}
				_createCharacterToken(e, t) {
					this.currentCharacterToken = {
						type: e,
						chars: t,
						location: this.currentLocation
					}
				}
				_createAttr(e) {
					this.currentAttr = {
						name: e,
						value: ""
					}, this.currentLocation = this.getCurrentLocation(0)
				}
				_leaveAttrName() {
					var e, t, n = this.currentToken;
					null === eE(n, this.currentAttr.name) ? (n.attrs.push(this.currentAttr), n.location && this.currentLocation && ((null != (e = (t = n.location).attrs) ? e : t.attrs = Object.create(null))[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue())) : this._err(A.duplicateAttribute)
				}
				_leaveAttrValue() {
					this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset)
				}
				prepareToken(e) {
					this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1)
				}
				emitCurrentTagToken() {
					var e = this.currentToken;
					this.prepareToken(e), e.tagID = eO(e.tagName), e.type === _.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(A.endTagWithAttributes), e.selfClosing && this._err(A.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk()
				}
				emitCurrentComment(e) {
					this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk()
				}
				emitCurrentDoctype(e) {
					this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk()
				}
				_emitCurrentCharacterToken(e) {
					if (this.currentCharacterToken) {
						switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
							case _.CHARACTER:
								this.handler.onCharacter(this.currentCharacterToken);
								break;
							case _.NULL_CHARACTER:
								this.handler.onNullCharacter(this.currentCharacterToken);
								break;
							case _.WHITESPACE_CHARACTER:
								this.handler.onWhitespaceCharacter(this.currentCharacterToken)
						}
						this.currentCharacterToken = null
					}
				}
				_emitEOFToken() {
					var e = this.getCurrentLocation(0);
					e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
						type: _.EOF,
						location: e
					}), this.active = !1
				}
				_appendCharToCurrentCharacterToken(e, t) {
					if (this.currentCharacterToken)
						if (this.currentCharacterToken.type === e) {
							this.currentCharacterToken.chars += t;
							return
						} else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
					this._createCharacterToken(e, t)
				}
				_emitCodePoint(e) {
					var t = ey(e) ? _.WHITESPACE_CHARACTER : e === g.NULL ? _.NULL_CHARACTER : _.CHARACTER;
					this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e))
				}
				_emitChars(e) {
					this._appendCharToCurrentCharacterToken(_.CHARACTER, e)
				}
				_startCharacterReference() {
					this.returnState = this.state, this.state = y.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? N.Attribute : N.Legacy)
				}
				_isCharacterReferenceInAttribute() {
					return this.returnState === y.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === y.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === y.ATTRIBUTE_VALUE_UNQUOTED
				}
				_flushCodePointConsumedAsCharacterReference(e) {
					this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e)
				}
				_callState(e) {
					switch (this.state) {
						case y.DATA:
							this._stateData(e);
							break;
						case y.RCDATA:
							this._stateRcdata(e);
							break;
						case y.RAWTEXT:
							this._stateRawtext(e);
							break;
						case y.SCRIPT_DATA:
							this._stateScriptData(e);
							break;
						case y.PLAINTEXT:
							this._statePlaintext(e);
							break;
						case y.TAG_OPEN:
							this._stateTagOpen(e);
							break;
						case y.END_TAG_OPEN:
							this._stateEndTagOpen(e);
							break;
						case y.TAG_NAME:
							this._stateTagName(e);
							break;
						case y.RCDATA_LESS_THAN_SIGN:
							this._stateRcdataLessThanSign(e);
							break;
						case y.RCDATA_END_TAG_OPEN:
							this._stateRcdataEndTagOpen(e);
							break;
						case y.RCDATA_END_TAG_NAME:
							this._stateRcdataEndTagName(e);
							break;
						case y.RAWTEXT_LESS_THAN_SIGN:
							this._stateRawtextLessThanSign(e);
							break;
						case y.RAWTEXT_END_TAG_OPEN:
							this._stateRawtextEndTagOpen(e);
							break;
						case y.RAWTEXT_END_TAG_NAME:
							this._stateRawtextEndTagName(e);
							break;
						case y.SCRIPT_DATA_LESS_THAN_SIGN:
							this._stateScriptDataLessThanSign(e);
							break;
						case y.SCRIPT_DATA_END_TAG_OPEN:
							this._stateScriptDataEndTagOpen(e);
							break;
						case y.SCRIPT_DATA_END_TAG_NAME:
							this._stateScriptDataEndTagName(e);
							break;
						case y.SCRIPT_DATA_ESCAPE_START:
							this._stateScriptDataEscapeStart(e);
							break;
						case y.SCRIPT_DATA_ESCAPE_START_DASH:
							this._stateScriptDataEscapeStartDash(e);
							break;
						case y.SCRIPT_DATA_ESCAPED:
							this._stateScriptDataEscaped(e);
							break;
						case y.SCRIPT_DATA_ESCAPED_DASH:
							this._stateScriptDataEscapedDash(e);
							break;
						case y.SCRIPT_DATA_ESCAPED_DASH_DASH:
							this._stateScriptDataEscapedDashDash(e);
							break;
						case y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
							this._stateScriptDataEscapedLessThanSign(e);
							break;
						case y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
							this._stateScriptDataEscapedEndTagOpen(e);
							break;
						case y.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
							this._stateScriptDataEscapedEndTagName(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPE_START:
							this._stateScriptDataDoubleEscapeStart(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPED:
							this._stateScriptDataDoubleEscaped(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
							this._stateScriptDataDoubleEscapedDash(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
							this._stateScriptDataDoubleEscapedDashDash(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
							this._stateScriptDataDoubleEscapedLessThanSign(e);
							break;
						case y.SCRIPT_DATA_DOUBLE_ESCAPE_END:
							this._stateScriptDataDoubleEscapeEnd(e);
							break;
						case y.BEFORE_ATTRIBUTE_NAME:
							this._stateBeforeAttributeName(e);
							break;
						case y.ATTRIBUTE_NAME:
							this._stateAttributeName(e);
							break;
						case y.AFTER_ATTRIBUTE_NAME:
							this._stateAfterAttributeName(e);
							break;
						case y.BEFORE_ATTRIBUTE_VALUE:
							this._stateBeforeAttributeValue(e);
							break;
						case y.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
							this._stateAttributeValueDoubleQuoted(e);
							break;
						case y.ATTRIBUTE_VALUE_SINGLE_QUOTED:
							this._stateAttributeValueSingleQuoted(e);
							break;
						case y.ATTRIBUTE_VALUE_UNQUOTED:
							this._stateAttributeValueUnquoted(e);
							break;
						case y.AFTER_ATTRIBUTE_VALUE_QUOTED:
							this._stateAfterAttributeValueQuoted(e);
							break;
						case y.SELF_CLOSING_START_TAG:
							this._stateSelfClosingStartTag(e);
							break;
						case y.BOGUS_COMMENT:
							this._stateBogusComment(e);
							break;
						case y.MARKUP_DECLARATION_OPEN:
							this._stateMarkupDeclarationOpen(e);
							break;
						case y.COMMENT_START:
							this._stateCommentStart(e);
							break;
						case y.COMMENT_START_DASH:
							this._stateCommentStartDash(e);
							break;
						case y.COMMENT:
							this._stateComment(e);
							break;
						case y.COMMENT_LESS_THAN_SIGN:
							this._stateCommentLessThanSign(e);
							break;
						case y.COMMENT_LESS_THAN_SIGN_BANG:
							this._stateCommentLessThanSignBang(e);
							break;
						case y.COMMENT_LESS_THAN_SIGN_BANG_DASH:
							this._stateCommentLessThanSignBangDash(e);
							break;
						case y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
							this._stateCommentLessThanSignBangDashDash(e);
							break;
						case y.COMMENT_END_DASH:
							this._stateCommentEndDash(e);
							break;
						case y.COMMENT_END:
							this._stateCommentEnd(e);
							break;
						case y.COMMENT_END_BANG:
							this._stateCommentEndBang(e);
							break;
						case y.DOCTYPE:
							this._stateDoctype(e);
							break;
						case y.BEFORE_DOCTYPE_NAME:
							this._stateBeforeDoctypeName(e);
							break;
						case y.DOCTYPE_NAME:
							this._stateDoctypeName(e);
							break;
						case y.AFTER_DOCTYPE_NAME:
							this._stateAfterDoctypeName(e);
							break;
						case y.AFTER_DOCTYPE_PUBLIC_KEYWORD:
							this._stateAfterDoctypePublicKeyword(e);
							break;
						case y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
							this._stateBeforeDoctypePublicIdentifier(e);
							break;
						case y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
							this._stateDoctypePublicIdentifierDoubleQuoted(e);
							break;
						case y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
							this._stateDoctypePublicIdentifierSingleQuoted(e);
							break;
						case y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
							this._stateAfterDoctypePublicIdentifier(e);
							break;
						case y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
							this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
							break;
						case y.AFTER_DOCTYPE_SYSTEM_KEYWORD:
							this._stateAfterDoctypeSystemKeyword(e);
							break;
						case y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
							this._stateBeforeDoctypeSystemIdentifier(e);
							break;
						case y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
							this._stateDoctypeSystemIdentifierDoubleQuoted(e);
							break;
						case y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
							this._stateDoctypeSystemIdentifierSingleQuoted(e);
							break;
						case y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
							this._stateAfterDoctypeSystemIdentifier(e);
							break;
						case y.BOGUS_DOCTYPE:
							this._stateBogusDoctype(e);
							break;
						case y.CDATA_SECTION:
							this._stateCdataSection(e);
							break;
						case y.CDATA_SECTION_BRACKET:
							this._stateCdataSectionBracket(e);
							break;
						case y.CDATA_SECTION_END:
							this._stateCdataSectionEnd(e);
							break;
						case y.CHARACTER_REFERENCE:
							this._stateCharacterReference();
							break;
						case y.AMBIGUOUS_AMPERSAND:
							this._stateAmbiguousAmpersand(e);
							break;
						default:
							throw Error("Unknown state")
					}
				}
				_stateData(e) {
					switch (e) {
						case g.LESS_THAN_SIGN:
							this.state = y.TAG_OPEN;
							break;
						case g.AMPERSAND:
							this._startCharacterReference();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitCodePoint(e);
							break;
						case g.EOF:
							this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateRcdata(e) {
					switch (e) {
						case g.AMPERSAND:
							this._startCharacterReference();
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.RCDATA_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateRawtext(e) {
					switch (e) {
						case g.LESS_THAN_SIGN:
							this.state = y.RAWTEXT_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateScriptData(e) {
					switch (e) {
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_statePlaintext(e) {
					switch (e) {
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateTagOpen(e) {
					if (ev(e)) this._createStartTagToken(), this.state = y.TAG_NAME, this._stateTagName(e);
					else switch (e) {
						case g.EXCLAMATION_MARK:
							this.state = y.MARKUP_DECLARATION_OPEN;
							break;
						case g.SOLIDUS:
							this.state = y.END_TAG_OPEN;
							break;
						case g.QUESTION_MARK:
							this._err(A.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = y.BOGUS_COMMENT, this._stateBogusComment(e);
							break;
						case g.EOF:
							this._err(A.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
							break;
						default:
							this._err(A.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = y.DATA, this._stateData(e)
					}
				}
				_stateEndTagOpen(e) {
					if (ev(e)) this._createEndTagToken(), this.state = y.TAG_NAME, this._stateTagName(e);
					else switch (e) {
						case g.GREATER_THAN_SIGN:
							this._err(A.missingEndTagName), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
							break;
						default:
							this._err(A.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = y.BOGUS_COMMENT, this._stateBogusComment(e)
					}
				}
				_stateTagName(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.BEFORE_ATTRIBUTE_NAME;
							break;
						case g.SOLIDUS:
							this.state = y.SELF_CLOSING_START_TAG;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentTagToken();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.tagName += "�";
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							t.tagName += String.fromCodePoint(eC(e) ? e + 32 : e)
					}
				}
				_stateRcdataLessThanSign(e) {
					e === g.SOLIDUS ? this.state = y.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = y.RCDATA, this._stateRcdata(e))
				}
				_stateRcdataEndTagOpen(e) {
					ev(e) ? (this.state = y.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = y.RCDATA, this._stateRcdata(e))
				}
				handleSpecialEndTag(e) {
					if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
					switch (this._createEndTagToken(), this.currentToken.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							return this._advanceBy(this.lastStartTagName.length), this.state = y.BEFORE_ATTRIBUTE_NAME, !1;
						case g.SOLIDUS:
							return this._advanceBy(this.lastStartTagName.length), this.state = y.SELF_CLOSING_START_TAG, !1;
						case g.GREATER_THAN_SIGN:
							return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = y.DATA, !1;
						default:
							return !this._ensureHibernation()
					}
				}
				_stateRcdataEndTagName(e) {
					this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = y.RCDATA, this._stateRcdata(e))
				}
				_stateRawtextLessThanSign(e) {
					e === g.SOLIDUS ? this.state = y.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = y.RAWTEXT, this._stateRawtext(e))
				}
				_stateRawtextEndTagOpen(e) {
					ev(e) ? (this.state = y.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = y.RAWTEXT, this._stateRawtext(e))
				}
				_stateRawtextEndTagName(e) {
					this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = y.RAWTEXT, this._stateRawtext(e))
				}
				_stateScriptDataLessThanSign(e) {
					switch (e) {
						case g.SOLIDUS:
							this.state = y.SCRIPT_DATA_END_TAG_OPEN;
							break;
						case g.EXCLAMATION_MARK:
							this.state = y.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
							break;
						default:
							this._emitChars("<"), this.state = y.SCRIPT_DATA, this._stateScriptData(e)
					}
				}
				_stateScriptDataEndTagOpen(e) {
					ev(e) ? (this.state = y.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = y.SCRIPT_DATA, this._stateScriptData(e))
				}
				_stateScriptDataEndTagName(e) {
					this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = y.SCRIPT_DATA, this._stateScriptData(e))
				}
				_stateScriptDataEscapeStart(e) {
					e === g.HYPHEN_MINUS ? (this.state = y.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = y.SCRIPT_DATA, this._stateScriptData(e))
				}
				_stateScriptDataEscapeStartDash(e) {
					e === g.HYPHEN_MINUS ? (this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = y.SCRIPT_DATA, this._stateScriptData(e))
				}
				_stateScriptDataEscaped(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateScriptDataEscapedDash(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.state = y.SCRIPT_DATA_ESCAPED, this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this.state = y.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e)
					}
				}
				_stateScriptDataEscapedDashDash(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.SCRIPT_DATA, this._emitChars(">");
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.state = y.SCRIPT_DATA_ESCAPED, this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this.state = y.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e)
					}
				}
				_stateScriptDataEscapedLessThanSign(e) {
					e === g.SOLIDUS ? this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : ev(e) ? (this._emitChars("<"), this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = y.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
				}
				_stateScriptDataEscapedEndTagOpen(e) {
					ev(e) ? (this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = y.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
				}
				_stateScriptDataEscapedEndTagName(e) {
					this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = y.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
				}
				_stateScriptDataDoubleEscapeStart(e) {
					if (this.preprocessor.startsWith(eh, !1) && eR(this.preprocessor.peek(eh.length))) {
						this._emitCodePoint(e);
						for (var t = 0; t < eh.length; t++) this._emitCodePoint(this._consume());
						this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED
					} else this._ensureHibernation() || (this.state = y.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e))
				}
				_stateScriptDataDoubleEscaped(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateScriptDataDoubleEscapedDash(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e)
					}
				}
				_stateScriptDataDoubleEscapedDashDash(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this._emitChars("-");
							break;
						case g.LESS_THAN_SIGN:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.SCRIPT_DATA, this._emitChars(">");
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
							break;
						case g.EOF:
							this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
							break;
						default:
							this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e)
					}
				}
				_stateScriptDataDoubleEscapedLessThanSign(e) {
					e === g.SOLIDUS ? (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e))
				}
				_stateScriptDataDoubleEscapeEnd(e) {
					if (this.preprocessor.startsWith(eh, !1) && eR(this.preprocessor.peek(eh.length))) {
						this._emitCodePoint(e);
						for (var t = 0; t < eh.length; t++) this._emitCodePoint(this._consume());
						this.state = y.SCRIPT_DATA_ESCAPED
					} else this._ensureHibernation() || (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e))
				}
				_stateBeforeAttributeName(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.SOLIDUS:
						case g.GREATER_THAN_SIGN:
						case g.EOF:
							this.state = y.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
							break;
						case g.EQUALS_SIGN:
							this._err(A.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = y.ATTRIBUTE_NAME;
							break;
						default:
							this._createAttr(""), this.state = y.ATTRIBUTE_NAME, this._stateAttributeName(e)
					}
				}
				_stateAttributeName(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
						case g.SOLIDUS:
						case g.GREATER_THAN_SIGN:
						case g.EOF:
							this._leaveAttrName(), this.state = y.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
							break;
						case g.EQUALS_SIGN:
							this._leaveAttrName(), this.state = y.BEFORE_ATTRIBUTE_VALUE;
							break;
						case g.QUOTATION_MARK:
						case g.APOSTROPHE:
						case g.LESS_THAN_SIGN:
							this._err(A.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.currentAttr.name += "�";
							break;
						default:
							this.currentAttr.name += String.fromCodePoint(eC(e) ? e + 32 : e)
					}
				}
				_stateAfterAttributeName(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.SOLIDUS:
							this.state = y.SELF_CLOSING_START_TAG;
							break;
						case g.EQUALS_SIGN:
							this.state = y.BEFORE_ATTRIBUTE_VALUE;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentTagToken();
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this._createAttr(""), this.state = y.ATTRIBUTE_NAME, this._stateAttributeName(e)
					}
				}
				_stateBeforeAttributeValue(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.QUOTATION_MARK:
							this.state = y.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							this.state = y.ATTRIBUTE_VALUE_SINGLE_QUOTED;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingAttributeValue), this.state = y.DATA, this.emitCurrentTagToken();
							break;
						default:
							this.state = y.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e)
					}
				}
				_stateAttributeValueDoubleQuoted(e) {
					switch (e) {
						case g.QUOTATION_MARK:
							this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
							break;
						case g.AMPERSAND:
							this._startCharacterReference();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.currentAttr.value += "�";
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this.currentAttr.value += String.fromCodePoint(e)
					}
				}
				_stateAttributeValueSingleQuoted(e) {
					switch (e) {
						case g.APOSTROPHE:
							this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
							break;
						case g.AMPERSAND:
							this._startCharacterReference();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.currentAttr.value += "�";
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this.currentAttr.value += String.fromCodePoint(e)
					}
				}
				_stateAttributeValueUnquoted(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this._leaveAttrValue(), this.state = y.BEFORE_ATTRIBUTE_NAME;
							break;
						case g.AMPERSAND:
							this._startCharacterReference();
							break;
						case g.GREATER_THAN_SIGN:
							this._leaveAttrValue(), this.state = y.DATA, this.emitCurrentTagToken();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this.currentAttr.value += "�";
							break;
						case g.QUOTATION_MARK:
						case g.APOSTROPHE:
						case g.LESS_THAN_SIGN:
						case g.EQUALS_SIGN:
						case g.GRAVE_ACCENT:
							this._err(A.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this.currentAttr.value += String.fromCodePoint(e)
					}
				}
				_stateAfterAttributeValueQuoted(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this._leaveAttrValue(), this.state = y.BEFORE_ATTRIBUTE_NAME;
							break;
						case g.SOLIDUS:
							this._leaveAttrValue(), this.state = y.SELF_CLOSING_START_TAG;
							break;
						case g.GREATER_THAN_SIGN:
							this._leaveAttrValue(), this.state = y.DATA, this.emitCurrentTagToken();
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this._err(A.missingWhitespaceBetweenAttributes), this.state = y.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e)
					}
				}
				_stateSelfClosingStartTag(e) {
					switch (e) {
						case g.GREATER_THAN_SIGN:
							this.currentToken.selfClosing = !0, this.state = y.DATA, this.emitCurrentTagToken();
							break;
						case g.EOF:
							this._err(A.eofInTag), this._emitEOFToken();
							break;
						default:
							this._err(A.unexpectedSolidusInTag), this.state = y.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e)
					}
				}
				_stateBogusComment(e) {
					var t = this.currentToken;
					switch (e) {
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentComment(t);
							break;
						case g.EOF:
							this.emitCurrentComment(t), this._emitEOFToken();
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.data += "�";
							break;
						default:
							t.data += String.fromCodePoint(e)
					}
				}
				_stateMarkupDeclarationOpen(e) {
					this._consumeSequenceIfMatch("--", !0) ? (this._createCommentToken(3), this.state = y.COMMENT_START) : this._consumeSequenceIfMatch(eu, !1) ? (this.currentLocation = this.getCurrentLocation(eu.length + 1), this.state = y.DOCTYPE) : this._consumeSequenceIfMatch(el, !0) ? this.inForeignNode ? this.state = y.CDATA_SECTION : (this._err(A.cdataInHtmlContent), this._createCommentToken(el.length + 1), this.currentToken.data = "[CDATA[", this.state = y.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(A.incorrectlyOpenedComment), this._createCommentToken(2), this.state = y.BOGUS_COMMENT, this._stateBogusComment(e))
				}
				_stateCommentStart(e) {
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.COMMENT_START_DASH;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptClosingOfEmptyComment), this.state = y.DATA;
							var t = this.currentToken;
							this.emitCurrentComment(t);
							break;
						default:
							this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateCommentStartDash(e) {
					var t = this.currentToken;
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.COMMENT_END;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptClosingOfEmptyComment), this.state = y.DATA, this.emitCurrentComment(t);
							break;
						case g.EOF:
							this._err(A.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
							break;
						default:
							t.data += "-", this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateComment(e) {
					var t = this.currentToken;
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.COMMENT_END_DASH;
							break;
						case g.LESS_THAN_SIGN:
							t.data += "<", this.state = y.COMMENT_LESS_THAN_SIGN;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.data += "�";
							break;
						case g.EOF:
							this._err(A.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
							break;
						default:
							t.data += String.fromCodePoint(e)
					}
				}
				_stateCommentLessThanSign(e) {
					var t = this.currentToken;
					switch (e) {
						case g.EXCLAMATION_MARK:
							t.data += "!", this.state = y.COMMENT_LESS_THAN_SIGN_BANG;
							break;
						case g.LESS_THAN_SIGN:
							t.data += "<";
							break;
						default:
							this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateCommentLessThanSignBang(e) {
					e === g.HYPHEN_MINUS ? this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = y.COMMENT, this._stateComment(e))
				}
				_stateCommentLessThanSignBangDash(e) {
					e === g.HYPHEN_MINUS ? this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = y.COMMENT_END_DASH, this._stateCommentEndDash(e))
				}
				_stateCommentLessThanSignBangDashDash(e) {
					e !== g.GREATER_THAN_SIGN && e !== g.EOF && this._err(A.nestedComment), this.state = y.COMMENT_END, this._stateCommentEnd(e)
				}
				_stateCommentEndDash(e) {
					var t = this.currentToken;
					switch (e) {
						case g.HYPHEN_MINUS:
							this.state = y.COMMENT_END;
							break;
						case g.EOF:
							this._err(A.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
							break;
						default:
							t.data += "-", this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateCommentEnd(e) {
					var t = this.currentToken;
					switch (e) {
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentComment(t);
							break;
						case g.EXCLAMATION_MARK:
							this.state = y.COMMENT_END_BANG;
							break;
						case g.HYPHEN_MINUS:
							t.data += "-";
							break;
						case g.EOF:
							this._err(A.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
							break;
						default:
							t.data += "--", this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateCommentEndBang(e) {
					var t = this.currentToken;
					switch (e) {
						case g.HYPHEN_MINUS:
							t.data += "--!", this.state = y.COMMENT_END_DASH;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.incorrectlyClosedComment), this.state = y.DATA, this.emitCurrentComment(t);
							break;
						case g.EOF:
							this._err(A.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
							break;
						default:
							t.data += "--!", this.state = y.COMMENT, this._stateComment(e)
					}
				}
				_stateDoctype(e) {
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.BEFORE_DOCTYPE_NAME;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), this._createDoctypeToken(null);
							var t = this.currentToken;
							t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingWhitespaceBeforeDoctypeName), this.state = y.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e)
					}
				}
				_stateBeforeDoctypeName(e) {
					if (eC(e)) this._createDoctypeToken(String.fromCharCode(e + 32)), this.state = y.DOCTYPE_NAME;
					else switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = y.DOCTYPE_NAME;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingDoctypeName), this._createDoctypeToken(null);
							var t = this.currentToken;
							t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), this._createDoctypeToken(null);
							var n = this.currentToken;
							n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
							break;
						default:
							this._createDoctypeToken(String.fromCodePoint(e)), this.state = y.DOCTYPE_NAME
					}
				}
				_stateDoctypeName(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.AFTER_DOCTYPE_NAME;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.name += "�";
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							t.name += String.fromCodePoint(eC(e) ? e + 32 : e)
					}
				}
				_stateAfterDoctypeName(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._consumeSequenceIfMatch("public", !1) ? this.state = y.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch("system", !1) ? this.state = y.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(A.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e))
					}
				}
				_stateAfterDoctypePublicKeyword(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
							break;
						case g.QUOTATION_MARK:
							this._err(A.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							this._err(A.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateBeforeDoctypePublicIdentifier(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.QUOTATION_MARK:
							t.publicId = "", this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							t.publicId = "", this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateDoctypePublicIdentifierDoubleQuoted(e) {
					var t = this.currentToken;
					switch (e) {
						case g.QUOTATION_MARK:
							this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.publicId += "�";
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							t.publicId += String.fromCodePoint(e)
					}
				}
				_stateDoctypePublicIdentifierSingleQuoted(e) {
					var t = this.currentToken;
					switch (e) {
						case g.APOSTROPHE:
							this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.publicId += "�";
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							t.publicId += String.fromCodePoint(e)
					}
				}
				_stateAfterDoctypePublicIdentifier(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
							break;
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.QUOTATION_MARK:
							this._err(A.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							this._err(A.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.GREATER_THAN_SIGN:
							this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.QUOTATION_MARK:
							t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateAfterDoctypeSystemKeyword(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							this.state = y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
							break;
						case g.QUOTATION_MARK:
							this._err(A.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							this._err(A.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateBeforeDoctypeSystemIdentifier(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.QUOTATION_MARK:
							t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
							break;
						case g.APOSTROPHE:
							t.systemId = "", this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.DATA, this.emitCurrentDoctype(t);
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateDoctypeSystemIdentifierDoubleQuoted(e) {
					var t = this.currentToken;
					switch (e) {
						case g.QUOTATION_MARK:
							this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.systemId += "�";
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							t.systemId += String.fromCodePoint(e)
					}
				}
				_stateDoctypeSystemIdentifierSingleQuoted(e) {
					var t = this.currentToken;
					switch (e) {
						case g.APOSTROPHE:
							this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter), t.systemId += "�";
							break;
						case g.GREATER_THAN_SIGN:
							this._err(A.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							t.systemId += String.fromCodePoint(e)
					}
				}
				_stateAfterDoctypeSystemIdentifier(e) {
					var t = this.currentToken;
					switch (e) {
						case g.SPACE:
						case g.LINE_FEED:
						case g.TABULATION:
						case g.FORM_FEED:
							break;
						case g.GREATER_THAN_SIGN:
							this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.EOF:
							this._err(A.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
							break;
						default:
							this._err(A.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = y.BOGUS_DOCTYPE, this._stateBogusDoctype(e)
					}
				}
				_stateBogusDoctype(e) {
					var t = this.currentToken;
					switch (e) {
						case g.GREATER_THAN_SIGN:
							this.emitCurrentDoctype(t), this.state = y.DATA;
							break;
						case g.NULL:
							this._err(A.unexpectedNullCharacter);
							break;
						case g.EOF:
							this.emitCurrentDoctype(t), this._emitEOFToken()
					}
				}
				_stateCdataSection(e) {
					switch (e) {
						case g.RIGHT_SQUARE_BRACKET:
							this.state = y.CDATA_SECTION_BRACKET;
							break;
						case g.EOF:
							this._err(A.eofInCdata), this._emitEOFToken();
							break;
						default:
							this._emitCodePoint(e)
					}
				}
				_stateCdataSectionBracket(e) {
					e === g.RIGHT_SQUARE_BRACKET ? this.state = y.CDATA_SECTION_END : (this._emitChars("]"), this.state = y.CDATA_SECTION, this._stateCdataSection(e))
				}
				_stateCdataSectionEnd(e) {
					switch (e) {
						case g.GREATER_THAN_SIGN:
							this.state = y.DATA;
							break;
						case g.RIGHT_SQUARE_BRACKET:
							this._emitChars("]");
							break;
						default:
							this._emitChars("]]"), this.state = y.CDATA_SECTION, this._stateCdataSection(e)
					}
				}
				_stateCharacterReference() {
					var e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
					if (e < 0)
						if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
						else {
							this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
							return
						} 0 === e ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(g.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && eD(this.preprocessor.peek(1)) ? y.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState
				}
				_stateAmbiguousAmpersand(e) {
					eD(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === g.SEMICOLON && this._err(A.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e))
				}
			}
			var eP = new Set([D.DD, D.DT, D.LI, D.OPTGROUP, D.OPTION, D.P, D.RB, D.RP, D.RT, D.RTC]),
				eM = new Set([...eP, D.CAPTION, D.COLGROUP, D.TBODY, D.TD, D.TFOOT, D.TH, D.THEAD, D.TR]),
				ex = new Set([D.APPLET, D.CAPTION, D.HTML, D.MARQUEE, D.OBJECT, D.TABLE, D.TD, D.TEMPLATE, D.TH]),
				ew = new Set([...ex, D.OL, D.UL]),
				eB = new Set([...ex, D.BUTTON]),
				eF = new Set([D.ANNOTATION_XML, D.MI, D.MN, D.MO, D.MS, D.MTEXT]),
				eH = new Set([D.DESC, D.FOREIGN_OBJECT, D.TITLE]),
				eU = new Set([D.TR, D.TEMPLATE, D.HTML]),
				eG = new Set([D.TBODY, D.TFOOT, D.THEAD, D.TEMPLATE, D.HTML]),
				ej = new Set([D.TABLE, D.TEMPLATE, D.HTML]),
				eY = new Set([D.TD, D.TH]);
			class ez {
				get currentTmplContentOrNode() {
					return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current
				}
				constructor(e, t, n) {
					this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = D.UNKNOWN, this.current = e
				}
				_indexOf(e) {
					return this.items.lastIndexOf(e, this.stackTop)
				}
				_isInTemplate() {
					return this.currentTagId === D.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === k.HTML
				}
				_updateCurrentElement() {
					this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop]
				}
				push(e, t) {
					this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0)
				}
				pop() {
					var e = this.current;
					this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0)
				}
				replace(e, t) {
					var n = this._indexOf(e);
					this.items[n] = t, n === this.stackTop && (this.current = t)
				}
				insertAfter(e, t, n) {
					var r = this._indexOf(e) + 1;
					this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && void 0 !== this.currentTagId && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop)
				}
				popUntilTagNamePopped(e) {
					var t = this.stackTop + 1;
					do t = this.tagIDs.lastIndexOf(e, t - 1); while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== k.HTML);
					this.shortenToLength(Math.max(t, 0))
				}
				shortenToLength(e) {
					for (; this.stackTop >= e;) {
						var t = this.current;
						this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e)
					}
				}
				popUntilElementPopped(e) {
					var t = this._indexOf(e);
					this.shortenToLength(Math.max(t, 0))
				}
				popUntilPopped(e, t) {
					var n = this._indexOfTagNames(e, t);
					this.shortenToLength(Math.max(n, 0))
				}
				popUntilNumberedHeaderPopped() {
					this.popUntilPopped(ek, k.HTML)
				}
				popUntilTableCellPopped() {
					this.popUntilPopped(eY, k.HTML)
				}
				popAllUpToHtmlElement() {
					this.tmplCount = 0, this.shortenToLength(1)
				}
				_indexOfTagNames(e, t) {
					for (var n = this.stackTop; n >= 0; n--)
						if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
					return -1
				}
				clearBackTo(e, t) {
					var n = this._indexOfTagNames(e, t);
					this.shortenToLength(n + 1)
				}
				clearBackToTableContext() {
					this.clearBackTo(ej, k.HTML)
				}
				clearBackToTableBodyContext() {
					this.clearBackTo(eG, k.HTML)
				}
				clearBackToTableRowContext() {
					this.clearBackTo(eU, k.HTML)
				}
				remove(e) {
					var t = this._indexOf(e);
					t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)))
				}
				tryPeekProperlyNestedBodyElement() {
					return this.stackTop >= 1 && this.tagIDs[1] === D.BODY ? this.items[1] : null
				}
				contains(e) {
					return this._indexOf(e) > -1
				}
				getCommonAncestor(e) {
					var t = this._indexOf(e) - 1;
					return t >= 0 ? this.items[t] : null
				}
				isRootHtmlElementCurrent() {
					return 0 === this.stackTop && this.tagIDs[0] === D.HTML
				}
				hasInDynamicScope(e, t) {
					for (var n = this.stackTop; n >= 0; n--) {
						var r = this.tagIDs[n];
						switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
							case k.HTML:
								if (r === e) return !0;
								if (t.has(r)) return !1;
								break;
							case k.SVG:
								if (eH.has(r)) return !1;
								break;
							case k.MATHML:
								if (eF.has(r)) return !1
						}
					}
					return !0
				}
				hasInScope(e) {
					return this.hasInDynamicScope(e, ex)
				}
				hasInListItemScope(e) {
					return this.hasInDynamicScope(e, ew)
				}
				hasInButtonScope(e) {
					return this.hasInDynamicScope(e, eB)
				}
				hasNumberedHeaderInScope() {
					for (var e = this.stackTop; e >= 0; e--) {
						var t = this.tagIDs[e];
						switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
							case k.HTML:
								if (ek.has(t)) return !0;
								if (ex.has(t)) return !1;
								break;
							case k.SVG:
								if (eH.has(t)) return !1;
								break;
							case k.MATHML:
								if (eF.has(t)) return !1
						}
					}
					return !0
				}
				hasInTableScope(e) {
					for (var t = this.stackTop; t >= 0; t--)
						if (this.treeAdapter.getNamespaceURI(this.items[t]) === k.HTML) switch (this.tagIDs[t]) {
							case e:
								return !0;
							case D.TABLE:
							case D.HTML:
								return !1
						}
					return !0
				}
				hasTableBodyContextInTableScope() {
					for (var e = this.stackTop; e >= 0; e--)
						if (this.treeAdapter.getNamespaceURI(this.items[e]) === k.HTML) switch (this.tagIDs[e]) {
							case D.TBODY:
							case D.THEAD:
							case D.TFOOT:
								return !0;
							case D.TABLE:
							case D.HTML:
								return !1
						}
					return !0
				}
				hasInSelectScope(e) {
					for (var t = this.stackTop; t >= 0; t--)
						if (this.treeAdapter.getNamespaceURI(this.items[t]) === k.HTML) switch (this.tagIDs[t]) {
							case e:
								return !0;
							case D.OPTION:
							case D.OPTGROUP:
								break;
							default:
								return !1
						}
					return !0
				}
				generateImpliedEndTags() {
					for (; void 0 !== this.currentTagId && eP.has(this.currentTagId);) this.pop()
				}
				generateImpliedEndTagsThoroughly() {
					for (; void 0 !== this.currentTagId && eM.has(this.currentTagId);) this.pop()
				}
				generateImpliedEndTagsWithExclusion(e) {
					for (; void 0 !== this.currentTagId && this.currentTagId !== e && eM.has(this.currentTagId);) this.pop()
				}
			}(E = R || (R = {}))[E.Marker = 0] = "Marker", E[E.Element = 1] = "Element";
			var eW = {
				type: R.Marker
			};
			class eq {
				constructor(e) {
					this.treeAdapter = e, this.entries = [], this.bookmark = null
				}
				_getNoahArkConditionCandidates(e, t) {
					for (var n = [], r = t.length, a = this.treeAdapter.getTagName(e), i = this.treeAdapter.getNamespaceURI(e), s = 0; s < this.entries.length; s++) {
						var o = this.entries[s];
						if (o.type === R.Marker) break;
						var {
							element: c
						} = o;
						if (this.treeAdapter.getTagName(c) === a && this.treeAdapter.getNamespaceURI(c) === i) {
							var l = this.treeAdapter.getAttrList(c);
							l.length === r && n.push({
								idx: s,
								attrs: l
							})
						}
					}
					return n
				}
				_ensureNoahArkCondition(e) {
					if (!(this.entries.length < 3)) {
						var t = this.treeAdapter.getAttrList(e),
							n = this._getNoahArkConditionCandidates(e, t);
						if (!(n.length < 3))
							for (var r = new Map(t.map(e => [e.name, e.value])), a = 0, i = 0; i < n.length; i++) {
								var s = n[i];
								s.attrs.every(e => r.get(e.name) === e.value) && (a += 1) >= 3 && this.entries.splice(s.idx, 1)
							}
					}
				}
				insertMarker() {
					this.entries.unshift(eW)
				}
				pushElement(e, t) {
					this._ensureNoahArkCondition(e), this.entries.unshift({
						type: R.Element,
						element: e,
						token: t
					})
				}
				insertElementAfterBookmark(e, t) {
					var n = this.entries.indexOf(this.bookmark);
					this.entries.splice(n, 0, {
						type: R.Element,
						element: e,
						token: t
					})
				}
				removeEntry(e) {
					var t = this.entries.indexOf(e); - 1 !== t && this.entries.splice(t, 1)
				}
				clearToLastMarker() {
					var e = this.entries.indexOf(eW); - 1 === e ? this.entries.length = 0 : this.entries.splice(0, e + 1)
				}
				getElementEntryInScopeWithTagName(e) {
					var t = this.entries.find(t => t.type === R.Marker || this.treeAdapter.getTagName(t.element) === e);
					return t && t.type === R.Element ? t : null
				}
				getElementEntry(e) {
					return this.entries.find(t => t.type === R.Element && t.element === e)
				}
			}

			function eV(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function eQ(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eV(Object(n), !0).forEach(function(t) {
						(0, P.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eV(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var eK = {
					createDocument: () => ({
						nodeName: "#document",
						mode: C.NO_QUIRKS,
						childNodes: []
					}),
					createDocumentFragment: () => ({
						nodeName: "#document-fragment",
						childNodes: []
					}),
					createElement: (e, t, n) => ({
						nodeName: e,
						tagName: e,
						attrs: n,
						namespaceURI: t,
						childNodes: [],
						parentNode: null
					}),
					createCommentNode: e => ({
						nodeName: "#comment",
						data: e,
						parentNode: null
					}),
					createTextNode: e => ({
						nodeName: "#text",
						value: e,
						parentNode: null
					}),
					appendChild(e, t) {
						e.childNodes.push(t), t.parentNode = e
					},
					insertBefore(e, t, n) {
						var r = e.childNodes.indexOf(n);
						e.childNodes.splice(r, 0, t), t.parentNode = e
					},
					setTemplateContent(e, t) {
						e.content = t
					},
					getTemplateContent: e => e.content,
					setDocumentType(e, t, n, r) {
						var a = e.childNodes.find(e => "#documentType" === e.nodeName);
						a ? (a.name = t, a.publicId = n, a.systemId = r) : eK.appendChild(e, {
							nodeName: "#documentType",
							name: t,
							publicId: n,
							systemId: r,
							parentNode: null
						})
					},
					setDocumentMode(e, t) {
						e.mode = t
					},
					getDocumentMode: e => e.mode,
					detachNode(e) {
						if (e.parentNode) {
							var t = e.parentNode.childNodes.indexOf(e);
							e.parentNode.childNodes.splice(t, 1), e.parentNode = null
						}
					},
					insertText(e, t) {
						if (e.childNodes.length > 0) {
							var n = e.childNodes[e.childNodes.length - 1];
							if (eK.isTextNode(n)) {
								n.value += t;
								return
							}
						}
						eK.appendChild(e, eK.createTextNode(t))
					},
					insertTextBefore(e, t, n) {
						var r = e.childNodes[e.childNodes.indexOf(n) - 1];
						r && eK.isTextNode(r) ? r.value += t : eK.insertBefore(e, eK.createTextNode(t), n)
					},
					adoptAttributes(e, t) {
						for (var n = new Set(e.attrs.map(e => e.name)), r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r])
					},
					getFirstChild: e => e.childNodes[0],
					getChildNodes: e => e.childNodes,
					getParentNode: e => e.parentNode,
					getAttrList: e => e.attrs,
					getTagName: e => e.tagName,
					getNamespaceURI: e => e.namespaceURI,
					getTextNodeContent: e => e.value,
					getCommentNodeContent: e => e.data,
					getDocumentTypeNodeName: e => e.name,
					getDocumentTypeNodePublicId: e => e.publicId,
					getDocumentTypeNodeSystemId: e => e.systemId,
					isTextNode: e => "#text" === e.nodeName,
					isCommentNode: e => "#comment" === e.nodeName,
					isDocumentTypeNode: e => "#documentType" === e.nodeName,
					isElementNode: e => Object.prototype.hasOwnProperty.call(e, "tagName"),
					setNodeSourceCodeLocation(e, t) {
						e.sourceCodeLocation = t
					},
					getNodeSourceCodeLocation: e => e.sourceCodeLocation,
					updateNodeSourceCodeLocation(e, t) {
						e.sourceCodeLocation = eQ(eQ({}, e.sourceCodeLocation), t)
					}
				},
				eX = "html",
				eJ = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
				eZ = [...eJ, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"],
				e$ = new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]),
				e0 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
				e1 = [...e0, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];

			function e2(e, t) {
				return t.some(t => e.startsWith(t))
			}
			var e3 = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(e => [e.toLowerCase(), e])),
				e4 = new Map([
					["xlink:actuate", {
						prefix: "xlink",
						name: "actuate",
						namespace: k.XLINK
					}],
					["xlink:arcrole", {
						prefix: "xlink",
						name: "arcrole",
						namespace: k.XLINK
					}],
					["xlink:href", {
						prefix: "xlink",
						name: "href",
						namespace: k.XLINK
					}],
					["xlink:role", {
						prefix: "xlink",
						name: "role",
						namespace: k.XLINK
					}],
					["xlink:show", {
						prefix: "xlink",
						name: "show",
						namespace: k.XLINK
					}],
					["xlink:title", {
						prefix: "xlink",
						name: "title",
						namespace: k.XLINK
					}],
					["xlink:type", {
						prefix: "xlink",
						name: "type",
						namespace: k.XLINK
					}],
					["xml:lang", {
						prefix: "xml",
						name: "lang",
						namespace: k.XML
					}],
					["xml:space", {
						prefix: "xml",
						name: "space",
						namespace: k.XML
					}],
					["xmlns", {
						prefix: "",
						name: "xmlns",
						namespace: k.XMLNS
					}],
					["xmlns:xlink", {
						prefix: "xmlns",
						name: "xlink",
						namespace: k.XMLNS
					}]
				]),
				e5 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(e => [e.toLowerCase(), e])),
				e9 = new Set([D.B, D.BIG, D.BLOCKQUOTE, D.BODY, D.BR, D.CENTER, D.CODE, D.DD, D.DIV, D.DL, D.DT, D.EM, D.EMBED, D.H1, D.H2, D.H3, D.H4, D.H5, D.H6, D.HEAD, D.HR, D.I, D.IMG, D.LI, D.LISTING, D.MENU, D.META, D.NOBR, D.OL, D.P, D.PRE, D.RUBY, D.S, D.SMALL, D.SPAN, D.STRONG, D.STRIKE, D.SUB, D.SUP, D.TABLE, D.TT, D.U, D.UL, D.VAR]);

			function e6(e) {
				for (var t = 0; t < e.attrs.length; t++)
					if ("definitionurl" === e.attrs[t].name) {
						e.attrs[t].name = "definitionURL";
						break
					}
			}

			function e7(e) {
				for (var t = 0; t < e.attrs.length; t++) {
					var n = e3.get(e.attrs[t].name);
					null != n && (e.attrs[t].name = n)
				}
			}

			function e8(e) {
				for (var t = 0; t < e.attrs.length; t++) {
					var n = e4.get(e.attrs[t].name);
					n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace)
				}
			}

			function te(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function tt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? te(Object(n), !0).forEach(function(t) {
						(0, P.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}(T = L || (L = {}))[T.INITIAL = 0] = "INITIAL", T[T.BEFORE_HTML = 1] = "BEFORE_HTML", T[T.BEFORE_HEAD = 2] = "BEFORE_HEAD", T[T.IN_HEAD = 3] = "IN_HEAD", T[T.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", T[T.AFTER_HEAD = 5] = "AFTER_HEAD", T[T.IN_BODY = 6] = "IN_BODY", T[T.TEXT = 7] = "TEXT", T[T.IN_TABLE = 8] = "IN_TABLE", T[T.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", T[T.IN_CAPTION = 10] = "IN_CAPTION", T[T.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", T[T.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", T[T.IN_ROW = 13] = "IN_ROW", T[T.IN_CELL = 14] = "IN_CELL", T[T.IN_SELECT = 15] = "IN_SELECT", T[T.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", T[T.IN_TEMPLATE = 17] = "IN_TEMPLATE", T[T.AFTER_BODY = 18] = "AFTER_BODY", T[T.IN_FRAMESET = 19] = "IN_FRAMESET", T[T.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", T[T.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", T[T.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
			var tn = {
					startLine: -1,
					startCol: -1,
					startOffset: -1,
					endLine: -1,
					endCol: -1,
					endOffset: -1
				},
				tr = new Set([D.TABLE, D.TBODY, D.TFOOT, D.THEAD, D.TR]),
				ta = {
					scriptingEnabled: !0,
					sourceCodeLocationInfo: !1,
					treeAdapter: eK,
					onParseError: null
				};
			class ti {
				constructor(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
					this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = L.INITIAL, this.originalInsertionMode = L.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = tt(tt({}, ta), e), this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = null != t ? t : this.treeAdapter.createDocument(), this.tokenizer = new eL(this.options, this), this.activeFormattingElements = new eq(this.treeAdapter), this.fragmentContextID = n ? eO(this.treeAdapter.getTagName(n)) : D.UNKNOWN, this._setContextModes(null != n ? n : this.document, this.fragmentContextID), this.openElements = new ez(this.document, this.treeAdapter, this)
				}
				static parse(e, t) {
					var n = new this(t);
					return n.tokenizer.write(e, !0), n.document
				}
				static getFragmentParser(e, t) {
					var n = tt(tt({}, ta), t);
					null != e || (e = n.treeAdapter.createElement(v.TEMPLATE, k.HTML, []));
					var r = n.treeAdapter.createElement("documentmock", k.HTML, []),
						a = new this(n, r, e);
					return a.fragmentContextID === D.TEMPLATE && a.tmplInsertionModeStack.unshift(L.IN_TEMPLATE), a._initTokenizerForFragmentParsing(), a._insertFakeRootElement(), a._resetInsertionMode(), a._findFormInFragmentContext(), a
				}
				getFragment() {
					var e = this.treeAdapter.getFirstChild(this.document),
						t = this.treeAdapter.createDocumentFragment();
					return this._adoptNodes(e, t), t
				}
				_err(e, t, n) {
					if (this.onParseError) {
						var r, a = null != (r = e.location) ? r : tn,
							i = {
								code: t,
								startLine: a.startLine,
								startCol: a.startCol,
								startOffset: a.startOffset,
								endLine: n ? a.startLine : a.endLine,
								endCol: n ? a.startCol : a.endCol,
								endOffset: n ? a.startOffset : a.endOffset
							};
						this.onParseError(i)
					}
				}
				onItemPush(e, t, n) {
					var r, a;
					null == (a = (r = this.treeAdapter).onItemPush) || a.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t)
				}
				onItemPop(e, t) {
					var n, r, a, i;
					this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), null == (r = (n = this.treeAdapter).onItemPop) || r.call(n, e, this.openElements.current), t && (0 === this.openElements.stackTop && this.fragmentContext ? (a = this.fragmentContext, i = this.fragmentContextID) : {
						current: a,
						currentTagId: i
					} = this.openElements, this._setContextModes(a, i))
				}
				_setContextModes(e, t) {
					var n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === k.HTML;
					this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && void 0 !== e && void 0 !== t && !this._isIntegrationPoint(t, e)
				}
				_switchToTextParsing(e, t) {
					this._insertElement(e, k.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = L.TEXT
				}
				switchToPlaintextParsing() {
					this.insertionMode = L.TEXT, this.originalInsertionMode = L.IN_BODY, this.tokenizer.state = eb.PLAINTEXT
				}
				_getAdjustedCurrentElement() {
					return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current
				}
				_findFormInFragmentContext() {
					for (var e = this.fragmentContext; e;) {
						if (this.treeAdapter.getTagName(e) === v.FORM) {
							this.formElement = e;
							break
						}
						e = this.treeAdapter.getParentNode(e)
					}
				}
				_initTokenizerForFragmentParsing() {
					if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === k.HTML) switch (this.fragmentContextID) {
						case D.TITLE:
						case D.TEXTAREA:
							this.tokenizer.state = eb.RCDATA;
							break;
						case D.STYLE:
						case D.XMP:
						case D.IFRAME:
						case D.NOEMBED:
						case D.NOFRAMES:
						case D.NOSCRIPT:
							this.tokenizer.state = eb.RAWTEXT;
							break;
						case D.SCRIPT:
							this.tokenizer.state = eb.SCRIPT_DATA;
							break;
						case D.PLAINTEXT:
							this.tokenizer.state = eb.PLAINTEXT
					}
				}
				_setDocumentType(e) {
					var t = e.name || "",
						n = e.publicId || "",
						r = e.systemId || "";
					if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
						var a = this.treeAdapter.getChildNodes(this.document).find(e => this.treeAdapter.isDocumentTypeNode(e));
						a && this.treeAdapter.setNodeSourceCodeLocation(a, e.location)
					}
				}
				_attachElementToTree(e, t) {
					if (this.options.sourceCodeLocationInfo) {
						var n = t && tt(tt({}, t), {}, {
							startTag: t
						});
						this.treeAdapter.setNodeSourceCodeLocation(e, n)
					}
					if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
					else {
						var r = this.openElements.currentTmplContentOrNode;
						this.treeAdapter.appendChild(null != r ? r : this.document, e)
					}
				}
				_appendElement(e, t) {
					var n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
					this._attachElementToTree(n, e.location)
				}
				_insertElement(e, t) {
					var n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
					this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID)
				}
				_insertFakeElement(e, t) {
					var n = this.treeAdapter.createElement(e, k.HTML, []);
					this._attachElementToTree(n, null), this.openElements.push(n, t)
				}
				_insertTemplate(e) {
					var t = this.treeAdapter.createElement(e.tagName, k.HTML, e.attrs),
						n = this.treeAdapter.createDocumentFragment();
					this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null)
				}
				_insertFakeRootElement() {
					var e = this.treeAdapter.createElement(v.HTML, k.HTML, []);
					this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, D.HTML)
				}
				_appendCommentNode(e, t) {
					var n = this.treeAdapter.createCommentNode(e.data);
					this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location)
				}
				_insertCharacters(e) {
					if (this._shouldFosterParentOnInsertion() ? ({
							parent: t,
							beforeElement: n
						} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), e.location) {
						var t, n, r = this.treeAdapter.getChildNodes(t),
							a = n ? r.lastIndexOf(n) : r.length,
							i = r[a - 1];
						if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
							var {
								endLine: s,
								endCol: o,
								endOffset: c
							} = e.location;
							this.treeAdapter.updateNodeSourceCodeLocation(i, {
								endLine: s,
								endCol: o,
								endOffset: c
							})
						} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location)
					}
				}
				_adoptNodes(e, t) {
					for (var n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n)
				}
				_setEndLocation(e, t) {
					if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
						var n = t.location,
							r = this.treeAdapter.getTagName(e),
							a = t.type === _.END_TAG && r === t.tagName ? {
								endTag: tt({}, n),
								endLine: n.endLine,
								endCol: n.endCol,
								endOffset: n.endOffset
							} : {
								endLine: n.startLine,
								endCol: n.startCol,
								endOffset: n.startOffset
							};
						this.treeAdapter.updateNodeSourceCodeLocation(e, a)
					}
				}
				shouldProcessStartTagTokenInForeignContent(e) {
					var t, n;
					return !!this.currentNotInHTML && (0 === this.openElements.stackTop && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {
						current: t,
						currentTagId: n
					} = this.openElements, (e.tagID !== D.SVG || this.treeAdapter.getTagName(t) !== v.ANNOTATION_XML || this.treeAdapter.getNamespaceURI(t) !== k.MATHML) && (this.tokenizer.inForeignNode || (e.tagID === D.MGLYPH || e.tagID === D.MALIGNMARK) && void 0 !== n && !this._isIntegrationPoint(n, t, k.HTML)))
				}
				_processToken(e) {
					switch (e.type) {
						case _.CHARACTER:
							this.onCharacter(e);
							break;
						case _.NULL_CHARACTER:
							this.onNullCharacter(e);
							break;
						case _.COMMENT:
							this.onComment(e);
							break;
						case _.DOCTYPE:
							this.onDoctype(e);
							break;
						case _.START_TAG:
							this._processStartTag(e);
							break;
						case _.END_TAG:
							this.onEndTag(e);
							break;
						case _.EOF:
							this.onEof(e);
							break;
						case _.WHITESPACE_CHARACTER:
							this.onWhitespaceCharacter(e)
					}
				}
				_isIntegrationPoint(e, t, n) {
					var r = this.treeAdapter.getNamespaceURI(t),
						a = this.treeAdapter.getAttrList(t);
					return (!n || n === k.HTML) && function(e, t, n) {
						if (t === k.MATHML && e === D.ANNOTATION_XML) {
							for (var r = 0; r < n.length; r++)
								if (n[r].name === b.ENCODING) {
									var a = n[r].value.toLowerCase();
									return "text/html" === a || "application/xhtml+xml" === a
								}
						}
						return t === k.SVG && (e === D.FOREIGN_OBJECT || e === D.DESC || e === D.TITLE)
					}(e, r, a) || (!n || n === k.MATHML) && r === k.MATHML && (e === D.MI || e === D.MO || e === D.MN || e === D.MS || e === D.MTEXT)
				}
				_reconstructActiveFormattingElements() {
					var e = this.activeFormattingElements.entries.length;
					if (e)
						for (var t = this.activeFormattingElements.entries.findIndex(e => e.type === R.Marker || this.openElements.contains(e.element)), n = -1 === t ? e - 1 : t - 1, r = n; r >= 0; r--) {
							var a = this.activeFormattingElements.entries[r];
							this._insertElement(a.token, this.treeAdapter.getNamespaceURI(a.element)), a.element = this.openElements.current
						}
				}
				_closeTableCell() {
					this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = L.IN_ROW
				}
				_closePElement() {
					this.openElements.generateImpliedEndTagsWithExclusion(D.P), this.openElements.popUntilTagNamePopped(D.P)
				}
				_resetInsertionMode() {
					for (var e = this.openElements.stackTop; e >= 0; e--) switch (0 === e && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
						case D.TR:
							this.insertionMode = L.IN_ROW;
							return;
						case D.TBODY:
						case D.THEAD:
						case D.TFOOT:
							this.insertionMode = L.IN_TABLE_BODY;
							return;
						case D.CAPTION:
							this.insertionMode = L.IN_CAPTION;
							return;
						case D.COLGROUP:
							this.insertionMode = L.IN_COLUMN_GROUP;
							return;
						case D.TABLE:
							this.insertionMode = L.IN_TABLE;
							return;
						case D.BODY:
							this.insertionMode = L.IN_BODY;
							return;
						case D.FRAMESET:
							this.insertionMode = L.IN_FRAMESET;
							return;
						case D.SELECT:
							return void this._resetInsertionModeForSelect(e);
						case D.TEMPLATE:
							this.insertionMode = this.tmplInsertionModeStack[0];
							return;
						case D.HTML:
							this.insertionMode = this.headElement ? L.AFTER_HEAD : L.BEFORE_HEAD;
							return;
						case D.TD:
						case D.TH:
							if (e > 0) {
								this.insertionMode = L.IN_CELL;
								return
							}
							break;
						case D.HEAD:
							if (e > 0) {
								this.insertionMode = L.IN_HEAD;
								return
							}
					}
					this.insertionMode = L.IN_BODY
				}
				_resetInsertionModeForSelect(e) {
					if (e > 0)
						for (var t = e - 1; t > 0; t--) {
							var n = this.openElements.tagIDs[t];
							if (n === D.TEMPLATE) break;
							if (n === D.TABLE) {
								this.insertionMode = L.IN_SELECT_IN_TABLE;
								return
							}
						}
					this.insertionMode = L.IN_SELECT
				}
				_isElementCausesFosterParenting(e) {
					return tr.has(e)
				}
				_shouldFosterParentOnInsertion() {
					return this.fosterParentingEnabled && void 0 !== this.openElements.currentTagId && this._isElementCausesFosterParenting(this.openElements.currentTagId)
				}
				_findFosterParentingLocation() {
					for (var e = this.openElements.stackTop; e >= 0; e--) {
						var t = this.openElements.items[e];
						switch (this.openElements.tagIDs[e]) {
							case D.TEMPLATE:
								if (this.treeAdapter.getNamespaceURI(t) === k.HTML) return {
									parent: this.treeAdapter.getTemplateContent(t),
									beforeElement: null
								};
								break;
							case D.TABLE:
								var n = this.treeAdapter.getParentNode(t);
								if (n) return {
									parent: n,
									beforeElement: t
								};
								return {
									parent: this.openElements.items[e - 1], beforeElement: null
								}
						}
					}
					return {
						parent: this.openElements.items[0],
						beforeElement: null
					}
				}
				_fosterParentElement(e) {
					var t = this._findFosterParentingLocation();
					t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e)
				}
				_isSpecialElement(e, t) {
					return eN[this.treeAdapter.getNamespaceURI(e)].has(t)
				}
				onCharacter(e) {
					if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
						var t, n;
						return void(t = this, n = e, t._insertCharacters(n), t.framesetOk = !1)
					}
					switch (this.insertionMode) {
						case L.INITIAL:
							tl(this, e);
							break;
						case L.BEFORE_HTML:
							tu(this, e);
							break;
						case L.BEFORE_HEAD:
							th(this, e);
							break;
						case L.IN_HEAD:
							tf(this, e);
							break;
						case L.IN_HEAD_NO_SCRIPT:
							tm(this, e);
							break;
						case L.AFTER_HEAD:
							tE(this, e);
							break;
						case L.IN_BODY:
						case L.IN_CAPTION:
						case L.IN_CELL:
						case L.IN_TEMPLATE:
							tA(this, e);
							break;
						case L.TEXT:
						case L.IN_SELECT:
						case L.IN_SELECT_IN_TABLE:
							this._insertCharacters(e);
							break;
						case L.IN_TABLE:
						case L.IN_TABLE_BODY:
						case L.IN_ROW:
							tv(this, e);
							break;
						case L.IN_TABLE_TEXT:
							tP(this, e);
							break;
						case L.IN_COLUMN_GROUP:
							tB(this, e);
							break;
						case L.AFTER_BODY:
							tq(this, e);
							break;
						case L.AFTER_AFTER_BODY:
							tV(this, e)
					}
				}
				onNullCharacter(e) {
					if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
						var t, n;
						return void(t = this, (n = e).chars = "�", t._insertCharacters(n))
					}
					switch (this.insertionMode) {
						case L.INITIAL:
							tl(this, e);
							break;
						case L.BEFORE_HTML:
							tu(this, e);
							break;
						case L.BEFORE_HEAD:
							th(this, e);
							break;
						case L.IN_HEAD:
							tf(this, e);
							break;
						case L.IN_HEAD_NO_SCRIPT:
							tm(this, e);
							break;
						case L.AFTER_HEAD:
							tE(this, e);
							break;
						case L.TEXT:
							this._insertCharacters(e);
							break;
						case L.IN_TABLE:
						case L.IN_TABLE_BODY:
						case L.IN_ROW:
							tv(this, e);
							break;
						case L.IN_COLUMN_GROUP:
							tB(this, e);
							break;
						case L.AFTER_BODY:
							tq(this, e);
							break;
						case L.AFTER_AFTER_BODY:
							tV(this, e)
					}
				}
				onComment(e) {
					var t, n, r, a;
					if (this.skipNextNewLine = !1, this.currentNotInHTML) return void to(this, e);
					switch (this.insertionMode) {
						case L.INITIAL:
						case L.BEFORE_HTML:
						case L.BEFORE_HEAD:
						case L.IN_HEAD:
						case L.IN_HEAD_NO_SCRIPT:
						case L.AFTER_HEAD:
						case L.IN_BODY:
						case L.IN_TABLE:
						case L.IN_CAPTION:
						case L.IN_COLUMN_GROUP:
						case L.IN_TABLE_BODY:
						case L.IN_ROW:
						case L.IN_CELL:
						case L.IN_SELECT:
						case L.IN_SELECT_IN_TABLE:
						case L.IN_TEMPLATE:
						case L.IN_FRAMESET:
						case L.AFTER_FRAMESET:
							to(this, e);
							break;
						case L.IN_TABLE_TEXT:
							tM(this, e);
							break;
						case L.AFTER_BODY:
							t = this, n = e, t._appendCommentNode(n, t.openElements.items[0]);
							break;
						case L.AFTER_AFTER_BODY:
						case L.AFTER_AFTER_FRAMESET:
							r = this, a = e, r._appendCommentNode(a, r.document)
					}
				}
				onDoctype(e) {
					switch (this.skipNextNewLine = !1, this.insertionMode) {
						case L.INITIAL:
							! function(e, t) {
								e._setDocumentType(t);
								var n = t.forceQuirks ? C.QUIRKS : function(e) {
									if (e.name !== eX) return C.QUIRKS;
									var {
										systemId: t
									} = e;
									if (t && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t.toLowerCase()) return C.QUIRKS;
									var {
										publicId: n
									} = e;
									if (null !== n) {
										if (n = n.toLowerCase(), e$.has(n)) return C.QUIRKS;
										var r = null === t ? eZ : eJ;
										if (e2(n, r)) return C.QUIRKS;
										if (e2(n, r = null === t ? e0 : e1)) return C.LIMITED_QUIRKS
									}
									return C.NO_QUIRKS
								}(t);
								(t.name !== eX || null !== t.publicId || null !== t.systemId && "about:legacy-compat" !== t.systemId) && e._err(t, A.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = L.BEFORE_HTML
							}(this, e);
							break;
						case L.BEFORE_HEAD:
						case L.IN_HEAD:
						case L.IN_HEAD_NO_SCRIPT:
						case L.AFTER_HEAD:
							this._err(e, A.misplacedDoctype);
							break;
						case L.IN_TABLE_TEXT:
							tM(this, e)
					}
				}
				onStartTag(e) {
					this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, A.nonVoidHtmlElementStartTagWithTrailingSolidus)
				}
				_processStartTag(e) {
					this.shouldProcessStartTagTokenInForeignContent(e) ? function(e, t) {
						if ((n = t.tagID) === D.FONT && t.attrs.some(e => {
								var {
									name: t
								} = e;
								return t === b.COLOR || t === b.SIZE || t === b.FACE
							}) || e9.has(n)) tQ(e), e._startTagOutsideForeignContent(t);
						else {
							var n, r, a = e._getAdjustedCurrentElement(),
								i = e.treeAdapter.getNamespaceURI(a);
							i === k.MATHML ? e6(t) : i === k.SVG && (null != (r = e5.get(t.tagName)) && (t.tagName = r, t.tagID = eO(t.tagName)), e7(t)), e8(t), t.selfClosing ? e._appendElement(t, i) : e._insertElement(t, i), t.ackSelfClosing = !0
						}
					}(this, e) : this._startTagOutsideForeignContent(e)
				}
				_startTagOutsideForeignContent(e) {
					switch (this.insertionMode) {
						case L.INITIAL:
							tl(this, e);
							break;
						case L.BEFORE_HTML:
							t = this, (n = e).tagID === D.HTML ? (t._insertElement(n, k.HTML), t.insertionMode = L.BEFORE_HEAD) : tu(t, n);
							break;
						case L.BEFORE_HEAD:
							var t, n, r, a, i, s, o, c, l, u, h, p, d, f, m, E = this,
								T = e;
							switch (T.tagID) {
								case D.HTML:
									tN(E, T);
									break;
								case D.HEAD:
									E._insertElement(T, k.HTML), E.headElement = E.openElements.current, E.insertionMode = L.IN_HEAD;
									break;
								default:
									th(E, T)
							}
							break;
						case L.IN_HEAD:
							tp(this, e);
							break;
						case L.IN_HEAD_NO_SCRIPT:
							var g = this,
								_ = e;
							switch (_.tagID) {
								case D.HTML:
									tN(g, _);
									break;
								case D.BASEFONT:
								case D.BGSOUND:
								case D.HEAD:
								case D.LINK:
								case D.META:
								case D.NOFRAMES:
								case D.STYLE:
									tp(g, _);
									break;
								case D.NOSCRIPT:
									g._err(_, A.nestedNoscriptInHead);
									break;
								default:
									tm(g, _)
							}
							break;
						case L.AFTER_HEAD:
							var S = this,
								O = e;
							switch (O.tagID) {
								case D.HTML:
									tN(S, O);
									break;
								case D.BODY:
									S._insertElement(O, k.HTML), S.framesetOk = !1, S.insertionMode = L.IN_BODY;
									break;
								case D.FRAMESET:
									S._insertElement(O, k.HTML), S.insertionMode = L.IN_FRAMESET;
									break;
								case D.BASE:
								case D.BASEFONT:
								case D.BGSOUND:
								case D.LINK:
								case D.META:
								case D.NOFRAMES:
								case D.SCRIPT:
								case D.STYLE:
								case D.TEMPLATE:
								case D.TITLE:
									S._err(O, A.abandonedHeadElementChild), S.openElements.push(S.headElement, D.HEAD), tp(S, O), S.openElements.remove(S.headElement);
									break;
								case D.HEAD:
									S._err(O, A.misplacedStartTagForHeadElement);
									break;
								default:
									tE(S, O)
							}
							break;
						case L.IN_BODY:
							tN(this, e);
							break;
						case L.IN_TABLE:
							tD(this, e);
							break;
						case L.IN_TABLE_TEXT:
							tM(this, e);
							break;
						case L.IN_CAPTION:
							r = this, i = (a = e).tagID, tx.has(i) ? r.openElements.hasInTableScope(D.CAPTION) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(D.CAPTION), r.activeFormattingElements.clearToLastMarker(), r.insertionMode = L.IN_TABLE, tD(r, a)) : tN(r, a);
							break;
						case L.IN_COLUMN_GROUP:
							tw(this, e);
							break;
						case L.IN_TABLE_BODY:
							tF(this, e);
							break;
						case L.IN_ROW:
							tU(this, e);
							break;
						case L.IN_CELL:
							s = this, c = (o = e).tagID, tx.has(c) ? (s.openElements.hasInTableScope(D.TD) || s.openElements.hasInTableScope(D.TH)) && (s._closeTableCell(), tU(s, o)) : tN(s, o);
							break;
						case L.IN_SELECT:
							tj(this, e);
							break;
						case L.IN_SELECT_IN_TABLE:
							l = this, (h = (u = e).tagID) === D.CAPTION || h === D.TABLE || h === D.TBODY || h === D.TFOOT || h === D.THEAD || h === D.TR || h === D.TD || h === D.TH ? (l.openElements.popUntilTagNamePopped(D.SELECT), l._resetInsertionMode(), l._processStartTag(u)) : tj(l, u);
							break;
						case L.IN_TEMPLATE:
							var I = this,
								N = e;
							switch (N.tagID) {
								case D.BASE:
								case D.BASEFONT:
								case D.BGSOUND:
								case D.LINK:
								case D.META:
								case D.NOFRAMES:
								case D.SCRIPT:
								case D.STYLE:
								case D.TEMPLATE:
								case D.TITLE:
									tp(I, N);
									break;
								case D.CAPTION:
								case D.COLGROUP:
								case D.TBODY:
								case D.TFOOT:
								case D.THEAD:
									I.tmplInsertionModeStack[0] = L.IN_TABLE, I.insertionMode = L.IN_TABLE, tD(I, N);
									break;
								case D.COL:
									I.tmplInsertionModeStack[0] = L.IN_COLUMN_GROUP, I.insertionMode = L.IN_COLUMN_GROUP, tw(I, N);
									break;
								case D.TR:
									I.tmplInsertionModeStack[0] = L.IN_TABLE_BODY, I.insertionMode = L.IN_TABLE_BODY, tF(I, N);
									break;
								case D.TD:
								case D.TH:
									I.tmplInsertionModeStack[0] = L.IN_ROW, I.insertionMode = L.IN_ROW, tU(I, N);
									break;
								default:
									I.tmplInsertionModeStack[0] = L.IN_BODY, I.insertionMode = L.IN_BODY, tN(I, N)
							}
							break;
						case L.AFTER_BODY:
							p = this, (d = e).tagID === D.HTML ? tN(p, d) : tq(p, d);
							break;
						case L.IN_FRAMESET:
							var b = this,
								C = e;
							switch (C.tagID) {
								case D.HTML:
									tN(b, C);
									break;
								case D.FRAMESET:
									b._insertElement(C, k.HTML);
									break;
								case D.FRAME:
									b._appendElement(C, k.HTML), C.ackSelfClosing = !0;
									break;
								case D.NOFRAMES:
									tp(b, C)
							}
							break;
						case L.AFTER_FRAMESET:
							var v = this,
								y = e;
							switch (y.tagID) {
								case D.HTML:
									tN(v, y);
									break;
								case D.NOFRAMES:
									tp(v, y)
							}
							break;
						case L.AFTER_AFTER_BODY:
							f = this, (m = e).tagID === D.HTML ? tN(f, m) : tV(f, m);
							break;
						case L.AFTER_AFTER_FRAMESET:
							var R = this,
								P = e;
							switch (P.tagID) {
								case D.HTML:
									tN(R, P);
									break;
								case D.NOFRAMES:
									tp(R, P)
							}
					}
				}
				onEndTag(e) {
					this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? function(e, t) {
						if (t.tagID === D.P || t.tagID === D.BR) {
							tQ(e), e._endTagOutsideForeignContent(t);
							return
						}
						for (var n = e.openElements.stackTop; n > 0; n--) {
							var r = e.openElements.items[n];
							if (e.treeAdapter.getNamespaceURI(r) === k.HTML) {
								e._endTagOutsideForeignContent(t);
								break
							}
							var a = e.treeAdapter.getTagName(r);
							if (a.toLowerCase() === t.tagName) {
								t.tagName = a, e.openElements.shortenToLength(n);
								break
							}
						}
					}(this, e) : this._endTagOutsideForeignContent(e)
				}
				_endTagOutsideForeignContent(e) {
					switch (this.insertionMode) {
						case L.INITIAL:
							tl(this, e);
							break;
						case L.BEFORE_HTML:
							t = this, ((r = (n = e).tagID) === D.HTML || r === D.HEAD || r === D.BODY || r === D.BR) && tu(t, n);
							break;
						case L.BEFORE_HEAD:
							a = this, (s = (i = e).tagID) === D.HEAD || s === D.BODY || s === D.HTML || s === D.BR ? th(a, i) : a._err(i, A.endTagWithoutMatchingOpenElement);
							break;
						case L.IN_HEAD:
							var t, n, r, a, i, s, o, c, l, u, h, p, d, f, m, E = this,
								T = e;
							switch (T.tagID) {
								case D.HEAD:
									E.openElements.pop(), E.insertionMode = L.AFTER_HEAD;
									break;
								case D.BODY:
								case D.BR:
								case D.HTML:
									tf(E, T);
									break;
								case D.TEMPLATE:
									td(E, T);
									break;
								default:
									E._err(T, A.endTagWithoutMatchingOpenElement)
							}
							break;
						case L.IN_HEAD_NO_SCRIPT:
							var g = this,
								_ = e;
							switch (_.tagID) {
								case D.NOSCRIPT:
									g.openElements.pop(), g.insertionMode = L.IN_HEAD;
									break;
								case D.BR:
									tm(g, _);
									break;
								default:
									g._err(_, A.endTagWithoutMatchingOpenElement)
							}
							break;
						case L.AFTER_HEAD:
							var S = this,
								O = e;
							switch (O.tagID) {
								case D.BODY:
								case D.HTML:
								case D.BR:
									tE(S, O);
									break;
								case D.TEMPLATE:
									td(S, O);
									break;
								default:
									S._err(O, A.endTagWithoutMatchingOpenElement)
							}
							break;
						case L.IN_BODY:
							tb(this, e);
							break;
						case L.TEXT:
							o = this, e.tagID === D.SCRIPT && (null == (c = o.scriptHandler) || c.call(o, o.openElements.current)), o.openElements.pop(), o.insertionMode = o.originalInsertionMode;
							break;
						case L.IN_TABLE:
							ty(this, e);
							break;
						case L.IN_TABLE_TEXT:
							tM(this, e);
							break;
						case L.IN_CAPTION:
							var I = this,
								N = e,
								k = N.tagID;
							switch (k) {
								case D.CAPTION:
								case D.TABLE:
									I.openElements.hasInTableScope(D.CAPTION) && (I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(D.CAPTION), I.activeFormattingElements.clearToLastMarker(), I.insertionMode = L.IN_TABLE, k === D.TABLE && ty(I, N));
									break;
								case D.BODY:
								case D.COL:
								case D.COLGROUP:
								case D.HTML:
								case D.TBODY:
								case D.TD:
								case D.TFOOT:
								case D.TH:
								case D.THEAD:
								case D.TR:
									break;
								default:
									tb(I, N)
							}
							break;
						case L.IN_COLUMN_GROUP:
							var b = this,
								C = e;
							switch (C.tagID) {
								case D.COLGROUP:
									b.openElements.currentTagId === D.COLGROUP && (b.openElements.pop(), b.insertionMode = L.IN_TABLE);
									break;
								case D.TEMPLATE:
									td(b, C);
									break;
								case D.COL:
									break;
								default:
									tB(b, C)
							}
							break;
						case L.IN_TABLE_BODY:
							tH(this, e);
							break;
						case L.IN_ROW:
							tG(this, e);
							break;
						case L.IN_CELL:
							var v = this,
								y = e,
								R = y.tagID;
							switch (R) {
								case D.TD:
								case D.TH:
									v.openElements.hasInTableScope(R) && (v.openElements.generateImpliedEndTags(), v.openElements.popUntilTagNamePopped(R), v.activeFormattingElements.clearToLastMarker(), v.insertionMode = L.IN_ROW);
									break;
								case D.TABLE:
								case D.TBODY:
								case D.TFOOT:
								case D.THEAD:
								case D.TR:
									v.openElements.hasInTableScope(R) && (v._closeTableCell(), tG(v, y));
									break;
								case D.BODY:
								case D.CAPTION:
								case D.COL:
								case D.COLGROUP:
								case D.HTML:
									break;
								default:
									tb(v, y)
							}
							break;
						case L.IN_SELECT:
							tY(this, e);
							break;
						case L.IN_SELECT_IN_TABLE:
							l = this, (h = (u = e).tagID) === D.CAPTION || h === D.TABLE || h === D.TBODY || h === D.TFOOT || h === D.THEAD || h === D.TR || h === D.TD || h === D.TH ? l.openElements.hasInTableScope(h) && (l.openElements.popUntilTagNamePopped(D.SELECT), l._resetInsertionMode(), l.onEndTag(u)) : tY(l, u);
							break;
						case L.IN_TEMPLATE:
							p = this, (d = e).tagID === D.TEMPLATE && td(p, d);
							break;
						case L.AFTER_BODY:
							tW(this, e);
							break;
						case L.IN_FRAMESET:
							f = this, e.tagID === D.FRAMESET && !f.openElements.isRootHtmlElementCurrent() && (f.openElements.pop(), f.fragmentContext || f.openElements.currentTagId === D.FRAMESET || (f.insertionMode = L.AFTER_FRAMESET));
							break;
						case L.AFTER_FRAMESET:
							m = this, e.tagID === D.HTML && (m.insertionMode = L.AFTER_AFTER_FRAMESET);
							break;
						case L.AFTER_AFTER_BODY:
							tV(this, e)
					}
				}
				onEof(e) {
					switch (this.insertionMode) {
						case L.INITIAL:
							tl(this, e);
							break;
						case L.BEFORE_HTML:
							tu(this, e);
							break;
						case L.BEFORE_HEAD:
							th(this, e);
							break;
						case L.IN_HEAD:
							tf(this, e);
							break;
						case L.IN_HEAD_NO_SCRIPT:
							tm(this, e);
							break;
						case L.AFTER_HEAD:
							tE(this, e);
							break;
						case L.IN_BODY:
						case L.IN_TABLE:
						case L.IN_CAPTION:
						case L.IN_COLUMN_GROUP:
						case L.IN_TABLE_BODY:
						case L.IN_ROW:
						case L.IN_CELL:
						case L.IN_SELECT:
						case L.IN_SELECT_IN_TABLE:
							tC(this, e);
							break;
						case L.TEXT:
							var t, n;
							t = this, n = e, t._err(n, A.eofInElementThatCanContainOnlyText), t.openElements.pop(), t.insertionMode = t.originalInsertionMode, t.onEof(n);
							break;
						case L.IN_TABLE_TEXT:
							tM(this, e);
							break;
						case L.IN_TEMPLATE:
							tz(this, e);
							break;
						case L.AFTER_BODY:
						case L.IN_FRAMESET:
						case L.AFTER_FRAMESET:
						case L.AFTER_AFTER_BODY:
						case L.AFTER_AFTER_FRAMESET:
							tc(this, e)
					}
				}
				onWhitespaceCharacter(e) {
					if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === g.LINE_FEED)) {
						if (1 === e.chars.length) return;
						e.chars = e.chars.substr(1)
					}
					if (this.tokenizer.inForeignNode) return void this._insertCharacters(e);
					switch (this.insertionMode) {
						case L.IN_HEAD:
						case L.IN_HEAD_NO_SCRIPT:
						case L.AFTER_HEAD:
						case L.TEXT:
						case L.IN_COLUMN_GROUP:
						case L.IN_SELECT:
						case L.IN_SELECT_IN_TABLE:
						case L.IN_FRAMESET:
						case L.AFTER_FRAMESET:
							this._insertCharacters(e);
							break;
						case L.IN_BODY:
						case L.IN_CAPTION:
						case L.IN_CELL:
						case L.IN_TEMPLATE:
						case L.AFTER_BODY:
						case L.AFTER_AFTER_BODY:
						case L.AFTER_AFTER_FRAMESET:
							tg(this, e);
							break;
						case L.IN_TABLE:
						case L.IN_TABLE_BODY:
						case L.IN_ROW:
							tv(this, e);
							break;
						case L.IN_TABLE_TEXT:
							tL(this, e)
					}
				}
			}

			function ts(e, t) {
				for (var n = 0; n < 8; n++) {
					var r = function(e, t) {
						var n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
						return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : tk(e, t), n
					}(e, t);
					if (!r) break;
					var a = function(e, t) {
						for (var n = null, r = e.openElements.stackTop; r >= 0; r--) {
							var a = e.openElements.items[r];
							if (a === t.element) break;
							e._isSpecialElement(a, e.openElements.tagIDs[r]) && (n = a)
						}
						return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n
					}(e, r);
					if (!a) break;
					e.activeFormattingElements.bookmark = r;
					var i = function(e, t, n) {
							for (var r = t, a = e.openElements.getCommonAncestor(t), i = 0, s = a; s !== n; i++, s = a) {
								a = e.openElements.getCommonAncestor(s);
								var o = e.activeFormattingElements.getElementEntry(s),
									c = o && i >= 3;
								!o || c ? (c && e.activeFormattingElements.removeEntry(o), e.openElements.remove(s)) : (s = function(e, t) {
									var n = e.treeAdapter.getNamespaceURI(t.element),
										r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
									return e.openElements.replace(t.element, r), t.element = r, r
								}(e, o), r === t && (e.activeFormattingElements.bookmark = o), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(s, r), r = s)
							}
							return r
						}(e, a, r.element),
						s = e.openElements.getCommonAncestor(r.element);
					e.treeAdapter.detachNode(i), s && function(e, t, n) {
							var r = eO(e.treeAdapter.getTagName(t));
							if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
							else {
								var a = e.treeAdapter.getNamespaceURI(t);
								r === D.TEMPLATE && a === k.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n)
							}
						}(e, s, i),
						function(e, t, n) {
							var r = e.treeAdapter.getNamespaceURI(n.element),
								{
									token: a
								} = n,
								i = e.treeAdapter.createElement(a.tagName, r, a.attrs);
							e._adoptNodes(t, i), e.treeAdapter.appendChild(t, i), e.activeFormattingElements.insertElementAfterBookmark(i, a), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, i, a.tagID)
						}(e, a, r)
				}
			}

			function to(e, t) {
				e._appendCommentNode(t, e.openElements.currentTmplContentOrNode)
			}

			function tc(e, t) {
				if (e.stopped = !0, t.location) {
					for (var n = 2 * !e.fragmentContext, r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
					if (!e.fragmentContext && e.openElements.stackTop >= 0) {
						var a = e.openElements.items[0],
							i = e.treeAdapter.getNodeSourceCodeLocation(a);
						if (i && !i.endTag && (e._setEndLocation(a, t), e.openElements.stackTop >= 1)) {
							var s = e.openElements.items[1],
								o = e.treeAdapter.getNodeSourceCodeLocation(s);
							o && !o.endTag && e._setEndLocation(s, t)
						}
					}
				}
			}

			function tl(e, t) {
				e._err(t, A.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, C.QUIRKS), e.insertionMode = L.BEFORE_HTML, e._processToken(t)
			}

			function tu(e, t) {
				e._insertFakeRootElement(), e.insertionMode = L.BEFORE_HEAD, e._processToken(t)
			}

			function th(e, t) {
				e._insertFakeElement(v.HEAD, D.HEAD), e.headElement = e.openElements.current, e.insertionMode = L.IN_HEAD, e._processToken(t)
			}

			function tp(e, t) {
				switch (t.tagID) {
					case D.HTML:
						tN(e, t);
						break;
					case D.BASE:
					case D.BASEFONT:
					case D.BGSOUND:
					case D.LINK:
					case D.META:
						e._appendElement(t, k.HTML), t.ackSelfClosing = !0;
						break;
					case D.TITLE:
						e._switchToTextParsing(t, eb.RCDATA);
						break;
					case D.NOSCRIPT:
						e.options.scriptingEnabled ? e._switchToTextParsing(t, eb.RAWTEXT) : (e._insertElement(t, k.HTML), e.insertionMode = L.IN_HEAD_NO_SCRIPT);
						break;
					case D.NOFRAMES:
					case D.STYLE:
						e._switchToTextParsing(t, eb.RAWTEXT);
						break;
					case D.SCRIPT:
						e._switchToTextParsing(t, eb.SCRIPT_DATA);
						break;
					case D.TEMPLATE:
						e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = L.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(L.IN_TEMPLATE);
						break;
					case D.HEAD:
						e._err(t, A.misplacedStartTagForHeadElement);
						break;
					default:
						tf(e, t)
				}
			}

			function td(e, t) {
				e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== D.TEMPLATE && e._err(t, A.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(D.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, A.endTagWithoutMatchingOpenElement)
			}

			function tf(e, t) {
				e.openElements.pop(), e.insertionMode = L.AFTER_HEAD, e._processToken(t)
			}

			function tm(e, t) {
				var n = t.type === _.EOF ? A.openElementsLeftAfterEof : A.disallowedContentInNoscriptInHead;
				e._err(t, n), e.openElements.pop(), e.insertionMode = L.IN_HEAD, e._processToken(t)
			}

			function tE(e, t) {
				e._insertFakeElement(v.BODY, D.BODY), e.insertionMode = L.IN_BODY, tT(e, t)
			}

			function tT(e, t) {
				switch (t.type) {
					case _.CHARACTER:
						tA(e, t);
						break;
					case _.WHITESPACE_CHARACTER:
						tg(e, t);
						break;
					case _.COMMENT:
						to(e, t);
						break;
					case _.START_TAG:
						tN(e, t);
						break;
					case _.END_TAG:
						tb(e, t);
						break;
					case _.EOF:
						tC(e, t)
				}
			}

			function tg(e, t) {
				e._reconstructActiveFormattingElements(), e._insertCharacters(t)
			}

			function tA(e, t) {
				e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1
			}

			function t_(e, t) {
				e._reconstructActiveFormattingElements(), e._appendElement(t, k.HTML), e.framesetOk = !1, t.ackSelfClosing = !0
			}

			function tS(e) {
				var t = eE(e, b.TYPE);
				return null != t && "hidden" === t.toLowerCase()
			}

			function tO(e, t) {
				e._switchToTextParsing(t, eb.RAWTEXT)
			}

			function tI(e, t) {
				e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML)
			}

			function tN(e, t) {
				switch (t.tagID) {
					case D.I:
					case D.S:
					case D.B:
					case D.U:
					case D.EM:
					case D.TT:
					case D.BIG:
					case D.CODE:
					case D.FONT:
					case D.SMALL:
					case D.STRIKE:
					case D.STRONG:
						e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
						break;
					case D.A:
						(n = e.activeFormattingElements.getElementEntryInScopeWithTagName(v.A)) && (ts(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
						break;
					case D.H1:
					case D.H2:
					case D.H3:
					case D.H4:
					case D.H5:
					case D.H6:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), void 0 !== e.openElements.currentTagId && ek.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, k.HTML);
						break;
					case D.P:
					case D.DL:
					case D.OL:
					case D.UL:
					case D.DIV:
					case D.DIR:
					case D.NAV:
					case D.MAIN:
					case D.MENU:
					case D.ASIDE:
					case D.CENTER:
					case D.FIGURE:
					case D.FOOTER:
					case D.HEADER:
					case D.HGROUP:
					case D.DIALOG:
					case D.DETAILS:
					case D.ADDRESS:
					case D.ARTICLE:
					case D.SEARCH:
					case D.SECTION:
					case D.SUMMARY:
					case D.FIELDSET:
					case D.BLOCKQUOTE:
					case D.FIGCAPTION:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML);
						break;
					case D.LI:
					case D.DD:
					case D.DT:
						var n, r, a, i;
						e.framesetOk = !1;
						for (var s = t.tagID, o = e.openElements.stackTop; o >= 0; o--) {
							var c = e.openElements.tagIDs[o];
							if (s === D.LI && c === D.LI || (s === D.DD || s === D.DT) && (c === D.DD || c === D.DT)) {
								e.openElements.generateImpliedEndTagsWithExclusion(c), e.openElements.popUntilTagNamePopped(c);
								break
							}
							if (c !== D.ADDRESS && c !== D.DIV && c !== D.P && e._isSpecialElement(e.openElements.items[o], c)) break
						}
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML);
						break;
					case D.BR:
					case D.IMG:
					case D.WBR:
					case D.AREA:
					case D.EMBED:
					case D.KEYGEN:
						t_(e, t);
						break;
					case D.HR:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._appendElement(t, k.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
						break;
					case D.RB:
					case D.RTC:
						e.openElements.hasInScope(D.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, k.HTML);
						break;
					case D.RT:
					case D.RP:
						e.openElements.hasInScope(D.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(D.RTC), e._insertElement(t, k.HTML);
						break;
					case D.PRE:
					case D.LISTING:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
						break;
					case D.XMP:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, eb.RAWTEXT);
						break;
					case D.SVG:
						e._reconstructActiveFormattingElements(), e7(t), e8(t), t.selfClosing ? e._appendElement(t, k.SVG) : e._insertElement(t, k.SVG), t.ackSelfClosing = !0;
						break;
					case D.HTML:
						0 === e.openElements.tmplCount && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
						break;
					case D.BASE:
					case D.LINK:
					case D.META:
					case D.STYLE:
					case D.TITLE:
					case D.SCRIPT:
					case D.BGSOUND:
					case D.BASEFONT:
					case D.TEMPLATE:
						tp(e, t);
						break;
					case D.BODY:
						(r = e.openElements.tryPeekProperlyNestedBodyElement()) && 0 === e.openElements.tmplCount && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(r, t.attrs));
						break;
					case D.FORM:
						a = e.openElements.tmplCount > 0, (!e.formElement || a) && (e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML), a || (e.formElement = e.openElements.current));
						break;
					case D.NOBR:
						e._reconstructActiveFormattingElements(), e.openElements.hasInScope(D.NOBR) && (ts(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, k.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
						break;
					case D.MATH:
						e._reconstructActiveFormattingElements(), e6(t), e8(t), t.selfClosing ? e._appendElement(t, k.MATHML) : e._insertElement(t, k.MATHML), t.ackSelfClosing = !0;
						break;
					case D.TABLE:
						e.treeAdapter.getDocumentMode(e.document) !== C.QUIRKS && e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML), e.framesetOk = !1, e.insertionMode = L.IN_TABLE;
						break;
					case D.INPUT:
						e._reconstructActiveFormattingElements(), e._appendElement(t, k.HTML), tS(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
						break;
					case D.PARAM:
					case D.TRACK:
					case D.SOURCE:
						e._appendElement(t, k.HTML), t.ackSelfClosing = !0;
						break;
					case D.IMAGE:
						t.tagName = v.IMG, t.tagID = D.IMG, t_(e, t);
						break;
					case D.BUTTON:
						e.openElements.hasInScope(D.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(D.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML), e.framesetOk = !1;
						break;
					case D.APPLET:
					case D.OBJECT:
					case D.MARQUEE:
						e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
						break;
					case D.IFRAME:
						e.framesetOk = !1, e._switchToTextParsing(t, eb.RAWTEXT);
						break;
					case D.SELECT:
						e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === L.IN_TABLE || e.insertionMode === L.IN_CAPTION || e.insertionMode === L.IN_TABLE_BODY || e.insertionMode === L.IN_ROW || e.insertionMode === L.IN_CELL ? L.IN_SELECT_IN_TABLE : L.IN_SELECT;
						break;
					case D.OPTION:
					case D.OPTGROUP:
						e.openElements.currentTagId === D.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, k.HTML);
						break;
					case D.NOEMBED:
					case D.NOFRAMES:
						tO(e, t);
						break;
					case D.FRAMESET:
						i = e.openElements.tryPeekProperlyNestedBodyElement(), e.framesetOk && i && (e.treeAdapter.detachNode(i), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_FRAMESET);
						break;
					case D.TEXTAREA:
						e._insertElement(t, k.HTML), e.skipNextNewLine = !0, e.tokenizer.state = eb.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = L.TEXT;
						break;
					case D.NOSCRIPT:
						e.options.scriptingEnabled ? tO(e, t) : tI(e, t);
						break;
					case D.PLAINTEXT:
						e.openElements.hasInButtonScope(D.P) && e._closePElement(), e._insertElement(t, k.HTML), e.tokenizer.state = eb.PLAINTEXT;
						break;
					case D.COL:
					case D.TH:
					case D.TD:
					case D.TR:
					case D.HEAD:
					case D.FRAME:
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
					case D.CAPTION:
					case D.COLGROUP:
						break;
					default:
						tI(e, t)
				}
			}

			function tk(e, t) {
				for (var n = t.tagName, r = t.tagID, a = e.openElements.stackTop; a > 0; a--) {
					var i = e.openElements.items[a],
						s = e.openElements.tagIDs[a];
					if (r === s && (r !== D.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
						e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= a && e.openElements.shortenToLength(a);
						break
					}
					if (e._isSpecialElement(i, s)) break
				}
			}

			function tb(e, t) {
				switch (t.tagID) {
					case D.A:
					case D.B:
					case D.I:
					case D.S:
					case D.U:
					case D.EM:
					case D.TT:
					case D.BIG:
					case D.CODE:
					case D.FONT:
					case D.NOBR:
					case D.SMALL:
					case D.STRIKE:
					case D.STRONG:
						ts(e, t);
						break;
					case D.P:
						e.openElements.hasInButtonScope(D.P) || e._insertFakeElement(v.P, D.P), e._closePElement();
						break;
					case D.DL:
					case D.UL:
					case D.OL:
					case D.DIR:
					case D.DIV:
					case D.NAV:
					case D.PRE:
					case D.MAIN:
					case D.MENU:
					case D.ASIDE:
					case D.BUTTON:
					case D.CENTER:
					case D.FIGURE:
					case D.FOOTER:
					case D.HEADER:
					case D.HGROUP:
					case D.DIALOG:
					case D.ADDRESS:
					case D.ARTICLE:
					case D.DETAILS:
					case D.SEARCH:
					case D.SECTION:
					case D.SUMMARY:
					case D.LISTING:
					case D.FIELDSET:
					case D.BLOCKQUOTE:
					case D.FIGCAPTION:
						n = t.tagID, e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
						break;
					case D.LI:
						e.openElements.hasInListItemScope(D.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(D.LI), e.openElements.popUntilTagNamePopped(D.LI));
						break;
					case D.DD:
					case D.DT:
						r = t.tagID, e.openElements.hasInScope(r) && (e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r));
						break;
					case D.H1:
					case D.H2:
					case D.H3:
					case D.H4:
					case D.H5:
					case D.H6:
						e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
						break;
					case D.BR:
						e._reconstructActiveFormattingElements(), e._insertFakeElement(v.BR, D.BR), e.openElements.pop(), e.framesetOk = !1;
						break;
					case D.BODY:
						var n, r, a;
						if (e.openElements.hasInScope(D.BODY) && (e.insertionMode = L.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
							var i = e.openElements.tryPeekProperlyNestedBodyElement();
							i && e._setEndLocation(i, t)
						}
						break;
					case D.HTML:
						e.openElements.hasInScope(D.BODY) && (e.insertionMode = L.AFTER_BODY, tW(e, t));
						break;
					case D.FORM:
						! function(e) {
							var t = e.openElements.tmplCount > 0,
								{
									formElement: n
								} = e;
							t || (e.formElement = null), (n || t) && e.openElements.hasInScope(D.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(D.FORM) : n && e.openElements.remove(n))
						}(e);
						break;
					case D.APPLET:
					case D.OBJECT:
					case D.MARQUEE:
						a = t.tagID, e.openElements.hasInScope(a) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a), e.activeFormattingElements.clearToLastMarker());
						break;
					case D.TEMPLATE:
						td(e, t);
						break;
					default:
						tk(e, t)
				}
			}

			function tC(e, t) {
				e.tmplInsertionModeStack.length > 0 ? tz(e, t) : tc(e, t)
			}

			function tv(e, t) {
				if (void 0 !== e.openElements.currentTagId && tr.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = L.IN_TABLE_TEXT, t.type) {
					case _.CHARACTER:
						tP(e, t);
						break;
					case _.WHITESPACE_CHARACTER:
						tL(e, t)
				} else tR(e, t)
			}

			function tD(e, t) {
				switch (t.tagID) {
					case D.TD:
					case D.TH:
					case D.TR:
						e.openElements.clearBackToTableContext(), e._insertFakeElement(v.TBODY, D.TBODY), e.insertionMode = L.IN_TABLE_BODY, tF(e, t);
						break;
					case D.STYLE:
					case D.SCRIPT:
					case D.TEMPLATE:
						tp(e, t);
						break;
					case D.COL:
						e.openElements.clearBackToTableContext(), e._insertFakeElement(v.COLGROUP, D.COLGROUP), e.insertionMode = L.IN_COLUMN_GROUP, tw(e, t);
						break;
					case D.FORM:
						e.formElement || 0 !== e.openElements.tmplCount || (e._insertElement(t, k.HTML), e.formElement = e.openElements.current, e.openElements.pop());
						break;
					case D.TABLE:
						e.openElements.hasInTableScope(D.TABLE) && (e.openElements.popUntilTagNamePopped(D.TABLE), e._resetInsertionMode(), e._processStartTag(t));
						break;
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
						e.openElements.clearBackToTableContext(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_TABLE_BODY;
						break;
					case D.INPUT:
						tS(t) ? e._appendElement(t, k.HTML) : tR(e, t), t.ackSelfClosing = !0;
						break;
					case D.CAPTION:
						e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_CAPTION;
						break;
					case D.COLGROUP:
						e.openElements.clearBackToTableContext(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_COLUMN_GROUP;
						break;
					default:
						tR(e, t)
				}
			}

			function ty(e, t) {
				switch (t.tagID) {
					case D.TABLE:
						e.openElements.hasInTableScope(D.TABLE) && (e.openElements.popUntilTagNamePopped(D.TABLE), e._resetInsertionMode());
						break;
					case D.TEMPLATE:
						td(e, t);
						break;
					case D.BODY:
					case D.CAPTION:
					case D.COL:
					case D.COLGROUP:
					case D.HTML:
					case D.TBODY:
					case D.TD:
					case D.TFOOT:
					case D.TH:
					case D.THEAD:
					case D.TR:
						break;
					default:
						tR(e, t)
				}
			}

			function tR(e, t) {
				var n = e.fosterParentingEnabled;
				e.fosterParentingEnabled = !0, tT(e, t), e.fosterParentingEnabled = n
			}

			function tL(e, t) {
				e.pendingCharacterTokens.push(t)
			}

			function tP(e, t) {
				e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0
			}

			function tM(e, t) {
				var n = 0;
				if (e.hasNonWhitespacePendingCharacterToken)
					for (; n < e.pendingCharacterTokens.length; n++) tR(e, e.pendingCharacterTokens[n]);
				else
					for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
				e.insertionMode = e.originalInsertionMode, e._processToken(t)
			}
			var tx = new Set([D.CAPTION, D.COL, D.COLGROUP, D.TBODY, D.TD, D.TFOOT, D.TH, D.THEAD, D.TR]);

			function tw(e, t) {
				switch (t.tagID) {
					case D.HTML:
						tN(e, t);
						break;
					case D.COL:
						e._appendElement(t, k.HTML), t.ackSelfClosing = !0;
						break;
					case D.TEMPLATE:
						tp(e, t);
						break;
					default:
						tB(e, t)
				}
			}

			function tB(e, t) {
				e.openElements.currentTagId === D.COLGROUP && (e.openElements.pop(), e.insertionMode = L.IN_TABLE, e._processToken(t))
			}

			function tF(e, t) {
				switch (t.tagID) {
					case D.TR:
						e.openElements.clearBackToTableBodyContext(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_ROW;
						break;
					case D.TH:
					case D.TD:
						e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(v.TR, D.TR), e.insertionMode = L.IN_ROW, tU(e, t);
						break;
					case D.CAPTION:
					case D.COL:
					case D.COLGROUP:
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
						e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE, tD(e, t));
						break;
					default:
						tD(e, t)
				}
			}

			function tH(e, t) {
				var n = t.tagID;
				switch (t.tagID) {
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
						e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE);
						break;
					case D.TABLE:
						e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE, ty(e, t));
						break;
					case D.BODY:
					case D.CAPTION:
					case D.COL:
					case D.COLGROUP:
					case D.HTML:
					case D.TD:
					case D.TH:
					case D.TR:
						break;
					default:
						ty(e, t)
				}
			}

			function tU(e, t) {
				switch (t.tagID) {
					case D.TH:
					case D.TD:
						e.openElements.clearBackToTableRowContext(), e._insertElement(t, k.HTML), e.insertionMode = L.IN_CELL, e.activeFormattingElements.insertMarker();
						break;
					case D.CAPTION:
					case D.COL:
					case D.COLGROUP:
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
					case D.TR:
						e.openElements.hasInTableScope(D.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE_BODY, tF(e, t));
						break;
					default:
						tD(e, t)
				}
			}

			function tG(e, t) {
				switch (t.tagID) {
					case D.TR:
						e.openElements.hasInTableScope(D.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE_BODY);
						break;
					case D.TABLE:
						e.openElements.hasInTableScope(D.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE_BODY, tH(e, t));
						break;
					case D.TBODY:
					case D.TFOOT:
					case D.THEAD:
						(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(D.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = L.IN_TABLE_BODY, tH(e, t));
						break;
					case D.BODY:
					case D.CAPTION:
					case D.COL:
					case D.COLGROUP:
					case D.HTML:
					case D.TD:
					case D.TH:
						break;
					default:
						ty(e, t)
				}
			}

			function tj(e, t) {
				switch (t.tagID) {
					case D.HTML:
						tN(e, t);
						break;
					case D.OPTION:
						e.openElements.currentTagId === D.OPTION && e.openElements.pop(), e._insertElement(t, k.HTML);
						break;
					case D.OPTGROUP:
						e.openElements.currentTagId === D.OPTION && e.openElements.pop(), e.openElements.currentTagId === D.OPTGROUP && e.openElements.pop(), e._insertElement(t, k.HTML);
						break;
					case D.HR:
						e.openElements.currentTagId === D.OPTION && e.openElements.pop(), e.openElements.currentTagId === D.OPTGROUP && e.openElements.pop(), e._appendElement(t, k.HTML), t.ackSelfClosing = !0;
						break;
					case D.INPUT:
					case D.KEYGEN:
					case D.TEXTAREA:
					case D.SELECT:
						e.openElements.hasInSelectScope(D.SELECT) && (e.openElements.popUntilTagNamePopped(D.SELECT), e._resetInsertionMode(), t.tagID !== D.SELECT && e._processStartTag(t));
						break;
					case D.SCRIPT:
					case D.TEMPLATE:
						tp(e, t)
				}
			}

			function tY(e, t) {
				switch (t.tagID) {
					case D.OPTGROUP:
						e.openElements.stackTop > 0 && e.openElements.currentTagId === D.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === D.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === D.OPTGROUP && e.openElements.pop();
						break;
					case D.OPTION:
						e.openElements.currentTagId === D.OPTION && e.openElements.pop();
						break;
					case D.SELECT:
						e.openElements.hasInSelectScope(D.SELECT) && (e.openElements.popUntilTagNamePopped(D.SELECT), e._resetInsertionMode());
						break;
					case D.TEMPLATE:
						td(e, t)
				}
			}

			function tz(e, t) {
				e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(D.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : tc(e, t)
			}

			function tW(e, t) {
				var n;
				if (t.tagID === D.HTML) {
					if (e.fragmentContext || (e.insertionMode = L.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === D.HTML) {
						e._setEndLocation(e.openElements.items[0], t);
						var r = e.openElements.items[1];
						!r || (null == (n = e.treeAdapter.getNodeSourceCodeLocation(r)) ? void 0 : n.endTag) || e._setEndLocation(r, t)
					}
				} else tq(e, t)
			}

			function tq(e, t) {
				e.insertionMode = L.IN_BODY, tT(e, t)
			}

			function tV(e, t) {
				e.insertionMode = L.IN_BODY, tT(e, t)
			}

			function tQ(e) {
				for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== k.HTML && void 0 !== e.openElements.currentTagId && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop()
			}
			String.prototype.codePointAt, v.AREA, v.BASE, v.BASEFONT, v.BGSOUND, v.BR, v.COL, v.EMBED, v.FRAME, v.HR, v.IMG, v.INPUT, v.KEYGEN, v.LINK, v.META, v.PARAM, v.SOURCE, v.TRACK, v.WBR;
			var tK = n(975),
				tX = n(3925);

			function tJ(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function tZ(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tJ(Object(n), !0).forEach(function(t) {
						(0, P.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tJ(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var t$ = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,
				t0 = new Set(["mdxFlowExpression", "mdxJsxFlowElement", "mdxJsxTextElement", "mdxTextExpression", "mdxjsEsm"]),
				t1 = {
					sourceCodeLocationInfo: !0,
					scriptingEnabled: !1
				};

			function t2(e, t) {
				var n, r, a, i, s = !!((r = "root" === (n = e).type ? n.children[0] : n) && ("doctype" === r.type || "element" === r.type && "html" === r.tagName.toLowerCase())),
					o = en("type", {
						handlers: {
							root: t4,
							element: t5,
							text: t9,
							comment: t7,
							doctype: t6,
							raw: t8
						},
						unknown: ne
					}),
					c = {
						parser: s ? new ti(t1) : ti.getFragmentParser(void 0, t1),
						handle(e) {
							o(e, c)
						},
						stitches: !1,
						options: t || {}
					};
				o(e, c), nt(c, (0, tK.PW)());
				var l = (a = s ? c.parser.document : c.parser.getFragment(), X({
					file: (i = {
						file: c.options.file
					}).file || void 0,
					location: !1,
					schema: "svg" === i.space ? w.JW : w.qy,
					verbose: i.verbose || !1
				}, a));
				return (c.stitches && (0, tX.YR)(l, "comment", function(e, t, n) {
					if (e.value.stitch && n && void 0 !== t) return n.children[t] = e.value.stitch, t
				}), "root" === l.type && 1 === l.children.length && l.children[0].type === e.type) ? l.children[0] : l
			}

			function t3(e, t) {
				var n = -1;
				if (e)
					for (; ++n < e.length;) t.handle(e[n])
			}

			function t4(e, t) {
				t3(e.children, t)
			}

			function t5(e, t) {
				(function(e, t) {
					var n = e.tagName.toLowerCase();
					if (t.parser.tokenizer.state !== eb.PLAINTEXT) {
						nt(t, (0, tK.PW)(e));
						var r = t.parser.openElements.current,
							a = "namespaceURI" in r ? r.namespaceURI : V.html;
						a === V.html && "svg" === n && (a = V.svg);
						var i = ea(tZ(tZ({}, e), {}, {
								children: []
							}), "svg" === ({
								space: a === V.svg ? "svg" : "html"
							}).space ? w.JW : w.qy),
							s = {
								type: _.START_TAG,
								tagName: n,
								tagID: eO(n),
								selfClosing: !1,
								ackSelfClosing: !1,
								attrs: "attrs" in i ? i.attrs : [],
								location: nr(e)
							};
						t.parser.currentToken = s, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n
					}
				})(e, t), t3(e.children, t),
					function(e, t) {
						var n = e.tagName.toLowerCase();
						if (!(!t.parser.tokenizer.inForeignNode && eo.includes(n)) && t.parser.tokenizer.state !== eb.PLAINTEXT) {
							nt(t, (0, tK.Y)(e));
							var r = {
								type: _.END_TAG,
								tagName: n,
								tagID: eO(n),
								selfClosing: !1,
								ackSelfClosing: !1,
								attrs: [],
								location: nr(e)
							};
							t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === eb.RCDATA || t.parser.tokenizer.state === eb.RAWTEXT || t.parser.tokenizer.state === eb.SCRIPT_DATA) && (t.parser.tokenizer.state = eb.DATA)
						}
					}(e, t)
			}

			function t9(e, t) {
				t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
				var n = {
					type: _.CHARACTER,
					chars: e.value,
					location: nr(e)
				};
				nt(t, (0, tK.PW)(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken)
			}

			function t6(e, t) {
				var n = {
					type: _.DOCTYPE,
					name: "html",
					forceQuirks: !1,
					publicId: "",
					systemId: "",
					location: nr(e)
				};
				nt(t, (0, tK.PW)(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken)
			}

			function t7(e, t) {
				var n = e.value,
					r = {
						type: _.COMMENT,
						data: n,
						location: nr(e)
					};
				nt(t, (0, tK.PW)(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken)
			}

			function t8(e, t) {
				if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, nn(t, (0, tK.PW)(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(t$, "&lt;$1$2") : e.value, !1), t.parser.tokenizer._runParsingLoop(), 72 === t.parser.tokenizer.state || 78 === t.parser.tokenizer.state) {
					t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
					var n = t.parser.tokenizer._consume();
					t.parser.tokenizer._callState(n)
				}
			}

			function ne(e, t) {
				if (t.options.passThrough && t.options.passThrough.includes(e.type)) {
					var n, r;
					t.stitches = !0, n = "children" in (r = e) ? (0, M.Ay)(tZ(tZ({}, r), {}, {
						children: []
					})) : (0, M.Ay)(r), "children" in e && "children" in n && (n.children = t2({
						type: "root",
						children: e.children
					}, t.options).children), t7({
						type: "comment",
						value: {
							stitch: n
						}
					}, t)
				} else {
					var a = "";
					throw t0.has(e.type) && (a = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + e.type + "` node" + a)
				}
			}

			function nt(e, t) {
				nn(e, t);
				var n = e.parser.tokenizer.currentCharacterToken;
				n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = eb.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
					name: "",
					value: ""
				}
			}

			function nn(e, t) {
				if (t && void 0 !== t.offset) {
					var n = {
						startLine: t.line,
						startCol: t.column,
						startOffset: t.offset,
						endLine: -1,
						endCol: -1,
						endOffset: -1
					};
					e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n
				}
			}

			function nr(e) {
				var t = (0, tK.PW)(e) || {
						line: void 0,
						column: void 0,
						offset: void 0
					},
					n = (0, tK.Y)(e) || {
						line: void 0,
						column: void 0,
						offset: void 0
					};
				return {
					startLine: t.line,
					startCol: t.column,
					startOffset: t.offset,
					endLine: n.line,
					endCol: n.column,
					endOffset: n.offset
				}
			}

			function na(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function ni(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? na(Object(n), !0).forEach(function(t) {
						(0, P.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function ns(e) {
				return function(t, n) {
					return t2(t, ni(ni({}, e), {}, {
						file: n
					}))
				}
			}
		},
		5244: (e, t, n) => {
			n.d(t, {
				R: () => r
			});
			class r {
				constructor(e, t) {
					this.attribute = t, this.property = e
				}
			}
			r.prototype.attribute = "", r.prototype.booleanish = !1, r.prototype.boolean = !1, r.prototype.commaOrSpaceSeparated = !1, r.prototype.commaSeparated = !1, r.prototype.defined = !1, r.prototype.mustUseProperty = !1, r.prototype.number = !1, r.prototype.overloadedBoolean = !1, r.prototype.property = "", r.prototype.spaceSeparated = !1, r.prototype.space = void 0
		},
		5609: e => {
			var t = Object.prototype.hasOwnProperty,
				n = Object.prototype.toString,
				r = Object.defineProperty,
				a = Object.getOwnPropertyDescriptor,
				i = function(e) {
					return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
				},
				s = function(e) {
					if (!e || "[object Object]" !== n.call(e)) return !1;
					var r, a = t.call(e, "constructor"),
						i = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
					if (e.constructor && !a && !i) return !1;
					for (r in e);
					return void 0 === r || t.call(e, r)
				},
				o = function(e, t) {
					r && "__proto__" === t.name ? r(e, t.name, {
						enumerable: !0,
						configurable: !0,
						value: t.newValue,
						writable: !0
					}) : e[t.name] = t.newValue
				},
				c = function(e, n) {
					if ("__proto__" === n) {
						if (!t.call(e, n)) return;
						else if (a) return a(e, n).value
					}
					return e[n]
				};
			e.exports = function e() {
				var t, n, r, a, l, u, h = arguments[0],
					p = 1,
					d = arguments.length,
					f = !1;
				for ("boolean" == typeof h && (f = h, h = arguments[1] || {}, p = 2), (null == h || "object" != typeof h && "function" != typeof h) && (h = {}); p < d; ++p)
					if (t = arguments[p], null != t)
						for (n in t) r = c(h, n), h !== (a = c(t, n)) && (f && a && (s(a) || (l = i(a))) ? (l ? (l = !1, u = r && i(r) ? r : []) : u = r && s(r) ? r : {}, o(h, {
							name: n,
							newValue: e(f, u, a)
						})) : void 0 !== a && o(h, {
							name: n,
							newValue: a
						}));
				return h
			}
		},
		7082: (e, t, n) => {
			n.d(t, {
				y: () => i
			});
			var r = n(9554),
				a = {}.hasOwnProperty;

			function i(e) {
				for (var t = {}, n = -1; ++n < e.length;) ! function(e, t) {
					var n;
					for (n in t) {
						var i = (a.call(e, n) ? e[n] : void 0) || (e[n] = {}),
							s = t[n],
							o = void 0;
						if (s)
							for (o in s) {
								a.call(i, o) || (i[o] = []);
								var c = s[o];
								! function(e, t) {
									for (var n = -1, a = []; ++n < t.length;)("after" === t[n].add ? e : a).push(t[n]);
									(0, r.m)(e, 0, 0, a)
								}(i[o], Array.isArray(c) ? c : c ? [c] : [])
							}
					}
				}(t, e[n]);
				return t
			}
		},
		7373: (e, t, n) => {
			n.d(t, {
				B: () => r
			});

			function r(e) {
				return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
			}
		},
		7666: (e, t, n) => {
			n.d(t, {
				N: () => a
			});
			var r = n(269);

			function a(e, t, n, a) {
				var i = a ? a - 1 : 1 / 0,
					s = 0;
				return function(a) {
					return (0, r.On)(a) ? (e.enter(n), function a(o) {
						return (0, r.On)(o) && s++ < i ? (e.consume(o), a) : (e.exit(n), t(o))
					}(a)) : t(a)
				}
			}
		},
		7774: (e, t, n) => {
			n.d(t, {
				qy: () => T,
				JW: () => g
			});
			class r {
				constructor(e, t, n) {
					this.normal = t, this.property = e, n && (this.space = n)
				}
			}

			function a(e, t) {
				var n = {},
					a = {};
				for (var i of e) Object.assign(n, i.property), Object.assign(a, i.normal);
				return new r(n, a, t)
			}
			r.prototype.normal = {}, r.prototype.property = {}, r.prototype.space = void 0;
			var i = n(4626),
				s = n(8636);

			function o(e) {
				var t = {},
					n = {};
				for (var [a, o] of Object.entries(e.properties)) {
					var c = new s.E(a, e.transform(e.attributes || {}, a), o, e.space);
					e.mustUseProperty && e.mustUseProperty.includes(a) && (c.mustUseProperty = !0), t[a] = c, n[(0, i.S)(a)] = a, n[(0, i.S)(c.attribute)] = a
				}
				return new r(t, n, e.space)
			}
			var c = n(1257),
				l = o({
					properties: {
						ariaActiveDescendant: null,
						ariaAtomic: c.booleanish,
						ariaAutoComplete: null,
						ariaBusy: c.booleanish,
						ariaChecked: c.booleanish,
						ariaColCount: c.number,
						ariaColIndex: c.number,
						ariaColSpan: c.number,
						ariaControls: c.spaceSeparated,
						ariaCurrent: null,
						ariaDescribedBy: c.spaceSeparated,
						ariaDetails: null,
						ariaDisabled: c.booleanish,
						ariaDropEffect: c.spaceSeparated,
						ariaErrorMessage: null,
						ariaExpanded: c.booleanish,
						ariaFlowTo: c.spaceSeparated,
						ariaGrabbed: c.booleanish,
						ariaHasPopup: null,
						ariaHidden: c.booleanish,
						ariaInvalid: null,
						ariaKeyShortcuts: null,
						ariaLabel: null,
						ariaLabelledBy: c.spaceSeparated,
						ariaLevel: c.number,
						ariaLive: null,
						ariaModal: c.booleanish,
						ariaMultiLine: c.booleanish,
						ariaMultiSelectable: c.booleanish,
						ariaOrientation: null,
						ariaOwns: c.spaceSeparated,
						ariaPlaceholder: null,
						ariaPosInSet: c.number,
						ariaPressed: c.booleanish,
						ariaReadOnly: c.booleanish,
						ariaRelevant: null,
						ariaRequired: c.booleanish,
						ariaRoleDescription: c.spaceSeparated,
						ariaRowCount: c.number,
						ariaRowIndex: c.number,
						ariaRowSpan: c.number,
						ariaSelected: c.booleanish,
						ariaSetSize: c.number,
						ariaSort: null,
						ariaValueMax: c.number,
						ariaValueMin: c.number,
						ariaValueNow: c.number,
						ariaValueText: null,
						role: null
					},
					transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
				});

			function u(e, t) {
				return t in e ? e[t] : t
			}

			function h(e, t) {
				return u(e, t.toLowerCase())
			}
			var p = o({
					attributes: {
						acceptcharset: "accept-charset",
						classname: "class",
						htmlfor: "for",
						httpequiv: "http-equiv"
					},
					mustUseProperty: ["checked", "multiple", "muted", "selected"],
					properties: {
						abbr: null,
						accept: c.commaSeparated,
						acceptCharset: c.spaceSeparated,
						accessKey: c.spaceSeparated,
						action: null,
						allow: null,
						allowFullScreen: c.boolean,
						allowPaymentRequest: c.boolean,
						allowUserMedia: c.boolean,
						alpha: c.boolean,
						alt: null,
						as: null,
						async: c.boolean,
						autoCapitalize: null,
						autoComplete: c.spaceSeparated,
						autoFocus: c.boolean,
						autoPlay: c.boolean,
						blocking: c.spaceSeparated,
						capture: null,
						charSet: null,
						checked: c.boolean,
						cite: null,
						className: c.spaceSeparated,
						closedBy: null,
						colorSpace: null,
						cols: c.number,
						colSpan: c.number,
						command: null,
						commandFor: null,
						content: null,
						contentEditable: c.booleanish,
						controls: c.boolean,
						controlsList: c.spaceSeparated,
						coords: c.number | c.commaSeparated,
						crossOrigin: null,
						data: null,
						dateTime: null,
						decoding: null,
						default: c.boolean,
						defer: c.boolean,
						dir: null,
						dirName: null,
						disabled: c.boolean,
						download: c.overloadedBoolean,
						draggable: c.booleanish,
						encType: null,
						enterKeyHint: null,
						fetchPriority: null,
						form: null,
						formAction: null,
						formEncType: null,
						formMethod: null,
						formNoValidate: c.boolean,
						formTarget: null,
						headers: c.spaceSeparated,
						height: c.number,
						hidden: c.overloadedBoolean,
						high: c.number,
						href: null,
						hrefLang: null,
						htmlFor: c.spaceSeparated,
						httpEquiv: c.spaceSeparated,
						id: null,
						imageSizes: null,
						imageSrcSet: null,
						inert: c.boolean,
						inputMode: null,
						integrity: null,
						is: null,
						isMap: c.boolean,
						itemId: null,
						itemProp: c.spaceSeparated,
						itemRef: c.spaceSeparated,
						itemScope: c.boolean,
						itemType: c.spaceSeparated,
						kind: null,
						label: null,
						lang: null,
						language: null,
						list: null,
						loading: null,
						loop: c.boolean,
						low: c.number,
						manifest: null,
						max: null,
						maxLength: c.number,
						media: null,
						method: null,
						min: null,
						minLength: c.number,
						multiple: c.boolean,
						muted: c.boolean,
						name: null,
						nonce: null,
						noModule: c.boolean,
						noValidate: c.boolean,
						onAbort: null,
						onAfterPrint: null,
						onAuxClick: null,
						onBeforeMatch: null,
						onBeforePrint: null,
						onBeforeToggle: null,
						onBeforeUnload: null,
						onBlur: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onContextLost: null,
						onContextMenu: null,
						onContextRestored: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFormData: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLanguageChange: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadEnd: null,
						onLoadStart: null,
						onMessage: null,
						onMessageError: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRejectionHandled: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onScrollEnd: null,
						onSecurityPolicyViolation: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onSlotChange: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnhandledRejection: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onWheel: null,
						open: c.boolean,
						optimum: c.number,
						pattern: null,
						ping: c.spaceSeparated,
						placeholder: null,
						playsInline: c.boolean,
						popover: null,
						popoverTarget: null,
						popoverTargetAction: null,
						poster: null,
						preload: null,
						readOnly: c.boolean,
						referrerPolicy: null,
						rel: c.spaceSeparated,
						required: c.boolean,
						reversed: c.boolean,
						rows: c.number,
						rowSpan: c.number,
						sandbox: c.spaceSeparated,
						scope: null,
						scoped: c.boolean,
						seamless: c.boolean,
						selected: c.boolean,
						shadowRootClonable: c.boolean,
						shadowRootCustomElementRegistry: c.boolean,
						shadowRootDelegatesFocus: c.boolean,
						shadowRootMode: null,
						shadowRootSerializable: c.boolean,
						shape: null,
						size: c.number,
						sizes: null,
						slot: null,
						span: c.number,
						spellCheck: c.booleanish,
						src: null,
						srcDoc: null,
						srcLang: null,
						srcSet: null,
						start: c.number,
						step: null,
						style: null,
						tabIndex: c.number,
						target: null,
						title: null,
						translate: null,
						type: null,
						typeMustMatch: c.boolean,
						useMap: null,
						value: c.booleanish,
						width: c.number,
						wrap: null,
						writingSuggestions: null,
						align: null,
						aLink: null,
						archive: c.spaceSeparated,
						axis: null,
						background: null,
						bgColor: null,
						border: c.number,
						borderColor: null,
						bottomMargin: c.number,
						cellPadding: null,
						cellSpacing: null,
						char: null,
						charOff: null,
						classId: null,
						clear: null,
						code: null,
						codeBase: null,
						codeType: null,
						color: null,
						compact: c.boolean,
						declare: c.boolean,
						event: null,
						face: null,
						frame: null,
						frameBorder: null,
						hSpace: c.number,
						leftMargin: c.number,
						link: null,
						longDesc: null,
						lowSrc: null,
						marginHeight: c.number,
						marginWidth: c.number,
						noResize: c.boolean,
						noHref: c.boolean,
						noShade: c.boolean,
						noWrap: c.boolean,
						object: null,
						profile: null,
						prompt: null,
						rev: null,
						rightMargin: c.number,
						rules: null,
						scheme: null,
						scrolling: c.booleanish,
						standby: null,
						summary: null,
						text: null,
						topMargin: c.number,
						valueType: null,
						version: null,
						vAlign: null,
						vLink: null,
						vSpace: c.number,
						allowTransparency: null,
						autoCorrect: null,
						autoSave: null,
						credentialless: c.boolean,
						disablePictureInPicture: c.boolean,
						disableRemotePlayback: c.boolean,
						exportParts: c.commaSeparated,
						part: c.spaceSeparated,
						prefix: null,
						property: null,
						results: c.number,
						security: null,
						unselectable: null
					},
					space: "html",
					transform: h
				}),
				d = o({
					attributes: {
						accentHeight: "accent-height",
						alignmentBaseline: "alignment-baseline",
						arabicForm: "arabic-form",
						baselineShift: "baseline-shift",
						capHeight: "cap-height",
						className: "class",
						clipPath: "clip-path",
						clipRule: "clip-rule",
						colorInterpolation: "color-interpolation",
						colorInterpolationFilters: "color-interpolation-filters",
						colorProfile: "color-profile",
						colorRendering: "color-rendering",
						crossOrigin: "crossorigin",
						dataType: "datatype",
						dominantBaseline: "dominant-baseline",
						enableBackground: "enable-background",
						fillOpacity: "fill-opacity",
						fillRule: "fill-rule",
						floodColor: "flood-color",
						floodOpacity: "flood-opacity",
						fontFamily: "font-family",
						fontSize: "font-size",
						fontSizeAdjust: "font-size-adjust",
						fontStretch: "font-stretch",
						fontStyle: "font-style",
						fontVariant: "font-variant",
						fontWeight: "font-weight",
						glyphName: "glyph-name",
						glyphOrientationHorizontal: "glyph-orientation-horizontal",
						glyphOrientationVertical: "glyph-orientation-vertical",
						hrefLang: "hreflang",
						horizAdvX: "horiz-adv-x",
						horizOriginX: "horiz-origin-x",
						horizOriginY: "horiz-origin-y",
						imageRendering: "image-rendering",
						letterSpacing: "letter-spacing",
						lightingColor: "lighting-color",
						markerEnd: "marker-end",
						markerMid: "marker-mid",
						markerStart: "marker-start",
						maskType: "mask-type",
						navDown: "nav-down",
						navDownLeft: "nav-down-left",
						navDownRight: "nav-down-right",
						navLeft: "nav-left",
						navNext: "nav-next",
						navPrev: "nav-prev",
						navRight: "nav-right",
						navUp: "nav-up",
						navUpLeft: "nav-up-left",
						navUpRight: "nav-up-right",
						onAbort: "onabort",
						onActivate: "onactivate",
						onAfterPrint: "onafterprint",
						onBeforePrint: "onbeforeprint",
						onBegin: "onbegin",
						onCancel: "oncancel",
						onCanPlay: "oncanplay",
						onCanPlayThrough: "oncanplaythrough",
						onChange: "onchange",
						onClick: "onclick",
						onClose: "onclose",
						onCopy: "oncopy",
						onCueChange: "oncuechange",
						onCut: "oncut",
						onDblClick: "ondblclick",
						onDrag: "ondrag",
						onDragEnd: "ondragend",
						onDragEnter: "ondragenter",
						onDragExit: "ondragexit",
						onDragLeave: "ondragleave",
						onDragOver: "ondragover",
						onDragStart: "ondragstart",
						onDrop: "ondrop",
						onDurationChange: "ondurationchange",
						onEmptied: "onemptied",
						onEnd: "onend",
						onEnded: "onended",
						onError: "onerror",
						onFocus: "onfocus",
						onFocusIn: "onfocusin",
						onFocusOut: "onfocusout",
						onHashChange: "onhashchange",
						onInput: "oninput",
						onInvalid: "oninvalid",
						onKeyDown: "onkeydown",
						onKeyPress: "onkeypress",
						onKeyUp: "onkeyup",
						onLoad: "onload",
						onLoadedData: "onloadeddata",
						onLoadedMetadata: "onloadedmetadata",
						onLoadStart: "onloadstart",
						onMessage: "onmessage",
						onMouseDown: "onmousedown",
						onMouseEnter: "onmouseenter",
						onMouseLeave: "onmouseleave",
						onMouseMove: "onmousemove",
						onMouseOut: "onmouseout",
						onMouseOver: "onmouseover",
						onMouseUp: "onmouseup",
						onMouseWheel: "onmousewheel",
						onOffline: "onoffline",
						onOnline: "ononline",
						onPageHide: "onpagehide",
						onPageShow: "onpageshow",
						onPaste: "onpaste",
						onPause: "onpause",
						onPlay: "onplay",
						onPlaying: "onplaying",
						onPopState: "onpopstate",
						onProgress: "onprogress",
						onRateChange: "onratechange",
						onRepeat: "onrepeat",
						onReset: "onreset",
						onResize: "onresize",
						onScroll: "onscroll",
						onSeeked: "onseeked",
						onSeeking: "onseeking",
						onSelect: "onselect",
						onShow: "onshow",
						onStalled: "onstalled",
						onStorage: "onstorage",
						onSubmit: "onsubmit",
						onSuspend: "onsuspend",
						onTimeUpdate: "ontimeupdate",
						onToggle: "ontoggle",
						onUnload: "onunload",
						onVolumeChange: "onvolumechange",
						onWaiting: "onwaiting",
						onZoom: "onzoom",
						overlinePosition: "overline-position",
						overlineThickness: "overline-thickness",
						paintOrder: "paint-order",
						panose1: "panose-1",
						pointerEvents: "pointer-events",
						referrerPolicy: "referrerpolicy",
						renderingIntent: "rendering-intent",
						shapeRendering: "shape-rendering",
						stopColor: "stop-color",
						stopOpacity: "stop-opacity",
						strikethroughPosition: "strikethrough-position",
						strikethroughThickness: "strikethrough-thickness",
						strokeDashArray: "stroke-dasharray",
						strokeDashOffset: "stroke-dashoffset",
						strokeLineCap: "stroke-linecap",
						strokeLineJoin: "stroke-linejoin",
						strokeMiterLimit: "stroke-miterlimit",
						strokeOpacity: "stroke-opacity",
						strokeWidth: "stroke-width",
						tabIndex: "tabindex",
						textAnchor: "text-anchor",
						textDecoration: "text-decoration",
						textRendering: "text-rendering",
						transformOrigin: "transform-origin",
						typeOf: "typeof",
						underlinePosition: "underline-position",
						underlineThickness: "underline-thickness",
						unicodeBidi: "unicode-bidi",
						unicodeRange: "unicode-range",
						unitsPerEm: "units-per-em",
						vAlphabetic: "v-alphabetic",
						vHanging: "v-hanging",
						vIdeographic: "v-ideographic",
						vMathematical: "v-mathematical",
						vectorEffect: "vector-effect",
						vertAdvY: "vert-adv-y",
						vertOriginX: "vert-origin-x",
						vertOriginY: "vert-origin-y",
						wordSpacing: "word-spacing",
						writingMode: "writing-mode",
						xHeight: "x-height",
						playbackOrder: "playbackorder",
						timelineBegin: "timelinebegin"
					},
					properties: {
						about: c.commaOrSpaceSeparated,
						accentHeight: c.number,
						accumulate: null,
						additive: null,
						alignmentBaseline: null,
						alphabetic: c.number,
						amplitude: c.number,
						arabicForm: null,
						ascent: c.number,
						attributeName: null,
						attributeType: null,
						azimuth: c.number,
						bandwidth: null,
						baselineShift: null,
						baseFrequency: null,
						baseProfile: null,
						bbox: null,
						begin: null,
						bias: c.number,
						by: null,
						calcMode: null,
						capHeight: c.number,
						className: c.spaceSeparated,
						clip: null,
						clipPath: null,
						clipPathUnits: null,
						clipRule: null,
						color: null,
						colorInterpolation: null,
						colorInterpolationFilters: null,
						colorProfile: null,
						colorRendering: null,
						content: null,
						contentScriptType: null,
						contentStyleType: null,
						crossOrigin: null,
						cursor: null,
						cx: null,
						cy: null,
						d: null,
						dataType: null,
						defaultAction: null,
						descent: c.number,
						diffuseConstant: c.number,
						direction: null,
						display: null,
						dur: null,
						divisor: c.number,
						dominantBaseline: null,
						download: c.boolean,
						dx: null,
						dy: null,
						edgeMode: null,
						editable: null,
						elevation: c.number,
						enableBackground: null,
						end: null,
						event: null,
						exponent: c.number,
						externalResourcesRequired: null,
						fill: null,
						fillOpacity: c.number,
						fillRule: null,
						filter: null,
						filterRes: null,
						filterUnits: null,
						floodColor: null,
						floodOpacity: null,
						focusable: null,
						focusHighlight: null,
						fontFamily: null,
						fontSize: null,
						fontSizeAdjust: null,
						fontStretch: null,
						fontStyle: null,
						fontVariant: null,
						fontWeight: null,
						format: null,
						fr: null,
						from: null,
						fx: null,
						fy: null,
						g1: c.commaSeparated,
						g2: c.commaSeparated,
						glyphName: c.commaSeparated,
						glyphOrientationHorizontal: null,
						glyphOrientationVertical: null,
						glyphRef: null,
						gradientTransform: null,
						gradientUnits: null,
						handler: null,
						hanging: c.number,
						hatchContentUnits: null,
						hatchUnits: null,
						height: null,
						href: null,
						hrefLang: null,
						horizAdvX: c.number,
						horizOriginX: c.number,
						horizOriginY: c.number,
						id: null,
						ideographic: c.number,
						imageRendering: null,
						initialVisibility: null,
						in: null,
						in2: null,
						intercept: c.number,
						k: c.number,
						k1: c.number,
						k2: c.number,
						k3: c.number,
						k4: c.number,
						kernelMatrix: c.commaOrSpaceSeparated,
						kernelUnitLength: null,
						keyPoints: null,
						keySplines: null,
						keyTimes: null,
						kerning: null,
						lang: null,
						lengthAdjust: null,
						letterSpacing: null,
						lightingColor: null,
						limitingConeAngle: c.number,
						local: null,
						markerEnd: null,
						markerMid: null,
						markerStart: null,
						markerHeight: null,
						markerUnits: null,
						markerWidth: null,
						mask: null,
						maskContentUnits: null,
						maskType: null,
						maskUnits: null,
						mathematical: null,
						max: null,
						media: null,
						mediaCharacterEncoding: null,
						mediaContentEncodings: null,
						mediaSize: c.number,
						mediaTime: null,
						method: null,
						min: null,
						mode: null,
						name: null,
						navDown: null,
						navDownLeft: null,
						navDownRight: null,
						navLeft: null,
						navNext: null,
						navPrev: null,
						navRight: null,
						navUp: null,
						navUpLeft: null,
						navUpRight: null,
						numOctaves: null,
						observer: null,
						offset: null,
						onAbort: null,
						onActivate: null,
						onAfterPrint: null,
						onBeforePrint: null,
						onBegin: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnd: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFocusIn: null,
						onFocusOut: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadStart: null,
						onMessage: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onMouseWheel: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRepeat: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onShow: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onZoom: null,
						opacity: null,
						operator: null,
						order: null,
						orient: null,
						orientation: null,
						origin: null,
						overflow: null,
						overlay: null,
						overlinePosition: c.number,
						overlineThickness: c.number,
						paintOrder: null,
						panose1: null,
						path: null,
						pathLength: c.number,
						patternContentUnits: null,
						patternTransform: null,
						patternUnits: null,
						phase: null,
						ping: c.spaceSeparated,
						pitch: null,
						playbackOrder: null,
						pointerEvents: null,
						points: null,
						pointsAtX: c.number,
						pointsAtY: c.number,
						pointsAtZ: c.number,
						preserveAlpha: null,
						preserveAspectRatio: null,
						primitiveUnits: null,
						propagate: null,
						property: c.commaOrSpaceSeparated,
						r: null,
						radius: null,
						referrerPolicy: null,
						refX: null,
						refY: null,
						rel: c.commaOrSpaceSeparated,
						rev: c.commaOrSpaceSeparated,
						renderingIntent: null,
						repeatCount: null,
						repeatDur: null,
						requiredExtensions: c.commaOrSpaceSeparated,
						requiredFeatures: c.commaOrSpaceSeparated,
						requiredFonts: c.commaOrSpaceSeparated,
						requiredFormats: c.commaOrSpaceSeparated,
						resource: null,
						restart: null,
						result: null,
						rotate: null,
						rx: null,
						ry: null,
						scale: null,
						seed: null,
						shapeRendering: null,
						side: null,
						slope: null,
						snapshotTime: null,
						specularConstant: c.number,
						specularExponent: c.number,
						spreadMethod: null,
						spacing: null,
						startOffset: null,
						stdDeviation: null,
						stemh: null,
						stemv: null,
						stitchTiles: null,
						stopColor: null,
						stopOpacity: null,
						strikethroughPosition: c.number,
						strikethroughThickness: c.number,
						string: null,
						stroke: null,
						strokeDashArray: c.commaOrSpaceSeparated,
						strokeDashOffset: null,
						strokeLineCap: null,
						strokeLineJoin: null,
						strokeMiterLimit: c.number,
						strokeOpacity: c.number,
						strokeWidth: null,
						style: null,
						surfaceScale: c.number,
						syncBehavior: null,
						syncBehaviorDefault: null,
						syncMaster: null,
						syncTolerance: null,
						syncToleranceDefault: null,
						systemLanguage: c.commaOrSpaceSeparated,
						tabIndex: c.number,
						tableValues: null,
						target: null,
						targetX: c.number,
						targetY: c.number,
						textAnchor: null,
						textDecoration: null,
						textRendering: null,
						textLength: null,
						timelineBegin: null,
						title: null,
						transformBehavior: null,
						type: null,
						typeOf: c.commaOrSpaceSeparated,
						to: null,
						transform: null,
						transformOrigin: null,
						u1: null,
						u2: null,
						underlinePosition: c.number,
						underlineThickness: c.number,
						unicode: null,
						unicodeBidi: null,
						unicodeRange: null,
						unitsPerEm: c.number,
						values: null,
						vAlphabetic: c.number,
						vMathematical: c.number,
						vectorEffect: null,
						vHanging: c.number,
						vIdeographic: c.number,
						version: null,
						vertAdvY: c.number,
						vertOriginX: c.number,
						vertOriginY: c.number,
						viewBox: null,
						viewTarget: null,
						visibility: null,
						width: null,
						widths: null,
						wordSpacing: null,
						writingMode: null,
						x: null,
						x1: null,
						x2: null,
						xChannelSelector: null,
						xHeight: c.number,
						y: null,
						y1: null,
						y2: null,
						yChannelSelector: null,
						z: null,
						zoomAndPan: null
					},
					space: "svg",
					transform: u
				}),
				f = o({
					properties: {
						xLinkActuate: null,
						xLinkArcRole: null,
						xLinkHref: null,
						xLinkRole: null,
						xLinkShow: null,
						xLinkTitle: null,
						xLinkType: null
					},
					space: "xlink",
					transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
				}),
				m = o({
					attributes: {
						xmlnsxlink: "xmlns:xlink"
					},
					properties: {
						xmlnsXLink: null,
						xmlns: null
					},
					space: "xmlns",
					transform: h
				}),
				E = o({
					properties: {
						xmlBase: null,
						xmlLang: null,
						xmlSpace: null
					},
					space: "xml",
					transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
				}),
				T = a([l, p, f, m, E], "html"),
				g = a([l, d, f, m, E], "svg")
		},
		7978: (e, t, n) => {
			n.d(t, {
				dc: () => i,
				VG: () => s
			});
			var r = n(9152),
				a = [],
				i = !1;

			function s(e, t, n, s) {
				"function" == typeof t && "function" != typeof n ? (s = n, n = t) : o = t;
				var o, c = (0, r.C)(o),
					l = s ? -1 : 1;
				(function e(r, o, u) {
					var h = r && "object" == typeof r ? r : {};
					if ("string" == typeof h.type) {
						var p = "string" == typeof h.tagName ? h.tagName : "string" == typeof h.name ? h.name : void 0;
						Object.defineProperty(d, "name", {
							value: "node (" + r.type + (p ? "<" + p + ">" : "") + ")"
						})
					}
					return d;

					function d() {
						var h, p, d, f, m = a;
						if ((!t || c(r, o, u[u.length - 1] || void 0)) && (m = Array.isArray(h = n(r, u)) ? h : "number" == typeof h ? [!0, h] : null == h ? a : [h])[0] === i) return m;
						if ("children" in r && r.children && r.children && "skip" !== m[0])
							for (d = (s ? r.children.length : -1) + l, f = u.concat(r); d > -1 && d < r.children.length;) {
								if ((p = e(r.children[d], d, f)())[0] === i) return p;
								d = "number" == typeof p[1] ? p[1] : d + l
							}
						return m
					}
				})(e, void 0, [])()
			}
		},
		8073: (e, t, n) => {
			n.d(t, {
				oz: () => nt
			});
			var r = {};
			n.r(r), n.d(r, {
				attentionMarkers: () => e9,
				contentInitial: () => e0,
				disable: () => e6,
				document: () => e$,
				flow: () => e2,
				flowInitial: () => e1,
				insideSpan: () => e5,
				string: () => e3,
				text: () => e4
			});
			var a = n(1106),
				i = n(8472),
				s = n(2565),
				o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
				c = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
				l = {};

			function u(e, t) {
				return ((t || l).jsx ? c : o).test(e)
			}
			var h = /[ \t\n\f\r]/g;

			function p(e) {
				return "" === e.replace(h, "")
			}
			var d = n(7774),
				f = n(1871),
				m = {
					classId: "classID",
					dataType: "datatype",
					itemId: "itemID",
					strokeDashArray: "strokeDasharray",
					strokeDashOffset: "strokeDashoffset",
					strokeLineCap: "strokeLinecap",
					strokeLineJoin: "strokeLinejoin",
					strokeMiterLimit: "strokeMiterlimit",
					typeOf: "typeof",
					xLinkActuate: "xlinkActuate",
					xLinkArcRole: "xlinkArcrole",
					xLinkHref: "xlinkHref",
					xLinkRole: "xlinkRole",
					xLinkShow: "xlinkShow",
					xLinkTitle: "xlinkTitle",
					xLinkType: "xlinkType",
					xmlnsXLink: "xmlnsXlink"
				},
				E = n(3326),
				T = n(3679),
				g = n(975);

			function A(e) {
				return e && "object" == typeof e ? "position" in e || "type" in e ? S(e.position) : "start" in e || "end" in e ? S(e) : "line" in e || "column" in e ? _(e) : "" : ""
			}

			function _(e) {
				return O(e && e.line) + ":" + O(e && e.column)
			}

			function S(e) {
				return _(e && e.start) + "-" + _(e && e.end)
			}

			function O(e) {
				return e && "number" == typeof e ? e : 1
			}

			function I(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}
			class N extends Error {
				constructor(e, t, n) {
					super(), "string" == typeof t && (n = t, t = void 0);
					var r = "",
						i = {},
						s = !1;
					if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? {
							place: t
						} : "type" in t ? {
							ancestors: [t],
							place: t.position
						} : function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? I(Object(n), !0).forEach(function(t) {
									(0, a.A)(e, t, n[t])
								}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								})
							}
							return e
						}({}, t)), "string" == typeof e ? r = e : !i.cause && e && (s = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
						var o = n.indexOf(":"); - 1 === o ? i.ruleId = n : (i.source = n.slice(0, o), i.ruleId = n.slice(o + 1))
					}
					if (!i.place && i.ancestors && i.ancestors) {
						var c = i.ancestors[i.ancestors.length - 1];
						c && (i.place = c.position)
					}
					var l = i.place && "start" in i.place ? i.place.start : i.place;
					this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = l ? l.line : void 0, this.name = A(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = s && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0
				}
			}
			N.prototype.file = "", N.prototype.name = "", N.prototype.reason = "", N.prototype.message = "", N.prototype.stack = "", N.prototype.column = void 0, N.prototype.line = void 0, N.prototype.ancestors = void 0, N.prototype.cause = void 0, N.prototype.fatal = void 0, N.prototype.place = void 0, N.prototype.ruleId = void 0, N.prototype.source = void 0;
			var k = {}.hasOwnProperty,
				b = new Map,
				C = /[A-Z]/g,
				v = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
				D = new Set(["td", "th"]),
				y = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

			function R(e, t, n) {
				var r, a, o, c, l, u, h, g, A, _, S, O, I, b, R, F, H, U, G, j;
				return "element" === t.type ? (r = e, a = t, o = n, l = c = r.schema, "svg" === a.tagName.toLowerCase() && "html" === c.space && (r.schema = d.JW), r.ancestors.push(a), u = x(r, a.tagName, !1), h = function(e, t) {
					var n, r, a = {};
					for (r in t.properties)
						if ("children" !== r && k.call(t.properties, r)) {
							var i = function(e, t, n) {
								var r = (0, f.I)(e.schema, t);
								if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
									if (Array.isArray(n) && (n = r.commaSeparated ? (0, s.A)(n) : (0, E.A)(n)), "style" === r.property) {
										var a = "object" == typeof n ? n : function(e, t) {
											try {
												return T(t, {
													reactCompat: !0
												})
											} catch (t) {
												if (e.ignoreInvalidStyle) return {};
												var n = new N("Cannot parse `style` attribute", {
													ancestors: e.ancestors,
													cause: t,
													ruleId: "style",
													source: "hast-util-to-jsx-runtime"
												});
												throw n.file = e.filePath || void 0, n.url = y + "#cannot-parse-style-attribute", n
											}
										}(e, String(n));
										return "css" === e.stylePropertyNameCase && (a = function(e) {
											var t, n = {};
											for (t in e) k.call(e, t) && (n[function(e) {
												var t = e.replace(C, B);
												return "ms-" === t.slice(0, 3) && (t = "-" + t), t
											}(t)] = e[t]);
											return n
										}(a)), ["style", a]
									}
									return ["react" === e.elementAttributeNameCase && r.space ? m[r.property] || r.property : r.attribute, n]
								}
							}(e, r, t.properties[r]);
							if (i) {
								var [o, c] = i;
								e.tableCellAlignToStyle && "align" === o && "string" == typeof c && D.has(t.tagName) ? n = c : a[o] = c
							}
						} return n && ((a.style || (a.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), a
				}(r, a), g = M(r, a), v.has(a.tagName) && (g = g.filter(function(e) {
					return "string" != typeof e || !("object" == typeof e ? "text" === e.type && p(e.value) : p(e))
				})), L(r, h, u, a), P(h, g), r.ancestors.pop(), r.schema = c, r.create(a, u, h, o)) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
					if (t.data && t.data.estree && e.evaluater) {
						var n = t.data.estree.body[0];
						return (0, i.ok)("ExpressionStatement" === n.type), e.evaluater.evaluateExpression(n.expression)
					}
					w(e, t.position)
				}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? (A = e, _ = t, S = n, I = O = A.schema, "svg" === _.name && "html" === O.space && (A.schema = d.JW), A.ancestors.push(_), b = null === _.name ? A.Fragment : x(A, _.name, !0), R = function(e, t) {
					var n = {};
					for (var r of t.attributes)
						if ("mdxJsxExpressionAttribute" === r.type)
							if (r.data && r.data.estree && e.evaluater) {
								var a = r.data.estree.body[0];
								(0, i.ok)("ExpressionStatement" === a.type);
								var s = a.expression;
								(0, i.ok)("ObjectExpression" === s.type);
								var o = s.properties[0];
								(0, i.ok)("SpreadElement" === o.type), Object.assign(n, e.evaluater.evaluateExpression(o.argument))
							} else w(e, t.position);
					else {
						var c = r.name,
							l = void 0;
						if (r.value && "object" == typeof r.value)
							if (r.value.data && r.value.data.estree && e.evaluater) {
								var u = r.value.data.estree.body[0];
								(0, i.ok)("ExpressionStatement" === u.type), l = e.evaluater.evaluateExpression(u.expression)
							} else w(e, t.position);
						else l = null === r.value || r.value;
						n[c] = l
					}
					return n
				}(A, _), F = M(A, _), L(A, R, b, _), P(R, F), A.ancestors.pop(), A.schema = O, A.create(_, b, R, S)) : "mdxjsEsm" === t.type ? function(e, t) {
					if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
					w(e, t.position)
				}(e, t) : "root" === t.type ? (H = e, U = t, G = n, P(j = {}, M(H, U)), H.create(U, H.Fragment, j, G)) : "text" === t.type ? t.value : void 0
			}

			function L(e, t, n, r) {
				"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r)
			}

			function P(e, t) {
				if (t.length > 0) {
					var n = t.length > 1 ? t : t[0];
					n && (e.children = n)
				}
			}

			function M(e, t) {
				for (var n = [], r = -1, a = e.passKeys ? new Map : b; ++r < t.children.length;) {
					var i = t.children[r],
						s = void 0;
					if (e.passKeys) {
						var o = "element" === i.type ? i.tagName : "mdxJsxFlowElement" === i.type || "mdxJsxTextElement" === i.type ? i.name : void 0;
						if (o) {
							var c = a.get(o) || 0;
							s = o + "-" + c, a.set(o, c + 1)
						}
					}
					var l = R(e, i, s);
					void 0 !== l && n.push(l)
				}
				return n
			}

			function x(e, t, n) {
				var r;
				if (n)
					if (t.includes(".")) {
						for (var a, s = t.split("."), o = -1; ++o < s.length;) {
							var c = u(s[o]) ? {
								type: "Identifier",
								name: s[o]
							} : {
								type: "Literal",
								value: s[o]
							};
							a = a ? {
								type: "MemberExpression",
								object: a,
								property: c,
								computed: !!(o && "Literal" === c.type),
								optional: !1
							} : c
						}(0, i.ok)(a, "always a result"), r = a
					} else r = u(t) && !/^[a-z]/.test(t) ? {
						type: "Identifier",
						name: t
					} : {
						type: "Literal",
						value: t
					};
				else r = {
					type: "Literal",
					value: t
				};
				if ("Literal" === r.type) {
					var l = r.value;
					return k.call(e.components, l) ? e.components[l] : l
				}
				if (e.evaluater) return e.evaluater.evaluateExpression(r);
				w(e)
			}

			function w(e, t) {
				var n = new N("Cannot handle MDX estrees without `createEvaluater`", {
					ancestors: e.ancestors,
					place: t,
					ruleId: "mdx-estree",
					source: "hast-util-to-jsx-runtime"
				});
				throw n.file = e.filePath || void 0, n.url = y + "#cannot-handle-mdx-estrees-without-createevaluater", n
			}

			function B(e) {
				return "-" + e.toLowerCase()
			}
			var F = {
					action: ["form"],
					cite: ["blockquote", "del", "ins", "q"],
					data: ["object"],
					formAction: ["button", "input"],
					href: ["a", "area", "base", "link"],
					icon: ["menuitem"],
					itemId: null,
					manifest: ["html"],
					ping: ["a", "area"],
					poster: ["video"],
					src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
				},
				H = n(5155);
			n(2115);
			var U = n(457),
				G = n(9554);
			class j {
				constructor(e) {
					this.left = e ? [...e] : [], this.right = []
				}
				get(e) {
					if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
					return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
				}
				get length() {
					return this.left.length + this.right.length
				}
				shift() {
					return this.setCursor(0), this.right.pop()
				}
				slice(e, t) {
					var n = null == t ? 1 / 0 : t;
					return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
				}
				splice(e, t, n) {
					this.setCursor(Math.trunc(e));
					var r = this.right.splice(this.right.length - (t || 0), 1 / 0);
					return n && Y(this.left, n), r.reverse()
				}
				pop() {
					return this.setCursor(1 / 0), this.left.pop()
				}
				push(e) {
					this.setCursor(1 / 0), this.left.push(e)
				}
				pushMany(e) {
					this.setCursor(1 / 0), Y(this.left, e)
				}
				unshift(e) {
					this.setCursor(0), this.right.push(e)
				}
				unshiftMany(e) {
					this.setCursor(0), Y(this.right, e.reverse())
				}
				setCursor(e) {
					if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length))
						if (e < this.left.length) {
							var t = this.left.splice(e, 1 / 0);
							Y(this.right, t.reverse())
						} else {
							var n = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
							Y(this.left, n.reverse())
						}
				}
			}

			function Y(e, t) {
				var n = 0;
				if (t.length < 1e4) e.push(...t);
				else
					for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
			}

			function z(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function W(e) {
				for (var t, n, r, i, s, o, c, l = {}, u = -1, h = new j(e); ++u < h.length;) {
					for (; u in l;) u = l[u];
					if (t = h.get(u), u && "chunkFlow" === t[1].type && "listItemPrefix" === h.get(u - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type))
						for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
					if ("enter" === t[0]) t[1].contentType && (Object.assign(l, function(e, t) {
						var n, r, a = e.get(t)[1],
							i = e.get(t)[2],
							s = t - 1,
							o = [],
							c = a._tokenizer;
						!c && (c = i.parser[a.contentType](a.start), a._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
						for (var l = c.events, u = [], h = {}, p = -1, d = a, f = 0, m = 0, E = [0]; d;) {
							for (; e.get(++s)[1] !== d;);
							o.push(s), !d._tokenizer && (n = i.sliceStream(d), d.next || n.push(null), r && c.defineSkip(d.start), d._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(n), d._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), r = d, d = d.next
						}
						for (d = a; ++p < l.length;) "exit" === l[p][0] && "enter" === l[p - 1][0] && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line && (m = p + 1, E.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
						for (c.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : E.pop(), p = E.length; p--;) {
							var T = l.slice(E[p], E[p + 1]),
								g = o.pop();
							u.push([g, g + T.length - 1]), e.splice(g, 2, T)
						}
						for (u.reverse(), p = -1; ++p < u.length;) h[f + u[p][0]] = f + u[p][1], f += u[p][1] - u[p][0] - 1;
						return h
					}(h, u)), u = l[u], c = !0);
					else if (t[1]._container) {
						for (r = u, n = void 0; r--;)
							if ("lineEnding" === (i = h.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (h.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
							else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
						else break;
						n && (t[1].end = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? z(Object(n), !0).forEach(function(t) {
									(0, a.A)(e, t, n[t])
								}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								})
							}
							return e
						}({}, h.get(n)[1].start), (s = h.slice(n, u)).unshift(t), h.splice(n, u - n + 1, s))
					}
				}
				return (0, G.m)(e, 0, 1 / 0, h.slice(0)), !c
			}
			var q = n(7082),
				V = n(7666),
				Q = n(269),
				K = {
					tokenize: function(e) {
						var t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
							return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, V.N)(e, n, "linePrefix"))
						}, function(n) {
							return e.enter("paragraph"),
								function n(r) {
									var a = e.enter("chunkText", {
										contentType: "text",
										previous: t
									});
									return t && (t.next = a), t = a,
										function t(r) {
											if (null === r) {
												e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
												return
											}
											return (0, Q.HP)(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
										}(r)
								}(n)
						});
						return n
					}
				};

			function X(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function J(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? X(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var Z = {
					tokenize: function(e) {
						var t, n, r, a = this,
							i = [],
							s = 0;
						return o;

						function o(t) {
							if (s < i.length) {
								var n = i[s];
								return a.containerState = n[1], e.attempt(n[0].continuation, c, l)(t)
							}
							return l(t)
						}

						function c(e) {
							if (s++, a.containerState._closeFlow) {
								a.containerState._closeFlow = void 0, t && T();
								for (var n, r = a.events.length, i = r; i--;)
									if ("exit" === a.events[i][0] && "chunkFlow" === a.events[i][1].type) {
										n = a.events[i][1].end;
										break
									} E(s);
								for (var c = r; c < a.events.length;) a.events[c][1].end = J({}, n), c++;
								return (0, G.m)(a.events, i + 1, 0, a.events.slice(r)), a.events.length = c, l(e)
							}
							return o(e)
						}

						function l(n) {
							if (s === i.length) {
								if (!t) return p(n);
								if (t.currentConstruct && t.currentConstruct.concrete) return f(n);
								a.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
							}
							return a.containerState = {}, e.check($, u, h)(n)
						}

						function u(e) {
							return t && T(), E(s), p(e)
						}

						function h(e) {
							return a.parser.lazy[a.now().line] = s !== i.length, r = a.now().offset, f(e)
						}

						function p(t) {
							return a.containerState = {}, e.attempt($, d, f)(t)
						}

						function d(e) {
							return s++, i.push([a.currentConstruct, a.containerState]), p(e)
						}

						function f(r) {
							if (null === r) {
								t && T(), E(0), e.consume(r);
								return
							}
							return t = t || a.parser.flow(a.now()), e.enter("chunkFlow", {
									_tokenizer: t,
									contentType: "flow",
									previous: n
								}),
								function t(n) {
									if (null === n) {
										m(e.exit("chunkFlow"), !0), E(0), e.consume(n);
										return
									}
									return (0, Q.HP)(n) ? (e.consume(n), m(e.exit("chunkFlow")), s = 0, a.interrupt = void 0, o) : (e.consume(n), t)
								}(r)
						}

						function m(e, i) {
							var o = a.sliceStream(e);
							if (i && o.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(o), a.parser.lazy[e.start.line]) {
								for (var c, l, u = t.events.length; u--;)
									if (t.events[u][1].start.offset < r && (!t.events[u][1].end || t.events[u][1].end.offset > r)) return;
								for (var h = a.events.length, p = h; p--;)
									if ("exit" === a.events[p][0] && "chunkFlow" === a.events[p][1].type) {
										if (c) {
											l = a.events[p][1].end;
											break
										}
										c = !0
									} for (E(s), u = h; u < a.events.length;) a.events[u][1].end = J({}, l), u++;
								(0, G.m)(a.events, p + 1, 0, a.events.slice(h)), a.events.length = u
							}
						}

						function E(t) {
							for (var n = i.length; n-- > t;) {
								var r = i[n];
								a.containerState = r[1], r[0].exit.call(a, e)
							}
							i.length = t
						}

						function T() {
							t.write([null]), n = void 0, t = void 0, a.containerState._closeFlow = void 0
						}
					}
				},
				$ = {
					tokenize: function(e, t, n) {
						return (0, V.N)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
					}
				},
				ee = n(2136),
				et = {
					resolve: function(e) {
						return W(e), e
					},
					tokenize: function(e, t) {
						var n;
						return function(t) {
							return e.enter("content"), n = e.enter("chunkContent", {
								contentType: "content"
							}), r(t)
						};

						function r(t) {
							return null === t ? a(t) : (0, Q.HP)(t) ? e.check(en, i, a)(t) : (e.consume(t), r)
						}

						function a(n) {
							return e.exit("chunkContent"), e.exit("content"), t(n)
						}

						function i(t) {
							return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
								contentType: "content",
								previous: n
							}), n = n.next, r
						}
					}
				},
				en = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, V.N)(e, a, "linePrefix")
						};

						function a(a) {
							if (null === a || (0, Q.HP)(a)) return n(a);
							var i = r.events[r.events.length - 1];
							return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a)
						}
					}
				},
				er = {
					tokenize: function(e) {
						var t = this,
							n = e.attempt(ee.B, function(r) {
								return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n)
							}, e.attempt(this.parser.constructs.flowInitial, r, (0, V.N)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(et, r)), "linePrefix")));
						return n;

						function r(r) {
							return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n)
						}
					}
				};

			function ea(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function ei(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ea(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var es = {
					resolveAll: eu()
				},
				eo = el("string"),
				ec = el("text");

			function el(e) {
				return {
					resolveAll: eu("text" === e ? eh : void 0),
					tokenize: function(t) {
						var n = this,
							r = this.parser.constructs[e],
							a = t.attempt(r, i, s);
						return i;

						function i(e) {
							return c(e) ? a(e) : s(e)
						}

						function s(e) {
							return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), o)
						}

						function o(e) {
							return c(e) ? (t.exit("data"), a(e)) : (t.consume(e), o)
						}

						function c(e) {
							if (null === e) return !0;
							var t = r[e],
								a = -1;
							if (t)
								for (; ++a < t.length;) {
									var i = t[a];
									if (!i.previous || i.previous.call(n, n.previous)) return !0
								}
							return !1
						}
					}
				}
			}

			function eu(e) {
				return function(t, n) {
					for (var r, a = -1; ++a <= t.length;) void 0 === r ? t[a] && "data" === t[a][1].type && (r = a, a++) : t[a] && "data" === t[a][1].type || (a !== r + 2 && (t[r][1].end = t[a - 1][1].end, t.splice(r + 2, a - r - 2), a = r + 2), r = void 0);
					return e ? e(t, n) : t
				}
			}

			function eh(e, t) {
				for (var n = 0; ++n <= e.length;)
					if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
						for (var r = e[n - 1][1], a = t.sliceStream(r), i = a.length, s = -1, o = 0, c = void 0; i--;) {
							var l = a[i];
							if ("string" == typeof l) {
								for (s = l.length; 32 === l.charCodeAt(s - 1);) o++, s--;
								if (s) break;
								s = -1
							} else if (-2 === l) c = !0, o++;
							else if (-1 === l);
							else {
								i++;
								break
							}
						}
						if (t._contentTypeTextTrailing && n === e.length && (o = 0), o) {
							var u = {
								type: n === e.length || c || o < 2 ? "lineSuffix" : "hardBreakTrailing",
								start: {
									_bufferIndex: i ? s : r.start._bufferIndex + s,
									_index: r.start._index + i,
									line: r.end.line,
									column: r.end.column - o,
									offset: r.end.offset - o
								},
								end: ei({}, r.end)
							};
							r.end = ei({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
						}
						n++
					} return e
			}
			var ep = {
					name: "thematicBreak",
					tokenize: function(e, t, n) {
						var r, a = 0;
						return function(i) {
							var s;
							return e.enter("thematicBreak"), r = s = i,
								function i(s) {
									return s === r ? (e.enter("thematicBreakSequence"), function t(n) {
										return n === r ? (e.consume(n), a++, t) : (e.exit("thematicBreakSequence"), (0, Q.On)(n) ? (0, V.N)(e, i, "whitespace")(n) : i(n))
									}(s)) : a >= 3 && (null === s || (0, Q.HP)(s)) ? (e.exit("thematicBreak"), t(s)) : n(s)
								}(s)
						}
					}
				},
				ed = {
					continuation: {
						tokenize: function(e, t, n) {
							var r = this;
							return r.containerState._closeFlow = void 0, e.check(ee.B, function(n) {
								return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, (0, V.N)(e, t, "listItemIndent", r.containerState.size + 1)(n)
							}, function(n) {
								return r.containerState.furtherBlankLines || !(0, Q.On)(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(em, t, a)(n))
							});

							function a(a) {
								return r.containerState._closeFlow = !0, r.interrupt = void 0, (0, V.N)(e, e.attempt(ed, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
							}
						}
					},
					exit: function(e) {
						e.exit(this.containerState.type)
					},
					name: "list",
					tokenize: function(e, t, n) {
						var r = this,
							a = r.events[r.events.length - 1],
							i = a && "linePrefix" === a[1].type ? a[2].sliceSerialize(a[1], !0).length : 0,
							s = 0;
						return function(t) {
							var a = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
							if ("listUnordered" === a ? !r.containerState.marker || t === r.containerState.marker : (0, Q.BM)(t)) {
								if (r.containerState.type || (r.containerState.type = a, e.enter(a, {
										_container: !0
									})), "listUnordered" === a) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ep, n, o)(t) : o(t);
								if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
									function t(a) {
										return (0, Q.BM)(a) && ++s < 10 ? (e.consume(a), t) : (!r.interrupt || s < 2) && (r.containerState.marker ? a === r.containerState.marker : 41 === a || 46 === a) ? (e.exit("listItemValue"), o(a)) : n(a)
									}(t)
							}
							return n(t)
						};

						function o(t) {
							return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(ee.B, r.interrupt ? n : c, e.attempt(ef, u, l))
						}

						function c(e) {
							return r.containerState.initialBlankLine = !0, i++, u(e)
						}

						function l(t) {
							return (0, Q.On)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), u) : n(t)
						}

						function u(n) {
							return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
						}
					}
				},
				ef = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return (0, V.N)(e, function(e) {
							var a = r.events[r.events.length - 1];
							return !(0, Q.On)(e) && a && "listItemPrefixWhitespace" === a[1].type ? t(e) : n(e)
						}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
					}
				},
				em = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return (0, V.N)(e, function(e) {
							var a = r.events[r.events.length - 1];
							return a && "listItemIndent" === a[1].type && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(e) : n(e)
						}, "listItemIndent", r.containerState.size + 1)
					}
				},
				eE = {
					continuation: {
						tokenize: function(e, t, n) {
							var r = this;
							return function(t) {
								return (0, Q.On)(t) ? (0, V.N)(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t)
							};

							function a(r) {
								return e.attempt(eE, t, n)(r)
							}
						}
					},
					exit: function(e) {
						e.exit("blockQuote")
					},
					name: "blockQuote",
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							if (62 === t) {
								var i = r.containerState;
								return i.open || (e.enter("blockQuote", {
									_container: !0
								}), i.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a
							}
							return n(t)
						};

						function a(n) {
							return (0, Q.On)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
						}
					}
				};

			function eT(e, t, n, r, a, i, s, o, c) {
				var l = c || 1 / 0,
					u = 0;
				return function(t) {
					return 60 === t ? (e.enter(r), e.enter(a), e.enter(i), e.consume(t), e.exit(i), h) : null === t || 32 === t || 41 === t || (0, Q.JQ)(t) ? n(t) : (e.enter(r), e.enter(s), e.enter(o), e.enter("chunkString", {
						contentType: "string"
					}), f(t))
				};

				function h(n) {
					return 62 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(a), e.exit(r), t) : (e.enter(o), e.enter("chunkString", {
						contentType: "string"
					}), p(n))
				}

				function p(t) {
					return 62 === t ? (e.exit("chunkString"), e.exit(o), h(t)) : null === t || 60 === t || (0, Q.HP)(t) ? n(t) : (e.consume(t), 92 === t ? d : p)
				}

				function d(t) {
					return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
				}

				function f(a) {
					return !u && (null === a || 41 === a || (0, Q.Ee)(a)) ? (e.exit("chunkString"), e.exit(o), e.exit(s), e.exit(r), t(a)) : u < l && 40 === a ? (e.consume(a), u++, f) : 41 === a ? (e.consume(a), u--, f) : null === a || 32 === a || 40 === a || (0, Q.JQ)(a) ? n(a) : (e.consume(a), 92 === a ? m : f)
				}

				function m(t) {
					return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t)
				}
			}

			function eg(e, t, n, r, a, i) {
				var s, o = this,
					c = 0;
				return function(t) {
					return e.enter(r), e.enter(a), e.consume(t), e.exit(a), e.enter(i), l
				};

				function l(h) {
					return c > 999 || null === h || 91 === h || 93 === h && !s || 94 === h && !c && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : 93 === h ? (e.exit(i), e.enter(a), e.consume(h), e.exit(a), e.exit(r), t) : (0, Q.HP)(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), l) : (e.enter("chunkString", {
						contentType: "string"
					}), u(h))
				}

				function u(t) {
					return null === t || 91 === t || 93 === t || (0, Q.HP)(t) || c++ > 999 ? (e.exit("chunkString"), l(t)) : (e.consume(t), s || (s = !(0, Q.On)(t)), 92 === t ? h : u)
				}

				function h(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, u) : u(t)
				}
			}

			function eA(e, t, n, r, a, i) {
				var s;
				return function(t) {
					return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(a), e.consume(t), e.exit(a), s = 40 === t ? 41 : t, o) : n(t)
				};

				function o(n) {
					return n === s ? (e.enter(a), e.consume(n), e.exit(a), e.exit(r), t) : (e.enter(i), c(n))
				}

				function c(t) {
					return t === s ? (e.exit(i), o(s)) : null === t ? n(t) : (0, Q.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, V.N)(e, c, "linePrefix")) : (e.enter("chunkString", {
						contentType: "string"
					}), l(t))
				}

				function l(t) {
					return t === s || null === t || (0, Q.HP)(t) ? (e.exit("chunkString"), c(t)) : (e.consume(t), 92 === t ? u : l)
				}

				function u(t) {
					return t === s || 92 === t ? (e.consume(t), l) : l(t)
				}
			}

			function e_(e, t) {
				var n;
				return function r(a) {
					return (0, Q.HP)(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), n = !0, r) : (0, Q.On)(a) ? (0, V.N)(e, r, n ? "linePrefix" : "lineSuffix")(a) : t(a)
				}
			}
			var eS = n(7373),
				eO = {
					partial: !0,
					tokenize: function(e, t, n) {
						return function(t) {
							return (0, Q.Ee)(t) ? e_(e, r)(t) : n(t)
						};

						function r(t) {
							return eA(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
						}

						function a(t) {
							return (0, Q.On)(t) ? (0, V.N)(e, i, "whitespace")(t) : i(t)
						}

						function i(e) {
							return null === e || (0, Q.HP)(e) ? t(e) : n(e)
						}
					}
				},
				eI = {
					name: "codeIndented",
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return e.enter("codeIndented"), (0, V.N)(e, a, "linePrefix", 5)(t)
						};

						function a(t) {
							var a = r.events[r.events.length - 1];
							return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? function t(n) {
								return null === n ? i(n) : (0, Q.HP)(n) ? e.attempt(eN, t, i)(n) : (e.enter("codeFlowValue"), function n(r) {
									return null === r || (0, Q.HP)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
								}(n))
							}(t) : n(t)
						}

						function i(n) {
							return e.exit("codeIndented"), t(n)
						}
					}
				},
				eN = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return a;

						function a(t) {
							return r.parser.lazy[r.now().line] ? n(t) : (0, Q.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : (0, V.N)(e, i, "linePrefix", 5)(t)
						}

						function i(e) {
							var i = r.events[r.events.length - 1];
							return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(e) : (0, Q.HP)(e) ? a(e) : n(e)
						}
					}
				};

			function ek(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function eb(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ek(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ek(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var eC = {
					name: "setextUnderline",
					resolveTo: function(e, t) {
						for (var n, r, a, i = e.length; i--;)
							if ("enter" === e[i][0]) {
								if ("content" === e[i][1].type) {
									n = i;
									break
								}
								"paragraph" === e[i][1].type && (r = i)
							} else "content" === e[i][1].type && e.splice(i, 1), a || "definition" !== e[i][1].type || (a = i);
						var s = {
							type: "setextHeading",
							start: eb({}, e[n][1].start),
							end: eb({}, e[e.length - 1][1].end)
						};
						return e[r][1].type = "setextHeadingText", a ? (e.splice(r, 0, ["enter", s, t]), e.splice(a + 1, 0, ["exit", e[n][1], t]), e[n][1].end = eb({}, e[a][1].end)) : e[n][1] = s, e.push(["exit", s, t]), e
					},
					tokenize: function(e, t, n) {
						var r, a = this;
						return function(t) {
							for (var s, o, c = a.events.length; c--;)
								if ("lineEnding" !== a.events[c][1].type && "linePrefix" !== a.events[c][1].type && "content" !== a.events[c][1].type) {
									o = "paragraph" === a.events[c][1].type;
									break
								} return !a.parser.lazy[a.now().line] && (a.interrupt || o) ? (e.enter("setextHeadingLine"), r = t, s = t, e.enter("setextHeadingLineSequence"), function t(n) {
								return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), (0, Q.On)(n) ? (0, V.N)(e, i, "lineSuffix")(n) : i(n))
							}(s)) : n(t)
						};

						function i(r) {
							return null === r || (0, Q.HP)(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
						}
					}
				},
				ev = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
				eD = ["pre", "script", "style", "textarea"],
				ey = {
					partial: !0,
					tokenize: function(e, t, n) {
						return function(r) {
							return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(ee.B, t, n)
						}
					}
				},
				eR = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return (0, Q.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t)
						};

						function a(e) {
							return r.parser.lazy[r.now().line] ? n(e) : t(e)
						}
					}
				},
				eL = {
					partial: !0,
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a)
						};

						function a(e) {
							return r.parser.lazy[r.now().line] ? n(e) : t(e)
						}
					}
				},
				eP = {
					concrete: !0,
					name: "codeFenced",
					tokenize: function(e, t, n) {
						var r, a = this,
							i = {
								partial: !0,
								tokenize: function(e, t, n) {
									var i = 0;
									return function(t) {
										return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s
									};

									function s(t) {
										return e.enter("codeFencedFence"), (0, Q.On)(t) ? (0, V.N)(e, c, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : c(t)
									}

									function c(t) {
										return t === r ? (e.enter("codeFencedFenceSequence"), function t(a) {
											return a === r ? (i++, e.consume(a), t) : i >= o ? (e.exit("codeFencedFenceSequence"), (0, Q.On)(a) ? (0, V.N)(e, l, "whitespace")(a) : l(a)) : n(a)
										}(t)) : n(t)
									}

									function l(r) {
										return null === r || (0, Q.HP)(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
									}
								}
							},
							s = 0,
							o = 0;
						return function(t) {
							var i, l;
							return i = t, s = (l = a.events[a.events.length - 1]) && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, r = i, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
								function t(a) {
									return a === r ? (o++, e.consume(a), t) : o < 3 ? n(a) : (e.exit("codeFencedFenceSequence"), (0, Q.On)(a) ? (0, V.N)(e, c, "whitespace")(a) : c(a))
								}(i)
						};

						function c(i) {
							return null === i || (0, Q.HP)(i) ? (e.exit("codeFencedFence"), a.interrupt ? t(i) : e.check(eL, u, f)(i)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
								contentType: "string"
							}), function t(a) {
								return null === a || (0, Q.HP)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(a)) : (0, Q.On)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, V.N)(e, l, "whitespace")(a)) : 96 === a && a === r ? n(a) : (e.consume(a), t)
							}(i))
						}

						function l(t) {
							return null === t || (0, Q.HP)(t) ? c(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
								contentType: "string"
							}), function t(a) {
								return null === a || (0, Q.HP)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(a)) : 96 === a && a === r ? n(a) : (e.consume(a), t)
							}(t))
						}

						function u(t) {
							return e.attempt(i, f, h)(t)
						}

						function h(t) {
							return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p
						}

						function p(t) {
							return s > 0 && (0, Q.On)(t) ? (0, V.N)(e, d, "linePrefix", s + 1)(t) : d(t)
						}

						function d(t) {
							return null === t || (0, Q.HP)(t) ? e.check(eL, u, f)(t) : (e.enter("codeFlowValue"), function t(n) {
								return null === n || (0, Q.HP)(n) ? (e.exit("codeFlowValue"), d(n)) : (e.consume(n), t)
							}(t))
						}

						function f(n) {
							return e.exit("codeFenced"), t(n)
						}
					}
				},
				eM = document.createElement("i");

			function ex(e) {
				var t = "&" + e + ";";
				eM.innerHTML = t;
				var n = eM.textContent;
				return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
			}
			var ew = {
					name: "characterReference",
					tokenize: function(e, t, n) {
						var r, a, i = this,
							s = 0;
						return function(t) {
							return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), o
						};

						function o(t) {
							return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), r = 31, a = Q.lV, l(t))
						}

						function c(t) {
							return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, a = Q.ok, l) : (e.enter("characterReferenceValue"), r = 7, a = Q.BM, l(t))
						}

						function l(o) {
							if (59 === o && s) {
								var c = e.exit("characterReferenceValue");
								return a !== Q.lV || ex(i.sliceSerialize(c)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)
							}
							return a(o) && s++ < r ? (e.consume(o), l) : n(o)
						}
					}
				},
				eB = {
					name: "characterEscape",
					tokenize: function(e, t, n) {
						return function(t) {
							return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
						};

						function r(r) {
							return (0, Q.ol)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
						}
					}
				},
				eF = {
					name: "lineEnding",
					tokenize: function(e, t) {
						return function(n) {
							return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, V.N)(e, t, "linePrefix")
						}
					}
				},
				eH = n(9004);

			function eU(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function eG(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eU(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eU(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var ej = {
					name: "labelEnd",
					resolveAll: function(e) {
						for (var t = -1, n = []; ++t < e.length;) {
							var r = e[t][1];
							if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
								var a = "labelImage" === r.type ? 4 : 2;
								r.type = "data", t += a
							}
						}
						return e.length !== n.length && (0, G.m)(e, 0, e.length, n), e
					},
					resolveTo: function(e, t) {
						for (var n, r, a, i, s = e.length, o = 0; s--;)
							if (n = e[s][1], r) {
								if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
								"enter" === e[s][0] && "labelLink" === n.type && (n._inactive = !0)
							} else if (a) {
							if ("enter" === e[s][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = s, "labelLink" !== n.type)) {
								o = 2;
								break
							}
						} else "labelEnd" === n.type && (a = s);
						var c = {
								type: "labelLink" === e[r][1].type ? "link" : "image",
								start: eG({}, e[r][1].start),
								end: eG({}, e[e.length - 1][1].end)
							},
							l = {
								type: "label",
								start: eG({}, e[r][1].start),
								end: eG({}, e[a][1].end)
							},
							u = {
								type: "labelText",
								start: eG({}, e[r + o + 2][1].end),
								end: eG({}, e[a - 2][1].start)
							};
						return i = [
							["enter", c, t],
							["enter", l, t]
						], i = (0, G.V)(i, e.slice(r + 1, r + o + 3)), i = (0, G.V)(i, [
							["enter", u, t]
						]), i = (0, G.V)(i, (0, eH.W)(t.parser.constructs.insideSpan.null, e.slice(r + o + 4, a - 3), t)), i = (0, G.V)(i, [
							["exit", u, t], e[a - 2], e[a - 1],
							["exit", l, t]
						]), i = (0, G.V)(i, e.slice(a + 1)), i = (0, G.V)(i, [
							["exit", c, t]
						]), (0, G.m)(e, r, e.length, i), e
					},
					tokenize: function(e, t, n) {
						for (var r, a, i = this, s = i.events.length; s--;)
							if (("labelImage" === i.events[s][1].type || "labelLink" === i.events[s][1].type) && !i.events[s][1]._balanced) {
								r = i.events[s][1];
								break
							} return function(t) {
							return r ? r._inactive ? u(t) : (a = i.parser.defined.includes((0, eS.B)(i.sliceSerialize({
								start: r.end,
								end: i.now()
							}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), o) : n(t)
						};

						function o(t) {
							return 40 === t ? e.attempt(eY, l, a ? l : u)(t) : 91 === t ? e.attempt(ez, l, a ? c : u)(t) : a ? l(t) : u(t)
						}

						function c(t) {
							return e.attempt(eW, l, u)(t)
						}

						function l(e) {
							return t(e)
						}

						function u(e) {
							return r._balanced = !0, n(e)
						}
					}
				},
				eY = {
					tokenize: function(e, t, n) {
						return function(t) {
							return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r
						};

						function r(t) {
							return (0, Q.Ee)(t) ? e_(e, a)(t) : a(t)
						}

						function a(t) {
							return 41 === t ? l(t) : eT(e, i, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
						}

						function i(t) {
							return (0, Q.Ee)(t) ? e_(e, o)(t) : l(t)
						}

						function s(e) {
							return n(e)
						}

						function o(t) {
							return 34 === t || 39 === t || 40 === t ? eA(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : l(t)
						}

						function c(t) {
							return (0, Q.Ee)(t) ? e_(e, l)(t) : l(t)
						}

						function l(r) {
							return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
						}
					}
				},
				ez = {
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return eg.call(r, e, a, i, "reference", "referenceMarker", "referenceString")(t)
						};

						function a(e) {
							return r.parser.defined.includes((0, eS.B)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
						}

						function i(e) {
							return n(e)
						}
					}
				},
				eW = {
					tokenize: function(e, t, n) {
						return function(t) {
							return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
						};

						function r(r) {
							return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
						}
					}
				},
				eq = {
					name: "labelStartImage",
					resolveAll: ej.resolveAll,
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a
						};

						function a(t) {
							return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), i) : n(t)
						}

						function i(e) {
							return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
						}
					}
				},
				eV = n(8956);

			function eQ(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function eK(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eQ(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eQ(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var eX = {
				name: "attention",
				resolveAll: function(e, t) {
					for (var n, r, a, i, s, o, c, l, u = -1; ++u < e.length;)
						if ("enter" === e[u][0] && "attentionSequence" === e[u][1].type && e[u][1]._close) {
							for (n = u; n--;)
								if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[u][1]).charCodeAt(0)) {
									if ((e[n][1]._close || e[u][1]._open) && (e[u][1].end.offset - e[u][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[u][1].end.offset - e[u][1].start.offset) % 3)) continue;
									o = e[n][1].end.offset - e[n][1].start.offset > 1 && e[u][1].end.offset - e[u][1].start.offset > 1 ? 2 : 1;
									var h = eK({}, e[n][1].end),
										p = eK({}, e[u][1].start);
									eJ(h, -o), eJ(p, o), i = {
										type: o > 1 ? "strongSequence" : "emphasisSequence",
										start: h,
										end: eK({}, e[n][1].end)
									}, s = {
										type: o > 1 ? "strongSequence" : "emphasisSequence",
										start: eK({}, e[u][1].start),
										end: p
									}, a = {
										type: o > 1 ? "strongText" : "emphasisText",
										start: eK({}, e[n][1].end),
										end: eK({}, e[u][1].start)
									}, r = {
										type: o > 1 ? "strong" : "emphasis",
										start: eK({}, i.start),
										end: eK({}, s.end)
									}, e[n][1].end = eK({}, i.start), e[u][1].start = eK({}, s.end), c = [], e[n][1].end.offset - e[n][1].start.offset && (c = (0, G.V)(c, [
										["enter", e[n][1], t],
										["exit", e[n][1], t]
									])), c = (0, G.V)(c, [
										["enter", r, t],
										["enter", i, t],
										["exit", i, t],
										["enter", a, t]
									]), c = (0, G.V)(c, (0, eH.W)(t.parser.constructs.insideSpan.null, e.slice(n + 1, u), t)), c = (0, G.V)(c, [
										["exit", a, t],
										["enter", s, t],
										["exit", s, t],
										["exit", r, t]
									]), e[u][1].end.offset - e[u][1].start.offset ? (l = 2, c = (0, G.V)(c, [
										["enter", e[u][1], t],
										["exit", e[u][1], t]
									])) : l = 0, (0, G.m)(e, n - 1, u - n + 3, c), u = n + c.length - l - 2;
									break
								}
						} for (u = -1; ++u < e.length;) "attentionSequence" === e[u][1].type && (e[u][1].type = "data");
					return e
				},
				tokenize: function(e, t) {
					var n, r = this.parser.constructs.attentionMarkers.null,
						a = this.previous,
						i = (0, eV.S)(a);
					return function(s) {
						return n = s, e.enter("attentionSequence"),
							function s(o) {
								if (o === n) return e.consume(o), s;
								var c = e.exit("attentionSequence"),
									l = (0, eV.S)(o),
									u = !l || 2 === l && i || r.includes(o),
									h = !i || 2 === i && l || r.includes(a);
								return c._open = !!(42 === n ? u : u && (i || !h)), c._close = !!(42 === n ? h : h && (l || !u)), t(o)
							}(s)
					}
				}
			};

			function eJ(e, t) {
				e.column += t, e.offset += t, e._bufferIndex += t
			}
			var eZ = {
					name: "labelStartLink",
					resolveAll: ej.resolveAll,
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a
						};

						function a(e) {
							return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
						}
					}
				},
				e$ = {
					42: ed,
					43: ed,
					45: ed,
					48: ed,
					49: ed,
					50: ed,
					51: ed,
					52: ed,
					53: ed,
					54: ed,
					55: ed,
					56: ed,
					57: ed,
					62: eE
				},
				e0 = {
					91: {
						name: "definition",
						tokenize: function(e, t, n) {
							var r, a = this;
							return function(t) {
								var r;
								return e.enter("definition"), r = t, eg.call(a, e, i, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r)
							};

							function i(t) {
								return (r = (0, eS.B)(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s) : n(t)
							}

							function s(t) {
								return (0, Q.Ee)(t) ? e_(e, o)(t) : o(t)
							}

							function o(t) {
								return eT(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
							}

							function c(t) {
								return e.attempt(eO, l, l)(t)
							}

							function l(t) {
								return (0, Q.On)(t) ? (0, V.N)(e, u, "whitespace")(t) : u(t)
							}

							function u(i) {
								return null === i || (0, Q.HP)(i) ? (e.exit("definition"), a.parser.defined.push(r), t(i)) : n(i)
							}
						}
					}
				},
				e1 = {
					[-2]: eI,
					[-1]: eI,
					32: eI
				},
				e2 = {
					35: {
						name: "headingAtx",
						resolve: function(e, t) {
							var n, r, a = e.length - 2,
								i = 3;
							return "whitespace" === e[3][1].type && (i += 2), a - 2 > i && "whitespace" === e[a][1].type && (a -= 2), "atxHeadingSequence" === e[a][1].type && (i === a - 1 || a - 4 > i && "whitespace" === e[a - 2][1].type) && (a -= i + 1 === a ? 2 : 4), a > i && (n = {
								type: "atxHeadingText",
								start: e[i][1].start,
								end: e[a][1].end
							}, r = {
								type: "chunkText",
								start: e[i][1].start,
								end: e[a][1].end,
								contentType: "text"
							}, (0, G.m)(e, i, a - i + 1, [
								["enter", n, t],
								["enter", r, t],
								["exit", r, t],
								["exit", n, t]
							])), e
						},
						tokenize: function(e, t, n) {
							var r = 0;
							return function(a) {
								var i;
								return e.enter("atxHeading"), i = a, e.enter("atxHeadingSequence"),
									function a(i) {
										return 35 === i && r++ < 6 ? (e.consume(i), a) : null === i || (0, Q.Ee)(i) ? (e.exit("atxHeadingSequence"), function n(r) {
											return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
												return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
											}(r)) : null === r || (0, Q.HP)(r) ? (e.exit("atxHeading"), t(r)) : (0, Q.On)(r) ? (0, V.N)(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
												return null === r || 35 === r || (0, Q.Ee)(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
											}(r))
										}(i)) : n(i)
									}(i)
							}
						}
					},
					42: ep,
					45: [eC, ep],
					60: {
						concrete: !0,
						name: "htmlFlow",
						resolveTo: function(e) {
							for (var t = e.length; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
							return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
						},
						tokenize: function(e, t, n) {
							var r, a, i, s, o, c = this;
							return function(t) {
								var n;
								return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), l
							};

							function l(s) {
								return 33 === s ? (e.consume(s), u) : 47 === s ? (e.consume(s), a = !0, d) : 63 === s ? (e.consume(s), r = 3, c.interrupt ? t : L) : (0, Q.CW)(s) ? (e.consume(s), i = String.fromCharCode(s), f) : n(s)
							}

							function u(a) {
								return 45 === a ? (e.consume(a), r = 2, h) : 91 === a ? (e.consume(a), r = 5, s = 0, p) : (0, Q.CW)(a) ? (e.consume(a), r = 4, c.interrupt ? t : L) : n(a)
							}

							function h(r) {
								return 45 === r ? (e.consume(r), c.interrupt ? t : L) : n(r)
							}

							function p(r) {
								var a = "CDATA[";
								return r === a.charCodeAt(s++) ? (e.consume(r), s === a.length) ? c.interrupt ? t : N : p : n(r)
							}

							function d(t) {
								return (0, Q.CW)(t) ? (e.consume(t), i = String.fromCharCode(t), f) : n(t)
							}

							function f(s) {
								if (null === s || 47 === s || 62 === s || (0, Q.Ee)(s)) {
									var o = 47 === s,
										l = i.toLowerCase();
									return !o && !a && eD.includes(l) ? (r = 1, c.interrupt ? t(s) : N(s)) : ev.includes(i.toLowerCase()) ? (r = 6, o) ? (e.consume(s), m) : c.interrupt ? t(s) : N(s) : (r = 7, c.interrupt && !c.parser.lazy[c.now().line] ? n(s) : a ? function t(n) {
										return (0, Q.On)(n) ? (e.consume(n), t) : O(n)
									}(s) : E(s))
								}
								return 45 === s || (0, Q.lV)(s) ? (e.consume(s), i += String.fromCharCode(s), f) : n(s)
							}

							function m(r) {
								return 62 === r ? (e.consume(r), c.interrupt ? t : N) : n(r)
							}

							function E(t) {
								return 47 === t ? (e.consume(t), O) : 58 === t || 95 === t || (0, Q.CW)(t) ? (e.consume(t), T) : (0, Q.On)(t) ? (e.consume(t), E) : O(t)
							}

							function T(t) {
								return 45 === t || 46 === t || 58 === t || 95 === t || (0, Q.lV)(t) ? (e.consume(t), T) : g(t)
							}

							function g(t) {
								return 61 === t ? (e.consume(t), A) : (0, Q.On)(t) ? (e.consume(t), g) : E(t)
							}

							function A(t) {
								return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), o = t, _) : (0, Q.On)(t) ? (e.consume(t), A) : function t(n) {
									return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, Q.Ee)(n) ? g(n) : (e.consume(n), t)
								}(t)
							}

							function _(t) {
								return t === o ? (e.consume(t), o = null, S) : null === t || (0, Q.HP)(t) ? n(t) : (e.consume(t), _)
							}

							function S(e) {
								return 47 === e || 62 === e || (0, Q.On)(e) ? E(e) : n(e)
							}

							function O(t) {
								return 62 === t ? (e.consume(t), I) : n(t)
							}

							function I(t) {
								return null === t || (0, Q.HP)(t) ? N(t) : (0, Q.On)(t) ? (e.consume(t), I) : n(t)
							}

							function N(t) {
								return 45 === t && 2 === r ? (e.consume(t), v) : 60 === t && 1 === r ? (e.consume(t), D) : 62 === t && 4 === r ? (e.consume(t), P) : 63 === t && 3 === r ? (e.consume(t), L) : 93 === t && 5 === r ? (e.consume(t), R) : (0, Q.HP)(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(ey, M, k)(t)) : null === t || (0, Q.HP)(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), N)
							}

							function k(t) {
								return e.check(eR, b, M)(t)
							}

							function b(t) {
								return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), C
							}

							function C(t) {
								return null === t || (0, Q.HP)(t) ? k(t) : (e.enter("htmlFlowData"), N(t))
							}

							function v(t) {
								return 45 === t ? (e.consume(t), L) : N(t)
							}

							function D(t) {
								return 47 === t ? (e.consume(t), i = "", y) : N(t)
							}

							function y(t) {
								if (62 === t) {
									var n = i.toLowerCase();
									return eD.includes(n) ? (e.consume(t), P) : N(t)
								}
								return (0, Q.CW)(t) && i.length < 8 ? (e.consume(t), i += String.fromCharCode(t), y) : N(t)
							}

							function R(t) {
								return 93 === t ? (e.consume(t), L) : N(t)
							}

							function L(t) {
								return 62 === t ? (e.consume(t), P) : 45 === t && 2 === r ? (e.consume(t), L) : N(t)
							}

							function P(t) {
								return null === t || (0, Q.HP)(t) ? (e.exit("htmlFlowData"), M(t)) : (e.consume(t), P)
							}

							function M(n) {
								return e.exit("htmlFlow"), t(n)
							}
						}
					},
					61: eC,
					95: ep,
					96: eP,
					126: eP
				},
				e3 = {
					38: ew,
					92: eB
				},
				e4 = {
					[-5]: eF,
					[-4]: eF,
					[-3]: eF,
					33: eq,
					38: ew,
					42: eX,
					60: [{
						name: "autolink",
						tokenize: function(e, t, n) {
							var r = 0;
							return function(t) {
								return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
							};

							function a(t) {
								return (0, Q.CW)(t) ? (e.consume(t), i) : 64 === t ? n(t) : o(t)
							}

							function i(t) {
								return 43 === t || 45 === t || 46 === t || (0, Q.lV)(t) ? (r = 1, function t(n) {
									return 58 === n ? (e.consume(n), r = 0, s) : (43 === n || 45 === n || 46 === n || (0, Q.lV)(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, o(n))
								}(t)) : o(t)
							}

							function s(r) {
								return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || (0, Q.JQ)(r) ? n(r) : (e.consume(r), s)
							}

							function o(t) {
								return 64 === t ? (e.consume(t), c) : (0, Q.cx)(t) ? (e.consume(t), o) : n(t)
							}

							function c(a) {
								return (0, Q.lV)(a) ? function a(i) {
									return 46 === i ? (e.consume(i), r = 0, c) : 62 === i ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(i), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(i) {
										if ((45 === i || (0, Q.lV)(i)) && r++ < 63) {
											var s = 45 === i ? t : a;
											return e.consume(i), s
										}
										return n(i)
									}(i)
								}(a) : n(a)
							}
						}
					}, {
						name: "htmlText",
						tokenize: function(e, t, n) {
							var r, a, i, s = this;
							return function(t) {
								return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), o
							};

							function o(t) {
								return 33 === t ? (e.consume(t), c) : 47 === t ? (e.consume(t), _) : 63 === t ? (e.consume(t), g) : (0, Q.CW)(t) ? (e.consume(t), O) : n(t)
							}

							function c(t) {
								return 45 === t ? (e.consume(t), l) : 91 === t ? (e.consume(t), a = 0, d) : (0, Q.CW)(t) ? (e.consume(t), T) : n(t)
							}

							function l(t) {
								return 45 === t ? (e.consume(t), p) : n(t)
							}

							function u(t) {
								return null === t ? n(t) : 45 === t ? (e.consume(t), h) : (0, Q.HP)(t) ? (i = u, y(t)) : (e.consume(t), u)
							}

							function h(t) {
								return 45 === t ? (e.consume(t), p) : u(t)
							}

							function p(e) {
								return 62 === e ? D(e) : 45 === e ? h(e) : u(e)
							}

							function d(t) {
								var r = "CDATA[";
								return t === r.charCodeAt(a++) ? (e.consume(t), a === r.length ? f : d) : n(t)
							}

							function f(t) {
								return null === t ? n(t) : 93 === t ? (e.consume(t), m) : (0, Q.HP)(t) ? (i = f, y(t)) : (e.consume(t), f)
							}

							function m(t) {
								return 93 === t ? (e.consume(t), E) : f(t)
							}

							function E(t) {
								return 62 === t ? D(t) : 93 === t ? (e.consume(t), E) : f(t)
							}

							function T(t) {
								return null === t || 62 === t ? D(t) : (0, Q.HP)(t) ? (i = T, y(t)) : (e.consume(t), T)
							}

							function g(t) {
								return null === t ? n(t) : 63 === t ? (e.consume(t), A) : (0, Q.HP)(t) ? (i = g, y(t)) : (e.consume(t), g)
							}

							function A(e) {
								return 62 === e ? D(e) : g(e)
							}

							function _(t) {
								return (0, Q.CW)(t) ? (e.consume(t), S) : n(t)
							}

							function S(t) {
								return 45 === t || (0, Q.lV)(t) ? (e.consume(t), S) : function t(n) {
									return (0, Q.HP)(n) ? (i = t, y(n)) : (0, Q.On)(n) ? (e.consume(n), t) : D(n)
								}(t)
							}

							function O(t) {
								return 45 === t || (0, Q.lV)(t) ? (e.consume(t), O) : 47 === t || 62 === t || (0, Q.Ee)(t) ? I(t) : n(t)
							}

							function I(t) {
								return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || (0, Q.CW)(t) ? (e.consume(t), N) : (0, Q.HP)(t) ? (i = I, y(t)) : (0, Q.On)(t) ? (e.consume(t), I) : D(t)
							}

							function N(t) {
								return 45 === t || 46 === t || 58 === t || 95 === t || (0, Q.lV)(t) ? (e.consume(t), N) : function t(n) {
									return 61 === n ? (e.consume(n), k) : (0, Q.HP)(n) ? (i = t, y(n)) : (0, Q.On)(n) ? (e.consume(n), t) : I(n)
								}(t)
							}

							function k(t) {
								return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, b) : (0, Q.HP)(t) ? (i = k, y(t)) : (0, Q.On)(t) ? (e.consume(t), k) : (e.consume(t), C)
							}

							function b(t) {
								return t === r ? (e.consume(t), r = void 0, v) : null === t ? n(t) : (0, Q.HP)(t) ? (i = b, y(t)) : (e.consume(t), b)
							}

							function C(t) {
								return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || (0, Q.Ee)(t) ? I(t) : (e.consume(t), C)
							}

							function v(e) {
								return 47 === e || 62 === e || (0, Q.Ee)(e) ? I(e) : n(e)
							}

							function D(r) {
								return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
							}

							function y(t) {
								return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), R
							}

							function R(t) {
								return (0, Q.On)(t) ? (0, V.N)(e, L, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : L(t)
							}

							function L(t) {
								return e.enter("htmlTextData"), i(t)
							}
						}
					}],
					91: eZ,
					92: [{
						name: "hardBreakEscape",
						tokenize: function(e, t, n) {
							return function(t) {
								return e.enter("hardBreakEscape"), e.consume(t), r
							};

							function r(r) {
								return (0, Q.HP)(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r)
							}
						}
					}, eB],
					93: ej,
					95: eX,
					96: {
						name: "codeText",
						previous: function(e) {
							return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
						},
						resolve: function(e) {
							var t, n, r = e.length - 4,
								a = 3;
							if (("lineEnding" === e[3][1].type || "space" === e[a][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
								for (t = a; ++t < r;)
									if ("codeTextData" === e[t][1].type) {
										e[a][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", a += 2, r -= 2;
										break
									}
							}
							for (t = a - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
							return e
						},
						tokenize: function(e, t, n) {
							var r, a, i = 0;
							return function(t) {
								return e.enter("codeText"), e.enter("codeTextSequence"),
									function t(n) {
										return 96 === n ? (e.consume(n), i++, t) : (e.exit("codeTextSequence"), s(n))
									}(t)
							};

							function s(c) {
								return null === c ? n(c) : 32 === c ? (e.enter("space"), e.consume(c), e.exit("space"), s) : 96 === c ? (a = e.enter("codeTextSequence"), r = 0, function n(s) {
									return 96 === s ? (e.consume(s), r++, n) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), t(s)) : (a.type = "codeTextData", o(s))
								}(c)) : (0, Q.HP)(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), o(c))
							}

							function o(t) {
								return null === t || 32 === t || 96 === t || (0, Q.HP)(t) ? (e.exit("codeTextData"), s(t)) : (e.consume(t), o)
							}
						}
					}
				},
				e5 = {
					null: [eX, es]
				},
				e9 = {
					null: [42, 95]
				},
				e6 = {
					null: []
				},
				e7 = /[\0\t\n\r]/g;

			function e8(e, t) {
				var n = Number.parseInt(e, t);
				return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
			}
			var te = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

			function tt(e, t, n) {
				if (t) return t;
				if (35 === n.charCodeAt(0)) {
					var r = n.charCodeAt(1),
						a = 120 === r || 88 === r;
					return e8(n.slice(a ? 2 : 1), a ? 16 : 10)
				}
				return ex(n) || e
			}
			var tn = {}.hasOwnProperty;

			function tr(e) {
				return {
					line: e.line,
					column: e.column,
					offset: e.offset
				}
			}

			function ta(e, t) {
				if (e) throw Error("Cannot close `" + e.type + "` (" + A({
					start: e.start,
					end: e.end
				}) + "): a different token (`" + t.type + "`, " + A({
					start: t.start,
					end: t.end
				}) + ") is open");
				throw Error("Cannot close document, a token (`" + t.type + "`, " + A({
					start: t.start,
					end: t.end
				}) + ") is still open")
			}

			function ti(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function ts(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ti(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ti(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function to(e) {
				var t = this;
				t.parser = function(n) {
					var a, i, s, o, c, l;
					return (a = ts(ts(ts({}, t.data("settings")), e), {}, {
						extensions: t.data("micromarkExtensions") || [],
						mdastExtensions: t.data("fromMarkdownExtensions") || []
					})) && "object" == typeof a && (i = a, a = void 0), (function(e) {
						var t = {
							transforms: [],
							canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
							enter: {
								autolink: r(T),
								autolinkProtocol: l,
								autolinkEmail: l,
								atxHeading: r(f),
								blockQuote: r(function() {
									return {
										type: "blockquote",
										children: []
									}
								}),
								characterEscape: l,
								characterReference: l,
								codeFenced: r(d),
								codeFencedFenceInfo: a,
								codeFencedFenceMeta: a,
								codeIndented: r(d, a),
								codeText: r(function() {
									return {
										type: "inlineCode",
										value: ""
									}
								}, a),
								codeTextData: l,
								data: l,
								codeFlowValue: l,
								definition: r(function() {
									return {
										type: "definition",
										identifier: "",
										label: null,
										title: null,
										url: ""
									}
								}),
								definitionDestinationString: a,
								definitionLabelString: a,
								definitionTitleString: a,
								emphasis: r(function() {
									return {
										type: "emphasis",
										children: []
									}
								}),
								hardBreakEscape: r(m),
								hardBreakTrailing: r(m),
								htmlFlow: r(E, a),
								htmlFlowData: l,
								htmlText: r(E, a),
								htmlTextData: l,
								image: r(function() {
									return {
										type: "image",
										title: null,
										url: "",
										alt: null
									}
								}),
								label: a,
								link: r(T),
								listItem: r(function(e) {
									return {
										type: "listItem",
										spread: e._spread,
										checked: null,
										children: []
									}
								}),
								listItemValue: function(e) {
									this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0)
								},
								listOrdered: r(g, function() {
									this.data.expectingFirstListItemValue = !0
								}),
								listUnordered: r(g),
								paragraph: r(function() {
									return {
										type: "paragraph",
										children: []
									}
								}),
								reference: function() {
									this.data.referenceType = "collapsed"
								},
								referenceString: a,
								resourceDestinationString: a,
								resourceTitleString: a,
								setextHeading: r(f),
								strong: r(function() {
									return {
										type: "strong",
										children: []
									}
								}),
								thematicBreak: r(function() {
									return {
										type: "thematicBreak"
									}
								})
							},
							exit: {
								atxHeading: s(),
								atxHeadingSequence: function(e) {
									var t = this.stack[this.stack.length - 1];
									t.depth || (t.depth = this.sliceSerialize(e).length)
								},
								autolink: s(),
								autolinkEmail: function(e) {
									u.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
								},
								autolinkProtocol: function(e) {
									u.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
								},
								blockQuote: s(),
								characterEscapeValue: u,
								characterReferenceMarkerHexadecimal: p,
								characterReferenceMarkerNumeric: p,
								characterReferenceValue: function(e) {
									var t, n = this.sliceSerialize(e),
										r = this.data.characterReferenceType;
									r ? (t = e8(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = ex(n);
									var a = this.stack[this.stack.length - 1];
									a.value += t
								},
								characterReference: function(e) {
									this.stack.pop().position.end = tr(e.end)
								},
								codeFenced: s(function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
								}),
								codeFencedFence: function() {
									this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
								},
								codeFencedFenceInfo: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].lang = e
								},
								codeFencedFenceMeta: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].meta = e
								},
								codeFlowValue: u,
								codeIndented: s(function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
								}),
								codeText: s(function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].value = e
								}),
								codeTextData: u,
								data: u,
								definition: s(),
								definitionDestinationString: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].url = e
								},
								definitionLabelString: function(e) {
									var t = this.resume(),
										n = this.stack[this.stack.length - 1];
									n.label = t, n.identifier = (0, eS.B)(this.sliceSerialize(e)).toLowerCase()
								},
								definitionTitleString: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].title = e
								},
								emphasis: s(),
								hardBreakEscape: s(h),
								hardBreakTrailing: s(h),
								htmlFlow: s(function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].value = e
								}),
								htmlFlowData: u,
								htmlText: s(function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].value = e
								}),
								htmlTextData: u,
								image: s(function() {
									var e = this.stack[this.stack.length - 1];
									if (this.data.inReference) {
										var t = this.data.referenceType || "shortcut";
										e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
									} else delete e.identifier, delete e.label;
									this.data.referenceType = void 0
								}),
								label: function() {
									var e = this.stack[this.stack.length - 1],
										t = this.resume(),
										n = this.stack[this.stack.length - 1];
									this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t
								},
								labelText: function(e) {
									var t = this.sliceSerialize(e),
										n = this.stack[this.stack.length - 2];
									n.label = t.replace(te, tt), n.identifier = (0, eS.B)(t).toLowerCase()
								},
								lineEnding: function(e) {
									var n = this.stack[this.stack.length - 1];
									if (this.data.atHardBreak) {
										n.children[n.children.length - 1].position.end = tr(e.end), this.data.atHardBreak = void 0;
										return
									}!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (l.call(this, e), u.call(this, e))
								},
								link: s(function() {
									var e = this.stack[this.stack.length - 1];
									if (this.data.inReference) {
										var t = this.data.referenceType || "shortcut";
										e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
									} else delete e.identifier, delete e.label;
									this.data.referenceType = void 0
								}),
								listItem: s(),
								listOrdered: s(),
								listUnordered: s(),
								paragraph: s(),
								referenceString: function(e) {
									var t = this.resume(),
										n = this.stack[this.stack.length - 1];
									n.label = t, n.identifier = (0, eS.B)(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full"
								},
								resourceDestinationString: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].url = e
								},
								resourceTitleString: function() {
									var e = this.resume();
									this.stack[this.stack.length - 1].title = e
								},
								resource: function() {
									this.data.inReference = void 0
								},
								setextHeading: s(function() {
									this.data.setextHeadingSlurpLineEnding = void 0
								}),
								setextHeadingLineSequence: function(e) {
									this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2
								},
								setextHeadingText: function() {
									this.data.setextHeadingSlurpLineEnding = !0
								},
								strong: s(),
								thematicBreak: s()
							}
						};
						! function e(t, n) {
							for (var r = -1; ++r < n.length;) {
								var a = n[r];
								Array.isArray(a) ? e(t, a) : function(e, t) {
									var n;
									for (n in t)
										if (tn.call(t, n)) switch (n) {
											case "canContainEols":
												var r = t[n];
												r && e[n].push(...r);
												break;
											case "transforms":
												var a = t[n];
												a && e[n].push(...a);
												break;
											case "enter":
											case "exit":
												var i = t[n];
												i && Object.assign(e[n], i)
										}
								}(t, a)
							}
						}(t, (e || {}).mdastExtensions || []);
						var n = {};
						return function(e) {
							for (var r = {
									type: "root",
									children: []
								}, s = {
									stack: [r],
									tokenStack: [],
									config: t,
									enter: i,
									exit: o,
									buffer: a,
									resume: c,
									data: n
								}, l = [], u = -1; ++u < e.length;)("listOrdered" === e[u][1].type || "listUnordered" === e[u][1].type) && ("enter" === e[u][0] ? l.push(u) : u = function(e, t, n) {
								for (var r, a, i, s, o = t - 1, c = -1, l = !1; ++o <= n;) {
									var u = e[o];
									switch (u[1].type) {
										case "listUnordered":
										case "listOrdered":
										case "blockQuote":
											"enter" === u[0] ? c++ : c--, s = void 0;
											break;
										case "lineEndingBlank":
											"enter" === u[0] && (!r || s || c || i || (i = o), s = void 0);
											break;
										case "linePrefix":
										case "listItemValue":
										case "listItemMarker":
										case "listItemPrefix":
										case "listItemPrefixWhitespace":
											break;
										default:
											s = void 0
									}
									if (!c && "enter" === u[0] && "listItemPrefix" === u[1].type || -1 === c && "exit" === u[0] && ("listUnordered" === u[1].type || "listOrdered" === u[1].type)) {
										if (r) {
											var h = o;
											for (a = void 0; h--;) {
												var p = e[h];
												if ("lineEnding" === p[1].type || "lineEndingBlank" === p[1].type) {
													if ("exit" === p[0]) continue;
													a && (e[a][1].type = "lineEndingBlank", l = !0), p[1].type = "lineEnding", a = h
												} else if ("linePrefix" === p[1].type || "blockQuotePrefix" === p[1].type || "blockQuotePrefixWhitespace" === p[1].type || "blockQuoteMarker" === p[1].type || "listItemIndent" === p[1].type);
												else break
											}
											i && (!a || i < a) && (r._spread = !0), r.end = Object.assign({}, a ? e[a][1].start : u[1].end), e.splice(a || o, 0, ["exit", r, u[2]]), o++, n++
										}
										if ("listItemPrefix" === u[1].type) {
											var d = {
												type: "listItem",
												_spread: !1,
												start: Object.assign({}, u[1].start),
												end: void 0
											};
											r = d, e.splice(o, 0, ["enter", d, u[2]]), o++, n++, i = void 0, s = !0
										}
									}
								}
								return e[t][1]._spread = l, n
							}(e, l.pop(), u));
							for (u = -1; ++u < e.length;) {
								var h = t[e[u][0]];
								tn.call(h, e[u][1].type) && h[e[u][1].type].call(Object.assign({
									sliceSerialize: e[u][2].sliceSerialize
								}, s), e[u][1])
							}
							if (s.tokenStack.length > 0) {
								var p = s.tokenStack[s.tokenStack.length - 1];
								(p[1] || ta).call(s, void 0, p[0])
							}
							for (r.position = {
									start: tr(e.length > 0 ? e[0][1].start : {
										line: 1,
										column: 1,
										offset: 0
									}),
									end: tr(e.length > 0 ? e[e.length - 2][1].end : {
										line: 1,
										column: 1,
										offset: 0
									})
								}, u = -1; ++u < t.transforms.length;) r = t.transforms[u](r) || r;
							return r
						};

						function r(e, t) {
							return function(n) {
								i.call(this, e(n), n), t && t.call(this, n)
							}
						}

						function a() {
							this.stack.push({
								type: "fragment",
								children: []
							})
						}

						function i(e, t, n) {
							this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
								start: tr(t.start),
								end: void 0
							}
						}

						function s(e) {
							return function(t) {
								e && e.call(this, t), o.call(this, t)
							}
						}

						function o(e, t) {
							var n = this.stack.pop(),
								r = this.tokenStack.pop();
							if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || ta).call(this, e, r[0]));
							else throw Error("Cannot close `" + e.type + "` (" + A({
								start: e.start,
								end: e.end
							}) + "): it’s not open");
							n.position.end = tr(e.end)
						}

						function c() {
							return (0, U.d)(this.stack.pop())
						}

						function l(e) {
							var t = this.stack[this.stack.length - 1].children,
								n = t[t.length - 1];
							n && "text" === n.type || ((n = {
								type: "text",
								value: ""
							}).position = {
								start: tr(e.start),
								end: void 0
							}, t.push(n)), this.stack.push(n)
						}

						function u(e) {
							var t = this.stack.pop();
							t.value += this.sliceSerialize(e), t.position.end = tr(e.end)
						}

						function h() {
							this.data.atHardBreak = !0
						}

						function p(e) {
							this.data.characterReferenceType = e.type
						}

						function d() {
							return {
								type: "code",
								lang: null,
								meta: null,
								value: ""
							}
						}

						function f() {
							return {
								type: "heading",
								depth: 0,
								children: []
							}
						}

						function m() {
							return {
								type: "break"
							}
						}

						function E() {
							return {
								type: "html",
								value: ""
							}
						}

						function T() {
							return {
								type: "link",
								title: null,
								url: "",
								children: []
							}
						}

						function g(e) {
							return {
								type: "list",
								ordered: "listOrdered" === e.type,
								start: null,
								spread: e._spread,
								children: []
							}
						}
					})(i)(function(e) {
						for (; !W(e););
						return e
					}((function(e) {
						var t = {
							constructs: (0, q.y)([r, ...(e || {}).extensions || []]),
							content: n(K),
							defined: [],
							document: n(Z),
							flow: n(er),
							lazy: {},
							string: n(eo),
							text: n(ec)
						};
						return t;

						function n(e) {
							return function(n) {
								return function(e, t, n) {
									var r = {
											_bufferIndex: -1,
											_index: 0,
											line: n && n.line || 1,
											column: n && n.column || 1,
											offset: n && n.offset || 0
										},
										a = {},
										i = [],
										s = [],
										o = [],
										c = {
											attempt: f(function(e, t) {
												m(e, t.from)
											}),
											check: f(d),
											consume: function(e) {
												(0, Q.HP)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, E()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e
											},
											enter: function(e, t) {
												var n = t || {};
												return n.type = e, n.start = p(), l.events.push(["enter", n, l]), o.push(n), n
											},
											exit: function(e) {
												var t = o.pop();
												return t.end = p(), l.events.push(["exit", t, l]), t
											},
											interrupt: f(d, {
												interrupt: !0
											})
										},
										l = {
											code: null,
											containerState: {},
											defineSkip: function(e) {
												a[e.line] = e.column, E()
											},
											events: [],
											now: p,
											parser: e,
											previous: null,
											sliceSerialize: function(e, t) {
												return function(e, t) {
													for (var n, r = -1, a = []; ++r < e.length;) {
														var i = e[r],
															s = void 0;
														if ("string" == typeof i) s = i;
														else switch (i) {
															case -5:
																s = "\r";
																break;
															case -4:
																s = "\n";
																break;
															case -3:
																s = "\r\n";
																break;
															case -2:
																s = t ? " " : "	";
																break;
															case -1:
																if (!t && n) continue;
																s = " ";
																break;
															default:
																s = String.fromCharCode(i)
														}
														n = -2 === i, a.push(s)
													}
													return a.join("")
												}(h(e), t)
											},
											sliceStream: h,
											write: function(e) {
												return (s = (0, G.V)(s, e), function() {
													for (var e; r._index < s.length;) {
														var t, n = s[r._index];
														if ("string" == typeof n)
															for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
																t = n.charCodeAt(r._bufferIndex), u = u(t)
															} else u = u(n)
													}
												}(), null !== s[s.length - 1]) ? [] : (m(t, 0), l.events = (0, eH.W)(i, l.events, l), l.events)
											}
										},
										u = t.tokenize.call(l, c);
									return t.resolveAll && i.push(t), l;

									function h(e) {
										return function(e, t) {
											var n, r = t.start._index,
												a = t.start._bufferIndex,
												i = t.end._index,
												s = t.end._bufferIndex;
											if (r === i) n = [e[r].slice(a, s)];
											else {
												if (n = e.slice(r, i), a > -1) {
													var o = n[0];
													"string" == typeof o ? n[0] = o.slice(a) : n.shift()
												}
												s > 0 && n.push(e[i].slice(0, s))
											}
											return n
										}(s, e)
									}

									function p() {
										var {
											_bufferIndex: e,
											_index: t,
											line: n,
											column: a,
											offset: i
										} = r;
										return {
											_bufferIndex: e,
											_index: t,
											line: n,
											column: a,
											offset: i
										}
									}

									function d(e, t) {
										t.restore()
									}

									function f(e, t) {
										return function(n, a, i) {
											var s, u, h, d, f;
											return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (f = n, function(e) {
												var t = null !== e && f[e],
													n = null !== e && f.null;
												return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e)
											});

											function m(e) {
												return (s = e, u = 0, 0 === e.length) ? i : T(e[u])
											}

											function T(e) {
												return function(n) {
													var a, i, s, u, f;
													return (a = p(), i = l.previous, s = l.currentConstruct, u = l.events.length, f = Array.from(o), d = {
														from: u,
														restore: function() {
															r = a, l.previous = i, l.currentConstruct = s, l.events.length = u, o = f, E()
														}
													}, h = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name)) ? A(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, g, A)(n)
												}
											}

											function g(t) {
												return e(h, d), a
											}

											function A(e) {
												return (d.restore(), ++u < s.length) ? T(s[u]) : i
											}
										}
									}

									function m(e, t) {
										e.resolveAll && !i.includes(e) && i.push(e), e.resolve && (0, G.m)(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l))
									}

									function E() {
										r.line in a && r.column < 2 && (r.column = a[r.line], r.offset += a[r.line] - 1)
									}
								}(t, e, n)
							}
						}
					})(i).document().write((o = 1, c = "", l = !0, function(e, t, n) {
						var r, a, i, u, h, p = [];
						for (e = c + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), i = 0, c = "", l && (65279 === e.charCodeAt(0) && i++, l = void 0); i < e.length;) {
							if (e7.lastIndex = i, u = (r = e7.exec(e)) && void 0 !== r.index ? r.index : e.length, h = e.charCodeAt(u), !r) {
								c = e.slice(i);
								break
							}
							if (10 === h && i === u && s) p.push(-3), s = void 0;
							else switch (s && (p.push(-5), s = void 0), i < u && (p.push(e.slice(i, u)), o += u - i), h) {
								case 0:
									p.push(65533), o++;
									break;
								case 9:
									for (a = 4 * Math.ceil(o / 4), p.push(-2); o++ < a;) p.push(-1);
									break;
								case 10:
									p.push(-4), o = 1;
									break;
								default:
									s = !0, o = 1
							}
							i = u + 1
						}
						return n && (s && p.push(-5), c && p.push(c), p.push(null)), p
					})(n, a, !0))))
				}
			}

			function tc(e, t, n, r, a, i, s) {
				try {
					var o = e[i](s),
						c = o.value
				} catch (e) {
					return void n(e)
				}
				o.done ? t(c) : Promise.resolve(c).then(r, a)
			}
			var tl = n(1524);

			function tu(e) {
				for (var t = [], n = -1, r = 0, a = 0; ++n < e.length;) {
					var i = e.charCodeAt(n),
						s = "";
					if (37 === i && (0, Q.lV)(e.charCodeAt(n + 1)) && (0, Q.lV)(e.charCodeAt(n + 2))) a = 2;
					else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (s = String.fromCharCode(i));
					else if (i > 55295 && i < 57344) {
						var o = e.charCodeAt(n + 1);
						i < 56320 && o > 56319 && o < 57344 ? (s = String.fromCharCode(i, o), a = 1) : s = "�"
					} else s = String.fromCharCode(i);
					s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + a + 1, s = ""), a && (n += a, a = 0)
				}
				return t.join("") + e.slice(r)
			}

			function th(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function tp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? th(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : th(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function td(e, t) {
				var n = [{
					type: "text",
					value: "↩"
				}];
				return t > 1 && n.push({
					type: "element",
					tagName: "sup",
					properties: {},
					children: [{
						type: "text",
						value: String(t)
					}]
				}), n
			}

			function tf(e, t) {
				return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
			}
			var tm = n(3807),
				tE = n(3925);

			function tT(e, t) {
				var n = t.referenceType,
					r = "]";
				if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
					type: "text",
					value: "![" + t.alt + r
				}];
				var a = e.all(t),
					i = a[0];
				i && "text" === i.type ? i.value = "[" + i.value : a.unshift({
					type: "text",
					value: "["
				});
				var s = a[a.length - 1];
				return s && "text" === s.type ? s.value += r : a.push({
					type: "text",
					value: r
				}), a
			}

			function tg(e) {
				var t = e.spread;
				return null == t ? e.children.length > 1 : t
			}

			function tA(e, t, n) {
				var r = 0,
					a = e.length;
				if (t)
					for (var i = e.codePointAt(r); 9 === i || 32 === i;) r++, i = e.codePointAt(r);
				if (n)
					for (var s = e.codePointAt(a - 1); 9 === s || 32 === s;) a--, s = e.codePointAt(a - 1);
				return a > r ? e.slice(r, a) : ""
			}
			var t_ = {
				blockquote: function(e, t) {
					var n = {
						type: "element",
						tagName: "blockquote",
						properties: {},
						children: e.wrap(e.all(t), !0)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				break: function(e, t) {
					var n = {
						type: "element",
						tagName: "br",
						properties: {},
						children: []
					};
					return e.patch(t, n), [e.applyData(t, n), {
						type: "text",
						value: "\n"
					}]
				},
				code: function(e, t) {
					var n = t.value ? t.value + "\n" : "",
						r = {},
						a = t.lang ? t.lang.split(/\s+/) : [];
					a.length > 0 && (r.className = ["language-" + a[0]]);
					var i = {
						type: "element",
						tagName: "code",
						properties: r,
						children: [{
							type: "text",
							value: n
						}]
					};
					return t.meta && (i.data = {
						meta: t.meta
					}), e.patch(t, i), i = {
						type: "element",
						tagName: "pre",
						properties: {},
						children: [i = e.applyData(t, i)]
					}, e.patch(t, i), i
				},
				delete: function(e, t) {
					var n = {
						type: "element",
						tagName: "del",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				emphasis: function(e, t) {
					var n = {
						type: "element",
						tagName: "em",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				footnoteReference: function(e, t) {
					var n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-",
						a = String(t.identifier).toUpperCase(),
						i = tu(a.toLowerCase()),
						s = e.footnoteOrder.indexOf(a),
						o = e.footnoteCounts.get(a);
					void 0 === o ? (o = 0, e.footnoteOrder.push(a), n = e.footnoteOrder.length) : n = s + 1, o += 1, e.footnoteCounts.set(a, o);
					var c = {
						type: "element",
						tagName: "a",
						properties: {
							href: "#" + r + "fn-" + i,
							id: r + "fnref-" + i + (o > 1 ? "-" + o : ""),
							dataFootnoteRef: !0,
							ariaDescribedBy: ["footnote-label"]
						},
						children: [{
							type: "text",
							value: String(n)
						}]
					};
					e.patch(t, c);
					var l = {
						type: "element",
						tagName: "sup",
						properties: {},
						children: [c]
					};
					return e.patch(t, l), e.applyData(t, l)
				},
				heading: function(e, t) {
					var n = {
						type: "element",
						tagName: "h" + t.depth,
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				html: function(e, t) {
					if (e.options.allowDangerousHtml) {
						var n = {
							type: "raw",
							value: t.value
						};
						return e.patch(t, n), e.applyData(t, n)
					}
				},
				imageReference: function(e, t) {
					var n = String(t.identifier).toUpperCase(),
						r = e.definitionById.get(n);
					if (!r) return tT(e, t);
					var a = {
						src: tu(r.url || ""),
						alt: t.alt
					};
					null !== r.title && void 0 !== r.title && (a.title = r.title);
					var i = {
						type: "element",
						tagName: "img",
						properties: a,
						children: []
					};
					return e.patch(t, i), e.applyData(t, i)
				},
				image: function(e, t) {
					var n = {
						src: tu(t.url)
					};
					null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
					var r = {
						type: "element",
						tagName: "img",
						properties: n,
						children: []
					};
					return e.patch(t, r), e.applyData(t, r)
				},
				inlineCode: function(e, t) {
					var n = {
						type: "text",
						value: t.value.replace(/\r?\n|\r/g, " ")
					};
					e.patch(t, n);
					var r = {
						type: "element",
						tagName: "code",
						properties: {},
						children: [n]
					};
					return e.patch(t, r), e.applyData(t, r)
				},
				linkReference: function(e, t) {
					var n = String(t.identifier).toUpperCase(),
						r = e.definitionById.get(n);
					if (!r) return tT(e, t);
					var a = {
						href: tu(r.url || "")
					};
					null !== r.title && void 0 !== r.title && (a.title = r.title);
					var i = {
						type: "element",
						tagName: "a",
						properties: a,
						children: e.all(t)
					};
					return e.patch(t, i), e.applyData(t, i)
				},
				link: function(e, t) {
					var n = {
						href: tu(t.url)
					};
					null !== t.title && void 0 !== t.title && (n.title = t.title);
					var r = {
						type: "element",
						tagName: "a",
						properties: n,
						children: e.all(t)
					};
					return e.patch(t, r), e.applyData(t, r)
				},
				listItem: function(e, t, n) {
					var r = e.all(t),
						a = n ? function(e) {
							var t = !1;
							if ("list" === e.type) {
								t = e.spread || !1;
								for (var n = e.children, r = -1; !t && ++r < n.length;) t = tg(n[r])
							}
							return t
						}(n) : tg(t),
						i = {},
						s = [];
					if ("boolean" == typeof t.checked) {
						var o, c = r[0];
						c && "element" === c.type && "p" === c.tagName ? o = c : (o = {
							type: "element",
							tagName: "p",
							properties: {},
							children: []
						}, r.unshift(o)), o.children.length > 0 && o.children.unshift({
							type: "text",
							value: " "
						}), o.children.unshift({
							type: "element",
							tagName: "input",
							properties: {
								type: "checkbox",
								checked: t.checked,
								disabled: !0
							},
							children: []
						}), i.className = ["task-list-item"]
					}
					for (var l = -1; ++l < r.length;) {
						var u = r[l];
						(a || 0 !== l || "element" !== u.type || "p" !== u.tagName) && s.push({
							type: "text",
							value: "\n"
						}), "element" !== u.type || "p" !== u.tagName || a ? s.push(u) : s.push(...u.children)
					}
					var h = r[r.length - 1];
					h && (a || "element" !== h.type || "p" !== h.tagName) && s.push({
						type: "text",
						value: "\n"
					});
					var p = {
						type: "element",
						tagName: "li",
						properties: i,
						children: s
					};
					return e.patch(t, p), e.applyData(t, p)
				},
				list: function(e, t) {
					var n = {},
						r = e.all(t),
						a = -1;
					for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++a < r.length;) {
						var i = r[a];
						if ("element" === i.type && "li" === i.tagName && i.properties && Array.isArray(i.properties.className) && i.properties.className.includes("task-list-item")) {
							n.className = ["contains-task-list"];
							break
						}
					}
					var s = {
						type: "element",
						tagName: t.ordered ? "ol" : "ul",
						properties: n,
						children: e.wrap(r, !0)
					};
					return e.patch(t, s), e.applyData(t, s)
				},
				paragraph: function(e, t) {
					var n = {
						type: "element",
						tagName: "p",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				root: function(e, t) {
					var n = {
						type: "root",
						children: e.wrap(e.all(t))
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				strong: function(e, t) {
					var n = {
						type: "element",
						tagName: "strong",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				table: function(e, t) {
					var n = e.all(t),
						r = n.shift(),
						a = [];
					if (r) {
						var i = {
							type: "element",
							tagName: "thead",
							properties: {},
							children: e.wrap([r], !0)
						};
						e.patch(t.children[0], i), a.push(i)
					}
					if (n.length > 0) {
						var s = {
								type: "element",
								tagName: "tbody",
								properties: {},
								children: e.wrap(n, !0)
							},
							o = (0, g.PW)(t.children[1]),
							c = (0, g.Y)(t.children[t.children.length - 1]);
						o && c && (s.position = {
							start: o,
							end: c
						}), a.push(s)
					}
					var l = {
						type: "element",
						tagName: "table",
						properties: {},
						children: e.wrap(a, !0)
					};
					return e.patch(t, l), e.applyData(t, l)
				},
				tableCell: function(e, t) {
					var n = {
						type: "element",
						tagName: "td",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				tableRow: function(e, t, n) {
					for (var r = n ? n.children : void 0, a = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td", i = n && "table" === n.type ? n.align : void 0, s = i ? i.length : t.children.length, o = -1, c = []; ++o < s;) {
						var l = t.children[o],
							u = {},
							h = i ? i[o] : void 0;
						h && (u.align = h);
						var p = {
							type: "element",
							tagName: a,
							properties: u,
							children: []
						};
						l && (p.children = e.all(l), e.patch(l, p), p = e.applyData(l, p)), c.push(p)
					}
					var d = {
						type: "element",
						tagName: "tr",
						properties: {},
						children: e.wrap(c, !0)
					};
					return e.patch(t, d), e.applyData(t, d)
				},
				text: function(e, t) {
					var n = {
						type: "text",
						value: function(e) {
							for (var t = String(e), n = /\r?\n|\r/g, r = n.exec(t), a = 0, i = []; r;) i.push(tA(t.slice(a, r.index), a > 0, !0), r[0]), a = r.index + r[0].length, r = n.exec(t);
							return i.push(tA(t.slice(a), a > 0, !1)), i.join("")
						}(String(t.value))
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				thematicBreak: function(e, t) {
					var n = {
						type: "element",
						tagName: "hr",
						properties: {},
						children: []
					};
					return e.patch(t, n), e.applyData(t, n)
				},
				toml: tS,
				yaml: tS,
				definition: tS,
				footnoteDefinition: tS
			};

			function tS() {}
			var tO = ["children"];

			function tI(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function tN(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tI(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tI(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var tk = {}.hasOwnProperty,
				tb = {};

			function tC(e, t) {
				e.position && (t.position = (0, g.G1)(e))
			}

			function tv(e, t) {
				var n = t;
				if (e && e.data) {
					var r = e.data.hName,
						a = e.data.hChildren,
						i = e.data.hProperties;
					"string" == typeof r && ("element" === n.type ? n.tagName = r : n = {
						type: "element",
						tagName: r,
						properties: {},
						children: "children" in n ? n.children : [n]
					}), "element" === n.type && i && Object.assign(n.properties, (0, tl.Ay)(i)), "children" in n && n.children && null != a && (n.children = a)
				}
				return n
			}

			function tD(e, t) {
				var n = [],
					r = -1;
				for (t && n.push({
						type: "text",
						value: "\n"
					}); ++r < e.length;) r && n.push({
					type: "text",
					value: "\n"
				}), n.push(e[r]);
				return t && e.length > 0 && n.push({
					type: "text",
					value: "\n"
				}), n
			}

			function ty(e) {
				for (var t = 0, n = e.charCodeAt(t); 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
				return e.slice(t)
			}

			function tR(e, t) {
				var n, r, a, s, o = (n = t || tb, r = new Map, s = {
						all: function(e) {
							var t = [];
							if ("children" in e)
								for (var n = e.children, r = -1; ++r < n.length;) {
									var a = s.one(n[r], e);
									if (a) {
										if (r && "break" === n[r - 1].type && (Array.isArray(a) || "text" !== a.type || (a.value = ty(a.value)), !Array.isArray(a) && "element" === a.type)) {
											var i = a.children[0];
											i && "text" === i.type && (i.value = ty(i.value))
										}
										Array.isArray(a) ? t.push(...a) : t.push(a)
									}
								}
							return t
						},
						applyData: tv,
						definitionById: r,
						footnoteById: a = new Map,
						footnoteCounts: new Map,
						footnoteOrder: [],
						handlers: tN(tN({}, t_), n.handlers),
						one: function(e, t) {
							var n = e.type,
								r = s.handlers[n];
							if (tk.call(s.handlers, n) && r) return r(s, e, t);
							if (s.options.passThrough && s.options.passThrough.includes(n)) {
								if ("children" in e) {
									var {
										children: a
									} = e, i = (0, tm.A)(e, tO), o = (0, tl.Ay)(i);
									return o.children = s.all(e), o
								}
								return (0, tl.Ay)(e)
							}
							return (s.options.unknownHandler || function(e, t) {
								var n = t.data || {},
									r = "value" in t && !(tk.call(n, "hProperties") || tk.call(n, "hChildren")) ? {
										type: "text",
										value: t.value
									} : {
										type: "element",
										tagName: "div",
										properties: {},
										children: e.all(t)
									};
								return e.patch(t, r), e.applyData(t, r)
							})(s, e, t)
						},
						options: n,
						patch: tC,
						wrap: tD
					}, (0, tE.YR)(e, function(e) {
						if ("definition" === e.type || "footnoteDefinition" === e.type) {
							var t = "definition" === e.type ? r : a,
								n = String(e.identifier).toUpperCase();
							t.has(n) || t.set(n, e)
						}
					}), s),
					c = o.one(e, void 0),
					l = function(e) {
						for (var t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || td, r = e.options.footnoteBackLabel || tf, a = e.options.footnoteLabel || "Footnotes", i = e.options.footnoteLabelTagName || "h2", s = e.options.footnoteLabelProperties || {
								className: ["sr-only"]
							}, o = [], c = -1; ++c < e.footnoteOrder.length;) {
							var l = e.footnoteById.get(e.footnoteOrder[c]);
							if (l) {
								for (var u = e.all(l), h = String(l.identifier).toUpperCase(), p = tu(h.toLowerCase()), d = 0, f = [], m = e.footnoteCounts.get(h); void 0 !== m && ++d <= m;) {
									f.length > 0 && f.push({
										type: "text",
										value: " "
									});
									var E = "string" == typeof n ? n : n(c, d);
									"string" == typeof E && (E = {
										type: "text",
										value: E
									}), f.push({
										type: "element",
										tagName: "a",
										properties: {
											href: "#" + t + "fnref-" + p + (d > 1 ? "-" + d : ""),
											dataFootnoteBackref: "",
											ariaLabel: "string" == typeof r ? r : r(c, d),
											className: ["data-footnote-backref"]
										},
										children: Array.isArray(E) ? E : [E]
									})
								}
								var T = u[u.length - 1];
								if (T && "element" === T.type && "p" === T.tagName) {
									var g = T.children[T.children.length - 1];
									g && "text" === g.type ? g.value += " " : T.children.push({
										type: "text",
										value: " "
									}), T.children.push(...f)
								} else u.push(...f);
								var A = {
									type: "element",
									tagName: "li",
									properties: {
										id: t + "fn-" + p
									},
									children: e.wrap(u, !0)
								};
								e.patch(l, A), o.push(A)
							}
						}
						if (0 !== o.length) return {
							type: "element",
							tagName: "section",
							properties: {
								dataFootnotes: !0,
								className: ["footnotes"]
							},
							children: [{
								type: "element",
								tagName: i,
								properties: tp(tp({}, (0, tl.Ay)(s)), {}, {
									id: "footnote-label"
								}),
								children: [{
									type: "text",
									value: a
								}]
							}, {
								type: "text",
								value: "\n"
							}, {
								type: "element",
								tagName: "ol",
								properties: {},
								children: e.wrap(o, !0)
							}, {
								type: "text",
								value: "\n"
							}]
						}
					}(o),
					u = Array.isArray(c) ? {
						type: "root",
						children: c
					} : c || {
						type: "root",
						children: []
					};
				return l && ((0, i.ok)("children" in u), u.children.push({
					type: "text",
					value: "\n"
				}, l)), u
			}

			function tL(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function tP(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tL(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tL(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function tM(e, t) {
				if (e && "run" in e) {
					var n, r;
					return n = function*(n, r) {
							var a = tR(n, tP({
								file: r
							}, t));
							yield e.run(a, r)
						}, r = function() {
							var e = this,
								t = arguments;
							return new Promise(function(r, a) {
								var i = n.apply(e, t);

								function s(e) {
									tc(i, r, a, s, o, "next", e)
								}

								function o(e) {
									tc(i, r, a, s, o, "throw", e)
								}
								s(void 0)
							})
						},
						function(e, t) {
							return r.apply(this, arguments)
						}
				}
				return function(n, r) {
					return tR(n, tP({
						file: r
					}, e || t))
				}
			}

			function tx(e) {
				if (e) throw e
			}
			var tw = n(5609);

			function tB(e) {
				if ("object" != typeof e || null === e) return !1;
				var t = Object.getPrototypeOf(e);
				return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
			}
			var tF = function(e, t) {
					if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
					tj(e);
					var n, r = 0,
						a = -1,
						i = e.length;
					if (void 0 === t || 0 === t.length || t.length > e.length) {
						for (; i--;)
							if (47 === e.codePointAt(i)) {
								if (n) {
									r = i + 1;
									break
								}
							} else a < 0 && (n = !0, a = i + 1);
						return a < 0 ? "" : e.slice(r, a)
					}
					if (t === e) return "";
					for (var s = -1, o = t.length - 1; i--;)
						if (47 === e.codePointAt(i)) {
							if (n) {
								r = i + 1;
								break
							}
						} else s < 0 && (n = !0, s = i + 1), o > -1 && (e.codePointAt(i) === t.codePointAt(o--) ? o < 0 && (a = i) : (o = -1, a = s));
					return r === a ? a = s : a < 0 && (a = e.length), e.slice(r, a)
				},
				tH = function(e) {
					if (tj(e), 0 === e.length) return ".";
					for (var t, n = -1, r = e.length; --r;)
						if (47 === e.codePointAt(r)) {
							if (t) {
								n = r;
								break
							}
						} else t || (t = !0);
					return n < 0 ? 47 === e.codePointAt(0) ? "/" : "." : 1 === n && 47 === e.codePointAt(0) ? "//" : e.slice(0, n)
				},
				tU = function(e) {
					tj(e);
					for (var t, n = e.length, r = -1, a = 0, i = -1, s = 0; n--;) {
						var o = e.codePointAt(n);
						if (47 === o) {
							if (t) {
								a = n + 1;
								break
							}
							continue
						}
						r < 0 && (t = !0, r = n + 1), 46 === o ? i < 0 ? i = n : 1 !== s && (s = 1) : i > -1 && (s = -1)
					}
					return i < 0 || r < 0 || 0 === s || 1 === s && i === r - 1 && i === a + 1 ? "" : e.slice(i, r)
				},
				tG = function() {
					for (var e, t, n, r, a = -1, i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
					for (; ++a < s.length;) tj(s[a]), s[a] && (r = void 0 === r ? s[a] : r + "/" + s[a]);
					return void 0 === r ? "." : (tj(e = r), t = 47 === e.codePointAt(0), 0 !== (n = function(e, t) {
						for (var n, r, a = "", i = 0, s = -1, o = 0, c = -1; ++c <= e.length;) {
							if (c < e.length) n = e.codePointAt(c);
							else if (47 === n) break;
							else n = 47;
							if (47 === n) {
								if (s === c - 1 || 1 === o);
								else if (s !== c - 1 && 2 === o) {
									if (a.length < 2 || 2 !== i || 46 !== a.codePointAt(a.length - 1) || 46 !== a.codePointAt(a.length - 2)) {
										if (a.length > 2) {
											if ((r = a.lastIndexOf("/")) !== a.length - 1) {
												r < 0 ? (a = "", i = 0) : i = (a = a.slice(0, r)).length - 1 - a.lastIndexOf("/"), s = c, o = 0;
												continue
											}
										} else if (a.length > 0) {
											a = "", i = 0, s = c, o = 0;
											continue
										}
									}
									t && (a = a.length > 0 ? a + "/.." : "..", i = 2)
								} else a.length > 0 ? a += "/" + e.slice(s + 1, c) : a = e.slice(s + 1, c), i = c - s - 1;
								s = c, o = 0
							} else 46 === n && o > -1 ? o++ : o = -1
						}
						return a
					}(e, !t)).length || t || (n = "."), n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += "/"), t ? "/" + n : n)
				};

			function tj(e) {
				if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
			}

			function tY(e) {
				return !!(null !== e && "object" == typeof e && "href" in e && e.href && "protocol" in e && e.protocol && void 0 === e.auth)
			}
			var tz = ["history", "path", "basename", "stem", "extname", "dirname"];
			class tW {
				constructor(e) {
					t = e ? tY(e) ? {
						path: e
					} : "string" == typeof e || function(e) {
						return !!(e && "object" == typeof e && "byteLength" in e && "byteOffset" in e)
					}(e) ? {
						value: e
					} : e : {}, this.cwd = "cwd" in t ? "" : "/", this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
					for (var t, n, r = -1; ++r < tz.length;) {
						var a = tz[r];
						a in t && void 0 !== t[a] && null !== t[a] && (this[a] = "history" === a ? [...t[a]] : t[a])
					}
					for (n in t) tz.includes(n) || (this[n] = t[n])
				}
				get basename() {
					return "string" == typeof this.path ? tF(this.path) : void 0
				}
				set basename(e) {
					tV(e, "basename"), tq(e, "basename"), this.path = tG(this.dirname || "", e)
				}
				get dirname() {
					return "string" == typeof this.path ? tH(this.path) : void 0
				}
				set dirname(e) {
					tQ(this.basename, "dirname"), this.path = tG(e || "", this.basename)
				}
				get extname() {
					return "string" == typeof this.path ? tU(this.path) : void 0
				}
				set extname(e) {
					if (tq(e, "extname"), tQ(this.dirname, "extname"), e) {
						if (46 !== e.codePointAt(0)) throw Error("`extname` must start with `.`");
						if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
					}
					this.path = tG(this.dirname, this.stem + (e || ""))
				}
				get path() {
					return this.history[this.history.length - 1]
				}
				set path(e) {
					tY(e) && (e = function(e) {
						if ("string" == typeof e) e = new URL(e);
						else if (!tY(e)) {
							var t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
							throw t.code = "ERR_INVALID_ARG_TYPE", t
						}
						if ("file:" !== e.protocol) {
							var n = TypeError("The URL must be of scheme file");
							throw n.code = "ERR_INVALID_URL_SCHEME", n
						}
						return function(e) {
							if ("" !== e.hostname) {
								var t = TypeError('File URL host must be "localhost" or empty on darwin');
								throw t.code = "ERR_INVALID_FILE_URL_HOST", t
							}
							for (var n = e.pathname, r = -1; ++r < n.length;)
								if (37 === n.codePointAt(r) && 50 === n.codePointAt(r + 1)) {
									var a = n.codePointAt(r + 2);
									if (70 === a || 102 === a) {
										var i = TypeError("File URL path must not include encoded / characters");
										throw i.code = "ERR_INVALID_FILE_URL_PATH", i
									}
								} return decodeURIComponent(n)
						}(e)
					}(e)), tV(e, "path"), this.path !== e && this.history.push(e)
				}
				get stem() {
					return "string" == typeof this.path ? tF(this.path, this.extname) : void 0
				}
				set stem(e) {
					tV(e, "stem"), tq(e, "stem"), this.path = tG(this.dirname || "", e + (this.extname || ""))
				}
				fail(e, t, n) {
					var r = this.message(e, t, n);
					throw r.fatal = !0, r
				}
				info(e, t, n) {
					var r = this.message(e, t, n);
					return r.fatal = void 0, r
				}
				message(e, t, n) {
					var r = new N(e, t, n);
					return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
				}
				toString(e) {
					return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(e || void 0).decode(this.value)
				}
			}

			function tq(e, t) {
				if (e && e.includes("/")) throw Error("`" + t + "` cannot be a path: did not expect `/`")
			}

			function tV(e, t) {
				if (!e) throw Error("`" + t + "` cannot be empty")
			}

			function tQ(e, t) {
				if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
			}
			var tK = function(e) {
					var t = this.constructor.prototype,
						n = t[e],
						r = function() {
							return n.apply(r, arguments)
						};
					return Object.setPrototypeOf(r, t), r
				},
				tX = {}.hasOwnProperty;
			class tJ extends tK {
				constructor() {
					super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = function() {
						var e = [],
							t = {
								run: function() {
									for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
									var a = -1,
										i = n.pop();
									if ("function" != typeof i) throw TypeError("Expected function as last argument, not " + i);
									! function t(r) {
										var s = e[++a],
											o = -1;
										if (r) return void i(r);
										for (var c = arguments.length, l = Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++) l[u - 1] = arguments[u];
										for (; ++o < n.length;)(null === l[o] || void 0 === l[o]) && (l[o] = n[o]);
										n = l, s ? (function(e, t) {
											var n;
											return function() {
												for (var t, i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
												var c = e.length > s.length;
												c && s.push(r);
												try {
													t = e.apply(this, s)
												} catch (e) {
													if (c && n) throw e;
													return r(e)
												}
												c || (t && t.then && "function" == typeof t.then ? t.then(a, r) : t instanceof Error ? r(t) : a(t))
											};

											function r(e) {
												if (!n) {
													n = !0;
													for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
													t(e, ...a)
												}
											}

											function a(e) {
												r(null, e)
											}
										})(s, t)(...l) : i(null, ...l)
									}(null, ...n)
								},
								use: function(n) {
									if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
									return e.push(n), t
								}
							};
						return t
					}()
				}
				copy() {
					for (var e = new tJ, t = -1; ++t < this.attachers.length;) {
						var n = this.attachers[t];
						e.use(...n)
					}
					return e.data(tw(!0, {}, this.namespace)), e
				}
				data(e, t) {
					return "string" == typeof e ? 2 == arguments.length ? (t1("data", this.frozen), this.namespace[e] = t, this) : tX.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (t1("data", this.frozen), this.namespace = e, this) : this.namespace
				}
				freeze() {
					if (this.frozen) return this;
					for (; ++this.freezeIndex < this.attachers.length;) {
						var [e, ...t] = this.attachers[this.freezeIndex];
						if (!1 !== t[0]) {
							!0 === t[0] && (t[0] = void 0);
							var n = e.call(this, ...t);
							"function" == typeof n && this.transformers.use(n)
						}
					}
					return this.frozen = !0, this.freezeIndex = 1 / 0, this
				}
				parse(e) {
					this.freeze();
					var t = t4(e),
						n = this.parser || this.Parser;
					return t$("parse", n), n(String(t), t)
				}
				process(e, t) {
					var n = this;
					return this.freeze(), t$("process", this.parser || this.Parser), t0("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);

					function r(r, a) {
						var s = t4(e),
							o = n.parse(s);

						function c(e, n) {
							e || !n ? a(e) : r ? r(n) : ((0, i.ok)(t, "`done` is defined if `resolve` is not"), t(void 0, n))
						}
						n.run(o, s, function(e, t, r) {
							if (e || !t || !r) return c(e);
							var a, i, s = n.stringify(t, r);
							"string" == typeof(a = s) || (i = a) && "object" == typeof i && "byteLength" in i && "byteOffset" in i ? r.value = s : r.result = s, c(e, r)
						})
					}
				}
				processSync(e) {
					var t, n = !1;
					return this.freeze(), t$("processSync", this.parser || this.Parser), t0("processSync", this.compiler || this.Compiler), this.process(e, function(e, r) {
						n = !0, tx(e), t = r
					}), t3("processSync", "process", n), (0, i.ok)(t, "we either bailed on an error or have a tree"), t
				}
				run(e, t, n) {
					t2(e), this.freeze();
					var r = this.transformers;
					return n || "function" != typeof t || (n = t, t = void 0), n ? a(void 0, n) : new Promise(a);

					function a(a, s) {
						(0, i.ok)("function" != typeof t, "`file` can’t be a `done` anymore, we checked");
						var o = t4(t);
						r.run(e, o, function(t, r, o) {
							var c = r || e;
							t ? s(t) : a ? a(c) : ((0, i.ok)(n, "`done` is defined if `resolve` is not"), n(void 0, c, o))
						})
					}
				}
				runSync(e, t) {
					var n, r = !1;
					return this.run(e, t, function(e, t) {
						tx(e), n = t, r = !0
					}), t3("runSync", "run", r), (0, i.ok)(n, "we either bailed on an error or have a tree"), n
				}
				stringify(e, t) {
					this.freeze();
					var n = t4(t),
						r = this.compiler || this.Compiler;
					return t0("stringify", r), t2(e), r(e, n)
				}
				use(e) {
					var t = this.attachers,
						n = this.namespace;
					if (t1("use", this.frozen), null == e);
					else if ("function" == typeof e) {
						for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
						c(e, a)
					} else if ("object" == typeof e) Array.isArray(e) ? o(e) : s(e);
					else throw TypeError("Expected usable value, not `" + e + "`");
					return this;

					function s(e) {
						if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
						o(e.plugins), e.settings && (n.settings = tw(!0, n.settings, e.settings))
					}

					function o(e) {
						var t = -1;
						if (null == e);
						else if (Array.isArray(e))
							for (; ++t < e.length;) ! function(e) {
								if ("function" == typeof e) c(e, []);
								else if ("object" == typeof e)
									if (Array.isArray(e)) {
										var [t, ...n] = e;
										c(t, n)
									} else s(e);
								else throw TypeError("Expected usable value, not `" + e + "`")
							}(e[t]);
						else throw TypeError("Expected a list of plugins, not `" + e + "`")
					}

					function c(e, n) {
						for (var r = -1, a = -1; ++r < t.length;)
							if (t[r][0] === e) {
								a = r;
								break
							} if (-1 === a) t.push([e, ...n]);
						else if (n.length > 0) {
							var [i, ...s] = n, o = t[a][1];
							tB(o) && tB(i) && (i = tw(!0, o, i)), t[a] = [e, i, ...s]
						}
					}
				}
			}
			var tZ = new tJ().freeze();

			function t$(e, t) {
				if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `parser`")
			}

			function t0(e, t) {
				if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `compiler`")
			}

			function t1(e, t) {
				if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
			}

			function t2(e) {
				if (!tB(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
			}

			function t3(e, t, n) {
				if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
			}

			function t4(e) {
				var t;
				return (t = e) && "object" == typeof t && "message" in t && "messages" in t ? e : new tW(e)
			}

			function t5(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function t9(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? t5(Object(n), !0).forEach(function(t) {
						(0, a.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t5(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var t6 = [],
				t7 = {
					allowDangerousHtml: !0
				},
				t8 = /^(https?|ircs?|mailto|xmpp)$/i,
				ne = [{
					from: "astPlugins",
					id: "remove-buggy-html-in-markdown-parser"
				}, {
					from: "allowDangerousHtml",
					id: "remove-buggy-html-in-markdown-parser"
				}, {
					from: "allowNode",
					id: "replace-allownode-allowedtypes-and-disallowedtypes",
					to: "allowElement"
				}, {
					from: "allowedTypes",
					id: "replace-allownode-allowedtypes-and-disallowedtypes",
					to: "allowedElements"
				}, {
					from: "className",
					id: "remove-classname"
				}, {
					from: "disallowedTypes",
					id: "replace-allownode-allowedtypes-and-disallowedtypes",
					to: "disallowedElements"
				}, {
					from: "escapeHtml",
					id: "remove-buggy-html-in-markdown-parser"
				}, {
					from: "includeElementIndex",
					id: "#remove-includeelementindex"
				}, {
					from: "includeNodeIndex",
					id: "change-includenodeindex-to-includeelementindex"
				}, {
					from: "linkTarget",
					id: "remove-linktarget"
				}, {
					from: "plugins",
					id: "change-plugins-to-remarkplugins",
					to: "remarkPlugins"
				}, {
					from: "rawSourcePos",
					id: "#remove-rawsourcepos"
				}, {
					from: "renderers",
					id: "change-renderers-to-components",
					to: "components"
				}, {
					from: "source",
					id: "change-source-to-children",
					to: "children"
				}, {
					from: "sourcePos",
					id: "#remove-sourcepos"
				}, {
					from: "transformImageUri",
					id: "#add-urltransform",
					to: "urlTransform"
				}, {
					from: "transformLinkUri",
					id: "#add-urltransform",
					to: "urlTransform"
				}];

			function nt(e) {
				var t, n, r, a, s, o, c = (n = (t = e).rehypePlugins || t6, r = t.remarkPlugins || t6, a = t.remarkRehypeOptions ? t9(t9({}, t.remarkRehypeOptions), t7) : t7, tZ().use(to).use(r).use(tM, a).use(n)),
					l = (s = e.children || "", o = new tW, "string" == typeof s ? o.value = s : (0, i.HB)("Unexpected value `" + s + "` for `children` prop, expected `string`"), o);
				return function(e, t) {
					var n = t.allowedElements,
						r = t.allowElement,
						a = t.components,
						s = t.disallowedElements,
						o = t.skipHtml,
						c = t.unwrapDisallowed,
						l = t.urlTransform || nn;
					for (var u of ne) Object.hasOwn(t, u.from) && (0, i.HB)("Unexpected `" + u.from + "` prop, " + (u.to ? "use `" + u.to + "` instead" : "remove it") + " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" + u.id + "> for more info)");
					return n && s && (0, i.HB)("Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"), (0, tE.YR)(e, function(e, t, a) {
							if ("raw" === e.type && a && "number" == typeof t) return o ? a.children.splice(t, 1) : a.children[t] = {
								type: "text",
								value: e.value
							}, t;
							if ("element" === e.type) {
								var i;
								for (i in F)
									if (Object.hasOwn(F, i) && Object.hasOwn(e.properties, i)) {
										var u = e.properties[i],
											h = F[i];
										(null === h || h.includes(e.tagName)) && (e.properties[i] = l(String(u || ""), i, e))
									}
							}
							if ("element" === e.type) {
								var p = n ? !n.includes(e.tagName) : !!s && s.includes(e.tagName);
								if (!p && r && "number" == typeof t && (p = !r(e, t, a)), p && a && "number" == typeof t) return c && e.children ? a.children.splice(t, 1, ...e.children) : a.children.splice(t, 1), t
							}
						}),
						function(e, t) {
							if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
							var n, r, a, i, s, o = t.filePath || void 0;
							if (t.development) {
								if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
								n = o, r = t.jsxDEV, s = function(e, t, a, i) {
									var s = Array.isArray(a.children),
										o = (0, g.PW)(e);
									return r(t, a, i, s, {
										columnNumber: o ? o.column - 1 : void 0,
										fileName: n,
										lineNumber: o ? o.line : void 0
									}, void 0)
								}
							} else {
								if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
								if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
								a = t.jsx, i = t.jsxs, s = function(e, t, n, r) {
									var s = Array.isArray(n.children) ? i : a;
									return r ? s(t, n, r) : s(t, n)
								}
							}
							var c = {
									Fragment: t.Fragment,
									ancestors: [],
									components: t.components || {},
									create: s,
									elementAttributeNameCase: t.elementAttributeNameCase || "react",
									evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
									filePath: o,
									ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
									passKeys: !1 !== t.passKeys,
									passNode: t.passNode || !1,
									schema: "svg" === t.space ? d.JW : d.qy,
									stylePropertyNameCase: t.stylePropertyNameCase || "dom",
									tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
								},
								l = R(c, e, void 0);
							return l && "string" != typeof l ? l : c.create(e, c.Fragment, {
								children: l || void 0
							}, void 0)
						}(e, {
							Fragment: H.Fragment,
							components: a,
							ignoreInvalidStyle: !0,
							jsx: H.jsx,
							jsxs: H.jsxs,
							passKeys: !0,
							passNode: !0
						})
				}(c.runSync(c.parse(l), l), e)
			}

			function nn(e) {
				var t = e.indexOf(":"),
					n = e.indexOf("?"),
					r = e.indexOf("#"),
					a = e.indexOf("/");
				return -1 === t || -1 !== a && t > a || -1 !== n && t > n || -1 !== r && t > r || t8.test(e.slice(0, t)) ? e : ""
			}
		},
		8472: (e, t, n) => {
			function r() {}

			function a() {}
			n.d(t, {
				HB: () => a,
				ok: () => r
			})
		},
		8636: (e, t, n) => {
			n.d(t, {
				E: () => s
			});
			var r = n(5244),
				a = n(1257),
				i = Object.keys(a);
			class s extends r.R {
				constructor(e, t, n, r) {
					var s = -1;
					if (super(e, t), function(e, t, n) {
							n && (e[t] = n)
						}(this, "space", r), "number" == typeof n)
						for (; ++s < i.length;) {
							var o = i[s];
							! function(e, t, n) {
								n && (e[t] = n)
							}(this, i[s], (n & a[o]) === a[o])
						}
				}
			}
			s.prototype.defined = !0
		},
		8956: (e, t, n) => {
			n.d(t, {
				S: () => a
			});
			var r = n(269);

			function a(e) {
				return null === e || (0, r.Ee)(e) || (0, r.Ny)(e) ? 1 : (0, r.es)(e) ? 2 : void 0
			}
		},
		9004: (e, t, n) => {
			n.d(t, {
				W: () => r
			});

			function r(e, t, n) {
				for (var r = [], a = -1; ++a < e.length;) {
					var i = e[a].resolveAll;
					i && !r.includes(i) && (t = i(t, n), r.push(i))
				}
				return t
			}
		},
		9152: (e, t, n) => {
			n.d(t, {
				C: () => r
			});
			var r = function(e) {
				var t, n;
				if (null == e) return i;
				if ("function" == typeof e) return a(e);
				if ("object" == typeof e) {
					return Array.isArray(e) ? function(e) {
						for (var t = [], n = -1; ++n < e.length;) t[n] = r(e[n]);
						return a(function() {
							for (var e = -1, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
							for (; ++e < t.length;)
								if (t[e].apply(this, r)) return !0;
							return !1
						})
					}(e) : (t = e, a(function(e) {
						var n;
						for (n in t)
							if (e[n] !== t[n]) return !1;
						return !0
					}))
				}
				if ("string" == typeof e) {
					return n = e, a(function(e) {
						return e && e.type === n
					})
				}
				throw Error("Expected function, string, or object as test")
			};

			function a(e) {
				return function(t, n, r) {
					return !!(function(e) {
						return null !== e && "object" == typeof e && "type" in e
					}(t) && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0))
				}
			}

			function i() {
				return !0
			}
		},
		9213: (e, t, n) => {
			function r(e, t) {
				var n = String(e);
				if ("string" != typeof t) throw TypeError("Expected character");
				for (var r = 0, a = n.indexOf(t); - 1 !== a;) r++, a = n.indexOf(t, a + t.length);
				return r
			}
			n.d(t, {
				A: () => eU
			});
			var a = n(8472),
				i = n(269),
				s = n(7978),
				o = n(9152),
				c = "phrasing",
				l = ["autolink", "link", "image", "label"];

			function u(e) {
				this.enter({
					type: "link",
					title: null,
					url: "",
					children: []
				}, e)
			}

			function h(e) {
				this.config.enter.autolinkProtocol.call(this, e)
			}

			function p(e) {
				this.config.exit.autolinkProtocol.call(this, e)
			}

			function d(e) {
				this.config.exit.data.call(this, e);
				var t = this.stack[this.stack.length - 1];
				(0, a.ok)("link" === t.type), t.url = "http://" + this.sliceSerialize(e)
			}

			function f(e) {
				this.config.exit.autolinkEmail.call(this, e)
			}

			function m(e) {
				this.exit(e)
			}

			function E(e) {
				! function(e, t, n) {
					for (var r = (0, o.C)((n || {}).ignore || []), a = function(e) {
							var t = [];
							if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
							for (var n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1; ++r < n.length;) {
								var a, i = n[r];
								t.push(["string" == typeof(a = i[0]) ? RegExp(function(e) {
									if ("string" != typeof e) throw TypeError("Expected a string");
									return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
								}(a), "g") : a, function(e) {
									return "function" == typeof e ? e : function() {
										return e
									}
								}(i[1])])
							}
							return t
						}(t), i = -1; ++i < a.length;)(0, s.VG)(e, "text", c);

					function c(e, t) {
						for (var n, s = -1; ++s < t.length;) {
							var o = t[s],
								c = n ? n.children : void 0;
							if (r(o, c ? c.indexOf(o) : void 0, n)) return;
							n = o
						}
						if (n) return function(e, t) {
							var n = t[t.length - 1],
								r = a[i][0],
								s = a[i][1],
								o = 0,
								c = n.children.indexOf(e),
								l = !1,
								u = [];
							r.lastIndex = 0;
							for (var h = r.exec(e.value); h;) {
								var p = h.index,
									d = {
										index: h.index,
										input: h.input,
										stack: [...t, e]
									},
									f = s(...h, d);
								if ("string" == typeof f && (f = f.length > 0 ? {
										type: "text",
										value: f
									} : void 0), !1 === f ? r.lastIndex = p + 1 : (o !== p && u.push({
										type: "text",
										value: e.value.slice(o, p)
									}), Array.isArray(f) ? u.push(...f) : f && u.push(f), o = p + h[0].length, l = !0), !r.global) break;
								h = r.exec(e.value)
							}
							return l ? (o < e.value.length && u.push({
								type: "text",
								value: e.value.slice(o)
							}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length
						}(e, t)
					}
				}(e, [
					[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, T],
					[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, g]
				], {
					ignore: ["link", "linkReference"]
				})
			}

			function T(e, t, n, a, i) {
				var s, o = "";
				if (!A(i)) return !1;
				if (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), (s = n.split(".")).length < 2 || s[s.length - 1] && (/_/.test(s[s.length - 1]) || !/[a-zA-Z\d]/.test(s[s.length - 1])) || s[s.length - 2] && (/_/.test(s[s.length - 2]) || !/[a-zA-Z\d]/.test(s[s.length - 2]))) return !1;
				var c = function(e) {
					var t = /[!"&'),.:;<>?\]}]+$/.exec(e);
					if (!t) return [e, void 0];
					e = e.slice(0, t.index);
					for (var n = t[0], a = n.indexOf(")"), i = r(e, "("), s = r(e, ")"); - 1 !== a && i > s;) e += n.slice(0, a + 1), a = (n = n.slice(a + 1)).indexOf(")"), s++;
					return [e, n]
				}(n + a);
				if (!c[0]) return !1;
				var l = {
					type: "link",
					title: null,
					url: o + t + c[0],
					children: [{
						type: "text",
						value: t + c[0]
					}]
				};
				return c[1] ? [l, {
					type: "text",
					value: c[1]
				}] : l
			}

			function g(e, t, n, r) {
				return !(!A(r, !0) || /[-\d_]$/.test(n)) && {
					type: "link",
					title: null,
					url: "mailto:" + t + "@" + n,
					children: [{
						type: "text",
						value: t + "@" + n
					}]
				}
			}

			function A(e, t) {
				var n = e.input.charCodeAt(e.index - 1);
				return (0 === e.index || (0, i.Ny)(n) || (0, i.es)(n)) && (!t || 47 !== n)
			}
			var _ = n(7373);

			function S() {
				this.buffer()
			}

			function O(e) {
				this.enter({
					type: "footnoteReference",
					identifier: "",
					label: ""
				}, e)
			}

			function I() {
				this.buffer()
			}

			function N(e) {
				this.enter({
					type: "footnoteDefinition",
					identifier: "",
					label: "",
					children: []
				}, e)
			}

			function k(e) {
				var t = this.resume(),
					n = this.stack[this.stack.length - 1];
				(0, a.ok)("footnoteReference" === n.type), n.identifier = (0, _.B)(this.sliceSerialize(e)).toLowerCase(), n.label = t
			}

			function b(e) {
				this.exit(e)
			}

			function C(e) {
				var t = this.resume(),
					n = this.stack[this.stack.length - 1];
				(0, a.ok)("footnoteDefinition" === n.type), n.identifier = (0, _.B)(this.sliceSerialize(e)).toLowerCase(), n.label = t
			}

			function v(e) {
				this.exit(e)
			}

			function D(e, t, n, r) {
				var a = n.createTracker(r),
					i = a.move("[^"),
					s = n.enter("footnoteReference"),
					o = n.enter("reference");
				return i += a.move(n.safe(n.associationId(e), {
					after: "]",
					before: i
				})), o(), s(), i += a.move("]")
			}

			function y(e, t, n) {
				return 0 === t ? e : R(e, t, n)
			}

			function R(e, t, n) {
				return (n ? "" : "    ") + e
			}
			D.peek = function() {
				return "["
			};
			var L = n(1106);

			function P(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function M(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? P(Object(n), !0).forEach(function(t) {
						(0, L.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}
			var x = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];

			function w(e) {
				this.enter({
					type: "delete",
					children: []
				}, e)
			}

			function B(e) {
				this.exit(e)
			}

			function F(e, t, n, r) {
				var a = n.createTracker(r),
					i = n.enter("strikethrough"),
					s = a.move("~~");
				return s += n.containerPhrasing(e, M(M({}, a.current()), {}, {
					before: s,
					after: "~"
				})), s += a.move("~~"), i(), s
			}

			function H(e) {
				return e.length
			}

			function U(e) {
				var t = "string" == typeof e ? e.codePointAt(0) : 0;
				return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 114 * (82 === t || 114 === t)
			}
			F.peek = function() {
				return "~"
			};
			var G = n(8956);
			n(3925);
			n(457);

			function j(e, t, n) {
				for (var r = e.value || "", a = "`", i = -1; RegExp("(^|[^`])" + a + "([^`]|$)").test(r);) a += "`";
				for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++i < n.unsafe.length;) {
					var s = n.unsafe[i],
						o = n.compilePattern(s),
						c = void 0;
					if (s.atBreak)
						for (; c = o.exec(r);) {
							var l = c.index;
							10 === r.charCodeAt(l) && 13 === r.charCodeAt(l - 1) && l--, r = r.slice(0, l) + " " + r.slice(c.index + 1)
						}
				}
				return a + r + a
			}
			j.peek = function() {
				return "`"
			};
			(0, o.C)(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
			var Y = function(e, t, n, r) {
				var a = function(e) {
						var t = e.options.listItemIndent || "one";
						if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
						return t
					}(n),
					i = n.bulletCurrent || function(e) {
						var t = e.options.bullet || "*";
						if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
						return t
					}(n);
				t && "list" === t.type && t.ordered && (i = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + i);
				var s = i.length + 1;
				("tab" === a || "mixed" === a && (t && "list" === t.type && t.spread || e.spread)) && (s = 4 * Math.ceil(s / 4));
				var o = n.createTracker(r);
				o.move(i + " ".repeat(s - i.length)), o.shift(s);
				var c = n.enter("listItem"),
					l = n.indentLines(n.containerFlow(e, o.current()), function(e, t, n) {
						return t ? (n ? "" : " ".repeat(s)) + e : (n ? i : i + " ".repeat(s - i.length)) + e
					});
				return c(), l
			};

			function z(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? z(Object(n), !0).forEach(function(t) {
						(0, L.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function q(e) {
				var t = e._align;
				(0, a.ok)(t, "expected `_align` on table"), this.enter({
					type: "table",
					align: t.map(function(e) {
						return "none" === e ? null : e
					}),
					children: []
				}, e), this.data.inTable = !0
			}

			function V(e) {
				this.exit(e), this.data.inTable = void 0
			}

			function Q(e) {
				this.enter({
					type: "tableRow",
					children: []
				}, e)
			}

			function K(e) {
				this.exit(e)
			}

			function X(e) {
				this.enter({
					type: "tableCell",
					children: []
				}, e)
			}

			function J(e) {
				var t = this.resume();
				this.data.inTable && (t = t.replace(/\\([\\|])/g, Z));
				var n = this.stack[this.stack.length - 1];
				(0, a.ok)("inlineCode" === n.type), n.value = t, this.exit(e)
			}

			function Z(e, t) {
				return "|" === t ? t : e
			}

			function $(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function ee(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? $(Object(n), !0).forEach(function(t) {
						(0, L.A)(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function et(e) {
				var t = this.stack[this.stack.length - 2];
				(0, a.ok)("listItem" === t.type), t.checked = "taskListCheckValueChecked" === e.type
			}

			function en(e) {
				var t = this.stack[this.stack.length - 2];
				if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
					var n = this.stack[this.stack.length - 1];
					(0, a.ok)("paragraph" === n.type);
					var r = n.children[0];
					if (r && "text" === r.type) {
						for (var i, s = t.children, o = -1; ++o < s.length;) {
							var c = s[o];
							if ("paragraph" === c.type) {
								i = c;
								break
							}
						}
						i === n && (r.value = r.value.slice(1), 0 === r.value.length ? n.children.shift() : n.position && r.position && "number" == typeof r.position.start.offset && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)))
					}
				}
				this.exit(e)
			}

			function er(e, t, n, r) {
				var a = e.children[0],
					i = "boolean" == typeof e.checked && a && "paragraph" === a.type,
					s = "[" + (e.checked ? "x" : " ") + "] ",
					o = n.createTracker(r);
				i && o.move(s);
				var c = Y(e, t, n, ee(ee({}, r), o.current()));
				return i && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
					return e + s
				})), c
			}
			for (var ea = n(7082), ei = {
					tokenize: function(e, t, n) {
						var r = 0;
						return function t(i) {
							return (87 === i || 119 === i) && r < 3 ? (r++, e.consume(i), t) : 46 === i && 3 === r ? (e.consume(i), a) : n(i)
						};

						function a(e) {
							return null === e ? n(e) : t(e)
						}
					},
					partial: !0
				}, es = {
					tokenize: function(e, t, n) {
						var r, a, s;
						return o;

						function o(t) {
							return 46 === t || 95 === t ? e.check(ec, l, c)(t) : null === t || (0, i.Ee)(t) || (0, i.Ny)(t) || 45 !== t && (0, i.es)(t) ? l(t) : (s = !0, e.consume(t), o)
						}

						function c(t) {
							return 95 === t ? r = !0 : (a = r, r = void 0), e.consume(t), o
						}

						function l(e) {
							return a || r || !s ? n(e) : t(e)
						}
					},
					partial: !0
				}, eo = {
					tokenize: function(e, t) {
						var n = 0,
							r = 0;
						return a;

						function a(o) {
							return 40 === o ? (n++, e.consume(o), a) : 41 === o && r < n ? s(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(ec, t, s)(o) : null === o || (0, i.Ee)(o) || (0, i.Ny)(o) ? t(o) : (e.consume(o), a)
						}

						function s(t) {
							return 41 === t && r++, e.consume(t), a
						}
					},
					partial: !0
				}, ec = {
					tokenize: function(e, t, n) {
						return r;

						function r(o) {
							return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), s) : 93 === o ? (e.consume(o), a) : 60 === o || null === o || (0, i.Ee)(o) || (0, i.Ny)(o) ? t(o) : n(o)
						}

						function a(e) {
							return null === e || 40 === e || 91 === e || (0, i.Ee)(e) || (0, i.Ny)(e) ? t(e) : r(e)
						}

						function s(t) {
							return (0, i.CW)(t) ? function t(a) {
								return 59 === a ? (e.consume(a), r) : (0, i.CW)(a) ? (e.consume(a), t) : n(a)
							}(t) : n(t)
						}
					},
					partial: !0
				}, el = {
					tokenize: function(e, t, n) {
						return function(t) {
							return e.consume(t), r
						};

						function r(e) {
							return (0, i.lV)(e) ? n(e) : t(e)
						}
					},
					partial: !0
				}, eu = {
					name: "wwwAutolink",
					tokenize: function(e, t, n) {
						var r = this;
						return function(t) {
							return 87 !== t && 119 !== t || !em.call(r, r.previous) || eA(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(ei, e.attempt(es, e.attempt(eo, a), n), n)(t))
						};

						function a(n) {
							return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
						}
					},
					previous: em
				}, eh = {
					name: "protocolAutolink",
					tokenize: function(e, t, n) {
						var r = this,
							a = "",
							s = !1;
						return function(t) {
							return (72 === t || 104 === t) && eE.call(r, r.previous) && !eA(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), a += String.fromCodePoint(t), e.consume(t), o) : n(t)
						};

						function o(t) {
							if ((0, i.CW)(t) && a.length < 5) return a += String.fromCodePoint(t), e.consume(t), o;
							if (58 === t) {
								var r = a.toLowerCase();
								if ("http" === r || "https" === r) return e.consume(t), c
							}
							return n(t)
						}

						function c(t) {
							return 47 === t ? (e.consume(t), s) ? l : (s = !0, c) : n(t)
						}

						function l(t) {
							return null === t || (0, i.JQ)(t) || (0, i.Ee)(t) || (0, i.Ny)(t) || (0, i.es)(t) ? n(t) : e.attempt(es, e.attempt(eo, u), n)(t)
						}

						function u(n) {
							return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
						}
					},
					previous: eE
				}, ep = {
					name: "emailAutolink",
					tokenize: function(e, t, n) {
						var r, a, s = this;
						return function(t) {
							return !eg(t) || !eT.call(s, s.previous) || eA(s.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
								return eg(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r)
							}(t))
						};

						function o(t) {
							return 46 === t ? e.check(el, l, c)(t) : 45 === t || 95 === t || (0, i.lV)(t) ? (a = !0, e.consume(t), o) : l(t)
						}

						function c(t) {
							return e.consume(t), r = !0, o
						}

						function l(o) {
							return a && r && (0, i.CW)(s.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o)
						}
					},
					previous: eT
				}, ed = {}, ef = 48; ef < 123;) ed[ef] = ep, 58 == ++ef ? ef = 65 : 91 === ef && (ef = 97);

			function em(e) {
				return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || (0, i.Ee)(e)
			}

			function eE(e) {
				return !(0, i.CW)(e)
			}

			function eT(e) {
				return !(47 === e || eg(e))
			}

			function eg(e) {
				return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.lV)(e)
			}

			function eA(e) {
				for (var t = e.length, n = !1; t--;) {
					var r = e[t][1];
					if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
						n = !0;
						break
					}
					if (r._gfmAutolinkLiteralWalkedInto) {
						n = !1;
						break
					}
				}
				return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
			}
			ed[43] = ep, ed[45] = ep, ed[46] = ep, ed[95] = ep, ed[72] = [ep, eh], ed[104] = [ep, eh], ed[87] = [ep, eu], ed[119] = [ep, eu];
			var e_ = n(2136),
				eS = n(7666),
				eO = {
					tokenize: function(e, t, n) {
						var r = this;
						return (0, eS.N)(e, function(e) {
							var a = r.events[r.events.length - 1];
							return a && "gfmFootnoteDefinitionIndent" === a[1].type && 4 === a[2].sliceSerialize(a[1], !0).length ? t(e) : n(e)
						}, "gfmFootnoteDefinitionIndent", 5)
					},
					partial: !0
				};

			function eI(e, t, n) {
				for (var r, a = this, i = a.events.length, s = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []); i--;) {
					var o = a.events[i][1];
					if ("labelImage" === o.type) {
						r = o;
						break
					}
					if ("gfmFootnoteCall" === o.type || "labelLink" === o.type || "label" === o.type || "image" === o.type || "link" === o.type) break
				}
				return function(i) {
					if (!r || !r._balanced) return n(i);
					var o = (0, _.B)(a.sliceSerialize({
						start: r.end,
						end: a.now()
					}));
					return 94 === o.codePointAt(0) && s.includes(o.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i)) : n(i)
				}
			}

			function eN(e, t) {
				for (var n = e.length; n--;)
					if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
						e[n][1];
						break
					} e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
				var r = {
						type: "gfmFootnoteCall",
						start: Object.assign({}, e[n + 3][1].start),
						end: Object.assign({}, e[e.length - 1][1].end)
					},
					a = {
						type: "gfmFootnoteCallMarker",
						start: Object.assign({}, e[n + 3][1].end),
						end: Object.assign({}, e[n + 3][1].end)
					};
				a.end.column++, a.end.offset++, a.end._bufferIndex++;
				var i = {
						type: "gfmFootnoteCallString",
						start: Object.assign({}, a.end),
						end: Object.assign({}, e[e.length - 1][1].start)
					},
					s = {
						type: "chunkString",
						contentType: "string",
						start: Object.assign({}, i.start),
						end: Object.assign({}, i.end)
					},
					o = [e[n + 1], e[n + 2],
						["enter", r, t], e[n + 3], e[n + 4],
						["enter", a, t],
						["exit", a, t],
						["enter", i, t],
						["enter", s, t],
						["exit", s, t],
						["exit", i, t], e[e.length - 2], e[e.length - 1],
						["exit", r, t]
					];
				return e.splice(n, e.length - n + 1, ...o), e
			}

			function ek(e, t, n) {
				var r, a = this,
					s = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []),
					o = 0;
				return function(t) {
					return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c
				};

				function c(t) {
					return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l)
				}

				function l(c) {
					if (o > 999 || 93 === c && !r || null === c || 91 === c || (0, i.Ee)(c)) return n(c);
					if (93 === c) {
						e.exit("chunkString");
						var h = e.exit("gfmFootnoteCallString");
						return s.includes((0, _.B)(a.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c)
					}
					return (0, i.Ee)(c) || (r = !0), o++, e.consume(c), 92 === c ? u : l
				}

				function u(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, l) : l(t)
				}
			}

			function eb(e, t, n) {
				var r, a, s = this,
					o = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []),
					c = 0;
				return function(t) {
					return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l
				};

				function l(t) {
					return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t)
				}

				function u(t) {
					if (c > 999 || 93 === t && !a || null === t || 91 === t || (0, i.Ee)(t)) return n(t);
					if (93 === t) {
						e.exit("chunkString");
						var o = e.exit("gfmFootnoteDefinitionLabelString");
						return r = (0, _.B)(s.sliceSerialize(o)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p
					}
					return (0, i.Ee)(t) || (a = !0), c++, e.consume(t), 92 === t ? h : u
				}

				function h(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, u) : u(t)
				}

				function p(t) {
					return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), (0, eS.N)(e, d, "gfmFootnoteDefinitionWhitespace")) : n(t)
				}

				function d(e) {
					return t(e)
				}
			}

			function eC(e, t, n) {
				return e.check(e_.B, t, e.attempt(eO, t, n))
			}

			function ev(e) {
				e.exit("gfmFootnoteDefinition")
			}
			var eD = n(9554),
				ey = n(9004);
			class eR {
				constructor() {
					this.map = []
				}
				add(e, t, n) {
					! function(e, t, n, r) {
						var a = 0;
						if (0 !== n || 0 !== r.length) {
							for (; a < e.map.length;) {
								if (e.map[a][0] === t) {
									e.map[a][1] += n, e.map[a][2].push(...r);
									return
								}
								a += 1
							}
							e.map.push([t, n, r])
						}
					}(this, e, t, n)
				}
				consume(e) {
					if (this.map.sort(function(e, t) {
							return e[0] - t[0]
						}), 0 !== this.map.length) {
						for (var t = this.map.length, n = []; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
						n.push(e.slice()), e.length = 0;
						for (var r = n.pop(); r;) {
							for (var a of r) e.push(a);
							r = n.pop()
						}
						this.map.length = 0
					}
				}
			}

			function eL(e, t, n) {
				var r, a = this,
					s = 0,
					o = 0;
				return function(e) {
					for (var t = a.events.length - 1; t > -1;) {
						var r = a.events[t][1].type;
						if ("lineEnding" === r || "linePrefix" === r) t--;
						else break
					}
					var i = t > -1 ? a.events[t][1].type : null,
						s = "tableHead" === i || "tableRow" === i ? A : c;
					return s === A && a.parser.lazy[a.now().line] ? n(e) : s(e)
				};

				function c(t) {
					var n;
					return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, o += 1), l(n)
				}

				function l(t) {
					return null === t ? n(t) : (0, i.HP)(t) ? o > 1 ? (o = 0, a.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : (0, i.On)(t) ? (0, eS.N)(e, l, "whitespace")(t) : (o += 1, r && (r = !1, s += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, l) : (e.enter("data"), u(t))
				}

				function u(t) {
					return null === t || 124 === t || (0, i.Ee)(t) ? (e.exit("data"), l(t)) : (e.consume(t), 92 === t ? h : u)
				}

				function h(t) {
					return 92 === t || 124 === t ? (e.consume(t), u) : u(t)
				}

				function p(t) {
					return (a.interrupt = !1, a.parser.lazy[a.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, (0, i.On)(t)) ? (0, eS.N)(e, d, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : d(t)
				}

				function d(t) {
					return 45 === t || 58 === t ? m(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), f) : n(t)
				}

				function f(t) {
					return (0, i.On)(t) ? (0, eS.N)(e, m, "whitespace")(t) : m(t)
				}

				function m(t) {
					return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), E) : 45 === t ? (o += 1, E(t)) : null === t || (0, i.HP)(t) ? g(t) : n(t)
				}

				function E(t) {
					return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
						return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), T) : (e.exit("tableDelimiterFiller"), T(n))
					}(t)) : n(t)
				}

				function T(t) {
					return (0, i.On)(t) ? (0, eS.N)(e, g, "whitespace")(t) : g(t)
				}

				function g(a) {
					if (124 === a) return d(a);
					if (null === a || (0, i.HP)(a)) return r && s === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(a)) : n(a);
					return n(a)
				}

				function A(t) {
					return e.enter("tableRow"), _(t)
				}

				function _(n) {
					return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), _) : null === n || (0, i.HP)(n) ? (e.exit("tableRow"), t(n)) : (0, i.On)(n) ? (0, eS.N)(e, _, "whitespace")(n) : (e.enter("data"), S(n))
				}

				function S(t) {
					return null === t || 124 === t || (0, i.Ee)(t) ? (e.exit("data"), _(t)) : (e.consume(t), 92 === t ? O : S)
				}

				function O(t) {
					return 92 === t || 124 === t ? (e.consume(t), S) : S(t)
				}
			}

			function eP(e, t) {
				for (var n, r, a, i = -1, s = !0, o = 0, c = [0, 0, 0, 0], l = [0, 0, 0, 0], u = !1, h = 0, p = new eR; ++i < e.length;) {
					var d = e[i],
						f = d[1];
					"enter" === d[0] ? "tableHead" === f.type ? (u = !1, 0 !== h && (ex(p, t, h, n, r), r = void 0, h = 0), n = {
						type: "table",
						start: Object.assign({}, f.start),
						end: Object.assign({}, f.end)
					}, p.add(i, 0, [
						["enter", n, t]
					])) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (s = !0, a = void 0, c = [0, 0, 0, 0], l = [0, i + 1, 0, 0], u && (u = !1, r = {
						type: "tableBody",
						start: Object.assign({}, f.start),
						end: Object.assign({}, f.end)
					}, p.add(i, 0, [
						["enter", r, t]
					])), o = "tableDelimiterRow" === f.type ? 2 : r ? 3 : 1) : o && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) ? (s = !1, 0 === l[2] && (0 !== c[1] && (l[0] = l[1], a = eM(p, t, c, o, void 0, a), c = [0, 0, 0, 0]), l[2] = i)) : "tableCellDivider" === f.type && (s ? s = !1 : (0 !== c[1] && (l[0] = l[1], a = eM(p, t, c, o, void 0, a)), l = [(c = l)[1], i, 0, 0])) : "tableHead" === f.type ? (u = !0, h = i) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (h = i, 0 !== c[1] ? (l[0] = l[1], a = eM(p, t, c, o, i, a)) : 0 !== l[1] && (a = eM(p, t, l, o, i, a)), o = 0) : o && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) && (l[3] = i)
				}
				for (0 !== h && ex(p, t, h, n, r), p.consume(t.events), i = -1; ++i < t.events.length;) {
					var m = t.events[i];
					"enter" === m[0] && "table" === m[1].type && (m[1]._align = function(e, t) {
						for (var n = !1, r = []; t < e.length;) {
							var a = e[t];
							if (n) {
								if ("enter" === a[0]) "tableContent" === a[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
								else if ("tableContent" === a[1].type) {
									if ("tableDelimiterMarker" === e[t - 1][1].type) {
										var i = r.length - 1;
										r[i] = "left" === r[i] ? "center" : "right"
									}
								} else if ("tableDelimiterRow" === a[1].type) break
							} else "enter" === a[0] && "tableDelimiterRow" === a[1].type && (n = !0);
							t += 1
						}
						return r
					}(t.events, i))
				}
				return e
			}

			function eM(e, t, n, r, a, i) {
				0 !== n[0] && (i.end = Object.assign({}, ew(t.events, n[0])), e.add(n[0], 0, [
					["exit", i, t]
				]));
				var s = ew(t.events, n[1]);
				if (i = {
						type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
						start: Object.assign({}, s),
						end: Object.assign({}, s)
					}, e.add(n[1], 0, [
						["enter", i, t]
					]), 0 !== n[2]) {
					var o = ew(t.events, n[2]),
						c = ew(t.events, n[3]),
						l = {
							type: "tableContent",
							start: Object.assign({}, o),
							end: Object.assign({}, c)
						};
					if (e.add(n[2], 0, [
							["enter", l, t]
						]), 2 !== r) {
						var u = t.events[n[2]],
							h = t.events[n[3]];
						if (u[1].end = Object.assign({}, h[1].end), u[1].type = "chunkText", u[1].contentType = "text", n[3] > n[2] + 1) {
							var p = n[2] + 1,
								d = n[3] - n[2] - 1;
							e.add(p, d, [])
						}
					}
					e.add(n[3] + 1, 0, [
						["exit", l, t]
					])
				}
				return void 0 !== a && (i.end = Object.assign({}, ew(t.events, a)), e.add(a, 0, [
					["exit", i, t]
				]), i = void 0), i
			}

			function ex(e, t, n, r, a) {
				var i = [],
					s = ew(t.events, n);
				a && (a.end = Object.assign({}, s), i.push(["exit", a, t])), r.end = Object.assign({}, s), i.push(["exit", r, t]), e.add(n + 1, 0, i)
			}

			function ew(e, t) {
				var n = e[t],
					r = "enter" === n[0] ? "start" : "end";
				return n[1][r]
			}
			var eB = {
				name: "tasklistCheck",
				tokenize: function(e, t, n) {
					var r = this;
					return function(t) {
						return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a) : n(t)
					};

					function a(t) {
						return (0, i.Ee)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), s) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), s) : n(t)
					}

					function s(t) {
						return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t)
					}

					function o(r) {
						return (0, i.HP)(r) ? t(r) : (0, i.On)(r) ? e.check({
							tokenize: eF
						}, t, n)(r) : n(r)
					}
				}
			};

			function eF(e, t, n) {
				return (0, eS.N)(e, function(e) {
					return null === e ? n(e) : t(e)
				}, "whitespace")
			}
			var eH = {};

			function eU(e) {
				var t, n, r, a, i = e || eH,
					s = this.data(),
					o = s.micromarkExtensions || (s.micromarkExtensions = []),
					T = s.fromMarkdownExtensions || (s.fromMarkdownExtensions = []),
					g = s.toMarkdownExtensions || (s.toMarkdownExtensions = []);
				o.push((t = i, (0, ea.y)([{
					text: ed
				}, {
					document: {
						91: {
							name: "gfmFootnoteDefinition",
							tokenize: eb,
							continuation: {
								tokenize: eC
							},
							exit: ev
						}
					},
					text: {
						91: {
							name: "gfmFootnoteCall",
							tokenize: ek
						},
						93: {
							name: "gfmPotentialFootnoteCall",
							add: "after",
							tokenize: eI,
							resolveTo: eN
						}
					}
				}, (n = (t || {}).singleTilde, r = {
					name: "strikethrough",
					tokenize: function(e, t, r) {
						var a = this.previous,
							i = this.events,
							s = 0;
						return function(o) {
							return 126 === a && "characterEscape" !== i[i.length - 1][1].type ? r(o) : (e.enter("strikethroughSequenceTemporary"), function i(o) {
								var c = (0, G.S)(a);
								if (126 === o) return s > 1 ? r(o) : (e.consume(o), s++, i);
								if (s < 2 && !n) return r(o);
								var l = e.exit("strikethroughSequenceTemporary"),
									u = (0, G.S)(o);
								return l._open = !u || 2 === u && !!c, l._close = !c || 2 === c && !!u, t(o)
							}(o))
						}
					},
					resolveAll: function(e, t) {
						for (var n = -1; ++n < e.length;)
							if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
								for (var r = n; r--;)
									if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
										e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
										var a = {
												type: "strikethrough",
												start: Object.assign({}, e[r][1].start),
												end: Object.assign({}, e[n][1].end)
											},
											i = {
												type: "strikethroughText",
												start: Object.assign({}, e[r][1].end),
												end: Object.assign({}, e[n][1].start)
											},
											s = [
												["enter", a, t],
												["enter", e[r][1], t],
												["exit", e[r][1], t],
												["enter", i, t]
											],
											o = t.parser.constructs.insideSpan.null;
										o && (0, eD.m)(s, s.length, 0, (0, ey.W)(o, e.slice(r + 1, n), t)), (0, eD.m)(s, s.length, 0, [
											["exit", i, t],
											["enter", e[n][1], t],
											["exit", e[n][1], t],
											["exit", a, t]
										]), (0, eD.m)(e, r - 1, n - r + 3, s), n = r + s.length - 2;
										break
									}
							} for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
						return e
					}
				}, null == n && (n = !0), {
					text: {
						126: r
					},
					insideSpan: {
						null: [r]
					},
					attentionMarkers: {
						null: [126]
					}
				}), {
					flow: {
						null: {
							name: "table",
							tokenize: eL,
							resolveAll: eP
						}
					}
				}, {
					text: {
						91: eB
					}
				}]))), T.push([{
					transforms: [E],
					enter: {
						literalAutolink: u,
						literalAutolinkEmail: h,
						literalAutolinkHttp: h,
						literalAutolinkWww: h
					},
					exit: {
						literalAutolink: m,
						literalAutolinkEmail: f,
						literalAutolinkHttp: p,
						literalAutolinkWww: d
					}
				}, {
					enter: {
						gfmFootnoteCallString: S,
						gfmFootnoteCall: O,
						gfmFootnoteDefinitionLabelString: I,
						gfmFootnoteDefinition: N
					},
					exit: {
						gfmFootnoteCallString: k,
						gfmFootnoteCall: b,
						gfmFootnoteDefinitionLabelString: C,
						gfmFootnoteDefinition: v
					}
				}, {
					canContainEols: ["delete"],
					enter: {
						strikethrough: w
					},
					exit: {
						strikethrough: B
					}
				}, {
					enter: {
						table: q,
						tableData: X,
						tableHeader: X,
						tableRow: Q
					},
					exit: {
						codeText: J,
						table: V,
						tableData: K,
						tableHeader: K,
						tableRow: K
					}
				}, {
					exit: {
						taskListCheckValueChecked: et,
						taskListCheckValueUnchecked: et,
						paragraph: en
					}
				}]), g.push({
					extensions: [{
						unsafe: [{
							character: "@",
							before: "[+\\-.\\w]",
							after: "[\\-.\\w]",
							inConstruct: c,
							notInConstruct: l
						}, {
							character: ".",
							before: "[Ww]",
							after: "[\\-.\\w]",
							inConstruct: c,
							notInConstruct: l
						}, {
							character: ":",
							before: "[ps]",
							after: "\\/",
							inConstruct: c,
							notInConstruct: l
						}]
					}, (a = !1, i && i.firstLineBlank && (a = !0), {
						handlers: {
							footnoteDefinition: function(e, t, n, r) {
								var i = n.createTracker(r),
									s = i.move("[^"),
									o = n.enter("footnoteDefinition"),
									c = n.enter("label");
								return s += i.move(n.safe(n.associationId(e), {
									before: s,
									after: "]"
								})), c(), s += i.move("]:"), e.children && e.children.length > 0 && (i.shift(4), s += i.move((a ? "\n" : " ") + n.indentLines(n.containerFlow(e, i.current()), a ? R : y))), o(), s
							},
							footnoteReference: D
						},
						unsafe: [{
							character: "[",
							inConstruct: ["label", "phrasing", "reference"]
						}]
					}), {
						unsafe: [{
							character: "~",
							inConstruct: "phrasing",
							notInConstruct: x
						}],
						handlers: {
							delete: F
						}
					}, function(e) {
						var t = e || {},
							n = t.tableCellPadding,
							r = t.tablePipeAlign,
							a = t.stringLength,
							i = n ? " " : "|";
						return {
							unsafe: [{
								character: "\r",
								inConstruct: "tableCell"
							}, {
								character: "\n",
								inConstruct: "tableCell"
							}, {
								atBreak: !0,
								character: "|",
								after: "[	 :-]"
							}, {
								character: "|",
								inConstruct: "tableCell"
							}, {
								atBreak: !0,
								character: ":",
								after: "-"
							}, {
								atBreak: !0,
								character: "-",
								after: "[:|-]"
							}],
							handlers: {
								inlineCode: function(e, t, n) {
									var r = j(e, t, n);
									return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
								},
								table: function(e, t, n, r) {
									return o(function(e, t, n) {
										for (var r = e.children, a = -1, i = [], s = t.enter("table"); ++a < r.length;) i[a] = c(r[a], t, n);
										return s(), i
									}(e, n, r), e.align)
								},
								tableCell: s,
								tableRow: function(e, t, n, r) {
									var a = o([c(e, n, r)]);
									return a.slice(0, a.indexOf("\n"))
								}
							}
						};

						function s(e, t, n, r) {
							var a = n.enter("tableCell"),
								s = n.enter("phrasing"),
								o = n.containerPhrasing(e, W(W({}, r), {}, {
									before: i,
									after: i
								}));
							return s(), a(), o
						}

						function o(e, t) {
							return function(e, t) {
								for (var n = t || {}, r = (n.align || []).concat(), a = n.stringLength || H, i = [], s = [], o = [], c = [], l = 0, u = -1; ++u < e.length;) {
									var h = [],
										p = [],
										d = -1;
									for (e[u].length > l && (l = e[u].length); ++d < e[u].length;) {
										var f, m = null == (f = e[u][d]) ? "" : String(f);
										if (!1 !== n.alignDelimiters) {
											var E = a(m);
											p[d] = E, (void 0 === c[d] || E > c[d]) && (c[d] = E)
										}
										h.push(m)
									}
									s[u] = h, o[u] = p
								}
								var T = -1;
								if ("object" == typeof r && "length" in r)
									for (; ++T < l;) i[T] = U(r[T]);
								else
									for (var g = U(r); ++T < l;) i[T] = g;
								T = -1;
								for (var A = [], _ = []; ++T < l;) {
									var S = i[T],
										O = "",
										I = "";
									99 === S ? (O = ":", I = ":") : 108 === S ? O = ":" : 114 === S && (I = ":");
									var N = !1 === n.alignDelimiters ? 1 : Math.max(1, c[T] - O.length - I.length),
										k = O + "-".repeat(N) + I;
									!1 !== n.alignDelimiters && ((N = O.length + N + I.length) > c[T] && (c[T] = N), _[T] = N), A[T] = k
								}
								s.splice(1, 0, A), o.splice(1, 0, _), u = -1;
								for (var b = []; ++u < s.length;) {
									var C = s[u],
										v = o[u];
									T = -1;
									for (var D = []; ++T < l;) {
										var y = C[T] || "",
											R = "",
											L = "";
										if (!1 !== n.alignDelimiters) {
											var P = c[T] - (v[T] || 0),
												M = i[T];
											114 === M ? R = " ".repeat(P) : 99 === M ? P % 2 ? (R = " ".repeat(P / 2 + .5), L = " ".repeat(P / 2 - .5)) : L = R = " ".repeat(P / 2) : L = " ".repeat(P)
										}!1 === n.delimiterStart || T || D.push("|"), !1 !== n.padding && (!1 !== n.alignDelimiters || "" !== y) && (!1 !== n.delimiterStart || T) && D.push(" "), !1 !== n.alignDelimiters && D.push(R), D.push(y), !1 !== n.alignDelimiters && D.push(L), !1 !== n.padding && D.push(" "), (!1 !== n.delimiterEnd || T !== l - 1) && D.push("|")
									}
									b.push(!1 === n.delimiterEnd ? D.join("").replace(/ +$/, "") : D.join(""))
								}
								return b.join("\n")
							}(e, {
								align: t,
								alignDelimiters: r,
								padding: n,
								stringLength: a
							})
						}

						function c(e, t, n) {
							for (var r = e.children, a = -1, i = [], o = t.enter("tableRow"); ++a < r.length;) i[a] = s(r[a], e, t, n);
							return o(), i
						}
					}(i), {
						unsafe: [{
							atBreak: !0,
							character: "-",
							after: "[:|-]"
						}],
						handlers: {
							listItem: er
						}
					}]
				})
			}
		},
		9554: (e, t, n) => {
			function r(e, t, n, r) {
				var a, i = e.length,
					s = 0;
				if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)(a = Array.from(r)).unshift(t, n), e.splice(...a);
				else
					for (n && e.splice(t, n); s < r.length;)(a = r.slice(s, s + 1e4)).unshift(t, 0), e.splice(...a), s += 1e4, t += 1e4
			}

			function a(e, t) {
				return e.length > 0 ? (r(e, e.length, 0, t), e) : t
			}
			n.d(t, {
				V: () => a,
				m: () => r
			})
		},
		9715: (e, t) => {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.camelCase = void 0;
			var n = /^--[a-zA-Z0-9_-]+$/,
				r = /-([a-z])/g,
				a = /^[^-]+$/,
				i = /^-(webkit|moz|ms|o|khtml)-/,
				s = /^-(ms)-/,
				o = function(e, t) {
					return t.toUpperCase()
				},
				c = function(e, t) {
					return "".concat(t, "-")
				};
			t.camelCase = function(e, t) {
				var l;
				return (void 0 === t && (t = {}), !(l = e) || a.test(l) || n.test(l)) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(s, c) : e.replace(i, c)).replace(r, o))
			}
		}
	}
]);