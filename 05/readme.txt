------------------------------------------------------------

1. 채널만들기

- method : post

- req url :
/channels

- 요청 body 내용 : 
{"cname","general"}


2. 채널명 목록 가져오기

- method : get

- req url :
/chnnels

- 응답body 내용 :
{"channels",["general","random",,,,]}


3. 특정 채널에 새 메시지 추가하기

- method : post

- 요청 url  
/channels/채널명/messages

- 요청 body
{
"body":"...."
}


4. 채널의 메시지 목록 가져오기
- method : get

- 요청 url :
/channels/채널명/messages

- 응답 body
{
    "messages",[
        {
            "id":0,
            "body":"welcome",
            "date":"2022...",
            "user":
            {
                "id","anon",
                "name":"Anonymous",
                "avatar":""
            }
        },
        ....
    ]
}


5 초기 상태로 돌리기

- method : post

- 응답 url :
/reset

------------------------------------------------------------


Firebase 기능

- 실시간 database
- triger ( Firebase Fuction )
- Firebase Authentification

npm i -g firebase-tools@3.18.0
firbase login


# 초기화

firebase init hosting

firebase init functions


# Restful 관련 api 설치하기

npm i express cores


firebase serve --only functions