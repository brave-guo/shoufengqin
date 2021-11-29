function accordion() {
    //获取ul
    var out = document.querySelector('#imgList');

    //设置选中的图片的宽高和 默认的图片的宽高
    var activeWidth = 300;
    var activeHeight = 380;

    var defaultWidth = 100;
    var defaultHeight = 80;

    //row 行 col 列
    var row = 4;
    var col = 5;

    //给ul设置宽
    out.style.width = activeWidth + 4 * defaultWidth + 'px';

    console.log(row);
    //循环遍历ul下的每一个li 拿到下标
    for (var i = 0; i < out.children.length; i++) {
        out.children[i].ind = i;

        //设置onmouseover触发函数
        out.children[i].onmouseover = function () {
            activePic(this.ind);
        }

    }

    //选中图片 设置样式 通过下标
    function activePic(index) {
        var c_x = index % col;
        var c_y = Math.floor(index / col);

        for (var j = 0; j < col; j++) {
            for (var k = 0; k < row; k++){
                //把坐标转下标
                var cindex = col * k + j;

                if(c_x == j && c_y == k){
                    out.children[cindex].style.width = activeWidth +'px';
                    out.children[cindex].style.height = activeHeight +'px';
                }else if(c_x ==j){
                    out.children[cindex].style.width = activeWidth +'px';
                    out.children[cindex].style.height = defaultHeight +'px';
                }else if(c_y ==k){
                    out.children[cindex].style.width = defaultWidth +'px';
                    out.children[cindex].style.height = activeHeight +'px';
                }else{
                    out.children[cindex].style.width = defaultWidth +'px';
                    out.children[cindex].style.height = defaultHeight +'px';
                }
            }
        }
    }
    //设置默认样式
    activePic(0);
}