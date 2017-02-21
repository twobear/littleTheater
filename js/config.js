/**
* Created by China on 2014/11/25.
*/

//config={
//    //
//    appid:0,
//    appName:"填写标题",
//    shareImgUrl : 'http://ccbear.sinaapp.com/Answer/img/logo.jpg',
//    appLink: window.location.href,
//    appDesc : '描述',
//
////    对话间隔时间
//    delayTime:2,
////    pop时间
//    popTime:0.8,
//    scrollTime:2,
//    scrollDelay:0.5,
////    确认动画时间
//    checkTime:1,
//    tx1:"img/tx1.png",
//    tx2:"img/tx2.png",
//    male:{tx:"img/tx2.png",name:"亲耐的"},
//    feMale:{tx:"img/tx1.png",name:"老婆大人"},
//    BGColor:"rgb(235, 199, 237)",
//    BGIMG:"img/nn.png",
//    chatBoxColor1:"#FA7CBA",
//    chatTextColor1:"#000",
//    chatBoxColor2:"#D767EF",
//    chatTextColor2:"#000",
//
//    qBoxBGColor:"#fff",
//    qTitleColor:"#222",
//    qBtnBgColor:"rgb(182, 109, 165)",
//    qBtnContextColor:"#fff",
////   题库
//    questionBank:[
//        {
//            id:"00005",
//            title:"点击选中问题后，左边进行编辑修改。选择不同的答案，可以编辑产生不同的对话。先点击下拉选择需要编辑的选择选项",
//            selects:[
//                " 选项一，点击后的对话可以编辑",
//                "选项二，点击后的对话可以编辑"
//            ],
//            result:"A",
//            DES:"[这里对应着本题解释。]",
//            answers:{
//                "A":[
//                    {dataId:"0001",type:"talk",txt:"这一条是点击A选项后的对话",male:false},
//                    {dataId:"0002",type:"talk",txt:"这一条是点击A选项后的对话",male:true}
//                ],
//                "B":[
//                    {dataId:"0001",type:"talk",txt:"这一条是点击B选项后的对话",male:false},
//                    {dataId:"0002",type:"talk",txt:"这一条是点击B选项后的对话",male:true}
//                ]
//            }
//        }
//    ],
////    谈话顺序列表
//    talkList:[
//        {dataId:"00000",type:"actoin",ac:"loadingEnd"},
//        {dataId:"00001",type:"talk",txt:"这里做个简单教学。",male:false},
//        {dataId:"00002",type:"talk",txt:"不同的头像分别，进行添加不同人物的对话以及问题！",male:true},
//        {dataId:"00002",type:"talk",txt:"点击对话可以进行选中！",male:false},
//        {dataId:"00002",type:"talk",txt:"点击红色的删除标签进行删除选中的对话！",male:true},
//        {dataId:"00003",type:"talk",txt:"选中后可以修改对话框内容，添加表情/插入链接，暂时不支持插如图片（程序在修改中~）",male:false},
//        { dataId:"00005",type:"question", tx: "img/tx2.png", index: 1,question: "00005",male:false },
//        {dataId:"00006",type:"talk",txt:"怎样？很简单吧？",male:true},
//        {dataId:"0007",type:"talk",txt:"<a href='http://115.29.136.189:8086/utpia/appSetting/'>赶紧编辑一个</a>",male:false},
//        {dataId:"0008",type:"talk",txt:"编辑完成后，的最后一步就是一键发布了！",male:false}
//    ]
//
//};
config={
//    对话间隔时间
    delayTime:2,

//    pop时间
    popTime:0.8,

    scrollTime:2,
    scrollDelay:0.5,

//    确认动画时间
    checkTime:1,
    male:{tx:"img/tx2.png",name:"亲耐的"},
    feMale:{tx:"img/tx1.png",name:"老婆大人"},
//   题库
    questionBank:[
        {
            id:0,
            title:"内衣和外衣要分开洗么？",
            selects:[
                "A.分开洗",
                "B.一起洗",
                "C.给你洗"
            ],
            result:"A",
            DES:"分开洗是更卫生的啦。",
            answers:{
                "A":[
                    {type:"talk",txt:"你居然知道，为什么每次你一起洗！",male:false}
                ],
                "B":[
                    {type:"talk",txt:"猪头，要分开洗！",male:false}
                ],
                "C":[
                    {type:"talk",txt:"气死偶了，再把我当老妈子我们就分开洗！",male:false},
                    {type:"talk",txt:"<img src='img/zbcdts.png'/>",male:true}
                ]
            }
        },
        {
            id:1,
            title:"月经期间不小心弄脏的小内内是用热水洗还是冷水洗？",
            selects:[
                "A.热水洗，消消毒",
                "B.冷水洗，更环保"
            ],
            result:"B",
            DES:"小内内冷水洗是可以洗掉血渍的。",
            answers:{
                "A":[
                    {type:"talk",txt:"笨蛋，热水洗不掉血啊!",male:false}

                ],
                "B":[
                    {type:"talk",txt:"知道我姨妈来了不能碰冷水吗？下次你知道该怎样做了？",male:false},
                    {type:"talk",txt:"<img src='img/ku.png'/> ",male:true}
                ]

            }
        },
        {
            id:2,
            title:"胸罩如何洗不会变形？",
            selects:[
                "A.正常机洗",
                "B.一手握拳,一手手洗才不变形",
                "C.不知道，我没洗过"
            ],
            result:"B",
            DES:"不过放胸罩笼机洗也可以。",

            answers:{
                "A":[
                    {type:"talk",txt:"你不知道老娘的bra是海淘回来的么？你敢机洗试试？",male:false},
                    {type:"talk",txt:"<img src='img/jing.png'/>",male:true}
                ],
                "B":[
                    {type:"talk",txt:"知道那你怎么没跟我洗过？",male:false},
                    {type:"talk",txt:"老婆我爱你，么么哒~",male:true}
                ],
                "C":[
                    {type:"talk",txt:"就知道你不知道，哼~<img src='img/youhh.png'/>",male:false},
                    {type:"talk",txt:"<img src='img/jing.png'/>",male:true}
                ]
            }
        },
        {
            id:3,
            title:"下面哪种情况洗衣前不需要特别处理？",
                selects:[
                    "A.衬衣领口",
                    " B.有墨迹",
                    " C.有口红",
                    " D.有别人家的香水"
                ],
            result:"D",
            DES:"香水一洗正好就没啦。",

            answers:{
                "A":[
                    {type:"talk",txt:"哎，还好上次不是让你洗的…",male:false},
                    {type:"talk",txt:"下次谨记，嘿嘿",male:true}
                ],
                "B":[
                    {type:"talk",txt:"哎，还好上次不是让你洗的…",male:false},
                    {type:"talk",txt:"下次谨记，嘿嘿",male:true}
                ],
                "C":[
                    {type:"talk",txt:"哎，还好上次不是让你洗的…",male:false},
                    {type:"talk",txt:"下次谨记，嘿嘿",male:true}
                ],
                "D":[
                    {type:"talk",txt:"嗯哼，你快说，你是不是外面有情况？",male:false},
                    {type:"talk",txt:"<img src='img/bizui.png'/>不可能的事儿",male:true}
                ]
            }
        },
        {
            id:4,
            title:"如何辨认衣服是否掉色？",
                selects:[
                    "A.看衣服说明",
                    "B.靠猜",
                    "C.笨蛋，不会先手洗一下试试啊",
                    "D.老婆…求放过"
                ],
            result:"A",
            DES:"不同衣服不同洗涤标准，衣服说明最准确了。",

            answers:{
                "A":[
                    {type:"talk",txt:"这还差不多，有点靠谱。",male:false},
                    {type:"talk",txt:"都是老婆大人教导有方",male:true}
                ],
                "B":[
                    {type:"talk",txt:"猜你妹啊，你以为老娘跟你玩游戏啊",male:false},
                    {type:"talk",txt:"老婆大人息怒，5555~",male:true}
                ],
                "C":[
                    {type:"talk",txt:"你再说一遍试试<img src='img/ku.png'/>",male:false},
                    {type:"talk",txt:"<img src='img/jing.png'/>",male:true}
                ],
                "D":[
                    {type:"talk",txt:"放你一马也行，今晚你在沙发睡~",male:false},
                    {type:"talk",txt:"不要啊，老婆,555~",male:true}
                ]
            }
        }
    ],

//    谈话顺序列表

    talkList:[
        {type:"actoin",ac:"loadingEnd"},
        {type:"talk",txt:"老公据说你要挑战我的权威？脑壳没问题吧？",male:false},
        {type:"talk",txt:"小case，老婆，来吧！",male:true},
        {type:"talk",txt:"那输了不许赖皮，一秒钟准备！",male:false},
        {type:"talk",txt:"老婆老婆我爱你，来吧！(≧▽≦)",male:true},

        {type:"actoin",ac:"initQuestion"},

        {type:"actoin",ac:"getResult"},
		 {type:"talk",txt:"老婆老婆我爱你，要不今晚的衣服……",male:true},
         {type:"talk",txt:"哼，你想得美！",male:false},
         {type:"talk",txt:"美的快净洗衣机今天上市，快帮我挑一款去",male:false},
		 {type:"talk",txt:"<a href='http://sale.jd.com/m/act/hUEskcDFnMgjYX2.html'>链接速戳这里</a>",male:false}
        // {type:"talk",txt:"好了，老公，不想洗碗也可以，帮我做个PPT吧？不会去找秋叶老师学！",male:false},
        // {type:"talk",txt:"快戳这里学：<a href='http://study.163.com/course/introduction.htm?courseId=381006#/courseMain'>老公点这里</a>",male:false}
    ]

};