/*regin 方法一
// 获取dom元素
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 设置激活的步骤范围(1-4)
let currentActive = 1

// next按钮点击事件
next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // 更新页面
    update()
})

// prev按钮点击事件
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    // 更新页面
    update()
})

// 更新页面函数
function update() {
    // 循环设置激活的步骤
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // 设置蓝色进度条
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%'

    // 设置按钮是否可用
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
endregin*/

// 方法二
class UI {1
    constructor() {
        // 获取dom元素
        this.doms = {
            progress: document.getElementById('progress'),
            prev: document.getElementById('prev'),
            next: document.getElementById('next'),
            circles: document.querySelectorAll('.circle')
        }
        this.currentActive = 1
    }
    next() {
        this.currentActive++
        if (this.currentActive > this.doms.circles.length) {
            this.currentActive = this.doms.circles.length
        }
        return this.currentActive
    }
    prev() {
        this.currentActive--
        if (this.currentActive < 1) {
            this.currentActive = 1
        }
        return this.currentActive
    }
    updata() {
        // 循环设置激活的步骤
        this.doms.circles.forEach((circle, index) => {
            if (index < this.currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })

        // 设置蓝色进度条
        this.doms.progress.style.width = (this.currentActive - 1) / (this.doms.circles.length - 1) * 100 + '%'

        // 设置按钮是否可用
        if (this.currentActive === 1) {
            this.doms.prev.disabled = true
        } else if (this.currentActive === this.doms.circles.length) {
            this.doms.next.disabled = true
        } else {
            this.doms.prev.disabled = false
            this.doms.next.disabled = false
        }
    }
}

const ui = new UI()

// next按钮点击事件
ui.doms.next.addEventListener('click', () => {
    ui.next()
    ui.updata()
})

// prev按钮点击事件
ui.doms.prev.addEventListener('click', () => {
    ui.prev()
    ui.updata()
})