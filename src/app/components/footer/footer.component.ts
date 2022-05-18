import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[FooterService]
})
export class FooterComponent implements OnInit {

  constructor(private footerService:FooterService) { }

  ngOnInit(): void {
    this.footer_all_data = this.footerService.get_all_data()
  }
  footer_all_data!:Observable<any[]>;
}
