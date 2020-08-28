(window.MIP = window.MIP || []).push({
    name: "mip-accordion",
    func: function() {
        define("mip-accordion/mip-accordion", ["require", "customElement", "zepto"], function(t) {
            function e(t) {
                var e = this
                  , i = "MIP-" + t + "-" + c
                  , n = r(i);
                for (var s in n) {
                    if (!n.hasOwnProperty(s))
                        return;
                    if (n[s]) {
                        var o = a("#" + s, e);
                        o.attr("aria-expanded", "open"),
                        o.parents("section").attr("expanded", "open")
                    }
                }
            }
            function i(t) {
                var e = a(t)
                  , i = a(t).attr("animatetime");
                if (void 0 === i || isNaN(i))
                    i = .24;
                else
                    i = Math.min(parseFloat(i), 1);
                e.on("click", ".mip-accordion-header", function() {
                    var e = a(this).attr("aria-controls")
                      , r = a("#" + e)
                      , o = r.attr("aria-expanded")
                      , c = a(this).parents("section").find(".show-more")
                      , l = a(this).parents("section").find(".show-less");
                    if ("open" === o) {
                        if (s({
                            ele: r[0],
                            type: "fold",
                            transitionTime: i,
                            cbFun: function(t) {
                                t.attr("aria-expanded", "close")
                            }
                            .bind(void 0, r)
                        }),
                        a(this).parents("section").removeAttr("expanded"),
                        c.length && l.length)
                            c.css("display", "block"),
                            l.css("display", "none");
                        n(t, e, !1)
                    } else {
                        if (t.hasAttribute("expaned-limit"))
                            for (var h = t.querySelectorAll("section"), u = 0; u < h.length; u++) {
                                var p = h[u].querySelector(".mip-accordion-content")
                                  , f = h[u].querySelector(".mip-accordion-header")
                                  , y = f.getAttribute("aria-controls");
                                h[u].removeAttribute("expanded"),
                                p.removeAttribute("aria-expanded"),
                                n(t, y, !1),
                                s({
                                    ele: p,
                                    type: "fold",
                                    transitionTime: i
                                })
                            }
                        if (r.attr("aria-expanded", "open"),
                        a(this).parents("section").attr("expanded", "open"),
                        c.length && l.length)
                            l.css("display", "block"),
                            c.css("display", "none");
                        s({
                            ele: r[0],
                            type: "unfold",
                            oriHeight: 0,
                            transitionTime: i
                        }),
                        n(t, e, !0)
                    }
                })
            }
            function n(t, e, i) {
                var n = "MIP-" + t.getAttribute("sessions-key") + "-" + c;
                try {
                    var s = r(n);
                    s[e] = i,
                    sessionStorage[n] = JSON.stringify(s)
                } catch (t) {
                    console.warn("用户无痕模式不支持 session")
                }
            }
            function r(t) {
                try {
                    var e = sessionStorage[t];
                    return e ? JSON.parse(e) : {}
                } catch (t) {
                    return console.warn("用户无痕模式不支持 session"),
                    {}
                }
            }
            function s(t) {
                var e, i = t.ele, n = t.type;
                if (n && i) {
                    if (void 0 === t.transitionTime || isNaN(t.transitionTime))
                        e = .24;
                    else
                        e = Math.min(parseFloat(t.transitionTime), 1);
                    var r, s = void 0 !== t.oriHeight ? t.oriHeight : getComputedStyle(i).height, o = t.cbFun || function() {}
                    ;
                    if ("unfold" === n) {
                        if (void 0 !== t.tarHeight)
                            r = t.tarHeight;
                        else
                            i.style.transition = "height 0s",
                            i.style.height = "auto",
                            r = getComputedStyle(i).height;
                        setTimeout(function() {
                            i.style.transition = "height 0s",
                            i.style.height = "auto"
                        }, 1e3 * e)
                    } else if ("fold" === n)
                        r = t.tarHeight || 0;
                    i.style.height = s,
                    setTimeout(function() {
                        i.style.transition = "height " + e + "s",
                        i.style.height = r
                    }, 10),
                    setTimeout(function() {
                        o()
                    }, 1e3 * e)
                }
            }
            var o = t("customElement").create()
              , a = t("zepto")
              , c = location.href;
            return o.prototype.build = function() {
                var t = this
                  , s = this.element;
                if (this.type = a(s).attr("type") || "automatic",
                this.sections = a(s).find("section"),
                this.id = a(s).attr("sessions-key"),
                this.element.setAttribute("role", "tablist"),
                this.currentState = r.call(this),
                this.sections.map(function(e, i) {
                    var r = a(i).find("[accordionbtn]")
                      , o = a(i).find("[accordionbox]");
                    if (!r.length || !o.length)
                        r = a(i.children.item(0)),
                        o = r.next();
                    r.addClass("mip-accordion-header"),
                    o.addClass("mip-accordion-content");
                    var c = o.attr("id");
                    if (!c)
                        c = "MIP_" + t.id + "_content_" + e,
                        o.attr({
                            id: c
                        });
                    if (t.currentState[c])
                        i.attr("expanded", "");
                    else if (!1 === t.currentState[c])
                        i.removeAttribute("expanded");
                    if ("manual" === t.type && i.hasAttribute("expanded"))
                        o.attr("aria-expanded", "open"),
                        n(s, a(s).attr("aria-controls"), !0);
                    else if ("automatic" === t.type)
                        o.attr("aria-expanded", i.hasAttribute("expanded").toString());
                    r.attr("aria-controls", c)
                }),
                "automatic" === t.type)
                    e.call(s, this.id);
                i(s)
            }
            ,
            o
        }),
        define("mip-accordion", ["mip-accordion/mip-accordion"], function(t) {
            return t
        }),
        function() {
            function t(t, e) {
                t.registerMipElement("mip-accordion", e, 'mip-accordion .mip-accordion-content{display:none !important;overflow:hidden}mip-accordion .mip-accordion-content[aria-expanded="open"]{display:block !important}mip-accordion section[expanded=open] .show-more{display:none !important}mip-accordion section .show-more{display:block}mip-accordion section .show-less{display:none}mip-accordion section[expanded=open] .show-less{display:block}')
            }
            if (window.MIP)
                require(["mip-accordion"], function(e) {
                    t(window.MIP, e)
                });
            else
                require(["mip", "mip-accordion"], t)
        }()
    }
});
