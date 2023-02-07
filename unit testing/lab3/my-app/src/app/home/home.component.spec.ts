import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';

import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { HomeComponent } from './home.component';

fdescribe('Home Comopenet', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let location: Location;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    router.initialNavigation();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test about us component', fakeAsync(() => {
    var para = de.query(By.css('p'));
    expect(para.nativeElement.textContent).toEqual('home works!');
  }));
  it('test anchor tag', fakeAsync(() => {
    var links = de.queryAll(By.directive(RouterLinkWithHref));
    links[0].nativeElement.click();
    tick(100);
    expect(location.path()).toEqual('/user');
  }));
});
