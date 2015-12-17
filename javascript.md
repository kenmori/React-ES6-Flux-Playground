javascriptの基礎的な所は知っているけど自分がどのくらい理解しているのか確認したい。実務で使わないメソッドの扱いが不安。何かを参照しながら書くことはできるけどコピペしたくないしちゃんと会得したい。会得したいけど勉強方法が分からない


・var afa = {a: ‘a'}とvar ee = {b:’b'}をmergeしたmを出力してください e.g {a:’a’,b:’b'}

```js
var m = Object.assign(afa,ee);
m //
```



・var arry = ['eee','ccc’]の要素を抜き取ってください e.g “eee” と “ccc"

```js
var arry = ['aa','ccc'];
arry.map(function(key,i){
 console.log(key)
})
//"aa"
//"ccc"
```

・var arry = [‘eee’, ‘ccc’]を要素にindexを足された文字列を出力してください e.g “eee0” と “ccc1"

```js
var arry = ['aa','ccc'];
arry.forEach(function(key,i){
 console.log(key + i)
})
//"aa0"
//"ccc1"
```

var ee = [1,2]は配列かどうか検査したbloolean値(true)ください
e.g true

```js
Array.isArray(ee) //true

```

var aa = "fafa"を出力した後完全に削除し、削除されたことを出力してくださいe.g
"aa is not defined"

```js

var aa = "fee";
aa
//"fee"
delete aa
//true
aa
//"aa is not defined"

```
 ee(2,4,5)を実行したら引数が全て配列で返る関数eeを定義しなさい
[参照](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```js
function ee(){
 return Array.from(arguments)
}
ee(2,4,5)//[2.4,5]
```


var obj2 = {
key: "eee",
key2:"ccc"
};の中のkeyとvalueを全て出力しなさい

```js
var obj2 = {
  key: "eee",
  key2:"ccc"
};
for( key in obj2){
 console.log(key);
 console.log(obj2[key])
}
```

var array3 = ['fafa','eee','ccc']配列の中の全ての要素を結合し、1つの文字列として出力してください。但し、array3.lengthはif文の外でcountとして定義すること

```js
var ee = "";
var count = array3.length;
for(var i= 0; i < count; i++){
  ee += array3[i];
}
ee
//"fafaeeeccc"

```

Array.isArrayが実行できない環境を想定してvar ee = [1,2]が配列であることを検査できる拡張された関数を定義してください
ヒント
if分岐、Object.prototype、返り値 [object Array]

//51P

```js
if(typeof Array.isArray === "undefined"){
 Array.isArray = function(arg){
  return Object.prototype.toString.call(arg) === "[object Array]";
 };
}

```
var arry4 =[{id:34343,name:'morita'},{id:89,name:'kenji'},{id:7827,name:'uro'},{id:2739,name:'kenji'}]
をid番号が若い順にソートしたオブジェクトを含む配列を出力してね

```js

var arry4 = [
  {id:34343,name:'morita'},
  {id:89,name:'kenji'},
  {id:7827,name:'uro'},
  {id:2739,name:'kenji'}
]
arry4.sort(function(a,b){
 if(a.id > b.id) return 1;
 if(a.id < b.id) return -1;
});
/*
[[object Object] {
  id: 89,
  name: "kenji"
}, [object Object] {
  id: 2739,
  name: "kenji"
}, [object Object] {
  id: 7827,
  name: "uro"
}, [object Object] {
  id: 34343,
  name: "morita"
}]
*/
```
fetchSomething1に代入されたpromise型を返す無名関数のresolve時とfall時の実装をthenメソッドでしてください。promiseのコールバック関数の中でdoAjaxStuffを実施。[参照](https://html5experts.jp/takazudo/17107/)

```js

```

next()を実行しただけ返り値が1増える関数を定義してね
P70

```js
var setUp = function(){
  var count = 0;
  return function(){
    return (count += 1);
  }
};
var next = setUp();
next();//1
next();//2
next();//3
```

class Fafaf {}を作成した際の内部の動きを教えてください。

```js

```

12/15
配列```myArray = ["kkk1","kkk2","kkk3","kkk4","kkk5"]```の1〜3番目の要素をそれぞれred,green,yellowに置き換えてください。また実行した際の返り値を教えてください

```js
var myArray = ["kkk1","kkk2","kkk3","kkk4","kkk5"];
myArray.splice(0,2,"green","red","yellow");//インデックス0から2つの要素を削除。
//返り値:["kkk1", "kkk2"]
//myArray:["green", "red", "yellow", "kkk3", "kkk4", "kkk5"]

```

```myArray= ["kkk1","kkk2","kkk3","kkk4","kkk5"];```
の2つ目〜4つ目の要素を取り出し配列とし出力しなさい。実行された後のMyarrayの要素を教えてください

```js
var myArray = ["kkk1","kkk2","kkk3","kkk4","kkk5"];
var fafa = myArray.slice(1,4);
console.log(fafa);//["kkk2", "kkk3","kkk4"]
//Myarrayは["kkk1","kkk2","kkk3","kkk4","kkk5"]で変わらず
```

```var myArray = ["kkk1","kkk2","kkk3","kkk4","kkk5"];```の全ての要素を```/```で結合した文字列の返り値を出力し、元の配列と同じ配列を表示してください

```js
var myArray =  ["kkk1","kkk2","kkk3","kkk4","kkk5"];
myArray.join("/").split("/");

```

```var gArray =  ["おはよう","こんにちは","おやすみなさい"];```配列の要素がランダムに出力される関数を書いてください。
```js
var gArray =  ["おはよう","こんにちは","おやすみなさい"];
var g = gArray[Math.floor(Math.random() * 3)];
g//おはよう or こんにちは or おやすみなさい
```


Objectオブジェクトで空のオブジェクトを作成し、値が42のプロパティpを持ちなさい

```js
var o = Object.create({}, { p: { value : 42 }})
o.p //42
```

オブジェクトWhoを作成し、初期化時に"morita"(String)を渡しnameプロパティに代入、インスタンス「o」のメソッドを使いWho.prototype.name値が返ってくるいわゆる「classのようなもの」を作成してください
※インスタンスメソッドはprototype継承で代入してください

```js
function Who(name){
 this.name = name;
};
Who.prototype.getName = function(){
 console.log('Myname is ' + this.name);
};
var o = new Who("morita");
o.getName()
```

浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください。

```
**shallow copy**
プロパティ値や要素値だけのコピーでその先の参照まではコピーしない
例
var arr = [{x : 2}];//オブジェクト参照をもつ配列
var arr2 = [].concat(arr);//要素をコピー
arr2[0].x = 123;//変数arr2から見える要素の参照先オブジェクトを変更。
arr[0].x//変数arrから変更が見える(shallowだから)
//123

**deep copy**
コピー元とコピー先が別のオブジェクトを参照していること。プロパティが別のオブジェクトを参照していれば参照崎のオブジェクトも含めてコピーします。deepcopyが必要な場面はない。自分で実装する必要がある。パーフェクトP199


```

文字列```"10"```をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

```js

var a = parseInt("10");
typeof a
isNaN(e);
a.toString();
//"10"

```

カーリー化されたadd(1)(2)もしくはadd(1,2)
を実行した際両方とも返り値3になる関数を定義しなさい。p85

```js
function add(x, y){
 if(typeof y == "undefined"){//部分適用
  return function(y){
    return x + y
  }
 }
 //完全適用
 return x + y
}
add(1)(2) //3
add(1,2) //3
```


クロージャーを使ったファクトリー関数。下記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つファクトリー関数を定義しなさい
。
```
var fafa = Factory("morita");
fafa.introduce()
"morita"
```
```js
function Factory(name){
 function getName(){
  return name;
 };
 return {
  introduce : function(){
    console.log(getName());
   }
 }
};
var fafa = Factory("morita");
fafa.introduce()
//morita
```

bind、call、apply

```js

```
関数```sayHi```に自分の名前を引数で渡した際に```hello!yourname```、何も渡さない場合```hello!```
と返す関数を作成し、それをapplyで実行してください。また
applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください
p83
```js
var sayHi = function(name){
 return "hello!" + (name ? name : "");
};
sayHi("kenji");
sayHi();
sayHi.apply(null,["kenji"]);//関数呼び出し
var greeting = {
  sayHi: function(name){
    return "hello!" + (name ? name : "");
  }
};
//メソッド呼び出し
greeting.sayHi.apply(greeting,["kenji"]);//渡す
greeting.sayHi.apply(greeting);//渡さない


//関数呼び出しの場合thisはwindowを指し、nullを渡す、
//メソッド呼び出しの場合thisはオブジェクトを指しオブジェクトの参照を渡す
```

ECMAScript5

```var obj = {x : 2, y: 3};```このobjをプロパティ追加不可、削除変更は可能にし、プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。
```js
var obj = {x : 2, y: 3};
Object.preventExtensions(obj);
Objcet.isExtensible(obj);//true
Object.key(obj);
//["x", "y"]
```

```var obj = {}```と等価をObjctメソッドで生成してください
  パーフェクトP148

```js
var obj = Object.create(Object.prototype);

```
```var obj = {x : 2, y: 3}```と等価をObjectメソッドで生成してください

```js
var obj = Object.create(Object.prototype, {
   x : {value: 2, writable: true, enumerable: true, configurable: true},
   y : {value: 3, writable: true, enumerable: true, configurable: true}
})

```

```var obj = { x : 2}```の属性を出力してください

```js
Object.getOwnPropertyDescriptor(obj, 'x');
// {
//  configurable: false,
//  enumerable: false,
//  value: 2,
//  writable: false
//.fseventsd/}
```

```var obj2 = {x : 2};```
にObjectメソッドを用いてプロパティ```y```、値```2```、```プロパティ追加可能```を定義して、Objectメソッドで情報(値と属性)を返してくださいP149
```js
var obj2 = {x : 2};
Object.defineProperty(obj2, 'y', {value: 3, enumerable: true});
//[object Object] {
//  x: 2,
//  y: 3
//}

Object.getOwnPropertyDescriptor(obj2, 'y')
// {
//  configurable: false,
//  enumerable: true,
//  value: 3,
//  writable: false
//}
```

実引数の数を出力、第一引数を出力する関数fを実行してください

```js
function f(){
 console.log(arguments.length)
 console.log(arguments[0])
}
f(2)
//1
//2

```
```var arr = ["2","23","0","16"];```
を小さい順にソードしてください。
その後ソートをできないようにread-onlyにしてください
```js
var arr = ["2","23","0","16"];
arr.sort(function(a,b){ return a - b ;});
//["0", "2", "16", "23"]
Object.freeze(arr);
//["0", "2", "16", "23"]
arr.sort();
//.fseventsd/"Cannot assign to read only property '1' of [object Array]"

```

```var arr = [3,4,5];```をconcat以外で```arr2```にコピーしてください。
その後```arr2[0] = 123```を代入すると```arr```は何を出力するか答えなさい

```js

var arr = [3,4,5];
var arr2 = arr.slice(0, arr.length);
arr2
//[3, 4, 5]
arr2[0] = 123;
arr
//[3, 4, 5]//変数arrから変更は見えない(要素をコピーしているから)
arr2
//[123, 4, 5]
```
```js

```
JSON文字列```{"x" : 1, "y": 2}```
をオブジェクトに変換してJSON文字列に変換してください。またなぜ下記の2つはエラーになるか答えてください。
```
var s = JSON.parse("'foo'");
var arr = JSON.parse("{x : 1}");
```

```js
var s = '{"x" : 1, "y": 2}';
var obj = JSON.parse(s);
JSON.stringify(obj);
//"{\"x\":1,\"y\":2}"
**下記はなぜエラーになるか**
var s = JSON.parse("'foo'");
//シングルクォーテーションの文字列はエラー-
var arr = JSON.parse("{x : 1}");
//プロパティ名が文字列でないとエラー

```
strict modeの代表的な制約を9つ挙げなさい
P222 パーフェクト

```
- 暗黙のグローバル変数の禁止
- 関数内でthis参照がグローバルオブジェクトを参照しない
- NaN、Infinity、undefinedのグローバル変数を読み込み専用
- 同名のプロパティ名を禁止
- 同名の仮引数名を禁止
- arguments.calleeアクセスの禁止
- Functionオブジェクトのcallerプロパティのアクセス禁止
- with文の禁止
- evalが新しいシンボルを作らない

```

for in文に関する注意点を3つ挙げてください
p89 パーフェクト
```
- プロパティを列挙する順序がオブジェクトリテラルと配列リテラルで違う
- 列挙できないプロパティがある(Array.lengthなど)
- プロトタイプ継承したプロパティも列挙するところ

```
これは2秒後に```"hello!kenji!"```とconsole.logに出力されることを期待していますが動きません。正しく修正してください。なぜそうなるか理由もください。

```js

var Person = function (name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log('hello!' + this.name + '!');
}

var morita = new Person('kenji');
morita.sayHello()

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js
## lodash.js

0~9までの要素を持つ配列を返しなさい

```js
_.range(10);
//[0,1,2,3,4,5,6,7,8,9]

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

ES6

```js

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
