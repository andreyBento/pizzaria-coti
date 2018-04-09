import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

@Injectable()
export class AddToDom {

  componentRef: any;
  createdComponents: Array<any> = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  appendComponent(component: any, idParent: string) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.createdComponents.push(this.componentRef);

    // 4. Append DOM element to the body
    document.getElementById(idParent).appendChild(domElem);
  }

  removeComponent() {
    const id = this.createdComponents.length - 1;

    this.appRef.detachView(this.createdComponents[id].hostView);
    this.createdComponents[id].destroy();

    this.createdComponents.pop();
  }

}
