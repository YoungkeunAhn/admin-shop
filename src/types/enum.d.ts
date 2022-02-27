export type SignInDataType = {
  shopid: string
  passwd: string

  shopname: string //매장이름
  accountowner: string //예금주
  accountbankId: string //은행Id
  accountnum: string //계좌번호
  zipid: number //우편번호
  address: string //매장주소
  businessnum: string //사업자번호
  category: string //thru/parking/oiling/tolling
  havedrivethru: number //드라이스 쓰루 여부
  havepark: number //주차장 여부
  holiday: string //휴일
}

export type OrderDetailDataType = {
  orderid: number
  /*OrderState 0:무효 10:주문접수 20:상품준비완료 30:DT진입 40:상품수령 50:완료 60:취소*/
  orderstate: number
  price: number
  /*유저 id는 number가 아닌 string 아닌가??? */
  /*그리고 userid가 아닌 주문자 name이 들어감 */
  userid: number
  /*goods정보들이 들어가 있어야함 -> 메뉴 이름, */
  goodslist: Array<{ amount: number; goosid: number }>
  carnum: string
  category: string //thru/parking/oiling
  dateorder: string //사용자가 주문한 시간
  datefinish: string //픽업한 시간
}

export type GoodsDataType = {
  goodsid: number
  goodsname: string
  image: string
  discount: number
  listprice: number
  realprice: number
}

export type ShopInfoDataType = {
  shopid: string
  passwd: string
}
