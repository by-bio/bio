(() => {
	"use strict";
	var e, t, r, o, n, a, i, u, l = {},
		c = {};

	function d(e) {
		var t = c[e];
		if (void 0 !== t) return t.exports;
		var r = c[e] = {
				exports: {}
			},
			o = !0;
		try {
			l[e].call(r.exports, r, r.exports, d), o = !1
		} finally {
			o && delete c[e]
		}
		return r.exports
	}
	d.m = l, e = [], d.O = (t, r, o, n) => {
		if (r) {
			n = n || 0;
			for (var a = e.length; a > 0 && e[a - 1][2] > n; a--) e[a] = e[a - 1];
			e[a] = [r, o, n];
			return
		}
		for (var i = 1 / 0, a = 0; a < e.length; a++) {
			for (var [r, o, n] = e[a], u = !0, l = 0; l < r.length; l++)(!1 & n || i >= n) && Object.keys(d.O).every(e => d.O[e](r[l])) ? r.splice(l--, 1) : (u = !1, n < i && (i = n));
			if (u) {
				e.splice(a--, 1);
				var c = o();
				void 0 !== c && (t = c)
			}
		}
		return t
	}, d.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return d.d(t, {
			a: t
		}), t
	}, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, d.t = function(e, o) {
		if (1 & o && (e = this(e)), 8 & o || "object" == typeof e && e && (4 & o && e.__esModule || 16 & o && "function" == typeof e.then)) return e;
		var n = Object.create(null);
		d.r(n);
		var a = {};
		t = t || [null, r({}), r([]), r(r)];
		for (var i = 2 & o && e;
			"object" == typeof i && !~t.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach(t => a[t] = () => e[t]);
		return a.default = () => e, d.d(n, a), n
	}, d.d = (e, t) => {
		for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce((t, r) => (d.f[r](e, t), t), [])), d.u = e => "static/chunks/" + e + "." + ({
		50: "2566aba490349959",
		292: "e43033b8d484d048",
		338: "2612e4bcc39f786f",
		591: "1840bc8e199e2597",
		619: "225ea58d6d844f69",
		650: "a5a6246a53728cda",
		746: "baad9c87d6cf81c1"
	})[e] + ".js", d.miniCssF = e => {}, d.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, d.l = (e, t, r, n) => {
		if (o[e]) return void o[e].push(t);
		if (void 0 !== r)
			for (var a, i, u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
				var c = u[l];
				if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == "_N_E:" + r) {
					a = c;
					break
				}
			}
		a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, d.nc && a.setAttribute("nonce", d.nc), a.setAttribute("data-webpack", "_N_E:" + r), a.src = d.tu(e)), o[e] = [t];
		var s = (t, r) => {
				a.onerror = a.onload = null, clearTimeout(f);
				var n = o[e];
				if (delete o[e], a.parentNode && a.parentNode.removeChild(a), n && n.forEach(e => e(r)), t) return t(r)
			},
			f = setTimeout(s.bind(null, void 0, {
				type: "timeout",
				target: a
			}), 12e4);
		a.onerror = s.bind(null, a.onerror), a.onload = s.bind(null, a.onload), i && document.head.appendChild(a)
	}, d.r = e => {
		"u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, d.tt = () => (void 0 === n && (n = {
		createScriptURL: e => e
	}, "u" > typeof trustedTypes && trustedTypes.createPolicy && (n = trustedTypes.createPolicy("nextjs#bundler", n))), n), d.tu = e => d.tt().createScriptURL(e), d.p = "/_next/", a = {
		68: 0,
		334: 0
	}, d.f.j = (e, t) => {
		var r = d.o(a, e) ? a[e] : void 0;
		if (0 !== r)
			if (r) t.push(r[2]);
			else if (/^(334|68)$/.test(e)) a[e] = 0;
		else {
			var o = new Promise((t, o) => r = a[e] = [t, o]);
			t.push(r[2] = o);
			var n = d.p + d.u(e),
				i = Error();
			d.l(n, t => {
				if (d.o(a, e) && (0 !== (r = a[e]) && (a[e] = void 0), r)) {
					var o = t && ("load" === t.type ? "missing" : t.type),
						n = t && t.target && t.target.src;
					i.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")", i.name = "ChunkLoadError", i.type = o, i.request = n, r[1](i)
				}
			}, "chunk-" + e, e)
		}
	}, d.O.j = e => 0 === a[e], i = (e, t) => {
		var r, o, [n, i, u] = t,
			l = 0;
		if (n.some(e => 0 !== a[e])) {
			for (r in i) d.o(i, r) && (d.m[r] = i[r]);
			if (u) var c = u(d)
		}
		for (e && e(t); l < n.length; l++) o = n[l], d.o(a, o) && a[o] && a[o][0](), a[o] = 0;
		return d.O(c)
	}, (u = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(i.bind(null, 0)), u.push = i.bind(null, u.push.bind(u))
})();;

/*
(function() {
	if (typeof document === "undefined" || !/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
	var s = document.createElement('script');
	s.src = 'https://vercel.live/_next-live/feedback/feedback.js';
	s.setAttribute("data-explicit-opt-in", "true");
	s.setAttribute("data-cookie-opt-in", "true");
	s.setAttribute("data-deployment-id", "dpl_BuNoTKdDjhRyGSSn11oPcN7Xyngf");
	((document.head || document.documentElement).appendChild(s))
})();
*/


//bio Global copy move Here
//bio start [writing drawing photo video
			var hGlobal = [{
//bio writing
					id: "writing-the-story-behind-link-inc",
					path: "/writings/the-story-behind-link-inc.md",
					type: "markdown",
					title: "The story behind Link Inc.",
					createdAt: "2020-10-01",
					year: 2020,
					nodeIds: ["~"],
					detail: {
						description: "The fictional backstory we wrote for Link Airport and Miss Link.",
						excerpt: "The Deserted Island Getaway Package does not sound unfamiliar to you, right? Good! Because this is where our story begins.",
						tags: ["Animal Crossing", "fiction", "Link"]
					}
				}, {
					id: "writing-harbor",
					path: "/writings/港口.md",
					type: "markdown",
					title: "港口",
					createdAt: "2016-08-30",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						description: "A markdown writing file in the public writings folder.",
						excerpt: "“刚才应该在哪里买点水果和打火机的。”车继续开着，在仅够一车行进、上下左右曲折的水泥路上。“你去那个小卖部买一个打火机，买点水果，如果有苹果的话。”",
						tags: ["personal"]
					}
				}, {
					id: "writing-introduction-to-wildfire",
					path: "/writings/introduction-to-wildfire.md",
					type: "markdown",
					title: "Introduction to Wildfire",
					createdAt: "2017-12-19",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "Continue reading Get Started, and start your journey with wildfire!",
						tags: ["tech"]
					}
				}, {
					id: "writing-best-practice-for-firebase-realtime-datebase-development",
					path: "/writings/best-practice-for-firebase-realtime-datebase-development.md",
					type: "markdown",
					title: "Firebase 实时数据库开发最佳实践",
					createdAt: "2017-10-14",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "Firebase 的文档和示例都非常友好易懂。有问题找文档。有空的话请通读全文。",
						tags: ["translation"]
					}
				}, {
					id: "writing-firebase-security-rules",
					path: "/writings/firebase-security-rules.md",
					type: "markdown",
					title: "Firebase 安全与规则",
					createdAt: "2017-09-30",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "Firebase 是一个可以从任意建立连接了的客户端访问的云数据库。因为任意客户端都可以连接到任意 Firebase [数据库]，你必须制定安全规则来保护你的数据。写不好恰当的安全规则会让你暴露在攻击中。不过别着急！你马上就能学到帮你紧紧锁住你的数据的全部知识…",
						tags: ["translation"]
					}
				}, {
					id: "writing-learning-av-foundation-1",
					path: "/writings/learning-av-foundation-1.md",
					type: "markdown",
					title: "《Learning AV Foundation》学习笔记，第一章：AV Foundation 基础",
					createdAt: "2017-06-06",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "AV Foundation 处于上层框架（iOS：AVKit、UIKit，Mac OS：AVKit、AppKit）和底层框架（Core Audio、Core Video，Core Media 以及 Core Animation）之间，在 iOS 和 Mac O…",
						tags: ["tech"]
					}
				}, {
					id: "writing-core-graphics-part-4",
					path: "/writings/core-graphics-part-4.md",
					type: "markdown",
					title: "【译】Core Graphics，第四部分：Path！Path！",
					createdAt: "2017-05-29",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "在 Core Graphics 中，一个 path 就是对某种形状的一步一步的描述。它可以是一个圆、一个正方形、一个桃心、一个字频柱状图或者可能是一个笑脸。它并不包含任何诸如像素颜色、线宽或渐变这样的信息。路径主要是用于绘制——将其用颜色填充或者描边——用颜色…",
						tags: ["translation"]
					}
				}, {
					id: "writing-core-graphics-part-3",
					path: "/writings/core-graphics-part-3.md",
					type: "markdown",
					title: "【译】Core Graphics，第三部分：线",
					createdAt: "2017-05-25",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "设想这样一条简单的线：就是连接两点的一条直像素序列。有一些有名的算法你可以用来自己做绘制，但是近些日子，我们有了工具箱来帮忙做繁杂的工作。在 Core Graphics 中，一条线就只是一种路径。路径对于许多 Core Graphics 的特性来说都是中心，下…",
						tags: ["translation"]
					}
				}, {
					id: "writing-dude-where-is-my-call",
					path: "/writings/dude-where-is-my-call.md",
					type: "markdown",
					title: "【译】哥们儿，我的方法哪儿去了？",
					createdAt: "2017-05-25",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "想象有一天你正在给 Swift 编译器喂一些看起来无害的代码。",
						tags: ["translation"]
					}
				}, {
					id: "writing-core-graphics-part-2",
					path: "/writings/core-graphics-part-2.md",
					type: "markdown",
					title: "【译】Core Graphics, 第二部分：说说 context （上下文）",
					createdAt: "2017-05-24",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "context （上下文）就是 Quartz 的核心：你需要按照某种规范来与当前的 Core Graphics context 交互以真正绘制东西，因此熟悉它、它做什么以及为什么它是这样的是有益处的。",
						tags: ["translation"]
					}
				}, {
					id: "writing-core-graphics-part-1",
					path: "/writings/core-graphics-part-1.md",
					type: "markdown",
					title: "【译】Core Graphics，第一部分：序章",
					createdAt: "2017-05-23",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "Mac 和 iOS 开发者有许多不同的让东西显示在屏幕上的编程接口。UIKit 和 AppKit 有各种各样的 image、color 和 path 类。Core Animation 让你可以移动 layer。OpenGL 让你可以在三维空间渲染东西。Spri…",
						tags: ["translation"]
					}
				}, {
					id: "writing-react-native-lahk-marquee-label",
					path: "/writings/react-native-lahk-marquee-label.md",
					type: "markdown",
					title: "react-native-lahk-marquee-label（跑马灯文字组件）",
					createdAt: "2017-04-11",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "If you need a vertical marquee label, please use react-native-lahk-marquee-label-vertical.",
						tags: ["tech"]
					}
				}, {
					id: "writing-doubanfmplayer-a-mimic-of-douban-fm-player",
					path: "/writings/DoubanFMPlayer, A mimic of Douban.fm player.md",
					type: "markdown",
					title: "DoubanFMPlayer, A mimic of Douban.fm player",
					createdAt: "2017-02-03",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "A mimic of Douban.fm player on Douban.fm. Also a Flex practice project.",
						tags: ["tech"]
					}
				}, {
					id: "writing-examples-to-understand-how-to-find-nash-equilibrium-by-eliminating-dominated-strategies",
					path: "/writings/Examples to understand how to find Nash equilibrium by eliminating “dominated strategies”.md",
					type: "markdown",
					title: "Examples to understand how to find Nash equilibrium by eliminating “dominated strategies”",
					createdAt: "2017-01-18",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "This is a summarization of contents from two different sources. It aims at helping people (at least myself) to understand what dom…",
						tags: ["tech"]
					}
				}, {
					id: "writing-qna-一个-hexo-faq-主题",
					path: "/writings/QnA，一个 Hexo FAQ 主题.md",
					type: "markdown",
					title: "QnA，一个 Hexo FAQ 主题",
					createdAt: "2017-01-14",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "为 Hexo 设计的『知识库』类主题。",
						tags: ["tech"]
					}
				}, {
					id: "writing-danmumanager-一个简单的弹幕工具",
					path: "/writings/DanmuManager 一个简单的弹幕工具.md",
					type: "markdown",
					title: "DanmuManager 一个简单的弹幕工具",
					createdAt: "2017-01-05",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "你可以运行项目中的测试，来了解二者的使用方法。",
						tags: ["tech"]
					}
				}, {
					id: "writing-pauseabletimer-一个可暂停的计时器",
					path: "/writings/PauseableTimer 一个可暂停的计时器.md",
					type: "markdown",
					title: "Pauseable Timer 一个可暂停的计时器",
					createdAt: "2017-01-05",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "PauseableTimer 是一个用 Swift 写的可暂停的计时器。",
						tags: ["tech"]
					}
				}, {
					id: "writing-pauseable-timer",
					path: "/writings/Pauseable Timer.md",
					type: "markdown",
					title: "Pauseable Timer",
					createdAt: "2017-01-04",
					year: 2017,
					nodeIds: ["~"],
					detail: {
						excerpt: "Pauseable Timer is a pause-able timer written in Swift.",
						tags: ["tech"]
					}
				}, {
					id: "writing-my-favorite-javascript-pattern",
					path: "/writings/my-favorite-javascript-pattern.md",
					type: "markdown",
					title: "【译】我最喜欢的 JavaScript 设计模式",
					createdAt: "2016-07-02",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "我觉得聊一下我爱用的 JavaScript 设计模式应该很有意思。我是一步一步才定下来的，经过一段时间从各种来源吸收和适应直到达到一个能提供我所需的灵活性的模式。",
						tags: ["translation"]
					}
				}, {
					id: "writing-javascript-namespace-by-michaux",
					path: "/writings/javascript-namespace-by-michaux.md",
					type: "markdown",
					title: "【译】JavaScript 命名空间",
					createdAt: "2016-06-28",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "JavaScript 中有很多可以给你的对象安全分配命名空间的方法。这篇文章讨论我见过的普遍的实践。",
						tags: ["translation"]
					}
				}, {
					id: "writing-namespacing-in-javascript",
					path: "/writings/Namespacing in JavaScript.md",
					type: "markdown",
					title: "【译】JavaScript 中的命名空间",
					createdAt: "2016-06-21",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "全局变量应该由有系统范围相关性的对象们保留，并且它们的命名应该避免含糊并尽量减少命名冲突的风险。在实践中，这意味着你应该避免创建全局对象，除非它们是绝对必须的。",
						tags: ["translation"]
					}
				}, {
					id: "writing-swift2-中的错误处理-try-catch-do-以及-throw",
					path: "/writings/Swift2 中的错误处理：try，catch，do 以及 throw.md",
					type: "markdown",
					title: "【译】Swift2 中的错误处理：try，catch，do 以及 throw",
					createdAt: "2016-05-15",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "如果你已经看了我那篇讨论 Swift2 中所有新东西的文章并且想了解更多关于新的错误处理系统的东西，这篇文章非常合适。简单来说，它已经被完全重写得现代化，快速和安全，并且除非你只使用 iOS API 的一小部分的话，你需要花些时间来学习一下。",
						tags: ["translation"]
					}
				}, {
					id: "writing-uicollectionview-总结",
					path: "/writings/UICollectionView 总结.md",
					type: "markdown",
					title: "UICollectionView 总结",
					createdAt: "2016-04-13",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "昨天给自己布置这个作业之后，看完文档实践的过程中发现一片很棒的英文总结，于是翻译了一下。这篇总结会简单总结一下我翻译的那篇文章里的内容，以及基于模拟凤凰新闻客户端部分页面的一些 UICollectionView 使用总结。",
						tags: ["tech"]
					}
				}, {
					id: "writing-译-uicollectionview-轻松重排",
					path: "/writings/【译】UICollectionView 轻松重排.md",
					type: "markdown",
					title: "【译】UICollectionView 轻松重排",
					createdAt: "2016-04-12",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "我超喜欢UICollectionView。相比UITableView，它容易自定义得多。现在我使用甚至使用 collection view 比使用 table view 还要频繁了。在 iOS9 中，它开始支持使用起来很简单的重排。在之前是不可能直接重排的，而…",
						tags: ["translation"]
					}
				}, {
					id: "writing-模拟凤凰新闻-更复杂的标签动画-swift-实现多个-tableview-的侧滑与切换",
					path: "/writings/模拟凤凰新闻 | 更复杂的标签动画 - Swift 实现多个 TableView 的侧滑与切换.md",
					type: "markdown",
					title: "模拟凤凰新闻 | 更复杂的标签动画 - Swift 实现多个 TableView 的侧滑与切换",
					createdAt: "2016-04-08",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "简单列一下关键点：",
						tags: ["tech"]
					}
				}, {
					id: "writing-autolayout-中需要注意的点",
					path: "/writings/AutoLayout 中需要注意的点.md",
					type: "markdown",
					title: "AutoLayout 中需要注意的点",
					createdAt: "2016-04-07",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "1. 如果预览的样式和你预想的不一样，检查一下是不是忘记给作为背景的 view 添加约束（上下左右），可能有一个约束缺失，导致整体样式出错。",
						tags: ["tech"]
					}
				}, {
					id: "writing-swift-实现多个-tableview-的侧滑与切换-模拟-instagram-系列",
					path: "/writings/Swift 实现多个 TableView 的侧滑与切换（模拟 instagram 系列）.md",
					type: "markdown",
					title: "Swift 实现多个 TableView 的侧滑与切换（模拟 instagram 系列）",
					createdAt: "2016-04-06",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "将多个 TableView 放在 ScrollView 里面，将 ScrollView Paging 设置为 Enabled，实现多个 TableView 的侧滑与切换。",
						tags: ["tech"]
					}
				}, {
					id: "writing-实现-instagram-底部弹出菜单的一个例子-模拟-instagram-系列",
					path: "/writings/实现 instagram 底部弹出菜单的一个例子（模拟 instagram 系列）.md",
					type: "markdown",
					title: "实现 instagram 底部弹出菜单的一个例子（模拟 instagram 系列）",
					createdAt: "2016-04-03",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "instagram 截图如下：",
						tags: ["tech"]
					}
				}, {
					id: "writing-自定义-uitabbar-总结-一个模拟-instagram-tabbar-的例子",
					path: "/writings/自定义 UITabBar 总结（一个模拟 instagram TabBar 的例子）.md",
					type: "markdown",
					title: "自定义 UITabBar 总结（一个模拟 instagram TabBar 的例子）",
					createdAt: "2016-03-31",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "我在练习 iOS 开发。",
						tags: ["tech"]
					}
				}, {
					id: "writing-仿微博-ios-客户端-tabbar-中间按钮",
					path: "/writings/仿微博 iOS 客户端 TabBar 中间按钮.md",
					type: "markdown",
					title: "仿微博 iOS 客户端 TabBar 中间按钮",
					createdAt: "2016-03-30",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "我在模仿微博 iOS 客户端。如图：",
						tags: ["tech"]
					}
				}, {
					id: "writing-译-ios-基础-frames-bounds-和-cggeometry",
					path: "/writings/【译】iOS 基础：Frames、Bounds 和 CGGeometry.md",
					type: "markdown",
					title: "【译】iOS 基础：Frames、Bounds 和 CGGeometry",
					createdAt: "2016-03-26",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "如果你习惯支持点语法的语言，要搞清楚CGPoint、CGSize和CGRect并不难。不过编程式定位视图或者编写绘图代码一般都很长，因此变得很难读明白。",
						tags: ["translation"]
					}
				}, {
					id: "writing-autolayout-constraint-priority-约束优先级-九宫格续-一个更优方案",
					path: "/writings/AutoLayout：constraint priority 约束优先级（九宫格续，一个更优方案）.md",
					type: "markdown",
					title: "AutoLayout：constraint priority 约束优先级（九宫格续，一个更优方案）",
					createdAt: "2016-03-20",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "之前因为觉得麻烦，没有在那个项目里面尝试把九宫格图片分别作为九个UIImageView来处理（而非一个StackView）。这次我新建了一个项目，来尝试这种情况。",
						tags: ["tech"]
					}
				}, {
					id: "writing-autolayout-uitableviewcell-自适应高度的一个例子",
					path: "/writings/AutoLayout：UITableViewCell 自适应高度的一个例子.md",
					type: "markdown",
					title: "AutoLayout：UITableViewCell 自适应高度的一个例子",
					createdAt: "2016-03-19",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "我在模拟微博客户端。",
						tags: ["tech"]
					}
				}, {
					id: "writing-uisearchbar-一-修改背景层和输入框层的背景颜色和边框颜色",
					path: "/writings/UISearchBar（一）修改背景层和输入框层的背景颜色和边框颜色.md",
					type: "markdown",
					title: "UISearchBar（一）修改背景层和输入框层的背景颜色和边框颜色",
					createdAt: "2016-03-19",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "因为微博客户端首页上面的 search bar 高度很小，自己尝试修改没成功，于是 google 了一下。",
						tags: ["tech"]
					}
				}, {
					id: "writing-fire-blog-中文说明",
					path: "/writings/Fire-Blog-中文说明.md",
					type: "markdown",
					title: "Fire Blog 中文说明",
					createdAt: "2016-03-18",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "因为简单免费而且访问速度快（比我自己的阿里云快多了【翻白眼】），所以越来越多的人使用Github Pages搭建技术博客。",
						tags: ["tech"]
					}
				}, {
					id: "writing-fireblog-instruction",
					path: "/writings/FireBlog-Instruction.md",
					type: "markdown",
					title: "FireBlog Instruction",
					createdAt: "2016-03-18",
					year: 2016,
					nodeIds: ["~"],
					detail: {
						excerpt: "Since it’s easy, free and fast, more and more people start to use this service.",
						tags: ["tech"]
					}
				}, 
        
//bio drawing
        {
					id: "drawing-20201119-0633-zzm",
					path: "/images/20201119 0633 - ZZM - iPad.jpg",
					type: "image",
					title: "ZZM",
					createdAt: "2020-11-19",
					year: 2020,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20201119-0833-办公室",
					path: "/images/20201119 0833 - 办公室 - iPad.jpg",
					type: "image",
					title: "办公室",
					createdAt: "2020-11-19",
					year: 2020,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-2021-公寓活动中心-1",
					path: "/images/2021 - 公寓活动中心 1 - Pencil.jpg",
					type: "image",
					title: "公寓活动中心 1",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Leetcoding at Santa Clara Sqaure clubhouse."
					}
				}, {
					id: "drawing-2021-公寓活动中心-2",
					path: "/images/2021 - 公寓活动中心 2 - Pencil.jpg",
					type: "image",
					title: "公寓活动中心 2",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Leetcoding at Santa Clara Sqaure clubhouse."
					}
				}, {
					id: "drawing-2021-公寓活动中心-3",
					path: "/images/2021 - 公寓活动中心 3 - Pencil.jpg",
					type: "image",
					title: "公寓活动中心 3",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil study."
					}
				}, {
					id: "drawing-2021-办公空间",
					path: "/images/2021 - 办公空间 - Pencil.jpg",
					type: "image",
					title: "办公空间",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Working in Santa Clara office, TikTok."
					}
				}, {
					id: "drawing-2021-同事",
					path: "/images/2021 - 同事 - Pencil.jpg",
					type: "image",
					title: "同事",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-2021-梦",
					path: "/images/2021 - 梦 - Pencil.jpg",
					type: "image",
					title: "梦",
					createdAt: "2021",
					year: 2021,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Had a bad dream."
					}
				}, {
					id: "drawing-20210103-1612-练习",
					path: "/images/20210103 1612 - 练习 - iPad.png",
					type: "image",
					title: "练习",
					createdAt: "2021-01-03",
					year: 2021,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20220225-裸女",
					path: "/images/20220225 - 裸女 - Label-Name.PNG",
					type: "image",
					title: "裸女",
					createdAt: "2022-02-25",
					year: 2022,
					nodeIds: ["lbl-name"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20220225-齐天大圣",
					path: "/images/20220225 - 齐天大圣 - Label-Name.PNG",
					type: "image",
					title: "齐天大圣",
					createdAt: "2022-02-25",
					year: 2022,
					nodeIds: ["lbl-name"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20220309-0633-gyy-hbd",
					path: "/images/20220309 0633 - gyy hbd - Label-Name.png",
					type: "image",
					title: "gyy hbd",
					createdAt: "2022-03-09",
					year: 2022,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "To my friend the artist."
					}
				}, {
					id: "drawing-20220309-1833-gyy-hbd-back",
					path: "/images/20220309 1833 - gyy hbd back - Label-Name.png",
					type: "image",
					title: "gyy hbd back",
					createdAt: "2022-03-09",
					year: 2022,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "Back of the acrylic pin. "
					}
				}, {
					id: "drawing-20220319-1246-f2kworld",
					path: "/images/20220319 1246 - f2kworld - Label-Name.png",
					type: "image",
					title: "f2k.world",
					createdAt: "2022-03-19",
					year: 2022,
					nodeIds: ["lbl-name"],
					detail: {
						description: "Inspired by one of my favorite ultra mini pixel art. Attempted to create base characters that has all essential body parts with room for more customization."
					}
				}, {
					id: "drawing-20220403-闲坐",
					path: "/images/20220403 - 闲坐 - iPad.PNG",
					type: "image",
					title: "闲坐",
					createdAt: "2022-04-03",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20220407-学画画",
					path: "/images/20220407 - 学画画 - iPad.PNG",
					type: "image",
					title: "学画画",
					createdAt: "2022-04-07",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20220525-2343-猫睡",
					path: "/images/20220525 2343 - 猫睡 - iPad.jpg",
					type: "image",
					title: "猫睡",
					createdAt: "2022-05-25",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20220608-0027am",
					path: "/images/20220608 - 0027AM - Colored Pencil.jpg",
					type: "image",
					title: "0027AM",
					createdAt: "2022-06-08",
					year: 2022,
					nodeIds: ["colored-pencil", "perspective"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220608-去超市",
					path: "/images/20220608 - 去超市 - Colored Pencil.jpg",
					type: "image",
					title: "去超市",
					createdAt: "2022-06-08",
					year: 2022,
					nodeIds: ["colored-pencil", "perspective"],
					detail: {
						description: "Walking to Whole Foods at Santa Clara Sqaure."
					}
				}, {
					id: "drawing-20220609-办公室",
					path: "/images/20220609 - 办公室 - Colored Pencil.jpg",
					type: "image",
					title: "办公室",
					createdAt: "2022-06-09",
					year: 2022,
					nodeIds: ["colored-pencil", "perspective"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220609-沙发上",
					path: "/images/20220609 - 沙发上 - Colored Pencil.jpg",
					type: "image",
					title: "沙发上",
					createdAt: "2022-06-09",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220610-猫",
					path: "/images/20220610 - 猫 - Colored Pencil.jpg",
					type: "image",
					title: "猫",
					createdAt: "2022-06-10",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220621-not-feeling-well-1",
					path: "/images/20220621 - NOT FEELING WELL 1 - Colored Pencil.jpg",
					type: "image",
					title: "NOT FEELING WELL 1",
					createdAt: "2022-06-21",
					year: 2022,
					nodeIds: ["not-well", "colored-pencil"],
					detail: {
						description: "A NOT WELL collection piece."
					}
				}, {
					id: "drawing-20220621-not-feeling-well-2",
					path: "/images/20220621 - NOT FEELING WELL 2 - Colored Pencil.jpg",
					type: "image",
					title: "NOT FEELING WELL 2",
					createdAt: "2022-06-21",
					year: 2022,
					nodeIds: ["not-well", "colored-pencil"],
					detail: {
						description: "A NOT WELL collection piece."
					}
				}, {
					id: "drawing-20220621-打乒乓",
					path: "/images/20220621 - 打乒乓 - Colored Pencil.jpg",
					type: "image",
					title: "打乒乓",
					createdAt: "2022-06-21",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220622-在想什么",
					path: "/images/20220622 - 在想什么 - Colored Pencil.jpg",
					type: "image",
					title: "在想什么",
					createdAt: "2022-06-22",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220622-猫睡",
					path: "/images/20220622 - 猫睡 - Colored Pencil.jpg",
					type: "image",
					title: "猫睡",
					createdAt: "2022-06-22",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220627-傍晚在沙发上小憩睡来后独自坐在公寓沙发上等待自己清醒",
					path: "/images/20220627 - 傍晚在沙发上小憩睡来后独自坐在公寓沙发上等待自己清醒 - Colored Pencil.jpg",
					type: "image",
					title: "傍晚在沙发上小憩睡来后独自坐在公寓沙发上等待自己清醒",
					createdAt: "2022-06-27",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220628-射箭",
					path: "/images/20220628 - 射箭 - Colored Pencil.jpg",
					type: "image",
					title: "射箭",
					createdAt: "2022-06-28",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220628-路过",
					path: "/images/20220628 - 路过 - Colored Pencil.jpg",
					type: "image",
					title: "路过",
					createdAt: "2022-06-28",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220629-猫",
					path: "/images/20220629 - 猫 - Colored Pencil.jpg",
					type: "image",
					title: "猫",
					createdAt: "2022-06-29",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220702-2337-草稿",
					path: "/images/20220702 2337 - 草稿 - Colored Pencil.jpg",
					type: "image",
					title: "草稿",
					createdAt: "2022-07-02",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220704-0052-歪口罩",
					path: "/images/20220704 0052 - 歪口罩 - Colored Pencil.jpg",
					type: "image",
					title: "歪口罩",
					createdAt: "2022-07-04",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220704-0056-猫",
					path: "/images/20220704 0056 - 猫 - Colored Pencil.jpg",
					type: "image",
					title: "猫",
					createdAt: "2022-07-04",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220707-0111-喉咙不舒服",
					path: "/images/20220707 0111 喉咙不舒服 - Colored Pencil.jpg",
					type: "image",
					title: "喉咙不舒服",
					createdAt: "2022-07-07",
					year: 2022,
					nodeIds: ["not-well", "colored-pencil"],
					detail: {
						description: "A NOT WELL collection piece."
					}
				}, {
					id: "drawing-20220707-0130-喉咙",
					path: "/images/20220707 0130 喉咙 - Colored Pencil.jpg",
					type: "image",
					title: "喉咙",
					createdAt: "2022-07-07",
					year: 2022,
					nodeIds: ["not-well", "colored-pencil"],
					detail: {
						description: "A NOT WELL collection piece."
					}
				}, {
					id: "drawing-20220708-1520-untitled",
					path: "/images/20220708 1520 - untitled - Colored Pencil.jpg",
					type: "image",
					title: "untitled",
					createdAt: "2022-07-08",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220708-2202-家人照片一张",
					path: "/images/20220708 2202 - 家人照片一张 - iPad.jpg",
					type: "image",
					title: "家人照片一张",
					createdAt: "2022-07-08",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20220710-1458-观音殿",
					path: "/images/20220710 1458 - 观音殿 - Colored Pencil.jpg",
					type: "image",
					title: "观音殿",
					createdAt: "2022-07-10",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220711-2231-屋顶",
					path: "/images/20220711 2231 - 屋顶 - Colored Pencil.jpg",
					type: "image",
					title: "屋顶",
					createdAt: "2022-07-11",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220712-草稿",
					path: "/images/20220712 - 草稿 - Colored Pencil.jpg",
					type: "image",
					title: "草稿",
					createdAt: "2022-07-12",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220713-0010-メロティー",
					path: "/images/20220713 0010 - メロディー - Colored Pencil.jpg",
					type: "image",
					title: "メロディー",
					createdAt: "2022-07-13",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220714-下馆子",
					path: "/images/20220714 - 下馆子 - Pencil.jpg",
					type: "image",
					title: "下馆子",
					createdAt: "2022-07-14",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20220714-客厅",
					path: "/images/20220714 - 客厅 - Pencil.jpg",
					type: "image",
					title: "客厅",
					createdAt: "2022-07-14",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220714-客厅一角",
					path: "/images/20220714 - 客厅一角 - Pencil.jpg",
					type: "image",
					title: "客厅一角",
					createdAt: "2022-07-14",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220714-桌上",
					path: "/images/20220714 - 桌上 - Pencil.jpg",
					type: "image",
					title: "桌上",
					createdAt: "2022-07-14",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220714-草稿",
					path: "/images/20220714 - 草稿 - Pen.jpg",
					type: "image",
					title: "草稿",
					createdAt: "2022-07-14",
					year: 2022,
					nodeIds: ["cat-sofa", "colored-pencil"],
					detail: {
						description: "A Cat & Sofa collection piece."
					}
				}, {
					id: "drawing-20220730-1925-唱歌课",
					path: "/images/20220730 1925 - 唱歌课 - Colored Pencil.jpg",
					type: "image",
					title: "唱歌课",
					createdAt: "2022-07-30",
					year: 2022,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20221228-1649-车里",
					path: "/images/20221228 1649 - 车里 - iPad.jpg",
					type: "image",
					title: "车里",
					createdAt: "2022-12-28",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20221228-1717-玩手机",
					path: "/images/20221228 1717 - 玩手机 - iPad.jpg",
					type: "image",
					title: "玩手机",
					createdAt: "2022-12-28",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20221228-1724-猫",
					path: "/images/20221228 1724 - 猫 - iPad.jpg",
					type: "image",
					title: "猫",
					createdAt: "2022-12-28",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20221229-0040-兜兜叽和包包叽",
					path: "/images/20221229 0040 - 兜兜叽和包包叽 - iPad.jpg",
					type: "image",
					title: "兜兜叽和包包叽",
					createdAt: "2022-12-29",
					year: 2022,
					nodeIds: ["ipad-dou", "ipad"],
					detail: {
						description: "A DOU collection piece."
					}
				}, {
					id: "drawing-20221230-0146-练习",
					path: "/images/20221230 0146 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-0150-练习",
					path: "/images/20221230 0150 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-0153-练习",
					path: "/images/20221230 0153 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-0156-练习",
					path: "/images/20221230 0156 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-1601-练习",
					path: "/images/20221230 1601 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-1607-练习",
					path: "/images/20221230 1607 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221230-1619-练习",
					path: "/images/20221230 1619 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2022-12-30",
					year: 2022,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20221231-0116-迪士尼照片-1",
					path: "/images/20221231 0116 - 迪士尼照片 1 - iPad.jpg",
					type: "image",
					title: "迪士尼照片 1",
					createdAt: "2022-12-31",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20221231-0156-迪士尼照片-2",
					path: "/images/20221231 0156 - 迪士尼照片 2 - iPad.jpg",
					type: "image",
					title: "迪士尼照片 2",
					createdAt: "2022-12-31",
					year: 2022,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-2023-兜宝",
					path: "/images/2023 - 兜宝 - iPad.jpg",
					type: "image",
					title: "兜宝",
					createdAt: "2023",
					year: 2023,
					nodeIds: ["ipad-dou", "ipad"],
					detail: {
						description: "A DOU collection piece."
					}
				}, {
					id: "drawing-20230103-0206-练习",
					path: "/images/20230103 0206 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2023-01-03",
					year: 2023,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20230103-0217-兜宝",
					path: "/images/20230103 0217 - 兜宝 - iPad.jpg",
					type: "image",
					title: "兜宝",
					createdAt: "2023-01-03",
					year: 2023,
					nodeIds: ["ipad-dou", "ipad"],
					detail: {
						description: "A DOU collection piece."
					}
				}, {
					id: "drawing-20230116-1307-练习",
					path: "/images/20230116 1307 - 练习 - iPad.jpg",
					type: "image",
					title: "练习",
					createdAt: "2023-01-16",
					year: 2023,
					nodeIds: ["practice", "ipad"],
					detail: {
						description: "An iPad practice study."
					}
				}, {
					id: "drawing-20230116-1314-兜宝打电脑",
					path: "/images/20230116 1314 - 兜宝打电脑 - iPad.jpg",
					type: "image",
					title: "兜宝打电脑",
					createdAt: "2023-01-16",
					year: 2023,
					nodeIds: ["ipad-dou", "ipad"],
					detail: {
						description: "A DOU collection piece."
					}
				}, {
					id: "drawing-20230410-1805-照片练习",
					path: "/images/20230410 1805 - 照片练习 - iPad.jpg",
					type: "image",
					title: "照片练习",
					createdAt: "2023-04-10",
					year: 2023,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20230410-1813-照片练习",
					path: "/images/20230410 1813 - 照片练习 - iPad.jpg",
					type: "image",
					title: "照片练习",
					createdAt: "2023-04-10",
					year: 2023,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20230503-0121-床",
					path: "/images/20230503 0121 - 床 - iPad.jpg",
					type: "image",
					title: "床",
					createdAt: "2023-05-03",
					year: 2023,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20231109-1725-照片一张",
					path: "/images/20231109 1725 - 照片一张 - Colored Pencil.jpg",
					type: "image",
					title: "照片一张",
					createdAt: "2023-11-09",
					year: 2023,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "LOL"
					}
				}, {
					id: "drawing-20231210-2155-坐着-by-dou",
					path: "/images/20231210 2155 - 坐着 by DOU - Colored Pencil.jpg",
					type: "image",
					title: "坐着 by DOU",
					createdAt: "2023-12-10",
					year: 2023,
					nodeIds: ["colored-pencil", "by-dou"],
					detail: {
						description: "LOL, super cute. I force DOU to draw with me sometimes."
					}
				}, {
					id: "drawing-2024-dou",
					path: "/images/2024 - DOU - Label-Name.png",
					type: "image",
					title: "DOU",
					createdAt: "2024",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "A thousand DOU!"
					}
				}, {
					id: "drawing-2024-dou-family",
					path: "/images/2024 - DOU Family - Label-Name.png",
					type: "image",
					title: "DOU Family",
					createdAt: "2024",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "How I started the DOU Family base characters."
					}
				}, {
					id: "drawing-2024-dou-模版改",
					path: "/images/2024 - DOU 模版改 - Label-Name.png",
					type: "image",
					title: "DOU 模版改",
					createdAt: "2024",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "Tweaked a free game sprite to basic DOU, DOU with Alien hair band, DOU in dinosaur costumes."
					}
				}, {
					id: "drawing-2024-副驾",
					path: "/images/2024 - 副驾 - Acrylic Marker.jpg",
					type: "image",
					title: "副驾",
					createdAt: "2024",
					year: 2024,
					nodeIds: ["acrylic-marker"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240121-0720-丙烯马克笔临摹-线条小狗每天快乐",
					path: "/images/20240121 0720 - 丙烯马克笔临摹 线条小狗每天快乐 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 线条小狗每天快乐",
					createdAt: "2024-01-21",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240121-1606-卡皮巴拉麦当劳",
					path: "/images/20240121 1606 - 卡皮巴拉麦当劳 - Acrylic Marker.jpg",
					type: "image",
					title: "卡皮巴拉麦当劳",
					createdAt: "2024-01-21",
					year: 2024,
					nodeIds: ["acrylic-marker"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240122-1559-丙烯马克笔临摹-小狗检察官",
					path: "/images/20240122 1559 - 丙烯马克笔临摹 小狗检察官 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 小狗检察官",
					createdAt: "2024-01-22",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240123-2012-丙烯马克笔临摹-小黑猫",
					path: "/images/20240123 2012 - 丙烯马克笔临摹 小黑猫 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 小黑猫",
					createdAt: "2024-01-23",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240124-0112-丙烯马克笔临摹-和小狗一起入睡",
					path: "/images/20240124 0112 - 丙烯马克笔临摹 和小狗一起入睡 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 和小狗一起入睡",
					createdAt: "2024-01-24",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240124-1730-丙烯马克笔临摹-和小狗一起蹦蹦跳跳",
					path: "/images/20240124 1730 - 丙烯马克笔临摹  和小狗一起蹦蹦跳跳 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹  和小狗一起蹦蹦跳跳",
					createdAt: "2024-01-24",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240125-2359-线稿",
					path: "/images/20240125 2359 - 线稿 - Acylic Marker.jpg",
					type: "image",
					title: "线稿",
					createdAt: "2024-01-25",
					year: 2024,
					nodeIds: ["acrylic-marker"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240129-2330-结婚照-by-dou",
					path: "/images/20240129 2330 - 结婚照 by DOU - Pencil.jpg",
					type: "image",
					title: "结婚照 by DOU",
					createdAt: "2024-01-29",
					year: 2024,
					nodeIds: ["colored-pencil", "by-dou"],
					detail: {
						description: "Best of the year! I force DOU to draw with me sometimes."
					}
				}, {
					id: "drawing-20240131-1710-丙烯马克笔临摹-麦门",
					path: "/images/20240131 1710 - 丙烯马克笔临摹 麦门 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 麦门",
					createdAt: "2024-01-31",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240201-丙烯马克笔临摹-福",
					path: "/images/20240201 - 丙烯马克笔临摹 福 - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 福",
					createdAt: "2024-02-01",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240311-0117-临摹-夏日微风",
					path: "/images/20240311 0117 - 临摹 夏日微风 - Acrylic Marker.jpg",
					type: "image",
					title: "临摹 夏日微风",
					createdAt: "2024-03-11",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240430-2217-高速",
					path: "/images/20240430 2217 - 高速 - Acrylic Marker.jpg",
					type: "image",
					title: "高速",
					createdAt: "2024-04-30",
					year: 2024,
					nodeIds: ["acrylic-marker"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240825-dou",
					path: "/images/20240825 - DOU - Acrylic Marker.jpg",
					type: "image",
					title: "DOU",
					createdAt: "2024-08-25",
					year: 2024,
					nodeIds: ["acrylic-marker"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240825-2123-丙烯马克笔临摹-度假-by-dou",
					path: "/images/20240825 2123 - 丙烯马克笔临摹 度假 by DOU - Acrylic Marker.jpg",
					type: "image",
					title: "丙烯马克笔临摹 度假 by DOU",
					createdAt: "2024-08-25",
					year: 2024,
					nodeIds: ["acrylic-marker", "copies"],
					detail: {
						description: "An acrylic marker study."
					}
				}, {
					id: "drawing-20240904-dou-family-basic",
					path: "/images/20240904 - DOU Family Basic - Label-Name.png",
					type: "image",
					title: "DOU Family Basic",
					createdAt: "2024-09-04",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "Official Basic 3n4 & DOU!"
					}
				}, {
					id: "drawing-20240905-dou-family-pajamas",
					path: "/images/20240905 - DOU Family Pajamas - Label-Name.png",
					type: "image",
					title: "DOU Family Pajamas",
					createdAt: "2024-09-05",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "My favorite Avocado Pajamas."
					}
				}, {
					id: "drawing-20240905-dou-family-tshirt",
					path: "/images/20240905 - DOU Family Tshirt - Label-Name.png",
					type: "image",
					title: "DOU Family Tshirt",
					createdAt: "2024-09-05",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "Us in T-shirts."
					}
				}, {
					id: "drawing-20240906-dou-family-singing",
					path: "/images/20240906 - DOU Family Singing - Label-Name.png",
					type: "image",
					title: "DOU Family Singing",
					createdAt: "2024-09-06",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "Us performing at a mini concert."
					}
				}, {
					id: "drawing-20240906-dou-family-wedding-day",
					path: "/images/20240906 - DOU Family Wedding Day - Label-Name.png",
					type: "image",
					title: "DOU Family Wedding Day",
					createdAt: "2024-09-06",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "A photo from our wedding day."
					}
				}, {
					id: "drawing-20240914-crh-n-dz",
					path: "/images/20240914 - CRH n DZ - Label-Name.png",
					type: "image",
					title: "CRH n DZ",
					createdAt: "2024-09-14",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20240914-dou-family-wedding",
					path: "/images/20240914 - DOU Family Wedding - Label-Name.png",
					type: "image",
					title: "DOU Family Wedding",
					createdAt: "2024-09-14",
					year: 2024,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "Our ceremony."
					}
				}, {
					id: "drawing-20240917-gyh",
					path: "/images/20240917 - gyh - Label-Name.png",
					type: "image",
					title: "gyh",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["lbl-name"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20240917-peeps",
					path: "/images/20240917 - peeps - Label-Name.png",
					type: "image",
					title: "peeps",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece. "
					}
				}, {
					id: "drawing-20240917-peeps-3n4",
					path: "/images/20240917 - peeps 3n4 - Label-Name.png",
					type: "image",
					title: "peeps 3n4",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240917-peeps-arron",
					path: "/images/20240917 - peeps arron - Label-Name.png",
					type: "image",
					title: "peeps arron",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240917-peeps-assen",
					path: "/images/20240917 - peeps assen - Label-Name.png",
					type: "image",
					title: "peeps assen",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240917-peeps-astro",
					path: "/images/20240917 - peeps astro - Label-Name.png",
					type: "image",
					title: "peeps astro",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240917-peeps-gyh",
					path: "/images/20240917 - peeps gyh - Label-Name.png",
					type: "image",
					title: "peeps gyh",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240917-peeps-gyy",
					path: "/images/20240917 - peeps gyy - Label-Name.png",
					type: "image",
					title: "peeps gyy",
					createdAt: "2024-09-17",
					year: 2024,
					nodeIds: ["peeps", "lbl-name"],
					detail: {
						description: "A Peeps collection piece."
					}
				}, {
					id: "drawing-20240919-xx-n-zz",
					path: "/images/20240919 - XX n ZZ - Label-Name.png",
					type: "image",
					title: "XX n ZZ",
					createdAt: "2024-09-19",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20241011-rainie",
					path: "/images/20241011 - Rainie - Label-Name.png",
					type: "image",
					title: "Rainie",
					createdAt: "2024-10-11",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20241012-libby-n-rdc",
					path: "/images/20241012 - Libby n RDC - Label-Name.png",
					type: "image",
					title: "Libby n RDC",
					createdAt: "2024-10-12",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20241012-tianlin",
					path: "/images/20241012 - Tianlin - Label-Name.png",
					type: "image",
					title: "Tianlin",
					createdAt: "2024-10-12",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20241102-cc-stella",
					path: "/images/20241102 - CC & Stella - Label-Name.png",
					type: "image",
					title: "CC & Stella",
					createdAt: "2024-11-02",
					year: 2024,
					nodeIds: ["lbl-name", "friends"],
					detail: {
						description: "A lbl-name piece."
					}
				}, {
					id: "drawing-20241208-1406-宝华禅寺",
					path: "/images/20241208 1406 - 宝华禅寺 - Colored Pencil.jpg",
					type: "image",
					title: "宝华禅寺",
					createdAt: "2024-12-08",
					year: 2024,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20241209-草稿",
					path: "/images/20241209 - 草稿 - Colored Pencil.jpg",
					type: "image",
					title: "草稿",
					createdAt: "2024-12-09",
					year: 2024,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-2025-dou",
					path: "/images/2025 - DOU - Label-Name.png",
					type: "image",
					title: "DOU",
					createdAt: "2025",
					year: 2025,
					nodeIds: ["dou", "lbl-name"],
					detail: {
						description: "A DOU lbl-name collection piece."
					}
				}, {
					id: "drawing-2025-圣诞树",
					path: "/images/2025 - 圣诞树 - Oil Pastel.jpg",
					type: "image",
					title: "圣诞树",
					createdAt: "2025",
					year: 2025,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel piece."
					}
				}, {
					id: "drawing-20250315-0019-家庭办公室的晚上",
					path: "/images/20250315 0019 - 家庭办公室的晚上 - Pencil.jpg",
					type: "image",
					title: "家庭办公室的晚上",
					createdAt: "2025-03-15",
					year: 2025,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "A colored pencil piece."
					}
				}, {
					id: "drawing-20250315-0028-草稿",
					path: "/images/20250315 0028 - 草稿 - Pen.jpg",
					type: "image",
					title: "草稿",
					createdAt: "2025-03-15",
					year: 2025,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Awwwwwwwwwww"
					}
				}, {
					id: "drawing-20250426-1615-临摹-what-happened-to-all-my-golf-tees",
					path: "/images/20250426 1615 - 临摹 What happened to all my golf tees - Oil Pastel.jpg",
					type: "image",
					title: "临摹 What happened to all my golf tees",
					createdAt: "2025-04-26",
					year: 2025,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "One of the collectables from the Snoopy museum, too expensive so went ahead and copied it. Not bad."
					}
				}, {
					id: "drawing-20250503-palisades-cc",
					path: "/images/20250503 - Palisades CC - Label-Name.png",
					type: "image",
					title: "Palisades CC",
					createdAt: "2025-05-03",
					year: 2025,
					nodeIds: ["palisades", "lbl-name"],
					detail: {
						description: "A Palisades collection piece."
					}
				}, {
					id: "drawing-20250503-palisades-dou",
					path: "/images/20250503 - Palisades DOU - Label-Name.png",
					type: "image",
					title: "Palisades DOU",
					createdAt: "2025-05-03",
					year: 2025,
					nodeIds: ["palisades", "lbl-name"],
					detail: {
						description: "A Palisades collection piece."
					}
				}, {
					id: "drawing-20250503-palisades-tao",
					path: "/images/20250503 - Palisades Tao - Label-Name.png",
					type: "image",
					title: "Palisades Tao",
					createdAt: "2025-05-03",
					year: 2025,
					nodeIds: ["palisades", "lbl-name"],
					detail: {
						description: "A Palisades collection piece."
					}
				}, {
					id: "drawing-20250508-1606-不开心人",
					path: "/images/20250508 1606 - 不开心人 - iPad.jpg",
					type: "image",
					title: "不开心人",
					createdAt: "2025-05-08",
					year: 2025,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20250508-1624-sad-face",
					path: "/images/20250508 1624 - SAD FACE - iPad.PNG",
					type: "image",
					title: "SAD FACE",
					createdAt: "2025-05-08",
					year: 2025,
					nodeIds: ["ipad"],
					detail: {
						description: "An iPad drawing."
					}
				}, {
					id: "drawing-20250531-海边",
					path: "/images/20250531 - 海边 - Oil Pastel.jpg",
					type: "image",
					title: "海边",
					createdAt: "2025-05-31",
					year: 2025,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20250531-花",
					path: "/images/20250531 - 花 - Oil Pastel.jpg",
					type: "image",
					title: "花",
					createdAt: "2025-05-31",
					year: 2025,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20251231-palisades-kang",
					path: "/images/20251231 - Palisades Kang - Label-Name.png",
					type: "image",
					title: "Palisades Kang",
					createdAt: "2025-12-31",
					year: 2025,
					nodeIds: ["palisades", "lbl-name"],
					detail: {
						description: "A Palisades collection piece."
					}
				}, {
					id: "drawing-20260212-0047-普通苹果",
					path: "/images/20260212 0047 - 普通苹果 - Oil Pastel.jpg",
					type: "image",
					title: "普通苹果",
					createdAt: "2026-02-12",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260212-0052-临摹-一袋西红柿",
					path: "/images/20260212 0052 - 临摹 一袋西红柿 - Oil Pastel.jpg",
					type: "image",
					title: "临摹 一袋西红柿",
					createdAt: "2026-02-12",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260212-0057-喉糖",
					path: "/images/20260212 0057 - 喉糖 - Oil Pastel.jpg",
					type: "image",
					title: "喉糖",
					createdAt: "2026-02-12",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260212-0104-西瓜",
					path: "/images/20260212 0104 - 西瓜 - Oil Pastel.jpg",
					type: "image",
					title: "西瓜",
					createdAt: "2026-02-12",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260212-0107-香蕉",
					path: "/images/20260212 0107 - 香蕉 - Oil Pastel.jpg",
					type: "image",
					title: "香蕉",
					createdAt: "2026-02-12",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260215-0944-一束花",
					path: "/images/20260215 0944 - 一束花 - Oil Pastel.jpg",
					type: "image",
					title: "一束花",
					createdAt: "2026-02-15",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260219-2245-快冷没了",
					path: "/images/20260219 2245 - 快冷没了 - Oil Pastel.jpg",
					type: "image",
					title: "快冷没了",
					createdAt: "2026-02-19",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260421-usics",
					path: "/images/20260421 - USICS - Oil Pastel.jpg",
					type: "image",
					title: "USICS",
					createdAt: "2026-04-21",
					year: 2026,
					nodeIds: ["oil-pastel"],
					detail: {
						description: "An oil pastel study."
					}
				}, {
					id: "drawing-20260519-2243-加班",
					path: "/images/20260519 2243 - 加班 - Pencil.jpg",
					type: "image",
					title: "加班",
					createdAt: "2026-05-19",
					year: 2026,
					nodeIds: ["colored-pencil"],
					detail: {
						description: "Pedregal."
					}
				}, {
					id: "drawing-20230410-dou",
					path: "/images/20230410 0103 - DOU - iPad.jpg",
					type: "image",
					title: "DOU",
					createdAt: "2023-04-10",
					year: 2023,
					nodeIds: ["ipad", "ipad-dou"],
					detail: {
						description: "The first iPad DOU character drawing, made after the proposal figure."
					}
				}, 
        
//bio photo
        {
					id: "photo-19700101-3n4-peeps-by-gyy",
					path: "/photos/19700101 - 3n4 peeps by gyy.PNG",
					type: "image",
					title: "3n4 peeps by gyy",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "life"],
					detail: {
						description: "3n4 peeps by gyy"
					}
				}, {
					id: "photo-19700101-dou-wedding-3d-print",
					path: "/photos/19700101 - DOU Wedding 3D Print.JPG",
					type: "image",
					title: "DOU Wedding 3D Print",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "dou-photos"],
					detail: {
						description: "DOU Wedding 3D Print"
					}
				}, {
					id: "photo-19700101-dou-婚礼款",
					path: "/photos/19700101 - DOU 婚礼款.JPG",
					type: "image",
					title: "DOU 婚礼款",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "dou-photos"],
					detail: {
						description: "DOU 婚礼款"
					}
				}, {
					id: "photo-19700101-dou-西装款",
					path: "/photos/19700101 - DOU 西装款.PNG",
					type: "image",
					title: "DOU 西装款",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "dou-photos"],
					detail: {
						description: "DOU 西装款"
					}
				}, {
					id: "photo-19700101-vr-table-tennis-by-gyy",
					path: "/photos/19700101 - VR Table Tennis by gyy.PNG",
					type: "image",
					title: "VR Table Tennis by gyy",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "life"],
					detail: {
						description: "VR Table Tennis by gyy"
					}
				}, {
					id: "photo-19700101-chengge-by-gyy",
					path: "/photos/19700101 - chengge by gyy.JPG",
					type: "image",
					title: "chengge by gyy",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "life"],
					detail: {
						description: "chengge by gyy"
					}
				}, {
					id: "photo-19700101-宋小宝冲出猫窝",
					path: "/photos/19700101 - 宋小宝冲出猫窝.JPG",
					type: "image",
					title: "宋小宝冲出猫窝",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "宋小宝冲出猫窝"
					}
				}, {
					id: "photo-19700101-宋小宝在猫窝",
					path: "/photos/19700101 - 宋小宝在猫窝.JPG",
					type: "image",
					title: "宋小宝在猫窝",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "宋小宝在猫窝"
					}
				}, {
					id: "photo-19700101-宋小宝失了智",
					path: "/photos/19700101 - 宋小宝失了智.JPG",
					type: "image",
					title: "宋小宝失了智",
					createdAt: "1970-01-01",
					year: 1970,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "宋小宝失了智"
					}
				}, {
					id: "photo-20190216-screenshot-meishi",
					path: "/photos/20190216 - Screenshot Meishi.JPG",
					type: "image",
					title: "Screenshot Meishi",
					createdAt: "2019-02-16",
					year: 2019,
					nodeIds: ["photo", "life"],
					detail: {
						description: "Screenshot Meishi"
					}
				}, {
					id: "photo-20210516-colindale-by-kiki",
					path: "/photos/20210516 - Colindale by Kiki.jpg",
					type: "image",
					title: "Colindale by Kiki",
					createdAt: "2021-05-16",
					year: 2021,
					nodeIds: ["photo", "life"],
					detail: {
						description: "Colindale by Kiki"
					}
				}, {
					id: "photo-20220113-宋小宝小时候",
					path: "/photos/20220113 - 宋小宝小时候.jpg",
					type: "image",
					title: "宋小宝小时候",
					createdAt: "2022-01-13",
					year: 2022,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "宋小宝小时候"
					}
				}, {
					id: "photo-20220116-part-time-theater",
					path: "/photos/20220116 - Part-time Theater.JPG",
					type: "image",
					title: "Part-time Theater",
					createdAt: "2022-01-16",
					year: 2022,
					nodeIds: ["photo", "life"],
					detail: {
						description: "Part-time Theater"
					}
				}, {
					id: "photo-20220116-vr-table-tennis",
					path: "/photos/20220116 0648 - VR Table Tennis.jpg",
					type: "image",
					title: "VR Table Tennis",
					createdAt: "2022-01-16",
					year: 2022,
					nodeIds: ["photo", "life"],
					detail: {
						description: "VR Table Tennis"
					}
				}, {
					id: "photo-20220521-小狗",
					path: "/photos/20220521 - 小狗.jpg",
					type: "image",
					title: "小狗",
					createdAt: "2022-05-21",
					year: 2022,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "小狗"
					}
				}, {
					id: "photo-20230601-新婚夫妇",
					path: "/photos/20230601 - 新婚夫妇.JPG",
					type: "image",
					title: "新婚夫妇",
					createdAt: "2023-06-01",
					year: 2023,
					nodeIds: ["photo", "dou-photos"],
					detail: {
						description: "新婚夫妇"
					}
				}, {
					id: "photo-20240630-cat-toy",
					path: "/photos/20240630 - Cat Toy.jpg",
					type: "image",
					title: "Cat Toy",
					createdAt: "2024-06-30",
					year: 2024,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "Cat Toy"
					}
				}, {
					id: "photo-20240920-三眼仔咪咪",
					path: "/photos/20240920 1124 - 三眼仔咪咪.jpg",
					type: "image",
					title: "三眼仔咪咪",
					createdAt: "2024-09-20",
					year: 2024,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "三眼仔咪咪"
					}
				}, {
					id: "photo-20240920-三眼仔宋小宝",
					path: "/photos/20240920 1125 - 三眼仔宋小宝.jpg",
					type: "image",
					title: "三眼仔宋小宝",
					createdAt: "2024-09-20",
					year: 2024,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "三眼仔宋小宝"
					}
				}, {
					id: "photo-20240920-三眼仔-fufu",
					path: "/photos/20240920 1127 - 三眼仔 FUFU.jpg",
					type: "image",
					title: "三眼仔 FUFU",
					createdAt: "2024-09-20",
					year: 2024,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "三眼仔 FUFU"
					}
				}, {
					id: "photo-20241008-自拍",
					path: "/photos/20241008 2054 - 自拍.jpg",
					type: "image",
					title: "自拍",
					createdAt: "2024-10-08",
					year: 2024,
					nodeIds: ["photo", "life"],
					detail: {
						description: "自拍"
					}
				}, {
					id: "photo-20250223-滑雪服",
					path: "/photos/20250223 - 滑雪服.jpg",
					type: "image",
					title: "滑雪服",
					createdAt: "2025-02-23",
					year: 2025,
					nodeIds: ["photo", "life"],
					detail: {
						description: "滑雪服"
					}
				}, {
					id: "photo-20250523-doudash",
					path: "/photos/20250523 1325 - DouDash.PNG",
					type: "image",
					title: "DouDash",
					createdAt: "2025-05-23",
					year: 2025,
					nodeIds: ["photo", "dou-photos"],
					detail: {
						description: "DouDash"
					}
				}, {
					id: "photo-20250726-咪咪",
					path: "/photos/20250726 1144 - 咪咪.jpg",
					type: "image",
					title: "咪咪",
					createdAt: "2025-07-26",
					year: 2025,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "咪咪"
					}
				}, {
					id: "photo-20250809-girl",
					path: "/photos/20250809 1203 - GIRL.jpg",
					type: "image",
					title: "GIRL",
					createdAt: "2025-08-09",
					year: 2025,
					nodeIds: ["photo", "life"],
					detail: {
						description: "GIRL"
					}
				}, {
					id: "photo-20260206-宋小宝",
					path: "/photos/20260206 - 宋小宝.JPG",
					type: "image",
					title: "宋小宝",
					createdAt: "2026-02-06",
					year: 2026,
					nodeIds: ["photo", "cats"],
					detail: {
						description: "宋小宝"
					}
				}, 
        
//bio video
        {
					id: "video-20220219-1510-lil-purple-flower",
					path: "/videos/20220219 1510 - lil purple flower.MOV",
					type: "video",
					title: "lil purple flower",
					createdAt: "2022-02-19",
					year: 2022,
					nodeIds: ["video"],
					detail: {
						description: "A short example video from the public videos folder."
					}
				}, {
					id: "video-20241224-0554-兜堡日常-vol1",
					path: "/videos/20241224 0554 - 兜堡日常 Vol.1.MP4",
					type: "video",
					title: "兜堡日常 Vol.1",
					createdAt: "2024-12-24",
					year: 2024,
					nodeIds: ["video"],
					detail: {
						description: "A short daily-life video from the public videos folder."
					}
				}, {
					id: "video-20230324-虎口脱险",
					path: "/videos/20230324 - 虎口脱险.MP4",
					type: "video",
					title: "虎口脱险",
					createdAt: "2023-03-24",
					year: 2023,
					nodeIds: ["video"],
					detail: {
						description: "虎口脱险"
					}
				}],
//bio end        
        
//bio start [about search sitemap writing label album ....]
				mGlobal = [{
					id: "about",
					parentId: null,
					title: "About",
					symbol: "\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB",
					icon: "about",
					kind: "section",
					order: 0,
					presentation: "folder-grid",
					visual: {
						symbol: "\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB",
						coverAssetId: "drawing-20250531-海边",
						folderPreset: "neutral"
					},
					detail: {
						description: "𝒷 | blog in / out",
						coverAssetId: "drawing-20250531-海边"
					}
				}, {
					id: "search",
					parentId: null,
					title: "Documents",
					symbol: "\uD83D\uDDC3️",
					icon: "search",
					kind: "section",
					order: 1,
					presentation: "folder-grid",
					visual: {
						symbol: "\uD83D\uDDC3️",
						folderPreset: "neutral"
					},
					detail: {
						description: "Here are all kinds of stuff I made, my exploration and attempts to be creative. They are clumsy, nevertheless creative."
					}
				}, {
					id: "sitemap",
					parentId: null,
					title: "Downloads",
					symbol: "\uD83E\uDE8E",
					icon: "download",
					kind: "section",
					order: 2,
					presentation: "folder-grid",
					visual: {
						symbol: "\uD83E\uDE8E",
						folderPreset: "sakura"
					},
					detail: {
						description: "A future place for references, links, tools, and visual notes."
					}
				}, {
					id: "~",
					parentId: "search",
					title: "Writing",
					kind: "category",
					order: 3,
					presentation: "file-list",
					visual: {
						symbol: "W",
						folderPreset: "neutral"
					},
					detail: {
						description: "Markdown writing lives in public storage but is presented as authored.",
						coverAssetId: "writing-harbor",
						eyebrow: "Collected writing"
					}
				}, {
					id: "label",
					parentId: "search",
					title: "All Catalog",
					kind: "category",
					order: 0,
					presentation: "stack",
					visual: {
						symbol: "D",
						coverAssetId: "drawing-20240917-peeps",
						folderPreset: "amber",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20240906-dou-family-wedding-day", "drawing-20220608-去超市", "drawing-20221229-0040-兜兜叽和包包叽"]
					},
					detail: {
						description: "To capture, and to express. Drawings across tools. ",
						coverAssetId: "drawing-20240917-peeps",
						eyebrow: "Drawing series",
						medium: "Pixel, marker, pencil, oil pastel, iPad"
					}
				}, {
					//id: "album",
          id: "-",
					parentId: "search",
					title: "Photo Album",
					kind: "category",
					order: 1,
					presentation: "file-list",
					visual: {
						symbol: "A",
						coverAssetId: "drawing-20250531-海边",
						folderPreset: "sakura",
						folderContent: "photos",
						decorationAssetIds: ["photo-20250809-girl", "photo-19700101-宋小宝失了智", "video-20241224-0554-兜堡日常-vol1"]
					},
					detail: {
						description: "The details of albums can be shaped once the drawing architecture is stable."
					}
				}, {
					id: "!",
					parentId: "search",
					title: "Projects",
					kind: "category",
					order: 2,
					presentation: "projects-shelf",
					visual: {
						symbol: "P",
						folderPreset: "ocean",
						folderContent: "project"
					},
					detail: {
						description: "Projects I’ve made and kept returning to, shared through the notes, images, and details that matter to each one."
					}
				}, 
        
        {id:"allgood",parentId:"!",title:"It's ALL GOOD.",kind:"group",order:5,presentation:"project",visual:{symbol:"A",folderPreset:"sakura"},detail:{description:"An ongoing project to shape a delightful perspective of my own, starting with a selection from designer brands I love."}},{id:"talktonft",parentId:"!",title:"talktonft.ai",kind:"group",order:4,presentation:"project",visual:{symbol:"N",folderPreset:"indigo"},detail:{description:"An AI experiment that let anyone chat with a public NFT, with a roadmap for creators, owners, and communities to shape its character and world."}},{id:"doudou",parentId:"!",title:"DOU",kind:"group",order:3,presentation:"project",visual:{symbol:"D",folderPreset:"amethyst"},detail:{description:"A collection of pictures I made from moments in our life that I wanted to remember."}},{id:"peeps-online",parentId:"!",title:"peeps online",kind:"group",order:2,presentation:"project",visual:{symbol:"P",folderPreset:"ocean"},detail:{description:"A Web3 identity world my friends and I imagined around a growing cast of characters—and where I first became 3n4."}},{id:"ens-l2-zksync",parentId:"!",title:"ENS Layer 2 Support for zkSync",kind:"group",order:1,presentation:"project",visual:{symbol:"E",folderPreset:"ocean"},detail:{description:"The first ENS L2 support showcase with zkSync—record updates had roughly 130× lower gas fees and confirmed faster than on L1."}}, 
        
        {
					id: "turnips-exchange",
					parentId: "!",
					title: "webpack.data — The ACNH Community",
					kind: "group",
					order: 0,
					presentation: "project",
					visual: {
						symbol: "T",
						folderPreset: "matcha"
					},
					detail: {
						description: "A two-day turnip price tracker that grew into Link, an ACNH community used by 100k+ people across 143 countries."
					}
				}, {
					id: "lbl-name",
					parentId: "label",
					title: "Label-Name",
					kind: "group",
					order: 0,
					presentation: "collection-filter",
					visual: {
						symbol: "P",
						coverAssetId: "drawing-20240917-peeps",
						folderPreset: "ocean",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20240914-crh-n-dz", "drawing-20240917-peeps", "drawing-20250503-palisades-dou"]
					},
					detail: {
						description: "Small pixel pieces and repeatable character collections.",
						coverAssetId: "drawing-20240917-peeps"
					}
				}, {
					id: "acrylic-marker",
					parentId: "label",
					title: "Acrylic Marker",
					kind: "group",
					order: 1,
					presentation: "file-list",
					visual: {
						symbol: "M",
						coverAssetId: "drawing-20240123-2012-丙烯马克笔临摹-小黑猫",
						folderPreset: "matcha",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20240131-1710-丙烯马克笔临摹-麦门", "drawing-20240121-1606-卡皮巴拉麦当劳", "drawing-20240125-2359-线稿"]
					},
					detail: {
						description: "A group can have its own detail when there is a useful story to tell.",
						coverAssetId: "drawing-20240123-2012-丙烯马克笔临摹-小黑猫"
					}
				}, {
					id: "colored-pencil",
					parentId: "label",
					title: "Colored Pencil",
					kind: "group",
					order: 2,
					presentation: "collection-filter",
					visual: {
						symbol: "C",
						coverAssetId: "drawing-2021-公寓活动中心-1",
						folderPreset: "amber",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20220714-客厅", "drawing-20231109-1725-照片一张", "drawing-20220622-猫睡"]
					},
					detail: {
						description: "Pencil is my favorite cuz it's most tolerant.",
						coverAssetId: "drawing-2021-公寓活动中心-1"
					}
				}, {
					id: "ipad",
					parentId: "label",
					title: "iPad",
					kind: "group",
					order: 3,
					presentation: "collection-filter",
					visual: {
						symbol: "I",
						coverAssetId: "drawing-20201119-0633-zzm",
						folderPreset: "graphite",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20230410-1813-照片练习", "drawing-20221228-1717-玩手机", "drawing-20220403-闲坐"]
					},
					detail: {
						description: "Digital drawings and iPad sketches.",
						coverAssetId: "drawing-20201119-0633-zzm"
					}
				}, {
					id: "oil-pastel",
					parentId: "label",
					title: "Oil Pastel",
					kind: "group",
					order: 4,
					presentation: "file-list",
					visual: {
						symbol: "O",
						coverAssetId: "drawing-20250426-1615-临摹-what-happened-to-all-my-golf-tees",
						folderPreset: "terracotta",
						folderContent: "photos",
						decorationAssetIds: ["drawing-20260212-0057-喉糖", "drawing-20260219-2245-快冷没了", "drawing-20260212-0047-普通苹果"]
					},
					detail: {
						description: "Oil pastel studies.",
						coverAssetId: "drawing-20250426-1615-临摹-what-happened-to-all-my-golf-tees"
					}
				}, {
					id: "photo",
					parentId: "-",
					title: "Photo",
					kind: "group",
					order: 0,
					presentation: "collection-filter",
					visual: {
						symbol: "P",
						folderPreset: "amber",
						folderContent: "photos",
						decorationAssetIds: ["photo-20210516-colindale-by-kiki", "photo-20220116-part-time-theater", "photo-20220113-宋小宝小时候"]
					},
					detail: {
						description: "Moments of my life."
					}
				}, {
					id: "cats",
					parentId: "photo",
					title: "Cats",
					kind: "collection",
					order: 0,
					presentation: "file-list",
					visual: {
						coverAssetId: "photo-20260206-宋小宝",
						collectionDisplay: "cover",
						folderPreset: "terracotta"
					},
					detail: {
						description: "宋小宝, 咪咪, 三眼仔, and the rest of the household.",
						coverAssetId: "photo-20260206-宋小宝"
					}
				}, {
					id: "dou-photos",
					parentId: "photo",
					title: "DOU",
					kind: "collection",
					order: 1,
					presentation: "file-list",
					visual: {
						coverAssetId: "photo-20230601-新婚夫妇",
						collectionDisplay: "cover",
						folderPreset: "sakura"
					},
					detail: {
						description: "The photos behind the DOU figures — the proposal print and the wedding.",
						coverAssetId: "photo-20230601-新婚夫妇"
					}
				}, {
					id: "life",
					parentId: "photo",
					title: "Life",
					kind: "collection",
					order: 2,
					presentation: "file-list",
					visual: {
						coverAssetId: "photo-20250223-滑雪服",
						collectionDisplay: "cover",
						folderPreset: "ocean"
					},
					detail: {
						description: "Places, people, and moments that did not fit anywhere else.",
						coverAssetId: "photo-20250223-滑雪服"
					}
				}, {
					id: "video",
					parentId: "-",
					title: "Video",
					kind: "group",
					order: 1,
					presentation: "file-list",
					visual: {
						symbol: "V",
						folderPreset: "indigo",
						folderContent: "photos",
						decorationAssetIds: ["video-20220219-1510-lil-purple-flower", "video-20241224-0554-兜堡日常-vol1"]
					},
					detail: {
						description: "Wisdom: buy a phone with insane amount of storage so you can take as many photos and videos as you possibly can."
					}
				}, {
					id: "music",
					parentId: "-",
					title: "Music",
					kind: "group",
					order: 2,
					presentation: "file-list",
					visual: {
						symbol: "M",
						folderPreset: "amethyst"
					},
					detail: {
						description: "A place for singing once recordings are ready."
					}
				}, {
					id: "peeps",
					parentId: "lbl-name",
					title: "peeps",
					kind: "collection",
					order: 0,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20240917-peeps",
						collectionDisplay: "cover",
						folderPreset: "ocean"
					},
					detail: {
						description: "Peeps behaves as a mutually exclusive collection filter within Label-Name.",
						coverAssetId: "drawing-20240917-peeps"
					}
				}, {
					id: "palisades",
					parentId: "lbl-name",
					title: "Palisades",
					kind: "collection",
					order: 1,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20250503-palisades-dou",
						collectionDisplay: "cover",
						folderPreset: "sakura"
					},
					detail: {
						description: "Palisades behaves as a mutually exclusive collection filter within Label-Name.",
						coverAssetId: "drawing-20250503-palisades-tao"
					}
				}, {
					id: "dou",
					parentId: "lbl-name",
					title: "DOU",
					kind: "collection",
					order: 2,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20240906-dou-family-wedding-day",
						collectionDisplay: "cover",
						folderPreset: "matcha"
					},
					detail: {
						description: "DOU behaves as a mutually exclusive collection filter within Label-Name.",
						coverAssetId: "drawing-2024-dou"
					}
				}, {
					id: "practice",
					parentId: "ipad",
					title: "练习",
					kind: "collection",
					order: 0,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20210103-1612-练习",
						collectionDisplay: "cover",
						folderPreset: "neutral"
					},
					detail: {
						description: "练习 behaves as a mutually exclusive collection filter within iPad.",
						coverAssetId: "drawing-20210103-1612-练习"
					}
				}, {
					id: "ipad-dou",
					parentId: "ipad",
					title: "DOU",
					kind: "collection",
					order: 1,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20221229-0040-兜兜叽和包包叽",
						collectionDisplay: "cover",
						folderPreset: "matcha"
					},
					detail: {
						description: "DOU behaves as a mutually exclusive collection filter within iPad.",
						coverAssetId: "drawing-20221229-0040-兜兜叽和包包叽"
					}
				}, {
					id: "not-well",
					parentId: "colored-pencil",
					title: "NOT WELL",
					kind: "collection",
					order: 0,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20220621-not-feeling-well-1",
						collectionDisplay: "cover",
						folderPreset: "ocean"
					},
					detail: {
						description: "NOT WELL behaves as a mutually exclusive collection filter within Colored Pencil.",
						coverAssetId: "drawing-20220621-not-feeling-well-1"
					}
				}, {
					id: "cat-sofa",
					parentId: "colored-pencil",
					title: "Cat & Sofa",
					kind: "collection",
					order: 1,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20220609-沙发上",
						collectionDisplay: "cover",
						folderPreset: "sakura"
					},
					detail: {
						description: "Cat & Sofa behaves as a mutually exclusive collection filter within Colored Pencil.",
						coverAssetId: "drawing-20220609-沙发上"
					}
				}, {
					id: "friends",
					parentId: "lbl-name",
					title: "Friends",
					kind: "collection",
					order: 3,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20240914-crh-n-dz"
					},
					detail: {
						description: "As gifts to friends."
					}
				}, {
					id: "copies",
					parentId: "acrylic-marker",
					title: "Copies",
					kind: "collection",
					order: 0,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20240131-1710-丙烯马克笔临摹-麦门"
					},
					detail: {
						description: "How I started practicing. Thanks to everyone who kindly shared tutorials."
					}
				}, {
					id: "perspective",
					parentId: "colored-pencil",
					title: "Perspective",
					kind: "collection",
					order: 2,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20220608-去超市"
					},
					detail: {
						description: "Myself from my eyes."
					}
				}, {
					id: "by-dou",
					parentId: "colored-pencil",
					title: "by DOU",
					kind: "collection",
					order: 3,
					presentation: "file-list",
					visual: {
						coverAssetId: "drawing-20240129-2330-结婚照-by-dou"
					},
					detail: {
						description: "I force DOU to draw with me sometimes."
					}
				}]
//bio end


//bio BlurDataURL copy paste move here 
      var iBlurDataURL = {
					"/assets/3n4.png": {
						width: 460,
						height: 460,
						blurDataURL: "data:image/webp;base64,UklGRhQBAABXRUJQVlA4WAoAAAAQAAAACwAACwAAQUxQSHQAAAABgFrbtqtq3fvIGWqgh4ymAVS0KCwDFRWSMmiCMrKCH2t4cYvbRERMAGAMYHENhdGxhwUM1YuSeI4Fj40CX18NjKX1r1hJ1MXzWCiSYk2doZQo0sGZKZZCnZyxIueMTbFUmCjWCmtorq/Sa5AFDMW79C5gAFZQOCB6AAAAcAIAnQEqDAAMAAOAWiWwAnQSX9Z69p3wPLzEAAD+6gpaobFYH6flVsmDUqtikzxmYV3PyTdIotJ66Y3X4n5FW8zpRS1eqBOsPwNhuZzvU9PFcmXKBw+q/NVsn2tdHGHIIRrrN5fILAXEY8vgbVNVKYbt/vl6eqoAAAA="
					},
					"/assets/DOUBAO.png": {
						width: 500,
						height: 500,
						blurDataURL: "data:image/webp;base64,UklGRgABAABXRUJQVlA4WAoAAAAQAAAACwAACwAAQUxQSHcAAAABgB3ZtmlrXNu2bdu2fX/vyz+H84KIiAkAg1+DSCQCLC63Sp4NSACiOkit+jstIkSIqCYX24xAJKL4e83uQQnC7V94e8ypBfpwvjRKdREByvY5rZyU/pGHGxd/TIRQdqlFvT0tIkQ4vinNt4FGDKhDOkPYKM2lAQBWUDggYgAAAPABAJ0BKgwADAADgFolpAAPjGtDT8NZwAD+0OUtUuDm5FEeCIBJOHICeqjkdXroXzr/kBZTnQxIuH2jaO1p0q2SjJhTud0DaEaDfzkOJt6tC/6iP7vu+YvU5kZJgFEL8MAA"
					},
					"/images/20201119 0633 - ZZM - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAwAA4BaJYwCdADy1lwAAP7e72uBYbc9Hcnat8cjoMf+DZRoaM7J3iAAAA=="
					},
					"/images/20201119 0833 - 办公室 - iPad.jpg": {
						width: 2732,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoMAAkAA4BaJbACdAEPAjnmOwwAAP7yWnR6L2kpDkyqvswWgFepA4P6pqIGfSfuaQz2RfitnnUD0qlEOfIAAA=="
					},
					"/images/2021 - 公寓活动中心 1 - Pencil.jpg": {
						width: 1258,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAwCdASoMABcAPu1iqk4ppaQiMAgBMB2JaQAAW7x/kWnvQOU2eHwAAP7nrEWRR045MRw4NIeNoaS8gCbScucn6rLT6yHuecMa5sR5/qokLqRt0yqywgAA"
					},
					"/images/2021 - 公寓活动中心 2 - Pencil.jpg": {
						width: 1264,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAwCdASoMABcAPu1mq04ppaQiMAgBMB2JaQAAW7nC/9B5WH8fAAD+6vMD0CFogW7qNGYWsxqavhbz/xkKUf0PmAAAAA=="
					},
					"/images/2021 - 公寓活动中心 3 - Pencil.jpg": {
						width: 2400,
						height: 1264,
						blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAACQAQCdASoLAAYAA4BaJaQAAudGFIAA/vU0WaqkpYAAAA=="
					},
					"/images/2021 - 办公空间 - Pencil.jpg": {
						width: 2400,
						height: 1264,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoLAAYABIBaJaQAA3AA/vS1xAAAAA=="
					},
					"/images/2021 - 同事 - Pencil.jpg": {
						width: 1264,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAABwAwCdASoMABcAPu1iqU2ppaOiMAgBMB2JaQAAW+k5/4BM7IAA/u2wsBOIoAq2bRBQGPXXkK1eTG40QYpFpQXSHvnb0QAAAAA="
					},
					"/images/2021 - 梦 - Pencil.jpg": {
						width: 2400,
						height: 1264,
						blurDataURL: "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACwAQCdASoLAAYAA4BaJaQAAudkIIDAAP72WNoLakpAAAAA"
					},
					"/images/20210103 1612 - 练习 - iPad.png": {
						width: 2732,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAkAA4BaJaQAAp06oTwAAP70Egu4i950Xdf4eOSZxhgQVNBn/N68kdYAAAAA"
					},
					"/images/20220225 - 裸女 - Label-Name.PNG": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoMAAwAA4BaJaQAAudPjMAA/viuLrMbKz/g9sAAAAA="
					},
					"/images/20220225 - 齐天大圣 - Label-Name.PNG": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAwAA4BaJZwAAuddTVTgAP74ri/cdPqFttqruAAAAA=="
					},
					"/images/20220309 0633 - gyy hbd - Label-Name.png": {
						width: 520,
						height: 520,
						blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoMAAwAA4BaJQBOgCFfIt8oHAjwANvyGhdbUVR8TyoG29L8ptbhu/L7tew6dm6Gl0mYNJZmAfmoIQZ0pTiei96qfa72TiAydPJeHnwuAAA="
					},
					"/images/20220309 1833 - gyy hbd back - Label-Name.png": {
						width: 520,
						height: 520,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoMAAwAA4BaJZwAAudfJ7mZUAD+8L36m4jK7iL6z/M5qHxsEdQcAA=="
					},
					"/images/20220319 1246 - f2kworld - Label-Name.png": {
						width: 2420,
						height: 4e3,
						blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAgCdASoMABQAPu1kqU2ppaQiMAgBMB2JaQAAerKKwAD+8MD2GhlMjwFBQnzJdooxc+RBAAAAAA=="
					},
					"/images/20220403 - 闲坐 - iPad.PNG": {
						width: 1800,
						height: 1200,
						blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoMAAgAA4BaJaQAAp10V+4AAP72Qtd1yBN6RQYqDeiaU1F44WBZeT10vh4g9QpF2sf3CSoAAAA="
					},
					"/images/20220407 - 学画画 - iPad.PNG": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwAgCdASoMAAwAA4BaJYwCdAYu5yBfMAMqBlgAAP7eNVq9IEed3Z+iYcSwHQHUGC3EOagsi+PFZ5p7HWeWsmpWg6donybeL2kyjMDioEWqvv0UnrR3z1+FTAl4Dc4AAAA="
					},
					"/images/20220525 2343 - 猫睡 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAQCdASoMAAwAA4BaJYgCdADbI3qyEAAA+GFGyqvoMqO7y4sOz3cvLkXlHZSvlE+Mp8S7AJ0/wdqyPYJjomkRky/3lDOi1o+75dIwY6Mk3HDk0yhgXvS+EnETDXvAAAA="
					},
					"/images/20220608 - 0027AM - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAABwAQCdASoMABAAA4BaJaWDrAGIAAD+9LY1Rygl1h1SGvXBu2AAAA=="
					},
					"/images/20220608 - 去超市 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoMABAAA4BaJaQAA3AA/vRIrbfw53+sKOwP3owz5MgAAA=="
					},
					"/images/20220609 - 办公室 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTo0F9R9qAA"
					},
					"/images/20220609 - 沙发上 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTeW8AAAA=="
					},
					"/images/20220610 - 猫 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoMABAAA4BaJaQAA3AA/vUVk7K5AAAA"
					},
					"/images/20220621 - NOT FEELING WELL 1 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoMABAAA4BaJaQAA3AA/vS0Y+h0WZpqAAA="
					},
					"/images/20220621 - NOT FEELING WELL 2 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoMABAAA4BaJaQAA3AA/vSorHJnFgmAAAA="
					},
					"/images/20220621 - 打乒乓 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTp7oAAAA=="
					},
					"/images/20220622 - 在想什么 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoMABAAA4BaJaQAA3AA/vR17UqOLBhfAAA="
					},
					"/images/20220622 - 猫睡 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAAAwAQCdASoMABAAA4BaJaQAA3AA/vR1pH1ChEtzRZ5IAAAA"
					},
					"/images/20220627 - 傍晚在沙发上小憩睡来后独自坐在公寓沙发上等待自己清醒 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoMABAAA4BaJaQAA3AA/vRyYcU7PfdbZm4NGzZB3WAAAA=="
					},
					"/images/20220628 - 射箭 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoMABAAA4BaJZQAA3AA/vTp9bwcHE6EAAA="
					},
					"/images/20220628 - 路过 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoMABAAA4BaJaQAA3AA/vR+AfvpIEAAAAA="
					},
					"/images/20220629 - 猫 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTeIAAAAA=="
					},
					"/images/20220702 2337 - 草稿 - Colored Pencil.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vTcPgAAAA=="
					},
					"/images/20220704 0052 - 歪口罩 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoMABAAA4BaJaQAA3AA/vS0ZBVYhN6AxAAAAA=="
					},
					"/images/20220704 0056 - 猫 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTeIAAAAA=="
					},
					"/images/20220707 0111 喉咙不舒服 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoMABAAA4BaJaQAA3AA/vR1pFDFOAAA"
					},
					"/images/20220707 0130 喉咙 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAABQAQCdASoMABAAA4BaJZwABAAAAP71DaDgAA=="
					},
					"/images/20220708 1520 - untitled - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTozyAAAA=="
					},
					"/images/20220708 2202 - 家人照片一张 - iPad.jpg": {
						width: 1800,
						height: 1200,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAgAA4BaJaQAAueCe7lgAP7uO6Khr2b/zsTiw+uxwJgr31zBHMNrxXqIAAAA"
					},
					"/images/20220710 1458 - 观音殿 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoMABAAA4BaJZQAA3AA/vUOXvhdgAAA"
					},
					"/images/20220711 2231 - 屋顶 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoMABAAA4BaJaQAA3AA/vRIJe7dImHCuMjQ2ksAAAA="
					},
					"/images/20220712 - 草稿 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTcicAAAA=="
					},
					"/images/20220713 0010 - メロディー - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoMABAAA4BaJZwAAueEtCGTgAD+9/rliNjRBwhc7yBEz9aC4HgAAA=="
					},
					"/images/20220714 - 下馆子 - Pencil.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vSAOHkN5sdvQwUKzAHgAAA="
					},
					"/images/20220714 - 客厅 - Pencil.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vTozyAAAA=="
					},
					"/images/20220714 - 客厅一角 - Pencil.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vTpzgpgAA=="
					},
					"/images/20220714 - 桌上 - Pencil.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vThWIAAAA=="
					},
					"/images/20220714 - 草稿 - Pen.jpg": {
						width: 1560,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAgCdASoMABIAPu1iqU2ppaQiMAgBMB2JaQAAeyAA/vCtE5Gu5pRtl3IjQAAA"
					},
					"/images/20220730 1925 - 唱歌课 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoMABAAA4BaJaQAA3AA/vUIAAA="
					},
					"/images/20221228 1649 - 车里 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoMAAwAA4BaJZQC7ADdkzYD1VIA/vXdTbSO944j6Zchj33wlFkG7/4MHMXvI2eMIG2xAndXgCE2t8B6k0ylqVgZL0RVKbgwAAA="
					},
					"/images/20221228 1717 - 玩手机 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoMAAwAA4BaJaQAAueKAHwAAP7x66kSTzNyOeCpgggitalnrKAZOJBpcRbdSwqUns78/x26IDQmGgAA"
					},
					"/images/20221228 1724 - 猫 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoMAAwAA4BaJaQAAudUwMAA/vivwsqFHV1U7Kr2XAAAAA=="
					},
					"/images/20221229 0040 - 兜兜叽和包包叽 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vOYTmet+36h7hHa2bawWBe7Es5ZEiT/ryjCpeQAAA=="
					},
					"/images/20221230 0146 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vSsrecq54m0AujDgk6ab7+vO5tgAAA="
					},
					"/images/20221230 0150 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoMAAwAA4BaJaQAAvafLJIsAAD++Lg8NOp/rCq+62NBbvO7pAAAAA=="
					},
					"/images/20221230 0153 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoMAAwAA4BaJaQAAudgBo2nAAD++LgUWMgAIam4YjP8AAAA"
					},
					"/images/20221230 0156 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoMAAwAA4BaJaQAAtz9w+egAAD++Llvnp/O20W9qP2j1h7JXOwpMAAA"
					},
					"/images/20221230 1601 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vS2KYhdm2ap4XuRDeEAAAA="
					},
					"/images/20221230 1607 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoMAAwAA4BaJaQAAltIoAwAAP74umZt6wmTWHOpU1ItFegvuqD88jQAAAA="
					},
					"/images/20221230 1619 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoMAAwAA4BaJaQAAtz3kqVpYAD++Lluu1//AK+K1ow4RMOjtZxTIo5+QAAAAA=="
					},
					"/images/20221231 0116 - 迪士尼照片 1 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoMAAwAA4BaJaQAAueIR8FQAAD+9/u68hIHZTY+/sdi1rkeBAAAAA=="
					},
					"/images/20221231 0156 - 迪士尼照片 2 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoMAAwAA4BaJaQAAudlKaHIAAD++BW08fjsrFqe1RZtI7m9gn6nsAAA"
					},
					"/images/2023 - 兜宝 - iPad.jpg": {
						width: 2732,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMAAkAA4BaJaQAA3AA/vRGMnxYAA=="
					},
					"/images/20230103 0206 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoMAAwAA4BaJaQAAueFT0cAAP74uBUcXfeUH6nvV/fHPLy5AAAAAA=="
					},
					"/images/20230103 0217 - 兜宝 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAwAA4BaJaQAAtz222cYAP74uiJmdsma6nftd2mDkGmD0We1T/mIqAAAAA=="
					},
					"/images/20230116 1307 - 练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoMAAwAA4BaJaQAAsf3O+qAAP74umj9hYDdNfi1b1DOEKvwuAu3wLwpnjJF3JVkAAA="
					},
					"/images/20230116 1314 - 兜宝打电脑 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoMAAwAA4BaJaQAAudR2EDAAP736cmWOw5s6P7ramxVw4zjIMEAAAAA"
					},
					"/images/20230410 0103 - DOU - iPad.jpg": {
						width: 1908,
						height: 1908,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoMAAwAA4BaJaQAAwcKKNfk4AD+91wcEg+RhaPukXvbzEjBR/EjBeWqOceOnX7Hos6uRJ73EDyE0AAA"
					},
					"/images/20230410 1805 - 照片练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACQAQCdASoMAAwAA4BaJZwAAltQJwAA/vi0Ny1Yr52tLE3e9fwzZP8UEO45JGvNpl1xQVJIjVafnx7C06vGeb/zoAAAAA=="
					},
					"/images/20230410 1813 - 照片练习 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoMAAwAA4BaJZwAAudNTpGUAAD++LBUaWElBu3xLMY28njNLlWRUI6iAfzLhw44fOYtU45IJPnJtbZkOi6sv9QKe+AAAA=="
					},
					"/images/20230503 0121 - 床 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoMAAwAA4BaJaV2AAGIAAD+8gpTMKS8o6cYL6deKqYtx3/ZdK/gAA=="
					},
					"/images/20231109 1725 - 照片一张 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAABwAQCdASoMABAAA4BaJaV2AAGIAAD+9EU5qKeFydgSWx9BSvAAAA=="
					},
					"/images/20231210 2155 - 坐着 by DOU - Colored Pencil.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoMABAAA4BaJaQAAudVa7pAAAD++K4s1hkzLurx9mUz8xL+xSy+7gAA"
					},
					"/images/2024 - DOU - Label-Name.png": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABwAQCdASoMAAwAA4BaJaWDrAGIAAD+9IARzYk1o8PXZaBCygYegAAA"
					},
					"/images/2024 - DOU Family - Label-Name.png": {
						width: 4090,
						height: 2730,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoMAAgAA4BaJaQAAudmXFlFQAD+9knD61mqQmEg6tmTVZGYtZEWgAAA"
					},
					"/images/2024 - DOU 模版改 - Label-Name.png": {
						width: 640,
						height: 640,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoMAAwAA4BaJZQAAqHU7PQAAP7rvNUWnPhMz98JidUOLZlt8NZhMgUrEqduOCeMeP0z6ltrJCmu5AhqgAHgOLivAAA="
					},
					"/images/2024 - 副驾 - Acrylic Marker.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoMAAwAA4BaJZQAAtz/wiPLYAAA/u5qwN+aqWSNGRC5uxK5hrBunRuKdj3TK5h4JiUNEmX8++p1P9KeWFDzGVXOFcLLKCr5dvxajHYPwAA="
					},
					"/images/20240121 0720 - 丙烯马克笔临摹 线条小狗每天快乐 - Acrylic Marker.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoMABAAA4BaJagCdAERH2VIjdL1WrAA/vc+FCf6x978JeS5pEAbhTBmllyp5HYMLNPhT5eKPgo7RESatirA21iryX7WKttwLSGhVDUgjP5ds4PHM2uHAAAA"
					},
					"/images/20240121 1606 - 卡皮巴拉麦当劳 - Acrylic Marker.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwAgCdASoMABAAA4BaJbACdDiAN4zBjsYMPr2gAP73PogXJUhBAwh1nlhBAw4nAyO7FKBR2vKfW0K9QhsIY1VxEhjJCwuIb0i5SJfcvjuoKgVzy2c1HxRcGvfa00qAAAA="
					},
					"/images/20240122 1559 - 丙烯马克笔临摹 小狗检察官 - Acrylic Marker.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoMABAAA4BaJbACdDBUAZB72ZUAAP72alQiOtJZsViD8eSwYnAXPi00Jul1u3GizX0t+1yOR9Lz/dp78f5EN08CfHs/zmW+/kdRR9u/BspXUBqrjqZKaO0AAAA="
					},
					"/images/20240123 2012 - 丙烯马克笔临摹 小黑猫 - Acrylic Marker.jpg": {
						width: 2400,
						height: 1765,
						blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAQCdASoMAAkAA4BaJZwAAbG7/gAA/vi5MVjD95Fxj6kj8w9WMpFtfSiwWHxBdbC40+JM9gmhcfOjKDeARxQAAAA="
					},
					"/images/20240124 0112 - 丙烯马克笔临摹 和小狗一起入睡 - Acrylic Marker.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoMABAAA4BaJYwCdAEO9tLzaw8AAP74GXEV90fuwPVFpdOD8TGkNvDZs13Qf5Kb/CF3Emu4bS17gAAA"
					},
					"/images/20240124 1730 - 丙烯马克笔临摹  和小狗一起蹦蹦跳跳 - Acrylic Marker.jpg": {
						width: 1765,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMABAAA4BaJZQAAveI09hUhDwA/vf9xWiCGN7zdnrefnGip+jsDp9u6+5ZrtK+4ggechiOq/Alhj5S95QoXtyBwAA="
					},
					"/images/20240125 2359 - 线稿 - Acylic Marker.jpg": {
						width: 2400,
						height: 1765,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoMAAkAA4BaJaQAA3AA/vSARZxRJi/odnA1Yei3PAAAAA=="
					},
					"/images/20240129 2330 - 结婚照 by DOU - Pencil.jpg": {
						width: 2400,
						height: 1765,
						blurDataURL: "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAAAwAQCdASoMAAkAA4BaJaQAA3AA/vSsQRB7WeQZJ+z+mAAA"
					},
					"/images/20240131 1710 - 丙烯马克笔临摹 麦门 - Acrylic Marker.jpg": {
						width: 2400,
						height: 1765,
						blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAQAgCdASoMAAkAA4BaJZQAAt4+5nQLGRIAAP73Pp2LfD8yV+Oyf4viQAV5cG4YM/gprknxtOMAX7698TmgAA=="
					},
					"/images/20240201 - 丙烯马克笔临摹 福 - Acrylic Marker.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoMAAwAA4BaJbACdAEPAsrNaDGAAP6cEw1JGdjlo/zBh40teY2xaaFM7U91NA+oSwz2afCR+wdZitvnCqIgR2W0+l0G64BG5J+UB3e+/8oFXdgPv7Wjx+MpQzxkAAAA"
					},
					"/images/20240311 0117 - 临摹 夏日微风 - Acrylic Marker.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoMAAwAA4BaJbACdLoAAuY7sZAAAP7ZXjv/39a2vmbRSUKmvuayktOHUxSMAKPhdCZhxzwZN1w+zhnMAAA="
					},
					"/images/20240430 2217 - 高速 - Acrylic Marker.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAABwAQCdASoMAAwAA4BaJQAATL57AAD+vml06wepTF3pRBerfXye6w6o4PraRtCGGY6TyMS9BsVcB2VvtssGH8IA"
					},
					"/images/20240825 - DOU - Acrylic Marker.jpg": {
						width: 1200,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADQAwCdASoMABgAPu1iqk2ppaQiMAgBMB2JYwAAYf+6WdH4e1jXAeAA/vIqW0HIHjMhEM4Gh1qD3UmiQ/JpivL8YBkHXhYqvjPb6wJIPAT936YxprY8j2HKElQ4zXYjS0ndfa+qasWzATCWLocyAjQioUH27MTQXgAAAA=="
					},
					"/images/20240825 2123 - 丙烯马克笔临摹 度假 by DOU - Acrylic Marker.jpg": {
						width: 1200,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAAAwBACdASoMABgAPu1iqU2ppaOiMAgBMB2JbACdACKRICVfQhtKPYrw/AAA/vAUeNmz+s71IwAR9UhjG259jmrhEepHJP7PJA15Q9OJ0zH+mZHCWttU3cK6ixA+SEj0w+t3bs8eB/ReVtseXQmrcYvstUKiE/e+nMf9i3v40hzg4SEJfq/KKtf4i3/yFmu/YtsglUe/91060q1AAAA="
					},
					"/images/20240904 - DOU Family Basic - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vTp+S5ql4gctrJNPrbAbQaWJAAA"
					},
					"/images/20240905 - DOU Family Pajamas - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoMAAwAA4BaJZQAAsfaZuxwAP72M9VZAd/ebRpo/1m6/dz4JvDfloPwXDLkrMO5r08XSJf49m4jp1/cDmhFwAAA"
					},
					"/images/20240905 - DOU Family Tshirt - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoMAAwAA4BaJaQAAudQUKWAAP74t+sibAHPRrH0DQlC8AAA"
					},
					"/images/20240906 - DOU Family Singing - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAwAA4BaJaQAAudGUfyQAAD++LgMLAgNGwcG3BeURhzUwTvrXMXPwBWcAAAA"
					},
					"/images/20240906 - DOU Family Wedding Day - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAwAA4BaJQAAXtPuyGAAAP7zfruNU92w9ZEXThJQqS3Myt7/BltsEAAAAA=="
					},
					"/images/20240914 - CRH n DZ - Label-Name.png": {
						width: 3e3,
						height: 3e3,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoMAAwAA4BaJZwAAtz+UAZhoAAA/vcOkxfNl3HMx+KLGVsPWUuOH2y08JSrYAAA"
					},
					"/images/20240914 - DOU Family Wedding - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoMAAwAA4BaJQAAX1vXYL7AAAD+83YTQeNy7g8lQqac+3qzPh+DLbYIAAA="
					},
					"/images/20240917 - gyh - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoMAAwAA4BaJZwAAua8TkxAAP71SZ1jhTsN5wVV/ME2t6XG+oX/WVosEW/jw4nRXw1G3GMj8V32IAAA"
					},
					"/images/20240917 - peeps - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoMAAwAA4BaJbACdAEf/r8Q2OAA/uCm51Q7o1OANHYoNz/l/hhh3v3xJH+jHi+/6+t75/eODzpdfn/xQ5s9vHM4NkjSdAAA"
					},
					"/images/20240917 - peeps 3n4 - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoMAAwAA4BaJbACdAD0fl8qQAD+5yPsIMtUIvCainIBU8nGFfIjDqVMUoLP2oQcBXOa23PwMF4u9hHfeEuDcjX36AA="
					},
					"/images/20240917 - peeps arron - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMAAwAA4BaJagCdAELX8w9vgAA/uc222nLTh/2ww+PlQUJvekE0IzVG9xAHxQgj0U70yMIP+LuxHjApOWZw138AAA="
					},
					"/images/20240917 - peeps assen - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMAAwAA4BaJbACdAD0ihVwwwAA/udAm6BoJgt1qjnxFSYMvc/8zmCenHexZpQIEhob8H4u7EeMCk5ZnDXfwAAA"
					},
					"/images/20240917 - peeps astro - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoMAAwAA4BaJagCdADc+uwpAAD+50F1fH9+ZuI4VchXHEBl6uPGfTUK9WFvmH8iZkfvypOWZwrz4AAA"
					},
					"/images/20240917 - peeps gyh - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAwAgCdASoMAAwAA4BaJagCdAEXZuuoItQYAAD+50G3wARVDZTPCKHBZv0+ObmNksYeTYyLhxqhT7ec2e3jmcGyRTXYAA=="
					},
					"/images/20240917 - peeps gyy - Label-Name.png": {
						width: 480,
						height: 480,
						blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoMAAwAA4BaJbACdAEO/QkIAAD+5wnejpXfbAbCtIuMplHBUQbEhlVtrbwFHnVHi+LvZBvbxzODcjX36AA="
					},
					"/images/20240919 - XX n ZZ - Label-Name.png": {
						width: 3420,
						height: 3420,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAwAA4BaJYwAAtz4HwwAAP73CO25X2tZuY678WuprDu406f5Tqr8oqxgQAAA"
					},
					"/images/20241011 - Rainie - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoMAAwAA4BaJZwAA3AA/vOZj8IDOURU+EWoltxQAAA="
					},
					"/images/20241012 - Libby n RDC - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoMAAwAA4BaJaQAAuddMngAAP73AqdMrxhUfnPyCsaiRQAA"
					},
					"/images/20241012 - Tianlin - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoMAAwAA4BaJZwAA3AA/vNgmmCfJwGLifY/34IeIN/23FAA"
					},
					"/images/20241102 - CC & Stella - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAwAA4BaJaQAAtz9zbtogIAA/vcQOSNXUPpJDCkpWveBU9FR2N/sT3zc57Z/EzFAAAAA"
					},
					"/images/20241208 1406 - 宝华禅寺 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vSnvRCwAA=="
					},
					"/images/20241209 - 草稿 - Colored Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoMABAAA4BaJaQAA3AA/vUIAAA="
					},
					"/images/2025 - DOU - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoMAAwAA4BaJaQAAudPjMAA/viuLrJkp7xkAAAA"
					},
					"/images/2025 - 圣诞树 - Oil Pastel.jpg": {
						width: 1937,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMAA8AA4BaJQBOj+ADAh4B/0AA/vf7IjUz8RThsp5T0D0Wh/yQxK1q2Z/E5uSY9ywhl8b3UaEmH2r0rqQwAA=="
					},
					"/images/20250315 0019 - 家庭办公室的晚上 - Pencil.jpg": {
						width: 1750,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoMABAAA4BaJaQAA3AA/vTeIAAAAA=="
					},
					"/images/20250315 0028 - 草稿 - Pen.jpg": {
						width: 2314,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoMAAwAA4BaJaQAA3AA/vQNsJSkkgvnZS8IMMLMpIAAAA=="
					},
					"/images/20250426 1615 - 临摹 What happened to all my golf tees - Oil Pastel.jpg": {
						width: 2400,
						height: 1446,
						blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoMAAcAA4BaJaQAAsf0rTPAAP72IUXA3pV4n3/RjHtL0V3SCEX9Gl/wAAA="
					},
					"/images/20250503 - Palisades CC - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoMAAwAA4BaJZwAAueKU8LAAP73CMz0905pJXgwO08e3FAA"
					},
					"/images/20250503 - Palisades DOU - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoMAAwAA4BaJZwAAueIACqaAAD+9wjM9PQqiTkrmMN1fisOAAA="
					},
					"/images/20250503 - Palisades Tao - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoMAAwAA4BaJZwAAueKVVJkAAD+9wjM9PurVZiKvYw3V+LI4AA="
					},
					"/images/20250508 1606 - 不开心人 - iPad.jpg": {
						width: 2048,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAQCdASoMAAwAA4BaJaQAAvmFwo5r8AAA/vgZfbaTpDBloHlTNssOk3nzOZ/TJWWAY6vZ6nIVHWybi856oW+5ZLQYEwsbTg8ZI/kWVAAAAA=="
					},
					"/images/20250508 1624 - SAD FACE - iPad.PNG": {
						width: 2447,
						height: 2088,
						blurDataURL: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoMAAoAA4BaJaQAAxX+/X5mAAD+7bI8cUAmTdLN5fPO3zxyQ2a1SomSdFbWZtkB8A2XfSNgWVFDevnk0mZYcP1CHQ1qDZONDK71gAAA"
					},
					"/images/20250531 - 海边 - Oil Pastel.jpg": {
						width: 1350,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAABQAwCdASoMABUAPu1kqU2ppaOiMAgBMB2JYwAAewiiiDIAAAD+8K1syDg2DmWCcx52lIZqWCkHPYKpYlGnM/oAAAA="
					},
					"/images/20250531 - 花 - Oil Pastel.jpg": {
						width: 1263,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAwCdASoMABcAPu1kq04ppaQiMAgBMB2JYwAAYf+LQ4IbKMkNWbCgAP7wOcag+zdNyOGrDXn4AxSvSp6kwsOoAL6eM7HeKGBOYvDiPTjsO245LHkTiun6ny/R6ikrw9AAAA=="
					},
					"/images/20251231 - Palisades Kang - Label-Name.png": {
						width: 1280,
						height: 1280,
						blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoMAAwAA4BaJZwAAt0NCPYU4AAA/vcI7bMA53K9XVO/YQK6kMSKAAAA"
					},
					"/images/20260212 0047 - 普通苹果 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoMAAwAA4BaJbACw7DbPg8sAAD+9/FTrcM9litLsDfmEcfM2f+YsY9xFgbmRYfO5qIkfv+YqPLDyTdsfyYzJTPUxfq08AAA"
					},
					"/images/20260212 0052 - 临摹 一袋西红柿 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoMAAwAA4BaJQAAW6GUDuPCoAAA/vc5SVvY0V8znW6yRWzvvLe+M78nKrSy57Iq8gLkUcPUPlV6bnhj2BmUw2+UjPc3Bml7KJy6fuNMQAA="
					},
					"/images/20260212 0057 - 喉糖 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoMAAwAA4BaJaAAAuaqgtAwAP735qtEIz9rlBkxbbu3oalo5938eDEUP/5cUeO6HX/gTgAA"
					},
					"/images/20260212 0104 - 西瓜 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoMAAwAA4BaJYwCw7EOOmeMAAD+9yMmq6Mmh0NJ4auHDUX7ul4tnbXrP58KR+3VIrS4DtN/purzD8QW3+v3dABqAAA="
					},
					"/images/20260212 0107 - 香蕉 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAQAgCdASoMAAwAA4BaJbACdAELZN04eYiAAP73KrmoUkEMa4S6HvjSHlZUWCXgJNo8v3Wb+l4TZMRr5uptXApQ59nJzM8BXvRIAA=="
					},
					"/images/20260215 0944 - 一束花 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABwAgCdASoMAAwAA4BaJZACdH8Agpi/01yZTyOAAP73P4zZF1bHaH6mDA+O1ezh4UkrH/jeyO/LtRAPYpKfwparZfpDQNoeWurX8Fm4syLzYAAA"
					},
					"/images/20260219 2245 - 快冷没了 - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoMAAwAA4BaJZAC7AERCFhzGAAA/vZCI7uPERgRoaJ0+JyFX5h1/iwQD7+Wq3zMgwAAAA=="
					},
					"/images/20260421 - USICS - Oil Pastel.jpg": {
						width: 2400,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMAAwAA4BaJaQAAupz/ZSKdaAA/mAtY0SMOr53LvtTdLv5bDppgeXy9lgqduI7latTp8uhuYiPE8ZLwAAAAA=="
					},
					"/images/20260519 2243 - 加班 - Pencil.jpg": {
						width: 1264,
						height: 2400,
						blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAwCdASoMABcAPu1kqU2ppaQiMAgBMB2JaQAAW+i8FJAA/urzA9Act96BJSsh/4b9ffzGsUDgAA=="
					},
					"/photos/19700101 - 3n4 peeps by gyy.PNG": {
						width: 1024,
						height: 1024,
						blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAwAA4BaJbACdADc+iIwAP7e6vyOE/dK01u1AdTVcW1HtlAnrfvAdi8iuoAA"
					},
					"/photos/19700101 - DOU Wedding 3D Print.JPG": {
						width: 1152,
						height: 2048,
						blurDataURL: "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACQAwCdASoMABUAPu1iqU2ppaOiMAgBMB2JQBOgBDwLmaq70mQcAP7acsAmNrLkDHpxBFB43mXw0RM0aM+g0PjxdD7xTAH0C3QDNrWHrR8+huKzflh4pli+a1aHA+PwoC/3ubGHfeTlNwFa43r84JrUwMY42Yh8VJtKhyDKJdjFPF4AAAA="
					},
					"/photos/19700101 - DOU 婚礼款.JPG": {
						width: 1900,
						height: 1600,
						blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoMAAoAA4BaJaAAD5AxZpzFJC/AAP5rEBbzp0PB4eSae+BvgjoKwpG2Wf8exvDRb90/2nbyf3cCSDvYTBT56CoWKseKUe6f87Ww3hX4AAA="
					},
					"/photos/19700101 - DOU 西装款.PNG": {
						width: 1920,
						height: 1600,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMAAoAA4BaJYgAD4utWRlr8gAA/rafhcMyOx979O4lDX/wbww97aQY8ueI8B8Duue7G06e+CoJ/HP4Nd6T34EAAAA="
					},
					"/photos/19700101 - VR Table Tennis by gyy.PNG": {
						width: 1202,
						height: 1437,
						blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAgCdASoMAA4AA4BaJYwC7AYv/vNE18ywAAD+9R170oUm9eLmWXVm6HjAKFefl95byUIlbNiirctpsyZYFLxTVSG4jfj7q0hYhDM3GVWicKc9h1VBGeD1kAA="
					},
					"/photos/19700101 - chengge by gyy.JPG": {
						width: 245,
						height: 245,
						blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQAgCdASoMAAwAA4BaJagCdAEDH+7CHBcAAP738RzMJ1CjCmAuYT9t60GepUsyA/Hx7Jd0zKJ28QJzl4IABfn1HfuGM/cfz24vXCMk81QTAlxCoYviFl5Tc8rkv6Hx1iSCOx7sLVKYbcU4cGFgAA=="
					},
					"/photos/19700101 - 宋小宝冲出猫窝.JPG": {
						width: 1440,
						height: 1800,
						blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABQAgCdASoMAA8AA4BaJagCdAEfhh9F7ZUBJQAA/pGplaawUy4KKQPbxClMMbw7WcCCl1BuhvC9K3et3y0KoXWpC5Q9Q6UbvCh4ZWRuhX71sUnjzVKxlJLxgM+abSgSnUQxAAAA"
					},
					"/photos/19700101 - 宋小宝在猫窝.JPG": {
						width: 1440,
						height: 1800,
						blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoMAA8AA4BaJYgCdAYvXObTkicS9uAA/tcURNN9GqERFmf6njL18rLy/NdOrIILaWKRbnSXZnS+WKAcYdW6KISHe2DRqiDzX/pTp/mRS3LLlXTOKQe/LoAA"
					},
					"/photos/19700101 - 宋小宝失了智.JPG": {
						width: 1440,
						height: 1800,
						blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAwAgCdASoMAA8AA4BaJZgCdAYuHjuWMf/MAAD+sd+7kcl08c8h71B8beUi9zK/vurJr5VIaXQX2QVeFkc/Wpv+l1hhHv0nsZSdE0DN6tfWR4qyLkfToe7kIi4/Z2TnMuCCAAAA"
					},
					"/photos/20190216 - Screenshot Meishi.JPG": {
						width: 1789,
						height: 1789,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMAAwAA4BaJQBOgCHw0FuTAAD+868TKqnwdZGPMVJBNPN3xc/hPBk3adY75fT2veKNeSGJjPTCNHaGf7DgPgAA"
					},
					"/photos/20210516 - Colindale by Kiki.jpg": {
						width: 3024,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoMAAwAA4BaJQBOgCIaLOq1AAD+h/WEz7QDgy96DvtRnMzsIlIb7iw0x4xCCHk3V92InoyHJIhoVMEhZBg0PDI6rUMAAA=="
					},
					"/photos/20220113 - 宋小宝小时候.jpg": {
						width: 4032,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoMAAkAA4BaJYwCdACUTdHwAP6tJl+w4WZkquq5Lk8SA1Vdb+1B+SIUc6MYnAfZUddasjtz6SokLEz6aK0kyeAA"
					},
					"/photos/20220116 - Part-time Theater.JPG": {
						width: 899,
						height: 899,
						blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoMAAwAA4BaJYwC06ELhknW0bIAAP5CQc3EK4bGz/aziNTvqhnGo+iDIhC5/oNMSWETX36NOh94E1G8afkg9bq5Lx4fLWCkA8wBlJgKsHgwqC7nV0AAAA=="
					},
					"/photos/20220116 0648 - VR Table Tennis.jpg": {
						width: 3088,
						height: 2316,
						blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAQCdASoMAAkAA4BaJQBOgBuepRoAAP7hl7UITlBPcnUf4x7cUM33tGig63cRulljMOeLW3YQzVZSMxFYk4mhoGI96Q4x3Al7cYAA"
					},
					"/photos/20220521 - 小狗.jpg": {
						width: 4032,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMAAkAA4BaJYgCdADbrEtgAAD+6sRX0B728v31a4g4SijH5Vr/P5X/JfgjB/CTmDJyJ84D+50gJP7ddcDgRgAA"
					},
					"/photos/20230601 - 新婚夫妇.JPG": {
						width: 1440,
						height: 1917,
						blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoMABAAA4BaJQBOkCYjBnJVdd9MAP7Jtr0kAQQlzB8Djidm5AnziFziXtq/B4s4L/XXtu3PBT1wQwMCHx2+1Co4omqtp8ED8keOEhfVJIAAAA=="
					},
					"/photos/20240630 - Cat Toy.jpg": {
						width: 5712,
						height: 4284,
						blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoMAAkAA4BaJQBOgB9h1JfwAP7DoTS097FyVKIz6QS9Gxp7IyepztPBexlpEFrPsAAAAA=="
					},
					"/photos/20240920 1124 - 三眼仔咪咪.jpg": {
						width: 4032,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoMAAkAA4BaJQBOgBuGY0cRoAD+szFCEXbxlc4S6DkwI4N1GcF0CbW/ztZoCROYXG/6MUiiGURq8DudngAAAA=="
					},
					"/photos/20240920 1125 - 三眼仔宋小宝.jpg": {
						width: 4032,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMAAkAA4BaJYgCdADcYVE+7wAA/gSV30Bs1V+4J1cKj5HesLmfFXidXeQ1o/elGj/BdM9o41rUNBjPh+K3Sow1AAA="
					},
					"/photos/20240920 1127 - 三眼仔 FUFU.jpg": {
						width: 3024,
						height: 4032,
						blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoMABAAA4BaJQBOgMX1lwQKXFMWAAD+tCPa1FYqNpSOgoXYl5bOKbczMN/I/VzeBty0UL0jlMGTIA8cVSNRRS/TNBC4XDzxvZ3jLiR5rcMwAA=="
					},
					"/photos/20241008 2054 - 自拍.jpg": {
						width: 3e3,
						height: 3e3,
						blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoMAAwAA4BaJZACdAEWl+bYDQAA/u1gzK3E3TfzRla60osqQH4F4j9KCbSpqiH96O9zy237fu540S/04y8GlWf/PAAAAA=="
					},
					"/photos/20250223 - 滑雪服.jpg": {
						width: 4284,
						height: 4284,
						blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMAAwAA4BaJYwCdADdRfA4u+AA/vATkzU/s9WOx5tt9DA9hUHyHX385lRB/1fgmPieYnnlMJ/nPkaFvpcwMM3gAAA="
					},
					"/photos/20250523 1325 - DouDash.PNG": {
						width: 1280,
						height: 720,
						blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoMAAcAA4BaJbACdADdtmT9zcAA/gSwNE1nGZ3vBr2hgRWXlD8XSLLBOGZ8p0Gbq3x2+dvImwt5aUb2gxuVb/Kif4f0kkbSAAA="
					},
					"/photos/20250726 1144 - 咪咪.jpg": {
						width: 4032,
						height: 3024,
						blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoMAAkAA4BaJYwCdAD5jha7gAD+W7lk8pxd6zwoPsNiDtMgL3OVMa5zN95p8eksQELE8BvgAAA="
					},
					"/photos/20250809 1203 - GIRL.jpg": {
						width: 1320,
						height: 2347,
						blurDataURL: "data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAwBACdASoMABUAPu1iqU2ppaOiMAgBMB2JYwCdACIL2mPeKFJwnU1qayAA/rFH/xiSxjaZdJa39IRZO/QzKQs2mAvwsH5+k2zi4tsyqSzQ5ME9XFbU6e1Z5kAPgkGYOnoaQz8CvAZg5FYcAvigXLRhjhI8/dutO+Yp7fXjAkzDtm8FO0e4AAAA"
					},
					"/photos/20260206 - 宋小宝.JPG": {
						width: 1440,
						height: 1080,
						blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoMAAkAA4BaJZwAAxS4hrknn4AA9r/hFAXinFBg/9PYfvKO+EmrHzoiSo3mDxAYYYF6y+c54c78FrqIlooRQAAA"
					}
				}
      
      
      
//bio downloadKEYSIZE copy move here
var iDownloadKeySize = [
/*bio
{
				key: "sitemap/folder-one/comedy Bill Burr 2004.mp4",
				size: 0x115185d,
				thumb: !0
			}, {
				key: "sitemap/folder-one/comedy Learn English with Ricky Gervais.mp4",
				size: 0x3012308,
				thumb: !0
			}, {
				key: "sitemap/folder-one/comedy Louis CK - You're Amazing.mp4",
				size: 0x73d5a43,
				thumb: !0
			}, {
				key: "sitemap/folder-one/comedy Louis CK's Dog Joke.mp4",
				size: 0x30b2864,
				thumb: !0
			}, {
				key: "sitemap/folder-one/comedy Norm Macdonald's Moth Joke.mp4",
				size: 0x3e83901,
				thumb: !0
			}, {
				key: "sitemap/folder-one/comedy Who's On First - Abbott and Costello.mp4",
				size: 0x44d669c,
				thumb: !0
			}, {
				key: "sitemap/folder-one/manzai/漫才 《禁止说英语Game》シンクロニシティ Youtube CLKqJMzlnLI.mp4",
				size: 0x2539849,
				thumb: !0
			}, {
				key: "sitemap/folder-one/manzai/漫才 《谎言真实游戏》 木下 岩崎 M-1大赛 2023.mp4",
				size: 0x25d5777,
				thumb: !0
			}, {
				key: "sitemap/folder-two/Peiping Family(1948).mp4",
				size: 0x571dd0e,
				thumb: !0
			}, {
				key: "sitemap/folder-two/The square hole.mp4",
				size: 5930583,
				thumb: !0
			}, {
				key: "sitemap/folder-two/相声纪录片：笑 1979年.mp4",
				size: 0x15c045a5,
				thumb: !0
			}, {
				key: "sitemap/folder-three/演唱 《メロディー》 玉置浩二.flv",
				size: 0x37d546f,
				thumb: !0
			}, {
				key: "sitemap/folder-three/演唱 《你把我灌醉》 黄大煒 《时光音乐会•老友记》 .mp4",
				size: 0x3e5ca2e,
				thumb: !0
			}, {
				key: "sitemap/folder-three/演唱 《夢をかなえてドラえもん》 ちょねさゆ はがゆき.flv",
				size: 0x3158a05,
				thumb: !0
			}, {
				key: "sitemap/folder-three/演唱 《遇见 (陕西话版)》 陈墨一（吖毛）.mp4",
				size: 0x8740848,
				thumb: !0
			}, {
				key: "sitemap/folder-three/说唱 《健將plus》 小精靈 法老 早安 中國說唱巔峰對決2023.mp4",
				size: 0x6e4cd42,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-one/相声 《莽撞人》 unt.flv",
				size: 0xf6f474,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-one/相声 《莽撞人》 郭德纲 于谦 高峰.mp4",
				size: 5212721,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-two/凌珂纽约聊戏.mp4",
				size: 0x2c209e1f,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-two/太平歌词 《挡谅》 郭德纲.mp4",
				size: 0x39c0ee5,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-two/太平歌词 《挡谅》 陶云圣.mp4",
				size: 0x1bdf1da,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-two/鼓曲 《小曲连唱》 德云鼓曲社 郭德纲 陶云圣 张云雷 2021年6月10日.mp4",
				size: 0x22e5549a,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《三堂会审伽利略》 《菠萝科学奖》 2014年.mp4",
				size: 0x28ce86e,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《三家店》 选段 男起解 于魁智.mp4",
				size: 3050055,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《双投唐》 孟广禄 李军 《戏曲春晚》 1999年.mp4",
				size: 0x1c811ea,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《同光十三绝》 国家京剧院一团 《央视春节联欢晚会》 2014年.mp4",
				size: 0x6e1f73a,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《四郎探母》 选段 坐宫 于魁智 李胜素.mp4",
				size: 0x235cc5e,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《四郎探母》 选段 坐宫 李维康 耿其昌.mp4",
				size: 8440647,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《未央宫》 选段 赵麟童 李春立.mp4",
				size: 0x2016b30,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《梅兰芳》 选段 于魁智 孟广禄.mp4",
				size: 0x1453d43,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《沙家浜》 选段 智斗.mp4",
				size: 0x1a3ced3,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《淮河营》 张学津.mp4",
				size: 6133124,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《珠帘寨》 选段 贤弟不必想唐朝 李博 蓝天 王珮瑜 余派.mp4",
				size: 0x41b6390,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《行云流水》 于魁智等 《央视春节联欢晚会》 1996年.mp4",
				size: 0x200b920,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-three/京剧 《铡美案》 选段 孟广禄.mp4",
				size: 4010990,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声 《乌龙院》 何云伟 李菁.mp4",
				size: 0x5398adc,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声 《十八愁绕口令》 何云伟 李菁.mp4",
				size: 0x1ff697a,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声 《戏剧与方言》 侯宝林 郭启儒.mp4",
				size: 0x23dc648,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声 《打灯谜》 栾云平 于谦.mp4",
				size: 0x11d92a16,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声《四大名旦》何云伟 李菁.mp4",
				size: 0x4e318ca,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声《报菜名》李伯祥 杜国芝.flv",
				size: 0x7f598dd,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声《报菜名》马志明 黄族民.mp4",
				size: 0x87321ec,
				thumb: !0
			}, {
				key: "sitemap/folder-four/ffour-four/相声《报菜名》高玉庆 石富宽.flv",
				size: 0x25f8681,
				thumb: !0
			}, {
				key: "sitemap/folder-five/双簧 《金盆洗脚城》 奇志 大兵.mp4",
				size: 0xd7def6,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《一心一意》 吕严 何欢 邓帅 张兴朝 《喜人奇妙夜》 2024.mp4",
				size: 0x147c881d,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《世上最美的女人》史策 王皓 《一年一度喜剧大赛》 EP02.mp4",
				size: 0x3f8cb43,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《主角与配角》 陈佩斯 朱时茂 《央视春节联欢晚会》 1990年.mp4",
				size: 0x4ce95d7,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《代号大本钟》 土豆 吕严 一年一度喜剧大赛2 EP2.mp4",
				size: 0xc070643,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《低价航空》 张海宇 蒋易 《今夜百乐门》第1期.mp4",
				size: 0x315346f,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《决赛风波》 陈印泉 侯振鹏 《相声有新人》第12期.mp4",
				size: 0xe998fd0,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《包你会做菜》 张海宇 蒋易 《今夜百乐门》 第9期.mp4",
				size: 0x4bbd371,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《包你会驾校》 张海宇 蒋易 《今夜百乐门》 第10期.mp4",
				size: 0x574da73,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《卖拐》 赵本山 高秀敏 《央视春节联欢晚会》 2001年.mp4",
				size: 0x38bf80d,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《卖车》 赵本山 高秀敏 范伟 《央视春节联欢晚会》 2002年.mp4",
				size: 0x46c0191,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《印象派保洁》 张海宇 蒋易 《今夜百乐门》 第6期.mp4",
				size: 0x4f22e7f,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《小品的世界》 吕严 何欢 邓帅 《喜人奇妙夜》 2024.mp4",
				size: 0x1319c26f,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《廉价安检》 张海宇 蒋易 《今夜百乐门》 第5期.mp4",
				size: 0x3e9ec57,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《很高兴为你服务》 张海宇 蒋易 《今夜百乐门》 第12期.mp4",
				size: 0x6ff69e0,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《志胜一击》史策 王皓 《一年一度喜剧大赛》 EP10.mp4",
				size: 0xad34715,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《披星戴月的想你》史策 王皓 《一年一度喜剧大赛》 EP11.mp4",
				size: 0xcd7b35a,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《昨天今天明天》 赵本山 宋丹丹 《央视春节联欢晚会》 1999年.mp4",
				size: 0x3ebb6a9,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《水底捞火锅店》 张海宇 蒋易 《今夜百乐门》 第3期.mp4",
				size: 0x46ace48,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《浪漫泄漏》史策 王皓 《一年一度喜剧大赛》 EP07.mp4",
				size: 0x9b5c416,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《爱人错过》史策 王皓 《一年一度喜剧大赛》 EP04.mp4",
				size: 0x81eb0e1,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《老同学》 乔杉 修睿 《笑声传奇》 第2期.mp4",
				size: 0xa1b25e7,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《走花路》史策 王皓 《一年一度喜剧大赛》 EP06.mp4",
				size: 0x976f7ce,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《这个医院》 张海宇 蒋易 《今夜百乐门》第2期.mp4",
				size: 0x4a8c255,
				thumb: !0
			}, {
				key: "sitemap/folder-five/小品 《送你走专车》 张海宇 蒋易 《今夜百乐门》 第4期.mp4",
				size: 0x4c418c9,
				thumb: !0
			}, {
				key: "sitemap/folder-five/相声 《出国》 奇志 大兵.mp4",
				size: 0x20cb602,
				thumb: !0
			}, {
				key: "sitemap/folder-five/相声 《洛桑学艺专辑》 洛桑 博林 《曲苑杂谈》 2011年 第10期.mp4",
				size: 0x929c689,
				thumb: !0
			}, {
				key: "sitemap/folder-five/相声 《虎口遐想》 姜昆 唐杰忠 1987年.mp4",
				size: 0x86d1f8c,
				thumb: !0
			}
      */

{
    key: "sitemap/folder-one/Mr-Banana.mp4",
    size: 0x115185d,
    thumb: !0
}, {
    key: "sitemap/folder-one/Professor-Noodle.mp4",
    size: 0x3012308,
    thumb: !0
}, {
    key: "sitemap/folder-one/Crazy-Uncle.mp4",
    size: 0x73d5a43,
    thumb: !0
}, {
    key: "sitemap/folder-one/Captain-Silly.mp4",
    size: 0x30b2864,
    thumb: !0
}, {
    key: "sitemap/folder-one/Funny-Mustache.mp4",
    size: 0x3e83901,
    thumb: !0
}, {
    key: "sitemap/folder-one/Mr-Whoops.mp4",
    size: 0x44d669c,
    thumb: !0
}, {
    key: "sitemap/folder-one/manzai/Silly-Samurai.mp4",
    size: 0x2539849,
    thumb: !0
}, {
    key: "sitemap/folder-one/manzai/Laughing-Li.mp4",
    size: 0x25d5777,
    thumb: !0
}, {
    key: "sitemap/folder-two/Old-Master-Penguin.mp4",
    size: 0x571dd0e,
    thumb: !0
}, {
    key: "sitemap/folder-two/Square-Hole-Harry.mp4",
    size: 5930583,
    thumb: !0
}, {
    key: "sitemap/folder-two/Uncle-Laughing.mp4",
    size: 0x15c045a5,
    thumb: !0
}, {
    key: "sitemap/folder-three/Singing-Koji.mp4",
    size: 0x37d546f,
    thumb: !0
}, {
    key: "sitemap/folder-three/Drunk-Singer.mp4",
    size: 0x3e5ca2e,
    thumb: !0
}, {
    key: "sitemap/folder-three/Doraemon-Friend.mp4",
    size: 0x3158a05,
    thumb: !0
}, {
    key: "sitemap/folder-three/Happy-Chen.mp4",
    size: 0x8740848,
    thumb: !0
}, {
    key: "sitemap/folder-three/Rap-Monkey.mp4",
    size: 0x6e4cd42,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-one/Professor-Boom.flv",
    size: 0xf6f474,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-one/Uncle-Dagong.mp4",
    size: 5212721,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-two/Drama-King.mp4",
    size: 0x2c209e1f,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-two/Mr-Teapot.mp4",
    size: 0x39c0ee5,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-two/Happy-Peach.mp4",
    size: 0x1bdf1da,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-two/Three-Laughing-Boys.mp4",
    size: 0x22e5549a,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Galileo-Comedian.mp4",
    size: 0x28ce86e,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/General-Whoops.mp4",
    size: 3050055,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Double-Trouble.mp4",
    size: 0x1c811ea,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Thirteen-Funny-Generals.mp4",
    size: 0x6e1f73a,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Prince-Noodle.mp4",
    size: 0x235cc5e,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Lady-Boss.mp4",
    size: 8440647,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/General-Confused.mp4",
    size: 0x2016b30,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Mr-Opera.mp4",
    size: 0x1453d43,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Spy-Noodles.mp4",
    size: 0x1a3ced3,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Professor-Huaihe.mp4",
    size: 6133124,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Blue-Sky-Comedian.mp4",
    size: 0x41b6390,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Flying-Monkey.mp4",
    size: 0x200b920,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-three/Mr-Gavel.mp4",
    size: 4010990,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Mr-Wrong-Way.mp4",
    size: 0x5398adc,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Rapido-Ron.mp4",
    size: 0x1ff697a,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Grandpa-Jokes.mp4",
    size: 0x23dc648,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Mr-Riddle.mp4",
    size: 0x11d92a16,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Four-Funny-Ladies.mp4",
    size: 0x4e318ca,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Chef-Li.flv",
    size: 0x7f598dd,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Chef-Ma.mp4",
    size: 0x87321ec,
    thumb: !0
}, {
    key: "sitemap/folder-four/ffour-four/Chef-Stone.flv",
    size: 0x25f8681,
    thumb: !0
}, {
    key: "sitemap/folder-five/Golden-Toe.mp4",
    size: 0xd7def6,
    thumb: !0
}, {
    key: "sitemap/folder-five/Laughing-Professor.mp4",
    size: 0x147c881d,
    thumb: !0
}, {
    key: "sitemap/folder-five/Miss-Funny.mp4",
    size: 0x3f8cb43,
    thumb: !0
}, {
    key: "sitemap/folder-five/Mr-Serious.mp4",
    size: 0x4ce95d7,
    thumb: !0
}, {
    key: "sitemap/folder-five/Potato-Captain.mp4",
    size: 0xc070643,
    thumb: !0
}, {
    key: "sitemap/folder-five/Cheap-Airline-Bob.mp4",
    size: 0x315346f,
    thumb: !0
}, {
    key: "sitemap/folder-five/Final-Boss.mp4",
    size: 0xe998fd0,
    thumb: !0
}, {
    key: "sitemap/folder-five/Chef-Bob.mp4",
    size: 0x4bbd371,
    thumb: !0
}, {
    key: "sitemap/folder-five/Driving-School-Sam.mp4",
    size: 0x574da73,
    thumb: !0
}, {
    key: "sitemap/folder-five/Doctor-Crook.mp4",
    size: 0x38bf80d,
    thumb: !0
}, {
    key: "sitemap/folder-five/Taxi-Boss.mp4",
    size: 0x46c0191,
    thumb: !0
}, {
    key: "sitemap/folder-five/Cleaning-Queen.mp4",
    size: 0x4f22e7f,
    thumb: !0
}, {
    key: "sitemap/folder-five/Professor-Panic.mp4",
    size: 0x1319c26f,
    thumb: !0
}, {
    key: "sitemap/folder-five/Security-Uncle.mp4",
    size: 0x3e9ec57,
    thumb: !0
}, {
    key: "sitemap/folder-five/Mr-Customer-Service.mp4",
    size: 0x6ff69e0,
    thumb: !0
}, {
    key: "sitemap/folder-five/One-Punch-Laugh.mp4",
    size: 0xad34715,
    thumb: !0
}, {
    key: "sitemap/folder-five/Moonlight-Mr-Funny.mp4",
    size: 0xcd7b35a,
    thumb: !0
}, {
    key: "sitemap/folder-five/Yesterday-Today-Tomorrow.mp4",
    size: 0x3ebb6a9,
    thumb: !0
}, {
    key: "sitemap/folder-five/Hotpot-Hero.mp4",
    size: 0x46ace48,
    thumb: !0
}, {
    key: "sitemap/folder-five/Romance-Monkey.mp4",
    size: 0x9b5c416,
    thumb: !0
}, {
    key: "sitemap/folder-five/Love-Loser.mp4",
    size: 0x81eb0e1,
    thumb: !0
}, {
    key: "sitemap/folder-five/Old-Classmate.mp4",
    size: 0xa1b25e7,
    thumb: !0
}, {
    key: "sitemap/folder-five/Road-Dancer.mp4",
    size: 0x976f7ce,
    thumb: !0
}, {
    key: "sitemap/folder-five/Hospital-Hero.mp4",
    size: 0x4a8c255,
    thumb: !0
}, {
    key: "sitemap/folder-five/Taxi-Friend.mp4",
    size: 0x4c418c9,
    thumb: !0
}, {
    key: "sitemap/folder-five/Uncle-Overseas.mp4",
    size: 0x20cb602,
    thumb: !0
}, {
    key: "sitemap/folder-five/Mr-Luosang.mp4",
    size: 0x929c689,
    thumb: !0
}, {
    key: "sitemap/folder-five/Uncle-Tiger.mp4",
    size: 0x86d1f8c,
    thumb: !0
}
   
      ]      