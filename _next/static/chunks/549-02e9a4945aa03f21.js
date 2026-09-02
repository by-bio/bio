(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[549], {
		817: (e, r, t) => {
			var n = t(5981);
			e.exports = function(e, r) {
				if (null == e) return {};
				var t, o, a = n(e, r);
				if (Object.getOwnPropertySymbols) {
					var u = Object.getOwnPropertySymbols(e);
					for (o = 0; o < u.length; o++) t = u[o], -1 === r.indexOf(t) && ({}).propertyIsEnumerable.call(e, t) && (a[t] = e[t])
				}
				return a
			}, e.exports.__esModule = !0, e.exports.default = e.exports
		},
		1612: (e, r) => {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var t = {
				assign: function() {
					return c
				},
				searchParamsToUrlQuery: function() {
					return o
				},
				urlQueryToSearchParams: function() {
					return u
				}
			};
			for (var n in t) Object.defineProperty(r, n, {
				enumerable: !0,
				get: t[n]
			});

			function o(e) {
				var r = {};
				for (var [t, n] of e.entries()) {
					var o = r[t];
					void 0 === o ? r[t] = n : Array.isArray(o) ? o.push(n) : r[t] = [o, n]
				}
				return r
			}

			function a(e) {
				return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
			}

			function u(e) {
				var r = new URLSearchParams;
				for (var [t, n] of Object.entries(e))
					if (Array.isArray(n))
						for (var o of n) r.append(t, a(o));
					else r.set(t, a(n));
				return r
			}

			function c(e) {
				for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
				for (var o of t) {
					for (var a of o.keys()) e.delete(a);
					for (var [u, c] of o.entries()) e.append(u, c)
				}
				return e
			}
		},
		3549: (e, r, t) => {
			"use strict";
			var n = t(3561),
				o = t(817),
				a = ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior", "onNavigate", "transitionTypes", "ref", "unstable_dynamicOnHover"];

			function u(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r && (n = n.filter(function(r) {
						return Object.getOwnPropertyDescriptor(e, r).enumerable
					})), t.push.apply(t, n)
				}
				return t
			}

			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2 ? u(Object(t), !0).forEach(function(r) {
						n(e, r, t[r])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(r) {
						Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
					})
				}
				return e
			}
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var i = {
				default: function() {
					return _
				},
				useLinkStatus: function() {
					return E
				}
			};
			for (var s in i) Object.defineProperty(r, s, {
				enumerable: !0,
				get: i[s]
			});
			var f = t(9307),
				l = t(5155),
				p = f._(t(2115)),
				d = t(4948),
				h = t(5650),
				v = t(9033),
				y = t(5978),
				g = t(3432);
			t(6891);
			var b = t(2109),
				m = t(8725),
				O = t(9037),
				P = t(9368);

			function _(e) {
				var r, n, u, i, s, f, [_, E] = (0, p.useOptimistic)(m.IDLE_LINK_STATUS),
					S = (0, p.useRef)(null),
					{
						href: x,
						as: C,
						children: T,
						prefetch: w = null,
						passHref: N,
						replace: R,
						shallow: k,
						scroll: M,
						onClick: L,
						onMouseEnter: A,
						onTouchStart: I,
						legacyBehavior: U = !1,
						onNavigate: D,
						transitionTypes: F,
						ref: B,
						unstable_dynamicOnHover: K
					} = e,
					z = o(e, a);
				u = T, U && ("string" == typeof u || "number" == typeof u) && (u = (0, l.jsx)("a", {
					children: u
				}));
				var Q = p.default.useContext(h.AppRouterContext),
					W = !1 !== w,
					X = !1 !== w ? null === (r = w) || "auto" === r ? P.FetchStrategy.PPR : P.FetchStrategy.Full : P.FetchStrategy.PPR,
					q = "string" == typeof(n = C || x) ? n : (0, d.formatUrl)(n);
				if (U) {
					if ((null == (s = u) ? void 0 : s.$$typeof) === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
						value: "E863",
						enumerable: !1,
						configurable: !0
					});
					i = p.default.Children.only(u)
				}
				var H = U ? i && "object" == typeof i && i.ref : B,
					J = p.default.useCallback(e => (null !== Q && (S.current = (0, m.mountLinkInstance)(e, q, Q, X, W, E)), () => {
						S.current && ((0, m.unmountLinkForCurrentNavigation)(S.current), S.current = null), (0, m.unmountPrefetchableInstance)(e)
					}), [W, q, Q, X, E]),
					V = {
						ref: (0, v.useMergedRef)(J, H),
						onClick(e) {
							U || "function" != typeof L || L(e), U && i.props && "function" == typeof i.props.onClick && i.props.onClick(e), !Q || e.defaultPrevented || function(e, r, n, o, a, u, c) {
								var i, {
									nodeName: s
								} = e.currentTarget;
								if (!("A" === s.toUpperCase() && ((i = e.currentTarget.getAttribute("target")) && "_self" !== i || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download"))) {
									if (!(0, O.isLocalURL)(r)) {
										o && (e.preventDefault(), location.replace(r));
										return
									}
									if (e.preventDefault(), u) {
										var f = !1;
										if (u({
												preventDefault: () => {
													f = !0
												}
											}), f) return
									}
									var {
										dispatchNavigateAction: l
									} = t(3841);
									p.default.startTransition(() => {
										l(r, o ? "replace" : "push", !1 === a ? b.ScrollBehavior.NoScroll : b.ScrollBehavior.Default, n.current, c)
									})
								}
							}(e, q, S, R, M, D, F)
						},
						onMouseEnter(e) {
							U || "function" != typeof A || A(e), U && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), !Q || W && (0, m.onNavigationIntent)(e.currentTarget, !0 === K)
						},
						onTouchStart: function(e) {
							U || "function" != typeof I || I(e), U && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), !Q || W && (0, m.onNavigationIntent)(e.currentTarget, !0 === K)
						}
					};
				return (0, y.isAbsoluteUrl)(q) ? V.href = q : U && !N && ("a" !== i.type || "href" in i.props) || (V.href = (0, g.addBasePath)(q)), f = U ? p.default.cloneElement(i, V) : (0, l.jsx)("a", c(c(c({}, z), V), {}, {
					children: u
				})), (0, l.jsx)(j.Provider, {
					value: _,
					children: f
				})
			}
			t(9891);
			var j = (0, p.createContext)(m.IDLE_LINK_STATUS),
				E = () => (0, p.useContext)(j);
			("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
				value: !0
			}), Object.assign(r.default, r), e.exports = r.default)
		},
		4948: (e, r, t) => {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var n = {
				formatUrl: function() {
					return c
				},
				formatWithValidation: function() {
					return s
				},
				urlObjectKeys: function() {
					return i
				}
			};
			for (var o in n) Object.defineProperty(r, o, {
				enumerable: !0,
				get: n[o]
			});
			var a = t(9307)._(t(1612)),
				u = /https?|ftp|gopher|file/;

			function c(e) {
				var {
					auth: r,
					hostname: t
				} = e, n = e.protocol || "", o = e.pathname || "", c = e.hash || "", i = e.query || "", s = !1;
				r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : "", e.host ? s = r + e.host : t && (s = r + (~t.indexOf(":") ? "[".concat(t, "]") : t), e.port && (s += ":" + e.port)), i && "object" == typeof i && (i = String(a.urlQueryToSearchParams(i)));
				var f = e.search || i && "?".concat(i) || "";
				return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || u.test(n)) && !1 !== s ? (s = "//" + (s || ""), o && "/" !== o[0] && (o = "/" + o)) : s || (s = ""), c && "#" !== c[0] && (c = "#" + c), f && "?" !== f[0] && (f = "?" + f), o = o.replace(/[?#]/g, encodeURIComponent), f = f.replace("#", "%23"), "".concat(n).concat(s).concat(o).concat(f).concat(c)
			}
			var i = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

			function s(e) {
				return c(e)
			}
		},
		5978: (e, r, t) => {
			"use strict";
			var n = t(209);
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var o = {
				DecodeError: function() {
					return m
				},
				MiddlewareNotFoundError: function() {
					return j
				},
				MissingStaticPage: function() {
					return _
				},
				NormalizeError: function() {
					return O
				},
				PageNotFoundError: function() {
					return P
				},
				SP: function() {
					return g
				},
				ST: function() {
					return b
				},
				WEB_VITALS: function() {
					return u
				},
				execOnce: function() {
					return c
				},
				getDisplayName: function() {
					return p
				},
				getLocationOrigin: function() {
					return f
				},
				getURL: function() {
					return l
				},
				isAbsoluteUrl: function() {
					return s
				},
				isResSent: function() {
					return d
				},
				loadGetInitialProps: function() {
					return v
				},
				normalizeRepeatedSlashes: function() {
					return h
				},
				stringifyError: function() {
					return E
				}
			};
			for (var a in o) Object.defineProperty(r, a, {
				enumerable: !0,
				get: o[a]
			});
			var u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

			function c(e) {
				var r, t = !1;
				return function() {
					return t || (t = !0, r = e(...arguments)), r
				}
			}
			var i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
				s = e => i.test(e);

			function f() {
				var {
					protocol: e,
					hostname: r,
					port: t
				} = window.location;
				return "".concat(e, "//").concat(r).concat(t ? ":" + t : "")
			}

			function l() {
				var {
					href: e
				} = window.location, r = f();
				return e.substring(r.length)
			}

			function p(e) {
				return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
			}

			function d(e) {
				return e.finished || e.headersSent
			}

			function h(e) {
				var r = e.split("?");
				return r[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (r[1] ? "?".concat(r.slice(1).join("?")) : "")
			}

			function v(e, r) {
				return y.apply(this, arguments)
			}

			function y() {
				return (y = n(function*(e, r) {
					var t = r.res || r.ctx && r.ctx.res;
					if (!e.getInitialProps) return r.ctx && r.Component ? {
						pageProps: yield v(r.Component, r.ctx)
					} : {};
					var n = yield e.getInitialProps(r);
					if (t && d(t)) return n;
					if (!n) throw Object.defineProperty(Error('"'.concat(p(e), '.getInitialProps()" should resolve to an object. But found "').concat(n, '" instead.')), "__NEXT_ERROR_CODE", {
						value: "E1025",
						enumerable: !1,
						configurable: !0
					});
					return n
				})).apply(this, arguments)
			}
			var g = "u" > typeof performance,
				b = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
			class m extends Error {}
			class O extends Error {}
			class P extends Error {
				constructor(e) {
					super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: ".concat(e)
				}
			}
			class _ extends Error {
				constructor(e, r) {
					super(), this.message = "Failed to load static file for page: ".concat(e, " ").concat(r)
				}
			}
			class j extends Error {
				constructor() {
					super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
				}
			}

			function E(e) {
				return JSON.stringify({
					message: e.message,
					stack: e.stack
				})
			}
		},
		5981: e => {
			e.exports = function(e, r) {
				if (null == e) return {};
				var t = {};
				for (var n in e)
					if (({}).hasOwnProperty.call(e, n)) {
						if (-1 !== r.indexOf(n)) continue;
						t[n] = e[n]
					} return t
			}, e.exports.__esModule = !0, e.exports.default = e.exports
		},
		9033: (e, r, t) => {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), Object.defineProperty(r, "useMergedRef", {
				enumerable: !0,
				get: function() {
					return o
				}
			});
			var n = t(2115);

			function o(e, r) {
				var t = (0, n.useRef)(null),
					o = (0, n.useRef)(null);
				return (0, n.useCallback)(n => {
					if (null === n) {
						var u = t.current;
						u && (t.current = null, u());
						var c = o.current;
						c && (o.current = null, c())
					} else e && (t.current = a(e, n)), r && (o.current = a(r, n))
				}, [e, r])
			}

			function a(e, r) {
				if ("function" != typeof e) return e.current = r, () => {
					e.current = null
				};
				var t = e(r);
				return "function" == typeof t ? t : () => e(null)
			}("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
				value: !0
			}), Object.assign(r.default, r), e.exports = r.default)
		},
		9037: (e, r, t) => {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), Object.defineProperty(r, "isLocalURL", {
				enumerable: !0,
				get: function() {
					return a
				}
			});
			var n = t(5978),
				o = t(3411);

			function a(e) {
				if (!(0, n.isAbsoluteUrl)(e)) return !0;
				try {
					var r = (0, n.getLocationOrigin)(),
						t = new URL(e, r);
					return t.origin === r && (0, o.hasBasePath)(t.pathname)
				} catch (e) {
					return !1
				}
			}
		},
		9891: (e, r) => {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), Object.defineProperty(r, "errorOnce", {
				enumerable: !0,
				get: function() {
					return t
				}
			});
			var t = e => {}
		}
	}
]);