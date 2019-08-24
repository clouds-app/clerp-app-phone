import Home from '_c/main'
import Login from '@/views/login/login.vue'
import Report from '@/views/report/report.vue'
import CompFactoryReport from '@/views/report/frame/compfactoryreport/compfactoryreport.vue'
import DeliveryQuery from '@/views/report/frame/deliveryquery/deliveryquery.vue'
import PaperOrderQuery from '@/views/report/frame/paperorderquery/paperorderquery.vue'
import SumOfCustArrears from '@/views/report/frame/sumofcustarrears/sumofcustarrears.vue'
import Purchases from '@/views/verify/frame/purchases/purchases.vue'
import Material from '@/views/verify/frame/material/material.vue'
import Tax from '@/views/verify/frame/tax/App.vue'
import PaperIn from '@/views/warehouse/frame/paperIn/App.vue'
import PaperOB from '@/views/warehouse/frame/paperOB/App.vue'
import boxIn from '@/views/warehouse/frame/boxIn/App.vue'
import Compfactorykanban from '@/views/report/frame/compfactorykanban/compfactorykanban.vue'

export default[
    {
      path: '/',
      redirect: { name: 'index' }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      // children:[
      //   {
      //       path:'about',
      //       component: () => import(/* webpackChunkName: "about" */ '@/views/index/About.vue')
      //   },
      
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
     // component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
     
    },
    // {
    //   path: '/order',
    //   name: 'order',
    //   //component: order,
    //   component: () => import(/* webpackChunkName: "order" */ '@/views/order/order.vue'),
     
    // },
    {
      path: '/report',
      name: 'report',
      component: Report,
      //component: () => import(/* webpackChunkName: "report" */ '@/views/report/report.vue'),
    },
    {
      //全厂综合报表 CompFactoryReport --暫時注銷，需求變更
      path: '/compFactoryReport',
      name: 'compFactoryReport',
      component: CompFactoryReport,
     // component: () => import(/* webpackChunkName: "compFactoryReport" */ '@/views/report/frame/s_compFactoryReport/App.vue'),
    },
    {
      //全厂综合报表 NEW CompFactoryReport
      path: '/compfactorykanban',
      name: 'compfactorykanban',
      component: Compfactorykanban,
     // component: () => import(/* webpackChunkName: "compFactoryReport" */ '@/views/report/frame/s_compFactoryReport/App.vue'),
    },
    {
      // 送货查询 deliveryQuery
      path: '/deliveryQuery',
      name: 'deliveryQuery',
      component: DeliveryQuery,
      //component: () => import(/* webpackChunkName: "deliveryQuery" */ '@/views/report/frame/s_deliveryQuery/App.vue'),
    },
    {
      //订单查询 paperOrderQuery
      path: '/paperOrderQuery',
      name: 'paperOrderQuery',
      component: PaperOrderQuery,
      //component: () => import(/* webpackChunkName: "paperOrderQuery" */ '@/views/report/frame/s_paperOrderQuery/App.vue'),
    },
    {
      //客户欠款汇总表 SumOfCustArrears
      path: '/sumOfCustArrears',
      name: 'sumOfCustArrears',
      component: SumOfCustArrears,
     // component: () => import(/* webpackChunkName: "sumOfCustArrears" */ '@/views/report/frame/s_sumOfCustArrears/App.vue'),
    },{
			path: '/purchases',
			name: 'purchases',
			component: Purchases
		},{
			path:'/material',
			name: 'material',
			component: Material
		},{
			path:'/tax',
			name: 'tax',
			component: Tax
		},{
			path:'/paperIn',
			name:'paperIn',
			component:PaperIn
		},{
			path:'/paperOB',
			name:'paperOB',
			component:PaperOB
		},{
			path:'/boxIn',
			name:'boxIn',
			component:boxIn
		}
  ]