export type SideMenuType = {
  title: string
  icon: string
  subMenu?: Array<{ label: string; url: string }>
}

export const sideMenu: SideMenuType[] = [
  { title: '대시보드', icon: 'assessment' },
  {
    title: '픽업시스템',
    icon: 'shopping_basket',
    subMenu: [
      { label: '실시간 주문 현황', url: '/order/list' },
      { label: '주문 목록', url: '/order/history' },
      { label: '리뷰 관리', url: '/order/review-manage' },
    ],
  },
  {
    title: '지점관리',
    icon: 'storefront',
    subMenu: [
      { label: '지점 정보 수정', url: '/my-store' },
      { label: '메뉴 관리', url: '/my-store/goods' },
      { label: '정산 관리', url: '/my-store/work-out' },
      { label: '카메라 목록', url: '/my-store/camera' },
    ],
  },
  {
    title: '서비스이용',
    icon: 'notifications',
    subMenu: [
      { label: '공지사항', url: '/bbs/notice' },
      { label: '문의하기', url: '/bbs/qna' },
    ],
  },
]
