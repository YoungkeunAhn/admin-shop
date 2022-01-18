export type SideMenuType = {
  title: string;
  icon: string;
  subMenu?: string[];
};

export const sideMenu: SideMenuType[] = [
  { title: "대시보드", icon: "assessment" },
  {
    title: "픽업시스템",
    icon: "shopping_basket",
    subMenu: ["실시간 주문 현황", "주문 목록", "리뷰 관리"],
  },
  {
    title: "지점관리",
    icon: "storefront",
    subMenu: ["지점 정보 수정", "메뉴 관리", "정산 관리", "카메라 목록"],
  },
  {
    title: "서비스이용",
    icon: "notifications",
    subMenu: ["공지사항", "문의하기"],
  },
];
