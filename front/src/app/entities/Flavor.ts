export class Flavor {

  public id: number;
  public name: string;
  public price: string;

  constructor($id: number, $name: string, $price: string) {
    this.id = $id;
    this.name = $name;
    this.price = 'R$' + $price;
  }

  public get $id(): number {
    return this.id;
  }

  public set $id(value: number) {
    this.id = value;
  }

  public get $name(): string {
    return this.name;
  }

  public set $name(value: string) {
    this.name = value;
  }

  public get $price(): string {
    return this.price;
  }

  public set $price(value: string) {
    this.price = value;
  }

}
