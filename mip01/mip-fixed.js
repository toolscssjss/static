(window.MIP = window.MIP || []).push({
    name: "mip-fixed",
    func: function() {
        define("mip-fixed/viewport-scroll", ["require", "util", "viewport"], function(t) {
            var e = (t("util"),
            t("viewport"))
              , i = {
                inited: !1,
                first: !0,
                animate: [],
                onscroll: function(t) {
                    if (t.direction) {
                        var e = "down" === t.direction ? "out" : "in";
                        i.animate.forEach(function(t) {
                            var n = i.position[t.position];
                            if (n && "function" == typeof n[e])
                                n[e](t.element, t.slide)
                        })
                    }
                },
                init: function(t) {
                    if (i.animate.push(t),
                    !i.inited)
                        i.bindScrollEvent()
                },
                bindScrollEvent: function() {
                    function t() {
                        if (r = e.getScrollTop(),
                        a = e.getScrollHeight(),
                        r + window.innerHeight >= a) {
                            if ("down" !== n)
                                n = "down",
                                i.onscroll({
                                    direction: "down"
                                })
                        } else if (r > 0) {
                            if (c < r)
                                o = 1;
                            else if (c > r)
                                o = -1;
                            var t = null;
                            if ("down" !== n && 1 === o)
                                n = "down",
                                t = "down";
                            else if ("up" !== n && -1 === o)
                                n = "up",
                                t = "up";
                            i.onscroll({
                                direction: t
                            })
                        } else if (0 === r)
                            if ("up" !== n)
                                n = "up",
                                i.onscroll({
                                    direction: "up"
                                });
                        c = r
                    }
                    var n = null
                      , o = 0
                      , r = e.getScrollTop()
                      , a = e.getScrollHeight()
                      , c = 0;
                    i.inited = !0,
                    window.addEventListener("touchstart", function(t) {
                        r = e.getScrollTop(),
                        a = e.getScrollHeight()
                    }),
                    window.addEventListener("touchmove", t),
                    window.addEventListener("touchend", t),
                    e.on("scroll", function(e) {
                        if (i.first)
                            return void (i.first = !1);
                        t()
                    })
                },
                position: {
                    top: {
                        in: function(t, e) {
                            t.classList.remove(e || "mip-fixed-hide-top")
                        },
                        out: function(t, e) {
                            t.classList.add(e || "mip-fixed-hide-top")
                        }
                    },
                    bottom: {
                        in: function(t, e) {
                            t.classList.remove(e || "mip-fixed-hide-bottom")
                        },
                        out: function(t, e) {
                            t.classList.add(e || "mip-fixed-hide-bottom")
                        }
                    }
                }
            };
            return i
        }),
        define("mip-fixed/mip-fixed", ["require", "customElement", "util", "./viewport-scroll"], function(t) {
            function e() {
                var t = this;
                t.addEventAction("close", function(e) {
                    e.preventDefault(),
                    n.css(t.element, "display", "none")
                });
                var e = t.element.getAttribute("type");
                if (t.element.hasAttribute("data-slide") && ("top" === e || "bottom" === e))
                    o.init({
                        element: t.element,
                        position: e,
                        slide: t.element.getAttribute("data-slide")
                    })
            }
            var i = t("customElement").create()
              , n = t("util")
              , o = t("./viewport-scroll");
            return i.prototype.build = e,
            i
        }),
        define("mip-fixed", ["mip-fixed/mip-fixed"], function(t) {
            return t
        }),
        function() {
            function t(t, e) {
                t.registerMipElement("mip-fixed", e, "mip-fixed{position:fixed !important}mip-fixed[data-slide]{-webkit-transition:transform .5s;transition:transform .5s}mip-fixed[data-slide].mip-fixed-hide-top{-webkit-transform:translate3d(0, -200%, 0);transform:translate3d(0, -200%, 0)}mip-fixed[data-slide].mip-fixed-hide-bottom{-webkit-transform:translate3d(0, 200%, 0);transform:translate3d(0, 200%, 0)}")
            }
            if (window.MIP)
                require(["mip-fixed"], function(e) {
                    t(window.MIP, e)
                });
            else
                require(["mip", "mip-fixed"], t)
        }()
    }
});
