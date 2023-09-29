import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-fournisseurs',
  templateUrl: './nouvelle-cmd-fournisseurs.component.html',
  styleUrls: ['./nouvelle-cmd-fournisseurs.component.scss']
})
export class NouvelleCmdFournisseursComponent implements OnInit{
  origin='';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
  }
  saveClick(): void{
   
  }
  cancelClick(): void {
    
       this.router.navigate(['commandes-fournisseurs']);
    
  }
}
