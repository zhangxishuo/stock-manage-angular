import {Component, OnInit} from '@angular/core';
import {Stock} from '../../model/stock';
import {Router} from '@angular/router';
import {StockService} from '../../service/stock.service';

@Component({
    selector: 'app-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

    public stocks: Array<Stock>;

    constructor(private router: Router,
                private stockService: StockService) {
    }

    ngOnInit() {
        this.stocks = this.stockService.getStocks();
    }

    create() {
        this.router.navigateByUrl('/stock/0');
    }

    update(stock: Stock) {
        this.router.navigateByUrl('/stock/' + stock.id);
    }

}
