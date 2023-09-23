function getData(){
    $.ajax({
        method: "GET",
        url: "http://123.57.85.69:3001/comments",
    })
        .done(function (messages) {
            let tempHtml = ''
    
            messages.resource.forEach((item) => {
                console.log(item);
                // let li = document.createElement('li')
                // li.innerText = item.content
                tempHtml += `<li>${item.name}:${item.content}</li>`    
            })
            console.log(tempHtml);
            let messageList = document.querySelector('#messageList')
            messageList.innerHTML = tempHtml
        });
    
}
getData()
let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()/*阻止默认事件*/
    // e.stopPropagation()阻止事件冒泡
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    $.ajax({
        method: "POST",
        url: "http://123.57.85.69:3001/comments",
        contentType: "application/json",
    //     data: { name: "测试", content:  myForm.querySelector('input[name=content]').value}
    data: JSON.stringify({
        name: name,
        content: content,
    }),
    })
        .done(function (messages) {
            alert("成功")
            getData()
            myForm.querySelector('input[name=content]').value =''
            myForm.querySelector('input[name=name]').value =''
            })
        });
    






