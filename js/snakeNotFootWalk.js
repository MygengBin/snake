/**
 * 无蛇尾行走
 * @param keyCode
 * @param myCanvas
 * @param map
 * @param renderMap
 * @param infoConst
 */
export default function (keyCode, myCanvas, map, renderMap, infoConst) {
    /**
     * 首先获取到蛇头
     * 判断是否是蛇身， 或者墙，以及食物
     */
    let getSnake = infoConst.getSnakeInfo(map, infoConst.snakeHead);

    /**
     * 判断是否可以走
     * @param map
     * @param snakePosition
     * @param keyCode
     * @returns {boolean|number}
     */
    function canWalk(map, snakePosition, keyCode) {
        console.log('行动前蛇的位置' + JSON.stringify(snakePosition));
        //方向，是按照寻找蛇尾设计的
        /*let snakeHead = map[snakePosition.infoY][snakePosition.infoX],
            snakeHeadLeft = map[snakePosition.infoY][parseInt(snakePosition.infoX) - 1],
            snakeHeadTop = map[parseInt(snakePosition.infoY) - 1][snakePosition.infoX],
            snakeHeadRight = map[snakePosition.infoY][parseInt(snakePosition.infoX) + 1],
            snakeHeadBottom = map[parseInt(snakePosition.infoY) + 1][snakePosition.infoX];*/

        /**
         * 判断前进不是蛇身
         * @param indexNumber
         * @returns {boolean|boolean}
         */
        function judeNotWalk(indexNumber) {
            return indexNumber !== 37 && indexNumber !== 38 && indexNumber !== 39 && indexNumber !== 40;
        }

        /**
         * 寻找到蛇尾
         * @param snakeHeadPosition
         * @param map
         * @param keyCode
         * @constructor
         */
        function footWalk(snakeHeadPosition, map, keyCode) {
            function findContinue(position, map) {
                console.log(map[position.infoY][position.infoX]);
                while (true) {
                    if (map[position.infoY][position.infoX] === 37) {
                        position.infoX--;
                        if (map[position.infoY][position.infoX] === 0) {
                            map[position.infoY][parseInt(position.infoX) + 1] = 0;
                            break;
                        }
                    } else if (map[position.infoY][position.infoX] === 38) {
                        position.infoY--;
                        if (map[position.infoY][position.infoX] === 0) {
                            map[parseInt(position.infoY) + 1][position.infoX] = 0;
                            break;
                        }
                    } else if (map[position.infoY][position.infoX] === 39) {
                        position.infoX++;
                        if (map[position.infoY][position.infoX] === 0) {
                            map[parseInt(position.infoY)][position.infoX - 1] = 0;
                            break;
                        }
                    } else if (map[position.infoY][position.infoX] === 40) {
                        position.infoY++;
                        if (map[position.infoY][position.infoX] === 0) {
                            map[parseInt(position.infoY) - 1][position.infoX] = 0;
                            break;
                        }
                    }
                }
            }

            // let position;
            if (keyCode === 37) {
                snakeHeadPosition.infoX = parseInt(snakeHeadPosition.infoX) + 1;
                console.log(map[snakeHeadPosition.infoY][snakeHeadPosition.infoX]);
                findContinue(snakeHeadPosition, map);
            } else if (keyCode === 38) {
                snakeHeadPosition.infoY = parseInt(snakeHeadPosition.infoY) + 1;
                console.log(map[snakeHeadPosition.infoY][snakeHeadPosition.infoX]);
                findContinue(snakeHeadPosition, map);
            } else if (keyCode === 39) {
                snakeHeadPosition.infoX -= 1;
                console.log(map[snakeHeadPosition.infoY][snakeHeadPosition.infoX]);
                findContinue(snakeHeadPosition, map);
            } else if (keyCode === 40) {
                snakeHeadPosition.infoY -= 1;
                console.log(map[snakeHeadPosition.infoY][snakeHeadPosition.infoX]);
                findContinue(snakeHeadPosition, map);
            }

        }

        if (keyCode === 37) {
            if (snakePosition.infoX > 0 && judeNotWalk(map[snakePosition.infoY][parseInt(snakePosition.infoX) - 1])) {
                map[snakePosition.infoY][snakePosition.infoX] = 39;
                map[snakePosition.infoY][parseInt(snakePosition.infoX) - 1] = 1;
                snakePosition = infoConst.getSnakeInfo(map, infoConst.snakeHead);
                new footWalk(snakePosition, map, keyCode);
            }
            return 37;
        } else if (keyCode === 38) {
            if (snakePosition.infoY > 0 && judeNotWalk(map[parseInt(snakePosition.infoY) - 1][snakePosition.infoX])) {
                map[snakePosition.infoY][snakePosition.infoX] = 40;
                map[parseInt(snakePosition.infoY) - 1][snakePosition.infoX] = 1;
                snakePosition = infoConst.getSnakeInfo(map, infoConst.snakeHead);
                new footWalk(snakePosition, map, keyCode);
            }
            return 38;
        } else if (keyCode === 39) {
            if (snakePosition.infoX < 29 && judeNotWalk(map[snakePosition.infoY][parseInt(snakePosition.infoX) + 1])) {
                map[snakePosition.infoY][snakePosition.infoX] = 37;
                map[snakePosition.infoY][parseInt(snakePosition.infoX) + 1] = 1;
                snakePosition = infoConst.getSnakeInfo(map, infoConst.snakeHead);
                new footWalk(snakePosition, map, keyCode);
            }
            return 39;
        } else if (keyCode === 40) {
            if (snakePosition.infoY < 29 && judeNotWalk(map[parseInt(snakePosition.infoY) + 1][snakePosition.infoX])) {
                map[snakePosition.infoY][snakePosition.infoX] = 38;
                map[parseInt(snakePosition.infoY) + 1][snakePosition.infoX] = 1;
                snakePosition = infoConst.getSnakeInfo(map, infoConst.snakeHead);
                new footWalk(snakePosition, map, keyCode);
            }
            return 40;
        } else return false;
    }
//发现问题，如果拐弯，的话，蛇头原来的位置是根据蛇头的方向计算的，这样的话，找蛇尾的时候无法通过
    canWalk(map, getSnake, keyCode);
    renderMap(myCanvas, map);
}
