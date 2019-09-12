# Loading comopnents from microapps without routing
If you want to load a component from a child app into the shell without routing you can load the module using `loadScript` but then create a component from the child app manually. This is essentially exactly what the router is doing under the covers. A more complete description of how this whole process works can be found at https://netbasal.com/the-need-for-speed-lazy-load-non-routable-modules-in-angular-30c8f1c33093

In the parent app:

```typescript
@Component({
    selector: 'app-root',
    template: `
    <h1>Component will be placed below</h1>
    <template #outlet></template>
    `
})
export class AppComponent {
/* Since you aren't using routing, you need a way to indicate where the component will be rendered which can be done by adding <template #outlet></template> into your component's template.*/
 @ViewChild('outlet', { read: ViewContainerRef }) outlet: ViewContainerRef;

  constructor(private injector: Injector) {
    this.load();
  }

  load() {
      // url to deployed child app
    const url = 'http://localhost:4300/main.js';
    const namespace = 'extapp';
    const moduleName = 'AppModule';

    loadScript(url, namespace, moduleName).then((moduleFactory: NgModuleFactory<any>) => {
      // NOTE: In the module in the child app, you need a way to expose which component
      // can be loaded dynamically since you aren't using route configurations. See below
      const entryComponent = (<any>moduleFactory.moduleType).component;
      if (!entryComponent) {
        return Promise.reject(`No component found in module ${url}`);
      }
      // use the module factory loaded from the child to create the module
      const moduleRef = moduleFactory.create(this.injector);
      // Once you have the module and the component to renderer, you can create a component
      // factory that you will use to create your component
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      // remove anything that was already created in your outlet
      this.outlet.clear();
      // create your component
      this.outlet.createComponent(compFactory);
      // NOTE: createComponent will return a ComponentRef from which you can get its 'instance'
      // property. It will refer to the component you just created. You can then set its properties
      // and call it's lifecycle methods: ngInit, ngOnChanges, etc. since they won't get call automatically

    });
  }
}
```

For completeness, here is where you would add a static component property to the child module:

In child's `src/app/app.external.module`:

```typescript
@NgModule({
    declarations: [MyComponent],
    exports: [MyComponent],
    entryComponents: [MyComponent]
})
export class AppModule {

  static component: Type<MyComponent> = MyComponent;
}
```