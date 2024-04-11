import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutoComponent } from './adicionar-produto.component';

describe('CadastroProdutoComponent', () => {
  let component: AdicionarProdutoComponent;
  let fixture: ComponentFixture<AdicionarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
