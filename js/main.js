setTimeout(function () {
    sitewelcome.classList.remove('active')
}, 1000)//添加延迟
setTimeout(function () {
    findClosest()
}, 1000)
window.onscroll = function (xxxxx) {
    if (window.scrollY > 0) {
        topnavbar.classList.add('sticky')
    } else {
        topnavbar.classList.remove('sticky')
    }
    findClosest()
}
function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]')//返回选择器对应的所有元素
    let minindex = 0

    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minindex].offsetTop - window.scrollY)) {
            minindex = i
        }
    } specialTags[minindex].classList.add('offset')
    let id = specialTags[minindex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersandme = li.parentNode.children
    for (let i = 0; i < brothersandme.length; i++) {
        brothersandme[i].classList.remove('heighlight')
    }
    li.classList.add('heighlight')
}


let litags = document.querySelectorAll('nav.menu>ul>li')
for (let i = 0; i < litags.length; i++) {
    litags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    litags[i].onmouseleave = function (x) {
        litags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
}
let atags = document.querySelectorAll('nav.menu>ul>li>a')//获取a标签位置
//滑动时的动画
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < atags.length; i++) {
    atags[i].onclick = function (x) {
        x.preventDefault()//删除a标签默认跳转属性
        let a = x.currentTarget //获取a标签
        let href = a.getAttribute('href')//获取用户写的href
        let element = document.querySelector(href)
        let top = element.offsetTop
        // console.log(top)
        let currentTop = window.scrollY//当前的高度
        let targetTop = top - 80//目标高度
        let s = targetTop - currentTop//每次动的距离
        var coords = { y: currentTop };//起始位置
        // var t = math.abs((s/ 100) * 300)//abs求绝对值
        var tween = new TWEEN.Tween(coords)//起始位置
            .to({ y: targetTop }, 1000)//结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
            .onUpdate(function () {

                window.scrollTo(0, coords.y)//如何更新界面
            })
            .start();//开始
    }
}