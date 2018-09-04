import {observable, computed, autorun, action} from "mobx";

// import {observer} from "mobx-react";

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
            pathname: "学校管理",
            key: "",
            children: [
                {
                    routepath: "/travel-web/page/School/SchoolList",
                    icon: "",
                    pathname: "学校列表",
                    key: "School",
                    component: "SchoolList"
                },
                {
                    routepath: "/travel-web/page/Apply/ApplyList",
                    icon: "",
                    pathname: "申请列表",
                    key: "Apply",
                    component: "ApplyList"
                },
                {
                    routepath: "/travel-web/page/Log/ControllerLog",
                    icon: "",
                    pathname: "操作日志",
                    key: "Log",
                    component: "ControlLog"
                },
            ]
        },
        {
            routepath: "",
            icon: "info-circle-o",
            pathname: "文章管理",
            key: "",
            children: [
                {
                    routepath: "/travel-web/page/Article/ArticleList",
                    icon: "",
                    pathname: "文章列表",
                    key: "Article",
                    component: "ArticleList"
                },
                {
                    routepath: "/travel-web/page/Review/ArticleReviewList",
                    icon: "",
                    pathname: "待审核文章列表",
                    key: "Review",
                    component: "ArticleList"
                },

            ]
        }
    ]

    @computed get RouterList() {
        const RouterListArr = [];
        this.NavList.map((item, index) => RouterListArr.push(...item.children))
        // console.log(RouterListArr)
        return RouterListArr
    }

    @computed get RouterChildList() {
        const RouterListArr = []
        this.NavList.map((item, index) => RouterListArr.push(item.children))
        // console.log(RouterListArr)
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