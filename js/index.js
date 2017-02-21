var $ = function(e) {
    return typeof document === "undefined" ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById(e.charAt(0) === "#" ? e.substr(1) : e)
};
Letter = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
function ready() {
    var w = document.documentElement.clientWidth
        , h = document.documentElement.clientHeight;
    tl = new TimelineMax();
    tl.staggerTo(".circle", 1.5, {
        x: w * .8 + 50,
        repeat: -1,
        repeatDelay: .5,
        force3D: true,
        ease: SlowMo.ease.config(.2, .5)
    }, .15);
    window.scrollBy(0, 2);
    Base64.extendString();
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) {
        if (/iPad/i.test(navigator.userAgent)) {
            document.getElementById("adaptationBox").style.width = "360px";
            document.getElementsByClassName("homePage")[0].style.width = "360px"
        } else {}
    } else {
        document.getElementById("adaptationBox").style.width = "360px";
        document.getElementsByClassName("homePage")[0].style.width = "360px"
    }
    this.app.init()
}
this.app = this.app || {
        scroll: {
            y: 0
        },
        init: function(res) {
            console.log(res);
            res = "eyJkZWxheVRpbWUiOjIsInBvcFRpbWUiOjAuOCwic2Nyb2xsVGltZSI6Miwic2Nyb2xsRGVsYXkiOjAuNSwiY2hlY2tUaW1lIjoxLCJtYWxlIjp7InR4IjoiaW1nL3R4Mi5wbmciLCJuYW1lIjoi5Lqy6ICQ55qEIn0sImZlTWFsZSI6eyJ0eCI6ImltZy90eDEucG5nIiwibmFtZSI6IuiAgeWphuWkp+S6uiJ9LCJxdWVzdGlvbkJhbmsiOlt7ImlkIjowLCJ0aXRsZSI6IuWGheiho+WSjOWkluiho+imgeWIhuW8gOa0l+S5iO+8nyIsInNlbGVjdHMiOlsiQS7liIblvIDmtJciLCJCLuS4gOi1t+a0lyIsIkMu57uZ5L2g5rSXIl0sInJlc3VsdCI6IkEiLCJERVMiOiLliIblvIDmtJfmmK/mm7TljavnlJ/nmoTllabjgIIiLCJhbnN3ZXJzIjp7IkEiOlt7InR5cGUiOiJ0YWxrIiwidHh0Ijoi5L2g5bGF54S255+l6YGT77yM5Li65LuA5LmI5q+P5qyh5L2g5LiA6LW35rSX77yBIiwibWFsZSI6ZmFsc2V9XSwiQiI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLnjKrlpLTvvIzopoHliIblvIDmtJfvvIEiLCJtYWxlIjpmYWxzZX1dLCJDIjpbeyJ0eXBlIjoidGFsayIsInR4dCI6IuawlOatu+WBtuS6hu+8jOWGjeaKiuaIkeW9k+iAgeWmiOWtkOaIkeS7rOWwseWIhuW8gOa0l++8gSIsIm1hbGUiOmZhbHNlfSx7InR5cGUiOiJ0YWxrIiwidHh0IjoiPGltZyBzcmM9J2ltZy96YmNkdHMucG5nJy8+IiwibWFsZSI6dHJ1ZX1dfX0seyJpZCI6MSwidGl0bGUiOiLmnIjnu4/mnJ/pl7TkuI3lsI/lv4PlvITohI/nmoTlsI/lhoXlhoXmmK/nlKjng63msLTmtJfov5jmmK/lhrfmsLTmtJfvvJ8iLCJzZWxlY3RzIjpbIkEu54Ot5rC05rSX77yM5raI5raI5q+SIiwiQi7lhrfmsLTmtJfvvIzmm7Tnjq/kv50iXSwicmVzdWx0IjoiQiIsIkRFUyI6IuWwj+WGheWGheWGt+awtOa0l+aYr+WPr+S7pea0l+aOieihgOa4jeeahOOAgiIsImFuc3dlcnMiOnsiQSI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLnrKjom4vvvIzng63msLTmtJfkuI3mjonooYDllYohIiwibWFsZSI6ZmFsc2V9XSwiQiI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLnn6XpgZPmiJHlp6jlpojmnaXkuobkuI3og73norDlhrfmsLTlkJfvvJ/kuIvmrKHkvaDnn6XpgZPor6XmgI7moLflgZrkuobvvJ8iLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IjxpbWcgc3JjPSdpbWcva3UucG5nJy8+ICIsIm1hbGUiOnRydWV9XX19LHsiaWQiOjIsInRpdGxlIjoi6IO4572p5aaC5L2V5rSX5LiN5Lya5Y+Y5b2i77yfIiwic2VsZWN0cyI6WyJBLuato+W4uOacuua0lyIsIkIu5LiA5omL5o+h5ouzLOS4gOaJi+aJi+a0l+aJjeS4jeWPmOW9oiIsIkMu5LiN55+l6YGT77yM5oiR5rKh5rSX6L+HIl0sInJlc3VsdCI6IkIiLCJERVMiOiLkuI3ov4fmlL7og7jnvannrLzmnLrmtJfkuZ/lj6/ku6XjgIIiLCJhbnN3ZXJzIjp7IkEiOlt7InR5cGUiOiJ0YWxrIiwidHh0Ijoi5L2g5LiN55+l6YGT6ICB5aiY55qEYnJh5piv5rW35reY5Zue5p2l55qE5LmI77yf5L2g5pWi5py65rSX6K+V6K+V77yfIiwibWFsZSI6ZmFsc2V9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiI8aW1nIHNyYz0naW1nL2ppbmcucG5nJy8+IiwibWFsZSI6dHJ1ZX1dLCJCIjpbeyJ0eXBlIjoidGFsayIsInR4dCI6IuefpemBk+mCo+S9oOaAjuS5iOayoei3n+aIkea0l+i/h++8nyIsIm1hbGUiOmZhbHNlfSx7InR5cGUiOiJ0YWxrIiwidHh0Ijoi6ICB5amG5oiR54ix5L2g77yM5LmI5LmI5ZOSfiIsIm1hbGUiOnRydWV9XSwiQyI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLlsLHnn6XpgZPkvaDkuI3nn6XpgZPvvIzlk7x+PGltZyBzcmM9J2ltZy95b3VoaC5wbmcnLz4iLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IjxpbWcgc3JjPSdpbWcvamluZy5wbmcnLz4iLCJtYWxlIjp0cnVlfV19fSx7ImlkIjozLCJ0aXRsZSI6IuS4i+mdouWTquenjeaDheWGtea0l+iho+WJjeS4jemcgOimgeeJueWIq+WkhOeQhu+8nyIsInNlbGVjdHMiOlsiQS7ooazooaPpooblj6MiLCIgQi7mnInloqjov7kiLCIgQy7mnInlj6PnuqIiLCIgRC7mnInliKvkurrlrrbnmoTpppnmsLQiXSwicmVzdWx0IjoiRCIsIkRFUyI6IummmeawtOS4gOa0l+ato+WlveWwseayoeWVpuOAgiIsImFuc3dlcnMiOnsiQSI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLlk47vvIzov5jlpb3kuIrmrKHkuI3mmK/orqnkvaDmtJfnmoTigKYiLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IuS4i+asoeiwqOiusO+8jOWYv+WYvyIsIm1hbGUiOnRydWV9XSwiQiI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLlk47vvIzov5jlpb3kuIrmrKHkuI3mmK/orqnkvaDmtJfnmoTigKYiLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IuS4i+asoeiwqOiusO+8jOWYv+WYvyIsIm1hbGUiOnRydWV9XSwiQyI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLlk47vvIzov5jlpb3kuIrmrKHkuI3mmK/orqnkvaDmtJfnmoTigKYiLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IuS4i+asoeiwqOiusO+8jOWYv+WYvyIsIm1hbGUiOnRydWV9XSwiRCI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLll6/lk7zvvIzkvaDlv6vor7TvvIzkvaDmmK/kuI3mmK/lpJbpnaLmnInmg4XlhrXvvJ8iLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IjxpbWcgc3JjPSdpbWcvYml6dWkucG5nJy8+5LiN5Y+v6IO955qE5LqL5YS/IiwibWFsZSI6dHJ1ZX1dfX0seyJpZCI6NCwidGl0bGUiOiLlpoLkvZXovqjorqTooaPmnI3mmK/lkKbmjonoibLvvJ8iLCJzZWxlY3RzIjpbIkEu55yL6KGj5pyN6K+05piOIiwiQi7pnaDnjJwiLCJDLuesqOibi++8jOS4jeS8muWFiOaJi+a0l+S4gOS4i+ivleivleWViiIsIkQu6ICB5amG4oCm5rGC5pS+6L+HIl0sInJlc3VsdCI6IkEiLCJERVMiOiLkuI3lkIzooaPmnI3kuI3lkIzmtJfmtqTmoIflh4bvvIzooaPmnI3or7TmmI7mnIDlh4bnoa7kuobjgIIiLCJhbnN3ZXJzIjp7IkEiOlt7InR5cGUiOiJ0YWxrIiwidHh0Ijoi6L+Z6L+Y5beu5LiN5aSa77yM5pyJ54K56Z2g6LCx44CCIiwibWFsZSI6ZmFsc2V9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiLpg73mmK/ogIHlqYblpKfkurrmlZnlr7zmnInmlrkiLCJtYWxlIjp0cnVlfV0sIkIiOlt7InR5cGUiOiJ0YWxrIiwidHh0Ijoi54yc5L2g5aa55ZWK77yM5L2g5Lul5Li66ICB5aiY6Lef5L2g546p5ri45oiP5ZWKIiwibWFsZSI6ZmFsc2V9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiLogIHlqYblpKfkurrmga/mgJLvvIw1NTU1fiIsIm1hbGUiOnRydWV9XSwiQyI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLkvaDlho3or7TkuIDpgY3or5Xor5U8aW1nIHNyYz0naW1nL2t1LnBuZycvPiIsIm1hbGUiOmZhbHNlfSx7InR5cGUiOiJ0YWxrIiwidHh0IjoiPGltZyBzcmM9J2ltZy9qaW5nLnBuZycvPiIsIm1hbGUiOnRydWV9XSwiRCI6W3sidHlwZSI6InRhbGsiLCJ0eHQiOiLmlL7kvaDkuIDpqazkuZ/ooYzvvIzku4rmmZrkvaDlnKjmspnlj5HnnaF+IiwibWFsZSI6ZmFsc2V9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiLkuI3opoHllYrvvIzogIHlqYYsNTU1fiIsIm1hbGUiOnRydWV9XX19XSwidGFsa0xpc3QiOlt7InR5cGUiOiJhY3RvaW4iLCJhYyI6ImxvYWRpbmdFbmQifSx7InR5cGUiOiJ0YWxrIiwidHh0Ijoi5rKh6Zeu6aKY5ZCn77yfIiwibWFsZSI6ZmFsc2V9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiLlsI9jYXNl77yM6ICB5amG77yM5p2l5ZCn77yBIiwibWFsZSI6dHJ1ZX0seyJ0eXBlIjoidGFsayIsInR4dCI6IumCo+i+k+S6huS4jeiuuOi1luearu+8jOS4gOenkumSn+WHhuWkh++8gSIsIm1hbGUiOmZhbHNlfSx7InR5cGUiOiJ0YWxrIiwidHh0Ijoi6ICB5amG6ICB5amG5oiR54ix5L2g77yM5p2l5ZCn77yBKOKJp+KWveKJpikiLCJtYWxlIjp0cnVlfSx7InR5cGUiOiJhY3RvaW4iLCJhYyI6ImluaXRRdWVzdGlvbiJ9LHsidHlwZSI6ImFjdG9pbiIsImFjIjoiZ2V0UmVzdWx0In0seyJ0eXBlIjoidGFsayIsInR4dCI6IuiAgeWphuiAgeWphuaIkeeIseS9oO+8jOimgeS4jeS7iuaZmueahOiho+acjeKApuKApiIsIm1hbGUiOnRydWV9LHsidHlwZSI6InRhbGsiLCJ0eHQiOiLlk7zvvIzkvaDmg7Plvpfnvo7vvIEiLCJtYWxlIjpmYWxzZX0seyJ0eXBlIjoidGFsayIsInR4dCI6Iue+jueahOW/q+WHgOa0l+iho+acuuS7iuWkqeS4iuW4gu+8jOW/q+W4ruaIkeaMkeS4gOasvuWOuyIsIm1hbGUiOmZhbHNlfSx7InR5cGUiOiJ0YWxrIiwidHh0IjoiPGEgaHJlZj0naHR0cDovL3NhbGUuamQuY29tL20vYWN0L2hVRXNrY0RGbk1nallYMi5odG1sJz7pk77mjqXpgJ/miLPov5nph4w8L2E+IiwibWFsZSI6ZmFsc2V9XX0=";
            res = res.fromBase64();
            // config = JSON.parse(res);
            var json = {
                bg: config.BGColor,
                talBox1: config.chatBoxColor1,
                talboxfont1: config.chatTextColor1,
                talbox2: config.chatBoxColor2,
                talkboxfont2: config.chatTextColor2,
                btnbg: config.qBtnBgColor,
                btnfont: config.qBtnContextColor,
                qbox: config.qBoxBGColor,
                title: config.qTitleColor
            };
            window.styleText = template.format(template.style, json);
            if (document.all) {
                document.createStyleSheet("javascript:styleText")
            } else {
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = styleText;
                document.getElementsByTagName("head").item(0).appendChild(style)
            }
            setTimeout(app.start, 2e3)
        },
        fail: function() {
            alert("页面错误~")
        },
        loadingShow: function(isShow) {
            $(".loadingPage")[0].style.display = isShow ? "block" : "none"
        },
        shareShow: function(isShow) {
            $("sharePage")[0].style.display = isShow ? "block" : "none"
        },
        addChat: function(data) {
            var t, tx, selecter;
            if (data.male) {
                t = template.mtalk;
                tx = config.male.tx
            } else {
                t = template.ftalk;
                tx = config.feMale.tx
            }
            $(".content")[0].innerHTML += template.format(t, {
                tx: tx,
                txt: data.txt
            });
            if (data.male) {
                selecter = ".talkBox-m"
            } else {
                selecter = ".talkBox"
            }
            var boxArr = $(".content .line " + selecter);
            TweenMax.to(boxArr[boxArr.length - 1], 1, {
                opacity: 1,
                delay: .5,
                ease: Back.easeOut,
                force3D: true
            });
            app.scrollToButtom()
        },
        questionIndex: 1,
        results: [],
        getQuestionFromBan: function(qid) {
            for (var i = 0; i < config.questionBank.length; i++) {
                if (config.questionBank[i].id == qid) {
                    return config.questionBank[i]
                }
            }
        },
        addQuestion: function(data) {
            var q, tx, btns = "";
            q = app.getQuestionFromBank(data.question);
            app.results.push({
                id: q.id,
                answers: q.answers,
                des: q.DES
            });
            var str = "ABCDEF";
            for (var i = 0; i < q.selects.length; i++) {
                btns += template.format(template.button, {
                    value: str.substr(i, 1),
                    result: q.result,
                    btnContext: q.selects[i]
                })
            }
            if (data.male) {
                tx = config.male.tx
            } else {
                tx = config.feMale.tx
            }
            var json = {
                tx: tx,
                index: app.questionIndex,
                question: q.title,
                buttons: btns
            };
            $(".content")[0].innerHTML += template.format(template.question, json);
            app.addClickEvent("#Q" + app.questionIndex + " .btn");
            app.questionIndex++;
            app.scrollToButtom()
        },
        answerClick: function(e) {
            var target = e.target;
            var arr = target.parentNode.getElementsByClassName("btn");
            for (var i = 0; i++; i < arr.length) {
                arr.removeEventListener("click", app.answerClick)
            }
            target.className = "btn selectItem";
            var index = app.playIndex;
            var correct = target.getAttribute("data-result");
            var value = target.getAttribute("data-value");
            var List = app.getAnswers(value);
            var des = app.getDescribe();
            config.talkList.splice(index++, 0, {
                type: "talk",
                txt: target.innerText,
                male: true
            });
            for (var i = 0; i < List.length; i++) {
                config.talkList.splice(index++, 0, List[i])
            }
            config.talkList.splice(index++, 0, {
                type: "talk",
                txt: "正确答案是：" + correct + "。 " + des,
                male: false
            });
            app.play()
        },
        addClickEvent: function(selector) {
            var arr = $(selector);
            for (var i = 0; i < arr.length; i++) {
                arr[i].removeEventListener("click", app.answerClick);
                arr[i].addEventListener("click", app.answerClick)
            }
            TweenMax.staggerFrom(selector, 2, {
                scale: .5,
                opacity: 0,
                delay: .5,
                ease: Elastic.easeOut,
                force3D: true
            }, .2)
        },
        scrollToButtom: function() {
            var h = document.documentElement.offsetHeight - document.documentElement.clientHeight;
            var tween = new TweenMax(app.scroll,config.scrollTime,{
                y: 0,
                ease: Power2.easeOut,
                onUpdate: function(e) {
                    window.scrollTo(0, app.scroll.y)
                },
                onUpdateParams: [app.scroll]
            });
            tween.updateTo({
                y: h
            }, false)
        },
        initQuestion: function() {
            var index = app.playIndex + 1
                , count = config.questionBank.length;
            arr = [];
            Math.round(Math.random() * count);
            for (var i = 0; i < 5; i++) {
                config.talkList.splice(index++, 0, {
                    type: "question",
                    question: i,
                    male: false
                })
            }
        },
        getAnswers: function(result) {
            var q = app.results[app.results.length - 1]
                , ans = q.answers;
            return ans[result]
        },
        getQuestionFromBank: function(qid) {
            for (var i = 0; i < config.questionBank.length; i++) {
                if (config.questionBank[i].id == qid) {
                    return config.questionBank[i]
                }
            }
        },
        getDescribe: function() {
            var q = app.results[app.results.length - 1];
            return q.des
        },
        isplay: true,
        playIndex: 0,
        start: function() {
            var tk = config.talkList[app.playIndex];
            if (!tk)
                return;
            switch (tk.type) {
                case "actoin":
                    switch (tk.ac) {
                        case "loadingEnd":
                            app.loadingShow(false);
                            break;
                        case "wait":
                            app.stop();
                            break;
                        case "initQuestion":
                            app.initQuestion();
                            break
                    }
                    break;
                case "talk":
                    app.addChat(tk);
                    break;
                case "question":
                    app.addQuestion(tk);
                    app.stop();
                    break
            }
            app.playIndex++;
            if (app.isplay) {
                setTimeout(app.start, config.delayTime * 1e3)
            }
        },
        play: function() {
            app.isplay = true;
            app.start()
        },
        stop: function() {
            app.isplay = false
        }
    };
// WeixinApi.ready(function(Api) {
//     var wxData = {
//         appId: "",
//         imgUrl: "http://ccbear.sinaapp.com/Answer/img/logo.jpg",
//         link: window.location.href,
//         desc: "你到底帮老婆或女朋友洗过衣服没有？五道题就能让你现原形，不服来战！",
//         title: "老公，答对这五道题，今晚不用你洗衣！"
//     };
//     var wxCallbacks = {
//         ready: function() {
//             wxData.desc = config.appDesc;
//             wxData.title = config.appName;
//             wxData.imgUrl = config.shareImgUrl || ""
//         },
//         cancel: function(resp) {},
//         fail: function(resp) {},
//         confirm: function(resp) {},
//         all: function(resp, shareTo) {}
//     };
//     Api.shareToFriend(wxData, wxCallbacks);
//     Api.shareToTimeline(wxData, wxCallbacks);
//     Api.generalShare(wxData, wxCallbacks)
// });
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null
}
function ajaxPOST(url, send, fnTip, fnSucc, FnFaild) {
    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest()
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP")
    }
    oAjax.open("POST", url, true);
    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    oAjax.send(send);
    if (fnTip)
        fnTip();
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                if (fnSucc) {
                    fnSucc(oAjax.responseText)
                }
            } else {
                if (FnFaild)
                    FnFaild()
            }
        }
    }
}



this.template = this.template || {};

(function () {
    template["ftalk"] = function () {
        /*<div class="line clearfix ">
         <div class="tx">
         <img class="female" src="#{tx}">
         </div>
         <div class="talkBox">
         <span class="diamond"><span>◆</span></span>
         <span class="talkBoxBg">
         <p >#{txt}</p>
         </span>
         </div>
         </div>
         */
    };
    template["mtalk"] = function () {
        /* <div class="line clearfix ">
         <div class="tx">
         <img class="male" src="#{tx}"/>
         </div>
         <div class="talkBox-m">
         <span class="diamond-m"><span>◆</span></span>
         <span class="talkBoxBg-m">
         <p>#{txt}</p>
         </span>
         </div>
         </div>
         */
    };
//    {
//        tx:
//        index:
//        question:
//        buttons
//    }
    template["question"] = function () {
        /*<div class="line clearfix">
         <div class="tx">
         <img class="female" src="#{tx}">
         </div>
         <div class="questionBox clearfix">
         <span class="diamond-q">◆</span>
         <div class="title">
         <h>#{index}.#{question}</h>
         </div>
         <div id="Q#{index}" class="selects">
         #{buttons}
         </div>
         </div>
         </div>
         */
    };
    //    {
//        value: "A",
//        result: "A"
//          btnContext:"bla bla";
//    }
    template["button"] = function (buttons) {
        /*
         <a class="btn" href="javascript:;" data-value="#{value}" data-result="#{result}">#{btnContext}</a>
         */
    };
//{bg:xx,talBox1:xx,talboxfont1:xx,talbox2:xx,talkboxfont2:xx,btnbg:xx,btnfont:xx,qbox:xx,title}
    template["style"] = function () {
        /*

         .homePage{ background:#{bg};}
         .talkBoxBg{background: #{talbox1};color:#{talboxfont1};}
         .diamond {color: #{talbox1};}
         .talkBoxBg-m{background: #{talbox2};color:#{talboxfont2};}
         .diamond-m {color:#{talbox2}; }
         .btn{background: #{btnbg};color:#{btnfont};}
         .questionBox{background: #{qbox};}
         .diamond-q{color: #{qbox};}
         .title h{color: #{title}}

         */
    };

    template.format = function (template, json) {
        template = String(template).replace(/^[^\{]*\{\s*\/\*!?|\*\/[;|\s]*\}$/g, '');
        return template.replace(/#\{(.*?)\}/g, function (all, key) {
            return json && (key in json) ? json[key] : "";
        });
    };

})();
