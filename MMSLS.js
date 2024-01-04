/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
let MMSLS = [
	"https://www.maimemo.com/share/page?uid=29726779&pid=2e303d2ef71cdd434b393f5a680a857b&tid=a5b67477809d8cb6d488b9ac7733f7f9",
	"https://www.maimemo.com/share/page?uid=32329480&pid=2e303d2ef71cdd434b393f5a680a857b&tid=9ace389a86d049ff9b1be3805c3ffc23",
];

/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber (min = 0, max = 100) {
	return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

// ************ jQuery 同步发布出去 ************ //
/*
// https://www.codenong.com/37239690/
// "jquery": "^1.8.0",
// "jsdom": "^10.1.0",
const jsdom      = require("jsdom");
const { JSDOM }  = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $          = require("jQuery")(window);

// $.post("http://121.89.241.18:7878/list.php", {}, function (data) {
// 	let min = 0;
// 	let max = data.length;
// 	url     = data[Math.min(Math.floor(min + Math.random() * (max - min)), max)];
// 	console.log("url",url);
//
// }, "json");

let result = [];
$.ajax({
	async    : false,
	type     : "POST",
	url      : "http://121.89.241.18:7878/list.php",
	data     : { id : 123 },
	dataType : "json",
	timeout  : 30000,
	success  : function (data) {
		console.log("success data", "");
		result = data;
	},
	error    : function (data) {
		console.log("error data", data);
		result = data;
	},
	complete : function (data) {
		console.log("complete data", "");
		result = data;
	},
});

console.log("result",result);
*/
// ************ jQuery 同步发布出去 ************ //

const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];

module.exports = {
	MMSL_random,
};
