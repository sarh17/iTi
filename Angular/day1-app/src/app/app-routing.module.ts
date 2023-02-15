import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MathComponent } from './math/math.component';
import { MoviesComponent } from './movies/movies.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductComponent,
    children: [],
  },
  {
    path: 'products/:pid',
    pathMatch: 'full',
    component: ProductDetailsComponent,
  },
  { path: 'about-us', pathMatch: 'full', component: AboutUsComponent },
  { path: 'contact-us', pathMatch: 'full', component: ContactUsComponent },
  { path: 'math', pathMatch: 'full', component: MathComponent },
  { path: 'movies', pathMatch: 'full', component: MoviesComponent },
  { path: 'movies/:id', pathMatch: 'full', component: MovieDetailsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
