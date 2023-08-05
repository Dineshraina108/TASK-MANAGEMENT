function msg(a) {
    function G() {
        b ||
            (v.css({ opacity: 0, top: E - 50, left: F }),
                v.css("background-color", "White"),
                z.css({ opacity: a.opacity }),
                a.beforeShow(),
                z.css({ width: $(document).width(), height: I() }),
                $(h + "," + l).fadeIn(0),
                v.animate({ opacity: 1, top: E, left: F }, 100),
                setTimeout(a.afterShow, 200),
                $("#" + m).focus(),
                (b = !0),
                $(window).bind("resize", function (a) {
                    var b = v.width(),
                        c = v.height(),
                        d = $(window).height(),
                        e = $(window).width(),
                        f = d / 2 - c / 2,
                        g = e / 2 - b / 2;
                    v.css({ top: f, left: g }), z.css({ width: "100%", height: "100%" });
                }));
    }
    function H() {
        b &&
            (a.beforeClose(),
                v.animate({ opacity: 0, top: E - 50, left: F }, 200),
                z.fadeOut(300),
                setTimeout(function () {
                    v.remove(), z.remove();
                }, 300),
                setTimeout(a.afterClose, 300),
                (b = !1));
    }
    function I() {
        var a = document;
        return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight));
    }
    function J() {
        v.fadeOut(200).fadeIn(200);
    }
    var b = !1,
        c = typeof a,
        d = {
            content: "string" == c ? a : "Message",
            title: "Warning",
            type: "alert",
            autoClose: !1,
            timeOut: 0,
            modal: !1,
            showButtons: !0,
            buttons: [{ value: "Ok" }],
            inputs: [
                { type: "text", name: "userName", header: "User Name" },
                { type: "password", name: "password", header: "Password" },
            ],
            success: function (a) { },
            beforeShow: function () { },
            afterShow: function () { },
            beforeClose: function () { },
            afterClose: function () { },
            opacity: 0.8,
        };
    if (((a = "string" == c ? d : a), null != a.type))
        switch (a.type) {
            case "alert":
                a.title = null == a.title ? "Warning" : a.title;
                break;
            case "info":
                a.title = null == a.title ? "Information" : a.title;
                break;
            case "error":
                a.title = null == a.title ? "Error" : a.title;
                break;
            case "confirm":
                (a.title = null == a.title ? "Confirmation" : a.title), (a.buttons = null == a.buttons ? [{ value: "Yes" }, { value: "No" }, { value: "Cancel" }] : a.buttons);
                break;
            case "prompt":
                (a.title = null == a.title ? "Log In" : a.title), (a.buttons = null == a.buttons ? [{ value: "Login" }, { value: "Cancel" }] : a.buttons);
                break;
            default:
                e = "alert.png";
        }
    (a.timeOut = null == a.timeOut ? (null == a.content ? 500 : 70 * a.content.length) : a.timeOut), (a = $.extend({}, d, a)), a.autoClose && setTimeout(H, a.timeOut);
    var e = "";
    switch (a.type) {
        case "alert":
            e = "alert.png";
            break;
        case "info":
            e = "info.png";
            break;
        case "error":
            e = "error.png";
            break;
        case "confirm":
            e = "confirm.png";
            break;
        default:
            e = "alert.png";
    }
    var f = "msgBox" + new Date().getTime();
    if (null !== navigator.userAgent.match(/msie 7/i)) var g = "msgBoxContentIEOld";
    else var g = "msgBoxContent";
    var h = f,
        i = f + "Content",
        j = f + "Image",
        k = f + "Buttons",
        l = f + "BackGround",
        m = f + "FirstButton",
        n = "",
        o = !0;
    $(a.buttons).each(function (a, b) {
        var c = "";
        o && ((c = ' id="' + m + '"'), (o = !1)), (n += '<input class="msgButton" type="button" name="' + b.value + '" value="' + b.value + '"' + c + "/>");
    });
    var p = "";
    $(a.inputs).each(function (a, b) {
        var c = b.type;
        p +=
            "checkbox" == c || "radiobutton" == c
                ? '<div class="msgInput"><input type="' +
                b.type +
                '" name="' +
                b.name +
                '" ' +
                (null == b.checked ? "" : "checked ='" + b.checked + "'") +
                ' value="' +
                ("undefined" == typeof b.value ? "" : b.value) +
                '" /><text>' +
                b.header +
                "</text></div>"
                : '<div class="msgInput"><span class="msgInputHeader">' +
                b.header +
                '</span><input type="' +
                b.type +
                '" name="' +
                b.name +
                '" value="' +
                ("undefined" == typeof b.value ? "" : b.value) +
                '" ' +
                (void 0 !== typeof b.size ? " size='" + b.size + "' " : "") +
                (void 0 !== typeof b.maxlength ? " maxlength='" + b.maxlength + "' " : "") +
                " /></div>";
    });
    var v,
        w,
        x,
        y,
        z,
        q = '<div id="' + l + '" class="msgBoxBackGround"></div>',
        r = '<div class="msgBoxTitle">' + a.title + "</div>",
        s = '<div class="msgBoxContainer"><div id="' + j + '" class="msgBoxImage"><img src="' + msgBoxImagePath + e + '"/></div><div id="' + i + '" class="' + g + '"><p><span>' + a.content + "</span></p></div></div>",
        t = '<div id="' + k + '" class="msgBoxButtons">' + n + "</div>",
        u = '<div class="msgBoxInputs">' + p + "</div>";
    "prompt" == a.type
        ? ($("body").append(q + '<div id="' + h + '" class="msgBox">' + r + "<div>" + s + (a.showButtons ? t + "</div>" : "</div>") + "</div>"),
            (v = $("#" + h)),
            (w = $("#" + i)),
            (x = $("#" + j)),
            (y = $("#" + k)),
            (z = $("#" + l)),
            x.remove(),
            y.css({ "text-align": "center", "margin-top": "5px" }),
            w.css({ width: "100%", height: "100%" }),
            w.html(u))
        : ($("body").append(q + '<div id="' + h + '" class="msgBox">' + r + "<div>" + s + (a.showButtons ? t + "</div>" : "</div>") + "</div>"), (v = $("#" + h)), (w = $("#" + i)), (x = $("#" + j)), (y = $("#" + k)), (z = $("#" + l)));
    var A = v.width(),
        B = v.height(),
        C = $(window).height(),
        D = $(window).width(),
        E = C / 2 - B / 2,
        F = D / 2 - A / 2;
    G(),
        $("input.msgButton").click(function (b) {
            b.preventDefault();
            var c = $(this).val();
            if ("prompt" != a.type) a.success(c);
            else {
                var d = [];
                $("div.msgInput input").each(function (a, b) {
                    var c = $(this).attr("name"),
                        e = $(this).val(),
                        f = $(this).attr("type");
                    "checkbox" == f || "radiobutton" == f ? d.push({ name: c, value: e, checked: $(this).attr("checked") }) : d.push({ name: c, value: e });
                }),
                    a.success(c, d);
            }
            H();
        }),
        z.click(function (b) {
            a.modal || (!a.showButtons || (a.showButtons && a.buttons.length < 2) || a.autoClose ? H() : J());
        });
}

var msgBoxImagePath = "../../Images/";
jQuery.msgBox = msg;
