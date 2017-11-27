# 1. Intro
### 1. 변수명 짓기

* 캐멀케이스(startName)
* 스네이크케이스(start_name)
* 헝가리언케이스(strStartName)

: 협업을 위해서는 변수명을 잘 지어야한다. 

안 좋은 변수명 ex) startname
<br>
<br>
루비 같은 경우는 스네이크케이스를 지향한다. 


### 2. 코딩스타일

K & R
```java
//K&R
if(조건문) {
    //실행문
} else {

}
```

BSD
```ruby
//BSD
if(조건문)
{
    //실행문
}
else if
{

}
```

GNU
```ruby
//GNU
if(조건문)
    {
        //실행문
    }

```
퍼포먼스적으로는 BSD가 좋다. 

### 3. 인덴트 지키기
똑같은 코드이고 분명 돌아간 코드인데, 내꺼에서는 안 돌아간다면?



# 2. Web

## 1. Project 생성 & HTML 개요 ! 

```ruby
$ rails g scaffold post title:string content:text
$ rake db:migrate
```
**web 실행** 하면, 순수 HTML 테그로만 이루어진 Webpage를 볼 수 있다. <br>
* https://[프로젝트명].c9users.io/posts 에서 확인


### session
* 무상태성을 해결하기 위한 것이다. 

### HTML
고정된 문서이기 때문에, 이쁘지 않다. 
* 여는 태그가 있고 닫는 태그가 있다. 

```html
  <p></p>
  <h1></h1>
```

### CSS
이쁘게 만들기 위해서 css를 사용한다. 
* 여는 태그 닫는 태그 
* 속성이 있고
* 속성 값이 있다. 

```html
  <style>
  .test {
    color:pink;
    font-size: 10cm;
  }
  </style>
```

# 3. Javascript
역동적으로 만들기 위해서 javascript를 상용한다. 
## 1. Javascript란?
* 클래스가 추가 되었다가, 없어졌다가 한다. 
    * 클래스를 넣었다 뺐다 하면서 css가 적용되도록 만드는 역할도 한다. 
    * 자동으로 type을 맞춰준다. (typescript는 타입을 맞춰주어야함)
* 변수
    * var
    * let : 선언하기 전에는 존재하지 않았던 것
    * const
* 내용 출력
    * console
    * log
    * dir
    * etc ..
* java문법과 비슷? 
* html과 상호작용하면서 작성되어야 한다. 
<br><br>

### javascript의 for문 작성

* for문

```html
    for(vag a = 1; a < 10; a++) {
      
    }
```

### javascript의 내용출력

* consoel, log

로그를 찍어보기 위해서는 console을 사용해서 내용을 본다. <br>
console은 하나의 객체, log는 메소드

```html
    for(vag a = 1; a < 10; a++) {
      console.log("HI");
      console.dir(console);
    }
```

## 2. 수도코드로 Javascript 맛보기 !!

#### 첫번째 문제 
* Q. 오늘 출석한 사람중에서 가장 키가 큰 사람은?
```
  <script type="text/javascript">
    Q. 오늘 출석한 사람중에서 가장 키가 큰 사람은?
    1. 배열을 만든다. 배열에 모든 사람의 키를 입력한다. 
    2. sort중 bubble sort
      (1) 첫번째 사람의 키를 알아낸다.
      (2) 이 사람이 가장 큰 사람이라고 가정한다. 
      (3) 두번째 사람.. 세번재 사람.. 돌면서 가장 큰 사람과의 키를 비교한다. 
      (4) 가장 큰 사람보다 더 큰 사람이 나타나면 
      (5) 그 사람이 가장 큰 사람이라고 다시 가정한다. 
      (6) 반복문이 끝나면(모든 사람의 키를 비교하고 나면) 가장 큰 사람의 키를 알 수 있다. 
  </script>

```
#### 두번째 문제
* Q. 홈페이지에 가입할 때 아이디 중복체크 하는 과정

```
  <script type="text/javascript">
    1. 아이디를 입력한다. 
    2. 중복확인 버튼(이벤트 리스너)을 클릭한다. (이벤트)
    3. 폼을 확인
      (1) 폼이 빈칸이니? 안내메세지 출력(메소드)
      (2) 빈칸이 아니니? DB에 쿼리를 날린다. 
    4. row가 존재하는지 확인
      (1) 결과값이 1이 나오면 아이디가 있다는 것이다.  
      (2) 결과값이 0이면, 아이디가 없다는 것이다. 
      (3) 결과값을 출력한다.
  </script>
```

ajax도 http request이기 때문에 너무 많이 사용할 경우 과부하가 걸린다. 



## 3. webpage에서 javascript 맛보기!!

#### 콘솔창 확인해보기
* web > 개발자도구 > console

```
console.log("hi");
VM662:1 hi
undefined
alert("hi");
undefined
window
Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

```

* window

    * window에는 굉장히 많은 속성들과 method들이 들어있다. 

* location

    * 이것도 하나의 객체이다. 

```
location
Location {href: "https://www.naver.com/#", ancestorOrigins: DOMStringList, origin: "https://www.naver.com", replace: ƒ, assign: ƒ, …}
ancestorOrigins
:
DOMStringList {length: 0}
assign
:
ƒ ()
hash
:
""
host
:
"www.naver.com"
hostname
:
"www.naver.com"
href
:
"https://www.naver.com/#"
origin
:
"https://www.naver.com"
pathname
:
"/"
port
:
""
protocol
:
"https:"
reload
:
ƒ reload()
replace
:
ƒ ()
search
:
""
toString
:
ƒ toString()
valueOf
:
ƒ valueOf()
Symbol(Symbol.toPrimitive)
:
undefined
__proto__
:
Location
```


* document

    1. 가장 많이 다루게 될 객체
    2. document에서 돔트리를 그린다. 
    3. html 태그들이 들어있다. 

```
document
#document<!DOCTYPE html><html lang=​"ko" class=​"svgless">​<head>​…​</head>​<body class>​…​</body>​</html>​

```

* console
    * 지금 보고 있는 창을 말한다. 



## 4. 객체와 속성 !!
* 괄호와 괄호가 없는것
* 속성이나 메소드냐의 차이


* location.href
----------------

값을 가지고 있는 속성

```
location.href;
"https://www.naver.com/#"

```

* location.replace()
--------------------


행동을 가지고 있는 method이다. <br>
f가 달려있으면 method <br>
method도 하나의 속성이고 실행시키느냐 실행시키지 않느냐 이지만, 뒤에 괄호를 붙이면 실행이라는 뜻이다. <br>
<br>
replace는 히스토리를 다 없애버린다. 


```
location.replace("https://google.com")
```

* window.history.back();
--------------------

```
window.history.back();
```

## 5. javascript와 j-query?
javascript가 상위개념, j-query는 javascript의 라이브러리다. 





### javascript

[js w3school](https://www.w3schools.com/js/)

1. 네이버 로고를 가져와보자

```
var logo = document.getElementsByClassName('naver_logo');
undefined

console.dir(logo);
VM228:1 HTMLCollection(1)0: span.naver_logolength: 1__proto__: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ ()__proto__: Object

```

2. 생짜 javascript

```
<script>
  console.log("내가왔다!!!");
</script>

```

3. javascript 파일 분류하기

public에 넣어놓기 
* public/come.js

```
console.log("내가왔다!!!");

```
index.erb

```
<script src="./come.js"></script>

```

4. [app/assets/javascript]

coffee script는 쓰지 않을 것이다. 
따라서 .js로 이름 바꾸기 

```
# 원래의 내용물 지우고
console.log("내가 두번째 왔다.!! ")

```

* 세번째 문제
*  Q. 50분마다 잠시 쉬는 시간을 가지는 안내메시지 출력
+ 17시는 마지막 시간이므로 수고하셨습니다 메시지 출력
+ 그 이전에는 열공합니다 메시지 출력

```
1. 현재 시간을 가져온다. 
2. 현재 시간 중에서 "시"에 해당하는 부분을 가져온다. 
3. "시"에 해당하는 부분이 17 이상일 경우 잘가~
아닐경우 "열공하자!"(alert)
4. 1, 2, 3에 해당하는 과정을 50분에 한번씩만 나오게! 

```
* javascript time now

```
var time = new Date();
console.log(time);
```

내용물 보기

```
console.dir(time);
```

* javascript set timer
* js set interval 

:일정시간에 한번씩 alert

전체내용
[app/assets/javascripts/posts.js]

```
 setInterval(function() 
{
    var time = new Date();
    console.log(time);
    var hour = time.getHours();
    console.log(hour);
    if(hour >= 17)
    {
        alert("잘가용!!!");    
    }
    else
    {
        alert("열공해요~~");
    }
}, 1000*60*60);
```


* 이벤트
* 이벤트 리스너
* 메소드

## bootstrap 적용
### gem 설정

```ruby
gem 'bootstrap-sass'
$ bundle install
```

* [app/aseets/stylesheets/application.css -> application.scss]

```ruby
# 원래 있던 내용을 다지우고

@import 'bootstrap';

```

## faker 사용

* gemfile

```
gem 'faker'
```

* db/seeds.rb

```ruby
require 'faker'

100.times do
    Post.create(
        title: Faker::Name.title,
        content: Faker::Lorem.sentence
        )
end
```

[https://github.com/stympy/faker/blob/master/doc/name.md](https://github.com/stympy/faker/blob/master/doc/name.md)


* 4
* Q. 모든 타이틀들을 내가 원하는 이름으로 바꾸기 (버튼을 눌렀을 때)

* public/title.js

```
1. 버튼이 눌린다.
    (1) 버튼의 내용을 가져온다. 
    (2) 버튼에 onClickListener를 달아준다.
    (3) 버튼이 눌렸을 때 method를 실행시킨다. 
2. 타이틀에 해당하는 html element들을 가져온다. (변수에 담는다.)
3. 각각을 순환하며 내용을 바꾼다.

```
#### function
익명함수
    - 다른 곳에서 부를 수 없다. 
    - def와 비슷

```js

function 함수이름(파라미터) {
    
}

var 함수이름 = function(파라미터) {
    
}

```
* 차이점

```js
<script>
  alertHi();
  alertHello();
  
  function alertHi() {
    alert("Hi");
  }
  alertHi();
  
  
  var alertHello = function() {
    alert("Hello!")
  }
  alertHello();
</script>
```
* 선언하지 않은 경우에도 실행된다. 

alertHi();

* 변수에 넣었을 경우, 선언되지 않으면 실행되지 않는다. 

alertHello();
미리 선언하지 않고 사용했을 경우, 선언해야만한다. 


* index.erb
```html
<button>SetTitle</button>
<script src="./title.js"></script>

```

* title.js

```html
function setTitle() {
    
}

var btn = document.getElementsByTagName('button');
console.log(btn);
```

* onClickListener

```js

function setTitle() {
    
}

var btn = document.getElementsByTagName('button')[0];
console.log(btn);

/*익명함수*/
btn.onclick = function() {
    alert("Done");
}

```

* document.getElementsByTagName('button')[0];
find 함수에서 여러개 배열을 받아오는 것과 같다. 0번째 만 사용

```html
function setTitle() {
    var titles = document.getElementsByClassName('title');
    console.log(titles);
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "title을 변경한다. .. ";
    }
}



var btn = document.getElementsByTagName('button')[0];
console.log(btn);

/*익명함수*/
btn.onclick = function() {
    alert("Done");
}

setTitle();

```

* index.erb
html이 먼저오고, javascript가 나중에 와야 한다. 
```html
var el = document.getElementsByClassName('tnb_link');
for(var i = 0; i < el.length; i++) {
    el[i].innerHTML = "영원히 고통받는 네이버";
}
undefined
```



내용물을 가지고 오는 방법에는 
자바스크립트로 HTML내용물 가지고 오기 
document.getElementById(id명);
document.getElementsByClassName(class);
document.getElementsByTagName(Tag명);
document.querySelectorAll(css Selector);




## table 변경

1. table 모양을 다잡아 준다. 

* app/views/index.erb
```html
<table id="mytable" class="table">

```

* app/views/layouts/application.erb

```
<body>
  <div class="container">
    <%= yield %>
  </div>
</body>
```

#### 다섯번째 문제
Q. 버튼을 눌렀을 때, table 태그에 class를 추가/삭제한다. 

* public/attribute.js

```
1. 버튼을 누른다. 
    (1) 버튼 요소를 가지고 온다.
    (2) 버튼 요소에 eventListener(click)을 달아준다.
    (3) 버튼을 눌렀을 때 실행시킬 때 메소드를 작성한다. 
2. table태그에 요소를 가지고 온다. 
3. table태그에 내가 원하는 class(table-hover)가 있는지 확인한다.
    (1) class가 있으면 뺀다. (제거한다.)
    (2) class가 없으면 넣는다. (추가한다.)
```

app/views/index.erb

```html
<button id="setClass">SetClass</button>
<script src="./attribute.js"></script>
```

html문서를 살펴보면, 모든 script파일은 가장 아래가있다. 
html태그들이 모두 로드 된 이후에 작동되어야 하기 때문에, javascript가 맨 밑에 쓰여져야 한다. 
<strong>자바스크립트는 먼저 로드되면 안된다.</strong>
click event만 처리 

* toggleClass
있으면 넣고, 없으면 빼는것! 

* table-hover
마우스 .. 색깔이 변함

* js class list
* js array include
[js array include](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

* add / remove

* totgle

* public/class.js

```html
var btn = document.getElementById('setClass');
console.log(btn);

/*클릭 이벤트만 처리*/
btn.onclick = function() {
    console.log("button!!!");
    toggleClass();
}

function toggleClass() {
    var tb = document.getElementsByClassName("table")[0];
    console.log(tb.classList);
    console.dir(tb.classList);
    if(tb.classList.contains('table-hover')){
        tb.classList.remove('table-hover');
    }else {
        tb.classList.add('table-hover');
    }
}
```
* public/class.js 간략화


```html
function toggleClass() {
    var tb = document.getElementsByClassName("table")[0];
    tb.classList.toggle('table-hover');
}

```

#### 여섯번째 문제

* public/attribute.js
* Q. table의 크기를 내가 원하는 만큼을 설정하기
style width -> 그때그때 원하는 만큼으로. 

```
1. 버튼을 누른다. 
    (1) 버튼 요소를 가지고 온다.
    (2) 버튼 요소에 eventListener(click)을 달아준다.
    (3) 버튼을 눌렀을 때 실행시킬 때 메소드를 작성한다. 
2. table태그에 요소를 가지고 온다. 
    (1) prompt 창을 띄운다.
    (2) prompt 창에 내가 원하는 사이즈를 입력한다. 
    (3) table의 style속성 중 width속성을 바꾼다. 


```

* prompt : 입력을 받는 창

```html

```

### jQuery 사용하기! 
jQuery가 가장 위에 있는 이유, 순서대로 로드 해 오기 때문.


```javascript
$(document).on('ready', function () {
  
})
```

HTML 코드 중에 불려지지 않은 채로, javascript코드가 불려지면, Undefined error가 뜰 것이다. 

```javascript
$(document).ready(function() {
  
});
```

jQuery 간략화

```javascript
$(function(){
  
});
```
* public/form-control.js
```javascript
$(function(){
    // console.log("done");
    alert("done");
    $('#post_title').val("제이쿼리 재밌다. ");
})
```


#### 일곱번째
* Q. post_title의 내용물이 바뀌면 alert를 통해 내용물을 확인하다. 
1. #post_title 요소를 가지고 온다. 
    (1) 요소에 onChangeListener를 달아준다.
    (2) 요소의 값을 바뀐 값을 추출한다.
    (3) 값을 변수에 저장한다. 
2. 변수에 저장된 값을 alert한다. 
    
    
```javascript
$(function(){
    // console.log("done");
    // alert("done");
    $('#post_title').val("제이쿼리 재밌다. ");
    $('#post_title').on('change', function() {
        var text = $('#post_title').val();
        // console.log(text);
        alert(text);
    });
});
```

on : listener를 바꾼다. 

* jQuery keyboard events 
    * keypress
* jQuery form events
    * focus
    * submit
    * focusout()

## Ajax
페이지가 바뀌지 않고도 내용이 바뀌고, DB에도 저장할 수 있다. 

### 동기와 비동기!!
> 예시)
> 동기는 집안일을 가정했을 때, 청소도 하고, 빨래도 한다. 
> 비동기는 청소를 다 끝내고, 빨래를 하고, 그 후에 설거지를 한다. 
청소 -> 로봇
설거지 -> 식기세척기
빨래 -> 세탁
**callback** 


