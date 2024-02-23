import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetail1Component } from './product-detail1/product-detail1.component';
import { FooterComponent } from './footer/footer.component';
import { ProductList1Component } from './product-list1/product-list1.component';
// import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductDetail3Component } from './product-detail3/product-detail3.component';
import { ProductDetail4Component } from './product-detail4/product-detail4.component';
import { ProductDetail5Component } from './product-detail5/product-detail5.component';
import { ProductDetail6Component } from './product-detail6/product-detail6.component';
// import { ProductDetail7Component } from './product-detail7/product-detail7.component';
// import { ProductDetail8Component } from './product-detail8/product-detail8.component';
// import { ProductDetail9Component } from './product-detail9/product-detail9.component';
// import { ProductDetail10Component } from './product-detail10/product-detail10.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductList3Component } from './product-list3/product-list3.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FarmerFaceComponent } from './farmer-face/farmer-face.component';
import { ProductOrderdDetailComponent } from './product-orderd-detail/product-orderd-detail.component';
import { dyComponent } from './dy/dy.component';



export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'dy', component: dyComponent},
    {path: 'home-page', component: HomePageComponent},
    { path: 'navbar', component: NavBarComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'product-list1', component:ProductList1Component },
    { path: 'product-list2', component:ProductList2Component },
    { path: 'product-list3', component:ProductList3Component },
    {path: 'product-detail1', component: ProductDetail1Component},
    {path: 'product-detail2', component: ProductDetail2Component},
    {path: 'product-detail3', component: ProductDetail3Component},
    {path: 'product-detail4', component: ProductDetail4Component},
    {path: 'product-detail5', component: ProductDetail5Component},
    {path: 'product-detail6', component: ProductDetail6Component},
    // {path: 'product-detail7', component: ProductDetail7Component},
    // {path: 'product-detail8', component: ProductDetail8Component},
    // {path: 'product-detail9', component: ProductDetail9Component},
    // {path: 'product-detail10', component:ProductDetail10Component},
    {path: 'login', component: LoginComponent},
    {path: 'new-arrival', component: NewArrivalComponent},
    {path: 'featured-products', component: FeaturedProductsComponent},
    {path: 'farmer-face', component: FarmerFaceComponent},
    {path: 'product-orderd-detail', component: ProductOrderdDetailComponent},
    // {path: 'cart', component:CartComponent }
];
