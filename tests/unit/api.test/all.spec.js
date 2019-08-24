import {getValidatorToken,login,getMenuByToken,getCustomerInfo} from  '@/api/user'
import md5 from 'js-md5';
import {setLocalStorage,getLocalStorage } from '@/libs/util'
let currentUUId=''
let userToken =''
//调用expect.assertions(1)，它能确保在异步的测试用例中，
//有一个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。
  test('getValidatorToken(admin) 获取随机码，用于MD5 加密', () => {
    expect.assertions(1);
    const params = {
        userId:'admin'
      }
    return getValidatorToken(params)
      .then(data => {
        console.warn('getValidatorToken:'+JSON.stringify(data.data))
        currentUUId =data.data.data
        expect(data.data.success).toBe(true);
      });
  })

  
//  describe块称为"测试套件"(test suite), 表示一组相关的测试. 它是一个函数, 
//   第一个参数是测试套件的名称(通常写测试===组件名称=== , 这里即为Counter.js),
//   第二个参数是一个实际执行的函数.

// it块称为"测试用例"(test case), 表示一个单独的测试, 是测试的最小单位. 它也是一个函数,
//   第一个参数是测试用例的名称(通常 ===用例描述=== 你的断言结果, 这里即为"点击按钮后, count的值应该为1"), 
//   第二个参数是一个实际执行的函数.

//  链接：https://www.jianshu.com/p/38a37d5fccb2


//以expect()方法开头的就是断言.所谓断言, 就是判断源码的实际执行结果与预期结果是否一致, 如果不一致, 就会抛出错误.
//Mocha并不限制你需要使用哪一种断言库,
//Vue的脚手架提供的断言库是sino-chai, 是一个基于Chai的断言库, 并且我们指定使用的是它的expect断言风格.

  test('login() 用户登录', () => {
    expect.assertions(1);
    let passWord ='123456'
    let md5Pwd = md5(md5(passWord+currentUUId)+currentUUId)
    let params={
             userId:'admin',
             pwd:md5Pwd
           }
    return login(params)
      .then(data => { 
        console.warn('login:'+JSON.stringify(data))
        userToken = data.data.data.token
      //  console.log('login ====userToken:'+data.data.data.token)
        setLocalStorage('TOKEN',userToken)
        expect(data.data.success).toBe(true);
      });
  })

  

  test('getCustomerInfo() 获取过滤选择用户列表', () => {
    expect.assertions(1);
    return getCustomerInfo()
      .then(data => {
        //console.log('getLocalStorage:'+getLocalStorage('TOKEN'))
        //console.warn('getCustomerInfo:'+JSON.stringify(data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.error('getCustomerInfo err:'+JSON.stringify(err))
      });
  })

  
  test('getMenuByToken() 根据token,获取用户功能菜单', () => {
     expect.assertions(1);
    let params={

    }
     return getMenuByToken(params)
       .then(data => {
         //console.warn('getMenuByToken:'+JSON.stringify(data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.error('getMenuByToken err:'+JSON.stringify(err))
       });
   })

   //========================report.js=============================
   import {getAccRAnalyzer,getFactoryKanban,getPaperCOQueryAnaly,getPaperDeliTotal} from '@/api/report'

//调用expect.assertions(1)，它能确保在异步的测试用例中，
//有一个断言会在回调函数中被执行。这在进行异步代码的测试中十分有效。
test('getAccRAnalyzer(admin) 客户欠款汇总表', () => {
    expect.assertions(1);
    const params = {
        startDate:'2017-01-01',
        endDate:'2019-01-01',
        ctCode:'',
        token:''
      }
    return getAccRAnalyzer(params)
      .then(data => {
       // console.warn('getAccRAnalyzer:'+JSON.stringify(data.data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.warn('getAccRAnalyzer err:'+JSON.stringify(err))
      });
  })

/**
 * @desc all.spec 描述 全厂综合报表
 * 
 * @params 参数
 * 
 * @author Andy Huang
 * 
 * @created 2019/08/22 10:34:36
 */

  test('getFactoryKanban 全厂综合报表', () => {
    expect.assertions(1);
    const params = {
   
      }
    return getFactoryKanban(params)
      .then(data => {
        //console.warn('getFactoryKanban:'+JSON.stringify(data.data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.warn('getFactoryKanban err:'+JSON.stringify(err))
      });
  })

  test('getPaperCOQueryAnaly 订单查询', () => {
    expect.assertions(1);
    const params = {
      startDate:'2017-01-01',
      endDate:'2019-01-01',
      ctCode:'',
      token:'',
      mode:0,
      size:20 
      }
    return getPaperCOQueryAnaly(params)
      .then(data => {
       // console.warn('getPaperCOQueryAnaly:'+JSON.stringify(data.data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.warn('getPaperCOQueryAnaly err:'+JSON.stringify(err))
      });
  })

  test('getPaperDeliTotal 送货查询', () => {
    expect.assertions(1);
    const params = {
      startDate:'2017-01-01',
      endDate:'2019-01-01',
      ctCode:'',
      token:'',
      }
    return getPaperDeliTotal(params)
      .then(data => {
        //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.warn('getPaperDeliTotal err:'+JSON.stringify(err))
      });
  })

  //========================boxIn.js=============================
  import {aspSaveBoxIn,boxScanOrder,aspSaveBoxOutTemp,aspSaveBoxHalfProdIn,findUser,findCar} from '@/api/boxIn'

  test('aspSaveBoxIn 添加出入库', () => {
   //expect.assertions(1);
    const params = {
      bi_Group:'10',
      bi_WorkNo:'10',
      bi_InQty:'10'
      }
    return aspSaveBoxIn(params)
      .then(data => {
        //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
        expect(data.data.success).toBe(true);
      }).catch(err=>{
        console.warn('aspSaveBoxIn err:'+JSON.stringify(err))
      });
  })

  
  test('boxScanOrder boxScanOrder', () => {
    //expect.assertions(1);
     const params = {
        bi_WorkNo:'10',
        bc_No:'10',
        Flag:'1'
       }
     return boxScanOrder(params)
       .then(data => {
         //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.warn('boxScanOrder err:'+JSON.stringify(err))
       });
   })

   test('aspSaveBoxOutTemp aspSaveBoxOutTemp', () => {
    //expect.assertions(1);
     const params = {
      bd_CarNo:'10',
      bd_Follower:'10',
      bd_Loador:'10',
      bd_SenderID:'10',
      OrderQtyStr:'10',
      NoStr:'10',
       }
     return aspSaveBoxOutTemp(params)
       .then(data => {
         //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.warn('aspSaveBoxOutTemp err:'+JSON.stringify(err))
       });
   })

   test('aspSaveBoxHalfProdIn aspSaveBoxHalfProdIn', () => {
    //expect.assertions(1);
     const params = {
      hp_bi_WorkNo:'10',
      hp_wpl_Id:'10',
      hp_mo_ID:'10',
      hp_tt_Code:'10',
      Qty:'10',
      Remark:'10',
       }
     return aspSaveBoxHalfProdIn(params)
       .then(data => {
         //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.warn('aspSaveBoxHalfProdIn err:'+JSON.stringify(err))
       });
   })

   test('findUser findUser', () => {
    //expect.assertions(1);
     const params = {
      workType:'10'
       }
     return findUser(params)
       .then(data => {
         //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.warn('findUser err:'+JSON.stringify(err))
       });
   })

   
   test('findCar findCar', () => {
    //expect.assertions(1);
     const params = {
      
       }
     return findCar(params)
       .then(data => {
         //console.warn('getPaperDeliTotal:'+JSON.stringify(data.data))
         expect(data.data.success).toBe(true);
       }).catch(err=>{
         console.warn('findCar err:'+JSON.stringify(err))
       });
   })

     //========================paperIn.js=============================