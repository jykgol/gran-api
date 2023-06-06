Чтобы запустить приложение 

1) Клонируйте гит репозиторий себе на пк
2) запустите команду "npm install"  
3) запустите проект командой "npm start"

Далее понадобится ввести id Instance и api Token Instance
Который можно получить после регистрации на сайте green-api.com
Далее вводим номер телефона собеседника в формате "79111234567"
Создается новый чат, по которому переходим, и можно отправлять сообщения 
Получение сообщений происходит путем нажатия кнопки обновить в правом верхнем углу 

В рамках тестового задания разработал пользовательский интерфейс для
отправки и получений сообщений WhatsApp

1. В качестве API использовался сервис GREEN-API https://green-api.com/
2. Были реализованы отправка и получение текстовых сообщений
3. За прототип интерфейса был взят внешний вид чата whatsapp
4. Отправка сообщений реализована методом https://green-
api.com/docs/api/sending/SendMessage/
5. Получение сообщений реализовано методом https://green-
api.com/docs/api/receiving/technology-http-api/
6. Использована технология React, а так же библиотеки:  
 1. @reduxjs/toolkit для использования configureStore
 2. react-redux для использования Provider, connect
 3. react-router-dom для использования BrowserRouter, NavLink, Route, Routes
 4. axios для общения с сервером 


![image](https://github.com/jykgol/gran-api/assets/63459951/94da05c1-0c45-4c36-93f9-d52d0b786dfd)

![image](https://github.com/jykgol/gran-api/assets/63459951/ca298ec9-1999-4714-bf03-e63f4622f679)
