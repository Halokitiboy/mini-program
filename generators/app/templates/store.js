export default {
    data: {
        motto: 'Hello xzc',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        logs: [],
        b: {
            arr: [{ name: '数值项目1' }],
            // 深层节点也支持函数属性
            fnTest() {
                return this.motto.split('').reverse().join('');
            },
        },
        firstName: 'dnt',
        lastName: 'zhang',
        fullName() {
            return this.firstName + this.lastName;
        },
        pureProp: 'pureProp',
        globalPropTest: 'abc', // 更改我会刷新所有页面,不需要在组件和页面声明data依赖
        ccc: { ddd: 1 }, // 更改我会刷新所有页面,不需要在组件和页面声明data依赖
    },
    globalData: ['globalPropTest', 'ccc.ddd'],
    logMotto() {
        console.log(this.data.motto);
        console.log(this.data.canIUse);
    },
    // 默认 false，为 true 会无脑更新所有实例
    // updateAll: true
};
