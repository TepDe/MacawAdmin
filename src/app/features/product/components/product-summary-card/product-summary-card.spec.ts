import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryCard } from './product-summary-card';

describe('ProductSummaryCard', () => {
  let component: ProductSummaryCard;
  let fixture: ComponentFixture<ProductSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSummaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
