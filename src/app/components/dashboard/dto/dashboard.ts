export class DashboardDTO {
  orderCount;
  productCount;
  totalRevenue;

  constructor(dashboardValue?:any){
    dashboardValue = dashboardValue || {};


    this.orderCount  = dashboardValue.orderCount || '';
    this.productCount  = dashboardValue.productCount || '';
    this.totalRevenue  = dashboardValue.totalRevenue || '';
  }
}
