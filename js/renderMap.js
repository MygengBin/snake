/*判断渲染地图*/
import infoConst from "./infoConst.js";

export default function (myCanvas, map) {
    myCanvas.clearRect(infoConst.initialCanvasWidth, infoConst.initialCanvasHeight, infoConst.canvasWidth, infoConst.canvasHeight);
    let x = -infoConst.tdWidth, y = -infoConst.tdHeight;
    for (let i = 0; i < map.length; i++) {
        y += infoConst.tdHeight;
        for (let j = 0; j < map.length; j++) {
            x += infoConst.tdWidth;
            if (x >= infoConst.canvasWidth) {
                x = 0;
            }
            /** 定义地图的数组
             * 0 空格
             * 1 蛇头（red）
             * 2 蛇身 （green）
             * 3 食物 （violet）
             * 拐弯方向 37左 38上 39右 40下
             * 4 蛇尾
             * ========= 此处建议蛇身全部改为keyCode码，最后用来查找蛇尾
             */
            if (map[i][j] === 0) {
                myCanvas.strokeStyle = 'black';
                myCanvas.strokeRect(x, y, infoConst.tdWidth, infoConst.tdHeight);
                myCanvas.stroke();//绘制
            } else if (map[i][j] === 1) {
                myCanvas.fillStyle = 'red';
                myCanvas.fillRect(x, y, infoConst.tdWidth, infoConst.tdHeight);
                myCanvas.fill();//填充
            } else if (map[i][j] === 2) {
                myCanvas.fillStyle = 'green';
                myCanvas.fillRect(x, y, infoConst.tdWidth, infoConst.tdHeight);
                myCanvas.fill();//填充
            } else if (map[i][j] === 3) {
                myCanvas.fillStyle = 'violet';
                myCanvas.fillRect(x, y, infoConst.tdWidth, infoConst.tdHeight);
                myCanvas.fill();//填充
            } else if (map[i][j] === 37 || map[i][j] === 38 || map[i][j] === 39 || map[i][j] === 40 || map[i][j] === 4) {
                myCanvas.fillStyle = 'green';
                myCanvas.fillRect(x, y, infoConst.tdWidth, infoConst.tdHeight);
                myCanvas.fill();//填充
            }
        }
    }
}
