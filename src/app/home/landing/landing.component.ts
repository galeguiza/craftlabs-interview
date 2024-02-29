import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './landing.models';
import { LandingsPipesPipe } from './landings.pipes.pipe';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingsPipesPipe],
  providers: [ProductService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  private productService = inject(ProductService);
  public products: Product[] = [];
  public productsHeaders: string[] = [];
  public products$: Observable<Product[]> = this.productService.fetchPoductList();

  ngOnInit(): void {
    this.productService.fetchPoductList()
      .pipe(
        filter((productList) => !!productList?.length),
        tap((productList) => {
          this.products = productList;
          this.productsHeaders = Object.keys(productList[0]);
        }),
      )
      .subscribe();
  }
}
