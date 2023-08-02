
AV.init({
    appId: "HJY0EWJWxivKGk6BKvcycCxB-gzGzoHsz",
    appKey: "2VOup2awneLzPz9ejIRzBnZv",
});

var query = new AV.Query("Message");
query.find()
.then(
    (messages) => {
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')      
        messageList.appendChild(li)      
    })
})
let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend("Message");
    var message = new Message();
    message.set({ content: content });
    message.save().then((message) => {
   console.log();
        alert("成功")
        window.location.reload()//刷新页面
    })
})





