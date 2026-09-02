(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[219], {
		4148: (e, i, n) => {
			"use strict";
			n.r(i), n.d(i, {
				default: () => t
			});
			var r = n(5155);

			function t(e) {
				var {
					reset: i
				} = e;
				return (0, r.jsx)("html", {
					lang: "en",
					children: (0, r.jsx)("body", {
						style: {
							margin: 0,
							minHeight: "100dvh",
							display: "grid",
							placeItems: "center",
							fontFamily: "ui-sans-serif, system-ui, sans-serif",
							background: "#f4f2ee",
							color: "#1f1d1a"
						},
						children: (0, r.jsxs)("div", {
							style: {
								textAlign: "center",
								display: "grid",
								gap: "12px"
							},
							children: [(0, r.jsx)("p", {
								style: {
									fontSize: "13px",
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									opacity: .55
								},
								children: "Something broke"
							}), (0, r.jsx)("h1", {
								style: {
									fontSize: "20px",
									fontWeight: 600,
									margin: 0
								},
								children: "The archive window crashed."
							}), (0, r.jsx)("button", {
								type: "button",
								onClick: i,
								style: {
									justifySelf: "center",
									padding: "8px 16px",
									borderRadius: "8px",
									border: "1px solid #c9c4bb",
									background: "#fff",
									fontSize: "14px",
									cursor: "pointer"
								},
								children: "Reload"
							})]
						})
					})
				})
			}
		},
		4755: (e, i, n) => {
			Promise.resolve().then(n.bind(n, 4148))
		}
	},
	e => {
		e.O(0, [441, 826, 358], () => e(e.s = 4755)), _N_E = e.O()
	}
]);