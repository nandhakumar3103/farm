import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetail1Component } from './product-detail1/product-detail1.component';
import { FooterComponent } from './footer/footer.component';
import { ProductList1Component } from './product-list1/product-list1.component';
import { LoginComponent } from './login/login.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductDetail3Component } from './product-detail3/product-detail3.component';
import { ProductDetail4Component } from './product-detail4/product-detail4.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductList3Component } from './product-list3/product-list3.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FarmerFaceComponent } from './farmer-face/farmer-face.component';
import { ProductOrderdDetailComponent } from './product-orderd-detail/product-orderd-detail.component';
import { dyComponent } from './dy/dy.component';
import { BannerVegComponent } from './banner-veg/banner-veg.component';
import { BannerSeedComponent } from './banner-seed/banner-seed.component';
import { BannerFertilizerComponent } from './banner-fertilizer/banner-fertilizer.component';
// import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'dy', component: dyComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'navbar', component: NavBarComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'product-list1', component: ProductList1Component },
    { path: 'product-list2', component: ProductList2Component },
    { path: 'product-list3', component: ProductList3Component },
    { path: 'product-detail1/:id', component: ProductDetail1Component },
    { path: 'product-detail2/:id', component: ProductDetail2Component },
    { path: 'product-detail3/:id', component: ProductDetail3Component },
    { path: 'product-detail4', component: ProductDetail4Component },
    { path: 'login', component: LoginComponent },
    { path: 'new-arrival', component: NewArrivalComponent },
    { path: 'featured-products', component: FeaturedProductsComponent },
    { path: 'farmer-face', component: FarmerFaceComponent },
    { path: 'product-orderd-detail', component: ProductOrderdDetailComponent },
    { path: 'banner-veg', component: BannerVegComponent },
    { path: 'banner-seeds', component: BannerSeedComponent },
    { path: 'banner-fertilizer', component: BannerFertilizerComponent },
    // {path: 'cart', component:CartComponent }
];
