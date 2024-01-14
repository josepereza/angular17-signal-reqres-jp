import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
service=inject(UsersService)  
route= inject(ActivatedRoute)
selectedId:number=0;
user=toSignal(
  this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getUser(this.selectedId);
    })
  )
)
}
