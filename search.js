var index = lunr(function () {
    this.field('title')
    this.field('description')
    this.ref('path')


    data.forEach(function (post) {
        this.add(post)
    }, this)
})