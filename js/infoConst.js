export default {
    /*默认画布的宽高*/
    canvasWidth: 600,
    canvasHeight: 600,
    /*初始化位置的宽高*/
    initialCanvasWidth: 0,
    initialCanvasHeight: 0,
    /*单元格宽高*/
    tdWidth: 20,
    tdHeight: 20,
    /** 定义地图的数组
     * 0 空格
     * 1 蛇头（red）
     * 3 食物 （violet）
     * 拐弯方向(蛇身) 37左 38上 39右 40下
     * 蛇尾(4)
     */
    space: 0,
    snakeHead: 1,
    snakeFoot: 4,
    food: 3,
    bodyLeft: 37, bodyRight: 39,
    bodyTop: 38, bodyBottom: 40,
    /**随机到的食物 */
    randomFoot: function (myCanvas, map, renderMap) {
        let mathPositionX = Math.floor(Math.random() * 30), mathPositionY = Math.floor(Math.random() * 30);
        map[mathPositionY][mathPositionX] = this.food;
        renderMap(myCanvas, map);
        return {mathPositionX: mathPositionX, mathPositionY: mathPositionY};
    },
    /**初始化数组布局*/
    arrFun: function () {
        let map = [];
        for (let i = 0; i < 30; i++) {
            map.push([]);
            for (let j = 0; j < 30; j++) {
                map[i].push(0);
            }
        }
        return map;
    },
    /**初始化蛇 */
    initSnake: (map) => {
        map[1][3] = 1;
        map[1][2] = 37;
        map[1][1] = 4;
    },
    /**获取蛇的信息
     * 获取关于蛇的信息(坐标)
     * 蛇身/蛇尾都是这个
     * */
    getSnakeInfo: (map, info) => {
        let x, y;
        for (let i in map) {
            for (let j in map[i]) {
                if (map[i][j] === info) {
                    x = j;
                    y = i;
                    break;
                }
            }
        }
        return {infoX: x, infoY: y};
    },
    /**
     * 由于蛇尾跟进只判断在直线的时候，所以在拐弯的时候会造成蛇尾丢失，这里需要重新找到
     * @param keyCode
     * @param map
     */
    findSnakeFoot: function (keyCode, map) {
        let {infoX, infoY} = this.getSnakeInfo(map, this.snakeHead);
        if (keyCode === 37) {
            while (true) {
                let findSnakeFoot = map[infoY][parseInt(infoX) + 1];
                if (findSnakeFoot === 37) {
                    infoX -= 1;
                } else if (findSnakeFoot === 38) {
                    infoY -= 1;
                } else if (findSnakeFoot === 39) {
                    infoX += 1;
                } else if (findSnakeFoot === 40) {
                    infoY += 1;
                } else if (findSnakeFoot === 0) {
                    map[infoY][infoX] = 0;
                    map[infoY][parseInt(infoX) - 1] = 4;
                    break;
                }
            }
        } else if (keyCode === 38) {
            let {infoX, infoY} = this.getSnakeInfo(map, this.snakeHead);
            while (true) {
                console.log(infoX);
                let findSnakeFoot = map[parseInt(infoY) + 1][infoX];
                if (findSnakeFoot === 37) {
                    infoX -= 1;
                } else if (findSnakeFoot === 38) {
                    infoY -= 1;
                } else if (findSnakeFoot === 39) {
                    infoX += 1;
                } else if (findSnakeFoot === 40) {
                    infoY += 1;
                } else if (findSnakeFoot === 0) {
                    map[infoY][infoX] = 0;
                    map[parseInt(infoY) - 1][infoX] = 4;
                    break;
                }
            }
        } else if (keyCode === 39) {
            while (true) {
                let findSnakeFoot = map[infoY][parseInt(infoX) - 1];
                if (findSnakeFoot === 37) {
                    infoX -= 1;
                } else if (findSnakeFoot === 38) {
                    infoY -= 1;
                } else if (findSnakeFoot === 39) {
                    infoX += 1;
                } else if (findSnakeFoot === 40) {
                    infoY += 1;
                } else if (findSnakeFoot === 0) {
                    map[infoY][infoX] = 0;
                    map[infoY][parseInt(infoX) + 1] = 4;
                    break;
                }
            }
        } else if (keyCode === 40) {
            while (true) {
                let findSnakeFoot = map[parseInt(infoY) - 1][infoX];
                if (findSnakeFoot === 37) {
                    infoX -= 1;
                } else if (findSnakeFoot === 38) {
                    infoY -= 1;
                } else if (findSnakeFoot === 39) {
                    infoX += 1;
                } else if (findSnakeFoot === 40) {
                    infoY += 1;
                } else if (findSnakeFoot === 0) {
                    map[infoY][infoX] = 0;
                    map[parseInt(infoY) + 1][infoX] = 4;
                    break;
                }
            }
        }
    }
}
