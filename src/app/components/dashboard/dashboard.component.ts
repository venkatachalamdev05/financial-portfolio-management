import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Investment } from 'src/app/state/portfolio.state';
import { Chart, registerables } from 'chart.js';
import { FacadeService } from 'src/app/facadeService/facade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  investments$!: Observable<Investment[]>;

  constructor(private router: Router, private facade: FacadeService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.investments$ = this.facade.fetchInvestmentData();
    this.investments$.pipe(
      map((investments) => this.transformChartData(investments))
    ).subscribe((chartData) => {
      this.renderAssetAllocationChart(chartData);
    });
  }

  navigate() {
    this.router.navigate(['investment-form']);
  }

  transformChartData(investments: Investment[]): { labels: string[], data: number[] } {
    const labels = investments.map((inv) => inv.assetType);
    const data = investments.map((inv) => inv.quantity);
    return { labels, data };
  }

  renderAssetAllocationChart(chartData: { labels: string[], data: number[] }) {
    const ctx = document.getElementById('assetAllocationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: chartData.labels,
        datasets: [
          {
            data: chartData.data,
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }

  calculateMarketTrendData(investments: Investment[]): { labels: string[], data: number[] } {
    const trendLabels: string[] = [];
    const trendData: number[] = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      trendLabels.push(date.toLocaleString('default', { month: 'short', year: '2-digit' }));
    }
    trendLabels.forEach((label) => {
      const monthlyValue = investments.reduce((sum, inv) => {
        const invDate = new Date(inv.date).toLocaleString('default', { month: 'short', year: '2-digit' });
        if (invDate <= label) {
          const currentPrice = inv.currentPrice ?? inv.purchasePrice;
          return sum + (inv.quantity * currentPrice);
        }
        return sum;
      }, 0);
      trendData.push(monthlyValue);
    });

    return { labels: trendLabels, data: trendData };
  }
}
