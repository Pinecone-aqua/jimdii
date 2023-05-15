export class MembershipDto {
  public fitnessId!: string;
  public userId!: string;
  public price!: {
    duration: string;
    price: number;
  };
  public discount: {
    name: string;
    discount: number;
  };
}
