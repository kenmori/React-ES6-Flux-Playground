
<!doctype html>
<html>
<head>
    <title>Observer</title>
</head>
<body>
疎結合を推進すること

あるオブジェクトが別のオブジェクトのメソッドを呼び出す代わりに、
あるオブジェクトは別なオブジェクトの特別な機能を
購読し、そのオブジェクトから通知を受ける。
この購読者は観察者と言われる。

一方観察されているオブジェクトは発行者あるいはサブジェクトと呼ばれる。
重要なイベントが発生したとき、発行者は全ての購読者に通知（呼び出し）します。
ある形式のイベントオブジェクトでメッセージを渡すこともあります

observer 観察者、購読者

paper 発行者
joe　購読者
subscribers 購読者を格納するproperty

typeパラメーターが必要（雑誌か新聞しかの分岐処理）
subscribe 購読者の配列に追加
unsubscribe() 購読者の配列から削除
publish() 購読者をループで処理し、申込時に提供したメソッドを呼び出す


<script>
"use strict";
var publisher = {
    subscribers: {
        any: [] // event type: subscribers
    },
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    unsubscribe: function (fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    visitSubscribers: function (action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;

        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

/*
var s1 = {log: console.log},
    s2 = {err: console.error},
    s3 = {warn: console.warn};


publisher.subscribe(s1.log);
publisher.subscribe(s2.err);
publisher.subscribe(s3.warn);

publisher.publish({hello: "World"});

publisher.unsubscribe(s2.err);
publisher.publish("hello");


publisher.subscribe(s1.log, "log");
publisher.publish({obj: "log this object"}, "log");
*/

function makePublisher(o) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any: []};
}

var paper = {
    daily: function () {
        this.publish("big news today");
    },
    monthly: function () {
        this.publish("interesting analysis", "monthly");
    }
};

makePublisher(paper);

var joe = {
    drinkCoffee: function (paper) {
        console.log('Just read ' + paper);
    },
    sundayPreNap: function (monthly) {
        console.log('About to fall asleep reading this ' + monthly);
    }
};

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();


makePublisher(joe);

joe.tweet = function (msg) {
    this.publish(msg);
};

paper.readTweets = function (tweet) {
    alert('Call big meeting! Someone ' + tweet);
};

joe.subscribe(paper.readTweets);

joe.tweet("hated the paper today");
</script>

</body></html>
