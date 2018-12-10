"use strict";
window.elsaScript = function() {
    var t = function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),
            document.querySelector("head").appendChild(e)
        }
    };
    return {
        init: function() {
            var e;
            t(),
            e = $("#js-testimonial"),
            new Swiper(e.find(".swiper-container"),{
                slidesPerView: 2,
                spaceBetween: 30,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
                },
                navigation: {
                    nextEl: e.find(".swiper-button-next"),
                    prevEl: e.find(".swiper-button-prev")
                },
                pagination: {
                    el: e.find(".swiper-pagination"),
                    type: "bullets"
                }
            }),
            $("#js-result-knob").knob({
                readOnly: !0,
                height: 180,
                width: 180,
                displayInput: !1,
                fgColor: "#12ce66",
                bgColor: "#e0e7ec",
                thickness: .1
            }),
            $("#js-record").on("click", function() {
                $(this).removeClass("btn-info").addClass("active btn-success"),
                setTimeout(function() {
                    window.location.href = "./test-2.html"
                }, 2e3)
            }),
            new window.WOW({
                callback: function(e) {
                    var t = $(e);
                    "counter-up" === t.attr("data-type") && t.find(".js-counter-up").each(function() {
                        var e = $(this)
                          , t = parseInt(e.attr("data-decimals"), 10) || 0
                          , i = parseFloat(e.attr("data-value"));
                        new window.CountUp(e.get(0),0,i,t,2.5,{
                            useEasing: !0,
                            useGrouping: !0,
                            separator: ",",
                            decimal: "."
                        }).start()
                    })
                }
            }).init()
        }
    }
}(),
$(document).ready(function() {
    window.elsaScript.init()
}),
$(document).ready(function() {
    $(".else-list-question li").click(function() {
        var e = $(this).data("id");
        $(".else-list-question li").removeClass("active"),
        $(this).addClass("active"),
        $(".elsa-answer div").hide(),
        $(".elsa-answer #" + e).show()
    }),
    $(".else-list-question").find("a").click(function(e) {
        e.preventDefault();
        var t = $(".elsa-answer");
        $("html, body").animate({
            scrollTop: $(t).offset().top - 60
        }, "slow")
    })
}),
$(document).ready(function() {
    if (window.location.hash) {
        var e = window.location.hash.substring(1);
        t(e, e)
    }
    function t(e, t) {
        $(".elsa-positions-career").addClass("is_open"),
        $(".list-job a").removeClass("active"),
        $(".list-job a." + t).addClass("active"),
        $(".elsa-section-form > div").hide(),
        $(".elsa-section-form #" + e).show();
        var i = $(".elsa-section-form");
        $("html, body").animate({
            scrollTop: $(i).offset().top - 60
        }, "slow")
    }
    $('.upload_cv input[type="file"]').on("change", function() {
        var e = $(this).val().split("\\").pop();
        $(".upload_cv label span").html(e)
    }),
    $('.up_loadportfolio input[type="file"]').on("change", function() {
        var e = $(this).val().split("\\").pop();
        $(".up_loadportfolio label span").html(e)
    }),
    $(".btn-view-job").on("click", function() {
        t($(this).data("id"), $(this).data("title"))
    }),
    $(".back_list_job").on("click", function() {
        $(".elsa-positions-career").removeClass("is_open")
    }),
    $(".list-job a").on("click", function() {
        var e = $(this).data("id");
        $(".list-job a").removeClass("active"),
        $(this).addClass("active"),
        $(".elsa-section-form >div").hide(),
        $(".elsa-section-form #" + e).show();
        var t = $(".elsa-section-form");
        $("html, body").animate({
            scrollTop: $(t).offset().top - 60
        }, "slow")
    })
});