window.fcPreChatform = {
    chatCustomData: {
        userCreated: !1,
        userOnLoad: !1,
        userCreatedfromTrigger: !1,
        userCreatedfromForm: !1,
        formCreated: !1
    },
    addCss: function(e) {
        var t = document.head
          , r = document.createElement("link");
        r.type = "text/css",
        r.rel = "stylesheet",
        r.href = e,
        t.appendChild(r)
    },
    generateOptions: function(e) {
        for (var t = '<option value="">...</option>', r = 0; r < e.options.length; r++)
            t += '<option value="' + e.options[r] + '">' + e.options[r] + "</option>";
        return t
    },
    generatePreChatHTML: function(e) {
        for (var t = '<div class="chat-fc-form-outer"><p class="fc-header">' + (void 0 === e ? "Freshchat" : e.heading) + '<span class="fc-minimize" onclick="fcPreChatform.on_fc_pre_form_close()">X</span></p><div class="fc-form" dir="auto"><p>' + (void 0 === e ? "We can't wait to talk to you. But first, please take a couple of moments to tell us a bit about yourself." : e.textBanner) + '</p><form class="chat-fc-form"><ul>', r = '</ul></form><a href="#" class="fc-button" onclick="fcPreChatform.on_fc_pre_form_submit(); return false;">' + (void 0 === e ? "Submit" : e.SubmitLabel) + "</a></div></div>", s = e.fields, a = Object.keys(s), i = "", o = 0; o < a.length; o++)
            o <= 4 && (void 0 === s[a[o]].fieldId ? i += '<li class="pre-fc-field"><label>' + s[a[o]].label + "<span>" + ("yes" === s[a[o]].required ? " *" : "") + "</span></label><" + ("dropdown" === s[a[o]].type ? "select " : "input ") + 'type="' + ("phone" === s[a[o]].type ? "text" : s[a[o]].type) + ("name" === s[a[o]].type ? "text" : s[a[o]].type) + '" id="chat-fc-' + s[a[o]].label.replace(/ /g, "").toLowerCase() + '" ' + ("dropdown" === s[a[o]].type ? "onChange" : "onBlur") + '="fcPreChatform.fc_validate_on_blur(event);" ' + ("yes" === s[a[o]].required ? "required " : "") + ("phone" === s[a[o]].type ? 'pattern="^(\\(?\\+[0-9]{0,3}\\)?)?(-? ?[0-9]){7,15}$"' : "") + ("name" === s[a[o]].type ? 'pattern=".*[^ ].*"' : "") + ("email" === s[a[o]].type ? 'pattern="^[a-zA-Z0-9_+&*\\-]+(?:\\.[a-zA-Z0-9_+&*\\-]+)*@(?:[a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,7}$"' : "") + "/>" + ("dropdown" === s[a[o]].type ? this.generateOptions(s[a[o]]) : "") + "</" + ("dropdown" === s[a[o]].type ? "select" : "input") + '><div class="pre-fc-error fc-hide" id="chat-fc-' + s[a[o]].label.replace(/ /g, "").toLowerCase() + '-error">' + s[a[o]].error + "</div></li>" : i += '<li class="pre-fc-field"><label>' + s[a[o]].label + "<span>" + ("yes" === s[a[o]].required ? " *" : "") + "</span></label><" + ("dropdown" === s[a[o]].type ? "select " : "input ") + 'type="' + ("phone" === s[a[o]].type ? "text" : s[a[o]].type) + ("name" === s[a[o]].type ? "text" : s[a[o]].type) + '" id="chat-fc-' + s[a[o]].fieldId.replace(/ /g, "").toLowerCase() + '" ' + ("dropdown" === s[a[o]].type ? "onChange" : "onBlur") + '="fcPreChatform.fc_validate_on_blur(event);" ' + ("yes" === s[a[o]].required ? "required " : "") + ("phone" === s[a[o]].type ? 'pattern="^(\\(?\\+[0-9]{0,3}\\)?)?(-? ?[0-9]){7,15}$"' : "") + ("name" === s[a[o]].type ? 'pattern=".*[^ ].*"' : "") + ("email" === s[a[o]].type ? 'pattern="^[a-zA-Z0-9_+&*\\-]+(?:\\.[a-zA-Z0-9_+&*\\-]+)*@(?:[a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,7}$"' : "") + "/>" + ("dropdown" === s[a[o]].type ? this.generateOptions(s[a[o]]) : "") + "</" + ("dropdown" === s[a[o]].type ? "select" : "input") + '><div class="pre-fc-error fc-hide" id="chat-fc-' + s[a[o]].fieldId.replace(/ /g, "").toLowerCase() + '-error">' + s[a[o]].error + "</div></li>");
        return t + i + r
    },
    createPreChatForm: function(e, t) {
        if (document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "hidden",
        !1 === this.chatCustomData.formCreated) {
            var r = document.createElement("div")
              , s = this;
            r.innerHTML = t,
            document.body.appendChild(r.children[0]),
            document.querySelector(".chat-fc-form-outer p.fc-header").style.backgroundColor = void 0 !== e.mainbgColor ? e.mainbgColor : "",
            document.querySelector(".chat-fc-form-outer .fc-button").style.backgroundColor = void 0 !== e.mainbgColor ? e.mainbgColor : "",
            document.querySelector(".chat-fc-form-outer p.fc-header").style.color = void 0 !== e.mainbgColor ? e.maintxColor : "",
            document.querySelector(".chat-fc-form-outer .fc-button").style.color = void 0 !== e.mainbgColor ? e.maintxColor : "",
            s.chatCustomData.formCreated = !0
        } else
            document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "hidden",
            null === document.querySelector(".chat-fc-form-outer") || (document.querySelector(".chat-fc-form-outer").style.visibility = "visible")
    },
    clearPreChatForm: function() {
        for (var e = Object.keys(this.fields), t = 0; t < e.length; t++)
            if (t <= 4) {
                var r = this.fields[e[t]].label.replace(/ /g, "").toLowerCase()
                  , s = document.getElementById("chat-fc-" + r);
                s && (s.value = "")
            }
    },
    fcWidgetInit: function(e) {
        var t = this;
        this.addCss("StyleSheet2.css");
        var r = this.generatePreChatHTML(e);
        this.fields = e.fields,
        this.authenticateUser = e.authenticateUser,
        window.fcWidget.on("user:created", function(t) {
            !1 === t.success ? console.log("User Not Created") : !0 === t.success && null === t.data ? (console.log("User Exists on Load"),
            "enabled" === e.classicLiveChatMode && window.fcWidget.user.clear(function(e) {
                console.log("User will be cleared")
            })) : 3 === Object.keys(t.data).length && console.log("User Created")
        }),
        window.fcWidget.on("widget:opened", function(s) {
            if ("enabled" === (e.workWithAwayExperience ? e.workWithAwayExperience : "null")) {
                var a = "HH:mm:ss"
                  , i = moment().utc().format("dddd");
                moment().utc();
                var o = moment().utc().format(a);
                if (void 0 !== e.business_hours_config[i]) {
                    var l = moment(e.business_hours_config[i].from, ["h:mm A"])
                      , c = moment(e.business_hours_config[i].to, ["h:mm A"])
                      , n = moment(e.business_hours_config[i].from, ["h:mm A"]).format(a)
                      , d = moment(e.business_hours_config[i].to, ["h:mm A"]).format(a)
                      , f = moment(o, a)
                      , u = moment(n, a)
                      , m = moment(d, a);
                    !0 === f.isBetween(u, m) && !0 === moment(moment()).isBetween(l, c) ? (console.log("Within Business Hours"),
                    window.fcWidget.user.isExists(function(s) {
                        !1 === s.data ? (t.chatCustomData.userCreated = !1,
                        document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "hidden",
                        t.createPreChatForm(e, r)) : (t.chatCustomData.userCreated = !0,
                        window.fcWidget.user.get(function(s) {
                            !0 === s.data.isNameGenerated ? t.createPreChatForm(e, r) : (document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "visible",
                            null === document.querySelector(".chat-fc-form-outer") || (document.querySelector(".chat-fc-form-outer").style.visibility = "hidden"))
                        }))
                    })) : (console.log("Outside Business Hours"),
                    document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "visible")
                } else
                    console.log("Business Hours Not Configured for " + i + " so widget will be always shown"),
                    document.querySelector("." + window.fcSettings.config.cssNames.widget).style.visibility = "visible"
            } else
                window.fcWidget.user.isExists(function(s) {
                    !1 === s.data ? (t.chatCustomData.userCreated = !1,
                    document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "hidden",
                    t.createPreChatForm(e, r)) : (t.chatCustomData.userCreated = !0,
                    window.fcWidget.user.get(function(s) {
                        !0 === s.data.isNameGenerated ? t.createPreChatForm(e, r) : (document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "visible",
                        null === document.querySelector(".chat-fc-form-outer") || (document.querySelector(".chat-fc-form-outer").style.visibility = "hidden"))
                    }))
                })
        }),
        this.authenticateUser && window.fcWidget.on("user:cleared", function(e) {
            console.log("User Cleared"),
            t.clearPreChatForm()
        })
    },
    on_fc_pre_form_submit: function() {
        var e = this
          , t = document.querySelector(".chat-fc-form");
        if (t.classList.add("submitted"),
        t.checkValidity()) {
            var r = document.querySelector(".chat-fc-form-outer .fc-button");
            r.classList.add("submitted");
            for (var s = Object.keys(e.fields), a = [], i = [], o = 0; o < s.length; o++)
                o <= 4 && (void 0 === e.fields[s[o]].fieldId ? ("name" === e.fields[s[o]].label.replace(/ /g, "").toLowerCase() ? a.push("firstName") : "firstname" === e.fields[s[o]].label.replace(/ /g, "").toLowerCase() ? a.push("firstName") : "lastname" === e.fields[s[o]].label.replace(/ /g, "").toLowerCase() ? a.push("lastName") : a.push(e.fields[s[o]].label.replace(/ /g, "").toLowerCase()),
                i.push(document.getElementById("chat-fc-" + e.fields[s[o]].label.replace(/ /g, "").toLowerCase()).value)) : ("name" === e.fields[s[o]].fieldId.replace(/ /g, "").toLowerCase() ? a.push("firstName") : "firstname" === e.fields[s[o]].fieldId.replace(/ /g, "").toLowerCase() ? a.push("firstName") : "lastname" === e.fields[s[o]].fieldId.replace(/ /g, "").toLowerCase() ? a.push("lastName") : a.push(e.fields[s[o]].fieldId.replace(/ /g, "").toLowerCase()),
                i.push(document.getElementById("chat-fc-" + e.fields[s[o]].fieldId.replace(/ /g, "").toLowerCase()).value)));
            var o, l = {};
            for (o = 0; o < a.length; o++)
                l[a[o]] = i[o];
            for (var o = 0; o < Object.keys(l).length; o++)
                "" === l[Object.keys(l)[o]] ? delete l[Object.keys(l)[o]] : l[Object.keys(l)[o]];
            e.preChatFormUserData = {},
            l.firstName && (e.preChatFormUserData.first_name = l.firstName),
            l.lastName && (e.preChatFormUserData.last_name = l.lastName),
            l.email && (e.preChatFormUserData.email = l.email),
            l.phone && (e.preChatFormUserData.phone_number = l.phone),
            l.title && (e.preChatFormUserData.title = l.title),
            l.plan && (e.preChatFormUserData.plan = l.plan),
            window.fcWidget.user.setProperties(l, function(s) {
                !0 === s.success ? (e.authenticateUser && e.authenticateUser(e.preChatFormUserData),
                e.chatCustomData.userCreated = !0,
                document.querySelector(".chat-fc-form-outer").style.visibility = "hidden",
                document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "visible",
                r.classList.remove("submitted"),
                t.classList.remove("submitted")) : (r.classList.remove("submitted"),
                console.log("error setting user properties"))
            })
        } else
            this.fc_validate_on_submit()
    },
    fc_validate_on_blur: function(e) {
        var t = e.target.id
          , r = t + "-error";
        "change" !== e.type ? "" === document.getElementById(t).value ? (document.getElementById(r).style.display = "none",
        document.getElementById(t).style.borderColor = "#ddd") : !1 === document.getElementById(t).checkValidity() ? document.getElementById(r).style.display = "block" : (document.getElementById(r).style.display = "none",
        document.getElementById(t).style.borderColor = "#ddd") : "" === document.getElementById(t).value.trim() ? !1 === document.getElementById(t).checkValidity() && (document.getElementById(r).style.display = "block") : (document.getElementById(r).style.display = "none",
        document.getElementById(t).style.borderColor = "#ddd")
    },
    fc_validate_on_submit: function() {
        for (var e = Object.keys(this.fields), t = [], r = 0; r < e.length; r++)
            r <= 4 && "yes" === this.fields[e[r]].required && t.push(this.fields[e[r]].label.replace(/ /g, "").toLowerCase());
        for (var r = 0; r < t.length; r++) {
            var s = "chat-fc-" + t[r]
              , a = "chat-fc-" + t[r] + "-error";
            "" === document.getElementById(s).value || "" === document.getElementById(s).value.trim() ? (document.getElementById(a).style.display = "block",
            document.getElementById(s).style.borderColor = "red") : !1 === document.getElementById(s).checkValidity() ? (document.getElementById(a).style.display = "block",
            document.getElementById(s).style.borderColor = "red") : (document.getElementById(a).style.display = "none",
            document.getElementById(s).style.borderColor = "#ddd")
        }
    },
    on_fc_pre_form_close: function() {
        window.fcWidget.close(),
        setTimeout(()=>{
            document.querySelector(".chat-fc-form-outer").style.visibility = "hidden",
            document.querySelector("." + window.fcSettings.config.cssNames.widget + " iframe").style.visibility = "visible"
        }
        , 100)
    }
};
