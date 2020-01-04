/** 蛇的走动
 * 需要获取蛇头的位置，和蛇的前进方向
 */
export default function (keyCode, myCanvas, map, renderMap,infoConst) {
	/*首先引入地图，判断不是墙，前方是否有食物，不是蛇身*/
	/**
	 * 首先判断前方不等于自己的蛇身*/
	function frontNotSnake(keyCode) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeHead);
		let frontPosition;
		if (keyCode === 37) {
			frontPosition = map[infoY][parseInt(infoX) - 1];
		} else if (keyCode === 38) {
			frontPosition = map[parseInt(infoY) - 1][infoX];
		} else if (keyCode === 39) {
			frontPosition = map[infoY][parseInt(infoX) + 1];
		} else if (keyCode === 40) {
			frontPosition = map[parseInt(infoY) + 1][infoX];
		}
		if (frontPosition !== 37 && frontPosition !== 38 && frontPosition !== 39 && frontPosition !== 40 && frontPosition !== 4) {
			return true;
		} else return false;

	}
	function snakeFootWalk(map) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeFoot);
		if (infoX - 1 >= 0 && infoX + 1 < 30 && infoY - 1 >= 0 && infoY + 1 < 30) {
			map[infoY][infoX] = 0;
			/*判断蛇尾左侧*/
			if (map[infoY][parseInt(infoX) - 1] === 39) {
				map[infoY][parseInt(infoX) - 1] = 4;
			}
			/*判断蛇尾上侧*/
			else if (map[parseInt(infoY) - 1][infoX] === 40) {
				map[parseInt(infoY) - 1][infoX] = 4;
			}
			/*判断蛇尾右侧*/
			else if (map[infoY][parseInt(infoX) + 1] === 37) {
				map[infoY][parseInt(infoX) + 1] = 4;
			}
			/*判断蛇尾下侧*/
			else if (map[parseInt(infoY) + 1][infoX] === 38) {
				map[parseInt(infoY) + 1][infoX] = 4;
			}
		}
	}
	if (keyCode === 37) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeHead);
		if (frontNotSnake(keyCode)) {
			if (infoY - 1 >= 0) {
				map[infoY][infoX] = 39;
				map[infoY][parseInt(infoX) - 1] = 1;
				snakeFootWalk(map)
			}
		}
	} else if (keyCode === 38) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeHead);
		if (frontNotSnake(keyCode)) {
			if (infoY - 1 >= 0) {
				map[infoY][infoX] = 40;
				map[parseInt(infoY) - 1][infoX] = 1;
				snakeFootWalk(map)
			}
		}
	} else if (keyCode === 39) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeHead);
		if (frontNotSnake(keyCode)) {
			if (infoX < 29) {
				map[infoY][infoX] = 37;
				map[infoY][parseInt(infoX) + 1] = 1;
				snakeFootWalk(map)
			}
		}
	} else if (keyCode === 40) {
		let { infoX, infoY } = infoConst.getSnakeInfo(map, infoConst.snakeHead);
		if (frontNotSnake(keyCode)) {
			if (infoY < 29) {
				map[infoY][infoX] = 38;
				map[parseInt(infoY) + 1][infoX] = 1;
				snakeFootWalk(map)
			}
		}
	}

	/*清空画布，改变布局后，重新渲染*/
	myCanvas.clearRect(0, 0, infoConst.canvasWidth, infoConst.canvasHeight);
	renderMap(myCanvas, map,infoConst);
}
