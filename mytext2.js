function accordion() {
    // todo 获取ul
    var ul = document.querySelector('#imgList');
    // console.log(ul);

    //todo 设置选中的图片的宽高和 默认的图片的宽高
    var activeWidth = 300;
    var activeHeight = 380;
    var defaultWidth = 100;
    var defaultHeight = 80;

    //todo row 行 col 列
    var row = 4;
    var col = 5;

    //todo 给ul设置宽
    ul.style.width = activeWidth + 4 * defaultWidth + 'px';

    //todo 循环遍历ul下的每一个li 拿到下标
    for (var i = 0; i < ul.children.length; i++) {
        ul.children[i].ind = i;

        //todo 设置onmouseover触发函数
        ul.children[i].addEventListener('mouseover', function () {
            activePic(this.ind);
        })

    }

    //todo 选中图片 设置样式 通过下标
    function activePic(index) {
        var c_x = index % col;
        var c_y = Math.floor(index / col);

        for (var j = 0; j < col; j++) {
            for (var k = 0; k < row; k++) {
                //todo 把坐标转下标
                var cindex = col * k + j;


                if (c_x == j && c_y == k) {
                    ul.children[cindex].style.width = activeWidth +'px';
                    ul.children[cindex].style.height = activeHeight +'px';
                }else if(c_x == j){
                    ul.children[cindex].style.width = activeWidth +'px';
                    ul.children[cindex].style.height = defaultHeight +'px';
                }else if(c_y == k){
                    ul.children[cindex].style.width = defaultWidth +'px';
                    ul.children[cindex].style.height = activeHeight +'px';
                }else{
                    ul.children[cindex].style.width = defaultWidth +'px';
                    ul.children[cindex].style.height = defaultHeight +'px';
                }
            }
        }
    }

//todo 设置默认样式
activePic(0);

}