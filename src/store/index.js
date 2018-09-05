import {observable, computed, autorun, action} from "mobx";
import {toJS} from "mobx";

// import {observer} from "mobx-react";
import BannerManagePage from '../pages/bannerManage'
import BannerManagePageAdd from '../pages/bannerManageAdd'


class BackStageData {
    @observable backStageTitle = "投票后台"
    @observable isLogin = false
    @observable customLoginout = false;
    @observable token = "";
    @observable  articleType = {
        "1": "颜值",
        "2": "摄影",
        "3": "游记",
    }
    @observable operateType = ["默认", "二维码上传", "申请成为管理员", "成为管理员"]

    @action login() {
        this.isLogin = true;
        this.customLoginout = false
    }

    @computed get checkLoginOut() {

        return this.customLoginout && !localStorage.getItem('isLogin')
    }

    @action loginout() {
        this.isLogin = false;
        this.customLoginout = true;
    }

    @action setToken(t) {
        this.token = t
    }

    @observable NavList = [
        {
            routepath: "",
            icon: "home",
            pathname: "首页管理",
            key: "",
            children: [
                {
                    routepath: "/czx/BannerManage",
                    icon: "",
                    pathname: "Banner管理",
                    key: "BannerManage",
                    component: BannerManagePage,
                    hideInMenu: false
                },
                {
                    routepath: "/czx/BannerManage/Add",
                    icon: "",
                    pathname: "Banner新增",
                    key: "BannerManage",
                    component: BannerManagePageAdd,
                    hideInMenu: true
                },
                {
                    routepath: "/czx/HomeManage",
                    icon: "",
                    pathname: "首页管理",
                    key: "HomeManage",
                    component: "HomeManagePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/HomeManage/Add",
                    icon: "",
                    pathname: "首页管理新增",
                    key: "HomeManage",
                    component: "HomeManagePageAdd",
                    hideInMenu: true
                },
            ]
        },
        {
            routepath: "",
            icon: "info-circle-o",
            pathname: "基础信息",
            key: "",
            children: [
                {
                    routepath: "/czx/InfoManage",
                    icon: "",
                    pathname: "资讯管理",
                    key: "InfoManage",
                    component: "InfoManagePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/InfoManage/Add",
                    icon: "",
                    pathname: "资讯管理",
                    key: "InfoManage",
                    component: "InfoManagePageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/EncyclopediaManage",
                    icon: "",
                    pathname: "百科管理",
                    key: "EncyclopediaManage",
                    component: "EncyclopediaManagePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/EncyclopediaManage/Add",
                    icon: "",
                    pathname: "百科管理增加",
                    key: "EncyclopediaManage",
                    component: "EncyclopediaManagePageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/EventInfo",
                    icon: "",
                    pathname: "活动管理",
                    key: "EventInfo",
                    component: "EventInfoPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/EventInfo/Add",
                    icon: "",
                    pathname: "活动管理",
                    key: "EventInfo",
                    component: "EventInfoPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/TibetanInfo",
                    icon: "",
                    pathname: "藏历管理",
                    key: "TibetanInfo",
                    component: "TibetanInfoPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/TibetanInfo/Add",
                    icon: "",
                    pathname: "藏历管理",
                    key: "TibetanInfo",
                    component: "TibetanInfoPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/HotSearchInfo",
                    icon: "",
                    pathname: "热搜管理",
                    key: "HotSearchInfo",
                    component: "HotSearchInfoPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/HotSearchInfo/Add",
                    icon: "",
                    pathname: "热搜管理",
                    key: "HotSearchInfo",
                    component: "HotSearchInfoPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/FleetManage",
                    icon: "",
                    pathname: "车队管理",
                    key: "FleetManage",
                    component: "FleetManagePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/FleetManage/Add",
                    icon: "",
                    pathname: "车队管理",
                    key: "FleetManage",
                    component: "FleetManagePageAdd",
                    hideInMenu: true
                },
            ]
        },
        {
            routepath: "",
            icon: "pushpin",
            pathname: "景点信息管理",
            key: "",
            children: [
                {
                    routepath: "/czx/TibetArea",
                    icon: "",
                    pathname: "西藏区域",
                    key: "TibetArea",
                    component: "TibetAreaPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/TibetArea/Add",
                    icon: "",
                    pathname: "西藏区域",
                    key: "TibetArea",
                    component: "TibetAreaPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/Attractions",
                    icon: "",
                    pathname: "景点",
                    key: "Attractions",
                    component: "AttractionsPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/Attractions/Add",
                    icon: "",
                    pathname: "景点",
                    key: "Attractions",
                    component: "AttractionsPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/AttractionsDistance",
                    icon: "",
                    pathname: "景点距离",
                    key: "AttractionsDistance",
                    component: "AttractionsDistancePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/AttractionsDistance/Add",
                    icon: "",
                    pathname: "景点距离",
                    key: "AttractionsDistance",
                    component: "AttractionsDistancePageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/TimeArea",
                    icon: "",
                    pathname: "区域耗时",
                    key: "TimeArea",
                    component: "TimeAreaPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/TimeArea/Add",
                    icon: "",
                    pathname: "区域耗时",
                    key: "TimeArea",
                    component: "TimeAreaPageAdd",
                    hideInMenu: true
                }
            ]
        },
        {
            routepath: "",
            icon: "like",
            pathname: "官方推荐",
            key: "",
            children: [
                {
                    routepath: "/czx/RecommendedRaiders",
                    icon: "",
                    pathname: "推荐攻略",
                    key: "RecommendedRaiders",
                    component: "RecommendedRaidersPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/RecommendedRaiders/Add",
                    icon: "",
                    pathname: "推荐攻略",
                    key: "RecommendedRaiders",
                    component: "RecommendedRaidersPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/RecommendedTravel",
                    icon: "",
                    pathname: "推荐游记",
                    key: "RecommendedTravel",
                    component: "RecommendedTravelPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/RecommendedTravel/Add",
                    icon: "",
                    pathname: "推荐游记",
                    key: "RecommendedTravel",
                    component: "RecommendedTravelPageAdd",
                    hideInMenu: true
                },
            ]
        },
        {
            routepath: "",
            icon: "bars",
            pathname: "系统信息管理",
            key: "",
            children: [
                {
                    routepath: "/czx/SystemSetting",
                    icon: "",
                    pathname: "系统配置",
                    key: "SystemSetting",
                    component: "SystemSettingPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/SystemSetting/Add",
                    icon: "",
                    pathname: "系统配置",
                    key: "SystemSetting",
                    component: "SystemSettingPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/WelcomeScreen",
                    icon: "",
                    pathname: "欢迎界面",
                    key: "WelcomeScreen",
                    component: "WelcomeScreenPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/WelcomeScreen/Add",
                    icon: "",
                    pathname: "欢迎界面",
                    key: "WelcomeScreen",
                    component: "WelcomeScreenPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/AppVersion",
                    icon: "",
                    pathname: "APP版本",
                    key: "AppVersion",
                    component: "AppVersionPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/AppVersion/Add",
                    icon: "",
                    pathname: "APP版本",
                    key: "AppVersion",
                    component: "AppVersionPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/Feedback",
                    icon: "",
                    pathname: "用户反馈",
                    key: "Feedback",
                    component: "FeedbackPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/Feedback/Add",
                    icon: "",
                    pathname: "用户反馈",
                    key: "Feedback",
                    component: "FeedbackPageAdd",
                    hideInMenu: true
                },
            ]
        }, {
            routepath: "",
            icon: "user",
            pathname: "客户信息浏览",
            key: "",
            children: [
                {
                    routepath: "/czx/CustomerJourney",
                    icon: "",
                    pathname: "客户行程",
                    key: "CustomerJourney",
                    component: "CustomerJourneyPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/CustomerJourney/Add",
                    icon: "",
                    pathname: "客户行程",
                    key: "CustomerJourney",
                    component: "CustomerJourneyPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/AssignedFleet",
                    icon: "",
                    pathname: "分配车队",
                    key: "AssignedFleet",
                    component: "AssignedFleetPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/AssignedFleet/Add",
                    icon: "",
                    pathname: "分配车队",
                    key: "AssignedFleet",
                    component: "AssignedFleetPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/CustomerManage",
                    icon: "",
                    pathname: "客户管理",
                    key: "CustomerManage",
                    component: "CustomerManagePage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/CustomerManage/Add",
                    icon: "",
                    pathname: "客户管理",
                    key: "CustomerManage",
                    component: "CustomerManagePageAdd",
                    hideInMenu: true
                },
            ]
        },
        {
            routepath: "",
            icon: "bar-chart",
            pathname: "客户其他信息",
            key: "",
            children: [
                {
                    routepath: "/czx/CommentForm",
                    icon: "",
                    pathname: "评论表",
                    key: "CommentForm",
                    component: "CommentFormPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/CommentForm/Add",
                    icon: "",
                    pathname: "评论表",
                    key: "CommentForm",
                    component: "CommentFormPageAdd",
                    hideInMenu: true
                },
                {
                    routepath: "/czx/CustomerList",
                    icon: "",
                    pathname: "客户收藏表",
                    key: "CustomerList",
                    component: "CustomerListPage",
                    hideInMenu: false
                },
                {
                    routepath: "/czx/CustomerList/Add",
                    icon: "",
                    pathname: "客户收藏表",
                    key: "CustomerList",
                    component: "CustomerListPageAdd",
                    hideInMenu: true
                }
            ]
        },
    ]

    @computed get RouterList() {
        const RouterListArr = [];
        this.NavList.map((item, index) => RouterListArr.push(...item.children))
        return RouterListArr
    }

    @computed get RouterChildList() {
        const RouterListArr = []
        this.NavList.map((item, index) => RouterListArr.push(item.children))
        return RouterListArr
    }
}

const BackStageStore = new BackStageData()


autorun((e) => {
    console.log('登入情况', BackStageStore.isLogin)
    if (BackStageStore.isLogin) {
        console.log("绝对登入")
        localStorage.setItem("isLogin", "true")
        BackStageStore.token = localStorage.getItem("token")
        return
    } else {
        if (BackStageStore.customLoginout) {
            console.log("手动登出")
            localStorage.removeItem("isLogin")
            localStorage.removeItem("token")
            BackStageStore.token = ""
            return false
        }
        if (localStorage.getItem('isLogin')) {
            console.log("刷新导致的登入为false")
            BackStageStore.isLogin = true
            localStorage.setItem("isLogin", "true")
            BackStageStore.token = localStorage.getItem("token")
            return

        } else {
            console.log("本来就是登出状态")
        }
    }
})


export default BackStageStore