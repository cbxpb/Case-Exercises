// 页面原始数据
const data = [
    { url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80' },
    { url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' },
    { url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }
]

// UI界面
class UI {
    constructor() {
        this.uiData = data
        this.doms = {
            container: document.querySelector('.container'),
        }
        this.createHTML();
    }
    // 创建dom元素
    createHTML() {
        let html = ''
        for (let i = 0; i < this.uiData.length; i++) {
            let cardData = this.uiData[i]
            if (i === 0) {
                html +=
                    `<div class="card active" style="background-image: url('${cardData.url}')">
                    <h3>第${i + 1}个标题</h3>
                </div>`
            } else {
                html +=
                    `<div class="card" style="background-image: url('${cardData.url}')">
                    <h3>第${i + 1}个标题</h3>
                </div>`
            }
        }
        this.doms.container.innerHTML = html
    }
}

const ui = new UI()

const cards = document.querySelectorAll('.card')

// 绑定点击事件
cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})

// 移除所有带有active类的属性
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}


