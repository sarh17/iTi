// import { DebugElement } from '@angular/core';
// import {
//   ComponentFixture,
//   fakeAsync,
//   TestBed,
//   tick,
// } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { Router, RouterLinkWithHref } from '@angular/router';
// import { Location } from '@angular/common';

// import { RouterTestingModule } from '@angular/router/testing';
// import { routes } from './app-routing.module';
// import { AboutusComponent } from './aboutus/aboutus.component';

// fdescribe('FirstComponent', () => {
//   let component: AboutusComponent;
//   let fixture: ComponentFixture<AboutusComponent>;
//   let de: DebugElement;
//   let location: Location;
//   let router: Router;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AboutusComponent],
//       imports: [RouterTestingModule.withRoutes(routes)],
//     }).compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutusComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     de = fixture.debugElement;
//     location = TestBed.get(Location);
//     router = TestBed.get(Router);
//     router.initialNavigation();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('test that the routing works on click on anchor tag', fakeAsync(() => {
//     var para = de.query(By.css('p'));
//     expect(para.nativeElement.textContent).toEqual('aboutus works!');
//   }));
// });
