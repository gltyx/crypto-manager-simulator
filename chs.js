/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Enter maximal buy price. If everything is setup, turn the auto\n                buyer on. This function will automatically buys all coins you\n                can with the available money. This will happen 1s bevor you get\n                a new stock price!": "输入最高买入价。 如果一切都设置好了，请打开自动购买器。 此功能将自动用可用资金购买您可以\n 购买的所有货币。 这将在您获得新股票价格之前的 1 秒内发生！",
    "Enter minimal sell price. If everything is setup, turn the auto\n                seller on. This function will automatically sell all coins you\n                have if the sell price is reached. This will happen 1s bevor you\n                get a new stock price!": "输入最低售价。 如果一切都设置好了，打开自动出售器。 如果达到卖出价，此功能将自动卖出您拥有的所有货币。 这将在您获得新股票价格之前 1 秒发生！",
    "60% chance of increasing your CHAR.": "60% 的几率增加你的 魅力。",
    "60% chance of increasing your INT.": "60% 的几率增加你的 智能。",
    "Actions": "动作",
    "Auto buy coins if a specific buy Price is reached.": "如果达到特定购买价格，则自动购买货币。",
    "Auto crypto miner": "自动加密矿工",
    "Auto Save:": "自动保存：",
    "Auto sell coins if a specific sell Price is reached.": "如果达到特定的卖出价格，则自动卖出货币。",
    "Automatically searches for coins. 10% chance of finding a coin.": "自动搜索货币。 10% 的几率找到货币。",
    "Automatically searches for coins. 40% chance of finding a coin.": "自动搜索货币。 40% 的几率找到一枚货币。",
    "Automatically searches for coins. 90% chance of finding a coin.": "自动搜索货币。 90% 的几率找到货币。",
    "Better Auto crypto miner": "更好的自动加密矿工",
    "Buy": "购买",
    "Buy [": "购买 [",
    "Buy All": "购买全部",
    "Buy crypto coins": "购买加密货币",
    "Buy crypto coins. Buy price is 5% higher than sell price. Check\n                Stock market for current price.": "购买加密货币。买入价比卖出价高5%。检查\n股票市场的当前价格。",
    "Buy:": "购买：",
    "Cancel": "取消",
    "Cancle": "取消",
    "CHAR": "魅力",
    "Char is short for Charisma.": "Char 是 Charisma 的缩写。",
    "Char:": "魅力：",
    "Close": "关闭",
    "Coins:": "货币：",
    "Console": "控制台",
    "Crypto Manager": "货币经理模拟器",
    "Delete": "删除",
    "Delete Gamedata?": "删除游戏数据？",
    "Do you really want to reset your game? All your data will be\n          permanently deleted!": "你真的要重置你的游戏吗？您的所有数据都将被\n永久删除！",
    "Found saved game! Trying to load data...": "找到保存的游戏！正在尝试加载数据...",
    "Game loaded successfully!": "游戏加载成功！",
    "Game started!": "游戏开始！",
    "High Quality Auto crypto miner": "高质量自动加密矿工",
    "If you have higher charisma, the price increase in the shop will decrease.": "如果你有更高的魅力，商店的价格上涨就会减少。",
    "INT": "智能",
    "Int is short for Intelligence.": "Int 是 Intelligence 的缩写。",
    "Int:": "智能：",
    "Inventory:": "库存：",
    "Market": "市场",
    "Market Timer:": "市场计时器：",
    "Mine": "采矿",
    "Modern": "现代",
    "Money:": "金钱：",
    "New market timer will be active, after the timer reached 0!": "新的市场计时器将在计时器达到 0 后激活！",
    "Off": "关闭",
    "On": "开启",
    "Online Charisma Course": "在线魅力课程",
    "Online Crypto Course": "在线加密课程",
    "RESET": "重置",
    "Restart": "重新开始",
    "Retire": "退休",
    "Retire from your crypto manager job.": "从您的加密货币经理工作中退休。",
    "Retired": "退休",
    "SAVE": "保存",
    "Search for coins. 20% chance of finding a coin.": "寻找货币。 20% 的几率找到一枚货币。",
    "Search for crypto coins": "搜索加密货币",
    "Select Theme:": "选择主题：",
    "Sell": "出售",
    "Sell [": "出售 [",
    "Sell All": "全部出售",
    "Sell earned crypto coins": "出售赚取的加密货币",
    "Sell your earned crypto coins. Check Stock market for current\n                price.": "出售您赚取的加密货币。查看股票市场的当前\n 价格。",
    "Sell:": "出售：",
    "SETTINGS": "设置",
    "Shop": "商店",
    "Status": "状态",
    "Stock Helper: Auto buy coins": "股票助手：自动购买货币",
    "Stock Helper: Auto sell coins": "股票助手：自动出售货币",
    "Terminal": "终端",
    "Timer:": "计时器：",
    "Turn On": "打开",
    "With a higher int value, the efficiency will increase and the chance of getting more than 1 coin per autominer will increase.": "使用更高的 int 值，效率会提高，并且每个 自动矿工 获得超过 1 个货币的几率也会增加。",
    "You finished the game.": "你通关了游戏。",
    "Didn't learned anything new in this course!": "在这门课程中没有学到任何新东西！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Money removed! Amount: ": "钱被拿走了！ 数量：",
    "Money added! Amount: ": "钱增加了！ 数量：",
    "Auto Miner added! Amount: ": "添加了自动矿工！ 数量：",
    "Better Auto Miner added! Amount: ": "添加了更好的自动矿工！ 数量：",
    "Charisma increased! Amount: ": "魅力提升了！ 数量：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^([\d\.,]+)年(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)€$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Coins sold!$/, '出售了 $1 货币！'],
    [/^([\d\.]+) Coin sold!$/, '出售了 $1 货币！'],
    [/^([\d\.]+) Coin earned!$/, '获得了 $1 货币！'],
    [/^([\d\.]+) Coins earned!$/, '获得了 $1 货币！'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);