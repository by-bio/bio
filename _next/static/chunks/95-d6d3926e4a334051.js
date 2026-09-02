"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[95], {
		21: (t, e, r) => {
			var n = r(817),
				i = r(3561),
				o = ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "sizesInput", "onLoad", "onError"];

			function a(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function s(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? a(Object(r), !0).forEach(function(e) {
						i(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "Image", {
				enumerable: !0,
				get: function() {
					return S
				}
			});
			var l = r(4730),
				u = r(9307),
				c = r(5155),
				h = u._(r(2115)),
				p = l._(r(7650)),
				d = l._(r(3947)),
				f = r(8154),
				v = r(4423),
				m = r(1269);
			r(6891);
			var y = r(808),
				g = l._(r(9434)),
				b = r(9033),
				O = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [32, 48, 64, 96, 128, 256, 384],
					qualities: [75],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1,
					unoptimized: !1
				};

			function P(t, e, r, n, i, o, a) {
				var l = null == t ? void 0 : t.src;
				t && t["data-loaded-src"] !== l && (t["data-loaded-src"] = l, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
					if (t.parentElement && t.isConnected) {
						if ("empty" !== e && i(!0), null != r && r.current) {
							var o = new Event("load");
							Object.defineProperty(o, "target", {
								writable: !1,
								value: t
							});
							var a = !1,
								l = !1;
							r.current(s(s({}, o), {}, {
								nativeEvent: o,
								currentTarget: t,
								target: t,
								isDefaultPrevented: () => a,
								isPropagationStopped: () => l,
								persist: () => {},
								preventDefault: () => {
									a = !0, o.preventDefault()
								},
								stopPropagation: () => {
									l = !0, o.stopPropagation()
								}
							}))
						}
						null != n && n.current && n.current(t)
					}
				}))
			}

			function w(t) {
				return h.use ? {
					fetchPriority: t
				} : {
					fetchpriority: t
				}
			}
			var j = (0, h.forwardRef)((t, e) => {
				var {
					src: r,
					srcSet: i,
					sizes: a,
					height: l,
					width: u,
					decoding: p,
					className: d,
					style: f,
					fetchPriority: v,
					placeholder: m,
					loading: y,
					unoptimized: g,
					fill: O,
					onLoadRef: j,
					onLoadingCompleteRef: x,
					setBlurComplete: S,
					setShowAltText: E,
					sizesInput: D,
					onLoad: T,
					onError: A
				} = t, M = n(t, o), C = (0, h.useCallback)(t => {
					t && (A && (t.src = t.src), t.complete && P(t, m, j, x, S, g, D))
				}, [r, m, j, x, S, A, g, D]), k = (0, b.useMergedRef)(e, C);
				return (0, c.jsx)("img", s(s(s({}, M), w(v)), {}, {
					loading: y,
					width: u,
					height: l,
					decoding: p,
					"data-nimg": O ? "fill" : "1",
					className: d,
					style: f,
					sizes: a,
					srcSet: i,
					src: r,
					ref: k,
					onLoad: t => {
						P(t.currentTarget, m, j, x, S, g, D)
					},
					onError: t => {
						E(!0), "empty" !== m && S(!0), A && A(t)
					}
				}))
			});

			function x(t) {
				var {
					isAppRouter: e,
					imgAttributes: r
				} = t, n = s({
					as: "image",
					imageSrcSet: r.srcSet,
					imageSizes: r.sizes,
					crossOrigin: r.crossOrigin,
					referrerPolicy: r.referrerPolicy
				}, w(r.fetchPriority));
				return e && p.default.preload ? (p.default.preload(r.src, n), null) : (0, c.jsx)(d.default, {
					children: (0, c.jsx)("link", s({
						rel: "preload",
						href: r.srcSet ? void 0 : r.src
					}, n), "__nimg-" + r.src + r.srcSet + r.sizes)
				})
			}
			var S = (0, h.forwardRef)((t, e) => {
				var r = (0, h.useContext)(y.RouterContext),
					n = (0, h.useContext)(m.ImageConfigContext),
					i = (0, h.useMemo)(() => {
						var t, e = O || n || v.imageConfigDefault,
							r = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
							i = e.deviceSizes.sort((t, e) => t - e),
							o = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
						return s(s({}, e), {}, {
							allSizes: r,
							deviceSizes: i,
							qualities: o,
							localPatterns: e.localPatterns
						})
					}, [n]),
					{
						onLoad: o,
						onLoadingComplete: a
					} = t,
					l = (0, h.useRef)(o);
				(0, h.useEffect)(() => {
					l.current = o
				}, [o]);
				var u = (0, h.useRef)(a);
				(0, h.useEffect)(() => {
					u.current = a
				}, [a]);
				var [p, d] = (0, h.useState)(!1), [b, P] = (0, h.useState)(!1), {
					props: w,
					meta: S
				} = (0, f.getImgProps)(t, {
					defaultLoader: g.default,
					imgConf: i,
					blurComplete: p,
					showAltText: b
				});
				return (0, c.jsxs)(c.Fragment, {
					children: [(0, c.jsx)(j, s(s({}, w), {}, {
						unoptimized: S.unoptimized,
						placeholder: S.placeholder,
						fill: S.fill,
						onLoadRef: l,
						onLoadingCompleteRef: u,
						setBlurComplete: d,
						setShowAltText: P,
						sizesInput: t.sizes,
						ref: e
					})), S.preload ? (0, c.jsx)(x, {
						isAppRouter: !r,
						imgAttributes: w
					}) : null]
				})
			});
			("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
				value: !0
			}), Object.assign(e.default, e), t.exports = e.default)
		},
		52: (t, e, r) => {
			r.d(e, {
				P: () => o
			});
			var n = r(2115),
				i = t => t;

			function o(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
					r = n.useSyncExternalStore(t.subscribe, n.useCallback(() => e(t.getState()), [t, e]), n.useCallback(() => e(t.getInitialState()), [t, e]));
				return n.useDebugValue(r), r
			}
		},
		91: (t, e, r) => {
			r.d(e, {
				N: () => P
			});
			var n = r(5155),
				i = r(2115),
				o = r(3854),
				a = r(2954),
				s = r(8707),
				l = r(1106),
				u = r(3088),
				c = r(5484),
				h = r(6633);

			function p(t, e) {
				if ("function" == typeof t) return t(e);
				null != t && (t.current = e)
			}
			class d extends i.Component {
				getSnapshotBeforeUpdate(t) {
					var e = this.props.childRef.current;
					if ((0, c.s)(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
						var r = e.offsetParent,
							n = (0, c.s)(r) && r.offsetWidth || 0,
							i = (0, c.s)(r) && r.offsetHeight || 0,
							o = getComputedStyle(e),
							a = this.props.sizeRef.current;
						a.height = parseFloat(o.height), a.width = parseFloat(o.width), a.top = e.offsetTop, a.left = e.offsetLeft, a.right = n - a.width - a.left, a.bottom = i - a.height - a.top, a.direction = o.direction
					}
					return null
				}
				componentDidUpdate() {}
				render() {
					return this.props.children
				}
			}

			function f(t) {
				var e, r, {
						children: o,
						isPresent: a,
						anchorX: s,
						anchorY: l,
						root: u,
						pop: c
					} = t,
					f = (0, i.useId)(),
					v = (0, i.useRef)(null),
					m = (0, i.useRef)({
						width: 0,
						height: 0,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						direction: "ltr"
					}),
					{
						nonce: y
					} = (0, i.useContext)(h.Q),
					g = function() {
						for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
						return i.useCallback(function() {
							for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
							return t => {
								var r = !1,
									n = e.map(e => {
										var n = p(e, t);
										return r || "function" != typeof n || (r = !0), n
									});
								if (r) return () => {
									for (var t = 0; t < n.length; t++) {
										var r = n[t];
										"function" == typeof r ? r() : p(e[t], null)
									}
								}
							}
						}(...e), e)
					}(v, null != (e = null == (r = o.props) ? void 0 : r.ref) ? e : null == o ? void 0 : o.ref);
				return (0, i.useInsertionEffect)(() => {
					var {
						width: t,
						height: e,
						top: r,
						left: n,
						right: i,
						bottom: o,
						direction: h
					} = m.current;
					if (!a && !1 !== c && v.current && t && e) {
						var p = "rtl" === h;
						v.current.dataset.motionPopId = f;
						var d = document.createElement("style");
						y && (d.nonce = y);
						var g = null != u ? u : document.head;
						return g.appendChild(d), d.sheet && d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(f, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            ").concat("left" === s ? p ? "right: ".concat(i) : "left: ".concat(n) : p ? "left: ".concat(n) : "right: ".concat(i), "px !important;\n            ").concat("bottom" === l ? "bottom: ".concat(o) : "top: ".concat(r), "px !important;\n          }\n        ")), () => {
							var t;
							null == (t = v.current) || t.removeAttribute("data-motion-pop-id"), g.contains(d) && g.removeChild(d)
						}
					}
				}, [a]), (0, n.jsx)(d, {
					isPresent: a,
					childRef: v,
					sizeRef: m,
					pop: c,
					children: !1 === c ? o : i.cloneElement(o, {
						ref: g
					})
				})
			}

			function v(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}
			var m = t => {
				var {
					children: e,
					initial: r,
					isPresent: o,
					onExitComplete: c,
					custom: h,
					presenceAffectsLayout: p,
					mode: d,
					anchorX: m,
					anchorY: g,
					root: b
				} = t, O = (0, a.M)(y), P = (0, i.useId)(), w = (0, i.useRef)(o), j = (0, i.useRef)(c);
				(0, s.E)(() => {
					w.current = o, j.current = c
				});
				var x = !0,
					S = (0, i.useMemo)(() => (x = !1, {
						id: P,
						initial: r,
						isPresent: o,
						custom: h,
						onExitComplete: t => {
							for (var e of (O.set(t, !0), O.values()))
								if (!e) return;
							c && c()
						},
						register: t => (O.set(t, !1), () => {
							var e;
							O.delete(t), w.current || O.size || null == (e = j.current) || e.call(j)
						})
					}), [o, O, c]);
				return p && x && (S = function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {};
						e % 2 ? v(Object(r), !0).forEach(function(e) {
							(0, l.A)(t, e, r[e])
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
						})
					}
					return t
				}({}, S)), (0, i.useMemo)(() => {
					O.forEach((t, e) => O.set(e, !1))
				}, [o]), i.useEffect(() => {
					o || O.size || !c || c()
				}, [o]), e = (0, n.jsx)(f, {
					pop: "popLayout" === d,
					isPresent: o,
					anchorX: m,
					anchorY: g,
					root: b,
					children: e
				}), (0, n.jsx)(u.t.Provider, {
					value: S,
					children: e
				})
			};

			function y() {
				return new Map
			}
			var g = r(2551),
				b = t => t.key || "";

			function O(t) {
				var e = [];
				return i.Children.forEach(t, t => {
					(0, i.isValidElement)(t) && e.push(t)
				}), e
			}
			var P = t => {
				var {
					children: e,
					custom: r,
					initial: l = !0,
					onExitComplete: u,
					presenceAffectsLayout: c = !0,
					mode: h = "sync",
					propagate: p = !1,
					anchorX: d = "left",
					anchorY: f = "top",
					root: v
				} = t, [y, P] = (0, g.xQ)(p), w = (0, i.useMemo)(() => O(e), [e]), j = p && !y ? [] : w.map(b), x = (0, i.useRef)(!0), S = (0, i.useRef)(w), E = (0, a.M)(() => new Map), D = (0, i.useRef)(new Set), {
					0: T,
					1: A
				} = (0, i.useState)(w), {
					0: M,
					1: C
				} = (0, i.useState)(w);
				(0, s.E)(() => {
					x.current = !1, S.current = w;
					for (var t = 0; t < M.length; t++) {
						var e = b(M[t]);
						j.includes(e) ? (E.delete(e), D.current.delete(e)) : !0 !== E.get(e) && E.set(e, !1)
					}
				}, [M, j.length, j.join("-")]);
				var k = [];
				if (w !== T) {
					for (var V = [...w], R = 0; R < M.length; R++) {
						var L = M[R],
							B = b(L);
						j.includes(B) || (V.splice(R, 0, L), k.push(L))
					}
					return "wait" === h && k.length && (V = k), C(O(V)), A(w), null
				}
				var {
					forceRender: I
				} = (0, i.useContext)(o.L);
				return (0, n.jsx)(n.Fragment, {
					children: M.map(t => {
						var e = b(t),
							i = (!p || !!y) && (w === M || j.includes(e));
						return (0, n.jsx)(m, {
							isPresent: i,
							initial: (!x.current || !!l) && void 0,
							custom: r,
							presenceAffectsLayout: c,
							mode: h,
							root: v,
							onExitComplete: i ? void 0 : () => {
								if (!D.current.has(e) && E.has(e)) {
									D.current.add(e), E.set(e, !0);
									var t = !0;
									E.forEach(e => {
										e || (t = !1)
									}), t && (null == I || I(), C(S.current), p && (null == P || P()), u && u())
								}
							},
							anchorX: d,
							anchorY: f,
							children: t
						}, e)
					})
				})
			}
		},
		575: (t, e, r) => {
			r.d(e, {
				PY1: () => a5
			});
			var n, i, o, a, s = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
				l = new Set([...s, "pathRotation"]),
				u = r(1106),
				c = (t, e, r) => r > e ? e : r < t ? t : r;

			function h(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function p(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? h(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var d = {
					test: t => "number" == typeof t,
					parse: parseFloat,
					transform: t => t
				},
				f = p(p({}, d), {}, {
					transform: t => c(0, 1, t)
				}),
				v = p(p({}, d), {}, {
					default: 1
				}),
				m = t => Math.round(1e5 * t) / 1e5,
				y = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
				g = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
				b = (t, e) => r => !!("string" == typeof r && g.test(r) && r.startsWith(t) || e && null != r && Object.prototype.hasOwnProperty.call(r, e)),
				O = (t, e, r) => n => {
					if ("string" != typeof n) return n;
					var [i, o, a, s] = n.match(y);
					return {
						[t]: parseFloat(i),
						[e]: parseFloat(o),
						[r]: parseFloat(a),
						alpha: void 0 !== s ? parseFloat(s) : 1
					}
				};

			function P(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function w(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? P(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var j = w(w({}, d), {}, {
					transform: t => Math.round(c(0, 255, t))
				}),
				x = {
					test: b("rgb", "red"),
					parse: O("red", "green", "blue"),
					transform: t => {
						var {
							red: e,
							green: r,
							blue: n,
							alpha: i = 1
						} = t;
						return "rgba(" + j.transform(e) + ", " + j.transform(r) + ", " + j.transform(n) + ", " + m(f.transform(i)) + ")"
					}
				},
				S = {
					test: b("#"),
					parse: function(t) {
						var e = "",
							r = "",
							n = "",
							i = "";
						return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
							red: parseInt(e, 16),
							green: parseInt(r, 16),
							blue: parseInt(n, 16),
							alpha: i ? parseInt(i, 16) / 255 : 1
						}
					},
					transform: x.transform
				};

			function E(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function D(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? E(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var T = t => ({
					test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
					parse: parseFloat,
					transform: e => "".concat(e).concat(t)
				}),
				A = T("deg"),
				M = T("%"),
				C = T("px"),
				k = T("vh"),
				V = T("vw"),
				R = D(D({}, M), {}, {
					parse: t => M.parse(t) / 100,
					transform: t => M.transform(100 * t)
				}),
				L = {
					test: b("hsl", "hue"),
					parse: O("hue", "saturation", "lightness"),
					transform: t => {
						var {
							hue: e,
							saturation: r,
							lightness: n,
							alpha: i = 1
						} = t;
						return "hsla(" + Math.round(e) + ", " + M.transform(m(r)) + ", " + M.transform(m(n)) + ", " + m(f.transform(i)) + ")"
					}
				},
				B = {
					test: t => x.test(t) || S.test(t) || L.test(t),
					parse: t => x.test(t) ? x.parse(t) : L.test(t) ? L.parse(t) : S.parse(t),
					transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? x.transform(t) : L.transform(t),
					getAnimatableNone: t => {
						var e = B.parse(t);
						return e.alpha = 0, B.transform(e)
					}
				},
				I = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
				F = "number",
				_ = "color",
				U = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

			function z(t) {
				var e = t.toString(),
					r = [],
					n = {
						color: [],
						number: [],
						var: []
					},
					i = [],
					o = 0,
					a = e.replace(U, t => (B.test(t) ? (n.color.push(o), i.push(_), r.push(B.parse(t))) : t.startsWith("var(") ? (n.var.push(o), i.push("var"), r.push(t)) : (n.number.push(o), i.push(F), r.push(parseFloat(t))), ++o, "${}")).split("${}");
				return {
					values: r,
					split: a,
					indexes: n,
					types: i
				}
			}

			function N(t) {
				var {
					split: e,
					types: r
				} = t, n = e.length;
				return t => {
					for (var i = "", o = 0; o < n; o++)
						if (i += e[o], void 0 !== t[o]) {
							var a = r[o];
							a === F ? i += m(t[o]) : a === _ ? i += B.transform(t[o]) : i += t[o]
						} return i
				}
			}
			var W = {
				test: function(t) {
					var e, r;
					return isNaN(t) && "string" == typeof t && ((null == (e = t.match(y)) ? void 0 : e.length) || 0) + ((null == (r = t.match(I)) ? void 0 : r.length) || 0) > 0
				},
				parse: function(t) {
					return z(t).values
				},
				createTransformer: function(t) {
					return N(z(t))
				},
				getAnimatableNone: function(t) {
					var e = z(t);
					return N(e)(e.values.map((t, r) => ((t, e) => "number" == typeof t ? null != e && e.trim().endsWith("/") ? t : 0 : "number" == typeof t ? 0 : B.test(t) ? B.getAnimatableNone(t) : t)(t, e.split[r])))
				}
			};

			function X(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function Y(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? X(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var H = new Set(["brightness", "contrast", "saturate", "opacity"]);

			function q(t) {
				var [e, r] = t.slice(0, -1).split("(");
				if ("drop-shadow" === e) return t;
				var [n] = r.match(y) || [];
				if (!n) return t;
				var i = r.replace(n, ""),
					o = +!!H.has(e);
				return n !== r && (o *= 100), e + "(" + o + i + ")"
			}
			var G = /\b([a-z-]*)\(.*?\)/gu,
				K = Y(Y({}, W), {}, {
					getAnimatableNone: t => {
						var e = t.match(G);
						return e ? e.map(q).join(" ") : t
					}
				});

			function $(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function Z(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? $(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var Q = Z(Z({}, W), {}, {
				getAnimatableNone: t => {
					var e = W.parse(t);
					return W.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? Z(Z({}, t), {}, {
						alpha: 1
					}) : t))
				}
			});

			function J(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function tt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? J(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var te = tt(tt({}, d), {}, {
				transform: Math.round
			});

			function tr(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function tn(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? tr(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var ti = tn(tn({
				borderWidth: C,
				borderTopWidth: C,
				borderRightWidth: C,
				borderBottomWidth: C,
				borderLeftWidth: C,
				borderRadius: C,
				borderTopLeftRadius: C,
				borderTopRightRadius: C,
				borderBottomRightRadius: C,
				borderBottomLeftRadius: C,
				width: C,
				maxWidth: C,
				height: C,
				maxHeight: C,
				top: C,
				right: C,
				bottom: C,
				left: C,
				inset: C,
				insetBlock: C,
				insetBlockStart: C,
				insetBlockEnd: C,
				insetInline: C,
				insetInlineStart: C,
				insetInlineEnd: C,
				padding: C,
				paddingTop: C,
				paddingRight: C,
				paddingBottom: C,
				paddingLeft: C,
				paddingBlock: C,
				paddingBlockStart: C,
				paddingBlockEnd: C,
				paddingInline: C,
				paddingInlineStart: C,
				paddingInlineEnd: C,
				margin: C,
				marginTop: C,
				marginRight: C,
				marginBottom: C,
				marginLeft: C,
				marginBlock: C,
				marginBlockStart: C,
				marginBlockEnd: C,
				marginInline: C,
				marginInlineStart: C,
				marginInlineEnd: C,
				fontSize: C,
				backgroundPositionX: C,
				backgroundPositionY: C
			}, {
				rotate: A,
				pathRotation: A,
				rotateX: A,
				rotateY: A,
				rotateZ: A,
				scale: v,
				scaleX: v,
				scaleY: v,
				scaleZ: v,
				skew: A,
				skewX: A,
				skewY: A,
				distance: C,
				translateX: C,
				translateY: C,
				translateZ: C,
				x: C,
				y: C,
				z: C,
				perspective: C,
				transformPerspective: C,
				opacity: f,
				originX: R,
				originY: R,
				originZ: C
			}), {}, {
				zIndex: te,
				fillOpacity: f,
				strokeOpacity: f,
				numOctaves: te
			});

			function to(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ta(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? to(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : to(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var ts = ta(ta({}, ti), {}, {
					color: B,
					backgroundColor: B,
					outlineColor: B,
					fill: B,
					stroke: B,
					borderColor: B,
					borderTopColor: B,
					borderRightColor: B,
					borderBottomColor: B,
					borderLeftColor: B,
					filter: K,
					WebkitFilter: K,
					mask: Q,
					WebkitMask: Q
				}),
				tl = t => ts[t],
				tu = () => ({
					translate: 0,
					scale: 1,
					origin: 0,
					originPoint: 0
				}),
				tc = () => ({
					x: tu(),
					y: tu()
				}),
				th = () => ({
					min: 0,
					max: 0
				}),
				tp = () => ({
					x: th(),
					y: th()
				}),
				td = t => !!(t && t.getVelocity),
				tf = new Set(["width", "height", "top", "left", "right", "bottom", ...s]),
				tv = t => e => e.test(t),
				tm = [d, C, M, A, V, k, {
					test: t => "auto" === t,
					parse: t => t
				}],
				ty = t => tm.find(tv(t));

			function tg(t, e) {
				return e ? "".concat(t, ". For more information and steps for solving, visit https://motion.dev/troubleshooting/").concat(e) : t
			}
			var tb = r(2402),
				tO = () => {},
				tP = () => {};
			void 0 !== tb && (null == tb.env ? void 0 : "production") !== "production" && (tO = (t, e, r) => {
				!t && "u" > typeof console && console.warn(tg(e, r))
			}, tP = (t, e, r) => {
				if (!t) throw Error(tg(e, r))
			});
			var tw = t => e => "string" == typeof e && e.startsWith(t),
				tj = tw("--"),
				tx = tw("var(--"),
				tS = t => !!tx(t) && tE.test(t.split("/*")[0].trim()),
				tE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

			function tD(t) {
				return "string" == typeof t && t.split("/*")[0].includes("var(--")
			}
			var tT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
				tA = t => 180 * t / Math.PI,
				tM = t => tk(tA(Math.atan2(t[1], t[0]))),
				tC = {
					x: 4,
					y: 5,
					translateX: 4,
					translateY: 5,
					scaleX: 0,
					scaleY: 3,
					scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
					rotate: tM,
					rotateZ: tM,
					skewX: t => tA(Math.atan(t[1])),
					skewY: t => tA(Math.atan(t[2])),
					skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
				},
				tk = t => ((t %= 360) < 0 && (t += 360), t),
				tV = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
				tR = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
				tL = {
					x: 12,
					y: 13,
					z: 14,
					translateX: 12,
					translateY: 13,
					translateZ: 14,
					scaleX: tV,
					scaleY: tR,
					scale: t => (tV(t) + tR(t)) / 2,
					rotateX: t => tk(tA(Math.atan2(t[6], t[5]))),
					rotateY: t => tk(tA(Math.atan2(-t[2], t[0]))),
					rotateZ: tM,
					rotate: tM,
					skewX: t => tA(Math.atan(t[4])),
					skewY: t => tA(Math.atan(t[1])),
					skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
				};

			function tB(t) {
				return +!!t.includes("scale")
			}

			function tI(t, e) {
				if (!t || "none" === t) return tB(e);
				var r, n, i = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
				if (i) r = tL, n = i;
				else {
					var o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
					r = tC, n = o
				}
				if (!n) return tB(e);
				var a = r[e],
					s = n[1].split(",").map(tF);
				return "function" == typeof a ? a(s) : s[a]
			}

			function tF(t) {
				return parseFloat(t.trim())
			}
			var t_ = t => t === d || t === C,
				tU = new Set(["x", "y", "z"]),
				tz = s.filter(t => !tU.has(t)),
				tN = {
					width: (t, e) => {
						var {
							x: r
						} = t, {
							paddingLeft: n = "0",
							paddingRight: i = "0",
							boxSizing: o
						} = e, a = r.max - r.min;
						return "border-box" === o ? a : a - parseFloat(n) - parseFloat(i)
					},
					height: (t, e) => {
						var {
							y: r
						} = t, {
							paddingTop: n = "0",
							paddingBottom: i = "0",
							boxSizing: o
						} = e, a = r.max - r.min;
						return "border-box" === o ? a : a - parseFloat(n) - parseFloat(i)
					},
					top: (t, e) => {
						var {
							top: r
						} = e;
						return parseFloat(r)
					},
					left: (t, e) => {
						var {
							left: r
						} = e;
						return parseFloat(r)
					},
					bottom: (t, e) => {
						var {
							y: r
						} = t, {
							top: n
						} = e;
						return parseFloat(n) + (r.max - r.min)
					},
					right: (t, e) => {
						var {
							x: r
						} = t, {
							left: n
						} = e;
						return parseFloat(n) + (r.max - r.min)
					},
					x: (t, e) => {
						var {
							transform: r
						} = e;
						return tI(r, "x")
					},
					y: (t, e) => {
						var {
							transform: r
						} = e;
						return tI(r, "y")
					}
				};
			tN.translateX = tN.x, tN.translateY = tN.y;
			var tW = t => t,
				tX = {},
				tY = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

			function tH(t, e) {
				var r = !1,
					n = !0,
					i = {
						delta: 0,
						timestamp: 0,
						isProcessing: !1
					},
					o = () => r = !0,
					a = tY.reduce((t, e) => (t[e] = function(t) {
						var e = new Set,
							r = new Set,
							n = !1,
							i = !1,
							o = new WeakSet,
							a = {
								delta: 0,
								timestamp: 0,
								isProcessing: !1
							};

						function s(e) {
							o.has(e) && (l.schedule(e), t()), e(a)
						}
						var l = {
							schedule: function(t) {
								var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
									a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
									s = a && n ? e : r;
								return i && o.add(t), s.add(t), t
							},
							cancel: t => {
								r.delete(t), o.delete(t)
							},
							process: t => {
								if (a = t, n) {
									i = !0;
									return
								}
								n = !0;
								var o = e;
								e = r, r = o, e.forEach(s), e.clear(), n = !1, i && (i = !1, l.process(t))
							}
						};
						return l
					}(o), t), {}),
					{
						setup: s,
						read: l,
						resolveKeyframes: u,
						preUpdate: c,
						update: h,
						preRender: p,
						render: d,
						postRender: f
					} = a,
					v = () => {
						var o = tX.useManualTiming,
							a = o ? i.timestamp : performance.now();
						r = !1, o || (i.delta = n ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, 40), 1)), i.timestamp = a, i.isProcessing = !0, s.process(i), l.process(i), u.process(i), c.process(i), h.process(i), p.process(i), d.process(i), f.process(i), i.isProcessing = !1, r && e && (n = !1, t(v))
					};
				return {
					schedule: tY.reduce((e, o) => {
						var s = a[o];
						return e[o] = function(e) {
							var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							return !r && (r = !0, n = !0, i.isProcessing || t(v)), s.schedule(e, o, a)
						}, e
					}, {}),
					cancel: t => {
						for (var e = 0; e < tY.length; e++) a[tY[e]].cancel(t)
					},
					state: i,
					steps: a
				}
			}
			var {
				schedule: tq,
				cancel: tG,
				state: tK,
				steps: t$
			} = tH("u" > typeof requestAnimationFrame ? requestAnimationFrame : tW, !0), tZ = new Set, tQ = !1, tJ = !1, t0 = !1;

			function t1() {
				if (tJ) {
					var t = Array.from(tZ).filter(t => t.needsMeasurement),
						e = new Set(t.map(t => t.element)),
						r = new Map;
					e.forEach(t => {
						var e, n = (e = [], tz.forEach(r => {
							var n = t.getValue(r);
							void 0 !== n && (e.push([r, n.get()]), n.set(+!!r.startsWith("scale")))
						}), e);
						n.length && (r.set(t, n), t.render())
					}), t.forEach(t => t.measureInitialState()), e.forEach(t => {
						t.render();
						var e = r.get(t);
						e && e.forEach(e => {
							var r, [n, i] = e;
							null == (r = t.getValue(n)) || r.set(i)
						})
					}), t.forEach(t => t.measureEndState()), t.forEach(t => {
						void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
					})
				}
				tJ = !1, tQ = !1, tZ.forEach(t => t.complete(t0)), tZ.clear()
			}

			function t2() {
				tZ.forEach(t => {
					t.readKeyframes(), t.needsMeasurement && (tJ = !0)
				})
			}
			class t3 {
				constructor(t, e, r, n, i) {
					var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = n, this.element = i, this.isAsync = o
				}
				scheduleResolve() {
					this.state = "scheduled", this.isAsync ? (tZ.add(this), tQ || (tQ = !0, tq.read(t2), tq.resolveKeyframes(t1))) : (this.readKeyframes(), this.complete())
				}
				readKeyframes() {
					var {
						unresolvedKeyframes: t,
						name: e,
						element: r,
						motionValue: n
					} = this;
					if (null === t[0]) {
						var i = null == n ? void 0 : n.get(),
							o = t[t.length - 1];
						if (void 0 !== i) t[0] = i;
						else if (r && e) {
							var a = r.readValue(e, o);
							null != a && (t[0] = a)
						}
						void 0 === t[0] && (t[0] = o), n && void 0 === i && n.set(t[0])
					}
					for (var s, l = 1; l < t.length; l++) null != t[l] || (t[l] = t[l - 1])
				}
				setFinalKeyframe() {}
				measureInitialState() {}
				renderEndStyles() {}
				measureEndState() {}
				complete() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tZ.delete(this)
				}
				cancel() {
					"scheduled" === this.state && (tZ.delete(this), this.state = "pending")
				}
				resume() {
					"pending" === this.state && this.scheduleResolve()
				}
			}
			var t5 = new Set([K, Q]);

			function t4(t, e) {
				var r = tl(t);
				return t5.has(r) || (r = W), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
			}
			var t8 = new Set(["auto", "none", "0"]);
			class t9 extends t3 {
				constructor(t, e, r, n, i) {
					super(t, e, r, n, i, !0)
				}
				readKeyframes() {
					var {
						unresolvedKeyframes: t,
						element: e,
						name: r
					} = this;
					if (e && e.current) {
						super.readKeyframes();
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							if ("string" == typeof i && tS(i = i.trim())) {
								var o = function t(e, r) {
									var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
									tP(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'), "max-css-var-depth");
									var [i, o] = function(t) {
										var e = tT.exec(t);
										if (!e) return [, ];
										var [, r, n, i] = e;
										return ["--".concat(null != r ? r : n), i]
									}(e);
									if (i) {
										var a = window.getComputedStyle(r).getPropertyValue(i);
										if (a) {
											var s = a.trim();
											return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s) ? parseFloat(s) : s
										}
										return tS(o) ? t(o, r, n + 1) : o
									}
								}(i, e.current);
								void 0 !== o && (t[n] = o), n === t.length - 1 && (this.finalKeyframe = i)
							}
						}
						if (this.resolveNoneKeyframes(), tf.has(r) && 2 === t.length) {
							var [a, s] = t, l = ty(a), u = ty(s);
							if (tD(a) !== tD(s) && tN[r]) {
								this.needsMeasurement = !0;
								return
							}
							if (l !== u)
								if (t_(l) && t_(u))
									for (var c = 0; c < t.length; c++) {
										var h = t[c];
										"string" == typeof h && (t[c] = parseFloat(h))
									} else tN[r] && (this.needsMeasurement = !0)
						}
					}
				}
				resolveNoneKeyframes() {
					for (var {
							unresolvedKeyframes: t,
							name: e
						} = this, r = [], n = 0; n < t.length; n++)(null === t[n] || function(t) {
						if ("number" == typeof t) return 0 === t;
						if (null === t) return !0;
						return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
					}(t[n])) && r.push(n);
					r.length && function(t, e, r) {
						for (var n = 0, i = void 0; n < t.length && !i;) {
							var o = t[n];
							"string" == typeof o && !t8.has(o) && z(o).values.length && (i = t[n]), n++
						}
						if (i && r)
							for (var a of e) t[a] = t4(r, i)
					}(t, r, e)
				}
				measureInitialState() {
					var {
						element: t,
						unresolvedKeyframes: e,
						name: r
					} = this;
					if (t && t.current) {
						"height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tN[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
						var n = e[e.length - 1];
						void 0 !== n && t.getValue(r, n).jump(n, !1)
					}
				}
				measureEndState() {
					var t, {
						element: e,
						name: r,
						unresolvedKeyframes: n
					} = this;
					if (e && e.current) {
						var i = e.getValue(r);
						i && i.jump(this.measuredOrigin, !1);
						var o = n.length - 1,
							a = n[o];
						n[o] = tN[r](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), null != (t = this.removedTransforms) && t.length && this.removedTransforms.forEach(t => {
							var [r, n] = t;
							e.getValue(r).set(n)
						}), this.resolveNoneKeyframes()
					}
				}
			}
			var t6 = r(3807),
				t7 = t => 1e3 * t;

			function et(t, e) {
				-1 === t.indexOf(e) && t.push(e)
			}

			function ee(t, e) {
				var r = t.indexOf(e);
				r > -1 && t.splice(r, 1)
			}
			class er {
				constructor() {
					this.subscriptions = []
				}
				add(t) {
					return et(this.subscriptions, t), () => ee(this.subscriptions, t)
				}
				notify(t, e, r) {
					var n = this.subscriptions.length;
					if (n)
						if (1 === n) this.subscriptions[0](t, e, r);
						else
							for (var i = 0; i < n; i++) {
								var o = this.subscriptions[i];
								o && o(t, e, r)
							}
				}
				getSize() {
					return this.subscriptions.length
				}
				clear() {
					this.subscriptions.length = 0
				}
			}

			function en(t, e, r) {
				e.startsWith("--") ? t.style.setProperty(e, r) : t.style[e] = r
			}

			function ei(t) {
				var e;
				return () => (void 0 === e && (e = t()), e)
			}
			var eo = {};

			function ea(t, e) {
				var r = ei(t);
				return () => {
					var t;
					return null != (t = eo[e]) ? t : r()
				}
			}
			var es = ea(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
				el = t => null !== t;

			function eu(t, e, r) {
				var {
					repeat: n,
					repeatType: i = "loop"
				} = e, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, a = t.filter(el), s = o < 0 || n && "loop" !== i && n % 2 == 1 ? 0 : a.length - 1;
				return s && void 0 !== r ? r : a[s]
			}
			class ec {
				constructor() {
					this.updateFinished()
				}
				get finished() {
					return this._finished
				}
				updateFinished() {
					this._finished = new Promise(t => {
						this.resolve = t
					})
				}
				notifyFinished() {
					this.resolve()
				}
				then(t, e) {
					return this.finished.then(t, e)
				}
			}
			var eh = t => Array.isArray(t) && "number" == typeof t[0],
				ep = ea(() => {
					try {
						document.createElement("div").animate({
							opacity: 0
						}, {
							easing: "linear(0, 1)"
						})
					} catch (t) {
						return !1
					}
					return !0
				}, "linearEasing"),
				ed = function(t, e) {
					for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, n = "", i = Math.max(Math.round(e / r), 2), o = 0; o < i; o++) n += Math.round(1e4 * t(o / (i - 1))) / 1e4 + ", ";
					return "linear(".concat(n.substring(0, n.length - 2), ")")
				},
				ef = t => {
					var [e, r, n, i] = t;
					return "cubic-bezier(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(i, ")")
				},
				ev = {
					linear: "linear",
					ease: "ease",
					easeIn: "ease-in",
					easeOut: "ease-out",
					easeInOut: "ease-in-out",
					circIn: ef([0, .65, .55, 1]),
					circOut: ef([.55, 0, 1, .45]),
					backIn: ef([.31, .01, .66, -.59]),
					backOut: ef([.33, 1.53, .69, .99])
				};

			function em(t) {
				return "function" == typeof t && "applyToOptions" in t
			}
			var ey = ["type"];
			class eg extends ec {
				constructor(t) {
					if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
					var {
						element: e,
						name: r,
						keyframes: n,
						pseudoElement: i,
						allowFlatten: o = !1,
						finalKeyframe: a,
						onComplete: s
					} = t;
					this.isPseudoElement = !!i, this.allowFlatten = o, this.options = t, tP("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
					var l = function(t) {
						var {
							type: e
						} = t, r = (0, t6.A)(t, ey);
						return em(e) && ep() ? e.applyToOptions(r) : (null != r.duration || (r.duration = 300), null != r.ease || (r.ease = "easeOut"), r)
					}(t);
					this.animation = function(t, e, r) {
						var {
							delay: n = 0,
							duration: i = 300,
							repeat: o = 0,
							repeatType: a = "loop",
							ease: s = "easeOut",
							times: l
						} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, c = {
							[e]: r
						};
						l && (c.offset = l);
						var h = function t(e, r) {
							if (e) return "function" == typeof e ? ep() ? ed(e, r) : "ease-out" : eh(e) ? ef(e) : Array.isArray(e) ? e.map(e => t(e, r) || ev.easeOut) : ev[e]
						}(s, i);
						Array.isArray(h) && (c.easing = h);
						var p = {
							delay: n,
							duration: i,
							easing: Array.isArray(h) ? "linear" : h,
							fill: "both",
							iterations: o + 1,
							direction: "reverse" === a ? "alternate" : "normal"
						};
						return u && (p.pseudoElement = u), t.animate(c, p)
					}(e, r, n, l, i), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
						if (this.finishedTime = this.time, !i) {
							var t = eu(n, this.options, a, this.speed);
							this.updateMotionValue && this.updateMotionValue(t), en(e, r, t), this.animation.cancel()
						}
						null == s || s(), this.notifyFinished()
					}
				}
				play() {
					this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
				}
				pause() {
					this.animation.pause()
				}
				complete() {
					var t, e;
					null == (t = (e = this.animation).finish) || t.call(e)
				}
				cancel() {
					try {
						this.animation.cancel()
					} catch (t) {}
				}
				stop() {
					if (!this.isStopped) {
						this.isStopped = !0;
						var {
							state: t
						} = this;
						"idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
					}
				}
				commitStyles() {
					var t, e, r, n = null == (t = this.options) ? void 0 : t.element;
					!this.isPseudoElement && null != n && n.isConnected && (null == (e = (r = this.animation).commitStyles) || e.call(r))
				}
				get duration() {
					var t, e;
					return Number((null == (t = this.animation.effect) || null == (e = t.getComputedTiming) ? void 0 : e.call(t).duration) || 0) / 1e3
				}
				get iterationDuration() {
					var {
						delay: t = 0
					} = this.options || {};
					return this.duration + t / 1e3
				}
				get time() {
					return (Number(this.animation.currentTime) || 0) / 1e3
				}
				set time(t) {
					var e = null !== this.finishedTime;
					this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = t7(t), e && this.animation.pause()
				}
				get speed() {
					return this.animation.playbackRate
				}
				set speed(t) {
					t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
				}
				get state() {
					return null !== this.finishedTime ? "finished" : this.animation.playState
				}
				get startTime() {
					var t;
					return null != (t = this.manualStartTime) ? t : Number(this.animation.startTime)
				}
				set startTime(t) {
					this.manualStartTime = this.animation.startTime = t
				}
				attachTimeline(t) {
					var e, {
						timeline: r,
						rangeStart: n,
						rangeEnd: i,
						observe: o
					} = t;
					return (this.allowFlatten && (null == (e = this.animation.effect) || e.updateTiming({
						easing: "linear"
					})), this.animation.onfinish = null, r && es()) ? (this.animation.timeline = r, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), tW) : o(this)
				}
			}
			var eb = new Set(["opacity", "clipPath", "filter", "transform"]),
				{
					schedule: eO
				} = tH(queueMicrotask, !1);

			function eP() {
				i = void 0
			}
			var ew = {
					now: () => (void 0 === i && ew.set(tK.isProcessing || tX.useManualTiming ? tK.timestamp : performance.now()), i),
					set: t => {
						i = t, queueMicrotask(eP)
					}
				},
				ej = (t, e) => e ? 1e3 / e * t : 0,
				ex = void 0;
			class eS {
				constructor(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
						var e, r = ew.now();
						if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (null == (e = this.events.change) || e.notify(this.current), this.dependents))
							for (var n of this.dependents) n.dirty()
					}, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
				}
				setCurrent(t) {
					this.current = t, this.updatedAt = ew.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
				}
				setPrevFrameValue() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
					this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
				}
				onChange(t) {
					return this.on("change", t)
				}
				on(t, e) {
					this.events[t] || (this.events[t] = new er);
					var r = this.events[t].add(e);
					return "change" === t ? () => {
						r(), tq.read(() => {
							this.events.change.getSize() || this.stop()
						})
					} : r
				}
				clearListeners() {
					for (var t in this.events) this.events[t].clear()
				}
				attach(t, e) {
					this.passiveEffect = t, this.stopPassiveEffect = e
				}
				set(t) {
					this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
				}
				setWithVelocity(t, e, r) {
					this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
				}
				jump(t) {
					var e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
					this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
				}
				dirty() {
					var t;
					null == (t = this.events.change) || t.notify(this.current)
				}
				addDependent(t) {
					this.dependents || (this.dependents = new Set), this.dependents.add(t)
				}
				removeDependent(t) {
					this.dependents && this.dependents.delete(t)
				}
				get() {
					return ex && ex.push(this), this.current
				}
				getPrevious() {
					return this.prev
				}
				getVelocity() {
					var t = ew.now();
					if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
					var e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
					return ej(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
				}
				start(t) {
					return this.stop(), new Promise(e => {
						this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
					}).then(() => {
						this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
					})
				}
				stop() {
					this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
				}
				isAnimating() {
					return !!this.animation
				}
				clearAnimation() {
					delete this.animation
				}
				destroy() {
					var t, e;
					null == (t = this.dependents) || t.clear(), null == (e = this.events.destroy) || e.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
				}
			}

			function eE(t, e) {
				return new eS(t, e)
			}
			var eD = [...tm, B, W],
				eT = new WeakMap;

			function eA(t) {
				return null !== t && "object" == typeof t && "function" == typeof t.start
			}

			function eM(t) {
				return "string" == typeof t || Array.isArray(t)
			}
			var eC = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
				ek = ["initial", ...eC];

			function eV(t) {
				return eA(t.animate) || ek.some(e => eM(t[e]))
			}

			function eR(t) {
				return !!(eV(t) || t.variants)
			}
			var eL = r(9838);

			function eB(t) {
				var e = [{}, {}];
				return null == t || t.values.forEach((t, r) => {
					e[0][r] = t.get(), e[1][r] = t.getVelocity()
				}), e
			}

			function eI(t, e, r, n) {
				if ("function" == typeof e) {
					var [i, o] = eB(n);
					e = e(void 0 !== r ? r : t.custom, i, o)
				}
				if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
					var [a, s] = eB(n);
					e = e(void 0 !== r ? r : t.custom, a, s)
				}
				return e
			}
			var eF = r(1949),
				e_ = ["willChange"];

			function eU(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ez(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? eU(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : eU(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var eN = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
				eW = {};
			class eX {
				scrapeMotionValuesFromProps(t, e, r) {
					return {}
				}
				constructor(t) {
					var {
						parent: e,
						props: r,
						presenceContext: n,
						reducedMotionConfig: i,
						skipAnimations: o,
						blockInitialAnimation: a,
						visualState: s
					} = t, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = t3, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
						this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
					}, this.renderScheduledAt = 0, this.scheduleRender = () => {
						var t = ew.now();
						this.renderScheduledAt < t && (this.renderScheduledAt = t, tq.render(this.render, !1, !0))
					};
					var {
						latestValues: u,
						renderState: c
					} = s;
					this.latestValues = u, this.baseTarget = ez({}, u), this.initialValues = r.initial ? ez({}, u) : {}, this.renderState = c, this.parent = e, this.props = r, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = o, this.options = l, this.blockInitialAnimation = !!a, this.isControllingVariants = eV(r), this.isVariantNode = eR(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
					var h = this.scrapeMotionValuesFromProps(r, {}, this),
						{
							willChange: p
						} = h,
						d = (0, t6.A)(h, e_);
					for (var f in d) {
						var v = d[f];
						void 0 !== u[f] && td(v) && v.set(u[f])
					}
				}
				mount(t) {
					var e, r, n;
					if (this.hasBeenMounted)
						for (var i in this.initialValues) null == (n = this.values.get(i)) || n.jump(this.initialValues[i]), this.latestValues[i] = this.initialValues[i];
					this.current = t, eT.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (eF.r.current || (0, eL.Uu)(), this.shouldReduceMotion = eF.O.current), this.shouldSkipAnimations = null != (e = this.skipAnimationsConfig) && e, null == (r = this.parent) || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
				}
				unmount() {
					var t;
					for (var e in this.projection && this.projection.unmount(), tG(this.notifyUpdate), tG(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), null == (t = this.parent) || t.removeChild(this), this.events) this.events[e].clear();
					for (var r in this.features) {
						var n = this.features[r];
						n && (n.unmount(), n.isMounted = !1)
					}
					this.current = null
				}
				addChild(t) {
					this.children.add(t), null != this.enteringChildren || (this.enteringChildren = new Set), this.enteringChildren.add(t)
				}
				removeChild(t) {
					this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
				}
				bindToMotionValue(t, e) {
					if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && eb.has(t) && this.current instanceof HTMLElement) {
						var r, {
								factory: n,
								keyframes: i,
								times: o,
								ease: a,
								duration: s
							} = e.accelerate,
							u = new eg({
								element: this.current,
								name: t,
								keyframes: i,
								times: o,
								ease: a,
								duration: t7(s)
							}),
							c = n(u);
						this.valueSubscriptions.set(t, () => {
							c(), u.cancel()
						});
						return
					}
					var h = l.has(t);
					h && this.onBindTransform && this.onBindTransform();
					var p = e.on("change", e => {
						this.latestValues[t] = e, this.props.onUpdate && tq.preRender(this.notifyUpdate), h && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
					});
					window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
						p(), r && r()
					})
				}
				sortNodePosition(t) {
					return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
				}
				updateFeatures() {
					var t = "animation";
					for (t in eW) {
						var e = eW[t];
						if (e) {
							var {
								isEnabled: r,
								Feature: n
							} = e;
							if (!this.features[t] && n && r(this.props) && (this.features[t] = new n(this)), this.features[t]) {
								var i = this.features[t];
								i.isMounted ? i.update() : (i.mount(), i.isMounted = !0)
							}
						}
					}
				}
				triggerBuild() {
					this.build(this.renderState, this.latestValues, this.props)
				}
				measureViewportBox() {
					return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tp()
				}
				getStaticValue(t) {
					return this.latestValues[t]
				}
				setStaticValue(t, e) {
					this.latestValues[t] = e
				}
				update(t, e) {
					(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
					for (var r = 0; r < eN.length; r++) {
						var n = eN[r];
						this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
						var i = t["on" + n];
						i && (this.propEventSubscriptions[n] = this.on(n, i))
					}
					this.prevMotionValues = function(t, e, r) {
						for (var n in e) {
							var i = e[n],
								o = r[n];
							if (td(i)) t.addValue(n, i);
							else if (td(o)) t.addValue(n, eE(i, {
								owner: t
							}));
							else if (o !== i)
								if (t.hasValue(n)) {
									var a = t.getValue(n);
									!0 === a.liveStyle ? a.jump(i) : a.hasAnimated || a.set(i)
								} else {
									var s = t.getStaticValue(n);
									t.addValue(n, eE(void 0 !== s ? s : i, {
										owner: t
									}))
								}
						}
						for (var l in r) void 0 === e[l] && t.removeValue(l);
						return e
					}(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
				}
				getProps() {
					return this.props
				}
				getVariant(t) {
					return this.props.variants ? this.props.variants[t] : void 0
				}
				getDefaultTransition() {
					return this.props.transition
				}
				getTransformPagePoint() {
					return this.props.transformPagePoint
				}
				getClosestVariantNode() {
					return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
				}
				addVariantChild(t) {
					var e = this.getClosestVariantNode();
					if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
				}
				addValue(t, e) {
					var r = this.values.get(t);
					e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
				}
				removeValue(t) {
					this.values.delete(t);
					var e = this.valueSubscriptions.get(t);
					e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
				}
				hasValue(t) {
					return this.values.has(t)
				}
				getValue(t, e) {
					if (this.props.values && this.props.values[t]) return this.props.values[t];
					var r = this.values.get(t);
					return void 0 === r && void 0 !== e && (r = eE(null === e ? void 0 : e, {
						owner: this
					}), this.addValue(t, r)), r
				}
				readValue(t, e) {
					var r, n = void 0 === this.latestValues[t] && this.current ? null != (r = this.getBaseTargetFromProps(this.props, t)) ? r : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
					if (null != n) {
						let r, i;
						if ("string" == typeof n && (r = n, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r) || (i = n, /^0[^.\s]+$/u.test(i)))) n = parseFloat(n);
						else {
							let r;
							r = n, !eD.find(tv(r)) && W.test(e) && (n = t4(t, e))
						}
						this.setBaseTarget(t, td(n) ? n.get() : n)
					}
					return td(n) ? n.get() : n
				}
				setBaseTarget(t, e) {
					this.baseTarget[t] = e
				}
				getBaseTarget(t) {
					var {
						initial: e
					} = this.props;
					if ("string" == typeof e || "object" == typeof e) {
						var r, n, i = eI(this.props, e, null == (n = this.presenceContext) ? void 0 : n.custom);
						i && (r = i[t])
					}
					if (e && void 0 !== r) return r;
					var o = this.getBaseTargetFromProps(this.props, t);
					return void 0 === o || td(o) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : o
				}
				on(t, e) {
					return this.events[t] || (this.events[t] = new er), this.events[t].add(e)
				}
				notify(t) {
					if (this.events[t]) {
						for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
						this.events[t].notify(...r)
					}
				}
				scheduleRenderMicrotask() {
					eO.render(this.render)
				}
			}
			class eY extends eX {
				constructor() {
					super(...arguments), this.KeyframeResolver = t9
				}
				sortInstanceNodePosition(t, e) {
					return 2 & t.compareDocumentPosition(e) ? 1 : -1
				}
				getBaseTargetFromProps(t, e) {
					var r = t.style;
					return r ? r[e] : void 0
				}
				removeValueFromRenderState(t, e) {
					var {
						vars: r,
						style: n
					} = e;
					delete r[t], delete n[t]
				}
				handleChildMotionValue() {
					this.childSubscription && (this.childSubscription(), delete this.childSubscription);
					var {
						children: t
					} = this.props;
					td(t) && (this.childSubscription = t.on("change", t => {
						this.current && (this.current.textContent = "".concat(t))
					}))
				}
			}

			function eH(t) {
				return t.replace(/([A-Z])/g, t => "-".concat(t.toLowerCase()))
			}
			var eq = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
				eG = {
					x: "translateX",
					y: "translateY",
					z: "translateZ",
					transformPerspective: "perspective"
				},
				eK = s.length;

			function e$(t, e, r) {
				var {
					style: n,
					vars: i,
					transformOrigin: o
				} = t, a = !1, u = !1;
				for (var c in e) {
					var h = e[c];
					if (l.has(c)) {
						a = !0;
						continue
					}
					if (tj(c)) {
						i[c] = h;
						continue
					}
					var p = eq(h, ti[c]);
					c.startsWith("origin") ? (u = !0, o[c] = p) : n[c] = p
				}
				if (!e.transform && (a || r ? n.transform = function(t, e, r) {
						for (var n = "", i = !0, o = 0; o < eK; o++) {
							var a = s[o],
								l = t[a];
							if (void 0 !== l) {
								var u = !0;
								if ("number" == typeof l) u = l === +!!a.startsWith("scale");
								else {
									var c = parseFloat(l);
									u = a.startsWith("scale") ? 1 === c : 0 === c
								}
								if (!u || r) {
									var h = eq(l, ti[a]);
									if (!u) {
										i = !1;
										var p = eG[a] || a;
										n += "".concat(p, "(").concat(h, ") ")
									}
									r && (e[a] = h)
								}
							}
						}
						var d = t.pathRotation;
						return d && (i = !1, n += "rotate(".concat(eq(d, ti.pathRotation), ") ")), n = n.trim(), r ? n = r(e, i ? "" : n) : i && (n = "none"), n
					}(e, t.transform, r) : n.transform && (n.transform = "none")), u) {
					var {
						originX: d = "50%",
						originY: f = "50%",
						originZ: v = 0
					} = o;
					n.transformOrigin = "".concat(d, " ").concat(f, " ").concat(v)
				}
			}
			var eZ = {
					offset: "stroke-dashoffset",
					array: "stroke-dasharray"
				},
				eQ = {
					offset: "strokeDashoffset",
					array: "strokeDasharray"
				},
				eJ = ["attrX", "attrY", "attrScale", "pathLength", "pathSpacing", "pathOffset"],
				e0 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

			function e1(t, e, r, n, i) {
				var o, a, {
					attrX: s,
					attrY: l,
					attrScale: u,
					pathLength: c,
					pathSpacing: h = 1,
					pathOffset: p = 0
				} = e;
				if (e$(t, (0, t6.A)(e, eJ), n), r) {
					t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
					return
				}
				t.attrs = t.style, t.style = {};
				var {
					attrs: d,
					style: f
				} = t;
				for (var v of (d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = null != (o = d.transformOrigin) ? o : "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = null != (a = null == i ? void 0 : i.transformBox) ? a : "fill-box", delete d.transformBox), e0)) void 0 !== d[v] && (f[v] = d[v], delete d[v]);
				void 0 !== s && (d.x = s), void 0 !== l && (d.y = l), void 0 !== u && (d.scale = u), void 0 !== c && function(t, e) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
						n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
						i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
					t.pathLength = 1;
					var o = i ? eZ : eQ;
					t[o.offset] = "".concat(-n), t[o.array] = "".concat(e, " ").concat(r)
				}(d, c, h, p, !1)
			}
			var e2 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
				e3 = t => "string" == typeof t && "svg" === t.toLowerCase();

			function e5(t, e, r, n) {
				var i, {
						style: o,
						vars: a
					} = e,
					s = t.style;
				for (i in o) s[i] = o[i];
				for (i in null == n || n.applyProjectionStyles(s, r), a) s.setProperty(i, a[i])
			}
			var e4 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];

			function e8(t, e) {
				return e.max === e.min ? 0 : t / (e.max - e.min) * 100
			}
			var e9 = {
					correct: (t, e) => {
						if (!e.target) return t;
						if ("string" == typeof t)
							if (!C.test(t)) return t;
							else t = parseFloat(t);
						var r = e8(t, e.target.x),
							n = e8(t, e.target.y);
						return "".concat(r, "% ").concat(n, "%")
					}
				},
				e6 = (t, e, r) => t + (e - t) * r;

			function e7(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function rt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? e7(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e7(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var re = {
				borderRadius: rt(rt({}, e9), {}, {
					applyTo: [...e4]
				}),
				borderTopLeftRadius: e9,
				borderTopRightRadius: e9,
				borderBottomLeftRadius: e9,
				borderBottomRightRadius: e9,
				boxShadow: {
					correct: (t, e) => {
						var {
							treeScale: r,
							projectionDelta: n
						} = e, i = W.parse(t);
						if (i.length > 5) return t;
						var o = W.createTransformer(t),
							a = +("number" != typeof i[0]),
							s = n.x.scale * r.x,
							l = n.y.scale * r.y;
						i[0 + a] /= s, i[1 + a] /= l;
						var u = e6(s, l, .5);
						return "number" == typeof i[2 + a] && (i[2 + a] /= u), "number" == typeof i[3 + a] && (i[3 + a] /= u), o(i)
					}
				}
			};

			function rr(t, e) {
				var {
					layout: r,
					layoutId: n
				} = e;
				return l.has(t) || t.startsWith("origin") || (r || void 0 !== n) && (!!re[t] || "opacity" === t)
			}

			function rn(t, e, r) {
				var n, i = t.style,
					o = null == e ? void 0 : e.style,
					a = {};
				if (!i) return a;
				for (var s in i)(td(i[s]) || o && td(o[s]) || rr(s, t) || (null == r || null == (n = r.getValue(s)) ? void 0 : n.liveStyle) !== void 0) && (a[s] = i[s]);
				return a
			}

			function ri(t, e, r) {
				var n = rn(t, e, r);
				for (var i in t)(td(t[i]) || td(e[i])) && (n[-1 !== s.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
				return n
			}
			class ro extends eY {
				constructor() {
					super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tp
				}
				getBaseTargetFromProps(t, e) {
					return t[e]
				}
				readValueFromInstance(t, e) {
					if (l.has(e)) {
						var r = tl(e);
						return r && r.default || 0
					}
					return e = e2.has(e) ? e : eH(e), t.getAttribute(e)
				}
				scrapeMotionValuesFromProps(t, e, r) {
					return ri(t, e, r)
				}
				build(t, e, r) {
					e1(t, e, this.isSVGTag, r.transformTemplate, r.style)
				}
				renderInstance(t, e, r, n) {
					for (var i in e5(t, e, void 0, n), e.attrs) t.setAttribute(e2.has(i) ? i : eH(i), e.attrs[i])
				}
				mount(t) {
					this.isSVGTag = e3(t.tagName), super.mount(t)
				}
			}

			function ra(t) {
				var {
					top: e,
					left: r,
					right: n,
					bottom: i
				} = t;
				return {
					x: {
						min: r,
						max: n
					},
					y: {
						min: e,
						max: i
					}
				}
			}

			function rs(t) {
				return void 0 === t || 1 === t
			}

			function rl(t) {
				var {
					scale: e,
					scaleX: r,
					scaleY: n
				} = t;
				return !rs(e) || !rs(r) || !rs(n)
			}

			function ru(t) {
				return rl(t) || rc(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
			}

			function rc(t) {
				var e, r;
				return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
			}

			function rh(t, e, r, n, i) {
				return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
			}

			function rp(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
					n = arguments.length > 3 ? arguments[3] : void 0,
					i = arguments.length > 4 ? arguments[4] : void 0;
				t.min = rh(t.min, e, r, n, i), t.max = rh(t.max, e, r, n, i)
			}

			function rd(t, e) {
				var {
					x: r,
					y: n
				} = e;
				rp(t.x, r.translate, r.scale, r.originPoint), rp(t.y, n.translate, n.scale, n.originPoint)
			}

			function rf(t, e) {
				t.min += e, t.max += e
			}

			function rv(t, e, r, n) {
				var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
					o = e6(t.min, t.max, i);
				rp(t, e, r, o, n)
			}

			function rm(t, e) {
				return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
			}

			function ry(t, e, r) {
				var n = null != r ? r : t;
				rv(t.x, rm(e.x, n.x), e.scaleX, e.scale, e.originX), rv(t.y, rm(e.y, n.y), e.scaleY, e.scale, e.originY)
			}

			function rg(t, e) {
				return ra(function(t, e) {
					if (!e) return t;
					var r = e({
							x: t.left,
							y: t.top
						}),
						n = e({
							x: t.right,
							y: t.bottom
						});
					return {
						top: r.y,
						left: r.x,
						bottom: n.y,
						right: n.x
					}
				}(t.getBoundingClientRect(), e))
			}
			class rb extends eY {
				constructor() {
					super(...arguments), this.type = "html", this.renderInstance = e5
				}
				readValueFromInstance(t, e) {
					if (l.has(e)) {
						var r;
						return null != (r = this.projection) && r.isProjecting ? tB(e) : ((t, e) => {
							var {
								transform: r = "none"
							} = getComputedStyle(t);
							return tI(r, e)
						})(t, e)
					}
					var n = window.getComputedStyle(t),
						i = (tj(e) ? n.getPropertyValue(e) : n[e]) || 0;
					return "string" == typeof i ? i.trim() : i
				}
				measureInstanceViewportBox(t, e) {
					var {
						transformPagePoint: r
					} = e;
					return rg(t, r)
				}
				build(t, e, r) {
					e$(t, e, r.transformTemplate)
				}
				scrapeMotionValuesFromProps(t, e, r) {
					return rn(t, e, r)
				}
			}
			var rO = r(2115),
				rP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

			function rw(t) {
				if ("string" != typeof t || t.includes("-"));
				else if (rP.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
				return !1
			}
			var rj = r(5155),
				rx = r(3854),
				rS = (0, rO.createContext)({
					strict: !1
				}),
				rE = r(6633),
				rD = (0, rO.createContext)({});

			function rT(t) {
				return Array.isArray(t) ? t.join(" ") : t
			}
			var rA = () => ({
				style: {},
				transform: {},
				transformOrigin: {},
				vars: {}
			});

			function rM(t, e, r) {
				for (var n in e) td(e[n]) || rr(n, r) || (t[n] = e[n])
			}

			function rC(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function rk(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? rC(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rC(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var rV = () => rk(rk({}, rA()), {}, {
				attrs: {}
			});

			function rR(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function rL(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? rR(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rR(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var rB = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

			function rI(t) {
				return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rB.has(t)
			}
			var rF = t => !rI(t);
			try {
				n = require("@emotion/is-prop-valid").default, "function" == typeof n && (rF = t => t.startsWith("on") ? !rI(t) : n(t))
			} catch (t) {}

			function r_(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function rU(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? r_(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : r_(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function rz(t) {
				return td(t) ? t.get() : t
			}
			var rN = r(3088),
				rW = r(2954),
				rX = ["transitionEnd", "transition"],
				rY = t => (e, r) => {
					var n = (0, rO.useContext)(rD),
						i = (0, rO.useContext)(rN.t),
						o = () => (function(t, e, r, n) {
							var {
								scrapeMotionValuesFromProps: i,
								createRenderState: o
							} = t;
							return {
								latestValues: function(t, e, r, n) {
									var i = {},
										o = n(t, {});
									for (var a in o) i[a] = rz(o[a]);
									var {
										initial: s,
										animate: l
									} = t, u = eV(t), c = eR(t);
									e && c && !u && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === l && (l = e.animate));
									var h = !!r && !1 === r.initial,
										p = (h = h || !1 === s) ? l : s;
									if (p && "boolean" != typeof p && !eA(p))
										for (var d = Array.isArray(p) ? p : [p], f = 0; f < d.length; f++) {
											var v = eI(t, d[f]);
											if (v) {
												var {
													transitionEnd: m,
													transition: y
												} = v, g = (0, t6.A)(v, rX);
												for (var b in g) {
													var O = g[b];
													if (Array.isArray(O)) {
														var P = h ? O.length - 1 : 0;
														O = O[P]
													}
													null !== O && (i[b] = O)
												}
												for (var w in m) i[w] = m[w]
											}
										}
									return i
								}(e, r, n, i),
								renderState: o()
							}
						})(t, e, n, i);
					return r ? o() : (0, rW.M)(o)
				},
				rH = rY({
					scrapeMotionValuesFromProps: rn,
					createRenderState: rA
				}),
				rq = rY({
					scrapeMotionValuesFromProps: ri,
					createRenderState: rV
				}),
				rG = {
					animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
					exit: ["exit"],
					drag: ["drag", "dragControls"],
					focus: ["whileFocus"],
					hover: ["whileHover", "onHoverStart", "onHoverEnd"],
					tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
					pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
					inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
					layout: ["layout", "layoutId"]
				},
				rK = !1;

			function r$() {
				if (!rK) {
					var t = {},
						e = function(e) {
							t[e] = {
								isEnabled: t => rG[e].some(e => !!t[e])
							}
						};
					for (var r in rG) e(r);
					eW = t, rK = !0
				}
				return eW
			}

			function rZ(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function rQ(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? rZ(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rZ(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var rJ = Symbol.for("motionComponentSymbol"),
				r0 = "data-" + eH("framerAppearId"),
				r1 = (0, rO.createContext)({});

			function r2(t) {
				return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
			}
			var r3 = r(8707);

			function r5(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function r4(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? r5(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : r5(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function r8(t) {
				var e, r, {
						forwardMotionProps: n = !1,
						type: i
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					o = arguments.length > 2 ? arguments[2] : void 0,
					a = arguments.length > 3 ? arguments[3] : void 0;
				o && function(t) {
					var e = r$();
					for (var r in t) e[r] = rQ(rQ({}, e[r]), t[r]);
					eW = e
				}(o);
				var s = i ? "svg" === i : rw(t),
					l = s ? rq : rH;

				function u(e, r) {
					var i, o, u, c, h = r4(r4(r4({}, (0, rO.useContext)(rE.Q)), e), {}, {
							layoutId: function(t) {
								var {
									layoutId: e
								} = t, r = (0, rO.useContext)(rx.L).id;
								return r && void 0 !== e ? r + "-" + e : e
							}(e)
						}),
						{
							isStatic: p
						} = h,
						d = function(t) {
							var {
								initial: e,
								animate: r
							} = function(t, e) {
								if (eV(t)) {
									var {
										initial: r,
										animate: n
									} = t;
									return {
										initial: !1 === r || eM(r) ? r : void 0,
										animate: eM(n) ? n : void 0
									}
								}
								return !1 !== t.inherit ? e : {}
							}(t, (0, rO.useContext)(rD));
							return (0, rO.useMemo)(() => ({
								initial: e,
								animate: r
							}), [rT(e), rT(r)])
						}(e),
						f = l(e, p);
					if (!p) {
						(0, rO.useContext)(rS).strict;
						var v = function(t) {
							var {
								drag: e,
								layout: r
							} = r$();
							if (!e && !r) return {};
							var n = r4(r4({}, e), r);
							return {
								MeasureLayout: null != e && e.isEnabled(t) || null != r && r.isEnabled(t) ? n.MeasureLayout : void 0,
								ProjectionNode: n.ProjectionNode
							}
						}(h);
						c = v.MeasureLayout, d.visualElement = function(t, e, r, n, i, o) {
							var a, s, l, u, {
									visualElement: c
								} = (0, rO.useContext)(rD),
								h = (0, rO.useContext)(rS),
								p = (0, rO.useContext)(rN.t),
								d = (0, rO.useContext)(rE.Q),
								f = d.reducedMotion,
								v = d.skipAnimations,
								m = (0, rO.useRef)(null),
								y = (0, rO.useRef)(!1);
							n = n || h.renderer, !m.current && n && (m.current = n(t, {
								visualState: e,
								parent: c,
								props: r,
								presenceContext: p,
								blockInitialAnimation: !!p && !1 === p.initial,
								reducedMotionConfig: f,
								skipAnimations: v,
								isSVG: o
							}), y.current && m.current && (m.current.manuallyAnimateOnMount = !0));
							var g = m.current,
								b = (0, rO.useContext)(r1);
							g && !g.projection && i && ("html" === g.type || "svg" === g.type) && function(t, e, r, n) {
								var {
									layoutId: i,
									layout: o,
									drag: a,
									dragConstraints: s,
									layoutScroll: l,
									layoutRoot: u,
									layoutAnchor: c,
									layoutCrossfade: h
								} = e;
								t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
									if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
								}(t.parent)), t.projection.setOptions({
									layoutId: i,
									layout: o,
									alwaysMeasureLayout: !!a || s && r2(s),
									visualElement: t,
									animationType: "string" == typeof o ? o : "both",
									initialPromotionConfig: n,
									crossfade: h,
									layoutScroll: l,
									layoutRoot: u,
									layoutAnchor: c
								})
							}(m.current, r, i, b);
							var O = (0, rO.useRef)(!1);
							(0, rO.useInsertionEffect)(() => {
								g && O.current && g.update(r, p)
							});
							var P = r[r0],
								w = (0, rO.useRef)(!!P && !(null != (a = (s = window).MotionHandoffIsComplete) && a.call(s, P)) && (null == (l = (u = window).MotionHasOptimisedAnimation) ? void 0 : l.call(u, P)));
							return (0, r3.E)(() => {
								y.current = !0, g && (O.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), w.current && g.animationState && g.animationState.animateChanges())
							}), (0, rO.useEffect)(() => {
								g && (!w.current && g.animationState && g.animationState.animateChanges(), w.current && (queueMicrotask(() => {
									var t, e;
									null == (t = (e = window).MotionHandoffMarkAsComplete) || t.call(e, P)
								}), w.current = !1), g.enteringChildren = void 0)
							}), g
						}(t, f, h, a, v.ProjectionNode, s)
					}
					return (0, rj.jsxs)(rD.Provider, {
						value: d,
						children: [c && d.visualElement ? (0, rj.jsx)(c, r4({
							visualElement: d.visualElement
						}, h)) : null, function(t, e, r, n, i) {
							var {
								latestValues: o
							} = n, a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], s = arguments.length > 6 ? arguments[6] : void 0, l = ((null != s ? s : rw(t)) ? function(t, e, r, n) {
								var i = (0, rO.useMemo)(() => {
									var r = rV();
									return e1(r, e, e3(n), t.transformTemplate, t.style), rL(rL({}, r.attrs), {}, {
										style: rL({}, r.style)
									})
								}, [e]);
								if (t.style) {
									var o = {};
									rM(o, t.style, t), i.style = rL(rL({}, o), i.style)
								}
								return i
							} : function(t, e) {
								var r, n = {},
									i = (rM(r = {}, t.style || {}, t), Object.assign(r, function(t, e) {
										var {
											transformTemplate: r
										} = t;
										return (0, rO.useMemo)(() => {
											var t = rA();
											return e$(t, e, r), Object.assign({}, t.vars, t.style)
										}, [e])
									}(t, e)), r);
								return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
							})(e, o, i, t), u = function(t, e, r) {
								var n = {};
								for (var i in t)("values" !== i || "object" != typeof t.values) && !td(t[i]) && (rF(i) || !0 === r && rI(i) || !e && !rI(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
								return n
							}(e, "string" == typeof t, a), c = t !== rO.Fragment ? rU(rU(rU({}, u), l), {}, {
								ref: r
							}) : {}, {
								children: h
							} = e, p = (0, rO.useMemo)(() => td(h) ? h.get() : h, [h]);
							return (0, rO.createElement)(t, rU(rU({}, c), {}, {
								children: p
							}))
						}(t, e, (i = d.visualElement, o = (0, rO.useRef)(r), (0, rO.useInsertionEffect)(() => {
							o.current = r
						}), u = (0, rO.useRef)(null), (0, rO.useCallback)(t => {
							if (t) {
								var e;
								null == (e = f.onMount) || e.call(f, t)
							}
							i && (t ? i.mount(t) : i.unmount());
							var r = o.current;
							if ("function" == typeof r)
								if (t) {
									var n = r(t);
									"function" == typeof n && (u.current = n)
								} else u.current ? (u.current(), u.current = null) : r(t);
							else r && (r.current = t)
						}, [i])), f, p, n, s)]
					})
				}
				u.displayName = "motion.".concat("string" == typeof t ? t : "create(".concat(null != (e = null != (r = t.displayName) ? r : t.name) ? e : "", ")"));
				var c = (0, rO.forwardRef)(u);
				return c[rJ] = t, c
			}
			class r9 {
				constructor(t) {
					this.isMounted = !1, this.node = t
				}
				update() {}
			}

			function r6(t, e, r) {
				var n = t.getProps();
				return eI(n, e, void 0 !== r ? r : n.custom, t)
			}
			var r7 = ["inherit"];

			function nt(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ne(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nt(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function nr(t, e) {
				if (null != t && t.inherit && e) {
					var {
						inherit: r
					} = t, n = (0, t6.A)(t, r7);
					return ne(ne({}, e), n)
				}
				return t
			}

			function nn(t, e) {
				var r, n, i = null != (r = null != (n = null == t ? void 0 : t[e]) ? n : null == t ? void 0 : t.default) ? r : t;
				return i !== t ? nr(i, t) : i
			}
			var ni = t => Array.isArray(t),
				no = ["transitionEnd", "transition"];

			function na(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ns(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? na(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : na(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function nl(t, e) {
				var r = t.getValue("willChange");
				if (td(r) && r.add) return r.add(e);
				if (!r && tX.WillChange) {
					var n = new tX.WillChange("auto");
					t.addValue("willChange", n), n.add(e)
				}
			}
			var nu = function() {
				for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
				return e.reduce((t, e) => r => e(t(r)))
			};

			function nc(t, e, r) {
				return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
			}

			function nh(t, e) {
				return r => r > 0 ? e : t
			}

			function np(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}
			var nd = (t, e, r) => {
					var n = t * t,
						i = r * (e * e - n) + n;
					return i < 0 ? 0 : Math.sqrt(i)
				},
				nf = [S, x, L];

			function nv(t) {
				var e = nf.find(e => e.test(t));
				if (tO(!!e, "'".concat(t, "' is not an animatable color. Use the equivalent color code instead."), "color-not-animatable"), !e) return !1;
				var r = e.parse(t);
				return e === L && (r = function(t) {
					var {
						hue: e,
						saturation: r,
						lightness: n,
						alpha: i
					} = t;
					e /= 360, n /= 100;
					var o = 0,
						a = 0,
						s = 0;
					if (r /= 100) {
						var l = n < .5 ? n * (1 + r) : n + r - n * r,
							u = 2 * n - l;
						o = nc(u, l, e + 1 / 3), a = nc(u, l, e), s = nc(u, l, e - 1 / 3)
					} else o = a = s = n;
					return {
						red: Math.round(255 * o),
						green: Math.round(255 * a),
						blue: Math.round(255 * s),
						alpha: i
					}
				}(r)), r
			}
			var nm = (t, e) => {
					var r = nv(t),
						n = nv(e);
					if (!r || !n) return nh(t, e);
					var i = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {};
							e % 2 ? np(Object(r), !0).forEach(function(e) {
								(0, u.A)(t, e, r[e])
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							})
						}
						return t
					}({}, r);
					return t => (i.red = nd(r.red, n.red, t), i.green = nd(r.green, n.green, t), i.blue = nd(r.blue, n.blue, t), i.alpha = e6(r.alpha, n.alpha, t), x.transform(i))
				},
				ny = new Set(["none", "hidden"]);

			function ng(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function nb(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ng(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function nO(t, e) {
				return r => e6(t, e, r)
			}

			function nP(t) {
				return "number" == typeof t ? nO : "string" == typeof t ? tS(t) ? nh : B.test(t) ? nm : nx : Array.isArray(t) ? nw : "object" == typeof t ? B.test(t) ? nm : nj : nh
			}

			function nw(t, e) {
				var r = [...t],
					n = r.length,
					i = t.map((t, r) => nP(t)(t, e[r]));
				return t => {
					for (var e = 0; e < n; e++) r[e] = i[e](t);
					return r
				}
			}

			function nj(t, e) {
				var r = nb(nb({}, t), e),
					n = {};
				for (var i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = nP(t[i])(t[i], e[i]));
				return t => {
					for (var e in n) r[e] = n[e](t);
					return r
				}
			}
			var nx = (t, e) => {
				var r = W.createTransformer(e),
					n = z(t),
					i = z(e);
				return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? ny.has(t) && !i.values.length || ny.has(e) && !n.values.length ? ny.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t : nu(nw(function(t, e) {
					for (var r = [], n = {
							color: 0,
							var: 0,
							number: 0
						}, i = 0; i < e.values.length; i++) {
						var o, a = e.types[i],
							s = t.indexes[a][n[a]],
							l = null != (o = t.values[s]) ? o : 0;
						r[i] = l, n[a]++
					}
					return r
				}(n, i), i.values), r) : (tO(!0, "Complex values '".concat(t, "' and '").concat(e, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."), "complex-values-different"), nh(t, e))
			};

			function nS(t, e, r) {
				return "number" == typeof t && "number" == typeof e && "number" == typeof r ? e6(t, e, r) : nP(t)(t, e)
			}
			var nE = t => {
				var e = e => {
					var {
						timestamp: r
					} = e;
					return t(r)
				};
				return {
					start: function() {
						var t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
						return tq.update(e, t)
					},
					stop: () => tG(e),
					now: () => tK.isProcessing ? tK.timestamp : ew.now()
				}
			};

			function nD(t) {
				for (var e = 0, r = t.next(e); !r.done && e < 2e4;) e += 50, r = t.next(e);
				return e >= 2e4 ? 1 / 0 : e
			}

			function nT(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function nA(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nT(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nT(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function nM(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function nC(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nM(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nM(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var nk = .01,
				nV = 2,
				nR = .005,
				nL = .5;

			function nB(t, e) {
				return t * Math.sqrt(1 - e * e)
			}
			var nI = ["duration", "bounce"],
				nF = ["stiffness", "damping", "mass"];

			function n_(t, e) {
				return e.some(e => void 0 !== t[e])
			}

			function nU() {
				var t, e, r, n, i, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
					s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3,
					l = "object" != typeof a ? {
						visualDuration: a,
						keyframes: [0, 1],
						bounce: s
					} : a,
					{
						restSpeed: u,
						restDelta: h
					} = l,
					p = l.keyframes[0],
					d = l.keyframes[l.keyframes.length - 1],
					f = {
						done: !1,
						value: p
					},
					{
						stiffness: v,
						damping: m,
						mass: y,
						duration: g,
						velocity: b,
						isResolvedFromDuration: O
					} = function(t) {
						var e = nC({
							velocity: 0,
							stiffness: 100,
							damping: 10,
							mass: 1,
							isResolvedFromDuration: !1
						}, t);
						if (!n_(t, nF) && n_(t, nI))
							if (e.velocity = 0, t.visualDuration) {
								var r = 2 * Math.PI / (1.2 * t.visualDuration),
									n = r * r,
									i = 2 * c(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
								e = nC(nC({}, e), {}, {
									mass: 1,
									stiffness: n,
									damping: i
								})
							} else {
								var o = function(t) {
									var e, r, {
										duration: n = 800,
										bounce: i = .3,
										velocity: o = 0,
										mass: a = 1
									} = t;
									tO(n <= t7(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
									var s = 1 - i;
									s = c(.05, 1, s), n = c(.01, 10, n / 1e3), s < 1 ? (e = t => {
										var e = t * s,
											r = e * n;
										return .001 - (e - o) / nB(t, s) * Math.exp(-r)
									}, r = t => {
										var r = t * s * n,
											i = Math.pow(s, 2) * Math.pow(t, 2) * n,
											a = Math.exp(-r),
											l = nB(Math.pow(t, 2), s);
										return (r * o + o - i) * a * (-e(t) + .001 > 0 ? -1 : 1) / l
									}) : (e = t => -.001 + Math.exp(-t * n) * ((t - o) * n + 1), r = t => n * n * (o - t) * Math.exp(-t * n));
									var l = function(t, e, r) {
										for (var n = r, i = 1; i < 12; i++) n -= t(n) / e(n);
										return n
									}(e, r, 5 / n);
									if (n = t7(n), isNaN(l)) return {
										stiffness: 100,
										damping: 10,
										duration: n
									};
									var u = Math.pow(l, 2) * a;
									return {
										stiffness: u,
										damping: 2 * s * Math.sqrt(a * u),
										duration: n
									}
								}(nC(nC({}, t), {}, {
									velocity: 0
								}));
								(e = nC(nC(nC({}, e), o), {}, {
									mass: 1
								})).isResolvedFromDuration = !0
							} return e
					}(nC(nC({}, l), {}, {
						velocity: -((l.velocity || 0) / 1e3)
					})),
					P = b || 0,
					w = m / (2 * Math.sqrt(v * y)),
					j = d - p,
					x = Math.sqrt(v / y) / 1e3,
					S = 5 > Math.abs(j);
				if (u || (u = S ? nk : nV), h || (h = S ? nR : nL), w < 1) r = nB(x, w), n = (P + w * x * j) / r, t = t => d - Math.exp(-w * x * t) * (n * Math.sin(r * t) + j * Math.cos(r * t)), i = w * x * n + j * r, o = w * x * j - n * r, e = t => Math.exp(-w * x * t) * (i * Math.sin(r * t) + o * Math.cos(r * t));
				else if (1 === w) {
					t = t => d - Math.exp(-x * t) * (j + (P + x * j) * t);
					var E = P + x * j;
					e = t => Math.exp(-x * t) * (x * E * t - P)
				} else {
					var D = x * Math.sqrt(w * w - 1);
					t = t => {
						var e = Math.exp(-w * x * t),
							r = Math.min(D * t, 300);
						return d - e * ((P + w * x * j) * Math.sinh(r) + D * j * Math.cosh(r)) / D
					};
					var T = (P + w * x * j) / D,
						A = w * x * T - j * D,
						M = w * x * j - T * D;
					e = t => {
						var e = Math.exp(-w * x * t),
							r = Math.min(D * t, 300);
						return e * (A * Math.sinh(r) + M * Math.cosh(r))
					}
				}
				var C = {
					calculatedDuration: O && g || null,
					velocity: t => t7(e(t)),
					next: a => {
						if (!O && w < 1) {
							var s = Math.exp(-w * x * a),
								l = Math.sin(r * a),
								c = Math.cos(r * a),
								p = d - s * (n * l + j * c);
							return f.done = Math.abs(t7(s * (i * l + o * c))) <= u && Math.abs(d - p) <= h, f.value = f.done ? d : p, f
						}
						var v = t(a);
						return O ? f.done = a >= g : f.done = Math.abs(t7(e(a))) <= u && Math.abs(d - v) <= h, f.value = f.done ? d : v, f
					},
					toString: () => {
						var t = Math.min(nD(C), 2e4),
							e = ed(e => C.next(t * e).value, t, 30);
						return t + "ms " + e
					},
					toTransition: () => {}
				};
				return C
			}

			function nz(t, e, r) {
				var n = Math.max(e - 5, 0);
				return ej(r - t(n), e - n)
			}

			function nN(t) {
				var e, r, {
						keyframes: n,
						velocity: i = 0,
						power: o = .8,
						timeConstant: a = 325,
						bounceDamping: s = 10,
						bounceStiffness: l = 500,
						modifyTarget: u,
						min: c,
						max: h,
						restDelta: p = .5,
						restSpeed: d
					} = t,
					f = n[0],
					v = {
						done: !1,
						value: f
					},
					m = o * i,
					y = f + m,
					g = void 0 === u ? y : u(y);
				g !== y && (m = g - f);
				var b = t => -m * Math.exp(-t / a),
					O = t => g + b(t),
					P = t => {
						var e = b(t),
							r = O(t);
						v.done = Math.abs(e) <= p, v.value = v.done ? g : r
					},
					w = t => {
						let n;
						if (n = v.value, void 0 !== c && n < c || void 0 !== h && n > h) {
							var i;
							e = t, r = nU({
								keyframes: [v.value, (i = v.value, void 0 === c ? h : void 0 === h || Math.abs(c - i) < Math.abs(h - i) ? c : h)],
								velocity: nz(O, t, v.value),
								damping: s,
								stiffness: l,
								restDelta: p,
								restSpeed: d
							})
						}
					};
				return w(0), {
					calculatedDuration: null,
					next: t => {
						var n = !1;
						return (r || void 0 !== e || (n = !0, P(t), w(t)), void 0 !== e && t >= e) ? r.next(t - e) : (n || P(t), v)
					}
				}
			}
			nU.applyToOptions = t => {
				var e = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
						r = arguments.length > 2 ? arguments[2] : void 0,
						n = r(nA(nA({}, t), {}, {
							keyframes: [0, e]
						})),
						i = Math.min(nD(n), 2e4);
					return {
						type: "keyframes",
						ease: t => n.next(i * t).value / e,
						duration: i / 1e3
					}
				}(t, 100, nU);
				return t.ease = e.ease, t.duration = t7(e.duration), t.type = "keyframes", t
			};
			var nW = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

			function nX(t, e, r, n) {
				return t === e && r === n ? tW : i => 0 === i || 1 === i ? i : nW(function(t, e, r, n, i) {
					var o, a, s = 0;
					do(o = nW(a = e + (r - e) / 2, n, i) - t) > 0 ? r = a : e = a; while (Math.abs(o) > 1e-7 && ++s < 12);
					return a
				}(i, 0, 1, t, r), e, n)
			}
			var nY = nX(.42, 0, 1, 1),
				nH = nX(0, 0, .58, 1),
				nq = nX(.42, 0, .58, 1),
				nG = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
				nK = t => e => 1 - t(1 - e),
				n$ = nX(.33, 1.53, .69, .99),
				nZ = nK(n$),
				nQ = nG(nZ),
				nJ = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * nZ(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
				n0 = t => 1 - Math.sin(Math.acos(t)),
				n1 = nK(n0),
				n2 = nG(n0),
				n3 = {
					linear: tW,
					easeIn: nY,
					easeInOut: nq,
					easeOut: nH,
					circIn: n0,
					circInOut: n2,
					circOut: n1,
					backIn: nZ,
					backInOut: nQ,
					backOut: n$,
					anticipate: nJ
				},
				n5 = t => {
					if (eh(t)) {
						tP(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
						var [e, r, n, i] = t;
						return nX(e, r, n, i)
					}
					return "string" == typeof t ? (tP(void 0 !== n3[t], "Invalid easing type '".concat(t, "'"), "invalid-easing-type"), n3[t]) : t
				},
				n4 = (t, e, r) => {
					var n = e - t;
					return n ? (r - t) / n : 1
				};

			function n8(t) {
				var e, r, {
						duration: n = 300,
						keyframes: i,
						times: o,
						ease: a = "easeInOut"
					} = t,
					s = Array.isArray(a) && "number" != typeof a[0] ? a.map(n5) : n5(a),
					l = {
						done: !1,
						value: i[0]
					},
					u = function(t, e) {
						var {
							clamp: r = !0,
							ease: n,
							mixer: i
						} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.length;
						if (tP(o === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === o) return () => e[0];
						if (2 === o && e[0] === e[1]) return () => e[1];
						var a = t[0] === t[1];
						t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
						var s = function(t, e, r) {
								for (var n = [], i = r || tX.mix || nS, o = t.length - 1, a = 0; a < o; a++) {
									var s = i(t[a], t[a + 1]);
									e && (s = nu(Array.isArray(e) ? e[a] || tW : e, s)), n.push(s)
								}
								return n
							}(e, n, i),
							l = s.length,
							u = r => {
								if (a && r < t[0]) return e[0];
								var n = 0;
								if (l > 1)
									for (; n < t.length - 2 && !(r < t[n + 1]); n++);
								var i = n4(t[n], t[n + 1], r);
								return s[n](i)
							};
						return r ? e => u(c(t[0], t[o - 1], e)) : u
					}((r = o && o.length === i.length ? o : (! function(t, e) {
						for (var r = t[t.length - 1], n = 1; n <= e; n++) {
							var i = n4(0, e, n);
							t.push(e6(r, 1, i))
						}
					}(e = [0], i.length - 1), e), r.map(t => t * n)), i, {
						ease: Array.isArray(s) ? s : i.map(() => s || nq).splice(0, i.length - 1)
					});
				return {
					calculatedDuration: n,
					next: t => (l.value = u(t), l.done = t >= n, l)
				}
			}
			var n9 = {
				decay: nN,
				inertia: nN,
				tween: n8,
				keyframes: n8,
				spring: nU
			};

			function n6(t) {
				"string" == typeof t.type && (t.type = n9[t.type])
			}

			function n7(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function it(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? n7(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n7(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var ie = t => t / 100;
			class ir extends ec {
				constructor(t) {
					super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
						done: !1,
						value: void 0
					}, this.stop = () => {
						var t, e, {
							motionValue: r
						} = this.options;
						r && r.updatedAt !== ew.now() && this.tick(ew.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), null == (t = (e = this.options).onStop) || t.call(e))
					}, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
				}
				initAnimation() {
					var {
						options: t
					} = this;
					n6(t);
					var {
						type: e = n8,
						repeat: r = 0,
						repeatDelay: n = 0,
						repeatType: i,
						velocity: o = 0
					} = t, {
						keyframes: a
					} = t, s = e || n8;
					s !== n8 && "number" != typeof a[0] && (this.mixKeyframes = nu(ie, nS(a[0], a[1])), a = [0, 100]);
					var l = s(it(it({}, t), {}, {
						keyframes: a
					}));
					"mirror" === i && (this.mirroredGenerator = s(it(it({}, t), {}, {
						keyframes: [...a].reverse(),
						velocity: -o
					}))), null === l.calculatedDuration && (l.calculatedDuration = nD(l));
					var {
						calculatedDuration: u
					} = l;
					this.calculatedDuration = u, this.resolvedDuration = u + n, this.totalDuration = this.resolvedDuration * (r + 1) - n, this.generator = l
				}
				updateTime(t) {
					var e = Math.round(t - this.startTime) * this.playbackSpeed;
					null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
				}
				tick(t) {
					var e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						{
							generator: n,
							totalDuration: i,
							mixKeyframes: o,
							mirroredGenerator: a,
							resolvedDuration: s,
							calculatedDuration: l
						} = this;
					if (null === this.startTime) return n.next(0);
					var {
						delay: u = 0,
						keyframes: h,
						repeat: p,
						repeatType: d,
						repeatDelay: f,
						type: v,
						onUpdate: m,
						finalKeyframe: y
					} = this.options;
					this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), r ? this.currentTime = t : this.updateTime(t);
					var g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
						b = this.playbackSpeed >= 0 ? g < 0 : g > i;
					this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
					var O = this.currentTime,
						P = n;
					if (p) {
						var w = Math.min(this.currentTime, i) / s,
							j = Math.floor(w),
							x = w % 1;
						!x && w >= 1 && (x = 1), 1 === x && j--, (j = Math.min(j, p + 1)) % 2 && ("reverse" === d ? (x = 1 - x, f && (x -= f / s)) : "mirror" === d && (P = a)), O = c(0, 1, x) * s
					}
					b ? (this.delayState.value = h[0], e = this.delayState) : e = P.next(O), o && !b && (e.value = o(e.value));
					var {
						done: S
					} = e;
					b || null === l || (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
					var E = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
					return E && v !== nN && (e.value = eu(h, this.options, y, this.speed)), m && m(e.value), E && this.finish(), e
				}
				then(t, e) {
					return this.finished.then(t, e)
				}
				get duration() {
					return this.calculatedDuration / 1e3
				}
				get iterationDuration() {
					var {
						delay: t = 0
					} = this.options || {};
					return this.duration + t / 1e3
				}
				get time() {
					return this.currentTime / 1e3
				}
				set time(t) {
					t = t7(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
				}
				getGeneratorVelocity() {
					var t = this.currentTime;
					if (t <= 0) return this.options.velocity || 0;
					if (this.generator.velocity) return this.generator.velocity(t);
					var e = this.generator.next(t).value;
					return nz(t => this.generator.next(t).value, t, e)
				}
				get speed() {
					return this.playbackSpeed
				}
				set speed(t) {
					var e = this.playbackSpeed !== t;
					e && this.driver && this.updateTime(ew.now()), this.playbackSpeed = t, e && this.driver && (this.time = this.currentTime / 1e3)
				}
				play() {
					if (!this.isStopped) {
						var t, e, {
							driver: r = nE,
							startTime: n
						} = this.options;
						this.driver || (this.driver = r(t => this.tick(t))), null == (t = (e = this.options).onPlay) || t.call(e);
						var i = this.driver.now();
						"finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = null != n ? n : i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
					}
				}
				pause() {
					this.state = "paused", this.updateTime(ew.now()), this.holdTime = this.currentTime
				}
				complete() {
					"running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
				}
				finish() {
					var t, e;
					this.notifyFinished(), this.teardown(), this.state = "finished", null == (t = (e = this.options).onComplete) || t.call(e)
				}
				cancel() {
					var t, e;
					this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), null == (t = (e = this.options).onCancel) || t.call(e)
				}
				teardown() {
					this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
				}
				stopDriver() {
					this.driver && (this.driver.stop(), this.driver = void 0)
				}
				sample(t) {
					return this.startTime = 0, this.tick(t, !0)
				}
				attachTimeline(t) {
					var e;
					return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), null == (e = this.driver) || e.stop(), t.observe(this)
				}
			}
			var ii = {
					anticipate: nJ,
					backInOut: nQ,
					circInOut: n2
				},
				io = ["motionValue", "onUpdate", "onComplete", "element"];

			function ia(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function is(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ia(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ia(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			class il extends eg {
				constructor(t) {
					! function(t) {
						"string" == typeof t.ease && t.ease in ii && (t.ease = ii[t.ease])
					}(t), n6(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
				}
				updateMotionValue(t) {
					var e = this.options,
						{
							motionValue: r,
							onUpdate: n,
							onComplete: i,
							element: o
						} = e,
						a = (0, t6.A)(e, io);
					if (r) {
						if (void 0 !== t) return void r.set(t);
						var s = new ir(is(is({}, a), {}, {
								autoplay: !1
							})),
							l = Math.max(10, ew.now() - this.startTime),
							u = c(0, 10, l - 10),
							h = s.sample(l).value,
							{
								name: p
							} = this.options;
						o && p && en(o, p, h), r.setWithVelocity(s.sample(Math.max(0, l - u)).value, h, u), s.stop()
					}
				}
			}
			var iu = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (W.test(t) || "0" === t) && !t.startsWith("url("));

			function ic(t) {
				t.duration = 0, t.type = "keyframes"
			}
			var ih = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
				ip = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
				id = ei(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
				iv = ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType", "keyframes", "name", "motionValue", "element"];

			function im(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function iy(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? im(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			class ig extends ec {
				constructor(t) {
					var e, {
							autoplay: r = !0,
							delay: n = 0,
							type: i = "keyframes",
							repeat: o = 0,
							repeatDelay: a = 0,
							repeatType: s = "loop",
							keyframes: l,
							name: u,
							motionValue: c,
							element: h
						} = t,
						p = (0, t6.A)(t, iv);
					super(), this.stop = () => {
						var t, e;
						this._animation && (this._animation.stop(), null == (e = this.stopTimeline) || e.call(this)), null == (t = this.keyframeResolver) || t.cancel()
					}, this.createdAt = ew.now();
					var d = iy({
							autoplay: r,
							delay: n,
							type: i,
							repeat: o,
							repeatDelay: a,
							repeatType: s,
							name: u,
							motionValue: c,
							element: h
						}, p),
						f = (null == h ? void 0 : h.KeyframeResolver) || t3;
					this.keyframeResolver = new f(l, (t, e, r) => this.onKeyframesResolved(t, e, d, !r), u, c, h), null == (e = this.keyframeResolver) || e.scheduleResolve()
				}
				onKeyframesResolved(t, e, r, n) {
					this.keyframeResolver = void 0;
					var i, o, {
						name: a,
						type: s,
						velocity: l,
						delay: u,
						isHandoff: c,
						onUpdate: h
					} = r;
					this.resolvedAt = ew.now();
					var p = !0;
					! function(t, e, r, n) {
						var i = t[0];
						if (null === i) return !1;
						if ("display" === e || "visibility" === e) return !0;
						var o = t[t.length - 1],
							a = iu(i, e),
							s = iu(o, e);
						return tO(a === s, "You are trying to animate ".concat(e, ' from "').concat(i, '" to "').concat(o, '". "').concat(a ? o : i, '" is not an animatable value.'), "value-not-animatable"), !!a && !!s && (function(t) {
							var e = t[0];
							if (1 === t.length) return !0;
							for (var r = 0; r < t.length; r++)
								if (t[r] !== e) return !0
						}(t) || ("spring" === r || em(r)) && n)
					}(t, a, s, l) && (p = !1, (tX.instantAnimations || !u) && (null == h || h(eu(t, r, e))), t[0] = t[t.length - 1], ic(r), r.repeat = 0);
					var d = iy(iy({
							startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
							finalKeyframe: e
						}, r), {}, {
							keyframes: t
						}),
						f = p && !c && function(t) {
							var e, {
								motionValue: r,
								name: n,
								repeatDelay: i,
								repeatType: o,
								damping: a,
								type: s,
								keyframes: l
							} = t;
							if (!((null == r || null == (e = r.owner) ? void 0 : e.current) instanceof HTMLElement)) return !1;
							var {
								onUpdate: u,
								transformTemplate: c
							} = r.owner.getProps();
							return id() && n && (eb.has(n) || ip.has(n) && function(t) {
								for (var e = 0; e < t.length; e++)
									if ("string" == typeof t[e] && ih.test(t[e])) return !0;
								return !1
							}(l)) && ("transform" !== n || !c) && !u && !i && "mirror" !== o && 0 !== a && "inertia" !== s
						}(d),
						v = null == (i = d.motionValue) || null == (i = i.owner) ? void 0 : i.current;
					if (f) try {
						o = new il(iy(iy({}, d), {}, {
							element: v
						}))
					} catch (t) {
						o = new ir(d)
					} else o = new ir(d);
					o.finished.then(() => {
						this.notifyFinished()
					}).catch(tW), this.pendingTimeline && (this.stopTimeline = o.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = o
				}
				get finished() {
					return this._animation ? this.animation.finished : this._finished
				}
				then(t, e) {
					return this.finished.finally(t).then(() => {})
				}
				get animation() {
					if (!this._animation) {
						var t;
						null == (t = this.keyframeResolver) || t.resume(), t0 = !0, t2(), t1(), t0 = !1
					}
					return this._animation
				}
				get duration() {
					return this.animation.duration
				}
				get iterationDuration() {
					return this.animation.iterationDuration
				}
				get time() {
					return this.animation.time
				}
				set time(t) {
					this.animation.time = t
				}
				get speed() {
					return this.animation.speed
				}
				get state() {
					return this.animation.state
				}
				set speed(t) {
					this.animation.speed = t
				}
				get startTime() {
					return this.animation.startTime
				}
				attachTimeline(t) {
					return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
				}
				play() {
					this.animation.play()
				}
				pause() {
					this.animation.pause()
				}
				complete() {
					this.animation.complete()
				}
				cancel() {
					var t;
					this._animation && this.animation.cancel(), null == (t = this.keyframeResolver) || t.cancel()
				}
			}
			var ib = {
					type: "spring",
					stiffness: 500,
					damping: 25,
					restSpeed: 10
				},
				iO = {
					type: "keyframes",
					duration: .8
				},
				iP = {
					type: "keyframes",
					ease: [.25, .1, .35, 1],
					duration: .3
				},
				iw = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

			function ij(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ix(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ij(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ij(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var iS = function(t, e, r) {
					var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
						i = arguments.length > 4 ? arguments[4] : void 0,
						o = arguments.length > 5 ? arguments[5] : void 0;
					return a => {
						var s = nn(n, t) || {},
							u = s.delay || n.delay || 0,
							{
								elapsed: c = 0
							} = n;
						c -= t7(u);
						var h = ix(ix({
							keyframes: Array.isArray(r) ? r : [null, r],
							ease: "easeOut",
							velocity: e.getVelocity()
						}, s), {}, {
							delay: -c,
							onUpdate: t => {
								e.set(t), s.onUpdate && s.onUpdate(t)
							},
							onComplete: () => {
								a(), s.onComplete && s.onComplete()
							},
							name: t,
							motionValue: e,
							element: o ? void 0 : i
						});
						! function(t) {
							for (var e in t)
								if (!iw.has(e)) return !0;
							return !1
						}(s) && Object.assign(h, ((t, e) => {
							var {
								keyframes: r
							} = e;
							return r.length > 2 ? iO : l.has(t) ? t.startsWith("scale") ? {
								type: "spring",
								stiffness: 550,
								damping: 0 === r[1] ? 2 * Math.sqrt(550) : 30,
								restSpeed: 10
							} : ib : iP
						})(t, h)), h.duration && (h.duration = t7(h.duration)), h.repeatDelay && (h.repeatDelay = t7(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
						var p = !1;
						if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (ic(h), 0 === h.delay && (p = !0)), (tX.instantAnimations || tX.skipAnimations || null != i && i.shouldSkipAnimations || s.skipAnimations) && (p = !0, ic(h), h.delay = 0), h.allowFlatten = !s.type && !s.ease, p && !o && void 0 !== e.get()) {
							var d = eu(h.keyframes, s);
							if (void 0 !== d) return void tq.update(() => {
								h.onUpdate(d), h.onComplete()
							})
						}
						return s.isSync ? new ir(h) : new ig(h)
					}
				},
				iE = ["transition", "transitionEnd"];

			function iD(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function iT(t, e) {
				var r, n, i, {
						delay: o = 0,
						transitionOverride: a,
						type: s
					} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					{
						transition: l,
						transitionEnd: c
					} = e,
					h = (0, t6.A)(e, iE),
					p = t.getDefaultTransition(),
					d = null == (r = l = l ? nr(l, p) : p) ? void 0 : r.reduceMotion,
					f = null == (n = l) ? void 0 : n.skipAnimations;
				a && (l = a);
				var v = [],
					m = s && t.animationState && t.animationState.getState()[s],
					y = null == (i = l) ? void 0 : i.path;
				for (var g in y && y.animateVisualElement(t, h, l, o, v), h)
					if (0 === function() {
							var e, r = t.getValue(g, null != (e = t.latestValues[g]) ? e : null),
								n = h[g];
							if (void 0 === n || m && function(t, e) {
									var {
										protectedKeys: r,
										needsAnimating: n
									} = t, i = r.hasOwnProperty(e) && !0 !== n[e];
									return n[e] = !1, i
								}(m, g)) return 0;
							var i = function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = null != arguments[e] ? arguments[e] : {};
									e % 2 ? iD(Object(r), !0).forEach(function(e) {
										(0, u.A)(t, e, r[e])
									}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : iD(Object(r)).forEach(function(e) {
										Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
									})
								}
								return t
							}({
								delay: o
							}, nn(l || {}, g));
							f && (i.skipAnimations = !0);
							var a = r.get();
							if (void 0 !== a && !r.isAnimating() && !Array.isArray(n) && n === a && !i.velocity) return tq.update(() => r.set(n)), 0;
							var s = !1;
							if (window.MotionHandoffAnimation) {
								var c = t.props[r0];
								if (c) {
									var p = window.MotionHandoffAnimation(c, g, tq);
									null !== p && (i.startTime = p, s = !0)
								}
							}
							nl(t, g);
							var y = null != d ? d : t.shouldReduceMotion;
							r.start(iS(g, r, n, y && tf.has(g) ? {
								type: !1
							} : i, t, s));
							var b = r.animation;
							b && v.push(b)
						}()) continue;
				if (c) {
					var b = () => tq.update(() => {
						c && function(t, e) {
							var r = r6(t, e) || {},
								{
									transitionEnd: n = {},
									transition: i = {}
								} = r,
								o = (0, t6.A)(r, no);
							for (var a in o = ns(ns({}, o), n)) {
								var s, l = ni(s = o[a]) ? s[s.length - 1] || 0 : s;
								t.hasValue(a) ? t.getValue(a).set(l) : t.addValue(a, eE(l))
							}
						}(t, c)
					});
					v.length ? Promise.all(v).then(b) : b()
				}
				return v
			}

			function iA(t, e, r) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
					o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
					a = t.size,
					s = (a - 1) * n;
				return "function" == typeof r ? r(o, a) : 1 === i ? o * n : s - o * n
			}

			function iM(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function iC(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? iM(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : iM(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function ik(t, e) {
				var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					i = r6(t, e, "exit" === n.type ? null == (r = t.presenceContext) ? void 0 : r.custom : void 0),
					{
						transition: o = t.getDefaultTransition() || {}
					} = i || {};
				n.transitionOverride && (o = n.transitionOverride);
				var a = i ? () => Promise.all(iT(t, i, n)) : () => Promise.resolve(),
					s = t.variantChildren && t.variantChildren.size ? function() {
						var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							{
								delayChildren: i = 0,
								staggerChildren: a,
								staggerDirection: s
							} = o;
						return function(t, e) {
							var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
								n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
								i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
								o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
								a = arguments.length > 6 ? arguments[6] : void 0,
								s = [],
								l = function(l) {
									l.notify("AnimationStart", e), s.push(ik(l, e, iC(iC({}, a), {}, {
										delay: r + ("function" == typeof n ? 0 : n) + iA(t.variantChildren, l, n, i, o)
									})).then(() => l.notify("AnimationComplete", e)))
								};
							for (var u of t.variantChildren) l(u);
							return Promise.all(s)
						}(t, e, r, i, a, s, n)
					} : () => Promise.resolve(),
					{
						when: l
					} = o;
				if (!l) return Promise.all([a(), s(n.delay)]);
				var [u, c] = "beforeChildren" === l ? [a, s] : [s, a];
				return u().then(() => c())
			}
			var iV = ek.length;

			function iR(t, e) {
				if (!Array.isArray(e)) return !1;
				var r = e.length;
				if (r !== t.length) return !1;
				for (var n = 0; n < r; n++)
					if (e[n] !== t[n]) return !1;
				return !0
			}
			var iL = ["transition", "transitionEnd"];

			function iB(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function iI(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? iB(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : iB(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var iF = [...eC].reverse(),
				i_ = eC.length;

			function iU() {
				var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				return {
					isActive: t,
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {}
				}
			}

			function iz() {
				return {
					animate: iU(!0),
					whileInView: iU(),
					whileHover: iU(),
					whileTap: iU(),
					whileDrag: iU(),
					whileFocus: iU(),
					exit: iU()
				}
			}
			class iN extends r9 {
				constructor(t) {
					super(t), t.animationState || (t.animationState = function(t) {
						var e = e => Promise.all(e.map(e => {
								var {
									animation: r,
									options: n
								} = e;
								return function(t, e) {
									var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
									if (t.notify("AnimationStart", e), Array.isArray(e)) r = Promise.all(e.map(e => ik(t, e, n)));
									else if ("string" == typeof e) r = ik(t, e, n);
									else {
										var i = "function" == typeof e ? r6(t, e, n.custom) : e;
										r = Promise.all(iT(t, i, n))
									}
									return r.then(() => {
										t.notify("AnimationComplete", e)
									})
								}(t, r, n)
							})),
							r = iz(),
							n = !0,
							i = !1;

						function o(o) {
							for (var {
									props: a
								} = t, s = function t(e) {
									if (e) {
										if (!e.isControllingVariants) {
											var r = e.parent && t(e.parent) || {};
											return void 0 !== e.props.initial && (r.initial = e.props.initial), r
										}
										for (var n = {}, i = 0; i < iV; i++) {
											var o = ek[i],
												a = e.props[o];
											(eM(a) || !1 === a) && (n[o] = a)
										}
										return n
									}
								}(t.parent) || {}, l = [], u = new Set, c = {}, h = 1 / 0, p = 0; p < i_; p++)
								if (0 === function() {
										var e, d, f = iF[p],
											v = r[f],
											m = void 0 !== a[f] ? a[f] : s[f],
											y = eM(m),
											g = f === o ? v.isActive : null;
										!1 === g && (h = p);
										var b = m === s[f] && m !== a[f] && y;
										if (b && (n || i) && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = iI({}, c), !v.isActive && null === g || !m && !v.prevProp || eA(m) || "boolean" == typeof m) return 0;
										if ("exit" === f && v.isActive && !0 !== g) return v.prevResolvedValues && (c = iI(iI({}, c), v.prevResolvedValues)), 0;
										var O = (e = v.prevProp, "string" == typeof(d = m) ? d !== e : !!Array.isArray(d) && !iR(d, e)),
											P = O || f === o && v.isActive && !b && y || p > h && y,
											w = !1,
											j = Array.isArray(m) ? m : [m],
											x = j.reduce((e, r) => {
												var n, i = r6(t, r, "exit" === f ? null == (n = t.presenceContext) ? void 0 : n.custom : void 0);
												if (i) {
													var {
														transition: o,
														transitionEnd: a
													} = i, s = (0, t6.A)(i, iL);
													e = iI(iI(iI({}, e), s), a)
												}
												return e
											}, {});
										!1 === g && (x = {});
										var {
											prevResolvedValues: S = {}
										} = v, E = iI(iI({}, S), x), D = e => {
											P = !0, u.has(e) && (w = !0, u.delete(e)), v.needsAnimating[e] = !0;
											var r = t.getValue(e);
											r && (r.liveStyle = !1)
										};
										for (var T in E) {
											var A = x[T],
												M = S[T];
											!c.hasOwnProperty(T) && ((ni(A) && ni(M) ? !iR(A, M) || O : A !== M) ? null != A ? D(T) : u.add(T) : void 0 !== A && u.has(T) ? D(T) : v.protectedKeys[T] = !0)
										}
										v.prevProp = m, v.prevResolvedValues = x, v.isActive && (c = iI(iI({}, c), x)), (n || i) && t.blockInitialAnimation && (P = !1);
										var C = b && O,
											k = !C || w;
										P && k && l.push(...j.map(e => {
											var r = {
												type: f
											};
											if ("string" == typeof e && (n || i) && !C && t.manuallyAnimateOnMount && t.parent) {
												var {
													parent: o
												} = t, a = r6(o, e);
												if (o.enteringChildren && a) {
													var {
														delayChildren: s
													} = a.transition || {};
													r.delay = iA(o.enteringChildren, t, s)
												}
											}
											return {
												animation: e,
												options: r
											}
										}))
									}()) continue;
							if (u.size) {
								var d = {};
								if ("boolean" != typeof a.initial) {
									var f = r6(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
									f && f.transition && (d.transition = f.transition)
								}
								u.forEach(e => {
									var r = t.getBaseTarget(e),
										n = t.getValue(e);
									n && (n.liveStyle = !0), d[e] = null != r ? r : null
								}), l.push({
									animation: d
								})
							}
							var v = !!l.length;
							return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (v = !1), n = !1, i = !1, v ? e(l) : Promise.resolve()
						}
						return {
							animateChanges: o,
							setActive: function(e, n) {
								if (r[e].isActive === n) return Promise.resolve();
								null == (i = t.variantChildren) || i.forEach(t => {
									var r;
									return null == (r = t.animationState) ? void 0 : r.setActive(e, n)
								}), r[e].isActive = n;
								var i, a = o(e);
								for (var s in r) r[s].protectedKeys = {};
								return a
							},
							setAnimateFunction: function(r) {
								e = r(t)
							},
							getState: () => r,
							reset: () => {
								r = iz(), i = !0
							}
						}
					}(t))
				}
				updateAnimationControlsSubscription() {
					var {
						animate: t
					} = this.node.getProps();
					eA(t) && (this.unmountControls = t.subscribe(this.node))
				}
				mount() {
					this.updateAnimationControlsSubscription()
				}
				update() {
					var {
						animate: t
					} = this.node.getProps(), {
						animate: e
					} = this.node.prevProps || {};
					t !== e && this.updateAnimationControlsSubscription()
				}
				unmount() {
					var t;
					this.node.animationState.reset(), null == (t = this.unmountControls) || t.call(this)
				}
			}
			var iW = ["transition", "transitionEnd"],
				iX = 0;
			class iY extends r9 {
				constructor() {
					super(...arguments), this.id = iX++, this.isExitComplete = !1
				}
				update() {
					if (this.node.presenceContext) {
						var {
							isPresent: t,
							onExitComplete: e
						} = this.node.presenceContext, {
							isPresent: r
						} = this.node.prevPresenceContext || {};
						if (this.node.animationState && t !== r) {
							if (t && !1 === r) {
								if (this.isExitComplete) {
									var {
										initial: n,
										custom: i
									} = this.node.getProps();
									if ("string" == typeof n || "object" == typeof n && null !== n && !Array.isArray(n)) {
										var o = r6(this.node, n, i);
										if (o) {
											var a, {
													transition: s,
													transitionEnd: l
												} = o,
												u = (0, t6.A)(o, iW);
											for (var c in u) null == (a = this.node.getValue(c)) || a.jump(u[c])
										}
									}
									this.node.animationState.reset(), this.node.animationState.animateChanges()
								} else this.node.animationState.setActive("exit", !1);
								this.isExitComplete = !1;
								return
							}
							var h = this.node.animationState.setActive("exit", !t);
							e && !t && h.then(() => {
								this.isExitComplete = !0, e(this.id)
							})
						}
					}
				}
				mount() {
					var {
						register: t,
						onExitComplete: e
					} = this.node.presenceContext || {};
					e && e(this.id), t && (this.unmount = t(this.id))
				}
				unmount() {}
			}
			var iH = {
				x: !1,
				y: !1
			};

			function iq(t) {
				return [t("x"), t("y")]
			}

			function iG(t) {
				return t.max - t.min
			}

			function iK(t, e, r) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
				t.origin = n, t.originPoint = e6(e.min, e.max, t.origin), t.scale = iG(r) / iG(e), t.translate = e6(r.min, r.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
			}

			function i$(t, e, r, n) {
				iK(t.x, e.x, r.x, n ? n.originX : void 0), iK(t.y, e.y, r.y, n ? n.originY : void 0)
			}

			function iZ(t, e, r) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
				t.min = (n ? e6(r.min, r.max, n) : r.min) + e.min, t.max = t.min + iG(e)
			}

			function iQ(t, e, r) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					i = n ? e6(r.min, r.max, n) : r.min;
				t.min = e.min - i, t.max = t.min + iG(e)
			}

			function iJ(t, e, r, n) {
				iQ(t.x, e.x, r.x, null == n ? void 0 : n.x), iQ(t.y, e.y, r.y, null == n ? void 0 : n.y)
			}
			var i0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
				i1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);

			function i2(t, e, r) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
					passive: !0
				};
				return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n)
			}
			var i3 = r(4844);

			function i5(t) {
				return (0, i3.G)(t) && "ownerSVGElement" in t
			}

			function i4(t, e, r) {
				if (null == t) return [];
				if (t instanceof EventTarget) return [t];
				if ("string" == typeof t) {
					var n, i = document;
					e && (i = e.current);
					var o = null != (n = null == r ? void 0 : r[t]) ? n : i.querySelectorAll(t);
					return o ? Array.from(o) : []
				}
				return Array.from(t).filter(t => null != t)
			}
			var i8 = new WeakMap,
				i9 = (t, e, r) => (n, i) => i && i[0] ? i[0][t + "Size"] : i5(n) && "getBBox" in n ? n.getBBox()[e] : n[r],
				i6 = i9("inline", "width", "offsetWidth"),
				i7 = i9("block", "height", "offsetHeight");

			function ot(t) {
				var e, {
					target: r,
					borderBoxSize: n
				} = t;
				null == (e = i8.get(r)) || e.forEach(t => {
					t(r, {
						get width() {
							return i6(r, n)
						},
						get height() {
							return i7(r, n)
						}
					})
				})
			}

			function oe(t) {
				t.forEach(ot)
			}
			var or = new Set;

			function on(t, e) {
				var r;
				return "function" == typeof t ? (or.add(t), a || (a = () => {
					var t = {
						get width() {
							return window.innerWidth
						},
						get height() {
							return window.innerHeight
						}
					};
					or.forEach(e => e(t))
				}, window.addEventListener("resize", a)), () => {
					or.delete(t), or.size || "function" != typeof a || (window.removeEventListener("resize", a), a = void 0)
				}) : (!o && "u" > typeof ResizeObserver && (o = new ResizeObserver(oe)), (r = i4(t)).forEach(t => {
					var r, n = i8.get(t);
					n || (n = new Set, i8.set(t, n)), n.add(e), null == (r = o) || r.observe(t)
				}), () => {
					r.forEach(t => {
						var r, n = i8.get(t);
						null == n || n.delete(e), null != n && n.size || null == (r = o) || r.unobserve(t)
					})
				})
			}
			var oi = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

			function oo(t) {
				return {
					point: {
						x: t.pageX,
						y: t.pageY
					}
				}
			}

			function oa(t, e, r, n) {
				return i2(t, e, t => oi(t) && r(t, oo(t)), n)
			}
			var os = t => {
					var {
						current: e
					} = t;
					return e ? e.ownerDocument.defaultView : null
				},
				ol = (t, e) => Math.abs(t - e);

			function ou(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function oc(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ou(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ou(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var oh = new Set(["auto", "scroll"]);
			class op {
				constructor(t, e) {
					var {
						transformPagePoint: r,
						contextWindow: n = window,
						dragSnapToOrigin: i = !1,
						distanceThreshold: o = 3,
						element: a
					} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
							this.handleScroll(t.target)
						}, this.onWindowScroll = () => {
							this.handleScroll(window)
						}, this.updatePoint = () => {
							if (this.lastMoveEvent && this.lastMoveEventInfo) {
								this.lastRawMoveEventInfo && (this.lastMoveEventInfo = od(this.lastRawMoveEventInfo, this.transformPagePoint));
								var t, e, r = ov(this.lastMoveEventInfo, this.history),
									n = null !== this.startEvent,
									i = (t = r.offset, e = {
										x: 0,
										y: 0
									}, Math.sqrt(ol(t.x, e.x) ** 2 + ol(t.y, e.y) ** 2) >= this.distanceThreshold);
								if (n || i) {
									var {
										point: o
									} = r, {
										timestamp: a
									} = tK;
									this.history.push(oc(oc({}, o), {}, {
										timestamp: a
									}));
									var {
										onStart: s,
										onMove: l
									} = this.handlers;
									n || (s && s(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, r)
								}
							}
						}, this.handlePointerMove = (t, e) => {
							this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = od(e, this.transformPagePoint), tq.update(this.updatePoint, !0)
						}, this.handlePointerUp = (t, e) => {
							this.end();
							var {
								onEnd: r,
								onSessionEnd: n,
								resumeAnimation: i
							} = this.handlers;
							if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), this.lastMoveEvent && this.lastMoveEventInfo) {
								var o = ov("pointercancel" === t.type ? this.lastMoveEventInfo : od(e, this.transformPagePoint), this.history);
								this.startEvent && r && r(t, o), n && n(t, o)
							}
						}, !oi(t)) return;
					this.dragSnapToOrigin = i, this.handlers = e, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = n || window;
					var s = od(oo(t), this.transformPagePoint),
						{
							point: l
						} = s,
						{
							timestamp: u
						} = tK;
					this.history = [oc(oc({}, l), {}, {
						timestamp: u
					})];
					var {
						onSessionStart: c
					} = e;
					c && c(t, ov(s, this.history));
					var h = {
						passive: !0,
						capture: !0
					};
					this.removeListeners = nu(oa(this.contextWindow, "pointermove", this.handlePointerMove, h), oa(this.contextWindow, "pointerup", this.handlePointerUp, h), oa(this.contextWindow, "pointercancel", this.handlePointerUp, h)), a && this.startScrollTracking(a)
				}
				startScrollTracking(t) {
					for (var e = t.parentElement; e;) {
						var r = getComputedStyle(e);
						(oh.has(r.overflowX) || oh.has(r.overflowY)) && this.scrollPositions.set(e, {
							x: e.scrollLeft,
							y: e.scrollTop
						}), e = e.parentElement
					}
					this.scrollPositions.set(window, {
						x: window.scrollX,
						y: window.scrollY
					}), window.addEventListener("scroll", this.onElementScroll, {
						capture: !0
					}), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
						window.removeEventListener("scroll", this.onElementScroll, {
							capture: !0
						}), window.removeEventListener("scroll", this.onWindowScroll)
					}
				}
				handleScroll(t) {
					var e = this.scrollPositions.get(t);
					if (e) {
						var r = t === window,
							n = r ? {
								x: window.scrollX,
								y: window.scrollY
							} : {
								x: t.scrollLeft,
								y: t.scrollTop
							},
							i = {
								x: n.x - e.x,
								y: n.y - e.y
							};
						(0 !== i.x || 0 !== i.y) && (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(t, n), tq.update(this.updatePoint, !0))
					}
				}
				updateHandlers(t) {
					this.handlers = t
				}
				end() {
					this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), tG(this.updatePoint)
				}
			}

			function od(t, e) {
				return e ? {
					point: e(t.point)
				} : t
			}

			function of(t, e) {
				return {
					x: t.x - e.x,
					y: t.y - e.y
				}
			}

			function ov(t, e) {
				var {
					point: r
				} = t;
				return {
					point: r,
					delta: of(r, om(e)),
					offset: of(r, e[0]),
					velocity: function(t) {
						if (t.length < 2) return {
							x: 0,
							y: 0
						};
						for (var e = t.length - 1, r = null, n = om(t); e >= 0 && (r = t[e], !(n.timestamp - r.timestamp > t7(.1)));) e--;
						if (!r) return {
							x: 0,
							y: 0
						};
						r === t[0] && t.length > 2 && n.timestamp - r.timestamp > 2 * t7(.1) && (r = t[1]);
						var i = (n.timestamp - r.timestamp) / 1e3;
						if (0 === i) return {
							x: 0,
							y: 0
						};
						var o = {
							x: (n.x - r.x) / i,
							y: (n.y - r.y) / i
						};
						return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
					}(e)
				}
			}

			function om(t) {
				return t[t.length - 1]
			}

			function oy(t, e, r) {
				return {
					min: void 0 !== e ? t.min + e : void 0,
					max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
				}
			}

			function og(t, e) {
				var r = e.min - t.min,
					n = e.max - t.max;
				return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
					min: r,
					max: n
				}
			}

			function ob(t, e, r) {
				return {
					min: oO(t, e),
					max: oO(t, r)
				}
			}

			function oO(t, e) {
				return "number" == typeof t ? t : t[e] || 0
			}

			function oP(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ow(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? oP(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : oP(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var oj = new WeakMap;
			class ox {
				constructor(t) {
					this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
						x: 0,
						y: 0
					}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tp(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
				}
				start(t) {
					var {
						snapToCursor: e = !1,
						distanceThreshold: r
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
						presenceContext: n
					} = this.visualElement;
					if (!n || !1 !== n.isPresent) {
						var i = t => {
								e && this.snapToCursor(oo(t).point), this.stopAnimation()
							},
							o = (t, e) => {
								var {
									drag: r,
									dragPropagation: n,
									onDragStart: i
								} = this.getProps();
								if (!r || n || (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
										if ("x" === t || "y" === t)
											if (iH[t]) return null;
											else return iH[t] = !0, () => {
												iH[t] = !1
											};
										return iH.x || iH.y ? null : (iH.x = iH.y = !0, () => {
											iH.x = iH.y = !1
										})
									}(r), this.openDragLock)) {
									this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iq(t => {
										var e = this.getAxisMotionValue(t).get() || 0;
										if (M.test(e)) {
											var {
												projection: r
											} = this.visualElement;
											if (r && r.layout) {
												var n = r.layout.layoutBox[t];
												n && (e = iG(n) * (parseFloat(e) / 100))
											}
										}
										this.originPoint[t] = e
									}), i && tq.update(() => i(t, e), !1, !0), nl(this.visualElement, "transform");
									var {
										animationState: o
									} = this.visualElement;
									o && o.setActive("whileDrag", !0)
								}
							},
							a = (t, e) => {
								this.latestPointerEvent = t, this.latestPanInfo = e;
								var {
									dragPropagation: r,
									dragDirectionLock: n,
									onDirectionLock: i,
									onDrag: o
								} = this.getProps();
								if (r || this.openDragLock) {
									var {
										offset: a
									} = e;
									if (n && null === this.currentDirection) {
										this.currentDirection = function(t) {
											var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
												r = null;
											return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
										}(a), null !== this.currentDirection && i && i(this.currentDirection);
										return
									}
									this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), o && tq.update(() => o(t, e), !1, !0)
								}
							},
							s = (t, e) => {
								this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
							},
							l = () => {
								var {
									dragSnapToOrigin: t
								} = this.getProps();
								(t || this.constraints) && this.startAnimation({
									x: 0,
									y: 0
								})
							},
							{
								dragSnapToOrigin: u
							} = this.getProps();
						this.panSession = new op(t, {
							onSessionStart: i,
							onStart: o,
							onMove: a,
							onSessionEnd: s,
							resumeAnimation: l
						}, {
							transformPagePoint: this.visualElement.getTransformPagePoint(),
							dragSnapToOrigin: u,
							distanceThreshold: r,
							contextWindow: os(this.visualElement),
							element: this.visualElement.current
						})
					}
				}
				stop(t, e) {
					var r = t || this.latestPointerEvent,
						n = e || this.latestPanInfo,
						i = this.isDragging;
					if (this.cancel(), i && n && r) {
						var {
							velocity: o
						} = n;
						this.startAnimation(o);
						var {
							onDragEnd: a
						} = this.getProps();
						a && tq.postRender(() => a(r, n))
					}
				}
				cancel() {
					this.isDragging = !1;
					var {
						projection: t,
						animationState: e
					} = this.visualElement;
					t && (t.isAnimationBlocked = !1), this.endPanSession();
					var {
						dragPropagation: r
					} = this.getProps();
					!r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
				}
				endPanSession() {
					this.panSession && this.panSession.end(), this.panSession = void 0
				}
				updateAxis(t, e, r) {
					var {
						drag: n
					} = this.getProps();
					if (r && oE(t, n, this.currentDirection)) {
						var i = this.getAxisMotionValue(t),
							o = this.originPoint[t] + r[t];
						this.constraints && this.constraints[t] && (o = function(t, e, r) {
							var {
								min: n,
								max: i
							} = e;
							return void 0 !== n && t < n ? t = r ? e6(n, t, r.min) : Math.max(t, n) : void 0 !== i && t > i && (t = r ? e6(i, t, r.max) : Math.min(t, i)), t
						}(o, this.constraints[t], this.elastic[t])), i.set(o)
					}
				}
				resolveConstraints() {
					var t, {
							dragConstraints: e,
							dragElastic: r
						} = this.getProps(),
						n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (t = this.visualElement.projection) ? void 0 : t.layout,
						i = this.constraints;
					e && r2(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, e) {
						var {
							top: r,
							left: n,
							bottom: i,
							right: o
						} = e;
						return {
							x: oy(t.x, n, o),
							y: oy(t.y, r, i)
						}
					}(n.layoutBox, e) : this.constraints = !1, this.elastic = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .35;
						return !1 === t ? t = 0 : !0 === t && (t = .35), {
							x: ob(t, "left", "right"),
							y: ob(t, "top", "bottom")
						}
					}(r), i !== this.constraints && !r2(e) && n && this.constraints && !this.hasMutatedConstraints && iq(t => {
						var e, r, i;
						!1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = n.layoutBox[t], r = this.constraints[t], i = {}, void 0 !== r.min && (i.min = r.min - e.min), void 0 !== r.max && (i.max = r.max - e.min), i))
					})
				}
				resolveRefConstraints() {
					var t, {
						dragConstraints: e,
						onMeasureDragConstraints: r
					} = this.getProps();
					if (!e || !r2(e)) return !1;
					var n = e.current;
					tP(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
					var {
						projection: i
					} = this.visualElement;
					if (!i || !i.layout) return !1;
					i.root && (i.root.scroll = void 0, i.root.updateScroll());
					var o = function(t, e, r) {
							var n = rg(t, r),
								{
									scroll: i
								} = e;
							return i && (rf(n.x, i.offset.x), rf(n.y, i.offset.y)), n
						}(n, i.root, this.visualElement.getTransformPagePoint()),
						a = (t = i.layout.layoutBox, {
							x: og(t.x, o.x),
							y: og(t.y, o.y)
						});
					if (r) {
						var s = r(function(t) {
							var {
								x: e,
								y: r
							} = t;
							return {
								top: r.min,
								right: e.max,
								bottom: r.max,
								left: e.min
							}
						}(a));
						this.hasMutatedConstraints = !!s, s && (a = ra(s))
					}
					return a
				}
				startAnimation(t) {
					var {
						drag: e,
						dragMomentum: r,
						dragElastic: n,
						dragTransition: i,
						dragSnapToOrigin: o,
						onDragTransitionEnd: a
					} = this.getProps(), s = this.constraints || {};
					return Promise.all(iq(a => {
						if (oE(a, e, this.currentDirection)) {
							var l = s && s[a] || {};
							(!0 === o || o === a) && (l = {
								min: 0,
								max: 0
							});
							var u = ow(ow({
								type: "inertia",
								velocity: r ? t[a] : 0,
								bounceStiffness: n ? 200 : 1e6,
								bounceDamping: n ? 40 : 1e7,
								timeConstant: 750,
								restDelta: 1,
								restSpeed: 10
							}, i), l);
							return this.startAxisValueAnimation(a, u)
						}
					})).then(a)
				}
				startAxisValueAnimation(t, e) {
					var r = this.getAxisMotionValue(t);
					return nl(this.visualElement, t), r.start(iS(t, r, 0, e, this.visualElement, !1))
				}
				stopAnimation() {
					iq(t => this.getAxisMotionValue(t).stop())
				}
				getAxisMotionValue(t) {
					var e, r = "_drag".concat(t.toUpperCase());
					return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null != (e = this.visualElement.latestValues[t]) ? e : 0)
				}
				snapToCursor(t) {
					iq(e => {
						var {
							drag: r
						} = this.getProps();
						if (oE(e, r, this.currentDirection)) {
							var {
								projection: n
							} = this.visualElement, i = this.getAxisMotionValue(e);
							if (n && n.layout) {
								var {
									min: o,
									max: a
								} = n.layout.layoutBox[e], s = i.get() || 0;
								i.set(t[e] - e6(o, a, .5) + s)
							}
						}
					})
				}
				scalePositionWithinConstraints() {
					if (this.visualElement.current) {
						var {
							drag: t,
							dragConstraints: e
						} = this.getProps(), {
							projection: r
						} = this.visualElement;
						if (r2(e) && r && this.constraints) {
							this.stopAnimation();
							var n = {
								x: 0,
								y: 0
							};
							iq(t => {
								var e = this.getAxisMotionValue(t);
								if (e && !1 !== this.constraints) {
									var r, i, o, a, s, l = e.get();
									n[t] = (r = {
										min: l,
										max: l
									}, i = this.constraints[t], o = .5, a = iG(r), (s = iG(i)) > a ? o = n4(i.min, i.max - a, r.min) : a > s && (o = n4(r.min, r.max - s, i.min)), c(0, 1, o))
								}
							});
							var {
								transformTemplate: i
							} = this.visualElement.getProps();
							this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), iq(e => {
								if (oE(e, t, null)) {
									var r = this.getAxisMotionValue(e),
										{
											min: i,
											max: o
										} = this.constraints[e];
									r.set(e6(i, o, n[e]))
								}
							}), this.visualElement.render()
						}
					}
				}
				addListeners() {
					if (this.visualElement.current) {
						oj.set(this.visualElement, this);
						var t, e = this.visualElement.current,
							r = oa(e, "pointerdown", t => {
								var {
									drag: r,
									dragListener: n = !0
								} = this.getProps(), i = t.target, o = i !== e && (i1.has(i.tagName) || !0 === i.isContentEditable);
								r && n && !o && this.start(t)
							}),
							n = () => {
								var r, n, i, o, a, {
									dragConstraints: s
								} = this.getProps();
								r2(s) && s.current && (this.constraints = this.resolveRefConstraints(), t || (r = e, n = s.current, o = on(r, oS(i = () => this.scalePositionWithinConstraints())), a = on(n, oS(i)), t = () => {
									o(), a()
								}))
							},
							{
								projection: i
							} = this.visualElement,
							o = i.addEventListener("measure", n);
						i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), tq.read(n);
						var a = i2(window, "resize", () => this.scalePositionWithinConstraints()),
							s = i.addEventListener("didUpdate", t => {
								var {
									delta: e,
									hasLayoutChanged: r
								} = t;
								this.isDragging && r && (iq(t => {
									var r = this.getAxisMotionValue(t);
									r && (this.originPoint[t] += e[t].translate, r.set(r.get() + e[t].translate))
								}), this.visualElement.render())
							});
						return () => {
							a(), r(), o(), s && s(), t && t()
						}
					}
				}
				getProps() {
					var t = this.visualElement.getProps(),
						{
							drag: e = !1,
							dragDirectionLock: r = !1,
							dragPropagation: n = !1,
							dragConstraints: i = !1,
							dragElastic: o = .35,
							dragMomentum: a = !0
						} = t;
					return ow(ow({}, t), {}, {
						drag: e,
						dragDirectionLock: r,
						dragPropagation: n,
						dragConstraints: i,
						dragElastic: o,
						dragMomentum: a
					})
				}
			}

			function oS(t) {
				var e = !0;
				return () => {
					if (e) {
						e = !1;
						return
					}
					t()
				}
			}

			function oE(t, e, r) {
				return (!0 === e || e === t) && (null === r || r === t)
			}
			class oD extends r9 {
				constructor(t) {
					super(t), this.removeGroupControls = tW, this.removeListeners = tW, this.controls = new ox(t)
				}
				mount() {
					var {
						dragControls: t
					} = this.node.getProps();
					t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tW
				}
				update() {
					var {
						dragControls: t
					} = this.node.getProps(), {
						dragControls: e
					} = this.node.prevProps || {};
					t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
				}
				unmount() {
					this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
				}
			}
			var oT = t => (e, r) => {
				t && tq.update(() => t(e, r), !1, !0)
			};
			class oA extends r9 {
				constructor() {
					super(...arguments), this.removePointerDownListener = tW
				}
				onPointerDown(t) {
					this.session = new op(t, this.createPanHandlers(), {
						transformPagePoint: this.node.getTransformPagePoint(),
						contextWindow: os(this.node)
					})
				}
				createPanHandlers() {
					var {
						onPanSessionStart: t,
						onPanStart: e,
						onPan: r,
						onPanEnd: n
					} = this.node.getProps();
					return {
						onSessionStart: oT(t),
						onStart: oT(e),
						onMove: oT(r),
						onEnd: (t, e) => {
							delete this.session, n && tq.postRender(() => n(t, e))
						}
					}
				}
				mount() {
					this.removePointerDownListener = oa(this.node.current, "pointerdown", t => this.onPointerDown(t))
				}
				update() {
					this.session && this.session.updateHandlers(this.createPanHandlers())
				}
				unmount() {
					this.removePointerDownListener(), this.session && this.session.end()
				}
			}
			var oM = {
					hasAnimatedSinceResize: !0,
					hasEverUpdated: !1
				},
				oC = r(2551);

			function ok(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function oV(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ok(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ok(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var oR = !1;
			class oL extends rO.Component {
				componentDidMount() {
					var {
						visualElement: t,
						layoutGroup: e,
						switchLayoutGroup: r,
						layoutId: n
					} = this.props, {
						projection: i
					} = t;
					i && (e.group && e.group.add(i), r && r.register && n && r.register(i), oR && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
						this.safeToRemove()
					}), i.setOptions(oV(oV({}, i.options), {}, {
						layoutDependency: this.props.layoutDependency,
						onExitComplete: () => this.safeToRemove()
					}))), oM.hasEverUpdated = !0
				}
				getSnapshotBeforeUpdate(t) {
					var {
						layoutDependency: e,
						visualElement: r,
						drag: n,
						isPresent: i
					} = this.props, {
						projection: o
					} = r;
					return o && (o.isPresent = i, t.layoutDependency !== e && o.setOptions(oV(oV({}, o.options), {}, {
						layoutDependency: e
					})), oR = !0, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== i ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || tq.postRender(() => {
						var t = o.getStack();
						t && t.members.length || this.safeToRemove()
					}))), null
				}
				componentDidUpdate() {
					var {
						visualElement: t,
						layoutAnchor: e
					} = this.props, {
						projection: r
					} = t;
					r && (r.options.layoutAnchor = e, r.root.didUpdate(), eO.postRender(() => {
						!r.currentAnimation && r.isLead() && this.safeToRemove()
					}))
				}
				componentWillUnmount() {
					var {
						visualElement: t,
						layoutGroup: e,
						switchLayoutGroup: r
					} = this.props, {
						projection: n
					} = t;
					oR = !0, n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n))
				}
				safeToRemove() {
					var {
						safeToRemove: t
					} = this.props;
					t && t()
				}
				render() {
					return null
				}
			}

			function oB(t) {
				var [e, r] = (0, oC.xQ)(), n = (0, rO.useContext)(rx.L);
				return (0, rj.jsx)(oL, oV(oV({}, t), {}, {
					layoutGroup: n,
					switchLayoutGroup: (0, rO.useContext)(r1),
					isPresent: e,
					safeToRemove: r
				}))
			}
			var oI = e4.length,
				oF = t => "string" == typeof t ? parseFloat(t) : t,
				o_ = t => "number" == typeof t || C.test(t);

			function oU(t, e) {
				return void 0 !== t[e] ? t[e] : t.borderRadius
			}
			var oz = oW(0, .5, n1),
				oN = oW(.5, .95, tW);

			function oW(t, e, r) {
				return n => n < t ? 0 : n > e ? 1 : r(n4(t, e, n))
			}

			function oX(t, e) {
				t.min = e.min, t.max = e.max
			}

			function oY(t, e) {
				oX(t.x, e.x), oX(t.y, e.y)
			}

			function oH(t, e) {
				t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
			}

			function oq(t, e, r, n, i) {
				return t -= e, t = n + 1 / r * (t - n), void 0 !== i && (t = n + 1 / i * (t - n)), t
			}

			function oG(t, e, r, n, i) {
				var [o, a, s] = r;
				! function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
						n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
						i = arguments.length > 4 ? arguments[4] : void 0,
						o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t,
						a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t;
					if (M.test(e) && (e = parseFloat(e), e = e6(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
						var s = e6(o.min, o.max, n);
						t === o && (s -= e), t.min = oq(t.min, e, r, s, i), t.max = oq(t.max, e, r, s, i)
					}
				}(t, e[o], e[a], e[s], e.scale, n, i)
			}
			var oK = ["x", "scaleX", "originX"],
				o$ = ["y", "scaleY", "originY"];

			function oZ(t, e, r, n) {
				oG(t.x, e, oK, r ? r.x : void 0, n ? n.x : void 0), oG(t.y, e, o$, r ? r.y : void 0, n ? n.y : void 0)
			}

			function oQ(t) {
				return 0 === t.translate && 1 === t.scale
			}

			function oJ(t) {
				return oQ(t.x) && oQ(t.y)
			}

			function o0(t, e) {
				return t.min === e.min && t.max === e.max
			}

			function o1(t, e) {
				return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
			}

			function o2(t, e) {
				return o1(t.x, e.x) && o1(t.y, e.y)
			}

			function o3(t) {
				return iG(t.x) / iG(t.y)
			}

			function o5(t, e) {
				return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
			}
			class o4 {
				constructor() {
					this.members = []
				}
				add(t) {
					et(this.members, t);
					for (var e = this.members.length - 1; e >= 0; e--) {
						var r = this.members[e];
						if (r !== t && r !== this.lead && r !== this.prevLead) {
							var n = r.instance;
							n && !1 !== n.isConnected || r.snapshot || (ee(this.members, r), r.unmount())
						}
					}
					t.scheduleRender()
				}
				remove(t) {
					if (ee(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
						var e = this.members[this.members.length - 1];
						e && this.promote(e)
					}
				}
				relegate(t) {
					for (var e = this.members.indexOf(t) - 1; e >= 0; e--) {
						var r, n = this.members[e];
						if (!1 !== n.isPresent && (null == (r = n.instance) ? void 0 : r.isConnected) !== !1) return this.promote(n), !0
					}
					return !1
				}
				promote(t, e) {
					var r = this.lead;
					if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
						r.updateSnapshot(), t.scheduleRender();
						var n, {
								layoutDependency: i
							} = r.options,
							{
								layoutDependency: o
							} = t.options;
						(void 0 === i || i !== o) && (t.resumeFrom = r, e && (r.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), null != (n = t.root) && n.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && r.hide()
					}
				}
				exitAnimationComplete() {
					this.members.forEach(t => {
						var e, r, n, i, o;
						null == (e = (r = t.options).onExitComplete) || e.call(r), null == (n = t.resumingFrom) || null == (i = (o = n.options).onExitComplete) || i.call(o)
					})
				}
				scheduleRender() {
					this.members.forEach(t => t.instance && t.scheduleRender(!1))
				}
				removeLeadSnapshot() {
					var t;
					null != (t = this.lead) && t.snapshot && (this.lead.snapshot = void 0)
				}
			}
			var o8 = (t, e) => t.depth - e.depth;
			class o9 {
				constructor() {
					this.children = [], this.isDirty = !1
				}
				add(t) {
					et(this.children, t), this.isDirty = !0
				}
				remove(t) {
					ee(this.children, t), this.isDirty = !0
				}
				forEach(t) {
					this.isDirty && this.children.sort(o8), this.isDirty = !1, this.children.forEach(t)
				}
			}

			function o6(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function o7(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? o6(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o6(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var at = ["", "X", "Y", "Z"],
				ae = 0;

			function ar(t, e, r, n) {
				var {
					latestValues: i
				} = e;
				i[t] && (r[t] = i[t], e.setStaticValue(t, 0), n && (n[t] = 0))
			}

			function an(t) {
				var {
					attachResizeListener: e,
					defaultParent: r,
					measureScroll: n,
					checkIsScrollRoot: i,
					resetTransform: o
				} = t;
				return class {
					constructor() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == r ? void 0 : r();
						this.id = ae++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
							x: 1,
							y: 1
						}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
							this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
						}, this.updateProjection = () => {
							this.projectionUpdateScheduled = !1, this.nodes.forEach(aa), this.nodes.forEach(av), this.nodes.forEach(am), this.nodes.forEach(as)
						}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = e ? e.root || e : this, this.path = e ? [...e.path, e] : [], this.parent = e, this.depth = e ? e.depth + 1 : 0;
						for (var n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
						this.root === this && (this.nodes = new o9)
					}
					addEventListener(t, e) {
						return this.eventHandlers.has(t) || this.eventHandlers.set(t, new er), this.eventHandlers.get(t).add(e)
					}
					notifyListeners(t) {
						for (var e = this.eventHandlers.get(t), r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
						e && e.notify(...n)
					}
					hasListeners(t) {
						return this.eventHandlers.has(t)
					}
					mount(t) {
						if (!this.instance) {
							this.isSVG = i5(t) && !(i5(t) && "svg" === t.tagName), this.instance = t;
							var {
								layoutId: r,
								layout: n,
								visualElement: i
							} = this.options;
							if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n || r) && (this.isLayoutDirty = !0), e) {
								var o, a = 0,
									s = () => this.root.updateBlockedByResize = !1;
								tq.read(() => {
									a = window.innerWidth
								}), e(t, () => {
									var t, e, r = window.innerWidth;
									r !== a && (a = r, this.root.updateBlockedByResize = !0, o && o(), t = ew.now(), e = r => {
										var {
											timestamp: n
										} = r, i = n - t;
										i >= 250 && (tG(e), s(i - 250))
									}, tq.setup(e, !0), o = () => tG(e), oM.hasAnimatedSinceResize && (oM.hasAnimatedSinceResize = !1, this.nodes.forEach(af)))
								})
							}
							r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && i && (r || n) && this.addEventListener("didUpdate", t => {
								var {
									delta: e,
									hasLayoutChanged: r,
									hasRelativeLayoutChanged: n,
									layout: o
								} = t;
								if (this.isTreeAnimationBlocked()) {
									this.target = void 0, this.relativeTarget = void 0;
									return
								}
								var a = this.options.transition || i.getDefaultTransition() || aw,
									{
										onLayoutAnimationStart: s,
										onLayoutAnimationComplete: l
									} = i.getProps(),
									u = !this.targetLayout || !o2(this.targetLayout, o),
									c = !r && n;
								if (this.options.layoutRoot || this.resumeFrom || c || r && (u || !this.currentAnimation)) {
									this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
									var h = o7(o7({}, nn(a, "layout")), {}, {
										onPlay: s,
										onComplete: l
									});
									(i.shouldReduceMotion || this.options.layoutRoot) && (h.delay = 0, h.type = !1), this.startAnimation(h), this.setAnimationOrigin(e, c, h.path)
								} else r || af(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
								this.targetLayout = o
							})
						}
					}
					unmount() {
						this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
						var t = this.getStack();
						t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), tG(this.updateProjection)
					}
					blockUpdate() {
						this.updateManuallyBlocked = !0
					}
					unblockUpdate() {
						this.updateManuallyBlocked = !1
					}
					isUpdateBlocked() {
						return this.updateManuallyBlocked || this.updateBlockedByResize
					}
					isTreeAnimationBlocked() {
						return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
					}
					startUpdate() {
						!this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ay), this.animationId++)
					}
					getTransformTemplate() {
						var {
							visualElement: t
						} = this.options;
						return t && t.getProps().transformTemplate
					}
					willUpdate() {
						var t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
						if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
							this.options.onExitComplete && this.options.onExitComplete();
							return
						}
						if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
								if (e.hasCheckedOptimisedAppear = !0, e.root !== e) {
									var {
										visualElement: r
									} = e.options;
									if (r) {
										var n = r.props[r0];
										if (window.MotionHasOptimisedAnimation(n, "transform")) {
											var {
												layout: i,
												layoutId: o
											} = e.options;
											window.MotionCancelOptimisedAnimation(n, "transform", tq, !(i || o))
										}
										var {
											parent: a
										} = e;
										a && !a.hasCheckedOptimisedAppear && t(a)
									}
								}
							}(this), this.root.isUpdating || this.root.startUpdate(), !this.isLayoutDirty) {
							this.isLayoutDirty = !0;
							for (var e = 0; e < this.path.length; e++) {
								var r = this.path[e];
								r.shouldResetTransform = !0, ("string" == typeof r.latestValues.x || "string" == typeof r.latestValues.y) && (r.isLayoutDirty = !0), r.updateScroll("snapshot"), r.options.layoutRoot && r.willUpdate(!1)
							}
							var {
								layoutId: n,
								layout: i
							} = this.options;
							if (void 0 !== n || i) {
								var o = this.getTransformTemplate();
								this.prevTransformTemplateValue = o ? o(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
							}
						}
					}
					update() {
						if (this.updateScheduled = !1, this.isUpdateBlocked()) {
							var t = this.updateBlockedByResize;
							this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(ac), this.nodes.forEach(au);
							return
						}
						if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(ah);
						this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ap), this.nodes.forEach(ad), this.nodes.forEach(ai), this.nodes.forEach(ao)) : this.nodes.forEach(ah), this.clearAllSnapshots();
						var e = ew.now();
						tK.delta = c(0, 1e3 / 60, e - tK.timestamp), tK.timestamp = e, tK.isProcessing = !0, t$.update.process(tK), t$.preRender.process(tK), t$.render.process(tK), tK.isProcessing = !1
					}
					didUpdate() {
						this.updateScheduled || (this.updateScheduled = !0, eO.read(this.scheduleUpdate))
					}
					clearAllSnapshots() {
						this.nodes.forEach(al), this.sharedNodes.forEach(ag)
					}
					scheduleUpdateProjection() {
						this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tq.preRender(this.updateProjection, !1, !0))
					}
					scheduleCheckAfterUnmount() {
						tq.postRender(() => {
							this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
						})
					}
					updateSnapshot() {
						!this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || iG(this.snapshot.measuredBox.x) || iG(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
					}
					updateLayout() {
						if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
							if (this.resumeFrom && !this.resumeFrom.instance)
								for (var t = 0; t < this.path.length; t++) this.path[t].updateScroll();
							var e = this.layout;
							this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = tp()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
							var {
								visualElement: r
							} = this.options;
							r && r.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
						}
					}
					updateScroll() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
							e = !!(this.options.layoutScroll && this.instance);
						if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
							var r = i(this.instance);
							this.scroll = {
								animationId: this.root.animationId,
								phase: t,
								isRoot: r,
								offset: n(this.instance),
								wasRoot: this.scroll ? this.scroll.isRoot : r
							}
						}
					}
					resetTransform() {
						if (o) {
							var t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
								e = this.projectionDelta && !oJ(this.projectionDelta),
								r = this.getTransformTemplate(),
								n = r ? r(this.latestValues, "") : void 0,
								i = n !== this.prevTransformTemplateValue;
							t && this.instance && (e || ru(this.latestValues) || i) && (o(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
						}
					}
					measure() {
						var t, e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
							r = this.measurePageBox(),
							n = this.removeElementScroll(r);
						return e && (n = this.removeTransform(n)), aS((t = n).x), aS(t.y), {
							animationId: this.root.animationId,
							measuredBox: r,
							layoutBox: n,
							latestValues: {},
							source: this.id
						}
					}
					measurePageBox() {
						var t, {
							visualElement: e
						} = this.options;
						if (!e) return tp();
						var r = e.measureViewportBox();
						if (!((null == (t = this.scroll) ? void 0 : t.wasRoot) || this.path.some(aD))) {
							var {
								scroll: n
							} = this.root;
							n && (rf(r.x, n.offset.x), rf(r.y, n.offset.y))
						}
						return r
					}
					removeElementScroll(t) {
						var e, r = tp();
						if (oY(r, t), null != (e = this.scroll) && e.wasRoot) return r;
						for (var n = 0; n < this.path.length; n++) {
							var i = this.path[n],
								{
									scroll: o,
									options: a
								} = i;
							i !== this.root && o && a.layoutScroll && (o.wasRoot && oY(r, t), rf(r.x, o.offset.x), rf(r.y, o.offset.y))
						}
						return r
					}
					applyTransform(t) {
						var e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							n = arguments.length > 2 ? arguments[2] : void 0,
							i = n || tp();
						oY(i, t);
						for (var o = 0; o < this.path.length; o++) {
							var a, s = this.path[o];
							!r && s.options.layoutScroll && s.scroll && s !== s.root && (rf(i.x, -s.scroll.offset.x), rf(i.y, -s.scroll.offset.y)), ru(s.latestValues) && ry(i, s.latestValues, null == (a = s.layout) ? void 0 : a.layoutBox)
						}
						return ru(this.latestValues) && ry(i, this.latestValues, null == (e = this.layout) ? void 0 : e.layoutBox), i
					}
					removeTransform(t) {
						var e = tp();
						oY(e, t);
						for (var r = 0; r < this.path.length; r++) {
							var n, i = this.path[r];
							if (ru(i.latestValues)) {
								var o = void 0;
								i.instance && (rl(i.latestValues) && i.updateSnapshot(), oY(o = tp(), i.measurePageBox())), oZ(e, i.latestValues, null == (n = i.snapshot) ? void 0 : n.layoutBox, o)
							}
						}
						return ru(this.latestValues) && oZ(e, this.latestValues), e
					}
					setTargetDelta(t) {
						this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
					}
					setOptions(t) {
						this.options = o7(o7(o7({}, this.options), t), {}, {
							crossfade: void 0 === t.crossfade || t.crossfade
						})
					}
					clearMeasurements() {
						this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
					}
					forceRelativeParentToResolveTarget() {
						this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tK.timestamp && this.relativeParent.resolveTargetDelta(!0)
					}
					resolveTargetDelta() {
						var t, e, r, n, i, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							a = this.getLead();
						this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
						var s = !!this.resumingFrom || this !== a;
						if (o || s && this.isSharedProjectionDirty || this.isProjectionDirty || null != (i = this.parent) && i.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize) {
							var {
								layout: l,
								layoutId: u
							} = this.options;
							if (this.layout && (l || u)) {
								this.resolvedRelativeTargetAt = tK.timestamp;
								var c = this.getClosestProjectingParent();
								c && this.linkedParentVersion !== c.layoutVersion && !c.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && c && c.layout ? this.createRelativeTarget(c, this.layout.layoutBox, c.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = tp(), this.targetWithTransforms = tp()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), t = this.target, e = this.relativeTarget, r = this.relativeParent.target, n = this.options.layoutAnchor || void 0, iZ(t.x, e.x, r.x, null == n ? void 0 : n.x), iZ(t.y, e.y, r.y, null == n ? void 0 : n.y)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : oY(this.target, this.layout.layoutBox), rd(this.target, this.targetDelta)) : oY(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && c && !!c.resumingFrom == !!this.resumingFrom && !c.options.layoutScroll && c.target && 1 !== this.animationProgress ? this.createRelativeTarget(c, this.target, c.target) : this.relativeParent = this.relativeTarget = void 0))
							}
						}
					}
					getClosestProjectingParent() {
						if (!(!this.parent || rl(this.parent.latestValues) || rc(this.parent.latestValues)))
							if (this.parent.isProjecting()) return this.parent;
							else return this.parent.getClosestProjectingParent()
					}
					isProjecting() {
						return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
					}
					createRelativeTarget(t, e, r) {
						this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tp(), this.relativeTargetOrigin = tp(), iJ(this.relativeTargetOrigin, e, r, this.options.layoutAnchor || void 0), oY(this.relativeTarget, this.relativeTargetOrigin)
					}
					removeRelativeTarget() {
						this.relativeParent = this.relativeTarget = void 0
					}
					calcProjection() {
						var t, e = this.getLead(),
							r = !!this.resumingFrom || this !== e,
							n = !0;
						if ((this.isProjectionDirty || null != (t = this.parent) && t.isProjectionDirty) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tK.timestamp && (n = !1), !n) {
							var {
								layout: i,
								layoutId: o
							} = this.options;
							if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (i || o)) {
								oY(this.layoutCorrected, this.layout.layoutBox);
								var a = this.treeScale.x,
									s = this.treeScale.y;
								! function(t, e, r) {
									var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
										i = r.length;
									if (i) {
										e.x = e.y = 1;
										for (var o = 0; o < i; o++) {
											var a, s, l = (a = r[o]).projectionDelta,
												{
													visualElement: u
												} = a.options;
											(!u || !u.props.style || "contents" !== u.props.style.display) && (n && a.options.layoutScroll && a.scroll && a !== a.root && (rf(t.x, -a.scroll.offset.x), rf(t.y, -a.scroll.offset.y)), l && (e.x *= l.x.scale, e.y *= l.y.scale, rd(t, l)), n && ru(a.latestValues) && ry(t, a.latestValues, null == (s = a.layout) ? void 0 : s.layoutBox))
										}
										e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
									}
								}(this.layoutCorrected, this.treeScale, this.path, r), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = tp());
								var {
									target: l
								} = e;
								if (!l) {
									this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
									return
								}
								this.projectionDelta && this.prevProjectionDelta ? (oH(this.prevProjectionDelta.x, this.projectionDelta.x), oH(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), i$(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === a && this.treeScale.y === s && o5(this.projectionDelta.x, this.prevProjectionDelta.x) && o5(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
							}
						}
					}
					hide() {
						this.isVisible = !1
					}
					show() {
						this.isVisible = !0
					}
					scheduleRender() {
						var t, e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
						if (null == (t = this.options.visualElement) || t.scheduleRender(), e) {
							var r = this.getStack();
							r && r.scheduleRender()
						}
						this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
					}
					createProjectionDeltas() {
						this.prevProjectionDelta = tc(), this.projectionDelta = tc(), this.projectionDeltaWithTransform = tc()
					}
					setAnimationOrigin(t) {
						var e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							n = arguments.length > 2 ? arguments[2] : void 0,
							i = this.snapshot,
							o = i ? i.latestValues : {},
							a = o7({}, this.latestValues),
							s = tc();
						this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
						var l = tp(),
							u = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
							c = this.getStack(),
							h = !c || c.members.length <= 1,
							p = !!(u && !h && !0 === this.options.crossfade && !this.path.some(aP));
						this.animationProgress = 0;
						var d = null == n ? void 0 : n.interpolateProjection(t);
						this.mixTargetDelta = r => {
							var n, i, c, f, v, m, y = r / 1e3,
								g = null == d ? void 0 : d(y);
							if (g ? (s.x.translate = g.x, s.x.scale = e6(t.x.scale, 1, y), s.x.origin = t.x.origin, s.x.originPoint = t.x.originPoint, s.y.translate = g.y, s.y.scale = e6(t.y.scale, 1, y), s.y.origin = t.y.origin, s.y.originPoint = t.y.originPoint) : (ab(s.x, t.x, y), ab(s.y, t.y, y)), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
								iJ(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), n = this.relativeTarget, i = this.relativeTargetOrigin, c = l, f = y, aO(n.x, i.x, c.x, f), aO(n.y, i.y, c.y, f), e && (v = this.relativeTarget, m = e, o0(v.x, m.x) && o0(v.y, m.y)) && (this.isProjectionDirty = !1), e || (e = tp()), oY(e, this.relativeTarget)
							}
							u && (this.animationValues = a, function(t, e, r, n, i, o) {
								i ? (t.opacity = e6(0, null != (a = r.opacity) ? a : 1, oz(n)), t.opacityExit = e6(null != (s = e.opacity) ? s : 1, 0, oN(n))) : o && (t.opacity = e6(null != (l = e.opacity) ? l : 1, null != (u = r.opacity) ? u : 1, n));
								for (var a, s, l, u, c = 0; c < oI; c++) {
									var h = e4[c],
										p = oU(e, h),
										d = oU(r, h);
									(void 0 !== p || void 0 !== d) && (p || (p = 0), d || (d = 0), 0 === p || 0 === d || o_(p) === o_(d) ? (t[h] = Math.max(e6(oF(p), oF(d), n), 0), (M.test(d) || M.test(p)) && (t[h] += "%")) : t[h] = d)
								}(e.rotate || r.rotate) && (t.rotate = e6(e.rotate || 0, r.rotate || 0, n))
							}(a, o, this.latestValues, y, p, h)), g && void 0 !== g.rotate && (this.animationValues || (this.animationValues = a), this.animationValues.pathRotation = g.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = y
						}, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
					}
					startAnimation(t) {
						var e, r;
						this.notifyListeners("animationStart"), null == (e = this.currentAnimation) || e.stop(), null == (r = this.resumingFrom) || null == (r = r.currentAnimation) || r.stop(), this.pendingAnimation && (tG(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tq.update(() => {
							var e, r, n, i;
							oM.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = eE(0)), this.motionValue.jump(0, !1), this.currentAnimation = (e = this.motionValue, r = [0, 1e3], n = o7(o7({}, t), {}, {
								velocity: 0,
								isSync: !0,
								onUpdate: e => {
									this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
								},
								onComplete: () => {
									t.onComplete && t.onComplete(), this.completeAnimation()
								}
							}), (i = td(e) ? e : eE(e)).start(iS("", i, r, n)), i.animation), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
						})
					}
					completeAnimation() {
						this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
						var t = this.getStack();
						t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
					}
					finishAnimation() {
						this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
					}
					applyTransformsToTarget() {
						var t = this.getLead(),
							{
								targetWithTransforms: e,
								target: r,
								layout: n,
								latestValues: i
							} = t;
						if (e && r && n) {
							if (this !== t && this.layout && n && aE(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
								r = this.target || tp();
								var o = iG(this.layout.layoutBox.x);
								r.x.min = t.target.x.min, r.x.max = r.x.min + o;
								var a = iG(this.layout.layoutBox.y);
								r.y.min = t.target.y.min, r.y.max = r.y.min + a
							}
							oY(e, r), ry(e, i), i$(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
						}
					}
					registerSharedNode(t, e) {
						this.sharedNodes.has(t) || this.sharedNodes.set(t, new o4), this.sharedNodes.get(t).add(e);
						var r = e.options.initialPromotionConfig;
						e.promote({
							transition: r ? r.transition : void 0,
							preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
						})
					}
					isLead() {
						var t = this.getStack();
						return !t || t.lead === this
					}
					getLead() {
						var t, {
							layoutId: e
						} = this.options;
						return e && (null == (t = this.getStack()) ? void 0 : t.lead) || this
					}
					getPrevLead() {
						var t, {
							layoutId: e
						} = this.options;
						return e ? null == (t = this.getStack()) ? void 0 : t.prevLead : void 0
					}
					getStack() {
						var {
							layoutId: t
						} = this.options;
						if (t) return this.root.sharedNodes.get(t)
					}
					promote() {
						var {
							needsReset: t,
							transition: e,
							preserveFollowOpacity: r
						} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.getStack();
						n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
							transition: e
						})
					}
					relegate() {
						var t = this.getStack();
						return !!t && t.relegate(this)
					}
					resetSkewAndRotation() {
						var {
							visualElement: t
						} = this.options;
						if (t) {
							var e = !1,
								{
									latestValues: r
								} = t;
							if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), e) {
								var n = {};
								r.z && ar("z", t, n, this.animationValues);
								for (var i = 0; i < at.length; i++) ar("rotate".concat(at[i]), t, n, this.animationValues), ar("skew".concat(at[i]), t, n, this.animationValues);
								for (var o in t.render(), n) t.setStaticValue(o, n[o]), this.animationValues && (this.animationValues[o] = n[o]);
								t.scheduleRender()
							}
						}
					}
					applyProjectionStyles(t, e) {
						if (this.instance && !this.isSVG) {
							if (!this.isVisible) {
								t.visibility = "hidden";
								return
							}
							var r, n, i = this.getTransformTemplate();
							if (this.needsReset) {
								this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = rz(null == e ? void 0 : e.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
								return
							}
							var o = this.getLead();
							if (!this.projectionDelta || !this.layout || !o.target) {
								this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = rz(null == e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !ru(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
								return
							}
							t.visibility = "";
							var a = o.animationValues || o.latestValues;
							this.applyTransformsToTarget();
							var s = function(t, e, r) {
								var n = "",
									i = t.x.translate / e.x,
									o = t.y.translate / e.y,
									a = (null == r ? void 0 : r.z) || 0;
								if ((i || o || a) && (n = "translate3d(".concat(i, "px, ").concat(o, "px, ").concat(a, "px) ")), (1 !== e.x || 1 !== e.y) && (n += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), r) {
									var {
										transformPerspective: s,
										rotate: l,
										pathRotation: u,
										rotateX: c,
										rotateY: h,
										skewX: p,
										skewY: d
									} = r;
									s && (n = "perspective(".concat(s, "px) ").concat(n)), l && (n += "rotate(".concat(l, "deg) ")), u && (n += "rotate(".concat(u, "deg) ")), c && (n += "rotateX(".concat(c, "deg) ")), h && (n += "rotateY(".concat(h, "deg) ")), p && (n += "skewX(".concat(p, "deg) ")), d && (n += "skewY(".concat(d, "deg) "))
								}
								var f = t.x.scale * e.x,
									v = t.y.scale * e.y;
								return (1 !== f || 1 !== v) && (n += "scale(".concat(f, ", ").concat(v, ")")), n || "none"
							}(this.projectionDeltaWithTransform, this.treeScale, a);
							i && (s = i(a, s)), t.transform = s;
							var {
								x: l,
								y: u
							} = this.projectionDelta;
							for (var c in t.transformOrigin = "".concat(100 * l.origin, "% ").concat(100 * u.origin, "% 0"), o.animationValues ? t.opacity = o === this ? null != (r = null != (n = a.opacity) ? n : this.latestValues.opacity) ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : t.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, re)
								if (void 0 !== a[c]) {
									var {
										correct: h,
										applyTo: p,
										isCSSVariable: d
									} = re[c], f = "none" === s ? a[c] : h(a[c], o);
									if (p)
										for (var v = p.length, m = 0; m < v; m++) t[p[m]] = f;
									else d ? this.options.visualElement.renderState.vars[c] = f : t[c] = f
								} this.options.layoutId && (t.pointerEvents = o === this ? rz(null == e ? void 0 : e.pointerEvents) || "" : "none")
						}
					}
					clearSnapshot() {
						this.resumeFrom = this.snapshot = void 0
					}
					resetTree() {
						this.root.nodes.forEach(t => {
							var e;
							return null == (e = t.currentAnimation) ? void 0 : e.stop()
						}), this.root.nodes.forEach(au), this.root.sharedNodes.clear()
					}
				}
			}

			function ai(t) {
				t.updateLayout()
			}

			function ao(t) {
				var e, r = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
				if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
					var {
						layoutBox: n,
						measuredBox: i
					} = t.layout, {
						animationType: o
					} = t.options, a = r.source !== t.layout.source;
					if ("size" === o) iq(t => {
						var e = a ? r.measuredBox[t] : r.layoutBox[t],
							i = iG(e);
						e.min = n[t].min, e.max = e.min + i
					});
					else if ("x" === o || "y" === o) {
						var s = "x" === o ? "y" : "x";
						oX(a ? r.measuredBox[s] : r.layoutBox[s], n[s])
					} else aE(o, r.layoutBox, n) && iq(e => {
						var i = a ? r.measuredBox[e] : r.layoutBox[e],
							o = iG(n[e]);
						i.max = i.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[e].max = t.relativeTarget[e].min + o)
					});
					var l = tc();
					i$(l, n, r.layoutBox);
					var u = tc();
					a ? i$(u, t.applyTransform(i, !0), r.measuredBox) : i$(u, n, r.layoutBox);
					var c = !oJ(l),
						h = !1;
					if (!t.resumeFrom) {
						var p = t.getClosestProjectingParent();
						if (p && !p.resumeFrom) {
							var {
								snapshot: d,
								layout: f
							} = p;
							if (d && f) {
								var v = t.options.layoutAnchor || void 0,
									m = tp();
								iJ(m, r.layoutBox, d.layoutBox, v);
								var y = tp();
								iJ(y, n, f.layoutBox, v), o2(m, y) || (h = !0), p.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = m, t.relativeParent = p)
							}
						}
					}
					t.notifyListeners("didUpdate", {
						layout: n,
						snapshot: r,
						delta: u,
						layoutDelta: l,
						hasLayoutChanged: c,
						hasRelativeLayoutChanged: h
					})
				} else if (t.isLead()) {
					var {
						onExitComplete: g
					} = t.options;
					g && g()
				}
				t.options.transition = void 0
			}

			function aa(t) {
				t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
			}

			function as(t) {
				t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
			}

			function al(t) {
				t.clearSnapshot()
			}

			function au(t) {
				t.clearMeasurements()
			}

			function ac(t) {
				t.isLayoutDirty = !0, t.updateLayout()
			}

			function ah(t) {
				t.isLayoutDirty = !1
			}

			function ap(t) {
				t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
			}

			function ad(t) {
				var {
					visualElement: e
				} = t.options;
				e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
			}

			function af(t) {
				t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
			}

			function av(t) {
				t.resolveTargetDelta()
			}

			function am(t) {
				t.calcProjection()
			}

			function ay(t) {
				t.resetSkewAndRotation()
			}

			function ag(t) {
				t.removeLeadSnapshot()
			}

			function ab(t, e, r) {
				t.translate = e6(e.translate, 0, r), t.scale = e6(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
			}

			function aO(t, e, r, n) {
				t.min = e6(e.min, r.min, n), t.max = e6(e.max, r.max, n)
			}

			function aP(t) {
				return t.animationValues && void 0 !== t.animationValues.opacityExit
			}
			var aw = {
					duration: .45,
					ease: [.4, 0, .1, 1]
				},
				aj = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
				ax = aj("applewebkit/") && !aj("chrome/") ? Math.round : tW;

			function aS(t) {
				t.min = ax(t.min), t.max = ax(t.max)
			}

			function aE(t, e, r) {
				return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(o3(e) - o3(r)))
			}

			function aD(t) {
				var e;
				return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot)
			}
			var aT = an({
					attachResizeListener: (t, e) => i2(t, "resize", e),
					measureScroll: () => {
						var t, e;
						return {
							x: document.documentElement.scrollLeft || (null == (t = document.body) ? void 0 : t.scrollLeft) || 0,
							y: document.documentElement.scrollTop || (null == (e = document.body) ? void 0 : e.scrollTop) || 0
						}
					},
					checkIsScrollRoot: () => !0
				}),
				aA = {
					current: void 0
				},
				aM = an({
					measureScroll: t => ({
						x: t.scrollLeft,
						y: t.scrollTop
					}),
					defaultParent: () => {
						if (!aA.current) {
							var t = new aT({});
							t.mount(window), t.setOptions({
								layoutScroll: !0
							}), aA.current = t
						}
						return aA.current
					},
					resetTransform: (t, e) => {
						t.style.transform = void 0 !== e ? e : "none"
					},
					checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
				});

			function aC(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function ak(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? aC(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : aC(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function aV(t, e) {
				var r = i4(t),
					n = new AbortController;
				return [r, ak(ak({
					passive: !0
				}, e), {}, {
					signal: n.signal
				}), () => n.abort()]
			}

			function aR(t, e, r) {
				var {
					props: n
				} = t;
				t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === r);
				var i = n["onHover" + r];
				i && tq.postRender(() => i(e, oo(e)))
			}
			class aL extends r9 {
				mount() {
					var {
						current: t
					} = this.node;
					t && (this.unmount = function(t, e) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
							[n, i, o] = aV(t, r);
						return n.forEach(t => {
							var r, n = !1,
								o = !1,
								a = e => {
									r && (r(e), r = void 0), t.removeEventListener("pointerleave", l)
								},
								s = t => {
									n = !1, window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), o && (o = !1, a(t))
								},
								l = t => {
									if ("touch" !== t.pointerType) {
										if (n) {
											o = !0;
											return
										}
										a(t)
									}
								};
							t.addEventListener("pointerenter", n => {
								if ("touch" !== n.pointerType && !iH.x && !iH.y) {
									o = !1;
									var a = e(t, n);
									"function" == typeof a && (r = a, t.addEventListener("pointerleave", l, i))
								}
							}, i), t.addEventListener("pointerdown", () => {
								n = !0, window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", s, i)
							}, i)
						}), o
					}(t, (t, e) => (aR(this.node, e, "Start"), t => aR(this.node, t, "End"))))
				}
				unmount() {}
			}
			class aB extends r9 {
				constructor() {
					super(...arguments), this.isActive = !1
				}
				onFocus() {
					var t = !1;
					try {
						t = this.node.current.matches(":focus-visible")
					} catch (e) {
						t = !0
					}
					t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
				}
				onBlur() {
					this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
				}
				mount() {
					this.unmount = nu(i2(this.node.current, "focus", () => this.onFocus()), i2(this.node.current, "blur", () => this.onBlur()))
				}
				unmount() {}
			}
			var aI = r(5484),
				aF = (t, e) => !!e && (t === e || aF(t, e.parentElement)),
				a_ = new WeakSet;

			function aU(t) {
				return e => {
					"Enter" === e.key && t(e)
				}
			}

			function az(t, e) {
				t.dispatchEvent(new PointerEvent("pointer" + e, {
					isPrimary: !0,
					bubbles: !0
				}))
			}

			function aN(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function aW(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? aN(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : aN(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}

			function aX(t) {
				return oi(t) && !(iH.x || iH.y)
			}
			var aY = new WeakSet;

			function aH(t, e, r) {
				var {
					props: n
				} = t;
				if (!(t.current instanceof HTMLButtonElement) || !t.current.disabled) {
					t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === r);
					var i = n["onTap" + ("End" === r ? "" : r)];
					i && tq.postRender(() => i(e, oo(e)))
				}
			}
			class aq extends r9 {
				mount() {
					var {
						current: t
					} = this.node;
					if (t) {
						var {
							globalTapTarget: e,
							propagate: r
						} = this.node.props;
						this.unmount = function(t, e) {
							var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								[n, i, o] = aV(t, r),
								a = t => {
									var n = t.currentTarget;
									if (aX(t) && !aY.has(t)) {
										a_.add(n), r.stopPropagation && aY.add(t);
										var o = e(n, t),
											a = aW(aW({}, i), {}, {
												capture: !0
											}),
											s = (t, e) => {
												window.removeEventListener("pointerup", l, a), window.removeEventListener("pointercancel", u, a), a_.has(n) && a_.delete(n), aX(t) && "function" == typeof o && o(t, {
													success: e
												})
											},
											l = t => {
												s(t, n === window || n === document || r.useGlobalTarget || aF(n, t.target))
											},
											u = t => {
												s(t, !1)
											};
										window.addEventListener("pointerup", l, a), window.addEventListener("pointercancel", u, a)
									}
								};
							return n.forEach(t => {
								((r.useGlobalTarget ? window : t).addEventListener("pointerdown", a, i), (0, aI.s)(t)) && (t.addEventListener("focus", t => ((t, e) => {
									var r = t.currentTarget;
									if (r) {
										var n = aU(() => {
											if (!a_.has(r)) {
												az(r, "down");
												var t = aU(() => {
													az(r, "up")
												});
												r.addEventListener("keyup", t, e), r.addEventListener("blur", () => az(r, "cancel"), e)
											}
										});
										r.addEventListener("keydown", n, e), r.addEventListener("blur", () => r.removeEventListener("keydown", n), e)
									}
								})(t, i)), i0.has(t.tagName) || !0 === t.isContentEditable || t.hasAttribute("tabindex") || (t.tabIndex = 0))
							}), o
						}(t, (t, e) => (aH(this.node, e, "Start"), (t, e) => {
							var {
								success: r
							} = e;
							return aH(this.node, t, r ? "End" : "Cancel")
						}), {
							useGlobalTarget: e,
							stopPropagation: (null == r ? void 0 : r.tap) === !1
						})
					}
				}
				unmount() {}
			}
			var aG = ["root"];

			function aK(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}
			var a$ = new WeakMap,
				aZ = new WeakMap,
				aQ = t => {
					var e = a$.get(t.target);
					e && e(t)
				},
				aJ = t => {
					t.forEach(aQ)
				},
				a0 = {
					some: 0,
					all: 1
				};
			class a1 extends r9 {
				constructor() {
					super(...arguments), this.hasEnteredView = !1, this.isInView = !1
				}
				startObserver() {
					null == (r = this.stopObserver) || r.call(this);
					var t, e, r, {
							viewport: n = {}
						} = this.node.getProps(),
						{
							root: i,
							margin: o,
							amount: a = "some",
							once: s
						} = n,
						l = {
							root: i ? i.current : void 0,
							rootMargin: o,
							threshold: "number" == typeof a ? a : a0[a]
						},
						c = t => {
							var {
								isIntersecting: e
							} = t;
							if (this.isInView !== e) {
								if (this.isInView = e, s && !e && this.hasEnteredView) return;
								e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
								var {
									onViewportEnter: r,
									onViewportLeave: n
								} = this.node.getProps(), i = e ? r : n;
								i && i(t)
							}
						};
					this.stopObserver = (t = this.node.current, e = function(t) {
						var {
							root: e
						} = t, r = (0, t6.A)(t, aG), n = e || document;
						aZ.has(n) || aZ.set(n, {});
						var i = aZ.get(n),
							o = JSON.stringify(r);
						return i[o] || (i[o] = new IntersectionObserver(aJ, function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {};
								e % 2 ? aK(Object(r), !0).forEach(function(e) {
									(0, u.A)(t, e, r[e])
								}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : aK(Object(r)).forEach(function(e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
								})
							}
							return t
						}({
							root: e
						}, r))), i[o]
					}(l), a$.set(t, c), e.observe(t), () => {
						a$.delete(t), e.unobserve(t)
					})
				}
				mount() {
					this.startObserver()
				}
				update() {
					if ("u" > typeof IntersectionObserver) {
						var {
							props: t,
							prevProps: e
						} = this.node;
						["amount", "margin", "root"].some(function(t) {
							var {
								viewport: e = {}
							} = t, {
								viewport: r = {}
							} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return t => e[t] !== r[t]
						}(t, e)) && this.startObserver()
					}
				}
				unmount() {
					var t;
					null == (t = this.stopObserver) || t.call(this), this.hasEnteredView = !1, this.isInView = !1
				}
			}

			function a2(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function a3(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? a2(Object(r), !0).forEach(function(e) {
						(0, u.A)(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a2(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			var a5 = function(t, e) {
				if ("u" < typeof Proxy) return r8;
				var r = new Map,
					n = (r, n) => r8(r, n, t, e);
				return new Proxy((t, e) => n(t, e), {
					get: (i, o) => "create" === o ? n : (r.has(o) || r.set(o, r8(o, void 0, t, e)), r.get(o))
				})
			}(a3(a3(a3(a3({}, {
				animation: {
					Feature: iN
				},
				exit: {
					Feature: iY
				}
			}), {
				inView: {
					Feature: a1
				},
				tap: {
					Feature: aq
				},
				focus: {
					Feature: aB
				},
				hover: {
					Feature: aL
				}
			}), {
				pan: {
					Feature: oA
				},
				drag: {
					Feature: oD,
					ProjectionNode: aM,
					MeasureLayout: oB
				}
			}), {
				layout: {
					ProjectionNode: aM,
					MeasureLayout: oB
				}
			}), (t, e) => {
				var r;
				return (null != (r = e.isSVG) ? r : rw(t)) ? new ro(e) : new rb(e, {
					allowProjection: t !== rO.Fragment
				})
			})
		},
		636: (t, e, r) => {
			r.d(e, {
				y: () => i
			});
			var n = t => {
					var e, r = new Set,
						n = (t, n) => {
							var i = "function" == typeof t ? t(e) : t;
							if (!Object.is(i, e)) {
								var o = e;
								e = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, e, i), r.forEach(t => t(e, o))
							}
						},
						i = () => e,
						o = {
							setState: n,
							getState: i,
							getInitialState: () => a,
							subscribe: t => (r.add(t), () => r.delete(t))
						},
						a = e = t(n, i, o);
					return o
				},
				i = t => t ? n(t) : n
		},
		808: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "RouterContext", {
				enumerable: !0,
				get: function() {
					return n
				}
			});
			var n = r(4730)._(r(2115)).default.createContext(null)
		},
		852: (t, e, r) => {
			var n = r(3561);

			function i(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? i(Object(r), !0).forEach(function(e) {
						n(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "default", {
				enumerable: !0,
				get: function() {
					return h
				}
			});
			var a = r(5155),
				s = r(2115),
				l = r(4531);

			function u(t) {
				return {
					default: t && "default" in t ? t.default : t
				}
			}
			r(3150);
			var c = {
					loader: () => Promise.resolve(u(() => null)),
					loading: null,
					ssr: !0
				},
				h = function(t) {
					var e = o(o({}, c), t),
						r = (0, s.lazy)(() => e.loader().then(u)),
						n = e.loading;

					function i(t) {
						var i = n ? (0, a.jsx)(n, {
								isLoading: !0,
								pastDelay: !0,
								error: null
							}) : null,
							u = !e.ssr || !!e.loading,
							c = u ? s.Suspense : s.Fragment,
							h = e.ssr ? (0, a.jsxs)(a.Fragment, {
								children: [null, (0, a.jsx)(r, o({}, t))]
							}) : (0, a.jsx)(l.BailoutToCSR, {
								reason: "next/dynamic",
								children: (0, a.jsx)(r, o({}, t))
							});
						return (0, a.jsx)(c, o(o({}, u ? {
							fallback: i
						} : {}), {}, {
							children: h
						}))
					}
					return i.displayName = "LoadableComponent", i
				}
		},
		1106: (t, e, r) => {
			function n(t) {
				return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				})(t)
			}

			function i(t, e, r) {
				var i;
				return (i = function(t, e) {
					if ("object" != n(t) || !t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var i = r.call(t, e || "default");
						if ("object" != n(i)) return i;
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				}(e, "string"), (e = "symbol" == n(i) ? i : i + "") in t) ? Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = r, t
			}
			r.d(e, {
				A: () => i
			})
		},
		1269: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "ImageConfigContext", {
				enumerable: !0,
				get: function() {
					return o
				}
			});
			var n = r(4730)._(r(2115)),
				i = r(4423),
				o = n.default.createContext(i.imageConfigDefault)
		},
		1844: (t, e, r) => {
			var n = r(3561);

			function i(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? i(Object(r), !0).forEach(function(e) {
						n(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "default", {
				enumerable: !0,
				get: function() {
					return s
				}
			});
			var a = r(4730)._(r(852));

			function s(t, e) {
				var r, n = {};
				"function" == typeof t && (n.loader = t);
				var i = o(o({}, n), e);
				return (0, a.default)(o(o({}, i), {}, {
					modules: null == (r = i.loadableGenerated) ? void 0 : r.modules
				}))
			}("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
				value: !0
			}), Object.assign(e.default, e), t.exports = e.default)
		},
		1949: (t, e, r) => {
			r.d(e, {
				O: () => n,
				r: () => i
			});
			var n = {
					current: null
				},
				i = {
					current: !1
				}
		},
		2222: (t, e, r) => {
			var n = r(5042);
			r.o(n, "useParams") && r.d(e, {
				useParams: function() {
					return n.useParams
				}
			}), r.o(n, "usePathname") && r.d(e, {
				usePathname: function() {
					return n.usePathname
				}
			}), r.o(n, "useRouter") && r.d(e, {
				useRouter: function() {
					return n.useRouter
				}
			}), r.o(n, "useSearchParams") && r.d(e, {
				useSearchParams: function() {
					return n.useSearchParams
				}
			})
		},
		2551: (t, e, r) => {
			r.d(e, {
				tF: () => a,
				xQ: () => o
			});
			var n = r(2115),
				i = r(3088);

			function o() {
				var t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
					e = (0, n.useContext)(i.t);
				if (null === e) return [!0, null];
				var {
					isPresent: r,
					onExitComplete: o,
					register: a
				} = e, s = (0, n.useId)();
				(0, n.useEffect)(() => {
					if (t) return a(s)
				}, [t]);
				var l = (0, n.useCallback)(() => t && o && o(s), [s, o, t]);
				return !r && o ? [!1, l] : [!0]
			}

			function a() {
				var t;
				return null === (t = (0, n.useContext)(i.t)) || t.isPresent
			}
		},
		2600: (t, e, r) => {
			r.d(e, {
				xk: () => a
			});
			var n, i = {},
				o = function() {
					if (n) return i;
					n = 1, Object.defineProperty(i, "__esModule", {
						value: !0
					}), i.styleq = void 0;
					var t = new WeakMap;

					function e(e) {
						var r, n, i;
						return null != e && (r = !0 === e.disableCache, n = !0 === e.disableMix, i = e.transform),
							function() {
								for (var e = [], o = "", a = null, s = "", l = r ? null : t, u = Array(arguments.length), c = 0; c < arguments.length; c++) u[c] = arguments[c];
								for (; u.length > 0;) {
									var h = u.pop();
									if (null != h && !1 !== h) {
										if (Array.isArray(h)) {
											for (var p = 0; p < h.length; p++) u.push(h[p]);
											continue
										}
										var d = null != i ? i(h) : h;
										if (null != d.$$css) {
											var f = "";
											if (null != l && l.has(d)) {
												var v = l.get(d);
												null != v && (f = v[0], s = v[2], e.push.apply(e, v[1]), l = v[3])
											} else {
												var m = [];
												for (var y in d) {
													var g = d[y];
													if ("$$css" === y) {
														var b = d[y];
														!0 !== b && (s = s ? b + "; " + s : b);
														continue
													}
													"string" == typeof g || null === g ? e.includes(y) || (e.push(y), null != l && m.push(y), "string" == typeof g && (f += f ? " " + g : g)) : console.error("styleq: ".concat(y, " typeof ").concat(String(g), ' is not "string" or "null".'))
												}
												if (null != l) {
													var O = new WeakMap;
													l.set(d, [f, m, s, O]), l = O
												}
											}
											f && (o = o ? f + " " + o : f)
										} else if (n) null == a && (a = {}), a = Object.assign({}, d, a);
										else {
											var P = null;
											for (var w in d) {
												var j = d[w];
												void 0 === j || e.includes(w) || (null != j && (null == a && (a = {}), null == P && (P = {}), P[w] = j), e.push(w), l = null)
											}
											null != P && (a = Object.assign(P, a))
										}
									}
								}
								return [o, a, s]
							}
					}
					return (i.styleq = e()).factory = e, i
				}();

			function a() {
				for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
				var [n, i, a] = o.styleq(e), s = {};
				return null != n && "" !== n && (s.className = n), null != i && Object.keys(i).length > 0 && (s.style = i), null != a && "" !== a && (s["data-style-src"] = a), s
			}
			Object.freeze({})
		},
		2954: (t, e, r) => {
			r.d(e, {
				M: () => i
			});
			var n = r(2115);

			function i(t) {
				var e = (0, n.useRef)(null);
				return null === e.current && (e.current = t()), e.current
			}
		},
		3088: (t, e, r) => {
			r.d(e, {
				t: () => n
			});
			var n = (0, r(2115).createContext)(null)
		},
		3150: (t, e, r) => {
			function n(t) {
				var {
					moduleIds: e
				} = t;
				return null
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "PreloadChunks", {
				enumerable: !0,
				get: function() {
					return n
				}
			}), r(5155), r(7650), r(9749), r(9548), r(9728)
		},
		3156: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "default", {
				enumerable: !0,
				get: function() {
					return a
				}
			});
			var n = r(2115),
				i = n.useLayoutEffect,
				o = n.useEffect;

			function a(t) {
				var {
					headManager: e,
					reduceComponentsToState: r
				} = t;

				function a() {
					if (e && e.mountedInstances) {
						var t = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
						e.updateHead(r(t))
					}
				}
				return i(() => {
					var r;
					return null == e || null == (r = e.mountedInstances) || r.add(t.children), () => {
						var r;
						null == e || null == (r = e.mountedInstances) || r.delete(t.children)
					}
				}), i(() => (e && (e._pendingUpdate = a), () => {
					e && (e._pendingUpdate = a)
				})), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
					e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
				})), null
			}
		},
		3807: (t, e, r) => {
			r.d(e, {
				A: () => n
			});

			function n(t, e) {
				if (null == t) return {};
				var r, n, i = function(t, e) {
					if (null == t) return {};
					var r = {};
					for (var n in t)
						if (({}).hasOwnProperty.call(t, n)) {
							if (-1 !== e.indexOf(n)) continue;
							r[n] = t[n]
						} return r
				}(t, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					for (n = 0; n < o.length; n++) r = o[n], -1 === e.indexOf(r) && ({}).propertyIsEnumerable.call(t, r) && (i[r] = t[r])
				}
				return i
			}
		},
		3854: (t, e, r) => {
			r.d(e, {
				L: () => n
			});
			var n = (0, r(2115).createContext)({})
		},
		3947: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var n = {
				default: function() {
					return v
				},
				defaultHead: function() {
					return h
				}
			};
			for (var i in n) Object.defineProperty(e, i, {
				enumerable: !0,
				get: n[i]
			});
			var o = r(4730),
				a = r(9307),
				s = r(5155),
				l = a._(r(2115)),
				u = o._(r(3156)),
				c = r(4731);

			function h() {
				return [(0, s.jsx)("meta", {
					charSet: "utf-8"
				}, "charset"), (0, s.jsx)("meta", {
					name: "viewport",
					content: "width=device-width"
				}, "viewport")]
			}

			function p(t, e) {
				return "string" == typeof e || "number" == typeof e ? t : e.type === l.default.Fragment ? t.concat(l.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
			}
			r(6891);
			var d = ["name", "httpEquiv", "charSet", "itemProp"];

			function f(t) {
				var e, r, n, i;
				return t.reduce(p, []).reverse().concat(h().reverse()).filter((e = new Set, r = new Set, n = new Set, i = {}, t => {
					var o = !0,
						a = !1;
					if (t.key && "number" != typeof t.key && t.key.indexOf("$") > 0) {
						a = !0;
						var s = t.key.slice(t.key.indexOf("$") + 1);
						e.has(s) ? o = !1 : e.add(s)
					}
					switch (t.type) {
						case "title":
						case "base":
							r.has(t.type) ? o = !1 : r.add(t.type);
							break;
						case "meta":
							for (var l = 0, u = d.length; l < u; l++) {
								var c = d[l];
								if (t.props.hasOwnProperty(c))
									if ("charSet" === c) n.has(c) ? o = !1 : n.add(c);
									else {
										var h = t.props[c],
											p = i[c] || new Set;
										("name" !== c || !a) && p.has(h) ? o = !1 : (p.add(h), i[c] = p)
									}
							}
					}
					return o
				})).reverse().map((t, e) => {
					var r = t.key || e;
					return l.default.cloneElement(t, {
						key: r
					})
				})
			}
			var v = function(t) {
				var {
					children: e
				} = t, r = (0, l.useContext)(c.HeadManagerContext);
				return (0, s.jsx)(u.default, {
					reduceComponentsToState: f,
					headManager: r,
					children: e
				})
			};
			("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
				value: !0
			}), Object.assign(e.default, e), t.exports = e.default)
		},
		3981: (t, e, r) => {
			r.d(e, {
				default: () => i.a
			});
			var n = r(6530),
				i = r.n(n)
		},
		4054: (t, e) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = {
				bindSnapshot: function() {
					return l
				},
				createAsyncLocalStorage: function() {
					return s
				},
				createSnapshot: function() {
					return u
				}
			};
			for (var n in r) Object.defineProperty(e, n, {
				enumerable: !0,
				get: r[n]
			});
			let i = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
				value: "E504",
				enumerable: !1,
				configurable: !0
			});
			class o {
				disable() {
					throw i
				}
				getStore() {}
				run() {
					throw i
				}
				exit() {
					throw i
				}
				enterWith() {
					throw i
				}
				static bind(t) {
					return t
				}
			}
			let a = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

			function s() {
				return a ? new a : new o
			}

			function l(t) {
				return a ? a.bind(t) : o.bind(t)
			}

			function u() {
				return a ? a.snapshot() : function(t, ...e) {
					return t(...e)
				}
			}
		},
		4389: (t, e, r) => {
			r.d(e, {
				I: () => a
			});
			var n = r(1949),
				i = r(9838),
				o = r(2115);

			function a() {
				n.r.current || (0, i.Uu)();
				var {
					0: t
				} = (0, o.useState)(n.O.current);
				return t
			}
		},
		4423: (t, e) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = {
				VALID_LOADERS: function() {
					return i
				},
				imageConfigDefault: function() {
					return o
				}
			};
			for (var n in r) Object.defineProperty(e, n, {
				enumerable: !0,
				get: r[n]
			});
			var i = ["default", "imgix", "cloudinary", "akamai", "custom"],
				o = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [32, 48, 64, 96, 128, 256, 384],
					path: "/_next/image",
					loader: "default",
					loaderFile: "",
					domains: [],
					disableStaticImages: !1,
					minimumCacheTTL: 14400,
					formats: ["image/webp"],
					maximumDiskCacheSize: void 0,
					maximumRedirects: 3,
					maximumResponseBody: 5e7,
					dangerouslyAllowLocalIP: !1,
					dangerouslyAllowSVG: !1,
					contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
					contentDispositionType: "attachment",
					localPatterns: void 0,
					remotePatterns: [],
					qualities: [75],
					unoptimized: !1,
					customCacheHandler: !1
				}
		},
		4531: (t, e, r) => {
			function n(t) {
				var {
					reason: e,
					children: r
				} = t;
				return r
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "BailoutToCSR", {
				enumerable: !0,
				get: function() {
					return n
				}
			}), r(9543)
		},
		4844: (t, e, r) => {
			r.d(e, {
				G: () => n
			});
			var n = t => "object" == typeof t && null !== t
		},
		5484: (t, e, r) => {
			r.d(e, {
				s: () => i
			});
			var n = r(4844);

			function i(t) {
				return (0, n.G)(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
			}
		},
		6530: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var n = {
				default: function() {
					return c
				},
				getImageProps: function() {
					return u
				}
			};
			for (var i in n) Object.defineProperty(e, i, {
				enumerable: !0,
				get: n[i]
			});
			var o = r(4730),
				a = r(8154),
				s = r(21),
				l = o._(r(9434));

			function u(t) {
				var {
					props: e
				} = (0, a.getImgProps)(t, {
					defaultLoader: l.default,
					imgConf: {
						deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
						imageSizes: [32, 48, 64, 96, 128, 256, 384],
						qualities: [75],
						path: "/_next/image",
						loader: "default",
						dangerouslyAllowSVG: !1,
						unoptimized: !1
					}
				});
				for (var [r, n] of Object.entries(e)) void 0 === n && delete e[r];
				return {
					props: e
				}
			}
			var c = s.Image
		},
		6563: (t, e) => {
			function r(t) {
				var {
					widthInt: e,
					heightInt: r,
					blurWidth: n,
					blurHeight: i,
					blurDataURL: o,
					objectFit: a
				} = t, s = n ? 40 * n : e, l = i ? 40 * i : r, u = s && l ? "viewBox='0 0 ".concat(s, " ").concat(l, "'") : "";
				return "%3Csvg xmlns='http://www.w3.org/2000/svg' ".concat(u, "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(20, "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='").concat(20, "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='").concat(u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none", "' style='filter: url(%23b);' href='").concat(o, "'/%3E%3C/svg%3E")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "getImageBlurSvg", {
				enumerable: !0,
				get: function() {
					return r
				}
			})
		},
		6633: (t, e, r) => {
			r.d(e, {
				Q: () => n
			});
			var n = (0, r(2115).createContext)({
				transformPagePoint: t => t,
				isStatic: !1,
				reducedMotion: "never"
			})
		},
		7828: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "workAsyncStorageInstance", {
				enumerable: !0,
				get: function() {
					return n
				}
			});
			let n = (0, r(4054).createAsyncLocalStorage)()
		},
		8154: (t, e, r) => {
			var n = r(3561),
				i = r(817),
				o = ["src", "sizes", "unoptimized", "priority", "preload", "loading", "className", "quality", "width", "height", "fill", "style", "overrideSrc", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "decoding", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"],
				a = ["config"];

			function s(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function l(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2 ? s(Object(r), !0).forEach(function(e) {
						n(t, e, r[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
					})
				}
				return t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "getImgProps", {
				enumerable: !0,
				get: function() {
					return v
				}
			}), r(6891);
			var u = r(9728),
				c = r(6563),
				h = r(4423),
				p = ["-moz-initial", "fill", "none", "scale-down", void 0];

			function d(t) {
				return void 0 !== t.default
			}

			function f(t) {
				return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
			}

			function v(t, e) {
				var r, n, s, {
						src: v,
						sizes: m,
						unoptimized: y = !1,
						priority: g = !1,
						preload: b = !1,
						loading: O,
						className: P,
						quality: w,
						width: j,
						height: x,
						fill: S = !1,
						style: E,
						overrideSrc: D,
						onLoad: T,
						onLoadingComplete: A,
						placeholder: M = "empty",
						blurDataURL: C,
						fetchPriority: k,
						decoding: V = "async",
						layout: R,
						objectFit: L,
						objectPosition: B,
						lazyBoundary: I,
						lazyRoot: F
					} = t,
					_ = i(t, o),
					{
						imgConf: U,
						showAltText: z,
						blurComplete: N,
						defaultLoader: W
					} = e,
					X = U || h.imageConfigDefault;
				if ("allSizes" in X) Y = X;
				else {
					var Y, H, q = [...X.deviceSizes, ...X.imageSizes].sort((t, e) => t - e),
						G = X.deviceSizes.sort((t, e) => t - e),
						K = null == (H = X.qualities) ? void 0 : H.sort((t, e) => t - e);
					Y = l(l({}, X), {}, {
						allSizes: q,
						deviceSizes: G,
						qualities: K
					})
				}
				if (void 0 === W) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
					value: "E163",
					enumerable: !1,
					configurable: !0
				});
				var $ = _.loader || W;
				delete _.loader, delete _.srcSet;
				var Z = "__next_img_default" in $;
				if (Z) {
					if ("custom" === Y.loader) throw Object.defineProperty(Error('Image with src "'.concat(v, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"), "__NEXT_ERROR_CODE", {
						value: "E252",
						enumerable: !1,
						configurable: !0
					})
				} else {
					var Q = $;
					$ = t => {
						var {
							config: e
						} = t;
						return Q(i(t, a))
					}
				}
				if (R) {
					"fill" === R && (S = !0);
					var J = {
						intrinsic: {
							maxWidth: "100%",
							height: "auto"
						},
						responsive: {
							width: "100%",
							height: "auto"
						}
					} [R];
					J && (E = l(l({}, E), J));
					var tt = {
						responsive: "100vw",
						fill: "100vw"
					} [R];
					tt && !m && (m = tt)
				}
				var te = "",
					tr = f(j),
					tn = f(x);
				if ((r = v) && "object" == typeof r && (d(r) || void 0 !== r.src)) {
					var ti = d(v) ? v.default : v;
					if (!ti.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(ti))), "__NEXT_ERROR_CODE", {
						value: "E460",
						enumerable: !1,
						configurable: !0
					});
					if (!ti.height || !ti.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(ti))), "__NEXT_ERROR_CODE", {
						value: "E48",
						enumerable: !1,
						configurable: !0
					});
					if (n = ti.blurWidth, s = ti.blurHeight, C = C || ti.blurDataURL, te = ti.src, !S)
						if (tr || tn) {
							if (tr && !tn) {
								var to = tr / ti.width;
								tn = Math.round(ti.height * to)
							} else if (!tr && tn) {
								var ta = tn / ti.height;
								tr = Math.round(ti.width * ta)
							}
						} else tr = ti.width, tn = ti.height
				}
				var ts = !g && !b && ("lazy" === O || void 0 === O);
				(!(v = "string" == typeof v ? v : te) || v.startsWith("data:") || v.startsWith("blob:")) && (y = !0, ts = !1), Y.unoptimized && (y = !0), Z && !Y.dangerouslyAllowSVG && v.split("?", 1)[0].endsWith(".svg") && (y = !0);
				var tl = f(w),
					tu = Object.assign(S ? {
						position: "absolute",
						height: "100%",
						width: "100%",
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						objectFit: L,
						objectPosition: B
					} : {}, z ? {} : {
						color: "transparent"
					}, E),
					tc = N || "empty" === M ? null : "blur" === M ? 'url("data:image/svg+xml;charset=utf-8,'.concat((0, c.getImageBlurSvg)({
						widthInt: tr,
						heightInt: tn,
						blurWidth: n,
						blurHeight: s,
						blurDataURL: C || "",
						objectFit: tu.objectFit
					}), '")') : 'url("'.concat(M, '")'),
					th = p.includes(tu.objectFit) ? "fill" === tu.objectFit ? "100% 100%" : "cover" : tu.objectFit,
					tp = tc ? {
						backgroundSize: th,
						backgroundPosition: tu.objectPosition || "50% 50%",
						backgroundRepeat: "no-repeat",
						backgroundImage: tc
					} : {},
					td = function(t) {
						var {
							config: e,
							src: r,
							unoptimized: n,
							width: i,
							quality: o,
							sizes: a,
							loader: s
						} = t;
						if (n) {
							if (r.startsWith("/") && !r.startsWith("//")) {
								var l = (0, u.getDeploymentId)();
								if (l) {
									var c = r.indexOf("?");
									if (-1 !== c) {
										var h = new URLSearchParams(r.slice(c + 1));
										h.get("dpl") || (h.append("dpl", l), r = r.slice(0, c) + "?" + h.toString())
									} else r += "?dpl=".concat(l)
								}
							}
							return {
								src: r,
								srcSet: void 0,
								sizes: void 0
							}
						}
						var {
							widths: p,
							kind: d
						} = function(t, e, r) {
							var {
								deviceSizes: n,
								allSizes: i
							} = t;
							if (r) {
								for (var o, a = /(^|\s)(1?\d?\d)vw/g, s = []; o = a.exec(r);) s.push(parseInt(o[2]));
								if (s.length) {
									var l = .01 * Math.min(...s);
									return {
										widths: i.filter(t => t >= n[0] * l),
										kind: "w"
									}
								}
								return {
									widths: i,
									kind: "w"
								}
							}
							return "number" != typeof e ? {
								widths: n,
								kind: "w"
							} : {
								widths: [...new Set([e, 2 * e].map(t => i.find(e => e >= t) || i[i.length - 1]))],
								kind: "x"
							}
						}(e, i, a), f = p.length - 1;
						return {
							sizes: a || "w" !== d ? a : "100vw",
							srcSet: p.map((t, n) => "".concat(s({
								config: e,
								src: r,
								quality: o,
								width: t
							}), " ").concat("w" === d ? t : n + 1).concat(d)).join(", "),
							src: s({
								config: e,
								src: r,
								quality: o,
								width: p[f]
							})
						}
					}({
						config: Y,
						src: v,
						unoptimized: y,
						width: tr,
						quality: tl,
						sizes: m,
						loader: $
					}),
					tf = ts ? "lazy" : O;
				return {
					props: l(l({}, _), {}, {
						loading: tf,
						fetchPriority: k,
						width: tr,
						height: tn,
						decoding: V,
						className: P,
						style: l(l({}, tu), tp),
						sizes: td.sizes,
						srcSet: td.srcSet,
						src: D || td.src
					}),
					meta: {
						unoptimized: y,
						preload: b || g,
						placeholder: M,
						fill: S
					}
				}
			}
		},
		8707: (t, e, r) => {
			r.d(e, {
				E: () => n
			});
			var n = r(2115).useLayoutEffect
		},
		9071: (t, e, r) => {
			r.d(e, {
				default: () => i.a
			});
			var n = r(1844),
				i = r.n(n)
		},
		9434: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "default", {
				enumerable: !0,
				get: function() {
					return a
				}
			});
			var n = r(9624),
				i = r(9728);

			function o(t) {
				var e, {
						config: r,
						src: o,
						width: a,
						quality: s
					} = t,
					l = (0, i.getDeploymentId)();
				if (o.startsWith("/") && !o.startsWith("//")) {
					var u = o.indexOf("?");
					if (-1 !== u) {
						var c = new URLSearchParams(o.slice(u + 1)),
							h = c.get("dpl");
						if (h) {
							l = h, c.delete("dpl");
							var p = c.toString();
							o = o.slice(0, u) + (p ? "?" + p : "")
						}
					}
				}
				if (o.startsWith("/") && o.includes("?") && (null == (e = r.localPatterns) ? void 0 : e.length) === 1 && "**" === r.localPatterns[0].pathname && "" === r.localPatterns[0].search) throw Object.defineProperty(Error('Image with src "'.concat(o, '" is using a query string which is not configured in images.localPatterns.') + "\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
					value: "E871",
					enumerable: !1,
					configurable: !0
				});
				var d = (0, n.findClosestQuality)(s, r);
				return "".concat(r.path, "?url=").concat(encodeURIComponent(o), "&w=").concat(a, "&q=").concat(d).concat(o.startsWith("/") && l ? "&dpl=".concat(l) : "")
			}
			o.__next_img_default = !0;
			var a = o
		},
		9624: (t, e) => {
			function r(t, e) {
				var r, n = t || 75;
				return null != e && null != (r = e.qualities) && r.length ? e.qualities.reduce((t, e) => Math.abs(e - n) < Math.abs(t - n) ? e : t, e.qualities[0]) : n
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "findClosestQuality", {
				enumerable: !0,
				get: function() {
					return r
				}
			})
		},
		9749: (t, e, r) => {
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), Object.defineProperty(e, "workAsyncStorage", {
				enumerable: !0,
				get: function() {
					return n.workAsyncStorageInstance
				}
			});
			var n = r(7828)
		},
		9838: (t, e, r) => {
			r.d(e, {
				Uu: () => i
			});
			var n = r(1949);

			function i() {
				if (n.r.current = !0, window.matchMedia) {
					var t = window.matchMedia("(prefers-reduced-motion)"),
						e = () => n.O.current = t.matches;
					t.addEventListener("change", e), e()
				} else n.O.current = !1
			}
		}
	}
]);