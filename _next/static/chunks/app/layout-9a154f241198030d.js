(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[177], {
		496: (e, t, r) => {
			"use strict";
			r.d(t, {
				SpeedInsights: () => v
			});
			var n = r(1106),
				o = r(2115),
				i = r(2222),
				a = r(2402);

			function c(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t && (n = n.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? c(Object(r), !0).forEach(function(t) {
						(0, n.A)(e, t, r[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					})
				}
				return e
			}

			function u() {
				return "development" === function() {
					return "production"
				}()
			}

			function d(e) {
				return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)"))
			}

			function f(e) {
				return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : "/".concat(e)
			}

			function l(e) {
				(0, o.useEffect)(() => {
					var t;
					e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend))
				}, [e.beforeSend]);
				var t = (0, o.useRef)(null);
				return (0, o.useEffect)(() => {
					if (!t.current) {
						var r, n, o, i = function() {
							var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								r = arguments.length > 1 ? arguments[1] : void 0;
							if (null === t.route) return null;
							window.si || (window.si = function() {
								window.siq = window.siq || [];
								for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
								window.siq.push(t)
							});
							var {
								beforeSend: n,
								src: o,
								dataset: i
							} = function(e, t) {
								var r, n, o = e;
								if (t) try {
									o = s(s({}, null == (n = JSON.parse(t)) ? void 0 : n.speedInsights), e)
								} catch (e) {}
								var i = {
									sdkn: "@vercel/speed-insights" + (o.framework ? "/".concat(o.framework) : ""),
									sdkv: "2.0.0"
								};
                //bio
                return;
                
								return o.sampleRate && (i.sampleRate = o.sampleRate.toString()), o.route && (i.route = o.route), u() && !1 === o.debug && (i.debug = "false"), o.dsn && (i.dsn = o.dsn), o.endpoint ? i.endpoint = f(o.endpoint) : o.basePath && (i.endpoint = f("".concat(o.basePath, "/speed-insights/vitals"))), {
									src: (r = o).scriptSrc ? f(r.scriptSrc) : u() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : r.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : r.basePath ? f("".concat(r.basePath, "/speed-insights/script.js")) : "/_vercel/speed-insights/script.js",
									beforeSend: o.beforeSend,
									dataset: i
								}
							}(t, r);
							if (document.head.querySelector('script[src*="'.concat(o, '"]'))) return null;
							n && (null == (e = window.si) || e.call(window, "beforeSend", n));
							var a = document.createElement("script");
							for (var [c, d] of(a.src = o, a.defer = !0, Object.entries(i))) a.dataset[c] = d;
							return a.onerror = () => {
								console.log("[Vercel Speed Insights] Failed to load script from ".concat(o, ". Please check if any content blockers are enabled and try again."))
							}, document.head.appendChild(a), {
								setRoute: e => {
									a.dataset.route = null != e ? e : void 0
								}
							}
						}(s({
							framework: null != (r = e.framework) ? r : "react",
							basePath: null != (n = e.basePath) ? n : function() {
								if (void 0 !== a && void 0 !== a.env) return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
							}()
						}, e), null != (o = e.configString) ? o : function() {
							if (void 0 !== a && void 0 !== a.env) return a.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
						}());
						i && (t.current = i.setRoute)
					}
				}, [e]), (0, o.useEffect)(() => {
					t.current && e.route && t.current(e.route)
				}, [e.route]), null
			}

			function p(e) {
				var t = (() => {
					var e = (0, i.useParams)(),
						t = (0, i.useSearchParams)() || new URLSearchParams,
						r = (0, i.usePathname)();
					if (!e) return null;
					var n = Object.keys(e).length ? e : Object.fromEntries(t.entries());
					if (!r || !n) return r;
					var o = r;
					try {
						var a = Object.entries(n);
						for (var [c, s] of a)
							if (!Array.isArray(s)) {
								var u = d(s);
								u.test(o) && (o = o.replace(u, "/[".concat(c, "]")))
							} for (var [f, l] of a)
							if (Array.isArray(l)) {
								var p = d(l.join("/"));
								p.test(o) && (o = o.replace(p, "/[...".concat(f, "]")))
							} return o
					} catch (e) {
						return r
					}
				})();
				return o.createElement(l, s(s({
					route: t
				}, e), {}, {
					framework: "next",
					basePath: function() {
						if (void 0 !== a && void 0 !== a.env) return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
					}(),
					configString: function() {
						if (void 0 !== a && void 0 !== a.env) return '{"analytics":{"scriptSrc":"27024359e4188bc7/script.js","viewEndpoint":"27024359e4188bc7/view","eventEndpoint":"27024359e4188bc7/event","sessionEndpoint":"27024359e4188bc7/session"},"speedInsights":{"scriptSrc":"27c480b9a1a9c7f9/script.js","endpoint":"27c480b9a1a9c7f9/vitals"}}'
					}()
				}))
			}

			function v(e) {
				return o.createElement(o.Suspense, {
					fallback: null
				}, o.createElement(p, s({}, e)))
			}
		},
		1106: (e, t, r) => {
			"use strict";

			function n(e) {
				return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function o(e, t, r) {
				var o;
				return (o = function(e, t) {
					if ("object" != n(e) || !e) return e;
					var r = e[Symbol.toPrimitive];
					if (void 0 !== r) {
						var o = r.call(e, t || "default");
						if ("object" != n(o)) return o;
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(t, "string"), (t = "symbol" == n(o) ? o : o + "") in e) ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			r.d(t, {
				A: () => o
			})
		},
		1481: (e, t, r) => {
			"use strict";
			r.d(t, {
				Analytics: () => v
			});
			var n = r(1106),
				o = r(2115),
				i = r(2222),
				a = r(2402);

			function c(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t && (n = n.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), r.push.apply(r, n)
				}
				return r
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? c(Object(r), !0).forEach(function(t) {
						(0, n.A)(e, t, r[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					})
				}
				return e
			}

			function u() {
				return "development" === (window.vam || "production")
			}

			function d(e) {
				return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)"))
			}

			function f(e) {
				return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : "/".concat(e)
			}

			function l(e) {
				return (0, o.useEffect)(() => {
					var t;
					e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
				}, [e.beforeSend]), (0, o.useEffect)(() => {
					var t, r;
					! function() {
						var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
								debug: !0
							},
							r = arguments.length > 1 ? arguments[1] : void 0,
							{
								beforeSend: n,
								src: o,
								dataset: i
							} = function(e, t) {
								var r, n, o = e;
								if (t) try {
									o = s(s({}, null == (n = JSON.parse(t)) ? void 0 : n.analytics), e)
								} catch (e) {}! function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
									if ("auto" === e) {
										window.vam = function() {
											return "production"
										}();
										return
									}
									window.vam = e
								}(o.mode);
								var i = {
									sdkn: "@vercel/analytics" + (o.framework ? "/".concat(o.framework) : ""),
									sdkv: "2.0.1"
								};
								return o.disableAutoTrack && (i.disableAutoTrack = "1"), o.viewEndpoint && (i.viewEndpoint = f(o.viewEndpoint)), o.eventEndpoint && (i.eventEndpoint = f(o.eventEndpoint)), o.sessionEndpoint && (i.sessionEndpoint = f(o.sessionEndpoint)), u() && !1 === o.debug && (i.debug = "false"), o.dsn && (i.dsn = o.dsn), o.endpoint ? i.endpoint = o.endpoint : o.basePath && (i.endpoint = f("".concat(o.basePath, "/insights"))), {
									beforeSend: o.beforeSend,
									src: (r = o).scriptSrc ? f(r.scriptSrc) : u() ? "https://va.vercel-scripts.com/v1/script.debug.js" : r.basePath ? f("".concat(r.basePath, "/insights/script.js")) : "/_vercel/insights/script.js",
									dataset: i
								}
							}(t, r);
						if (window.va || (window.va = function() {
								window.vaq || (window.vaq = []);
								for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
								window.vaq.push(t)
							}), n && (null == (e = window.va) || e.call(window, "beforeSend", n)), !document.head.querySelector('script[src*="'.concat(o, '"]'))) {
							var a = document.createElement("script");
							for (var [c, d] of(a.src = o, Object.entries(i))) a.dataset[c] = d;
							a.defer = !0, a.onerror = () => {
								var e = u() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
								console.log("[Vercel Web Analytics] Failed to load script from ".concat(o, ". ").concat(e))
							}, document.head.appendChild(a)
						}
					}(s(s({
						framework: e.framework || "react",
						basePath: null != (t = e.basePath) ? t : function() {
							if (void 0 !== a && void 0 !== a.env) return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
						}()
					}, void 0 !== e.route && {
						disableAutoTrack: !0
					}), e), null != (r = e.configString) ? r : function() {
						if (void 0 !== a && void 0 !== a.env) return a.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
					}())
				}, []), (0, o.useEffect)(() => {
					e.route && e.path && function(e) {
						var t, {
							route: r,
							path: n
						} = e;
						null == (t = window.va) || t.call(window, "pageview", {
							route: r,
							path: n
						})
					}({
						route: e.route,
						path: e.path
					})
				}, [e.route, e.path]), null
			}

			function p(e) {
				var t, r, n, {
					route: c,
					path: u
				} = (t = (0, i.useParams)(), r = (0, i.useSearchParams)(), n = (0, i.usePathname)(), t ? {
					route: function(e, t) {
						if (!e || !t) return e;
						var r = e;
						try {
							var n = Object.entries(t);
							for (var [o, i] of n)
								if (!Array.isArray(i)) {
									var a = d(i);
									a.test(r) && (r = r.replace(a, "/[".concat(o, "]")))
								} for (var [c, s] of n)
								if (Array.isArray(s)) {
									var u = d(s.join("/"));
									u.test(r) && (r = r.replace(u, "/[...".concat(c, "]")))
								} return r
						} catch (t) {
							return e
						}
					}(n, Object.keys(t).length ? t : Object.fromEntries(r.entries())),
					path: n
				} : {
					route: null,
					path: n
				});
				return o.createElement(l, s(s({
					path: u,
					route: c
				}, e), {}, {
					basePath: function() {
						if (void 0 !== a && void 0 !== a.env) return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
					}(),
					configString: function() {
						//bio
            //if (void 0 !== a && void 0 !== a.env) return '{"analytics":{"scriptSrc":"27024359e4188bc7/script.js","viewEndpoint":"27024359e4188bc7/view","eventEndpoint":"27024359e4188bc7/event","sessionEndpoint":"27024359e4188bc7/session"},"speedInsights":{"scriptSrc":"27c480b9a1a9c7f9/script.js","endpoint":"27c480b9a1a9c7f9/vitals"}}'
					}(),
					framework: "next"
				}))
			}

			function v(e) {
				return o.createElement(o.Suspense, {
					fallback: null
				}, o.createElement(p, s({}, e)))
			}
		},
		1743: () => {},
		2222: (e, t, r) => {
			"use strict";
			var n = r(5042);
			r.o(n, "useParams") && r.d(t, {
				useParams: function() {
					return n.useParams
				}
			}), r.o(n, "usePathname") && r.d(t, {
				usePathname: function() {
					return n.usePathname
				}
			}), r.o(n, "useRouter") && r.d(t, {
				useRouter: function() {
					return n.useRouter
				}
			}), r.o(n, "useSearchParams") && r.d(t, {
				useSearchParams: function() {
					return n.useSearchParams
				}
			})
		},
		6952: (e, t, r) => {
			Promise.resolve().then(r.bind(r, 1481)), Promise.resolve().then(r.bind(r, 496)), Promise.resolve().then(r.t.bind(r, 1743, 23))
		}
	},
	e => {
		e.O(0, [334, 441, 826, 358], () => e(e.s = 6952)), _N_E = e.O()
	}
]);