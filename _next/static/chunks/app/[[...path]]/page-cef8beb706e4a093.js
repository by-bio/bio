(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[812], {
		424: (e, t, a) => {
			"use strict";
			a.d(t, {
				Bk: () => u,
				Nl: () => g,
				Vk: () => p
			});
			var i = a(1106),
				r = a(2600),
				l = a(3549),
				n = a.n(l);
			a(4420), a(4922);
			var o = a(6606),
				s = a(3364),
				d = a(8861),
				c = a(5155);

			function x(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function A(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? x(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function p(e) {
				var {
					detail: t,
					activeTag: a,
					onSelectTag: i
				} = e;
				return (0, c.jsxs)("div", A(A({}, r.xk(d.R.detailCopy)), {}, {
					children: [(0, c.jsx)("p", A(A({}, r.xk(d.R.detailLead)), {}, {
						children: t.description
					})), (0, c.jsx)(u, {
						detail: t,
						activeTag: a,
						onSelectTag: i
					})]
				}))
			}

			function u(e) {
				var {
					detail: t,
					activeTag: a,
					onSelectTag: i
				} = e;
				return (0, c.jsxs)("dl", A(A({}, r.xk(d.R.detailList)), {}, {
					children: [t.meta.map(e => (0, c.jsxs)("div", A(A({}, r.xk(d.R.detailRow, e.groupBreak && d.R.detailRowGroupStart)), {}, {
						children: [(0, c.jsx)("dt", {
							children: e.label
						}), (0, c.jsx)("dd", {
							children: null != e.href ? (0, c.jsx)("a", A(A({
								href: e.href
							}, {
								className: "xjyslct xc342km x1717udv xjbqb8w x1xc03n1 xlch9iz xln7xf2 x1ypdohk xujl8zx x10waewu xda060z xt3l3uh x9i6iqp x1qmg8k3"
							}), {}, {
								children: e.value
							})) : e.value
						})]
					}), e.label)), (0, c.jsx)(g, {
						tags: t.tags,
						activeTag: a,
						onSelect: i
					}), null == t.membership ? null : (0, c.jsxs)("div", A(A({}, r.xk(d.R.detailRow)), {}, {
						children: [(0, c.jsx)("dt", {
							children: "Part of"
						}), (0, c.jsx)("dd", {
							children: t.membership.map((e, t) => (0, c.jsxs)("span", {
								children: [t > 0 ? " \xb7 " : null, (0, c.jsx)(h, {
									id: e.id,
									title: e.title
								})]
							}, e.id))
						})]
					}))]
				}))
			}

			function g(e) {
				var {
					tags: t,
					activeTag: a,
					onSelect: i
				} = e;
				return null == t || 0 === t.length ? null : (0, c.jsxs)("div", A(A({}, r.xk(d.R.detailRow)), {}, {
					children: [(0, c.jsx)("dt", {
						children: "Tags"
					}), (0, c.jsx)("dd", A(A({}, {
						className: "x78zum5 x1a02dak x167g77z"
					}), {}, {
						children: t.map(e => null == i ? (0, c.jsx)("span", A(A({}, {
							className: "x1evy7pa x1dbsnij xo1l8bm"
						}), {}, {
							children: "#".concat(e)
						}), e) : (0, c.jsx)("button", A(A({
							type: "button",
							"aria-pressed": e === a,
							onClick: () => i(e)
						}, {
							0: {
								className: "x1evy7pa xo1l8bm xjyslct xc342km x4h2mm1 xst3r74 xjbqb8w x1dbsnij x4ti1x0 xln7xf2 x1ypdohk xt3l3uh x9i6iqp x1qmg8k3"
							},
							1: {
								className: "x1evy7pa xjyslct xc342km x4h2mm1 xst3r74 xjbqb8w xln7xf2 x1ypdohk xt3l3uh x9i6iqp x1qmg8k3 x1spfu80 x1xlr1w8"
							}
						} [e === a | 0]), {}, {
							children: "#".concat(e)
						}), e))
					}))]
				}))
			}

			function h(e) {
				var {
					id: t,
					title: a
				} = e, i = (0, s.ld)();
				return (0, c.jsx)(n(), A(A({
					href: (0, o.EJ)(t),
					scroll: !1,
					onClick: () => i.getState().applyRoute({
						nodeId: t,
						viewerAssetId: null
					})
				}, {
					className: "xjyslct xc342km x1717udv xjbqb8w x1xc03n1 xlch9iz xln7xf2 x1ypdohk xujl8zx x10waewu xda060z xt3l3uh x9i6iqp x1qmg8k3"
				}), {}, {
					children: a
				}))
			}
		},
		825: (e, t, a) => {
			"use strict";
			a.d(t, {
				_6: () => n,
				c5: () => o,
				ny: () => r
			});
			var i = a(2115),
				r = a(4922).fi.mobile.replace("@media ", "");

			function l(e) {
				var t = window.matchMedia(r);
				return t.addEventListener("change", e), () => t.removeEventListener("change", e)
			}

			function n() {
				return (0, i.useSyncExternalStore)(l, () => window.matchMedia(r).matches, () => !1)
			}

			function o(e, t) {
				var a = (0, i.useRef)(0);
				(0, i.useEffect)(() => {
					var t = e.current;
					if (null != t) {
						var i = () => {
							t.clientHeight > 0 && (a.current = t.scrollTop)
						};
						return t.addEventListener("scroll", i, {
							passive: !0
						}), () => t.removeEventListener("scroll", i)
					}
				}, [e]), (0, i.useLayoutEffect)(() => {
					if (!t && window.matchMedia(r).matches) {
						var i = e.current;
						null != i && (i.scrollTop = a.current)
					}
				}, [t, e])
			}
		},
		1168: (e, t, a) => {
			Promise.resolve().then(a.bind(a, 4781))
		},
		1289: (e, t, a) => {
			"use strict";
			a.d(t, {
				JD: () => x,
				Mj: () => i,
				RI: () => c,
				Ue: () => l,
				lu: () => s,
				mi: () => o,
				ui: () => r,
				vw: () => n,
				z1: () => d
			});
			var i = [.22, 1, .36, 1],
				r = .36,
				l = [.4, 0, .2, 1],
				n = .44,
				o = .34,
				s = [.16, 1, .3, 1],
				d = .42,
				c = .18,
				x = .26
		},
		1928: (e, t, a) => {
			"use strict";
			a.d(t, {
				B: () => A
			});
			var i = a(1106),
				r = a(2600);
			a(4420), a(4922);
			var l = a(5703),
				n = a(2153),
				o = a(8861),
				s = a(825),
				d = a(5155);

			function c(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function x(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? c(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function A(e) {
				var {
					previews: t,
					onOpen: a,
					openLabel: i,
					fillSoloOnMobile: l = !1
				} = e, n = (0, s._6)(), c = null != a && n;
				if (0 === t.length) return (0, d.jsx)("div", x(x({}, r.xk(o.R.emptyPreview)), {}, {
					children: "Soon"
				}));
				var A = t[0];
				if (1 === t.length && null != A) return (0, d.jsx)("div", x(x(x({}, {
					0: {
						className: "xrvj5dj x1o2pa38 xztvwtv"
					},
					1: {
						className: "xrvj5dj x1o2pa38 xztvwtv x1ypdohk x4pepcl"
					}
				} [0 | !!c]), c ? {
					role: "button",
					tabIndex: 0,
					"aria-label": null != i ? i : "Open in viewer",
					onClick: a,
					onKeyDown: e => {
						("Enter" === e.key || " " === e.key) && (e.preventDefault(), null == a || a())
					}
				} : {}), {}, {
					children: (0, d.jsx)(p, {
						object: A,
						placement: g.previewObjectSolo,
						fill: l && "video" !== A.kind,
						priority: !0
					})
				}));
				var u = [g.previewObjectTop, g.previewObjectMid, g.previewObjectBack, g.previewObjectBack2, g.previewObjectBack3];
				return (0, d.jsx)("div", x(x({}, {
					className: "x1n2onr6 x127qqk8"
				}), {}, {
					"aria-hidden": "true",
					children: t.slice(0, u.length).map((e, t) => {
						var a, i;
						return (0, d.jsx)(p, {
							object: e,
							placement: u[t],
							priority: 0 === t
						}, (a = e, i = t, "image" === a.kind || "video" === a.kind ? "".concat(a.src, "-").concat(i) : "text" === a.kind ? "".concat(a.title, "-").concat(i) : "".concat(a.symbol, "-").concat(i)))
					})
				}))
			}

			function p(e) {
				var {
					object: t,
					placement: a,
					fill: i = !1,
					priority: n = !1
				} = e;
				return "image" === t.kind ? (0, d.jsx)(l.w, {
					src: t.src,
					alt: t.alt,
					sizes: i ? "".concat(s.ny, " 100vw, 360px") : "360px",
					pixelArt: t.pixelArt,
					priority: n,
					stylexProps: r.xk(g.previewObject, a, t.pixelArt && g.previewObjectSquare, i && g.previewObjectSoloFill)
				}) : "video" === t.kind ? (0, d.jsx)(u, {
					src: t.src,
					poster: t.poster
				}) : "text" === t.kind ? (0, d.jsxs)("div", x(x({}, r.xk(g.previewObject, g.textSheet, a, i && g.previewObjectSoloFill)), {}, {
					children: [(0, d.jsx)("p", x(x({}, {
						className: "x1q6ys4k x1u5qwqo x1j6dyjg x1s688f"
					}), {}, {
						children: t.title
					})), t.excerpt]
				})) : (0, d.jsx)("div", x(x({}, r.xk(g.previewObject, g.platePreview, h[t.preset], a)), {}, {
					children: t.symbol
				}))
			}

			function u(e) {
				var {
					src: t,
					poster: a
				} = e;
				return (0, d.jsx)(n.M, {
					src: t,
					poster: a,
					active: !0,
					stylexProps: {
						className: "x1lliihq x14atkfc x1ma99d7 xt7dq6l x193iq5w xuyqlj2 x1b57q7a x3v996n x1q4ynmn x19kjcj4 xjbqb8w"
					}
				})
			}
			var g = {
					previewObjectSolo: {
						kVAEAm: "x1uhb9sk",
						kzqmXN: "xy2penl",
						kZKoxP: "x4kdb9n",
						kIY38u: "x5n2h75",
						kGVxlE: "x1gnnqk1",
						kVIFPx: "x19kjcj4",
						$$css: !0
					},
					previewObjectTop: {
						kY2c9j: "x1u8a7rm",
						k4XH5M: "xlmzlmn",
						$$css: !0
					},
					previewObjectMid: {
						kY2c9j: "xoegz02",
						k4XH5M: "xdf93ws",
						kIY38u: "x1q5v8vf x6df6e7",
						$$css: !0
					},
					previewObjectBack: {
						kY2c9j: "xzkaem6",
						k4XH5M: "xxf9ry6",
						kIY38u: "x11e3vkd x1ewgtwq",
						$$css: !0
					},
					previewObjectBack2: {
						kY2c9j: "xhtitgo",
						k4XH5M: "xto8iho",
						kIY38u: "xzgtzp x9vm58s",
						$$css: !0
					},
					previewObjectBack3: {
						kY2c9j: "x1vjfegm",
						k4XH5M: "x5tx5f4",
						kIY38u: "x15so6qj xb5q6r6",
						$$css: !0
					},
					plateNeutral: {
						kMwMTN: "x1lyzgvx",
						$$css: !0
					},
					plateOcean: {
						kMwMTN: "x1yjt5fs",
						$$css: !0
					},
					plateMatcha: {
						kMwMTN: "x1ezoxx3",
						$$css: !0
					},
					plateSakura: {
						kMwMTN: "x1hudz9d",
						$$css: !0
					},
					plateAmber: {
						kMwMTN: "x175zgi1",
						$$css: !0
					},
					plateTerracotta: {
						kMwMTN: "x1ie0mmm",
						$$css: !0
					},
					plateIndigo: {
						kMwMTN: "x1nnyium",
						$$css: !0
					},
					plateAmethyst: {
						kMwMTN: "xj2fe8o",
						$$css: !0
					},
					plateGraphite: {
						kMwMTN: "xeylhzo",
						$$css: !0
					},
					previewObject: {
						kVAEAm: "x10l6tqk",
						kbCHJM: "x1nrll8i",
						k87sOh: "xwa60dl",
						kzqmXN: "x1oysuqx xhya9vv",
						kZKoxP: "x1m3v4wt x1t8w9e9",
						kIY38u: "x113ijq",
						kaIpWk: "x1q4ynmn",
						kVIFPx: "xl1xv1r",
						kGVxlE: "x1xa8s3i",
						$$css: !0
					},
					previewObjectSquare: {
						kaIpWk: "x2u8bby",
						k7EXQ5: "x1qd1gx7",
						$$css: !0
					},
					previewObjectSoloFill: {
						kzqmXN: "xy2penl x1ma99d7",
						kZKoxP: "x4kdb9n xe6gko4",
						$$css: !0
					},
					textSheet: {
						kmVPX3: "x1ui3rnp",
						kWkggS: "x1vnk5ex",
						kMzoRj: "xmkeg23",
						ksu8eU: "x1y0btm7",
						kVAM5u: "x13rw02b",
						kMwMTN: "x1lyzgvx",
						kGuDYH: "x1k6wstc",
						kLWn49: "xwsnznl",
						kVQacm: "xb3r6kr",
						$$css: !0
					},
					platePreview: {
						k1xSpc: "xrvj5dj",
						kgQiWS: "x1ku5rj1",
						kGuDYH: "x102p7hv",
						k63SB2: "x1xlr1w8",
						$$css: !0
					}
				},
				h = {
					neutral: g.plateNeutral,
					ocean: g.plateOcean,
					matcha: g.plateMatcha,
					sakura: g.plateSakura,
					amber: g.plateAmber,
					terracotta: g.plateTerracotta,
					indigo: g.plateIndigo,
					amethyst: g.plateAmethyst,
					graphite: g.plateGraphite
				}
		},
		2012: (e, t, a) => {},
		2153: (e, t, a) => {
			"use strict";
			a.d(t, {
				M: () => s
			});
			var i = a(1106),
				r = a(2115),
				l = a(3364),
				n = a(5155);

			function o(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function s(e) {
				var {
					src: t,
					poster: a,
					active: s,
					stylexProps: d
				} = e, c = (0, r.useRef)(null), x = (0, l.ld)(), A = (0, l.Xr)(e => e.syncVideoPlayback), p = () => {
					var e = c.current;
					if (null != e && s) {
						var {
							videoTime: t,
							videoPlaying: a
						} = x.getState();
						Number.isFinite(t) && Math.abs(e.currentTime - t) > .25 && (e.currentTime = t), a && e.play().catch(() => {})
					}
				};
				(0, r.useEffect)(() => {
					var e = c.current;
					null != e && (s ? p() : (A({
						videoTime: e.currentTime,
						videoPlaying: !e.paused
					}), e.pause()))
				}, [s]);
				var u = (0, l.Xr)(e => e.videoFullscreenNonce),
					g = (0, r.useRef)(u);
				(0, r.useEffect)(() => {
					if (u !== g.current && (g.current = u, s)) {
						var e, t;
						null == (e = c.current) || null == (t = e.requestFullscreen) || t.call(e).catch(() => {})
					}
				}, [u, s]);
				var h = () => {
					var e = c.current;
					null != e && s && A({
						videoTime: e.currentTime
					})
				};
				return (0, n.jsx)("video", function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = null != arguments[t] ? arguments[t] : {};
						t % 2 ? o(Object(a), !0).forEach(function(t) {
							(0, i.A)(e, t, a[t])
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
						})
					}
					return e
				}({
					ref: c,
					src: t,
					poster: a,
					controls: !0,
					playsInline: !0,
					preload: "metadata",
					onLoadedMetadata: p,
					onTimeUpdate: h,
					onSeeked: h,
					onPlay: () => s && A({
						videoPlaying: !0
					}),
					onPause: () => s && A({
						videoPlaying: !1
					})
				}, d))
			}
		},
		2825: (e, t, a) => {
			"use strict";
			a.d(t, {
				W: () => c
			});
			var i = a(1106),
				r = a(8490),
				l = {
					"folder-four": {
						title: "Folder Four"
					},
					"folder-four/ffour-four": {
						title: "Ffour Four"
					},
					"folder-five": {
						title: "Folder & Five"
					}
				},
				n = {};

			function o(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? o(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function d(e, t) {
				return {
					slug: e,
					path: t,
					folders: new Map,
					files: []
				}
			}
			var c = function(e) {
				var t = d("", []);
				for (var a of e) {
					var i = a.key.slice(r.lF.length).split("/").filter(e => e.length > 0),
						o = i.pop();
					if (null != o) {
						var c = t;
						for (var x of i) {
							var A = c.folders.get(x);
							null == A && (A = d(x, [...c.path, x]), c.folders.set(x, A)), c = A
						}
						c.files.push(function(e, t) {
							var a, i = t.lastIndexOf("."),
								l = n[e.key];
							return s(s(s(s({
								kind: "file",
								name: t,
								title: null != (a = null == l ? void 0 : l.title) ? a : (0, r.DA)(t)
							}, (null == l ? void 0 : l.description) != null ? {
								description: l.description
							} : {}), (null == l ? void 0 : l.tags) != null && l.tags.length > 0 ? {
								tags: l.tags
							} : {}), {}, {
								key: e.key,
								url: (0, r.Is)(e.key)
							}, e.thumb ? {
								thumbnailUrl: (0, r.Is)((0, r.Q)(e.key))
							} : {}), {}, {
								size: e.size,
								ext: i >= 0 ? t.slice(i + 1).toLowerCase() : ""
							})
						}(a, o))
					}
				}
				var p = function e(t) {
					var a, i = [...t.folders.values()].map(e).sort((e, t) => e.title.localeCompare(t.title)),
						n = [...t.files].sort((e, t) => e.name.localeCompare(t.name)),
						o = i.reduce((e, t) => e + t.fileCount, n.length),
						d = i.reduce((e, t) => e + t.totalSize, n.reduce((e, t) => e + t.size, 0)),
						c = l[t.path.join("/")];
					return s(s(s({
						kind: "folder",
						slug: t.slug,
						title: null != (a = null == c ? void 0 : c.title) ? a : (0, r.DH)(t.slug)
					}, (null == c ? void 0 : c.description) != null ? {
						description: c.description
					} : {}), (null == c ? void 0 : c.tags) != null && c.tags.length > 0 ? {
						tags: c.tags
					} : {}), {}, {
						path: t.path,
						entries: [...i, ...n],
						fileCount: o,
						folderCount: i.length,
						totalSize: d
					})
				}(t);
				return {
					entries: p.entries,
					fileCount: p.fileCount,
					totalSize: p.totalSize
				}
			}(iDownloadKeySize)
      //bio downloadKEYSIZE copy move here (Not)
		},
    
    
    
		3364: (e, t, a) => {
			"use strict";
			a.d(t, {
				Xr: () => m,
				ld: () => h,
				xZ: () => g
			});
			var i = a(1106),
				r = a(2115),
				l = a(636),
				n = a(52),
				o = a(9627);

			function s(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var c = a(8490).km,
				x = {
					openPath: [],
					focusedFile: null,
					viewerFile: null
				};

			function A(e, t) {
				return e.length === t.length && e.every((e, a) => e === t[a])
			}

			function p(e) {
				var t, a, i = (0, o.Zl)(e.nodeId),
					r = "collection" === i.kind,
					l = r && null != i.parentId ? (0, o.Zl)(i.parentId) : i,
					n = e.viewerAssetId,
					s = null == e.sitemap ? x : {
						openPath: e.sitemap.openPath,
						focusedFile: e.sitemap.viewerFile,
						viewerFile: e.sitemap.viewerFile
					};
				if ("section" === l.kind) t = (0, o.ch)(l.id).length > 0 ? null : l.id, a = null;
				else if ((0, o.ch)(l.id).length > 0) t = l.id, a = l.id;
				else {
					t = l.id;
					var d = l.parentId;
					a = null != d && "section" !== (0, o.Zl)(d).kind ? d : null
				}
				return {
					activeSectionId: (0, o.bX)(i.id),
					expandedFolderId: a,
					browseNodeId: t,
					activeCollectionId: r ? i.id : null,
					selectedAssetId: n,
					viewerAssetId: n,
					selection: null != n ? {
						kind: "asset",
						id: n
					} : {
						kind: "node",
						id: i.id
					},
					sitemap: s
				}
			}
			var u = (0, r.createContext)(null);

			function g(e) {
				var {
					route: t,
					children: a
				} = e, {
					0: i
				} = (0, r.useState)(() => (0, l.y)()(e => {
					var a, i;
					return d(d({}, p(t)), {}, {
						isFinderFullscreen: !1,
						resumeOpen: null != (a = t.resume) && a,
						aboutDetailOpen: !1,
						lightbox: null,
						openProjectId: null != (i = t.project) ? i : null,
						videoTime: 0,
						videoPlaying: !1,
						videoFullscreenNonce: 0,
						activeTag: null,
						applyRoute: t => e(e => {
							var a, i, r = p(t),
								l = null != (a = t.resume) && a,
								n = null != (i = t.project) ? i : null;
							if (null != t.sitemap) {
								var o = e.sitemap,
									s = null == t.sitemap.viewerFile && null != o.focusedFile && A(o.openPath, t.sitemap.openPath) ? d(d({}, r.sitemap), {}, {
										focusedFile: o.focusedFile
									}) : r.sitemap,
									c = A(o.openPath, s.openPath) && o.focusedFile === s.focusedFile;
								return d(d({}, r), {}, {
									resumeOpen: l,
									aboutDetailOpen: !1,
									lightbox: null,
									openProjectId: n,
									sitemap: s,
									activeTag: null
								}, c ? {} : {
									videoTime: 0,
									videoPlaying: !1
								})
							}
							var x = e.activeSectionId === r.activeSectionId && e.browseNodeId === r.browseNodeId && e.activeCollectionId === r.activeCollectionId;
							if (null == t.viewerAssetId && x && null != e.selectedAssetId) return d(d({}, r), {}, {
								resumeOpen: l,
								aboutDetailOpen: !1,
								lightbox: null,
								openProjectId: n,
								selectedAssetId: e.selectedAssetId,
								selection: e.selection,
								viewerAssetId: null
							});
							var u = e.selectedAssetId !== r.selectedAssetId;
							return d(d(d({}, r), {}, {
								resumeOpen: l,
								aboutDetailOpen: !1,
								lightbox: null,
								openProjectId: n
							}, x ? {} : {
								activeTag: null
							}), u ? {
								videoTime: 0,
								videoPlaying: !1
							} : {})
						}),
						selectSection: t => e({
							activeSectionId: t,
							expandedFolderId: null,
							browseNodeId: (0, o.ch)(t).length > 0 ? null : t,
							activeCollectionId: null,
							activeTag: null,
							selectedAssetId: null,
							selection: {
								kind: "node",
								id: t
							},
							sitemap: x
						}),
						selectFolder: t => e(e => {
							if (e.expandedFolderId === t || e.browseNodeId === t) {
								var a = (0, o.bX)(t);
								return {
									activeSectionId: a,
									expandedFolderId: null,
									browseNodeId: null,
									activeCollectionId: null,
									activeTag: null,
									selectedAssetId: null,
									selection: {
										kind: "node",
										id: a
									}
								}
							}
							var i = {
								activeSectionId: (0, o.bX)(t),
								browseNodeId: t,
								activeCollectionId: null,
								activeTag: null,
								selectedAssetId: null,
								selection: {
									kind: "node",
									id: t
								}
							};
							if ((0, o.ch)(t).length > 0) return d(d({}, i), {}, {
								expandedFolderId: t
							});
							var r = (0, o.Zl)(t).parentId,
								l = null != r && "section" !== (0, o.Zl)(r).kind;
							return d(d({}, i), {}, {
								expandedFolderId: l ? r : null
							})
						}),
						selectCollection: t => e(e => {
							var a, i = e.activeCollectionId === t ? null : t,
								r = null != (a = e.browseNodeId) ? a : e.activeSectionId;
							return {
								activeCollectionId: i,
								activeTag: null,
								selectedAssetId: null,
								selection: null == i ? {
									kind: "node",
									id: r
								} : {
									kind: "node",
									id: i
								}
							}
						}),
						selectTag: t => e(e => ({
							activeTag: e.activeTag === t ? null : t
						})),
						selectAsset: t => e(e => d({
							selectedAssetId: t,
							selection: {
								kind: "asset",
								id: t
							}
						}, e.selectedAssetId === t ? {} : {
							videoTime: 0,
							videoPlaying: !1
						})),
						clearAssetSelection: () => e(e => {
							var t, a;
							return {
								selectedAssetId: null,
								selection: {
									kind: "node",
									id: null != (t = null != (a = e.activeCollectionId) ? a : e.browseNodeId) ? t : e.activeSectionId
								}
							}
						}),
						openViewer: t => e(e => d({
							selectedAssetId: t,
							viewerAssetId: t,
							selection: {
								kind: "asset",
								id: t
							}
						}, e.selectedAssetId === t ? {} : {
							videoTime: 0,
							videoPlaying: !1
						})),
						openDownloadsFolder: t => e({
							activeSectionId: c,
							sitemap: {
								openPath: t,
								focusedFile: null,
								viewerFile: null
							}
						}),
						selectDownloadsFile: (t, a) => e(e => {
							var i = A(e.sitemap.openPath, t) && e.sitemap.focusedFile === a;
							return d({
								activeSectionId: c,
								sitemap: {
									openPath: t,
									focusedFile: a,
									viewerFile: null
								}
							}, i ? {} : {
								videoTime: 0,
								videoPlaying: !1
							})
						}),
						closeViewer: () => e(e => ({
							viewerAssetId: null,
							sitemap: d(d({}, e.sitemap), {}, {
								viewerFile: null
							})
						})),
						openResume: () => e({
							resumeOpen: !0
						}),
						closeResume: () => e({
							resumeOpen: !1
						}),
						openProject: t => e({
							openProjectId: t
						}),
						closeProject: () => e({
							openProjectId: null
						}),
						openLightbox: (t, a) => e({
							lightbox: {
								images: t,
								index: a
							}
						}),
						closeLightbox: () => e({
							lightbox: null
						}),
						openAboutDetail: () => e({
							aboutDetailOpen: !0
						}),
						closeAboutDetail: () => e({
							aboutDetailOpen: !1
						}),
						toggleFinderFullscreen: () => e(e => ({
							isFinderFullscreen: !e.isFinderFullscreen
						})),
						requestVideoFullscreen: () => e(e => ({
							videoFullscreenNonce: e.videoFullscreenNonce + 1
						})),
						syncVideoPlayback: t => e(t)
					})
				}));
				return (0, r.createElement)(u.Provider, {
					value: i
				}, a)
			}

			function h() {
				var e = (0, r.useContext)(u);
				if (null == e) throw Error("useFinderStore must be used within FinderStoreProvider");
				return e
			}

			function m(e) {
				return (0, n.P)(h(), e)
			}
		},
		4420: (e, t, a) => {},
		4781: (e, t, a) => {
			"use strict";
			a.d(t, {
				FinderApp: () => aF
			});
			var i = a(2115),
				r = a(2222),
				l = a(9627),
				n = a(8490),
				o = a(5692),
				s = a(2825),
				d = a(6606),
				c = a(9071),
				x = a(1106),
				A = a(575),
				p = a(2600);
			a(4420), a(4922);
			var u = a(3549),
				g = a.n(u),
				h = ["M61.9 84.4L61.1 85.6L58.1 85.6L56.4 84.8L53 79.7L51.2 79.7L42.4 81.5L39.5 88.6L38 88.9L36.9 88L36.5 86.8L39 81.6L36.3 81.2L36 79.5L37.5 78.3L40.5 78.3L42.8 72.3L45.1 60.1L45 50.7L45.8 49.9L46.5 49.8L48.4 51.5L49.9 54.5L52.3 62.3L53.8 73.8L54.6 76.6L56.4 78.1L56 79.5L58.7 83L61.5 82.8L61.9 84.4ZM51.8 77L49.1 61.2L47.7 57.9L46.9 66.2L43.9 78L51.8 77ZM76.1 64.8L74.9 68.5L72.9 71.3L67.6 76L63.6 77.7L61.1 76.1L59.3 73.6L59.6 62.5L57.2 63.2L55.9 62.9L55.8 61.7L56.1 60.7L59.7 59.5L60.2 58.8L68.4 58.3L71.7 59.1L73.7 60.5L76.1 64.8ZM73.6 65.2L72.3 62.7L69.6 61.2L66.2 61L62.7 61.8L63.1 62.4L62.1 70L62.4 73.4L63.7 74.1L63.6 74.7L68.1 72.7L71.8 68.6L73.6 65.2ZM95.3 64.8L94.1 68.5L92.1 71.3L86.8 76L82.8 77.7L80.3 76.1L78.5 73.6L78.8 62.5L76.4 63.2L75.2 62.9L75 61.7L75.4 60.7L78.9 59.5L79.4 58.8L87.7 58.3L91 59.1L92.9 60.5L95.3 64.8ZM92.8 65.2L91.6 62.7L88.9 61.2L85.4 61L81.9 61.8L82.3 62.4L81.4 70L81.6 73.4L83 74.1L82.9 74.7L87.3 72.7L91.1 68.6L92.8 65.2ZM122 74.6L120.5 77.5L117.7 79L113.6 80.1L111.2 79.4L111.2 77.3L116 76.8L118.7 75.9L119.1 74.5L117.7 73.6L112.6 73L107.7 71.1L106.4 67.8L107.2 65.9L111.8 61.1L113.8 59.7L117.2 58.7L117.7 60.8L117.2 61.8L111.8 64.8L109.6 67.6L109.8 68.5L111.1 69.6L119.5 71.2L121.4 72.7L122 74.6ZM140.5 62.5L139 70.3L136.8 73.5L131.8 76.4L129.8 76.9L125.7 76.9L124.1 76L122.2 71.6L122.9 69.2L125.7 64.8L130.2 60.8L134.1 58.9L137.8 58.9L140.5 62.5ZM137.9 63.8L134.9 61.9L129.9 65L128.2 66.7L126 70.3L125.8 72.5L126.7 73.7L130.3 74L134.8 71.7L136.4 69.6L137.9 63.8ZM168.2 74.6L167.6 76L164.3 77.1L162.8 76.5L161.6 72.6L162.8 64.4L159.1 69.5L154.2 72.4L152.3 72.7L149.4 71.7L146.9 66.9L146.8 65L145.3 74.6L145.6 76L146.9 77.1L145.8 78.7L143.1 78.7L142.3 73.6L143.2 66.1L144.8 59.7L148.8 59.8L150.2 66.4L151.7 69L153.2 69.8L157.7 67.2L161.3 61.7L162.1 59L163 58.6L165.1 59.3L165.8 65.5L164.9 73.2L165.3 74.3L168.2 74.6ZM186.1 60.9L184.7 61.7L178 62.1L172.3 64.2L172.6 67L180.1 66.1L181.5 66.3L181.9 67L181.2 68.4L171.7 70.6L171.3 73.1L172.4 77.1L173.8 77.8L176 77.1L178 75.6L180 72.3L181 72.3L181.7 73.6L179.6 77.4L177.5 79.4L174.6 80.8L172.5 80.8L170.6 79.9L168.5 76L169.4 62.9L175.5 59.9L185.9 60L186.1 60.9Z", "M74.3 114L71.9 115.9L62.4 116.3L57.9 113.5L57 110.5L57.3 108.4L59.6 105.5L63.2 103.6L67.4 102.9L69.3 103.2L70.5 103.7L71.2 105.2L70.6 106.5L68.7 106.9L67.5 106.4L67.8 105.4L66.9 105.1L63.6 105.9L60.1 108.3L59.6 111.3L62 114L64 114.7L67.8 115L74.3 114ZM88.4 105L87.1 111.5L85.3 114.3L79.4 117.1L76 117.1L74.6 116.3L73.1 112.7L73.3 111.4L76 106.9L79.8 103.6L83 102L86.1 102L88.4 105ZM86.2 106.2L83.7 104.5L79.5 107.2L76.3 111.6L76.1 113.4L76.8 114.4L79.1 114.9L83.6 112.7L85 111L86.2 106.2ZM104.7 103.2L103.7 105.3L104.5 115.1L103.3 118.2L101.6 119.5L98.3 118.2L96 116L92.9 111.1L91.6 117.2L92.8 120.2L90.7 121.1L89.8 120.8L89.1 116.6L90.7 109.9L91.4 103.5L92.1 102.7L93.8 103.2L94.9 108.3L96.4 111.8L99.6 116L101.5 116.9L102.5 113.3L101.3 102.3L103.3 102.2L104.7 103.2ZM126.3 103.6L125.3 105.6L124 106.1L123.7 105.6L113.7 107L114.4 114L116.3 113.9L115.5 116.5L113.8 117.4L112.5 116.9L111.5 114.8L110.9 107.6L106.5 107.8L105.5 106.5L107 105.4L119.7 103.9L124.9 102.4L126.3 103.6ZM137.4 103.7L136.2 104.4L130.6 104.7L125.9 106.5L126.1 108.8L132.3 108.1L133.9 108.8L133.3 110L125.3 111.8L125 113.9L125.9 117.2L127.1 117.8L128.9 117.2L130.6 116L132.3 113.2L133.2 113.2L133.7 114.4L132 117.5L130.2 119.2L127.7 120.4L124.4 119.6L122.7 116.3L123.4 105.3L128.5 102.8L137.2 102.9L137.4 103.7ZM151.1 103.2L150 105.3L150.9 115.1L149.7 118.2L147.9 119.5L144.6 118.2L142.3 116L139.3 111.1L138 117.2L139.2 120.2L137.1 121.1L136.2 120.8L135.5 116.6L137.1 109.9L137.7 103.5L138.5 102.7L140.2 103.2L141.2 108.3L142.7 111.8L146 116L147.9 116.9L148.9 113.3L147.7 102.3L149.7 102.2L151.1 103.2ZM172.6 103.6L171.6 105.6L170.3 106.1L170 105.6L160 107L160.8 114L162.6 113.9L161.9 116.5L160.1 117.4L158.8 116.9L157.9 114.8L157.3 107.6L152.8 107.8L151.9 106.5L153.4 105.4L166.1 103.9L171.2 102.4L172.6 103.6ZM193 107.5L192.7 108.4L191.3 109L191.6 114.6L192.3 116.9L190.7 118.6L189.9 118.1L188.7 108.8L182.8 110.6L182.7 114.5L184.5 116L183.3 117.8L181.8 117.5L180.7 116.1L180.3 111.1L177.1 112.2L176.2 112L176.6 110.4L180.6 108.5L181.4 100.8L182.7 101L183.1 101.7L183.1 107.7L188.5 106.6L188.9 100.3L190.4 100.8L191.4 106.3L193 107.5ZM208.6 103.7L207.5 104.4L201.9 104.7L197.1 106.5L197.3 108.8L203.6 108.1L205.1 108.8L204.6 110L196.6 111.8L196.2 113.9L197.2 117.2L198.4 117.8L200.2 117.2L201.9 116L203.5 113.2L204.4 113.2L204.9 114.4L203.2 117.5L201.4 119.2L199 120.4L195.7 119.6L193.9 116.3L194.7 105.3L199.8 102.8L208.4 102.9L208.6 103.7ZM236.3 114.1L235.6 114.9L222.5 117L217.2 116.6L215.5 114.9L215.9 112.9L222.1 107.4L223.5 105.2L219.8 104.6L214.7 105.4L212.8 106.2L212.5 108L212.2 112.4L212.9 115.8L214 117.4L213.5 119.1L212.6 119.1L210.8 117.5L210 114.8L210.2 106.8L208 107.8L206.8 107L206.7 106.1L211.5 103.2L212.8 103.5L221 102.1L225 102.5L226.3 103.9L225.5 106.7L224.8 108.1L218.8 113.2L219 114.7L234.9 113.4L236.3 114.1ZM244.1 103.7L242.9 104.4L237.4 104.7L232.6 106.5L232.8 108.8L239.1 108.1L240.6 108.8L240 110L232.1 111.8L231.7 113.9L232.6 117.2L233.9 117.8L235.7 117.2L237.4 116L239 113.2L239.9 113.2L240.4 114.4L238.7 117.5L236.9 119.2L234.5 120.4L231.2 119.6L229.4 116.3L230.1 105.3L235.3 102.8L243.9 102.9L244.1 103.7Z", "M131.4 153.2L130.1 155.6L128.1 156.7L124.7 157.7L122.4 157.2L122.4 155.4L126.4 155L128.6 154.2L129 153.1L127.8 152.3L123.5 151.8L119.4 150.2L118.4 147.4L119 145.9L122.8 141.9L124.5 140.7L127.4 139.9L127.8 141.6L127.4 142.4L122.9 144.9L121.1 147.3L121.2 148.1L122.3 149L129.3 150.3L130.9 151.6L131.4 153.2ZM146.9 143L145.6 149.5L143.8 152.3L137.9 155.1L134.5 155.1L133.2 154.3L131.6 150.7L131.9 149.4L134.5 144.9L138.3 141.6L141.5 140L144.7 140L146.9 143ZM144.7 144.2L142.2 142.5L138.1 145.2L134.8 149.6L134.6 151.4L135.3 152.4L137.6 152.9L142.1 150.7L143.5 149L144.7 144.2ZM162.8 152.9L160.9 153.7L159 151.8L159.2 142.4L160 141.6L161.3 142.1L161.2 150.3L162.8 152.9ZM184.2 141.6L183.2 143.6L181.9 144.1L181.6 143.6L171.6 145L172.3 152L174.2 151.9L173.4 154.5L171.7 155.4L170.4 154.9L169.4 152.8L168.8 145.6L164.4 145.8L163.5 144.5L164.9 143.4L177.6 141.9L182.8 140.4L184.2 141.6Z", "M122.1 182.4L121.1 185.8L119.1 188.4L114.8 192.2L111.3 193.7L109 192.4L107.5 190.2L107.8 180.4L105.7 181.1L104.6 180.8L104.4 179.8L104.8 178.9L108.3 177.2L115.5 176.8L118.4 177.5L120.1 178.7L122.1 182.4ZM120 182.8L118.9 180.6L116.5 179.4L113.5 179.2L110.4 179.9L110.2 189.9L111.4 190.6L111.3 191.1L115.2 189.4L118.4 185.8L120 182.8ZM138 180.4L136.6 187.3L134.7 190.1L128.6 193.1L125 193.1L123.6 192.2L122 188.4L122.6 186.3L125 182.4L129 179L132.4 177.3L135.6 177.3L138 180.4ZM135.7 181.6L133.1 179.9L128.8 182.7L125.3 187.3L125.1 189.2L125.9 190.2L128.3 190.7L133 188.5L134.4 186.7L135.7 181.6ZM154.5 179.1L153.2 179.8L147.4 180.1L142.4 182L142.7 184.4L149.2 183.6L150.8 184.4L150.2 185.7L141.9 187.5L141.5 189.7L142.5 193.2L143.8 193.8L145.6 193.2L147.4 191.9L149.1 189L150 189L150.6 190.2L148.8 193.5L146.9 195.2L144.4 196.5L142.6 196.5L140.9 195.7L139.1 192.2L139.9 180.8L145.2 178.2L154.2 178.3L154.5 179.1ZM165.7 191L164.4 193.6L162 194.9L158.4 195.8L156.4 195.2L156.4 193.4L160.5 193L162.9 192.1L163.3 191L162 190.1L157.6 189.6L153.3 187.9L152.2 185.1L152.9 183.5L156.8 179.3L158.6 178L161.6 177.2L162 179L161.6 179.8L156.9 182.4L155 184.9L155.1 185.8L156.2 186.7L163.6 188.1L165.3 189.4L165.7 191ZM182.5 178.6L181.4 180.7L182.3 191L181 194.2L179.2 195.6L175.8 194.2L173.4 191.9L170.2 186.9L168.9 193.1L169 194.6L170.1 196.3L167.9 197.3L167 196.9L166.2 192.6L167.9 185.6L168.6 178.9L169.3 178.1L171.2 178.6L172.2 183.8L173.8 187.5L177.2 191.9L179.2 192.8L180.2 189.1L179 177.7L181.1 177.5L182.5 178.6ZM190.7 172.9L188.7 178.6L188.9 180.9L186.9 182.2L185.5 180.2L187.8 172.4L189.9 171.9L190.7 172.9ZM211.2 178.9L210.1 181.1L208.8 181.6L208.5 181.1L198 182.6L198.8 189.8L200.7 189.7L200.7 191.2L200 192.5L198.1 193.4L196.8 192.8L195.8 190.6L195.2 183.1L190.5 183.3L189.5 182L190 181.2L191.1 180.9L204.3 179.3L209.7 177.8L211.2 178.9ZM230.6 188L229.6 189.6L225 192.1L221.6 192.7L220 192.3L218.6 190.5L218.2 188.6L218.9 183.8L218.9 181.4L218.3 180L218.7 178.8L219.8 177.9L221.7 178.4L221.9 182.3L221.1 187.3L221.6 189.9L223.7 190L229 187.8L230.6 188ZM245.2 180.4L243.9 187.3L242 190.1L235.8 193.1L232.3 193.1L230.9 192.2L229.3 188.4L229.8 186.3L232.3 182.4L236.2 179L239.6 177.3L242.9 177.3L245.2 180.4ZM242.9 181.6L240.3 179.9L236 182.7L232.6 187.3L232.4 189.2L233.1 190.2L235.6 190.7L240.2 188.5L241.6 186.7L242.9 181.6ZM261.7 180.4L260.3 187.3L258.4 190.1L252.3 193.1L248.7 193.1L247.3 192.2L245.7 188.4L246.3 186.3L248.7 182.4L252.7 179L256.1 177.3L259.3 177.3L261.7 180.4ZM259.3 181.6L256.8 179.9L252.4 182.7L249 187.3L248.8 189.2L249.6 190.2L252 190.7L256.7 188.5L258.1 186.7L259.3 181.6ZM281.8 192.8L280.6 193.8L275.2 194L267.1 190L267.6 191.7L267.2 192.5L265.7 194L264.7 193.7L263.7 191.9L265.5 178.4L266.4 178.1L267.7 179.4L267.4 184.1L271.8 181.3L273.9 179.2L274.7 177.5L276.6 177.9L276 179.9L273.3 182.9L267.8 186.6L274.9 191.1L281.5 191.8L281.8 192.8Z", "M105.8 211L104 212L95.8 212.5L88.9 215.1L89.2 218.5L98.4 217.4L100.1 217.7L100.6 218.5L99.8 220.3L93.1 222L89 222.3L88.1 222.9L87.6 226L88.9 230.9L90.7 231.8L93.3 230.9L95.8 229L98.2 225L99.5 225L100.3 226.7L97.8 231.3L95.2 233.7L91.6 235.5L89.1 235.5L86.7 234.3L85.5 233L84.1 229.5L84.3 221L85.3 218.6L85.2 213.4L92.8 209.8L105.4 209.9L105.8 211ZM135.9 227.8L135.1 229.6L131 230.9L129.3 230.2L127.8 225.4L129.2 215.3L124.7 221.6L118.7 225.1L116.3 225.5L114.9 225.4L112.8 224.3L109.7 218.4L109.5 216L107.7 227.8L108.1 229.5L109.7 230.9L108.3 232.8L105 232.8L104.1 226.7L105.1 217.4L107.1 209.6L110.5 209.2L112 209.6L113.8 217.8L115.6 221L117.5 221.9L122.1 219.8L123.4 218.3L127.4 212L128.3 208.7L129.5 208.2L132.1 209.1L132.8 211.6L133 216.7L131.8 222.4L131.8 226.1L132.3 227.5L135.9 227.8ZM162.7 213.2L162.6 215.5L160.7 218.4L156 221.8L146.5 226.3L144.2 226.2L143.9 223.8L147.7 222.5L157.4 217.3L158.5 214.4L153 213.1L147.8 213.8L142.8 215.7L141.8 218.8L142 228.7L142.5 230.7L145.2 230.3L145.8 231.6L145.4 232.4L142.1 233.8L140.5 233.8L139.6 233.1L138.2 229.8L138.2 218.5L137 218.6L136.2 217.1L137.9 213.8L145.3 211L154.6 209.5L160.7 211.2L162.7 213.2ZM192.1 210.8L190.6 213.9L188.8 214.5L188.3 213.9L173.6 215.9L174.7 226.1L177.4 226L177.4 228.1L176.3 229.8L173.7 231.1L171.9 230.3L170.4 227.3L169.6 216.7L168.9 216.2L163 217L162 216.4L161.7 215.2L162.3 214L163.8 213.5L182.5 211.3L190.1 209.2L191.3 210.7L192.1 210.8ZM205 209.3L200.8 220.1L199.4 227.2L200.6 229.9L202.8 231.3L201.4 233.1L200.2 232.9L197.5 230.9L196.3 228.2L196.7 220.3L192.5 221.8L190.1 221.5L187.4 220.3L185.7 217.1L185.8 211L187.3 209L190.1 210L190.3 216.4L191.1 217.8L192.1 218.1L196.2 216.7L198 215.3L201.9 206.5L204.2 206.4L205 209.3ZM213.8 204.4L212.6 214.1L209.3 226.3L209.3 227.4L210.6 228.3L210.6 229.1L209 230.8L206.9 231L206 230.3L205.5 226.3L208.9 215L210.1 207.3L209.5 204.7L209.9 202.1L212 201.8L213.7 203.3L213.8 204.4ZM211.7 241L211.6 241.6L209.8 242.1L208.6 243.1L207.5 242.3L207.1 240.9L209 238.2L211.7 241Z", "M37.7 248.6L35.1 248.6L29.4 250.5L28.1 261.2L28.3 264L29.3 264.8L28.9 266L27.5 266.2L26.4 263.5L27.6 251L20.6 253.1L19.5 252.7L19.5 251.3L34.2 247.1L36.6 246.9L37.6 247.4L37.7 248.6ZM49.5 255L48.3 259.8L46.6 261.8L42.3 264.5L37.1 266.1L35.2 265.4L33.7 263.8L33.3 261.2L34.7 256.7L38.3 249.6L40.8 247L42.6 246.6L43.6 248.5L45.8 248.9L47.8 250.5L49.5 255ZM48.2 255.8L47.9 253.5L46.3 251.1L43.6 250.2L44.1 251.5L42.8 251.8L41.1 249.5L40.4 249.7L35.9 257.8L35.2 262.7L36.5 264.1L38 264.3L42.4 262.8L47.2 258.9L48.2 255.8ZM65.4 252.4L64.6 255.9L60.8 261.7L55.3 267.1L53 266.8L52.3 262.8L52.8 256.4L52.5 250.3L49.7 251.6L49 250.9L49.7 249.5L56.6 247.1L59.6 246.8L63.7 248.8L65 250.5L65.4 252.4ZM63.9 252.7L63.4 250.6L60.2 248.6L57.8 248.5L54.1 249.7L54.4 264.8L57 263.3L59.8 260.3L63.2 255.4L63.9 252.7ZM82.2 255L81.1 259.8L79.3 261.8L75.1 264.5L69.9 266.1L67.9 265.4L66.4 263.8L66 261.2L67.4 256.7L71.1 249.6L73.6 247L75.3 246.6L76.4 248.5L78.5 248.9L80.5 250.5L82.2 255ZM81 255.8L80.6 253.5L79.1 251.1L76.4 250.2L76.9 251.5L75.5 251.8L73.8 249.5L73.2 249.7L68.7 257.8L68 262.7L69.2 264.1L70.7 264.3L75.1 262.8L80 258.9L81 255.8Z"],
				m = a(5155);

			function w(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? w(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : w(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function b() {
				return (0, m.jsx)("div", y(y({}, {
					className: "x1s85apg x197uy0l xr1yuqi xamitd3 x1fidqkd xyjmb7y xehqz9p x47corl x19vgsqa"
				}), {}, {
					"aria-hidden": "true",
					children: (0, m.jsxs)("svg", y(y({}, {
						className: "x1lliihq xh8yej3 xt7dq6l x1rea2x4"
					}), {}, {
						viewBox: "0 0 300 280",
						fill: "none",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [(0, m.jsxs)("g", {
							strokeWidth: 2,
							opacity: .85,
							children: [(0, m.jsx)("path", {
								d: "M26 36 C92 32 202 33 288 29"
							}), (0, m.jsx)("path", {
								d: "M284 24 C286 96 285 190 286 264"
							}), (0, m.jsx)("path", {
								d: "M293 256 C200 264 92 265 18 268"
							}), (0, m.jsx)("path", {
								d: "M24 244 C22 168 23 98 28 52"
							})]
						}), (0, m.jsx)("g", {
							fill: "currentColor",
							stroke: "none",
							children: h.map((e, t) => (0, m.jsx)("path", {
								d: e
							}, t))
						})]
					}))
				}))
			}
			var j = a(3364),
				f = a(8861),
				k = a(825);

			function v(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function L(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? v(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var O = ["search", "sitemap"];

			function P(e, t, a, i, r, l, n) {
				var o, s, d, c, x, A, p, u = r - a,
					g = l - i,
					h = Math.hypot(u, g) || 1,
					m = u / h,
					w = g / h,
					y = a - e,
					b = i - t,
					j = Math.hypot(y, b) || 1,
					f = a - 18 * m,
					k = i - 18 * w;
				return {
					d: "M".concat(D(e), " ").concat(D(t), "C").concat(D(e + .45 * y + -b / j * n), " ").concat(D(t + .45 * b + y / j * n), " ").concat(D(f), " ").concat(D(k), " ").concat(D(a), " ").concat(D(i)),
					head: (o = a, s = i, d = m, c = w, x = o - 9 * d, A = s - 9 * c, p = -c, "M".concat(D(x + 4.5 * p), " ").concat(D(A + 4.5 * d), "L").concat(D(o), " ").concat(D(s), "L").concat(D(x - 4.5 * p), " ").concat(D(A - 4.5 * d)))
				}
			}

			function I() {
				var e = (0, j.Xr)(e => e.selectSection),
					t = (0, j.Xr)(e => e.openResume),
					a = (0, i.useRef)(null),
					r = (0, i.useRef)(null),
					l = (0, i.useRef)([]),
					{
						0: n,
						1: o
					} = (0, i.useState)([]),
					s = (0, i.useCallback)(() => {
						var e, t = a.current;
						if (null != t) {
							var i = (null != (e = r.current) ? e : t).getBoundingClientRect();
							if (window.matchMedia(k.ny).matches) return void o(O.map((e, t) => {
								var a, r, n, o = l.current[t],
									s = null == o ? void 0 : o.querySelector("a"),
									d = document.querySelector('[data-section-dock="'.concat(e, '"]'));
								if (null == s || null == d) return null;
								var c = s.getBoundingClientRect(),
									x = d.getBoundingClientRect(),
									A = 0 === t,
									p = A ? c.left - i.left - 16 : c.right - i.left + 12,
									u = c.top - i.top + c.height / 2,
									g = x.left + x.width / 2 - i.left,
									h = x.top + x.height / 2 - i.top,
									m = Math.min(i.height - 16, h - 46);
								if (m <= u + 30 || h <= u) return null;
								var w = p + (m - u) / (h - u) * (g - p);
								if (A) return a = Math.hypot(w - p, m - u) || 1, r = P(p, u, w, m, g, h, Math.min(96, .17 * a)), n = "M".concat(D(p + 12), " ").concat(D(u - 3)) + "C".concat(D(p + 13), " ").concat(D(u - 12), " ").concat(D(p + 2), " ").concat(D(u - 17), " ").concat(D(p - 3), " ").concat(D(u - 10)) + "C".concat(D(p - 6), " ").concat(D(u - 5), " ").concat(D(p - 3), " ").concat(D(u - 1), " ").concat(D(p), " ").concat(D(u)), {
									d: "".concat(n).concat(r.d),
									head: r.head
								};
								var y = Math.hypot(w - p, m - u);
								return P(p, u, w, m, g, h, -.8 * Math.min(72, .12 * y))
							}));
							o(O.map((e, t) => {
								var a = l.current[t],
									r = document.querySelector('[data-section-nav="'.concat(e, '"]'));
								if (null == a || null == r) return null;
								var n = a.getBoundingClientRect(),
									o = r.getBoundingClientRect(),
									s = n.left - i.left - 8,
									d = n.top - i.top + n.height / 2,
									c = o.left + o.width / 2 - i.left,
									x = o.top + o.height / 2 - i.top;
								return c > s - 24 ? null : P(s, d, 6, d + (x - d) * .5 - 24, c, x, 0 === t ? 20 : 11)
							}))
						}
					}, []);
				(0, i.useEffect)(() => {
					var e, t = !1,
						i = () => {
							t || s()
						};
					i();
					var r = a.current,
						l = new ResizeObserver(i);
					return null != r && (l.observe(r), r.addEventListener("scroll", i, {
						passive: !0
					})), window.addEventListener("resize", i), null == (e = document.fonts) || e.ready.then(i).catch(() => {}), () => {
						t = !0, l.disconnect(), window.removeEventListener("resize", i), null == r || r.removeEventListener("scroll", i)
					}
				}, [s]);
				var c = (t, a) => (0, m.jsx)(g(), L(L({
					href: (0, d.EJ)(t),
					scroll: !1,
					onClick: () => e(t)
				}, {
					className: "xjyslct xc342km x1717udv xjbqb8w x1heor9g xlch9iz xln7xf2 x1ypdohk xujl8zx x10waewu xda060z xt3l3uh x9i6iqp x1qmg8k3"
				}), {}, {
					children: a
				}));
				return (0, m.jsxs)("section", L(L({
					ref: a
				}, p.xk(f.R.archivePanel, R.aboutPanel)), {}, {
					children: [(0, m.jsxs)("div", L(L({}, {
						className: "x1x56k28 xnw25ik x1xzf9ci xxzotig"
					}), {}, {
						children: [(0, m.jsxs)("p", L(L({}, {
							className: "x1ghz6dp x1arkxo6 xwsyq91 x1xxlnbl x1jjo3f5 xjat59b"
						}), {}, {
							children: ["Hello, I’m ", (0, m.jsx)(Q, {
								children: "Bi-O"
							}), ".", " ", (0, m.jsxs)("span", L(L({}, {
								className: "x197uy0l"
							}), {}, {
								children: ["This is my ", (0, m.jsx)(U, {
									children: "personal website"
								}), ".", " ", (0, m.jsx)("span", L(L({}, {
									className: "x1lliihq x1lr8sza"
								}), {}, {
									children: "Welcome."
								}))]
							}))]
						})), (0, m.jsxs)("div", L(L({}, {
							className: "x1msaokc xrvj5dj x1v2ro7d"
						}), {}, {
							children: [(0, m.jsx)("span", L(L({
								ref: e => {
									l.current[0] = e
								}
							}, {
								className: "x78zum5 x1pha0wt x1a02dak x167g77z x1xc03n1 xif65rj x14v10zd x1dbl2gt"
							}), {}, {
								children: c("search", "Find the stuff I made here.")
							})), (0, m.jsx)("span", L(L({
								ref: e => {
									l.current[1] = e
								}
							}, {
								className: "x78zum5 x1pha0wt x1a02dak x167g77z x1xc03n1 xif65rj x14v10zd x1dbl2gt"
							}), {}, {
								children: c("sitemap", "Find the things I like here.")
							}))]
						})), (0, m.jsxs)("p", L(L({}, {
							className: "xbjp52g x1xc03n1 xif65rj x14v10zd x1dbl2gt"
						}), {}, {
							children: ["And here’s my", " ", (0, m.jsx)(g(), L(L({
								href: (0, d.Fr)(),
								scroll: !1,
								onClick: t
							}, {
								className: "xjyslct xc342km x1717udv xjbqb8w x1heor9g xlch9iz xln7xf2 x1ypdohk xujl8zx x10waewu xda060z xt3l3uh x9i6iqp x1qmg8k3"
							}), {}, {
								children: "r\xe9sum\xe9"
							})), " ", "."]
						}))]
					})), (0, m.jsx)(b, {}), (0, m.jsx)("svg", L(L({
						ref: r
					}, {
						className: "x10l6tqk x13vifvy xu96u03 xh8yej3 x5yr21d x1rea2x4 x47corl xnlgw9m"
					}), {}, {
						"aria-hidden": "true",
						children: n.map((e, t) => null == e ? null : (0, m.jsxs)("g", {
							fill: "none",
							stroke: "currentColor",
							strokeWidth: 1.6,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [(0, m.jsx)("path", {
								d: e.d
							}), (0, m.jsx)("path", {
								d: e.head
							})]
						}, O[t]))
					}))]
				}))
			}

			function D(e) {
				return Math.round(10 * e) / 10
			}

			function Q(e) {
				var {
					children: t
				} = e;
				return (0, m.jsxs)("span", L(L({}, {
					className: "x1n2onr6 x1rg5ohu xuxw1ft"
				}), {}, {
					children: [t, (0, m.jsx)("svg", L(L({}, {
						className: "x10l6tqk xor927e x1qjmw4x xk7eppj x1rqt44b x1rea2x4 x47corl xnlgw9m"
					}), {}, {
						viewBox: "0 0 100 44",
						preserveAspectRatio: "none",
						fill: "none",
						"aria-hidden": "true",
						children: (0, m.jsx)("path", {
							d: "M86 6 C60 -2 27 -1 13 9 C1 18 5 34 26 39 C52 45 84 39 94 26 C100 18 94 8 70 5",
							stroke: "currentColor",
							strokeWidth: 2.2,
							strokeLinecap: "round",
							vectorEffect: "non-scaling-stroke"
						})
					}))]
				}))
			}

			function U(e) {
				var {
					children: t
				} = e;
				return (0, m.jsxs)("span", L(L({}, {
					className: "x1n2onr6 x1rg5ohu xuxw1ft"
				}), {}, {
					children: [t, (0, m.jsx)("svg", L(L({}, {
						className: "x10l6tqk xu96u03 x1ot2bnl xh8yej3 x1ts8jgn x1rea2x4 x47corl xnlgw9m"
					}), {}, {
						viewBox: "0 0 100 8",
						preserveAspectRatio: "none",
						fill: "none",
						"aria-hidden": "true",
						children: (0, m.jsx)("path", {
							d: "M1 4 C24 8 58 1 99 5",
							stroke: "currentColor",
							strokeWidth: 2,
							strokeLinecap: "round",
							vectorEffect: "non-scaling-stroke"
						})
					}))]
				}))
			}
			var R = {
				aboutPanel: {
					k1xSpc: "xtmuxrs",
					kXwgrk: "xdt5ytf",
					$$css: !0
				}
			};

			function C(e) {
				var t = (0, i.useRef)(e),
					a = t.current;
				return (0, i.useEffect)(() => {
					t.current = e
				}), a
			}
			var q = a(4389),
				S = a(1289);

			function B(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function M(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? B(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function z(e) {
				var t, {
						breadcrumbs: a,
						dense: i = !1,
						eyebrow: r,
						inline: l = !1,
						showTitle: n = !0,
						title: o
					} = e,
					s = (0, j.ld)(),
					c = null == a || null == (t = a.at(-1)) ? void 0 : t.id;
				return null == a && l && n ? (0, m.jsxs)("div", M(M({}, p.xk(f.R.panelHeader, i && N.panelHeaderDense, N.panelHeadingRow)), {}, {
					children: [r ? (0, m.jsx)("span", M(M({}, p.xk(f.R.panelEyebrow)), {}, {
						children: r
					})) : null, (0, m.jsx)("h2", M(M({}, p.xk(f.R.panelTitle, N.panelTitleInline)), {}, {
						children: o
					}))]
				})) : (0, m.jsxs)("div", M(M({}, p.xk(f.R.panelHeader, i && N.panelHeaderDense)), {}, {
					children: [null == a ? r ? (0, m.jsx)("span", M(M({}, p.xk(f.R.panelEyebrow)), {}, {
						children: r
					})) : null : (0, m.jsx)("nav", M(M({}, p.xk(f.R.breadcrumb)), {}, {
						"aria-label": "".concat(o, " path"),
						children: a.map((e, t) => {
							var a = e.id === c;
							return (0, m.jsxs)("span", M(M({}, p.xk(f.R.breadcrumbItem)), {}, {
								children: [t > 0 ? (0, m.jsx)("span", M(M({}, p.xk(f.R.breadcrumbSeparator)), {}, {
									children: "/"
								})) : null, a ? (0, m.jsx)("span", M(M({}, p.xk(f.R.breadcrumbCurrent)), {}, {
									children: e.title
								})) : (0, m.jsx)(g(), M(M({
									href: (0, d.EJ)(e.id),
									scroll: !1,
									onClick: () => s.getState().applyRoute({
										nodeId: e.id,
										viewerAssetId: null
									})
								}, p.xk(f.R.breadcrumbButton)), {}, {
									children: e.title
								}))]
							}), e.id)
						})
					})), n ? (0, m.jsx)("h2", M(M({}, p.xk(f.R.panelTitle)), {}, {
						children: o
					})) : null]
				}))
			}
			var N = {
					panelHeaderDense: {
						k1K539: "xyorhqc",
						$$css: !0
					},
					panelHeadingRow: {
						k1xSpc: "x78zum5",
						kGNEyG: "x1pha0wt",
						kOIVth: "x17d4w8g",
						$$css: !0
					},
					panelTitleInline: {
						kogj98: "x1ghz6dp",
						$$css: !0
					}
				},
				J = a(424),
				G = a(7650);

			function E(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function V(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? E(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : E(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function X(e) {
				var {
					title: t,
					description: a,
					meta: r
				} = e, {
					0: l,
					1: n
				} = (0, i.useState)(!1), o = (0, i.useRef)(null);
				return (0, m.jsxs)("div", V(V({}, p.xk(f.R.detailCopy)), {}, {
					children: [(0, m.jsxs)("p", V(V({}, p.xk(f.R.detailLead)), {}, {
						children: [a, null != r ? (0, m.jsx)("button", V(V({
							ref: o,
							type: "button",
							"aria-label": "".concat(t, " details"),
							"aria-haspopup": "dialog",
							onClick: () => n(!0)
						}, {
							className: "xjyslct x3nfvp2 x6s0dn4 xl56j7k xxymvpz x1td3qas x10w6t97 xaclz68 xc342km x1e6avla x1717udv xjbqb8w x1e85lb0 xcj22o9 x1ypdohk"
						}), {}, {
							children: (0, m.jsx)(F, {})
						})) : null]
					})), l && null != r ? (0, m.jsx)(T, {
						title: t,
						onClose: () => {
							var e;
							n(!1), null == (e = o.current) || e.focus()
						},
						children: r
					}) : null]
				}))
			}

			function T(e) {
				var {
					title: t,
					onClose: a,
					children: r
				} = e, l = (0, i.useRef)(null);
				return (0, i.useEffect)(() => {
					null == (e = l.current) || e.focus();
					var e, t = e => {
						"Escape" === e.key && a()
					};
					return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t)
				}, []), (0, G.createPortal)((0, m.jsxs)("div", V(V({}, {
					className: "xixxii4 x10a8y8t x1095uzl xrvj5dj x1ku5rj1 x10xs6qf"
				}), {}, {
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "".concat(t, " details"),
					children: [(0, m.jsx)(A.PY1.div, V(V({}, p.xk(W.mobileMetaModalScrim, f.R.frostedWell)), {}, {
						onClick: a,
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						}
					})), (0, m.jsxs)(A.PY1.div, V(V({
						ref: l,
						tabIndex: -1
					}, {
						className: "x1n2onr6 xvhyrt4 x1fk5tpq xysyzu8 xugzpu4 xmkeg23 x1y0btm7 x15zz4w7 x1384q4x x56zdhj xb3h1wu xn0l4dx x18hufzr x1t137rt"
					}), {}, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						},
						children: [(0, m.jsx)("p", V(V({}, {
							className: "x1ghz6dp x1spfu80 x1jvydc1 x1xlr1w8 x1w2vvpw"
						}), {}, {
							children: t
						})), r]
					}))]
				})), document.body)
			}

			function F() {
				return (0, m.jsxs)("svg", V(V({
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.6,
					strokeLinecap: "round",
					"aria-hidden": "true"
				}, {
					className: "x1lliihq x1se2ifz x1ta3ar0"
				}), {}, {
					children: [(0, m.jsx)("circle", {
						cx: "12",
						cy: "12",
						r: "9"
					}), (0, m.jsx)("circle", {
						cx: "12",
						cy: "8.2",
						r: "0.9",
						fill: "currentColor",
						stroke: "none"
					}), (0, m.jsx)("path", {
						d: "M12 11.2v5"
					})]
				}))
			}
			var W = {
				mobileMetaModalScrim: {
					kVAEAm: "x10l6tqk",
					kpwlN0: "x10a8y8t",
					kWkggS: "x101qr1i",
					kkrTdU: "xt0e3qv",
					$$css: !0
				}
			};

			function Y(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function Z(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Y(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function $(e) {
				var t, a, {
						nodeId: i,
						xstyle: r
					} = e,
					n = (0, l.Ug)({
						kind: "node",
						id: i
					}),
					o = n.meta.length > 0 || null != n.membership || (null != (t = null == (a = n.tags) ? void 0 : a.length) ? t : 0) > 0;
				return (0, m.jsx)("div", Z(Z({}, p.xk(f.R.mobileNodeDetail, r)), {}, {
					children: (0, m.jsx)(X, {
						title: n.title || "About",
						description: n.description,
						meta: o ? (0, m.jsx)(J.Bk, {
							detail: n
						}) : void 0
					})
				}))
			}
			var H = a(5703);

			function K(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function _(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? K(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : K(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function ee(e) {
				var {
					activeCollectionId: t,
					currentNode: a,
					nodes: i
				} = e, r = (0, j.Xr)(e => e.selectCollection), n = i.some(e => "cover" === (0, l.xz)(e)), o = e => (0, d.EJ)(e === t ? a.id : e);
				return n ? (0, m.jsx)("div", _(_({}, {
					className: "x78zum5 x1dwie8v xat24cr xw2csxc x1rmkpfv"
				}), {}, {
					"aria-label": "".concat(a.title, " collections"),
					children: i.map(e => {
						var a = (0, l.bB)(e.id),
							i = (0, l.hy)(a),
							n = e.id === t;
						return (0, m.jsxs)(g(), _(_({
							href: o(e.id),
							scroll: !1,
							onClick: () => r(e.id)
						}, {
							0: {
								className: "xjyslct xrvj5dj x1ma2wa0 x1o2pa38 xe2mol3 xc342km xur7f20 x1i3ajwb xjbqb8w x1arkxo6 xln7xf2 x1ypdohk x19991ni xpceaqw x1qmg8k3"
							},
							1: {
								className: "xjyslct xrvj5dj x1ma2wa0 x1o2pa38 xe2mol3 xc342km xur7f20 x1i3ajwb xjbqb8w x1arkxo6 xln7xf2 x1ypdohk x19991ni xpceaqw x1qmg8k3 x1wst0fl"
							}
						} [0 | !!(null != t && !n)]), {}, {
							children: [(0, m.jsxs)("span", _(_({}, {
								className: "x1n2onr6 xrvj5dj x1w6b5kq x15xdemv x1ku5rj1 x1e6avla xdh2fpr x1y0btm7 x1q34vt3 xevzy0m"
							}), {}, {
								children: [(0, m.jsx)("span", _({
									"aria-hidden": !0
								}, {
									0: {
										className: "x10l6tqk x1v1xp8j x1e6avla x16v6kdu x1k22o8q x1c6u948 xg01cxk x47corl x19991ni xpceaqw x1qmg8k3"
									},
									1: {
										className: "x10l6tqk x1v1xp8j x1e6avla x16v6kdu x1k22o8q x1c6u948 x47corl x19991ni xpceaqw x1qmg8k3 x1hc1fzr"
									}
								} [0 | !!n])), null == i ? (0, m.jsx)("span", _(_({}, {
									className: "xrvj5dj xh8yej3 x5yr21d x1ku5rj1 x1e6avla xb3r6kr xl1xv1r x1tjmeky x5s78n2 x1j6dyjg x1xlr1w8"
								}), {}, {
									children: (0, l.$0)(e)
								})) : (0, m.jsx)(H.w, {
									src: i,
									sizes: "80px",
									pixelArt: null != a && (0, l.eS)(a),
									stylexProps: {
										className: "xrvj5dj xh8yej3 x5yr21d x1ku5rj1 x1e6avla xb3r6kr xl1xv1r x1tjmeky x5s78n2 x1j6dyjg x1xlr1w8"
									}
								})]
							})), (0, m.jsx)("span", _(_({}, {
								className: "x193iq5w xb3r6kr x1lyzgvx x9bo3j5 xo5v014 x1xlr1w8 xlyipyv xuxw1ft x1e0vk5f"
							}), {}, {
								children: e.title
							}))]
						}), e.id)
					})
				})) : (0, m.jsx)("div", _(_({}, {
					className: "x78zum5 x1a02dak x167g77z x1u7kmwd"
				}), {}, {
					"aria-label": "".concat(a.title, " filters"),
					children: i.map(e => (0, m.jsx)(g(), _(_({
						href: o(e.id),
						scroll: !1,
						onClick: () => r(e.id)
					}, {
						0: {
							className: "xjyslct x3nfvp2 x6s0dn4 x1rz828m xc342km x1e6avla x84vhe8 x12n8y0n x18d4n7m xibk21m xln7xf2 x1j6dyjg x1xlr1w8 x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3"
						},
						1: {
							className: "xjyslct x3nfvp2 x6s0dn4 x1rz828m xc342km x1e6avla x84vhe8 xln7xf2 x1j6dyjg x1xlr1w8 x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3 xfdofr9 xqdxsec x1spfu80"
						}
					} [e.id === t | 0]), {}, {
						children: e.title
					}), e.id))
				}))
			}
			var et = a(91);

			function ea(e, t) {
				var a = null == t ? e : "".concat(e, "#by=").concat(encodeURIComponent(t));
				window.history.replaceState(null, "", a)
			}

			function ei(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function er(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ei(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ei(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function el(e) {
				var {
					assets: t
				} = e, a = (0, r.useRouter)(), i = (0, j.Xr)(e => e.selectedAssetId), n = (0, j.Xr)(e => e.selectAsset), o = (0, j.Xr)(e => e.openViewer), s = (0, j.Xr)(e => e.requestVideoFullscreen), c = (0, j.Xr)(e => {
					var t, a;
					return null != (t = null != (a = e.activeCollectionId) ? a : e.browseNodeId) ? t : e.activeSectionId
				}), x = (0, q.I)(), p = e => {
					"video" === e.type ? s() : (o(e.id), a.push((0, d.Iz)(c, e.id), {
						scroll: !1
					}))
				};
				if (0 === t.length) return (0, m.jsx)("div", er(er({}, {
					className: "xrvj5dj x7v6ubd x1ku5rj1 x1q4ynmn x1bpjqwa xa0v8vl x1j6dyjg xpx8vt0 x1xlr1w8"
				}), {}, {
					children: "No files mapped here yet."
				}));
				var u = function(e) {
					var t = [];
					for (var a of e) {
						var i = Number(a.createdAt.slice(0, 4)),
							r = t.at(-1);
						null != r && r.year === i ? r.assets.push(a) : t.push({
							year: i,
							assets: [a]
						})
					}
					return t
				}(t);
				return (0, m.jsx)("div", er(er({}, {
					className: "xrvj5dj x17d4w8g xdj266r x1ijh9vj"
				}), {}, {
					children: u.map(e => (0, m.jsxs)("div", er(er({}, {
						className: "xrvj5dj x12mrbbr"
					}), {}, {
						children: [(0, m.jsx)("p", er(er({}, {
							className: "x7wzq59 x44pmz8 x1vjfegm xfufjno x1tn3bim x64gns0 x1uf9kvz x1qy0e5 x1dmgsgi x1l0vmcy xa0v8vl x1k6wstc xmgt7rl x1xlr1w8 x1vyo3qp"
						}), {}, {
							children: e.year
						})), (0, m.jsx)(et.N, {
							initial: !1,
							mode: "popLayout",
							children: e.assets.map(e => (0, m.jsxs)(A.PY1.button, er(er({
								layout: !x && "position",
								initial: !x && {
									opacity: 0,
									y: 6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: x ? {
									opacity: 0
								} : {
									opacity: 0,
									y: -4
								},
								transition: {
									duration: S.ui,
									ease: S.Mj
								},
								type: "button",
								onClick: () => {
									"markdown" === e.type && window.matchMedia(k.ny).matches ? p(e) : (n(e.id), ea(window.location.pathname, e.id))
								},
								onDoubleClick: () => p(e),
								whileTap: {
									scale: .99
								}
							}, {
								0: {
									className: "xjyslct xrvj5dj xkcjl4x x6s0dn4 x167g77z x1rz828m x1kmo003 xc342km xur7f20 xmfpazt xjbqb8w x3wo5r3 xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1ypdohk x15406qy x9i6iqp x1qmg8k3"
								},
								1: {
									className: "xjyslct xrvj5dj xkcjl4x x6s0dn4 x167g77z x1rz828m x1kmo003 xc342km xur7f20 xmfpazt xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1ypdohk x15406qy x9i6iqp x1qmg8k3 xpwnbzc x1pd0ka5 x1xlr1w8"
								}
							} [e.id === i | 0]), {}, {
								children: [(0, m.jsx)(en, {
									asset: e
								}), (0, m.jsx)("span", er(er({}, {
									className: "xb3r6kr xlyipyv xuxw1ft"
								}), {}, {
									children: (0, l.Kd)(e)
								}))]
							}), e.id))
						})]
					}), "year-".concat(e.year)))
				}))
			}

			function en(e) {
				var t, {
						asset: a
					} = e,
					i = (0, l.hy)(a);
				return null != i ? (0, m.jsx)(H.w, {
					src: i,
					sizes: "64px",
					pixelArt: (0, l.eS)(a),
					stylexProps: {
						className: "xgd8bvy x1fgtraw x12oqio5 xl1xv1r x17p5adq"
					}
				}) : (0, m.jsx)("span", er(er({}, {
					className: "xrvj5dj xgd8bvy x1fgtraw x1ku5rj1 x12oqio5 xl8idw1 x1h5p6u4 x1k6wstc x1xlr1w8"
				}), {}, {
					children: "markdown" === (t = a.type) ? "T" : "video" === t ? "P" : "pdf" === t ? "F" : "I"
				}))
			}

			function eo(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function es(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eo(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eo(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function ed(e) {
				var {
					activeCollectionId: t,
					assets: a,
					node: r
				} = e, n = (0, q.I)(), o = (0, i.useRef)(null), s = (0, i.useRef)(null), d = (0, j.Xr)(e => "asset" === e.selection.kind);
				(0, k.c5)(o, d);
				var c = (0, j.Xr)(e => e.activeTag),
					x = (0, j.Xr)(e => e.selectTag),
					u = (0, i.useCallback)(() => {
						var e = o.current,
							t = s.current;
						if (null != e && null != t) {
							var a = Math.min(1, Math.max(0, e.scrollTop / 60));
							e.style.setProperty("--collapse", String(a)), e.style.setProperty("--sticky-head-h", "".concat(t.offsetHeight, "px"))
						}
					}, []);
				if ((0, i.useLayoutEffect)(() => {
						u();
						var e = s.current;
						if (null != e) {
							var t = new ResizeObserver(u);
							return t.observe(e), () => t.disconnect()
						}
					}, [null == r ? void 0 : r.id, u]), null == r) return (0, m.jsx)("section", es(es({}, p.xk(f.R.archivePanel)), {}, {
					children: (0, m.jsx)("div", es(es({}, {
						className: "x1v56k37 xecb4gi"
					}), {}, {
						children: (0, m.jsx)(ec, {
							hint: "Select a folder to browse its files"
						})
					}))
				}));
				var g = (0, l.i0)(r.id).filter(e => "collection" === e.kind),
					h = (0, l.AS)(r.id),
					w = function(e) {
						var t, a, i = new Map;
						for (var r of e)
							for (var l of null != (t = r.detail.tags) ? t : []) i.set(l, (null != (a = i.get(l)) ? a : 0) + 1);
						return [...i.keys()].sort((e, t) => {
							var a, r;
							return ("personal" !== e) - ("personal" !== t) || (null != (a = i.get(t)) ? a : 0) - (null != (r = i.get(e)) ? r : 0) || e.localeCompare(t)
						})
					}(a),
					y = null == c ? a : a.filter(e => {
						var t;
						return null == (t = e.detail.tags) ? void 0 : t.includes(c)
					});
				return (0, m.jsxs)("section", es(es({
					ref: o,
					onScroll: u
				}, p.xk(f.R.archivePanel)), {}, {
					children: [(0, m.jsxs)("div", es(es({
						ref: s
					}, p.xk(eA.stickyHeader, f.R.frostedWell)), {}, {
						children: [(0, m.jsx)(z, {
							breadcrumbs: (0, l.eY)(r.id),
							dense: !0,
							showTitle: !1,
							title: r.title
						}), g.length > 0 ? (0, m.jsx)(ee, {
							currentNode: r,
							nodes: g,
							activeCollectionId: t
						}) : null, w.length > 0 ? (0, m.jsx)(ex, {
							tags: w,
							activeTag: c,
							onToggle: x,
							label: "".concat(r.title, " tags")
						}) : null]
					})), (0, m.jsx)($, {
						nodeId: null != t ? t : r.id,
						xstyle: eA.mobileNodeDetailContent
					}), (0, m.jsx)(A.PY1.div, es(es({}, {
						className: "x1v56k37 xecb4gi"
					}), {}, {
						initial: !n && {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						},
						children: h > 0 && 0 === a.length ? (0, m.jsx)(ec, {
							hint: "".concat(h, " ").concat(1 === h ? "group" : "groups", " — pick one to see its files")
						}) : (0, m.jsx)(el, {
							assets: y
						})
					}), r.id)]
				}))
			}

			function ec(e) {
				var {
					hint: t
				} = e;
				return (0, m.jsxs)("div", es(es({}, {
					className: "xrvj5dj x1v2ro7d x1ficeh5 xc26acl x1o2pa38 x1q4ynmn x1bpjqwa xa0v8vl x1j6dyjg xpx8vt0 x1xlr1w8"
				}), {}, {
					children: [(0, m.jsx)("span", es(es({}, {
						className: "x187nhsf x90ne7k xur7f20 xvndefy xbsl7fq xxbhnrs"
					}), {}, {
						"aria-hidden": !0
					})), t]
				}))
			}

			function ex(e) {
				var {
					activeTag: t,
					label: a,
					onToggle: i,
					tags: r
				} = e;
				return (0, m.jsx)("div", es(es({}, {
					className: "x78zum5 x1a02dak x6s0dn4 x195vfkc xm15fl6 x1xmf6yo xod5an3"
				}), {}, {
					role: "group",
					"aria-label": a,
					children: r.map(e => {
						var a = e === t;
						return (0, m.jsxs)("button", es(es({
							type: "button",
							"aria-pressed": a,
							onClick: () => i(e)
						}, {
							0: {
								className: "xjyslct x3nfvp2 x6s0dn4 x12mrbbr xj9xw9b xmbjfwn xc342km x1e6avla x1xq1gxn xjbqb8w x5h7zw7 x1dbsnij x14ijhn8 xln7xf2 x1j6dyjg xpx8vt0 xo1l8bm x1yf5rgg x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3"
							},
							1: {
								className: "xjyslct x3nfvp2 x6s0dn4 x12mrbbr xj9xw9b xmbjfwn xc342km x1e6avla x1xq1gxn xln7xf2 x1j6dyjg xpx8vt0 x1yf5rgg x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3 x1beaswe x1p7my8t x1spfu80 x1xlr1w8"
							}
						} [0 | !!a]), {}, {
							children: [(0, m.jsx)("span", es(es({}, {
								className: "xwq05k6"
							}), {}, {
								"aria-hidden": !0,
								children: "#"
							})), e]
						}), e)
					})
				}))
			}
			var eA = {
					stickyHeader: {
						kVAEAm: "x7wzq59",
						k87sOh: "x13vifvy",
						kY2c9j: "xzkaem6",
						kmVPX3: "xhdgoeg x10j801",
						kWkggS: "x1l2ln3c",
						$$css: !0
					},
					mobileNodeDetailContent: {
						kmVPX3: "xxmtint",
						$$css: !0
					}
				},
				ep = {
					sakura: {
						x9n9ad2: "xp040ry x9n9ad2",
						$$css: !0
					},
					neutral: {
						x9n9ad2: "x9dy0g9 x9n9ad2",
						$$css: !0
					},
					ocean: {
						x9n9ad2: "xn351vz x9n9ad2",
						$$css: !0
					},
					matcha: {
						x9n9ad2: "xqnha36 x9n9ad2",
						$$css: !0
					},
					terracotta: {
						x9n9ad2: "x18am6ik x9n9ad2",
						$$css: !0
					},
					amber: {
						x9n9ad2: "x16ekrzp x9n9ad2",
						$$css: !0
					},
					emerald: {
						x9n9ad2: "x5unykl x9n9ad2",
						$$css: !0
					},
					indigo: {
						x9n9ad2: "x12nmk94 x9n9ad2",
						$$css: !0
					},
					amethyst: {
						x9n9ad2: "x18dgyfi x9n9ad2",
						$$css: !0
					},
					plum: {
						x9n9ad2: "x1psbjq9 x9n9ad2",
						$$css: !0
					},
					manila: {
						x9n9ad2: "x1klhz4s x9n9ad2",
						$$css: !0
					},
					slate: {
						x9n9ad2: "x1cjfljy x9n9ad2",
						$$css: !0
					},
					graphite: {
						x9n9ad2: "x11qcwdm x9n9ad2",
						$$css: !0
					}
				},
				eu = "M0 10 Q0 1 9 1 L40 1 C47 1 49 3 53 9 C57 15 61 16 68 16 L91 16 Q100 16 100 25 L100 74 Q100 83 91 83 L9 83 Q0 83 0 74 Z",
				eg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(100, " ").concat(84, "' ") + "preserveAspectRatio='none'><path d='".concat(eu, "' fill='white'/></svg>"),
				eh = 'url("data:image/svg+xml,'.concat(encodeURIComponent(eg), '")'),
				em = {
					WebkitMaskImage: eh,
					maskImage: eh,
					WebkitMaskSize: "100% 100%",
					maskSize: "100% 100%",
					WebkitMaskRepeat: "no-repeat",
					maskRepeat: "no-repeat"
				},
				ew = {
					xs: 56,
					sm: 80,
					md: 112,
					lg: 152,
					xl: 208,
					xxl: 280
				},
				ey = {
					type: "spring",
					stiffness: 320,
					damping: 18
				},
				eb = {
					type: "spring",
					stiffness: 300,
					damping: 15
				},
				ej = {
					rest: {
						scale: 1,
						y: 0
					},
					hover: {
						scale: 1.02,
						y: -4
					}
				},
				ef = {
					rest: {
						y: "0%"
					},
					hover: {
						y: "-16%"
					}
				};

			function ek(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function ev(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ek(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ek(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var eL = "ds-folder-rim",
				eO = ev({
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none"
				}, em);

			function eP(e) {
				var {
					variant: t
				} = e, a = {
					0: {
						className: "x10l6tqk x10a8y8t x1hamywl x1oirq0e"
					},
					1: {
						className: "x10l6tqk x10a8y8t x9gjlma x1im9bs xnj03dg"
					}
				} ["front" === t | 0];
				return (0, m.jsxs)(m.Fragment, {
					children: [(0, m.jsx)("div", {
						className: a.className,
						style: ev(ev({}, a.style), em)
					}), (0, m.jsxs)("svg", {
						viewBox: "0 0 ".concat(100, " ").concat(84),
						preserveAspectRatio: "none",
						"aria-hidden": !0,
						style: eO,
						children: [(0, m.jsx)("defs", {
							children: (0, m.jsxs)("linearGradient", {
								id: eL,
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [(0, m.jsx)("stop", {
									offset: "0",
									stopColor: "rgba(255,255,255,0.85)"
								}), (0, m.jsx)("stop", {
									offset: "1",
									stopColor: "rgba(255,255,255,0)"
								})]
							})
						}), (0, m.jsx)("path", {
							d: eu,
							fill: "none",
							stroke: "url(#".concat(eL, ")"),
							strokeWidth: 1,
							vectorEffect: "non-scaling-stroke"
						})]
					})]
				})
			}

			function eI(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function eD(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eI(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eI(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var eQ = A.PY1.create(g()),
				eU = {
					kVAEAm: "x1n2onr6",
					k1xSpc: "x1rg5ohu",
					kHBbk8: "xc8icb0",
					k9g6sI: "x12h1iku",
					kMv6JI: "xjb2p0i",
					kLWn49: "xo5v014",
					$$css: !0
				},
				eR = {
					kysU6D: "xjyslct",
					ksu8eU: "xng3xce",
					kWkggS: "xjbqb8w",
					kmVPX3: "x1717udv",
					kogj98: "x1ghz6dp",
					kMwMTN: "x1heor9g",
					kMv6JI: "xjb2p0i",
					k9WMMc: "x16tdsg8",
					kkrTdU: "x1ypdohk",
					k3XXqK: "x1t137rt",
					$$css: !0
				},
				eC = {
					kPJHz1: "x784prv",
					k7shQP: "x9v5kkp",
					kZs9gx: "x1v8x7ac",
					kiEn40: "x1nfdzel",
					k7aC84: "x1aebjcf",
					$$css: !0
				};

			function eq(e) {
				var t, a, i, r, l, n, o, s, d, c, x, u, h, w, y, b, j, f, k, v, L, O, P, I, D, Q, U, R, C, S, B, M, z, N, J, G, E, V, X, T, {
						preset: F = "sakura",
						tone: W,
						size: Y = "md",
						offset: Z,
						animated: $ = !0,
						title: H,
						subtitle: K,
						underLabel: _,
						underLabelBreakpoint: ee,
						decoration: et,
						ornament: ea,
						onClick: ei,
						href: er,
						className: el,
						style: en,
						"aria-label": eo
					} = e,
					es = (0, q.I)(),
					ed = $ && !es,
					ec = (G = null != (N = null == Z ? void 0 : Z.x) ? N : .06, V = 100 / (1 + (E = null != (J = null == Z ? void 0 : Z.y) ? J : .18)), {
						root: {
							width: "var(".concat("--folder-root-width", ", ").concat(ew[Y], "px)"),
							aspectRatio: "".concat(100, " / ").concat((84 * (1 + E)).toFixed(2))
						},
						back: {
							top: 0,
							left: "".concat(100 * G, "%"),
							right: "".concat(100 * G, "%"),
							height: "".concat(V, "%")
						},
						front: {
							bottom: 0,
							left: 0,
							right: 0,
							height: "".concat(V, "%")
						},
						deco: {
							top: 0,
							left: "34%",
							right: "6%",
							height: "".concat(100 - V + 22, "%")
						}
					}),
					ex = null != ei || null != er,
					eA = p.xk(eU, ex ? eR : null, ex ? eC : null, ep[F], W ? [{
						"--x167is0q": (null != (a = (t = W).backTop) ? a : null) != null ? "x16jc3jc" : null != (i = t.backTop) ? i : null,
						"--x1ishmbj": (null != (r = t.backBottom) ? r : null) != null ? "x1j55lqf" : null != (l = t.backBottom) ? l : null,
						"--x1nl2ze": (null != (n = t.frontTop) ? n : null) != null ? "x1rtl0rk" : null != (o = t.frontTop) ? o : null,
						"--x1rig7ij": (null != (s = t.frontMid) ? s : null) != null ? "x164a6qi" : null != (d = t.frontMid) ? d : null,
						"--x1lz05ob": (null != (c = t.frontBottom) ? c : null) != null ? "xu82kdb" : null != (x = t.frontBottom) ? x : null,
						"--x1cdqlu7": (null != (u = t.innerShadow) ? u : null) != null ? "x1wh0ea5" : null != (h = t.innerShadow) ? h : null,
						"--xvj65eh": (null != (w = t.title) ? w : null) != null ? "x1sonrgl" : null != (y = t.title) ? y : null,
						"--x136koe3": (null != (b = t.subtitle) ? b : null) != null ? "xkmwxlk" : null != (j = t.subtitle) ? j : null,
						$$css: !0
					}, {
						"--x---x167is0q": (null != (f = t.backTop) ? f : null) != null ? null != (k = t.backTop) ? k : null : void 0,
						"--x---x1ishmbj": (null != (v = t.backBottom) ? v : null) != null ? null != (L = t.backBottom) ? L : null : void 0,
						"--x---x1nl2ze": (null != (O = t.frontTop) ? O : null) != null ? null != (P = t.frontTop) ? P : null : void 0,
						"--x---x1rig7ij": (null != (I = t.frontMid) ? I : null) != null ? null != (D = t.frontMid) ? D : null : void 0,
						"--x---x1lz05ob": (null != (Q = t.frontBottom) ? Q : null) != null ? null != (U = t.frontBottom) ? U : null : void 0,
						"--x---x1cdqlu7": (null != (R = t.innerShadow) ? R : null) != null ? null != (C = t.innerShadow) ? C : null : void 0,
						"--x---xvj65eh": (null != (S = t.title) ? S : null) != null ? null != (B = t.title) ? B : null : void 0,
						"--x---x136koe3": (null != (M = t.subtitle) ? M : null) != null ? null != (z = t.subtitle) ? z : null : void 0
					}] : null),
					eu = el ? "".concat(null != (X = eA.className) ? X : "", " ").concat(el).trim() : eA.className,
					eg = eD(eD(eD({}, eA.style), ec.root), en),
					eh = [H, K].filter(Boolean).join(" — "),
					em = null != eo ? eo : eh || void 0,
					eb = null != _ && (null == ee || ew[Y] <= ee),
					ek = {
						fontSize: "var(".concat("--folder-under-label-font", ", ").concat(eS[Y], "px)")
					},
					ev = (0, m.jsxs)(m.Fragment, {
						children: [(0, m.jsx)("div", eD(eD({}, {
							className: "x10l6tqk x1ja2u2z"
						}), {}, {
							style: ec.back,
							children: (0, m.jsx)(eP, {
								variant: "back"
							})
						})), et ? (0, m.jsx)(A.PY1.div, eD(eD(eD({}, {
							className: "x10l6tqk x1vjfegm x47corl x78zum5 xuk3077 xl56j7k"
						}), {}, {
							style: ec.deco
						}, ed ? {
							variants: ef
						} : {
							variants: ef,
							initial: "rest",
							animate: "rest"
						}), {}, {
							children: et
						})) : null, (0, m.jsx)("div", eD(eD({}, {
							className: "x10l6tqk xhtitgo"
						}), {}, {
							style: ec.front,
							children: (0, m.jsx)(eP, {
								variant: "front"
							})
						})), H || K || ea ? (0, m.jsxs)("div", eD(eD({}, {
							className: "x10l6tqk xzkaem6 x47corl"
						}), {}, {
							style: ec.front,
							children: [H || K ? (0, m.jsxs)("div", eD(eD({}, {
								className: "x10l6tqk x1di8dsp x1icnayv x78zum5 xdt5ytf x1cy8zhl xme8acn xdpxx8g"
							}), {}, {
								children: [H ? (0, m.jsx)("span", eD(eD({}, {
									className: "x1gvxsj3 xuv8nkb x13c56ty xjat59b xdpxx8g"
								}), {}, {
									children: H
								})) : null, K ? (0, m.jsx)("span", eD(eD({}, {
									className: "x2a0lcg xk50ysn xhozjc6 xdpxx8g"
								}), {}, {
									children: K
								})) : null]
							})) : null, ea ? (0, m.jsx)("div", eD(eD({}, {
								className: "x10l6tqk xa4rzkk x1dzgtdc xpyjxry x78zum5"
							}), {}, {
								children: ea
							})) : null]
						})) : null]
					}),
					eL = {
						type: "button",
						onClick: ei,
						"aria-label": em
					},
					eO = null == er ? null : {
						href: er,
						scroll: !1,
						onClick: ei,
						"aria-label": em,
						draggable: !1
					},
					eI = {
						role: em ? "img" : void 0,
						"aria-label": em,
						"aria-hidden": !em || void 0
					};
				if (ed) {
					var eq = null != er ? eQ : ei ? A.PY1.button : A.PY1.div;
					T = (0, m.jsx)(eq, eD(eD(eD({
						className: eu,
						style: eg,
						variants: ej,
						initial: "rest",
						animate: "rest",
						whileHover: "hover",
						transition: ey
					}, ex ? {
						whileTap: {
							scale: .97
						}
					} : {}), null != eO ? eO : ei ? eL : eI), {}, {
						children: ev
					}))
				} else T = null != eO ? (0, m.jsx)(g(), eD(eD({
					className: eu,
					style: eg
				}, eO), {}, {
					children: ev
				})) : ei ? (0, m.jsx)("button", eD(eD({
					className: eu,
					style: eg
				}, eL), {}, {
					children: ev
				})) : (0, m.jsx)("div", eD(eD({
					className: eu,
					style: eg
				}, eI), {}, {
					children: ev
				}));
				return eb ? (0, m.jsxs)("span", eD(eD({}, {
					className: "x3nfvp2 xdt5ytf x6s0dn4 x1b8z93w"
				}), {}, {
					children: [T, (0, m.jsx)("span", eD(eD({}, {
						className: "xjb2p0i xo1l8bm x9p7qul x2b8uid x18qnofl x132q4wb"
					}), {}, {
						style: ek,
						children: _
					}))]
				})) : T
			}
			var eS = {
				xs: 8.5,
				sm: 9,
				md: 10,
				lg: 11,
				xl: 12,
				xxl: 13
			};

			function eB(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function eM(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eB(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eB(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function ez(e) {
				var {
					children: t,
					jitter: a = !0,
					spread: r = 28,
					tilt: l = 6,
					spreadHover: n = 74,
					tiltHover: o = 17
				} = e, s = function(e) {
					for (var t = 0x811c9dc5, a = 0; a < e.length; a++) t ^= e.charCodeAt(a), t = Math.imul(t, 0x1000193);
					return t >>> 0
				}((0, i.useId)()), d = i.Children.toArray(t), c = d.length;
				return (0, m.jsx)(A.PY1.div, eM(eM({}, {
					className: "x1n2onr6 xh8yej3 x5yr21d"
				}), {}, {
					children: d.map((e, t) => {
						var i, d = t - (c - 1) / 2,
							x = (i = s + 101 * t >>> 0, () => (i = Math.imul(i, 1664525) + 0x3c6ef35f >>> 0) / 0x100000000),
							p = e => a ? (x() - .5) * 2 * e : 0,
							u = (1 === c ? -50 : -50 + d * r) + p(4),
							g = (1 === c ? -44 : -50 + d * n) + p(9),
							h = (1 === c ? 7 : d * l) + p(3),
							w = (1 === c ? 14 : d * o) + p(5);
						return (0, m.jsx)(A.PY1.div, eM(eM({}, {
							className: "x10l6tqk x1ey2m1c x1nrll8i x14zvdfm x78zum5 xl56j7k xuk3077"
						}), {}, {
							style: {
								zIndex: t
							},
							variants: {
								rest: {
									x: "".concat(u, "%"),
									rotate: h
								},
								hover: {
									x: "".concat(g, "%"),
									rotate: w
								}
							},
							transition: eb,
							children: e
						}), t)
					})
				}))
			}
			var eN = {
				kzqmXN: "xh8yej3",
				kOBAk4: "x1bhfysu",
				kmuXW: "x2lah0s",
				kWkggS: "x1c5tqo3",
				kaIpWk: "x1orh6at",
				kGVxlE: "x1lhviga",
				kVQacm: "xb3r6kr",
				k1xSpc: "x78zum5",
				kXwgrk: "xdt5ytf",
				$$css: !0
			};

			function eJ(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function eG(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eJ(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eJ(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var eE = {
				khm7nJ: "x3av1uy",
				k8WAf4: "x1gki4em",
				kg3NbH: "x1yl75tu",
				$$css: !0
			};

			function eV(e) {
				var {
					count: t = 2,
					lines: a = 3,
					jitter: i
				} = e;
				return (0, m.jsx)(ez, {
					jitter: i,
					children: Array.from({
						length: t
					}, (e, t) => (0, m.jsx)("div", eG(eG({}, p.xk(eN, eE)), {}, {
						children: Array.from({
							length: a
						}, (e, t) => (0, m.jsx)("div", eG({}, {
							0: {
								className: "x4tu0wn xluyl2r x9cwwnt"
							},
							1: {
								className: "x4tu0wn xluyl2r x9cwwnt x14dgxzp"
							}
						} [t === a - 1 | 0]), t))
					}), t))
				})
			}

			function eX(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function eT(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eX(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eX(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var eF = {
				khm7nJ: "x19zdumh",
				k8WAf4: "x1gki4em",
				kg3NbH: "x1yl75tu",
				$$css: !0
			};

			function eW(e) {
				var {
					count: t = 2,
					jitter: a,
					figures: i
				} = e;
				return (0, m.jsx)(ez, {
					jitter: a,
					children: Array.from({
						length: t
					}, (e, t) => {
						var a = null == i ? void 0 : i[t];
						return (0, m.jsxs)("div", eT(eT({}, p.xk(eN, eF)), {}, {
							children: [(0, m.jsx)("div", eT({}, {
								className: "x2lah0s x19bsa2d x1endk3i xluyl2r x1o7xvk"
							})), (0, m.jsx)("div", eT({}, {
								className: "x2lah0s x1xlgihv xluyl2r x9cwwnt"
							})), (0, m.jsx)("div", eT({}, {
								className: "x2lah0s x1xlgihv xluyl2r x9cwwnt x3hqpx7"
							})), (0, m.jsx)("div", eT(eT({}, {
								className: "x1iyjqo2 x1fz73xf xokw9fl x132y54r x1abbwge x1y0btm7 xqoy89z x78zum5 x6s0dn4 xl56j7k xb3r6kr"
							}), {}, {
								style: (null == a ? void 0 : a.fill) != null || (null == a ? void 0 : a.stroke) != null ? {
									backgroundColor: a.fill,
									borderColor: a.stroke
								} : void 0,
								children: null == a ? void 0 : a.art
							}))]
						}), t)
					})
				})
			}

			function eY(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function eZ(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? eY(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : eY(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var e$ = {
				simple: {
					card: {
						kmVPX3: "x2xglgi",
						$$css: !0
					},
					img: {
						kzqmXN: "xh8yej3",
						kZKoxP: "x5yr21d",
						kVIFPx: "xl1xv1r",
						kaIpWk: "xokw9fl",
						k1xSpc: "x1lliihq",
						$$css: !0
					}
				},
				"instax-square": {
					card: {
						kLKAdn: "x46ifa4",
						kg3NbH: "xpingjc",
						kGO01o: "x18d9i69",
						kjj79g: "x1nhvcw1",
						$$css: !0
					},
					img: {
						kzqmXN: "xh8yej3",
						kOBAk4: "x1y5e3q9",
						kVIFPx: "xl1xv1r",
						kaIpWk: "xokw9fl",
						k1xSpc: "x1lliihq",
						kmuXW: "x2lah0s",
						$$css: !0
					}
				},
				"instax-mini": {
					card: {
						kzqmXN: "xi9l4ab",
						kOBAk4: "x1quur41",
						kLKAdn: "x12kwpsi",
						kg3NbH: "xv54how",
						kGO01o: "x18d9i69",
						kjj79g: "x1nhvcw1",
						$$css: !0
					},
					img: {
						kzqmXN: "xh8yej3",
						kOBAk4: "x6grhm",
						kVIFPx: "xl1xv1r",
						kaIpWk: "xokw9fl",
						k1xSpc: "x1lliihq",
						kmuXW: "x2lah0s",
						$$css: !0
					}
				}
			};

			function eH(e) {
				var {
					srcs: t,
					alt: a = "",
					frame: i = "simple",
					jitter: r
				} = e, l = e$[i];
				return (0, m.jsx)(ez, {
					jitter: r,
					children: t.map((e, t) => {
						var r, n, o = "string" == typeof e ? e : e.src,
							s = "string" == typeof e ? void 0 : e.aspect,
							d = null != (r = "string" == typeof e ? void 0 : e.alt) ? r : a;
						if (null != s && "simple" === i) {
							var c = Math.sqrt(850 * function(e) {
								if ("number" == typeof e) return e;
								if (e.includes("/")) {
									var [t = "", a = ""] = e.split("/");
									return parseFloat(t) / parseFloat(a)
								}
								return parseFloat(e) || 1
							}(s));
							n = {
								width: "".concat(c.toFixed(1), "cqw"),
								aspectRatio: String(s)
							}
						}
						return (0, m.jsx)("div", eZ(eZ({}, p.xk(eN, l.card)), {}, {
							style: n,
							children: (0, m.jsx)("img", eZ({
								src: o,
								alt: d
							}, p.xk(l.img)))
						}), t)
					})
				})
			}

			function eK(e) {
				var {
					src: t,
					alt: a = "",
					frame: i = "simple",
					aspect: r,
					jitter: l
				} = e;
				return (0, m.jsx)(eH, {
					srcs: [null != r ? {
						src: t,
						aspect: r,
						alt: a
					} : t],
					alt: a,
					frame: i,
					jitter: l
				})
			}

			function e_(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function e1(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? e_(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : e_(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function e0(e) {
				var {
					srcs: t,
					count: a = 1,
					jitter: i
				} = e, r = null != t ? t : Array.from({
					length: a
				}, () => void 0);
				return (0, m.jsx)(ez, {
					jitter: i,
					children: r.map((e, t) => (0, m.jsxs)("div", e1(e1({}, {
						className: "x1n2onr6 xh8yej3 x1y5e3q9 x16rqkct x1sv11p2 x15zj4e xarg8rm x78zum5 x6s0dn4 xl56j7k"
					}), {}, {
						children: [e ? (0, m.jsx)("img", e1({
							src: e,
							alt: ""
						}, {
							className: "xz84dc7 x1y5e3q9 x16rqkct xl1xv1r x1lliihq"
						})) : (0, m.jsx)("div", e1({}, {
							className: "xz84dc7 x1y5e3q9 x16rqkct xg63ahf"
						})), (0, m.jsx)("div", e1({}, {
							className: "x10l6tqk xwa60dl x1nrll8i x11lhmoz x1iotci x1y5e3q9 x16rqkct xux7rmb"
						}))]
					}), t))
				})
			}

			function e2(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function e4(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? e2(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : e2(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function e6(e) {
				var {
					srcs: t,
					count: a = 1,
					jitter: i
				} = e, r = null != t ? t : Array.from({
					length: a
				}, () => void 0);
				return (0, m.jsx)(ez, {
					jitter: i,
					children: r.map((e, t) => (0, m.jsx)("div", e4(e4({}, p.xk(eN)), {}, {
						children: (0, m.jsxs)("div", e4(e4({}, {
							className: "x1n2onr6 xh8yej3 x1iyjqo2"
						}), {}, {
							children: [e ? (0, m.jsx)("img", e4({
								src: e,
								alt: ""
							}, {
								className: "x10l6tqk x10a8y8t xh8yej3 x5yr21d xl1xv1r x1lliihq"
							})) : (0, m.jsx)("div", e4({}, {
								className: "x10l6tqk x10a8y8t x1559vq2"
							})), (0, m.jsx)("div", e4(e4({}, {
								className: "x10l6tqk xwa60dl x1nrll8i x11lhmoz x1pgblm0 x1y5e3q9 x16rqkct x3l3weh x78zum5 x6s0dn4 xl56j7k"
							}), {}, {
								children: (0, m.jsx)("div", e4({}, {
									className: "xnalus7 xqtp20y xabm0oe x13ikole x1sfxpg0 xgfja2r x1y0btm7 x1v8p93f x16stqrj xhe5wa1 x142wovc xulsoi0"
								}))
							}))]
						}))
					}), t))
				})
			}

			function e3(e) {
				var {
					children: t,
					jitter: a,
					spread: i,
					tilt: r
				} = e;
				return (0, m.jsx)(ez, {
					jitter: a,
					spread: i,
					tilt: r,
					children: t
				})
			}
			var e5 = a(8684);

			function e8(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function e7(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? e8(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : e8(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var e9 = "M19.88,22.36a3.86,3.86,0,0,1-.8-.24C17.82,21.55,18,20.14,18,19V4.62a1.74,1.74,0,0,0-1.73-1.73H8.84A8.84,8.84,0,0,0,0,11.73V33A8.84,8.84,0,0,0,8.84,41.8H20.1a1.72,1.72,0,0,0,1.72-1.73V24.26a1.82,1.82,0,0,0-.94-1.58A3.34,3.34,0,0,0,19.88,22.36ZM13.3,12.08A4.44,4.44,0,1,1,8.51,7.29,4.46,4.46,0,0,1,13.3,12.08Z",
				te = "M34.6,0H23.34a1.72,1.72,0,0,0-1.72,1.73V17.54a1.85,1.85,0,0,0,.94,1.59,4,4,0,0,0,1,.32,3.31,3.31,0,0,1,.8.23c1.25.57,1.08,2,1.08,3.12V37.18a1.73,1.73,0,0,0,1.73,1.73H35l.43,0a4.45,4.45,0,1,1,5-4.12,4.38,4.38,0,0,1-1.34,2.89l.12-.07.19-.12.13-.09.27-.19.11-.08.18-.14.11-.1.25-.21.1-.09.17-.17.1-.1.23-.24L41.2,36l.16-.2.09-.09.2-.27.08-.1.15-.22L42,35l.18-.29.06-.1.15-.25a.59.59,0,0,1,0-.08l.17-.32,0-.1a2.39,2.39,0,0,0,.13-.28l0-.07c0-.11.09-.23.14-.34l0-.1a2.81,2.81,0,0,0,.1-.31l0-.06c0-.12.08-.24.11-.36s0-.07,0-.1a3.38,3.38,0,0,0,.08-.34v0c0-.13.05-.25.07-.38s0-.07,0-.1,0-.25,0-.37v0c0-.13,0-.27,0-.4v-.1c0-.13,0-.27,0-.4V8.84A8.84,8.84,0,0,0,34.6,0Z";

			function tt(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function ta(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tt(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tt(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var ti = [{
				fill: "#fdeef3",
				stroke: "#f5d2de",
				art: (0, m.jsxs)("div", ta(ta({}, {
					className: "x1xlr1w8 x1dxxxv9 x1yf5rgg x1uo3zyz x36sxvn x2b8uid"
				}), {}, {
					"aria-hidden": "true",
					children: [(0, m.jsx)("span", ta(ta({}, {
						className: "x1lliihq x17h412 xk50ysn xw0rv65"
					}), {}, {
						children: "It’s"
					})), "ALL GOOD."]
				}))
			}, {
				fill: "#e9eefb",
				stroke: "#cdd8f3",
				art: (0, m.jsxs)("svg", ta(ta({}, {
					className: "xh8yej3 x5yr21d x1lliihq"
				}), {}, {
					viewBox: "0 0 52 34",
					"aria-hidden": "true",
					children: [(0, m.jsx)("line", {
						x1: "11",
						y1: "24",
						x2: "26",
						y2: "10",
						stroke: "#c0cdf2",
						strokeWidth: "1.6"
					}), (0, m.jsx)("line", {
						x1: "26",
						y1: "10",
						x2: "41",
						y2: "22",
						stroke: "#c0cdf2",
						strokeWidth: "1.6"
					}), (0, m.jsx)("line", {
						x1: "11",
						y1: "24",
						x2: "41",
						y2: "22",
						stroke: "#dbe3f8",
						strokeWidth: "1.4"
					}), (0, m.jsx)("circle", {
						cx: "11",
						cy: "24",
						r: "4",
						fill: "#8fa3e8"
					}), (0, m.jsx)("circle", {
						cx: "26",
						cy: "10",
						r: "4.6",
						fill: "#5f7ce0"
					}), (0, m.jsx)("circle", {
						cx: "41",
						cy: "22",
						r: "4",
						fill: "#8fa3e8"
					})]
				}))
			}, {
				fill: "#f9f4de",
				stroke: "#e9dfb6",
				art: (0, m.jsx)("svg", ta(ta({}, {
					className: "xh8yej3 x5yr21d x1lliihq"
				}), {}, {
					viewBox: "-16 -8 76 58",
					"aria-hidden": "true",
					children: (0, m.jsxs)("g", {
						fill: "#b8a24b",
						children: [(0, m.jsx)("path", {
							d: e9
						}), (0, m.jsx)("path", {
							d: te
						})]
					})
				}))
			}];

			function tr(e) {
				return "".concat(e, " ").concat(1 === e ? "file" : "files")
			}

			function tl(e, t) {
				return (0, d.EJ)(t ? (0, l.bX)(e) : e)
			}

			function tn(e) {
				var t = (0, l.oy)(e).map(e => (0, l.wP)(e, 256));
				switch ((0, l.Sj)(e)) {
					case "papers":
						return to(e);
					case "project":
						return (0, m.jsx)(eW, {
							count: 3,
							jitter: !1,
							figures: ti
						});
					case "photos":
						return (0, m.jsx)(eH, {
							srcs: t.slice(0, 3),
							frame: "simple",
							jitter: !1
						});
					case "music":
						return (0, m.jsx)(e0, {
							srcs: t.slice(0, 1),
							jitter: !1
						});
					case "video":
						return (0, m.jsx)(e6, {
							srcs: t.slice(0, 1),
							jitter: !1
						});
					case "stack":
						return (0, m.jsx)(e3, {
							jitter: !1,
							children: (0, m.jsx)(eV, {
								count: 3,
								jitter: !1
							})
						});
					case "image":
						return null == t[0] ? to(e) : (0, m.jsx)(eK, {
							src: t[0],
							frame: "simple",
							jitter: !1
						})
				}
			}

			function to(e) {
				var t = Math.min(3, (0, l.x5)(e));
				return 0 === t ? null : (0, m.jsx)(eV, {
					count: t,
					jitter: !1
				})
			}

			function ts(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function td(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ts(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ts(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function tc(e) {
				var {
					folders: t,
					section: a
				} = e, i = (0, r.useRouter)(), n = (0, j.Xr)(e => e.expandedFolderId), o = (0, j.Xr)(e => e.browseNodeId), s = (0, j.Xr)(e => e.selectSection), c = null != o ? o : a.id, x = null != n || t.some(e => e.id === o);
				return (0, m.jsxs)("section", td(td({}, {
					className: "x1tamke2 x1ko64cn x1qy0e5 xwle5b5 x18ygdax x161y2w4 x1a7scyq x19zsgy6 xysyzu8"
				}), {}, {
					"aria-label": "".concat(a.title, " folders"),
					onClick: e => {
						!x || e.target.closest('a, [role="group"], nav') || (s(a.id), i.push((0, d.EJ)(a.id), {
							scroll: !1
						}))
					},
					children: [(0, m.jsx)(z, {
						breadcrumbs: (0, l.eY)(c),
						dense: !0,
						showTitle: !1,
						title: (0, l.Zl)(c).title
					}), (0, m.jsx)($, {
						nodeId: c,
						xstyle: f.R.mobileNodeDetailGridSlot
					}), (0, m.jsx)("div", td(td({}, {
						className: "xqui205 xrvj5dj x11qjcnl x1o0lzc5 x1amjocr x7a106z x1o2pa38"
					}), {}, {
						children: t.map(e => (0, m.jsx)(tx, {
							node: e,
							subfolderCount: (0, l.AS)(e.id)
						}, e.id))
					}))]
				}))
			}

			function tx(e) {
				var t, a, {
						node: i,
						subfolderCount: r
					} = e,
					n = (0, j.Xr)(e => e.browseNodeId),
					o = (0, j.Xr)(e => e.selectFolder),
          //bio
					s = "projects-shelf" === i.presentation ? "".concat(r, " ").concat(1 === r ? "project" : "!") : r > 0 ? "".concat(r, " ").concat(1 === r ? "group" : "groups", " \xb7 ").concat(tr((0, l.x5)(i.id))) : tr((0, l.X1)(i.id).length),
					d = i.id === n;
				return (0, m.jsx)("span", td(td({
					"data-node-id": i.id
				}, p.xk(f.R.folderCell)), {}, {
					children: (0, m.jsx)(eq, {
						"aria-label": "".concat(i.title, " - ").concat(s),
						decoration: tn(i.id),
						href: tl(i.id, d),
						onClick: () => o(i.id),
						preset: null != (t = null == (a = i.visual) ? void 0 : a.folderPreset) ? t : "neutral",
						size: "md",
						subtitle: s,
						underLabel: i.title
					})
				}))
			}

			function tA(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tp(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tA(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tA(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function tu(e) {
				var {
					parent: t,
					animateEnter: a,
					onDismiss: i
				} = e;
				return (0, m.jsx)(et.N, {
					initial: !1,
					children: null != t ? (0, m.jsx)(tg, {
						parent: t,
						animateEnter: a,
						onDismiss: i
					}, t.id) : null
				})
			}

			function tg(e) {
				var {
					animateEnter: t,
					onDismiss: a,
					parent: r
				} = e, n = (0, i.useRef)(null), o = (0, i.useRef)(!1), s = (0, l.ch)(r.id), d = [tm.groupModalGridCols1, tm.groupModalGridCols2, tm.groupModalGridCols3][Math.min(3, s.length) - 1], c = {
					duration: S.vw,
					ease: S.Ue
				}, x = {
					duration: S.mi,
					ease: S.Ue
				}, u = !!t && {
					opacity: 0
				};
				(0, i.useEffect)(() => {
					if (!window.matchMedia(k.ny).matches) {
						var e;
						null == (e = n.current) || e.focus()
					}
					var t = e => {
						"Escape" === e.key && (o.current = !0, a())
					};
					return document.addEventListener("keydown", t), () => {
						if (document.removeEventListener("keydown", t), o.current) {
							var e;
							null == (e = document.querySelector('[data-node-id="'.concat(CSS.escape(r.id), '"] a'))) || e.focus()
						}
					}
				}, []);
				var g = (0, k._6)();
				return (0, m.jsxs)("div", tp(tp({}, {
					className: "x10l6tqk x10a8y8t xzkaem6 xrvj5dj x1ku5rj1 xvhl1tg x1lmetro xkqk4jo"
				}), {}, {
					role: g ? "region" : "dialog",
					"aria-modal": g ? void 0 : "true",
					"aria-label": r.title,
					children: [(0, m.jsx)(A.PY1.div, tp(tp({}, p.xk(tm.groupModalScrim, f.R.frostedWell)), {}, {
						onClick: () => {
							o.current = !0, a()
						},
						initial: u,
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0,
							transition: x
						},
						transition: c
					})), (0, m.jsxs)(A.PY1.div, tp(tp({}, {
						className: "x1n2onr6 x1vjfegm x78zum5 xdt5ytf x6s0dn4 xho2ryv x1v2ro7d x192su37 xiwbp92 x1v0eza4"
					}), {}, {
						initial: u,
						animate: {
							opacity: 1
						},
						exit: {
							opacity: 0,
							transition: x
						},
						transition: c,
						children: [(0, m.jsxs)("div", tp(tp({}, {
							className: "x1s85apg x197uy0l x15zcbyg"
						}), {}, {
							children: [(0, m.jsx)(z, {
								breadcrumbs: (0, l.eY)(r.id),
								dense: !0,
								showTitle: !1,
								title: r.title
							}), (0, m.jsx)($, {
								nodeId: r.id,
								xstyle: [f.R.mobileNodeDetailGridSlot, tm.mobileNodeDetailGroupModal]
							})]
						})), (0, m.jsx)("p", tp(tp({}, {
							className: "x1ghz6dp x1spfu80 x1pvgvxb x1jvydc1 x1xlr1w8 x2b8uid x1w2vvpw"
						}), {}, {
							children: r.title
						})), (0, m.jsx)("div", tp(tp({
							ref: n,
							tabIndex: -1
						}, {
							className: "x193iq5w xugzpu4 x1fzcb9t xmkeg23 x1giy1d x1y0btm7 x15zz4w7 x10xs6qf xp8e473 xd5f07i x1zpmgx xb3h1wu x1l7cnkj xn0l4dx xtea1nw x18hufzr xthdtc x1t137rt"
						}), {}, {
							children: (0, m.jsx)("div", tp(tp({}, p.xk(tm.groupModalGrid, d)), {}, {
								role: "group",
								"aria-label": "".concat(r.title, " groups"),
								children: s.map(e => (0, m.jsx)(th, {
									node: e
								}, e.id))
							}))
						}))]
					}))]
				}))
			}

			function th(e) {
				var t, a, {
						node: i
					} = e,
					r = (0, j.Xr)(e => e.browseNodeId),
					n = (0, j.Xr)(e => e.selectFolder),
					o = (0, l.X1)(i.id).length;
				return (0, m.jsx)("span", tp(tp({}, p.xk(f.R.folderCell)), {}, {
					children: (0, m.jsx)(eq, {
						"aria-label": "".concat(i.title, " - ").concat(o, " files"),
						decoration: tn(i.id),
						href: tl(i.id, i.id === r),
						onClick: () => n(i.id),
						preset: null != (t = null == (a = i.visual) ? void 0 : a.folderPreset) ? t : "neutral",
						size: "sm",
						subtitle: tr(o),
						underLabel: i.title
					})
				}))
			}
			var tm = {
				groupModalGridCols1: {
					kumcoG: "x1ujop2o xa6tgyh",
					$$css: !0
				},
				groupModalGridCols2: {
					kumcoG: "x5ch2gw xa6tgyh",
					$$css: !0
				},
				groupModalGridCols3: {
					kumcoG: "xd9u4rp xa6tgyh",
					$$css: !0
				},
				groupModalScrim: {
					kVAEAm: "x10l6tqk",
					kpwlN0: "x10a8y8t",
					kY2c9j: "x1ja2u2z",
					k1xSpc: "x1pvgvxb",
					kWkggS: "x101qr1i",
					kkrTdU: "xt0e3qv",
					$$css: !0
				},
				mobileNodeDetailGroupModal: {
					k1K539: "x12nagc",
					$$css: !0
				},
				groupModalGrid: {
					k1xSpc: "xrvj5dj",
					kOIVth: "x1665zp3 xz72tuw",
					kjj79g: "xl56j7k",
					kAPf3g: "x1o2pa38",
					"--folder-root-width": "x13efsve x1k1aqso",
					"--folder-under-label-font": "xxzmcts x1ds0czw",
					$$css: !0
				}
			};
			a(2012);
			var tw = a(8503);

			function ty(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tb(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ty(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ty(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var tj = {
				k1xSpc: "x78zum5",
				kGNEyG: "x6s0dn4",
				kjj79g: "xl56j7k",
				$$css: !0
			};

			function tf(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tk(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tf(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tf(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var tv = {
					kWkggS: "xrluseu",
					kKwaWg: "xl39sg3",
					kgSjnq: "xnvw0yq",
					$$css: !0
				},
				tL = a(5197);

			function tO(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tP(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tO(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tO(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var tI = ["/projects/peeps-online/card/astronaut.jpg", "/projects/peeps-online/card/pink.jpg", "/projects/peeps-online/card/banana.jpg", "/projects/peeps-online/card/devil.jpg", "/projects/peeps-online/card/blue.jpg"],
				tD = ["/projects/peeps-online/card/pink.jpg", "/projects/peeps-online/card/banana.jpg", "/projects/peeps-online/card/devil.jpg", "/projects/peeps-online/card/blue.jpg"],
				tQ = {
					k1xSpc: "x78zum5",
					kXwgrk: "xdt5ytf",
					$$css: !0
				};

			function tU(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tR(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tU(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tU(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function tC() {
				return (0, m.jsxs)("span", tR(tR({}, {
					className: "x1n2onr6 xrvj5dj xl501l6 xvy4d1p xxk0z11 xu4hgxq xb3r6kr x2lah0s"
				}), {}, {
					"aria-hidden": "true",
					children: [tS.map((e, t) => (0, m.jsx)("i", {
						style: {
							background: e
						}
					}, "".concat(e, "-").concat(t))), (0, m.jsx)("i", tR(tR({}, {
						className: "x10l6tqk x10a8y8t xrvj5dj x1ku5rj1 x1uljpbt x1j61x8r xuv8nkb x4z9k3i x18eqzfe"
					}), {}, {
						children: "?"
					}))]
				}))
			}

			function tq() {
				return (0, m.jsxs)(m.Fragment, {
					children: [(0, m.jsx)("b", tR({}, {
						className: "x1v4s8kt xols6we x16rqkct x1haso3s x19ts5yr x1aquc0h x1m9vv7p xa4qsjk"
					})), (0, m.jsx)("b", tR({}, {
						className: "x1v4s8kt xols6we x16rqkct x1haso3s x19ts5yr x1aquc0h x1m9vv7p xa4qsjk xmmqq2k"
					})), (0, m.jsx)("b", tR({}, {
						className: "x1v4s8kt xols6we x16rqkct x1haso3s x19ts5yr x1aquc0h x1m9vv7p xa4qsjk x1x1c4bx"
					}))]
				})
			}
			var tS = ["#8b929c", "#a5abb4", "#767d88", "#b8bdc5", "#9aa1aa", "#848b95", "#aeb3bb", "#70777f", "#9ba2ab", "#878e98", "#b1b6be", "#7b828c", "#a2a8b1", "#8e959e", "#757c86", "#a9aeb7"],
				tB = {
					k1xSpc: "x78zum5",
					kXwgrk: "xdt5ytf",
					kMv6JI: "xgv57at",
					kMzoRj: "xmkeg23",
					ksu8eU: "x1y0btm7",
					kVAM5u: "xx3pkr6",
					$$css: !0
				},
        
        
				tM = {
					"turnips-exchange": function() {
						return (0, m.jsxs)("div", e7(e7({}, p.xk(e5.y.frame)), {}, {
							children: [(0, m.jsx)("img", e7(e7({}, {
								className: "x1lliihq xh8yej3 x5yr21d xl1xv1r"
							}), {}, {
								src: "/projects/turnips-exchange/card/acnh-scene.jpeg",
								alt: "",
								width: "1280",
								height: "720"
							})), (0, m.jsxs)("svg", e7(e7({}, {
								className: "x10l6tqk x1nrll8i xe5z4yz x1fzzjf9 xt7dq6l xuuh30 xgu575j x47corl"
							}), {}, {
								viewBox: "0 0 230 76",
								"aria-hidden": "true",
								children: [(0, m.jsx)("defs", {
									children: (0, m.jsx)("clipPath", {
										id: "linkTileClip",
										clipPathUnits: "userSpaceOnUse",
										children: (0, m.jsx)("rect", {
											x: "58.295",
											y: "0",
											width: "400",
											height: "76"
										})
									})
								}), (0, m.jsxs)("g", e7(e7({
									fill: "#fff"
								}, {
									className: "x1pi6akr x1aquc0h x18ebdri xa4qsjk x1u6ievf"
								}), {}, {
									children: [(0, m.jsx)("g", e7(e7({
										clipPath: "url(#linkTileClip)"
									}, {
										className: "x18ebdri xa4qsjk x1u6ievf xm0y69g x1aquc0h x1hwn2t4"
									}), {}, {
										children: (0, m.jsx)("g", e7(e7({}, {
											className: "x18ebdri xa4qsjk x1u6ievf x1l8lvxo x1aquc0h x1hwn2t4"
										}), {}, {
											children: (0, m.jsx)("path", {
												transform: "translate(69.585 61.1)",
												d: "M7.9 -23V-4.3H18.5Q19.8 -4.3 20.5 -3.7Q21.1 -3.1 21.1 -2.1Q21.1 -1.2 20.5 -0.6Q19.8 0 18.5 0H5.9Q4.2 0 3.5 -0.8Q2.7 -1.5 2.7 -3.2V-23Q2.7 -24.6 3.4 -25.4Q4.1 -26.2 5.3 -26.2Q6.5 -26.2 7.2 -25.4Q7.9 -24.6 7.9 -23ZM29 -16.3V-2.5Q29 -1 28.3 -0.3Q27.7 0.4 26.6 0.4Q25.5 0.4 24.9 -0.3Q24.2 -1.1 24.2 -2.5V-16.2Q24.2 -17.6 24.9 -18.4Q25.5 -19.1 26.6 -19.1Q27.7 -19.1 28.3 -18.4Q29 -17.6 29 -16.3ZM26.6 -21.3Q25.6 -21.3 24.9 -21.9Q24.2 -22.5 24.2 -23.7Q24.2 -24.7 25 -25.3Q25.7 -26 26.6 -26Q27.6 -26 28.3 -25.4Q29 -24.8 29 -23.7Q29 -22.6 28.3 -21.9Q27.6 -21.3 26.6 -21.3ZM38.3 -16.4V-15.8Q39.6 -17.5 41.1 -18.3Q42.6 -19.1 44.6 -19.1Q46.5 -19.1 48 -18.2Q49.4 -17.4 50.2 -15.9Q50.7 -15 50.8 -14Q50.9 -13 50.9 -11.4V-2.5Q50.9 -1 50.3 -0.3Q49.6 0.4 48.6 0.4Q47.5 0.4 46.8 -0.3Q46.2 -1.1 46.2 -2.5V-10.5Q46.2 -12.8 45.5 -14.1Q44.8 -15.4 42.9 -15.4Q41.6 -15.4 40.5 -14.6Q39.5 -13.8 39 -12.5Q38.6 -11.4 38.6 -8.5V-2.5Q38.6 -1 38 -0.3Q37.3 0.4 36.2 0.4Q35.2 0.4 34.5 -0.3Q33.8 -1.1 33.8 -2.5V-16.3Q33.8 -17.7 34.4 -18.4Q35 -19.1 36.1 -19.1Q36.7 -19.1 37.2 -18.8Q37.7 -18.5 38 -17.9Q38.3 -17.3 38.3 -16.4ZM67.7 -1.8 63.4 -8.7 60.8 -6.3V-2.4Q60.8 -1.1 60.1 -0.3Q59.4 0.4 58.4 0.4Q57.3 0.4 56.7 -0.3Q56.1 -1 56.1 -2.5V-22.9Q56.1 -24.5 56.7 -25.4Q57.3 -26.2 58.4 -26.2Q59.5 -26.2 60.2 -25.5Q60.8 -24.7 60.8 -23.2V-11.6L66.2 -17.2Q67.2 -18.3 67.8 -18.7Q68.3 -19.1 69 -19.1Q69.9 -19.1 70.5 -18.5Q71.1 -17.9 71.1 -17.1Q71.1 -16 69.2 -14.3L66.6 -11.9L71.6 -4.2Q72.1 -3.3 72.3 -2.9Q72.6 -2.4 72.6 -2Q72.6 -0.9 72 -0.2Q71.3 0.4 70.3 0.4Q69.4 0.4 69 -0Q68.5 -0.5 67.7 -1.8ZM85.9 -2.7V-23Q85.9 -24.6 86.6 -25.4Q87.3 -26.2 88.5 -26.2Q89.7 -26.2 90.4 -25.4Q91.1 -24.6 91.1 -23V-2.7Q91.1 -1.1 90.4 -0.4Q89.7 0.4 88.5 0.4Q87.4 0.4 86.6 -0.4Q85.9 -1.2 85.9 -2.7ZM101 -16.4V-15.8Q102.3 -17.5 103.8 -18.3Q105.3 -19.1 107.2 -19.1Q109.1 -19.1 110.6 -18.2Q112.1 -17.4 112.8 -15.9Q113.3 -15 113.4 -14Q113.6 -13 113.6 -11.4V-2.5Q113.6 -1 112.9 -0.3Q112.3 0.4 111.2 0.4Q110.1 0.4 109.5 -0.3Q108.8 -1.1 108.8 -2.5V-10.5Q108.8 -12.8 108.1 -14.1Q107.5 -15.4 105.5 -15.4Q104.2 -15.4 103.2 -14.6Q102.1 -13.8 101.6 -12.5Q101.3 -11.4 101.3 -8.5V-2.5Q101.3 -1 100.6 -0.3Q99.9 0.4 98.9 0.4Q97.8 0.4 97.2 -0.3Q96.5 -1.1 96.5 -2.5V-16.3Q96.5 -17.7 97.1 -18.4Q97.7 -19.1 98.7 -19.1Q99.4 -19.1 99.9 -18.8Q100.4 -18.5 100.7 -17.9Q101 -17.3 101 -16.4ZM135.6 -5.5Q135.6 -4.6 135 -3.6Q134.5 -2.6 133.4 -1.6Q132.3 -0.7 130.6 -0.2Q129 0.4 126.9 0.4Q122.4 0.4 119.9 -2.2Q117.4 -4.8 117.4 -9.1Q117.4 -12.1 118.6 -14.4Q119.7 -16.6 121.9 -17.9Q124 -19.1 127.1 -19.1Q128.9 -19.1 130.5 -18.6Q132 -18 133.1 -17.2Q134.2 -16.3 134.8 -15.3Q135.3 -14.3 135.3 -13.5Q135.3 -12.6 134.7 -12Q134.1 -11.4 133.1 -11.4Q132.5 -11.4 132.1 -11.8Q131.7 -12.1 131.3 -12.7Q130.4 -14.1 129.4 -14.7Q128.5 -15.4 127 -15.4Q124.9 -15.4 123.6 -13.8Q122.3 -12.1 122.3 -9.2Q122.3 -7.9 122.6 -6.7Q122.9 -5.6 123.6 -4.8Q124.2 -4 125.1 -3.6Q126 -3.2 127.1 -3.2Q128.5 -3.2 129.5 -3.8Q130.6 -4.5 131.3 -5.9Q131.8 -6.7 132.3 -7.1Q132.8 -7.6 133.5 -7.6Q134.4 -7.6 135 -6.9Q135.6 -6.3 135.6 -5.5ZM142.9 0.4Q141.9 0.4 141.1 -0.3Q140.3 -1 140.3 -2.2Q140.3 -3.3 141 -4.1Q141.8 -4.9 142.9 -4.9Q144 -4.9 144.8 -4.1Q145.6 -3.3 145.6 -2.2Q145.6 -1 144.8 -0.3Q144 0.4 142.9 0.4Z"
											})
										}))
									})), (0, m.jsx)("g", e7(e7({}, {
										className: "x18ebdri xa4qsjk x1u6ievf xm0y69g x1aquc0h x1hwn2t4"
									}), {}, {
										children: (0, m.jsxs)("g", {
											transform: "translate(14.855 27.1)",
											children: [(0, m.jsx)("g", e7(e7({}, {
												className: "x18ebdri xa4qsjk x1u6ievf xm5vage x1aquc0h x1esw782"
											}), {}, {
												children: (0, m.jsx)("path", {
													d: e9
												})
											})), (0, m.jsx)("g", e7(e7({}, {
												className: "x18ebdri xa4qsjk x1u6ievf xom1zpr x1aquc0h x1esw782"
											}), {}, {
												children: (0, m.jsx)("path", {
													d: te
												})
											}))]
										})
									}))]
								}))]
							}))]
						}))
					},
					"ens-l2-zksync": tL.L,
					
          talktonft: function() {
						return (0, m.jsxs)("div", tR(tR({}, p.xk(e5.y.frame, tB)), {}, {
							children: [(0, m.jsxs)("div", tR(tR({}, {
								className: "x78zum5 x6s0dn4 x167g77z xhrpmxf xso031l x1q0q8m5 x13oqfyt x2lah0s"
							}), {}, {
								children: [(0, m.jsxs)("span", tR(tR({}, {
									className: "x1n2onr6 x2lah0s x3nfvp2"
								}), {}, {
									children: [(0, m.jsx)(tC, {}), (0, m.jsx)("span", tR({}, {
										className: "x10l6tqk x1bkpikb x1t1qrwb xci0xqf x1hagigm x16rqkct xi4f3rt xvndefy x1y0btm7 xkqzj2t"
									}))]
								})), (0, m.jsxs)("div", tR(tR({}, {
									className: "x78zum5 xdt5ytf x12mrbbr"
								}), {}, {
									children: [(0, m.jsx)("b", tR(tR({}, {
										className: "x1j6dyjg x1xlr1w8 xn9xswu x1159mfc"
									}), {}, {
										children: "NFT #34"
									})), (0, m.jsxs)("small", tR(tR({}, {
										className: "x3nfvp2 x6s0dn4 x1ed6fcf xlp3en2 x1159mfc xfd79rf x1s688f"
									}), {}, {
										children: ["peeps online", (0, m.jsx)("img", tR(tR({}, {
											className: "x1wc42o8 xegnrdp"
										}), {}, {
											src: "/projects/talktonft/card/verified.png",
											alt: "verified",
											width: "96",
											height: "96"
										}))]
									}))]
								})), (0, m.jsxs)("span", tR(tR({}, {
									className: "x8x9d4c xufs9de xdzlmae x18vcu1k"
								}), {}, {
									children: ["RANK ", (0, m.jsx)("b", tR(tR({}, {
										className: "xy1cshw x1xlr1w8"
									}), {}, {
										children: "#2"
									}))]
								}))]
							})), (0, m.jsxs)("div", tR(tR({}, {
								className: "x1iyjqo2 x78zum5 xdt5ytf x13a6bvl x1j9xkj6 x153ncpu x2lwn1j xb3r6kr"
							}), {}, {
								children: [(0, m.jsx)("div", tR(tR({}, {
									className: "x78zum5 x1j9xkj6 xuk3077 x13a6bvl xzsq7y5 x1aquc0h x1wxijlt xa4qsjk"
								}), {}, {
									children: (0, m.jsx)("div", tR(tR({}, {
										className: "xeq5yr9 x15y2ynn x9h44rk xk61eof x1j6dyjg x37zpob x1hjs6tj x1f7m26b x1nhu2vm"
									}), {}, {
										children: "do you remember being minted?"
									}))
								})), (0, m.jsxs)("div", tR(tR({}, {
									className: "x78zum5 x1j9xkj6 xuk3077 xq3v7u2 x1aquc0h x1wxijlt xa4qsjk"
								}), {}, {
									children: [(0, m.jsx)(tC, {}), (0, m.jsxs)("div", tR(tR({}, {
										className: "xrvj5dj"
									}), {}, {
										children: [(0, m.jsx)("div", tR(tR({}, {
											className: "xeq5yr9 x15y2ynn x9h44rk x1j6dyjg x37zpob x15r89dc x12dsi7a xn9xswu x1orjc0r x3nfvp2 x1jnr06f x1y1jzkf x7fd4wk x1o9sq8h xmazkfz x1aquc0h x1wxijlt xa4qsjk"
										}), {}, {
											children: (0, m.jsx)(tq, {})
										})), (0, m.jsx)("div", tR(tR({}, {
											className: "xeq5yr9 x15y2ynn x9h44rk xk61eof x1j6dyjg x37zpob x15r89dc x12dsi7a xn9xswu x1orjc0r x1g8hg4l x1aquc0h x1wxijlt xa4qsjk"
										}), {}, {
											children: "2:24 am. that’s when i answered the summoning."
										}))]
									}))]
								})), (0, m.jsxs)("div", tR(tR({}, {
									className: "x78zum5 x1j9xkj6 xuk3077 x14julqr x1aquc0h x1wxijlt xa4qsjk"
								}), {}, {
									children: [(0, m.jsx)("span", tR(tR({}, {
										className: "xlshs6z x3nfvp2"
									}), {}, {
										children: (0, m.jsx)(tC, {})
									})), (0, m.jsxs)("div", tR(tR({}, {
										className: "xrvj5dj"
									}), {}, {
										children: [(0, m.jsx)("div", tR(tR({}, {
											className: "xeq5yr9 x15y2ynn x9h44rk x1j6dyjg x37zpob x15r89dc x12dsi7a xn9xswu x1orjc0r x3nfvp2 x1jnr06f x1y1jzkf x7fd4wk x1o9sq8h x1o5w2lj x1aquc0h x1wxijlt xa4qsjk"
										}), {}, {
											children: (0, m.jsx)(tq, {})
										})), (0, m.jsx)("div", tR(tR({}, {
											className: "xeq5yr9 x15y2ynn x9h44rk xk61eof x1j6dyjg x37zpob x15r89dc x12dsi7a xn9xswu x1orjc0r x16dpw5u x1un7ikv x1aquc0h x1wxijlt xa4qsjk"
										}), {}, {
											children: "my people are still in the mempool. i’m going back for them."
										}))]
									}))]
								}))]
							})), (0, m.jsxs)("div", tR(tR({}, {
								className: "x78zum5 x6s0dn4 x167g77z xjtt3no x178xt8z x13fuv20 x1ne2jmq x2lah0s"
							}), {}, {
								children: [(0, m.jsx)("span", tR(tR({}, {
									className: "x1iyjqo2 xvvdolt x1e6avla xhrpmxf x1s31vzs x1sf2tq3"
								}), {}, {
									children: "Message NFT #34…"
								})), (0, m.jsx)("img", tR(tR({}, {
									className: "xvy4d1p xxk0z11 x2lah0s"
								}), {}, {
									src: "/projects/talktonft/card/send.png",
									alt: "",
									width: "96",
									height: "96"
								}))]
							}))]
						}))
					},
					
          "peeps-online": function() {
						return (0, m.jsxs)("div", tP(tP({}, p.xk(e5.y.frame, tQ)), {}, {
							children: [(0, m.jsxs)("div", tP(tP({}, {
								className: "x1n2onr6 xhz7ykq x2lah0s x1fdiq8d x5xr7ap x5szi4u"
							}), {}, {
								children: [(0, m.jsx)("div", tP(tP({}, {
									className: "x10l6tqk xc1hvs2 xovy0qw x13zx6y x1gb2em4 x16rqkct xswzt2o x1y0btm7 xkqzj2t xb3r6kr x1urp14m x8kaux3"
								}), {}, {
									children: tI.map((e, t) => (0, m.jsx)("img", tP(tP({}, {
										0: {
											className: "x10l6tqk x10a8y8t xh8yej3 x5yr21d xl1xv1r xg01cxk xtyapwk x1aquc0h xlwoguv xa4qsjk"
										},
										1: {
											className: "x10l6tqk x10a8y8t xh8yej3 x5yr21d xl1xv1r xtyapwk x1aquc0h xlwoguv xa4qsjk xg01cxk x16dpw5u"
										}
									} [0 === t | 0]), {}, {
										style: {
											animationDelay: "".concat(3 * t, "s")
										},
										src: e,
										alt: "",
										width: "180",
										height: "180"
									}), e))
								})), (0, m.jsx)("span", tP(tP({}, {
									className: "x10l6tqk x1nxrt8b xef6rl2 x1400y8g x1f7m26b x1qt5hsa x1xlr1w8 x1e6avla x1az4v3x x1brqags"
								}), {}, {
									children: "Follow"
								}))]
							})), (0, m.jsxs)("div", tP(tP({}, {
								className: "x78zum5 xdt5ytf x1iyjqo2 x641dqm"
							}), {}, {
								children: [(0, m.jsxs)("div", tP(tP({}, {
									className: "x78zum5 x6s0dn4 x1j9xkj6 x1jvydc1 x1t8wntd x1h1k976"
								}), {}, {
									children: ["peeps online ", (0, m.jsxs)("span", tP(tP({}, {
										className: "x3nfvp2 x6s0dn4 x1nejdyq xufs9de xfmn3hh xo1l8bm x4eaz5e x1yc6iv1 xmkeg23 x1y0btm7 x1tpq6l4 x1e6avla xmfpazt"
									}), {}, {
										children: [(0, m.jsx)("span", tP({}, {
											className: "x1v4s8kt xols6we x16rqkct x1ypy4tm xvgrhby x1aquc0h xrp5g2y xa3vuyk xa4qsjk"
										})), "pps.eth"]
									}))]
								})), (0, m.jsx)("div", tP(tP({}, {
									className: "x1j6dyjg x1413c8m xr9ek0c"
								}), {}, {
									children: "@peepsonl_reborn"
								})), (0, m.jsx)("p", tP(tP({}, {
									className: "x1qt5hsa x10jpfkb xe6w4ck xfrs9s4"
								}), {}, {
									children: "Online is the new real life! Mint yourself, own yourself — governed by no one."
								})), (0, m.jsxs)("div", tP(tP({}, {
									className: "x78zum5 x6s0dn4 xr1yuqi x889kno"
								}), {}, {
									children: [tD.map(e => (0, m.jsx)("img", tP(tP({}, {
										className: "x17z2i9w x17rw0jw x16rqkct xdh2fpr x1y0btm7 xkqzj2t xl1xv1r x1b973y9 x4o9dxs x1mr6na5"
									}), {}, {
										src: e,
										alt: "",
										width: "180",
										height: "180"
									}), e)), (0, m.jsx)("span", tP(tP({}, {
										className: "xdq9ekp x1s31vzs x1413c8m"
									}), {}, {
										children: "and many more peeps"
									}))]
								}))]
							}))]
						}))
					},
					
          allgood: function() {
						return (0, m.jsx)("div", tb(tb({}, p.xk(e5.y.frame, e5.y.clear, tj)), {}, {
							children: (0, m.jsxs)("div", tb(tb({}, {
								className: "x1n2onr6 xh8yej3"
							}), {}, {
								children: [(0, m.jsx)("img", tb(tb({}, {
									className: "x1lliihq xh8yej3 xt7dq6l xv4j7ye xhpnuu7 xmkeg23 x1y0btm7 x2pbeq1 x9f619 x6q96wx xa4qsjk xk37mfy x1aquc0h"
								}), {}, {
									src: "/projects/allgood/card/slide-01.jpg",
									alt: "",
									width: "760",
									height: "428"
								})), (0, m.jsx)("img", tb(tb({}, {
									className: "x1lliihq xh8yej3 xv4j7ye xhpnuu7 xmkeg23 x1y0btm7 x2pbeq1 x9f619 x6q96wx xa4qsjk x10l6tqk x10a8y8t x5yr21d xg01cxk x1o9sq8h x1p6d5wq x1aquc0h"
								}), {}, {
									src: "/projects/allgood/card/slide-04.jpg",
									alt: "",
									width: "760",
									height: "428"
								})), (0, m.jsx)("img", tb(tb({}, {
									className: "x1lliihq xh8yej3 xv4j7ye xhpnuu7 xmkeg23 x1y0btm7 x2pbeq1 x9f619 x6q96wx xa4qsjk x10l6tqk x10a8y8t x5yr21d xg01cxk x1o9sq8h x1w3lebc x1aquc0h"
								}), {}, {
									src: "/projects/allgood/card/slide-10.jpg",
									alt: "",
									width: "760",
									height: "428"
								})), (0, m.jsx)("img", tb(tb({}, {
									className: "x1lliihq xh8yej3 xv4j7ye xhpnuu7 xmkeg23 x1y0btm7 x2pbeq1 x9f619 x6q96wx xa4qsjk x10l6tqk x10a8y8t x5yr21d xg01cxk x1o9sq8h x4z9dn1 x1aquc0h"
								}), {}, {
									src: "/projects/allgood/card/slide-13.jpg",
									alt: "",
									width: "760",
									height: "428"
								})), (0, m.jsx)("img", tb(tb({}, {
									className: "x1lliihq xh8yej3 xv4j7ye xhpnuu7 xmkeg23 x1y0btm7 x2pbeq1 x9f619 x6q96wx xa4qsjk x10l6tqk x10a8y8t x5yr21d xg01cxk x1o9sq8h x1t0mygy x1aquc0h"
								}), {}, {
									src: "/projects/allgood/card/slide-14.jpg",
									alt: "",
									width: "760",
									height: "428"
								})), (0, m.jsxs)("div", tb(tb({}, {
									className: "x10l6tqk xu96u03 x3m8u43 x1ey2m1c x78zum5 x6s0dn4 x1qughib x1uzaqoa"
								}), {}, {
									children: [(0, m.jsxs)("span", tb(tb({}, {
										className: "xrvj5dj xufs9de xfmn3hh x1uj9rzi x11mk0g xmkeg23 x1y0btm7 xcwruto x1e6avla xmfpazt"
									}), {}, {
										children: [(0, m.jsx)("span", tb(tb({}, {
											className: "x15r89dc x2b8uid xuxw1ft x6q96wx xa4qsjk xg01cxk x16dpw5u xk37mfy x1aquc0h"
										}), {}, {
											children: "1 / 14"
										})), (0, m.jsx)("span", tb(tb({}, {
											className: "x15r89dc x2b8uid xuxw1ft xg01cxk x6q96wx xa4qsjk x1p6d5wq x1aquc0h"
										}), {}, {
											children: "4 / 14"
										})), (0, m.jsx)("span", tb(tb({}, {
											className: "x15r89dc x2b8uid xuxw1ft xg01cxk x6q96wx xa4qsjk x1w3lebc x1aquc0h"
										}), {}, {
											children: "10 / 14"
										})), (0, m.jsx)("span", tb(tb({}, {
											className: "x15r89dc x2b8uid xuxw1ft xg01cxk x6q96wx xa4qsjk x4z9dn1 x1aquc0h"
										}), {}, {
											children: "13 / 14"
										})), (0, m.jsx)("span", tb(tb({}, {
											className: "x15r89dc x2b8uid xuxw1ft xg01cxk x6q96wx xa4qsjk x1t0mygy x1aquc0h"
										}), {}, {
											children: "14 / 14"
										}))]
									})), (0, m.jsxs)("div", tb(tb({}, {
										className: "x78zum5 x17d4w8g"
									}), {}, {
										children: [(0, m.jsx)("span", tb(tb({}, {
											className: "x17z2i9w x17rw0jw xrvj5dj x1ku5rj1 x16rqkct xsbe5li x1okkpyx"
										}), {}, {
											children: (0, m.jsx)("i", tb({}, {
												className: "x1ftt334 x1ycjhwn x14zn9g8 x1y0btm7 x4mng3h x1a1y015"
											}))
										})), (0, m.jsx)("span", tb(tb({}, {
											className: "x17z2i9w x17rw0jw xrvj5dj x1ku5rj1 x16rqkct xsbe5li x1okkpyx"
										}), {}, {
											children: (0, m.jsx)("i", tb({}, {
												className: "x1ftt334 x1ycjhwn x14zn9g8 x1y0btm7 x4mng3h x19hrvle"
											}))
										}))]
									}))]
								})), (0, m.jsx)("div", tb(tb({}, {
									className: "x10l6tqk xrcmars xur7f20 xb3r6kr x47corl"
								}), {}, {
									children: (0, m.jsx)("div", tb({}, {
										className: "x10l6tqk xu96u03 x1ey2m1c xuoj239 x1okbm1s x33fu9w x18owj1a x1aquc0h x6q96wx xa4qsjk"
									}))
								}))]
							}))
						}))
					},
					
          doudou: function() {
						return (0, m.jsxs)("div", tk(tk({}, p.xk(e5.y.frame, tv)), {}, {
							children: [(0, m.jsx)("span", tk(tk({}, {
								className: "x10l6tqk x10a8y8t xrvj5dj x1ku5rj1 x1m6oxru xuv8nkb xribhvm x19qcxtu x10oqyz1"
							}), {}, {
								"aria-hidden": "true",
								children: "DOU"
							})), (0, m.jsx)("span", tk(tk({}, {
								className: "x10l6tqk x2e2xj7 x7climu x1t0fkks xkwx021"
							}), {}, {
								children: (0, m.jsx)("img", tk(tk({}, {
									className: "x1lliihq xh8yej3 xt7dq6l xg01cxk x16dpw5u xj4hb1s x7s8090 xa4qsjk xs6ymp x1aquc0h"
								}), {}, {
									src: "/projects/doudou/card/base-cut.webp",
									alt: "",
									width: "365",
									height: "380"
								}))
							})), (0, m.jsx)("span", tk(tk({}, {
								className: "x10l6tqk xk5azdo x7climu x8yj6t5 xl8nxe3"
							}), {}, {
								children: (0, m.jsx)("img", tk(tk({}, {
									className: "x1lliihq xh8yej3 xt7dq6l xg01cxk x16dpw5u xj4hb1s x7s8090 xa4qsjk xpoy268 x1aquc0h"
								}), {}, {
									src: "/projects/doudou/card/dino-cut.webp",
									alt: "",
									width: "164",
									height: "360"
								}))
							})), (0, m.jsx)("span", tk(tk({}, {
								className: "x10l6tqk x6d8grd x1t0kmo3 x1f1nlb9 xm79le0"
							}), {}, {
								children: (0, m.jsx)("img", tk(tk({}, {
									className: "x1lliihq xh8yej3 xt7dq6l xg01cxk x16dpw5u xj4hb1s x7s8090 xa4qsjk xqwj913 x1aquc0h"
								}), {}, {
									src: "/projects/doudou/card/space-cut.webp",
									alt: "",
									width: "240",
									height: "360"
								}))
							})), (0, m.jsx)("span", tk(tk({}, {
								className: "x10l6tqk x1byz8br x12ibf10 x14cqoql"
							}), {}, {
								children: (0, m.jsx)("img", tk(tk({}, {
									className: "x1lliihq xh8yej3 xt7dq6l xg01cxk x16dpw5u xj4hb1s x7s8090 xa4qsjk xhg0x0x x1aquc0h"
								}), {}, {
									src: "/projects/doudou/card/wedding-cut.webp",
									alt: "",
									width: "634",
									height: "620"
								}))
							}))]
						}))
					}
				};

			function tz(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tN(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tz(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tz(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function tJ(e) {
				var {
					parent: t
				} = e, a = (0, l.ch)(t.id);
				return (0, m.jsxs)("section", tN(tN({}, p.xk(f.R.archivePanel)), {}, {
					children: [(0, m.jsx)("div", tN(tN({}, p.xk(tX.stickyHeader, f.R.frostedWell)), {}, {
						children: (0, m.jsx)(z, {
							breadcrumbs: (0, l.eY)(t.id),
							dense: !0,
							showTitle: !1,
							title: t.title
						})
					})), (0, m.jsx)($, {
						nodeId: t.id,
						xstyle: tX.mobileSummary
					}), (0, m.jsx)("div", tN(tN({}, {
						className: "x1p8urz3 x19qmbwx"
					}), {}, {
						children: 0 === a.length ? (0, m.jsx)("p", tN(tN({}, {
							className: "x1ghz6dp xa0v8vl x4z9k3i"
						}), {}, {
							children: "No projects yet."
						})) : (0, m.jsx)("ul", tN(tN({}, {
							className: "x78zum5 xdt5ytf x167g77z x17q2glr x1ghz6dp x1717udv xe8uvvx"
						}), {}, {
							children: a.map(e => (0, m.jsx)(tG, {
								node: e
							}, e.id))
						}))
					}))]
				}))
			}

			function tG(e) {
				var t, {
						node: a
					} = e,
					i = (0, j.Xr)(e => e.openProject),
					r = (0, tw.MK)(a.id),
					l = null != (t = null == r ? void 0 : r.title) ? t : a.title,
					n = "".concat(l, " — project").concat((null == r ? void 0 : r.award) == null ? "" : " \xb7 ".concat(r.award)),
					o = tM[a.id];
				return (0, m.jsx)("li", {
					children: (0, m.jsxs)(g(), tN(tN({
						href: (0, d.vI)(a.id),
						onClick: () => i(a.id),
						"aria-label": n
					}, {
						className: "xrvj5dj x1j7woqf x1yqair9 x1jaupxr xjarjth x6s0dn4 xfx2bn6 x11v7fy3 x1ffh6x8 x1heor9g xkrqix3 xixl9f9 xjbqb8w x1i3lmkl x15406qy xbb3pvg"
					}), {}, {
						children: [(0, m.jsx)("span", tN(tN({}, {
							className: "x78zum5 xl56j7k xh8yej3 x9f619 xjbqb8w x1nu7q7c x2u8bby x1gwi1ll xc342km xsjh3dz x1y0btm7 x9r1u3d x1noiy52 x1717udv x1c7qzw7"
						}), {}, {
							children: (0, m.jsx)("span", tN(tN({}, {
								className: "xh8yej3 x1hzehfu"
							}), {}, {
								children: null == o ? (0, m.jsx)(tE, {
									node: a
								}) : (0, m.jsx)(o, {})
							}))
						})), (0, m.jsxs)("span", tN(tN({}, {
							className: "x78zum5 xdt5ytf x17d4w8g xeuugli"
						}), {}, {
							children: [(0, m.jsxs)("span", tN(tN({}, {
								className: "x78zum5 xdt5ytf x1cy8zhl x167g77z"
							}), {}, {
								children: [(null == r ? void 0 : r.award) == null ? null : (0, m.jsxs)("span", tN(tN({}, {
									className: "x3nfvp2 x6s0dn4 x17d4w8g xazghto xur7f20 xmkeg23 x1y0btm7 xjvwnxe x14k03no x1hpdr4w x1j6dyjg x1xlr1w8"
								}), {}, {
									children: [(0, m.jsx)("span", tN(tN({}, {
										className: "xfifm61 xo5v014"
									}), {}, {
										"aria-hidden": "true",
										children: "\uD83C\uDFC6"
									})), r.award]
								})), (null == r ? void 0 : r.year) == null ? null : (0, m.jsx)("span", tN(tN({}, {
									className: "x18rxp4d x1j6dyjg x1vyo3qp xa0v8vl"
								}), {}, {
									children: r.year
								}))]
							})), (0, m.jsx)("span", tN(tN({}, {
								className: "x1j61zf2 x14v10zd x1s688f xwn7fz2 xsn7cb6"
							}), {}, {
								children: l
							})), (null == r ? void 0 : r.oneLiner) == null ? null : (0, m.jsx)("span", tN(tN({}, {
								className: "xif65rj x1bvu3tq x1evy7pa x1i6nt12"
							}), {}, {
								children: r.oneLiner
							})), (null == r ? void 0 : r.keywords) == null || 0 === r.keywords.length ? null : (0, m.jsx)("span", tN(tN({}, {
								className: "x78zum5 x1a02dak x17d4w8g xr9ek0c"
							}), {}, {
								children: r.keywords.map(e => (0, m.jsx)("span", tN(tN({}, {
									className: "x1j6dyjg x1evy7pa xmfpazt x1m3ak92 x1qlpbte x1hgtkyq xuxw1ft"
								}), {}, {
									children: e
								}), e))
							}))]
						}))]
					}))
				})
			}

			function tE(e) {
				var t, a, i, r, {
						node: l
					} = e,
					[n, o] = tV[null != (t = null == (a = l.visual) ? void 0 : a.folderPreset) ? t : "neutral"],
					s = null != (i = null == (r = l.visual) ? void 0 : r.symbol) ? i : l.title.slice(0, 1),
					d = p.xk(e5.y.frame, tX.fallback);
				return (0, m.jsx)("span", {
					className: d.className,
					style: tN(tN({}, d.style), {}, {
						backgroundImage: "radial-gradient(130% 140% at 22% 8%, ".concat(n, ", ").concat(o, " 92%)")
					}),
					children: (0, m.jsx)("span", tN(tN({}, {
						className: "x167xiw7 x6ybaqj x1xlr1w8 x19n6ce6"
					}), {}, {
						"aria-hidden": "true",
						children: s
					}))
				})
			}
			var tV = {
					neutral: ["#D9D9DE", "#4B4B52"],
					ocean: ["#77C6E6", "#2C7FA6"],
					matcha: ["#A6D089", "#4F8A3D"],
					sakura: ["#FBA9BF", "#E1567F"],
					amber: ["#EDE1A6", "#A59231"],
					terracotta: ["#E5B09E", "#AF5131"],
					indigo: ["#A7AEEC", "#3643BA"],
					amethyst: ["#D0AAE9", "#893EBB"],
					graphite: ["#B3B4BC", "#595B69"]
				},
				tX = {
					stickyHeader: {
						kVAEAm: "x7wzq59",
						k87sOh: "x13vifvy",
						kY2c9j: "xzkaem6",
						kmVPX3: "xhdgoeg x10j801",
						kWkggS: "x1l2ln3c",
						$$css: !0
					},
					mobileSummary: {
						kmVPX3: "xxmtint",
						$$css: !0
					},
					fallback: {
						k1xSpc: "xrvj5dj",
						kgQiWS: "x1ku5rj1",
						$$css: !0
					}
				};

			function tT(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tF(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tT(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tT(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function tW(e) {
				var t, {
						activeCollectionId: a,
						assets: n,
						browseNode: o,
						folders: s,
						section: c
					} = e,
					x = (0, r.useRouter)(),
					A = (0, j.Xr)(e => e.selectSection),
					p = null != o && "projects-shelf" === o.presentation,
					u = null != o && 0 === (0, l.AS)(o.id),
					g = !p && null != o && (0, l.AS)(o.id) > 0 ? o : null,
					h = C(null != (t = null == o ? void 0 : o.id) ? t : null),
					w = (0, i.useCallback)(() => {
						A(c.id), x.push((0, d.EJ)(c.id), {
							scroll: !1
						})
					}, [x, c.id, A]);
				return (0, m.jsxs)("div", tF(tF({}, {
					className: "x1n2onr6 xrvj5dj xb3r6kr x2lwn1j"
				}), {}, {
					children: [(0, m.jsx)(tc, {
						section: c,
						folders: s
					}), (0, m.jsx)(tu, {
						parent: g,
						animateEnter: null == h,
						onDismiss: w
					}), p && null != o ? (0, m.jsx)("div", tF(tF({}, {
						className: "x10l6tqk x10a8y8t xoegz02 xrvj5dj x2lwn1j xmk0nd7"
					}), {}, {
						children: (0, m.jsx)(tJ, {
							parent: o
						})
					})) : u ? (0, m.jsx)("div", tF(tF({}, {
						className: "x10l6tqk x10a8y8t xoegz02 xrvj5dj x2lwn1j xmk0nd7"
					}), {}, {
						children: (0, m.jsx)(ed, {
							node: o,
							assets: n,
							activeCollectionId: a
						})
					})) : null]
				}))
			}

			function tY(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function tZ(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? tY(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : tY(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function t$(e) {
				var {
					links: t,
					context: a,
					current: i
				} = e;
				return (0, m.jsx)("div", tZ(tZ({}, {
					className: "x1s85apg x197uy0l x1h7c4yp x1ivdoyz"
				}), {}, {
					children: (0, m.jsxs)("nav", tZ(tZ({}, p.xk(f.R.breadcrumb)), {}, {
						"aria-label": "".concat(i, " path"),
						children: [t.map((e, t) => (0, m.jsxs)("span", tZ(tZ({}, p.xk(f.R.breadcrumbItem, t_.crumbItemShrink(e.label.length ** 2))), {}, {
							children: [t > 0 ? (0, m.jsx)("span", tZ(tZ({}, p.xk(f.R.breadcrumbSeparator)), {}, {
								children: "/"
							})) : null, (0, m.jsx)(g(), tZ(tZ({
								href: e.href,
								scroll: !1,
								onClick: e.onNavigate
							}, p.xk(f.R.breadcrumbButton)), {}, {
								children: e.label
							}))]
						}), e.key)), (0, m.jsxs)("span", tZ(tZ({}, p.xk(f.R.breadcrumbItem, t_.crumbItemShrink(a.label.length ** 2))), {}, {
							children: [t.length > 0 ? (0, m.jsx)("span", tZ(tZ({}, p.xk(f.R.breadcrumbSeparator)), {}, {
								children: "/"
							})) : null, (0, m.jsx)("button", tZ(tZ({
								type: "button",
								onClick: a.onClear
							}, p.xk(f.R.breadcrumbButton)), {}, {
								children: a.label
							}))]
						})), (0, m.jsxs)("span", tZ(tZ({}, p.xk(f.R.breadcrumbItem, t_.crumbItemCurrent)), {}, {
							children: [(0, m.jsx)("span", tZ(tZ({}, p.xk(f.R.breadcrumbSeparator)), {}, {
								children: "/"
							})), (0, m.jsx)("span", tZ(tZ({}, p.xk(f.R.breadcrumbCurrent, t_.crumbSplit)), {}, {
								children: (0, m.jsx)(tH, {
									text: i
								})
							}))]
						}))]
					}))
				}))
			}

			function tH(e) {
				var {
					text: t
				} = e;
				if (t.length <= 10) return (0, m.jsx)(m.Fragment, {
					children: t
				});
				var a = t.slice(0, -6),
					i = t.slice(-6);
				return (0, m.jsxs)(m.Fragment, {
					children: [(0, m.jsx)("span", tZ(tZ({}, {
						className: "xb3r6kr xlyipyv xuxw1ft xs83m0k x13n9wmd"
					}), {}, {
						children: a
					})), (0, m.jsx)("span", tZ(tZ({}, {
						className: "x2lah0s xuxw1ft"
					}), {}, {
						children: i
					}))]
				})
			}
			var tK = {
					k7Eaqz: "x12tqqkd",
					$$css: !0
				},
				t_ = {
					crumbItemShrink: e => [tK, {
						kmuXW: null != e ? "xn95wi4" : e,
						$$css: !0
					}, {
						"--x-flexShrink": null != e ? e : void 0
					}],
					crumbItemCurrent: {
						kmuXW: "x13tegdc",
						k7Eaqz: "xffghkk",
						$$css: !0
					},
					crumbSplit: {
						k1xSpc: "x78zum5",
						kGNEyG: "x1pha0wt",
						k7Eaqz: "xeuugli",
						khDVqt: "xuxw1ft",
						$$css: !0
					}
				},
				t1 = a(1928);

			function t0(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function t2(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? t0(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t0(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function t4(e) {
				var {
					detail: t,
					selectionKey: a
				} = e, i = (0, r.useRouter)(), n = (0, j.ld)(), o = (0, j.Xr)(e => e.selection), s = (0, j.Xr)(e => e.activeTag), c = (0, j.Xr)(e => e.selectTag), x = (0, j.Xr)(e => {
					var t, a;
					return null != (t = null != (a = e.activeCollectionId) ? a : e.browseNodeId) ? t : e.activeSectionId
				}), u = "asset" === o.kind ? (0, l.p_)(o.id) : null, g = null != u && "video" !== u.type;
				return (0, m.jsxs)("aside", t2(t2({}, p.xk(f.R.detailPanel, t6.detailPanelColumn, null != t.footnote && t6.detailPanelFootnoteInset)), {}, {
					children: ["asset" === o.kind ? (0, m.jsx)(t$, {
						links: (0, l.eY)(x).slice(0, -1).map(e => ({
							key: e.id,
							label: e.title,
							href: (0, d.EJ)(e.id),
							onNavigate: () => n.getState().applyRoute({
								nodeId: e.id,
								viewerAssetId: null
							})
						})),
						context: {
							label: (0, l.Zl)(x).title,
							onClear: () => {
								n.getState().clearAssetSelection(), ea(window.location.pathname, null)
							}
						},
						current: null != u ? (0, l.Kd)(u) : t.title
					}) : null, (0, m.jsxs)(A.PY1.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						},
						children: [t.eyebrow || t.title ? (0, m.jsx)("div", t2(t2({}, p.xk(f.R.mobileHidden)), {}, {
							children: (0, m.jsx)(z, {
								eyebrow: t.eyebrow,
								title: t.title
							})
						})) : null, (0, m.jsx)(t1.B, {
							previews: t.previews,
							onOpen: g ? () => {
								null != u && (n.getState().openViewer(u.id), i.push((0, d.Iz)(x, u.id), {
									scroll: !1
								}))
							} : void 0,
							openLabel: g ? "Open ".concat(t.title) : void 0,
							fillSoloOnMobile: !0
						}), (0, m.jsx)(J.Vk, {
							detail: t,
							onSelectTag: c,
							activeTag: s
						})]
					}, a), null == t.footnote ? null : (0, m.jsx)("p", t2(t2({}, {
						className: "xr1yuqi xat24cr x1miatn0 xa0v8vl x1k6wstc xpx8vt0 x1k4tb9n x1dbl2gt x1hr2gdg"
					}), {}, {
						children: t.footnote
					}))]
				}))
			}
			var t6 = {
					detailPanelColumn: {
						k1xSpc: "x78zum5",
						kXwgrk: "xdt5ytf",
						$$css: !0
					},
					detailPanelFootnoteInset: {
						kGO01o: "xwib8y2 xoe7ew8",
						$$css: !0
					}
				},
				t3 = a(2153);

			function t5(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function t8(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? t5(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t5(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function t7() {
				var e, t = (0, j.Xr)(e => e.sitemap.openPath),
					a = (0, j.Xr)(e => e.sitemap.focusedFile),
					i = (0, j.Xr)(e => e.openDownloadsFolder),
					r = null == a ? null : (0, o.qE)((0, o.QH)(s.W, t), a),
					l = null != r ? "file:".concat(t.join("/"), "/").concat(r.name) : "folder:".concat(t.join("/") || "root"),
					n = {
						key: "root",
						label: "Downloads",
						path: []
					},
					c = (0, o.T3)(s.W, t),
					x = [n, ...t.map((e, a) => {
						var i, r = t.slice(0, a + 1);
						return {
							key: r.join("/"),
							label: null != (i = c[a]) ? i : e,
							path: r
						}
					})],
					u = null != (e = x[x.length - 1]) ? e : n;
				return (0, m.jsxs)("aside", t8(t8({}, p.xk(f.R.detailPanel)), {}, {
					children: [null != r ? (0, m.jsx)(t$, {
						links: x.slice(0, -1).map(e => ({
							key: e.key,
							label: e.label,
							href: (0, d.f6)(e.path),
							onNavigate: () => i(e.path)
						})),
						context: {
							label: u.label,
							onClear: () => {
								i(t), ea((0, d.f6)(t), null)
							}
						},
						current: r.title
					}) : null, (0, m.jsx)(A.PY1.div, {
						initial: {
							opacity: 0
						},
						animate: {
							opacity: 1
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						},
						children: null != r ? (0, m.jsx)(at, {
							file: r,
							openPath: t
						}) : (0, m.jsx)(aa, {
							openPath: t
						})
					}, l)]
				}))
			}

			function t9(e) {
				var t, a, i, r, l = e.length > 0 ? (0, o.Ii)(s.W, e) : null,
					n = null != (t = null == l ? void 0 : l.title) ? t : "Downloads",
					d = null != (a = null == l ? void 0 : l.fileCount) ? a : s.W.fileCount,
					c = null != (i = null == l ? void 0 : l.totalSize) ? i : s.W.totalSize,
					x = null != (r = null == l ? void 0 : l.folderCount) ? r : s.W.entries.filter(e => "folder" === e.kind).length,
					A = [...x > 0 ? [{
						label: "Folders",
						value: String(x)
					}] : [], {
						label: "Files",
						value: String(d)
					}, {
						label: "Size",
						value: (0, o.z3)(c)
					}];
				return {
					title: n,
					lead: 0 === e.length ? "My selection of absolute treasures. Watch them all. Or browse and watch the ones you like." : "Pick a file to play it, or open a subfolder.",
					description: null == l ? void 0 : l.description,
					tags: null == l ? void 0 : l.tags,
					rows: A
				}
			}

			function ae(e) {
				var {
					rows: t,
					description: a,
					tags: i
				} = e, r = null != i && i.length > 0;
				return 0 !== t.length || null != a || r ? (0, m.jsxs)("dl", t8(t8({}, p.xk(f.R.detailList)), {}, {
					children: [t.map(e => (0, m.jsxs)("div", t8(t8({}, p.xk(f.R.detailRow)), {}, {
						children: [(0, m.jsx)("dt", {
							children: e.label
						}), (0, m.jsx)("dd", {
							children: e.value
						})]
					}), e.label)), (0, m.jsx)(J.Nl, {
						tags: i
					}), null != a ? (0, m.jsxs)("div", t8(t8({}, p.xk(f.R.detailRow, (t.length > 0 || r) && f.R.detailRowGroupStart)), {}, {
						children: [(0, m.jsx)("dt", {
							children: "About"
						}), (0, m.jsx)("dd", {
							children: a
						})]
					})) : null]
				})) : null
			}

			function at(e) {
				var {
					file: t,
					openPath: a
				} = e, i = (0, j.Xr)(e => e.sitemap.viewerFile), r = (0, o.T3)(s.W, a).join(" / ") || "Downloads", l = [{
					label: "Type",
					value: "" === t.ext ? "File" : "".concat(t.ext.toUpperCase(), " video")
				}, {
					label: "Size",
					value: (0, o.z3)(t.size)
				}, {
					label: "Folder",
					value: r
				}];
				return (0, m.jsx)(ai, {
					eyebrow: "File",
					title: t.title,
					lead: t.name,
					description: t.description,
					tags: t.tags,
					rows: l,
					media: (0, m.jsx)(t3.M, {
						src: t.url,
						active: null == i,
						stylexProps: {
							className: "xh8yej3 x186iv6y xur7f20 xk3s23f x19kjcj4"
						}
					}, t.key)
				})
			}

			function aa(e) {
				var {
					openPath: t
				} = e, {
					title: a,
					lead: i,
					description: r,
					tags: l,
					rows: n
				} = t9(t);
				return (0, m.jsx)(ai, {
					eyebrow: "Folder",
					title: a,
					lead: i,
					description: r,
					tags: l,
					rows: n
				})
			}

			function ai(e) {
				var {
					eyebrow: t,
					title: a,
					lead: i,
					description: r,
					tags: l,
					rows: n,
					media: o
				} = e;
				return (0, m.jsxs)(m.Fragment, {
					children: [(0, m.jsxs)("div", t8(t8({}, p.xk(f.R.panelHeader, f.R.mobileHidden)), {}, {
						children: [(0, m.jsx)("span", t8(t8({}, p.xk(f.R.panelEyebrow)), {}, {
							children: t
						})), (0, m.jsx)("h2", t8(t8({}, p.xk(f.R.panelTitle)), {}, {
							children: a
						}))]
					})), null != o ? (0, m.jsx)("div", t8(t8({}, {
						className: "x1nwyajf"
					}), {}, {
						children: o
					})) : null, (0, m.jsxs)("div", t8(t8({}, p.xk(f.R.detailCopy)), {}, {
						children: [(0, m.jsx)("p", t8(t8({}, p.xk(f.R.detailLead)), {}, {
							children: i
						})), (0, m.jsx)(ae, {
							rows: n,
							description: r,
							tags: l
						})]
					}))]
				})
			}

			function ar(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function al(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ar(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ar(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function an() {
				var e, t = (0, j.Xr)(e => e.sitemap.openPath),
					a = (0, j.Xr)(e => e.sitemap.focusedFile),
					i = t.slice(0, -1),
					r = (0, o.QH)(s.W, i),
					l = t.length > 0 ? (0, o.QH)(s.W, t) : [],
					n = null != (e = t.at(-1)) ? e : null,
					d = t.join("/"),
					c = C(t),
					x = new Set([c.slice(0, -1).join("/")]);
				c.length > 0 && x.add(c.join("/"));
				var A = !x.has(i.join("/")),
					u = !x.has(d);
				return (0, m.jsxs)("section", al(al({}, {
					className: "x1n2onr6 x78zum5 xdt5ytf x2lwn1j x1qy0e5 xb3r6kr"
				}), {}, {
					children: [(0, m.jsxs)("div", al(al({}, p.xk(ag.downloadsHeader, f.R.frostedWell)), {}, {
						children: [(0, m.jsx)(as, {
							openPath: t
						}), (0, m.jsx)(ao, {
							openPath: t
						})]
					})), (0, m.jsxs)("div", al(al({}, {
						className: "xrvj5dj x1o61qjw x1ydyg5d x12lumcd x2lwn1j"
					}), {}, {
						children: [(0, m.jsx)(ad, {
							side: "left",
							basePath: i,
							entries: r,
							selectedSlug: n,
							focusedFile: 0 === t.length ? a : null,
							animateIn: A,
							hiddenOnMobile: t.length > 0
						}), t.length > 0 ? (0, m.jsx)(ad, {
							side: "right",
							basePath: t,
							entries: l,
							selectedSlug: null,
							focusedFile: a,
							animateIn: u
						}) : (0, m.jsx)("div", al(al({}, p.xk(ag.downloadsColumn, f.R.mobileHidden)), {}, {
							children: (0, m.jsx)("div", al(al({}, {
								className: "xrvj5dj x5yr21d x1ku5rj1 x1tamke2 xa0v8vl x1j6dyjg x1s688f x2b8uid"
							}), {}, {
								children: "Select a folder to see what’s inside"
							}))
						}))]
					}))]
				}))
			}

			function ao(e) {
				var {
					openPath: t
				} = e, {
					title: a,
					lead: i,
					description: r,
					tags: l,
					rows: n
				} = t9(t);
				return (0, m.jsx)("div", al(al({}, p.xk(f.R.mobileNodeDetail)), {}, {
					children: (0, m.jsx)(X, {
						title: a,
						description: i,
						meta: n.length > 0 || null != r || null != l && l.length > 0 ? (0, m.jsx)(ae, {
							rows: n,
							description: r,
							tags: l
						}) : void 0
					})
				}))
			}

			function as(e) {
				var {
					openPath: t
				} = e, a = (0, j.Xr)(e => e.openDownloadsFolder), i = (0, o.T3)(s.W, t), r = [{
					label: "Downloads",
					path: []
				}, ...t.map((e, a) => {
					var r;
					return {
						label: null != (r = i[a]) ? r : e,
						path: t.slice(0, a + 1)
					}
				})];
				return (0, m.jsx)("nav", al(al({}, p.xk(f.R.breadcrumb)), {}, {
					"aria-label": "Downloads path",
					children: r.map((e, t) => {
						var i = t === r.length - 1;
						return (0, m.jsxs)("span", al(al({}, p.xk(f.R.breadcrumbItem)), {}, {
							children: [t > 0 ? (0, m.jsx)("span", al(al({}, p.xk(f.R.breadcrumbSeparator)), {}, {
								children: "/"
							})) : null, i ? (0, m.jsx)("span", al(al({}, p.xk(f.R.breadcrumbCurrent)), {}, {
								children: e.label
							})) : (0, m.jsx)(g(), al(al({
								href: (0, d.f6)(e.path),
								scroll: !1,
								onClick: () => a(e.path)
							}, p.xk(f.R.breadcrumbButton)), {}, {
								children: e.label
							}))]
						}), e.path.join("/") || "root")
					})
				}))
			}

			function ad(e) {
				var {
					side: t,
					basePath: a,
					entries: r,
					selectedSlug: l,
					focusedFile: n,
					animateIn: o,
					hiddenOnMobile: s = !1
				} = e, d = (0, q.I)(), c = (0, i.useRef)(null), x = (0, j.Xr)(e => null != e.sitemap.focusedFile);
				return (0, k.c5)(c, x), (0, m.jsx)("div", al(al({
					ref: c
				}, p.xk(ag.downloadsColumn, "left" === t && ag.downloadsColumnLeft, s && f.R.mobileHidden)), {}, {
					children: 0 === r.length ? (0, m.jsx)("div", al(al({}, {
						className: "xrvj5dj x5yr21d x1ku5rj1 x1tamke2 xa0v8vl x1j6dyjg x1s688f x2b8uid"
					}), {}, {
						children: "Empty folder"
					})) : (0, m.jsx)(A.PY1.div, al(al({}, {
						className: "xrvj5dj x195vfkc"
					}), {}, {
						initial: !!o && !d && {
							opacity: 0,
							x: "right" === t ? 10 : -6
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: S.ui,
							ease: S.Mj
						},
						children: r.map(e => "folder" === e.kind ? (0, m.jsx)(ac, {
							entry: e,
							basePath: a,
							active: e.slug === l
						}, "folder:".concat(e.slug)) : (0, m.jsx)(ax, {
							entry: e,
							basePath: a,
							active: e.name === n
						}, "file:".concat(e.name)))
					}), "".concat(t, ":").concat(a.join("/")))
				}))
			}

			function ac(e) {
				var {
					entry: t,
					basePath: a,
					active: i
				} = e, r = (0, j.Xr)(e => e.openDownloadsFolder), l = [...a, t.slug];
				return (0, m.jsxs)(g(), al(al({
					href: (0, d.f6)(l),
					scroll: !1,
					onClick: () => r(l)
				}, {
					0: {
						className: "xjyslct xrvj5dj x6s0dn4 x167g77z x21xpn4 x1ouqqhj xc342km xur7f20 xmfpazt xjbqb8w x3wo5r3 xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1hl2dhg x1ypdohk x15406qy x9i6iqp x1qmg8k3 x1fimshk x14asjxs"
					},
					1: {
						className: "xjyslct xrvj5dj x6s0dn4 x167g77z x21xpn4 x1ouqqhj xc342km xur7f20 xmfpazt xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1hl2dhg x1ypdohk x15406qy x9i6iqp x1qmg8k3 x1fimshk x14asjxs xcr4fvp x1xi6tmg x1xlr1w8"
					}
				} [0 | !!i]), {}, {
					children: [(0, m.jsx)("span", al(al({}, {
						className: "xrvj5dj xd7y6wv x6s0dn4 x1o2pa38 x1faniam x4l8tn7 x187nhsf xol41b9"
					}), {}, {
						children: (0, m.jsx)(aA, {})
					})), (0, m.jsx)("span", al(al({}, {
						className: "xb3r6kr xlyipyv xuxw1ft"
					}), {}, {
						children: t.title
					})), (0, m.jsxs)("span", al(al({}, {
						className: "x78zum5 x6s0dn4 x1jnr06f x1qag7y0"
					}), {}, {
						children: [(0, m.jsxs)("span", al(al({}, {
							className: "xa0v8vl x1k6wstc xmgt7rl xo1l8bm xss6m8b xuxw1ft"
						}), {}, {
							children: [t.fileCount, " ", 1 === t.fileCount ? "file" : "files"]
						})), (0, m.jsx)(au, {})]
					}))]
				}))
			}

			function ax(e) {
				var {
					entry: t,
					basePath: a,
					active: i
				} = e, r = (0, j.Xr)(e => e.selectDownloadsFile), l = (0, j.Xr)(e => e.requestVideoFullscreen);
				return (0, m.jsxs)("button", al(al({
					type: "button",
					onClick: () => {
						r(a, t.name), ea((0, d.f6)(a), t.name)
					},
					onDoubleClick: () => {
						l()
					}
				}, {
					0: {
						className: "xjyslct xrvj5dj x1fimshk x6s0dn4 x167g77z x21xpn4 x1ouqqhj xc342km xur7f20 xmfpazt xjbqb8w x3wo5r3 xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1hl2dhg x1ypdohk x15406qy x9i6iqp x1qmg8k3"
					},
					1: {
						className: "xjyslct xrvj5dj x1fimshk x6s0dn4 x167g77z x21xpn4 x1ouqqhj xc342km xur7f20 xmfpazt xsn7cb6 xln7xf2 xfifm61 xqfupg5 xdpxx8g x1hl2dhg x1ypdohk x15406qy x9i6iqp x1qmg8k3 xcr4fvp x1xi6tmg x1xlr1w8"
					}
				} [0 | !!i]), {}, {
					children: [(0, m.jsx)("span", al(al({}, {
						className: "xrvj5dj x187nhsf xd7y6wv x6s0dn4 x1o2pa38 x1faniam x4l8tn7"
					}), {}, {
						children: null != t.thumbnailUrl ? (0, m.jsx)("img", al({
							src: t.thumbnailUrl,
							alt: "",
							loading: "lazy",
							decoding: "async"
						}, {
							className: "x187nhsf xd7y6wv x12oqio5 xl1xv1r xs56ulg"
						})) : (0, m.jsx)(ap, {})
					})), (0, m.jsx)("span", al(al({}, {
						className: "xb3r6kr xlyipyv xuxw1ft"
					}), {}, {
						children: t.title
					}))]
				}))
			}

			function aA() {
				return (0, m.jsx)("svg", {
					viewBox: "0 0 24 24",
					width: "20",
					height: "20",
					fill: "none",
					"aria-hidden": "true",
					children: (0, m.jsx)("path", {
						d: "M3 6.75A1.75 1.75 0 0 1 4.75 5h3.86c.57 0 1.1.27 1.44.73l.7.95c.16.22.42.35.7.35h6.8A1.75 1.75 0 0 1 21 8.73V17.25A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z",
						fill: "currentColor",
						fillOpacity: "0.07",
						stroke: "currentColor",
						strokeWidth: "1.3",
						strokeLinejoin: "round"
					})
				})
			}

			function ap() {
				return (0, m.jsxs)("svg", {
					viewBox: "0 0 24 24",
					width: "18",
					height: "18",
					fill: "none",
					"aria-hidden": "true",
					children: [(0, m.jsx)("rect", {
						x: "3",
						y: "5.5",
						width: "18",
						height: "13",
						rx: "2.4",
						fill: "currentColor",
						fillOpacity: "0.12",
						stroke: "currentColor",
						strokeWidth: "1.3"
					}), (0, m.jsx)("path", {
						d: "M10 9.4v5.2l4.4-2.6z",
						fill: "currentColor"
					})]
				})
			}

			function au() {
				return (0, m.jsx)("svg", {
					viewBox: "0 0 24 24",
					width: "14",
					height: "14",
					fill: "none",
					"aria-hidden": "true",
					children: (0, m.jsx)("path", {
						d: "M10 7l5 5-5 5",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			}
			var ag = {
				downloadsHeader: {
					kUk6DE: "x3psx0u",
					kmVPX3: "x1hehwcw x18c4fg2",
					kt9PQ7: "xso031l xyhh1a3",
					kfdmCh: "x1q0q8m5",
					kL6WhQ: "x9gnibm",
					kWkggS: "x1l2ln3c",
					$$css: !0
				},
				downloadsColumn: {
					k7Eaqz: "xeuugli",
					kAzted: "x2lwn1j",
					kmVPX3: "xe8ttls x128btxh",
					kVQacm: "xysyzu8",
					$$css: !0
				},
				downloadsColumnLeft: {
					kWqL5O: "xs1s249 x1uuobh5",
					kSWEuD: "x32b0ac",
					k26BEO: "xsp8b8x",
					$$css: !0
				}
			};

			function ah(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function am(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ah(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ah(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function aw() {
				var e = (0, j.Xr)(e => e.openAboutDetail),
					t = (0, l.Ug)({
						kind: "node",
						id: "about"
					}).previews.find(e => "image" === e.kind);
				return null == t || "image" !== t.kind ? null : (0, m.jsx)(A.PY1.button, am(am({
					type: "button",
					"aria-haspopup": "dialog",
					"aria-label": "About bi-o",
					onClick: e,
					whileTap: {
						scale: .92
					}
				}, {
					className: "x10l6tqk xn5hqff x191j7n5 x1u8a7rm x1s85apg x197uy0l x1u78mur xwa7hi x1717udv xmkeg23 x1y0btm7 x6vysrc x1e6avla xb3r6kr x62xbog xhla5wm x1ypdohk"
				}), {}, {
					children: (0, m.jsx)(H.w, {
						src: t.src,
						alt: "",
						sizes: "58px",
						stylexProps: {
							className: "x1lliihq xh8yej3 x5yr21d xl1xv1r"
						}
					})
				}))
			}
			var ay = a(8362);

			function ab(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function aj(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ab(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ab(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function af(e) {
				var {
					isFullscreen: t,
					onToggleFullscreen: a
				} = e, i = (0, k._6)();
				return (0, m.jsxs)("header", aj(aj({}, {
					className: "xrvj5dj xwlkcym xgujvf1 x6s0dn4 x1csxjeb x1yka5m5 xso031l x1q0q8m5 x9gnibm"
				}), {}, {
					children: [(0, m.jsx)(ay.f, {
						close: {
							title: "Close — not available here"
						},
						minimize: {
							title: "Minimize — not available here"
						},
						resize: i ? {
							title: "Resize — not available here"
						} : {
							title: t ? "Exit fullscreen" : "Enter fullscreen",
							onClick: a
						}
					}), (0, m.jsxs)("div", aj(aj({}, {
						className: "x7v7x1q xa0v8vl x1j6dyjg x1xlr1w8"
					}), {}, {
						children: ["BI-O", (0, m.jsx)("a", {
							href: "https://translate.google.com/?sl=auto&tl=en&text=%E7%A8%8B%E5%BA%B7&op=translate",
							target: "_blank",
							children: (0, m.jsx)("sup", {
								children: "[1]"
							})
						})]
					}))]
				}))
			}
			var ak = n.km,
				av = new Map,
				aL = A.PY1.create(g());

			function aO(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function aP(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? aO(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : aO(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}
			var aI = {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.5,
					strokeLinecap: "round",
					strokeLinejoin: "round"
				},
				aD = {
					about: (0, m.jsxs)(m.Fragment, {
						children: [(0, m.jsx)("rect", {
							x: "4",
							y: "4",
							width: "16",
							height: "16",
							rx: "5"
						}), (0, m.jsx)("circle", {
							cx: "12",
							cy: "8.6",
							r: "0.9",
							fill: "currentColor",
							stroke: "none"
						}), (0, m.jsx)("path", {
							d: "M12 11.4v4.8"
						})]
					}),
					search: (0, m.jsxs)(m.Fragment, {
						children: [(0, m.jsx)("path", {
							d: "M22 12h-6l-2 3h-4l-2-3H2"
						}), (0, m.jsx)("path", {
							d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
						})]
					}),
					download: (0, m.jsxs)(m.Fragment, {
						children: [(0, m.jsx)("path", {
							d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
						}), (0, m.jsx)("polyline", {
							points: "7 10 12 15 17 10"
						}), (0, m.jsx)("line", {
							x1: "12",
							y1: "15",
							x2: "12",
							y2: "3"
						})]
					})
				};

			function aQ(e) {
				var {
					icon: t,
					size: a = 16
				} = e, i = aD[t];
				return null == i ? null : (0, m.jsx)("svg", aP(aP({}, aI), {}, {
					width: a,
					height: a,
					"aria-hidden": "true",
					children: i
				}))
			}

			function aU(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function aR(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? aU(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : aU(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function aC() {
				var e = (0, j.Xr)(e => e.activeSectionId),
					t = (0, j.Xr)(e => e.selectSection),
					a = (0, l.__)(),
					i = a.find(e => "about" === e.id),
					r = a.filter(e => "about" !== e.id);
				return (0, m.jsxs)("aside", aR(aR({}, {
					className: "xrvj5dj x1pvgvxb x1jnr06f x10ukxgv xl4xnwh xnymesk xxobre7 xs1s249 x32b0ac xsp8b8x xysyzu8"
				}), {}, {
					children: [null == i ? null : (0, m.jsx)(aS, {
						node: i,
						isActive: i.id === e,
						onSelect: t
					}), (0, m.jsx)(aq, {
						label: "Pinned",
						nodes: r,
						activeSectionId: e,
						onSelect: t
					})]
				}))
			}

			function aq(e) {
				var {
					label: t,
					nodes: a,
					activeSectionId: i,
					onSelect: r
				} = e;
				return (0, m.jsxs)("div", aR(aR({}, {
					className: "xrvj5dj x1jnr06f x1c436fg"
				}), {}, {
					children: [(0, m.jsx)("p", aR(aR({}, {
						className: "x1b6bj2a xb61xv8 x1k6wstc x1xlr1w8 x16q24ku"
					}), {}, {
						children: t
					})), a.map(e => (0, m.jsx)(aS, {
						node: e,
						isActive: e.id === i,
						onSelect: r
					}, e.id))]
				}))
			}

			function aS(e) {
				var t, a, i, {
						node: r,
						isActive: n,
						onSelect: o
					} = e,
					s = null != (a = (0, l.sG)(r)) ? a : "",
					c = (0, d.EJ)(r.id),
					x = n ? c : null !== (t = r.id, i = av.get(t)) && void 0 !== i ? i : c;
				return (0, m.jsxs)(aL, aR(aR({
					href: x,
					scroll: !1,
					draggable: !1,
					"data-section-nav": r.id,
					onClick: x === c ? () => o(r.id) : void 0,
					"aria-current": n ? "page" : void 0,
					whileHover: {
						y: -1
					},
					whileTap: {
						scale: .985
					}
				}, {
					0: {
						className: "xjyslct x78zum5 x6s0dn4 x883omv xu97haq xc342km xur7f20 x1p3i4rr xjbqb8w x1u82tzo xsn7cb6 xln7xf2 xfifm61 xdpxx8g x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3"
					},
					1: {
						className: "xjyslct x78zum5 x6s0dn4 x883omv xu97haq xc342km xur7f20 x1p3i4rr xsn7cb6 xln7xf2 xfifm61 xdpxx8g x1ypdohk xs2xxs2 x9i6iqp x1qmg8k3 xz1yl1e x1j16i0u x1s688f"
					}
				} [0 | !!n]), {}, {
					children: [(0, m.jsx)("span", aR(aR({}, {
						className: "xrvj5dj x17z2i9w x17rw0jw x1ku5rj1 x1kogg8i x1j6dyjg x1xlr1w8"
					}), {}, {
						children: s in aD ? (0, m.jsx)(aQ, {
							icon: s
						}) : (0, l.$0)(r)
					})), (0, m.jsx)("span", {
						children: r.title
					})]
				}))
			}

			function aB(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function aM(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? aB(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : aB(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function az() {
				var e = (0, j.Xr)(e => e.activeSectionId),
					t = (0, j.Xr)(e => e.browseNodeId),
					a = (0, j.Xr)(e => e.activeCollectionId),
					i = (0, j.Xr)(e => e.selection),
					r = (0, j.Xr)(e => e.sitemap.focusedFile),
					o = (0, j.Xr)(e => e.isFinderFullscreen),
					s = (0, j.Xr)(e => e.toggleFinderFullscreen),
					d = (0, l.Zl)(e),
					c = (0, l.ch)(e),
					x = c.length > 0,
					u = null == t ? null : (0, l.Zl)(t),
					g = null == u ? [] : (0, l.X1)(null != a ? a : u.id),
					h = (0, l.Ug)(i),
					w = d.id === n.km,
					y = "about" === d.id,
					b = w ? null != r : !y && "asset" === i.kind,
					f = b ? aN.panelSlotMobileHidden : aN.panelSlot,
					k = b ? aN.panelSlot : aN.panelSlotMobileHidden;
				return (0, m.jsx)("main", aM(aM({}, {
					className: "xg6iff7 xxeasbp x1dr59a3 xlr3d3i xrvj5dj x1ku5rj1 x5o4joa x1rie1ur xbq5sm8 xsn7cb6"
				}), {}, {
					children: (0, m.jsx)(A.PY1.section, aM(aM({}, {
						0: {
							className: "x1ppl6ru x5yr21d x1qqj25 x1b57q7a"
						},
						1: {
							className: "xixxii4 x1gjjlsl xy7zkf2 xzbu77a x14atkfc xt7dq6l x7ab17h"
						}
					} [0 | !!o]), {}, {
						initial: !1,
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: S.z1,
							ease: S.lu
						},
						children: (0, m.jsxs)("div", aM(aM({}, {
							0: {
								className: "x1n2onr6 xb3r6kr x5yr21d xgqmno8 x1qlvfpk xrefnyo x1175ktp x1tktrv8"
							},
							1: {
								className: "x1n2onr6 xb3r6kr x5yr21d x1qlvfpk xrefnyo x1175ktp x1tktrv8 x4pepcl"
							}
						} [0 | !!o]), {}, {
							children: [(0, m.jsx)(af, {
								isFullscreen: o,
								onToggleFullscreen: s
							}), (0, m.jsxs)("div", aM(aM({}, {
								className: "xrvj5dj x1g714a3 x2lwn1j x1c7e81a x1oxrj0m x1ydyg5d x1d10j92"
							}), {}, {
								children: [(0, m.jsx)(aC, {}), w ? (0, m.jsxs)(m.Fragment, {
									children: [(0, m.jsx)("div", aM(aM({}, p.xk(f)), {}, {
										children: (0, m.jsx)(an, {})
									})), (0, m.jsx)("div", aM(aM({}, p.xk(k)), {}, {
										children: (0, m.jsx)(t7, {})
									}))]
								}) : (0, m.jsxs)(m.Fragment, {
									children: [(0, m.jsx)("div", aM(aM({}, p.xk(f)), {}, {
										children: y ? (0, m.jsx)(I, {}) : x ? (0, m.jsx)(tW, {
											section: d,
											folders: c,
											browseNode: u,
											activeCollectionId: a,
											assets: g
										}) : (0, m.jsx)(ed, {
											node: u,
											activeCollectionId: a,
											assets: g
										})
									})), (0, m.jsx)("div", aM(aM({}, p.xk(k)), {}, {
										children: (0, m.jsx)(t4, {
											detail: h,
											selectionKey: "".concat(i.kind, "-").concat(i.id)
										})
									}))]
								})]
							})), y ? (0, m.jsx)(aw, {}) : null]
						}))
					}))
				}))
			}
			var aN = {
				panelSlotMobileHidden: {
					k1xSpc: "xjp7ctv x1pvgvxb",
					$$css: !0
				},
				panelSlot: {
					k1xSpc: "xjp7ctv",
					$$css: !0
				}
			};

			function aJ(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function aG(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? aJ(Object(a), !0).forEach(function(t) {
						(0, x.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : aJ(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function aE() {
				var e = (0, j.Xr)(e => e.activeSectionId),
					t = (0, j.Xr)(e => e.selectSection),
					a = (0, l.__)();
				return (0, m.jsx)("nav", aG(aG({}, {
					className: "xixxii4 x1wv12a x1nrll8i x16n82f9 xfsv5xo x1s85apg xtmuxrs x1jnr06f x14odnwx xmkeg23 x1y0btm7 x1my3pjb xmf3hgm x1feddpz x1padmi5 xtw1kql x1egk0vo"
				}), {}, {
					"aria-label": "Sections",
					children: a.map(a => {
						var i, r, n, o = null != (r = (0, l.sG)(a)) ? r : "",
							s = a.id === e,
							c = (0, d.EJ)(a.id),
							x = s ? c : null !== (i = a.id, n = av.get(i)) && void 0 !== n ? n : c;
						return (0, m.jsxs)(aL, aG(aG({
							href: x,
							scroll: !1,
							draggable: !1,
							"data-section-dock": a.id,
							"aria-label": a.title,
							"aria-current": s ? "page" : void 0,
							onClick: x === c ? () => t(a.id) : void 0,
							whileTap: {
								scale: .92
							}
						}, {
							0: {
								className: "x1n2onr6 xrvj5dj x1ku5rj1 x1pju0fl xc9qbxq x4pepcl xlke1hq xjbqb8w x1e85lb0 xs2xxs2 x9i6iqp x1qmg8k3"
							},
							1: {
								className: "x1n2onr6 xrvj5dj x1ku5rj1 x1pju0fl xc9qbxq x4pepcl xs2xxs2 x9i6iqp x1qmg8k3 xhmoqqp xvumf46 x1awewz0"
							}
						} [0 | !!s]), {}, {
							children: [o in aD ? (0, m.jsx)(aQ, {
								icon: o,
								size: 18
							}) : (0, l.$0)(a), s ? (0, m.jsx)("span", aG(aG({}, {
								className: "x10l6tqk xbfrwjf x1nrll8i x16n82f9 x51ohtg xqu0tyb x1e6avla xdwv979"
							}), {}, {
								"aria-hidden": "true"
							})) : null]
						}), a.id)
					})
				}))
			}
			var aV = (0, c.default)(() => a.e(619).then(a.bind(a, 5619)).then(e => e.ViewerWindow), {
					loadableGenerated: {
						webpack: () => [5619]
					},
					loadableGenerated: {
						webpack: () => [5619]
					}
				}),
				aX = (0, c.default)(() => a.e(650).then(a.bind(a, 8650)).then(e => e.ImageLightbox), {
					loadableGenerated: {
						webpack: () => [8650]
					},
					loadableGenerated: {
						webpack: () => [8650]
					}
				});

			function aT() {
				return (0, m.jsxs)(m.Fragment, {
					children: [(0, m.jsx)(az, {}), (0, m.jsx)(aE, {}), (0, m.jsx)(aV, {}), (0, m.jsx)(aX, {})]
				})
			}

			function aF(e) {
				var {
					route: t
				} = e;
				return (0, m.jsxs)(j.xZ, {
					route: t,
					children: [(0, m.jsx)(aW, {
						route: t
					}), (0, m.jsx)(i.Suspense, {
						fallback: null,
						children: (0, m.jsx)(aY, {})
					}), (0, m.jsx)(aT, {})]
				})
			}

			function aW(e) {
				var {
					route: t
				} = e, a = (0, j.ld)(), r = (0, d.vh)(t);
				return (0, i.useLayoutEffect)(() => {
					a.getState().applyRoute(t), null != t.sitemap ? av.set(ak, (0, d.f6)(t.sitemap.openPath)) : av.set((0, l.bX)(t.nodeId), (0, d.EJ)(t.nodeId))
				}, [a, r]), null
			}

			function aY() {
				var e = (0, r.useSearchParams)(),
					t = (0, r.usePathname)(),
					a = (0, r.useRouter)(),
					d = (0, j.ld)();
				return (0, i.useLayoutEffect)(() => {
					var i, r, c = e.get("file");
					if (null != c) {
						var x = d.getState();
						if (x.activeSectionId === n.km) return null != x.sitemap.viewerFile ? void 0 : null == (0, o.qE)((0, o.QH)(s.W, x.sitemap.openPath), c) ? void a.replace(t, {
							scroll: !1
						}) : void(x.sitemap.focusedFile !== c && x.selectDownloadsFile(x.sitemap.openPath, c));
						if (null == x.viewerAssetId) {
							var A = null != (i = null != (r = x.activeCollectionId) ? r : x.browseNodeId) ? i : x.activeSectionId,
								p = (0, l.p_)(c);
							if (null == p || !p.nodeIds.includes(A)) return void a.replace(t, {
								scroll: !1
							});
							x.selectedAssetId !== p.id && x.selectAsset(p.id)
						}
					}
				}, [e, t, a, d]), null
			}
		},
		4922: (e, t, a) => {
			"use strict";
			a.d(t, {
				fi: () => i
			});
			var i = {
				mobile: "@media (max-width: 760px)",
				narrow: "@media (max-width: 1040px)",
				narrowOnly: "@media (min-width: 760.01px) and (max-width: 1040px)"
			}
		},
		
    5197: (e, t, a) => {
			"use strict";
			a.d(t, {
				L: () => d
			});
			var i = a(1106),
				r = a(2600),
				l = a(8684),
				n = a(5155);

			function o(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? o(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function d() {
				return (0, n.jsx)("div", s(s({}, r.xk(l.y.frame, l.y.clear)), {}, {
					children: (0, n.jsxs)("svg", s(s({}, {
						className: "x10l6tqk x10a8y8t xh8yej3 x5yr21d"
					}), {}, {
						viewBox: "0 0 240 240",
						"aria-hidden": "true",
						children: [(0, n.jsx)("defs", {
							children: (0, n.jsx)("clipPath", {
								id: "ens-tile-avatar-clip",
								children: (0, n.jsx)("circle", {
									cx: "24",
									cy: "46",
									r: "10"
								})
							})
						}), (0, n.jsx)("polygon", {
							points: "114,66 166,92 166,102 114,76",
							fill: "#eceae3",
							stroke: "#cfcdc5",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,92 218,66 218,76 166,102",
							fill: "#dfddd5",
							stroke: "#cfcdc5",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,40 218,66 166,92 114,66",
							fill: "#ffffff",
							stroke: "#d6d4cd",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,48 184,57 166,66 148,57",
							fill: "#f7f6f1",
							stroke: "#dcdad2",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "184,57 202,66 184,75 166,66",
							fill: "#f7f6f1",
							stroke: "#dcdad2",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,66 184,75 166,84 148,75",
							fill: "#f7f6f1",
							stroke: "#dcdad2",
							strokeWidth: "1"
						}), (0, n.jsxs)("g", s(s({}, {
							className: "x1764fhq x1g0ag68 xh0df00 x1aquc0h x8i61ch xa4qsjk"
						}), {}, {
							children: [(0, n.jsx)("polygon", {
								points: "148,57 166,66 148,75 130,66",
								fill: "#f6d27c",
								stroke: "#d9ad4a",
								strokeWidth: "1.2"
							}), (0, n.jsx)("text", {
								transform: "translate(142,64) scale(1,0.5) rotate(45)",
								fontFamily: c,
								fontSize: "8",
								fontWeight: "700",
								fill: "#7a5d1f",
								children: "KC"
							})]
						})), (0, n.jsx)("text", {
							transform: "matrix(0.894,0.447,0,1,140,84)",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fontFamily: c,
							fontSize: "4.8",
							fontWeight: "700",
							letterSpacing: "0.02em",
							fill: "#75757e",
							children: "ENS \xb7 zkSync L2"
						}), (0, n.jsx)("text", {
							transform: "matrix(0.894,-0.447,0,1,192,84)",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fontFamily: c,
							fontSize: "4.1",
							fontWeight: "700",
							letterSpacing: "0.01em",
							fill: "#8f8f97",
							children: "REGISTRY + RESOLVER"
						}), (0, n.jsx)("polygon", {
							points: "114,176 166,202 166,212 114,186",
							fill: "#4c60c4",
							stroke: "#3f51ad",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,202 218,176 218,186 166,212",
							fill: "#3f51ad",
							stroke: "#36459a",
							strokeWidth: "1"
						}), (0, n.jsx)("polygon", {
							points: "166,150 218,176 166,202 114,176",
							fill: "#627eea",
							stroke: "#4c60c4",
							strokeWidth: "1"
						}), (0, n.jsxs)("g", {
							transform: "translate(166,174)",
							children: [(0, n.jsx)("polygon", {
								points: "0,-13 -7.5,1.5 0,6.5",
								fill: "rgb(255 255 255 / 0.95)"
							}), (0, n.jsx)("polygon", {
								points: "0,-13 7.5,1.5 0,6.5",
								fill: "rgb(255 255 255 / 0.55)"
							}), (0, n.jsx)("polygon", {
								points: "-7.5,4 0,14.5 0,9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("polygon", {
								points: "7.5,4 0,14.5 0,9",
								fill: "rgb(255 255 255 / 0.4)"
							})]
						}), (0, n.jsx)("text", {
							transform: "matrix(0.894,0.447,0,1,140,194)",
							textAnchor: "middle",
							dominantBaseline: "middle",
							fontFamily: c,
							fontSize: "5",
							fontWeight: "700",
							letterSpacing: "0.02em",
							fill: "#dfe4fb",
							children: "ENS \xb7 ETH L1"
						}), (0, n.jsx)("path", s(s({}, {
							className: "xbh8q5q xp67p7y xrpwkyf x1sieojn"
						}), {}, {
							d: "M56,176 L112,176"
						})), (0, n.jsx)("path", s(s({}, {
							className: "xbh8q5q xp67p7y xrpwkyf x1sieojn"
						}), {}, {
							d: "M30,94 L30,162"
						})), (0, n.jsx)("path", s(s({}, {
							className: "xbh8q5q xp67p7y xrpwkyf x1sieojn"
						}), {}, {
							d: "M50,162 L86,141"
						})), (0, n.jsx)("path", s(s({}, {
							className: "xbh8q5q xp67p7y xrpwkyf x1sieojn"
						}), {}, {
							d: "M113,119 L134,87"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk xz8k45i x1ifpis1 xretygq x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x1avhfis x16mp99s x9hx4fa x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x1avhfis x17u72z4 xg6yyc4 x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x1avhfis x1h8xtfk xi8cs5z x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x2r23ki x7ytzzz x1he2flz x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk xz8k45i x1ifpis1 x15uryro x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x1l2rs6z x16mp99s xxl0m0j x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", s(s({}, {
							className: "xg01cxk xdp0nv8 x8i61ch xa4qsjk x1l2rs6z xzr24rs x1t6ilg2 x1aquc0h"
						}), {}, {
							x: "-2",
							y: "-2",
							width: "4",
							height: "4",
							rx: "1"
						})), (0, n.jsx)("rect", {
							x: "89",
							y: "114",
							width: "26",
							height: "32",
							rx: "3",
							fill: "#ffffff",
							stroke: "#55555e",
							strokeWidth: "1.4"
						}), (0, n.jsx)("line", {
							x1: "89",
							y1: "124.5",
							x2: "115",
							y2: "124.5",
							stroke: "#55555e",
							strokeWidth: "1"
						}), (0, n.jsx)("line", {
							x1: "89",
							y1: "135",
							x2: "115",
							y2: "135",
							stroke: "#55555e",
							strokeWidth: "1"
						}), (0, n.jsx)("circle", {
							cx: "94.5",
							cy: "119.5",
							r: "1.3",
							fill: "#4cc38a"
						}), (0, n.jsx)("circle", {
							cx: "94.5",
							cy: "130",
							r: "1.3",
							fill: "#4c7ef3"
						}), (0, n.jsx)("circle", {
							cx: "94.5",
							cy: "140.5",
							r: "1.3",
							fill: "#d9ad4a"
						}), (0, n.jsx)("line", {
							x1: "103",
							y1: "119.5",
							x2: "111",
							y2: "119.5",
							stroke: "#b0b0aa",
							strokeWidth: "1"
						}), (0, n.jsx)("line", {
							x1: "103",
							y1: "130",
							x2: "111",
							y2: "130",
							stroke: "#b0b0aa",
							strokeWidth: "1"
						}), (0, n.jsx)("line", {
							x1: "103",
							y1: "140.5",
							x2: "111",
							y2: "140.5",
							stroke: "#b0b0aa",
							strokeWidth: "1"
						}), (0, n.jsx)("text", s(s({}, {
							className: "x1wb9f3q x1okcxc5 x1xlr1w8 x1g5djsm"
						}), {}, {
							x: "120",
							y: "146",
							textAnchor: "start",
							fontFamily: c,
							children: "CCIP GATEWAY"
						})), (0, n.jsx)("rect", {
							x: "18",
							y: "164",
							width: "36",
							height: "25",
							rx: "5",
							fill: "#ffffff",
							stroke: "#55555e",
							strokeWidth: "1.4"
						}), (0, n.jsx)("path", {
							d: "M18,173 L54,173",
							stroke: "#55555e",
							strokeWidth: "1.1"
						}), (0, n.jsx)("rect", {
							x: "42",
							y: "176",
							width: "12",
							height: "9",
							rx: "3",
							fill: "#eceae3",
							stroke: "#55555e",
							strokeWidth: "1.1"
						}), (0, n.jsx)("circle", {
							cx: "48",
							cy: "180.5",
							r: "1.5",
							fill: "#4cc38a"
						}), (0, n.jsx)("text", s(s({}, {
							className: "x1wb9f3q x1okcxc5 x1xlr1w8 x1g5djsm"
						}), {}, {
							x: "36",
							y: "204",
							textAnchor: "middle",
							fontFamily: c,
							children: "WALLET"
						})), (0, n.jsx)("text", s(s({}, {
							className: "x3ek0n1 x1xlr1w8 xg01cxk x8i61ch xa4qsjk xnpfjt0 x1aquc0h"
						}), {}, {
							x: "84",
							y: "187",
							textAnchor: "middle",
							fontFamily: c,
							fill: "#4c7ef3",
							children: "OffchainLookup"
						})), (0, n.jsx)("text", s(s({}, {
							className: "x3ek0n1 x1xlr1w8 xg01cxk x8i61ch xa4qsjk xzmzql7 x1aquc0h"
						}), {}, {
							transform: "translate(66,146) rotate(-30)",
							textAnchor: "middle",
							fontFamily: c,
							fill: "#4c7ef3",
							children: "GET /{data}"
						})), (0, n.jsx)("text", s(s({}, {
							className: "x3ek0n1 x1xlr1w8 xg01cxk x8i61ch xa4qsjk x1hskbra x1aquc0h"
						}), {}, {
							x: "168",
							y: "112",
							textAnchor: "start",
							fontFamily: c,
							fill: "#4c7ef3",
							children: "resolver.text(node)"
						})), (0, n.jsx)("text", s(s({}, {
							className: "x3ek0n1 x1xlr1w8 xg01cxk x8i61ch xa4qsjk xjyw0aw x1aquc0h"
						}), {}, {
							x: "66",
							y: "158",
							textAnchor: "middle",
							fontFamily: c,
							fill: "#a8842c",
							children: "signed response"
						})), (0, n.jsx)("text", s(s({}, {
							className: "x1xlr1w8 xg01cxk x8i61ch xa4qsjk x34eiuy xya8t06 x1aquc0h"
						}), {}, {
							x: "91",
							y: "168",
							textAnchor: "middle",
							fontFamily: c,
							fill: "#2f2f36",
							children: "resolveWithProof()"
						})), (0, n.jsxs)("g", s(s({}, {
							className: "x1764fhq x18doydi x1o9sq8h x10989ef x1aquc0h x8i61ch xa4qsjk"
						}), {}, {
							children: [(0, n.jsx)("rect", {
								x: "8",
								y: "26",
								width: "96",
								height: "66",
								rx: "8",
								fill: "#ffffff",
								stroke: "#c9c7c0",
								strokeWidth: "1",
								strokeDasharray: "4 3"
							}), (0, n.jsx)("circle", {
								cx: "24",
								cy: "46",
								r: "10",
								fill: "#f4f3ef",
								stroke: "#c9c7c0",
								strokeWidth: "1",
								strokeDasharray: "3 2.5"
							}), (0, n.jsx)("text", {
								x: "24",
								y: "49.5",
								textAnchor: "middle",
								fontFamily: c,
								fontSize: "9",
								fontWeight: "700",
								fill: "#b0aea6",
								children: "?"
							}), (0, n.jsx)("text", {
								x: "40",
								y: "49",
								fontFamily: c,
								fontSize: "8",
								fontWeight: "700",
								fill: "#8f8f97",
								children: "3n4.pps.eth"
							}), (0, n.jsx)("rect", s(s({}, {
								className: "x1vi4k65 x1doqw8q x1aquc0h xius3t x4hg4is xa4qsjk"
							}), {}, {
								x: "40",
								y: "54",
								width: "44",
								height: "6",
								rx: "3"
							})), (0, n.jsx)("rect", s(s({}, {
								className: "x1vi4k65 x1doqw8q x1aquc0h xius3t x4hg4is xa4qsjk"
							}), {}, {
								x: "14",
								y: "70",
								width: "58",
								height: "6",
								rx: "3"
							})), (0, n.jsx)("rect", s(s({}, {
								className: "x1vi4k65 x1doqw8q x1aquc0h xius3t x4hg4is xa4qsjk"
							}), {}, {
								x: "14",
								y: "80",
								width: "40",
								height: "6",
								rx: "3"
							}))]
						})), (0, n.jsxs)("g", s(s({}, {
							className: "x1764fhq x18doydi xg01cxk x16dpw5u xjnb9hq x1aquc0h x8i61ch xa4qsjk"
						}), {}, {
							children: [(0, n.jsx)("rect", {
								x: "8",
								y: "26",
								width: "96",
								height: "66",
								rx: "8",
								fill: "#ffffff",
								stroke: "#d8d6d0",
								strokeWidth: "1"
							}), (0, n.jsx)("path", {
								d: "M8,34 a8,8 0 0 1 8,-8 h80 a8,8 0 0 1 8,8 v10 h-96 z",
								fill: "#aedcea"
							}), (0, n.jsx)("circle", {
								cx: "14.5",
								cy: "30",
								r: "0.9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("circle", {
								cx: "30",
								cy: "36",
								r: "0.9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("circle", {
								cx: "52",
								cy: "29",
								r: "0.9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("circle", {
								cx: "76",
								cy: "35",
								r: "0.9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("circle", {
								cx: "94",
								cy: "30",
								r: "0.9",
								fill: "rgb(255 255 255 / 0.8)"
							}), (0, n.jsx)("image", {
								href: "/projects/peeps-online/card/astronaut.jpg",
								x: "14",
								y: "36",
								width: "20",
								height: "20",
								clipPath: "url(#ens-tile-avatar-clip)"
							}), (0, n.jsx)("circle", {
								cx: "24",
								cy: "46",
								r: "10",
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: "2.5"
							}), (0, n.jsx)("text", {
								x: "40",
								y: "53",
								fontFamily: c,
								fontSize: "8.5",
								fontWeight: "700",
								fill: "#23232a",
								children: "by bio"
							}), (0, n.jsx)("rect", {
								x: "40",
								y: "57",
								width: "50",
								height: "10",
								rx: "5",
								fill: "#eef2fd",
								stroke: "#d8e0f8",
								strokeWidth: "0.8"
							}), (0, n.jsx)("circle", {
								cx: "46",
								cy: "62",
								r: "1.5",
								fill: "#4cc38a"
							}), (0, n.jsx)("text", {
								x: "50",
								y: "64.5",
								fontFamily: c,
								fontSize: "5.5",
								fontWeight: "700",
								fill: "#4666d6",
								children: "3n4.pps.eth"
							}), (0, n.jsx)("text", {
								x: "14",
								y: "82",
								fontFamily: c,
								fontSize: "6",
								fill: "#55555e",
								children: "url \xb7 3n4.is"
							}), (0, n.jsx)("text", {
								x: "98",
								y: "82",
								textAnchor: "end",
								fontFamily: c,
								fontSize: "5.5",
								fill: "#2aa968",
								children: "✓ resolved"
							})]
						}))]
					}))
				}))
			}
			var c = 'ui-monospace, "SF Mono", Menlo, monospace'
		},
    
    
		5692: (e, t, a) => {
			"use strict";

			function i(e, t) {
				if (0 === t.length) return e.entries;
				var a, i = r(e, t);
				return null != (a = null == i ? void 0 : i.entries) ? a : []
			}

			function r(e, t) {
				var a, i = e.entries,
					r = null,
					l = function(e) {
						var t = i.find(t => "folder" === t.kind && t.slug === e);
						if (null == t) return {
							v: null
						};
						r = t, i = t.entries
					};
				for (var n of t)
					if (a = l(n)) return a.v;
				return r
			}

			function l(e, t) {
				var a = [],
					i = e.entries,
					r = function(e) {
						var t, r, l = i.find(t => "folder" === t.kind && t.slug === e);
						a.push(null != (t = null == l ? void 0 : l.title) ? t : e), i = null != (r = null == l ? void 0 : l.entries) ? r : []
					};
				for (var l of t) r(l);
				return a
			}

			function n(e, t) {
				var a;
				return null != (a = e.find(e => "file" === e.kind && e.name === t)) ? a : null
			}

			function o(e) {
				return e >= 1e9 ? "".concat((e / 1e9).toFixed(e >= 1e10 ? 0 : 1), " GB") : e >= 1e6 ? "".concat(Math.round(e / 1e6), " MB") : e >= 1e3 ? "".concat(Math.round(e / 1e3), " KB") : "".concat(e, " B")
			}
			a.d(t, {
				Ii: () => r,
				QH: () => i,
				T3: () => l,
				qE: () => n,
				z3: () => o
			})
		},
		5703: (e, t, a) => {
			"use strict";
			a.d(t, {
				w: () => d
			});
			var i = a(1106),
				r = a(3981),
				l = a(9627),
				n = a(5155);

			function o(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? o(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function d(e) {
				var {
					src: t,
					alt: a = "",
					sizes: i,
					pixelArt: o = !1,
					priority: d = !1,
					stylexProps: c
				} = e, x = (0, l.nD)(t);
				return null == x ? (0, n.jsx)("img", s({
					src: t,
					alt: a,
					loading: "lazy",
					decoding: "async"
				}, c)) : (0, n.jsx)(r.default, s(s({
					src: t,
					alt: a,
					width: x.width,
					height: x.height,
					sizes: i,
					priority: d,
					fetchPriority: d ? "high" : void 0,
					unoptimized: o
				}, o ? {} : {
					placeholder: "blur",
					blurDataURL: x.blurDataURL
				}), c))
			}
		},
		6606: (e, t, a) => {
			"use strict";
			a.d(t, {
				_r: () => s,
				Iz: () => d,
				f6: () => r,
				EJ: () => o,
				vI: () => n,
				Fr: () => l,
				vh: () => c
			});
			var i = a(9627);

			function r(e, t) {
				var a = ["sitemap", ...e, ...null != t ? [t] : []];
				return "/".concat(a.map(e => encodeURIComponent(e)).join("/"))
			}

			function l() {
				return "/".concat("resume")
			}

			function n(e) {
				return o(e)
			}

			function o(e) {
				return "about" === e ? "/" : "/".concat((0, i.eY)(e).map(e => encodeURIComponent(e.id)).join("/"))
			}

			function s(e) {
				var t = (0, i.p_)(e),
					a = null == t ? void 0 : t.nodeIds[0];
				return null == t || null == a ? "/" : "".concat(o(a), "/").concat(encodeURIComponent(t.id))
			}

			function d(e, t) {
				var a = (0, i.p_)(t);
				return null != a && a.nodeIds.includes(e) ? "".concat(o(e), "/").concat(encodeURIComponent(t)) : s(t)
			}

			function c(e) {
				var t, a, i, r = null == e.sitemap ? "" : "".concat(e.sitemap.openPath.join("/"), "|").concat(null != (t = e.sitemap.viewerFile) ? t : "");
				return "".concat(e.nodeId, "::").concat(null != (a = e.viewerAssetId) ? a : "", "::").concat(r, "::").concat(e.resume ? "resume" : "", "::").concat(null != (i = e.project) ? i : "")
			}
		},
		8362: (e, t, a) => {
			"use strict";
			a.d(t, {
				f: () => d
			});
			var i = a(1106),
				r = a(2115),
				l = a(2600);
			a(4922);
			var n = a(5155);

			function o(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), a.push.apply(a, i)
				}
				return a
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2 ? o(Object(a), !0).forEach(function(t) {
						(0, i.A)(e, t, a[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
					})
				}
				return e
			}

			function d(e) {
				var {
					close: t,
					minimize: a,
					resize: i
				} = e, {
					0: l,
					1: o
				} = (0, r.useState)(!1);
				return (0, n.jsxs)("div", s(s({}, {
					className: "x78zum5 x167g77z x6s0dn4"
				}), {}, {
					"aria-label": "Window controls",
					onMouseEnter: () => o(!0),
					onMouseLeave: () => o(!1),
					children: [(0, n.jsx)(c, {
						action: t,
						showGlyph: l,
						tone: u.closeLight,
						glyph: (0, n.jsx)(x, {})
					}), (0, n.jsx)(c, {
						action: a,
						showGlyph: l,
						tone: u.minimizeLight,
						glyph: (0, n.jsx)(A, {})
					}), (0, n.jsx)(c, {
						action: i,
						showGlyph: l,
						tone: u.resizeLight,
						glyph: (0, n.jsx)(p, {})
					})]
				}))
			}

			function c(e) {
				var {
					action: t,
					glyph: a,
					showGlyph: i,
					tone: r
				} = e, o = null != t.onClick;
				return (0, n.jsx)("button", s(s({
					type: "button",
					title: t.title,
					"aria-label": t.title,
					"aria-disabled": !o || void 0,
					onClick: t.onClick
				}, l.xk(u.light, r, o ? u.lightInteractive : u.lightDisabled)), {}, {
					children: (0, n.jsx)("span", s(s({}, {
						0: {
							className: "x1lliihq xci0xqf x1hagigm xg01cxk x19991ni xgdialr x1qmg8k3"
						},
						1: {
							className: "x1lliihq xci0xqf x1hagigm x19991ni xgdialr x1qmg8k3 x1hc1fzr"
						}
					} [0 | !!i]), {}, {
						"aria-hidden": "true",
						children: a
					}))
				}))
			}

			function x() {
				return (0, n.jsx)("svg", s(s({
					viewBox: "0 0 10 10",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.8,
					strokeLinecap: "round"
				}, {
					className: "x1lliihq xh8yej3 x5yr21d"
				}), {}, {
					children: (0, n.jsx)("path", {
						d: "M2.4 2.4l5.2 5.2M7.6 2.4L2.4 7.6"
					})
				}))
			}

			function A() {
				return (0, n.jsx)("svg", s(s({
					viewBox: "0 0 10 10",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.8,
					strokeLinecap: "round"
				}, {
					className: "x1lliihq xh8yej3 x5yr21d"
				}), {}, {
					children: (0, n.jsx)("path", {
						d: "M2.2 5h5.6"
					})
				}))
			}

			function p() {
				return (0, n.jsxs)("svg", s(s({
					viewBox: "0 0 10 10",
					fill: "currentColor"
				}, {
					className: "x1lliihq xh8yej3 x5yr21d"
				}), {}, {
					children: [(0, n.jsx)("path", {
						d: "M2 3.8V7.6A0.8 0.8 0 0 0 2.8 8.4H6.6z"
					}), (0, n.jsx)("path", {
						d: "M8 6.2V2.4A0.8 0.8 0 0 0 7.2 1.6H3.4z"
					})]
				}))
			}
			var u = {
				closeLight: {
					kWkggS: "xgpdmsj",
					kMwMTN: "xvczpxf",
					$$css: !0
				},
				minimizeLight: {
					kWkggS: "xo5koen",
					kMwMTN: "x1hqudye",
					$$css: !0
				},
				resizeLight: {
					kWkggS: "xf9m8mt",
					kMwMTN: "xjwv7w6",
					$$css: !0
				},
				light: {
					kysU6D: "xjyslct",
					k1xSpc: "xrvj5dj",
					kzqmXN: "x1fxhmyf",
					kZKoxP: "x18gnavp",
					kgQiWS: "x1ku5rj1",
					kMzoRj: "xc342km",
					kaIpWk: "x1e6avla",
					kmVPX3: "x1717udv",
					kkrTdU: "xt0e3qv",
					k1ekBW: "x11xpdln",
					kIyJzY: "xbb3pvg",
					kAMwcw: "x1qmg8k3",
					$$css: !0
				},
				lightInteractive: {
					kkrTdU: "x1ypdohk",
					k3aq6I: "x1c071of x7qzerj xgwqcfx",
					$$css: !0
				},
				lightDisabled: {
					kWkggS: "xczk6z2",
					kMwMTN: "xb61xv8",
					kkrTdU: "x1h6gzvc",
					$$css: !0
				}
			}
		},
		8490: (e, t, a) => {
			"use strict";
			a.d(t, {
				DA: () => d,
				DH: () => s,
				Is: () => o,
				Q: () => r,
				km: () => l,
				lF: () => i
			});
			var i = "sitemap";

      //bio - domain - thumbnails - path
			function r(e) {
				return "".concat("thumbnails/").concat(e, ".jpg")
			}
			var l = "sitemap",
				n = "https://m.b.io.vn";

			function o(e) {
				return "".concat(n).concat(n.endsWith("/") ? "" : "/").concat(encodeURI(e))
			}

			function s(e) {
				return e.split("-").filter(e => e.length > 0).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
			}

			function d(e) {
				var t = e.lastIndexOf(".");
				return t > 0 ? e.slice(0, t) : e
			}
		},
    
//bio project load
		8503: (e, t, a) => {
			"use strict";
			a.d(t, {
				$x: () => n,
				MK: () => c,
				NX: () => s,
				Vl: () => i,
				_G: () => l,
				lo: () => o,
				tv: () => r
			});
      
//bio      
			var i={nodeId:"ens-l2-zksync",year:"2022",title:"ENS Layer 2 Support for zkSync",oneLiner:"The first ENS L2 support showcase with zkSync—record updates had roughly 130× lower gas fees and confirmed faster than on L1.",keywords:["Ethereum","EIP-3668","zkSync","ENS","Solidity"],award:"zkSync Best Application — HackMoney 2022"},r={nodeId:"allgood",year:"2025",title:"It's ALL GOOD.",oneLiner:"An ongoing project to shape a delightful perspective of my own, starting with a selection from designer brands I love.",keywords:["Curation","Creative Direction","Brand","Design"],cover:"/projects/allgood/wordmark.jpg",coverSize:"145%"},l={nodeId:"talktonft",year:"2023",title:"talktonft.ai",oneLiner:"An AI experiment that let anyone chat with a public NFT, with a roadmap for creators, owners, and communities to shape its character and world.",keywords:["AI Characters","LangChain","Vector Search","NFT Metadata","Community"],cover:"/projects/talktonft/home-2023.jpg",coverPosition:"top"},n={nodeId:"doudou",year:"2022–present",title:"DOU",oneLiner:"A collection of pictures I made from moments in our life that I wanted to remember.",keywords:["3D Printing","Character Design","iPad Drawing","Label-Name"],cover:"/projects/doudou/dou-and-bao.jpg",coverPosition:"center 70%"},o={nodeId:"peeps-online",year:"2022",title:"peeps online",oneLiner:"A Web3 identity world my friends and I imagined around a growing cast of characters—and where I first became 3n4.",keywords:["Web3","NFT","Social Identity","Character Design","ENS"],award:"Pool prizes — ETHOnline 2022",cover:"/projects/peeps-online/3n4-astronaut.jpg",coverPosition:"center 30%"},
				s = {
					nodeId: "turnips-exchange",
					year: "2020–2022",
					title: "page.js — The ACNH Community",
					oneLiner: "A two-day turnip price tracker that grew into Link, an ACNH community used by 100k+ people across 143 countries.",
					keywords: ["Animal Crossing", "React Native", "Firebase", "Community", "Web & iOS & Android"],
					cover: "/projects/turnips-exchange/link-airport.jpg",
					coverPosition: "center 12%"
				},
				d = new Map([r, l, n, o, i, s].map(e => [e.nodeId, e]));

			function c(e) {
				return d.get(e)
			}
		},
    
    
    
		8684: (e, t, a) => {
			"use strict";
			a.d(t, {
				y: () => i
			});
			var i = {
				frame: {
					kVAEAm: "x1n2onr6",
					kOBAk4: "x1y5e3q9",
					kzqmXN: "xh8yej3",
					kB7OPa: "x9f619",
					kVQacm: "xb3r6kr",
					kaIpWk: "x9h44rk",
					kWkggS: "xosx7kb",
					kMwMTN: "x1arkxo6",
					$$css: !0
				},
				clear: {
					kWkggS: "xjbqb8w",
					$$css: !0
				}
			}
		},
		8861: (e, t, a) => {
			"use strict";
			a.d(t, {
				R: () => i
			}), a(4420), a(4922), a(2012);
			var i = {
				mobileHidden: {
					k1xSpc: "x1pvgvxb",
					$$css: !0
				},
				frostedWell: {
					k6WDB: "xgv0goc",
					keRtuK: "x1fh82p7",
					$$css: !0
				},
				archivePanel: {
					kVAEAm: "x1n2onr6",
					kmVPX3: "x1717udv",
					kWkggS: "x1qy0e5",
					kVQacm: "xysyzu8",
					$$css: !0
				},
				folderCell: {
					k1xSpc: "xrvj5dj",
					kAPf3g: "x1o2pa38",
					kmVPX3: "x1ruevkc",
					$$css: !0
				},
				detailPanel: {
					kVAEAm: "x7wzq59 xoi5dcs",
					k87sOh: "x13vifvy",
					kSGwAc: "x1y8v6su",
					kZKoxP: "x5yr21d",
					kAzted: "x2lwn1j",
					kmVPX3: "x1tamke2 xmge78t",
					kWkggS: "x1qy0e5",
					kZ1KPB: "xe0pwq x7q174r",
					k4WBpm: "x19ypqd9",
					kaZRDh: "x1kkv908",
					kVQacm: "xysyzu8",
					$$css: !0
				},
				panelHeader: {
					k1K539: "x1hq5gj4",
					$$css: !0
				},
				panelEyebrow: {
					k1xSpc: "x1lliihq",
					kMwMTN: "xa0v8vl",
					kGuDYH: "x1k6wstc",
					k63SB2: "x1xlr1w8",
					$$css: !0
				},
				breadcrumb: {
					k1xSpc: "x78zum5",
					k7Eaqz: "xeuugli",
					kwnvtZ: "x1a02dak xy5cm3e",
					kVQacm: "x1dxx4l1",
					kGNEyG: "x6s0dn4",
					kOIVth: "x1jnr06f xrrc0fy",
					kMwMTN: "xa0v8vl",
					kGuDYH: "x1j6dyjg x1bvu3tq",
					k63SB2: "xk50ysn",
					kogj98: "x8vnuaf",
					$$css: !0
				},
				breadcrumbItem: {
					k1xSpc: "x3nfvp2",
					kGNEyG: "x6s0dn4",
					kOIVth: "x1jnr06f",
					k7Eaqz: "xeuugli",
					$$css: !0
				},
				breadcrumbButton: {
					kysU6D: "xjyslct",
					kMzoRj: "xc342km",
					kaIpWk: "x12oqio5",
					kmVPX3: "x1nyoefi x108kfp6",
					k7Eaqz: "xeuugli",
					kVQacm: "x1dxx4l1",
					kg5iWk: "x1xlnbrx",
					khDVqt: "x19zjiv4",
					kWkggS: "xjbqb8w xxr2aqi",
					kMwMTN: "xa0v8vl x9lr541",
					kVVagm: "xln7xf2",
					kkrTdU: "x1ypdohk",
					k1ekBW: "xs2xxs2",
					kIyJzY: "x9i6iqp",
					kAMwcw: "x1qmg8k3",
					$$css: !0
				},
				breadcrumbCurrent: {
					kmVPX3: "x1nyoefi x108kfp6",
					k7Eaqz: "xeuugli",
					kVQacm: "x1dxx4l1",
					kg5iWk: "x1xlnbrx",
					khDVqt: "x19zjiv4",
					kMwMTN: "x1u5qwqo",
					k63SB2: "x1xlr1w8",
					$$css: !0
				},
				breadcrumbSeparator: {
					kMwMTN: "x1qag7y0",
					kmuXW: "x2lah0s",
					$$css: !0
				},
				panelTitle: {
					kogj98: "x1g76kxt",
					kMwMTN: "x1spfu80",
					kGuDYH: "x1jvydc1",
					kLWn49: "x1u7k74",
					kN2L0X: "x1w2vvpw",
					$$css: !0
				},
				emptyPreview: {
					k1xSpc: "xrvj5dj",
					kAzted: "x9l5fec",
					kBCFzs: "x1osaytk",
					kgQiWS: "x1ku5rj1",
					kaIpWk: "xur7f20",
					kWkggS: "x1bpjqwa",
					kMwMTN: "xa0v8vl",
					kGuDYH: "xfifm61",
					k63SB2: "x1xlr1w8",
					$$css: !0
				},
				detailCopy: {
					keoZOQ: "xw7yly9",
					$$css: !0
				},
				detailLead: {
					kogj98: "x1ghz6dp",
					kMwMTN: "xa0v8vl",
					kGuDYH: "x1j6dyjg x1bvu3tq",
					kLWn49: "x11m8ghp",
					khDVqt: "x1fj9vlw",
					$$css: !0
				},
				detailList: {
					k1xSpc: "xrvj5dj",
					kOIVth: "x167g77z",
					kogj98: "x1nwyajf",
					kGuDYH: "x1j6dyjg x1bvu3tq",
					$$css: !0
				},
				detailRow: {
					k1xSpc: "xrvj5dj",
					kumcoG: "x1xh1ura x1a5akpx",
					kOIVth: "x167g77z",
					kMwMTN: "xa0v8vl",
					$$css: !0
				},
				detailRowGroupStart: {
					keoZOQ: "x14vqqas",
					$$css: !0
				},
				markdownShell: {
					kzqmXN: "xh8yej3",
					kAzted: "x1us19tq",
					kogj98: "x19bbpc0",
					kmVPX3: "x15laajx x1jl1b55",
					kMwMTN: "x1h5p6u4",
					kMv6JI: "xx3i83x",
					kGuDYH: "xif65rj",
					kLWn49: "x1wqqpke",
					kWkggS: "xsuk1xb",
					$$css: !0
				},
				markdownStatus: {
					k1xSpc: "xrvj5dj",
					kgQiWS: "x1ku5rj1",
					kMwMTN: "xa0v8vl",
					kGuDYH: "x4z9k3i",
					$$css: !0
				},
				markdownHeader: {
					k1K539: "x1chd833",
					$$css: !0
				},
				markdownTitle: {
					kogj98: "x1ghz6dp",
					kMwMTN: "xibk21m",
					kGuDYH: "xkzkwiv",
					k63SB2: "x1xlr1w8",
					kLWn49: "x132q4wb",
					kb6lSQ: "x1yf5rgg",
					kP9fke: "x6mezaz",
					$$css: !0
				},
				markdownProse: {
					k1xSpc: "x1lliihq",
					$$css: !0
				},
				mdParagraph: {
					kogj98: "x1l0dnds",
					$$css: !0
				},
				mdLink: {
					kMwMTN: "x1xc03n1 xlch9iz",
					kMnn75: "xkrqix3",
					kKwaWg: "xo3q1ef",
					kz484i: "xiy17q3",
					k1YJky: "x13pqoeu",
					kgSjnq: "xntq7mn xwmya99",
					kGO01o: "x1120s5i",
					k1ekBW: "x171cvpa",
					kIyJzY: "xbb3pvg",
					kAMwcw: "xwji4o3",
					$$css: !0
				},
				mobileNodeDetail: {
					k1xSpc: "x1s85apg x197uy0l",
					$$css: !0
				},
				mobileNodeDetailGridSlot: {
					kAzted: "x1qpzuzn",
					$$css: !0
				}
			}
		},
		9627: (e, t, a) => {
			"use strict";
			a.d(t, {
				zw: () => p,
				p_: () => S,
				hC: () => G,
				Kd: () => E,
				sU: () => o,
				X1: () => B,
				i0: () => R,
				xz: () => V,
				bB: () => Y,
				oy: () => Z,
				Ug: () => $,
				x5: () => z,
				Sj: () => X,
				nD: () => d,
				Zl: () => U,
				sG: () => J,
				eY: () => F,
				$0: () => N,
				hy: () => s,
				__: () => Q,
				AS: () => q,
				ch: () => C,
				bX: () => T,
				eS: () => ee,
				SG: () => n,
				wP: () => c
			});
      
      //bio BlurDataURL copy paste move here 
      var i = iBlurDataURL,
				r = "https://cdn.3n4.is";

			function l(e) {
				return encodeURI(e)
			}

			function n(e) {
				return "".concat(r).concat(l(e))
			}

			function o(e) {
				return "video" === e.type ? n(e.path) : l(e.path)
			}

			function s(e) {
				if (null != e) {
					var t, a;
					return "image" === e.type ? null == (a = null != (t = null == e ? void 0 : e.detail.previewPath) ? t : null == e ? void 0 : e.path) ? void 0 : l(a) : "video" === e.type ? null != e.detail.previewPath ? l(e.detail.previewPath) : r ? "".concat(r, "/thumbnails").concat(l(e.path), ".jpg") : void 0 : null == e.detail.previewPath ? void 0 : l(e.detail.previewPath)
				}
			}

			function d(e) {
				try {
					return i[decodeURI(e)]
				} catch (e) {
					return
				}
			}

			function c(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
				return null == d(e) ? e : "/_next/image?url=".concat(encodeURIComponent(e), "&w=").concat(t, "&q=75")
			}

			function x(e) {
				var t;
				return decodeURIComponent(null != (t = e.path.split("/").at(-1)) ? t : e.title)
			}
			var A = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function p(e) {
				var t = function(e) {
					var t = x(e),
						a = /^(\d{4})(\d{2})(\d{2})(?:[ _]+(\d{2})(\d{2}))?/.exec(t);
					if (null != a) {
						var i = Number(a[2]),
							r = Number(a[3]);
						if (i >= 1 && i <= 12 && r >= 1 && r <= 31) return {
							year: Number(a[1]),
							month: i,
							day: r,
							hour: null == a[4] ? void 0 : Number(a[4]),
							minute: null == a[5] ? void 0 : Number(a[5])
						}
					}
					var l = /^(\d{4})(?!\d)/.exec(t);
					if (null != l) return {
						year: Number(l[1])
					};
					var [n, o, s] = e.createdAt.split("-");
					return {
						year: Number(n),
						month: null == o ? void 0 : Number(o),
						day: null == s ? void 0 : Number(s)
					}
				}(e);
				if (null == t.month) return String(t.year);
				var a = A[t.month - 1];
				if (null == t.day) return "".concat(a, " ").concat(t.year);
				var i = "".concat(a, " ").concat(t.day, ", ").concat(t.year);
				if (null == t.hour || null == t.minute) return i;
				var r = "".concat(String(t.hour).padStart(2, "0"), ":").concat(String(t.minute).padStart(2, "0"));
				return "".concat(i, ", ").concat(r)
			}
			var u = [{
				label: "AKA",
				value: "𝒷 | blog i/o"
			}, {
				label: "Hobbies",
				value: "Design, Build, Audit"
			}, {
				label: "Profession",
				value: "Construction",
				groupBreak: !0
			}, {
				label: "Location",
				value: "18H Cong Hoa, Saigon"
			}, {
				label: "Contact",
				value: "https://b.io.vn/contact",
				href: "https://b.io.vn/contact"
			}];

			function g(e, t) {
				for (var a, i = (a = (0xdf314eb3 ^ function(e) {
						for (var t = 0x811c9dc5, a = 0; a < e.length; a++) t ^= e.charCodeAt(a), t = Math.imul(t, 0x1000193);
						return t >>> 0
					}(t)) >>> 0 >>> 0, () => {
						var e = Math.imul((a = a + 0x6d2b79f5 | 0) ^ a >>> 15, 1 | a);
						return (((e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e) ^ e >>> 14) >>> 0) / 0x100000000
					}), r = [...e], l = r.length - 1; l > 0; l--) {
					var n = Math.floor(i() * (l + 1)),
						o = r[l],
						s = r[n];
					void 0 !== o && void 0 !== s && (r[l] = s, r[n] = o)
				}
				return r
			}
//bio Global copy move Here

        var h = hGlobal, m = mGlobal, w = new Map(m.map(e => [e.id, e])),
				y = new Map(h.map(e => [e.id, e])),
				b = new Map;
			for (var j of m)
				if (null != j.parentId) {
					var f, k = null != (f = b.get(j.parentId)) ? f : [];
					k.push(j), b.set(j.parentId, k)
				} for (var v of b.values()) v.sort(er);
			var L = new Map;
			for (var O of h)
				for (var P of O.nodeIds) {
					var I, D = null != (I = L.get(P)) ? I : [];
					D.push(O), L.set(P, D)
				}

			function Q() {
				return m.filter(e => null == e.parentId).sort(er)
			}

			function U(e) {
				var t = w.get(e);
				if (null == t) throw Error("Unknown archive node id: ".concat(e));
				return t
			}

			function R(e) {
				var t;
				return null != (t = b.get(e)) ? t : []
			}

			function C(e) {
				return R(e).filter(e => "collection" !== e.kind)
			}

			function q(e) {
				return C(e).length
			}

			function S(e) {
				return y.get(e)
			}

			function B(e) {
				var t, a, i = [...null != (t = L.get(e)) ? t : []],
					r = null != (a = U(e).sortBy) ? a : "newest";
				return "curated" === r ? i.sort((e, t) => eo(e) - eo(t) || M(e, t)) : (i.sort(M), "oldest" === r ? i.reverse() : i)
			}

			function M(e, t) {
				return t.createdAt.localeCompare(e.createdAt) || x(e).localeCompare(x(t))
			}

			function z(e) {
				var t = new Set,
					a = e => {
						for (var i of B(e)) t.add(i.id);
						for (var r of R(e)) a(r.id)
					};
				return a(e), t.size
			}

			function N(e) {
				var t, a, i;
				return null != (t = null != (a = null == (i = e.visual) ? void 0 : i.symbol) ? a : e.symbol) ? t : e.title.slice(0, 1)
			}

			function J(e) {
				return e.icon
			}

			function G(e) {
				var t;
				return null != (t = e.detail.description) ? t : e.title
			}

			function E(e) {
				var t = x(e).split(".").pop();
				return t ? "".concat(e.title, ".").concat(t) : e.title
			}

			function V(e) {
				var t, a;
				return null != (t = null == (a = e.visual) ? void 0 : a.collectionDisplay) ? t : "tag"
			}

			function X(e) {
				var t, a = U(e);
				return (null == (t = a.visual) ? void 0 : t.folderContent) != null ? a.visual.folderContent : Z(e).length > 0 ? "image" : "papers"
			}

			function T(e) {
				var t, a;
				return null != (t = null == (a = F(e)[0]) ? void 0 : a.id) ? t : e
			}

			function F(e) {
				for (var t = [], a = U(e); null != a;) t.unshift(a), a = null == a.parentId ? void 0 : U(a.parentId);
				return t
			}

			function W(e) {
				var t, a;
				return (null != (t = null == (a = e.visual) ? void 0 : a.decorationAssetIds) ? t : []).map(e => S(e)).filter(e => null != e)
			}

			function Y(e) {
				var t = U(e),
					a = W(t),
					i = es(t),
					r = null == i ? void 0 : S(i);
				return (a.length > 0 ? a : [r, ...B(e), ...R(e).flatMap(e => B(e.id))]).find(e => null != e && null != s(e))
			}

			function Z(e) {
				var t = U(e),
					a = W(t);
				if (a.length > 0) return a.map(s).filter(Boolean).filter(el).slice(0, 4);
				var i = es(t),
					r = null == i ? void 0 : S(i),
					l = B(e),
					n = R(e).flatMap(e => B(e.id));
				return [s(r), ...l.map(s), ...n.map(s)].filter(Boolean).filter(el).slice(0, 4)
			}

			function $(e) {
				if ("asset" === e.kind) {
					var t, a, i, r, l, n, d, c = S(e.id);
					return null == c ? {
						title: "Asset",
						eyebrow: "Asset",
						description: "A selected archive asset.",
						meta: [],
						previews: []
					} : {
						title: c.title,
						eyebrow: null != (r = (i = c).detail.eyebrow) ? r : H[i.type],
						description: G(c),
						tags: c.detail.tags,
						meta: [{
							label: "Made",
							value: p(c)
						}, ...null != (d = c.detail.customMeta) ? d : []],
						membership: function(e) {
							var t = e.nodeIds[0];
							if (null != t) {
								var a = U(t),
									i = null == a.parentId ? void 0 : U(a.parentId),
									r = [a, i].filter(e => null != e && "section" !== e.kind).map(e => ({
										id: e.id,
										title: e.title
									}));
								return r.length > 0 ? r : void 0
							}
						}(c),
						previews: [function(e) {
							if ("video" === e.type) return {
								kind: "video",
								src: o(e),
								poster: s(e)
							};
							var t = et(e);
							if (null != t) return t;
							var a = e.nodeIds[0],
								i = null == a ? void 0 : U(a);
							return {
								kind: "plate",
								symbol: e.title.slice(0, 1),
								preset: null == i ? "neutral" : _(i)
							}
						}(c)]
					}
				}
				var x = U(e.id);
				if ("about" === x.id) return {
					title: "",
					eyebrow: "",
					description: en(x),
					tags: x.detail.tags,
					meta: [...u, ...null != (l = x.detail.customMeta) ? l : []],
					previews: [{
						kind: "image",
						src: "/assets/3n4.png",
						alt: "Portrait of bi-o (3n4)"
					}],
					footnote: "* Avatar artwork by 𝒷."
				};
				var A = [],
					h = function(e) {
						var t = R(e).length;
            //bio
						if (t > 0) return "projects-shelf" === U(e).presentation ? "".concat(t, " ").concat(1 === t ? "project" : "!") : "".concat(t, " ").concat(1 === t ? "group" : "groups");
						var a = B(e).length;
						if (a > 0) return "".concat(a, " ").concat(1 === a ? "file" : "files")
					}(e.id),
					m = function(e) {
						var t = [...B(e), ...R(e).flatMap(e => B(e.id))].map(e => {
							var t;
							return null != (t = e.year) ? t : Number(e.createdAt.slice(0, 4))
						}).filter(e => !Number.isNaN(e));
						if (0 !== t.length) {
							var a = Math.min(...t),
								i = Math.max(...t);
							return a === i ? String(a) : "".concat(a, "–").concat(i)
						}
					}(e.id),
					w = x.detail.medium;
				return null != h && A.push({
					label: "Contains",
					value: h
				}), null != m && A.push({
					label: "Years",
					value: m
				}), null != w && A.push({
					label: "Medium",
					value: w
				}), A.push(...null != (n = x.detail.customMeta) ? n : []), {
					title: x.title,
					eyebrow: null != (a = (t = x).detail.eyebrow) ? a : K[t.kind],
					description: en(x),
					tags: x.detail.tags,
					meta: A,
					previews: function(e) {
						var t = U(e),
							a = B(e);
						if (0 === q(e) && a.length > 0) {
							var i = es(t),
								r = null == i ? void 0 : a.find(e => e.id === i);
							return ea(t, null == r ? g(a, e) : [r, ...g(a.filter(e => e.id !== r.id), e)], 5)
						}
						var l = W(t);
						if (l.length > 0) return ea(t, g(l, e), 3);
						var n = [],
							o = new Set,
							s = e => ei(n, o, e, 3),
							d = es(t);
						for (var c of (s(null == d ? void 0 : S(d)), R(e))) {
							var x = es(c),
								A = null == x ? void 0 : S(x);
							s(null == A || o.has(A.id) ? B(c.id).find(e => !o.has(e.id)) : A)
						}
						for (var p of a) s(p);
						return 0 === n.length && n.push({
							kind: "plate",
							symbol: N(t),
							preset: _(t)
						}), n
					}(e.id)
				}
			}
			var H = {
					image: "Image",
					video: "Video",
					markdown: "Writing",
					pdf: "Document"
				},
				K = {
					section: "Section",
					category: "Category",
					group: "Group",
					collection: "Collection"
				};

			function _(e) {
				var t, a;
				return null != (t = null == (a = e.visual) ? void 0 : a.folderPreset) ? t : "neutral"
			}

			function ee(e) {
				return e.nodeIds.some(e => {
					for (var t = U(e); null != t;) {
						if ("lbl-name" === t.id) return !0;
						t = null == t.parentId ? void 0 : U(t.parentId)
					}
					return !1
				})
			}

			function et(e) {
				var t = s(e);
				return null != t ? {
					kind: "image",
					src: t,
					pixelArt: ee(e)
				} : null != e.detail.excerpt ? {
					kind: "text",
					title: e.title,
					excerpt: e.detail.excerpt
				} : void 0
			}

			function ea(e, t, a) {
				var i = [],
					r = new Set;
				for (var l of t) ei(i, r, l, a);
				return 0 === i.length && i.push({
					kind: "plate",
					symbol: N(e),
					preset: _(e)
				}), i
			}

			function ei(e, t, a, i) {
				if (!(null == a || e.length >= i || t.has(a.id))) {
					t.add(a.id);
					var r = et(a);
					null != r && e.push(r)
				}
			}

			function er(e, t) {
				return e.order - t.order || e.title.localeCompare(t.title)
			}

			function el(e, t, a) {
				return a.indexOf(e) === t
			}

			function en(e) {
				return e.detail.description
			}

			function eo(e) {
				var t;
				return null != (t = e.order) ? t : 0
			}

			function es(e) {
				var t, a;
				return null != (t = null == (a = e.visual) ? void 0 : a.coverAssetId) ? t : e.detail.coverAssetId
			}
		}
	},
	e => {
		e.O(0, [549, 95, 441, 826, 358], () => e(e.s = 1168)), _N_E = e.O()
	}
]);