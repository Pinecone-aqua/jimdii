export class MembershipDto {
  public fitness_id!: string;
  public user_id!: string;
  public price!: {
    duration: string;
    price: number;
  };
  public discount: {
    name: string;
    discount: number;
  };
}
